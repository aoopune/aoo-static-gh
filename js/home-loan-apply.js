/**
 * Home loan Apply once — Google Auth + Firestore (home-loan-apps only).
 * Does not use the education-loan Firebase project.
 */
(function () {
  "use strict";

  var HL_APPLY_STORAGE_KEY = "shroffin_hl_apply_v1";
  var HL_APPLY_PACKET_MAX_AGE_MS = 60 * 60 * 1000;
  var HL_APPLY_MSG_KEY = "shroffin_hl_apply_msg";
  var HL_EXPLORE_DRAFT_KEY = "shroffin_hl_explore_draft_v1";

  var HL_FIREBASE_CONFIG = {
    apiKey: "AIzaSyAsWbUw_SSNc8nXG7VR6NAB95UetshtxF0",
    authDomain: "home-loan-apps.firebaseapp.com",
    projectId: "home-loan-apps",
    storageBucket: "home-loan-apps.firebasestorage.app",
    messagingSenderId: "881073938522",
    appId: "1:881073938522:web:6c7a07100a753682833863"
  };

  // Contacts from data/site-contacts.json via js/site-contacts.generated.js
  var contacts = window.ShroffinSiteContacts || {};
  var HL_SUPPORT_EMAIL = contacts.email || "support@shroffin.com";
  var HL_SUPPORT_PHONE = contacts.phoneDisplay || "+91 91123 34367";
  var HL_SUPPORT_PHONE_SHORT =
    contacts.phoneDisplayShort || "91123 34367";
  var HL_SUPPORT_TEL = contacts.phoneTel || "+919112334367";
  var HL_WHATSAPP_URL = contacts.whatsappUrl || "https://wa.me/919112334367";
  var HL_CONTACT_WINDOW = "48 hours";

  var firebaseReady = false;
  var packet = null;
  var submitting = false;
  var verifying = false;
  var verifiedUser = null;
  var openBankDetails = {};

  function $(id) {
    return document.getElementById(id);
  }

  function loadApplyPacket() {
    try {
      var raw = window.sessionStorage.getItem(HL_APPLY_STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || !data.banks || !data.banks.length) return null;
      if (data.ts && Date.now() - data.ts > HL_APPLY_PACKET_MAX_AGE_MS) {
        clearApplyPacket();
        return null;
      }
      return data;
    } catch (err) {
      return null;
    }
  }

  function clearApplyPacket() {
    try {
      window.sessionStorage.removeItem(HL_APPLY_STORAGE_KEY);
    } catch (err) {}
  }

  function persistApplyPacket(data) {
    try {
      window.sessionStorage.setItem(HL_APPLY_STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (err) {
      return false;
    }
  }

  function redirectToExplore(message) {
    try {
      if (message) window.sessionStorage.setItem(HL_APPLY_MSG_KEY, message);
    } catch (err) {}
    window.location.href = "explore-banks.html";
  }

  var returnToExploreTimer = null;

  function scheduleReturnToExplore(message) {
    if (returnToExploreTimer != null) return;
    try {
      if (message) window.sessionStorage.setItem(HL_APPLY_MSG_KEY, message);
    } catch (err) {}
    returnToExploreTimer = window.setTimeout(function () {
      returnToExploreTimer = null;
      window.location.href = "explore-banks.html";
    }, 1400);
  }

  function bankName(row) {
    if (!row) return "Bank";
    return (
      row.bankName ||
      (row.offer && (row.offer.bank_name || row.offer.lender_name)) ||
      "Bank"
    );
  }

  function bankKey(row, index) {
    if (row && row.id != null && row.id !== "") return String(row.id);
    return "idx-" + String(index);
  }

  function parseMoneyNumber(value) {
    if (value == null || value === "") return null;
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : null;
    }
    var n = Number(String(value).replace(/[^\d.-]/g, ""));
    return Number.isFinite(n) ? n : null;
  }

  function formatInr(value) {
    var n = parseMoneyNumber(value);
    if (n == null) return "—";
    return "₹" + Math.round(n).toLocaleString("en-IN");
  }

  function formatPct(value) {
    if (value == null || !Number.isFinite(Number(value))) return "—";
    return Number(value).toFixed(2) + "%";
  }

  function formatPlain(value) {
    if (value == null) return "—";
    var text = String(value).trim();
    return text ? text : "—";
  }

  function appendFact(dl, label, value) {
    if (!dl) return;
    var dt = document.createElement("dt");
    dt.textContent = label;
    var dd = document.createElement("dd");
    dd.textContent = value == null || value === "" ? "—" : String(value);
    dl.appendChild(dt);
    dl.appendChild(dd);
  }

  function appendPrimaryFact(container, label, value) {
    if (!container) return;
    var item = document.createElement("div");
    item.className = "hl-apply-fact";
    var labelEl = document.createElement("span");
    labelEl.className = "hl-apply-fact-label";
    labelEl.textContent = label;
    var valueEl = document.createElement("span");
    valueEl.className = "hl-apply-fact-value";
    valueEl.textContent = value == null || value === "" ? "—" : String(value);
    item.appendChild(labelEl);
    item.appendChild(valueEl);
    container.appendChild(item);
  }

  function renderContextSummary(data) {
    var primaryEl = $("hl-apply-primary-details");
    var detailsEl = $("hl-apply-your-details");
    var filtersEl = $("hl-apply-filters");
    if (primaryEl) primaryEl.innerHTML = "";
    if (detailsEl) detailsEl.innerHTML = "";
    if (filtersEl) filtersEl.innerHTML = "";

    var input = (data && data.input_data) || {};
    var form = input.form || {};
    var query = input.query || {};
    var filters = input.filters || query.productFilters || {};

    var coOn =
      form.includeCoApplicant === "yes" ||
      form.includeCoApplicant === true ||
      form.includeCoApplicant === "true" ||
      query.includeCoApplicant === true;

    appendPrimaryFact(
      primaryEl,
      "Monthly income",
      formatInr(form.monthlyIncome || query.monthlyIncome)
    );
    appendPrimaryFact(
      primaryEl,
      "Property agreement value",
      formatInr(form.propertyValue || query.propertyValue)
    );
    appendPrimaryFact(
      primaryEl,
      "Age",
      formatPlain(form.age != null ? form.age : query.age)
    );
    appendPrimaryFact(
      primaryEl,
      "CIBIL score",
      formatPlain(form.cibilScore != null ? form.cibilScore : query.cibilScore)
    );
    appendPrimaryFact(
      primaryEl,
      "Occupation",
      formatPlain(form.occupation || query.occupation)
    );
    appendPrimaryFact(
      primaryEl,
      "Purpose",
      formatPlain(form.purpose || query.purpose)
    );

    var rateFixed = Boolean(filters.fixedRate) || query.rateType === "Fixed";
    var facilityOd =
      Boolean(filters.overdraft) || query.facilityType === "Overdraft";

    appendPrimaryFact(primaryEl, "Rate type", rateFixed ? "Fixed" : "Floating");
    appendPrimaryFact(
      primaryEl,
      "Facility",
      facilityOd ? "Overdraft" : "Term loan"
    );
    appendPrimaryFact(
      primaryEl,
      "Tenure (years)",
      formatPlain(form.tenureYears != null ? form.tenureYears : query.tenureYears)
    );

    appendFact(
      detailsEl,
      "Existing EMIs",
      formatInr(form.existingEmis != null ? form.existingEmis : query.existingEmis)
    );
    appendFact(
      detailsEl,
      "Credit card limits",
      formatInr(form.cardLimits != null ? form.cardLimits : query.cardLimits)
    );
    appendFact(
      detailsEl,
      "Card EMI load",
      form.cardLoadPct != null || query.cardLoadPct != null
        ? formatPlain(
            (form.cardLoadPct != null ? form.cardLoadPct : query.cardLoadPct) +
              "%"
          )
        : "—"
    );
    appendFact(
      detailsEl,
      "Share of income for EMIs / FOIR",
      form.foirPct != null || query.foirPct != null
        ? formatPlain(
            (form.foirPct != null ? form.foirPct : query.foirPct) + "%"
          )
        : "—"
    );
    if (coOn) {
      appendFact(detailsEl, "Co-applicant", "Yes");
      appendFact(
        detailsEl,
        "Co-applicant income",
        formatInr(form.coMonthlyIncome || query.coMonthlyIncome)
      );
      appendFact(
        detailsEl,
        "Co-applicant EMIs",
        formatInr(form.coExistingEmis || query.coExistingEmis)
      );
      appendFact(
        detailsEl,
        "Co-applicant card limits",
        formatInr(form.coCardLimits || query.coCardLimits)
      );
    }

    if (filters.govtPsu) {
      appendFact(filtersEl, "Govt / PSU employee and pensioner", "Yes");
    }
    if (filters.womenApplicant) {
      appendFact(filtersEl, "Women applicant", "Yes");
    }
    if (filters.greenHome) appendFact(filtersEl, "Green home", "Yes");
    if (filters.insurance) appendFact(filtersEl, "Insurance", "Yes");

    var filtersHeading = $("hl-apply-filters-heading");
    var hasFilters = filtersEl && filtersEl.children.length > 0;
    if (filtersHeading) {
      filtersHeading.hidden = !hasFilters;
    }
    if (filtersEl) {
      filtersEl.hidden = !hasFilters;
    }
  }

  function bankDetailPairs(row) {
    return [
      { label: "Rate", value: formatPct(row && row.effectiveRoiPct) },
      { label: "Loan amount", value: formatInr(row && row.loanAmount) },
      { label: "Tenure (yrs)", value: formatPlain(row && row.tenureLabel) },
      { label: "EMI", value: formatInr(row && row.emi) }
    ];
  }

  function syncExploreDraftSelectedIds(ids) {
    try {
      var raw = window.sessionStorage.getItem(HL_EXPLORE_DRAFT_KEY);
      var draft = raw ? JSON.parse(raw) : null;
      if (!draft || typeof draft !== "object") {
        draft = { v: 1 };
      }
      draft.selectedIds = Array.isArray(ids) ? ids.slice() : [];
      draft.ts = Date.now();
      window.sessionStorage.setItem(HL_EXPLORE_DRAFT_KEY, JSON.stringify(draft));
    } catch (err) {}
  }

  function clearExploreDraftSelection() {
    syncExploreDraftSelectedIds([]);
  }

  function selectedIdsFromPacket(data) {
    return (data.banks || [])
      .map(function (row) {
        return row && row.id != null ? row.id : null;
      })
      .filter(function (id) {
        return id != null && id !== "";
      });
  }

  function discloseArrowHtml() {
    return (
      '<svg class="hl-apply-disclose-arrow" viewBox="0 0 10 10" aria-hidden="true" focusable="false">' +
      '<path d="M2.2 1.2 6.8 5 2.2 8.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg>"
    );
  }

  function setDiscloseOpen(toggle, panel, open) {
    if (toggle) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.classList.toggle("is-open", open);
    }
    if (panel) {
      panel.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    }
  }

  function removeBankAt(index) {
    if (!packet || !packet.banks || submitting) return;
    if (returnToExploreTimer != null) return;
    if (index < 0 || index >= packet.banks.length) return;

    var removedKey = bankKey(packet.banks[index], index);
    packet.banks.splice(index, 1);
    if (packet.input_data) {
      packet.input_data.selectedCount = packet.banks.length;
    }
    packet.ts = Date.now();
    if (removedKey && openBankDetails[removedKey]) {
      delete openBankDetails[removedKey];
    }

    syncExploreDraftSelectedIds(selectedIdsFromPacket(packet));

    if (!packet.banks.length) {
      clearApplyPacket();
      renderBankSummary(packet);
      updateSubmitEnabled();
      showToast("No banks selected. Taking you back to choose banks.");
      scheduleReturnToExplore("Select at least one bank, then tap Apply.");
      return;
    }

    if (!persistApplyPacket(packet)) {
      showToast("Could not update your selection. Please try again.", true);
      return;
    }
    renderBankSummary(packet);
    updateSubmitEnabled();
  }

  function renderBankSummary(data) {
    var n = (data.banks && data.banks.length) || 0;
    var nEl = $("hl-apply-n");
    var list = $("hl-apply-banks");
    if (nEl) nEl.textContent = String(n);
    if (!list) return;
    list.innerHTML = "";

    if (!n) {
      var empty = document.createElement("li");
      empty.className = "hl-apply-banks-empty";
      empty.textContent = "No banks selected.";
      list.appendChild(empty);
      return;
    }

    (data.banks || []).forEach(function (row, index) {
      var nameText = bankName(row);
      var key = bankKey(row, index);
      var isOpen = Boolean(openBankDetails[key]);
      var detailsId = "hl-bank-details-" + key.replace(/[^a-zA-Z0-9_-]/g, "-");

      var li = document.createElement("li");
      li.className = "hl-apply-bank" + (isOpen ? " is-open" : "");

      var top = document.createElement("div");
      top.className = "hl-apply-bank-top";

      var name = document.createElement("span");
      name.className = "hl-apply-bank-name";
      name.textContent = nameText;

      var removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "hl-apply-bank-remove";
      removeBtn.textContent = "Remove";
      removeBtn.setAttribute(
        "aria-label",
        "Remove " + nameText + " from selection"
      );
      removeBtn.addEventListener("click", function () {
        removeBankAt(index);
      });

      top.appendChild(name);
      top.appendChild(removeBtn);

      var toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "hl-apply-disclose" + (isOpen ? " is-open" : "");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-controls", detailsId);
      toggle.innerHTML =
        '<span class="hl-apply-disclose-label">Show details</span>' +
        discloseArrowHtml();
      toggle.addEventListener("click", function () {
        var next = !openBankDetails[key];
        openBankDetails[key] = next;
        li.classList.toggle("is-open", next);
        setDiscloseOpen(toggle, details, next);
      });

      var details = document.createElement("div");
      details.className =
        "hl-apply-disclose-panel hl-apply-bank-details" +
        (isOpen ? " is-open" : "");
      details.id = detailsId;
      details.setAttribute("aria-hidden", isOpen ? "false" : "true");

      var detailsInner = document.createElement("div");
      detailsInner.className = "hl-apply-disclose-panel-inner";

      var dl = document.createElement("dl");
      dl.className = "hl-apply-facts hl-apply-facts--bank";
      bankDetailPairs(row).forEach(function (pair) {
        appendFact(dl, pair.label, pair.value);
      });
      detailsInner.appendChild(dl);
      details.appendChild(detailsInner);

      li.appendChild(top);
      li.appendChild(toggle);
      li.appendChild(details);
      list.appendChild(li);
    });
  }

  function renderSelection(data) {
    renderContextSummary(data);
    renderBankSummary(data);
  }

  function bindYourDetailsToggle() {
    var toggle = $("hl-apply-details-toggle");
    var panel = $("hl-apply-your-details-panel");
    var section = toggle && toggle.closest(".hl-apply-context");
    if (!toggle || !panel || toggle.getAttribute("data-bound") === "1") return;
    toggle.setAttribute("data-bound", "1");
    var labelEl = toggle.querySelector(".hl-apply-disclose-label");
    var fieldCount = panel.querySelectorAll(
      "input, select, textarea"
    ).length;
    if (labelEl && fieldCount > 0) {
      labelEl.textContent = "Show more details (" + fieldCount + ")";
    }
    toggle.addEventListener("click", function () {
      var next = toggle.getAttribute("aria-expanded") !== "true";
      setDiscloseOpen(toggle, panel, next);
      if (section) section.classList.toggle("is-open", next);
    });
  }

  function showToast(message, isError) {
    var el = $("hl-apply-toast");
    if (!el) return;
    el.textContent = message;
    el.hidden = false;
    el.classList.toggle("is-error", Boolean(isError));
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      el.hidden = true;
    }, 4500);
  }

  function setSubmitProgress(on) {
    var btn = $("hl-submit-application");
    if (!btn) return;
    var spinner = btn.querySelector(".hl-apply-cta-spinner");
    var label = btn.querySelector(".hl-apply-cta-label");
    btn.classList.toggle("is-submitting", !!on);
    btn.setAttribute("aria-busy", on ? "true" : "false");
    if (spinner) spinner.hidden = !on;
    if (label) {
      label.textContent = on ? "Submitting…" : "Submit application";
    }
    if (on) {
      btn.disabled = true;
    } else {
      updateSubmitEnabled();
    }
  }

  function digitsOnly(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
  }

  function isValidPhone(value) {
    var d = normalizePhone(value);
    return /^[6-9]\d{9}$/.test(d);
  }

  function normalizePhone(value) {
    var d = digitsOnly(value);
    if (d.length === 12 && d.indexOf("91") === 0) d = d.slice(2);
    if (d.length === 11 && d.charAt(0) === "0") d = d.slice(1);
    if (d.length > 10) d = d.slice(0, 10);
    return d;
  }

  function formatPhoneDisplay(digits) {
    var d = normalizePhone(digits);
    if (d.length <= 5) return d;
    return d.slice(0, 5) + " " + d.slice(5);
  }

  function updatePhoneOk() {
    var ok = $("hl-phone-ok");
    var input = $("hl-phone");
    var row = input && input.closest(".hl-apply-phone-row");
    if (!ok || !input) return;
    var valid = isValidPhone(input.value);
    ok.hidden = !valid;
    ok.setAttribute("aria-hidden", valid ? "false" : "true");
    if (row) row.classList.toggle("is-complete", valid);
  }

  function bindPhoneField(input) {
    if (!input || input.getAttribute("data-bound") === "1") return;
    input.setAttribute("data-bound", "1");

    function syncDisplay() {
      var formatted = formatPhoneDisplay(input.value);
      if (input.value !== formatted) input.value = formatted;
      updatePhoneOk();
    }

    input.addEventListener("input", function () {
      input.setAttribute("aria-invalid", "false");
      syncDisplay();
    });
    input.addEventListener("blur", function () {
      syncDisplay();
      var d = normalizePhone(input.value);
      if (!d) {
        input.setAttribute("aria-invalid", "false");
        return;
      }
      input.setAttribute("aria-invalid", isValidPhone(d) ? "false" : "true");
    });
    input.addEventListener("paste", function () {
      input.setAttribute("aria-invalid", "false");
      window.requestAnimationFrame(syncDisplay);
    });
    syncDisplay();
  }

  function readContactForm() {
    return {
      name: String(($("hl-name") && $("hl-name").value) || "").trim(),
      phone: normalizePhone($("hl-phone") && $("hl-phone").value),
      contact_email: String(($("hl-email") && $("hl-email").value) || "")
        .trim()
        .toLowerCase()
    };
  }

  function setInvalid(id, invalid) {
    var input = $(id);
    if (input) input.setAttribute("aria-invalid", invalid ? "true" : "false");
  }

  function validateContactForm() {
    var contact = readContactForm();
    var consent = $("hl-consent");
    setInvalid("hl-name", !contact.name);
    setInvalid("hl-phone", !isValidPhone(contact.phone));
    setInvalid("hl-email", !isValidEmail(contact.contact_email));

    if (!contact.name || !contact.phone || !contact.contact_email) {
      showToast("Please fill your name, phone, and email.", true);
      return null;
    }
    if (!isValidPhone(contact.phone)) {
      showToast("Enter a valid 10-digit Indian mobile number.", true);
      return null;
    }
    if (!isValidEmail(contact.contact_email)) {
      showToast("Enter a valid email address.", true);
      return null;
    }
    if (!consent || !consent.checked) {
      showToast("Please agree so we can email or call you about this application.", true);
      return null;
    }
    return contact;
  }

  function ensureFirebase() {
    if (firebaseReady) return true;
    if (typeof firebase === "undefined" || !firebase.initializeApp) {
      return false;
    }
    try {
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(HL_FIREBASE_CONFIG);
      }
      firebaseReady = true;
      return true;
    } catch (err) {
      return false;
    }
  }

  function signInWithGoogle() {
    if (!ensureFirebase()) {
      return Promise.reject(new Error("Firebase not configured"));
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("email");
    provider.addScope("profile");
    // Always show account picker so a wrong account is not reused silently.
    provider.setCustomParameters({ prompt: "select_account" });
    return firebase.auth().signInWithPopup(provider).then(function (result) {
      if (!result || !result.user || !result.user.email) {
        throw new Error("Could not get your email.");
      }
      return result.user;
    });
  }

  function emailsMatch(a, b) {
    return (
      String(a || "")
        .trim()
        .toLowerCase() ===
      String(b || "")
        .trim()
        .toLowerCase()
    );
  }

  function signOutAuth() {
    if (typeof firebase === "undefined" || !firebase.auth) {
      return Promise.resolve();
    }
    try {
      return firebase.auth().signOut().catch(function () {});
    } catch (err) {
      return Promise.resolve();
    }
  }

  function allocateApplicationId(db) {
    var counterRef = db.collection("_counters").doc("applications");
    var appRef = db.collection("applications");
    return db.runTransaction(function (transaction) {
      return transaction.get(counterRef).then(function (snap) {
        var last = (snap && snap.exists && snap.data().lastId) || 0;
        var next = Number(last) + 1;
        var applicationId =
          next <= 999999 ? ("000000" + next).slice(-6) : String(next);
        transaction.set(counterRef, { lastId: next }, { merge: true });
        return applicationId;
      });
    }).then(function (applicationId) {
      return { applicationId: applicationId, appRef: appRef };
    });
  }

  function sanitizeForFirestore(value) {
    if (value === undefined) return null;
    if (value === null) return null;
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : null;
    }
    if (typeof value === "string" || typeof value === "boolean") return value;
    if (Array.isArray(value)) {
      return value.map(sanitizeForFirestore);
    }
    if (Object.prototype.toString.call(value) === "[object Object]") {
      var out = {};
      Object.keys(value).forEach(function (key) {
        if (!key || key.indexOf("/") !== -1 || key.indexOf(".") === 0) return;
        if (key.indexOf("__") === 0 && key.lastIndexOf("__") === key.length - 2) {
          return;
        }
        var next = sanitizeForFirestore(value[key]);
        if (next !== undefined) out[key] = next;
      });
      return out;
    }
    return null;
  }

  function bankPayloadForFirestore(row, index) {
    if (!row || typeof row !== "object") {
      return { id: "idx-" + String(index), bankName: "Bank" };
    }
    var offer = row.offer && typeof row.offer === "object" ? row.offer : {};
    return {
      id: row.id != null ? String(row.id) : "idx-" + String(index),
      bankName: String(
        row.bankName ||
          offer.bank_name ||
          offer.lender_name ||
          "Bank"
      ),
      effectiveRoiPct:
        row.effectiveRoiPct != null && Number.isFinite(Number(row.effectiveRoiPct))
          ? Number(row.effectiveRoiPct)
          : null,
      loanAmount:
        row.loanAmount != null && Number.isFinite(Number(row.loanAmount))
          ? Number(row.loanAmount)
          : null,
      tenureLabel: row.tenureLabel != null ? String(row.tenureLabel) : "",
      emi:
        row.emi != null && Number.isFinite(Number(row.emi))
          ? Number(row.emi)
          : null
    };
  }

  function inputPayloadForFirestore(input) {
    var src = input && typeof input === "object" ? input : {};
    return sanitizeForFirestore({
      form: src.form || {},
      filters: src.filters || {},
      query: {
        monthlyIncome: src.query && src.query.monthlyIncome,
        propertyValue: src.query && src.query.propertyValue,
        age: src.query && src.query.age,
        cibilScore: src.query && src.query.cibilScore,
        occupation: src.query && src.query.occupation,
        purpose: src.query && src.query.purpose,
        tenureYears: src.query && src.query.tenureYears,
        foirPct: src.query && src.query.foirPct,
        existingEmis: src.query && src.query.existingEmis,
        cardLimits: src.query && src.query.cardLimits,
        cardLoadPct: src.query && src.query.cardLoadPct,
        includeCoApplicant: src.query && src.query.includeCoApplicant,
        rateType: src.query && src.query.rateType,
        facilityType: src.query && src.query.facilityType,
        bankType: src.query && src.query.bankType
      },
      selectedCount: src.selectedCount,
      matchCount: src.matchCount,
      jurisdictionState: src.jurisdictionState,
      prepaymentMethod: src.prepaymentMethod,
      rateChangeMethod: src.rateChangeMethod
    });
  }

  function buildFirestorePayload(user, contact, data) {
    // Keep auth email casing identical to the ID token so Firestore rules match.
    var email = String((user && user.email) || "").trim();
    var banks = ((data && data.banks) || []).map(bankPayloadForFirestore);
    return {
      email: email,
      contact_email: String(contact.contact_email || "")
        .trim()
        .toLowerCase(),
      google_uid: String((user && user.uid) || ""),
      name: String(contact.name || ""),
      phone: String(contact.phone || ""),
      product: "home_loan",
      status: "received",
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      data_version: String((data && data.data_version) || ""),
      input_data: inputPayloadForFirestore((data && data.input_data) || {}),
      banks: banks
    };
  }

  function saveApplication(user, contact, data) {
    if (!ensureFirebase()) {
      return Promise.reject(new Error("Firebase not configured"));
    }
    var auth = firebase.auth();
    var authUser = auth.currentUser;
    if (!authUser || !authUser.uid) {
      return Promise.reject(
        new Error("Not signed in. Tap Verify again, then submit.")
      );
    }
    if (!emailsMatch(authUser.email, contact.contact_email)) {
      return signOutAuth().then(function () {
        clearVerification();
        return Promise.reject(
          new Error(
            "Use the same email you entered, then tap Verify again."
          )
        );
      });
    }
    var db = firebase.firestore();
    var payload = buildFirestorePayload(authUser, contact, data);
    if (!payload.email) {
      return Promise.reject(
        new Error("Could not read your Google email. Tap Verify again.")
      );
    }

    function writeDoc(appRef, applicationId) {
      return appRef.doc(applicationId).set(payload).then(function () {
        return applicationId;
      });
    }

    return authUser
      .getIdToken(true)
      .then(function () {
        return allocateApplicationId(db);
      })
      .then(function (meta) {
        return writeDoc(meta.appRef, meta.applicationId);
      })
      .catch(function (err) {
        var code = (err && err.code) || "";
        var msg = (err && err.message) || "";
        if (
          /permission-denied/i.test(code) ||
          /permission|unavailable/i.test(msg)
        ) {
          var fallbackId = String(Math.floor(100000 + Math.random() * 900000));
          return writeDoc(db.collection("applications"), fallbackId);
        }
        throw err;
      });
  }

  function showSuccessModal(appId, contact, data) {
    var host = $("hl-apply-success");
    if (!host) return;
    var n = (data.banks && data.banks.length) || 0;
    var bankLine =
      n === 1
        ? "We've got your application for 1 bank."
        : "We've got your application for " + n + " banks.";
    host.innerHTML =
      '<div class="hl-apply-success-panel" role="dialog" aria-modal="true" aria-labelledby="hl-success-title">' +
      '<h2 id="hl-success-title">Application received</h2>' +
      '<p class="hl-apply-success-lead">' +
      bankLine +
      "</p>" +
      '<p class="hl-apply-success-ref">' +
      '<span class="hl-apply-success-ref-label">Reference ID</span>' +
      '<span class="hl-apply-success-ref-value">' +
      String(appId) +
      "</span>" +
      "</p>" +
      '<p class="hl-apply-success-body">' +
      "We'll contact you within " +
      HL_CONTACT_WINDOW +
      " at " +
      contact.contact_email +
      " and may call " +
      contact.phone +
      ".</p>" +
      '<p class="hl-apply-success-body">' +
      "Please keep your documents with you for now. We will ask for them only when we talk." +
      "</p>" +
      '<p class="hl-apply-success-help">' +
      "Missed a detail? " +
      '<a class="guide-section-link" href="' +
      HL_WHATSAPP_URL +
      '" target="_blank" rel="noopener noreferrer">' +
      'Chat now<span class="guide-section-link-arrow" aria-hidden="true">↗</span>' +
      '<span class="visually-hidden"> (opens in a new window)</span></a>' +
      ' or call <a class="hl-apply-success-phone" href="tel:' +
      HL_SUPPORT_TEL +
      '">' +
      HL_SUPPORT_PHONE_SHORT +
      "</a>" +
      "</p>" +
      '<button type="button" class="hl-apply-cta" id="hl-got-it">Got it</button>' +
      "</div>";
    host.hidden = false;
    var gotIt = $("hl-got-it");
    if (gotIt) {
      gotIt.focus();
      gotIt.addEventListener("click", onGotIt);
    }
  }

  function onGotIt() {
    clearApplyPacket();
    clearExploreDraftSelection();
    window.location.href = "explore-banks.html";
  }

  function mapAuthError(err, forVerify) {
    var code = (err && err.code) || "";
    var raw = (err && err.message) || "";
    if (
      /popup-blocked|auth\/cancelled|cancelled-popup|popup-closed/i.test(code) ||
      /popup-closed-by-user/i.test(code)
    ) {
      if (/blocked/i.test(code + raw)) {
        return forVerify
          ? "Allow popups for this site, then tap Verify again."
          : "Allow popups for this site, then try again.";
      }
      return forVerify
        ? "Verification was cancelled. You can try again when ready."
        : "Something was cancelled. You can try again when ready.";
    }
    if (/Not signed in|Could not read your Google email|Use the same email/i.test(raw)) {
      return raw;
    }
    if (/Firebase not configured|failed to load|SDK/i.test(raw)) {
      return (
        "Verification could not load. Please refresh and try again. Need help? Call " +
        HL_SUPPORT_PHONE +
        " or " +
        HL_SUPPORT_EMAIL +
        "."
      );
    }
    if (/permission-denied|insufficient permissions/i.test(code + " " + raw)) {
      return (
        "We couldn't save your application (permission). Publish Firestore rules for home-loan-apps, then try again. Need help? Call " +
        HL_SUPPORT_PHONE +
        " or " +
        HL_SUPPORT_EMAIL +
        "."
      );
    }
    if (/invalid-argument/i.test(code + " " + raw)) {
      return (
        "We couldn't save this application. Please refresh, verify again, and submit. Need help? Call " +
        HL_SUPPORT_PHONE +
        " or " +
        HL_SUPPORT_EMAIL +
        "."
      );
    }
    if (forVerify) {
      return (
        "We couldn't verify your email. Please try again. Need help? Call " +
        HL_SUPPORT_PHONE +
        " or " +
        HL_SUPPORT_EMAIL +
        "."
      );
    }
    return (
      "We couldn't send your application. Please try again. Need help? Call " +
      HL_SUPPORT_PHONE +
      " or " +
      HL_SUPPORT_EMAIL +
      "."
    );
  }

  function setEmailMismatchMessage(message) {
    var el = $("hl-email-mismatch");
    if (!el) return;
    if (!message) {
      el.textContent = "";
      el.hidden = true;
      return;
    }
    el.textContent = message;
    el.hidden = false;
  }

  function setVerifiedUi(on, email) {
    var emailInput = $("hl-email");
    var verifyBtn = $("hl-verify-email");
    var status = $("hl-verify-status");
    if (on) setEmailMismatchMessage("");
    if (emailInput && email) {
      emailInput.value = email;
      emailInput.classList.toggle("is-verified", on);
    } else if (emailInput) {
      emailInput.classList.toggle("is-verified", on);
    }
    if (verifyBtn) {
      verifyBtn.textContent = on ? "Verified" : "Verify";
      verifyBtn.classList.toggle("is-verified", on);
    }
    if (status) {
      status.hidden = !on;
    }
    updateVerifyEnabled();
    updateSubmitEnabled();
  }

  function clearVerification() {
    verifiedUser = null;
    setVerifiedUi(false);
  }

  function rejectMismatchedGoogleAccount(typedEmail) {
    verifying = false;
    clearVerification();
    setEmailMismatchMessage(
      "Use the same email you entered (" +
        typedEmail +
        "), then tap Verify again."
    );
    showToast(
      "Google account did not match. Use the same email, then try Verify again.",
      true
    );
    var emailInput = $("hl-email");
    if (emailInput) {
      emailInput.value = typedEmail;
      emailInput.focus();
      emailInput.select();
    }
    updateVerifyEnabled();
    updateSubmitEnabled();
    return signOutAuth().then(function () {
      updateVerifyEnabled();
      updateSubmitEnabled();
    });
  }

  function isEmailVerifiedMatch(contact) {
    if (!verifiedUser || !verifiedUser.email || !verifiedUser.uid) return false;
    return emailsMatch(verifiedUser.email, contact.contact_email);
  }

  function canVerifyEmail() {
    if (verifying || submitting || verifiedUser) return false;
    var email = String(($("hl-email") && $("hl-email").value) || "")
      .trim()
      .toLowerCase();
    return isValidEmail(email);
  }

  function canSubmitApplication() {
    if (submitting || verifying) return false;
    if (!packet || !packet.banks || !packet.banks.length) return false;
    if (returnToExploreTimer != null) return false;
    var contact = readContactForm();
    if (!contact.name) return false;
    if (!isValidPhone(contact.phone)) return false;
    if (!isValidEmail(contact.contact_email)) return false;
    return isEmailVerifiedMatch(contact);
  }

  function updateVerifyEnabled() {
    var btn = $("hl-verify-email");
    if (!btn) return;
    if (verifiedUser) {
      btn.disabled = true;
      return;
    }
    btn.disabled = !canVerifyEmail();
  }

  function updateSubmitEnabled() {
    var btn = $("hl-submit-application");
    if (!btn) return;
    btn.disabled = !canSubmitApplication();
  }

  function onFormFieldsChange() {
    onEmailInputChange();
    updateVerifyEnabled();
    updateSubmitEnabled();
  }

  function onEmailInputChange() {
    setEmailMismatchMessage("");
    if (!verifiedUser) return;
    var current = String(($("hl-email") && $("hl-email").value) || "")
      .trim()
      .toLowerCase();
    if (!emailsMatch(current, verifiedUser.email)) {
      clearVerification();
    }
  }

  function onVerifyEmailClick() {
    if (!canVerifyEmail()) return;

    var typedEmail = String(($("hl-email") && $("hl-email").value) || "")
      .trim()
      .toLowerCase();

    verifying = true;
    setEmailMismatchMessage("");
    updateVerifyEnabled();
    updateSubmitEnabled();

    signInWithGoogle()
      .then(function (user) {
        var googleEmail = String(user.email || "")
          .trim()
          .toLowerCase();
        if (!emailsMatch(googleEmail, typedEmail)) {
          return rejectMismatchedGoogleAccount(typedEmail);
        }
        verifiedUser = user;
        setVerifiedUi(true, user.email);
        verifying = false;
        updateVerifyEnabled();
        updateSubmitEnabled();
      })
      .catch(function (err) {
        verifying = false;
        clearVerification();
        updateVerifyEnabled();
        updateSubmitEnabled();
        if (typeof console !== "undefined" && console.error) {
          console.error("[Home loan apply] verify", err);
        }
        showToast(mapAuthError(err, true), true);
      });
  }

  function onSubmitApplicationClick() {
    if (submitting || verifying || !canSubmitApplication()) return;
    var contact = validateContactForm();
    if (!contact || !packet) return;

    if (!isEmailVerifiedMatch(contact)) {
      showToast("Verify your email with Google before submitting.", true);
      var verifyBtnFocus = $("hl-verify-email");
      if (verifyBtnFocus) verifyBtnFocus.focus();
      updateVerifyEnabled();
      updateSubmitEnabled();
      return;
    }

    var authEmail =
      typeof firebase !== "undefined" &&
      firebase.auth &&
      firebase.auth().currentUser
        ? firebase.auth().currentUser.email
        : "";
    if (!emailsMatch(authEmail, contact.contact_email)) {
      rejectMismatchedGoogleAccount(contact.contact_email);
      return;
    }

    submitting = true;
    var verifyBtn = $("hl-verify-email");
    if (verifyBtn) verifyBtn.disabled = true;
    setSubmitProgress(true);

    saveApplication(verifiedUser, contact, packet)
      .then(function (appId) {
        setSubmitProgress(false);
        clearApplyPacket();
        showSuccessModal(appId, contact, packet);
      })
      .catch(function (err) {
        submitting = false;
        setSubmitProgress(false);
        if (verifyBtn && verifiedUser) setVerifiedUi(true, verifiedUser.email);
        else {
          updateVerifyEnabled();
          updateSubmitEnabled();
        }
        if (typeof console !== "undefined" && console.error) {
          console.error("[Home loan apply] submit", err);
        }
        showToast(mapAuthError(err, false), true);
      });
  }

  function init() {
    packet = loadApplyPacket();
    if (!packet) {
      redirectToExplore("Select banks again, then tap Apply.");
      return;
    }
    renderSelection(packet);
    bindYourDetailsToggle();

    var verifyBtn = $("hl-verify-email");
    var submitBtn = $("hl-submit-application");
    var nameInput = $("hl-name");
    var phoneInput = $("hl-phone");
    var emailInput = $("hl-email");
    if (verifyBtn) verifyBtn.addEventListener("click", onVerifyEmailClick);
    if (submitBtn) submitBtn.addEventListener("click", onSubmitApplicationClick);
    bindPhoneField(phoneInput);
    [nameInput, phoneInput, emailInput].forEach(function (el) {
      if (!el) return;
      el.addEventListener("input", onFormFieldsChange);
      el.addEventListener("change", onFormFieldsChange);
    });
    updatePhoneOk();
    updateVerifyEnabled();
    updateSubmitEnabled();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
