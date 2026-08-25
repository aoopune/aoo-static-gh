"use strict";

const { Engine } = require("json-rules-engine");
const hlcIntelligence = require("./hlc-intelligence.js");
const bankLogos = require("./bank-logos.js");

/** Stamped by scripts/stamp-asset-versions.js → js/hlc-data-url.generated.js */
function resolveCompareDataUrl() {
  if (typeof window !== "undefined" && window.__HLC_DATA_URL__) {
    return window.__HLC_DATA_URL__;
  }
  return "../data/home-loans-compare.json";
}
const MATCH_DEBOUNCE_MS = 280;
const INITIAL_VISIBLE_BANKS = 10;
const DEFAULT_PURPOSE = "Regular Home Loan";
const DEFAULT_FOIR_PCT = 55;
const DEFAULT_TENURE_YEARS = 20;
/** Default: 10% of credit card limits counts as monthly load (how-much-loan / Guide). */
const DEFAULT_CARD_LOAD_PCT = 10;
const CARD_LOAD_PCT_CHOICES = [0, 5, 10];
const MAX_TENURE_YEARS = 30;
const GOVT_PSU_BORROWER_CATEGORY = "Central/State/PSU employees and Pensioners";
const DEFAULT_RATE_TYPE = "Floating";
const DEFAULT_FACILITY_TYPE = "Term Loan";
const DEFAULT_BANK_TYPE = "All";
/** Govt charges in the data are Maharashtra + India; no state input on this page yet. */
const DEFAULT_JURISDICTION_STATE = "Maharashtra";
/** GST-yes government fees (CERSAI) are stored exclusive of GST. */
const DEFAULT_GOVERNMENT_GST_RATE = 0.18;
const FOIR_CHOICES = [50, 55, 60, 65, 70];
/** Lenders commonly cap a joint home loan at six borrowers in total. */
const MAX_CO_APPLICANTS = 5;
/**
 * Lenders only club income from close family. Anyone else can still sign as a
 * borrower or co-owner, but their income does not raise the eligible amount.
 */
const CO_APPLICANT_RELATIONSHIPS = [
  { value: "Spouse", label: "Spouse", clubs: true },
  { value: "Father", label: "Father", clubs: true },
  { value: "Mother", label: "Mother", clubs: true },
  { value: "Son", label: "Son", clubs: true },
  { value: "Daughter", label: "Daughter", clubs: true },
  { value: "Brother", label: "Brother", clubs: true },
  { value: "Sister", label: "Sister", clubs: true },
  { value: "Other", label: "Someone else", clubs: false }
];
const DEFAULT_CO_APPLICANT_RELATIONSHIP = "Spouse";
/** "Not earning" keeps a co-owner on the loan without adding income. */
const CO_APPLICANT_OCCUPATIONS = [
  { value: "Salaried", label: "Salaried", earns: true },
  { value: "Self-employed", label: "Self-employed", earns: true },
  { value: "Pensioner", label: "Pensioner", earns: true },
  { value: "Not earning", label: "Not earning", earns: false }
];
const DEFAULT_CO_APPLICANT_OCCUPATION = "Salaried";

const BANK_LOGO_FILES = bankLogos.BANK_LOGO_FILES;
const bankLogoPath = bankLogos.bankLogoPath;
const bankLogoHtml = bankLogos.bankLogoHtml;

function defaultProductFilters() {
  return {
    govtPsu: false,
    greenHome: false,
    womenApplicant: false,
    insurance: false,
    bankPublic: true,
    bankPrivate: true,
    rateFloating: true,
    fixedRate: false,
    facilityTermLoan: true,
    overdraft: false
  };
}

/**
 * Normalize filter state to the multi-select checkbox shape.
 * Older drafts used exclusive switches (bankType / fixedRate / overdraft only).
 */
function normalizeProductFilters(input) {
  const raw = input && typeof input === "object" ? input : {};
  const base = defaultProductFilters();
  const next = {
    govtPsu: Boolean(raw.govtPsu),
    greenHome: Boolean(raw.greenHome),
    womenApplicant: Boolean(raw.womenApplicant),
    insurance: Boolean(raw.insurance)
  };

  const hasNewBank = "bankPublic" in raw || "bankPrivate" in raw;
  if (hasNewBank) {
    next.bankPublic = Boolean(raw.bankPublic);
    next.bankPrivate = Boolean(raw.bankPrivate);
  } else if ("bankType" in raw) {
    const bankType = normalizeBankType(raw.bankType);
    next.bankPublic =
      bankType === DEFAULT_BANK_TYPE || bankType === "Public";
    next.bankPrivate =
      bankType === DEFAULT_BANK_TYPE || bankType === "Private";
  } else {
    next.bankPublic = base.bankPublic;
    next.bankPrivate = base.bankPrivate;
  }

  const hasNewRate = "rateFloating" in raw;
  if (hasNewRate) {
    next.rateFloating = Boolean(raw.rateFloating);
    next.fixedRate = Boolean(raw.fixedRate);
  } else if ("fixedRate" in raw) {
    next.rateFloating = !raw.fixedRate;
    next.fixedRate = Boolean(raw.fixedRate);
  } else {
    next.rateFloating = base.rateFloating;
    next.fixedRate = base.fixedRate;
  }

  const hasNewFacility = "facilityTermLoan" in raw;
  if (hasNewFacility) {
    next.facilityTermLoan = Boolean(raw.facilityTermLoan);
    next.overdraft = Boolean(raw.overdraft);
  } else if ("overdraft" in raw) {
    next.facilityTermLoan = !raw.overdraft;
    next.overdraft = Boolean(raw.overdraft);
  } else {
    next.facilityTermLoan = base.facilityTermLoan;
    next.overdraft = base.overdraft;
  }

  return next;
}

function selectedRateTypes(filters) {
  const f = filters || defaultProductFilters();
  const types = [];
  if (f.rateFloating) types.push("Floating");
  if (f.fixedRate) types.push("Fixed");
  return types;
}

function selectedFacilityTypes(filters) {
  const f = filters || defaultProductFilters();
  const types = [];
  if (f.facilityTermLoan) types.push("Term Loan");
  if (f.overdraft) types.push("Overdraft");
  return types;
}

function selectedBankTypes(filters) {
  const f = filters || defaultProductFilters();
  const types = [];
  if (f.bankPublic) types.push("Public");
  if (f.bankPrivate) types.push("Private");
  return types;
}

function primaryRateType(filters) {
  const types = selectedRateTypes(filters);
  if (types.length === 1) return types[0];
  if (types.indexOf("Floating") !== -1) return "Floating";
  if (types.indexOf("Fixed") !== -1) return "Fixed";
  return DEFAULT_RATE_TYPE;
}

function primaryFacilityType(filters) {
  const types = selectedFacilityTypes(filters);
  if (types.length === 1) return types[0];
  if (types.indexOf("Term Loan") !== -1) return "Term Loan";
  if (types.indexOf("Overdraft") !== -1) return "Overdraft";
  return DEFAULT_FACILITY_TYPE;
}

function primaryBankType(filters) {
  const types = selectedBankTypes(filters);
  if (types.length === 1) return types[0];
  return DEFAULT_BANK_TYPE;
}

/**
 * Charges-tab index marks. One glyph per distinct note on the visible
 * Notes panel. Share a mark only when two places point to the same note.
 * Sequence follows traditional footnotes: * then †; government already uses ^.
 */
const PROCESSING_FEE_MARKER = "*";
const PROPERTY_CHECK_MARKER = "†";
const GOVERNMENT_CHARGES_MARKER = "^";

const GROUPS = {
  essentials: [
    { key: "effectiveRoiPct", label: "Rate", type: "pct", sort: "num" },
    { key: "loanAmount", label: "Loan amount", type: "inr", sort: "num" },
    { key: "tenureLabel", label: "Tenure (yrs)", type: "text", sort: "text" },
    { key: "emi", label: "EMI", type: "inr", sort: "num" }
  ],
  charges: [
    {
      key: "processingFee",
      label: "Processing fees",
      type: "inr",
      sort: "num",
      footnote: PROCESSING_FEE_MARKER
    },
    {
      key: "propertyCheckCharges",
      label: "Property check charges",
      type: "inr",
      sort: "num",
      footnote: PROPERTY_CHECK_MARKER
    },
    {
      key: "governmentCharges",
      label: "Govt. charges",
      type: "inr",
      sort: "num",
      footnote: GOVERNMENT_CHARGES_MARKER
    }
  ],
  laterCharges: [
    {
      key: "prepaymentChargeDisplay",
      label: "Prepayment fees",
      type: "charge",
      sort: "text"
    },
    {
      key: "rateChangeChargeDisplay",
      label: "Rate change charges",
      type: "charge",
      sort: "text",
      footnote: "°"
    },
    {
      key: "overdueChargeDisplay",
      label: "Overdue charges",
      type: "charge",
      sort: "text",
      footnote: "‡"
    },
    {
      key: "emiBounceChargeDisplay",
      label: "EMI bounce charges",
      type: "charge",
      sort: "text",
      footnote: "^"
    }
  ]
};

/*
 * Phone: these titles always stack (Loan / amount) even when the value column
 * is wide enough for a single line. Optional line groups keep phrases together
 * (Rate change / charges).
 */
const PHONE_COMPACT_HEADER_WRAP_KEYS = {
  loanAmount: true,
  governmentCharges: true,
  prepaymentChargeDisplay: true,
  rateChangeChargeDisplay: true,
  overdueChargeDisplay: true,
  emiBounceChargeDisplay: true
};

const PHONE_COMPACT_HEADER_LINES = {
  rateChangeChargeDisplay: ["Rate change", "charges"],
  emiBounceChargeDisplay: ["EMI bounce", "charges"]
};

/* Phone only: slight extra width for fee/charge cols (not Loan amount). */
const PHONE_FEE_COL_NUDGE_KEYS = {
  overdueChargeDisplay: true,
  emiBounceChargeDisplay: true,
  rateChangeChargeDisplay: true,
  processingFee: true,
  prepaymentChargeDisplay: true,
  propertyCheckCharges: true,
  governmentCharges: true
};
const PHONE_FEE_COL_NUDGE_PX = 42;

function columnTitleStackLines(label, columnKey) {
  const custom = PHONE_COMPACT_HEADER_LINES[columnKey];
  if (custom && custom.length) return custom.slice();
  return String(label || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function columnTitleTextHtml(label, columnKey) {
  if (!PHONE_COMPACT_HEADER_WRAP_KEYS[columnKey]) {
    return (
      '<span class="hlc-column-title-text">' + escapeHtml(label) + "</span>"
    );
  }
  const lines = columnTitleStackLines(label, columnKey);
  if (lines.length < 2) {
    return (
      '<span class="hlc-column-title-text">' + escapeHtml(label) + "</span>"
    );
  }
  return (
    '<span class="hlc-column-title-text hlc-column-title-text--stack" aria-label="' +
    escapeHtml(label) +
    '">' +
    lines
      .map(function (line) {
        return '<span class="hlc-title-word">' + escapeHtml(line) + "</span>";
      })
      .join("") +
    "</span>"
  );
}

const PREPAYMENT_METHOD_OWN = "ownFunds";
const PREPAYMENT_METHOD_BT = "balanceTransfer";
const RATE_CHANGE_METHOD_TYPE = "typeSwitch";
const RATE_CHANGE_METHOD_REPRICE = "repricing";
const RATE_CHANGE_METHOD_BENCHMARK = "benchmark";
const RATE_CHANGE_CHARGE_TYPE_SWITCH = "Interest Rate Type Switch Fees";
const RATE_CHANGE_CHARGE_REPRICING = "Interest Rate Repricing Fees";
const RATE_CHANGE_CHARGE_BENCHMARK = "Interest Rate Benchmark Switch Fees";
const RATE_CHANGE_FREQUENCY_NOTE =
  "° These fees are usually charged each time you switch rate type — not once for the whole loan.";
const RATE_CHANGE_FREQUENCY_NOTE_REPRICE =
  "° These fees are usually charged each time you reprice — not once for the whole loan.";
const RATE_CHANGE_FREQUENCY_NOTE_BENCHMARK =
  "° These fees are usually charged each time you change the benchmark — not once for the whole loan.";
/** Shown only when the Rate change dropdown is on Benchmark switch. */
const RATE_CHANGE_BENCHMARK_MEANING_NOTE =
  "° A home loan rate follows a reference. Most follow the RBI repo rate. Some follow a rate the bank sets. A benchmark switch is changing which reference your loan follows. You choose.";
/** Shown only when the Rate change dropdown is on Repricing. */
const RATE_CHANGE_REPRICING_MEANING_NOTE =
  "° Repricing here means moving from a higher rate to a lower rate on the same rate type — not Floating ➔ Fixed.";
/** Shared column notes (frequency / unit / basis / GST). Bank remarks use RATE_CHANGE_BANK_MARKERS. */
const RATE_CHANGE_COMMON_MARKER = "°";
/** Side-panel / column note body — amounts marked * / ° / ^ point here. */
const GST_APPLICABLE_NOTE = "GST applicable.";
/** Side-panel fee rows: mark with * and explain once under the list (not “GST extra” on every row). */
const GST_APPLICABLE_FOOTNOTE = "* " + GST_APPLICABLE_NOTE;
/** Out-of-pocket on top of / instead of a fixed fee — mark on amount, wording under the fee block. */
const OOP_EXPENSES_MARKER = "†";
const OOP_EXPENSES_NOTE = "Out-of-pocket expenses.";
const OOP_EXPENSES_FOOTNOTE = OOP_EXPENSES_MARKER + " " + OOP_EXPENSES_NOTE;
/** One stable marker per bank — must not reuse * ‡ ^ † § ◊ °. */
const RATE_CHANGE_BANK_MARKERS = {
  "hdfc bank": "⁕",
  "idfc first bank": "※",
  "yes bank": "⁜",
  "punjab national bank": "⁂",
  "south indian bank": "⁑",
  "bank of maharashtra": "¤",
  "dhanlaxmi bank": "✦",
  "axis bank": "✧",
  "bank of baroda": "◆",
  "kotak mahindra bank": "✶",
  "indian overseas bank": "✹",
  "idbi bank": "◈",
  "karnataka bank": "▴",
  "state bank of india": "⋆",
  "union bank of india": "⊹"
};
const RBI_FLOATING_PREPAY_HREF =
  "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=13140&Mode=0";
const FLOATING_PREPAY_NOTE =
  "Floating home loans to individuals have no prepayment charge under RBI.";
const FIXED_FORECLOSURE_NOTE =
  "Foreclosure means closing the full loan early. Lenders usually apply the same charge as prepayment, so foreclosure is not listed separately.";
const PROCESSING_FEE_LOGIN_NOTE =
  PROCESSING_FEE_MARKER +
  " This fee is mandatory. You pay it to go ahead on a sanction. Banks do not usually refund it. Part is often taken first as a login fee. That amount is already inside this number.";
/**
 * Customer label when the bank does not publish this charge or rule.
 * Source sheets may mark NA; that never reaches the UI — missing rows use this string.
 */
const CHARGE_NOT_PUBLISHED_BY_BANK = "Not published by bank";

function chargeNotPublishedDisplay() {
  return { main: CHARGE_NOT_PUBLISHED_BY_BANK, details: [], note: "" };
}

function isChargeNotPublishedLabel(value) {
  return normalizeText(value) === normalizeText(CHARGE_NOT_PUBLISHED_BY_BANK);
}

function chargeDisplayIsUnpublished(display) {
  if (display == null || display === "") return true;
  if (typeof display === "string") return isChargeNotPublishedLabel(display);
  if (typeof display !== "object") return false;
  return isChargeNotPublishedLabel(display.main);
}

const CALCULATION_COLUMN_KEYS = {
  loanAmount: true,
  emi: true,
  processingFee: true,
  propertyCheckCharges: true,
  governmentCharges: true,
  overdueChargeDisplay: true,
  emiBounceChargeDisplay: true,
  prepaymentChargeDisplay: true,
  rateChangeChargeDisplay: true
};

function columnOpensCalculation(column, display) {
  if (!column || !CALCULATION_COLUMN_KEYS[column.key]) return false;
  if (column.type === "charge" && chargeDisplayIsUnpublished(display)) return false;
  return true;
}

const PROPERTY_CHECK_ORIGIN = "Temporary.property_checks";
const PROPERTY_CHECK_CHARGE_NAMES = [
  "Legal and technical",
  "Title search report",
  "Valuation"
];
const PROPERTY_CHECK_NOTE =
  PROPERTY_CHECK_MARKER +
  " The bank runs these checks. They will not take a report you bring. Typical industry amounts. GST extra. Exact fees may differ at the branch.";

function rateChangeFrequencyNoteForMethod(method) {
  if (method === RATE_CHANGE_METHOD_REPRICE) {
    return RATE_CHANGE_FREQUENCY_NOTE_REPRICE;
  }
  if (method === RATE_CHANGE_METHOD_BENCHMARK) {
    return RATE_CHANGE_FREQUENCY_NOTE_BENCHMARK;
  }
  return RATE_CHANGE_FREQUENCY_NOTE;
}

function floatingPrepayNoteHtml() {
  return (
    escapeHtml("Floating home loans to individuals have no prepayment charge under RBI. See ") +
    '<a class="guide-section-link" href="' +
    escapeHtml(RBI_FLOATING_PREPAY_HREF) +
    '" target="_blank" rel="noopener noreferrer">' +
    "RBI directions" +
    '<span class="guide-section-link-arrow" aria-hidden="true">↗</span>' +
    '<span class="visually-hidden"> (opens official RBI page)</span></a>.'
  );
}

const CHARGES_NOTE_CHEVRON_SVG =
  '<svg class="hlc-charges-note-chevron" viewBox="0 0 10 10" aria-hidden="true" focusable="false">' +
  '<path d="M2.2 1.2 6.8 5 2.2 8.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
  "</svg>";

const DRAWER_CHEVRON_SVG =
  '<svg class="hlc-drawer-chevron" viewBox="0 0 10 10" aria-hidden="true" focusable="false">' +
  '<path d="M2.2 1.2 6.8 5 2.2 8.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
  "</svg>";

/**
 * Soft open/close for <details> groups — same motion as charges notes / form more.
 * options: groupSelector, panelSelector, toggleAllSelector
 */
function bindDetailsAccordion(container, options) {
  if (!container) return;
  const settings = options || {};
  const groupSelector = settings.groupSelector || ".hlc-charges-note-group";
  const panelSelector = settings.panelSelector || ".hlc-charges-note-panel";
  const toggleAllSelector =
    settings.toggleAllSelector || ".hlc-charges-note-toggle-all";
  const groups = container.querySelectorAll(groupSelector);
  if (!groups.length) return;

  const reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsDetailsContent =
    typeof CSS !== "undefined" &&
    CSS.supports &&
    CSS.supports("selector(::details-content)");
  const useNativeMotion = reduceMotion || supportsDetailsContent;
  const duration = 900;
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";
  const busyGroups = new WeakMap();
  const toggleAllBtn = container.querySelector(toggleAllSelector);

  function allGroupsOpen() {
    for (let i = 0; i < groups.length; i++) {
      if (!groups[i].open) return false;
    }
    return true;
  }

  function syncToggleAllLabel() {
    if (!toggleAllBtn) return;
    const collapse = allGroupsOpen();
    toggleAllBtn.textContent = collapse ? "Collapse all" : "Expand all";
    toggleAllBtn.setAttribute("aria-expanded", collapse ? "true" : "false");
  }

  function clearInline(panel, details) {
    details.classList.remove("is-animating");
    panel.style.height = "";
    panel.style.opacity = "";
    panel.style.overflow = "";
    panel.style.transition = "";
  }

  function animateDetails(details, open, panel, done) {
    if (useNativeMotion) {
      details.open = open;
      syncToggleAllLabel();
      if (done) done();
      return;
    }
    if (busyGroups.get(details)) return;
    busyGroups.set(details, true);
    details.classList.add("is-animating");

    if (open) {
      details.open = true;
      panel.style.overflow = "hidden";
      panel.style.height = "0px";
      panel.style.opacity = "0";
      panel.style.transition = "none";
      void panel.offsetHeight;
      panel.style.transition =
        "height " +
        duration +
        "ms " +
        ease +
        ", opacity " +
        Math.round(duration * 0.85) +
        "ms " +
        ease;
      panel.style.height = panel.scrollHeight + "px";
      panel.style.opacity = "1";
    } else {
      panel.style.overflow = "hidden";
      panel.style.height = panel.scrollHeight + "px";
      panel.style.opacity = "1";
      panel.style.transition = "none";
      void panel.offsetHeight;
      panel.style.transition =
        "height " +
        duration +
        "ms " +
        ease +
        ", opacity " +
        Math.round(duration * 0.75) +
        "ms " +
        ease;
      panel.style.height = "0px";
      panel.style.opacity = "0";
    }

    function onEnd(event) {
      if (event.propertyName !== "height") return;
      panel.removeEventListener("transitionend", onEnd);
      if (!open) details.open = false;
      clearInline(panel, details);
      busyGroups.set(details, false);
      syncToggleAllLabel();
      if (done) done();
    }

    panel.addEventListener("transitionend", onEnd);
  }

  groups.forEach(function (details) {
    const panel = details.querySelector(panelSelector);
    if (!panel) return;

    details.addEventListener("toggle", syncToggleAllLabel);

    if (!useNativeMotion) {
      details.addEventListener("click", function (event) {
        const summary = event.target.closest("summary");
        if (!summary || summary.parentElement !== details) return;
        event.preventDefault();
        animateDetails(details, !details.open, panel);
      });
    }
  });

  if (toggleAllBtn) {
    toggleAllBtn.addEventListener("click", function () {
      const open = !allGroupsOpen();
      // Bulk toggle sets open state directly so nested groups stay in sync
      // (animated height on a parent while children also change is unreliable).
      groups.forEach(function (details) {
        const panel = details.querySelector(panelSelector);
        details.open = open;
        if (panel) clearInline(panel, details);
      });
      syncToggleAllLabel();
    });
  }

  syncToggleAllLabel();
}

function bindChargesNoteDropdowns(container) {
  bindDetailsAccordion(container, {
    groupSelector: ".hlc-charges-note-group",
    panelSelector: ".hlc-charges-note-panel",
    toggleAllSelector: ".hlc-charges-note-toggle-all"
  });
}

function bindDrawerDropdowns(container) {
  bindDetailsAccordion(container, {
    groupSelector: ".hlc-drawer-group",
    panelSelector: ".hlc-drawer-panel",
    toggleAllSelector: ".hlc-drawer-toggle-all"
  });
}

function drawerToolbarHtml(controlsId) {
  return (
    '<div class="hlc-drawer-toolbar">' +
    '<h3 class="hlc-drawer-toolbar-heading">More details</h3>' +
    '<div class="hlc-drawer-actions">' +
    '<button type="button" class="hlc-drawer-toggle-all" aria-controls="' +
    escapeHtml(controlsId || "hlc-drawer-body") +
    '" aria-expanded="false">Expand all</button>' +
    "</div></div>"
  );
}

function drawerDiscloseHtml(title, bodyHtml, options) {
  const settings = options || {};
  const openAttr = settings.open === true ? " open" : "";
  const nestedClass = settings.nested ? " hlc-drawer-group--nested" : "";
  return (
    '<details class="hlc-drawer-group' +
    nestedClass +
    '"' +
    openAttr +
    ">" +
    '<summary class="hlc-drawer-toggle">' +
    '<span class="hlc-drawer-title-row">' +
    '<span class="hlc-drawer-label">' +
    escapeHtml(title) +
    "</span>" +
    DRAWER_CHEVRON_SVG +
    "</span></summary>" +
    '<div class="hlc-drawer-panel">' +
    bodyHtml +
    "</div></details>"
  );
}

function calcNotesBlockHtml(lines) {
  const list = (lines || []).filter(function (line) {
    return String(line || "").trim();
  });
  if (!list.length) return "";
  return (
    '<div class="hlc-calc-notes">' +
    list
      .map(function (line) {
        return (
          '<p class="hlc-story-note">' +
          escapeHtml(line).replace(/\n/g, "<br>") +
          "</p>"
        );
      })
      .join("") +
    "</div>"
  );
}

function calcDrawerBodyHtml(calcHtml, extras) {
  const extra = extras || {};
  const calcTitle = extra.calcTitle || "Calculation of the charges";
  const noteLines = extra.noteLines || [];
  const notesBlock = calcNotesBlockHtml(noteLines);
  let html = drawerDiscloseHtml(
    calcTitle,
    calcHtml || "",
    { open: true }
  );
  if (extra.detailsHtml) {
    html += drawerDiscloseHtml("All amounts", extra.detailsHtml);
  }
  if (noteLines.length >= 2 && notesBlock) {
    html += drawerDiscloseHtml("Notes", notesBlock);
  } else if (notesBlock) {
    html += notesBlock;
  }
  if (extra.footHtml) html += extra.footHtml;
  return html;
}

function chargesNoteGroupId(heading) {
  return (
    "hlc-charge-note-" +
    String(heading || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}

/**
 * Footnote mark in the table (* ° ‡ ^ …). Opens the matching Notes dropdown.
 * Use plain=true inside another control (e.g. charge slab button) so we never
 * nest buttons. Underline sits tight under the glyph; colour turns blue on
 * hover / press.
 */
function footnoteRefHtml(marker, noteGroupId, options) {
  if (!marker) return "";
  const opts = options || {};
  const safeMarker = escapeHtml(marker);
  if (!noteGroupId) {
    return (
      '<sup class="hlc-col-footnote" aria-hidden="true">' +
      safeMarker +
      "</sup>"
    );
  }
  if (opts.plain) {
    return (
      '<sup class="hlc-col-footnote" data-note-target="' +
      escapeHtml(noteGroupId) +
      '">' +
      safeMarker +
      "</sup>"
    );
  }
  return (
    '<button type="button" class="hlc-col-footnote" data-note-target="' +
    escapeHtml(noteGroupId) +
    '" aria-label="Open note for mark ' +
    safeMarker +
    '">' +
    safeMarker +
    "</button>"
  );
}

/**
 * Leading footnote glyphs from note lines, in first-seen order (no duplicates).
 * Automatic: any future note that starts with "SYMBOL text" (symbol + space) is
 * picked up for the heading brackets — no hardcoded marker list to maintain.
 */
function footnoteMarkersFromNoteParts(noteParts) {
  const markers = [];
  const seen = Object.create(null);
  (noteParts || []).forEach(function (part) {
    const plain = String(part || "")
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    const chars = Array.from(plain);
    if (chars.length < 2 || chars[1] !== " ") return;
    const marker = chars[0];
    if (/^[A-Za-z0-9]$/.test(marker)) return;
    if (seen[marker]) return;
    seen[marker] = true;
    markers.push(marker);
  });
  return markers;
}

/** Footnote block under the table — heading matches the column charge name. */
function chargesNoteGroupHtml(heading, noteParts) {
  if (!noteParts || !noteParts.length) return "";
  const groupId = chargesNoteGroupId(heading);
  const markers = footnoteMarkersFromNoteParts(noteParts);
  const markerHtml = markers.length
    ? ' <span class="hlc-charges-note-markers" aria-hidden="true">(' +
      escapeHtml(markers.join(" ")) +
      ")</span>" +
      '<span class="visually-hidden"> (symbols ' +
      escapeHtml(markers.join(", ")) +
      ")</span>"
    : "";
  return (
    '<details class="hlc-charges-note-group" id="' +
    escapeHtml(groupId) +
    '">' +
    '<summary class="hlc-charges-note-toggle">' +
    '<span class="hlc-charges-note-title">' +
    '<span class="hlc-charges-note-label">' +
    escapeHtml(heading) +
    markerHtml +
    "</span>" +
    CHARGES_NOTE_CHEVRON_SVG +
    "</span></summary>" +
    '<div class="hlc-charges-note-panel">' +
    '<div class="hlc-charges-note-body">' +
    noteParts.join("<br><br>") +
    "</div></div></details>"
  );
}

function chargesNoteToolbarHtml() {
  return (
    '<div class="hlc-charges-note-toolbar">' +
    '<h3 class="hlc-charges-note-heading" id="hlc-charges-note-heading">Notes</h3>' +
    '<div class="hlc-charges-note-actions">' +
    '<button type="button" class="hlc-charges-note-toggle-all" aria-controls="hlc-charges-note" aria-expanded="false">Expand all</button>' +
    "</div></div>"
  );
}

function columnLabelForKey(groupName, columnKey) {
  const columns = GROUPS[groupName] || [];
  for (let i = 0; i < columns.length; i++) {
    if (columns[i].key === columnKey) return columns[i].label;
  }
  return columnKey;
}

function columnFootnoteMarker(groupName, columnKey) {
  const columns = GROUPS[groupName] || [];
  for (let i = 0; i < columns.length; i++) {
    if (columns[i].key === columnKey) {
      return typeof columns[i].footnote === "string" ? columns[i].footnote : "";
    }
  }
  return "";
}

function laterChargesColumns(showPrepayment) {
  if (showPrepayment) return GROUPS.laterCharges.slice();
  return GROUPS.laterCharges.filter(function (column) {
    return column.key !== "prepaymentChargeDisplay";
  });
}

/**
 * Visible Other-charges fee columns. The table stays the card width: Bank is
 * fixed, these columns share what is left (see data-charge-count in CSS).
 */
function laterChargesFeeCount(showPrepayment) {
  return laterChargesColumns(showPrepayment).length;
}

function columnsForGroup(group, showPrepayment) {
  if (group === "laterCharges") {
    return laterChargesColumns(showPrepayment);
  }
  return GROUPS[group];
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function maxLoanForProperty(propertyValue) {
  const value = Number(propertyValue);
  if (!(value > 0)) return 0;
  if (value <= 3000000) return value * 0.9;
  if (value <= 7500000) return value * 0.8;
  return value * 0.75;
}

function propertyFundedPct(propertyValue) {
  const value = Number(propertyValue);
  if (!(value > 0)) return 0;
  if (value <= 3000000) return 90;
  if (value <= 7500000) return 80;
  return 75;
}

function monthlyRateFromAnnualDecimal(annualDecimal) {
  return Number(annualDecimal) / 12;
}

function formatPctPlain(value) {
  if (!Number.isFinite(Number(value))) return "—";
  const n = Number(value);
  if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n)) + "%";
  return (Math.round(n * 100) / 100).toFixed(2) + "%";
}

function tenureInWordsFromRow(row) {
  const years = formatTenureYears(row && row.tenureYears);
  if (years === "—") {
    return String((row && row.tenureMonths) || 0) + " months";
  }
  return years === "1" ? "1 year" : years + " years";
}

function amortizationSchedule(principal, annualRateDecimal, tenureMonths) {
  const months = Math.max(0, Math.round(Number(tenureMonths) || 0));
  const amount = Number(principal);
  const r = monthlyRateFromAnnualDecimal(annualRateDecimal);
  const emi = emiFromLoan(amount, annualRateDecimal, months / 12);
  const rows = [];
  let outstanding = amount;
  for (let m = 1; m <= months && outstanding > 0; m++) {
    const interest = outstanding * r;
    const principalPart = Math.min(outstanding, emi - interest);
    outstanding = Math.max(0, outstanding - principalPart);
    rows.push({
      month: m,
      interest: interest,
      principal: principalPart,
      outstanding: outstanding
    });
  }
  return { emi: emi, rows: rows };
}

function chargeUsesWhicheverHigher(charge) {
  if (!charge) return false;
  return [charge.note_1, charge.note_2, charge.special_rule].some(function (value) {
    return /overdue_whichever_higher=yes/i.test(String(value || ""));
  });
}

function matchChargeSlab(slabs, amount) {
  const list = slabs || [];
  if (!list.length) return null;
  const value = Number(amount) || 0;
  return (
    list.filter(function (charge) {
      const from = charge.slab_from == null ? -Infinity : Number(charge.slab_from);
      const to = charge.slab_to == null ? Infinity : Number(charge.slab_to);
      return value >= from && value <= to;
    })[0] || list[0]
  );
}

const MISSED_EMI_DAYS = 30;

function chargeCaseFromParts(emi, loanAmount, tenureMonths) {
  return {
    emi: Number(emi) || 0,
    loanAmount: Number(loanAmount) || 0,
    tenureMonths: Number(tenureMonths) || 0,
    missedEmiDays: MISSED_EMI_DAYS
  };
}

function chargeCaseFromRow(row) {
  return chargeCaseFromParts(
    row && row.emi,
    row && row.loanAmount,
    row && row.tenureMonths
  );
}

function encodedChargeNumber(charge, key) {
  const blob = [
    charge && charge.note_1,
    charge && charge.note_2,
    charge && charge.special_rule
  ]
    .map(function (value) {
      return String(value || "");
    })
    .join("; ");
  const match = blob.match(new RegExp(key + "=([\\d.]+)", "i"));
  return match ? Number(match[1]) : null;
}

function slabMatchAmount(charge, chargeCase) {
  const basis = normalizeText(charge && charge.slab_basis);
  if (basis.indexOf("sanctioned") >= 0) {
    return chargeCase && chargeCase.loanAmount;
  }
  return chargeCase && chargeCase.emi;
}

function chargeRowApplies(charge, chargeCase) {
  if (!charge) return false;
  const tenureMonths = chargeCase && chargeCase.tenureMonths;
  const tenureMax = encodedChargeNumber(charge, "overdue_tenure_months_max");
  if (
    tenureMax != null &&
    Number.isFinite(tenureMax) &&
    Number(tenureMonths) > tenureMax
  ) {
    return false;
  }
  const dayMin = encodedChargeNumber(charge, "overdue_days_min");
  const dayMax = encodedChargeNumber(charge, "overdue_days_max");
  if (dayMin == null && dayMax == null) return true;
  const days = (chargeCase && chargeCase.missedEmiDays) || MISSED_EMI_DAYS;
  if (dayMin != null && Number.isFinite(dayMin) && days < dayMin) return false;
  if (dayMax != null && Number.isFinite(dayMax) && days > dayMax) return false;
  return true;
}

function overdueSlabsForCase(candidates, selectedCharge) {
  const amountSlabs = listMatchingChargeSlabs(candidates, selectedCharge);
  if (amountSlabs.length > 1) return amountSlabs;
  const pctSlabs = listOverduePercentageSlabRows(candidates, selectedCharge);
  if (pctSlabs.length > 1) return pctSlabs;
  return amountSlabs;
}

function preferredBounceArea(candidates) {
  const areas = uniqueStrings(
    (candidates || [])
      .map(function (charge) {
        return charge.charge_by_area;
      })
      .filter(Boolean)
  );
  if (areas.length < 2) return "";
  return (
    areas.find(function (area) {
      return normalizeText(area) === "metro";
    }) || areas[0]
  );
}

function listBounceChargeSlabs(candidates, selectedCharge) {
  if (!selectedCharge) return [];
  const area = selectedCharge.charge_by_area || preferredBounceArea(candidates);
  const pool = (candidates || []).filter(function (charge) {
    if (area && charge.charge_by_area && charge.charge_by_area !== area) {
      return false;
    }
    return true;
  });
  const seed =
    pool.find(function (charge) {
      return (
        charge.charge_name === selectedCharge.charge_name &&
        normalizeText(charge.has_slab_wise_charges) === "yes"
      );
    }) || selectedCharge;
  return listMatchingChargeSlabs(pool, seed);
}

function resolveApplicableCharge(schedule, fallback, chargeCase, matchAmount) {
  const list = schedule && schedule.length ? schedule : fallback ? [fallback] : [];
  const applicable = list.filter(function (charge) {
    return chargeRowApplies(charge, chargeCase);
  });
  const pool = applicable.length ? applicable : list;
  if (!pool.length) return fallback || null;
  if (pool.length === 1) return pool[0];
  const amount =
    matchAmount != null && Number.isFinite(Number(matchAmount))
      ? Number(matchAmount)
      : slabMatchAmount(pool[0], chargeCase);
  return matchChargeSlab(pool, amount) || pool[0];
}

function applicableSlabSentence(charge, chargeCase) {
  const band = formatChargeSlabBand(charge);
  if (!band) return "";
  const usesLoan =
    normalizeText(charge && charge.slab_basis).indexOf("sanctioned") >= 0;
  return (
    (usesLoan ? "This loan sits in the bank’s " : "This EMI sits in the bank’s ") +
    band +
    " band."
  );
}

function formatResolvedChargeDisplay(charge, options) {
  const display = formatChargeDisplay(charge, options || { hideBasis: true });
  if (!display || !charge) return display;
  const band = formatChargeSlabBand(charge);
  if (band && display.details.indexOf(band) < 0) {
    display.details = [band].concat(display.details || []);
  }
  return display;
}

function formatResolvedBounceDisplay(charge) {
  const display = formatChargeDisplay(charge, {
    hideBasis: true,
    hideUnit: true,
    hideGst: true
  });
  if (!display || !charge) return display;
  const method = formatEmiBounceMethodLabel(charge.charge_name);
  const band = formatEmiBounceSlabBand(charge);
  const area = String(charge.charge_by_area || "").trim();
  const extras = [];
  if (method && method !== charge.charge_name) extras.push(method);
  if (band) {
    extras.push(area ? band + " in " + area.toLowerCase() + " areas" : band);
  }
  display.details = uniqueStrings(
    extras.concat(display.details || []).filter(Boolean)
  );
  return display;
}

function overdueExtraForMissedEmi(charge, emi, rowRoiDecimal) {
  const overdueAmount = Math.max(0, Number(emi) || 0);
  if (!charge || !(overdueAmount > 0)) {
    return { extra: 0, kind: "none", overdueAmount: overdueAmount, graceDays: 0 };
  }
  const graceDays =
    normalizeText(charge.has_grace_period) === "yes" &&
    charge.grace_period_days != null
      ? Math.round(Number(charge.grace_period_days))
      : 0;
  if (graceDays >= 30) {
    return {
      extra: 0,
      kind: "grace",
      overdueAmount: overdueAmount,
      graceDays: graceDays
    };
  }
  if (normalizeText(charge.special_rule) === "as_per_roi") {
    return {
      extra: overdueAmount * monthlyRateFromAnnualDecimal(rowRoiDecimal),
      kind: "row_rate",
      overdueAmount: overdueAmount,
      graceDays: graceDays,
      yearPct: Number(rowRoiDecimal) * 100
    };
  }
  const pct =
    charge.percentage != null && Number.isFinite(Number(charge.percentage))
      ? Number(charge.percentage)
      : null;
  let extra = 0;
  let kind = "rule";
  if (pct != null) {
    extra =
      normalizeText(charge.percentage_per_annum) === "yes"
        ? overdueAmount * (pct / 12)
        : overdueAmount * pct;
    kind = "percent";
  } else if (charge.fixed_amount != null && Number.isFinite(Number(charge.fixed_amount))) {
    extra = Number(charge.fixed_amount);
    kind = "fixed";
  }
  const floor =
    charge.charge_min != null && Number.isFinite(Number(charge.charge_min))
      ? Number(charge.charge_min)
      : null;
  const rawExtra = extra;
  const usedFloor =
    floor != null &&
    (chargeUsesWhicheverHigher(charge) || pct != null) &&
    extra < floor;
  if (usedFloor) extra = floor;
  return {
    extra: extra,
    rawExtra: rawExtra,
    kind: kind,
    overdueAmount: overdueAmount,
    graceDays: graceDays,
    yearPct: pct != null ? pct * 100 : null,
    perAnnum: normalizeText(charge.percentage_per_annum) === "yes",
    floor: floor,
    usedFloor: Boolean(usedFloor)
  };
}

function bounceExtraForMissedEmi(charge, emi) {
  if (!charge) return { extra: 0, gst: 0, total: 0 };
  const base = computeProcessingFee(charge, emi);
  const amount =
    base != null && Number.isFinite(base) ? base : Number(charge.fixed_amount) || 0;
  const gst = amount * governmentChargeGstRate(charge);
  return { extra: amount, gst: gst, total: amount + gst };
}

function missedEmiMonthTotal(
  overdueCharge,
  bounceCharge,
  emi,
  rowRoiDecimal,
  loanAmount,
  tenureMonths
) {
  const chargeCase = chargeCaseFromParts(emi, loanAmount, tenureMonths);
  const overduePart = overdueExtraForMissedEmi(
    overdueCharge,
    emi,
    rowRoiDecimal
  );
  if (overdueCharge && formatChargeSlabBand(overdueCharge)) {
    overduePart.kind = "slab";
    overduePart.slabSentence = applicableSlabSentence(overdueCharge, chargeCase);
  }
  const overdueRuleNote = formatEncodedChargeNote(
    overdueCharge && overdueCharge.note_1
  );
  if (overdueRuleNote) overduePart.ruleNote = overdueRuleNote;
  const bouncePart = bounceExtraForMissedEmi(bounceCharge, emi);
  if (bounceCharge && formatChargeSlabBand(bounceCharge)) {
    bouncePart.slabSentence = applicableSlabSentence(bounceCharge, chargeCase);
  }
  return {
    overdue: overduePart,
    bounce: bouncePart,
    total: (overduePart.extra || 0) + bouncePart.total
  };
}

/**
 * Exact min/max on the live matching set (not the visible slice).
 * Pill words are always Lowest / Highest. Colour follows whether that
 * extreme helps or costs: cost columns (rate, fees) vs benefit (loan).
 */
const COLUMN_COMPARE_KIND = {
  effectiveRoiPct: "cost",
  loanAmount: "benefit",
  emi: "cost",
  processingFee: "cost",
  propertyCheckCharges: "cost",
  governmentCharges: "cost",
  prepaymentChargeDisplay: "cost",
  rateChangeChargeDisplay: "cost",
  overdueChargeDisplay: "cost",
  emiBounceChargeDisplay: "cost"
};

function finiteOrNull(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function comparableColumnValue(row, columnKey) {
  if (!row || !columnKey) return null;
  if (columnKey === "effectiveRoiPct") return finiteOrNull(row.effectiveRoiPct);
  if (columnKey === "loanAmount") return finiteOrNull(row.loanAmount);
  if (columnKey === "emi") return finiteOrNull(row.emi);
  if (columnKey === "processingFee") return finiteOrNull(row.processingFee);
  if (columnKey === "propertyCheckCharges") {
    return finiteOrNull(row.propertyCheckCharges);
  }
  if (columnKey === "governmentCharges") {
    return finiteOrNull(row.governmentCharges);
  }
  if (columnKey === "prepaymentChargeDisplay") {
    if (chargeDisplayIsUnpublished(row.prepaymentChargeDisplay)) return null;
    return finiteOrNull(row.prepaymentChargeSortValue);
  }
  if (columnKey === "rateChangeChargeDisplay") {
    if (chargeDisplayIsUnpublished(row.rateChangeChargeDisplay)) return null;
    return finiteOrNull(row.rateChangeChargeSortValue);
  }
  if (columnKey === "overdueChargeDisplay") {
    if (chargeDisplayIsUnpublished(row.overdueChargeDisplay)) return null;
    if (!row.overdueCharge) return null;
    const overdueExtra = overdueExtraForMissedEmi(
      row.overdueCharge,
      row.emi,
      row.roiDecimal
    ).extra;
    const bounceTotal = bounceExtraForMissedEmi(row.emiBounceCharge, row.emi).total;
    return finiteOrNull((overdueExtra || 0) + (bounceTotal || 0));
  }
  if (columnKey === "emiBounceChargeDisplay") {
    if (chargeDisplayIsUnpublished(row.emiBounceChargeDisplay)) return null;
    if (!row.emiBounceCharge) return null;
    return finiteOrNull(bounceExtraForMissedEmi(row.emiBounceCharge, row.emi).total);
  }
  return null;
}

function buildCompareRanks(rows) {
  const byRow = {};
  if (!rows || !rows.length) return byRow;
  Object.keys(COLUMN_COMPARE_KIND).forEach(function (columnKey) {
    const entries = [];
    rows.forEach(function (row) {
      const value = comparableColumnValue(row, columnKey);
      if (value == null) return;
      entries.push({ id: row.id, value: value });
    });
    if (entries.length < 2) return;
    let min = Infinity;
    let max = -Infinity;
    entries.forEach(function (entry) {
      if (entry.value < min) min = entry.value;
      if (entry.value > max) max = entry.value;
    });
    if (min === max) return;
    entries.forEach(function (entry) {
      let mark = "";
      if (entry.value === min) mark = "low";
      else if (entry.value === max) mark = "high";
      if (!mark) return;
      if (!byRow[entry.id]) byRow[entry.id] = {};
      byRow[entry.id][columnKey] = mark;
    });
  });
  return byRow;
}

function compareRankTone(columnKey, mark) {
  const kind = COLUMN_COMPARE_KIND[columnKey];
  if (!kind || (mark !== "low" && mark !== "high")) return "";
  if (kind === "benefit") return mark === "high" ? "helpful" : "costly";
  return mark === "low" ? "helpful" : "costly";
}

function overdueGraceDays(row) {
  const charge = row && row.overdueCharge;
  if (!charge) return 0;
  if (normalizeText(charge.has_grace_period) !== "yes") return 0;
  if (charge.grace_period_days == null) return 0;
  const days = Math.round(Number(charge.grace_period_days));
  return Number.isFinite(days) && days > 0 ? days : 0;
}

function gracePillLabel(days) {
  if (!(days > 0)) return "";
  return days === 1 ? "1-day grace" : String(days) + "-day grace";
}

function compareRankNumClass(row, column, ranks) {
  if (!row || !column) return "";
  if (column.type === "charge" && chargeDisplayIsUnpublished(row[column.key])) {
    return "";
  }
  const mark = ranks && ranks[row.id] && ranks[row.id][column.key];
  const tone = compareRankTone(column.key, mark);
  return tone ? " hlc-rank-num hlc-rank-num--" + tone : "";
}

function compareRankPillsHtml(row, column, ranks) {
  if (!row || !column) return "";
  if (column.type === "charge" && chargeDisplayIsUnpublished(row[column.key])) {
    return "";
  }
  let html = "";
  const mark = ranks && ranks[row.id] && ranks[row.id][column.key];
  if (mark === "low" || mark === "high") {
    const tone = compareRankTone(column.key, mark);
    html +=
      '<span class="hlc-rank-pill hlc-rank-pill--' +
      tone +
      '">' +
      (mark === "low" ? "Lowest" : "Highest") +
      "</span>";
  }
  if (column.key === "overdueChargeDisplay") {
    const label = gracePillLabel(overdueGraceDays(row));
    if (label) {
      html +=
        '<span class="hlc-rank-pill hlc-rank-pill--grace">' +
        escapeHtml(label) +
        "</span>";
    }
  }
  if (!html) return "";
  return '<span class="hlc-rank-pills">' + html + "</span>";
}

function figureWithRankPills(figureHtml, pillsHtml) {
  if (!pillsHtml) return figureHtml;
  return (
    '<span class="hlc-rank-wrap">' +
    '<span class="hlc-rank-figure">' +
    figureHtml +
    "</span>" +
    pillsHtml +
    "</span>"
  );
}

function loanAmountWalkModel(row, query) {
  const propertyValue = Math.max(0, Number(query.propertyValue) || 0);
  const fundedPct = propertyFundedPct(propertyValue);
  const basis = row.incomeBasis || emptyIncomeBasis();
  const totalIncome = basis.monthlyIncome;
  const existingEmis = basis.existingEmis;
  const cardLimits = basis.cardLimits;
  const foirPct = normalizeFoirPct(query.foirPct);
  const cardLoadPct = normalizeCardLoadPct(query.cardLoadPct);
  const incomeAllowance = totalIncome * (foirPct / 100);
  const cardLoad = cardLimits * (cardLoadPct / 100);
  const afterEmis = Math.max(0, incomeAllowance - existingEmis);
  const emiRoom = Math.max(0, afterEmis - cardLoad);
  const bankMaximum =
    row.offer &&
    row.offer.req_amount_max != null &&
    Number.isFinite(Number(row.offer.req_amount_max))
      ? Number(row.offer.req_amount_max)
      : null;
  const bankMaxApplies =
    bankMaximum != null &&
    bankMaximum <= Math.min(row.fromProperty, row.fromIncome);
  let limiter = "income";
  if (bankMaxApplies && Math.round(bankMaximum) === Math.round(row.loanAmount)) {
    limiter = "bank";
  } else if (
    Math.round(row.fromProperty) === Math.round(row.loanAmount) &&
    Math.round(row.fromIncome) === Math.round(row.loanAmount)
  ) {
    limiter = "both";
  } else if (Math.round(row.fromProperty) === Math.round(row.loanAmount)) {
    limiter = "house";
  }
  return {
    propertyValue: propertyValue,
    fundedPct: fundedPct,
    downPayment: row.downPayment,
    totalIncome: totalIncome,
    foirPct: foirPct,
    incomeAllowance: incomeAllowance,
    existingEmis: existingEmis,
    afterEmis: afterEmis,
    cardLimits: cardLimits,
    cardLoadPct: cardLoadPct,
    cardLoad: cardLoad,
    emiRoom: emiRoom,
    fromProperty: row.fromProperty,
    fromIncome: row.fromIncome,
    bankMaximum: bankMaximum,
    bankMaxApplies: bankMaxApplies,
    limiter: limiter,
    result: row.loanAmount,
    tenureLabel: tenureInWordsFromRow(row),
    ratePct: row.effectiveRoiPct,
    incomeBasis: basis
  };
}

function relationshipClubsIncome(value) {
  const wanted = normalizeText(value);
  for (let i = 0; i < CO_APPLICANT_RELATIONSHIPS.length; i++) {
    const entry = CO_APPLICANT_RELATIONSHIPS[i];
    if (normalizeText(entry.value) === wanted) return entry.clubs;
  }
  return false;
}

function occupationEarns(value) {
  const wanted = normalizeText(value);
  for (let i = 0; i < CO_APPLICANT_OCCUPATIONS.length; i++) {
    const entry = CO_APPLICANT_OCCUPATIONS[i];
    if (normalizeText(entry.value) === wanted) return entry.earns;
  }
  // Primary-applicant occupations ("Salaried", "Self-Employed…") always earn.
  return true;
}

function normalizeCoApplicant(raw, index) {
  const source = raw || {};
  const age = parseMoney(source.age);
  const cibil = parseMoney(source.cibilScore);
  const relationship = String(
    source.relationship || DEFAULT_CO_APPLICANT_RELATIONSHIP
  );
  const occupation = String(
    source.occupation || DEFAULT_CO_APPLICANT_OCCUPATION
  );
  const earns = occupationEarns(occupation);
  return {
    id: "co-" + (index + 1),
    relationship: relationship,
    occupation: occupation,
    age: Number.isFinite(age) ? age : null,
    cibilScore: Number.isFinite(cibil) ? cibil : null,
    monthlyIncome: earns ? Math.max(0, parseMoney(source.monthlyIncome) || 0) : 0,
    existingEmis: Math.max(0, parseMoney(source.existingEmis) || 0),
    cardLimits: Math.max(0, parseMoney(source.cardLimits) || 0),
    /** Income only pools when the lender accepts the relationship and there is income. */
    clubsIncome: earns && relationshipClubsIncome(relationship)
  };
}

function normalizeCoApplicants(list) {
  if (!Array.isArray(list)) return [];
  return list
    .slice(0, MAX_CO_APPLICANTS)
    .map(function (raw, index) {
      return normalizeCoApplicant(raw, index);
    });
}

/** Reads the current array shape, falling back to the older single-co-applicant fields. */
function coApplicantsFromValues(values) {
  if (Array.isArray(values.coApplicants)) return values.coApplicants;
  if (
    values.coMonthlyIncome == null &&
    values.coExistingEmis == null &&
    values.coCardLimits == null
  ) {
    return [];
  }
  return [
    {
      relationship: DEFAULT_CO_APPLICANT_RELATIONSHIP,
      occupation: DEFAULT_CO_APPLICANT_OCCUPATION,
      age: values.coAge,
      cibilScore: values.coCibilScore,
      monthlyIncome: values.coMonthlyIncome,
      existingEmis: values.coExistingEmis,
      cardLimits: values.coCardLimits
    }
  ];
}

function weakestCibilScore(primaryScore, coApplicants) {
  let weakest = primaryScore;
  (coApplicants || []).forEach(function (person) {
    if (person.cibilScore == null || !Number.isFinite(person.cibilScore)) return;
    if (weakest == null || !Number.isFinite(weakest)) return;
    weakest = Math.min(weakest, person.cibilScore);
  });
  return weakest;
}

/** Primary applicant first, then co-applicants — one shared shape for the engine. */
function applicantsFromQuery(query) {
  const primary = {
    id: "primary",
    relationship: "Self",
    occupation: query.occupation || "Salaried",
    age: query.age,
    cibilScore: query.primaryCibilScore != null ? query.primaryCibilScore : query.cibilScore,
    monthlyIncome: Math.max(0, Number(query.monthlyIncome) || 0),
    existingEmis: Math.max(0, Number(query.existingEmis) || 0),
    cardLimits: Math.max(0, Number(query.cardLimits) || 0),
    clubsIncome: true
  };
  return [primary].concat(query.coApplicants || []);
}

function emptyIncomeBasis() {
  return {
    monthlyIncome: 0,
    existingEmis: 0,
    cardLimits: 0,
    countedIds: [],
    droppedIds: [],
    tenureAge: null
  };
}

/**
 * Applicants whose income a lender may actually count on this offer: the
 * relationship must be allowed, there must be income, and they must clear the
 * scheme's minimum age. Anyone else can still sign, but adds nothing here.
 */
function clubbableApplicants(applicants, offer) {
  const ageMin = offer ? Number(offer.age_min) : NaN;
  return applicants.filter(function (person) {
    if (!person.clubsIncome) return false;
    if (!(person.monthlyIncome > 0)) return false;
    if (person.age == null || !Number.isFinite(person.age)) return true;
    if (Number.isFinite(ageMin) && person.age < ageMin) return false;
    return true;
  });
}

function totalsForApplicants(list) {
  const totals = emptyIncomeBasis();
  list.forEach(function (person) {
    totals.monthlyIncome += person.monthlyIncome;
    totals.existingEmis += person.existingEmis;
    totals.cardLimits += person.cardLimits;
    totals.countedIds.push(person.id);
  });
  return totals;
}

/**
 * Tenure is capped by the eldest borrower *whose income is counted* — lenders
 * state this explicitly (Can Fin Homes: "maximum age of 60 years of the eldest
 * borrower whose income is considered … and 85 years of the eldest borrower
 * whose income is not considered"). So counting an older earner buys income but
 * spends tenure, and the trade can go either way.
 *
 * We try each way of resolving it and keep the largest loan. Dropping a younger
 * earner while keeping an older one can never win — it loses income and leaves
 * the tenure cap untouched — so only the "drop the eldest earners" candidates
 * need testing: n + 1 of them, not 2^n.
 */
function resolveIncomeBasis(query, offer, roiDecimal, options) {
  const applicants = applicantsFromQuery(query);
  const pool = clubbableApplicants(applicants, offer).slice().sort(function (a, b) {
    const ageA = a.age == null ? -1 : a.age;
    const ageB = b.age == null ? -1 : b.age;
    return ageB - ageA;
  });

  let best = null;
  let fullPoolFromIncome = null;
  for (let drop = 0; drop < pool.length; drop++) {
    const counted = pool.slice(drop);
    if (!counted.length) break;
    const totals = totalsForApplicants(counted);
    const tenureAge = counted.reduce(function (oldest, person) {
      if (person.age == null || !Number.isFinite(person.age)) return oldest;
      return oldest == null ? person.age : Math.max(oldest, person.age);
    }, null);
    const tenureMonths =
      options && options.forMatching
        ? queryTenureMonthsForMatching(offer, query, tenureAge)
        : resolveTenureMonths(offer, tenureAge, query.tenureYears);
    const fromIncome = maxLoanFromIncome(
      totals.monthlyIncome,
      roiDecimal,
      tenureMonths,
      query.foirPct,
      totals.existingEmis,
      totals.cardLimits,
      query.cardLoadPct
    );
    if (drop === 0) fullPoolFromIncome = fromIncome;
    if (best && !(fromIncome > best.fromIncome)) continue;
    totals.tenureAge = tenureAge;
    totals.droppedIds = pool.slice(0, drop).map(function (person) {
      return person.id;
    });
    best = {
      basis: totals,
      tenureMonths: tenureMonths,
      fromIncome: fromIncome
    };
  }

  if (best) {
    best.basis.fullPoolFromIncome = fullPoolFromIncome;
    return best;
  }
  return {
    basis: emptyIncomeBasis(),
    tenureMonths: 0,
    fromIncome: 0
  };
}

function parseMoney(raw) {
  if (raw == null) return NaN;
  const cleaned = String(raw).replace(/[₹,\s]/g, "").trim();
  if (!cleaned) return NaN;
  return Number(cleaned);
}

function digitCount(raw) {
  return String(raw == null ? "" : raw).replace(/\D/g, "").length;
}

function truncateToMaxDigits(raw, maxDigits) {
  const limit = maxDigits == null ? 10 : maxDigits;
  const src = String(raw == null ? "" : raw);
  let out = "";
  let digits = 0;
  for (let i = 0; i < src.length; i++) {
    const ch = src.charAt(i);
    if (ch < "0" || ch > "9") continue;
    if (digits >= limit) continue;
    out += ch;
    digits++;
  }
  return out;
}

function formatInrDigits(value) {
  if (!Number.isFinite(value)) return "";
  return Math.round(value).toLocaleString("en-IN");
}

/** Indian grouping while typing (e.g. 12,00,000). */
function formatIndianAmountDigits(raw, maxDigits) {
  const digits = truncateToMaxDigits(raw, maxDigits);
  if (!digits) return "";
  return Number(digits).toLocaleString("en-IN");
}

function applyIndianMoneyFormat(input, maxDigits) {
  const start = input.selectionStart;
  const oldValue = input.value;
  const digitsBefore =
    typeof start === "number"
      ? (oldValue.slice(0, start).match(/\d/g) || []).length
      : digitCount(oldValue);
  const formatted = formatIndianAmountDigits(oldValue, maxDigits);
  if (input.value !== formatted) input.value = formatted;
  if (typeof start !== "number" || typeof input.setSelectionRange !== "function") return;
  let newPos = 0;
  let count = 0;
  for (let i = 0; i < formatted.length && count < digitsBefore; i++) {
    if (/\d/.test(formatted.charAt(i))) count++;
    newPos = i + 1;
  }
  input.setSelectionRange(newPos, newPos);
}

function queryFromInputs(values, productFilters) {
  const propertyValue = Math.max(0, parseMoney(values.propertyValue) || 0);
  const monthlyIncome = Math.max(0, parseMoney(values.monthlyIncome) || 0);
  const existingEmis = Math.max(0, parseMoney(values.existingEmis) || 0);
  const cardLimits = Math.max(0, parseMoney(values.cardLimits) || 0);
  const ageRaw = parseMoney(values.age);
  const cibilRaw = parseMoney(values.cibilScore);
  const tenureRaw = parseMoney(values.tenureYears);
  const age = Number.isFinite(ageRaw) ? ageRaw : null;
  const cibilScore = Number.isFinite(cibilRaw) ? cibilRaw : null;
  const filters = normalizeProductFilters(productFilters);
  const includeCoApplicant =
    values.includeCoApplicant === true ||
    values.includeCoApplicant === "yes" ||
    values.includeCoApplicant === "true";
  const coApplicants = includeCoApplicant
    ? normalizeCoApplicants(coApplicantsFromValues(values))
    : [];
  return {
    age: age,
    /** Every borrower is credit-checked, so the weakest score sets the band. */
    cibilScore: weakestCibilScore(cibilScore, coApplicants),
    primaryCibilScore: cibilScore,
    monthlyIncome,
    existingEmis,
    cardLimits,
    includeCoApplicant: includeCoApplicant && coApplicants.length > 0,
    coApplicants: coApplicants,
    cardLoadPct: normalizeCardLoadPct(values.cardLoadPct),
    tenureYears: normalizeTenureYears(tenureRaw),
    foirPct: normalizeFoirPct(values.foirPct),
    propertyValue,
    occupation: values.occupation || "Salaried",
    purpose: normalizePurpose(values.purpose),
    womenApplicant: Boolean(filters.womenApplicant),
    greenHome: Boolean(filters.greenHome),
    productFilters: filters,
    rateTypes: selectedRateTypes(filters),
    facilityTypes: selectedFacilityTypes(filters),
    bankTypes: selectedBankTypes(filters),
    rateType: primaryRateType(filters),
    facilityType: primaryFacilityType(filters),
    bankType: primaryBankType(filters)
  };
}

function normalizeFoirPct(value) {
  const n = Number(value);
  if (FOIR_CHOICES.indexOf(n) !== -1) return n;
  return DEFAULT_FOIR_PCT;
}

function normalizeCardLoadPct(value) {
  const n = Number(value);
  if (CARD_LOAD_PCT_CHOICES.indexOf(n) !== -1) return n;
  return DEFAULT_CARD_LOAD_PCT;
}

function normalizeTenureYears(value) {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return DEFAULT_TENURE_YEARS;
  return Math.min(MAX_TENURE_YEARS, Math.max(1, Math.round(n)));
}

/** Hard cap: min(requested years, bank+age max, 30 years), in months. */
function resolveTenureMonths(offer, age, requestedYears) {
  const maxMonths = Math.min(tenureMonthsForOffer(offer, age), MAX_TENURE_YEARS * 12);
  const wantYears = normalizeTenureYears(requestedYears);
  const wantMonths = Math.round(wantYears * 12);
  if (!(maxMonths > 0)) return 0;
  return Math.min(maxMonths, wantMonths);
}

/**
 * Tenure (months) used to test whether this row's tenure slab applies.
 * Uses what the customer asked for — not shrunk to this row's slab max first.
 */
function queryTenureMonthsForMatching(offer, query, tenureAge) {
  const wantMonths = Math.round(normalizeTenureYears(query.tenureYears) * 12);
  let ceiling = MAX_TENURE_YEARS * 12;

  const reqMax = Number(offer.req_repayment_tenure_months_max);
  if (Number.isFinite(reqMax) && reqMax > 0) {
    ceiling = Math.min(ceiling, reqMax);
  }

  const age = tenureAge === undefined ? query.age : tenureAge;
  if (age != null && Number.isFinite(age) && offer.age_max != null) {
    const ageMax = Number(offer.age_max);
    if (Number.isFinite(ageMax)) {
      const monthsUntilAgeMax = Math.max(0, Math.floor((ageMax - age) * 12));
      ceiling = Math.min(ceiling, monthsUntilAgeMax);
    }
  }

  if (!(ceiling > 0)) return 0;
  return Math.min(wantMonths, ceiling);
}

function maxTenureYearsAllowed(offer, age) {
  const maxMonths = Math.min(tenureMonthsForOffer(offer, age), MAX_TENURE_YEARS * 12);
  if (!(maxMonths > 0)) return 0;
  return Math.max(1, Math.floor(maxMonths / 12));
}

function normalizePurpose(value) {
  const normalized = normalizeText(value);
  if (
    normalized === "top-up loan" ||
    normalized === "top up loan" ||
    normalized === "top-up" ||
    normalized === "topup"
  ) {
    return "Top-up Loan";
  }
  return DEFAULT_PURPOSE;
}

function normalizeBankType(value) {
  const raw = String(value || "").trim();
  if (raw === "Public" || raw === "Private") return raw;
  return DEFAULT_BANK_TYPE;
}

function offerHasDiscount(offer) {
  const discount = offer.discount;
  if (discount == null || discount === "") return false;
  const value = Number(discount);
  return Number.isFinite(value) && value !== 0;
}

function matchesProductFilters(offer, query) {
  const filters = normalizeProductFilters(
    query.productFilters || defaultProductFilters()
  );
  const rateTypes =
    Array.isArray(query.rateTypes) && query.rateTypes.length
      ? query.rateTypes
      : selectedRateTypes(filters);
  const facilityTypes =
    Array.isArray(query.facilityTypes) && query.facilityTypes.length
      ? query.facilityTypes
      : selectedFacilityTypes(filters);
  const bankTypes =
    Array.isArray(query.bankTypes) && query.bankTypes.length
      ? query.bankTypes
      : selectedBankTypes(filters);

  if (!rateTypes.length || rateTypes.indexOf(offer.rate_type) === -1) {
    return false;
  }
  if (
    !facilityTypes.length ||
    facilityTypes.indexOf(offer.facility_type) === -1
  ) {
    return false;
  }
  if (!bankTypes.length || bankTypes.indexOf(offer.bank_type) === -1) {
    return false;
  }

  if (!matchesBorrowerCategoryForOffer(offer.borrower_category, filters.govtPsu)) {
    return false;
  }

  if (filters.insurance && offer.insurance_pricing_applicable !== "Yes") return false;
  if (filters.greenHome && offer.green_house_benefit_applicable !== "Yes") return false;
  if (filters.womenApplicant && offer.women_benefit_applicable !== "Yes") return false;

  return true;
}

/** Max repayment months for this offer at the customer's current age. */
function tenureMonthsForOffer(offer, age) {
  let maxMonths = Number(offer.req_repayment_tenure_months_max);
  if (!Number.isFinite(maxMonths) || maxMonths <= 0) maxMonths = 360;

  if (normalizeText(offer.tenure_band_applicable) === "yes" && offer.tenure_months_max != null) {
    maxMonths = Math.min(maxMonths, Number(offer.tenure_months_max));
  }

  if (age != null && Number.isFinite(age) && offer.age_max != null) {
    const ageMax = Number(offer.age_max);
    if (Number.isFinite(ageMax)) {
      const monthsUntilAgeMax = Math.max(0, Math.floor((ageMax - age) * 12));
      maxMonths = Math.min(maxMonths, monthsUntilAgeMax);
    }
  }

  let minMonths = Number(offer.req_repayment_tenure_months_min);
  if (!Number.isFinite(minMonths) || minMonths <= 0) minMonths = 1;

  if (normalizeText(offer.tenure_band_applicable) === "yes" && offer.tenure_months_min != null) {
    minMonths = Math.max(minMonths, Number(offer.tenure_months_min));
  }

  if (maxMonths < minMonths) return 0;
  return maxMonths;
}

function loanFromEmi(emi, roiDecimal, tenureMonths) {
  const payment = Number(emi);
  const months = Number(tenureMonths);
  if (!(payment > 0) || !(months > 0)) return 0;
  const monthlyRate = Number(roiDecimal) / 12;
  if (monthlyRate <= 0) return payment * months;
  return (payment * (1 - Math.pow(1 + monthlyRate, -months))) / monthlyRate;
}

function maxLoanFromIncome(monthlyIncome, roiDecimal, tenureMonths, foirPct, existingEmis, cardLimits, cardLoadPct) {
  if (!(monthlyIncome > 0) || !(tenureMonths > 0) || !(roiDecimal > 0)) return 0;
  const foir = normalizeFoirPct(foirPct);
  const emis = Math.max(0, Number(existingEmis) || 0);
  const loadPct = normalizeCardLoadPct(cardLoadPct);
  const cardLoad = Math.max(0, Number(cardLimits) || 0) * (loadPct / 100);
  const maxAllEmis = monthlyIncome * (foir / 100);
  const homeEmiRoom = Math.max(0, maxAllEmis - emis - cardLoad);
  if (!(homeEmiRoom > 0)) return 0;
  return loanFromEmi(homeEmiRoom, roiDecimal, tenureMonths);
}

function computeOfferTerms(query, offer, roiDecimal, options) {
  const chosen = resolveIncomeBasis(query, offer, roiDecimal, options);
  const tenureMonths = chosen.tenureMonths;
  const fromIncome = chosen.fromIncome;
  const fromProperty = maxLoanForProperty(query.propertyValue);
  let loanAmount = Math.min(fromProperty, fromIncome);

  if (offer.req_amount_max != null && Number.isFinite(Number(offer.req_amount_max))) {
    loanAmount = Math.min(loanAmount, Number(offer.req_amount_max));
  }
  if (offer.req_amount_min != null && loanAmount < Number(offer.req_amount_min)) {
    loanAmount = 0;
  }
  if (!(tenureMonths > 0)) loanAmount = 0;

  const tenureYears = tenureMonths / 12;
  const emi = loanAmount > 0 ? emiFromLoan(loanAmount, roiDecimal, tenureYears) : 0;
  const propertyValue = Math.max(0, Number(query.propertyValue) || 0);
  const downPayment = loanAmount > 0 ? Math.max(0, propertyValue - loanAmount) : 0;

  return {
    tenureMonths,
    tenureYears,
    loanAmount,
    downPayment,
    fromProperty,
    fromIncome,
    limiting: fromProperty <= fromIncome ? "property" : "income",
    emi,
    incomeBasis: chosen.basis
  };
}

function queryForOffer(query, offer) {
  const roiDecimal = effectiveRoiDecimal(offer, query);
  const terms = computeOfferTerms(query, offer, roiDecimal);
  return Object.assign({}, query, {
    loanAmount: terms.loanAmount,
    tenureMonths: terms.tenureMonths
  });
}

function formatTenureYears(years) {
  if (!Number.isFinite(years) || years <= 0) return "—";
  const rounded = Math.round(years * 10) / 10;
  return String(rounded);
}

function formatCheckedOnDate(isoDate) {
  if (!isoDate) return "";
  const parts = String(isoDate).split("-");
  if (parts.length !== 3) return String(isoDate);
  const parsed = new Date(
    Number(parts[0]),
    Number(parts[1]) - 1,
    Number(parts[2])
  );
  if (Number.isNaN(parsed.getTime())) return String(isoDate);
  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function formatFreshnessLabel(isoDate) {
  if (!isoDate) return "";
  const date = formatCheckedOnDate(isoDate);
  if (!date) return "";
  return "Last checked on " + date;
}

function formatDrawerFreshnessSubtitle(scheme, checkedOnIso) {
  const parts = [];
  if (scheme) parts.push(scheme);
  const freshness = formatFreshnessLabel(checkedOnIso);
  if (freshness) parts.push(freshness);
  return parts.join(" · ");
}

function matchesOptionalField(recordValue, queryValue) {
  const normalizedRecord = normalizeText(recordValue);
  if (!normalizedRecord || normalizedRecord === "any") return true;
  return normalizedRecord === normalizeText(queryValue);
}

/** Offer rows: Govt–PSU on → only that category. Off → never that category. */
function matchesBorrowerCategoryForOffer(recordCategory, govtPsu) {
  if (govtPsu) return recordCategory === GOVT_PSU_BORROWER_CATEGORY;
  return recordCategory !== GOVT_PSU_BORROWER_CATEGORY;
}

/** Charge rows: Govt–PSU on → that category or Any. Off → never Govt–PSU-only fees. */
function matchesBorrowerCategoryForCharge(recordCategory, govtPsu) {
  if (govtPsu) {
    return matchesOptionalField(recordCategory, GOVT_PSU_BORROWER_CATEGORY);
  }
  return recordCategory !== GOVT_PSU_BORROWER_CATEGORY;
}

function matchesBorrowerCategoryFilter(recordCategory, govtPsu) {
  return matchesBorrowerCategoryForOffer(recordCategory, govtPsu);
}

function inNumericBand(value, applicable, min, max) {
  if (normalizeText(applicable) !== "yes") return true;
  const amount = Number(value);
  if (!Number.isFinite(amount)) return false;
  const lower = Number(min);
  const upper = Number(max);
  if (Number.isFinite(lower) && amount < lower) return false;
  if (Number.isFinite(upper) && amount > upper) return false;
  return true;
}

function matchesAge(offer, age) {
  if (age == null || !Number.isFinite(age)) return true;
  const min = Number(offer.age_min);
  const max = Number(offer.age_max);
  if (Number.isFinite(min) && age < min) return false;
  if (Number.isFinite(max) && age > max) return false;
  return true;
}

/**
 * A joint loan fits the scheme's age window if at least one borrower whose
 * income is counted fits it. Others sign as non-financial co-applicants, whom
 * lenders hold to a far looser age limit.
 */
function matchesApplicantAges(offer, ages) {
  if (!Array.isArray(ages)) return matchesAge(offer, ages);
  const known = ages.filter(function (age) {
    return age != null && Number.isFinite(age);
  });
  if (!known.length) return true;
  return known.some(function (age) {
    return matchesAge(offer, age);
  });
}

function earningApplicantAges(query) {
  return applicantsFromQuery(query)
    .filter(function (person) {
      return person.clubsIncome && person.monthlyIncome > 0;
    })
    .map(function (person) {
      return person.age;
    });
}

function matchesCibilBand(offer, cibilScore) {
  const status = offer.cibil_score_status;
  // Bank does not price this row on CIBIL — always eligible on score grounds.
  if (status === "Not_Used") return true;

  // No score entered: only "No score" rows fit. Do not treat Thin_File (or Scored)
  // as a match and then guess by cheapest rate.
  if (cibilScore == null || !Number.isFinite(cibilScore)) {
    return status === "No_Score";
  }

  // Score entered: only rows whose status + numeric band both fit that score.
  if (status === "Scored" || status === "No_Score" || status === "Thin_File") {
    return inNumericBand(
      cibilScore,
      offer.cibil_band_applicable,
      offer.cibil_band_score_min,
      offer.cibil_band_score_max
    );
  }
  return false;
}

function prefilterOffer(offer, query) {
  if (offer.roi_availability !== "Offered") return false;
  if (!matchesOptionalField(offer.purpose, query.purpose)) return false;
  if (!matchesOptionalField(offer.occupation, query.occupation)) return false;
  if (!matchesCibilBand(offer, query.cibilScore)) return false;
  if (!matchesApplicantAges(offer, earningApplicantAges(query))) return false;
  if (!matchesProductFilters(offer, query)) return false;

  const roiDecimal = Number(offer.roi);
  if (!(roiDecimal > 0)) return false;

  const matchTenureMonths = queryTenureMonthsForMatching(offer, query);
  if (!(matchTenureMonths > 0)) return false;

  const terms = computeOfferTerms(query, offer, roiDecimal, { forMatching: true });
  if (!(terms.loanAmount > 0)) return false;

  if (
    !inNumericBand(
      terms.loanAmount,
      offer.loan_amount_band_applicable,
      offer.loan_amount_min,
      offer.loan_amount_max
    )
  ) {
    return false;
  }
  if (
    !inNumericBand(
      matchTenureMonths,
      offer.tenure_band_applicable,
      offer.tenure_months_min,
      offer.tenure_months_max
    )
  ) {
    return false;
  }
  return true;
}

function prefilterCharge(charge, query, offer) {
  if (charge.when_it_matters !== "Before offer") return false;
  if (normalizeText(charge.bank_key) !== normalizeText(offer.bank_key)) return false;
  if (!matchesOptionalField(charge.purpose, query.purpose)) return false;
  if (!matchesOptionalField(charge.occupation, query.occupation)) return false;
  if (!matchesOptionalField(charge.facility_type, offer.facility_type)) return false;
  if (charge.rate_type && offer.rate_type && charge.rate_type !== offer.rate_type) return false;
  if (charge.scheme && offer.scheme && charge.scheme !== offer.scheme) return false;
  const filters = (query && query.productFilters) || defaultProductFilters();
  if (!matchesBorrowerCategoryForCharge(charge.borrower_category, filters.govtPsu)) {
    return false;
  }
  if (
    !inNumericBand(
      query.loanAmount,
      charge.loan_amount_band_applicable,
      charge.loan_amount_min,
      charge.loan_amount_max
    )
  ) {
    return false;
  }
  if (
    !inNumericBand(
      query.tenureMonths,
      charge.tenure_band_applicable,
      charge.tenure_months_min,
      charge.tenure_months_max
    )
  ) {
    return false;
  }
  return true;
}

function prefilterAfterOfferCharge(charge, query, offer) {
  if (charge.when_it_matters !== "After offer") return false;
  if (normalizeText(charge.bank_key) !== normalizeText(offer.bank_key)) return false;
  if (!matchesOptionalField(charge.purpose, offer.purpose)) return false;
  if (!matchesOptionalField(charge.occupation, offer.occupation)) return false;
  if (!matchesOptionalField(charge.employment_type, offer.occupation)) return false;
  if (!matchesOptionalField(charge.facility_type, offer.facility_type)) return false;
  if (!matchesOptionalField(charge.borrower_category, offer.borrower_category)) return false;
  if (!matchesOptionalField(charge.rate_type, offer.rate_type)) return false;
  if (!matchesOptionalField(charge.scheme, offer.scheme)) return false;
  if (
    !inNumericBand(
      query.loanAmount,
      charge.loan_amount_band_applicable,
      charge.loan_amount_min,
      charge.loan_amount_max
    )
  ) {
    return false;
  }
  if (
    !inNumericBand(
      query.tenureMonths,
      charge.tenure_band_applicable,
      charge.tenure_months_min,
      charge.tenure_months_max
    )
  ) {
    return false;
  }
  return true;
}

/**
 * Drawer scope: this bank + scheme/purpose/facility (Any allowed).
 * Does not use the user's occupation, rate filter, loan size, or tenure —
 * More details is the full scheme fee book; the table stays selection-wise.
 */
function matchesSchemeBookScope(charge, offer) {
  if (!charge || !offer) return false;
  if (normalizeText(charge.bank_key) !== normalizeText(offer.bank_key)) return false;
  if (!matchesOptionalField(charge.purpose, offer.purpose)) return false;
  if (!matchesOptionalField(charge.facility_type, offer.facility_type)) return false;
  if (!matchesOptionalField(charge.scheme, offer.scheme)) return false;
  return true;
}

function prefilterChargeForSchemeBook(charge, offer) {
  if (!charge || charge.when_it_matters !== "Before offer") return false;
  return matchesSchemeBookScope(charge, offer);
}

function prefilterAfterOfferChargeForSchemeBook(charge, offer) {
  if (!charge || charge.when_it_matters !== "After offer") return false;
  return matchesSchemeBookScope(charge, offer);
}

function afterOfferSpecificityScore(charge) {
  return specificityScore(charge, [
    "scheme",
    "occupation",
    "employment_type",
    "purpose",
    "rate_type",
    "facility_type",
    "borrower_category",
    "loan_amount_band_applicable",
    "tenure_band_applicable"
  ]);
}

function listRankedAfterOfferCharges(charges, query, offer, rankCharge) {
  const candidates = charges.filter(function (charge) {
    return prefilterAfterOfferCharge(charge, query, offer) && rankCharge(charge) >= 0;
  });
  candidates.sort(function (a, b) {
    const categoryDifference = rankCharge(b) - rankCharge(a);
    if (categoryDifference !== 0) return categoryDifference;
    return afterOfferSpecificityScore(b) - afterOfferSpecificityScore(a);
  });
  return candidates;
}

function pickBestAfterOfferCharge(charges, query, offer, rankCharge) {
  const candidates = listRankedAfterOfferCharges(charges, query, offer, rankCharge);
  return candidates.length ? candidates[0] : null;
}

function listMatchingChargeSlabs(candidates, selectedCharge) {
  if (
    !selectedCharge ||
    normalizeText(selectedCharge.has_slab_wise_charges) !== "yes"
  ) {
    return [];
  }
  return candidates
    .filter(function (charge) {
      return (
        charge.charge_name === selectedCharge.charge_name &&
        charge.charge_group_id === selectedCharge.charge_group_id &&
        normalizeText(charge.has_slab_wise_charges) === "yes"
      );
    })
    .sort(function (a, b) {
      return chargeSlabStart(a) - chargeSlabStart(b);
    });
}

function rankPrepaymentCharge(charge) {
  return charge.charge_name === "Prepayment charges" ? 1 : -1;
}

function isPrepaymentNotCharged(charge) {
  if (!charge) return false;
  const note = String(charge.note_1 || "");
  if (/prepayment not charged/i.test(note)) return true;
  if (/prepayment nil/i.test(note)) return true;
  return (
    charge.fixed_amount === 0 &&
    (charge.percentage == null || charge.percentage === 0)
  );
}

function rankFixedPrepayCharge(charge, expectedName) {
  if (charge.charge_name !== expectedName) return -1;
  let score = 1000;
  if (isPrepaymentNotCharged(charge)) {
    score -= 200;
  } else if (
    charge.percentage != null &&
    Number.isFinite(Number(charge.percentage))
  ) {
    score += Math.round(Number(charge.percentage) * 10000);
  }
  if (
    charge.months_from_event_min != null ||
    charge.months_from_event_max != null
  ) {
    score += 20;
    if (charge.months_from_event_max != null) {
      score += Math.max(0, 12 - Number(charge.months_from_event_max));
    }
  }
  return score;
}

function pickOwnFundsPrepayCharge(charges, query, offer) {
  return pickBestAfterOfferCharge(charges, query, offer, function (charge) {
    return rankFixedPrepayCharge(charge, "Prepayment charges");
  });
}

function pickTakeoverPrepayCharge(charges, query, offer) {
  return pickBestAfterOfferCharge(charges, query, offer, function (charge) {
    return rankFixedPrepayCharge(charge, "Prepayment charges (takeover)");
  });
}

function formatMonthsFromEventDetail(charge) {
  const min =
    charge.months_from_event_min != null &&
    Number.isFinite(Number(charge.months_from_event_min))
      ? Number(charge.months_from_event_min)
      : null;
  const max =
    charge.months_from_event_max != null &&
    Number.isFinite(Number(charge.months_from_event_max))
      ? Number(charge.months_from_event_max)
      : null;
  if (min == null && max == null) return "";

  const basisKey = normalizeText(charge.months_from_event_basis).replace(
    /[_\s-]+/g,
    "_"
  );
  const basisLabels = {
    final_disbursement: "final disbursement",
    disbursement: "disbursement",
    loan_start: "loan start"
  };
  const basis = basisLabels[basisKey] || (basisKey ? basisKey.replace(/_/g, " ") : "disbursement");

  if (min != null && max != null) {
    if (min === 0) {
      return "within " + Math.round(max) + " months of " + basis;
    }
    return (
      Math.round(min) +
      "–" +
      Math.round(max) +
      " months from " +
      basis
    );
  }
  if (max != null) {
    return "within " + Math.round(max) + " months of " + basis;
  }
  if (min === 0) return "from " + basis;
  return Math.round(min) + "+ months from " + basis;
}

function formatPercentageAppliesPerDetail(charge) {
  const key = normalizeText(charge.percentage_applies_per).replace(
    /[_\s-]+/g,
    "_"
  );
  if (!key || key === "once") return "";
  if (key === "residual_year_to_original_maturity") {
    return "per residual year to original maturity";
  }
  return "per " + key.replace(/_/g, " ");
}

function appendPrepaymentStructuredDetails(display, charge) {
  if (!display || !charge) return display;
  const details = (display.details || []).slice();
  const monthsDetail = formatMonthsFromEventDetail(charge);
  if (monthsDetail) details.push(monthsDetail);
  const appliesPer = formatPercentageAppliesPerDetail(charge);
  if (appliesPer) details.push(appliesPer);
  if (normalizeText(charge.has_slab_wise_charges) === "yes") {
    const slabBand = formatChargeSlabBand(charge);
    if (slabBand) details.push(slabBand);
  }
  display.details = details;
  return display;
}

const PART_PREPAY_MODE_LABELS = {
  digital: "Online / digital",
  offline: "Branch / offline"
};

const PART_PREPAY_BASIS_LABELS = {
  Outstanding_Balance: "outstanding balance",
  Opening_FY_Outstanding_Principal: "opening FY outstanding principal"
};

const PART_PREPAY_ACCOUNT_LABELS = {
  EMI_Auto_Debit_Account: "EMI auto-debit account",
  Registered_Bank_Account: "Registered bank account",
  Any_Bank_Account: "Any bank account",
  Own_Bank_Savings_Account: "Own bank savings account"
};

const PART_PREPAY_VIA_LABELS = {
  Email_Payment_Link: "Email payment link",
  Cheque: "Cheque",
  Cash_Or_Cheque: "Cash or cheque",
  Yono_Netbanking_Or_Third_Party: "YONO / net banking / third party",
  NetBanking: "Net banking",
  Mobile_Or_Internet_Banking: "Mobile or internet banking",
  Loan_Centre: "Loan centre",
  NEFT_With_Service_Request: "NEFT with service request",
  NEFT_With_Branch_Confirmation: "NEFT with branch confirmation"
};

const PART_PREPAY_PAYER_LABELS = {
  Applicant: "Applicant",
  Co_Applicant: "Co-applicant",
  Primary_Account_Holder: "Primary account holder"
};

function humanizePartPrepayToken(token) {
  if (token == null || token === "") return null;
  const key = String(token).trim();
  return (
    PART_PREPAY_VIA_LABELS[key] ||
    PART_PREPAY_ACCOUNT_LABELS[key] ||
    PART_PREPAY_PAYER_LABELS[key] ||
    key.replace(/_/g, " ")
  );
}

function formatPartPrepayYesNo(value) {
  if (value === "Yes") return "Yes";
  if (value === "No") return "No";
  return null;
}

function formatPartPrepaymentLockIn(rule) {
  const count = rule.part_payment_not_allowed_for_first;
  if (count == null) return null;
  if (count === 0) return "None";
  const basis = rule.part_payment_not_allowed_for_first_basis || "EMIs";
  if (basis === "EMIs") {
    return count === 1 ? "1 EMI" : count + " EMIs";
  }
  if (basis === "Months") {
    return count === 1 ? "1 month" : count + " months";
  }
  if (basis === "Days") {
    return count === 1 ? "1 day" : count + " days";
  }
  return count + " " + String(basis).toLowerCase();
}

function formatPartPrepaymentMinimum(rule) {
  const parts = [];
  if (rule.minimum_part_payment_amount_flat_inr != null) {
    parts.push(formatInr(rule.minimum_part_payment_amount_flat_inr));
  }
  if (rule.minimum_part_payment_amount_of_emis != null) {
    const emis = rule.minimum_part_payment_amount_of_emis;
    parts.push(emis === 1 ? "1 EMI" : emis + " EMIs");
  }
  if (rule.minimum_part_payment_percent != null) {
    const basis =
      PART_PREPAY_BASIS_LABELS[rule.minimum_part_payment_percent_basis] ||
      "outstanding balance";
    parts.push(rule.minimum_part_payment_percent + "% of " + basis);
  }
  if (!parts.length) return null;
  if (rule.whichever_is_lower === "Yes" && parts.length > 1) {
    return parts.join(" or ") + " (whichever is lower)";
  }
  return parts.join("; ");
}

function formatPartPrepaymentMaximumPerRequest(rule) {
  const parts = [];
  if (rule.maximum_part_payment_month_inr != null) {
    parts.push(
      formatInr(rule.maximum_part_payment_month_inr) + " per calendar month"
    );
  }
  if (rule.maximum_part_payment_percent != null) {
    const basis =
      PART_PREPAY_BASIS_LABELS[rule.maximum_part_payment_percent_basis] ||
      "outstanding balance";
    parts.push(
      rule.maximum_part_payment_percent + "% of " + basis + " per request"
    );
  }
  return parts.length ? parts.join("; ") : null;
}

function formatPartPrepaymentMaximumFY(rule) {
  if (rule.maximum_part_payment_year_percent == null) return null;
  const basis =
    PART_PREPAY_BASIS_LABELS[rule.maximum_part_payment_year_percent_basis] ||
    "opening FY outstanding principal";
  return (
    rule.maximum_part_payment_year_percent +
    "% of " +
    basis +
    " per financial year"
  );
}

/** Intelligence + tips: prefer digital rules, then offline, then first published row. */
const PREPAYMENT_SIMULATION_YEAR = 3;

function pickPrimaryPartPrepaymentRule(rules) {
  const list = rules || [];
  if (!list.length) return null;
  const digital = list.filter(function (rule) {
    return rule && rule.mode === "digital";
  });
  const offline = list.filter(function (rule) {
    return rule && rule.mode === "offline";
  });
  return digital[0] || offline[0] || list[0] || null;
}

function partPrepaymentLockInMonths(rule) {
  if (!rule) return 0;
  const count = rule.part_payment_not_allowed_for_first;
  if (count == null || count === 0) return 0;
  const basis = rule.part_payment_not_allowed_for_first_basis || "EMIs";
  if (basis === "EMIs" || basis === "Months") return Number(count);
  if (basis === "Days") return Math.ceil(Number(count) / 30);
  return Number(count);
}

function resolvePartPrepaymentMinimum(rule, emiAmount) {
  if (!rule) return 0;
  const parts = [];
  if (
    rule.minimum_part_payment_amount_flat_inr != null &&
    Number.isFinite(Number(rule.minimum_part_payment_amount_flat_inr))
  ) {
    parts.push(Number(rule.minimum_part_payment_amount_flat_inr));
  }
  if (
    rule.minimum_part_payment_amount_of_emis != null &&
    Number.isFinite(Number(rule.minimum_part_payment_amount_of_emis)) &&
    emiAmount > 0
  ) {
    parts.push(Number(rule.minimum_part_payment_amount_of_emis) * emiAmount);
  }
  if (!parts.length) return 0;
  if (rule.whichever_is_lower === "Yes" && parts.length > 1) {
    return Math.min.apply(null, parts);
  }
  return Math.max.apply(null, parts);
}

function resolvePartPrepaymentMaximum(rule, outstanding) {
  const caps = [outstanding];
  if (!rule) return outstanding;
  if (
    rule.maximum_part_payment_month_inr != null &&
    Number.isFinite(Number(rule.maximum_part_payment_month_inr))
  ) {
    caps.push(Number(rule.maximum_part_payment_month_inr));
  }
  if (
    rule.maximum_part_payment_year_percent != null &&
    Number.isFinite(Number(rule.maximum_part_payment_year_percent))
  ) {
    caps.push(
      outstanding * (Number(rule.maximum_part_payment_year_percent) / 100)
    );
  }
  if (
    rule.maximum_part_payment_percent != null &&
    Number.isFinite(Number(rule.maximum_part_payment_percent))
  ) {
    caps.push(outstanding * (Number(rule.maximum_part_payment_percent) / 100));
  }
  return Math.min.apply(
    null,
    caps.filter(function (value) {
      return Number.isFinite(value) && value > 0;
    })
  );
}

function walkOutstandingPrincipal(loanAmount, roiDecimal, emi, months) {
  let remaining = loanAmount;
  for (let month = 0; month < months; month += 1) {
    const interest = remaining * (roiDecimal / 12);
    const principal = emi - interest;
    remaining -= principal;
  }
  return Math.max(0, remaining);
}

function computePrepaymentChargeAmount(charge, prepayAmount) {
  if (!charge || isPrepaymentNotCharged(charge)) return 0;
  const amount = computeProcessingFee(charge, prepayAmount);
  if (amount == null || !Number.isFinite(amount)) return null;
  return roundInrToPaise(amount);
}

function buildPartPrepaymentIntelNotes(rule, scenario) {
  const notes = [];
  if (rule) {
    const lockIn = formatPartPrepaymentLockIn(rule);
    if (lockIn && lockIn !== "None") {
      notes.push("First part-prepayment after " + lockIn);
    }
    const minimum = formatPartPrepaymentMinimum(rule);
    if (minimum) notes.push("Minimum per request: " + minimum);
    const fyCap = formatPartPrepaymentMaximumFY(rule);
    if (fyCap) notes.push("FY cap: " + fyCap);
    const via = humanizePartPrepayToken(rule.per_part_prepayment_done_via);
    if (via) notes.push("Pay via " + via);
  }
  if (scenario.prepayCharge > 0) {
    notes.push(
      "Prepayment charge on this amount: " + formatInr(scenario.prepayCharge)
    );
  } else if (scenario.chargeKnownNil) {
    notes.push("No prepayment charge published for this match");
  }
  return notes;
}

/**
 * Deterministic part-prepayment scenario for intelligence.
 * Uses enriched row fields: loan terms, partPrepaymentRules, prepayOwnFundsCharge.
 */
function simulatePartPrepaymentScenario(row, helpers, options) {
  const opts = options || {};
  const year = opts.year != null ? Number(opts.year) : PREPAYMENT_SIMULATION_YEAR;
  if (!row || !helpers || typeof helpers.emiFromLoan !== "function") return null;

  const loanAmount = Number(row.loanAmount);
  const tenureYears = Number(row.tenureYears);
  let roiDecimal = row.roiDecimal;
  if (roiDecimal == null && row.effectiveRoiPct != null) {
    roiDecimal = Number(row.effectiveRoiPct) / 100;
  }
  if (
    !Number.isFinite(loanAmount) ||
    loanAmount < 1000000 ||
    !Number.isFinite(tenureYears) ||
    tenureYears <= year ||
    !Number.isFinite(roiDecimal) ||
    roiDecimal <= 0
  ) {
    return null;
  }

  const emiBefore = helpers.emiFromLoan(loanAmount, roiDecimal, tenureYears);
  if (!Number.isFinite(emiBefore) || emiBefore <= 0) return null;

  const simMonths = year * 12;
  const outstandingBefore = walkOutstandingPrincipal(
    loanAmount,
    roiDecimal,
    emiBefore,
    simMonths
  );
  if (outstandingBefore <= 0) return null;

  const rule = pickPrimaryPartPrepaymentRule(row.partPrepaymentRules);
  const lockInMonths = partPrepaymentLockInMonths(rule);
  if (lockInMonths > 0 && simMonths <= lockInMonths) return null;

  const minRequired = resolvePartPrepaymentMinimum(rule, emiBefore);
  const maxAllowed = resolvePartPrepaymentMaximum(rule, outstandingBefore);
  let prepayAmount = outstandingBefore * 0.05;
  if (prepayAmount < minRequired) prepayAmount = minRequired;
  if (prepayAmount > maxAllowed) prepayAmount = maxAllowed;
  if (prepayAmount <= 0 || prepayAmount >= outstandingBefore) return null;

  const charge = row.prepayOwnFundsCharge || null;
  const chargeKnownNil = Boolean(charge && isPrepaymentNotCharged(charge));
  const prepayChargeRaw = computePrepaymentChargeAmount(charge, prepayAmount);
  if (prepayChargeRaw === null) return null;
  const prepayCharge = prepayChargeRaw;

  const outstandingAfter = outstandingBefore - prepayAmount;
  const emiAfter = helpers.emiFromLoan(
    outstandingAfter,
    roiDecimal,
    tenureYears - year
  );
  if (!Number.isFinite(emiAfter) || emiAfter <= 0) return null;

  const emiDrop = Math.round(emiBefore - emiAfter);
  if (emiDrop < 200) return null;

  const remainingMonths = (tenureYears - year) * 12;
  const lifetimeSaving = emiDrop * remainingMonths;
  const netSaving = lifetimeSaving - prepayCharge;
  if (netSaving < 5000) return null;

  const scenario = {
    year: year,
    bankName: row.bankName || "",
    rule: rule,
    lockInMonths: lockInMonths,
    outstandingBefore: outstandingBefore,
    prepayAmount: prepayAmount,
    prepayCharge: prepayCharge,
    chargeKnownNil: chargeKnownNil,
    emiBefore: emiBefore,
    emiAfter: emiAfter,
    emiDrop: emiDrop,
    lifetimeSaving: lifetimeSaving,
    netSaving: netSaving
  };
  scenario.constraintNotes = buildPartPrepaymentIntelNotes(rule, scenario);
  return scenario;
}

function formatPartPrepaymentPortalDays(rule) {
  const minDays = rule.part_payment_reflects_in_portal_days_min;
  const maxDays = rule.part_payment_reflects_in_portal_days_max;
  if (minDays == null && maxDays == null) return null;
  if (minDays != null && maxDays != null && minDays === maxDays) {
    return minDays + " days";
  }
  if (minDays != null && maxDays != null) {
    return minDays + "–" + maxDays + " days";
  }
  if (minDays != null) return "From " + minDays + " days";
  return "Up to " + maxDays + " days";
}

function buildPartPrepaymentRulePairs(rule) {
  const pairs = [];
  function add(label, value) {
    if (value == null || value === "") return;
    pairs.push([label, value]);
  }

  add(
    "Rate type",
    rule.charge_type ? formatRateTypeLabel(rule.charge_type) : null
  );
  add(
    "Only after full disbursement",
    formatPartPrepayYesNo(rule.after_fully_disbursed_loan_amount)
  );
  add("Lock-in before first part prepayment", formatPartPrepaymentLockIn(rule));
  add(
    "First EMI must have started",
    formatPartPrepayYesNo(rule.first_emi_must_have_commenced)
  );
  add("No overdue allowed", formatPartPrepayYesNo(rule.requires_no_overdue));
  if (rule.blocked_within_days_of_emi_due_date != null) {
    const days = rule.blocked_within_days_of_emi_due_date;
    add(
      "Blocked near EMI due date",
      days === 0 ? "On EMI due date" : "Within " + days + " days of EMI due date"
    );
  }
  add("Minimum part prepayment", formatPartPrepaymentMinimum(rule));
  add("Maximum per request", formatPartPrepaymentMaximumPerRequest(rule));
  add("Maximum per financial year", formatPartPrepaymentMaximumFY(rule));
  if (rule.part_payment_allowed_in_a_calendar_month != null) {
    add(
      "Part prepayments per calendar month",
      String(rule.part_payment_allowed_in_a_calendar_month)
    );
  }
  if (rule.part_payment_allowed_in_a_financial_year != null) {
    add(
      "Part prepayments per financial year",
      String(rule.part_payment_allowed_in_a_financial_year)
    );
  }
  if (rule.part_payment_allowed_per_day != null) {
    add("Part prepayments per day", String(rule.part_payment_allowed_per_day));
  }
  add("At home loan branch", formatPartPrepayYesNo(rule.at_home_loan_branch));
  add("Pay from account", humanizePartPrepayToken(rule.from_which_bank_account));
  add("How to pay", humanizePartPrepayToken(rule.per_part_prepayment_done_via));
  add("Whose account", humanizePartPrepayToken(rule.from_whose_account));
  add("Shows in portal", formatPartPrepaymentPortalDays(rule));
  add(
    "Own-funds proof required",
    formatPartPrepayYesNo(rule.requires_own_funds_proof)
  );

  return pairs;
}

function partPrepaymentRuleMatchesOffer(rule, offer) {
  if (!rule || !offer) return false;
  if (!rule.charge_type) return true;
  return (
    normalizeText(rule.charge_type) === normalizeText(offer.rate_type)
  );
}

function listPartPrepaymentRulesForOffer(allRules, offer) {
  const bankKey = normalizeText(offer && offer.bank_key);
  if (!bankKey) return [];
  return (allRules || []).filter(function (rule) {
    return (
      normalizeText(rule.bank_key) === bankKey &&
      partPrepaymentRuleMatchesOffer(rule, offer)
    );
  });
}

function partPrepaymentRuleModeTitle(rule) {
  return PART_PREPAY_MODE_LABELS[rule.mode] || String(rule.mode || "Rules");
}

function partPrepaymentRuleVariantTitle(rule, index) {
  const via = humanizePartPrepayToken(rule.per_part_prepayment_done_via);
  if (via) return via;
  return "Published rules" + (index > 0 ? " " + (index + 1) : "");
}

function drawerKeyValueCardHtml(pairs) {
  if (!pairs || !pairs.length) return "";
  return (
    '<div class="hlc-drawer-card">' +
    pairs
      .map(function (pair) {
        return (
          '<div class="hlc-kv"><span class="hlc-kv-label">' +
          escapeHtml(pair[0]) +
          '</span><span class="hlc-kv-value">' +
          escapeHtml(pair[1]) +
          "</span></div>"
        );
      })
      .join("") +
    "</div>"
  );
}

function drawerPartPrepaymentModeHtml(modeRules) {
  if (!modeRules || !modeRules.length) return "";

  function ruleBlockHtml(rule, index) {
    const pairs = buildPartPrepaymentRulePairs(rule);
    if (!pairs.length) return "";
    const body = drawerKeyValueCardHtml(pairs);
    if (modeRules.length === 1) return body;
    return drawerDiscloseHtml(
      partPrepaymentRuleVariantTitle(rule, index),
      body,
      { nested: true }
    );
  }

  const modeTitle = partPrepaymentRuleModeTitle(modeRules[0]);
  const inner = modeRules
    .map(function (rule, index) {
      return ruleBlockHtml(rule, index);
    })
    .filter(Boolean)
    .join("");

  if (!inner) return "";
  return drawerDiscloseHtml(modeTitle, inner, { nested: true });
}

function drawerPartPrepaymentRulesHtml(rules) {
  if (!rules || !rules.length) return "";

  const digital = rules.filter(function (rule) {
    return rule.mode === "digital";
  });
  const offline = rules.filter(function (rule) {
    return rule.mode === "offline";
  });
  const inner =
    drawerPartPrepaymentModeHtml(digital) + drawerPartPrepaymentModeHtml(offline);
  if (!inner) return "";
  return drawerDiscloseHtml(
    "Part prepayment rules",
    '<div class="hlc-fee-sections">' + inner + "</div>"
  );
}

function formatPrepaymentChargeDisplay(charge) {
  if (!charge) return chargeNotPublishedDisplay();
  if (isPrepaymentNotCharged(charge)) {
    return {
      main: "Nil (₹0)",
      details: [],
      note: ""
    };
  }
  const display = formatChargeDisplay(charge, {
    hideBasis: true,
    hideUnit: true,
    hideGst: true
  });
  return appendPrepaymentStructuredDetails(display, charge);
}

function formatPrepaymentChargeDetail(charge) {
  if (!charge || isPrepaymentNotCharged(charge)) {
    return formatChargeDisplayText(formatPrepaymentChargeDisplay(charge));
  }
  const display = formatChargeDisplay(charge, {
    hideUnit: true,
    hideGst: false
  });
  return formatChargeDisplayText(
    appendPrepaymentStructuredDetails(display, charge)
  );
}

function prepayChargeForMethod(row, method) {
  if (method === PREPAYMENT_METHOD_BT) return row.prepayTakeoverCharge || null;
  return row.prepayOwnFundsCharge || null;
}

function prepaymentSortValue(charge) {
  if (!charge) return null;
  if (isPrepaymentNotCharged(charge)) return 0;
  if (charge.percentage != null && Number.isFinite(Number(charge.percentage))) {
    return Number(charge.percentage) * 100;
  }
  if (
    charge.fixed_amount != null &&
    Number.isFinite(Number(charge.fixed_amount))
  ) {
    return Number(charge.fixed_amount);
  }
  return null;
}

function applyPrepaymentMethodToRows(rows, method) {
  rows.forEach(function (row) {
    const charge = prepayChargeForMethod(row, method);
    row.prepaymentChargeDisplay = formatPrepaymentChargeDisplay(charge);
    row.prepaymentChargeSortValue = prepaymentSortValue(charge);
  });
  return rows;
}

function normalizeRateTypeToken(rateType) {
  return normalizeText(rateType) === "fixed" ? "Fixed" : "Floating";
}

function rateChangeTypeSwitchLabel(rateType) {
  return normalizeRateTypeToken(rateType) === "Fixed"
    ? "Fixed ➔ Floating"
    : "Floating ➔ Fixed";
}

function rateChangeTypeSwitchDirection(rateType) {
  if (normalizeRateTypeToken(rateType) === "Fixed") {
    return { from: "Fixed", to: "Floating" };
  }
  return { from: "Floating", to: "Fixed" };
}

function fieldsMatchLoose(actual, expected) {
  return normalizeText(actual) === normalizeText(expected);
}

function rankRateChangeTypeSwitch(charge, rateType) {
  if (charge.charge_name !== RATE_CHANGE_CHARGE_TYPE_SWITCH) return -1;
  const dir = rateChangeTypeSwitchDirection(rateType);
  if (
    !fieldsMatchLoose(charge.interest_rate_type_switch_from, dir.from) ||
    !fieldsMatchLoose(charge.interest_rate_type_switch_to, dir.to)
  ) {
    return -1;
  }
  return 1;
}

function rankRateChangeRepricing(charge, rateType) {
  if (charge.charge_name !== RATE_CHANGE_CHARGE_REPRICING) return -1;
  if (
    !fieldsMatchLoose(
      charge.interest_rate_repricing_type,
      normalizeRateTypeToken(rateType)
    )
  ) {
    return -1;
  }
  return 1;
}

function rankRateChangeBenchmark(charge) {
  if (charge.charge_name !== RATE_CHANGE_CHARGE_BENCHMARK) return -1;
  let score = 100;
  const cust = normalizeText(charge.customer_type).replace(/-/g, "_");
  if (!cust || cust === "individual") score += 50;
  if (cust === "non_individual") score -= 50;
  if (charge.percentage != null && Number(charge.percentage) > 0) score += 30;
  if (charge.fixed_amount != null && Number(charge.fixed_amount) > 0) score += 20;
  if (
    charge.fixed_amount === 0 &&
    /nil if conversion to card rate/i.test(String(charge.note_1 || ""))
  ) {
    score -= 40;
  }
  return score;
}

function pickRateChangeTypeSwitchCharge(charges, query, offer) {
  return pickBestAfterOfferCharge(charges, query, offer, function (c) {
    return rankRateChangeTypeSwitch(c, offer.rate_type);
  });
}

function pickRateChangeRepricingCharge(charges, query, offer) {
  return pickBestAfterOfferCharge(charges, query, offer, function (c) {
    return rankRateChangeRepricing(c, offer.rate_type);
  });
}

function pickRateChangeBenchmarkCharge(charges, query, offer) {
  return pickBestAfterOfferCharge(charges, query, offer, rankRateChangeBenchmark);
}

function rateChangeChargeForMethod(row, method) {
  if (method === RATE_CHANGE_METHOD_REPRICE) {
    return row.rateChangeRepricingCharge || null;
  }
  if (method === RATE_CHANGE_METHOD_BENCHMARK) {
    return row.rateChangeBenchmarkCharge || null;
  }
  return row.rateChangeTypeSwitchCharge || null;
}

function rateChangeCandidatesForMethod(row, method) {
  if (method === RATE_CHANGE_METHOD_REPRICE) {
    return row.rateChangeRepricingCandidates || [];
  }
  if (method === RATE_CHANGE_METHOD_BENCHMARK) {
    return row.rateChangeBenchmarkCandidates || [];
  }
  return row.rateChangeTypeSwitchCandidates || [];
}

function rateChangeSortValue(charge) {
  if (!charge) return null;
  if (charge.percentage != null && Number.isFinite(Number(charge.percentage))) {
    return Number(charge.percentage) * 100;
  }
  if (
    charge.fixed_amount != null &&
    Number.isFinite(Number(charge.fixed_amount))
  ) {
    return Number(charge.fixed_amount);
  }
  return null;
}

function formatRateChangeChargeDisplay(charge) {
  const display = formatResolvedChargeDisplay(charge, {
    hideBasis: false,
    hideUnit: true,
    hideGst: true
  });
  if (display) display.note = "";
  return display;
}

function rateChangeBankKey(row, charge) {
  return normalizeText(row && row.bankName) || normalizeText(charge && charge.bank_name);
}

function rateChangeMarkerForBankKey(bankKey) {
  const key = normalizeText(bankKey);
  if (RATE_CHANGE_BANK_MARKERS[key]) return RATE_CHANGE_BANK_MARKERS[key];
  if (/hdfc/.test(key)) return RATE_CHANGE_BANK_MARKERS["hdfc bank"];
  if (/idfc/.test(key)) return RATE_CHANGE_BANK_MARKERS["idfc first bank"];
  if (/yes bank/.test(key)) return RATE_CHANGE_BANK_MARKERS["yes bank"];
  if (/punjab national|\bpnb\b/.test(key)) {
    return RATE_CHANGE_BANK_MARKERS["punjab national bank"];
  }
  if (/south indian/.test(key)) return RATE_CHANGE_BANK_MARKERS["south indian bank"];
  if (/maharashtra/.test(key)) return RATE_CHANGE_BANK_MARKERS["bank of maharashtra"];
  if (/dhanlaxmi/.test(key)) return RATE_CHANGE_BANK_MARKERS["dhanlaxmi bank"];
  if (/axis/.test(key)) return RATE_CHANGE_BANK_MARKERS["axis bank"];
  if (/baroda|\bbob\b/.test(key)) return RATE_CHANGE_BANK_MARKERS["bank of baroda"];
  if (/kotak/.test(key)) return RATE_CHANGE_BANK_MARKERS["kotak mahindra bank"];
  if (/indian overseas|\biob\b/.test(key)) {
    return RATE_CHANGE_BANK_MARKERS["indian overseas bank"];
  }
  if (/idbi/.test(key)) return RATE_CHANGE_BANK_MARKERS["idbi bank"];
  if (/karnataka/.test(key)) return RATE_CHANGE_BANK_MARKERS["karnataka bank"];
  if (/state bank|\bsbi\b/.test(key)) {
    return RATE_CHANGE_BANK_MARKERS["state bank of india"];
  }
  if (/union bank/.test(key)) return RATE_CHANGE_BANK_MARKERS["union bank of india"];
  return "";
}

/** Customer Notes: two references only. Bank-published names stay off this surface. */
function benchmarkReferenceKind(token) {
  const key = normalizeText(token)
    .replace(/[()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!key) return "";
  if (
    key === "mclr" ||
    key === "bplr" ||
    key === "sbar" ||
    key === "base rate" ||
    key.indexOf("marginal cost") !== -1 ||
    key.indexOf("prime lending") !== -1 ||
    key.indexOf("state bank advance") !== -1
  ) {
    return "bank";
  }
  if (
    key === "rllr" ||
    key === "eblr" ||
    key === "ebr" ||
    key === "repo rate" ||
    key.indexOf("repo") !== -1 ||
    key.indexOf("external benchmark") !== -1
  ) {
    return "repo";
  }
  return "";
}

function uniqueBenchmarkReferenceKinds(value) {
  const kinds = [];
  String(value || "")
    .split(/\s*\/\s*/)
    .forEach(function (token) {
      const kind = benchmarkReferenceKind(token);
      if (kind && kinds.indexOf(kind) === -1) kinds.push(kind);
    });
  return kinds;
}

function customerBenchmarkReferenceLabel(kind) {
  if (kind === "repo") return "the RBI repo rate";
  if (kind === "bank") return "a rate the bank sets";
  return "";
}

function formatBenchmarkSwitchShortNote(charge) {
  const fromKinds = uniqueBenchmarkReferenceKinds(
    charge && charge.benchmark_switch_from
  );
  const toKinds = uniqueBenchmarkReferenceKinds(
    charge && charge.benchmark_switch_to
  );
  if (fromKinds.length !== 1 || toKinds.length !== 1) return "";
  if (fromKinds[0] === toKinds[0]) return "";
  const fromLabel = customerBenchmarkReferenceLabel(fromKinds[0]);
  const toLabel = customerBenchmarkReferenceLabel(toKinds[0]);
  if (!fromLabel || !toLabel) return "";
  return "From " + fromLabel + " to " + toLabel + ".";
}

function collectRateChangeExceptionTexts(
  charge,
  bankKey,
  method,
  rateTypeIsFixed,
  candidates
) {
  const texts = [];
  if (!charge) return texts;
  const freq = String(charge.charge_frequency_other || "");
  const note1 = String(charge.note_1 || "");

  if (method === RATE_CHANGE_METHOD_TYPE) {
    if (
      (/^once$/i.test(freq.trim()) || normalizeText(freq) === "once") &&
      /hdfc/.test(bankKey)
    ) {
      texts.push("This type switch fee applies only once.");
    }
    if (/up to 2 times during loan tenure/i.test(freq) && /idfc/.test(bankKey)) {
      texts.push("You can switch up to 2 times during the loan.");
      if (!rateTypeIsFixed) {
        texts.push(
          "After switching to fixed, you cannot switch back to floating for at least 3 years."
        );
      } else {
        texts.push(
          "No fee to switch to floating at the end of the agreed fixed tenure."
        );
      }
    }
    if (/multiple switches allowed/i.test(freq)) {
      texts.push("Multiple switches are allowed during the loan.");
    }
    if (/exercising the option/i.test(freq)) {
      texts.push("Charged when you exercise the option.");
    }
    if (/yes bank/.test(bankKey) && /permitted/i.test(note1)) {
      texts.push("Only if the bank permits the change when you ask.");
    }
    if (
      (/as permitted by the mitc/i.test(freq) || /mitc/i.test(freq)) &&
      /punjab national|\bpnb\b/.test(bankKey)
    ) {
      texts.push("Only as permitted in the bank’s MITC.");
    }
    if (/once exercised cannot be changed/i.test(note1) && /south indian/.test(bankKey)) {
      texts.push("Once you switch, you cannot change again.");
    }
    if (/cic score/i.test(note1) && /maharashtra/.test(bankKey)) {
      texts.push(
        "Allowed only if CIBIL is above 700 and the bank’s guidelines are met."
      );
    }
    if (/clubbing balance/i.test(note1)) {
      texts.push(
        "Fee is calculated after balances in linked accounts are clubbed."
      );
    }
  }

  if (method === RATE_CHANGE_METHOD_REPRICE) {
    if (/carded interest rate only/i.test(note1)) {
      texts.push("Lower rate means the bank’s card rate only.");
    }
    if (/not applicable for new loans/i.test(note1)) {
      texts.push("Not for new loans or rollover cases.");
    }
  }

  if (method === RATE_CHANGE_METHOD_BENCHMARK) {
    const switchNote = formatBenchmarkSwitchShortNote(charge);
    if (switchNote) texts.push(switchNote);
    if (/dhanlaxmi/.test(bankKey)) {
      texts.push(
        "₹0 if converting to card rate; the listed fee applies when converting below card rate."
      );
    }
    const cust = normalizeText(charge.customer_type).replace(/-/g, "_");
    const showingIndividual = !cust || cust === "individual";
    const hasNonIndividual = (candidates || []).some(function (entry) {
      return (
        normalizeText(entry && entry.customer_type).replace(/-/g, "_") ===
        "non_individual"
      );
    });
    if (showingIndividual && hasNonIndividual) {
      texts.push(
        "Listed fee is for individuals; non-individual pricing differs."
      );
    }
  }
  return texts;
}

function rateTypeIsFixedForRow(row) {
  if (row && row.offer && row.offer.rate_type) {
    return normalizeRateTypeToken(row.offer.rate_type) === "Fixed";
  }
  return normalizeRateTypeToken(row && row.rateType) === "Fixed";
}

function applyRateChangeMethodToRows(rows, method) {
  rows.forEach(function (row) {
    const seed = rateChangeChargeForMethod(row, method);
    const candidates = rateChangeCandidatesForMethod(row, method);
    const slabs = listMatchingChargeSlabs(candidates, seed);
    const charge = resolveApplicableCharge(
      slabs,
      seed,
      chargeCaseFromRow(row),
      row.loanAmount
    );
    row.rateChangeChargeSlabs = slabs;
    const display = formatRateChangeChargeDisplay(charge);
    const bankKey = rateChangeBankKey(row, charge);
    const exceptionTexts = collectRateChangeExceptionTexts(
      charge,
      bankKey,
      method,
      rateTypeIsFixedForRow(row),
      candidates
    );
    row.rateChangeDrawerNotes = exceptionTexts;
    row.rateChangeChargeDisplay = display;
    row.rateChangeChargeSortValue = rateChangeSortValue(charge);
  });
  return rows;
}

function formatRateChangePanelText(charge) {
  if (!charge) return CHARGE_NOT_PUBLISHED_BY_BANK;
  const display = formatChargeDisplay(charge);
  return [
    display.main +
      (display.mainSuffix ? " " + display.mainSuffix : "") +
      (display.marker || "")
  ]
    .concat(display.details || [])
    .filter(Boolean)
    .join(" · ");
}

function expandBenchmarkToken(token) {
  const raw = String(token || "").trim();
  if (!raw) return "";
  const key = normalizeText(raw)
    .replace(/[()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const labels = {
    "base rate": "Base Rate",
    mclr: "Marginal Cost of Funds based Lending Rate (MCLR)",
    bplr: "Benchmark Prime Lending Rate (BPLR)",
    sbar: "State Bank Advance Rate (SBAR)",
    rllr: "Repo Linked Lending Rate (RLLR)",
    eblr: "External Benchmark Lending Rate (EBLR)",
    ebr: "External Benchmark Rate (EBR)",
    "external benchmark rate": "External Benchmark Rate (EBR)",
    "external benchmark": "External Benchmark Rate (EBR)",
    "external benchmark rate repo rate":
      "External Benchmark Rate linked to the repo rate (EBR)",
    "repo rate": "repo rate"
  };
  if (labels[key]) return labels[key];
  return raw;
}

function expandBenchmarkSwitchSide(value) {
  return String(value || "")
    .split(/\s*\/\s*/)
    .map(expandBenchmarkToken)
    .filter(Boolean)
    .join(" / ");
}

function formatBenchmarkSwitchDetail(charge) {
  if (!charge) return CHARGE_NOT_PUBLISHED_BY_BANK;
  let text = formatRateChangePanelText(charge);
  const from = charge.benchmark_switch_from;
  const to = charge.benchmark_switch_to;
  if (from && to) {
    text +=
      " · From " +
      expandBenchmarkSwitchSide(from) +
      " to " +
      expandBenchmarkSwitchSide(to);
  }
  return text;
}

function buildRateChangeExceptionNotes(visibleRows, method, rateTypeIsFixed) {
  const lines = [];
  const seen = Object.create(null);
  function add(line) {
    if (!line || seen[line]) return;
    seen[line] = true;
    lines.push(escapeHtml(line));
  }

  (visibleRows || []).forEach(function (row) {
    const charge = rateChangeChargeForMethod(row, method);
    if (!charge) return;
    const bankKey = rateChangeBankKey(row, charge);
    const marker = rateChangeMarkerForBankKey(bankKey);
    if (!marker) return;
    const texts = collectRateChangeExceptionTexts(
      charge,
      bankKey,
      method,
      rateTypeIsFixed,
      rateChangeCandidatesForMethod(row, method)
    );
    texts.forEach(function (text) {
      add(marker + " " + text);
    });
  });

  return lines;
}

function rankOverdueCharge(charge) {
  return charge.charge_name === "Overdue charges" ? 1 : -1;
}

function rankEmiBounceCharge(charge) {
  const name = normalizeText(charge.charge_name);
  const basis = normalizeText(charge.percentage_base_value);
  if (!/(bounce|dishonour|return)/.test(name)) return -1;
  let score = 0;
  if (/\bemi\b/.test(name) || basis === "emi bounced") score += 40;
  if (/(nach|ecs|ach|direct debit|standing instruction|\bsi\b|mandate)/.test(name)) {
    score += 25;
  }
  if (/(loan repayment|repayment instruction)/.test(name)) score += 15;
  if (/cheque/.test(name)) score += 5;
  // Prefer the priced repayment-return schedule over technical/zero rows.
  if (/technical/.test(name)) score -= 20;
  return score;
}

function formatEmiBounceMethodLabel(chargeName) {
  const name = normalizeText(chargeName);
  if (!name) return "";
  if (/technical/.test(name)) return "Technical ECS / cheque return";
  if (/nach/.test(name) && !/ecs/.test(name)) return "NACH return";
  if (
    /\bsi\b/.test(name) ||
    /standing instruction/.test(name) ||
    /auto debit/.test(name) ||
    /\bddi\b/.test(name)
  ) {
    return "Auto debit / SI bounce";
  }
  if (/ecs/.test(name) && /nach/.test(name)) return "ECS / NACH return";
  if (/ecs/.test(name)) return "ECS / cheque return";
  if (/cheque/.test(name) && /return/.test(name)) return "Cheque return";
  return String(chargeName).replace(/\s+/g, " ").trim();
}

function specificityScore(record, fields) {
  return fields.reduce(function (score, field) {
    const value = record[field];
    if (value == null || value === "") return score;
    if (normalizeText(value) === "any") return score;
    return score + 1;
  }, 0);
}

function createMatchEngine() {
  const engine = new Engine([], { allowUndefinedFacts: true });

  engine.addOperator("matchesOptional", (factValue, jsonValue) => {
    return matchesOptionalField(factValue, jsonValue);
  });

  engine.addOperator("inAmountBand", (band, amount) => {
    if (!band) return true;
    return inNumericBand(amount, band.applicable, band.min, band.max);
  });

  engine.addOperator("matchesCibil", (payload, queryPayload) => {
    if (!payload || !payload.offer) return false;
    return matchesCibilBand(payload.offer, queryPayload.cibilScore);
  });

  engine.addOperator("matchesAge", (payload, ages) => {
    if (!payload || !payload.offer) return false;
    return matchesApplicantAges(payload.offer, ages);
  });

  engine.addRule({
    name: "home-loan-offer-match",
    conditions: {
      all: [
        { fact: "roi_availability", operator: "equal", value: "Offered" },
        {
          fact: "purpose",
          operator: "matchesOptional",
          value: { fact: "query_purpose" }
        },
        {
          fact: "occupation",
          operator: "matchesOptional",
          value: { fact: "query_occupation" }
        },
        {
          fact: "loan_amount_band",
          operator: "inAmountBand",
          value: { fact: "loan_amount" }
        },
        {
          fact: "tenure_band",
          operator: "inAmountBand",
          value: { fact: "tenure_months" }
        },
        {
          fact: "cibil",
          operator: "matchesCibil",
          value: { fact: "query_cibil" }
        },
        {
          fact: "age_payload",
          operator: "matchesAge",
          value: { fact: "query_age" }
        }
      ]
    },
    event: { type: "offer-match" }
  });

  return engine;
}

function offerFacts(offer, query) {
  const roiDecimal = Number(offer.roi);
  const terms = computeOfferTerms(query, offer, roiDecimal);
  return {
    roi_availability: offer.roi_availability,
    purpose: offer.purpose,
    occupation: offer.occupation,
    loan_amount: terms.loanAmount,
    tenure_months: terms.tenureMonths,
    query_purpose: query.purpose,
    query_occupation: query.occupation,
    loan_amount_band: {
      applicable: offer.loan_amount_band_applicable,
      min: offer.loan_amount_min,
      max: offer.loan_amount_max
    },
    tenure_band: {
      applicable: offer.tenure_band_applicable,
      min: offer.tenure_months_min,
      max: offer.tenure_months_max
    },
    cibil: { offer: offer },
    query_cibil: { cibilScore: query.cibilScore },
    age_payload: { offer: offer },
    query_age: earningApplicantAges(query)
  };
}

async function matchesOfferRules(engine, offer, query) {
  const result = await engine.run(offerFacts(offer, query));
  return result.events.some(function (event) {
    return event.type === "offer-match";
  });
}

function effectiveRoiDecimal(offer, query) {
  const candidates = [Number(offer.roi)];
  const filters = query.productFilters || defaultProductFilters();

  if (filters.insurance && offer.insurance_pricing_applicable === "Yes") {
    if (offer.insurance_roi != null) candidates.push(Number(offer.insurance_roi));
    else if (offer.insurance_adjustment != null) {
      candidates.push(Number(offer.roi) + Number(offer.insurance_adjustment));
    }
  }
  if (filters.womenApplicant && offer.women_benefit_applicable === "Yes") {
    if (offer.women_roi != null) candidates.push(Number(offer.women_roi));
    else if (offer.women_discount != null) {
      candidates.push(Number(offer.roi) - Number(offer.women_discount));
    }
  }
  if (filters.greenHome && offer.green_house_benefit_applicable === "Yes") {
    if (offer.green_roi != null) candidates.push(Number(offer.green_roi));
    else if (offer.green_house_discount != null) {
      candidates.push(Number(offer.roi) - Number(offer.green_house_discount));
    }
  }
  return Math.min.apply(
    null,
    candidates.filter(function (value) {
      return Number.isFinite(value);
    })
  );
}

function computeProcessingFee(charge, loanAmount) {
  if (!charge) return null;
  const pct = charge.percentage;
  const fixed = charge.fixed_amount;
  if (pct != null && pct > 0) {
    let amount = loanAmount * pct;
    if (charge.charge_min != null) amount = Math.max(amount, Number(charge.charge_min));
    if (charge.charge_max != null) amount = Math.min(amount, Number(charge.charge_max));
    return amount;
  }
  if (fixed != null) return Number(fixed);
  if (pct === 0) return 0;
  return null;
}

function isPropertyCheckChargeName(name) {
  return PROPERTY_CHECK_CHARGE_NAMES.indexOf(name) !== -1;
}

function isTemporaryPropertyCheckCharge(charge) {
  return Boolean(charge) && charge.origin === PROPERTY_CHECK_ORIGIN;
}

function computePropertyCheckChargeAmount(charge) {
  if (!charge) return null;
  const amount = Number(charge.fixed_amount);
  return Number.isFinite(amount) ? amount : null;
}

function listPropertyCheckCharges(charges, query, offer) {
  const listed = [];
  PROPERTY_CHECK_CHARGE_NAMES.forEach(function (name) {
    const charge = pickBestCharge(charges, query, offer, name);
    if (charge) listed.push(charge);
  });
  return listed;
}

function computePropertyCheckChargesTotal(charges) {
  let total = 0;
  let hasAny = false;
  (charges || []).forEach(function (charge) {
    const amount = computePropertyCheckChargeAmount(charge);
    if (amount != null) {
      total += amount;
      hasAny = true;
    }
  });
  return hasAny ? total : null;
}

function suppressPublishedPropertyChecks(matched) {
  const list = matched || [];
  const hasPlaceholder = list.some(isTemporaryPropertyCheckCharge);
  if (!hasPlaceholder) return list;
  return list.filter(function (charge) {
    if (!charge) return false;
    if (isTemporaryPropertyCheckCharge(charge)) return true;
    return earlyFeeCategory(charge.charge_name).id !== "property";
  });
}

function isTopUpPurpose(purpose) {
  const normalized = normalizeText(purpose);
  return normalized === "top-up loan" || normalized === "top up loan";
}

function matchesGovernmentJurisdiction(charge, state) {
  const jurisdiction = normalizeText(charge.jurisdiction_state);
  if (!jurisdiction) return false;
  if (jurisdiction === "india") return true;
  return jurisdiction === normalizeText(state);
}

function inGovernmentSlab(loanAmount, charge) {
  if (normalizeText(charge.slab_wise_charges) !== "yes") return true;
  const min = charge.slab_min_inr == null ? 0 : Number(charge.slab_min_inr);
  const max = charge.slab_max_inr == null ? Infinity : Number(charge.slab_max_inr);
  return loanAmount >= min && loanAmount <= max;
}

function isOptionalGovernmentCharge(charge) {
  const name = String(charge.charge_name || "");
  if (name === "Notice of Intimation Document Handling Charge") return true;
  if (
    name === "Notice of Intimation Stamp Duty" &&
    normalizeText(charge.modt_stamp_already_paid) === "yes"
  ) {
    return true;
  }
  return false;
}

function matchesGovernmentScenario(charge, query) {
  const topUp = isTopUpPurpose(query.purpose);
  const chargeTopUp = normalizeText(charge.is_top_up_or_further_charge) === "yes";
  if (topUp !== chargeTopUp) return false;
  if (normalizeText(charge.is_consortium_lending) === "yes") return false;
  if (normalizeText(charge.is_collateral_security) === "yes") return false;

  // Typical equitable-mortgage path pays MODT first, then NOI stamp at the
  // "MODT already paid" rate. Prefer that row; skip the unpaid-% path if present.
  const modtPaid = normalizeText(charge.modt_stamp_already_paid);
  if (modtPaid === "no") return false;

  const name = String(charge.charge_name || "");
  if (name === "CERSAI Security Interest Modification") return false;
  if (name === "CERSAI Security Interest Satisfaction") return false;
  if (name === "CERSAI Public Asset Search") return false;
  if (!topUp && name === "Further Charge Stamp Duty") return false;
  if (topUp && name === "MODT Stamp Duty") return false;
  if (!topUp && normalizeText(charge.mortgage_type) === "collateral") return false;
  return true;
}

function roundInrToPaise(value) {
  return Math.round(value * 100) / 100;
}

function governmentChargeGstRate(charge) {
  if (normalizeText(charge && charge.gst_applicable) !== "yes") return 0;
  const listed = charge && charge.gst_rate_percent;
  if (listed != null && Number.isFinite(Number(listed)) && Number(listed) > 0) {
    const rate = Number(listed);
    return rate > 1 ? rate / 100 : rate;
  }
  return DEFAULT_GOVERNMENT_GST_RATE;
}

function computeGovernmentChargeBaseAmount(charge, loanAmount) {
  if (!charge) return null;
  const method = normalizeText(charge.calculation_method);
  if (method === "flat") {
    const flat = charge.flat_amount_inr;
    if (flat != null && Number.isFinite(Number(flat))) return Number(flat);
    return null;
  }
  if (method === "percentage") {
    const pct = charge.percentage;
    if (pct != null && Number(pct) > 0) {
      let amount = loanAmount * Number(pct);
      if (charge.min_amount_inr != null) {
        amount = Math.max(amount, Number(charge.min_amount_inr));
      }
      if (charge.max_amount_inr != null) {
        amount = Math.min(amount, Number(charge.max_amount_inr));
      }
      return amount;
    }
  }
  return null;
}

function governmentChargeAmountParts(charge, loanAmount) {
  const base = computeGovernmentChargeBaseAmount(charge, loanAmount);
  if (base == null || !Number.isFinite(base)) {
    return { base: null, gstRate: 0, gstAmount: 0, total: null };
  }
  const gstRate = governmentChargeGstRate(charge);
  const gstAmount = gstRate > 0 ? roundInrToPaise(base * gstRate) : 0;
  return {
    base: base,
    gstRate: gstRate,
    gstAmount: gstAmount,
    total: roundInrToPaise(base + gstAmount)
  };
}

function computeGovernmentChargeAmount(charge, loanAmount) {
  return governmentChargeAmountParts(charge, loanAmount).total;
}

function listApplicableGovernmentCharges(governmentCharges, query, loanAmount, state) {
  const jurisdiction = state || DEFAULT_JURISDICTION_STATE;
  const byName = new Map();
  governmentCharges.forEach(function (charge) {
    if (!charge || !charge.charge_name) return;
    if (!matchesGovernmentJurisdiction(charge, jurisdiction)) return;
    if (!matchesGovernmentScenario(charge, query)) return;
    if (!inGovernmentSlab(loanAmount, charge)) return;
    if (isOptionalGovernmentCharge(charge)) return;
    byName.set(charge.charge_name, charge);
  });
  return Array.from(byName.values()).sort(function (a, b) {
    return String(a.charge_name).localeCompare(String(b.charge_name), "en", {
      sensitivity: "base"
    });
  });
}

/** Optional govt fees — shown as a footnote, not in the table total. */
function listOptionalGovernmentCharges(governmentCharges, query, loanAmount, state) {
  const jurisdiction = state || DEFAULT_JURISDICTION_STATE;
  const byName = new Map();
  governmentCharges.forEach(function (charge) {
    if (!charge || !charge.charge_name) return;
    if (!isOptionalGovernmentCharge(charge)) return;
    if (!matchesGovernmentJurisdiction(charge, jurisdiction)) return;
    if (!matchesGovernmentScenario(charge, query)) return;
    if (!inGovernmentSlab(loanAmount, charge)) return;
    byName.set(charge.charge_name, charge);
  });
  return Array.from(byName.values()).sort(function (a, b) {
    return String(a.charge_name).localeCompare(String(b.charge_name), "en", {
      sensitivity: "base"
    });
  });
}

function formatOptionalGovernmentChargesNote(governmentCharges, query, loanAmount, state) {
  const jurisdiction = state || DEFAULT_JURISDICTION_STATE;
  const applicable = listApplicableGovernmentCharges(
    governmentCharges,
    query,
    loanAmount,
    jurisdiction
  );
  const optional = listOptionalGovernmentCharges(
    governmentCharges,
    query,
    loanAmount,
    jurisdiction
  );
  const shownCharges = applicable.concat(optional);
  if (!shownCharges.length) return "";

  const jurisdictions = new Set(
    shownCharges.map(function (charge) {
      return normalizeText(charge.jurisdiction_state);
    })
  );
  const hasIndiaWide = jurisdictions.has("india");
  const hasStateSpecific = Array.from(jurisdictions).some(function (value) {
    return value && value !== "india";
  });
  let scopeNote = GOVERNMENT_CHARGES_MARKER + " Government charges shown ";
  if (hasIndiaWide && hasStateSpecific) {
    scopeNote +=
      "include charges that apply across India and charges specific to " +
      jurisdiction +
      ".";
  } else if (hasIndiaWide) {
    scopeNote += "apply across India.";
  } else {
    scopeNote += "are specific to " + jurisdiction + ".";
  }

  const optionalLines = optional
    .map(function (charge) {
      const amount = computeGovernmentChargeAmount(charge, loanAmount);
      const amountLabel =
        amount != null && Number.isFinite(amount) ? formatInr(amount) : "—";
      const name = String(charge.charge_name || "");
      if (name === "Notice of Intimation Stamp Duty") {
        return (
          GOVERNMENT_CHARGES_MARKER +
          " NOI stamp duty " +
          amountLabel +
          " applies if MODT stamp duty is already paid."
        );
      }
      if (name === "Notice of Intimation Document Handling Charge") {
        return (
          GOVERNMENT_CHARGES_MARKER +
          " NOI document handling " +
          amountLabel +
          " applies if filing is done in person."
        );
      }
      return GOVERNMENT_CHARGES_MARKER + " " + name + " " + amountLabel + ".";
    })
    .join("\n");

  return [scopeNote, optionalLines].filter(Boolean).join("\n");
}

function computeGovernmentChargesTotal(governmentCharges, query, loanAmount, state) {
  const charges = listApplicableGovernmentCharges(
    governmentCharges,
    query,
    loanAmount,
    state
  );
  let total = 0;
  let hasAny = false;
  charges.forEach(function (charge) {
    const amount = computeGovernmentChargeAmount(charge, loanAmount);
    if (amount != null && Number.isFinite(amount)) {
      total += amount;
      hasAny = true;
    }
  });
  return hasAny ? total : null;
}

function formatPrepayLabel(charge) {
  if (!charge) return "—";
  if (isPrepaymentNotCharged(charge)) return "Nil (₹0)";
  if (charge.percentage != null && charge.percentage > 0) {
    return (charge.percentage * 100).toFixed(2) + "%";
  }
  if (charge.note_1) return charge.note_1;
  return "See bank rules";
}

function formatChargeBasis(value) {
  if (/residual tenure/i.test(String(value || ""))) {
    return "On residual tenure (max 3%)";
  }
  const key = normalizeText(value).replace(/[_\s-]+/g, "_");
  const labels = {
    default_amount: "On overdue amount",
    prepaid_amount: "On amount prepaid",
    amount_being_paid: "On amount being paid",
    sanctioned_limit: "On sanctioned limit",
    highest_outstanding_90_days: "On highest outstanding in 90 days",
    emi_bounced: "On bounced EMI",
    cheque_amount: "On cheque amount",
    outstanding_principal_loan_amount: "On outstanding principal",
    outstanding_loan_amount: "On outstanding loan amount",
    outstanding_amount: "On outstanding amount",
    balance_outstanding: "On outstanding balance",
    drawing_power: "On drawing power",
    outstanding_loan_amount_and_undisbursed_amount:
      "On outstanding + undisbursed amount",
    outstanding_principal_loan_amount_and_undisbursed_amount:
      "On outstanding + undisbursed amount",
    each_residual_tenure_maximum_cap_of_3: "On residual tenure (max 3%)"
  };
  if (labels[key]) return labels[key];
  if (!value) return "";
  return (
    "On " +
    String(value)
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\bplus\b/g, "+")
  );
}

function formatChargeUnit(value) {
  const key = normalizeText(value);
  const labels = {
    instance: "Per instance",
    instrument: "Per instrument",
    return: "Per return",
    occasion: "Per occasion",
    transaction: "Per transaction",
    bounce: "Per bounce",
    presentation: "Per presentation",
    dishonour: "Per dishonour",
    month: "Per month",
    request: "Per request",
    switch: "Per switch",
    conversion: "Per conversion",
    "failure instance": "Per failed payment",
    "as incurred": "As incurred"
  };
  return labels[key] || (value ? "Per " + String(value).toLowerCase() : "");
}

function formatEncodedChargeNote(note) {
  let text = String(note || "").trim();
  if (!text || /^prepayment not charged/i.test(text)) return "";
  if (/^prepayment nil/i.test(text)) return "";

  const dayMin = text.match(/overdue_days_min=([\d.]+)/);
  const dayMax = text.match(/overdue_days_max=([\d.]+)/);
  if (dayMin && dayMax) {
    return (
      "Applies for " +
      Math.round(Number(dayMin[1])) +
      "–" +
      Math.round(Number(dayMax[1])) +
      " days overdue."
    );
  }
  if (dayMin) {
    return (
      "Applies from " + Math.round(Number(dayMin[1])) + " days overdue."
    );
  }

  const tenureMax = text.match(/overdue_tenure_months_max=([\d.]+)/);
  if (tenureMax) {
    return (
      "Applies when loan tenure is up to " +
      Math.round(Number(tenureMax[1])) +
      " months."
    );
  }
  if (/overdue_whichever_higher=yes/i.test(text)) {
    return "Higher applicable charge applies.";
  }

  // Drop machine tags left from sheet normalisation (not customer-facing).
  text = text
    .replace(/(?:^|[;\s])+[a-z0-9_]*_normalized_from=[^;]*/gi, "")
    .replace(/^[\s;]+|[\s;]+$/g, "")
    .trim();
  return text;
}

function formatChargeDisplay(charge, options) {
  if (!charge) {
    return chargeNotPublishedDisplay();
  }

  const settings = options || {};
  const mainParts = [];
  const percentage =
    charge.percentage != null && Number.isFinite(Number(charge.percentage))
      ? Number(charge.percentage)
      : null;
  const percentageMin =
    charge.percentage_min != null && Number.isFinite(Number(charge.percentage_min))
      ? Number(charge.percentage_min)
      : null;
  const percentageMax =
    charge.percentage_max != null && Number.isFinite(Number(charge.percentage_max))
      ? Number(charge.percentage_max)
      : null;
  const fixed =
    charge.fixed_amount != null && Number.isFinite(Number(charge.fixed_amount))
      ? Number(charge.fixed_amount)
      : null;
  const chargeMin =
    charge.charge_min != null && Number.isFinite(Number(charge.charge_min))
      ? Number(charge.charge_min)
      : null;
  const chargeMax =
    charge.charge_max != null && Number.isFinite(Number(charge.charge_max))
      ? Number(charge.charge_max)
      : null;
  const perAnnumSuffix =
    normalizeText(charge.percentage_per_annum) === "yes" ? " p.a." : "";

  // % band (min+max) or "Up to X%" (max only) before a single flat percentage.
  let percentageShownAsBandOrCap = false;
  if (percentageMin != null && percentageMax != null) {
    mainParts.push(
      formatPct(percentageMin * 100) + " – " + formatPct(percentageMax * 100) + perAnnumSuffix
    );
    percentageShownAsBandOrCap = true;
  } else if (percentageMax != null && percentageMin == null) {
    mainParts.push("Up to " + formatPct(percentageMax * 100) + perAnnumSuffix);
    percentageShownAsBandOrCap = true;
  } else if (percentage != null) {
    mainParts.push(formatPct(percentage * 100) + perAnnumSuffix);
  } else if (normalizeText(charge.special_rule) === "as_per_roi") {
    mainParts.push("At home loan interest rate");
  } else if (normalizeText(charge.charge_type) === "at actuals") {
    // Published as at-actuals with no fixed ₹ / % — say that on the amount line.
    mainParts.push("At actuals");
  }
  let fixedLabel = "";
  let fixedBasisDetail = "";
  // ₹X – ₹Y band: no flat fee, only rupee min+max (same idea as % bands).
  const rupeeBandOnly =
    fixed == null &&
    chargeMin != null &&
    chargeMax != null &&
    !percentageShownAsBandOrCap &&
    percentage == null &&
    normalizeText(charge.charge_type) !== "at actuals" &&
    !(
      normalizeText(charge.special_rule) &&
      normalizeText(charge.special_rule) !== "as_per_roi"
    );
  // "Up to ₹X": no flat fee, only a rupee ceiling.
  const uptoRupeeOnly =
    fixed == null && chargeMax != null && chargeMin == null && !percentageShownAsBandOrCap && percentage == null;
  if (rupeeBandOnly) {
    mainParts.push(formatInr(chargeMin) + " – " + formatInr(chargeMax));
  } else if (uptoRupeeOnly) {
    mainParts.push("Up to " + formatInr(chargeMax));
  } else if (fixed != null && !(settings.zeroAsPercentage && fixed === 0 && percentage == null && !percentageShownAsBandOrCap)) {
    fixedLabel = formatInr(fixed);
    if (normalizeText(charge.fixed_amount_per_1000_rs) === "yes") {
      fixedBasisDetail = "per ₹1,000";
    } else if (normalizeText(charge.fixed_amount_per_lakh_or_part) === "yes") {
      fixedBasisDetail = "per ₹1 lakh or part";
    }
  }
  if (settings.zeroAsPercentage && fixed === 0 && percentage == null && !percentageShownAsBandOrCap) {
    mainParts.push("0%");
  }
  const whicheverHigherRule = chargeUsesWhicheverHigher(charge);
  const alternativeAmount =
    whicheverHigherRule && fixedLabel
      ? [fixedLabel, fixedBasisDetail].filter(Boolean).join(" ")
      : whicheverHigherRule && chargeMin != null
        ? formatInr(chargeMin)
        : "";
  const hasWhicheverHigherAlternatives =
    whicheverHigherRule && (percentage != null || percentageShownAsBandOrCap) && !!alternativeAmount;
  if (fixedLabel && !hasWhicheverHigherAlternatives) {
    mainParts.push(fixedLabel);
  }

  const details = [];
  if (hasWhicheverHigherAlternatives) {
    details.push("or " + alternativeAmount + ", whichever is higher");
  }
  const mainSuffix =
    !hasWhicheverHigherAlternatives &&
    percentage == null &&
    !percentageShownAsBandOrCap &&
    fixedLabel
      ? fixedBasisDetail
      : "";
  const basis = settings.hideBasis ? "" : formatChargeBasis(charge.percentage_base_value);
  const unit = settings.hideUnit ? "" : formatChargeUnit(charge.charge_unit);
  if (basis || unit) details.push([basis, unit].filter(Boolean).join(" · "));

  const limits = [];
  if (!hasWhicheverHigherAlternatives && chargeMin != null && !rupeeBandOnly) {
    limits.push("Min " + formatInr(chargeMin));
  }
  // Skip redundant Min/Max when main already says "₹X – ₹Y" or "Up to ₹X".
  if (chargeMax != null && !uptoRupeeOnly && !rupeeBandOnly) {
    limits.push("Max " + formatInr(chargeMax));
  }
  if (limits.length) details.push(limits.join(" · "));

  if (!settings.hideGst && normalizeText(charge.gst_applicable) === "yes") {
    details.push("GST extra");
  }
  if (normalizeText(charge.has_grace_period) === "yes") {
    const isOverdueCharge = normalizeText(charge.charge_name).indexOf("overdue") >= 0;
    if (charge.grace_period_days != null) {
      const days = Math.round(Number(charge.grace_period_days));
      details.push(
        isOverdueCharge
          ? "No charge up to " + days + " days late"
          : days + "-day grace period"
      );
    } else if (charge.grace_period_months != null) {
      const months = Math.round(Number(charge.grace_period_months));
      details.push(months + "-month grace period");
    }
  }
  if (charge.charge_by_area) details.push("Area: " + String(charge.charge_by_area));
  if (normalizeText(charge.actuals_in_addition_to_charge) === "yes") {
    details.push("+ Actual expenses");
  }
  if (normalizeText(charge.out_of_pocket_expenses_additional) === "yes") {
    details.push("Out-of-pocket expenses extra");
  }

  const notes = [
    formatEncodedChargeNote(charge.note_1),
    formatEncodedChargeNote(charge.note_2)
  ].filter(function (note) {
    return (
      note &&
      !(
        hasWhicheverHigherAlternatives &&
        note === "Higher applicable charge applies."
      )
    );
  });

  return {
    main: mainParts.length ? mainParts.join(" + ") : "See bank rule",
    mainSuffix: mainSuffix,
    details: details,
    note: notes.join(" · ")
  };
}

function formatChargeDisplayText(display) {
  if (!display) return CHARGE_NOT_PUBLISHED_BY_BANK;
  return [
    display.main +
      (display.mainSuffix ? " " + display.mainSuffix : "") +
      (display.marker || "")
  ]
    .concat(display.details || [])
    .concat(display.note ? [display.note] : [])
    .filter(Boolean)
    .join(" · ");
}

function chargeSlabStart(charge) {
  return charge.slab_from == null ? -Infinity : Number(charge.slab_from);
}

function formatChargeThreshold(value) {
  const amount = Number(value);
  if (amount === 100000) return "₹1 lakh";
  if (amount === 10000000) return "₹1 crore";
  return formatInr(amount);
}

function formatChargeSlabBand(charge) {
  const min = charge.slab_from == null ? null : Number(charge.slab_from);
  const max = charge.slab_to == null ? null : Number(charge.slab_to);
  if (min == null && max != null) return "Up to " + formatChargeThreshold(max);
  if (min != null && max != null) {
    return formatChargeThreshold(min) + "–" + formatChargeThreshold(max);
  }
  if (min != null) return "From " + formatChargeThreshold(min);
  return "";
}

function formatNumericBandLabel(minValue, maxValue) {
  const min = minValue == null || minValue === "" ? null : Number(minValue);
  const max = maxValue == null || maxValue === "" ? null : Number(maxValue);
  if (min != null && !Number.isFinite(min) && max != null && !Number.isFinite(max)) {
    return "";
  }
  const safeMin = min != null && Number.isFinite(min) ? min : null;
  const safeMax = max != null && Number.isFinite(max) ? max : null;
  if (safeMin == null && safeMax != null) {
    return "Up to " + formatChargeThreshold(safeMax);
  }
  if (safeMin != null && safeMax != null) {
    return formatChargeThreshold(safeMin) + "–" + formatChargeThreshold(safeMax);
  }
  if (safeMin != null) return "From " + formatChargeThreshold(safeMin);
  return "";
}

function formatEmiBounceSlabBand(charge) {
  const band = formatChargeSlabBand(charge);
  if (!band) return "";
  const basis = normalizeText(charge.slab_basis);
  const basisLabel =
    basis === "sanctioned loan amount"
      ? "sanctioned loan amount"
      : "bounce amount";
  return "for a " + basisLabel + " " + band.charAt(0).toLowerCase() + band.slice(1);
}

function formatChargeSlabBasis(charge, fallback) {
  const slabBasis = normalizeText(charge && charge.slab_basis);
  if (slabBasis.indexOf("sanctioned loan amount") >= 0) {
    return "sanctioned loan amount";
  }
  if (
    slabBasis.indexOf("bounce") >= 0 ||
    slabBasis.indexOf("returned amount") >= 0
  ) {
    return "bounce amount";
  }
  if (slabBasis.indexOf("overdue") >= 0 || slabBasis === "default amount") {
    return "overdue amount";
  }
  const percentageBasis = formatChargeBasis(charge && charge.percentage_base_value);
  if (percentageBasis) return lowerFirstLetter(percentageBasis.replace(/^On\s+/i, ""));
  return fallback || "";
}

function lowerFirstLetter(value) {
  const text = String(value || "");
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : "";
}

function formatSlabBasisSentence(charge, fallback) {
  const basis = formatChargeSlabBasis(charge, fallback);
  return basis ? "The charge depends on the " + basis + "." : "";
}

function formatChargePercentageValue(charge) {
  const percentage = Number(charge.percentage) * 100;
  const value = Number.isInteger(percentage)
    ? percentage.toFixed(0)
    : String(Number(percentage.toFixed(2)));
  return (
    value +
    "%" +
    (normalizeText(charge.percentage_per_annum) === "yes" && percentage !== 0
      ? " p.a."
      : "")
  );
}

function formatFacilityLabel(facilityType) {
  const normalized = normalizeText(facilityType);
  if (!normalized || normalized === "any") return "Any";
  if (normalized === "overdraft") return "Overdraft";
  if (normalized === "term loan") return "Term loan";
  return String(facilityType);
}

function formatOccupationLabel(occupation) {
  const normalized = normalizeText(occupation);
  if (!normalized || normalized === "any") return "Any";
  if (normalized === "self-employed" || normalized === "self employed") return "Self-employed";
  if (normalized === "salaried") return "Salaried";
  return String(occupation);
}

function formatRateTypeLabel(rateType) {
  const normalized = normalizeText(rateType);
  if (!normalized || normalized === "any") return "Any";
  if (normalized === "floating") return "Floating";
  if (normalized === "fixed") return "Fixed";
  return String(rateType);
}

function formatPurposeLabel(purpose) {
  const normalized = normalizeText(purpose);
  if (!normalized || normalized === "any") return "Any";
  if (normalized === "regular home loan") return "Regular";
  if (normalized === "top-up loan" || normalized === "top up loan") return "Top-up";
  return String(purpose);
}

function formatBorrowerCategoryLabel(category) {
  const normalized = normalizeText(category);
  if (!normalized || normalized === "any") return "Any";
  return String(category);
}

/** Plain label for what drives this scheme's rate band. */
function formatRoiBasisLabel(basis) {
  const raw = String(basis == null ? "" : basis).trim();
  if (!raw || normalizeText(raw) === "none") return null;
  const key = normalizeText(raw).replace(/[_\s-]+/g, "_");
  if (key === "cibil_credit_score") return "CIBIL score";
  if (key === "borrower_category") return "Borrower type";
  if (key === "loan_amount_band") return "Loan amount";
  return raw.replace(/_/g, " ");
}

/** Premium / add-on from offer data — null when absent or zero. */
function formatPremiumPct(raw) {
  if (raw == null || raw === "") return null;
  if (normalizeText(raw) === "none") return null;
  const value = Number(raw);
  if (!Number.isFinite(value) || value === 0) return null;
  return formatPct(Math.abs(value) * 100);
}

/** Scheme-level discount from offer data — null when absent or zero. */
function formatSchemeDiscountLabel(raw) {
  if (raw == null || raw === "") return null;
  if (normalizeText(raw) === "none") return null;
  const value = Number(raw);
  if (!Number.isFinite(value) || value === 0) return null;
  if (value < 0) return formatPct(Math.abs(value) * 100);
  return formatPct(value * 100);
}

/**
 * Pieces that build the matched rate for this offer.
 * Does not restate the final rate shown in the table.
 */
function buildRateDerivationPairs(row, query) {
  const pairs = [];
  const benchmarkLabel =
    normalizeText(row.benchmarkType) === "mclr" ? "MCLR" : "Repo rate";

  pairs.push(["Benchmark", row.benchmarkType || "—"]);
  pairs.push([
    benchmarkLabel,
    row.benchmarkRatePct != null ? formatPct(row.benchmarkRatePct) : "—"
  ]);
  pairs.push([
    "Markup",
    row.markupPct != null ? formatPct(row.markupPct) : "—"
  ]);

  if (row.creditRiskPremiumLabel) {
    pairs.push(["Credit risk premium", row.creditRiskPremiumLabel]);
  }
  if (row.strategicPremiumLabel) {
    pairs.push(["Strategic premium", row.strategicPremiumLabel]);
  }
  if (row.businessStrategicPremiumLabel) {
    pairs.push(["Business strategic premium", row.businessStrategicPremiumLabel]);
  }
  if (row.fixedRatePremiumLabel) {
    pairs.push(["Fixed rate premium", row.fixedRatePremiumLabel]);
  }
  if (row.schemeDiscountLabel) {
    pairs.push(["Discount", row.schemeDiscountLabel]);
  }
  if (row.effectiveRoiPct != null && Number.isFinite(row.effectiveRoiPct)) {
    pairs.push(["Interest rate", formatPct(row.effectiveRoiPct)]);
  }
  if (row.roiBasisLabel) {
    pairs.push(["Rate set by", row.roiBasisLabel]);
  }

  const filters = (query && query.productFilters) || defaultProductFilters();
  if (filters.womenApplicant && row.womenDiscountDetail && row.womenDiscountDetail !== "None") {
    pairs.push(["Women applicant discount", row.womenDiscountDetail]);
  }
  if (filters.greenHome && row.greenDiscountDetail && row.greenDiscountDetail !== "None") {
    pairs.push(["Green home discount", row.greenDiscountDetail]);
  }
  if (filters.insurance && row.insuranceDiscountDetail && row.insuranceDiscountDetail !== "None") {
    pairs.push(["Insurance pricing", row.insuranceDiscountDetail]);
  }

  return pairs;
}

function isBenefitYes(value) {
  return normalizeText(value) === "yes";
}

function formatRatePoints(raw) {
  const value = Number(raw);
  if (!Number.isFinite(value) || value === 0) return null;
  return formatPct(Math.abs(value) * 100);
}

function formatDiscountDetail(applicable, discountRaw, roiRaw) {
  if (!isBenefitYes(applicable)) return "None";
  const parts = [];
  const points = formatRatePoints(discountRaw);
  if (points) parts.push(points + " off");
  const roi = Number(roiRaw);
  if (Number.isFinite(roi)) parts.push("rate " + formatPct(roi * 100));
  return parts.length ? parts.join(" · ") : "Available";
}

function formatInsuranceDetail(offer) {
  if (!isBenefitYes(offer.insurance_pricing_applicable)) return "None";
  const parts = [];
  const rule = offer.insurance_pricing_rule;
  if (rule && normalizeText(rule) !== "none") parts.push(String(rule));
  const adjustment = Number(offer.insurance_adjustment);
  if (Number.isFinite(adjustment) && adjustment !== 0) {
    parts.push(
      (adjustment < 0 ? formatPct(Math.abs(adjustment) * 100) + " off" : formatPct(adjustment * 100) + " add")
    );
  }
  const roi = Number(offer.insurance_roi);
  if (Number.isFinite(roi)) parts.push("rate " + formatPct(roi * 100));
  return parts.length ? parts.join(" · ") : "Available";
}

function formatChargeValue(charge, loanAmount) {
  if (!charge) return "—";
  const amount = computeProcessingFee(charge, loanAmount);
  if (amount != null && Number.isFinite(amount)) return formatInr(amount);
  const display = formatChargeDisplay(charge, {
    hideGst: true,
    hideBasis: true,
    hideUnit: true
  });
  if (display.main && !isChargeNotPublishedLabel(display.main)) return display.main;
  if (charge.note_1) return charge.note_1;
  return "See bank rules";
}

/** Fee rule from bank data — not computed from the customer's loan amount. */
function formatChargeRule(charge) {
  if (!charge) return "—";
  const display = formatChargeDisplay(charge, { hideGst: true });
  if (!display.main || isChargeNotPublishedLabel(display.main)) {
    if (charge.note_1) return charge.note_1;
    return "See bank rules";
  }
  const extras = (display.details || []).filter(function (part) {
    return part && !/^GST extra$/i.test(part);
  });
  return [display.main].concat(extras).filter(Boolean).join(" · ");
}

/** After-offer charge names that already have a table column (or EMI bounce slot). */
const TABLE_AFTER_OFFER_CHARGE_NAMES = {
  "Prepayment charges": true,
  "Prepayment charges (takeover)": true,
  "Interest Rate Type Switch Fees": true,
  "Interest Rate Repricing Fees": true,
  "Interest Rate Benchmark Switch Fees": true,
  "Overdue charges": true
};

const LATER_FEE_CATEGORY_ORDER = [
  "documents",
  "repayment",
  "penalties",
  "collection",
  "other"
];

function isEmiBounceLikeChargeName(name) {
  return /bounce|dishonour|return/i.test(String(name || ""));
}

/** True when this charge is already represented on the explore-banks table. */
function isShownOnExploreTable(charge) {
  if (!charge || !charge.charge_name) return false;
  if (charge.charge_name === "Processing fee") return true;
  if (isPropertyCheckChargeName(charge.charge_name)) return true;
  if (charge.when_it_matters !== "After offer") return false;
  if (TABLE_AFTER_OFFER_CHARGE_NAMES[charge.charge_name]) return true;
  return isEmiBounceLikeChargeName(charge.charge_name);
}

/** Headline amount only — no basis/unit/GST/notes. */
function formatChargeAmountHeadline(charge) {
  if (!charge) return CHARGE_NOT_PUBLISHED_BY_BANK;
  const display = formatChargeDisplay(charge, {
    hideBasis: true,
    hideUnit: true,
    hideGst: true
  });
  const main =
    (display.main || "") + (display.mainSuffix ? " " + display.mainSuffix : "");
  if (main && main !== "See bank rule") return main.trim();
  if (normalizeText(charge.charge_type) === "at actuals") return "At actuals";
  if (
    normalizeText(charge.special_rule) &&
    normalizeText(charge.special_rule) !== "as_per_roi"
  ) {
    const special = formatEncodedChargeNote(charge.special_rule);
    if (special) return special;
  }
  return "See bank rule";
}

function chargeGstApplicable(charge) {
  return normalizeText(charge && charge.gst_applicable) === "yes";
}

function chargeOopApplicable(charge) {
  return normalizeText(charge && charge.out_of_pocket_expenses_additional) === "yes";
}

/** Shared fee-block footnote when any row carries out-of-pocket expenses. */
function notesWithOopFootnote(notes, charges) {
  const list = uniqueStrings(notes || []);
  if (!(charges || []).some(chargeOopApplicable)) return list;
  return uniqueStrings(list.concat([OOP_EXPENSES_FOOTNOTE]));
}

/** Append * when GST applies; footnote text lives under the fee list. */
function withGstAsterisk(amount, hasGst) {
  const text = String(amount || "").trim();
  if (!text || !hasGst) return text;
  return text.charAt(text.length - 1) === "*" ? text : text + "*";
}

/** Shared unit label when every row uses the same published unit. */
function commonChargeUnitLabel(charges) {
  const units = (charges || [])
    .map(function (charge) {
      return formatChargeUnit(charge && charge.charge_unit);
    })
    .filter(Boolean);
  if (!units.length) return "";
  const first = units[0];
  return units.every(function (unit) {
    return unit === first;
  })
    ? first
    : "";
}

/** Charge column title; GST * sits on the header, not on each amount. */
function chargeColumnTitle(hasGst) {
  return hasGst ? "Charge*" : "Charge";
}

/** Short supporting line: basis, unit, min/max (GST uses * on the Charge header). */
function formatChargeMetaLine(charge, options) {
  if (!charge) return "";
  const settings = options || {};
  const parts = [];
  if (!settings.hideBasis) {
    const basis = formatChargeBasis(charge.percentage_base_value);
    if (basis) parts.push(basis);
  }
  if (!settings.hideUnit) {
    const unit = formatChargeUnit(charge.charge_unit);
    if (unit) parts.push(unit);
  }
  if (
    charge.charge_min != null &&
    Number.isFinite(Number(charge.charge_min))
  ) {
    parts.push("Min " + formatInr(Number(charge.charge_min)));
  }
  if (
    charge.charge_max != null &&
    Number.isFinite(Number(charge.charge_max))
  ) {
    parts.push("Max " + formatInr(Number(charge.charge_max)));
  }
  if (normalizeText(charge.actuals_in_addition_to_charge) === "yes") {
    parts.push("+ Actual expenses");
  }
  if (
    !settings.hideOop &&
    normalizeText(charge.out_of_pocket_expenses_additional) === "yes"
  ) {
    parts.push("Out-of-pocket expenses extra");
  }
  return parts.join(" · ");
}

function collectChargeNotes(charge) {
  if (!charge) return [];
  const notes = [];
  const n1 = formatEncodedChargeNote(charge.note_1);
  const n2 = formatEncodedChargeNote(charge.note_2);
  if (n1) notes.push(n1);
  if (n2) notes.push(n2);
  const special = String(charge.special_rule || "").trim();
  if (
    special &&
    normalizeText(special) !== "as_per_roi" &&
    !/overdue_whichever_higher=yes/i.test(special)
  ) {
    const specialNote = formatEncodedChargeNote(special);
    if (specialNote && notes.indexOf(specialNote) < 0) notes.push(specialNote);
  }
  if (normalizeText(charge.has_grace_period) === "yes") {
    if (charge.grace_period_days != null) {
      notes.push(
        "No charge up to " +
          Math.round(Number(charge.grace_period_days)) +
          " days late"
      );
    } else if (charge.grace_period_months != null) {
      notes.push(
        Math.round(Number(charge.grace_period_months)) + "-month grace period"
      );
    }
  }
  return notes;
}

function formatSlabColumnHeader(charge) {
  const basis = formatChargeSlabBasis(charge, "amount");
  if (!basis) return "Range";
  return basis.charAt(0).toUpperCase() + basis.slice(1);
}

function formatSlabTableChargeAmount(charge) {
  if (
    charge &&
    normalizeText(charge.charge_type) === "percentage" &&
    charge.percentage != null
  ) {
    return formatChargePercentageValue(charge);
  }
  if (charge && charge.fixed_amount != null) {
    return formatInr(Number(charge.fixed_amount));
  }
  return formatChargeDisplayText(
    formatChargeDisplay(charge, {
      hideBasis: true,
      hideUnit: true,
      hideGst: true
    })
  );
}

function drawerColumnHeaderHtml(label) {
  return (
    '<th scope="col">' +
    '<span class="hlc-fee-col-title">' +
    escapeHtml(label || "") +
    "</span></th>"
  );
}

/**
 * Fee table head: Particulars / Charge* on one row; optional unit on the
 * next row (still above the divider), under the Charge column.
 */
function drawerFeeTableHeadHtml(labels, options) {
  const settings = options || {};
  const headers = (labels || []).filter(function (label) {
    return label != null && String(label).trim() !== "";
  });
  if (!headers.length) return "<thead></thead>";
  const unit = String(settings.unit || "").trim();
  const titleRow =
    '<tr class="hlc-fee-head-titles">' +
    headers
      .map(function (label) {
        return drawerColumnHeaderHtml(label);
      })
      .join("") +
    "</tr>";
  if (!unit) {
    return "<thead>" + titleRow + "</thead>";
  }
  const unitRow =
    '<tr class="hlc-fee-head-unit-row">' +
    headers
      .map(function (_label, index) {
        if (index < headers.length - 1) {
          return '<th class="hlc-fee-head-unit-pad" aria-hidden="true"></th>';
        }
        return (
          '<th scope="col" class="hlc-fee-head-unit">' +
          '<span class="hlc-fee-col-sub">' +
          escapeHtml(unit) +
          "</span></th>"
        );
      })
      .join("") +
    "</tr>";
  return "<thead>" + titleRow + unitRow + "</thead>";
}

function drawerFeeTableShellHtml(labels, options, bodyRowsHtml) {
  return (
    drawerFeeTableHeadHtml(labels, options) +
    "<tbody>" +
    (bodyRowsHtml || "") +
    "</tbody>"
  );
}

function listOverduePercentageSlabRows(candidates, selectedCharge) {
  if (!candidates.length || !selectedCharge) return [];
  const identityFields = [
    "bank_key",
    "charge_name",
    "purpose",
    "facility_type",
    "scheme",
    "rate_type",
    "occupation",
    "borrower_category"
  ];
  return dedupeChargesByRule(
    candidates.filter(function (charge) {
      return (
        normalizeText(charge.has_slab_wise_charges) === "yes" &&
        normalizeText(charge.charge_type) === "percentage" &&
        identityFields.every(function (field) {
          return normalizeText(charge[field]) === normalizeText(selectedCharge[field]);
        })
      );
    })
  ).sort(function (a, b) {
    return chargeSlabStart(a) - chargeSlabStart(b);
  });
}

function buildSlabTableBlockFromCharges(title, charges, basisFallback) {
  if (!charges || !charges.length) return null;
  const slabSeed = charges.find(function (charge) {
    return normalizeText(charge.has_slab_wise_charges) === "yes";
  });
  if (!slabSeed) return null;

  const slabs = listMatchingChargeSlabs(charges, slabSeed);
  if (slabs.length < 2) return null;

  const first = slabs[0];
  const sharedUnit = commonChargeUnitLabel(slabs);
  const anyGst = slabs.some(chargeGstApplicable);
  return {
    title: title,
    leftHeader: formatSlabColumnHeader(first),
    rightHeader: chargeColumnTitle(anyGst),
    chargeHeaderUnit: sharedUnit,
    gstApplicable: anyGst,
    rows: slabs.map(function (charge) {
      const cell = feeAmountCell(charge, {
        hideUnit: !!sharedUnit,
        hideBasis: true
      });
      return {
        range: formatChargeSlabBand(charge) || "Range",
        amount: cell.amount,
        meta: cell.meta
      };
    }),
    notes: uniqueStrings(
      slabs.reduce(function (all, charge) {
        return all.concat(collectChargeNotes(charge));
      }, [])
    )
  };
}

function overdueScheduleIsPercentage(slabs) {
  return (slabs || []).some(function (charge) {
    return (
      charge &&
      charge.percentage != null &&
      Number.isFinite(Number(charge.percentage)) &&
      !(charge.fixed_amount != null && Number.isFinite(Number(charge.fixed_amount)))
    );
  });
}

function formatOverdueScheduleAmount(charge) {
  if (!charge) return "—";
  if (
    charge.percentage != null &&
    Number.isFinite(Number(charge.percentage)) &&
    !(charge.fixed_amount != null && Number.isFinite(Number(charge.fixed_amount)))
  ) {
    return formatChargePercentageValue(charge);
  }
  if (charge.fixed_amount != null && Number.isFinite(Number(charge.fixed_amount))) {
    return formatInr(Number(charge.fixed_amount));
  }
  if (charge.percentage != null && Number.isFinite(Number(charge.percentage))) {
    return formatChargePercentageValue(charge);
  }
  return "—";
}

function buildOverdueDrawerSlabBlocks(overdueChargeSlabs, overdueCharge, candidates) {
  const schedule =
    overdueChargeSlabs && overdueChargeSlabs.length > 1
      ? overdueChargeSlabs
      : listOverduePercentageSlabRows(candidates || [], overdueCharge);
  if (!schedule || schedule.length < 2) return [];

  const first = schedule[0];
  const isDcbBank =
    overdueCharge && normalizeText(overdueCharge.bank_name) === "dcb bank";
  const asPct = overdueScheduleIsPercentage(schedule);
  return [
    {
      title: "Overdue charge by range",
      leftHeader: formatSlabColumnHeader(first),
      rightHeader: isDcbBank ? "Monthly charge" : "Charge",
      rows: schedule.map(function (charge) {
        const notes = asPct
          ? [charge.note_1, charge.note_2]
              .map(formatEncodedChargeNote)
              .filter(Boolean)
          : [];
        return {
          range: formatChargeSlabBand(charge) || "Range",
          amount: formatOverdueScheduleAmount(charge),
          meta: notes.join(" · ")
        };
      }),
      notes: [formatSlabBasisSentence(first, "overdue amount")]
    }
  ];
}

function buildEmiBounceFlatDrawerRows(candidates, summaryCharge) {
  const rows = [];
  const summaryName = summaryCharge && summaryCharge.charge_name;
  const summaryGroup = summaryCharge && summaryCharge.charge_group_id;
  dedupeChargesByRule(candidates || []).forEach(function (charge) {
    if (normalizeText(charge.has_slab_wise_charges) === "yes") return;
    if (
      summaryCharge &&
      charge.charge_name === summaryName &&
      charge.charge_group_id === summaryGroup
    ) {
      return;
    }
    const sharedUnit = commonChargeUnitLabel([charge]);
    const cell = feeAmountCell(charge, { hideUnit: !!sharedUnit });
    rows.push({
      range: charge.charge_name,
      amount: cell.amount,
      meta: cell.meta,
      chargeHeaderUnit: sharedUnit,
      gstApplicable: cell.gstApplicable
    });
  });
  return rows;
}

function buildEmiBounceDrawerSlabBlocks(candidates) {
  if (!candidates || !candidates.length) return [];
  const blocks = [];
  const byName = new Map();
  candidates.forEach(function (charge) {
    if (!charge || !charge.charge_name) return;
    if (!byName.has(charge.charge_name)) byName.set(charge.charge_name, []);
    byName.get(charge.charge_name).push(charge);
  });

  byName.forEach(function (list, chargeName) {
    const areas = uniqueStrings(
      list
        .map(function (charge) {
          return charge.charge_by_area;
        })
        .filter(Boolean)
    );
    if (areas.length >= 2) {
      const byArea = Object.create(null);
      areas.forEach(function (area) {
        byArea[area] = list
          .filter(function (charge) {
            return (
              charge.charge_by_area === area &&
              normalizeText(charge.has_slab_wise_charges) === "yes"
            );
          })
          .sort(function (a, b) {
            return chargeSlabStart(a) - chargeSlabStart(b);
          });
      });
      const bandKeys = [];
      const bandSeen = Object.create(null);
      areas.forEach(function (area) {
        (byArea[area] || []).forEach(function (charge) {
          const band = formatChargeSlabBand(charge) || "Range";
          if (!bandSeen[band]) {
            bandSeen[band] = true;
            bandKeys.push(band);
          }
        });
      });
      if (bandKeys.length && areas.every(function (area) {
        return (byArea[area] || []).length;
      })) {
        const first = byArea[areas[0]][0];
        const areaCharges = areas.reduce(function (all, area) {
          return all.concat(byArea[area] || []);
        }, []);
        const sharedUnit = commonChargeUnitLabel(areaCharges);
        const anyGst = areaCharges.some(chargeGstApplicable);
        blocks.push({
          title: chargeName,
          leftHeader: formatSlabColumnHeader(first) || "Particulars",
          rightHeader: chargeColumnTitle(anyGst),
          chargeHeaderUnit: sharedUnit,
          gstApplicable: anyGst,
          kind: "area-matrix",
          matrixColumns: areas,
          matrixRows: bandKeys.map(function (band) {
            return {
              label: band,
              cells: areas.map(function (area) {
                const match = (byArea[area] || []).find(function (charge) {
                  return (formatChargeSlabBand(charge) || "Range") === band;
                });
                return match
                  ? feeAmountCell(match, { hideUnit: !!sharedUnit, hideBasis: true })
                  : { amount: "—", meta: "", gstApplicable: false };
              })
            };
          }),
          notes: uniqueStrings(
            list.reduce(function (all, charge) {
              return all.concat(collectChargeNotes(charge));
            }, [])
          )
        });
        return;
      }
    }

    if (areas.length) {
      areas.forEach(function (area) {
        const block = buildSlabTableBlockFromCharges(
          chargeName,
          list.filter(function (charge) {
            return charge.charge_by_area === area;
          }),
          "bounce amount"
        );
        if (block) {
          // Area belongs in the table identity (title), not as a note.
          block.title = chargeName + " — " + area;
          blocks.push(block);
        }
      });
      return;
    }

    const block = buildSlabTableBlockFromCharges(
      chargeName,
      list,
      "bounce amount"
    );
    if (block) blocks.push(block);
  });

  return blocks;
}

function renderDrawerSlabTableBlock(block) {
  if (!block) return "";
  if (block.kind === "area-matrix") {
    const columns = block.matrixColumns || [];
    const rows = block.matrixRows || [];
    if (!columns.length || !rows.length) return "";
    const notesHtml = (block.notes || [])
      .filter(Boolean)
      .map(function (note) {
        return '<p class="hlc-fee-note">' + escapeHtml(note) + "</p>";
      })
      .join("");
    const showRowLabels =
      String(block.leftHeader || "").trim() &&
      rows.some(function (row) {
        return String(row.label || "").trim();
      });
    const columnGst = columns.map(function (col, index) {
      return rows.some(function (row) {
        const cell = (row.cells || [])[index];
        return cell && cell.gstApplicable;
      });
    });
    const bodyRows = rows
      .map(function (row) {
        return (
          "<tr>" +
          (showRowLabels
            ? '<th scope="row">' + escapeHtml(row.label || "") + "</th>"
            : "") +
          (row.cells || [])
            .map(function (cell) {
              return (
                "<td>" +
                '<span class="hlc-fee-amount">' +
                escapeHtml((cell && cell.amount) || "—") +
                "</span>" +
                (cell && cell.meta
                  ? '<span class="hlc-fee-meta">' +
                    escapeHtml(cell.meta) +
                    "</span>"
                  : "") +
                "</td>"
              );
            })
            .join("") +
          "</tr>"
        );
      })
      .join("");
    return (
      '<div class="hlc-fee-slab-block">' +
      (block.title
        ? '<h6 class="hlc-fee-slab-title">' + escapeHtml(block.title) + "</h6>"
        : "") +
      '<div class="hlc-drawer-card hlc-slab-card">' +
      '<table class="hlc-slab-table hlc-fee-table hlc-fee-matrix">' +
      drawerFeeTableShellHtml(
        (showRowLabels ? [block.leftHeader || "Particulars"] : []).concat(
          columns.map(function (col, index) {
            return col + (columnGst[index] || block.gstApplicable ? "*" : "");
          })
        ),
        { unit: block.chargeHeaderUnit || "" },
        bodyRows
      ) +
      "</table></div>" +
      notesHtml +
      "</div>"
    );
  }
  if (!block.rows || !block.rows.length) return "";
  const notesHtml = (block.notes || [])
    .filter(Boolean)
    .map(function (note) {
      return '<p class="hlc-fee-note">' + escapeHtml(note) + "</p>";
    })
    .join("");
  const rightHeader =
    block.rightHeader || chargeColumnTitle(block.gstApplicable);
  const bodyRows = block.rows
    .map(function (row) {
      return (
        "<tr><td>" +
        escapeHtml(row.range) +
        "</td><td>" +
        '<span class="hlc-fee-amount">' +
        escapeHtml(row.amount || "—") +
        "</span>" +
        (row.meta
          ? '<span class="hlc-fee-meta">' + escapeHtml(row.meta) + "</span>"
          : "") +
        "</td></tr>"
      );
    })
    .join("");
  return (
    '<div class="hlc-fee-slab-block">' +
    (block.title
      ? '<h6 class="hlc-fee-slab-title">' + escapeHtml(block.title) + "</h6>"
      : "") +
    '<div class="hlc-drawer-card hlc-slab-card">' +
    '<table class="hlc-slab-table hlc-fee-table">' +
    drawerFeeTableShellHtml(
      [block.leftHeader || "Particulars", rightHeader],
      { unit: block.chargeHeaderUnit || "" },
      bodyRows
    ) +
    "</table></div>" +
    notesHtml +
    "</div>"
  );
}

function renderDrawerSlabTableBlocks(blocks) {
  if (!blocks || !blocks.length) return "";
  return (
    '<div class="hlc-drawer-slab-sections">' +
    blocks.map(renderDrawerSlabTableBlock).join("") +
    "</div>"
  );
}

/**
 * Extra published rules that do not fit on the cell (ranges, area
 * schedules). Shown under the rupee walk, never instead of it.
 */
function chargeCalculationDetailsHtml(row, calculationKey) {
  if (!row || !calculationKey) return "";
  if (calculationKey === "overdueChargeDisplay") {
    return renderDrawerSlabTableBlocks(
      buildOverdueDrawerSlabBlocks(
        row.overdueChargeSlabs,
        row.overdueCharge,
        row.overdueCandidates
      )
    );
  }
  if (calculationKey === "emiBounceChargeDisplay") {
    const slabs = renderDrawerSlabTableBlocks(
      buildEmiBounceDrawerSlabBlocks(row.emiBounceCandidates)
    );
    const extraRows = buildEmiBounceFlatDrawerRows(
      row.emiBounceCandidates,
      row.emiBounceCharge
    );
    const extra = extraRows.length
      ? renderDrawerSlabTableBlock({
          title: "",
          leftHeader: "Charge",
          rightHeader: "Amount",
          rows: extraRows
        })
      : "";
    return slabs + extra;
  }
  if (calculationKey === "rateChangeChargeDisplay") {
    const block = buildSlabTableBlockFromCharges(
      "",
      row.rateChangeChargeSlabs,
      "loan amount"
    );
    return block ? renderDrawerSlabTableBlock(block) : "";
  }
  return "";
}

function chargeHasDrawerDetails(row, columnKey) {
  return !!chargeCalculationDetailsHtml(row, columnKey);
}

function bankChargeNotePlain(text, bankName) {
  let t = String(text || "").trim();
  if (!t) return "";
  const chars = Array.from(t);
  if (chars.length >= 2 && chars[1] === " " && !/^[A-Za-z0-9]$/.test(chars[0])) {
    t = chars.slice(2).join("").trim();
  }
  if (bankName) {
    const prefix = String(bankName).trim() + ": ";
    if (t.indexOf(prefix) === 0) t = t.slice(prefix.length).trim();
  }
  return t;
}

function rateChangeDrawerNotesForRow(row, method) {
  if (!row) return [];
  const charge = rateChangeChargeForMethod(row, method);
  return collectRateChangeExceptionTexts(
    charge,
    rateChangeBankKey(row, charge),
    method,
    rateTypeIsFixedForRow(row),
    rateChangeCandidatesForMethod(row, method)
  );
}

/**
 * Bank-only sentences for this cell’s drawer. No index glyphs. Column-wide
 * notes stay on the header / Notes panel.
 */
function chargeDrawerNoteLines(row, calculationKey) {
  const lines = [];
  const seen = Object.create(null);
  function add(line) {
    const t = String(line || "").trim();
    if (!t || seen[t]) return;
    seen[t] = true;
    lines.push(t);
  }
  if (!row || !calculationKey) return lines;
  if (calculationKey === "rateChangeChargeDisplay") {
    (row.rateChangeDrawerNotes || []).forEach(add);
    const display = row.rateChangeChargeDisplay;
    if (display && display.note) add(display.note);
    return lines;
  }
  if (calculationKey === "overdueChargeDisplay") {
    add(row.overdueShownNote);
    if (!chargeHasDrawerDetails(row, calculationKey)) {
      add(bankChargeNotePlain(row.overdueDetailFootnote, row.bankName));
    }
    const display = row.overdueChargeDisplay;
    if (display && display.note) add(display.note);
    return lines;
  }
  if (calculationKey === "emiBounceChargeDisplay") {
    add(row.emiBounceShownNote);
    if (!chargeHasDrawerDetails(row, calculationKey)) {
      add(bankChargeNotePlain(row.emiBounceDetailFootnote, row.bankName));
    }
    const display = row.emiBounceChargeDisplay;
    if (display && display.note) add(display.note);
    return lines;
  }
  return lines;
}

function chargeDrawerNotesHtml(row, calculationKey) {
  return calcNotesBlockHtml(chargeDrawerNoteLines(row, calculationKey));
}

function uniqueStrings(values) {
  const seen = Object.create(null);
  const out = [];
  (values || []).forEach(function (value) {
    const text = String(value || "").trim();
    if (!text || seen[text]) return;
    seen[text] = true;
    out.push(text);
  });
  return out;
}

/** Same published money rule — used to drop duplicate sheet rows. */
function chargeRuleFingerprint(charge) {
  if (!charge) return "";
  return [
    charge.percentage,
    charge.percentage_min,
    charge.percentage_max,
    charge.fixed_amount,
    charge.charge_min,
    charge.charge_max,
    normalizeText(charge.charge_unit),
    normalizeText(charge.gst_applicable),
    normalizeText(charge.percentage_base_value),
    normalizeText(charge.fixed_amount_per_lakh_or_part),
    normalizeText(charge.fixed_amount_per_1000_rs),
    normalizeText(charge.special_rule),
    normalizeText(charge.has_slab_wise_charges),
    charge.slab_from,
    charge.slab_to,
    normalizeText(charge.charge_by_area),
    normalizeText(charge.customer_type),
    normalizeText(charge.interest_rate_type_switch_from),
    normalizeText(charge.interest_rate_type_switch_to),
    normalizeText(charge.benchmark_switch_from),
    normalizeText(charge.benchmark_switch_to),
    normalizeText(charge.interest_rate_repricing_type),
    normalizeText(charge.occupation),
    normalizeText(charge.borrower_category),
    normalizeText(charge.rate_type),
    normalizeText(charge.loan_amount_band_applicable),
    charge.loan_amount_min,
    charge.loan_amount_max,
    normalizeText(charge.tenure_band_applicable),
    charge.tenure_months_min,
    charge.tenure_months_max,
    charge.cibil_band_score_min,
    charge.cibil_band_score_max,
    normalizeText(charge.charge_frequency_other),
    normalizeText(charge.property_valuation_scope),
    normalizeText(charge.fixed_amount_at_branch),
    normalizeText(charge.fixed_amount_at_net_mobile_banking),
    normalizeText(charge.charged_for_physical_copy),
    normalizeText(charge.charged_for_digital_copy),
    normalizeText(charge.charged_for_original_copy_or_first_issue),
    charge.months_from_event_min,
    charge.months_from_event_max,
    normalizeText(charge.months_from_event_basis),
    normalizeText(charge.facility_conversion_from),
    normalizeText(charge.facility_conversion_to),
    normalizeText(charge.valid_till),
    normalizeText(charge.note_1),
    normalizeText(charge.note_2)
  ].join("|");
}

function dedupeChargesByRule(charges) {
  const byPrint = new Map();
  (charges || []).forEach(function (charge) {
    const key = chargeRuleFingerprint(charge);
    if (!byPrint.has(key)) byPrint.set(key, charge);
  });
  return Array.from(byPrint.values());
}

/** Published fields only — never invent labels outside the sheet. */
function chargeCustomerTypeLabel(charge) {
  const customer = String((charge && charge.customer_type) || "").trim();
  if (!customer || normalizeText(customer) === "any") return "";
  return customer;
}

function chargeAreaLabel(charge) {
  return String((charge && charge.charge_by_area) || "").trim();
}

function chargeCibilBandLabel(charge) {
  if (!charge) return "";
  const min =
    charge.cibil_band_score_min != null &&
    Number.isFinite(Number(charge.cibil_band_score_min))
      ? Math.round(Number(charge.cibil_band_score_min))
      : null;
  const max =
    charge.cibil_band_score_max != null &&
    Number.isFinite(Number(charge.cibil_band_score_max))
      ? Math.round(Number(charge.cibil_band_score_max))
      : null;
  if (min == null && max == null) return "";
  // Sheet sentinel for “no CIBIL band” — do not show as a score range.
  if (min != null && min < 0) return "";
  if (min != null && max != null) return "CIBIL " + min + "–" + max;
  if (min != null) return "CIBIL from " + min;
  if (max != null && max > 0) return "CIBIL up to " + max;
  return "";
}

function chargeChannelLabel(charge) {
  if (!charge) return "";
  const branch = normalizeText(charge.fixed_amount_at_branch) === "yes";
  const net =
    normalizeText(charge.fixed_amount_at_net_mobile_banking) === "yes";
  if (branch && net) return "Branch or net / mobile banking";
  if (branch) return "At branch";
  if (net) return "Net / mobile banking";
  return "";
}

function chargeValidTillLabel(charge) {
  const raw = String((charge && charge.valid_till) || "").trim();
  if (!raw) return "";
  return "Valid till " + raw;
}

/** Notes that appear on every charge in the list — show once under the table. */
function sharedNotesAcrossCharges(charges) {
  const list = (charges || []).filter(Boolean);
  if (!list.length) return [];
  let shared = collectChargeNotes(list[0]);
  for (let i = 1; i < list.length; i += 1) {
    const notes = collectChargeNotes(list[i]);
    shared = shared.filter(function (note) {
      return notes.indexOf(note) >= 0;
    });
  }
  return uniqueStrings(shared);
}

/**
 * Extra What-column text from the sheet (case splits + published extras).
 * Values come from data fields only — never from the user's form inputs.
 */
function chargeDetailFromData(charge, options) {
  if (!charge) return "";
  const settings = options || {};
  const omitCustomer = settings.omitCustomer === true;
  const omitNotes = settings.omitNotes || [];
  const omitNoteSet = Object.create(null);
  omitNotes.forEach(function (note) {
    omitNoteSet[String(note)] = true;
  });
  const parts = [];
  const customer = chargeCustomerTypeLabel(charge);
  // Area labels belong in matrix column headers — never as Particulars/note text.
  if (customer && !omitCustomer) parts.push(customer);

  const switchFrom = String(charge.interest_rate_type_switch_from || "").trim();
  const switchTo = String(charge.interest_rate_type_switch_to || "").trim();
  if (switchFrom && switchTo) {
    parts.push(switchFrom + " to " + switchTo);
  }
  const benchmarkFrom = String(charge.benchmark_switch_from || "").trim();
  const benchmarkTo = String(charge.benchmark_switch_to || "").trim();
  if (benchmarkFrom && benchmarkTo) {
    parts.push(benchmarkFrom + " to " + benchmarkTo);
  }
  const repricingType = String(charge.interest_rate_repricing_type || "").trim();
  if (repricingType) parts.push(repricingType);

  const facFrom = String(charge.facility_conversion_from || "").trim();
  const facTo = String(charge.facility_conversion_to || "").trim();
  if (facFrom && facTo) {
    parts.push(facFrom + " to " + facTo);
  }

  function pushSpecific(value) {
    const text = String(value || "").trim();
    if (!text || normalizeText(text) === "any") return;
    parts.push(text);
  }
  pushSpecific(charge.occupation);
  pushSpecific(charge.borrower_category);
  pushSpecific(charge.rate_type);

  const cibil = chargeCibilBandLabel(charge);
  if (cibil) parts.push(cibil);

  if (normalizeText(charge.loan_amount_band_applicable) === "yes") {
    const loanBand = formatNumericBandLabel(
      charge.loan_amount_min,
      charge.loan_amount_max
    );
    if (loanBand) parts.push(loanBand);
  }
  if (normalizeText(charge.tenure_band_applicable) === "yes") {
    const tenureBand = formatNumericBandLabel(
      charge.tenure_months_min,
      charge.tenure_months_max
    );
    if (tenureBand) parts.push(tenureBand + " months");
  }

  const monthsDetail = formatMonthsFromEventDetail(charge);
  if (monthsDetail) parts.push(monthsDetail);

  const valuationScope = String(charge.property_valuation_scope || "").trim();
  if (valuationScope) parts.push(valuationScope);

  const channel = chargeChannelLabel(charge);
  if (channel) parts.push(channel);

  if (normalizeText(charge.charged_for_physical_copy) === "yes") {
    parts.push("Physical copy");
  }
  if (normalizeText(charge.charged_for_digital_copy) === "yes") {
    parts.push("Digital copy");
  }
  if (normalizeText(charge.charged_for_original_copy_or_first_issue) === "yes") {
    parts.push("Original / first issue");
  }

  const frequency = String(charge.charge_frequency_other || "").trim();
  if (frequency) parts.push(frequency);

  const validTill = chargeValidTillLabel(charge);
  if (validTill) parts.push(validTill);

  const n1 = formatEncodedChargeNote(charge.note_1);
  const n2 = formatEncodedChargeNote(charge.note_2);
  if (n1 && !omitNoteSet[n1]) parts.push(n1);
  if (n2 && !omitNoteSet[n2]) parts.push(n2);
  return parts.join(" · ");
}

function feeAmountCell(charge, options) {
  const settings = options || {};
  const oop = chargeOopApplicable(charge);
  const amount = formatChargeAmountHeadline(charge);
  return {
    // † on the amount; full “Out-of-pocket expenses.” lives under the fee block.
    amount: oop && amount ? amount + OOP_EXPENSES_MARKER : amount,
    meta: formatChargeMetaLine(charge, {
      hideUnit: settings.hideUnit,
      hideBasis: settings.hideBasis,
      hideOop: true
    }),
    gstApplicable: chargeGstApplicable(charge),
    oopApplicable: oop
  };
}

/** Fixed + % rows with the same note → one “₹X or Y%” line (common bank pattern). */
function tryMergeFixedAndPercentage(charges) {
  if (!charges || charges.length !== 2) return null;
  const fixed = charges.find(function (charge) {
    return (
      charge.fixed_amount != null &&
      Number.isFinite(Number(charge.fixed_amount)) &&
      (charge.percentage == null || !Number.isFinite(Number(charge.percentage)))
    );
  });
  const pct = charges.find(function (charge) {
    return (
      charge.percentage != null &&
      Number.isFinite(Number(charge.percentage)) &&
      (charge.fixed_amount == null || !Number.isFinite(Number(charge.fixed_amount)))
    );
  });
  if (!fixed || !pct) return null;
  // Same money alternatives only — never merge different switch directions,
  // areas, customer types, or other published case splits.
  const sameCaseFields = [
    "interest_rate_type_switch_from",
    "interest_rate_type_switch_to",
    "benchmark_switch_from",
    "benchmark_switch_to",
    "interest_rate_repricing_type",
    "charge_by_area",
    "customer_type",
    "occupation",
    "borrower_category",
    "rate_type",
    "cibil_band_score_min",
    "cibil_band_score_max",
    "property_valuation_scope",
    "charge_frequency_other",
    "fixed_amount_at_branch",
    "fixed_amount_at_net_mobile_banking",
    "valid_till",
    "facility_conversion_from",
    "facility_conversion_to",
    "months_from_event_min",
    "months_from_event_max",
    "months_from_event_basis",
    "loan_amount_min",
    "loan_amount_max"
  ];
  for (let i = 0; i < sameCaseFields.length; i += 1) {
    const field = sameCaseFields[i];
    if (normalizeText(fixed[field]) !== normalizeText(pct[field])) return null;
  }
  const fixedPrimary = formatEncodedChargeNote(fixed.note_1);
  const pctPrimary = formatEncodedChargeNote(pct.note_1);
  if (fixedPrimary !== pctPrimary) return null;
  const hasGst = chargeGstApplicable(fixed) || chargeGstApplicable(pct);
  const sharedUnit =
    commonChargeUnitLabel([fixed, pct]) ||
    formatChargeUnit(fixed.charge_unit) ||
    formatChargeUnit(pct.charge_unit);
  return {
    entries: [
      {
        what: fixed.charge_name || pct.charge_name || "Charge",
        detail: chargeDetailFromData(fixed),
        amount:
          formatChargeAmountHeadline(fixed) +
          " or " +
          formatChargeAmountHeadline(pct),
        meta:
          formatChargeMetaLine(fixed, { hideUnit: !!sharedUnit }) ||
          formatChargeMetaLine(pct, { hideUnit: !!sharedUnit }),
        chargeHeaderUnit: sharedUnit,
        hint: "",
        gstApplicable: hasGst
      }
    ],
    notes: uniqueStrings(
      collectChargeNotes(fixed).concat(collectChargeNotes(pct))
    )
  };
}

/**
 * Area (and optional customer-type / amount-slab) matrix: one column per area
 * from the sheet — never park Metro/Rural/etc. in notes or Particulars text.
 */
function buildAreaMatrixFeeEntry(name, charges) {
  const list = dedupeChargesByRule(charges);
  const areas = uniqueStrings(list.map(chargeAreaLabel).filter(Boolean));
  if (areas.length < 2) return null;

  const byArea = Object.create(null);
  areas.forEach(function (area) {
    byArea[area] = list
      .filter(function (charge) {
        return chargeAreaLabel(charge) === area;
      })
      .sort(function (a, b) {
        return chargeSlabStart(a) - chargeSlabStart(b);
      });
  });

  const slabAreas = areas.filter(function (area) {
    return (byArea[area] || []).some(function (charge) {
      return normalizeText(charge.has_slab_wise_charges) === "yes";
    });
  });

  // Area × amount-band matrix (Legal Opinion / ECS bounce by metro vs rural).
  if (slabAreas.length >= 2) {
    const bandKeys = [];
    const bandSeen = Object.create(null);
    slabAreas.forEach(function (area) {
      (byArea[area] || []).forEach(function (charge) {
        if (normalizeText(charge.has_slab_wise_charges) !== "yes") return;
        const band = formatChargeSlabBand(charge) || "Range";
        if (!bandSeen[band]) {
          bandSeen[band] = true;
          bandKeys.push(band);
        }
      });
    });
    if (bandKeys.length) {
      const areaCharges = slabAreas.reduce(function (all, area) {
        return all.concat(byArea[area] || []);
      }, []);
      const sharedUnit = commonChargeUnitLabel(areaCharges);
      const anyGst = areaCharges.some(chargeGstApplicable);
      const firstSlab = areaCharges.find(function (charge) {
        return normalizeText(charge.has_slab_wise_charges) === "yes";
      });
      return {
        entries: [
          {
            what: name,
            detail: "",
            kind: "area-matrix",
            amount: "",
            meta: "",
            slabLeftHeader: formatSlabColumnHeader(firstSlab) || "Particulars",
            matrixColumns: slabAreas,
            matrixRows: bandKeys.map(function (band) {
              return {
                label: band,
                cells: slabAreas.map(function (area) {
                  const match = (byArea[area] || []).find(function (charge) {
                    return (
                      normalizeText(charge.has_slab_wise_charges) === "yes" &&
                      (formatChargeSlabBand(charge) || "Range") === band
                    );
                  });
                  return match
                    ? feeAmountCell(match, {
                        hideUnit: !!sharedUnit,
                        hideBasis: true
                      })
                    : { amount: "—", meta: "", gstApplicable: false };
                })
              };
            }),
            chargeHeaderUnit: sharedUnit,
            gstApplicable: anyGst
          }
        ],
        notes: notesWithOopFootnote(sharedNotesAcrossCharges(areaCharges), areaCharges)
      };
    }
  }

  const customers = uniqueStrings(list.map(chargeCustomerTypeLabel).filter(Boolean));
  const rowKeys = customers.length ? customers : [""];
  const cells = Object.create(null);
  let anyGst = false;
  const sharedUnit = commonChargeUnitLabel(list);

  list.forEach(function (charge) {
    const area = chargeAreaLabel(charge);
    if (!area) return;
    const rowKey = chargeCustomerTypeLabel(charge);
    const key = rowKey + "||" + area;
    const cell = feeAmountCell(charge, { hideUnit: !!sharedUnit });
    cells[key] = cell;
    if (cell.gstApplicable) anyGst = true;
  });

  const matrixRows = rowKeys.map(function (rowKey) {
    return {
      label: rowKey,
      cells: areas.map(function (area) {
        return (
          cells[rowKey + "||" + area] || {
            amount: "—",
            meta: "",
            gstApplicable: false
          }
        );
      })
    };
  });

  return {
    entries: [
      {
        what: name,
        detail: "",
        kind: "area-matrix",
        amount: "",
        meta: "",
        slabLeftHeader: customers.length ? "Customer type" : "",
        matrixColumns: areas,
        matrixRows: matrixRows,
        chargeHeaderUnit: sharedUnit,
        gstApplicable: anyGst
      }
    ],
    notes: notesWithOopFootnote(sharedNotesAcrossCharges(list), list)
  };
}

/**
 * Expand one fee name into scannable What | Charge rows (slabs / area matrices),
 * after dropping identical duplicate sheet rows.
 */
function buildFeeTableEntries(name, charges) {
  const list = dedupeChargesByRule(charges);
  if (!list.length) {
    return { entries: [], notes: [] };
  }

  // Metro / Rural / city category / network splits → columns, not notes.
  const areaRows = list.filter(function (charge) {
    return !!chargeAreaLabel(charge);
  });
  const nonAreaRows = list.filter(function (charge) {
    return !chargeAreaLabel(charge);
  });
  const areaMatrix = buildAreaMatrixFeeEntry(name, areaRows.length ? areaRows : list);
  if (areaMatrix) {
    if (!nonAreaRows.length) return areaMatrix;
    const rest = buildFeeTableEntries(name, nonAreaRows);
    return {
      entries: areaMatrix.entries.concat(rest.entries),
      notes: uniqueStrings(areaMatrix.notes.concat(rest.notes))
    };
  }

  const allSlabRows = list
    .filter(function (charge) {
      return normalizeText(charge.has_slab_wise_charges) === "yes";
    })
    .sort(function (a, b) {
      return (
        String(a.charge_group_id || "").localeCompare(
          String(b.charge_group_id || ""),
          "en",
          { sensitivity: "base" }
        ) || chargeSlabStart(a) - chargeSlabStart(b)
      );
    });
  if (allSlabRows.length) {
    const groupIds = uniqueStrings(
      allSlabRows
        .map(function (charge) {
          return charge.charge_group_id;
        })
        .filter(Boolean)
    );
    const slabGroups = (groupIds.length ? groupIds : [allSlabRows[0].charge_group_id]).map(
      function (groupId) {
        return allSlabRows.filter(function (charge) {
          return charge.charge_group_id === groupId;
        });
      }
    );
    const multiGroupEntries = [];
    const multiGroupNotes = [];
    slabGroups.forEach(function (slabs) {
      if (slabs.length > 1) {
        const first = slabs[0];
        const basisLabel = formatSlabColumnHeader(first);
        const sharedUnit = commonChargeUnitLabel(slabs);
        const anyGst = slabs.some(chargeGstApplicable);
        multiGroupEntries.push({
          what: name,
          detail: chargeDetailFromData(first, {
            omitNotes: sharedNotesAcrossCharges(slabs)
          }),
          kind: "slab-table",
          amount: "",
          meta: "",
          slabLeftHeader: basisLabel,
          slabRightHeader: chargeColumnTitle(anyGst),
          chargeHeaderUnit: sharedUnit,
          slabRows: slabs.map(function (charge) {
            const cell = feeAmountCell(charge, {
              hideUnit: !!sharedUnit,
              hideBasis: true
            });
            return {
              range: formatChargeSlabBand(charge) || "Range",
              amount: cell.amount,
              meta: cell.meta
            };
          }),
          hint: basisLabel,
          gstApplicable: anyGst
        });
        multiGroupNotes.push.apply(multiGroupNotes, sharedNotesAcrossCharges(slabs));
      } else if (slabs.length === 1) {
        const charge = slabs[0];
        const sharedUnit = commonChargeUnitLabel([charge]);
        const cell = feeAmountCell(charge, { hideUnit: !!sharedUnit });
        multiGroupEntries.push({
          what: name,
          detail: chargeDetailFromData(charge),
          amount: cell.amount,
          meta: cell.meta,
          chargeHeaderUnit: sharedUnit,
          hint: "",
          gstApplicable: cell.gstApplicable
        });
      }
    });
    if (multiGroupEntries.length) {
      const nonSlab = list.filter(function (charge) {
        return normalizeText(charge.has_slab_wise_charges) !== "yes";
      });
      if (nonSlab.length) {
        const sharedUnit = commonChargeUnitLabel(nonSlab);
        nonSlab.forEach(function (charge) {
          const cell = feeAmountCell(charge, { hideUnit: !!sharedUnit });
          multiGroupEntries.push({
            what: name,
            detail: chargeDetailFromData(charge),
            amount: cell.amount,
            meta: cell.meta,
            chargeHeaderUnit: sharedUnit,
            hint: "",
            gstApplicable: cell.gstApplicable
          });
        });
      }
      return {
        entries: multiGroupEntries,
        notes: notesWithOopFootnote(uniqueStrings(multiGroupNotes), list)
      };
    }
  }

  if (list.length === 1) {
    const charge = list[0];
    const sharedUnit = commonChargeUnitLabel([charge]);
    const cell = feeAmountCell(charge, { hideUnit: !!sharedUnit });
    // Same rule as multi-row groups: sheet prose lives under the fee block,
    // not jammed into Particulars (keeps long at-actuals notes readable).
    const sharedNotes = sharedNotesAcrossCharges([charge]);
    return {
      entries: [
        {
          what: name,
          detail: chargeDetailFromData(charge, { omitNotes: sharedNotes }),
          amount: cell.amount,
          meta: cell.meta,
          chargeHeaderUnit: sharedUnit,
          hint: "",
          gstApplicable: cell.gstApplicable
        }
      ],
      notes: notesWithOopFootnote(sharedNotes, [charge])
    };
  }

  const mergedPair = tryMergeFixedAndPercentage(list);
  if (mergedPair) {
    mergedPair.entries[0].what = name;
    mergedPair.notes = notesWithOopFootnote(mergedPair.notes || [], list);
    return mergedPair;
  }

  const sharedUnit = commonChargeUnitLabel(list);
  const anyGst = list.some(chargeGstApplicable);
  const sharedNotes = sharedNotesAcrossCharges(list);
  const showCustomerType = list.some(function (charge) {
    return !!chargeCustomerTypeLabel(charge);
  });
  const ordered = list.slice().sort(function (a, b) {
    const cibilA =
      a.cibil_band_score_min != null ? Number(a.cibil_band_score_min) : -1;
    const cibilB =
      b.cibil_band_score_min != null ? Number(b.cibil_band_score_min) : -1;
    if (cibilA !== cibilB) return cibilA - cibilB;
    const loanA =
      a.loan_amount_min != null ? Number(a.loan_amount_min) : -1;
    const loanB =
      b.loan_amount_min != null ? Number(b.loan_amount_min) : -1;
    if (loanA !== loanB) return loanA - loanB;
    return String(a.rate_type || "").localeCompare(String(b.rate_type || ""), "en", {
      sensitivity: "base"
    });
  });
  return {
    entries: ordered.map(function (charge) {
      const cell = feeAmountCell(charge, { hideUnit: !!sharedUnit });
      return {
        what: name,
        detail: chargeDetailFromData(charge, {
          omitCustomer: showCustomerType,
          omitNotes: sharedNotes
        }),
        customerType: chargeCustomerTypeLabel(charge),
        amount: cell.amount,
        meta: cell.meta,
        chargeHeaderUnit: sharedUnit,
        hint: "",
        gstApplicable: cell.gstApplicable
      };
    }),
    notes: notesWithOopFootnote(sharedNotes, list)
  };
}

function laterFeeCategory(name) {
  const n = normalizeText(name);
  if (
    /noc|no objection|no due|no dues|balance confirmation|interest certificate|amortisation|amortization|statement of account|list of documents|document copy|document retrieval|document retention|passbook|solvency|loan agreement|loan document|certificate/.test(
      n
    )
  ) {
    return { id: "documents", label: "Documents & certificates" };
  }
  if (
    /swap|repayment mode|pdc|emi cycle|cheque reissu|cheque book|mandate|standing instruction|e-mandate|nmmp|non-maintenance of mode|cash emi|cash deposit|rebooking|cancellation|revalidation of no objection|si\/ecs|si\/|nach mandate/.test(
      n
    )
  ) {
    return { id: "repayment", label: "Changing how you pay" };
  }
  if (
    /collection phone|collection visit|field collection/.test(n)
  ) {
    return { id: "collection", label: "Collection follow-up" };
  }
  if (
    /penal|non-submission|non-collection|non-adherence|non-creation|non-completion|non-renewal|non-utilisation|non-utilization|commitment|deviation|construction delay|breach|npa|overdrawn|safe custody|facility conversion|revalidation|sanction|modification|renewal fee|re-appraisal|incidental|account handling|failed|non-payment/.test(
      n
    )
  ) {
    return {
      id: "penalties",
      label: "If rules aren’t met or something goes wrong"
    };
  }
  return { id: "other", label: "Other fees" };
}

function earlyFeeCategory(name) {
  const n = normalizeText(name);
  if (n === "processing fee") {
    return { id: "processing", label: "To start the loan" };
  }
  if (/cibil|cic|credit information|credit opinion/.test(n)) {
    return { id: "credit", label: "Credit checks" };
  }
  if (
    /legal|valuation|title search|inspection|technical|non-encumbrance|equitable mortgage|field investigation/.test(
      n
    )
  ) {
    return { id: "property", label: "Property & legal checks" };
  }
  if (/admin|documentation|service charge|digital documentation/.test(n)) {
    return { id: "admin", label: "Admin & paperwork" };
  }
  return { id: "early-other", label: "Other upfront fees" };
}

/**
 * For a fee name: keep every distinct published variant the drawer can show
 * (areas, directions, customer types, all slab schedules, and non-slab
 * siblings) — never identical duplicate sheet rows.
 */
function selectChargesForFeeName(matchedRows) {
  const list = (matchedRows || []).filter(Boolean);
  if (!list.length) return [];

  const areas = uniqueStrings(list.map(chargeAreaLabel).filter(Boolean));
  if (areas.length >= 2) {
    // Keep every area row for columns, plus any no-area sibling cases.
    return dedupeChargesByRule(list);
  }

  const slabRows = list.filter(function (charge) {
    return normalizeText(charge.has_slab_wise_charges) === "yes";
  });
  if (slabRows.length) {
    const groupIds = uniqueStrings(
      slabRows
        .map(function (charge) {
          return charge.charge_group_id;
        })
        .filter(Boolean)
    );
    let selectedSlabs;
    if (groupIds.length > 1) {
      selectedSlabs = dedupeChargesByRule(slabRows).sort(function (a, b) {
        return (
          String(a.charge_group_id || "").localeCompare(
            String(b.charge_group_id || ""),
            "en",
            { sensitivity: "base" }
          ) || chargeSlabStart(a) - chargeSlabStart(b)
        );
      });
    } else {
      slabRows.sort(function (a, b) {
        return (
          afterOfferSpecificityScore(b) - afterOfferSpecificityScore(a) ||
          specificityScore(b, [
            "scheme",
            "occupation",
            "purpose",
            "rate_type",
            "facility_type",
            "borrower_category"
          ]) -
            specificityScore(a, [
              "scheme",
              "occupation",
              "purpose",
              "rate_type",
              "facility_type",
              "borrower_category"
            ])
        );
      });
      const best = slabRows[0];
      selectedSlabs = list
        .filter(function (charge) {
          return (
            charge.charge_group_id === best.charge_group_id &&
            normalizeText(charge.has_slab_wise_charges) === "yes"
          );
        })
        .sort(function (a, b) {
          return chargeSlabStart(a) - chargeSlabStart(b);
        });
      // Multiple slab schedules still present under other groups — keep them.
      if (groupIds.length <= 1) {
        const otherSlabs = slabRows.filter(function (charge) {
          return charge.charge_group_id !== best.charge_group_id;
        });
        if (otherSlabs.length) {
          selectedSlabs = selectedSlabs.concat(otherSlabs);
        }
      }
    }
    const nonSlab = list.filter(function (charge) {
      return normalizeText(charge.has_slab_wise_charges) !== "yes";
    });
    return dedupeChargesByRule(selectedSlabs.concat(nonSlab));
  }

  return dedupeChargesByRule(list);
}

function collectMatchedChargesByName(charges) {
  const byName = new Map();
  charges.forEach(function (charge) {
    if (!charge || !charge.charge_name) return;
    if (!byName.has(charge.charge_name)) byName.set(charge.charge_name, []);
    byName.get(charge.charge_name).push(charge);
  });
  return byName;
}

function buildFeeSectionsFromMatched(matchedCharges, categorize) {
  const byName = collectMatchedChargesByName(matchedCharges);
  const sections = [];

  byName.forEach(function (list, name) {
    const selected = selectChargesForFeeName(list);
    const built = buildFeeTableEntries(name, selected);
    if (!built.entries.length) return;
    sections.push({
      id: name,
      label: name,
      entries: built.entries.slice(),
      notes: uniqueStrings(built.notes)
    });
  });

  sections.sort(function (a, b) {
    return String(a.label).localeCompare(String(b.label), "en", {
      sensitivity: "base"
    });
  });

  return sections;
}

function feeSectionsHaveGst(sections) {
  return (sections || []).some(function (section) {
    return (section.entries || []).some(function (entry) {
      return entry.gstApplicable;
    });
  });
}

/**
 * Upfront fees for the drawer — full scheme fee book for this bank/scheme/
 * purpose/facility (not filtered by the user's occupation, rate, or loan size).
 */
function listSchemeChargePanelSections(charges, offer) {
  const matched = suppressPublishedPropertyChecks(
    (charges || []).filter(function (charge) {
      return prefilterChargeForSchemeBook(charge, offer);
    })
  );
  return buildFeeSectionsFromMatched(matched, earlyFeeCategory);
}

/**
 * Later fees not on the table — full scheme book for this offer’s scope,
 * still excluding names that already appear under Other charges / the table.
 */
function listAdditionalAfterOfferPanelSections(charges, query, offer) {
  const matched = (charges || []).filter(function (charge) {
    if (!prefilterAfterOfferChargeForSchemeBook(charge, offer)) return false;
    if (isShownOnExploreTable(charge)) return false;
    return true;
  });
  return buildFeeSectionsFromMatched(matched, laterFeeCategory);
}

function unpublishedFeeSection(label) {
  return {
    id: label,
    label: label,
    entries: [
      {
        what: label,
        detail: "",
        amount: CHARGE_NOT_PUBLISHED_BY_BANK,
        meta: "",
        chargeHeaderUnit: "",
        gstApplicable: false
      }
    ],
    notes: []
  };
}

/**
 * Table-column fees in the drawer: every published variant for this scheme
 * (both rate-switch directions, all bounce area columns, full overdue slabs).
 */
function listDrawerOtherChargeSections(charges, offer) {
  const matched = (charges || []).filter(function (charge) {
    return (
      prefilterAfterOfferChargeForSchemeBook(charge, offer) &&
      isShownOnExploreTable(charge)
    );
  });
  const built = buildFeeSectionsFromMatched(matched, laterFeeCategory);
  const byLabel = Object.create(null);
  built.forEach(function (section) {
    byLabel[section.label] = section;
  });

  const preferred = [
    "Prepayment charges",
    "Prepayment charges (takeover)",
    RATE_CHANGE_CHARGE_TYPE_SWITCH,
    RATE_CHANGE_CHARGE_REPRICING,
    RATE_CHANGE_CHARGE_BENCHMARK,
    "Overdue charges"
  ];
  const ordered = [];
  const seen = Object.create(null);
  preferred.forEach(function (label) {
    seen[label] = true;
    ordered.push(byLabel[label] || unpublishedFeeSection(label));
  });
  built
    .slice()
    .sort(function (a, b) {
      return String(a.label).localeCompare(String(b.label), "en", {
        sensitivity: "base"
      });
    })
    .forEach(function (section) {
      if (seen[section.label]) return;
      seen[section.label] = true;
      ordered.push(section);
    });
  return ordered;
}

/** @deprecated Compatibility: flatten sections to old block-like rows. */
function listSchemeChargePanelBlocks(charges, offer) {
  return listSchemeChargePanelSections(charges, offer).reduce(function (
    blocks,
    section
  ) {
    section.entries.forEach(function (entry) {
      blocks.push({
        name: entry.what,
        variants: [
          {
            label: "",
            summary: entry.amount,
            meta: entry.meta,
            slabIntro: "",
            slabLeftHeader: "Range",
            slabRightHeader: "Charge",
            slabs: [],
            notes: []
          }
        ]
      });
    });
    return blocks;
  },
  []);
}

function listAdditionalAfterOfferPanelBlocks(charges, query, offer) {
  return listAdditionalAfterOfferPanelSections(charges, query, offer).reduce(
    function (blocks, section) {
      section.entries.forEach(function (entry) {
        blocks.push({
          name: entry.what,
          variants: [
            {
              label: "",
              summary: entry.amount,
              meta: entry.meta,
              slabIntro: "",
              slabLeftHeader: "Range",
              slabRightHeader: "Charge",
              slabs: [],
              notes: []
            }
          ]
        });
      });
      return blocks;
    },
    []
  );
}

function listSchemeChargePanelRows(charges, offer) {
  return listSchemeChargePanelBlocks(charges, offer).map(function (block) {
    const first = block.variants && block.variants[0];
    const summary = first
      ? [first.summary, first.meta].filter(Boolean).join(" · ")
      : CHARGE_NOT_PUBLISHED_BY_BANK;
    return [block.name, summary || CHARGE_NOT_PUBLISHED_BY_BANK];
  });
}

function listAdditionalAfterOfferPanelRows(charges, query, offer) {
  return listAdditionalAfterOfferPanelBlocks(charges, query, offer).map(
    function (block) {
      const first = block.variants && block.variants[0];
      const summary = first
        ? [first.summary, first.meta].filter(Boolean).join(" · ")
        : CHARGE_NOT_PUBLISHED_BY_BANK;
      return [block.name, summary || CHARGE_NOT_PUBLISHED_BY_BANK];
    }
  );
}

function buildChargePanelVariant(rows) {
  const name =
    rows && rows[0] && rows[0].charge_name ? rows[0].charge_name : "Charge";
  const built = buildFeeTableEntries(name, rows || []);
  const first = built.entries[0];
  const slabEntry =
    first && first.kind === "slab-table" ? first : null;
  return {
    label: "",
    summary: slabEntry ? "" : first ? first.amount : CHARGE_NOT_PUBLISHED_BY_BANK,
    meta: slabEntry ? "" : first ? first.meta : "",
    slabIntro: "",
    slabLeftHeader: slabEntry ? slabEntry.slabLeftHeader : "Range",
    slabRightHeader: slabEntry ? slabEntry.slabRightHeader : "Charge",
    slabs: slabEntry
      ? slabEntry.slabRows.map(function (row) {
          return [row.range, row.amount];
        })
      : built.entries.slice(1).map(function (entry) {
          return [entry.what, entry.amount];
        }),
    notes: built.notes
  };
}

function buildChargePanelBlock(name, charges) {
  const built = buildFeeTableEntries(name, charges || []);
  const first = built.entries[0];
  const slabEntry =
    first && first.kind === "slab-table" ? first : null;
  return {
    name: name,
    variants: [
      {
        label: "",
        summary: slabEntry ? "" : first ? first.amount : CHARGE_NOT_PUBLISHED_BY_BANK,
        meta: slabEntry ? "" : first ? first.meta : "",
        slabIntro: "",
        slabLeftHeader: slabEntry ? slabEntry.slabLeftHeader : "Range",
        slabRightHeader: slabEntry ? slabEntry.slabRightHeader : "Charge",
        slabs: slabEntry
          ? slabEntry.slabRows.map(function (row) {
              return [row.range, row.amount];
            })
          : built.entries.map(function (entry) {
              return [entry.what, entry.amount];
            }),
        notes: built.notes
      }
    ]
  };
}

function prefilterChargeForScheme(charge, offer) {
  if (charge.when_it_matters !== "Before offer") return false;
  if (normalizeText(charge.bank_key) !== normalizeText(offer.bank_key)) return false;
  if (!matchesOptionalField(charge.purpose, offer.purpose)) return false;
  if (!matchesOptionalField(charge.occupation, offer.occupation)) return false;
  if (!matchesOptionalField(charge.facility_type, offer.facility_type)) return false;
  if (!matchesOptionalField(charge.borrower_category, offer.borrower_category)) return false;
  if (charge.rate_type && offer.rate_type && charge.rate_type !== offer.rate_type) return false;
  if (charge.scheme && offer.scheme && charge.scheme !== offer.scheme) return false;
  return true;
}

function listApplicableCharges(charges, query, offer) {
  const byName = new Map();
  charges.forEach(function (charge) {
    if (!charge || !charge.charge_name) return;
    if (!prefilterCharge(charge, query, offer)) return;
    const existing = byName.get(charge.charge_name);
    if (!existing) {
      byName.set(charge.charge_name, charge);
      return;
    }
    const fields = [
      "scheme",
      "occupation",
      "purpose",
      "rate_type",
      "facility_type",
      "borrower_category"
    ];
    if (specificityScore(charge, fields) > specificityScore(existing, fields)) {
      byName.set(charge.charge_name, charge);
    }
  });
  return Array.from(byName.values()).sort(function (a, b) {
    return String(a.charge_name).localeCompare(String(b.charge_name), "en", {
      sensitivity: "base"
    });
  });
}

/** Charges tied to this scheme row in the data — not the customer's inputs. */
function listSchemeCharges(charges, offer) {
  const byName = new Map();
  charges.forEach(function (charge) {
    if (!charge || !charge.charge_name) return;
    if (!prefilterChargeForScheme(charge, offer)) return;
    const existing = byName.get(charge.charge_name);
    if (!existing) {
      byName.set(charge.charge_name, charge);
      return;
    }
    const fields = [
      "scheme",
      "occupation",
      "purpose",
      "rate_type",
      "facility_type",
      "borrower_category"
    ];
    if (specificityScore(charge, fields) > specificityScore(existing, fields)) {
      byName.set(charge.charge_name, charge);
    }
  });
  return Array.from(byName.values()).sort(function (a, b) {
    return String(a.charge_name).localeCompare(String(b.charge_name), "en", {
      sensitivity: "base"
    });
  });
}

function pickBestCharge(charges, query, offer, chargeName) {
  const candidates = charges.filter(function (charge) {
    if (charge.charge_name !== chargeName) return false;
    return prefilterCharge(charge, query, offer);
  });
  if (!candidates.length) return null;
  candidates.sort(function (a, b) {
    return (
      specificityScore(b, ["scheme", "occupation", "purpose", "rate_type", "borrower_category"]) -
      specificityScore(a, ["scheme", "occupation", "purpose", "rate_type", "borrower_category"])
    );
  });
  return candidates[0];
}

function pickBestOfferPerBank(offers) {
  const byBank = new Map();
  offers.forEach(function (offer) {
    const key = normalizeText(offer.bank_key);
    const existing = byBank.get(key);
    if (!existing) {
      byBank.set(key, offer);
      return;
    }
    const specificityFields = [
      "borrower_category",
      "occupation",
      "purpose",
      "scheme",
      "cibil_band_applicable"
    ];
    const nextScore = specificityScore(offer, specificityFields);
    const prevScore = specificityScore(existing, specificityFields);
    if (nextScore > prevScore) {
      byBank.set(key, offer);
      return;
    }
    if (nextScore === prevScore && Number(offer.roi) < Number(existing.roi)) {
      byBank.set(key, offer);
    }
  });
  return Array.from(byBank.values());
}

function emiFromLoan(principal, annualRateDecimal, tenureYears) {
  const amount = Number(principal);
  const years = Number(tenureYears);
  const months = Math.max(0, Math.round(years * 12));
  const annualPct = annualRateDecimal * 100;
  if (!(amount > 0) || !(months > 0)) return 0;
  const r = annualPct / 100 / 12;
  if (r <= 0) return amount / months;
  const factor = Math.pow(1 + r, months);
  return (amount * r * factor) / (factor - 1);
}

function formatInr(value) {
  if (value == null || !Number.isFinite(value)) return "—";
  return "₹" + Math.round(value).toLocaleString("en-IN");
}

function formatPctFromDecimal(value) {
  if (value == null || !Number.isFinite(value)) return "—";
  return (value * 100).toFixed(2) + "%";
}

function formatPct(value) {
  if (value == null || !Number.isFinite(value)) return "—";
  return Number(value).toFixed(2) + "%";
}

function cibilLabelForOffer(offer) {
  if (offer.cibil_score_status === "Not_Used") return "Not used";
  if (offer.cibil_score_status === "No_Score") return "No score";
  if (offer.cibil_score_status === "Thin_File") return "Thin file";
  if (offer.cibil_score_status === "Scored") {
    return (
      String(offer.cibil_band_score_min || "") +
      "–" +
      String(offer.cibil_band_score_max || "")
    );
  }
  return offer.cibil_score_status.replace(/_/g, " ");
}

function enrichMatchedRow(offer, query, bankCharges, governmentCharges, partPrepaymentRulesAll) {
  const roiDecimal = effectiveRoiDecimal(offer, query);
  const terms = computeOfferTerms(query, offer, roiDecimal);
  const offerQuery = Object.assign({}, query, {
    loanAmount: terms.loanAmount,
    tenureMonths: terms.tenureMonths
  });
  const processingCharge = pickBestCharge(bankCharges, offerQuery, offer, "Processing fee");
  const prepayOwnFundsCharge = pickOwnFundsPrepayCharge(
    bankCharges,
    offerQuery,
    offer
  );
  const prepayTakeoverCharge = pickTakeoverPrepayCharge(
    bankCharges,
    offerQuery,
    offer
  );
  const rateChangeTypeSwitchCandidates = listRankedAfterOfferCharges(
    bankCharges,
    offerQuery,
    offer,
    function (c) {
      return rankRateChangeTypeSwitch(c, offer.rate_type);
    }
  );
  const rateChangeTypeSwitchCharge = rateChangeTypeSwitchCandidates.length
    ? rateChangeTypeSwitchCandidates[0]
    : null;
  const rateChangeRepricingCandidates = listRankedAfterOfferCharges(
    bankCharges,
    offerQuery,
    offer,
    function (c) {
      return rankRateChangeRepricing(c, offer.rate_type);
    }
  );
  const rateChangeRepricingCharge = rateChangeRepricingCandidates.length
    ? rateChangeRepricingCandidates[0]
    : null;
  const rateChangeBenchmarkCandidates = listRankedAfterOfferCharges(
    bankCharges,
    offerQuery,
    offer,
    rankRateChangeBenchmark
  );
  const rateChangeBenchmarkCharge = rateChangeBenchmarkCandidates.length
    ? rateChangeBenchmarkCandidates[0]
    : null;
  const rateChangeTypeSwitchSlabs = listMatchingChargeSlabs(
    rateChangeTypeSwitchCandidates,
    rateChangeTypeSwitchCharge
  );
  const chargeCase = chargeCaseFromParts(
    terms.emi,
    terms.loanAmount,
    terms.tenureMonths
  );
  const rateChangeCharge = resolveApplicableCharge(
    rateChangeTypeSwitchSlabs,
    rateChangeTypeSwitchCharge,
    chargeCase,
    chargeCase.loanAmount
  );
  const overdueCandidates = listRankedAfterOfferCharges(
    bankCharges,
    offerQuery,
    offer,
    rankOverdueCharge
  );
  const overdueChargeSeed = overdueCandidates.length ? overdueCandidates[0] : null;
  const overdueChargeSlabs = overdueSlabsForCase(
    overdueCandidates,
    overdueChargeSeed
  );
  const overdueCharge = resolveApplicableCharge(
    overdueChargeSlabs.length ? overdueChargeSlabs : overdueCandidates,
    overdueChargeSeed,
    chargeCase
  );
  const emiBounceCandidates = listRankedAfterOfferCharges(
    bankCharges,
    offerQuery,
    offer,
    rankEmiBounceCharge
  );
  const emiBounceChargeSeed = emiBounceCandidates.length
    ? emiBounceCandidates[0]
    : null;
  const emiBounceChargeSlabs = listBounceChargeSlabs(
    emiBounceCandidates,
    emiBounceChargeSeed
  );
  const emiBounceCharge = resolveApplicableCharge(
    emiBounceChargeSlabs,
    emiBounceChargeSeed,
    chargeCase
  );
  const prepaymentChargeDisplay = formatPrepaymentChargeDisplay(
    prepayOwnFundsCharge
  );
  const overdueChargeDisplay = formatResolvedChargeDisplay(overdueCharge, {
    hideBasis: true
  });
  const emiBounceChargeDisplay = formatResolvedBounceDisplay(emiBounceCharge);
  const missedEmiWalk = missedEmiMonthTotal(
    overdueCharge,
    emiBounceCharge,
    terms.emi,
    roiDecimal,
    terms.loanAmount,
    terms.tenureMonths
  );
  const processingFee = computeProcessingFee(processingCharge, terms.loanAmount);
  const propertyCheckChargesList = listPropertyCheckCharges(
    bankCharges,
    offerQuery,
    offer
  );
  const propertyCheckCharges = computePropertyCheckChargesTotal(
    propertyCheckChargesList
  );
  const propertyCheckChargeRows = propertyCheckChargesList.map(function (charge) {
    return {
      name: charge.charge_name,
      amount: computePropertyCheckChargeAmount(charge)
    };
  });
  const governmentChargeTotal = computeGovernmentChargesTotal(
    governmentCharges || [],
    query,
    terms.loanAmount,
    DEFAULT_JURISDICTION_STATE
  );
  const governmentChargeRows = listApplicableGovernmentCharges(
    governmentCharges || [],
    query,
    terms.loanAmount,
    DEFAULT_JURISDICTION_STATE
  ).map(function (charge) {
    return [
      charge.charge_name,
      formatInr(computeGovernmentChargeAmount(charge, terms.loanAmount))
    ];
  });
  const feeSections = listSchemeChargePanelSections(bankCharges, offer);
  const additionalAfterOfferSections = listAdditionalAfterOfferPanelSections(
    bankCharges,
    offerQuery,
    offer
  );
  const drawerOtherChargeSections = listDrawerOtherChargeSections(
    bankCharges,
    offer
  );
  const partPrepaymentRules = listPartPrepaymentRulesForOffer(
    partPrepaymentRulesAll,
    offer
  );

  return {
    id: offer.offer_row_id,
    bankKey: offer.bank_key,
    bankName: offer.bank_name,
    lastCheckedOn: offer.last_checked_on || null,
    scheme: offer.scheme,
    purpose: formatPurposeLabel(offer.purpose),
    rateType: formatRateTypeLabel(offer.rate_type),
    facilityLabel: formatFacilityLabel(offer.facility_type),
    borrowerCategoryLabel: formatBorrowerCategoryLabel(offer.borrower_category),
    roiDecimal: roiDecimal,
    effectiveRoiPct: roiDecimal * 100,
    loanAmount: terms.loanAmount,
    downPayment: terms.downPayment,
    tenureMonths: terms.tenureMonths,
    tenureYears: terms.tenureYears,
    tenureLabel: formatTenureYears(terms.tenureYears),
    emi: terms.emi,
    fromProperty: terms.fromProperty,
    fromIncome: terms.fromIncome,
    incomeBasis: terms.incomeBasis,
    limiting: terms.limiting,
    processingFee: processingFee,
    propertyCheckCharges: propertyCheckCharges,
    propertyCheckChargeRows: propertyCheckChargeRows,
    governmentCharges: governmentChargeTotal,
    governmentChargeRows: governmentChargeRows,
    processingFeePct:
      processingCharge && processingCharge.percentage != null
        ? processingCharge.percentage * 100
        : null,
    prepaymentChargeDisplay: prepaymentChargeDisplay,
    prepaymentChargeSortValue: prepaymentSortValue(prepayOwnFundsCharge),
    rateChangeChargeDisplay: formatRateChangeChargeDisplay(rateChangeCharge),
    rateChangeDrawerNotes: collectRateChangeExceptionTexts(
      rateChangeCharge,
      rateChangeBankKey(
        { bankName: offer.bank_name },
        rateChangeCharge
      ),
      RATE_CHANGE_METHOD_TYPE,
      normalizeRateTypeToken(offer.rate_type) === "Fixed",
      rateChangeTypeSwitchCandidates
    ),
    rateChangeChargeSortValue: rateChangeSortValue(rateChangeCharge),
    rateChangeChargeSlabs: rateChangeTypeSwitchSlabs,
    rateChangeTypeSwitchCharge: rateChangeTypeSwitchCharge,
    rateChangeRepricingCharge: rateChangeRepricingCharge,
    rateChangeBenchmarkCharge: rateChangeBenchmarkCharge,
    rateChangeTypeSwitchCandidates: rateChangeTypeSwitchCandidates,
    rateChangeRepricingCandidates: rateChangeRepricingCandidates,
    rateChangeBenchmarkCandidates: rateChangeBenchmarkCandidates,
    overdueChargeDisplay: overdueChargeDisplay,
    overdueShownNote: applicableSlabSentence(overdueCharge, chargeCase),
    overdueDetailFootnote: "",
    emiBounceChargeDisplay: emiBounceChargeDisplay,
    emiBounceShownNote: applicableSlabSentence(emiBounceCharge, chargeCase),
    emiBounceDetailFootnote: "",
    missedEmiTotal: missedEmiWalk.total,
    prepayLabel: formatPrepayLabel(prepayOwnFundsCharge),
    prepayPct:
      prepayOwnFundsCharge && prepayOwnFundsCharge.percentage != null
        ? prepayOwnFundsCharge.percentage * 100
        : null,
    benchmarkType: offer.benchmark_type || "",
    benchmarkRatePct:
      offer.benchmark_rate != null && Number.isFinite(Number(offer.benchmark_rate))
        ? Number(offer.benchmark_rate) * 100
        : null,
    benchmarkLabel: offer.benchmark_type || "—",
    markupPct: offer.markup != null ? offer.markup * 100 : null,
    roiBasisLabel: formatRoiBasisLabel(offer.roi_basis),
    creditRiskPremiumLabel: formatPremiumPct(offer.credit_risk_premium),
    strategicPremiumLabel: formatPremiumPct(offer.strategic_premium),
    businessStrategicPremiumLabel: formatPremiumPct(offer.business_strategic_premium),
    fixedRatePremiumLabel: formatPremiumPct(offer.fixed_rate_premium),
    schemeDiscountLabel: formatSchemeDiscountLabel(offer.discount),
    womenLabel: isBenefitYes(offer.women_benefit_applicable) ? "Available" : "None",
    greenLabel: isBenefitYes(offer.green_house_benefit_applicable) ? "Available" : "None",
    womenDiscountDetail: formatDiscountDetail(
      offer.women_benefit_applicable,
      offer.women_discount,
      offer.women_roi
    ),
    greenDiscountDetail: formatDiscountDetail(
      offer.green_house_benefit_applicable,
      offer.green_house_discount,
      offer.green_roi
    ),
    insuranceDiscountDetail: formatInsuranceDetail(offer),
    cibilLabel: cibilLabelForOffer(offer),
    ageRange:
      offer.age_min != null && offer.age_max != null
        ? offer.age_min + "–" + offer.age_max
        : "—",
    occupationLabel: formatOccupationLabel(offer.occupation),
    feeSections: feeSections,
    feeBlocks: listSchemeChargePanelBlocks(bankCharges, offer),
    feeRows: listSchemeChargePanelRows(bankCharges, offer),
    additionalAfterOfferSections: additionalAfterOfferSections,
    drawerOtherChargeSections: drawerOtherChargeSections,
    partPrepaymentRules: partPrepaymentRules,
    additionalAfterOfferBlocks: listAdditionalAfterOfferPanelBlocks(
      bankCharges,
      offerQuery,
      offer
    ),
    additionalAfterOfferRows: listAdditionalAfterOfferPanelRows(
      bankCharges,
      offerQuery,
      offer
    ),
    otherChargeNote: (function () {
      for (let i = 0; i < feeSections.length; i += 1) {
        const section = feeSections[i];
        const entry = (section.entries || []).find(function (row) {
          return normalizeText(row.what).indexOf("processing fee") < 0;
        });
        if (entry) {
          return (
            entry.what +
            (entry.amount ? " " + entry.amount : "") +
            (entry.meta ? " · " + entry.meta : "")
          );
        }
      }
      return "—";
    })(),
    offer: offer,
    processingCharge: processingCharge,
    prepayOwnFundsCharge: prepayOwnFundsCharge,
    prepayTakeoverCharge: prepayTakeoverCharge,
    prepayCharge: prepayOwnFundsCharge,
    overdueCharge: overdueCharge,
    overdueChargeSlabs: overdueChargeSlabs,
    overdueCandidates: overdueCandidates,
    emiBounceCandidates: emiBounceCandidates,
    emiBounceCharge: emiBounceCharge,
    emiBounceChargeSlabs: emiBounceChargeSlabs
  };
}

async function matchOffers(dataset, query, engine) {
  const prefiltered = dataset.offers.filter(function (offer) {
    return prefilterOffer(offer, query);
  });
  const matched = [];
  for (const offer of prefiltered) {
    if (await matchesOfferRules(engine, offer, query)) {
      matched.push(offer);
    }
  }
  return pickBestOfferPerBank(matched).map(function (offer) {
    return enrichMatchedRow(
      offer,
      query,
      dataset.bank_charges,
      dataset.government_charges,
      dataset.part_prepayment_rules
    );
  });
}

const DEFAULT_SORT_KEY = "effectiveRoiPct";
const DEFAULT_SORT_DIR = "asc";

function sortRows(rows, sortKey, sortDir) {
  if (!sortKey) return rows.slice();
  const key = sortKey;
  const direction = sortDir === "desc" ? -1 : 1;
  return rows.slice().sort(function (a, b) {
    if (key === "prepaymentChargeDisplay") {
      const leftMissing = a.prepaymentChargeSortValue == null;
      const rightMissing = b.prepaymentChargeSortValue == null;
      if (leftMissing !== rightMissing) return leftMissing ? 1 : -1;
      if (!leftMissing) {
        const prepayCmp =
          a.prepaymentChargeSortValue - b.prepaymentChargeSortValue;
        if (prepayCmp !== 0) return prepayCmp * direction;
      }
    }
    if (key === "rateChangeChargeDisplay") {
      const leftMissing = a.rateChangeChargeSortValue == null;
      const rightMissing = b.rateChangeChargeSortValue == null;
      if (leftMissing !== rightMissing) return leftMissing ? 1 : -1;
      if (!leftMissing) {
        const cmp =
          a.rateChangeChargeSortValue - b.rateChangeChargeSortValue;
        if (cmp !== 0) return cmp * direction;
      }
    }
    const leftRaw = a[key];
    const rightRaw = b[key];
    const left =
      leftRaw && typeof leftRaw === "object" && "main" in leftRaw
        ? formatChargeDisplayText(leftRaw)
        : leftRaw;
    const right =
      rightRaw && typeof rightRaw === "object" && "main" in rightRaw
        ? formatChargeDisplayText(rightRaw)
        : rightRaw;
    let cmp = 0;
    if (typeof left === "number" && typeof right === "number") {
      cmp = left - right;
    } else {
      cmp = String(left || "").localeCompare(String(right || ""), "en", {
        sensitivity: "base",
        numeric: true
      });
    }
    if (cmp !== 0) return cmp * direction;
    const byBank = String(a.bankName || "").localeCompare(String(b.bankName || ""), "en", {
      sensitivity: "base"
    });
    if (byBank !== 0) return byBank;
    return String(a.id || "").localeCompare(String(b.id || ""), "en");
  });
}

function cellValue(row, column) {
  const value = row[column.key];
  if (column.type === "charge") return formatChargeDisplayText(value);
  if (column.type === "pct" && typeof value === "number") return formatPct(value);
  if (column.type === "inr" && typeof value === "number") return formatInr(value);
  if (column.type === "num" && typeof value === "number") return String(value);
  return value == null ? "—" : String(value);
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function mathWorkLinesHtml(lines, options) {
  const opts = options || {};
  return (lines || [])
    .filter(Boolean)
    .map(function (line) {
      if (line.k === "rule") {
        return '<div class="hlc-math-rule" aria-hidden="true"></div>';
      }
      if (line.k === "caption") {
        return (
          '<div class="hlc-math-caption-row' +
          (line.limiting
            ? " hlc-math-caption-row--limiting hlc-math-caption-row--" +
              line.track
            : "") +
          '">' +
          '<span class="hlc-math-caption">' +
          escapeHtml(line.t) +
          "</span>" +
          '<span class="hlc-math-num">' +
          escapeHtml(line.v) +
          "</span></div>"
        );
      }
      if (line.k === "op") {
        return '<div class="hlc-math-op">' + escapeHtml(line.t) + "</div>";
      }
      const isResult = line.k === "result" || line.emphasis;
      return (
        '<div class="hlc-math-num' +
        (isResult ? " hlc-math-num--result" : "") +
        (opts.isTotal && isResult ? " hlc-ledger-final-value" : "") +
        '">' +
        escapeHtml(line.t) +
        "</div>"
      );
    })
    .join("");
}

function mathWorkHtml(lines, options) {
  if (!lines || !lines.length) return "";
  return (
    '<div class="hlc-math-sheet">' +
    mathWorkLinesHtml(lines, options || {}) +
    "</div>"
  );
}

function gutterOpFromLines(lines) {
  if (!lines || !lines.length) return "";
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].k !== "op") continue;
    var t = String(lines[i].t || "").trim();
    if (!t) continue;
    if (t.charAt(0) === "×") return "×";
    if (t.charAt(0) === "÷") return "÷";
    if (t.charAt(0) === "@") return "@";
    if (t.charAt(0) === "−" || t.charAt(0) === "-") return "−";
    if (t.charAt(0) === "+") return "+";
    if (/^or\b/i.test(t)) return "or";
    if (/^min\b/i.test(t)) return "min";
    if (/^max\b/i.test(t)) return "max";
    if (/^up to\b/i.test(t)) return "≤";
    return "";
  }
  return "";
}

function mathBarHtml(step, label, note, valueText, options) {
  const opts = options || {};
  const track = opts.track ? " hlc-math-bar--" + opts.track : "";
  const limiting = opts.limiting ? " hlc-math-bar--limiting" : "";
  const joinOp = opts.joinOp || "";
  const isTotal = opts.isTotal ? " hlc-math-bar--total" : "";
  const slot = opts.slot ? " hlc-math-bar--slot-" + opts.slot : "";
  const hasStep = step != null && step !== "" && step !== false;
  var stepOp = "";
  if (!joinOp) {
    if (opts.stepOp != null && opts.stepOp !== "") {
      stepOp = opts.stepOp;
    } else if (opts.stepOp == null) {
      stepOp = gutterOpFromLines(opts.lines);
    }
  }
  const hasGutter = hasStep || joinOp || stepOp;
  const noStep = hasGutter ? "" : " hlc-math-bar--no-step";
  const joinClass =
    joinOp === "+"
      ? " hlc-math-bar--join-plus"
      : joinOp === "="
        ? " hlc-math-bar--join-equals"
        : "";
  const stepLabel =
    hasStep && opts.stepWord
      ? "Step " + String(step)
      : hasStep
        ? String(step)
        : "";
  const work =
    opts.lines && opts.lines.length
      ? mathWorkHtml(opts.lines, { isTotal: !!opts.isTotal })
      : mathWorkHtml([{ k: "result", t: valueText, emphasis: true }], {
          isTotal: !!opts.isTotal
        });
  const joinHtml = joinOp
    ? '<span class="hlc-math-bar-join" aria-hidden="true">' +
      escapeHtml(joinOp) +
      "</span>"
    : "";
  const stepOpHtml = stepOp
    ? '<span class="hlc-math-bar-step-op" aria-hidden="true">' +
      escapeHtml(stepOp) +
      "</span>"
    : "";
  const stepHtml = stepLabel
    ? opts.stepWord
      ? '<span class="hlc-math-bar-step">' + escapeHtml(stepLabel) + "</span>"
      : '<span class="hlc-math-bar-num">' + escapeHtml(stepLabel) + "</span>"
    : "";
  const railInner = stepHtml + stepOpHtml + joinHtml;
  const railBlock = railInner
    ? '<div class="hlc-math-bar-rail">' + railInner + "</div>"
    : "";
  const noteHtml = note
    ? '<p class="hlc-math-bar-note">' + escapeHtml(note) + "</p>"
    : "";
  const copyHtml =
    '<div class="hlc-math-bar-copy">' +
    '<p class="hlc-math-bar-label">' +
    escapeHtml(label) +
    "</p>" +
    noteHtml +
    "</div>";
  var mainClass = "hlc-math-bar-main";
  if (opts.isTotal) mainClass += " hlc-math-bar-main--total";
  if (!note && work) mainClass += " hlc-math-bar-main--work-only";
  const mainHtml = '<div class="' + mainClass + '">' + copyHtml + work + "</div>";
  return (
    '<div class="hlc-math-bar' +
    track +
    limiting +
    noStep +
    joinClass +
    isTotal +
    slot +
    '">' +
    railBlock +
    mainHtml +
    "</div>"
  );
}

/** Item bars plus a total row; + / = sit in the left gutter, not repeated in the sum. */
function additiveStackBars(itemBars, totalLabel, totalValue, totalNote) {
  if (!itemBars || !itemBars.length) return [];
  const marked = itemBars.map(function (bar, index) {
    const next = Object.assign({}, bar);
    next.stepWord = true;
    next.slot = index + 1;
    if (index > 0) next.joinOp = "+";
    return next;
  });
  marked.push({
    step: marked.length + 1,
    label: totalLabel || "Total",
    note: totalNote || "",
    value: totalValue,
    isTotal: true,
    joinOp: "=",
    stepWord: true,
    slot: "total",
    lines: [{ k: "result", t: totalValue, emphasis: true }]
  });
  return marked;
}

/** Step 1 / Step 2 labels on every bar that carries a step number. */
function markStepWordBars(bars) {
  if (!bars || !bars.length) return [];
  return bars.map(function (bar) {
    if (bar.step == null || bar.step === "" || bar.step === false) return bar;
    if (bar.stepWord) return bar;
    return Object.assign({}, bar, { stepWord: true });
  });
}

/** Slot ink for each row — gutter sign matches the derived result on that row. */
function markSlotBars(bars) {
  if (!bars || !bars.length) return [];
  var slotIndex = 0;
  return bars.map(function (bar) {
    if (bar.isTotal) {
      if (bar.slot != null && bar.slot !== "") return bar;
      return Object.assign({}, bar, { slot: "total" });
    }
    if (bar.slot != null && bar.slot !== "") return bar;
    slotIndex += 1;
    return Object.assign({}, bar, { slot: Math.min(slotIndex, 5) });
  });
}

function mathBarStackHtml(bars, options) {
  if (!bars || !bars.length) return "";
  const opts = options || {};
  const stepped =
    opts.stepWord === false ? bars : markStepWordBars(bars);
  const normalized = markSlotBars(stepped);
  const stackClass = opts.stackClass ? " " + opts.stackClass : "";
  return (
    '<div class="hlc-math-bars' +
    stackClass +
    '">' +
    normalized
      .map(function (bar) {
        return mathBarHtml(bar.step, bar.label, bar.note, bar.value, bar);
      })
      .join("") +
    "</div>"
  );
}

function amortizationTableHtml(schedule) {
  const rows = (schedule && schedule.rows) || [];
  if (!rows.length) return "";
  const byYear = [];
  rows.forEach(function (row) {
    const year = Math.ceil(row.month / 12);
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(row);
  });
  function yearTable(yearRows, yearNumber) {
    return (
      '<div class="hlc-amort-shell"><table class="hlc-amort-table">' +
      '<caption class="visually-hidden">Year ' +
      yearNumber +
      "</caption>" +
      "<thead><tr><th>Month</th><th>Still owed</th><th>Principal</th><th>Interest</th></tr></thead><tbody>" +
      yearRows
        .map(function (row) {
          return (
            "<tr><td>" +
            row.month +
            "</td><td>" +
            formatInr(row.outstanding) +
            "</td><td>" +
            formatInr(row.principal) +
            "</td><td>" +
            formatInr(row.interest) +
            "</td></tr>"
          );
        })
        .join("") +
      "</tbody></table></div>"
    );
  }
  const firstYear = byYear[1] || [];
  let laterHtml = "";
  for (let year = 2; year < byYear.length; year++) {
    if (!byYear[year]) continue;
    laterHtml += drawerDiscloseHtml(
      "Year " + year,
      yearTable(byYear[year], year),
      { nested: true }
    );
  }
  if (laterHtml) {
    laterHtml = '<div class="hlc-amort-years">' + laterHtml + "</div>";
  }
  return drawerDiscloseHtml(
    "Month by month",
    yearTable(firstYear, 1) + laterHtml,
    { nested: true, open: true }
  );
}

const CALC_HOW_TITLE = "How this is worked out";
const CALC_CHARGES_TITLE = "Calculation of the charges";

function calcStoryHtml(resultText, leadText, barsHtml, extraHtml, options) {
  const opts = options || {};
  const resultBlock = resultText
    ? '<p class="hlc-story-result">' + escapeHtml(resultText) + "</p>"
    : "";
  const resultNoteBlock = opts.resultNote
    ? '<p class="hlc-story-compare-title">' + escapeHtml(opts.resultNote) + "</p>"
    : "";
  const leadBlock = leadText
    ? '<p class="hlc-story-lead">' + escapeHtml(leadText) + "</p>"
    : "";
  const workInner =
    (opts.workTitle && (barsHtml || extraHtml)
      ? '<p class="hlc-story-work-title">' + escapeHtml(opts.workTitle) + "</p>"
      : "") +
    (barsHtml || "") +
    (extraHtml || "");
  return (
    '<div class="hlc-story">' +
    (resultBlock || leadBlock || resultNoteBlock
      ? '<div class="hlc-story-head">' +
        leadBlock +
        resultBlock +
        resultNoteBlock +
        "</div>"
      : "") +
    (workInner
      ? '<div class="hlc-drawer-card hlc-story-card">' + workInner + "</div>"
      : "") +
    "</div>"
  );
}

function calculationButtonHtml(innerHtml, column, row, extraClass) {
  return (
    '<button type="button" class="hlc-charge-amount' +
    (extraClass || "") +
    '" data-calculation-detail="' +
    column.key +
    '" data-row-id="' +
    escapeHtml(row.id) +
    '" aria-label="Show how ' +
    escapeHtml(column.label.toLowerCase()) +
    " for " +
    escapeHtml(row.bankName) +
    ' was calculated">' +
    innerHtml +
    "</button>"
  );
}

function chargeDisplayHtml(display, noteGroupId, options) {
  const opts = options || {};
  const value = display || chargeNotPublishedDisplay();
  const details = (value.details || [])
    .map(function (detail) {
      return (
        '<span class="hlc-charge-rule-subnote hlc-charge-rule-detail">' +
        escapeHtml(detail) +
        "</span>"
      );
    })
    .join("");
  const figure = escapeHtml(value.main);
  const mainFigure = opts.wrapMain ? opts.wrapMain(figure) : figure;
  return (
    '<span class="hlc-charge-rule">' +
    '<span class="hlc-charge-rule-main">' +
    mainFigure +
    (value.mainSuffix
      ? '<span class="hlc-charge-rule-subnote hlc-charge-rule-main-suffix">' +
        escapeHtml(value.mainSuffix) +
        "</span>"
      : "") +
    "</span>" +
    (opts.afterFigure || "") +
    details +
    "</span>"
  );
}

/**
 * Charge cell markup. The slab control wraps only the main figure so
 * notes under it stay plain text.
 */
function chargeCellHtml(row, column) {
  const display = row[column.key];
  const noteGroupId = chargesNoteGroupId(column.label);
  if (chargeDisplayIsUnpublished(display) || !(display && display.action)) {
    return chargeDisplayHtml(display, noteGroupId);
  }
  return (
    chargeDisplayHtml(display, noteGroupId, {
      wrapMain: function (figure) {
        return (
          '<button type="button" class="hlc-charge-detail-button" data-charge-detail="' +
          escapeHtml(display.action) +
          '" data-row-id="' +
          escapeHtml(row.id) +
          '" aria-label="Show ' +
          escapeHtml(column.label.toLowerCase()) +
          " slabs for " +
          escapeHtml(row.bankName) +
          '">' +
          figure +
          '<svg class="hlc-charge-detail-arrow" viewBox="0 0 10 10" aria-hidden="true" focusable="false"><path d="M2.2 1.2 6.8 5 2.2 8.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
        );
      }
    })
  );
}

/** Display-string map of row id → column key → cell text. Used for delta highlights. */
function buildCellSnapshot(rows, columns) {
  const snapshot = Object.create(null);
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row.id == null) continue;
    const cells = Object.create(null);
    for (let j = 0; j < columns.length; j++) {
      const column = columns[j];
      cells[column.key] = cellValue(row, column);
    }
    snapshot[row.id] = cells;
  }
  return snapshot;
}

/**
 * True only when the same bank row + column existed before and its displayed value moved.
 * New/removed rows do not flash — that is structural change, not a value delta.
 */
function cellDidChange(snapshot, rowId, columnKey, nextDisplay) {
  if (!snapshot) return false;
  const prevRow = snapshot[rowId];
  if (!prevRow || !Object.prototype.hasOwnProperty.call(prevRow, columnKey)) return false;
  return prevRow[columnKey] !== nextDisplay;
}

function columnAlignClass(column) {
  if (column.type === "inr" || column.type === "pct" || column.type === "num") {
    return "hlc-col-num";
  }
  return "hlc-col-text";
}

function columnWidthClass(column) {
  if (column.key === "prepaymentChargeDisplay") {
    return "hlc-col-w-prepayment";
  }
  if (column.key === "rateChangeChargeDisplay") {
    return "hlc-col-w-rate-change";
  }
  if (column.key === "propertyCheckCharges") {
    return "hlc-col-w-property-check";
  }
  if (column.key === "processingFee") {
    return "hlc-col-w-processing";
  }
  if (column.key === "governmentCharges") {
    return "hlc-col-w-govt";
  }
  if (column.type === "pct") return "hlc-col-w-pct";
  if (column.type === "inr") return "hlc-col-w-inr";
  if (column.type === "charge") return "hlc-col-w-charge";
  if (column.key === "tenureLabel") return "hlc-col-w-tenure";
  if (column.key === "otherChargeNote") return "hlc-col-w-note";
  return "hlc-col-w-text";
}

/** Material info mark — same glyph as form / filter field help. */
const FIELD_HELP_MARK_SVG =
  '<svg viewBox="0 -960 960 960" focusable="false"><path fill="currentColor" d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';

/**
 * Column-header help. Prose only — never numbered lists or ₹ teaching maths.
 * moreHref is same-site Guide, and only when the two lines leave a real leftover.
 */
const COLUMN_HELP = {
  effectiveRoiPct: {
    lines: [
      "Estimate from this bank's published rates for your profile — not a locked quote.",
      "Credit and property checks can still change it."
    ]
  },
  loanAmount: {
    lines: [
      "Income and the bank's cap on property price set the loan, not the asking price.",
      "A lower bank valuation can cut it versus the agreement."
    ]
  },
  tenureLabel: {
    lines: [
      "Years on a row can be shorter than you asked.",
      "Banks cap tenure so the loan ends by a set age."
    ]
  },
  emi: {
    lines: [
      "A lower EMI is not always a cheaper loan — extra years usually add interest.",
      "On floating rates, a rate rise can raise this EMI or add years."
    ],
    moreHref: "guide.html#emi"
  },
  processingFee: {
    lines: [
      "Includes the login fee; figures exclude taxes.",
      "Due after a basic eligibility check, whether the loan is later disbursed or not."
    ],
    moreHref: "guide.html#charges"
  },
  propertyCheckCharges: {
    lines: [
      "Covers the bank's title and value checks, not stamp duty or registration.",
      "Your own earlier lawyer or valuer report usually does not replace theirs."
    ],
    moreHref: "guide.html#charges"
  },
  governmentCharges: {
    lines: [
      "Stamp duty and registration go to the state for the deed and mortgage, not to the bank.",
      "Cost differs by state and is usually paid in cash, outside the loan."
    ],
    moreHref: "guide.html#charges"
  },
  prepaymentChargeDisplay: {
    lines: ["Only fixed-rate home loans may still charge for paying early."]
  },
  rateChangeChargeDisplay: {
    lines: [
      "Fee applies when you ask to switch floating to fixed, or the other way — not when the floating rate moves by itself."
    ]
  },
  overdueChargeDisplay: {
    lines: [
      "Late payment attracts a separate extra charge, not a higher rate on the whole loan.",
      "That extra charge should not then earn further interest."
    ]
  },
  emiBounceChargeDisplay: {
    lines: [
      "Charged when your EMI debit or cheque does not go through — usually a flat fee each time, excluding taxes.",
      "If that month's EMI stays unpaid, overdue charges can apply as well."
    ]
  }
};

function columnHelpHtml(column) {
  const help = COLUMN_HELP[column.key];
  if (!help || !help.lines || !help.lines.length) return "";
  const id = "hlc-help-col-" + column.key;
  const body =
    help.lines
      .map(function (line) {
        return '<p class="hlc-field-help-text">' + escapeHtml(line) + "</p>";
      })
      .join("") +
    (help.moreHref
      ? '<a class="hlc-field-help-more" href="' +
        escapeHtml(help.moreHref) +
        '">Learn more</a>'
      : "");
  return (
    '<span class="hlc-field-help-anchor">' +
    '<button type="button" class="hlc-field-help" aria-expanded="false" aria-controls="' +
    escapeHtml(id) +
    '" aria-label="About ' +
    escapeHtml(column.label) +
    '">' +
    '<span class="hlc-field-help-mark" aria-hidden="true">' +
    FIELD_HELP_MARK_SVG +
    "</span></button>" +
    '<div class="hlc-field-help-popover" id="' +
    escapeHtml(id) +
    '" role="tooltip" hidden>' +
    body +
    "</div></span>"
  );
}

/** Close portaled field-help before table head HTML is replaced. */
function closeOpenFieldHelp() {
  if (!document.querySelector(".hlc-field-help-popover.is-open")) return;
  document.dispatchEvent(
    new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
  );
}

const FIELD_BOX_ACTIVATE_SKIP =
  ".hlc-field-help, .hlc-field-help-popover, .hlc-inline-pct-select, a";
const FIELD_BOX_SELECT_DRAG_PX = 6;

function fieldBoxPrimaryControl(field) {
  if (!field) return null;
  return field.querySelector(
    ":scope > .hlc-input-shell input, :scope > .hlc-input-shell select"
  );
}

function fieldBoxHasCopySelection() {
  const sel = window.getSelection();
  return Boolean(sel && String(sel).replace(/\s/g, "").length);
}

/**
 * A tap on the name, ₹, or padding still enters the box. A drag or a live
 * highlight is copy — leave it. Do not cancel pointerdown; that blocked
 * selecting. The i, Learn more, and the card-% menu stay separate.
 */
function bindFieldBoxActivate(form) {
  if (!form) return;
  let pointerStart = null;

  form.addEventListener(
    "pointerdown",
    function (event) {
      if (event.button != null && event.button !== 0) {
        pointerStart = null;
        return;
      }
      pointerStart = { x: event.clientX, y: event.clientY };
    },
    true
  );

  form.addEventListener("click", function (event) {
    if (event.target.closest(FIELD_BOX_ACTIVATE_SKIP)) return;
    const field = event.target.closest(".hlc-field");
    if (!field || !form.contains(field)) return;
    const control = fieldBoxPrimaryControl(field);
    if (!control || control.disabled) return;
    if (control === event.target || control.contains(event.target)) {
      pointerStart = null;
      return;
    }

    let dragged = false;
    if (pointerStart) {
      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      dragged =
        dx * dx + dy * dy > FIELD_BOX_SELECT_DRAG_PX * FIELD_BOX_SELECT_DRAG_PX;
    }
    pointerStart = null;

    if (event.detail >= 2 || dragged || fieldBoxHasCopySelection()) {
      event.preventDefault();
      return;
    }

    control.focus();
    if (control.tagName === "INPUT" && typeof control.setSelectionRange === "function") {
      try {
        control.setSelectionRange(0, control.value.length);
      } catch (err) {
        /* Some input modes reject a range; focus still landed. */
      }
    }
    if (control.tagName === "SELECT" && typeof control.showPicker === "function") {
      try {
        control.showPicker();
      } catch (err) {
        /* Focus still landed if the browser blocked the picker. */
      }
    }
  });
}

function initPage() {
  const root = document.querySelector("[data-hlc-root]");
  if (!root) return;

  const state = {
    dataset: null,
    engine: createMatchEngine(),
    group: "essentials",
    productFilters: defaultProductFilters(),
    prepaymentMethod: PREPAYMENT_METHOD_OWN,
    rateChangeMethod: RATE_CHANGE_METHOD_TYPE,
    selected: new Set(),
    selectedById: new Map(), // id -> last known enriched row snapshot
    sortKey: DEFAULT_SORT_KEY,
    sortDir: DEFAULT_SORT_DIR,
    rows: [],
    showAllBanks: false,
    matchTimer: null,
    dataVersion: "",
    bankFreshness: {},
    /** Previous render’s displayed cell values (for transient delta highlights). */
    cellSnapshot: null
  };

  const el = {
    form: document.getElementById("hlc-inputs"),
    age: document.getElementById("hlc-age"),
    cibil: document.getElementById("hlc-cibil"),
    monthlyIncome: document.getElementById("hlc-monthly-income"),
    existingEmis: document.getElementById("hlc-existing-emis"),
    cardLimits: document.getElementById("hlc-card-limits"),
    cardLoadPct: document.getElementById("hlc-card-load-pct"),
    tenure: document.getElementById("hlc-tenure"),
    foir: document.getElementById("hlc-foir"),
    foirFace: document.getElementById("hlc-foir-face"),
    coApplicant: document.getElementById("hlc-coapplicant"),
    coApplicantFields: document.getElementById("hlc-coapplicant-fields"),
    coApplicantList: document.getElementById("hlc-coapplicant-list"),
    coApplicantAdd: document.getElementById("hlc-coapplicant-add"),
    coApplicantLimit: document.getElementById("hlc-coapplicant-limit"),
    coApplicantToggle: document.getElementById("hlc-co-toggle"),
    occupation: document.getElementById("hlc-occupation"),
    occupationFace: document.getElementById("hlc-occupation-face"),
    purpose: document.getElementById("hlc-purpose"),
    purposeFace: document.getElementById("hlc-purpose-face"),
    propertyValue: document.getElementById("hlc-property-value"),
    loanHint: document.getElementById("hlc-loan-hint"),
    incomeBasisNote: document.getElementById("hlc-income-basis-note"),
    intelligencePanel: document.getElementById("hlc-intelligence"),
    intelMore: document.getElementById("hlc-intel-more"),
    intelPlus: document.getElementById("hlc-intel-plus"),
    status: document.getElementById("hlc-status"),
    meta: document.getElementById("hlc-match-meta"),
    headTable: document.querySelector(".hlc-compare--head"),
    table: document.querySelector(".hlc-compare--body") || document.querySelector(".hlc-compare"),
    headCols: document.getElementById("hlc-compare-head-cols"),
    cols: document.getElementById("hlc-compare-cols"),
    head: document.getElementById("hlc-compare-head"),
    body: document.getElementById("hlc-compare-body"),
    headScroll: document.getElementById("hlc-table-head-scroll"),
    scroll: document.getElementById("hlc-table-scroll"),
    applyBar: document.getElementById("hlc-apply-bar"),
    applyCount: document.getElementById("hlc-apply-count"),
    applyBtn: document.getElementById("hlc-apply-btn"),
    applyDock: document.getElementById("hlc-apply-dock"),
    applyDockCount: document.getElementById("hlc-apply-dock-count"),
    applyDockBtn: document.getElementById("hlc-apply-dock-btn"),
    drawer: document.getElementById("hlc-drawer"),
    drawerBackdrop: document.getElementById("hlc-drawer-backdrop"),
    drawerHeading: document.getElementById("hlc-drawer-heading"),
    drawerTitle: document.getElementById("hlc-drawer-title"),
    drawerSub: document.getElementById("hlc-drawer-sub"),
    drawerActionsBar: document.getElementById("hlc-drawer-actions-bar"),
    drawerToggleAll: document.getElementById("hlc-drawer-toggle-all"),
    drawerScroll: document.getElementById("hlc-drawer-scroll"),
    drawerBody: document.getElementById("hlc-drawer-body"),
    drawerClose: document.getElementById("hlc-drawer-close"),
    toast: document.getElementById("hlc-toast"),
    paddleLeft: document.getElementById("hlc-paddle-left"),
    paddleRight: document.getElementById("hlc-paddle-right"),
    chargesNote: document.getElementById("hlc-charges-note"),
    showMoreBtn: document.getElementById("hlc-show-more"),
    filtersControl: document.getElementById("hlc-filters-control"),
    filtersToggle: document.getElementById("hlc-filters-toggle"),
    filtersPanel: document.getElementById("hlc-filters-panel"),
    filtersBadge: document.getElementById("hlc-filters-badge"),
    filtersClear: document.getElementById("hlc-filters-clear"),
    filtersScrim: document.getElementById("hlc-filters-scrim"),
    filtersDone: document.getElementById("hlc-filters-done"),
    resultsHead: document.querySelector("#hlc-results-shell .hlc-results-head"),
    freshnessNote: document.getElementById("hlc-freshness-note"),
  };

  var exploreMobileMq =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(max-width: 833px)")
      : null;

  function isExploreMobile() {
    return Boolean(exploreMobileMq && exploreMobileMq.matches);
  }

  function syncFoirFace() {
    if (!el.foir || !el.foirFace) return;
    const valueNode = el.foirFace.querySelector(".hlc-select-face-value");
    const tagNode = el.foirFace.querySelector(".hlc-select-face-tag");
    if (!valueNode) return;
    const pct = String(el.foir.value || DEFAULT_FOIR_PCT);
    valueNode.textContent = pct + "%";
    if (tagNode) tagNode.hidden = pct !== String(DEFAULT_FOIR_PCT);
  }

  function rowAriaLabel(bankName, isSelected) {
    return bankName + (isSelected ? ", selected" : ", tap to select");
  }

  function rowCheckHtml(isSelected) {
    return (
      '<span class="hlc-row-check" aria-hidden="true"' +
      (isSelected ? ' data-checked="true"' : "") +
      ">" +
      '<svg viewBox="0 0 12 12" focusable="false">' +
      '<path d="M2.4 6.2 4.8 8.6 9.6 3.4" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg></span>"
    );
  }

  function visibleBankRows() {
    var matchedSorted = sortRows(state.rows, state.sortKey, state.sortDir);
    var rows = buildDisplayRows(matchedSorted);
    if (state.showAllBanks || rows.length <= INITIAL_VISIBLE_BANKS) return rows;
    return rows.slice(0, INITIAL_VISIBLE_BANKS);
  }

  /** none | some | all — for the Bank header checkbox over currently listed banks. */
  function selectAllCheckState(visibleRows) {
    if (!visibleRows.length) return "none";
    let selectedCount = 0;
    visibleRows.forEach(function (row) {
      if (state.selected.has(row.id)) selectedCount += 1;
    });
    if (selectedCount === 0) return "none";
    if (selectedCount === visibleRows.length) return "all";
    return "some";
  }

  function headerCheckHtml(checkState) {
    const ariaChecked =
      checkState === "all" ? "true" : checkState === "some" ? "mixed" : "false";
    const label =
      checkState === "all"
        ? "Deselect all visible banks"
        : "Select all visible banks";
    return (
      '<button type="button" class="hlc-select-all" data-state="' +
      checkState +
      '" role="checkbox" aria-checked="' +
      ariaChecked +
      '" aria-label="' +
      label +
      '">' +
      '<svg class="hlc-select-all-tick" viewBox="0 0 12 12" focusable="false" aria-hidden="true">' +
      '<path d="M2.4 6.2 4.8 8.6 9.6 3.4" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg>" +
      '<svg class="hlc-select-all-dash" viewBox="0 0 12 12" focusable="false" aria-hidden="true">' +
      '<path d="M2.5 6h7" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round"/>' +
      "</svg>" +
      "</button>"
    );
  }

  function applyOnceLabel() {
    return "Apply once";
  }

  function setApplyCountLabel(node, count) {
    if (!node) return;
    if (count <= 0) {
      node.hidden = true;
      node.textContent = "";
      return;
    }
    node.hidden = false;
    node.replaceChildren();
    var num = document.createElement("span");
    num.className = "hlc-apply-count-n";
    num.textContent = String(count);
    node.appendChild(num);
    node.appendChild(document.createTextNode(" selected"));
  }

  function readQuery() {
    return queryFromInputs(
      {
        age: el.age.value,
        cibilScore: el.cibil.value,
        monthlyIncome: el.monthlyIncome.value,
        existingEmis: el.existingEmis ? el.existingEmis.value : "0",
        cardLimits: el.cardLimits ? el.cardLimits.value : "0",
        cardLoadPct: el.cardLoadPct ? el.cardLoadPct.value : DEFAULT_CARD_LOAD_PCT,
        tenureYears: el.tenure ? el.tenure.value : DEFAULT_TENURE_YEARS,
        foirPct: el.foir ? el.foir.value : DEFAULT_FOIR_PCT,
        includeCoApplicant: el.coApplicant ? el.coApplicant.value : "no",
        coApplicants: readCoApplicants(),
        occupation: el.occupation.value,
        purpose: el.purpose ? el.purpose.value : DEFAULT_PURPOSE,
        propertyValue: el.propertyValue.value
      },
      state.productFilters
    );
  }

  function primaryFieldsAreComplete() {
    if (!digitCount(el.monthlyIncome ? el.monthlyIncome.value : "")) return false;
    if (!digitCount(el.propertyValue ? el.propertyValue.value : "")) return false;
    if (!digitCount(el.age ? el.age.value : "")) return false;
    if (!digitCount(el.cibil ? el.cibil.value : "")) return false;
    if (!digitCount(el.tenure ? el.tenure.value : "")) return false;
    if (!(el.occupation && String(el.occupation.value || "").trim())) return false;
    if (!(el.purpose && String(el.purpose.value || "").trim())) return false;
    return true;
  }

  function updateLoanHint() {
    if (!el.loanHint) return;
    if (!primaryFieldsAreComplete()) {
      el.loanHint.textContent = "";
      return;
    }
    const rows = state.rows || [];
    let limiting = "";
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (row.limiting === "property" || row.limiting === "income") {
        limiting = row.limiting;
        break;
      }
    }
    el.loanHint.textContent =
      limiting === "property"
        ? "Limited by property."
        : limiting === "income"
          ? "Limited by income."
          : "";
  }

  function updateIncomeBasisNote() {
    if (!el.incomeBasisNote) return;
    const rows = state.rows || [];
    const text = rows.length ? incomeBasisNote(rows[0]) : "";
    el.incomeBasisNote.textContent = text;
    el.incomeBasisNote.hidden = !text;
  }

  function closeIntelligencePanel() {
    if (!el.intelligencePanel) return;
    el.intelligencePanel.classList.remove(
      "is-visible",
      "is-tips-expanded",
      "is-tips-open",
      "is-tips-more"
    );
    el.intelligencePanel.hidden = true;
  }

  function updateIntelligencePanel() {
    if (!el.intelligencePanel) return;
    const rows = state.rows || [];
    if (!rows.length) {
      closeIntelligencePanel();
      return;
    }
    const intel = hlcIntelligence.buildIntelligence({
      query: readQuery(),
      rows: rows,
      dataset: state.dataset,
      matchFnSync: function(q) {
        if (!state.dataset) return [];
        try {
          const prefiltered = state.dataset.offers.filter(function(offer) {
            return prefilterOffer(offer, q);
          });
          return pickBestOfferPerBank(prefiltered).map(function(offer) {
            return enrichMatchedRow(
              offer, q,
              state.dataset.bank_charges,
              state.dataset.government_charges,
              state.dataset.part_prepayment_rules
            );
          });
        } catch (e) { return []; }
      },
      helpers: {
        emiFromLoan: emiFromLoan,
        missedEmiMonthTotal: missedEmiMonthTotal,
        simulatePartPrepaymentScenario: simulatePartPrepaymentScenario
      }
    });
    hlcIntelligence.renderIntelligenceHtml(el.intelligencePanel, intel);
    el.intelligencePanel.classList.remove("is-visible");
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        el.intelligencePanel.classList.add("is-visible");
      });
    });
  }

  if (el.intelMore && el.intelligencePanel && !el.intelMore.dataset.hlcBound) {
    el.intelMore.dataset.hlcBound = "1";
    el.intelMore.addEventListener("click", function() {
      hlcIntelligence.toggleIntelligenceTips(el.intelligencePanel);
    });
  }

  if (el.intelPlus && el.intelligencePanel && !el.intelPlus.dataset.hlcBound) {
    el.intelPlus.dataset.hlcBound = "1";
    el.intelPlus.addEventListener("click", function() {
      hlcIntelligence.toggleIntelligenceTipsMore(el.intelligencePanel);
    });
  }

  function applicantLabel(id) {
    if (id === "primary") return "you";
    const index = Number(String(id).replace("co-", "")) - 1;
    const rows = readCoApplicants();
    const row = rows[index];
    if (!row) return "your co-applicant";
    const relationship = normalizeText(row.relationship);
    if (!relationship || relationship === "other") return "your co-applicant";
    return "your " + relationship;
  }

  function joinPlainList(parts) {
    if (parts.length <= 1) return parts.join("");
    if (parts.length === 2) return parts[0] + " and " + parts[1];
    return parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1];
  }

  /**
   * Says which incomes the banks can actually count. Dropping an older earner
   * often wins, because tenure is capped by the eldest counted borrower.
   */
  function incomeBasisNote(row) {
    const basis = row && row.incomeBasis;
    if (!basis || !basis.droppedIds || !basis.droppedIds.length) return "";
    const dropped = joinPlainList(basis.droppedIds.map(applicantLabel));
    const lead = "Banks cap the tenure on the oldest earner whose income counts. ";
    const gain =
      basis.fullPoolFromIncome != null
        ? Math.round(row.fromIncome - basis.fullPoolFromIncome)
        : 0;
    if (!(gain > 0)) {
      return lead + "So we left " + dropped + " out of the income.";
    }
    return (
      lead +
      "Leaving " +
      dropped +
      " out keeps the tenure long and the loan " +
      formatInr(gain) +
      " higher."
    );
  }

  function setOccupation(value) {
    if (!el.occupation) return;
    el.occupation.value = value;
    syncOccupationFace();
  }

  function setPurpose(value) {
    if (!el.purpose) return;
    el.purpose.value = normalizePurpose(value);
    syncSelectFace(el.purpose, el.purposeFace);
  }

  function syncSelectFace(select, faceEl) {
    if (!select || !faceEl) return;
    const valueNode = faceEl.querySelector(".hlc-select-face-value");
    if (!valueNode) return;
    const opt = select.selectedOptions[0];
    const face = opt && opt.getAttribute("data-face");
    valueNode.textContent = face || (opt ? opt.textContent.trim() : "");
  }

  function syncOccupationFace() {
    syncSelectFace(el.occupation, el.occupationFace);
  }

  function coApplicantCards() {
    if (!el.coApplicantList) return [];
    return Array.prototype.slice.call(
      el.coApplicantList.querySelectorAll(".hlc-coapplicant-card")
    );
  }

  function cardFieldValue(card, field) {
    const node = card.querySelector('[data-co-field="' + field + '"]');
    return node ? node.value : "";
  }

  /** The rendered cards are the source of truth, like every other form field. */
  function readCoApplicants() {
    return coApplicantCards().map(function (card) {
      return {
        relationship: cardFieldValue(card, "relationship"),
        occupation: cardFieldValue(card, "occupation"),
        age: cardFieldValue(card, "age"),
        cibilScore: cardFieldValue(card, "cibilScore"),
        monthlyIncome: cardFieldValue(card, "monthlyIncome"),
        existingEmis: cardFieldValue(card, "existingEmis"),
        cardLimits: cardFieldValue(card, "cardLimits")
      };
    });
  }

  function selectOptionsHtml(list, selected) {
    return list
      .map(function (entry) {
        return (
          '<option value="' +
          escapeHtml(entry.value) +
          '"' +
          (normalizeText(entry.value) === normalizeText(selected) ? " selected" : "") +
          ">" +
          escapeHtml(entry.label) +
          "</option>"
        );
      })
      .join("");
  }

  function coApplicantMoneyFieldHtml(id, field, label, value) {
    return (
      '<label class="hlc-field" for="' +
      id +
      '">' +
      '<span class="hlc-field-label-row"><span class="hlc-field-label">' +
      escapeHtml(label) +
      "</span></span>" +
      '<span class="hlc-input-shell">' +
      '<span class="hlc-prefix" aria-hidden="true">&#x20B9;</span>' +
      '<input type="text" id="' +
      id +
      '" data-co-field="' +
      field +
      '" value="' +
      escapeHtml(value) +
      '" inputmode="numeric" autocomplete="off" data-hlc-format="money" data-hlc-max-digits="10">' +
      "</span>" +
      "</label>"
    );
  }

  function coApplicantCardHtml(index, values) {
    const n = index + 1;
    const prefix = "hlc-co-" + n + "-";
    return (
      '<div class="hlc-coapplicant-card" data-co-index="' +
      index +
      '">' +
      '<div class="hlc-coapplicant-card-head">' +
      '<h3 class="hlc-coapplicant-card-title">Co-applicant ' +
      n +
      "</h3>" +
      '<button type="button" class="hlc-coapplicant-remove" data-co-remove="' +
      index +
      '" aria-label="Remove co-applicant ' +
      n +
      '"><span aria-hidden="true">Remove</span></button>' +
      "</div>" +
      '<div class="hlc-coapplicant-card-fields hlc-form-fields--coapplicant">' +
      '<label class="hlc-field" for="' +
      prefix +
      'relationship"><span class="hlc-field-label-row"><span class="hlc-field-label">Relation to you</span></span>' +
      '<span class="hlc-input-shell hlc-input-shell--select">' +
      '<select id="' +
      prefix +
      'relationship" data-co-field="relationship">' +
      selectOptionsHtml(CO_APPLICANT_RELATIONSHIPS, values.relationship) +
      "</select></span></label>" +
      '<label class="hlc-field" for="' +
      prefix +
      'occupation"><span class="hlc-field-label-row"><span class="hlc-field-label">Work</span></span>' +
      '<span class="hlc-input-shell hlc-input-shell--select">' +
      '<select id="' +
      prefix +
      'occupation" data-co-field="occupation">' +
      selectOptionsHtml(CO_APPLICANT_OCCUPATIONS, values.occupation) +
      "</select></span></label>" +
      '<label class="hlc-field" for="' +
      prefix +
      'age"><span class="hlc-field-label-row"><span class="hlc-field-label">Age</span></span>' +
      '<span class="hlc-input-shell"><input type="text" id="' +
      prefix +
      'age" data-co-field="age" value="' +
      escapeHtml(values.age) +
      '" inputmode="numeric" autocomplete="off" data-hlc-format="digits" data-hlc-max-digits="2"><span class="hlc-suffix" aria-hidden="true">years</span></span></label>' +
      '<label class="hlc-field" for="' +
      prefix +
      'cibil"><span class="hlc-field-label-row"><span class="hlc-field-label">CIBIL score</span></span>' +
      '<span class="hlc-input-shell"><input type="text" id="' +
      prefix +
      'cibil" data-co-field="cibilScore" value="' +
      escapeHtml(values.cibilScore) +
      '" inputmode="numeric" autocomplete="off" data-hlc-format="digits" data-hlc-max-digits="3" data-hlc-max="900"></span></label>' +
      coApplicantMoneyFieldHtml(
        prefix + "income",
        "monthlyIncome",
        "Monthly income",
        values.monthlyIncome
      ) +
      coApplicantMoneyFieldHtml(
        prefix + "emis",
        "existingEmis",
        "Existing EMIs",
        values.existingEmis
      ) +
      coApplicantMoneyFieldHtml(
        prefix + "cards",
        "cardLimits",
        "Card limits",
        values.cardLimits
      ) +
      "</div>" +
      "</div>"
    );
  }

  function blankCoApplicant() {
    return {
      relationship: DEFAULT_CO_APPLICANT_RELATIONSHIP,
      occupation: DEFAULT_CO_APPLICANT_OCCUPATION,
      age: "",
      cibilScore: "",
      monthlyIncome: "0",
      existingEmis: "0",
      cardLimits: "0"
    };
  }

  function renderCoApplicants(list) {
    if (!el.coApplicantList) return;
    const rows = (list || []).slice(0, MAX_CO_APPLICANTS);
    el.coApplicantList.innerHTML = rows
      .map(function (values, index) {
        return coApplicantCardHtml(index, Object.assign(blankCoApplicant(), values));
      })
      .join("");
    el.coApplicantList
      .querySelectorAll("input[data-hlc-format]")
      .forEach(bindFormattedInput);
    syncCoApplicantChrome(rows.length);
    if (
      typeof window !== "undefined" &&
      window.ShroffinSelectMenu &&
      typeof window.ShroffinSelectMenu.refresh === "function"
    ) {
      window.ShroffinSelectMenu.refresh(el.coApplicantList);
    }
  }

  /** The page's disclosure script owns opening and closing this panel. */
  function coApplicantPanel() {
    return (typeof window !== "undefined" && window.__hlcCoApplicantPanel) || null;
  }

  function syncCoApplicantChrome(count) {
    const on = count > 0;
    const panel = coApplicantPanel();
    if (panel) {
      if (on !== panel.isOpen()) panel.set(on);
    } else {
      if (el.coApplicant) el.coApplicant.value = on ? "yes" : "no";
      if (el.coApplicantFields) {
        if (on) el.coApplicantFields.removeAttribute("hidden");
        else el.coApplicantFields.setAttribute("hidden", "");
      }
    }
    if (el.coApplicantAdd) {
      el.coApplicantAdd.hidden = count >= MAX_CO_APPLICANTS;
    }
    if (el.coApplicantLimit) {
      el.coApplicantLimit.textContent =
        count >= MAX_CO_APPLICANTS
          ? "Most lenders cap a joint loan at six borrowers in total."
          : "";
    }
  }

  function addCoApplicant() {
    const rows = readCoApplicants();
    if (rows.length >= MAX_CO_APPLICANTS) return;
    rows.push(blankCoApplicant());
    renderCoApplicants(rows);
    const cards = coApplicantCards();
    const last = cards[cards.length - 1];
    const firstInput = last && last.querySelector("select, input");
    if (firstInput && typeof firstInput.focus === "function") firstInput.focus();
  }

  function removeCoApplicant(index) {
    const rows = readCoApplicants();
    if (index < 0 || index >= rows.length) return;
    rows.splice(index, 1);
    renderCoApplicants(rows);
  }

  function setCoApplicant(value) {
    const on = value === "yes" || value === true;
    if (on && !coApplicantCards().length) {
      renderCoApplicants([blankCoApplicant()]);
      return;
    }
    if (!on) renderCoApplicants([]);
  }

  function onProductFilterChange(key) {
    if (
      key === "fixedRate" &&
      !state.productFilters.fixedRate &&
      state.sortKey === "prepaymentChargeDisplay"
    ) {
      state.sortKey = DEFAULT_SORT_KEY;
      state.sortDir = DEFAULT_SORT_DIR;
    }
    updateFiltersBadge();
  }

  function setPrepaymentMethod(method) {
    const next =
      method === PREPAYMENT_METHOD_BT
        ? PREPAYMENT_METHOD_BT
        : PREPAYMENT_METHOD_OWN;
    if (state.prepaymentMethod === next) return;
    state.prepaymentMethod = next;
    applyPrepaymentMethodToRows(state.rows, state.prepaymentMethod);
    persistExploreDraft();
    renderTable();
  }

  function setRateChangeMethod(method) {
    const next =
      method === RATE_CHANGE_METHOD_REPRICE
        ? RATE_CHANGE_METHOD_REPRICE
        : method === RATE_CHANGE_METHOD_BENCHMARK
          ? RATE_CHANGE_METHOD_BENCHMARK
          : RATE_CHANGE_METHOD_TYPE;
    if (state.rateChangeMethod === next) return;
    state.rateChangeMethod = next;
    applyRateChangeMethodToRows(state.rows, state.rateChangeMethod);
    persistExploreDraft();
    renderTable();
  }

  function countActiveProductFilters(filters) {
    const f = normalizeProductFilters(filters);
    let count = 0;
    if (f.govtPsu) count += 1;
    if (f.womenApplicant) count += 1;
    if (f.greenHome) count += 1;
    if (f.insurance) count += 1;
    if (!(f.bankPublic && f.bankPrivate)) count += 1;
    if (!(f.rateFloating && !f.fixedRate)) count += 1;
    if (!(f.facilityTermLoan && !f.overdraft)) count += 1;
    return count;
  }

  function updateFiltersBadge() {
    if (!el.filtersBadge) return;
    const count = countActiveProductFilters(state.productFilters);
    if (count > 0) {
      el.filtersBadge.textContent = String(count);
      el.filtersBadge.removeAttribute("hidden");
      el.filtersBadge.setAttribute(
        "aria-label",
        count === 1 ? "1 filter active" : count + " filters active"
      );
    } else {
      el.filtersBadge.textContent = "";
      el.filtersBadge.setAttribute("hidden", "");
      el.filtersBadge.removeAttribute("aria-label");
    }
    if (el.filtersClear) {
      if (count > 0) el.filtersClear.removeAttribute("hidden");
      else el.filtersClear.setAttribute("hidden", "");
    }
  }

  function clearAllProductFilters() {
    state.productFilters = defaultProductFilters();
    syncProductFilterChips();
    persistExploreDraft();
    scheduleMatch({ fade: true });
  }

  function isFiltersOpen() {
    return Boolean(
      (el.filtersControl && el.filtersControl.classList.contains("is-open")) ||
        (el.filtersPanel && el.filtersPanel.classList.contains("is-open"))
    );
  }

  function clearMobileFiltersPosition() {
    if (!el.filtersPanel) return;
    el.filtersPanel.style.top = "";
    el.filtersPanel.style.right = "";
    el.filtersPanel.style.left = "";
    el.filtersPanel.style.bottom = "";
    el.filtersPanel.style.width = "";
    el.filtersPanel.style.maxHeight = "";
    el.filtersPanel.style.transform = "";
  }

  // Popover anchoring removed — mobile uses bottom sheet.
  function positionMobileFiltersPanel() {
    clearMobileFiltersPosition();
  }

  function setFiltersScrimOpen(open) {
    if (!el.filtersScrim) return;
    if (open) {
      el.filtersScrim.removeAttribute("hidden");
      requestAnimationFrame(function () {
        el.filtersScrim.classList.add("is-open");
      });
    } else {
      el.filtersScrim.classList.remove("is-open");
      el.filtersScrim.style.opacity = "";
      window.setTimeout(function () {
        if (!isFiltersOpen() && el.filtersScrim) {
          el.filtersScrim.setAttribute("hidden", "");
        }
      }, 950);
    }
  }

  function setFiltersOpen(open) {
    if (!el.filtersPanel) return;
    const next = Boolean(open);
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Desktop: left filter rail always open — unchanged.
    if (!isExploreMobile()) {
      clearMobileFiltersPosition();
      document.body.classList.remove("hlc-filters-sheet-open");
      if (el.filtersScrim) {
        el.filtersScrim.classList.remove("is-open");
        el.filtersScrim.setAttribute("hidden", "");
        el.filtersScrim.style.opacity = "";
      }
      el.filtersPanel.removeAttribute("hidden");
      el.filtersPanel.classList.remove("is-open", "is-dragging");
      el.filtersPanel.setAttribute("role", "region");
      el.filtersPanel.removeAttribute("aria-modal");
      if (el.filtersControl) el.filtersControl.classList.remove("is-open");
      if (el.filtersToggle) el.filtersToggle.setAttribute("aria-expanded", "true");
      return;
    }

    if (!el.filtersToggle || !el.filtersControl) return;

    if (next) {
      el.filtersPanel.removeAttribute("hidden");
      clearMobileFiltersPosition();
      el.filtersPanel.setAttribute("role", "dialog");
      el.filtersPanel.setAttribute("aria-modal", "true");
      document.body.classList.add("hlc-filters-sheet-open");
      setFiltersScrimOpen(true);
      if (reduceMotion) {
        el.filtersControl.classList.add("is-open");
        el.filtersPanel.classList.add("is-open");
      } else {
        requestAnimationFrame(function () {
          el.filtersControl.classList.add("is-open");
          el.filtersPanel.classList.add("is-open");
        });
      }
      el.filtersToggle.setAttribute("aria-expanded", "true");
      return;
    }

    el.filtersControl.classList.remove("is-open");
    el.filtersPanel.classList.remove("is-open", "is-dragging");
    el.filtersToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("hlc-filters-sheet-open");
    setFiltersScrimOpen(false);
    // Re-sync Apply once / N selected — do not rewrite updateApplyBar.
    updateApplyBar();

    if (reduceMotion || el.filtersPanel.hasAttribute("hidden")) {
      el.filtersPanel.setAttribute("hidden", "");
      el.filtersPanel.setAttribute("role", "region");
      el.filtersPanel.removeAttribute("aria-modal");
      clearMobileFiltersPosition();
      return;
    }

    var finished = false;
    function finishClose() {
      if (finished) return;
      finished = true;
      el.filtersPanel.removeEventListener("transitionend", onEnd);
      if (!isFiltersOpen()) {
        el.filtersPanel.setAttribute("hidden", "");
        el.filtersPanel.setAttribute("role", "region");
        el.filtersPanel.removeAttribute("aria-modal");
        clearMobileFiltersPosition();
      }
    }
    function onEnd(event) {
      if (event.target !== el.filtersPanel) return;
      if (event.propertyName !== "opacity" && event.propertyName !== "transform") return;
      finishClose();
    }
    el.filtersPanel.addEventListener("transitionend", onEnd);
    window.setTimeout(finishClose, 950);
  }

  function syncFiltersForViewport() {
    if (!el.filtersPanel) return;
    if (!isExploreMobile()) {
      clearMobileFiltersPosition();
      setFiltersOpen(true);
      syncStickyToolsHeight();
      return;
    }
    if (!isFiltersOpen()) {
      el.filtersPanel.classList.remove("is-open", "is-dragging");
      el.filtersPanel.setAttribute("hidden", "");
      el.filtersPanel.setAttribute("role", "region");
      el.filtersPanel.removeAttribute("aria-modal");
      clearMobileFiltersPosition();
      document.body.classList.remove("hlc-filters-sheet-open");
      if (el.filtersScrim) {
        el.filtersScrim.classList.remove("is-open");
        el.filtersScrim.setAttribute("hidden", "");
      }
      if (el.filtersControl) el.filtersControl.classList.remove("is-open");
      if (el.filtersToggle) el.filtersToggle.setAttribute("aria-expanded", "false");
    }
    syncStickyToolsHeight();
  }

  function syncStickyToolsHeight() {
    if (!el.resultsHead) {
      document.documentElement.style.removeProperty("--hlc-sticky-tools-h");
      return;
    }
    var shell = document.getElementById("hlc-results-shell");
    if (!shell || shell.hidden) {
      document.documentElement.style.removeProperty("--hlc-sticky-tools-h");
      return;
    }
    function applyHeight() {
      /*
       * Height of the sticky tools strip only (padding + actions). Using the
       * full head box can overshoot when empty a11y shells affect layout, which
       * parks column titles too low and leaves a hole bank rows show through.
       */
      var styles = window.getComputedStyle(el.resultsHead);
      var padTop = parseFloat(styles.paddingTop) || 0;
      var padBot = parseFloat(styles.paddingBottom) || 0;
      var actions = el.resultsHead.querySelector(".hlc-results-actions");
      var actionsH = actions
        ? actions.getBoundingClientRect().height
        : el.resultsHead.getBoundingClientRect().height;
      var h = Math.round(padTop + actionsH + padBot);
      if (h > 0) {
        document.documentElement.style.setProperty("--hlc-sticky-tools-h", h + "px");
      }
    }
    applyHeight();
    requestAnimationFrame(applyHeight);
  }

  function bindFormattedInput(input) {
    if (!input) return;
    const format = input.getAttribute("data-hlc-format");
    if (!format) return;
    const maxDigits = Number(input.getAttribute("data-hlc-max-digits")) || 10;
    const maxAttr = input.getAttribute("data-hlc-max");
    const maxValue =
      maxAttr != null && maxAttr !== "" && Number.isFinite(Number(maxAttr))
        ? Number(maxAttr)
        : null;
    const money = format === "money";

    function digitsOnly() {
      let next = truncateToMaxDigits(input.value, maxDigits);
      if (maxValue != null) {
        const n = Number(next);
        if (Number.isFinite(n) && n > maxValue) next = String(maxValue);
      }
      return next;
    }

    function pretty() {
      const n = parseMoney(input.value);
      if (!Number.isFinite(n)) {
        input.value = money ? formatIndianAmountDigits(input.value, maxDigits) : digitsOnly();
        return;
      }
      if (money) {
        input.value = formatInrDigits(n);
        return;
      }
      const capped = maxValue != null && n > maxValue ? maxValue : n;
      input.value = String(Math.trunc(capped));
    }

    input.addEventListener("beforeinput", function (event) {
      if (event.isComposing) return;
      if (event.inputType && event.inputType.indexOf("insert") !== 0) return;
      const data = event.data;
      if (data == null || data === "") return;
      const start = input.selectionStart;
      const end = input.selectionEnd;
      if (typeof start !== "number" || typeof end !== "number") return;
      const next = input.value.slice(0, start) + data + input.value.slice(end);
      if (digitCount(next) > maxDigits) {
        event.preventDefault();
        return;
      }
      if (maxValue != null && !money) {
        const nextDigits = truncateToMaxDigits(next, maxDigits);
        const nextNumber = Number(nextDigits);
        if (Number.isFinite(nextNumber) && nextNumber > maxValue) event.preventDefault();
      }
    });

    input.addEventListener("input", function () {
      if (money) {
        applyIndianMoneyFormat(input, maxDigits);
        return;
      }
      const next = digitsOnly();
      if (input.value !== next) input.value = next;
    });

    input.addEventListener("blur", pretty);
    input.addEventListener("change", pretty);
    if (!money) {
      input.addEventListener("focus", function () {
        const n = parseMoney(input.value);
        input.value = Number.isFinite(n)
          ? digitsOnly()
          : truncateToMaxDigits(input.value, maxDigits);
      });
    }

    pretty();
  }

  [
    el.age,
    el.cibil,
    el.monthlyIncome,
    el.existingEmis,
    el.cardLimits,
    el.tenure,
    el.propertyValue
  ].forEach(bindFormattedInput);

  function showToast(message) {
    if (!el.toast) return;
    el.toast.textContent = message;
    el.toast.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      el.toast.classList.remove("show");
    }, 2800);
  }

  function updateShowMoreButton(totalRows, visibleRows) {
    if (!el.showMoreBtn) return;
    const wrap = el.showMoreBtn.closest(".hlc-show-more-wrap");
    const hidden = totalRows - visibleRows;
    if (hidden <= 0 || state.showAllBanks) {
      el.showMoreBtn.hidden = true;
      if (wrap) wrap.hidden = true;
      return;
    }
    el.showMoreBtn.hidden = false;
    if (wrap) wrap.hidden = false;
    const label = el.showMoreBtn.querySelector(".hlc-show-more-label");
    const text =
      "Show " + hidden + " more bank" + (hidden === 1 ? "" : "s");
    if (label) {
      label.textContent = text;
    } else {
      el.showMoreBtn.textContent = text;
    }
  }

  function renderFreshnessNote() {
    if (!el.freshnessNote) return;
    const latest =
      state.dataset &&
      state.dataset.meta &&
      state.dataset.meta.latest_checked_on
        ? state.dataset.meta.latest_checked_on
        : "";
    if (!latest) {
      el.freshnessNote.hidden = true;
      el.freshnessNote.textContent = "";
      return;
    }
    el.freshnessNote.textContent = formatFreshnessLabel(latest);
    el.freshnessNote.hidden = false;
  }

  /**
   * Layout contract for CSS: group + how many Other-charges fee columns.
   * Four fee columns share leftover width; three keep 13rem + fill gutter.
   */
  function applyCompareTableLayoutAttrs(group, feeColumnCount) {
    [el.headTable, el.table].forEach(function (table) {
      if (!table) return;
      table.setAttribute("data-group", group);
      if (group === "laterCharges" && feeColumnCount > 0) {
        table.setAttribute("data-charge-count", String(feeColumnCount));
      } else {
        table.removeAttribute("data-charge-count");
      }
    });
  }

  function renderTable(options) {
    const highlightDeltas = !!(options && options.highlightDeltas);
    const showPrepayment =
      state.group === "laterCharges" && state.productFilters.fixedRate;
    const columns = columnsForGroup(state.group, showPrepayment);
    const matchedSorted = sortRows(state.rows, state.sortKey, state.sortDir);
    const rows = buildDisplayRows(matchedSorted);
    const nextSnapshot = buildCellSnapshot(rows, columns);
    const prevSnapshot = state.cellSnapshot;
    const visibleRows =
      state.showAllBanks || rows.length <= INITIAL_VISIBLE_BANKS
        ? rows
        : rows.slice(0, INITIAL_VISIBLE_BANKS);
    const footnoteState = buildChargesFootnote(visibleRows);
    var matchCount = state.rows.length;
    var pinnedCount = rows.length - matchCount;

    el.meta.textContent =
      visibleRows.length === rows.length
        ? rows.length +
          " bank" +
          (rows.length === 1 ? "" : "s") +
          (pinnedCount > 0 ? " (" + pinnedCount + " outside filters)" : "")
        : "Showing " +
          visibleRows.length +
          " of " +
          rows.length +
          " banks";
    el.status.textContent = "";
    renderFreshnessNote();

    applyCompareTableLayoutAttrs(
      state.group,
      state.group === "laterCharges" ? laterChargesFeeCount(showPrepayment) : 0
    );
    const useFillCol = state.group === "laterCharges";
    if (el.cols || el.headCols) {
      let colHtml = '<col class="hlc-col-bank">';
      /* Push charge columns to the right; fill sits between Bank and charges. */
      if (useFillCol) colHtml += '<col class="hlc-col-fill">';
      columns.forEach(function (column) {
        colHtml += '<col class="' + columnWidthClass(column) + '">';
      });
      if (el.headCols) el.headCols.innerHTML = colHtml;
      if (el.cols) el.cols.innerHTML = colHtml;
    }

    let headHtml = "<tr>";
    headHtml +=
      '<th class="hlc-sticky-col" scope="col" id="hlc-th-bank">' +
      '<div class="hlc-bank-head">' +
      headerCheckHtml(selectAllCheckState(visibleRows)) +
      '<span class="hlc-bank-head-label">Lenders</span>' +
      "</div></th>";
    if (useFillCol) {
      headHtml +=
        '<th class="hlc-col-fill" scope="col" aria-hidden="true"></th>';
    }
    columns.forEach(function (column) {
      const footnoteMarker = footnoteState.headerMarkers[column.key] || "";
      const canSort = Boolean(column.sort);
      const isActive = canSort && state.sortKey === column.key && state.sortDir;
      const ariaSort = !isActive
        ? ' aria-sort="none"'
        : state.sortDir === "asc"
          ? ' aria-sort="ascending"'
          : ' aria-sort="descending"';
      const sortClass = canSort ? " hlc-sortable" : " hlc-sort-static";
      const sortAttr = canSort ? ' data-sort="' + column.key + '"' : "";
      const sortInd = canSort
        ? '<span class="hlc-sort-ind" aria-hidden="true">' +
          '<span class="hlc-sort-up">' +
          '<svg width="8" height="5" viewBox="0 0 8 5" aria-hidden="true" focusable="false">' +
          '<path d="M1 4.5 4 1.5 7 4.5" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>' +
          "</svg></span>" +
          '<span class="hlc-sort-down">' +
          '<svg width="8" height="5" viewBox="0 0 8 5" aria-hidden="true" focusable="false">' +
          '<path d="M1 0.5 4 3.5 7 0.5" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>' +
          "</svg></span>" +
          "</span>"
        : "";
      const isPrepayment = column.key === "prepaymentChargeDisplay";
      const isRateChange = column.key === "rateChangeChargeDisplay";
      const noteGroupId = chargesNoteGroupId(column.label);
      const footnoteHtml = footnoteRefHtml(footnoteMarker, noteGroupId);
      const prepaymentMethods =
        isPrepayment
          ? '<select class="hlc-header-select hlc-prepay-header-select" data-prepay-method="' +
            state.prepaymentMethod +
            '" aria-label="Prepayment method">' +
            '<option value="' +
            PREPAYMENT_METHOD_OWN +
            '"' +
            (state.prepaymentMethod === PREPAYMENT_METHOD_OWN ? " selected" : "") +
            ">Self funds</option>" +
            '<option value="' +
            PREPAYMENT_METHOD_BT +
            '"' +
            (state.prepaymentMethod === PREPAYMENT_METHOD_BT ? " selected" : "") +
            ">Balance transfer</option>" +
            "</select>"
          : "";
      const typeSwitchLabel = rateChangeTypeSwitchLabel(
        primaryRateType(state.productFilters)
      );
      const rateChangeMethods =
        isRateChange
          ? '<select class="hlc-header-select hlc-rate-change-header-select" data-rate-change-method="' +
            state.rateChangeMethod +
            '" aria-label="Rate change type">' +
            '<option value="' +
            RATE_CHANGE_METHOD_TYPE +
            '"' +
            (state.rateChangeMethod === RATE_CHANGE_METHOD_TYPE
              ? " selected"
              : "") +
            ">" +
            escapeHtml(typeSwitchLabel) +
            "</option>" +
            '<option value="' +
            RATE_CHANGE_METHOD_REPRICE +
            '"' +
            (state.rateChangeMethod === RATE_CHANGE_METHOD_REPRICE
              ? " selected"
              : "") +
            ">Repricing</option>" +
            '<option value="' +
            RATE_CHANGE_METHOD_BENCHMARK +
            '"' +
            (state.rateChangeMethod === RATE_CHANGE_METHOD_BENCHMARK
              ? " selected"
              : "") +
            ">Benchmark switch</option>" +
            "</select>"
          : "";
      const useChargeHeader = state.group === "laterCharges";
      const helpHtml = columnHelpHtml(column);
      const titleMeta =
        footnoteHtml || helpHtml
          ? '<span class="hlc-column-title-meta">' +
            footnoteHtml +
            helpHtml +
            "</span>"
          : "";
      const titleRow =
        '<span class="hlc-column-title">' +
        '<span class="hlc-column-title-stack">' +
        columnTitleTextHtml(column.label, column.key) +
        titleMeta +
        "</span>" +
        sortInd +
        "</span>";
      const headerLabel = useChargeHeader
        ? '<span class="hlc-column-label">' +
          titleRow +
          (isPrepayment ? prepaymentMethods : "") +
          (isRateChange ? rateChangeMethods : "") +
          "</span>"
        : titleRow;
      headHtml +=
        '<th class="' +
        columnAlignClass(column) +
        sortClass +
        '" scope="col" id="hlc-th-' +
        escapeHtml(column.key) +
        '" data-col="' +
        column.key +
        '"' +
        sortAttr +
        ariaSort +
        (footnoteMarker ? ' aria-describedby="hlc-charges-note"' : "") +
        ">" +
        headerLabel +
        "</th>";
    });
    headHtml += "</tr>";
    closeOpenFieldHelp();
    el.head.innerHTML = headHtml;

    updateChargesFootnote(footnoteState.text);

    const colCount = columns.length + 1 + (useFillCol ? 1 : 0);
    const ranks = buildCompareRanks(rows);

    if (!rows.length) {
      el.body.innerHTML =
        '<tr><td class="hlc-empty" colspan="' +
        colCount +
        '">No banks matched these inputs. Try a different income, property agreement value, age, CIBIL score, purpose, or filters.</td></tr>';
      state.cellSnapshot = nextSnapshot;
      updateShowMoreButton(0, 0);
      updateApplyBar();
      syncCompareColumnWidths();
      return;
    }

    el.body.innerHTML = visibleRows
      .map(function (row) {
        const isSelected = state.selected.has(row.id);
        const selectedClass = isSelected ? " is-selected" : "";
        const outsideNote = row._outsideFilters
          ? '<span class="hlc-outside-filters-note">Outside current filters</span>'
          : "";
        const cells = columns
          .map(function (column) {
            const display = cellValue(row, column);
            const deltaClass =
              highlightDeltas && cellDidChange(prevSnapshot, row.id, column.key, display)
                ? " hlc-cell-delta"
                : "";
            const unpublished =
              column.type === "charge" &&
              chargeDisplayIsUnpublished(row[column.key]);
            const hasCalculation = columnOpensCalculation(
              column,
              row[column.key]
            );
            const noteGroupId = chargesNoteGroupId(column.label);
            const rankClass = compareRankNumClass(row, column, ranks);
            const rankPills = compareRankPillsHtml(row, column, ranks);
            const cellContent = hasCalculation
              ? column.type === "charge"
                ? chargeDisplayHtml(row[column.key], noteGroupId, {
                    wrapMain: function (figure) {
                      return calculationButtonHtml(
                        figure,
                        column,
                        row,
                        rankClass
                      );
                    },
                    afterFigure: rankPills
                  })
                : figureWithRankPills(
                    calculationButtonHtml(display, column, row, rankClass),
                    rankPills
                  )
              : column.type === "charge"
                ? chargeCellHtml(row, column)
                : figureWithRankPills(
                    '<span class="hlc-cell-value' +
                      rankClass +
                      '">' +
                      display +
                      "</span>",
                    rankPills
                  );
            return (
              '<td class="' +
              columnAlignClass(column) +
              deltaClass +
              (unpublished ? " hlc-charge-unpublished-cell" : "") +
              '" data-col="' +
              column.key +
              '" headers="hlc-th-' +
              escapeHtml(column.key) +
              '">' +
              cellContent +
              "</td>"
            );
          })
          .join("");
        return (
          '<tr class="hlc-selectable-row' +
          selectedClass +
          '" data-id="' +
          row.id +
          '" tabindex="0" aria-selected="' +
          (isSelected ? "true" : "false") +
          '" aria-label="' +
          rowAriaLabel(row.bankName, isSelected).replace(/"/g, "&quot;") +
          '">' +
          '<td class="hlc-sticky-col" headers="hlc-th-bank">' +
          '<div class="hlc-bank-cell">' +
          rowCheckHtml(isSelected) +
          '<div class="hlc-bank-cell-text">' +
          '<div class="hlc-bank-name">' +
          bankLogoHtml(row.bankName) +
          '<div class="hlc-bank-name-stack">' +
          '<button type="button" class="hlc-bank-name-text" data-detail="' +
          row.id +
          '" aria-label="Details for ' +
          escapeHtml(row.bankName) +
          '">' +
          escapeHtml(row.bankName) +
          "</button>" +
          outsideNote +
          "</div></div>" +
          "</div></div></td>" +
          (useFillCol ? '<td class="hlc-col-fill" aria-hidden="true"></td>' : "") +
          cells +
          "</tr>"
        );
      })
      .join("");

    state.cellSnapshot = nextSnapshot;
    updateShowMoreButton(rows.length, visibleRows.length);
    updateApplyBar();
    syncCompareColumnWidths();
  }

  /**
   * Head and body are separate tables (page-sticky header). Same col classes +
   * width:100% keep columns aligned — do not lock content-sized min-widths or
   * the table grows a sideways scrollbar for no reason.
   *
   * Phone Overview hugs the widest header/value. Phone Charges / Other charges
   * hug the header row only (label, footnote marker, sort arrows + padding).
   * Phone Bank hugs the widest lender name (nowrap) + checkbox/logo chrome so
   * empty sticky gutter does not cover Rate.
   */
  function shouldHugPhoneCompareColumns(group) {
    return (
      group === "essentials" ||
      group === "charges" ||
      group === "laterCharges"
    );
  }

  function phoneCompareColSkipIndices(group, headCells) {
    const skip = new Set();
    if (group === "laterCharges") {
      const fillCell = headCells[1];
      if (fillCell && fillCell.classList.contains("hlc-col-fill")) {
        skip.add(1);
      }
    }
    return skip;
  }

  function shouldSizePhoneColsFromHeaderOnly(group) {
    return group === "charges" || group === "laterCharges";
  }

  function measureProbeWidth(content, padSource) {
    if (!content) return 0;
    const padEl = padSource || content;
    const padCs = window.getComputedStyle(padEl);
    const pad =
      (parseFloat(padCs.paddingLeft) || 0) +
      (parseFloat(padCs.paddingRight) || 0);
    const probe = document.createElement("div");
    probe.setAttribute("aria-hidden", "true");
    const cs = window.getComputedStyle(content);
    probe.style.cssText =
      "position:absolute;left:-10000px;top:0;visibility:hidden;pointer-events:none;" +
      "display:inline-flex;align-items:center;flex-wrap:nowrap;" +
      "width:max-content;max-width:none;white-space:nowrap;box-sizing:border-box;";
    probe.style.font = cs.font;
    probe.style.fontSize = cs.fontSize;
    probe.style.fontFamily = cs.fontFamily;
    probe.style.fontWeight = cs.fontWeight;
    probe.style.letterSpacing = cs.letterSpacing;
    probe.style.fontVariantNumeric = cs.fontVariantNumeric;
    probe.style.fontFeatureSettings = cs.fontFeatureSettings;
    probe.innerHTML = content.innerHTML;
    document.body.appendChild(probe);
    const width = Math.ceil(probe.getBoundingClientRect().width + pad);
    document.body.removeChild(probe);
    return width;
  }

  /**
   * Phone Lenders column: width from checkbox + logo + bank name (nowrap).
   * Scheme ellipsizes inside that width. Cap so Rate + Loan amount remain
   * on-screen.
   */
  function measurePhoneBankColWidth(cell) {
    if (!cell) return 0;
    const padCs = window.getComputedStyle(cell);
    const pad =
      (parseFloat(padCs.paddingLeft) || 0) +
      (parseFloat(padCs.paddingRight) || 0);

    if (cell.tagName === "TH") {
      const head = cell.querySelector(".hlc-bank-head");
      return head ? measureProbeWidth(head, cell) : measureProbeWidth(cell, cell);
    }

    const bankCell = cell.querySelector(".hlc-bank-cell");
    const name = bankCell && bankCell.querySelector(".hlc-bank-name");
    if (!bankCell || !name) return Math.ceil(pad);

    const check = bankCell.querySelector(".hlc-row-check");
    const bankCs = window.getComputedStyle(bankCell);
    const gap = parseFloat(bankCs.columnGap || bankCs.gap) || 0;
    const nameCs = window.getComputedStyle(name);
    const nameGap = parseFloat(nameCs.columnGap || nameCs.gap) || 0;

    const probe = document.createElement("div");
    probe.setAttribute("aria-hidden", "true");
    probe.style.cssText =
      "position:absolute;left:-10000px;top:0;visibility:hidden;pointer-events:none;" +
      "display:flex;align-items:center;flex-wrap:nowrap;" +
      "width:max-content;max-width:none;box-sizing:border-box;";
    probe.style.gap = gap + "px";

    if (check) {
      const checkClone = check.cloneNode(true);
      checkClone.style.flex = "0 0 auto";
      probe.appendChild(checkClone);
    }

    const nameClone = name.cloneNode(true);
    nameClone.style.cssText =
      "display:inline-flex;align-items:center;flex-wrap:nowrap;" +
      "width:max-content;max-width:none;min-width:0;white-space:nowrap;";
    nameClone.style.gap = nameGap + "px";
    const nameText = nameClone.querySelector(".hlc-bank-name-text");
    if (nameText) {
      nameText.style.whiteSpace = "nowrap";
      nameText.style.flex = "0 0 auto";
      nameText.style.minWidth = "0";
      nameText.style.overflow = "visible";
    }
    const logo = nameClone.querySelector(".hlc-bank-logo");
    if (logo) {
      logo.style.flex = "0 0 auto";
      logo.style.width = "1.25rem";
      logo.style.height = "1.25rem";
    }
    probe.appendChild(nameClone);

    document.body.appendChild(probe);
    const width = Math.ceil(probe.getBoundingClientRect().width + pad);
    document.body.removeChild(probe);
    return width;
  }

  function phoneCompareScrollPortPx() {
    const viewport = Math.min(
      window.innerWidth || Infinity,
      (document.documentElement && document.documentElement.clientWidth) ||
        Infinity
    );
    const fallback = Number.isFinite(viewport) && viewport > 0 ? viewport : 320;
    /*
     * Use the phone viewport minus shell side padding — not scroll/wrap
     * clientWidth. Those can stay inflated after a prior max-content pass and
     * made the two-metric fit think Loan already fit when it was clipped.
     */
    const shell = document.querySelector(".hlc-shell");
    if (shell) {
      const cs = window.getComputedStyle(shell);
      const pad =
        (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
      return Math.max(200, Math.floor(fallback - pad));
    }
    return Math.max(200, Math.floor(fallback - 32));
  }

  /** Phone CSS default for sticky Bank (`--hlc-phone-bank-col: 9rem`). */
  const PHONE_BANK_COL_DEFAULT_PX = Math.round(9 * 16);
  /* Never shrink Bank below the restored phone width — names stay readable. */
  const PHONE_BANK_COL_FLOOR_PX = PHONE_BANK_COL_DEFAULT_PX;
  /* Leave a hair so borders / subpixel rounding do not force a useless x-scroll. */
  const PHONE_COMPARE_PORT_GUTTER_PX = 2;
  const PHONE_METRIC_COL_MIN_PX = Math.ceil(3.25 * 16);
  /* Extra room for non-compact metric cols on phone (numbers + short titles). */
  const PHONE_WIDE_METRIC_FLOOR_PX = Math.ceil(5.5 * 16);
  const PHONE_WIDE_METRIC_BOOST_PX = Math.ceil(0.75 * 16);

  /**
   * Cap sticky Bank so metric columns can still fit beside it on phone.
   * Floor is the CSS phone Bank width (9rem) — do not squeeze names smaller.
   */
  function phoneBankColCapPx(portPx, twoMetricReservePx) {
    const port = Math.max(0, portPx || 0);
    const reserve = Math.max(0, twoMetricReservePx || 0);
    return Math.max(PHONE_BANK_COL_FLOOR_PX, port - reserve);
  }

  function setPhoneBankColCssVar(px) {
    const page = document.querySelector(".explore-banks-page");
    if (!page) return;
    if (px == null || !Number.isFinite(px) || px <= 0) {
      page.style.removeProperty("--hlc-phone-bank-col");
      return;
    }
    page.style.setProperty("--hlc-phone-bank-col", Math.round(px) + "px");
  }

  /**
   * Phone Charges / Other charges: column width = header title row (label,
   * footnote marker, sort arrows) + th padding. Dropdowns under a title may
   * widen the column when they need more room.
   * Compact wrap keys size to the longest word so two-line titles stay narrow.
   */
  function measurePhoneCompareColHeaderWidth(cell) {
    if (!cell || cell.tagName !== "TH") return 0;
    const title = cell.querySelector(".hlc-column-title");
    const titleText = cell.querySelector(".hlc-column-title-text");
    const colKey = cell.getAttribute("data-col") || "";
    const compact = Boolean(PHONE_COMPACT_HEADER_WRAP_KEYS[colKey]);
    let width = 0;
    if (compact && title && titleText) {
      width = measurePhoneCompactWrappedHeaderWidth(cell, title, titleText);
    } else {
      width = measureProbeWidth(title || cell, cell);
      if (!cell.classList.contains("hlc-sticky-col")) {
        width = Math.max(
          width + PHONE_WIDE_METRIC_BOOST_PX,
          PHONE_WIDE_METRIC_FLOOR_PX
        );
      }
    }
    const headerSelect = cell.querySelector(
      ".hlc-header-select, .hlc-prepay-header-select, .hlc-rate-change-header-select"
    );
    if (headerSelect) {
      const padCs = window.getComputedStyle(cell);
      const pad =
        (parseFloat(padCs.paddingLeft) || 0) +
        (parseFloat(padCs.paddingRight) || 0);
      width = Math.max(
        width,
        Math.ceil(headerSelect.getBoundingClientRect().width + pad)
      );
    }
    if (PHONE_FEE_COL_NUDGE_KEYS[colKey]) {
      width += PHONE_FEE_COL_NUDGE_PX;
    }
    return width;
  }

  /**
   * Width for a two-line phone header: longest word + icon/footnote chrome.
   * Keeps Loan amount / Govt. charges / fee titles narrow without per-label CSS.
   */
  function measurePhoneCompactWrappedHeaderWidth(cell, title, titleText) {
    const padCs = window.getComputedStyle(cell);
    const pad =
      (parseFloat(padCs.paddingLeft) || 0) +
      (parseFloat(padCs.paddingRight) || 0);
    const wordEls = titleText.querySelectorAll(".hlc-title-word");
    const words = [];
    if (wordEls.length) {
      Array.prototype.forEach.call(wordEls, function (el) {
        const w = String(el.textContent || "").trim();
        if (w) words.push(w);
      });
    } else {
      const text = String(titleText.textContent || "")
        .replace(/\s+/g, " ")
        .trim();
      text.split(" ").forEach(function (w) {
        if (w) words.push(w);
      });
    }
    const fullLabel =
      titleText.getAttribute("aria-label") ||
      words.join(" ") ||
      String(titleText.textContent || "")
        .replace(/\s+/g, " ")
        .trim();
    const textCs = window.getComputedStyle(titleText);
    const wordProbe = document.createElement("span");
    wordProbe.setAttribute("aria-hidden", "true");
    wordProbe.style.cssText =
      "position:absolute;left:-10000px;top:0;visibility:hidden;pointer-events:none;" +
      "display:inline-block;width:max-content;max-width:none;white-space:nowrap;" +
      "box-sizing:border-box;";
    wordProbe.style.font = textCs.font;
    wordProbe.style.fontSize = textCs.fontSize;
    wordProbe.style.fontFamily = textCs.fontFamily;
    wordProbe.style.fontWeight = textCs.fontWeight;
    wordProbe.style.letterSpacing = textCs.letterSpacing;
    document.body.appendChild(wordProbe);
    let maxWord = 0;
    for (let i = 0; i < words.length; i++) {
      wordProbe.textContent = words[i];
      maxWord = Math.max(maxWord, wordProbe.getBoundingClientRect().width);
    }
    wordProbe.textContent = fullLabel;
    const fullText = wordProbe.getBoundingClientRect().width;
    document.body.removeChild(wordProbe);

    const titleNowrap = measureProbeWidth(title, cell) - pad;
    const chrome = Math.max(0, titleNowrap - fullText);
    return Math.ceil(maxWord + chrome + pad);
  }

  function measureOverviewColContentWidth(cell) {
    if (!cell) return 0;
    const isHead = cell.tagName === "TH";
    const content = isHead
      ? cell
      : cell.querySelector(".hlc-rank-figure") ||
        cell.querySelector(".hlc-rank-wrap") ||
        cell.querySelector(
          ".hlc-charge-amount, .hlc-cell-value, .hlc-charge-rule"
        ) ||
        cell;
    if (isHead) {
      return measureProbeWidth(content, cell);
    }
    const cellCs = window.getComputedStyle(cell);
    const pad =
      (parseFloat(cellCs.paddingLeft) || 0) +
      (parseFloat(cellCs.paddingRight) || 0);
    const probe = document.createElement("div");
    probe.setAttribute("aria-hidden", "true");
    const cs = window.getComputedStyle(content);
    probe.style.cssText =
      "position:absolute;left:-10000px;top:0;visibility:hidden;pointer-events:none;" +
      "display:inline-block;width:max-content;max-width:none;white-space:nowrap;" +
      "box-sizing:border-box;";
    probe.style.font = cs.font;
    probe.style.fontSize = cs.fontSize;
    probe.style.fontFamily = cs.fontFamily;
    probe.style.fontWeight = cs.fontWeight;
    probe.style.letterSpacing = cs.letterSpacing;
    probe.style.fontVariantNumeric = cs.fontVariantNumeric;
    probe.style.fontFeatureSettings = cs.fontFeatureSettings;
    /*
     * Size from the figure only. Rank pills (Lowest / Highest) sit under the
     * number and wrap; counting them made Rate steal Loan amount’s space.
     */
    probe.textContent = (content.textContent || "").replace(/\s+/g, " ").trim();
    document.body.appendChild(probe);
    const width = Math.ceil(probe.getBoundingClientRect().width + pad);
    document.body.removeChild(probe);
    return width;
  }

  function syncCompareColumnWidths() {
    if (!el.headTable || !el.table || !el.head) return;
    const headRow = el.head.querySelector("tr");
    if (!headRow) return;
    const headCells = Array.prototype.slice.call(headRow.children);
    const bodyRows = el.body
      ? Array.prototype.slice.call(el.body.querySelectorAll("tr"))
      : [];
    const phone =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(max-width: 833px)").matches;
    const phoneHugCols = phone && shouldHugPhoneCompareColumns(state.group);

    headCells.forEach(function (cell) {
      cell.style.width = "";
      cell.style.minWidth = "";
      cell.style.maxWidth = "";
    });
    bodyRows.forEach(function (row) {
      Array.prototype.forEach.call(row.children, function (cell) {
        cell.style.width = "";
        cell.style.minWidth = "";
        cell.style.maxWidth = "";
      });
    });
    [el.headCols, el.cols].forEach(function (colgroup) {
      if (!colgroup) return;
      Array.prototype.forEach.call(colgroup.children, function (col) {
        col.style.width = "";
      });
    });

    if (!phoneHugCols) {
      setPhoneBankColCssVar(null);
      el.headTable.style.width = "100%";
      el.table.style.width = "100%";
      el.headTable.style.tableLayout = "";
      el.table.style.tableLayout = "";
      if (el.headScroll && el.scroll) {
        el.headScroll.scrollLeft = el.scroll.scrollLeft;
      }
      return;
    }

    /*
     * Measure the scrollport while tables are width:100%. A prior hug pass may
     * have left max-content; reset first so a flex ancestor cannot grow with
     * the table (clientWidth ≈ scrollWidth) and skip the two-metric fit.
     */
    el.headTable.style.width = "100%";
    el.table.style.width = "100%";
    el.headTable.style.tableLayout = "fixed";
    el.table.style.tableLayout = "fixed";
    void (el.scroll && el.scroll.offsetWidth);
    const port = Math.max(
      0,
      phoneCompareScrollPortPx() - PHONE_COMPARE_PORT_GUTTER_PX
    );

    el.headTable.style.width = "max-content";
    el.table.style.width = "max-content";
    el.headTable.style.tableLayout = "fixed";
    el.table.style.tableLayout = "fixed";

    const skipIndices = phoneCompareColSkipIndices(state.group, headCells);
    const zeroPx = "0px";
    const headerOnly = shouldSizePhoneColsFromHeaderOnly(state.group);
    const measured = new Array(headCells.length);

    /* Pass 1 — measure metric cols; defer sticky Bank. */
    for (let i = 0; i < headCells.length; i++) {
      if (skipIndices.has(i)) {
        measured[i] = 0;
        continue;
      }
      if (headCells[i].classList.contains("hlc-sticky-col")) {
        measured[i] = null;
        continue;
      }
      let maxW = 0;
      if (headerOnly) {
        maxW = measurePhoneCompareColHeaderWidth(headCells[i]);
      } else {
        /*
         * Overview heads: size from the title row only (label + help), not the
         * full th with sort arrows — those were inflating Rate/Loan and
         * pushing the second metric column off-screen.
         */
        maxW = measurePhoneCompareColHeaderWidth(headCells[i]);
        for (let r = 0; r < bodyRows.length; r++) {
          maxW = Math.max(
            maxW,
            measureOverviewColContentWidth(bodyRows[r].children[i])
          );
        }
      }
      measured[i] = maxW > 0 ? maxW : 0;
    }

    /* Cap Bank so the first two metric columns stay fully on-screen. */
    let metricReserve = 0;
    let metricsSeen = 0;
    const metricIndices = [];
    for (let i = 0; i < headCells.length; i++) {
      if (skipIndices.has(i)) continue;
      if (headCells[i].classList.contains("hlc-sticky-col")) continue;
      if (metricsSeen >= 2) break;
      metricReserve += measured[i] || 0;
      metricIndices.push(i);
      metricsSeen += 1;
    }

    /*
     * Overview on phone: Bank stays at the CSS phone width (9rem). Rate keeps a
     * readable floor; Loan amount hugs its wrapped header (not stretched to
     * fill leftover). Tenure / EMI keep natural (boosted) widths and scroll.
     */
    const PHONE_RATE_COL_PX = Math.round(5.5 * 16);
    let bankW = PHONE_BANK_COL_DEFAULT_PX;
    if (state.group === "essentials" && metricIndices.length === 2 && port > 0) {
      const rateIdx = metricIndices[0];
      const loanIdx = metricIndices[1];
      measured[rateIdx] = Math.max(
        PHONE_RATE_COL_PX,
        measured[rateIdx] || 0
      );
      measured[loanIdx] = Math.max(
        PHONE_METRIC_COL_MIN_PX,
        measured[loanIdx] || 0
      );
      const pair = (measured[rateIdx] || 0) + (measured[loanIdx] || 0);
      if (pair + bankW > port) {
        const rest = Math.max(0, port - bankW);
        let rateW = Math.min(
          measured[rateIdx],
          Math.max(PHONE_METRIC_COL_MIN_PX, Math.floor(rest * 0.45))
        );
        let loanW = Math.max(PHONE_METRIC_COL_MIN_PX, rest - rateW);
        if (loanW > (measured[loanIdx] || 0) && measured[loanIdx] > 0) {
          loanW = measured[loanIdx];
          rateW = Math.max(PHONE_METRIC_COL_MIN_PX, rest - loanW);
        }
        measured[rateIdx] = rateW;
        measured[loanIdx] = loanW;
      }
    } else if (metricIndices.length === 2 && port > 0) {
      bankW = Math.max(
        PHONE_BANK_COL_FLOOR_PX,
        Math.min(
          PHONE_BANK_COL_DEFAULT_PX,
          phoneBankColCapPx(port, metricReserve)
        )
      );
      if (metricReserve + bankW > port) {
        const rest = Math.max(0, port - bankW);
        const i0 = metricIndices[0];
        const i1 = metricIndices[1];
        const m0 = measured[i0] || 0;
        const m1 = measured[i1] || 0;
        const sum = m0 + m1 || 1;
        let w0 = Math.max(
          PHONE_METRIC_COL_MIN_PX,
          Math.floor((rest * m0) / sum)
        );
        let w1 = rest - w0;
        if (w1 < PHONE_METRIC_COL_MIN_PX) {
          w1 = PHONE_METRIC_COL_MIN_PX;
          w0 = Math.max(PHONE_METRIC_COL_MIN_PX, rest - w1);
        }
        measured[i0] = w0;
        measured[i1] = w1;
      }
    }

    setPhoneBankColCssVar(bankW);

    for (let i = 0; i < headCells.length; i++) {
      if (headCells[i].classList.contains("hlc-sticky-col")) {
        measured[i] = bankW;
      }
    }

    /* Pass 2 — apply widths (fill cols stay zero). */
    for (let i = 0; i < headCells.length; i++) {
      if (skipIndices.has(i)) {
        if (headCells[i].classList.contains("hlc-col-fill")) {
          headCells[i].style.width = zeroPx;
          headCells[i].style.minWidth = zeroPx;
          headCells[i].style.maxWidth = zeroPx;
          bodyRows.forEach(function (row) {
            const cell = row.children[i];
            if (!cell) return;
            cell.style.width = zeroPx;
            cell.style.minWidth = zeroPx;
            cell.style.maxWidth = zeroPx;
          });
          if (el.headCols && el.headCols.children[i]) {
            el.headCols.children[i].style.width = zeroPx;
          }
          if (el.cols && el.cols.children[i]) {
            el.cols.children[i].style.width = zeroPx;
          }
        }
        continue;
      }

      const maxW = measured[i];
      if (!maxW || maxW <= 0) continue;
      const px = maxW + "px";
      headCells[i].style.width = px;
      headCells[i].style.minWidth = px;
      headCells[i].style.maxWidth = px;
      bodyRows.forEach(function (row) {
        const cell = row.children[i];
        if (!cell) return;
        cell.style.width = px;
        cell.style.minWidth = px;
        cell.style.maxWidth = px;
      });
      if (el.headCols && el.headCols.children[i]) {
        el.headCols.children[i].style.width = px;
      }
      if (el.cols && el.cols.children[i]) {
        el.cols.children[i].style.width = px;
      }
    }

    if (el.headScroll && el.scroll) {
      /* Overview fit: pin to the start so Rate + Loan stay in view. */
      if (state.group === "essentials") {
        el.scroll.scrollLeft = 0;
        el.headScroll.scrollLeft = 0;
      } else {
        el.headScroll.scrollLeft = el.scroll.scrollLeft;
      }
    }
  }

  function lowerFirst(value) {
    const text = String(value || "");
    return text ? text.charAt(0).toLowerCase() + text.slice(1) : "";
  }

  function joinReadableList(values) {
    if (values.length < 2) return values[0] || "";
    if (values.length === 2) return values[0] + " or " + values[1];
    return values.slice(0, -1).join(", ") + ", or " + values[values.length - 1];
  }

  function buildChargesFootnote(visibleRows) {
    const result = { text: "", headerMarkers: Object.create(null) };
    if (state.group === "laterCharges" && visibleRows.length > 0) {
      const prepaymentNotes = [floatingPrepayNoteHtml()];
      if (state.productFilters.fixedRate) {
        prepaymentNotes.push(escapeHtml(FIXED_FORECLOSURE_NOTE));
        const activeCharges = visibleRows
          .map(function (row) {
            return prepayChargeForMethod(row, state.prepaymentMethod);
          })
          .filter(function (charge) {
            return charge && !isPrepaymentNotCharged(charge);
          });
        const bases = Array.from(
          new Set(
            activeCharges
              .map(function (charge) {
                return formatChargeBasis(charge.percentage_base_value);
              })
              .filter(Boolean)
              .map(lowerFirst)
          )
        );
        const units = Array.from(
          new Set(
            activeCharges
              .map(function (charge) {
                return formatChargeUnit(charge.charge_unit);
              })
              .filter(Boolean)
              .map(lowerFirst)
          )
        );
        const hasGst = activeCharges.some(function (charge) {
          return normalizeText(charge.gst_applicable) === "yes";
        });
        if (bases.length || units.length || hasGst) {
          result.headerMarkers.prepaymentChargeDisplay = "*";
        }
        if (units.length) {
          prepaymentNotes.push(
            escapeHtml(
              "* Charged " +
                joinReadableList(units) +
                ", depending on the lender’s schedule."
            )
          );
        }
        if (bases.length) {
          prepaymentNotes.push(
            escapeHtml(
              "* Calculated " +
                joinReadableList(bases) +
                ", depending on the lender’s schedule."
            )
          );
        }
        if (hasGst) {
          prepaymentNotes.push(
            escapeHtml("* " + GST_APPLICABLE_NOTE)
          );
        }
      }

      const rateChangeNotes = [
        escapeHtml(rateChangeFrequencyNoteForMethod(state.rateChangeMethod))
      ];
      if (state.rateChangeMethod === RATE_CHANGE_METHOD_BENCHMARK) {
        rateChangeNotes.push(escapeHtml(RATE_CHANGE_BENCHMARK_MEANING_NOTE));
      }
      if (state.rateChangeMethod === RATE_CHANGE_METHOD_REPRICE) {
        rateChangeNotes.push(escapeHtml(RATE_CHANGE_REPRICING_MEANING_NOTE));
      }
      const activeRateChangeCharges = visibleRows
        .map(function (row) {
          return rateChangeChargeForMethod(row, state.rateChangeMethod);
        })
        .filter(Boolean);
      const rateChangeUnits = Array.from(
        new Set(
          activeRateChangeCharges
            .map(function (charge) {
              return formatChargeUnit(charge.charge_unit);
            })
            .filter(Boolean)
            .map(lowerFirst)
        )
      );
      const hasRateChangeGst = activeRateChangeCharges.some(function (charge) {
        return normalizeText(charge.gst_applicable) === "yes";
      });
      // Units are shared for the active method (per switch / per instance).
      // Bases differ by bank — shown on each cell, never clubbed in footnotes.
      if (rateChangeUnits.length === 1) {
        rateChangeNotes.push(
          escapeHtml(
            RATE_CHANGE_COMMON_MARKER +
              " Charged " +
              rateChangeUnits[0] +
              ", depending on the lender’s schedule."
          )
        );
      }
      if (hasRateChangeGst) {
        rateChangeNotes.push(
          escapeHtml(
            RATE_CHANGE_COMMON_MARKER + " " + GST_APPLICABLE_NOTE
          )
        );
      }
      result.headerMarkers.rateChangeChargeDisplay = RATE_CHANGE_COMMON_MARKER;

      const percentageOverdueRows = visibleRows.filter(function (row) {
        return (
          row.overdueCharge &&
          row.overdueCharge.percentage != null &&
          Number.isFinite(Number(row.overdueCharge.percentage))
        );
      });
      const emiCharges = visibleRows
        .map(function (row) {
          return row.emiBounceCharge;
        })
        .filter(Boolean);
      const emiUnits = Array.from(
        new Set(
          emiCharges
            .map(function (charge) {
              return formatChargeUnit(charge.charge_unit);
            })
            .filter(Boolean)
            .map(lowerFirst)
        )
      );
      const emiBases = Array.from(
        new Set(
          emiCharges
            .map(function (charge) {
              return formatChargeBasis(charge.percentage_base_value);
            })
            .filter(Boolean)
            .map(lowerFirst)
        )
      );
      const hasEmiGst = emiCharges.some(function (charge) {
        return normalizeText(charge.gst_applicable) === "yes";
      });
      const overdueGroupNotes = percentageOverdueRows.length
        ? [
            escapeHtml(
              "‡ Percentage overdue charges are calculated on the overdue amount for as long as the payment stays overdue."
            )
          ]
        : [];
      const emiGroupNotes = [];
      if (emiUnits.length) {
        emiGroupNotes.push(
          escapeHtml(
            "^ Charged " +
              joinReadableList(emiUnits) +
              ", depending on the lender’s schedule."
          )
        );
      }
      if (emiBases.length) {
        emiGroupNotes.push(
          escapeHtml(
            "^ Calculated " +
              joinReadableList(emiBases) +
              ", depending on the lender’s schedule."
          )
        );
      }
      if (hasEmiGst) {
        emiGroupNotes.push(
          escapeHtml("^ " + GST_APPLICABLE_NOTE)
        );
      }
      if (percentageOverdueRows.length) {
        result.headerMarkers.overdueChargeDisplay = "‡";
      }
      if (emiUnits.length || emiBases.length || hasEmiGst) {
        result.headerMarkers.emiBounceChargeDisplay = "^";
      }
      result.text = [
        chargesNoteGroupHtml(
          columnLabelForKey("laterCharges", "prepaymentChargeDisplay"),
          prepaymentNotes
        ),
        chargesNoteGroupHtml(
          columnLabelForKey("laterCharges", "rateChangeChargeDisplay"),
          rateChangeNotes
        ),
        chargesNoteGroupHtml(
          columnLabelForKey("laterCharges", "overdueChargeDisplay"),
          overdueGroupNotes
        ),
        chargesNoteGroupHtml(
          columnLabelForKey("laterCharges", "emiBounceChargeDisplay"),
          emiGroupNotes
        )
      ]
        .filter(Boolean)
        .join("");
      return result;
    }
    const showCharges = state.group === "charges" && visibleRows.length > 0;
    if (!showCharges) {
      return result;
    }
    const groups = [];
    result.headerMarkers.processingFee = columnFootnoteMarker(
      "charges",
      "processingFee"
    );
    groups.push(
      chargesNoteGroupHtml(
        columnLabelForKey("charges", "processingFee"),
        [escapeHtml(PROCESSING_FEE_LOGIN_NOTE)]
      )
    );
    result.headerMarkers.propertyCheckCharges = columnFootnoteMarker(
      "charges",
      "propertyCheckCharges"
    );
    groups.push(
      chargesNoteGroupHtml(
        columnLabelForKey("charges", "propertyCheckCharges"),
        [escapeHtml(PROPERTY_CHECK_NOTE)]
      )
    );
    if (state.dataset) {
      const query = readQuery();
      const loanAmount =
        state.rows[0] && Number.isFinite(state.rows[0].loanAmount)
          ? state.rows[0].loanAmount
          : 0;
      const note = formatOptionalGovernmentChargesNote(
        state.dataset.government_charges || [],
        query,
        loanAmount,
        DEFAULT_JURISDICTION_STATE
      );
      if (note) {
        result.headerMarkers.governmentCharges = columnFootnoteMarker(
          "charges",
          "governmentCharges"
        );
        groups.push(
          chargesNoteGroupHtml(
            columnLabelForKey("charges", "governmentCharges"),
            note
              .split("\n")
              .filter(Boolean)
              .map(escapeHtml)
          )
        );
      }
    }
    result.text = groups.filter(Boolean).join("");
    return result;
  }

  function updateChargesFootnote(noteHtml) {
    if (!el.chargesNote) return;
    if (!noteHtml) {
      el.chargesNote.hidden = true;
      el.chargesNote.innerHTML = "";
      el.chargesNote.removeAttribute("aria-labelledby");
      return;
    }
    el.chargesNote.hidden = false;
    el.chargesNote.setAttribute("aria-labelledby", "hlc-charges-note-heading");
    el.chargesNote.innerHTML = chargesNoteToolbarHtml() + noteHtml;
    bindChargesNoteDropdowns(el.chargesNote);
  }

  function openChargesNoteGroup(groupId) {
    if (!el.chargesNote || !groupId || el.chargesNote.hidden) return false;
    const group =
      (typeof CSS !== "undefined" && CSS.escape
        ? el.chargesNote.querySelector("#" + CSS.escape(groupId))
        : null) || document.getElementById(groupId);
    if (!group || !el.chargesNote.contains(group)) return false;

    // Open through the summary control so the accordion animation runs
    // (setting .open alone can leave the polyfill / ::details-content closed).
    if (!group.open) {
      const summary = group.querySelector(":scope > summary, summary");
      if (summary) {
        summary.click();
      } else {
        group.open = true;
      }
    }

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function scrollToNote() {
      if (typeof group.scrollIntoView !== "function") return;
      group.scrollIntoView({
        block: "nearest",
        behavior: reduceMotion ? "auto" : "smooth"
      });
    }
    // Let the dropdown start opening, then bring it into view.
    if (reduceMotion) {
      scrollToNote();
    } else {
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(scrollToNote);
      });
    }
    return true;
  }

  var tableInView = false;

  function updateApplyBar() {
    const count = state.selected.size;
    const hasRows = !!(state.rows && state.rows.length);
    const label = applyOnceLabel();
    setApplyCountLabel(el.applyCount, count);
    setApplyCountLabel(el.applyDockCount, count);
    el.applyBtn.disabled = count === 0;
    el.applyBtn.textContent = label;
    el.applyBtn.setAttribute(
      "aria-label",
      count === 0
        ? "Apply once"
        : "Apply once to " + count + (count === 1 ? " bank" : " banks")
    );
    if (el.applyDockBtn) {
      el.applyDockBtn.disabled = count === 0;
      el.applyDockBtn.textContent = label;
      el.applyDockBtn.setAttribute("aria-label", el.applyBtn.getAttribute("aria-label"));
    }
    if (el.applyDock) {
      var resultsShell = document.getElementById("hlc-results-shell");
      // Floating Apply once is mobile-only. Desktop keeps the header button.
      var showDock = Boolean(
        isExploreMobile() &&
          resultsShell &&
          !resultsShell.hidden &&
          hasRows &&
          tableInView
      );
      el.applyDock.hidden = !showDock;
      document.body.classList.toggle("hlc-apply-dock-open", showDock);
    }
  }

  function showDrawer(title, subtitle, bodyHtml, options) {
    if (isExploreMobile() && isFiltersOpen()) {
      setFiltersOpen(false);
    }
    const opts = options || {};
    const hasGroups = String(bodyHtml || "").indexOf("hlc-drawer-group") >= 0;
    const dumpChrome = hasGroups && opts.keepHeading !== true;
    if (dumpChrome) {
      el.drawerTitle.textContent = "More details";
      el.drawerSub.textContent = "";
      el.drawerSub.hidden = true;
      el.drawerBody.innerHTML = bodyHtml;
      if (el.drawerActionsBar) {
        el.drawerActionsBar.hidden = false;
      }
      if (el.drawerToggleAll) {
        const fresh = el.drawerToggleAll.cloneNode(true);
        fresh.hidden = false;
        fresh.textContent = "Expand all";
        fresh.setAttribute("aria-expanded", "false");
        el.drawerToggleAll.parentNode.replaceChild(fresh, el.drawerToggleAll);
        el.drawerToggleAll = fresh;
      }
      el.drawer.classList.add("hlc-drawer--sections");
      bindDrawerDropdowns(el.drawer);
    } else {
      el.drawerTitle.textContent = title;
      el.drawerSub.textContent = subtitle || "";
      el.drawerSub.hidden = !String(subtitle || "").trim();
      el.drawerBody.innerHTML = bodyHtml;
      const groupCount = hasGroups
        ? el.drawerBody.querySelectorAll(".hlc-drawer-group").length
        : 0;
      const showExpand = groupCount >= 2;
      if (el.drawerActionsBar) {
        el.drawerActionsBar.hidden = !showExpand;
      }
      if (el.drawerToggleAll) {
        if (showExpand) {
          const fresh = el.drawerToggleAll.cloneNode(true);
          fresh.hidden = false;
          fresh.textContent = "Expand all";
          fresh.setAttribute("aria-expanded", "false");
          el.drawerToggleAll.parentNode.replaceChild(fresh, el.drawerToggleAll);
          el.drawerToggleAll = fresh;
        } else {
          el.drawerToggleAll.hidden = true;
        }
      }
      el.drawer.classList.remove("hlc-drawer--sections");
      if (hasGroups) bindDrawerDropdowns(el.drawer);
    }

    if (el.drawerScroll) {
      el.drawerScroll.scrollTop = 0;
    } else if (el.drawerBody) {
      el.drawerBody.scrollTop = 0;
    }

    el.drawerBackdrop.hidden = false;
    requestAnimationFrame(function () {
      el.drawerBackdrop.classList.add("open");
      el.drawer.classList.add("open");
      el.drawer.setAttribute("aria-hidden", "false");
    });
  }

  function openChargeSlabs(id, detail) {
    if (detail === "overdue-slabs") {
      openCalculation(id, "overdueChargeDisplay");
      return;
    }
    if (detail === "rate-change-slabs") {
      openCalculation(id, "rateChangeChargeDisplay");
    }
  }

  function openDrawer(id) {
    const row = state.rows.find(function (entry) {
      return entry.id === id;
    });
    if (!row) return;

    const otherChargeSections =
      row.drawerOtherChargeSections && row.drawerOtherChargeSections.length
        ? row.drawerOtherChargeSections
        : [];

    const feeGst =
      feeSectionsHaveGst(row.feeSections) ||
      feeSectionsHaveGst(row.additionalAfterOfferSections) ||
      feeSectionsHaveGst(otherChargeSections);

    const bodyHtml =
      drawerSection(
        "Scheme",
        [
          ["Bank", row.bankName || "—"],
          ["Scheme name", row.scheme || "—"],
          ["Facility", row.facilityLabel || "—"],
          ["Purpose", row.purpose || "—"],
          ["Rate type", row.rateType || "—"],
          ["Borrower category", row.borrowerCategoryLabel || "—"]
        ],
        { open: true }
      ) +
      drawerSection("Eligibility", [
        ["CIBIL", row.cibilLabel],
        ["Age", row.ageRange],
        ["Occupation", row.occupationLabel]
      ]) +
      drawerSection("How the rate is built", buildRateDerivationPairs(row, readQuery())) +
      drawerSection("Discounts", [
        ["Women applicant", row.womenDiscountDetail || "None"],
        ["Green home", row.greenDiscountDetail || "None"],
        ["Insurance", row.insuranceDiscountDetail || "None"]
      ]) +
      drawerFeeSections(
        "Charges at the start",
        row.feeSections && row.feeSections.length ? row.feeSections : null
      ) +
      drawerFeeSections(
        "Other charges",
        otherChargeSections.length ? otherChargeSections : null
      ) +
      drawerPartPrepaymentRulesHtml(row.partPrepaymentRules) +
      drawerFeeSections(
        "Fees that may apply later",
        row.additionalAfterOfferSections &&
          row.additionalAfterOfferSections.length
          ? row.additionalAfterOfferSections
          : null,
        { hideWhenEmpty: true }
      ) +
      (feeGst
        ? '<p class="hlc-fee-note">' +
          escapeHtml(GST_APPLICABLE_FOOTNOTE) +
          "</p>"
        : "") +
      '<p class="hlc-drawer-foot">Published rules are shown without estimating an event-specific amount. Figures are indicative. The bank decides final terms.</p>';

    showDrawer(
      row.bankName,
      formatDrawerFreshnessSubtitle(
        row.scheme || "",
        row.lastCheckedOn ||
          (state.bankFreshness && state.bankFreshness[row.bankKey]) ||
          ""
      ),
      bodyHtml
    );
  }

  function storyEm(text) {
    return '<strong class="hlc-story-em">' + escapeHtml(String(text)) + "</strong>";
  }

  function storyLead(text) {
    return '<p class="hlc-story-lead">' + escapeHtml(text) + "</p>";
  }

  function storyLabel(text) {
    return '<p class="hlc-story-label">' + escapeHtml(text) + "</p>";
  }

  function storyLine(html) {
    return '<p class="hlc-story-line">' + html + "</p>";
  }

  function storyNote(text) {
    if (!text) return "";
    return '<p class="hlc-story-note">' + escapeHtml(text) + "</p>";
  }

  function storyJoin(parts) {
    if (!parts || !parts.length) return "";
    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return parts[0] + " and " + parts[1];
    return parts.slice(0, -1).join(", ") + ", and " + parts[parts.length - 1];
  }

  function storyFact(label, value) {
    return storyRow(label, value, false);
  }

  function storyResult(value) {
    return (
      '<p class="hlc-story-result">' + escapeHtml(String(value)) + "</p>"
    );
  }

  function storyHero(label, value) {
    return storyResult(value);
  }

  function storyTotal(label, value) {
    return storyResult(value);
  }

  function storyStage(options) {
    return (
      '<section class="hlc-story-block">' +
      (options.title
        ? '<h4 class="hlc-story-block-title">' +
          escapeHtml(options.title) +
          "</h4>"
        : "") +
      (options.body || "") +
      (options.note ? storyNote(options.note) : "") +
      "</section>"
    );
  }

  function renderMathLines(lines) {
    return mathWorkLinesHtml(lines);
  }

  function mathWorksheet(lines) {
    return (
      '<div class="hlc-math-sheet">' + renderMathLines(lines) + "</div>"
    );
  }

  function mathBlock(label, lines, note) {
    return (
      '<div class="hlc-math-block">' +
      '<div class="hlc-math-block-aside">' +
      (label
        ? '<p class="hlc-math-block-label">' + escapeHtml(label) + "</p>"
        : "") +
      (note
        ? '<p class="hlc-math-block-note">' + escapeHtml(note) + "</p>"
        : "") +
      "</div>" +
      mathWorksheet(lines) +
      "</div>"
    );
  }

  function mathSheet(blocks) {
    return (
      '<div class="hlc-math-sheet-wrap">' +
      blocks
        .filter(function (block) {
          return block && block.lines && block.lines.length;
        })
        .map(function (block) {
          return mathBlock(block.label, block.lines, block.note);
        })
        .join("") +
      "</div>"
    );
  }

  function storyMathStack(lines) {
    return mathWorksheet(lines);
  }

  function storyTrack(title, bodyHtml, trackId) {
    return (
      '<section class="hlc-story-track hlc-story-track--' +
      trackId +
      '">' +
      '<h4 class="hlc-story-track-title">' +
      escapeHtml(title) +
      "</h4>" +
      bodyHtml +
      "</section>"
    );
  }

  function storyRow(label, value, emphasis) {
    return (
      '<div class="hlc-story-row' +
      (emphasis ? " hlc-story-row--emphasis" : "") +
      '">' +
      '<span class="hlc-story-row-label">' +
      escapeHtml(label) +
      "</span>" +
      '<span class="hlc-story-row-value">' +
      escapeHtml(value) +
      "</span>" +
      "</div>"
    );
  }

  function storyDivider() {
    return '<div class="hlc-story-divider" aria-hidden="true"></div>';
  }

  function storyCard(innerHtml) {
    return (
      '<div class="hlc-drawer-card hlc-story-card">' + innerHtml + "</div>"
    );
  }

  function storyBreakdown(rows) {
    return (
      '<div class="hlc-story-breakdown">' +
      rows
        .map(function (row) {
          return (
            '<div class="hlc-story-breakdown-row">' +
            '<div class="hlc-story-breakdown-main">' +
            '<span class="hlc-story-breakdown-name">' +
            escapeHtml(row.name) +
            "</span>" +
            '<span class="hlc-story-breakdown-amt">' +
            escapeHtml(row.amount) +
            "</span>" +
            "</div>" +
            (row.how
              ? '<p class="hlc-story-breakdown-how">' +
                escapeHtml(row.how) +
                "</p>"
              : "") +
            "</div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function storyReceipt(rows) {
    return storyBreakdown(rows);
  }

  function storyCallout(html) {
    return '<div class="hlc-story-callout">' + html + "</div>";
  }

  function amountsMatch(a, b) {
    return Math.round(Number(a) || 0) === Math.round(Number(b) || 0);
  }

  function loanAmountCalculationHtml(row) {
    var model = loanAmountWalkModel(row, readQuery());
    var houseActive = model.limiter === "house" || model.limiter === "both";
    var incomeActive = model.limiter === "income" || model.limiter === "both";
    var stepStack = { stackClass: "hlc-math-bars--steps" };
    var step = 1;

    var houseTrackHtml = storyTrack(
      "House cap",
      mathBarStackHtml(
        [
          {
            step: step++,
            label:
              "Bank funds " +
              formatPctPlain(model.fundedPct) +
              " of the property",
            note: "Down payment: " + formatInr(model.downPayment) + ".",
            value: formatInr(model.fromProperty),
            track: "house",
            limiting: houseActive,
            lines: [
              { k: "num", t: formatInr(model.propertyValue) },
              { k: "op", t: "× " + formatPctPlain(model.fundedPct) },
              { k: "rule" },
              {
                k: "result",
                t: formatInr(model.fromProperty),
                emphasis: true
              }
            ]
          }
        ],
        stepStack
      ),
      "house"
    );

    var incomeBars = [
      {
        step: step++,
        label: "Share of income for all EMIs",
        note:
          "About " +
          formatPctPlain(model.foirPct) +
          " of take-home for all EMIs together.",
        value: formatInr(model.incomeAllowance),
        lines: [
          { k: "num", t: formatInr(model.totalIncome) },
          { k: "op", t: "× " + formatPctPlain(model.foirPct) },
          { k: "rule" },
          {
            k: "result",
            t: formatInr(model.incomeAllowance),
            emphasis: true
          }
        ]
      }
    ];
    if (model.existingEmis > 0) {
      incomeBars.push({
        step: step++,
        label: "Minus other EMIs",
        value: formatInr(model.afterEmis),
        lines: [
          { k: "num", t: formatInr(model.incomeAllowance) },
          { k: "op", t: "− " + formatInr(model.existingEmis) },
          { k: "rule" },
          { k: "result", t: formatInr(model.afterEmis), emphasis: true }
        ]
      });
    }
    if (model.cardLoad > 0) {
      incomeBars.push({
        step: step++,
        label: "Credit card load",
        note:
          formatPctPlain(model.cardLoadPct) +
          " of total card limits — not your outstanding dues.",
        value: formatInr(model.cardLoad),
        lines: [
          { k: "num", t: formatInr(model.cardLimits) },
          { k: "op", t: "× " + formatPctPlain(model.cardLoadPct) },
          { k: "rule" },
          { k: "result", t: formatInr(model.cardLoad), emphasis: true }
        ]
      });
      incomeBars.push({
        step: step++,
        label: "Minus credit card load",
        value: formatInr(model.emiRoom),
        lines: [
          { k: "num", t: formatInr(model.afterEmis) },
          { k: "op", t: "− " + formatInr(model.cardLoad) },
          { k: "rule" },
          { k: "result", t: formatInr(model.emiRoom), emphasis: true }
        ]
      });
    }
    incomeBars.push({
      step: step++,
      label: "That monthly room as a loan",
      note: "At this bank’s rate, for " + model.tenureLabel + ".",
      value: formatInr(model.fromIncome),
      track: "income",
      limiting: incomeActive,
      lines: [
        { k: "num", t: formatInr(model.emiRoom) + "/mo" },
        {
          k: "op",
          t: "@ " + formatPctPlain(model.ratePct) + ", " + model.tenureLabel
        },
        { k: "rule" },
        { k: "result", t: formatInr(model.fromIncome), emphasis: true }
      ]
    });

    var incomeTrackHtml = storyTrack(
      "Income cap",
      mathBarStackHtml(incomeBars, stepStack),
      "income"
    );

    var bankTrackHtml = "";
    if (model.bankMaxApplies) {
      bankTrackHtml = storyTrack(
        "This bank's maximum",
        mathBarStackHtml(
          [
            {
              step: step++,
              label: "This bank will not lend above this amount",
              value: formatInr(model.bankMaximum),
              track: "bank",
              limiting: model.limiter === "bank",
              lines: [{ k: "num", t: formatInr(model.bankMaximum) }]
            }
          ],
          stepStack
        ),
        "bank"
      );
    }

    var inner =
      houseTrackHtml +
      storyDivider() +
      incomeTrackHtml +
      (bankTrackHtml ? storyDivider() + bankTrackHtml : "");

    return calcStoryHtml(
      formatInr(model.result),
      "This bank's loan on these inputs is",
      inner,
      "",
      { resultNote: "Lower of property value and monthly income available for EMI." }
    );
  }

  function emiCalculationHtml(row) {
    const annualPct = Number(row.effectiveRoiPct);
    const monthlyPct = annualPct / 12;
    const schedule = amortizationSchedule(
      row.loanAmount,
      row.roiDecimal,
      row.tenureMonths
    );
    const bars = mathBarStackHtml(
      [
        {
          step: 1,
          label: "Banks quote annual; you pay monthly",
          note: "Yearly rate split into 12 monthly parts.",
          value: monthlyPct.toFixed(4) + "%",
          lines: [
            { k: "num", t: formatPctPlain(annualPct) + " a year" },
            { k: "op", t: "÷ 12 months" },
            { k: "rule" },
            { k: "result", t: monthlyPct.toFixed(4) + "%", emphasis: true }
          ]
        },
        {
          step: 2,
          label: "Loan at that monthly rate",
          note: "Same EMI every month. Early months pay more interest.",
          value: formatInr(row.emi) + "/mo",
          lines: [
            { k: "num", t: formatInr(row.loanAmount) },
            {
              k: "op",
              t: "@ " + monthlyPct.toFixed(4) + "%, " + tenureInWordsFromRow(row)
            },
            { k: "rule" },
            { k: "result", t: formatInr(row.emi) + "/mo", emphasis: true }
          ]
        }
      ],
      { stackClass: "hlc-math-bars--steps" }
    );
    return calcStoryHtml(
      formatInr(row.emi),
      "EMI every month is",
      bars,
      amortizationTableHtml(schedule)
    );
  }

  function processingFeeCalculationHtml(row) {
    const charge = row.processingCharge;
    if (!charge) {
      return calcStoryHtml(
        formatInr(0),
        "Processing fee on this loan is",
        "",
        ""
      );
    }

    const pct =
      charge.percentage == null ? NaN : Number(charge.percentage);
    const fixed =
      charge.fixed_amount == null ? NaN : Number(charge.fixed_amount);
    const bars = [];
    let note = "";

    if (Number.isFinite(pct) && pct > 0) {
      const beforeLimits = row.loanAmount * pct;
      bars.push({
        step: 1,
        label: "Processing fee — this bank’s percentage",
        note: "One-time fee to process your loan, paid at the time of sanctioning.",
        value: formatInr(beforeLimits),
        lines: [
          { k: "num", t: formatInr(row.loanAmount) },
          { k: "op", t: "× " + formatPctPlain(pct * 100) },
          { k: "rule" },
          { k: "result", t: formatInr(beforeLimits), emphasis: true }
        ]
      });
      const minHit =
        charge.charge_min != null &&
        beforeLimits < Number(charge.charge_min);
      const maxHit =
        charge.charge_max != null &&
        beforeLimits > Number(charge.charge_max);

      if (minHit) {
        bars.push({
          step: 2,
          label: "Bank floor",
          note: "Bank minimum fee (shown in maths).",
          value: formatInr(row.processingFee),
          lines: [
            { k: "num", t: formatInr(beforeLimits) },
            { k: "op", t: "or " + formatInr(Number(charge.charge_min)) },
            { k: "rule" },
            { k: "result", t: formatInr(row.processingFee), emphasis: true }
          ]
        });
      } else if (maxHit) {
        bars.push({
          step: 2,
          label: "Bank ceiling",
          note: "Bank maximum fee (shown in maths).",
          value: formatInr(row.processingFee),
          lines: [
            { k: "num", t: formatInr(beforeLimits) },
            { k: "op", t: "up to " + formatInr(Number(charge.charge_max)) },
            { k: "rule" },
            { k: "result", t: formatInr(row.processingFee), emphasis: true }
          ]
        });
      } else if (charge.charge_min != null && charge.charge_max != null) {
        note =
          "This bank keeps the fee between " +
          formatInr(Number(charge.charge_min)) +
          " and " +
          formatInr(Number(charge.charge_max)) +
          ".";
      } else if (charge.charge_min != null) {
        note = "Bank floor: " + formatInr(Number(charge.charge_min)) + ".";
      } else if (charge.charge_max != null) {
        note = "Bank ceiling: " + formatInr(Number(charge.charge_max)) + ".";
      }
    } else if (Number.isFinite(fixed)) {
      bars.push({
        step: 1,
        label: "Flat processing fee",
        note: "One-time fee to process your loan, paid at the time of sanctioning.",
        value: formatInr(fixed)
      });
    } else if (charge.percentage === 0) {
      bars.push({
        step: 1,
        label: "Processing fee",
        note: "This bank’s share is 0%.",
        value: formatInr(0),
        lines: [
          { k: "num", t: formatInr(row.loanAmount) },
          { k: "op", t: "× 0%" },
          { k: "rule" },
          { k: "result", t: formatInr(0), emphasis: true }
        ]
      });
    } else {
      return calcStoryHtml(
        formatInr(0),
        "Processing fee on this loan is",
        "",
        ""
      );
    }

    const extraNotes = [
      "Fees non-refundable.",
      note
    ].filter(Boolean);

    return (
      calcStoryHtml(
        formatInr(row.processingFee),
        "Processing fee on this loan is",
        mathBarStackHtml(bars, { stackClass: "hlc-math-bars--steps" }),
        "",
        { workTitle: CALC_CHARGES_TITLE }
      ) + (extraNotes.length ? storyNote(extraNotes.join(" ")) : "")
    );
  }

function propertyCheckChargeNote(name) {
  var notes = {
    "Legal and technical":
      "Fee to check the property is legally clear and built as approved.",
    "Title search report":
      "Fee to check property titles are correct.",
    "Valuation":
      "Fee to value the property — paid to the bank’s valuer."
  };
  return notes[name] || "Bank check on the property before sanction.";
}

  function propertyCheckChargeCalculationHtml(row) {
    const lines = row.propertyCheckChargeRows || [];
    const itemBars = lines.map(function (line, index) {
      return {
        step: index + 1,
        label: line.name || "Charge",
        note: propertyCheckChargeNote(line.name || ""),
        value: formatInr(line.amount),
        lines: [{ k: "result", t: formatInr(line.amount), emphasis: true }]
      };
    });
    const bars = additiveStackBars(
      itemBars,
      "Total",
      formatInr(row.propertyCheckCharges),
      "GST extra."
    );
    return (
      calcStoryHtml(
        formatInr(row.propertyCheckCharges),
        "Property check charges on this loan are",
        mathBarStackHtml(bars, { stackClass: "hlc-math-bars--additive" }),
        "",
        { workTitle: CALC_CHARGES_TITLE }
      ) +
      storyNote(
        "Bank runs these checks. Your own report is not accepted. GST extra."
      )
    );
  }

  function governmentChargeShortNote(charge, loanAmount) {
    const parts = governmentChargeAmountParts(charge, loanAmount);
    const method = normalizeText(charge.calculation_method);
    const name = String(charge.charge_name || "");
    const pct =
      charge.percentage != null && Number.isFinite(Number(charge.percentage))
        ? formatPctPlain(Number(charge.percentage) * 100)
        : "";
    const maxBracket =
      charge.max_amount_inr != null &&
      Number.isFinite(Number(charge.max_amount_inr))
        ? " (max " + formatInr(Number(charge.max_amount_inr)) + ")"
        : "";
    const minBracket =
      charge.min_amount_inr != null &&
      Number.isFinite(Number(charge.min_amount_inr)) &&
      !maxBracket
        ? " (min " + formatInr(Number(charge.min_amount_inr)) + ")"
        : "";

    if (name === "CERSAI Security Interest Creation") {
      return "Flat fee so no duplicate loan can be registered on this property.";
    }
    if (name === "MODT Stamp Duty") {
      return pct
        ? pct + " of loan to register the home loan with the state."
        : "Stamp duty to register the home loan with the state.";
    }
    if (name === "Notice of Intimation Filing Fee") {
      return "Flat fee to file the mortgage notice with the state.";
    }
    if (name === "Notice of Intimation Registration Fee") {
      return pct
        ? pct +
            " of loan to register the home loan agreement" +
            maxBracket +
            minBracket +
            "."
        : "Fee to register the home loan agreement" + maxBracket + minBracket + ".";
    }
    if (name === "Further Charge Stamp Duty") {
      return pct
        ? "Stamp duty to register a top-up loan on the property (" +
            pct +
            " of loan)."
        : "Stamp duty to register a top-up loan on the property.";
    }
    if (method === "percentage" && pct) {
      return pct + " of this loan" + maxBracket + minBracket + ".";
    }
    if (method === "flat") {
      return "Flat fee" + maxBracket + minBracket + ".";
    }
    if (parts.gstRate > 0) {
      return "Government fee.";
    }
    return "";
  }

function governmentChargeName(chargeName) {
    const names = {
      "MODT Stamp Duty": "MODT stamp duty",
      "Notice of Intimation Registration Fee": "Notice of Intimation registration",
      "Notice of Intimation Filing Fee": "Notice of Intimation filing",
      "CERSAI Security Interest Creation": "CERSAI creation"
    };
    return names[chargeName] || chargeName;
  }

  function governmentChargeSheetLines(charge, loanAmount) {
    const parts = governmentChargeAmountParts(charge, loanAmount);
    const method = normalizeText(charge.calculation_method);
    const lines = [];
    if (method === "percentage") {
      const beforeLimits = loanAmount * Number(charge.percentage);
      const minApplied =
        charge.min_amount_inr != null &&
        beforeLimits < Number(charge.min_amount_inr);
      const maxApplied =
        charge.max_amount_inr != null &&
        beforeLimits > Number(charge.max_amount_inr);
      lines.push(
        { k: "num", t: formatInr(loanAmount) },
        {
          k: "op",
          t: "× " + formatPctPlain(Number(charge.percentage) * 100)
        },
        { k: "rule" },
        { k: "result", t: formatInr(beforeLimits) }
      );
      if (minApplied) {
        lines.push(
          { k: "op", t: "min " + formatInr(Number(charge.min_amount_inr)) },
          { k: "rule" },
          { k: "result", t: formatInr(Number(charge.min_amount_inr)) }
        );
      } else if (maxApplied) {
        lines.push(
          { k: "op", t: "max " + formatInr(Number(charge.max_amount_inr)) },
          { k: "rule" },
          { k: "result", t: formatInr(Number(charge.max_amount_inr)) }
        );
      }
      if (parts.gstRate > 0) {
        lines.push(
          { k: "op", t: "+ " + formatPctPlain(parts.gstRate * 100) + " GST" },
          { k: "rule" },
          { k: "result", t: formatInr(parts.total), emphasis: true }
        );
      } else {
        lines[lines.length - 1].emphasis = true;
        lines[lines.length - 1].t = formatInr(parts.total);
      }
    } else if (parts.base != null) {
      lines.push({ k: "num", t: formatInr(parts.base) });
      if (parts.gstRate > 0) {
        lines.push(
          { k: "op", t: "+ " + formatPctPlain(parts.gstRate * 100) + " GST" },
          { k: "rule" },
          { k: "result", t: formatInr(parts.total), emphasis: true }
        );
      } else {
        lines[0].emphasis = true;
      }
    }
    return lines;
  }

  function governmentChargeCalculationHtml(row) {
    const query = readQuery();
    const charges = listApplicableGovernmentCharges(
      (state.dataset && state.dataset.government_charges) || [],
      query,
      row.loanAmount,
      DEFAULT_JURISDICTION_STATE
    );
    const itemBars = charges.map(function (charge, index) {
      const parts = governmentChargeAmountParts(charge, row.loanAmount);
      return {
        step: index + 1,
        label: governmentChargeName(charge.charge_name),
        note: governmentChargeShortNote(charge, row.loanAmount),
        value: formatInr(parts.total),
        lines: governmentChargeSheetLines(charge, row.loanAmount)
      };
    });
    const bars = additiveStackBars(
      itemBars,
      "Total",
      formatInr(row.governmentCharges)
    );
    return calcStoryHtml(
      formatInr(row.governmentCharges),
      "State charges on this loan are",
      mathBarStackHtml(bars, { stackClass: "hlc-math-bars--additive" }),
      "",
      { workTitle: CALC_CHARGES_TITLE }
    );
  }

  function missedEmiWalkHtml(row) {
    const walk = missedEmiMonthTotal(
      row.overdueCharge,
      row.emiBounceCharge,
      row.emi,
      row.roiDecimal,
      row.loanAmount,
      row.tenureMonths
    );
    const overdue = walk.overdue;
    const bounce = walk.bounce;
    const overdueRupee = formatInr(
      overdue.rawExtra != null ? overdue.rawExtra : overdue.extra
    );
    const extraWorking =
      overdue.perAnnum || overdue.kind === "row_rate"
        ? [
            { k: "num", t: formatInr(overdue.overdueAmount) },
            {
              k: "op",
              t: "× " + formatPctPlain(overdue.yearPct) + " ÷ 12 months"
            },
            { k: "rule" },
            { k: "result", t: overdueRupee, emphasis: true }
          ]
        : [{ k: "result", t: overdueRupee, emphasis: true }];
    let overdueNote = "Late-payment charge on the missed EMI.";
    if (overdue.kind === "row_rate") {
      overdueNote =
        "The bank uses this loan’s yearly rate on the missed EMI, for this month.";
    } else if (overdue.slabSentence) {
      overdueNote = overdue.slabSentence;
    } else if (overdue.kind === "slab") {
      overdueNote = "The bank’s overdue extra for this amount — based on a slab rate.";
    }
    if (overdue.ruleNote) {
      overdueNote =
        overdueNote === "The bank’s overdue charge on this missed EMI."
          ? overdue.ruleNote
          : overdueNote + " " + overdue.ruleNote;
    }
    let bars = [
      {
        step: 1,
        label: "This EMI",
        note: "The EMI that did not get paid.",
        value: formatInr(overdue.overdueAmount),
        lines: [{ k: "num", t: formatInr(overdue.overdueAmount) }]
      },
      {
        step: 2,
        label: "Overdue charge",
        note: overdueNote,
        value: overdueRupee,
        lines: extraWorking
      }
    ];
    if (overdue.usedFloor) {
      bars.push({
        step: bars.length + 1,
        label: "Bank minimum",
        note: "Bank minimum overdue charge (shown in maths).",
        value: formatInr(overdue.extra),
        lines: [
          { k: "num", t: overdueRupee },
          { k: "op", t: "or " + formatInr(overdue.extra) },
          { k: "rule" },
          { k: "result", t: formatInr(overdue.extra), emphasis: true }
        ]
      });
    }
    if (overdue.graceDays) {
      bars.push({
        step: bars.length + 1,
        label: "Grace",
        note:
          overdue.graceDays +
          " days before overdue extra starts. A full month late is past that.",
        value: overdue.graceDays + " days"
      });
    }
    if (bounce.total > 0) {
      bars.push({
        step: bars.length + 1,
        label: "Bounce charge",
        joinOp: "+",
        note:
          bounce.slabSentence ||
          "When auto-debit of the EMI fails.",
        value:
          bounce.gst > 0
            ? formatInr(bounce.extra) + " + " + formatInr(bounce.gst) + " GST"
            : formatInr(bounce.extra),
        lines:
          bounce.gst > 0
            ? [
                { k: "num", t: formatInr(bounce.extra) },
                { k: "op", t: "+ " + formatInr(bounce.gst) + " GST" },
                { k: "rule" },
                { k: "result", t: formatInr(bounce.total), emphasis: true }
              ]
            : [{ k: "result", t: formatInr(bounce.extra), emphasis: true }]
      });
      bars.push({
        step: bars.length + 1,
        label: "Total",
        isTotal: true,
        joinOp: "=",
        note: "",
        value: formatInr(walk.total),
        lines: [{ k: "result", t: formatInr(walk.total), emphasis: true }]
      });
    }
    const stackClass =
      bounce.total > 0 ? "hlc-math-bars--additive" : "hlc-math-bars--steps";
    const aboutEmi =
      walk.total >= row.emi && row.emi > 0
        ? "One missed EMI here costs about another EMI in charges. A slightly cheaper rate does not cancel that."
        : "";
    const notes = aboutEmi;
    const missedLead =
      bounce.total > 0
        ? "If you miss this EMI, overdue and bounce charges this month are"
        : "If you miss this EMI, overdue charges this month are";
    return (
      calcStoryHtml(
        formatInr(walk.total),
        missedLead,
        mathBarStackHtml(bars, { stackClass: stackClass }),
        "",
        { workTitle: CALC_CHARGES_TITLE }
      ) + (notes ? '<p class="hlc-story-note">' + escapeHtml(notes) + "</p>" : "")
    );
  }

  function overdueCalculationHtml(row) {
    return missedEmiWalkHtml(row);
  }

  function bounceCalculationHtml(row) {
    return missedEmiWalkHtml(row);
  }

function rateChangeMethodDescription(method) {
  if (method === RATE_CHANGE_METHOD_REPRICE) {
    return "reprice the loan";
  }
  if (method === RATE_CHANGE_METHOD_BENCHMARK) {
    return "switch rate benchmark";
  }
  return "switch between floating and fixed rate";
}

  function rateChangeCalculationHtml(row) {
    const seed = rateChangeChargeForMethod(row, state.rateChangeMethod);
    const slabs = row.rateChangeChargeSlabs || [];
    const charge = resolveApplicableCharge(
      slabs,
      seed,
      chargeCaseFromRow(row),
      row.loanAmount
    );
    const amount = computeProcessingFee(charge, row.loanAmount);
    const resultText =
      amount != null && Number.isFinite(amount)
        ? formatInr(amount)
        : formatChargeDisplayText(formatRateChangeChargeDisplay(charge));
    const bars = [
      {
        step: 1,
        label: "Your outstanding loan",
        note: "Fee is a % of what you still owe.",
        value: formatInr(row.loanAmount),
        lines: [{ k: "num", t: formatInr(row.loanAmount) }]
      },
      {
        step: 2,
        label: "Charge to change the rate",
        note:
          applicableSlabSentence(charge, chargeCaseFromRow(row)) ||
          "Bank fee to " + rateChangeMethodDescription(state.rateChangeMethod) + ".",
        value: resultText,
        lines:
          amount != null &&
          Number.isFinite(amount) &&
          charge &&
          charge.percentage != null &&
          Number.isFinite(Number(charge.percentage))
            ? [
                { k: "num", t: formatInr(row.loanAmount) },
                { k: "op", t: "× " + formatPctPlain(Number(charge.percentage) * 100) },
                { k: "rule" },
                { k: "result", t: resultText, emphasis: true }
              ]
            : amount != null && Number.isFinite(amount)
              ? [
                  { k: "num", t: formatInr(row.loanAmount) },
                  { k: "rule" },
                  { k: "result", t: resultText, emphasis: true }
                ]
              : [{ k: "result", t: resultText, emphasis: true }]
      }
    ];
    return calcStoryHtml(
      resultText,
      "Charge to change the rate is",
      mathBarStackHtml(bars, { stackClass: "hlc-math-bars--steps" }),
      "",
      { workTitle: CALC_CHARGES_TITLE }
    );
  }

  function prepaymentCalculationHtml(row) {
    const charge = prepayChargeForMethod(row, state.prepaymentMethod);
    if (!charge || isPrepaymentNotCharged(charge)) {
      return (
        calcStoryHtml(
          formatInr(0),
          "Prepayment charge on this loan is",
          "",
          ""
        ) +
        '<p class="hlc-story-note">' +
        floatingPrepayNoteHtml() +
        "</p>"
      );
    }
    const pct =
      charge.percentage != null && Number.isFinite(Number(charge.percentage))
        ? Number(charge.percentage) * 100
        : null;
    var resultLabel = pct != null
      ? formatPctPlain(pct)
      : formatChargeDisplayText(formatPrepaymentChargeDisplay(charge));

    var prepayBarsHtml = "";
    if (pct != null) {
      var exampleCharge = row.loanAmount * (pct / 100);
      prepayBarsHtml = mathBarStackHtml(
        [
          {
            step: 1,
            label: "On your current loan amount",
            note: "Example if you prepaid the full loan today. Actual fee depends on amount prepaid.",
            value: formatInr(exampleCharge),
            lines: [
              { k: "num", t: formatInr(row.loanAmount) },
              { k: "op", t: "× " + formatPctPlain(pct) },
              { k: "rule" },
              { k: "result", t: formatInr(exampleCharge), emphasis: true }
            ]
          }
        ],
        { stackClass: "hlc-math-bars--steps" }
      );
    }

    return (
      calcStoryHtml(
        resultLabel,
        "This bank’s prepayment charge is",
        prepayBarsHtml,
        ""
      ) + storyNote("Rupees depend on how much you prepay.")
    );
  }

  const CALC_DRAWER_FOOT =
    '<p class="hlc-drawer-foot">These figures are a guide. The bank decides the final terms. You pick.</p>';

  function chargeDetailsSectionHtml(row, calculationKey) {
    const details = chargeCalculationDetailsHtml(row, calculationKey);
    if (!details) return "";
    return '<div class="hlc-calc-details">' + details + "</div>";
  }

  function openCalcDrawer(title, subtitle, calcHtml, extra) {
    const packed = extra || {};
    showDrawer(
      title,
      subtitle,
      calcDrawerBodyHtml(calcHtml, {
        calcTitle: packed.calcTitle,
        detailsHtml: packed.detailsHtml || "",
        noteLines: packed.noteLines || [],
        footHtml: CALC_DRAWER_FOOT
      }),
      { keepHeading: true }
    );
  }

  function openCalculation(id, calculationKey) {
    const row = state.rows.find(function (entry) {
      return entry.id === id;
    });
    if (!row) return;
    if (
      row[calculationKey] &&
      typeof row[calculationKey] === "object" &&
      chargeDisplayIsUnpublished(row[calculationKey])
    ) {
      return;
    }

    const bankSub = row.bankName + " · " + (row.scheme || "");

    if (calculationKey === "loanAmount") {
      openCalcDrawer("Loan amount", bankSub, loanAmountCalculationHtml(row), {
        calcTitle: CALC_HOW_TITLE
      });
      return;
    }

    if (calculationKey === "emi") {
      openCalcDrawer("EMI", bankSub, emiCalculationHtml(row), {
        calcTitle: CALC_HOW_TITLE
      });
      return;
    }

    if (calculationKey === "processingFee") {
      openCalcDrawer(
        "Processing fee",
        bankSub,
        processingFeeCalculationHtml(row),
        { calcTitle: CALC_CHARGES_TITLE }
      );
      return;
    }

    if (calculationKey === "propertyCheckCharges") {
      openCalcDrawer(
        "Property check charges",
        bankSub,
        propertyCheckChargeCalculationHtml(row),
        { calcTitle: CALC_CHARGES_TITLE }
      );
      return;
    }

    if (calculationKey === "governmentCharges") {
      const note = formatOptionalGovernmentChargesNote(
        (state.dataset && state.dataset.government_charges) || [],
        readQuery(),
        row.loanAmount,
        DEFAULT_JURISDICTION_STATE
      );
      openCalcDrawer(
        "Government charges",
        "Loan amount " + formatInr(row.loanAmount),
        governmentChargeCalculationHtml(row),
        {
          calcTitle: CALC_CHARGES_TITLE,
          noteLines: note ? [note] : []
        }
      );
      return;
    }

    if (calculationKey === "overdueChargeDisplay" || calculationKey === "emiBounceChargeDisplay") {
      openCalcDrawer(
        calculationKey === "emiBounceChargeDisplay" ? "EMI bounce" : "Overdue charge",
        bankSub,
        missedEmiWalkHtml(row),
        {
          calcTitle: CALC_CHARGES_TITLE,
          detailsHtml: chargeDetailsSectionHtml(row, calculationKey),
          noteLines: chargeDrawerNoteLines(row, calculationKey)
        }
      );
      return;
    }

    if (calculationKey === "rateChangeChargeDisplay") {
      openCalcDrawer(
        "Rate change charge",
        bankSub,
        rateChangeCalculationHtml(row),
        {
          calcTitle: CALC_CHARGES_TITLE,
          detailsHtml: chargeDetailsSectionHtml(row, calculationKey),
          noteLines: chargeDrawerNoteLines(row, calculationKey)
        }
      );
      return;
    }

    if (calculationKey === "prepaymentChargeDisplay") {
      openCalcDrawer(
        "Prepayment charge",
        bankSub,
        prepaymentCalculationHtml(row),
        { calcTitle: CALC_CHARGES_TITLE }
      );
      return;
    }
  }

  function drawerSection(title, pairs, options) {
    return drawerDiscloseHtml(
      title,
      '<div class="hlc-drawer-card">' +
        pairs
          .map(function (pair) {
            return (
              '<div class="hlc-kv"><span class="hlc-kv-label">' +
              escapeHtml(pair[0]) +
              '</span><span class="hlc-kv-value">' +
              escapeHtml(pair[1]) +
              "</span></div>"
            );
          })
          .join("") +
        "</div>",
      options
    );
  }

  function drawerFeeEntryAmountHtml(entry) {
    return (
      '<span class="hlc-fee-amount">' +
      escapeHtml(entry.amount || "—") +
      "</span>" +
      (entry.meta
        ? '<span class="hlc-fee-meta">' + escapeHtml(entry.meta) + "</span>"
        : "")
    );
  }

  function drawerFeeWhatHtml(entry) {
    return (
      '<span class="hlc-fee-what">' +
      escapeHtml(entry.what || "") +
      "</span>" +
      (entry.detail
        ? '<span class="hlc-fee-detail">' + escapeHtml(entry.detail) + "</span>"
        : "")
    );
  }

  function drawerFeeSlabEntryHtml(entry) {
    return renderDrawerSlabTableBlock({
      title: "",
      leftHeader: entry.slabLeftHeader || "Particulars",
      rightHeader:
        entry.slabRightHeader || chargeColumnTitle(entry.gstApplicable),
      chargeHeaderUnit: entry.chargeHeaderUnit || "",
      gstApplicable: entry.gstApplicable,
      rows: entry.slabRows || [],
      notes: []
    });
  }

  function drawerFeeMatrixEntryHtml(entry) {
    const rows = entry.matrixRows || [];
    const showRowLabels = rows.some(function (row) {
      return String(row.label || "").trim();
    });
    return renderDrawerSlabTableBlock({
      title: "",
      leftHeader: showRowLabels
        ? entry.slabLeftHeader || "Particulars"
        : "",
      chargeHeaderUnit: entry.chargeHeaderUnit || "",
      gstApplicable: entry.gstApplicable,
      kind: "area-matrix",
      matrixColumns: entry.matrixColumns || [],
      matrixRows: rows,
      notes: []
    });
  }

  function drawerFeeSimpleTableHtml(entries) {
    if (!entries || !entries.length) return "";
    const anyGst = entries.some(function (entry) {
      return entry.gstApplicable;
    });
    const sharedUnit =
      entries[0] && entries[0].chargeHeaderUnit
        ? entries[0].chargeHeaderUnit
        : "";
    const showCustomerType = entries.some(function (entry) {
      return String(entry.customerType || "").trim();
    });
    const sharedWhat = String((entries[0] && entries[0].what) || "").trim();
    const detailsOnlyParticulars =
      !showCustomerType &&
      !!sharedWhat &&
      entries.length > 1 &&
      entries.every(function (entry) {
        return (
          String(entry.what || "").trim() === sharedWhat &&
          !!String(entry.detail || "").trim()
        );
      });
    const showParticulars = !entries.every(function (entry) {
      return !String(entry.detail || "").trim();
    })
      ? true
      : !showCustomerType;
    const headLabels = []
      .concat(showParticulars ? ["Particulars"] : [])
      .concat(showCustomerType ? ["Customer type"] : [])
      .concat([chargeColumnTitle(anyGst)]);
    const bodyRows = entries
      .map(function (entry) {
        const name = String(entry.what || "").trim();
        const detail = String(entry.detail || "").trim();
        const customer = String(entry.customerType || "").trim();
        let cells = "";
        if (showParticulars) {
          if (showCustomerType || detailsOnlyParticulars) {
            cells +=
              "<td>" +
              (detail
                ? '<span class="hlc-fee-particular-name">' +
                  escapeHtml(detail) +
                  "</span>"
                : "—") +
              "</td>";
          } else {
            const nameHtml =
              '<span class="hlc-fee-particular-name">' +
              escapeHtml(name || detail || "—") +
              "</span>";
            const detailHtml =
              detail && name && detail !== name
                ? '<span class="hlc-fee-detail">' +
                  escapeHtml(detail) +
                  "</span>"
                : "";
            cells += "<td>" + nameHtml + detailHtml + "</td>";
          }
        }
        if (showCustomerType) {
          cells +=
            '<td class="hlc-fee-col-customer">' +
            '<span class="hlc-fee-particular-name">' +
            escapeHtml(customer || "—") +
            "</span></td>";
        }
        cells += "<td>" + drawerFeeEntryAmountHtml(entry) + "</td>";
        return "<tr>" + cells + "</tr>";
      })
      .join("");
    return (
      '<div class="hlc-drawer-card hlc-slab-card">' +
      '<table class="hlc-slab-table hlc-fee-table' +
      (showCustomerType ? " hlc-fee-table--customer" : "") +
      '">' +
      drawerFeeTableShellHtml(headLabels, { unit: sharedUnit }, bodyRows) +
      "</table></div>"
    );
  }

  function feeEntryAmountIsUnpublished(entry) {
    const amount = String((entry && entry.amount) || "")
      .replace(/\u2014/g, "—")
      .trim();
    if (!amount || amount === "—") return true;
    return isChargeNotPublishedLabel(amount);
  }

  function feeSectionIsUnpublishedOnly(section) {
    if (!section || !section.entries || !section.entries.length) return false;
    if (
      section.entries.some(function (entry) {
        return entry.kind === "slab-table" || entry.kind === "area-matrix";
      })
    ) {
      return false;
    }
    if ((section.notes || []).length) return false;
    return section.entries.every(feeEntryAmountIsUnpublished);
  }

  function drawerFeeUnpublishedRowHtml(label) {
    return (
      '<div class="hlc-fee-flat-row">' +
      '<span class="hlc-fee-flat-name">' +
      escapeHtml(label || "Charge") +
      "</span>" +
      '<span class="hlc-fee-flat-value">' +
      escapeHtml(CHARGE_NOT_PUBLISHED_BY_BANK) +
      "</span>" +
      "</div>"
    );
  }

  function drawerFeeChargeBlockHtml(section) {
    if (!section || !section.entries || !section.entries.length) return "";
    if (section.label && feeSectionIsUnpublishedOnly(section)) {
      return drawerFeeUnpublishedRowHtml(section.label);
    }
    const notesHtml = (section.notes || [])
      .map(function (note) {
        return '<p class="hlc-fee-note">' + escapeHtml(note) + "</p>";
      })
      .join("");
    const simpleEntries = section.entries.filter(function (entry) {
      return entry.kind !== "slab-table" && entry.kind !== "area-matrix";
    });
    const specialEntries = section.entries.filter(function (entry) {
      return entry.kind === "slab-table" || entry.kind === "area-matrix";
    });
    const body =
      (simpleEntries.length ? drawerFeeSimpleTableHtml(simpleEntries) : "") +
      specialEntries
        .map(function (entry) {
          return entry.kind === "area-matrix"
            ? drawerFeeMatrixEntryHtml(entry)
            : drawerFeeSlabEntryHtml(entry);
        })
        .join("") +
      notesHtml;
    if (!section.label) {
      return '<div class="hlc-fee-charge-block">' + body + "</div>";
    }
    return drawerDiscloseHtml(section.label, body, { nested: true });
  }

  function orderFeeSectionsPublishedFirst(sections) {
    const published = [];
    const unpublished = [];
    (sections || []).forEach(function (section) {
      if (feeSectionIsUnpublishedOnly(section)) unpublished.push(section);
      else published.push(section);
    });
    return published.concat(unpublished);
  }

  function drawerFeeCategoryHtml(section) {
    return drawerFeeChargeBlockHtml(section);
  }

  function drawerFeeSections(title, sections, options) {
    const settings = options || {};
    if ((!sections || !sections.length) && settings.hideWhenEmpty) return "";
    if (!sections || !sections.length) {
      return drawerSection(title, [["Applicable charges", "None listed"]]);
    }
    const ordered = orderFeeSectionsPublishedFirst(sections);
    const gstNote =
      settings.showGstNote && feeSectionsHaveGst(ordered)
        ? '<p class="hlc-fee-note">' +
          escapeHtml(GST_APPLICABLE_FOOTNOTE) +
          "</p>"
        : "";
    const inner =
      '<div class="hlc-fee-sections">' +
      ordered
        .map(function (section) {
          return drawerFeeCategoryHtml(section);
        })
        .join("") +
      gstNote +
      "</div>";
    if (!title) return inner;
    return drawerDiscloseHtml(title, inner);
  }

  function drawerSlabTable(leftHeader, rightHeader, pairs) {
    return drawerDiscloseHtml(
      leftHeader + " · " + rightHeader,
      '<div class="hlc-drawer-card hlc-slab-card">' +
        '<table class="hlc-slab-table">' +
        '<thead><tr><th scope="col">' +
        escapeHtml(leftHeader) +
        '</th><th scope="col">' +
        escapeHtml(rightHeader) +
        "</th></tr></thead><tbody>" +
        pairs
          .map(function (pair) {
            return (
              "<tr><td>" +
              escapeHtml(pair[0]) +
              "</td><td>" +
              escapeHtml(pair[1]) +
              "</td></tr>"
            );
          })
          .join("") +
        "</tbody></table></div>"
    );
  }

  function closeDrawer() {
    el.drawer.classList.remove("open");
    el.drawerBackdrop.classList.remove("open");
    el.drawer.setAttribute("aria-hidden", "true");
    setTimeout(function () {
      if (!el.drawer.classList.contains("open")) el.drawerBackdrop.hidden = true;
    }, 900);
  }

  async function runMatch(matchOpts) {
    if (!state.dataset) return;
    if (!primaryFieldsAreComplete()) {
      root.setAttribute("aria-busy", "false");
      updateLoanHint();
      return;
    }
    root.setAttribute("aria-busy", "true");
    const query = readQuery();
    state.rows = await matchOffers(state.dataset, query, state.engine);
    updateLoanHint();
    updateIncomeBasisNote();
    updateIntelligencePanel();
    applyPrepaymentMethodToRows(state.rows, state.prepaymentMethod);
    applyRateChangeMethodToRows(state.rows, state.rateChangeMethod);
    syncSelectedSnapshotsFromRows(state.rows);
    if (matchOpts && matchOpts.resetShowMore) {
      state.showAllBanks = false;
    }
    root.setAttribute("aria-busy", "false");
    renderTable({ highlightDeltas: true });
  }

  function withResultsFade(updateFn, mode) {
    const surface =
      (el.scroll && el.scroll.closest(".hlc-table-wrap")) ||
      document.querySelector(".hlc-table-wrap");
    const className =
      mode === "metrics" ? "is-sel-fading-metrics" : "is-sel-fading-rows";
    if (window.ShroffinSelectionFade && window.ShroffinSelectionFade.run) {
      return window.ShroffinSelectionFade.run(surface, updateFn, {
        className: className,
      });
    }
    return Promise.resolve(typeof updateFn === "function" ? updateFn() : undefined);
  }

  function scheduleMatch(options) {
    clearTimeout(state.matchTimer);
    persistExploreDraft();
    if (!primaryFieldsAreComplete()) {
      root.setAttribute("aria-busy", "false");
      updateLoanHint();
      return;
    }
    var isEvent = options && typeof options.preventDefault === "function";
    var opts = isEvent
      ? { fade: false, resetShowMore: true }
      : Object.assign({ fade: false, resetShowMore: false }, options || {});
    var fade = !!opts.fade;
    state.matchTimer = setTimeout(function () {
      var run = function () {
        return runMatch({ resetShowMore: !!opts.resetShowMore }).catch(function (error) {
          console.error(error);
          showToast("Could not match banks. Refresh and try again.");
          root.setAttribute("aria-busy", "false");
        });
      };
      if (fade) withResultsFade(run, "rows");
      else run();
    }, MATCH_DEBOUNCE_MS);
  }

  function rememberSelectedRow(row) {
    if (!row || row.id == null) return;
    var cloned = cloneJson(row);
    if (!cloned) return;
    delete cloned._outsideFilters;
    cloned.bankKind =
      cloned.bankKind ||
      (cloned.offer && cloned.offer.bank_type) ||
      null;
    state.selectedById.set(row.id, cloned);
  }

  function forgetSelectedId(id) {
    state.selected.delete(id);
    state.selectedById.delete(id);
  }

  function syncSelectedSnapshotsFromRows(rows) {
    (rows || []).forEach(function (row) {
      if (row && row.id != null && state.selected.has(row.id)) {
        rememberSelectedRow(row);
      }
    });
  }

  function findRowForSelection(id) {
    var i;
    var rows = state.rows || [];
    for (i = 0; i < rows.length; i++) {
      if (rows[i] && rows[i].id === id) return rows[i];
    }
    return state.selectedById.get(id) || null;
  }

  /** Pinned orphans first, then sorted matches. Orphans carry `_outsideFilters`. */
  function buildDisplayRows(matchedSorted) {
    var matched = matchedSorted || [];
    var matchedIds = new Set();
    matched.forEach(function (r) {
      if (r && r.id != null) matchedIds.add(r.id);
    });
    var orphans = [];
    state.selected.forEach(function (id) {
      if (matchedIds.has(id)) return;
      var snap = state.selectedById.get(id);
      if (!snap) return;
      var pinned = cloneJson(snap);
      if (!pinned) return;
      pinned._outsideFilters = true;
      orphans.push(pinned);
    });
    return orphans.concat(matched);
  }

  function compactSelectedSnapshot(row) {
    if (!row || row.id == null) return null;
    return {
      id: row.id,
      bankName: row.bankName,
      bankKey: row.bankKey != null ? row.bankKey : null,
      bankKind:
        row.bankKind ||
        (row.offer && row.offer.bank_type) ||
        null,
      scheme: row.scheme != null ? row.scheme : null,
      rateType: row.rateType != null ? row.rateType : null,
      facilityLabel: row.facilityLabel != null ? row.facilityLabel : null,
      effectiveRoiPct: row.effectiveRoiPct,
      loanAmount: row.loanAmount,
      tenureLabel: row.tenureLabel != null ? row.tenureLabel : "",
      emi: row.emi,
      offer: row.offer && typeof row.offer === "object" ? row.offer : null
    };
  }

  function toggleSelect(id) {
    if (state.selected.has(id)) {
      forgetSelectedId(id);
    } else {
      state.selected.add(id);
      rememberSelectedRow(findRowForSelection(id));
    }
    persistExploreDraft();
    renderTable();
  }

  function toggleSelectAllVisible() {
    var visibleRows = visibleBankRows();
    if (!visibleRows.length) return;
    if (selectAllCheckState(visibleRows) === "all") {
      visibleRows.forEach(function (row) {
        forgetSelectedId(row.id);
      });
    } else {
      visibleRows.forEach(function (row) {
        state.selected.add(row.id);
        rememberSelectedRow(row);
      });
    }
    persistExploreDraft();
    renderTable();
  }

  function setColumnGroup(group) {
    if (state.group === group) return;
    state.group = group;
    var activeTab = null;
    document.querySelectorAll(".hlc-column-tab[data-group]").forEach(function (tab) {
      if (tab.getAttribute("data-group") === group) {
        tab.setAttribute("aria-current", "page");
        tab.setAttribute("aria-selected", "true");
        activeTab = tab;
      } else {
        tab.removeAttribute("aria-current");
        tab.setAttribute("aria-selected", "false");
      }
    });
    if (activeTab) {
      var scroller = activeTab.closest(".hlc-column-tabs-scroller");
      if (scroller) {
        var track = activeTab.closest(".hlc-column-tabs");
        var tabRect = activeTab.getBoundingClientRect();
        var scrollerRect = scroller.getBoundingClientRect();
        var trackRect = track ? track.getBoundingClientRect() : tabRect;
        var siblings = track
          ? track.querySelectorAll(".hlc-column-tab")
          : [];
        var isFirst = siblings.length > 0 && siblings[0] === activeTab;
        var isLast =
          siblings.length > 0 && siblings[siblings.length - 1] === activeTab;
        /*
         * Last/first tabs must bring the segment track’s rounded end into view,
         * not only the label — otherwise Other charges looks cut on the right.
         */
        var rightEdge = isLast ? trackRect.right : tabRect.right;
        var leftEdge = isFirst ? trackRect.left : tabRect.left;
        var pad = 10;
        if (rightEdge > scrollerRect.right - pad) {
          scroller.scrollLeft += rightEdge - scrollerRect.right + pad;
        } else if (leftEdge < scrollerRect.left + pad) {
          scroller.scrollLeft -= scrollerRect.left - leftEdge + pad;
        }
      }
    }
    withResultsFade(function () {
      renderTable();
    }, "metrics");
  }

  document.querySelectorAll(".hlc-column-tab[data-group]").forEach(function (tab) {
    tab.addEventListener("click", function () {
      setColumnGroup(tab.getAttribute("data-group"));
    });
  });

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function expandAllBanks() {
    if (state.showAllBanks) return;

    const wrap =
      (el.showMoreBtn && el.showMoreBtn.closest(".hlc-table-wrap")) ||
      (el.scroll && el.scroll.closest(".hlc-table-wrap"));

    if (!wrap || prefersReducedMotion()) {
      state.showAllBanks = true;
      renderTable();
      return;
    }

    const fromHeight = Math.round(wrap.getBoundingClientRect().height);
    wrap.style.height = fromHeight + "px";
    wrap.style.overflow = "hidden";
    wrap.classList.add("is-expanding-banks");

    state.showAllBanks = true;
    renderTable();

    const revealedRows = el.body
      ? Array.prototype.slice.call(
          el.body.querySelectorAll("tr.hlc-selectable-row")
        ).slice(INITIAL_VISIBLE_BANKS)
      : [];
    revealedRows.forEach(function (row) {
      row.classList.add("is-bank-reveal");
    });

    const toHeight = Math.round(wrap.scrollHeight);
    const expandMs = 1500;
    const expandEase = "cubic-bezier(0.22, 1, 0.36, 1)";
    let expandAnim = null;
    let finished = false;

    function finishExpand() {
      if (finished) return;
      finished = true;
      wrap.removeEventListener("transitionend", onExpandEnd);
      if (expandAnim) {
        try {
          expandAnim.cancel();
        } catch (err) {
          /* ignore */
        }
        expandAnim = null;
      }
      wrap.classList.remove("is-expanding-banks");
      wrap.style.height = "";
      wrap.style.overflow = "";
      revealedRows.forEach(function (row) {
        row.classList.remove("is-bank-reveal");
      });
    }

    function onExpandEnd(event) {
      if (event.target !== wrap || event.propertyName !== "height") return;
      finishExpand();
    }

    if (toHeight <= fromHeight) {
      finishExpand();
      return;
    }

    /*
     * Paint the locked start height first, then grow. A single rAF often sets
     * both heights before paint, so the browser skips the transition and snaps.
     */
    if (typeof wrap.animate === "function") {
      expandAnim = wrap.animate(
        [{ height: fromHeight + "px" }, { height: toHeight + "px" }],
        { duration: expandMs, easing: expandEase, fill: "forwards" }
      );
      expandAnim.onfinish = function () {
        finishExpand();
      };
    } else {
      void wrap.offsetHeight;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          wrap.style.height = toHeight + "px";
        });
      });
      wrap.addEventListener("transitionend", onExpandEnd);
    }

    window.setTimeout(finishExpand, expandMs + 400);
  }

  if (el.showMoreBtn) {
    el.showMoreBtn.addEventListener("click", function () {
      expandAllBanks();
    });
  }

  document.querySelectorAll(".hlc-filter-checks").forEach(function (group) {
    group.addEventListener("change", function (event) {
      const input = event.target.closest("input[type='checkbox'][data-product-filter]");
      if (!input || !group.contains(input)) return;
      const key = input.getAttribute("data-product-filter");
      if (!key || !(key in state.productFilters)) return;
      state.productFilters[key] = Boolean(input.checked);
      onProductFilterChange(key);
      scheduleMatch({ fade: true });
    });
  });

  function bindFiltersSheetDrag() {
    var panel = el.filtersPanel;
    var handle = panel && panel.querySelector(".hlc-filters-handle");
    if (!panel || !handle || handle.dataset.boundDrag) return;
    handle.dataset.boundDrag = "1";

    var DISMISS_PX = 120;
    var DISMISS_VELOCITY = 0.65;
    var startY = 0;
    var lastY = 0;
    var lastT = 0;
    var dragging = false;
    var reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function onDown(e) {
      if (!isExploreMobile() || !isFiltersOpen()) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (reduceMotion) return;
      dragging = true;
      startY = lastY = e.clientY;
      lastT = performance.now();
      panel.classList.add("is-dragging");
      try {
        handle.setPointerCapture(e.pointerId);
      } catch (err) {}
    }

    function onMove(e) {
      if (!dragging) return;
      var dy = Math.max(0, e.clientY - startY);
      lastY = e.clientY;
      lastT = performance.now();
      panel.style.transform = "translateY(" + dy + "px)";
      if (el.filtersScrim) {
        el.filtersScrim.style.opacity = String(Math.max(0.12, 1 - dy / 400));
      }
    }

    function onUp(e) {
      if (!dragging) return;
      dragging = false;
      panel.classList.remove("is-dragging");
      try {
        handle.releasePointerCapture(e.pointerId);
      } catch (err) {}
      var dy = Math.max(0, e.clientY - startY);
      var dt = Math.max(16, performance.now() - lastT);
      var velocity = (e.clientY - lastY) / dt;
      panel.style.transform = "";
      if (el.filtersScrim) el.filtersScrim.style.opacity = "";
      if (dy >= DISMISS_PX || velocity > DISMISS_VELOCITY) {
        setFiltersOpen(false);
        if (el.filtersToggle) el.filtersToggle.focus();
      }
    }

    handle.addEventListener("pointerdown", onDown);
    handle.addEventListener("pointermove", onMove);
    handle.addEventListener("pointerup", onUp);
    handle.addEventListener("pointercancel", onUp);
  }

  if (el.filtersToggle && el.filtersControl && el.filtersPanel) {
    bindFiltersSheetDrag();

    el.filtersToggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (!isExploreMobile()) return;
      setFiltersOpen(!isFiltersOpen());
    });

    if (el.filtersScrim) {
      el.filtersScrim.addEventListener("click", function () {
        if (!isExploreMobile() || !isFiltersOpen()) return;
        setFiltersOpen(false);
        if (el.filtersToggle) el.filtersToggle.focus();
      });
    }

    function closeFiltersFromUi() {
      if (!isExploreMobile() || !isFiltersOpen()) return;
      setFiltersOpen(false);
      if (el.filtersToggle) el.filtersToggle.focus();
    }

    if (el.filtersDone) el.filtersDone.addEventListener("click", closeFiltersFromUi);

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (!isExploreMobile() || !isFiltersOpen()) return;
      setFiltersOpen(false);
      el.filtersToggle.focus();
    });

    window.addEventListener("resize", function () {
      syncStickyToolsHeight();
    });

    if (typeof ResizeObserver === "function" && el.resultsHead) {
      new ResizeObserver(function () {
        syncStickyToolsHeight();
      }).observe(el.resultsHead);
    }
  }

  if (el.filtersClear) {
    el.filtersClear.addEventListener("click", function () {
      clearAllProductFilters();
    });
  }

  syncFiltersForViewport();
  if (exploreMobileMq) {
    if (typeof exploreMobileMq.addEventListener === "function") {
      exploreMobileMq.addEventListener("change", function () {
        syncFiltersForViewport();
        updateApplyBar();
      });
    } else if (typeof exploreMobileMq.addListener === "function") {
      exploreMobileMq.addListener(function () {
        syncFiltersForViewport();
        updateApplyBar();
      });
    }
  }

  // The disclosure script flips this hidden input; the list follows it.
  if (el.coApplicant) {
    el.coApplicant.addEventListener("change", function () {
      const on = el.coApplicant.value === "yes";
      const count = coApplicantCards().length;
      if (on && !count) renderCoApplicants([blankCoApplicant()]);
      else if (!on && count) renderCoApplicants([]);
    });
  }

  if (el.coApplicantAdd) {
    el.coApplicantAdd.addEventListener("click", function (event) {
      event.preventDefault();
      addCoApplicant();
      scheduleMatch({ fade: true });
    });
  }

  if (el.coApplicantList) {
    el.coApplicantList.addEventListener("click", function (event) {
      const btn = event.target.closest("[data-co-remove]");
      if (!btn || !el.coApplicantList.contains(btn)) return;
      event.preventDefault();
      removeCoApplicant(Number(btn.getAttribute("data-co-remove")));
      scheduleMatch({ fade: true });
    });
  }

  syncCoApplicantChrome(coApplicantCards().length);

  bindFieldBoxActivate(el.form);
  el.form.addEventListener("input", scheduleMatch);
  el.form.addEventListener("change", scheduleMatch);
  if (el.foir) {
    el.foir.addEventListener("change", syncFoirFace);
    el.foir.addEventListener("change", scheduleMatch);
  }
  if (el.occupation) {
    el.occupation.addEventListener("input", syncOccupationFace);
    el.occupation.addEventListener("change", syncOccupationFace);
  }
  if (el.purpose) {
    el.purpose.addEventListener("input", function () {
      syncSelectFace(el.purpose, el.purposeFace);
    });
    el.purpose.addEventListener("change", function () {
      syncSelectFace(el.purpose, el.purposeFace);
    });
  }
  if (el.cardLoadPct) el.cardLoadPct.addEventListener("change", scheduleMatch);

  if (el.head) {
    el.head.addEventListener("change", function (event) {
      const select = event.target.closest(".hlc-header-select");
      if (!select || !el.head.contains(select)) return;
      if (select.classList.contains("hlc-prepay-header-select")) {
        setPrepaymentMethod(select.value);
        return;
      }
      if (select.classList.contains("hlc-rate-change-header-select")) {
        setRateChangeMethod(select.value);
      }
    });

    el.head.addEventListener("click", function (event) {
      if (event.target.closest(".hlc-header-select")) return;
      if (event.target.closest(".hlc-col-footnote[data-note-target]")) return;
      /* Help opens on document click; skip sort so the i does not re-order. */
      if (
        event.target.closest(".hlc-field-help, .hlc-field-help-popover")
      ) {
        return;
      }
      const header = event.target.closest("th.hlc-sortable");
      if (!header) return;
      const key = header.getAttribute("data-sort");
      if (!key) return;
      if (state.sortKey === key) {
        if (state.sortDir === "asc") {
          state.sortDir = "desc";
        } else {
          state.sortKey = null;
          state.sortDir = null;
        }
      } else {
        state.sortKey = key;
        state.sortDir = "asc";
      }
      renderTable();
    });
  }

  // Capture phase so marks win over row-select / slab-detail buttons.
  document.body.addEventListener(
    "click",
    function (event) {
      const footnoteRef = event.target.closest(
        ".hlc-col-footnote[data-note-target]"
      );
      if (!footnoteRef) return;
      const groupId = footnoteRef.getAttribute("data-note-target") || "";
      if (!groupId || !openChargesNoteGroup(groupId)) return;
      event.preventDefault();
      event.stopPropagation();
    },
    true
  );

  document.body.addEventListener("click", function (event) {
    const selectAll = event.target.closest(".hlc-select-all");
    if (selectAll) {
      event.preventDefault();
      event.stopPropagation();
      toggleSelectAllVisible();
      return;
    }
    const chargeDetail = event.target.closest("[data-charge-detail][data-row-id]");
    if (chargeDetail) {
      event.stopPropagation();
      openChargeSlabs(
        chargeDetail.getAttribute("data-row-id"),
        chargeDetail.getAttribute("data-charge-detail")
      );
      return;
    }
    const calculationDetail = event.target.closest(
      "[data-calculation-detail][data-row-id]"
    );
    if (calculationDetail) {
      event.stopPropagation();
      openCalculation(
        calculationDetail.getAttribute("data-row-id"),
        calculationDetail.getAttribute("data-calculation-detail")
      );
      return;
    }
    const detail = event.target.closest("[data-detail]");
    if (detail) {
      event.stopPropagation();
      openDrawer(detail.getAttribute("data-detail"));
      return;
    }
    const interactive = event.target.closest(
      "button, a, input, select, textarea, label"
    );
    if (interactive) return;
    const row = event.target.closest(
      ".hlc-compare tbody tr.hlc-selectable-row[data-id]"
    );
    if (!row) return;
    toggleSelect(row.getAttribute("data-id"));
  });

  if (el.body) {
    el.body.addEventListener("keydown", function (event) {
      if (event.target.closest("button, a, input, select, textarea")) return;
      const row = event.target.closest("tr[data-id]");
      if (!row || !row.classList.contains("hlc-selectable-row")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleSelect(row.getAttribute("data-id"));
      }
    });
  }

  el.drawerClose.addEventListener("click", closeDrawer);
  el.drawerBackdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (isExploreMobile() && isFiltersOpen()) return;
    closeDrawer();
  });

  var HL_APPLY_STORAGE_KEY = "shroffin_hl_apply_v1";
  var HL_EXPLORE_DRAFT_KEY = "shroffin_hl_explore_draft_v1";
  var HL_EXPLORE_DRAFT_MAX_AGE_MS = 24 * 60 * 60 * 1000;

  function cloneJson(value) {
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (err) {
      return null;
    }
  }

  function collectFormRaw() {
    return {
      age: el.age ? el.age.value : "",
      cibilScore: el.cibil ? el.cibil.value : "",
      monthlyIncome: el.monthlyIncome ? el.monthlyIncome.value : "",
      existingEmis: el.existingEmis ? el.existingEmis.value : "0",
      cardLimits: el.cardLimits ? el.cardLimits.value : "0",
      cardLoadPct: el.cardLoadPct ? el.cardLoadPct.value : String(DEFAULT_CARD_LOAD_PCT),
      tenureYears: el.tenure ? el.tenure.value : String(DEFAULT_TENURE_YEARS),
      foirPct: el.foir ? el.foir.value : String(DEFAULT_FOIR_PCT),
      includeCoApplicant: el.coApplicant ? el.coApplicant.value : "no",
      coApplicants: readCoApplicants(),
      occupation: el.occupation ? el.occupation.value : "",
      purpose: el.purpose ? el.purpose.value : DEFAULT_PURPOSE,
      propertyValue: el.propertyValue ? el.propertyValue.value : ""
    };
  }

  function setInputValue(input, value) {
    if (!input || value == null) return;
    input.value = String(value);
  }

  function setProductFilterControl(el, on) {
    if (!el) return;
    if (el.type === "checkbox") {
      el.checked = Boolean(on);
      return;
    }
    el.setAttribute("aria-pressed", on ? "true" : "false");
  }

  function syncProductFilterChips() {
    document.querySelectorAll("[data-product-filter]").forEach(function (el) {
      var key = el.getAttribute("data-product-filter");
      if (!key) return;
      setProductFilterControl(el, Boolean(state.productFilters[key]));
    });
    updateFiltersBadge();
  }

  function persistExploreDraft() {
    try {
      var snapshots = [];
      state.selectedById.forEach(function (row) {
        var compact = compactSelectedSnapshot(row);
        if (compact) snapshots.push(compact);
      });
      var draft = {
        v: 1,
        ts: Date.now(),
        selectedIds: Array.from(state.selected),
        selectedSnapshots: snapshots,
        form: collectFormRaw(),
        filters: cloneJson(state.productFilters) || defaultProductFilters(),
        prepaymentMethod: state.prepaymentMethod,
        rateChangeMethod: state.rateChangeMethod
      };
      window.sessionStorage.setItem(HL_EXPLORE_DRAFT_KEY, JSON.stringify(draft));
    } catch (err) {}
  }

  function restoreExploreDraft() {
    try {
      var raw = window.sessionStorage.getItem(HL_EXPLORE_DRAFT_KEY);
      if (!raw) return false;
      var draft = JSON.parse(raw);
      if (!draft || draft.v !== 1) return false;
      if (draft.ts && Date.now() - draft.ts > HL_EXPLORE_DRAFT_MAX_AGE_MS) {
        window.sessionStorage.removeItem(HL_EXPLORE_DRAFT_KEY);
        return false;
      }

      var form = draft.form || {};
      setInputValue(el.age, form.age);
      setInputValue(el.cibil, form.cibilScore);
      setInputValue(el.monthlyIncome, form.monthlyIncome);
      setInputValue(el.existingEmis, form.existingEmis);
      setInputValue(el.cardLimits, form.cardLimits);
      setInputValue(el.cardLoadPct, form.cardLoadPct);
      setInputValue(el.tenure, form.tenureYears);
      setInputValue(el.foir, form.foirPct);
      setInputValue(el.propertyValue, form.propertyValue);

      if (form.occupation) setOccupation(form.occupation);
      if (form.purpose) setPurpose(form.purpose);
      renderCoApplicants(
        form.includeCoApplicant === "yes" ? form.coApplicants || [] : []
      );

      if (draft.filters && typeof draft.filters === "object") {
        state.productFilters = normalizeProductFilters(draft.filters);
      }
      syncProductFilterChips();

      if (draft.prepaymentMethod) {
        state.prepaymentMethod = draft.prepaymentMethod;
      }
      if (draft.rateChangeMethod) {
        state.rateChangeMethod = draft.rateChangeMethod;
      }

      state.selected = new Set();
      (draft.selectedIds || []).forEach(function (id) {
        if (id != null && id !== "") state.selected.add(id);
      });
      state.selectedById = new Map();
      (draft.selectedSnapshots || []).forEach(function (snap) {
        if (!snap || snap.id == null) return;
        if (!state.selected.has(snap.id)) return;
        state.selectedById.set(snap.id, snap);
      });
      updateApplyBar();
      return true;
    } catch (err) {
      return false;
    }
  }

  var SAMPLE_INPUTS = {
    monthlyIncome: "100000",
    propertyValue: "6250000",
    age: "35",
    cibilScore: "780",
    occupation: "Salaried",
    purpose: "Regular Home Loan",
    tenureYears: "20",
    foirPct: "55",
    existingEmis: "0",
    cardLimits: "0",
    includeCoApplicant: "no"
  };

  function ensureSampleDefaults() {
    if (!digitCount(el.monthlyIncome ? el.monthlyIncome.value : "")) {
      setInputValue(el.monthlyIncome, SAMPLE_INPUTS.monthlyIncome);
    }
    if (!digitCount(el.propertyValue ? el.propertyValue.value : "")) {
      setInputValue(el.propertyValue, SAMPLE_INPUTS.propertyValue);
    }
    if (!digitCount(el.age ? el.age.value : "")) {
      setInputValue(el.age, SAMPLE_INPUTS.age);
    }
    if (!digitCount(el.cibil ? el.cibil.value : "")) {
      setInputValue(el.cibil, SAMPLE_INPUTS.cibilScore);
    }
    if (el.tenure && !digitCount(el.tenure.value)) {
      setInputValue(el.tenure, SAMPLE_INPUTS.tenureYears);
    }
    if (el.foir && !String(el.foir.value || "").trim()) {
      setInputValue(el.foir, SAMPLE_INPUTS.foirPct);
    }
    if (el.existingEmis && !String(el.existingEmis.value || "").trim()) {
      setInputValue(el.existingEmis, SAMPLE_INPUTS.existingEmis);
    }
    if (el.cardLimits && !String(el.cardLimits.value || "").trim()) {
      setInputValue(el.cardLimits, SAMPLE_INPUTS.cardLimits);
    }
    if (el.occupation && !String(el.occupation.value || "").trim()) {
      setOccupation(SAMPLE_INPUTS.occupation);
    }
    if (el.purpose && !String(el.purpose.value || "").trim()) {
      setPurpose(SAMPLE_INPUTS.purpose);
    }
    if (el.coApplicant && !String(el.coApplicant.value || "").trim()) {
      setCoApplicant(SAMPLE_INPUTS.includeCoApplicant);
    }
  }

  function getActiveColumnsForPacket() {
    var columns = [];
    ["essentials", "charges", "laterCharges"].forEach(function (group) {
      (GROUPS[group] || []).forEach(function (column) {
        columns.push({
          key: column.key,
          label: column.label,
          group: group,
          type: column.type || "text"
        });
      });
    });
    return columns;
  }

  function buildApplyInputData() {
    var raw = {
      age: el.age ? el.age.value : "",
      cibilScore: el.cibil ? el.cibil.value : "",
      monthlyIncome: el.monthlyIncome ? el.monthlyIncome.value : "",
      existingEmis: el.existingEmis ? el.existingEmis.value : "0",
      cardLimits: el.cardLimits ? el.cardLimits.value : "0",
      cardLoadPct: el.cardLoadPct ? el.cardLoadPct.value : DEFAULT_CARD_LOAD_PCT,
      tenureYears: el.tenure ? el.tenure.value : DEFAULT_TENURE_YEARS,
      foirPct: el.foir ? el.foir.value : DEFAULT_FOIR_PCT,
      includeCoApplicant: el.coApplicant ? el.coApplicant.value : "no",
      coApplicants: readCoApplicants(),
      occupation: el.occupation ? el.occupation.value : "",
      purpose: el.purpose ? el.purpose.value : DEFAULT_PURPOSE,
      propertyValue: el.propertyValue ? el.propertyValue.value : ""
    };
    var query = readQuery();
    return {
      form: raw,
      query: cloneJson(query),
      filters: cloneJson(state.productFilters),
      prepaymentMethod: state.prepaymentMethod,
      rateChangeMethod: state.rateChangeMethod,
      jurisdictionState: DEFAULT_JURISDICTION_STATE,
      matchCount: state.rows.length,
      selectedCount: state.selected.size
    };
  }

  function buildSelectedBankPackets() {
    var banks = [];
    state.selected.forEach(function (id) {
      var row = state.selectedById.get(id);
      if (!row) {
        row = findRowForSelection(id);
      }
      if (!row) return;
      var cloned = cloneJson(row);
      if (!cloned) return;
      delete cloned._outsideFilters;
      banks.push(cloned);
    });
    return banks;
  }

  function buildApplyPacket() {
    return {
      v: 1,
      ts: Date.now(),
      data_version: state.dataVersion || "",
      input_data: buildApplyInputData(),
      columns: getActiveColumnsForPacket(),
      banks: buildSelectedBankPackets()
    };
  }

  function saveApplyPacketAndGo() {
    if (!state.selected.size) {
      showToast("Select at least one bank to apply once.");
      return;
    }
    persistExploreDraft();
    var packet = buildApplyPacket();
    if (!packet.banks || !packet.banks.length) {
      showToast("Could not prepare your selected banks. Please try again.");
      return;
    }
    try {
      window.sessionStorage.setItem(HL_APPLY_STORAGE_KEY, JSON.stringify(packet));
    } catch (err) {
      showToast("Could not start apply. Please try again.");
      return;
    }
    window.location.href = "apply.html";
  }

  el.applyBtn.addEventListener("click", function () {
    saveApplyPacketAndGo();
  });
  if (el.applyDockBtn) {
    el.applyDockBtn.addEventListener("click", function () {
      saveApplyPacketAndGo();
    });
  }

  try {
    var applyReturnMsg = window.sessionStorage.getItem("shroffin_hl_apply_msg");
    if (applyReturnMsg) {
      window.sessionStorage.removeItem("shroffin_hl_apply_msg");
      showToast(applyReturnMsg);
    }
  } catch (err) {}

  el.paddleLeft.addEventListener("click", function () {
    var scroller = el.scroll || el.headScroll;
    if (!scroller) return;
    scroller.scrollBy({ left: -220, behavior: "smooth" });
  });
  el.paddleRight.addEventListener("click", function () {
    var scroller = el.scroll || el.headScroll;
    if (!scroller) return;
    scroller.scrollBy({ left: 220, behavior: "smooth" });
  });

  /* Keep header + body columns locked while either strip scrolls sideways. */
  var syncingTableScroll = false;
  function syncCompareScroll(source) {
    if (!source || syncingTableScroll) return;
    var target = source === el.scroll ? el.headScroll : el.scroll;
    if (!target || target.scrollLeft === source.scrollLeft) return;
    syncingTableScroll = true;
    target.scrollLeft = source.scrollLeft;
    syncingTableScroll = false;
  }
  /* Mobile scroll hints: left (appears on scroll) and right (fades at end). */
  var scrollHintWrap =
    el.scroll && el.scroll.closest(".hlc-table-wrap")
      ? el.scroll.closest(".hlc-table-wrap")
      : null;
  var scrollHintRight = scrollHintWrap
    ? scrollHintWrap.querySelector(".hlc-scroll-hint--right")
    : null;
  var scrollHintLeft = scrollHintWrap
    ? scrollHintWrap.querySelector(".hlc-scroll-hint--left")
    : null;
  function updateScrollHint() {
    if (!el.scroll) return;
    var scrollLeft = el.scroll.scrollLeft;
    var atEnd = scrollLeft >= el.scroll.scrollWidth - el.scroll.clientWidth - 4;
    var atStart = scrollLeft <= 4;
    if (scrollHintRight) scrollHintRight.classList.toggle("is-at-end", atEnd);
    if (scrollHintLeft) scrollHintLeft.classList.toggle("is-scrolled", !atStart);
  }
  if (scrollHintRight && el.scroll) {
    scrollHintRight.addEventListener("click", function () {
      el.scroll.scrollBy({ left: 220, behavior: "smooth" });
    });
  }
  if (scrollHintLeft && el.scroll) {
    scrollHintLeft.addEventListener("click", function () {
      el.scroll.scrollBy({ left: -220, behavior: "smooth" });
    });
  }
  if (el.scroll) {
    el.scroll.addEventListener(
      "scroll",
      function () {
        syncCompareScroll(el.scroll);
        updateScrollHint();
      },
      { passive: true }
    );
  }
  if (el.headScroll) {
    el.headScroll.addEventListener(
      "scroll",
      function () {
        syncCompareScroll(el.headScroll);
      },
      { passive: true }
    );
  }

  var columnWidthSyncTimer = 0;
  function scheduleCompareColumnWidthSync() {
    window.clearTimeout(columnWidthSyncTimer);
    columnWidthSyncTimer = window.setTimeout(function () {
      syncCompareColumnWidths();
    }, 50);
  }
  window.addEventListener("resize", scheduleCompareColumnWidthSync);

  /** Bring bank results back after reload / bfcache — same place the user left. */
  function revealResultsShellQuiet() {
    var resultsShell = document.getElementById("hlc-results-shell");
    if (!resultsShell) return;
    resultsShell.hidden = false;
    resultsShell.classList.add("is-visible");
    renderFreshnessNote();
    updateApplyBar();
    syncStickyToolsHeight();
  }

  var didRestoreDraft = restoreExploreDraft();
  ensureSampleDefaults();
  syncFoirFace();
  syncOccupationFace();
  syncSelectFace(el.purpose, el.purposeFace);
  updateFiltersBadge();

  var resultsShellEl = document.getElementById("hlc-results-shell");
  if (resultsShellEl) {
    new MutationObserver(function () {
      updateApplyBar();
      syncStickyToolsHeight();
    }).observe(resultsShellEl, { attributes: true, attributeFilter: ["hidden"] });
  }

  var tableSight =
    (el.scroll && el.scroll.closest(".hlc-compare-table-area")) ||
    document.querySelector(".hlc-compare-table-area") ||
    document.querySelector(".hlc-table-wrap");
  if (tableSight && typeof IntersectionObserver === "function") {
    new IntersectionObserver(
      function (entries) {
        var entry = entries[0];
        // Table must be meaningfully on screen (header + bank rows),
        // not a sliver while the inputs are still the main view.
        tableInView = Boolean(
          entry &&
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.18
        );
        updateApplyBar();
      },
      {
        threshold: [0, 0.1, 0.18, 0.3, 0.5],
        rootMargin: "0px 0px -18% 0px"
      }
    ).observe(tableSight);
  } else {
    tableInView = true;
  }

  window.addEventListener("pageshow", function (event) {
    if (!event.persisted) return;
    var restored = restoreExploreDraft();
    updateApplyBar();
    if (state.dataset && primaryFieldsAreComplete()) {
      Promise.resolve(runMatch())
        .then(function () {
          if (restored) revealResultsShellQuiet();
        })
        .catch(function () {});
    } else {
      renderTable();
      if (restored) revealResultsShellQuiet();
    }
  });

  fetch(resolveCompareDataUrl())
    .then(function (response) {
      if (!response.ok) throw new Error("Failed to load compare data");
      return response.json();
    })
    .then(function (dataset) {
      state.dataset = dataset;
      state.dataVersion = dataset.meta && dataset.meta.data_version ? dataset.meta.data_version : "";
      state.bankFreshness =
        dataset.meta && dataset.meta.bank_freshness ? dataset.meta.bank_freshness : {};
      renderFreshnessNote();
      root.setAttribute("aria-busy", "false");
      if (!primaryFieldsAreComplete()) return;
      return Promise.resolve(runMatch()).then(function () {
        // After Ctrl+R, restore the visible results the user already had.
        if (didRestoreDraft) revealResultsShellQuiet();
      });
    })
    .catch(function (error) {
      console.error(error);
      showToast("Could not load comparison data. Refresh and try again.");
      root.setAttribute("aria-busy", "false");
    });
}

module.exports = {
  GROUPS,
  PREPAYMENT_METHOD_OWN,
  PREPAYMENT_METHOD_BT,
  RATE_CHANGE_METHOD_TYPE,
  RATE_CHANGE_METHOD_REPRICE,
  RATE_CHANGE_METHOD_BENCHMARK,
  RATE_CHANGE_CHARGE_TYPE_SWITCH,
  RATE_CHANGE_CHARGE_REPRICING,
  RATE_CHANGE_CHARGE_BENCHMARK,
  RATE_CHANGE_FREQUENCY_NOTE,
  RATE_CHANGE_FREQUENCY_NOTE_REPRICE,
  RATE_CHANGE_FREQUENCY_NOTE_BENCHMARK,
  rateChangeFrequencyNoteForMethod,
  RATE_CHANGE_BENCHMARK_MEANING_NOTE,
  RATE_CHANGE_REPRICING_MEANING_NOTE,
  RATE_CHANGE_COMMON_MARKER,
  expandBenchmarkToken,
  expandBenchmarkSwitchSide,
  formatBenchmarkSwitchShortNote,
  RATE_CHANGE_BANK_MARKERS,
  RBI_FLOATING_PREPAY_HREF,
  FLOATING_PREPAY_NOTE,
  FIXED_FORECLOSURE_NOTE,
  PROCESSING_FEE_MARKER,
  PROPERTY_CHECK_MARKER,
  GOVERNMENT_CHARGES_MARKER,
  PROCESSING_FEE_LOGIN_NOTE,
  PROPERTY_CHECK_ORIGIN,
  PROPERTY_CHECK_CHARGE_NAMES,
  PROPERTY_CHECK_NOTE,
  floatingPrepayNoteHtml,
  footnoteMarkersFromNoteParts,
  chargesNoteGroupId,
  columnFootnoteMarker,
  footnoteRefHtml,
  chargesNoteGroupHtml,
  chargesNoteToolbarHtml,
  bindChargesNoteDropdowns,
  bindDrawerDropdowns,
  bindDetailsAccordion,
  drawerToolbarHtml,
  drawerDiscloseHtml,
  calcDrawerBodyHtml,
  laterChargesColumns,
  laterChargesFeeCount,
  columnsForGroup,
  DEFAULT_FOIR_PCT,
  DEFAULT_TENURE_YEARS,
  MAX_TENURE_YEARS,
  DEFAULT_CARD_LOAD_PCT,
  CARD_LOAD_PCT_CHOICES,
  FOIR_CHOICES,
  MAX_CO_APPLICANTS,
  CO_APPLICANT_RELATIONSHIPS,
  CO_APPLICANT_OCCUPATIONS,
  normalizeCoApplicants,
  applicantsFromQuery,
  clubbableApplicants,
  resolveIncomeBasis,
  matchesApplicantAges,
  earningApplicantAges,
  weakestCibilScore,
  GOVT_PSU_BORROWER_CATEGORY,
  DEFAULT_RATE_TYPE,
  DEFAULT_FACILITY_TYPE,
  DEFAULT_BANK_TYPE,
  INITIAL_VISIBLE_BANKS,
  BANK_LOGO_FILES,
  bankLogoPath,
  bankLogoHtml,
  defaultProductFilters,
  normalizeProductFilters,
  selectedRateTypes,
  selectedFacilityTypes,
  selectedBankTypes,
  primaryRateType,
  primaryFacilityType,
  primaryBankType,
  parseMoney,
  queryFromInputs,
  normalizeBankType,
  normalizePurpose,
  normalizeFoirPct,
  normalizeCardLoadPct,
  normalizeTenureYears,
  resolveTenureMonths,
  queryTenureMonthsForMatching,
  maxTenureYearsAllowed,
  offerHasDiscount,
  matchesProductFilters,
  maxLoanForProperty,
  propertyFundedPct,
  monthlyRateFromAnnualDecimal,
  formatPctPlain,
  tenureInWordsFromRow,
  amortizationSchedule,
  chargeUsesWhicheverHigher,
  matchChargeSlab,
  chargeCaseFromParts,
  chargeCaseFromRow,
  resolveApplicableCharge,
  chargeRowApplies,
  listBounceChargeSlabs,
  overdueSlabsForCase,
  overdueExtraForMissedEmi,
  bounceExtraForMissedEmi,
  missedEmiMonthTotal,
  comparableColumnValue,
  buildCompareRanks,
  compareRankTone,
  overdueGraceDays,
  gracePillLabel,
  compareRankPillsHtml,
  loanAmountWalkModel,
  mathBarHtml,
  gutterOpFromLines,
  markStepWordBars,
  mathBarStackHtml,
  additiveStackBars,
  amortizationTableHtml,
  tenureMonthsForOffer,
  loanFromEmi,
  maxLoanFromIncome,
  computeOfferTerms,
  queryForOffer,
  prefilterOffer,
  matchesOptionalField,
  matchesBorrowerCategoryFilter,
  matchesBorrowerCategoryForOffer,
  matchesBorrowerCategoryForCharge,
  inNumericBand,
  matchesCibilBand,
  matchesAge,
  createMatchEngine,
  matchesOfferRules,
  effectiveRoiDecimal,
  computeProcessingFee,
  isPropertyCheckChargeName,
  isTemporaryPropertyCheckCharge,
  listPropertyCheckCharges,
  computePropertyCheckChargeAmount,
  computePropertyCheckChargesTotal,
  suppressPublishedPropertyChecks,
  DEFAULT_GOVERNMENT_GST_RATE,
  computeGovernmentChargeAmount,
  computeGovernmentChargeBaseAmount,
  governmentChargeAmountParts,
  governmentChargeGstRate,
  computeGovernmentChargesTotal,
  listApplicableGovernmentCharges,
  listOptionalGovernmentCharges,
  formatOptionalGovernmentChargesNote,
  DEFAULT_JURISDICTION_STATE,
  pickBestOfferPerBank,
  enrichMatchedRow,
  matchOffers,
  sortRows,
  cellValue,
  buildCellSnapshot,
  cellDidChange,
  emiFromLoan,
  formatInr,
  formatInrDigits,
  formatIndianAmountDigits,
  applyIndianMoneyFormat,
  formatFacilityLabel,
  formatOccupationLabel,
  formatRateTypeLabel,
  formatPurposeLabel,
  formatBorrowerCategoryLabel,
  formatRoiBasisLabel,
  formatPremiumPct,
  formatSchemeDiscountLabel,
  buildRateDerivationPairs,
  formatDiscountDetail,
  formatInsuranceDetail,
  listApplicableCharges,
  listSchemeCharges,
  formatChargeValue,
  formatChargeRule,
  prefilterAfterOfferCharge,
  pickBestAfterOfferCharge,
  rankPrepaymentCharge,
  rankOverdueCharge,
  rankEmiBounceCharge,
  isPrepaymentNotCharged,
  CHARGE_NOT_PUBLISHED_BY_BANK,
  chargeNotPublishedDisplay,
  isChargeNotPublishedLabel,
  chargeDisplayIsUnpublished,
  columnOpensCalculation,
  pickOwnFundsPrepayCharge,
  pickTakeoverPrepayCharge,
  formatPrepaymentChargeDisplay,
  formatPrepaymentChargeDetail,
  listPartPrepaymentRulesForOffer,
  pickPrimaryPartPrepaymentRule,
  partPrepaymentLockInMonths,
  resolvePartPrepaymentMinimum,
  resolvePartPrepaymentMaximum,
  walkOutstandingPrincipal,
  computePrepaymentChargeAmount,
  simulatePartPrepaymentScenario,
  buildPartPrepaymentIntelNotes,
  PREPAYMENT_SIMULATION_YEAR,
  buildPartPrepaymentRulePairs,
  drawerPartPrepaymentRulesHtml,
  applyPrepaymentMethodToRows,
  prepayChargeForMethod,
  rateChangeTypeSwitchLabel,
  rateChangeTypeSwitchDirection,
  rankRateChangeTypeSwitch,
  rankRateChangeRepricing,
  rankRateChangeBenchmark,
  pickRateChangeTypeSwitchCharge,
  pickRateChangeRepricingCharge,
  pickRateChangeBenchmarkCharge,
  formatRateChangeChargeDisplay,
  applyRateChangeMethodToRows,
  rateChangeChargeForMethod,
  rateChangeSortValue,
  buildRateChangeExceptionNotes,
  formatBenchmarkSwitchDetail,
  formatRateChangePanelText,
  formatChargeDisplay,
  formatChargeDisplayText,
  formatChargeBasis,
  formatChargeAmountHeadline,
  formatChargeMetaLine,
  buildFeeTableEntries,
  chargeColumnTitle,
  commonChargeUnitLabel,
  buildChargePanelBlock,
  buildChargePanelVariant,
  buildOverdueDrawerSlabBlocks,
  buildEmiBounceDrawerSlabBlocks,
  buildEmiBounceFlatDrawerRows,
  buildAreaMatrixFeeEntry,
  renderDrawerSlabTableBlock,
  chargeCalculationDetailsHtml,
  chargeDrawerNoteLines,
  feeSectionsHaveGst,
  listSchemeChargePanelSections,
  listAdditionalAfterOfferPanelSections,
  listDrawerOtherChargeSections,
  listSchemeChargePanelBlocks,
  listAdditionalAfterOfferPanelBlocks,
  listSchemeChargePanelRows,
  listAdditionalAfterOfferPanelRows,
  isShownOnExploreTable,
  formatPct,
  formatTenureYears,
  formatCheckedOnDate,
  formatFreshnessLabel,
  formatDrawerFreshnessSubtitle,
  OOP_EXPENSES_MARKER,
  OOP_EXPENSES_FOOTNOTE,
  initPage
};

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
  } else {
    initPage();
  }
}
