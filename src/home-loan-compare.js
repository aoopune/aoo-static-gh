"use strict";

const { Engine } = require("json-rules-engine");

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

/** bank_name (compare JSON) → 128×128 watermark PNG under images/banks/ */
const BANK_LOGO_FILES = {
  "Axis Bank": "axis-bank.png",
  "Bandhan Bank": "bandhan-bank.png",
  "Bank of Baroda": "bank-of-baroda.png",
  "Bank of India": "bank-of-india.png",
  "Bank of Maharashtra": "bank-of-maharashtra.png",
  "Canara Bank": "canara-bank.png",
  "Central Bank of India": "central-bank-of-india.png",
  "City Union Bank": "city-union-bank.png",
  "CSB Bank": "csb-bank.png",
  "DCB Bank": "dcb-bank.png",
  "Dhanlaxmi Bank": "dhanlaxmi-bank.png",
  "Federal Bank": "federal-bank.png",
  "HDFC Bank": "hdfc-bank.png",
  "ICICI Bank": "icici-bank.png",
  "IDBI Bank": "idbi-bank.png",
  "IDFC FIRST Bank": "idfc-first-bank.png",
  "Indian Bank": "indian-bank.png",
  "Indian Overseas Bank": "indian-overseas-bank.png",
  "IndusInd Bank": "indusind-bank.png",
  "Jammu and Kashmir Bank": "jammu-kashmir-bank.png",
  "Karnataka Bank": "karnataka-bank.png",
  "Karur Vysya Bank": "karur-vysya-bank.png",
  "Kotak Mahindra Bank": "kotak-mahindra-bank.png",
  "Nainital Bank": "nainital-bank.png",
  "Punjab & Sind Bank": "punjab-sind-bank.png",
  "Punjab National Bank": "punjab-national-bank.png",
  "RBL Bank": "rbl-bank.png",
  "South Indian Bank": "south-indian-bank.png",
  "State Bank of India": "state-bank-of-india.png",
  "Tamilnad Mercantile Bank": "tamilnad-mercantile-bank.png",
  "UCO Bank": "uco-bank.png",
  "Union Bank of India": "union-bank-of-india.png",
  "Yes Bank": "yes-bank.png"
};

const BANK_LOGO_BASE = "../images/banks/";

function bankLogoPath(bankName) {
  const file = BANK_LOGO_FILES[String(bankName || "").trim()];
  return file ? BANK_LOGO_BASE + file : "";
}

function bankLogoHtml(bankName) {
  const src = bankLogoPath(bankName);
  if (!src) return "";
  return (
    '<img class="hlc-bank-logo" src="' +
    escapeHtml(src) +
    '" alt="" width="26" height="26" decoding="async" loading="lazy">'
  );
}

function defaultProductFilters() {
  return {
    govtPsu: false,
    greenHome: false,
    womenApplicant: false,
    insurance: false,
    fixedRate: false,
    overdraft: false,
    bankType: DEFAULT_BANK_TYPE
  };
}

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
      footnote: "*"
    },
    {
      key: "propertyCheckCharges",
      label: "Property check charges",
      type: "inr",
      sort: "num",
      footnote: "*"
    },
    {
      key: "governmentCharges",
      label: "Government charges",
      type: "inr",
      sort: "num",
      footnote: true
    }
  ],
  laterCharges: [
    {
      key: "prepaymentChargeDisplay",
      label: "Prepayment charge",
      type: "charge",
      sort: "text"
    },
    {
      key: "rateChangeChargeDisplay",
      label: "Rate change charge",
      type: "charge",
      sort: "text",
      footnote: "°"
    },
    {
      key: "overdueChargeDisplay",
      label: "Overdue charge",
      type: "charge",
      sort: "text",
      footnote: "‡"
    },
    {
      key: "emiBounceChargeDisplay",
      label: "EMI bounce charge",
      type: "charge",
      sort: "text",
      footnote: "^"
    }
  ]
};

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
  "° Benchmark switch means changing the reference rate your loan follows — usually from an older bank rate such as Base Rate, Marginal Cost of Funds based Lending Rate (MCLR), Benchmark Prime Lending Rate (BPLR), or State Bank Advance Rate (SBAR), to a newer external or repo-linked rate such as Repo Linked Lending Rate (RLLR), External Benchmark Lending Rate (EBLR), or External Benchmark Rate (EBR).";
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
  "Floating-rate home loans to individuals have no prepayment or foreclosure charge. Under Reserve Bank of India (RBI) directions, Part E, paragraphs 352 and 353.";
const FIXED_FORECLOSURE_NOTE =
  "Foreclosure means closing the full loan early. Lenders usually apply the same charge as prepayment, so foreclosure is not listed separately.";
const PROCESSING_FEE_LOGIN_NOTE =
  "* Part of the processing fee is often taken upfront as a login fee to file the application. The amount differs by bank and is included in the processing fee shown — we don’t list it separately yet.";
const PROPERTY_CHECK_ORIGIN = "Temporary.property_checks";
const PROPERTY_CHECK_CHARGE_NAMES = [
  "Legal and technical",
  "Title search report",
  "Valuation"
];
const PROPERTY_CHECK_NOTE =
  "* GST applicable. Typical industry average. Exact fees may differ by lender.";

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
    escapeHtml(
      "Floating-rate home loans to individuals have no prepayment or foreclosure charge. Under Reserve Bank of India (RBI) directions, "
    ) +
    '<a class="guide-section-link" href="' +
    escapeHtml(RBI_FLOATING_PREPAY_HREF) +
    '" target="_blank" rel="noopener noreferrer">' +
    "Part E, paragraphs 352 and 353" +
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

