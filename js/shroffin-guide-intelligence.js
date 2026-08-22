(function () {
  "use strict";

  var GUIDE_PAGE_KEY = {
    "guide.html": "overview",
    "guide-documents.html": "documents",
    "tax-benefits.html": "tax-benefits",
    "concessions.html": "concessions",
    "home-loan-insurance.html": "insurance-hub",
    "property-home-insurance.html": "property-cover",
    "credit-life-insurance.html": "loan-cover",
    "home-loan-complaints.html": "complaints"
  };

  var dialog = null;
  var sheetEl = null;
  var titleEl = null;
  var listEl = null;
  var lastTrigger = null;
  var pageData = null;
  var isClosing = false;

  function pageKeyFromLocation() {
    var parts = window.location.pathname.split("/");
    var file = parts[parts.length - 1] || "guide.html";
    return GUIDE_PAGE_KEY[file] || null;
  }

  function escapeSectionId(id) {
    if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
      return CSS.escape(id);
    }
    return String(id).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }

  function sectionTitle(section) {
    var h2 = section.querySelector(".guide-tile-title");
    if (!h2) return "Insights";
    return h2.textContent.replace(/\s+/g, " ").trim();
  }

  function escapeText(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function renderListItems(bullets, bulletsHtml) {
    if (!listEl) return;
    listEl.innerHTML = "";
    var htmlMode = Array.isArray(bulletsHtml) && bulletsHtml.length === bullets.length;
    for (var i = 0; i < bullets.length; i++) {
      var li = document.createElement("li");
      if (htmlMode && bulletsHtml[i]) {
        li.innerHTML = bulletsHtml[i];
      } else {
        li.textContent = bullets[i];
      }
      listEl.appendChild(li);
    }
  }

  function restoreTriggerFocus() {
    if (lastTrigger && typeof lastTrigger.focus === "function") {
      lastTrigger.focus();
    }
    lastTrigger = null;
  }

  function onDialogKeydown(event) {
    if (!dialog || dialog.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeDialog();
    }
  }

  function prefersReducedMotion() {
    return (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function finishCloseDialog() {
    if (!dialog) return;
    dialog.classList.remove("guide-intel-dialog--open", "guide-intel-dialog--closing");
    dialog.hidden = true;
    isClosing = false;
    restoreTriggerFocus();
  }

  function onSheetTransitionEnd(event) {
    if (!dialog || !sheetEl || event.target !== sheetEl) return;
    if (event.propertyName !== "transform") return;
    if (!dialog.classList.contains("guide-intel-dialog--closing")) return;
    finishCloseDialog();
  }

  function ensureDialog() {
    if (dialog) return dialog;

    dialog = document.createElement("div");
    dialog.id = "guide-intel-dialog";
    dialog.className = "guide-intel-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "guide-intel-title");
    dialog.hidden = true;

    sheetEl = document.createElement("div");
    sheetEl.className = "guide-intel-sheet";

    var head = document.createElement("header");
    head.className = "guide-intel-head";

    titleEl = document.createElement("h2");
    titleEl.className = "guide-intel-title";
    titleEl.id = "guide-intel-title";

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "guide-intel-close";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.innerHTML =
      '<svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">' +
      '<path d="M2.5 2.5 9.5 9.5M9.5 2.5 2.5 9.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
      "</svg>";

    head.appendChild(titleEl);
    head.appendChild(closeBtn);

    listEl = document.createElement("ol");
    listEl.className = "guide-intel-list";
    listEl.id = "guide-intel-list";

    sheetEl.appendChild(head);
    sheetEl.appendChild(listEl);
    dialog.appendChild(sheetEl);
    document.body.appendChild(dialog);

    closeBtn.addEventListener("click", closeDialog);
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeDialog();
    });
    sheetEl.addEventListener("transitionend", onSheetTransitionEnd);
    document.addEventListener("keydown", onDialogKeydown);

    return dialog;
  }

  function openDialog(sectionId, section, trigger) {
    if (!pageData || !pageData[sectionId]) return;
    var entry = pageData[sectionId];
    ensureDialog();
    titleEl.textContent = sectionTitle(section);
    renderListItems(entry.bullets, entry.bulletsHtml);
    lastTrigger = trigger;
    isClosing = false;
    dialog.classList.remove("guide-intel-dialog--closing");
    dialog.hidden = false;
    if (!prefersReducedMotion()) {
      requestAnimationFrame(function () {
        dialog.classList.add("guide-intel-dialog--open");
      });
    } else {
      dialog.classList.add("guide-intel-dialog--open");
    }
  }

  function closeDialog() {
    if (!dialog || dialog.hidden || isClosing) return;
    if (prefersReducedMotion()) {
      finishCloseDialog();
      return;
    }
    isClosing = true;
    dialog.classList.remove("guide-intel-dialog--open");
    dialog.classList.add("guide-intel-dialog--closing");
    window.setTimeout(function () {
      if (isClosing) finishCloseDialog();
    }, 950);
  }

  function createTrigger(sectionId) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "guide-intel-trigger guide-flip-link";
    btn.setAttribute("data-guide-intel", sectionId);
    btn.setAttribute("aria-haspopup", "dialog");

    var iconWrap = document.createElement("span");
    iconWrap.className = "guide-intel-icon";
    iconWrap.setAttribute("aria-hidden", "true");
    /* Heroicons sparkles outline v2.2.0 — MIT — images/icons/heroicons-sparkles-outline.svg */
    iconWrap.innerHTML =
      '<svg class="guide-intel-sparkle" viewBox="0 0 24 24" fill="none" focusable="false" aria-hidden="true">' +
      '<path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z"/>' +
      '<path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50533 18.2589 8.71454Z"/>' +
      '<path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z"/>' +
      "</svg>";

    var label = document.createElement("span");
    label.className = "guide-intel-label";
    label.textContent = "Insights";

    btn.appendChild(iconWrap);
    btn.appendChild(label);
    return btn;
  }

  function ensureActionsRow(section, sectionId) {
    var existing = section.querySelector(
      '.guide-card-actions[data-guide-intel-section="' + sectionId + '"]'
    );
    if (existing) return existing;

    var actions = document.createElement("div");
    actions.className = "guide-card-actions guide-card-actions--intel";
    actions.setAttribute("data-guide-intel-section", sectionId);
    actions.appendChild(createTrigger(sectionId));
    return actions;
  }

  /*
   * Find the grey card surface below each section title — front flip face,
   * direct chapter card, mag-pair block, or stage tile when no card exists.
   */
  function findIntelCardMount(section) {
    var content = section.querySelector(":scope > .mag-content");
    if (!content) return null;

    var flipFrontCard = section.querySelector(
      ".guide-flip-face--front > .guide-chapter-card"
    );
    if (flipFrontCard) return flipFrontCard;

    var magPair = content.querySelector(":scope > .mag-pair");
    if (magPair) return magPair;

    var directCard = content.querySelector(":scope > .guide-chapter-card");
    if (directCard) return directCard;

    var stageCard = content.querySelector(".guide-tile--stage .guide-chapter-card");
    if (stageCard) return stageCard;

    var stage = content.querySelector(":scope > .guide-tile--stage");
    if (stage) return stage;

    var cards = content.querySelectorAll(".guide-chapter-card");
    for (var i = 0; i < cards.length; i++) {
      if (!cards[i].closest(".guide-flip-face--back")) return cards[i];
    }
    return null;
  }

  /*
   * Unified mount — top-right inside each section's grey card.
   */
  function mountTrigger(section, sectionId) {
    if (section.dataset.guideIntelMounted === "true") return;
    section.dataset.guideIntelMounted = "true";

    var card = findIntelCardMount(section);
    if (!card) return;

    var actions = ensureActionsRow(section, sectionId);
    if (!actions.parentNode) {
      card.classList.add("guide-intel-host");
      card.prepend(actions);
    }
  }

  function bindRoot(root, signal) {
    if (!root || !pageData) return;

    Object.keys(pageData).forEach(function (sectionId) {
      var section = root.querySelector("#" + escapeSectionId(sectionId));
      if (!section) return;
      mountTrigger(section, sectionId);
    });

    root.addEventListener(
      "click",
      function (event) {
        var trigger = event.target.closest("[data-guide-intel]");
        if (!trigger || !root.contains(trigger)) return;
        event.preventDefault();
        var sid = trigger.getAttribute("data-guide-intel");
        var section = root.querySelector("#" + escapeSectionId(sid));
        if (!section) return;
        openDialog(sid, section, trigger);
      },
      { signal: signal }
    );
  }

  if (typeof window !== "undefined") {
    window.ShroffinGuideIntelligenceInit = function (opts) {
      opts = opts || {};
      var root = opts.root || document.getElementById("guide-swap");
      var pageKey = pageKeyFromLocation();
      if (!pageKey || !window.ShroffinGuideIntelligence) return;

      pageData = window.ShroffinGuideIntelligence[pageKey];
      if (!pageData) return;

      ensureDialog();
      bindRoot(root, opts.signal);
    };

    window.ShroffinGuideIntelligenceDestroy = function () {
      closeDialog();
      pageData = null;
    };
  }

  /* Test hook — Node unit tests only */
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      escapeText: escapeText,
      escapeSectionId: escapeSectionId,
      findIntelCardMount: findIntelCardMount,
      GUIDE_PAGE_KEY: GUIDE_PAGE_KEY
    };
  }
})();
