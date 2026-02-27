/**
 * Apply flow: disclaimer → Google auth → Supabase insert → Razorpay → success.
 * Reads offers and input data from DOM only (Option A). Uses credentials from window.
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
      '#apply-button { position: fixed; left: 50%; bottom: 0.75rem; transform: translateX(-50%); z-index: 10000; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.1rem; padding: 0.45rem 0.85rem; min-height: 36px; width: min(260px, calc(100vw - 2rem)); font-family: Montserrat, system-ui, sans-serif; font-weight: 600; font-size: 0.9rem; background: var(--accent); color: #fff; border: none; border-radius: 999px; cursor: pointer; box-shadow: var(--shadow); transition: background 0.2s, transform 0.2s; } #apply-button:hover { background: var(--accent-hover); transform: translateX(-50%) translateY(-1px); } #apply-button:disabled { opacity: 0.6; cursor: not-allowed; transform: translateX(-50%); }',
      '#apply-button .apply-btn-line2 { font-size: 0.7rem; font-weight: 500; opacity: 0.95; }',
      '.apply-flow-success-block { margin-bottom: 0.75rem; padding: 1rem 1.25rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow); font-family: Montserrat, system-ui, sans-serif; }',
      '.apply-flow-success-block .payment-success { color: #059669; font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; }',
      '.apply-flow-success-block p { margin: 0 0 0.35rem 0; font-size: 0.9rem; }',
      '@media (max-width: 640px) { .apply-flow-backdrop { padding: 0.5rem; align-items: flex-end; } .apply-flow-modal { max-height: 92vh; width: 100%; border-radius: var(--radius-lg) var(--radius-lg) 0 0; } .apply-flow-disclaimer { max-height: 70vh; overflow-y: auto; -webkit-overflow-scrolling: touch; } .apply-flow-disclaimer-actions { flex-wrap: wrap; gap: 0.5rem; } .apply-flow-btn { min-height: 44px; min-width: 44px; padding: 0.6rem 1.25rem; } #apply-button { min-height: 44px; padding: 0.65rem 1rem; } .apply-flow-success-block { font-size: 0.875rem; padding: 0.875rem 1rem; } }'
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

    return supabaseClient.from('applications').insert(payload).select().single().then(function (res) {
      if (res.error) throw res.error;
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
          supabaseClient.from('applications').update({
            status: 'paid',
            razorpay_payment_id: response.razorpay_payment_id
          }).eq('id', applicationId).then(function () {
            showSuccessBlock(email);
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

  function showSuccessBlock(email) {
    var wrap = getWrap();
    if (!wrap) return;
    var existing = wrap.querySelector('.apply-flow-success-block');
    if (existing) existing.remove();
    var block = document.createElement('div');
    block.className = 'apply-flow-success-block';
    block.innerHTML =
      '<p class="payment-success">Payment successful.</p>' +
      '<p>We\'ve received your application for the selected offers/Lenders. We\'ll contact you in the next 48 hours at ' + (email || 'your email') + '.</p>' +
      '<p>Even if you missed selecting offer or want to correct the information, Let us know at 91123 34367 or <a href="mailto:aoopune@gmail.com">aoopune@gmail.com</a></p>';
    var queryCard = wrap.querySelector('.query-card');
    var applyBtn = document.getElementById('apply-button');
    if (applyBtn && applyBtn.parentNode) {
      applyBtn.parentNode.insertBefore(block, applyBtn);
    } else if (queryCard) {
      wrap.insertBefore(block, queryCard);
    } else {
      wrap.insertBefore(block, wrap.firstChild);
    }
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
          var msg = (err && err.message) ? err.message : 'Something went wrong.';
          if (/failed to fetch|network|load failed|connection|reset|pr_connect|authenticity/i.test(msg) || (err && err.name === 'TypeError')) {
            msg = "Can't reach our servers (connection reset or blocked). Try: another network (e.g. mobile data), turn off VPN, or try again later. Need help? Call 91123 34367 or email aoopune@gmail.com.";
          }
          showToast(msg, true);
          clearPendingApplication();
          if (applyBtn) applyBtn.disabled = false;
        });
    });
  }

  function addApplyButton() {
    var wrap = getWrap();
    if (!wrap) return;
    if (document.getElementById('apply-button')) return;

    var queryCard = wrap.querySelector('.query-card');
    var applyButton = document.createElement('button');
    applyButton.type = 'button';
    applyButton.id = 'apply-button';
    applyButton.innerHTML = '<span>Apply to Selected Banks at ₹99 Flat Fee</span><span class="apply-btn-line2">48hr Reply or Money Back</span>';
    applyButton.addEventListener('click', function () {
      runApplyFlow();
    });

    var successBlockPlaceholder = document.createElement('div');
    successBlockPlaceholder.className = 'apply-flow-button-wrap';
    successBlockPlaceholder.style.cssText = 'width:100%;max-width:22rem;margin:0 auto 0.75rem auto;';
    successBlockPlaceholder.appendChild(applyButton);

    if (queryCard) {
      wrap.insertBefore(successBlockPlaceholder, queryCard);
    } else {
      wrap.insertBefore(successBlockPlaceholder, wrap.firstChild);
    }
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

    // If user just returned from Google login and we have a stored
    // pending application, automatically continue to Supabase insert
    // and Razorpay without asking them to click again.
    if (supabaseClient) {
      var pending = loadPendingApplication();
      if (pending && pending.offers && pending.offers.length) {
        var applyBtn = document.getElementById('apply-button');
        if (applyBtn) applyBtn.disabled = true;
        supabaseClient.auth.getSession().then(function (res) {
          var session = res.data && res.data.session;
          if (!session || !session.user) {
            if (applyBtn) applyBtn.disabled = false;
            return;
          }
          startPaymentFlow(session.user, pending.offers, pending.inputData, applyBtn);
        }).catch(function () {
          if (applyBtn) applyBtn.disabled = false;
        });
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
