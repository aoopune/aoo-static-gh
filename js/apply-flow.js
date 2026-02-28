/**
 * Apply flow (parent) – runs in index.html only.
 * Receives selection from iframe via postMessage. Handles disclaimer, OAuth, Firebase/Firestore, Razorpay or QR popup, success modal.
 * State machine: IDLE → AUTH_REQUIRED → AUTH_COMPLETED → PAYMENT_PENDING → PAYMENT_COMPLETED
 */
(function () {
  'use strict';

  var FIREBASE_CONFIG = window.FIREBASE_CONFIG || {
    apiKey: 'AIzaSyDclPn8yIT5zZ7p4mPB3gd4QG7yxy765uU',
    authDomain: 'aoo-loan-applications.firebaseapp.com',
    projectId: 'aoo-loan-applications',
    storageBucket: 'aoo-loan-applications.firebasestorage.app',
    messagingSenderId: '265777801986',
    appId: '1:265777801986:web:dafe7d11343d1540a1f01b'
  };
  var USE_QR_PAYMENT = window.USE_QR_PAYMENT === true;
  var RAZORPAY_KEY_ID = window.RAZORPAY_KEY_ID;
  var APPLICATION_PRICE_PAISE = window.APPLICATION_PRICE_PAISE || 9900;
  var APPLY_STATE_KEY = 'aoo_apply_state_v1';

  var firebaseAuth = null;
  var firebaseFirestore = null;
  if (typeof window !== 'undefined' && window.__aooAuth) {
    firebaseAuth = window.__aooAuth;
    firebaseFirestore = window.__aooFirestore || null;
    window.__aooRedirectResultPromise = window.__aooAuth.getRedirectResult();
  }

  var applyFlowInitialized = false;
  var resumeInProgress = false;
  var paymentFlowStarted = false;
  var flowState = 'IDLE';

  function getIframe() {
    return document.querySelector('iframe.loan-table-embed');
  }

  function postToIframe(msg) {
    var f = getIframe();
    if (f && f.contentWindow) f.contentWindow.postMessage(msg, '*');
  }

  function setButtonEnabled(enabled) {
    postToIframe({ type: 'AOO_SET_BUTTON_STATE', disabled: !enabled });
  }

  function showToast(message, isError) {
    var existing = document.querySelector('.apply-flow-toast');
    if (existing) existing.remove();
    var el = document.createElement('div');
    el.className = 'apply-flow-toast' + (isError ? ' apply-flow-toast-error' : '');
    el.style.cssText = 'position:fixed;bottom:1rem;left:50%;transform:translateX(-50%);padding:0.6rem 1rem;border-radius:8px;background:var(--surface,#fff);border:1px solid var(--border,#e5e7eb);box-shadow:0 4px 6px -2px rgba(0,0,0,0.05);font-size:0.9rem;z-index:10002;max-width:90vw;';
    if (isError) { el.style.borderColor = '#b91c1c'; el.style.background = '#fef2f2'; }
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 4000);
  }

  function savePendingApplication(offers, inputData) {
    try {
      var state = { offers: offers || [], inputData: inputData || {}, ts: Date.now() };
      window.localStorage.setItem(APPLY_STATE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function clearPendingApplication() {
    try {
      window.localStorage.removeItem(APPLY_STATE_KEY);
    } catch (e) {}
  }

  function loadPendingApplication() {
    try {
      var raw = window.localStorage.getItem(APPLY_STATE_KEY);
      if (!raw) return null;
      var state = JSON.parse(raw);
      if (!state || !state.offers || !state.offers.length) return null;
      if (state.ts && Date.now() - state.ts > 15 * 60 * 1000) {
        clearPendingApplication();
        return null;
      }
      return state;
    } catch (e) {
      return null;
    }
  }

  function getDisclaimerHtml() {
    return (
      '<div class="apply-flow-disclaimer">' +
      '<p><strong>Disclaimer</strong></p>' +
      '<p>The loan features shown on home page are indicative and are currently assessed without using your personal information.</p>' +
      '<p>Final offer terms (With or without collateral, interest rate, loan amount, etc.) will be confirmed after reviewing your complete application i.e., personal information such as:</p>' +
      '<ul><li>Your academic profile</li><li>Co-applicant financial documents</li><li>Property/Collateral value (If secured loan)</li><li>CIBIL report of you & your co-applicant</li><li>Others, as required by the lender</li></ul>' +
      '<p>By proceeding, you agree to share the required information for assessment.</p>' +
      '<div class="apply-flow-disclaimer-actions">' +
      '<button type="button" class="apply-flow-btn apply-flow-btn-cancel">Cancel</button>' +
      '<button type="button" class="apply-flow-btn apply-flow-btn-continue">Continue & Pay</button>' +
      '</div></div>'
    );
  }

  function showDisclaimerModal(onContinue) {
    var existing = document.querySelector('.apply-flow-backdrop');
    if (existing) existing.remove();
    var backdrop = document.createElement('div');
    backdrop.className = 'apply-flow-backdrop';
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('role', 'dialog');
    backdrop.innerHTML = '<div class="apply-flow-modal apply-flow-modal-disclaimer">' + getDisclaimerHtml() + '</div>';
    var modal = backdrop.querySelector('.apply-flow-modal');
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) backdrop.remove();
    });
    modal.addEventListener('click', function (e) { e.stopPropagation(); });
    var cancelBtn = backdrop.querySelector('.apply-flow-btn-cancel');
    var continueBtn = backdrop.querySelector('.apply-flow-btn-continue');
    cancelBtn.addEventListener('click', function () { backdrop.remove(); });
    continueBtn.addEventListener('click', function () {
      backdrop.remove();
      if (typeof onContinue === 'function') onContinue();
    });
    document.body.appendChild(backdrop);
  }

  function ensureApplyFlowStyles() {
    if (document.getElementById('apply-flow-styles')) return;
    var style = document.createElement('style');
    style.id = 'apply-flow-styles';
    style.textContent = [
      '.apply-flow-ctx, :root { --surface: #ffffff; --border: #e5e7eb; --shadow: 0 1px 3px rgba(0,0,0,0.04); --shadow-lg: 0 4px 6px -2px rgba(0,0,0,0.05); --radius-lg: 20px; --text: #000000; --accent: #0d9488; --accent-hover: #0f766e; --bg-subtle: #f1f5f9; }',
      '.apply-flow-backdrop { position: fixed; inset: 0; background: rgba(15,23,42,0.4); backdrop-filter: blur(4px); z-index: 10001; display: flex; align-items: center; justify-content: center; padding: 1rem; overflow-y: auto; }',
      '.apply-flow-modal { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); max-width: min(520px, 94vw); max-height: 85vh; overflow-y: auto; padding: 1.25rem; font-family: "Montserrat", sans-serif; }',
      '.apply-flow-disclaimer p { margin: 0 0 0.75rem 0; } .apply-flow-disclaimer ul { margin: 0.5rem 0 1rem 1.25rem; }',
      '.apply-flow-disclaimer-actions { display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border); }',
      '.apply-flow-btn { padding: 0.5rem 1.25rem; border-radius: 100px; font-weight: 600; font-size: 0.875rem; cursor: pointer; border: 1px solid var(--border); background: var(--surface); color: var(--text); transition: background 0.2s, border-color 0.2s; }',
      '.apply-flow-btn-continue { background: var(--accent); color: #fff; border-color: var(--accent); } .apply-flow-btn-continue:hover { background: var(--accent-hover); border-color: var(--accent-hover); }',
      '.apply-flow-btn-cancel:hover { background: var(--bg-subtle); }',
      '.apply-flow-payment-success-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,23,42,0.5); backdrop-filter: blur(4px); z-index: 10003; display: flex; align-items: center; justify-content: center; padding: 1rem; overflow-y: auto; box-sizing: border-box; }',
      '.apply-flow-payment-success-modal { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); max-width: min(480px, 95vw); width: 100%; padding: 1.5rem; font-family: "Montserrat", sans-serif; }',
      '.apply-flow-payment-success-modal h2 { margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 700; }',
      '.apply-flow-payment-success-modal .payment-success-body { margin: 0 0 1.25rem 0; font-size: 0.9rem; line-height: 1.5; }',
      '.apply-flow-payment-success-modal .payment-success-body p { margin: 0 0 0.5rem 0; }',
      '.apply-flow-payment-success-modal .payment-success-body a { color: var(--accent); }',
      '.apply-flow-payment-success-modal .apply-flow-btn-got-it { padding: 0.6rem 1.5rem; min-height: 44px; border-radius: 100px; font-weight: 600; font-size: 0.9rem; cursor: pointer; border: none; background: var(--accent); color: #fff; }',
      '.apply-flow-payment-success-modal .apply-flow-btn-got-it:hover { background: var(--accent-hover); }',
      '@media (max-width: 640px) { .apply-flow-backdrop { padding: 0.5rem; align-items: flex-end; } .apply-flow-modal { max-height: 92vh; border-radius: var(--radius-lg) var(--radius-lg) 0 0; } .apply-flow-btn { min-height: 44px; min-width: 44px; } }'
    ].join('\n');
    document.head.appendChild(style);
  }

  var FIREBASE_SDK_URLS = [
    'https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js'
  ];

  function ensureFirebase() {
    if (firebaseAuth && firebaseFirestore) return true;
    if (typeof window !== 'undefined' && window.__aooAuth) {
      firebaseAuth = window.__aooAuth;
      firebaseFirestore = window.__aooFirestore || null;
      return !!(firebaseAuth && firebaseFirestore);
    }
    var fb = typeof window !== 'undefined' ? window.firebase : undefined;
    if (typeof fb !== 'undefined' && FIREBASE_CONFIG) {
      try {
        var app = window.__aooFirebaseApp || fb.initializeApp(FIREBASE_CONFIG);
        window.__aooFirebaseApp = app;
        firebaseAuth = fb.auth(app);
        firebaseFirestore = fb.firestore(app);
        window.__aooAuth = firebaseAuth;
        window.__aooFirestore = firebaseFirestore;
        return true;
      } catch (e) { return false; }
    }
    return false;
  }

  /** Load Firebase SDK scripts dynamically and init. Resolves when Firebase is ready or rejects on failure. Never resolves false in a browser. */
  function loadFirebaseAndInit() {
    if (ensureFirebase()) return Promise.resolve(true);
    if (typeof window === 'undefined') return Promise.reject(new Error('Not in a browser'));
    if (window.__aooFirebaseLoadPromise) return window.__aooFirebaseLoadPromise;
    var promise = new Promise(function (resolve, reject) {
      function tryInit() {
        if (ensureFirebase()) {
          resolve(true);
          return;
        }
        var fb = window.firebase;
        if (typeof fb !== 'undefined' && FIREBASE_CONFIG) {
          try {
            var app = window.__aooFirebaseApp || fb.initializeApp(FIREBASE_CONFIG);
            window.__aooFirebaseApp = app;
            firebaseAuth = fb.auth(app);
            firebaseFirestore = fb.firestore(app);
            window.__aooAuth = firebaseAuth;
            window.__aooFirestore = firebaseFirestore;
            resolve(true);
          } catch (e) {
            reject(e);
          }
          return;
        }
        reject(new Error('Firebase not configured'));
      }
      function loadNext(i) {
        if (i >= FIREBASE_SDK_URLS.length) {
          tryInit();
          return;
        }
        var s = document.createElement('script');
        s.src = FIREBASE_SDK_URLS[i];
        s.onload = function () { loadNext(i + 1); };
        s.onerror = function () { reject(new Error('Firebase SDK failed to load')); };
        document.head.appendChild(s);
      }
      loadNext(0);
    });
    window.__aooFirebaseLoadPromise = promise;
    return promise;
  }

  function getOrSignInUser() {
    if (!ensureFirebase()) return Promise.reject(new Error('Firebase not configured'));
    var auth = firebaseAuth;
    var provider = window.firebase && window.firebase.auth ? new window.firebase.auth.GoogleAuthProvider() : null;
    if (!provider) return Promise.reject(new Error('Google sign-in not available'));

    return auth.getRedirectResult().then(function (result) {
      var user = (result && result.user) || auth.currentUser;
      if (user && user.email) return user;
      return auth.signInWithPopup(provider).then(function (popupResult) {
        var u = popupResult && popupResult.user;
        if (u && u.email) return u;
        return Promise.reject(new Error('No user from sign-in'));
      }).catch(function (popupErr) {
        var code = (popupErr && popupErr.code) ? String(popupErr.code) : '';
        if (/popup-blocked|cancelled-popup|popup-closed|auth\/cancelled/.test(code)) {
          return auth.signInWithRedirect(provider).then(function () {
            return new Promise(function () {});
          });
        }
        return Promise.reject(popupErr);
      });
    });
  }

  function showPaymentSuccessModal(userEmail) {
    var existing = document.querySelector('.apply-flow-payment-success-overlay');
    if (existing) existing.remove();
    var overlay = document.createElement('div');
    overlay.className = 'apply-flow-payment-success-overlay';
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('role', 'dialog');
    overlay.innerHTML =
      '<div class="apply-flow-payment-success-modal">' +
      '<h2 id="payment-success-title">Payment Successful</h2>' +
      '<div class="payment-success-body">' +
      '<p>We\'ve received your application for the selected offers/lenders. We\'ll contact you in the next 48 hours at <span id="payment-success-user-email"></span>.</p>' +
      '<p>Even if you missed selecting an offer or want to correct the information, let us know at 91123 34367 or <a href="mailto:aoopune@gmail.com">aoopune@gmail.com</a>.</p>' +
      '</div><div class="payment-success-actions"><button type="button" class="apply-flow-btn-got-it">Got It</button></div></div>';
    var emailEl = overlay.querySelector('#payment-success-user-email');
    if (emailEl) emailEl.textContent = userEmail && String(userEmail).trim() ? userEmail : 'your registered email';
    var gotItBtn = overlay.querySelector('.apply-flow-btn-got-it');
    var previousOverflow = document.body.style.overflow || '';
    document.body.style.overflow = 'hidden';
    function closeModal() {
      overlay.remove();
      document.body.style.overflow = previousOverflow;
      try { window.sessionStorage.removeItem('aoo_payment_success_shown'); } catch (e) {}
      try {
        var u = new URL(window.location.href);
        if (u.searchParams.has('payment') || u.searchParams.has('payment_success')) {
          u.searchParams.delete('payment');
          u.searchParams.delete('payment_success');
          window.history.replaceState({}, '', u.pathname + u.search + u.hash);
        }
      } catch (e) {}
      flowState = 'IDLE';
      paymentFlowStarted = false;
      setButtonEnabled(true);
    }
    gotItBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    overlay.querySelector('.apply-flow-payment-success-modal').addEventListener('click', function (e) { e.stopPropagation(); });
    document.body.appendChild(overlay);
  }

  function loadRazorpay() {
    if (window.Razorpay) return Promise.resolve();
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[src*="razorpay.com"]')) {
        var t = setInterval(function () { if (window.Razorpay) { clearInterval(t); resolve(); } }, 50);
        setTimeout(function () { clearInterval(t); reject(new Error('Razorpay timeout')); }, 15000);
        return;
      }
      var s = document.createElement('script');
      s.src = 'https://checkout.razorpay.com/v1/checkout.js';
      s.async = true;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('Razorpay failed to load')); };
      document.head.appendChild(s);
    });
  }

  function startPaymentFlow(user, offers, inputData) {
    if (paymentFlowStarted) return Promise.resolve();
    if (!ensureFirebase()) {
      showToast('Our servers are temporarily unreachable. Please refresh the page and try again in a few minutes.', true);
      setButtonEnabled(true);
      return Promise.resolve();
    }
    if (!USE_QR_PAYMENT && !RAZORPAY_KEY_ID) {
      showToast('Razorpay is not configured.', true);
      setButtonEnabled(true);
      return Promise.resolve();
    }
    if (!user || !user.email) {
      showToast('Could not get your email. Please sign in with Google.', true);
      setButtonEnabled(true);
      clearPendingApplication();
      return Promise.resolve();
    }
    if (!offers || !offers.length) {
      showToast('Please select at least one offer/lender to apply.', true);
      setButtonEnabled(true);
      clearPendingApplication();
      return Promise.resolve();
    }

    flowState = 'AUTH_COMPLETED';
    var email = user.email;
    var db = firebaseFirestore;
    var payload = {
      email: email,
      offers: offers,
      input_data: inputData || {},
      amount_paise: APPLICATION_PRICE_PAISE,
      status: 'initiated'
    };

    var insertPromise = db.collection('applications').add(payload);

    if (USE_QR_PAYMENT) {
      return insertPromise.then(function (docRef) {
        var applicationId = docRef.id;
        clearPendingApplication();
        flowState = 'IDLE';
        paymentFlowStarted = false;
        setButtonEnabled(true);
        var qrUrl = (typeof window !== 'undefined' && window.location && window.location.origin ? window.location.origin : '') + '/payment-qr.html?id=' + encodeURIComponent(applicationId);
        window.open(qrUrl, 'paymentQR', 'width=400,height=500');
        var homeUrl = (typeof window !== 'undefined' && window.location && window.location.origin) ? window.location.origin + '/' : 'https://applyonlyonce.com/';
        window.location.href = homeUrl;
      }).catch(function (err) {
        flowState = 'IDLE';
        paymentFlowStarted = false;
        setButtonEnabled(true);
        throw err;
      });
    }

    return loadRazorpay().then(function () {
      return insertPromise.then(function (docRef) {
        var applicationId = docRef.id;
        clearPendingApplication();
        flowState = 'PAYMENT_PENDING';
        paymentFlowStarted = true;

        var options = {
          key: RAZORPAY_KEY_ID,
          amount: APPLICATION_PRICE_PAISE,
          currency: 'INR',
          name: 'ApplyOnlyOnce',
          description: 'Loan application offers',
          prefill: { email: email },
          readonly: { email: true },
          handler: function (response) {
            flowState = 'PAYMENT_COMPLETED';
            paymentFlowStarted = false;
            showToast('Payment successful!', false);
            db.collection('applications').doc(applicationId).update({
              status: 'paid',
              razorpay_payment_id: response.razorpay_payment_id
            }).then(function () {
              showPaymentSuccessModal(email);
            });
            setButtonEnabled(true);
          },
          modal: {
            ondismiss: function () {
              flowState = 'IDLE';
              paymentFlowStarted = false;
              setButtonEnabled(true);
            }
          }
        };

        var rzp = new window.Razorpay(options);
        rzp.open();
      });
    }).catch(function (err) {
      flowState = 'IDLE';
      paymentFlowStarted = false;
      setButtonEnabled(true);
      throw err;
    });
  }

  function runApplyFlowFromSelection(offers, inputData) {
    if (!offers || !offers.length) {
      showToast('Please select at least one offer/lender to apply.', true);
      return;
    }
    flowState = 'IDLE';
    showDisclaimerModal(function () {
      setButtonEnabled(false);
      savePendingApplication(offers, inputData);
      flowState = 'AUTH_REQUIRED';

      loadFirebaseAndInit()
        .then(function () {
          return getOrSignInUser();
        })
        .then(function (user) {
          if (!user) return;
          return startPaymentFlow(user, offers, inputData);
        })
        .catch(function (err) {
          flowState = 'IDLE';
          var raw = (err && err.message) ? err.message : (err && String(err)) || 'Something went wrong.';
          if (typeof console !== 'undefined' && console.error) console.error('[Apply flow]', err);
          var msg = raw;
          if (/Firebase not configured|failed to load|SDK|Not in a browser/i.test(msg)) {
            msg = 'Sign-in could not load. Please refresh the page, check your connection, or try disabling ad blockers. Need help? Call 91123 34367 or aoopune@gmail.com.';
          } else if (/SSL|525|handshake failed|unreachable|failed to fetch|network|load failed|connection|reset|pr_connect|authenticity|cors/i.test(msg) || (err && err.name === 'TypeError')) {
            msg = 'Our servers are temporarily unreachable. Please try again in a few minutes. If it persists, try another network (e.g. mobile data) or turn off VPN. Need help? Call 91123 34367 or aoopune@gmail.com.';
          } else if (/permission|firestore|unavailable|applications|auth/i.test(msg)) {
            msg = "Firebase setup needed: Check Firestore rules and that the applications collection is allowed. Need help? Call 91123 34367 or aoopune@gmail.com";
          }
          showToast(msg, true);
          clearPendingApplication();
          setButtonEnabled(true);
        });
    });
  }

  function handleMessage(event) {
    if (!event || !event.data || typeof event.data !== 'object') return;
    var msg = event.data;
    if (msg.type === 'AOO_APPLY_CLICKED') {
      postToIframe({ type: 'AOO_GET_SELECTION' });
    } else if (msg.type === 'AOO_SELECTION_RESPONSE') {
      var offers = msg.offers || [];
      var inputData = msg.inputData || {};
      if (offers.length === 0) {
        var pending = loadPendingApplication();
        if (pending && pending.offers && pending.offers.length) {
          showToast('Retrying with your saved selection.', false);
          runApplyFlowFromSelection(pending.offers, pending.inputData || {});
          return;
        }
      }
      runApplyFlowFromSelection(offers, inputData);
    }
  }

  function runResumeFlow() {
    if (resumeInProgress) return;
    var pending = loadPendingApplication();
    if (!pending || !pending.offers || !pending.offers.length) return;
    loadFirebaseAndInit().then(function () {
      runResumeFlowCore(pending);
    }).catch(function () {});
  }

  function runResumeFlowCore(pending) {
    if (resumeInProgress) return;
    if (!ensureFirebase()) return;
    resumeInProgress = true;
    var ran = false;
    var auth = firebaseAuth;
    var unsubscribe = null;

    function reEnableButton() {
      if (ran) return;
      resumeInProgress = false;
      setButtonEnabled(true);
      showToast('Connection timed out. Click Apply to retry with your saved selection.', false);
      try {
        if (unsubscribe && typeof unsubscribe === 'function') unsubscribe();
      } catch (e) {}
    }

    function doResume(user) {
      if (ran || !user || !user.email) return;
      ran = true;
      setButtonEnabled(false);
      var insertTimeout = setTimeout(function () {
        if (paymentFlowStarted) return;
        flowState = 'IDLE';
        resumeInProgress = false;
        setButtonEnabled(true);
        showToast('Connection timed out. Click Apply to retry with your saved selection.', false);
        try {
          if (unsubscribe && typeof unsubscribe === 'function') unsubscribe();
        } catch (e) {}
      }, 20000);
      startPaymentFlow(user, pending.offers, pending.inputData || {})
        .then(function () { clearTimeout(insertTimeout); })
        .catch(function () {
          clearTimeout(insertTimeout);
          resumeInProgress = false;
          setButtonEnabled(true);
        });
      resumeInProgress = false;
    }

    unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user && user.email) doResume(user);
    });

    var redirectPromise = (typeof window !== 'undefined' && window.__aooRedirectResultPromise) ? window.__aooRedirectResultPromise : auth.getRedirectResult();
    redirectPromise.then(function (result) {
      var user = (result && result.user) || auth.currentUser;
      if (user && user.email) doResume(user);
    }).catch(function () {
      reEnableButton();
    });

    var maxWait = 15000;
    setTimeout(function () {
      if (!ran) {
        reEnableButton();
      }
    }, maxWait);
  }

  function initApplyFlow() {
    if (applyFlowInitialized) return;
    applyFlowInitialized = true;
    ensureApplyFlowStyles();
    window.addEventListener('message', handleMessage);
    loadFirebaseAndInit().catch(function () {});
    runResumeFlow();
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initApplyFlow);
  } else {
    initApplyFlow();
  }
})();