function laterChargesColumns(showPrepayment) {
  if (showPrepayment) return GROUPS.laterCharges.slice();
  return GROUPS.laterCharges.filter(function (column) {
    return column.key !== "prepaymentChargeDisplay";
  });
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
  const coMonthlyIncome = Math.max(0, parseMoney(values.coMonthlyIncome) || 0);
  const coExistingEmis = Math.max(0, parseMoney(values.coExistingEmis) || 0);
  const coCardLimits = Math.max(0, parseMoney(values.coCardLimits) || 0);
  const ageRaw = parseMoney(values.age);
  const cibilRaw = parseMoney(values.cibilScore);
  const tenureRaw = parseMoney(values.tenureYears);
  const age = Number.isFinite(ageRaw) ? ageRaw : null;
  const cibilScore = Number.isFinite(cibilRaw) ? cibilRaw : null;
  const filters = Object.assign(defaultProductFilters(), productFilters || {});
  const includeCoApplicant =
    values.includeCoApplicant === true ||
    values.includeCoApplicant === "yes" ||
    values.includeCoApplicant === "true";
  return {
    age: age,
    cibilScore: cibilScore,
    monthlyIncome,
    existingEmis,
    cardLimits,
    includeCoApplicant: includeCoApplicant,
    coMonthlyIncome: includeCoApplicant ? coMonthlyIncome : 0,
    coExistingEmis: includeCoApplicant ? coExistingEmis : 0,
    coCardLimits: includeCoApplicant ? coCardLimits : 0,
    cardLoadPct: normalizeCardLoadPct(values.cardLoadPct),
    tenureYears: normalizeTenureYears(tenureRaw),
    foirPct: normalizeFoirPct(values.foirPct),
    propertyValue,
    occupation: values.occupation || "Salaried",
    purpose: normalizePurpose(values.purpose),
    womenApplicant: Boolean(filters.womenApplicant),
    greenHome: Boolean(filters.greenHome),
    productFilters: filters,
    rateType: filters.fixedRate ? "Fixed" : DEFAULT_RATE_TYPE,
    facilityType: filters.overdraft ? "Overdraft" : DEFAULT_FACILITY_TYPE,
    bankType: normalizeBankType(filters.bankType)
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
function queryTenureMonthsForMatching(offer, query) {
  const wantMonths = Math.round(normalizeTenureYears(query.tenureYears) * 12);
  let ceiling = MAX_TENURE_YEARS * 12;

  const reqMax = Number(offer.req_repayment_tenure_months_max);
  if (Number.isFinite(reqMax) && reqMax > 0) {
    ceiling = Math.min(ceiling, reqMax);
  }

  if (query.age != null && Number.isFinite(query.age) && offer.age_max != null) {
    const ageMax = Number(offer.age_max);
    if (Number.isFinite(ageMax)) {
      const monthsUntilAgeMax = Math.max(0, Math.floor((ageMax - query.age) * 12));
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
  const filters = query.productFilters || defaultProductFilters();

  if (offer.rate_type !== query.rateType) return false;
  if (offer.facility_type !== query.facilityType) return false;
  if (query.bankType !== DEFAULT_BANK_TYPE && offer.bank_type !== query.bankType) {
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
  const forMatching = options && options.forMatching;
  const tenureMonths = forMatching
    ? queryTenureMonthsForMatching(offer, query)
    : resolveTenureMonths(offer, query.age, query.tenureYears);
  const fromProperty = maxLoanForProperty(query.propertyValue);
  const totalIncome =
    (Number(query.monthlyIncome) || 0) +
    (query.includeCoApplicant ? Number(query.coMonthlyIncome) || 0 : 0);
  const existingTotal =
    (Number(query.existingEmis) || 0) +
    (query.includeCoApplicant ? Number(query.coExistingEmis) || 0 : 0);
  const cardTotal =
    (Number(query.cardLimits) || 0) +
    (query.includeCoApplicant ? Number(query.coCardLimits) || 0 : 0);
  const fromIncome = maxLoanFromIncome(
    totalIncome,
    roiDecimal,
    tenureMonths,
    query.foirPct,
    existingTotal,
    cardTotal,
    query.cardLoadPct
  );
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
    emi
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
  return "Data last checked on " + formatCheckedOnDate(isoDate);
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
  if (!matchesAge(offer, query.age)) return false;
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
  if (!charge) return { main: "Not listed", details: [], note: "" };
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

function rateChangeSortValue(charge, slabs) {
  if (slabs && slabs.length > 1) {
    let min = null;
    slabs.forEach(function (s) {
      if (s.fixed_amount != null && Number.isFinite(Number(s.fixed_amount))) {
        const n = Number(s.fixed_amount);
        if (min == null || n < min) min = n;
      }
    });
    return min;
  }
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

function formatRateChangeChargeDisplay(charge, slabs) {
  if (slabs && slabs.length > 1) {
    return {
      main: "Fixed amount by loan amount range",
      details: [],
      note: "",
      action: "rate-change-slabs"
    };
  }
  const display = formatChargeDisplay(charge, {
    // Basis differs by bank — show on the cell, not a clubbed footnote.
    hideBasis: false,
    hideUnit: true,
    hideGst: true
  });
  // Exception / bank prose lives in footnotes, not the cell.
  display.note = "";
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

function shortenBenchmarkToken(token) {
  const raw = String(token || "").trim();
  if (!raw) return "";
  const key = normalizeText(raw)
    .replace(/[()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const labels = {
    "base rate": "Base Rate",
    mclr: "MCLR",
    bplr: "BPLR",
    sbar: "SBAR",
    rllr: "RLLR",
    eblr: "EBLR",
    ebr: "EBR",
    "external benchmark rate": "EBR",
    "external benchmark": "EBR",
    "external benchmark rate repo rate": "EBR (repo rate)",
    "repo rate": "repo rate"
  };
  if (labels[key]) return labels[key];
  return raw;
}

function formatBenchmarkSwitchShortNote(charge) {
  const from = charge && charge.benchmark_switch_from;
  const to = charge && charge.benchmark_switch_to;
  if (!from || !to) return "";
  const fromShort = String(from)
    .split(/\s*\/\s*/)
    .map(shortenBenchmarkToken)
    .filter(Boolean)
    .join(" / ");
  const toShort = String(to)
    .split(/\s*\/\s*/)
    .map(shortenBenchmarkToken)
    .filter(Boolean)
    .join(" / ");
  if (!fromShort || !toShort) return "";
  return "From " + fromShort + " to " + toShort + ".";
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
    const charge = rateChangeChargeForMethod(row, method);
    const candidates = rateChangeCandidatesForMethod(row, method);
    const slabs = listMatchingChargeSlabs(candidates, charge);
    row.rateChangeChargeSlabs = slabs;
    const display = formatRateChangeChargeDisplay(charge, slabs);
    const bankKey = rateChangeBankKey(row, charge);
    const exceptionTexts = collectRateChangeExceptionTexts(
      charge,
      bankKey,
      method,
      rateTypeIsFixedForRow(row),
      candidates
    );
    if (exceptionTexts.length) {
      display.marker = rateChangeMarkerForBankKey(bankKey);
    }
    row.rateChangeChargeDisplay = display;
    row.rateChangeChargeSortValue = rateChangeSortValue(charge, slabs);
  });
  return rows;
}

function formatRateChangePanelText(charge) {
  if (!charge) return "Not listed";
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
  if (!charge) return "Not listed";
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

function listAlternateEmiBounceMethodFacts(candidates, selectedChargeName) {
  const selected = normalizeText(selectedChargeName);
  const byName = Object.create(null);
  candidates.forEach(function (charge) {
    if (normalizeText(charge.charge_name) === selected) return;
    if (charge.fixed_amount == null || !Number.isFinite(Number(charge.fixed_amount))) {
      return;
    }
    const key = charge.charge_name;
    if (!byName[key]) byName[key] = [];
    byName[key].push(charge);
  });
  return Object.keys(byName)
    .sort(function (a, b) {
      return rankEmiBounceCharge(byName[b][0]) - rankEmiBounceCharge(byName[a][0]);
    })
    .map(function (name) {
      const rows = byName[name]
        .slice()
        .sort(function (a, b) {
          return chargeSlabStart(a) - chargeSlabStart(b);
        });
      const label = formatEmiBounceMethodLabel(name);
      const amounts = Array.from(
        new Set(
          rows.map(function (charge) {
            return formatInr(Number(charge.fixed_amount));
          })
        )
      );
      if (amounts.length === 1) return label + ": " + amounts[0];
      return label + ": " + formatAreaSlabNotes(rows, false);
    });
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

  engine.addOperator("matchesAge", (payload, age) => {
    if (!payload || !payload.offer) return false;
    return matchesAge(payload.offer, age);
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
    query_age: query.age
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
  let scopeNote = "^ Government charges shown ";
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
          "^ NOI stamp duty " +
          amountLabel +
          " applies if MODT stamp duty is already paid."
        );
      }
      if (name === "Notice of Intimation Document Handling Charge") {
        return (
          "^ NOI document handling " +
          amountLabel +
          " applies if filing is done in person."
        );
      }
      return "^ " + name + " " + amountLabel + ".";
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
    return { main: "Not listed", details: [], note: "" };
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
  const whicheverHigherRule = [charge.note_1, charge.note_2, charge.special_rule].some(
    function (value) {
      return /overdue_whichever_higher=yes/i.test(String(value || ""));
    }
  );
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
  if (!display) return "Not listed";
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

function formatAreaSlabNote(charge, index, rows) {
  const amount = formatInr(Number(charge.fixed_amount));
  const min = charge.slab_from == null ? null : Number(charge.slab_from);
  const max = charge.slab_to == null ? null : Number(charge.slab_to);
  const previous = index > 0 && rows ? rows[index - 1] : null;
  const previousMax =
    previous && previous.slab_to != null ? Number(previous.slab_to) : null;
  if (min == null && max != null) {
    return amount + " up to " + formatChargeThreshold(max);
  }
  if (min != null && max != null) {
    if (previousMax != null && min === previousMax) {
      return (
        amount +
        " above " +
        formatChargeThreshold(min) +
        " to " +
        formatChargeThreshold(max)
      );
    }
    return (
      amount +
      " from " +
      formatChargeThreshold(min) +
      " to " +
      formatChargeThreshold(max)
    );
  }
  if (min != null && previousMax != null && min === previousMax) {
    return amount + " above " + formatChargeThreshold(min);
  }
  if (min != null) return amount + " from " + formatChargeThreshold(min);
  return amount;
}

function formatAreaSlabNotes(rows, skipFirst) {
  return rows
    .map(formatAreaSlabNote)
    .slice(skipFirst ? 1 : 0)
    .join("; ");
}

function buildAreaChargeSummary(candidates, preferredArea, bankDisplayName) {
  if (!candidates.length) return null;
  const selectedName = candidates[0].charge_name;
  const areaRows = candidates.filter(function (charge) {
    return (
      charge.charge_name === selectedName &&
      charge.charge_by_area &&
      charge.fixed_amount != null
    );
  });
  const areaNames = Array.from(
    new Set(
      areaRows.map(function (charge) {
        return charge.charge_by_area;
      })
    )
  );
  if (areaNames.length < 2) return null;

  const preferred =
    areaNames.find(function (area) {
      return normalizeText(area) === normalizeText(preferredArea);
    }) || areaNames[0];
  const primaryRows = areaRows
    .filter(function (charge) {
      return charge.charge_by_area === preferred;
    })
    .sort(function (a, b) {
      return chargeSlabStart(a) - chargeSlabStart(b);
    });
  const otherRows = areaRows
    .filter(function (charge) {
      return charge.charge_by_area !== preferred;
    })
    .sort(function (a, b) {
      return chargeSlabStart(a) - chargeSlabStart(b);
    });
  const otherArea = otherRows.length ? otherRows[0].charge_by_area : "";
  const primaryFirst = primaryRows[0];
  const primaryRest = primaryRows.slice(1);
  const methodLabel = formatEmiBounceMethodLabel(selectedName);
  const alternateFacts = listAlternateEmiBounceMethodFacts(
    candidates,
    selectedName
  );
  const useFullScheduleMarker = alternateFacts.length > 0;
  const marker = useFullScheduleMarker ? "§" : "†";
  const footnoteParts = [];
  if (useFullScheduleMarker) {
    footnoteParts.push(
      preferred + ": " + formatAreaSlabNotes(primaryRows, false)
    );
  } else if (primaryRest.length) {
    footnoteParts.push(
      preferred +
        " (higher charges): " +
        formatAreaSlabNotes([primaryFirst].concat(primaryRest), true)
    );
  }
  if (otherRows.length) {
    footnoteParts.push(
      otherArea + ": " + formatAreaSlabNotes(otherRows, false)
    );
  }
  alternateFacts.forEach(function (fact) {
    footnoteParts.push(fact);
  });
  const primaryBand = formatEmiBounceSlabBand(primaryFirst);
  const primaryDetailParts = [];
  if (useFullScheduleMarker && methodLabel) primaryDetailParts.push(methodLabel);
  if (primaryBand) {
    primaryDetailParts.push(
      primaryBand +
        (preferred ? " in " + preferred.toLowerCase() + " areas" : "")
    );
  } else if (preferred) {
    primaryDetailParts.push(preferred);
  }

  const shownSentence = useFullScheduleMarker
    ? "The amount shown is the " +
      methodLabel +
      (primaryBand
        ? " " +
          primaryBand +
          (preferred ? " in " + preferred.toLowerCase() + " areas" : "")
        : "") +
      "."
    : formatSlabBasisSentence(primaryFirst, "bounce amount");

  return {
    display: {
      main: formatInr(Number(primaryFirst.fixed_amount)),
      marker: marker,
      details: primaryDetailParts.filter(Boolean),
      note: ""
    },
    footnote: footnoteParts.length
      ? marker +
        " " +
        (bankDisplayName || primaryFirst.bank_name) +
        ": " +
        shownSentence +
        " " +
        footnoteParts.join(". ") +
        "."
      : ""
  };
}

function buildSlabChargeSummary(candidates, bankDisplayName) {
  if (!candidates.length || candidates[0].charge_by_area) return null;
  const slabRows = listMatchingChargeSlabs(candidates, candidates[0]);
  if (slabRows.length < 2) return null;

  const distinctAmounts = new Set(
    slabRows.map(function (charge) {
      return Number(charge.fixed_amount);
    })
  );
  if (distinctAmounts.size < 2) return null;

  const firstSlab = slabRows[0];
  const higherSlabs = slabRows.slice(1);
  return {
    display: {
      main: formatInr(Number(firstSlab.fixed_amount)),
      marker: "†",
      details: [formatEmiBounceSlabBand(firstSlab)].filter(Boolean),
      note: ""
    },
    footnote:
      "† " +
      (bankDisplayName || firstSlab.bank_name) +
      ": " +
      formatSlabBasisSentence(firstSlab, "bounce amount") +
      " Higher charges: " +
      formatAreaSlabNotes([firstSlab].concat(higherSlabs), true) +
      "."
  };
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

function buildOverduePercentageSlabSummary(candidates, bankDisplayName) {
  if (!candidates.length) return null;
  const selected = candidates[0];
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
  const slabRows = candidates
    .filter(function (charge) {
      return (
        normalizeText(charge.has_slab_wise_charges) === "yes" &&
        normalizeText(charge.charge_type) === "percentage" &&
        identityFields.every(function (field) {
          return normalizeText(charge[field]) === normalizeText(selected[field]);
        })
      );
    })
    .sort(function (a, b) {
      return chargeSlabStart(a) - chargeSlabStart(b);
    });
  if (slabRows.length < 2) return null;

  const firstSlab = slabRows[0];
  const firstBand =
    Number(firstSlab.slab_from) === 0 && firstSlab.slab_to != null
      ? "Up to " + formatChargeThreshold(firstSlab.slab_to)
      : formatChargeSlabBand(firstSlab);
  const firstDetails = [firstBand]
    .concat(
      [firstSlab.note_1, firstSlab.note_2]
        .map(formatEncodedChargeNote)
        .filter(Boolean)
    )
    .filter(Boolean)
    .join(" · ");
  const higherSlabs = slabRows.slice(1).map(function (charge) {
    const band = formatChargeSlabBand(charge);
    return (
      formatChargePercentageValue(charge) +
      (band ? " " + band.charAt(0).toLowerCase() + band.slice(1) : "")
    );
  });

  return {
    display: {
      main: formatChargePercentageValue(firstSlab),
      marker: "◊",
      details: firstDetails ? [firstDetails] : [],
      note: ""
    },
    footnote:
      "◊ " +
      (bankDisplayName || firstSlab.bank_name) +
      ": " +
      formatSlabBasisSentence(firstSlab, "overdue amount") +
      " " +
      higherSlabs.join("; ") +
      "."
  };
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
  if (display.main && display.main !== "Not listed") return display.main;
  if (charge.note_1) return charge.note_1;
  return "See bank rules";
}

/** Fee rule from bank data — not computed from the customer's loan amount. */
function formatChargeRule(charge) {
  if (!charge) return "—";
  const display = formatChargeDisplay(charge, { hideGst: true });
  if (!display.main || display.main === "Not listed") {
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
  if (!charge) return "Not listed";
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

function buildOverdueDrawerSlabBlocks(overdueChargeSlabs, overdueCharge, candidates) {
  const blocks = [];
  if (overdueChargeSlabs && overdueChargeSlabs.length > 1) {
    const first = overdueChargeSlabs[0];
    const isDcbBank =
      overdueCharge && normalizeText(overdueCharge.bank_name) === "dcb bank";
    blocks.push({
      title: "Overdue charge by range",
      leftHeader: formatSlabColumnHeader(first),
      rightHeader: isDcbBank ? "Monthly charge" : "Charge",
      rows: overdueChargeSlabs.map(function (charge) {
        return {
          range: formatChargeSlabBand(charge) || "Range",
          amount: formatInr(Number(charge.fixed_amount)),
          meta: ""
        };
      }),
      notes: [formatSlabBasisSentence(first, "overdue amount")]
    });
    return blocks;
  }

  const pctSlabs = listOverduePercentageSlabRows(candidates || [], overdueCharge);
  if (pctSlabs.length > 1) {
    const first = pctSlabs[0];
    blocks.push({
      title: "Overdue charge by range",
      leftHeader: formatSlabColumnHeader(first),
      rightHeader: "Charge",
      rows: pctSlabs.map(function (charge) {
        const notes = [charge.note_1, charge.note_2]
          .map(formatEncodedChargeNote)
          .filter(Boolean);
        return {
          range: formatChargeSlabBand(charge) || "Range",
          amount: formatChargePercentageValue(charge),
          meta: notes.join(" · ")
        };
      }),
      notes: [formatSlabBasisSentence(first, "overdue amount")]
    });
  }
  return blocks;
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

function notListedFeeSection(label) {
  return {
    id: label,
    label: label,
    entries: [
      {
        what: label,
        detail: "",
        amount: "Not listed",
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
    ordered.push(byLabel[label] || notListedFeeSection(label));
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
      : "Not listed";
    return [block.name, summary || "Not listed"];
  });
}

function listAdditionalAfterOfferPanelRows(charges, query, offer) {
  return listAdditionalAfterOfferPanelBlocks(charges, query, offer).map(
    function (block) {
      const first = block.variants && block.variants[0];
      const summary = first
        ? [first.summary, first.meta].filter(Boolean).join(" · ")
        : "Not listed";
      return [block.name, summary || "Not listed"];
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
    summary: slabEntry ? "" : first ? first.amount : "Not listed",
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
        summary: slabEntry ? "" : first ? first.amount : "Not listed",
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
  const overdueCandidates = listRankedAfterOfferCharges(
    bankCharges,
    offerQuery,
    offer,
    rankOverdueCharge
  );
  const overdueCharge = overdueCandidates.length ? overdueCandidates[0] : null;
  const overdueChargeSlabs = listMatchingChargeSlabs(
    overdueCandidates,
    overdueCharge
  );
  const overdueSlabSummary =
    buildOverduePercentageSlabSummary(overdueCandidates, offer.bank_name);
  const emiBounceCandidates = listRankedAfterOfferCharges(
    bankCharges,
    offerQuery,
    offer,
    rankEmiBounceCharge
  );
  const emiBounceCharge = emiBounceCandidates.length ? emiBounceCandidates[0] : null;
  const areaChargeSummary = buildAreaChargeSummary(
    emiBounceCandidates,
    "Metro",
    offer.bank_name
  );
  const slabChargeSummary = buildSlabChargeSummary(
    emiBounceCandidates,
    offer.bank_name
  );
  const emiBounceSummary = areaChargeSummary || slabChargeSummary;
  const prepaymentChargeDisplay = formatPrepaymentChargeDisplay(
    prepayOwnFundsCharge
  );
  const overdueChargeDisplay =
    overdueChargeSlabs.length > 1
      ? {
          main: "Fixed amount by overdue range",
          details: [],
          note: "",
          action: "overdue-slabs"
        }
      : overdueSlabSummary
        ? overdueSlabSummary.display
        : formatChargeDisplay(overdueCharge, {
            hideBasis: true
          });
  const emiBounceChargeDisplay = emiBounceSummary
    ? emiBounceSummary.display
    : formatChargeDisplay(emiBounceCharge, {
        hideBasis: true,
        hideUnit: true,
        hideGst: true
      });
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
    rateChangeChargeDisplay: formatRateChangeChargeDisplay(
      rateChangeTypeSwitchCharge,
      rateChangeTypeSwitchSlabs
    ),
    rateChangeChargeSortValue: rateChangeSortValue(
      rateChangeTypeSwitchCharge,
      rateChangeTypeSwitchSlabs
    ),
    rateChangeChargeSlabs: rateChangeTypeSwitchSlabs,
    rateChangeTypeSwitchCharge: rateChangeTypeSwitchCharge,
    rateChangeRepricingCharge: rateChangeRepricingCharge,
    rateChangeBenchmarkCharge: rateChangeBenchmarkCharge,
    rateChangeTypeSwitchCandidates: rateChangeTypeSwitchCandidates,
    rateChangeRepricingCandidates: rateChangeRepricingCandidates,
    rateChangeBenchmarkCandidates: rateChangeBenchmarkCandidates,
    overdueChargeDisplay: overdueChargeDisplay,
    overdueDetailFootnote: overdueSlabSummary
      ? overdueSlabSummary.footnote
      : "",
    emiBounceChargeDisplay: emiBounceChargeDisplay,
    emiBounceDetailFootnote: emiBounceSummary ? emiBounceSummary.footnote : "",
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
    emiBounceCharge: emiBounceCharge
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

function chargeDisplayHtml(display, noteGroupId, options) {
  const opts = options || {};
  const value = display || { main: "Not listed", details: [], note: "" };
  const details = (value.details || [])
    .map(function (detail) {
      return (
        '<span class="hlc-charge-rule-subnote hlc-charge-rule-detail">' +
        escapeHtml(detail) +
        "</span>"
      );
    })
    .join("");
  return (
    '<span class="hlc-charge-rule">' +
    '<span class="hlc-charge-rule-main">' +
    escapeHtml(value.main) +
    (value.mainSuffix
      ? '<span class="hlc-charge-rule-subnote hlc-charge-rule-main-suffix">' +
        escapeHtml(value.mainSuffix) +
        "</span>"
      : "") +
    footnoteRefHtml(value.marker, noteGroupId, {
      plain: !!opts.plainMarker
    }) +
    "</span>" +
    details +
    "</span>"
  );
}

/**
 * Charge cell markup. Markers inside the slab button use plain superscripts
 * (data-note-target) so we never nest interactive elements.
 */
function chargeCellHtml(row, column) {
  const display = row[column.key];
  const noteGroupId = chargesNoteGroupId(column.label);
  if (!(display && display.action)) {
    return chargeDisplayHtml(display, noteGroupId);
  }
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
    chargeDisplayHtml(display, noteGroupId, { plainMarker: true }) +
    '<svg class="hlc-charge-detail-arrow" viewBox="0 0 10 10" aria-hidden="true" focusable="false"><path d="M2.2 1.2 6.8 5 2.2 8.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
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
  if (column.type === "pct") return "hlc-col-w-pct";
  if (column.type === "inr") return "hlc-col-w-inr";
  if (column.type === "charge") return "hlc-col-w-charge";
  if (column.key === "tenureLabel") return "hlc-col-w-tenure";
  if (column.key === "otherChargeNote") return "hlc-col-w-note";
  return "hlc-col-w-text";
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
    coMonthlyIncome: document.getElementById("hlc-co-income"),
    coExistingEmis: document.getElementById("hlc-co-existing-emis"),
    coCardLimits: document.getElementById("hlc-co-card-limits"),
    occupation: document.getElementById("hlc-occupation"),
    purpose: document.getElementById("hlc-purpose"),
    propertyValue: document.getElementById("hlc-property-value"),
    loanHint: document.getElementById("hlc-loan-hint"),
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
    const rows = sortRows(state.rows, state.sortKey, state.sortDir);
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
        coMonthlyIncome: el.coMonthlyIncome ? el.coMonthlyIncome.value : "0",
        coExistingEmis: el.coExistingEmis ? el.coExistingEmis.value : "0",
        coCardLimits: el.coCardLimits ? el.coCardLimits.value : "0",
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
    el.loanHint.textContent = "";
  }

  function setOccupation(value) {
    if (!el.occupation) return;
    el.occupation.value = value;
    document.querySelectorAll(".hlc-occupation-pills .hlc-chip[data-occupation]").forEach(function (btn) {
      const selected = btn.getAttribute("data-occupation") === value;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  }

  function setPurpose(value) {
    if (!el.purpose) return;
    const purpose = normalizePurpose(value);
    el.purpose.value = purpose;
    document.querySelectorAll(".hlc-purpose-pills .hlc-chip[data-purpose]").forEach(function (btn) {
      const selected = btn.getAttribute("data-purpose") === purpose;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  }

  function setFormMoreOpen(open) {
    const details = document.getElementById("hlc-form-more");
    if (!details) return;
    details.open = Boolean(open);
  }

  function setCoApplicant(value) {
    if (!el.coApplicant) return;
    const on = value === "yes" || value === true;
    el.coApplicant.value = on ? "yes" : "no";
    document.querySelectorAll(".hlc-coapplicant-pills .hlc-chip[data-coapplicant]").forEach(function (btn) {
      const selected = (btn.getAttribute("data-coapplicant") === "yes") === on;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    if (el.coApplicantFields) {
      if (on) el.coApplicantFields.removeAttribute("hidden");
      else el.coApplicantFields.setAttribute("hidden", "");
    }
    if (on) setFormMoreOpen(true);
  }

  function setRateType(value) {
    const rate = value === "Fixed" ? "Fixed" : "Floating";
    state.productFilters.fixedRate = rate === "Fixed";
    if (
      !state.productFilters.fixedRate &&
      state.sortKey === "prepaymentChargeDisplay"
    ) {
      state.sortKey = DEFAULT_SORT_KEY;
      state.sortDir = DEFAULT_SORT_DIR;
    }
    document.querySelectorAll(".hlc-rate-pills .hlc-chip[data-rate-type]").forEach(function (btn) {
      const selected = btn.getAttribute("data-rate-type") === rate;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
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

  function setFacilityType(value) {
    const facility = value === "Overdraft" ? "Overdraft" : "Term Loan";
    state.productFilters.overdraft = facility === "Overdraft";
    document.querySelectorAll(".hlc-facility-pills .hlc-chip[data-facility-type]").forEach(function (btn) {
      const selected = btn.getAttribute("data-facility-type") === facility;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    updateFiltersBadge();
  }

  function setBankType(value) {
    const bankType = normalizeBankType(value);
    state.productFilters.bankType = bankType;
    document.querySelectorAll(".hlc-bank-type-pills .hlc-chip[data-bank-type]").forEach(function (btn) {
      const selected = btn.getAttribute("data-bank-type") === bankType;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    updateFiltersBadge();
  }

  function countActiveProductFilters(filters) {
    const f = filters || defaultProductFilters();
    let count = 0;
    if (f.govtPsu) count += 1;
    if (f.womenApplicant) count += 1;
    if (f.greenHome) count += 1;
    if (f.insurance) count += 1;
    if (f.fixedRate) count += 1;
    if (f.overdraft) count += 1;
    if (normalizeBankType(f.bankType) !== DEFAULT_BANK_TYPE) count += 1;
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
    setRateType(DEFAULT_RATE_TYPE);
    setFacilityType(DEFAULT_FACILITY_TYPE);
    setBankType(DEFAULT_BANK_TYPE);
    document.querySelectorAll("[data-product-filter]").forEach(function (el) {
      setProductFilterControl(el, false);
    });
    updateFiltersBadge();
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
    el.propertyValue,
    el.coMonthlyIncome,
    el.coExistingEmis,
    el.coCardLimits
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

  function renderTable(options) {
    const highlightDeltas = !!(options && options.highlightDeltas);
    const showPrepayment =
      state.group === "laterCharges" && state.productFilters.fixedRate;
    const columns = columnsForGroup(state.group, showPrepayment);
    const rows = sortRows(state.rows, state.sortKey, state.sortDir);
    const nextSnapshot = buildCellSnapshot(rows, columns);
    const prevSnapshot = state.cellSnapshot;
    const visibleRows =
      state.showAllBanks || rows.length <= INITIAL_VISIBLE_BANKS
        ? rows
        : rows.slice(0, INITIAL_VISIBLE_BANKS);
    const footnoteState = buildChargesFootnote(visibleRows);

    el.meta.textContent =
      visibleRows.length === rows.length
        ? rows.length +
          " bank" +
          (rows.length === 1 ? "" : "s")
        : "Showing " +
          visibleRows.length +
          " of " +
          rows.length +
          " banks";
    el.status.textContent = "";
    renderFreshnessNote();

    if (el.headTable) el.headTable.setAttribute("data-group", state.group);
    if (el.table) el.table.setAttribute("data-group", state.group);
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
      '<span class="hlc-bank-head-label">Bank</span>' +
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
        state.productFilters.fixedRate ? "Fixed" : "Floating"
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
      const headerLabel =
        isPrepayment || isRateChange
          ? '<span class="hlc-column-label">' +
            '<span class="hlc-column-title">' +
            escapeHtml(column.label) +
            footnoteHtml +
            sortInd +
            "</span>" +
            (isPrepayment ? prepaymentMethods : rateChangeMethods) +
            "</span>"
          : escapeHtml(column.label);
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
        (isPrepayment || isRateChange ? "" : footnoteHtml) +
        (isPrepayment || isRateChange ? "" : sortInd) +
        "</th>";
    });
    headHtml += "</tr>";
    el.head.innerHTML = headHtml;

    updateChargesFootnote(footnoteState.text);

    const colCount = columns.length + 1 + (useFillCol ? 1 : 0);

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
        const cells = columns
          .map(function (column) {
            const display = cellValue(row, column);
            const deltaClass =
              highlightDeltas && cellDidChange(prevSnapshot, row.id, column.key, display)
                ? " hlc-cell-delta"
                : "";
            const hasCalculation =
              column.key === "loanAmount" ||
              column.key === "emi" ||
              column.key === "processingFee" ||
              column.key === "propertyCheckCharges" ||
              column.key === "governmentCharges";
            const cellContent =
              column.type === "charge"
                ? chargeCellHtml(row, column)
                : hasCalculation
                  ? '<button type="button" class="hlc-charge-amount" data-calculation-detail="' +
                    column.key +
                    '" data-row-id="' +
                    row.id +
                    '" aria-label="Show how ' +
                    column.label.toLowerCase() +
                    " for " +
                    row.bankName.replace(/"/g, "&quot;") +
                    ' was calculated">' +
                    display +
                    "</button>"
                  : '<span class="hlc-cell-value">' + display + "</span>";
            return (
              '<td class="' +
              columnAlignClass(column) +
              deltaClass +
              '" data-col="' +
              column.key +
              '" headers="hlc-th-' +
              escapeHtml(column.key) +
              '"' +
              (column.type === "charge" &&
              row[column.key] &&
              row[column.key].marker
                ? ' aria-describedby="hlc-charges-note"'
                : "") +
              ">" +
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
          '<span class="hlc-bank-name-text">' +
          escapeHtml(row.bankName) +
          "</span></div>" +
          '<div class="hlc-bank-sub">' +
          '<span class="hlc-bank-scheme">' +
          row.scheme +
          "</span>" +
          '<button type="button" class="hlc-bank-detail" data-detail="' +
          row.id +
          '" aria-label="More about ' +
          escapeHtml(row.bankName) +
          '"><span class="hlc-bank-detail-label">More</span><svg class="hlc-bank-detail-mark" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="5" r="1" fill="currentColor"/><path d="M8 7.15v4.6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></button>' +
          "</div>" +
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
   * Bank stays on CSS width.
   */
  function shouldHugPhoneCompareColumns(group) {
    return (
      group === "essentials" ||
      group === "charges" ||
      group === "laterCharges"
    );
  }

  function phoneCompareColSkipIndices(group, headCells) {
    const skip = new Set([0]);
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
   * Phone Charges / Other charges: column width = header title row (label,
   * footnote marker, sort arrows) + th padding. Dropdowns under a title may
   * widen the column when they need more room.
   */
  function measurePhoneCompareColHeaderWidth(cell) {
    if (!cell || cell.tagName !== "TH") return 0;
    const title = cell.querySelector(".hlc-column-title");
    let width = measureProbeWidth(title || cell, cell);
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
    return width;
  }

  function measureOverviewColContentWidth(cell) {
    if (!cell) return 0;
    const isHead = cell.tagName === "TH";
    const content = isHead
      ? cell
      : cell.querySelector(
          ".hlc-charge-amount, .hlc-cell-value, .hlc-charge-rule"
        ) || cell;
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
      el.headTable.style.width = "100%";
      el.table.style.width = "100%";
      el.headTable.style.tableLayout = "";
      el.table.style.tableLayout = "";
      if (el.headScroll && el.scroll) {
        el.headScroll.scrollLeft = el.scroll.scrollLeft;
      }
      return;
    }

    el.headTable.style.width = "max-content";
    el.table.style.width = "max-content";
    el.headTable.style.tableLayout = "fixed";
    el.table.style.tableLayout = "fixed";

    const skipIndices = phoneCompareColSkipIndices(state.group, headCells);
    const zeroPx = "0px";
    const headerOnly = shouldSizePhoneColsFromHeaderOnly(state.group);

    /* Skip bank (and later-charges fill); size cols to content or header only. */
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

      let maxW = headerOnly
        ? measurePhoneCompareColHeaderWidth(headCells[i])
        : measureOverviewColContentWidth(headCells[i]);
      if (!headerOnly) {
        for (let r = 0; r < bodyRows.length; r++) {
          maxW = Math.max(
            maxW,
            measureOverviewColContentWidth(bodyRows[r].children[i])
          );
        }
      }
      if (maxW <= 0) continue;
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
      el.headScroll.scrollLeft = el.scroll.scrollLeft;
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
      Array.prototype.push.apply(
        rateChangeNotes,
        buildRateChangeExceptionNotes(
          visibleRows,
          state.rateChangeMethod,
          state.productFilters.fixedRate
        )
      );
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

      const overdueNotes = Array.from(
        new Set(
          visibleRows
            .map(function (row) {
              return row.overdueDetailFootnote;
            })
            .filter(Boolean)
        )
      ).map(escapeHtml);
      const emiNotes = Array.from(
        new Set(
          visibleRows
            .map(function (row) {
              return row.emiBounceDetailFootnote;
            })
            .filter(Boolean)
        )
      ).map(escapeHtml);
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
          ].concat(overdueNotes)
        : overdueNotes.slice();
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
      emiGroupNotes.push.apply(emiGroupNotes, emiNotes);
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
    result.headerMarkers.processingFee = "*";
    groups.push(
      chargesNoteGroupHtml(
        columnLabelForKey("charges", "processingFee"),
        [escapeHtml(PROCESSING_FEE_LOGIN_NOTE)]
      )
    );
    result.headerMarkers.propertyCheckCharges = "*";
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
        result.headerMarkers.governmentCharges = "^";
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

  function showDrawer(title, subtitle, bodyHtml) {
    if (isExploreMobile() && isFiltersOpen()) {
      setFiltersOpen(false);
    }
    const hasGroups = String(bodyHtml || "").indexOf("hlc-drawer-group") >= 0;
    if (hasGroups) {
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
      if (el.drawerActionsBar) {
        el.drawerActionsBar.hidden = true;
      }
      if (el.drawerToggleAll) {
        el.drawerToggleAll.hidden = true;
      }
      el.drawer.classList.remove("hlc-drawer--sections");
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
    if (detail !== "overdue-slabs" && detail !== "rate-change-slabs") return;
    const row = state.rows.find(function (entry) {
      return entry.id === id;
    });
    if (!row) return;

    if (detail === "rate-change-slabs") {
      if (!row.rateChangeChargeSlabs || !row.rateChangeChargeSlabs.length) return;
      const slabRows = row.rateChangeChargeSlabs.map(function (charge) {
        return [
          formatChargeSlabBand(charge),
          formatChargeDisplayText(
            formatChargeDisplay(charge, {
              hideBasis: true,
              hideUnit: true,
              hideGst: true
            })
          )
        ];
      });
      const bodyHtml =
        drawerSlabTable("Loan amount", "Charge", slabRows) +
        '<p class="hlc-drawer-foot">' +
        escapeHtml(
          "Each listed charge applies per instance. Figures are indicative. The bank decides final terms."
        ) +
        "</p>";
      showDrawer(
        row.bankName,
        "Rate change charge · Fixed amount by loan amount range",
        bodyHtml
      );
      return;
    }

    if (!row.overdueChargeSlabs || !row.overdueChargeSlabs.length) return;

    const slabRows = row.overdueChargeSlabs.map(function (charge) {
      return [
        formatChargeSlabBand(charge),
        formatInr(Number(charge.fixed_amount))
      ];
    });
    const isDcbBank = normalizeText(row.bankName) === "dcb bank";
    const chargeHeading = isDcbBank ? "Monthly charge" : "Charge";
    const footNote = isDcbBank
      ? "Each listed charge is applied every month, or for part of a month, while the amount stays overdue. Figures are indicative. The bank decides final terms."
      : "Each listed charge applies per instance. Figures are indicative. The bank decides final terms.";
    const bodyHtml =
      drawerSlabTable("Overdue amount", chargeHeading, slabRows) +
      '<p class="hlc-drawer-foot">' +
      footNote +
      "</p>";

    showDrawer(
      row.bankName,
      "Overdue charge · Fixed amount by overdue range",
      bodyHtml
    );
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

  /** One row in a notebook-style sum: optional operator, then the value. */
  function calculationLine(value, operator) {
    return (
      '<div class="hlc-calc-line">' +
      '<span class="hlc-calc-op" aria-hidden="true">' +
      (operator || "") +
      "</span>" +
      '<span class="hlc-calc-val">' +
      value +
      "</span>" +
      "</div>"
    );
  }

  function calculationRule() {
    return '<div class="hlc-calc-rule" aria-hidden="true"></div>';
  }

  function calculationAnswer(value) {
    return (
      '<div class="hlc-calc-line hlc-calc-line--answer">' +
      '<span class="hlc-calc-op" aria-hidden="true"></span>' +
      '<span class="hlc-calc-val">' +
      value +
      "</span>" +
      "</div>"
    );
  }

  /**
   * Stacked arithmetic: first value, then each next line with its operator,
   * then a rule and the answer (school-notebook layout).
   * lines: [{ value, op? }] — first line’s op is ignored.
   */
  function calculationStack(lines, answer) {
    if (!lines || !lines.length) return "";
    let html = '<div class="hlc-calc-stack">';
    lines.forEach(function (line, index) {
      html += calculationLine(line.value, index === 0 ? "" : line.op || "");
    });
    if (answer != null && answer !== "") {
      html += calculationRule() + calculationAnswer(answer);
    }
    html += "</div>";
    return html;
  }

  /** Sum / list of amounts stacked with the same operator, then answer. */
  function calculationSumStack(values, operator, answer) {
    return calculationStack(
      values.map(function (value, index) {
        return { value: value, op: index === 0 ? "" : operator };
      }),
      answer
    );
  }

  let calculationStepSerial = 0;

  function resetCalculationSteps() {
    calculationStepSerial = 0;
  }

  /**
   * Numbered calc card (1, 2, 3…). options.wide → full row under the 2-col grid.
   */
  function calculationStep(label, stackHtml, note, options) {
    calculationStepSerial += 1;
    const n = calculationStepSerial;
    const wide = options && options.wide;
    return (
      '<div class="hlc-calc-step' +
      (wide ? " hlc-calc-step--wide" : "") +
      '">' +
      '<p class="hlc-calc-step-label">' +
      '<span class="hlc-calc-step-num">' +
      n +
      "</span>" +
      '<span class="hlc-calc-step-title">' +
      label +
      "</span>" +
      "</p>" +
      stackHtml +
      (note ? '<p class="hlc-calc-detail">' + note + "</p>" : "") +
      "</div>"
    );
  }

  function calculationTotal(label, amount, stackHtml) {
    return (
      '<div class="hlc-calc-total">' +
      '<div class="hlc-calc-total-main">' +
      '<p class="hlc-calc-total-label">' +
      label +
      "</p>" +
      (stackHtml || "") +
      "</div>" +
      '<strong class="hlc-calc-total-amount">' +
      amount +
      "</strong>" +
      "</div>"
    );
  }

  function formatCalculationPct(value, fractionDigits) {
    if (!Number.isFinite(Number(value))) return "—";
    return Number(value).toFixed(fractionDigits) + "%";
  }

  function loanAmountCalculationHtml(row) {
    resetCalculationSteps();
    const query = readQuery();
    const propertyValue = Math.max(0, Number(query.propertyValue) || 0);
    const propertyPct =
      propertyValue > 0 ? (row.fromProperty / propertyValue) * 100 : 0;
    const totalIncome =
      (Number(query.monthlyIncome) || 0) +
      (query.includeCoApplicant ? Number(query.coMonthlyIncome) || 0 : 0);
    const existingEmis =
      (Number(query.existingEmis) || 0) +
      (query.includeCoApplicant ? Number(query.coExistingEmis) || 0 : 0);
    const cardLimits =
      (Number(query.cardLimits) || 0) +
      (query.includeCoApplicant ? Number(query.coCardLimits) || 0 : 0);
    const foirPct = normalizeFoirPct(query.foirPct);
    const cardLoadPct = normalizeCardLoadPct(query.cardLoadPct);
    const incomeAllowance = totalIncome * (foirPct / 100);
    const cardLoad = cardLimits * (cardLoadPct / 100);
    const emiRoom = Math.max(0, incomeAllowance - existingEmis - cardLoad);
    const applicableLimits = [row.fromProperty, row.fromIncome];
    let steps =
      calculationStep(
        "Property limit",
        calculationStack(
          [
            { value: formatInr(propertyValue) },
            { value: formatPct(propertyPct), op: "×" }
          ],
          formatInr(row.fromProperty)
        )
      ) +
      calculationStep(
        "Income allowance",
        calculationStack(
          [
            { value: formatInr(totalIncome) },
            { value: formatPct(foirPct), op: "×" }
          ],
          formatInr(incomeAllowance)
        )
      ) +
      calculationStep(
        "Credit-card load",
        calculationStack(
          [
            { value: formatInr(cardLimits) },
            { value: formatPct(cardLoadPct), op: "×" }
          ],
          formatInr(cardLoad)
        )
      ) +
      calculationStep(
        "Monthly EMI available",
        calculationStack(
          [
            { value: formatInr(incomeAllowance) },
            { value: formatInr(existingEmis), op: "−" },
            { value: formatInr(cardLoad), op: "−" }
          ],
          formatInr(emiRoom)
        )
      ) +
      calculationStep(
        "Income limit",
        calculationStack(
          [
            { value: formatInr(emiRoom) + " / month" },
            { value: formatPct(row.effectiveRoiPct) },
            { value: String(row.tenureMonths) + " months" }
          ],
          formatInr(row.fromIncome)
        ),
        "Standard EMI formula."
      );

    const bankMaximum =
      row.offer &&
      row.offer.req_amount_max != null &&
      Number.isFinite(Number(row.offer.req_amount_max))
        ? Number(row.offer.req_amount_max)
        : null;
    if (
      bankMaximum != null &&
      bankMaximum <= Math.min(row.fromProperty, row.fromIncome)
    ) {
      applicableLimits.push(bankMaximum);
      steps += calculationStep(
        "Bank maximum",
        calculationStack([{ value: formatInr(bankMaximum) }], null)
      );
    }

    const limitLabels = applicableLimits.map(function (amount) {
      return formatInr(amount);
    });

    return (
      '<div class="hlc-calc-steps">' +
      steps +
      calculationStep(
        "Lowest of these limits",
        calculationStack(
          limitLabels.map(function (value) {
            return { value: value };
          }),
          formatInr(row.loanAmount)
        ),
        null,
        { wide: true }
      ) +
      "</div>" +
      calculationTotal("Loan amount shown", formatInr(row.loanAmount))
    );
  }

  function emiCalculationHtml(row) {
    resetCalculationSteps();
    const monthlyRate = row.roiDecimal / 12;
    const monthlyRateDecimal = monthlyRate.toFixed(8);
    const monthlyFactor = (1 + monthlyRate).toFixed(8);
    const power =
      "(" + monthlyFactor + ")<sup>" + row.tenureMonths + "</sup>";
    const formulaStack =
      '<div class="hlc-calc-stack hlc-calc-stack--formula">' +
      '<div class="hlc-calc-fraction">' +
      '<div class="hlc-calc-fraction-num">' +
      calculationLine(formatInr(row.loanAmount)) +
      calculationLine(monthlyRateDecimal, "×") +
      calculationLine(power, "×") +
      "</div>" +
      '<div class="hlc-calc-fraction-bar" aria-hidden="true"></div>' +
      '<div class="hlc-calc-fraction-den">' +
      calculationLine(power + " − 1") +
      "</div>" +
      "</div>" +
      calculationRule() +
      calculationAnswer(formatInr(row.emi)) +
      "</div>";

    return (
      '<div class="hlc-calc-steps">' +
      calculationStep(
        "Monthly interest rate",
        calculationStack(
          [
            { value: formatPct(row.effectiveRoiPct) },
            { value: "12", op: "÷" }
          ],
          formatCalculationPct(monthlyRate * 100, 4)
        )
      ) +
      calculationStep("EMI", formulaStack) +
      "</div>" +
      calculationTotal("EMI shown", formatInr(row.emi))
    );
  }

  function processingFeeCalculationHtml(row) {
    resetCalculationSteps();
    const charge = row.processingCharge;
    if (!charge) {
      return (
        '<div class="hlc-calc-steps">' +
        calculationStep(
          "Processing fee rule",
          calculationStack([{ value: "No matching rule listed" }], null),
          null,
          { wide: true }
        ) +
        "</div>" +
        calculationTotal("Amount shown", formatInr(row.processingFee))
      );
    }

    const pct =
      charge.percentage == null ? NaN : Number(charge.percentage);
    const fixed =
      charge.fixed_amount == null ? NaN : Number(charge.fixed_amount);
    let steps = "";

    if (Number.isFinite(pct) && pct > 0) {
      const beforeLimits = row.loanAmount * pct;
      steps += calculationStep(
        "Percentage",
        calculationStack(
          [
            { value: formatInr(row.loanAmount) },
            { value: formatPct(pct * 100), op: "×" }
          ],
          formatInr(beforeLimits)
        )
      );

      if (
        charge.charge_min != null &&
        beforeLimits < Number(charge.charge_min)
      ) {
        const minimum = Number(charge.charge_min);
        steps += calculationStep(
          "Minimum applied",
          calculationStack(
            [
              { value: formatInr(beforeLimits) },
              { value: formatInr(minimum), op: "→" }
            ],
            formatInr(minimum)
          ),
          "Below the bank minimum."
        );
      } else if (
        charge.charge_max != null &&
        beforeLimits > Number(charge.charge_max)
      ) {
        const maximum = Number(charge.charge_max);
        steps += calculationStep(
          "Maximum applied",
          calculationStack(
            [
              { value: formatInr(beforeLimits) },
              { value: formatInr(maximum), op: "→" }
            ],
            formatInr(maximum)
          ),
          "Above the bank maximum."
        );
      } else if (charge.charge_min != null || charge.charge_max != null) {
        let rangeNote = "Within the allowed range.";
        if (charge.charge_min != null && charge.charge_max != null) {
          rangeNote =
            "Within " +
            formatInr(Number(charge.charge_min)) +
            " – " +
            formatInr(Number(charge.charge_max)) +
            ".";
        } else if (charge.charge_min != null) {
          rangeNote =
            "Above the " +
            formatInr(Number(charge.charge_min)) +
            " minimum.";
        } else if (charge.charge_max != null) {
          rangeNote =
            "Below the " +
            formatInr(Number(charge.charge_max)) +
            " maximum.";
        }
        steps += calculationStep(
          "Limit check",
          calculationStack([{ value: formatInr(beforeLimits) }], formatInr(beforeLimits)),
          rangeNote
        );
      }
    } else if (Number.isFinite(fixed)) {
      steps += calculationStep(
        "Flat fee",
        calculationStack([{ value: formatInr(fixed) }], null),
        null,
        { wide: true }
      );
    } else if (charge.percentage === 0) {
      steps += calculationStep(
        "Percentage",
        calculationStack(
          [
            { value: formatInr(row.loanAmount) },
            { value: "0%", op: "×" }
          ],
          formatInr(0)
        ),
        null,
        { wide: true }
      );
    }

    return (
      '<div class="hlc-calc-steps">' +
      steps +
      "</div>" +
      calculationTotal("Processing fee shown", formatInr(row.processingFee))
    );
  }

  function propertyCheckChargeCalculationHtml(row) {
    resetCalculationSteps();
    const lines = row.propertyCheckChargeRows || [];
    const amounts = lines.map(function (line) {
      return line.amount;
    });
    const steps = lines
      .map(function (line) {
        return calculationStep(
          line.name,
          calculationStack([{ value: formatInr(line.amount) }], null)
        );
      })
      .join("");
    const totalLabel = formatInr(row.propertyCheckCharges);
    const numberedAmounts = amounts.filter(function (amount) {
      return amount != null && Number.isFinite(amount);
    });
    const totalStack =
      numberedAmounts.length > 1
        ? calculationSumStack(
            numberedAmounts.map(function (amount) {
              return formatInr(amount);
            }),
            "+",
            totalLabel
          )
        : calculationStack([{ value: totalLabel }], null);

    return (
      '<div class="hlc-calc-steps">' +
      steps +
      (lines.length > 1
        ? calculationStep("Total", totalStack, null, { wide: true })
        : "") +
      "</div>" +
      calculationTotal("Property check charges shown", totalLabel)
    );
  }

  function governmentChargeName(chargeName) {
    const names = {
      "MODT Stamp Duty": "MODT stamp duty",
      "Notice of Intimation Registration Fee": "NOI registration",
      "Notice of Intimation Filing Fee": "NOI filing",
      "CERSAI Security Interest Creation": "CERSAI creation"
    };
    return names[chargeName] || chargeName;
  }

  function governmentChargeCalculationHtml(row) {
    resetCalculationSteps();
    const query = readQuery();
    const charges = listApplicableGovernmentCharges(
      (state.dataset && state.dataset.government_charges) || [],
      query,
      row.loanAmount,
      DEFAULT_JURISDICTION_STATE
    );
    function governmentChargeGstStack(parts) {
      if (!parts.gstRate) return "";
      return calculationStack(
        [
          { value: formatInr(parts.base) },
          {
            value:
              formatInr(parts.gstAmount) +
              " (" +
              formatPct(parts.gstRate * 100) +
              " GST)",
            op: "+"
          }
        ],
        formatInr(parts.total)
      );
    }

    const amounts = [];
    const steps = charges
      .map(function (charge) {
        const parts = governmentChargeAmountParts(charge, row.loanAmount);
        const amount = parts.total;
        amounts.push(amount);
        const method = normalizeText(charge.calculation_method);
        if (method === "percentage") {
          const beforeLimits = row.loanAmount * Number(charge.percentage);
          const minApplied =
            charge.min_amount_inr != null &&
            beforeLimits < Number(charge.min_amount_inr);
          const maxApplied =
            charge.max_amount_inr != null &&
            beforeLimits > Number(charge.max_amount_inr);
          let note = "";
          if (minApplied) {
            note =
              "Minimum " +
              formatInr(Number(charge.min_amount_inr)) +
              " applied.";
          } else if (maxApplied) {
            note =
              "Maximum " +
              formatInr(Number(charge.max_amount_inr)) +
              " applied.";
          }
          let stack = calculationStack(
            [
              { value: formatInr(row.loanAmount) },
              {
                value: formatPct(Number(charge.percentage) * 100),
                op: "×"
              }
            ],
            formatInr(beforeLimits)
          );
          if (minApplied || maxApplied) {
            stack += calculationStack(
              [
                { value: formatInr(beforeLimits) },
                { value: formatInr(parts.base), op: "→" }
              ],
              formatInr(parts.base)
            );
          }
          stack += governmentChargeGstStack(parts);
          return calculationStep(
            governmentChargeName(charge.charge_name),
            stack,
            note
          );
        }
        if (parts.gstRate > 0) {
          return calculationStep(
            governmentChargeName(charge.charge_name),
            governmentChargeGstStack(parts)
          );
        }
        return calculationStep(
          governmentChargeName(charge.charge_name),
          calculationStack([{ value: formatInr(amount) }], null)
        );
      })
      .join("");

    const totalStack =
      amounts.length > 1
        ? calculationSumStack(
            amounts.map(function (amount) {
              return formatInr(amount);
            }),
            "+",
            formatInr(row.governmentCharges)
          )
        : calculationStack(
            [{ value: formatInr(row.governmentCharges) }],
            null
          );

    return (
      '<div class="hlc-calc-steps">' +
      steps +
      (amounts.length > 1
        ? calculationStep("Total", totalStack, null, { wide: true })
        : "") +
      "</div>" +
      calculationTotal(
        "Government charges shown",
        formatInr(row.governmentCharges)
      )
    );
  }

  function openCalculation(id, calculationKey) {
    const row = state.rows.find(function (entry) {
      return entry.id === id;
    });
    if (!row) return;

    if (calculationKey === "loanAmount") {
      showDrawer(
        "Loan amount",
        row.bankName + " · " + (row.scheme || ""),
        loanAmountCalculationHtml(row) +
          '<p class="hlc-drawer-foot">This is an indicative amount based on the inputs shown. The lender decides final eligibility and sanction.</p>'
      );
      return;
    }

    if (calculationKey === "emi") {
      showDrawer(
        "EMI",
        row.bankName + " · " + (row.scheme || ""),
        emiCalculationHtml(row) +
          '<p class="hlc-drawer-foot">This is an indicative EMI based on the displayed loan amount, rate and tenure. The lender decides final terms.</p>'
      );
      return;
    }

    if (calculationKey === "processingFee") {
      showDrawer(
        "Processing fee",
        row.bankName + " · " + (row.scheme || ""),
        processingFeeCalculationHtml(row) +
          '<p class="hlc-drawer-foot">Calculated from the processing fee rule matched to your inputs. Banks often take part of this upfront as a login fee to file the application; that amount differs by bank and is not broken out separately yet. Final charges remain subject to the lender’s terms.</p>'
      );
      return;
    }

    if (calculationKey === "propertyCheckCharges") {
      showDrawer(
        "Property check charges",
        row.bankName + " · " + (row.scheme || ""),
        propertyCheckChargeCalculationHtml(row) +
          '<p class="hlc-drawer-foot">Typical industry average for legal, title-search, and valuation checks. GST is extra. Exact fees may differ by lender.</p>'
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
      showDrawer(
        "Government charges",
        "Loan amount " + formatInr(row.loanAmount),
        governmentChargeCalculationHtml(row) +
          (note
            ? '<p class="hlc-drawer-foot hlc-drawer-foot--lines">' +
              note.replace(/\n/g, "<br>") +
              "</p>"
            : "")
      );
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

  function feeEntryAmountIsNotListed(entry) {
    const amount = String((entry && entry.amount) || "")
      .replace(/\u2014/g, "—")
      .trim();
    if (!amount || amount === "—") return true;
    return /^not listed$/i.test(amount);
  }

  function feeSectionIsNotListedOnly(section) {
    if (!section || !section.entries || !section.entries.length) return false;
    if (
      section.entries.some(function (entry) {
        return entry.kind === "slab-table" || entry.kind === "area-matrix";
      })
    ) {
      return false;
    }
    if ((section.notes || []).length) return false;
    return section.entries.every(feeEntryAmountIsNotListed);
  }

  function drawerFeeNotListedRowHtml(label) {
    return (
      '<div class="hlc-fee-flat-row">' +
      '<span class="hlc-fee-flat-name">' +
      escapeHtml(label || "Charge") +
      "</span>" +
      '<span class="hlc-fee-flat-value">Not listed</span>' +
      "</div>"
    );
  }

  function drawerFeeChargeBlockHtml(section) {
    if (!section || !section.entries || !section.entries.length) return "";
    if (section.label && feeSectionIsNotListedOnly(section)) {
      return drawerFeeNotListedRowHtml(section.label);
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

  function orderFeeSectionsListedFirst(sections) {
    const listed = [];
    const notListed = [];
    (sections || []).forEach(function (section) {
      if (feeSectionIsNotListedOnly(section)) notListed.push(section);
      else listed.push(section);
    });
    return listed.concat(notListed);
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
    const ordered = orderFeeSectionsListedFirst(sections);
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

  async function runMatch() {
    if (!state.dataset) return;
    if (!primaryFieldsAreComplete()) {
      root.setAttribute("aria-busy", "false");
      return;
    }
    root.setAttribute("aria-busy", "true");
    const query = readQuery();
    updateLoanHint(query);
    state.rows = await matchOffers(state.dataset, query, state.engine);
    applyPrepaymentMethodToRows(state.rows, state.prepaymentMethod);
    applyRateChangeMethodToRows(state.rows, state.rateChangeMethod);
    state.showAllBanks = false;
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
      return;
    }
    const fade = !!(options && options.fade);
    state.matchTimer = setTimeout(function () {
      const run = function () {
        return runMatch().catch(function (error) {
          console.error(error);
          showToast("Could not match banks. Refresh and try again.");
          root.setAttribute("aria-busy", "false");
        });
      };
      if (fade) withResultsFade(run, "rows");
      else run();
    }, MATCH_DEBOUNCE_MS);
  }

  function toggleSelect(id) {
    if (state.selected.has(id)) state.selected.delete(id);
    else state.selected.add(id);
    persistExploreDraft();
    renderTable();
  }

  function toggleSelectAllVisible() {
    const visibleRows = visibleBankRows();
    if (!visibleRows.length) return;
    if (selectAllCheckState(visibleRows) === "all") {
      visibleRows.forEach(function (row) {
        state.selected.delete(row.id);
      });
    } else {
      visibleRows.forEach(function (row) {
        state.selected.add(row.id);
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
      updateFiltersBadge();
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

  const occupationPills = document.querySelector(".hlc-occupation-pills");
  if (occupationPills) {
    occupationPills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-occupation]");
      if (!btn || !occupationPills.contains(btn)) return;
      event.preventDefault();
      setOccupation(btn.getAttribute("data-occupation"));
      scheduleMatch({ fade: true });
    });
  }

  const purposePills = document.querySelector(".hlc-purpose-pills");
  if (purposePills) {
    purposePills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-purpose]");
      if (!btn || !purposePills.contains(btn)) return;
      event.preventDefault();
      setPurpose(btn.getAttribute("data-purpose"));
      scheduleMatch({ fade: true });
    });
  }

  const coApplicantPills = document.querySelector(".hlc-coapplicant-pills");
  if (coApplicantPills) {
    coApplicantPills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-coapplicant]");
      if (!btn || !coApplicantPills.contains(btn)) return;
      event.preventDefault();
      setCoApplicant(btn.getAttribute("data-coapplicant"));
      scheduleMatch({ fade: true });
    });
  }

  setCoApplicant(el.coApplicant ? el.coApplicant.value : "no");

  const ratePills = document.querySelector(".hlc-rate-pills");
  if (ratePills) {
    ratePills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-rate-type]");
      if (!btn || !ratePills.contains(btn)) return;
      event.preventDefault();
      setRateType(btn.getAttribute("data-rate-type"));
      scheduleMatch({ fade: true });
    });
  }

  const facilityPills = document.querySelector(".hlc-facility-pills");
  if (facilityPills) {
    facilityPills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-facility-type]");
      if (!btn || !facilityPills.contains(btn)) return;
      event.preventDefault();
      setFacilityType(btn.getAttribute("data-facility-type"));
      scheduleMatch({ fade: true });
    });
  }

  const bankTypePills = document.querySelector(".hlc-bank-type-pills");
  if (bankTypePills) {
    bankTypePills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-bank-type]");
      if (!btn || !bankTypePills.contains(btn)) return;
      event.preventDefault();
      setBankType(btn.getAttribute("data-bank-type"));
      scheduleMatch({ fade: true });
    });
  }

  el.form.addEventListener("input", scheduleMatch);
  el.form.addEventListener("change", scheduleMatch);
  if (el.foir) {
    el.foir.addEventListener("change", syncFoirFace);
    el.foir.addEventListener("change", scheduleMatch);
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
      coMonthlyIncome: el.coMonthlyIncome ? el.coMonthlyIncome.value : "0",
      coExistingEmis: el.coExistingEmis ? el.coExistingEmis.value : "0",
      coCardLimits: el.coCardLimits ? el.coCardLimits.value : "0",
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
      var draft = {
        v: 1,
        ts: Date.now(),
        selectedIds: Array.from(state.selected),
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
      setInputValue(el.coMonthlyIncome, form.coMonthlyIncome);
      setInputValue(el.coExistingEmis, form.coExistingEmis);
      setInputValue(el.coCardLimits, form.coCardLimits);
      setInputValue(el.propertyValue, form.propertyValue);

      if (form.occupation) setOccupation(form.occupation);
      if (form.purpose) setPurpose(form.purpose);
      setCoApplicant(form.includeCoApplicant || "no");

      if (draft.filters && typeof draft.filters === "object") {
        state.productFilters = Object.assign(
          defaultProductFilters(),
          draft.filters
        );
      }
      syncProductFilterChips();
      setRateType(state.productFilters.fixedRate ? "Fixed" : "Floating");
      setFacilityType(state.productFilters.overdraft ? "Overdraft" : "Term Loan");
      setBankType(state.productFilters.bankType || DEFAULT_BANK_TYPE);

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
      coMonthlyIncome: el.coMonthlyIncome ? el.coMonthlyIncome.value : "0",
      coExistingEmis: el.coExistingEmis ? el.coExistingEmis.value : "0",
      coCardLimits: el.coCardLimits ? el.coCardLimits.value : "0",
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
    state.rows.forEach(function (row) {
      if (!row || row.id == null || !state.selected.has(row.id)) return;
      var cloned = cloneJson(row);
      if (cloned) banks.push(cloned);
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
  if (el.scroll) {
    el.scroll.addEventListener(
      "scroll",
      function () {
        syncCompareScroll(el.scroll);
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
  shortenBenchmarkToken,
  formatBenchmarkSwitchShortNote,
  RATE_CHANGE_BANK_MARKERS,
  RBI_FLOATING_PREPAY_HREF,
  FLOATING_PREPAY_NOTE,
  FIXED_FORECLOSURE_NOTE,
  PROCESSING_FEE_LOGIN_NOTE,
  PROPERTY_CHECK_ORIGIN,
  PROPERTY_CHECK_CHARGE_NAMES,
  PROPERTY_CHECK_NOTE,
  floatingPrepayNoteHtml,
  footnoteMarkersFromNoteParts,
  chargesNoteGroupId,
  footnoteRefHtml,
  chargesNoteGroupHtml,
  chargesNoteToolbarHtml,
  bindChargesNoteDropdowns,
  bindDrawerDropdowns,
  bindDetailsAccordion,
  drawerToolbarHtml,
  drawerDiscloseHtml,
  laterChargesColumns,
  columnsForGroup,
  DEFAULT_FOIR_PCT,
  DEFAULT_TENURE_YEARS,
  MAX_TENURE_YEARS,
  DEFAULT_CARD_LOAD_PCT,
  CARD_LOAD_PCT_CHOICES,
  FOIR_CHOICES,
  GOVT_PSU_BORROWER_CATEGORY,
  DEFAULT_RATE_TYPE,
  DEFAULT_FACILITY_TYPE,
  DEFAULT_BANK_TYPE,
  INITIAL_VISIBLE_BANKS,
  BANK_LOGO_FILES,
  bankLogoPath,
  bankLogoHtml,
  defaultProductFilters,
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
  pickOwnFundsPrepayCharge,
  pickTakeoverPrepayCharge,
  formatPrepaymentChargeDisplay,
  formatPrepaymentChargeDetail,
  listPartPrepaymentRulesForOffer,
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
