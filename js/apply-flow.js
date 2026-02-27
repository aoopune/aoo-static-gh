/**
 * Apply flow (user journey):
 * 1. Apply – user clicks Apply to selected banks
 * 2. Continue & Pay – disclaimer modal; user clicks Continue & Pay
 * 3. Google Auth – redirect to Google sign-in
 * 4. Sign in done – user completes Google sign-in
 * 5. Data to Supabase – back on home page; we INSERT application row (email, offers, input_data, status: initiated)
 * 6. Home page – user is on homepage (iframe + table)
 * 7. Redirect to Razorpay – Razorpay checkout opens automatically
 * 8. User makes payment – in Razorpay modal
 * 9. Payment success – Razorpay handler runs
 * 10. Back on home – modal closes; user stays on home page
 * 11. Show popup "Payment successful" – toast + success block
 * 12. Supabase updates status to paid – we UPDATE application row (status: 'paid', razorpay_payment_id)
 *
 * Reads offers and input data from DOM only. Uses window.SUPABASE_*, RAZORPAY_KEY_ID, APPLICATION_PRICE_PAISE.
 */
(function () {
  'use strict';

  var SUPABASE_URL = window.SUPABASE_URL;
  var SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY;
  var RAZORPAY_KEY_ID = window.RAZORPAY_KEY_ID;
  var APPLICATION_PRICE_PAISE = window.APPLICATION_PRICE_PAISE || 9900;
  var APPLY_STATE_KEY = 'aoo_apply_state_v1';

  var supabaseClient = null;
  if (typeof window.supabase !== 'undefined' && SUPABASE_URL && SUPABASE_ANON_KEY) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  var PENDING_KEY = 'aoo_apply_pending_v1';

  function getRoot() {
    return document.querySelector('#loan-table-root');
  }

  function getWrap() {
    var root = getRoot();
    return root ? root.querySelector('.aoo-loan-table-wrap .wrap') : null;
  }

  function getQueryForm() {
    var root = getRoot();
    return root ? root.querySelector('#query-form') : null;
  }

  /** Get column keys from table header (th[data-column-key]) in order. */
  function getTableColumnKeys() {
    var root = getRoot();
    if (!root) return [];
    var thead = root.querySelector('#results-thead');
    if (!thead) return [];
    var ths = thead.querySelectorAll('th[data-column-key]');
    var keys = [];
    for (var i = 0; i < ths.length; i++) {
      var k = ths[i].getAttribute('data-column-key');
      if (k && k !== 'OfferSelect') keys.push(k);
    }
    return keys;
  }

  /** Option A: read selected offers from visible table DOM only. */
  function getSelectedOffers() {
    var root = getRoot();
    if (!root) return [];
    var tbody = root.querySelector('#results-body');
    if (!tbody) return [];
    var columnKeys = getTableColumnKeys();
    var rows = tbody.querySelectorAll('tr');
    var result = [];
    for (var r = 0; r < rows.length; r++) {
      var tr = rows[r];
      var checkbox = tr.querySelector('.offer-checkbox-cell input.offer-checkbox');
      if (!checkbox || !checkbox.checked) continue;
      var cells = tr.querySelectorAll('td');
      var lenderName = '';
      var sector = '';
      var obj = {};
      for (var c = 0; c < cells.length; c++) {
        var cell = cells[c];
        var text = (cell.textContent || '').trim();
        if (cell.classList.contains('bank-name-cell')) {
          lenderName = text;
          obj.lenderName = lenderName;
        } else if (cell.classList.contains('sector-name-cell')) {
          sector = text;
          obj.sector = sector;
        } else if (cell.classList.contains('offer-checkbox-cell')) {
          continue;
        } else {
          var key = cell.getAttribute('data-column-key');
          if (key) obj[key] = text;
        }
      }
      if (lenderName || Object.keys(obj).length) result.push(obj);
    }
    return result;
  }

  /** Read input section data from #query-form. */
  function getInputSectionData() {
    var form = getQueryForm();
    if (!form) return { gender: '', amount: '', secured: '', country: '', university: '', levelOfStudy: '' };
    var genderEl = form.querySelector('input[name="gender"]:checked');
    var amountEl = form.querySelector('#amount, input[name="amount"]');
    var securedEl = form.querySelector('input[name="secured"]:checked');
    var countryEl = form.querySelector('#country, input[name="country"]');
    var universityEl = form.querySelector('#university, input[name="university"]');
    var levelEl = form.querySelector('#levelOfStudy, input[name="levelOfStudy"]');
    var amountRaw = amountEl ? String(amountEl.value || '').replace(/\D/g, '') : '';
    return {
      gender: genderEl ? genderEl.value : '',
      amount: amountRaw || '',
      secured: securedEl ? securedEl.value : '',
      country: countryEl ? (countryEl.value || '').trim() : '',
      university: universityEl ? (universityEl.value || '').trim() : '',
      levelOfStudy: levelEl ? (levelEl.value || '').trim() : ''
    };
  }

  function showToast(message, isError) {
    var root = getRoot();
    if (!root) return;
    var existing = root.querySelector('.apply-flow-toast');
    if (existing) existing.remove();
    var el = document.createElement('div');
    el.className = 'apply-flow-toast' + (isError ? ' apply-flow-toast-error' : '');
    el.style.cssText = 'position:fixed;bottom:1rem;left:50%;transform:translateX(-50%);padding:0.6rem 1rem;border-radius:8px;background:var(--surface);border:1px solid var(--border);box-shadow:var(--shadow-lg);font-size:0.9rem;z-index:10002;max-width:90vw;';
    if (isError) el.style.borderColor = '#b91c1c'; el.style.background = '#fef2f2';
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 4000);
  }

  function savePendingApplication(offers, inputData) {
    try {
      var state = {
        offers: offers || [],
        inputData: inputData || {},
        ts: Date.now()
      };
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
      if (!state || !state.offers || !state.offers.length) {
        return null;
      }
      if (state.ts && Date.now() - state.ts > 15 * 60 * 1000) {
        // Older than 15 minutes – treat as stale.
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
      '<ul>' +
      '<li>Your academic profile</li>' +
      '<li>Co-applicant financial documents</li>' +
      '<li>Property/Collateral value (If secured loan)</li>' +
      '<li>CIBIL report of you & your co-applicant</li>' +
      '<li>Others, as required by the lender</li>' +
      '</ul>' +
      '<p>By proceeding, you agree to share the required information for assessment.</p>' +
      '<div class="apply-flow-disclaimer-actions">' +
      '<button type="button" class="apply-flow-btn apply-flow-btn-cancel">Cancel</button>' +
      '<button type="button" class="apply-flow-btn apply-flow-btn-continue">Continue & Pay</button>' +
      '</div>' +
      '</div>'
    );
  }

  function showDisclaimerModal(onContinue) {
    var root = getRoot();
    if (!root) return;
    var backdrop = document.createElement('div');
    backdrop.className = 'apply-flow-backdrop';
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('role', 'dialog');
    backdrop.innerHTML = '<div class="apply-flow-modal apply-flow-modal-disclaimer">' + getDisclaimerHtml() + '</div>';
    var modal = backdrop.querySelector('.apply-flow-modal');
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) { backdrop.remove(); }
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
      '.apply-flow-ctx, :root { --surface: #ffffff; --border: #e5e7eb; --shadow: 0 1px 3px rgba(0,0,0,0.04), 0 6px 16px -4px rgba(0,0,0,0.06); --shadow-lg: 0 4px 6px -2px rgba(0,0,0,0.05), 0 24px 48px -12px rgba(0,0,0,0.1); --radius-lg: 20px; --text: #000000; --accent: #64748b; --accent-hover: #475569; --bg-subtle: #f1f5f9; }',
      '.apply-flow-backdrop { position: fixed; inset: 0; background: rgba(15,23,42,0.4); backdrop-filter: blur(4px); z-index: 10001; display: flex; align-items: center; justify-content: center; padding: 1rem; overflow-y: auto; }',
      '.apply-flow-modal { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); max-width: min(520px, 94vw); max-height: 85vh; overflow-y: auto; padding: 1.25rem; font-family: Montserrat, system-ui, sans-serif; }',
      '.apply-flow-disclaimer p { margin: 0 0 0.75rem 0; } .apply-flow-disclaimer ul { margin: 0.5rem 0 1rem 1.25rem; }',
      '.apply-flow-disclaimer-actions { display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border); }',
      '.apply-flow-btn { padding: 0.5rem 1.25rem; border-radius: 100px; font-weight: 600; font-size: 0.875rem; cursor: pointer; border: 1px solid var(--border); background: var(--surface); color: var(--text); transition: background 0.2s, border-color 0.2s; }',
      '.apply-flow-btn-continue { background: var(--accent); color: #fff; border-color: var(--accent); } .apply-flow-btn-continue:hover { background: var(--accent-hover); border-color: var(--accent-hover); }',
      '.apply-flow-btn-cancel:hover { background: var(--bg-subtle); }',
      '#apply-button.apply-floating-btn { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); width: auto; max-width: 90%; padding: 8px 16px; font-size: 12px; font-weight: 600; border-radius: 999px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); white-space: nowrap; z-index: 1000; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.05rem; min-height: auto; font-family: Montserrat, system-ui, sans-serif; background: var(--accent); color: #fff; border: none; cursor: pointer; transition: background 0.2s, transform 0.2s; } #apply-button.apply-floating-btn:hover { background: var(--accent-hover); transform: translateX(-50%) translateY(-1px); } #apply-button.apply-floating-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: translateX(-50%); }',
      '#apply-button.apply-floating-btn .apply-btn-line2 { font-size: 0.65rem; font-weight: 500; opacity: 0.95; }',
      '.apply-filter-right-section { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }',
      '#loan-table-root .aoo-loan-table-wrap .query-card .field.submit-field { justify-content: space-between !important; align-items: center !important; }',
      '.apply-filter-right-section #apply-button.apply-floating-btn { position: static !important; transform: none !important; bottom: auto !important; left: auto !important; }',
      '.apply-filter-right-section #apply-button.apply-floating-btn:hover { transform: none !important; }',
      '.apply-filter-right-section #apply-button.apply-floating-btn:disabled { transform: none !important; }',
      '@media (max-width: 768px) { #apply-button.apply-floating-btn { padding: 8px 14px; font-size: 11px; max-width: 92%; width: auto; left: 50%; transform: translateX(-50%); min-height: 44px; } #apply-button.apply-floating-btn:hover { transform: translateX(-50%) translateY(-1px); } #apply-button.apply-floating-btn:disabled { transform: translateX(-50%); } .apply-filter-right-section #apply-button.apply-floating-btn { transform: none !important; } .apply-filter-right-section #apply-button.apply-floating-btn:hover { transform: none !important; } }',
      '.apply-flow-success-block { margin-bottom: 0.75rem; padding: 1rem 1.25rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow); font-family: Montserrat, system-ui, sans-serif; }',
      '.apply-flow-success-block .payment-success { color: #059669; font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; }',
      '.apply-flow-success-block p { margin: 0 0 0.35rem 0; font-size: 0.9rem; }',
      '.apply-flow-payment-success-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,23,42,0.5); backdrop-filter: blur(4px); z-index: 10003; display: flex; align-items: center; justify-content: center; padding: 1rem; overflow-y: auto; box-sizing: border-box; }',
      '.apply-flow-payment-success-modal { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); max-width: min(480px, 95vw); width: 100%; padding: 1.5rem 1.5rem 1.25rem; font-family: Montserrat, system-ui, sans-serif; box-sizing: border-box; }',
      '.apply-flow-payment-success-modal h2 { margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 700; color: var(--text); }',
      '.apply-flow-payment-success-modal .payment-success-body { margin: 0 0 1.25rem 0; font-size: 0.9rem; line-height: 1.5; color: var(--text); word-wrap: break-word; }',
      '.apply-flow-payment-success-modal .payment-success-body p { margin: 0 0 0.5rem 0; }',
      '.apply-flow-payment-success-modal .payment-success-body p:last-child { margin-bottom: 0; }',
      '.apply-flow-payment-success-modal .payment-success-body a { color: var(--accent); }',
      '.apply-flow-payment-success-modal .payment-success-actions { display: flex; justify-content: center; }',
      '.apply-flow-payment-success-modal .apply-flow-btn-got-it { padding: 0.6rem 1.5rem; min-height: 44px; border-radius: 100px; font-weight: 600; font-size: 0.9rem; cursor: pointer; border: none; background: var(--accent); color: #fff; font-family: inherit; transition: background 0.2s; }',
      '.apply-flow-payment-success-modal .apply-flow-btn-got-it:hover { background: var(--accent-hover); }',
      '@media (max-width: 640px) { .apply-flow-payment-success-overlay { padding: 0.75rem; align-items: center; } .apply-flow-payment-success-modal { width: 90%; max-width: 95vw; padding: 1.25rem 1rem; } .apply-flow-payment-success-modal .apply-flow-btn-got-it { width: 100%; max-width: none; } }',
      '@media (max-width: 640px) { .apply-flow-backdrop { padding: 0.5rem; align-items: flex-end; } .apply-flow-modal { max-height: 92vh; width: 100%; border-radius: var(--radius-lg) var(--radius-lg) 0 0; } .apply-flow-disclaimer { max-height: 70vh; overflow-y: auto; -webkit-overflow-scrolling: touch; } .apply-flow-disclaimer-actions { flex-wrap: wrap; gap: 0.5rem; } .apply-flow-btn { min-height: 44px; min-width: 44px; padding: 0.6rem 1.25rem; } #apply-button.apply-floating-btn { min-height: 44px; padding: 8px 14px; } .apply-flow-success-block { font-size: 0.875rem; padding: 0.875rem 1rem; } }'
    ].join('\n');
    document.head.appendChild(style);
  }

  function getOrSignInUser() {
    if (!supabaseClient) return Promise.reject(new Error('Supabase not configured'));
    return supabaseClient.auth.getSession().then(function (res) {
      var session = res.data && res.data.session;
      if (session && session.user) return session.user;
      return supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
          // After Google auth, send user back to the public site.
          redirectTo: 'https://applyonlyonce.com/'
        }
      }).then(function (oauthRes) {
        if (oauthRes.data && oauthRes.data.url) {
          // When running inside the embedded iframe on applyonlyonce.com, Supabase's
          // auth page cannot be loaded in-frame (it sets X-Frame-Options). Always
          // redirect the top window instead of just the iframe.
          var targetWindow = (window.top || window);
          try {
            targetWindow.location.href = oauthRes.data.url;
          } catch (e) {
            window.location.href = oauthRes.data.url;
          }
          return new Promise(function () {});
        }
        return supabaseClient.auth.getSession().then(function (r) {
          var s = r.data && r.data.session;
          return s ? s.user : null;
        });
      });
    });
  }

  function startPaymentFlow(user, offers, inputData, applyBtn) {
    if (!supabaseClient) {
      showToast('Supabase is not configured.', true);
      if (applyBtn) applyBtn.disabled = false;
      return Promise.resolve();
    }
    if (!window.Razorpay || !RAZORPAY_KEY_ID) {
      showToast('Razorpay is not loaded.', true);
      if (applyBtn) applyBtn.disabled = false;
      return Promise.resolve();
    }
    if (!user || !user.email) {
      showToast('Could not get your email. Please sign in with Google.', true);
      if (applyBtn) applyBtn.disabled = false;
      clearPendingApplication();
      return Promise.resolve();
    }
    if (!offers || !offers.length) {
      showToast('Please select at least one offer/lender to apply.', true);
      if (applyBtn) applyBtn.disabled = false;
      clearPendingApplication();
      return Promise.resolve();
    }

    clearPendingApplication();

    var email = user.email;
    var payload = {
      email: email,
      offers: offers,
      input_data: inputData || {},
      amount_paise: APPLICATION_PRICE_PAISE,
      status: 'initiated'
    };

    function doInsert() {
      return supabaseClient.from('applications').insert(payload).select().single();
    }
    function tryInsert(retrying) {
      return doInsert().then(function (res) {
        if (res.error) throw res.error;
        return res;
      }).catch(function (err) {
        var isConnection = /failed to fetch|network|load failed|connection|reset|timeout|timed out/i.test((err && err.message) || '') || (err && err.name === 'TypeError');
        if (isConnection && !retrying) {
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              tryInsert(true).then(resolve, reject);
            }, 1500);
          });
        }
        throw err;
      });
    }

    return tryInsert(false).then(function (res) {
      var applicationId = res.data.id;

      var options = {
        key: RAZORPAY_KEY_ID,
        amount: APPLICATION_PRICE_PAISE,
        currency: 'INR',
        name: 'ApplyOnlyOnce',
        description: 'Loan application offers',
        prefill: { email: email },
        readonly: { email: true },
        handler: function (response) {
          showToast('Payment successful!', false);
          supabaseClient.from('applications').update({
            status: 'paid',
            razorpay_payment_id: response.razorpay_payment_id
          }).eq('id', applicationId).then(function () {
            showPaymentSuccessModal(email);
          }).catch(function () {
            showPaymentSuccessModal(email);
          });
          if (applyBtn) applyBtn.disabled = false;
        },
        modal: {
          ondismiss: function () {
            if (applyBtn) applyBtn.disabled = false;
          }
        }
      };

      var rzp = new window.Razorpay(options);
      rzp.open();
    });
  }

  /** Payment success overlay modal – shown only after Razorpay success; does not affect layout. */
  function showPaymentSuccessModal(userEmail) {
    var existing = document.querySelector('.apply-flow-payment-success-overlay');
    if (existing) existing.remove();
    var overlay = document.createElement('div');
    overlay.className = 'apply-flow-payment-success-overlay';
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-labelledby', 'payment-success-title');
    overlay.innerHTML =
      '<div class="apply-flow-payment-success-modal">' +
      '<h2 id="payment-success-title">Payment Successful</h2>' +
      '<div class="payment-success-body">' +
      '<p>We\'ve received your application for the selected offers/lenders. We\'ll contact you in the next 48 hours at <span id="payment-success-user-email"></span>.</p>' +
      '<p>Even if you missed selecting an offer or want to correct the information, let us know at 91123 34367 or <a href="mailto:aoopune@gmail.com">aoopune@gmail.com</a>.</p>' +
      '</div>' +
      '<div class="payment-success-actions">' +
      '<button type="button" class="apply-flow-btn-got-it">Got It</button>' +
      '</div>' +
      '</div>';
    var modal = overlay.querySelector('.apply-flow-payment-success-modal');
    var emailEl = overlay.querySelector('#payment-success-user-email');
    if (emailEl) emailEl.textContent = userEmail && String(userEmail).trim() ? userEmail : 'your registered email';
    var gotItBtn = overlay.querySelector('.apply-flow-btn-got-it');
    var previousOverflow = '';
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
    }
    previousOverflow = document.body.style.overflow || '';
    document.body.style.overflow = 'hidden';
    gotItBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    modal.addEventListener('click', function (e) { e.stopPropagation(); });
    document.body.appendChild(overlay);
  }

  function runApplyFlow() {
    var offers = getSelectedOffers();
    if (!offers.length) {
      showToast('Please select at least one offer/lender to apply.', true);
      return;
    }

    showDisclaimerModal(function () {
      var applyBtn = document.getElementById('apply-button');
      if (applyBtn) applyBtn.disabled = true;

      var inputData = getInputSectionData();
      savePendingApplication(offers, inputData);

      getOrSignInUser()
        .then(function (user) {
          return startPaymentFlow(user, offers, inputData, applyBtn);
        })
        .catch(function (err) {
          var raw = (err && err.message) ? err.message : (err && String(err)) || 'Something went wrong.';
          if (typeof console !== 'undefined' && console.error) {
            console.error('[Apply flow]', err);
          }
          var msg = raw;
          if (/failed to fetch|network|load failed|connection|reset|pr_connect|authenticity|cors|timeout|timed out/i.test(msg) || (err && err.name === 'TypeError')) {
            msg = "Can't reach our servers (connection reset, timeout, or blocked). Try: another network (e.g. mobile data), turn off VPN, or try again in a moment. Need help? Call 91123 34367 or email aoopune@gmail.com.";
          } else if (/applications|relation.*does not exist|row.level.security|RLS|JWT|auth/i.test(msg)) {
            msg = "Supabase setup needed: In your Supabase project open SQL Editor and run applications-setup.sql (creates applications table + RLS). Need help? Call 91123 34367 or aoopune@gmail.com";
          }
          showToast(msg, true);
          clearPendingApplication();
          if (applyBtn) applyBtn.disabled = false;
        });
    });
  }

  function addApplyButton() {
    var root = getRoot();
    if (!root) return;
    if (document.getElementById('apply-button')) return;

    var submitField = root.querySelector('.field.submit-field');
    if (!submitField) return;

    var countEl = submitField.querySelector('.count') || document.getElementById('count');
    var submitBtn = submitField.querySelector('button[type="submit"]');
    if (!countEl) return;

    var rightSection = document.createElement('div');
    rightSection.className = 'apply-filter-right-section';

    rightSection.appendChild(countEl);

    var applyButton = document.createElement('button');
    applyButton.type = 'button';
    applyButton.id = 'apply-button';
    applyButton.className = 'apply-floating-btn';
    applyButton.innerHTML = '<span>Apply</span>';
    applyButton.addEventListener('click', function () {
      runApplyFlow();
    });

    rightSection.appendChild(applyButton);
    submitField.appendChild(rightSection);
  }

  function initApplyFlow() {
    ensureApplyFlowStyles();
    var root = getRoot();
    if (!root) return;
    var wrap = root.querySelector('.aoo-loan-table-wrap .wrap');
    if (!wrap) {
      setTimeout(initApplyFlow, 150);
      return;
    }
    addApplyButton();

    // If user just returned from Google login: we have pending selection and need a session.
    // The OAuth hash is on the parent URL; parent runs getSession() to persist to localStorage.
    // We retry getSession() so we pick up the session once the parent has stored it, then auto-open Razorpay.
    if (supabaseClient) {
      var pending = loadPendingApplication();
      if (pending && pending.offers && pending.offers.length) {
        var applyBtn = document.getElementById('apply-button');
        if (applyBtn) applyBtn.disabled = true;
        var ran = false;
        var retryCount = 0;
        var maxRetries = 10;
        var retryMs = 400;
        function connectionStyleError(err) {
          var raw = (err && err.message) ? err.message : (err && String(err)) || '';
          return /failed to fetch|network|load failed|connection|reset|pr_connect|timeout|timed out/i.test(raw) || (err && err.name === 'TypeError');
        }
        function doResume(session) {
          if (ran || !session || !session.user) return;
          ran = true;
          startPaymentFlow(session.user, pending.offers, pending.inputData, applyBtn)
            .catch(function (err) {
              if (applyBtn) applyBtn.disabled = false;
              var msg = (err && err.message) ? err.message : (err && String(err)) || 'Something went wrong.';
              if (connectionStyleError(err)) {
                msg = "Can't reach our servers (connection reset, timeout, or blocked). Try another network, turn off VPN, or try again. Need help? Call 91123 34367 or aoopune@gmail.com.";
              } else if (/applications|relation.*does not exist|RLS|JWT|auth/i.test(msg)) {
                msg = "Server setup issue. Need help? Call 91123 34367 or aoopune@gmail.com.";
              }
              showToast(msg, true);
              clearPendingApplication();
            });
        }
        function tryGetSession() {
          if (ran) return;
          supabaseClient.auth.getSession().then(function (res) {
            var session = res.data && res.data.session;
            if (session && session.user) {
              doResume(session);
              return;
            }
            retryCount += 1;
            if (retryCount < maxRetries) {
              setTimeout(tryGetSession, retryMs);
            } else if (applyBtn) {
              applyBtn.disabled = false;
            }
          });
        }
        var authListener = supabaseClient.auth.onAuthStateChange(function (event, session) {
          if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') doResume(session);
        });
        tryGetSession();
        // If still no session after ~4s, re-enable button and stop retrying.
        setTimeout(function () {
          if (!ran && applyBtn) applyBtn.disabled = false;
          try {
            var sub = (authListener && authListener.data && authListener.data.subscription) || (authListener && authListener.data) || authListener;
            if (sub && typeof sub.unsubscribe === 'function') sub.unsubscribe();
          } catch (e) {}
        }, maxRetries * retryMs + 500);
      }
    }
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', function () {
      setTimeout(initApplyFlow, 100);
    });
  } else {
    setTimeout(initApplyFlow, 100);
  }
  window.addEventListener('load', function () {
    setTimeout(initApplyFlow, 50);
  });
})();
