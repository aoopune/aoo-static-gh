"use strict";

const { Engine } = require("json-rules-engine");

const DATA_URL = "../data/home-loans-compare.json";
const MATCH_DEBOUNCE_MS = 280;
/** HLC_TESTING_MODE — when true (via data-hlc-testing / .hlc-testing-mode), skip UX delays. */
function isHlcTestingMode(root) {
  if (!root) return false;
  return (
    root.hasAttribute("data-hlc-testing") ||
    (typeof document !== "undefined" &&
      document.body &&
      document.body.classList.contains("hlc-testing-mode"))
  );
}
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
const FOIR_CHOICES = [50, 55, 60, 65, 70];
const REQUIRED_FIELD_MESSAGES = {
  monthlyIncome: "Enter monthly income",
  propertyValue: "Enter property agreement value",
  age: "Enter age",
  cibilScore: "Enter CIBIL score",
  tenureYears: "Enter tenure",
  occupation: "Choose occupation",
  purpose: "Choose purpose"
};
const TENURE_HELP_DEFAULT = "";
const TENURE_HELP_REQUIRED = REQUIRED_FIELD_MESSAGES.tenureYears;

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
    { key: "downPayment", label: "Down payment", type: "inr", sort: "num" },
    { key: "tenureLabel", label: "Tenure", type: "text", sort: "text" },
    { key: "emi", label: "EMI", type: "inr", sort: "num" }
  ],
  charges: [
    { key: "processingFee", label: "Processing fees", type: "inr", sort: "num" },
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
const FLOATING_PREPAY_NOTE =
  "Floating-rate home loans shown here have no prepayment charge.";

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
  return rounded === 1 ? "1 year" : String(rounded) + " years";
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
  if (/prepayment not charged/i.test(String(charge.note_1 || ""))) return true;
  return (
    charge.fixed_amount === 0 &&
    (charge.percentage == null || charge.percentage === 0)
  );
}

function pickOwnFundsPrepayCharge(charges, query, offer) {
  return pickBestAfterOfferCharge(charges, query, offer, function (charge) {
    return charge.charge_name === "Prepayment charges" ? 1 : -1;
  });
}

function pickTakeoverPrepayCharge(charges, query, offer) {
  return pickBestAfterOfferCharge(charges, query, offer, function (charge) {
    return charge.charge_name === "Prepayment charges (takeover)" ? 1 : -1;
  });
}

function formatPrepaymentChargeDisplay(charge) {
  if (!charge) return { main: "Not listed", details: [], note: "" };
  if (isPrepaymentNotCharged(charge)) {
    return { main: "Not charged", details: [], note: "" };
  }
  if (normalizeText(charge.has_slab_wise_charges) === "yes") {
    return { main: "See bank rules", details: [], note: "" };
  }
  return formatChargeDisplay(charge, {
    hideBasis: true,
    hideUnit: true,
    hideGst: true
  });
}

function formatPrepaymentChargeDetail(charge) {
  if (!charge || isPrepaymentNotCharged(charge)) {
    return formatChargeDisplayText(formatPrepaymentChargeDisplay(charge));
  }
  return formatChargeDisplayText(
    formatChargeDisplay(charge, {
      hideUnit: true,
      hideGst: true
    })
  );
}

function prepayChargeForMethod(row, method) {
  if (method === PREPAYMENT_METHOD_BT) return row.prepayTakeoverCharge || null;
  return row.prepayOwnFundsCharge || null;
}

function prepaymentSortValue(charge) {
  if (!charge) return null;
  if (isPrepaymentNotCharged(charge)) return 0;
  if (normalizeText(charge.has_slab_wise_charges) === "yes") return null;
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
  return score;
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

function computeGovernmentChargeAmount(charge, loanAmount) {
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
  if (isPrepaymentNotCharged(charge)) return "Not charged";
  if (charge.percentage != null && charge.percentage > 0) {
    return (charge.percentage * 100).toFixed(2) + "%";
  }
  if (charge.note_1) return charge.note_1;
  return "See bank rules";
}

function formatChargeBasis(value) {
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
    balance_outstanding: "On outstanding balance"
  };
  if (labels[key]) return labels[key];
  if (!value) return "";
  return "On " + String(value).replace(/_/g, " ").toLowerCase();
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
  const text = String(note || "").trim();
  if (!text || /^prepayment not charged/i.test(text)) return "";

  const dayMin = text.match(/overdue_days_min=([\d.]+)/);
  const dayMax = text.match(/overdue_days_max=([\d.]+)/);
  if (dayMin && dayMax) {
    return (
      Math.round(Number(dayMin[1])) +
      "–" +
      Math.round(Number(dayMax[1])) +
      " days overdue"
    );
  }
  if (dayMin) return "From " + Math.round(Number(dayMin[1])) + " days overdue";

  const tenureMax = text.match(/overdue_tenure_months_max=([\d.]+)/);
  if (tenureMax) {
    return "Loan tenure up to " + Math.round(Number(tenureMax[1])) + " months";
  }
  if (/overdue_whichever_higher=yes/i.test(text)) return "Higher applicable charge applies";
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
  const fixed =
    charge.fixed_amount != null && Number.isFinite(Number(charge.fixed_amount))
      ? Number(charge.fixed_amount)
      : null;

  if (percentage != null) {
    mainParts.push(
      formatPct(percentage * 100) +
        (normalizeText(charge.percentage_per_annum) === "yes" ? " p.a." : "")
    );
  }
  let fixedLabel = "";
  let fixedBasisDetail = "";
  if (fixed != null && !(settings.zeroAsPercentage && fixed === 0 && percentage == null)) {
    fixedLabel = formatInr(fixed);
    if (normalizeText(charge.fixed_amount_per_1000_rs) === "yes") {
      fixedBasisDetail = "per ₹1,000";
    } else if (normalizeText(charge.fixed_amount_per_lakh_or_part) === "yes") {
      fixedBasisDetail = "per ₹1 lakh or part";
    }
  }
  if (settings.zeroAsPercentage && fixed === 0 && percentage == null) {
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
      : whicheverHigherRule &&
          charge.charge_min != null &&
          Number.isFinite(Number(charge.charge_min))
        ? formatInr(Number(charge.charge_min))
        : "";
  const hasWhicheverHigherAlternatives =
    whicheverHigherRule && percentage != null && !!alternativeAmount;
  if (fixedLabel && !hasWhicheverHigherAlternatives) {
    mainParts.push(fixedLabel);
  }

  const details = [];
  if (hasWhicheverHigherAlternatives) {
    details.push("or " + alternativeAmount + ", whichever is higher");
  }
  const mainSuffix =
    !hasWhicheverHigherAlternatives && percentage == null && fixedLabel
      ? fixedBasisDetail
      : "";
  const basis = settings.hideBasis ? "" : formatChargeBasis(charge.percentage_base_value);
  const unit = settings.hideUnit ? "" : formatChargeUnit(charge.charge_unit);
  if (basis || unit) details.push([basis, unit].filter(Boolean).join(" · "));

  const limits = [];
  if (
    !hasWhicheverHigherAlternatives &&
    charge.charge_min != null &&
    Number.isFinite(Number(charge.charge_min))
  ) {
    limits.push("Min " + formatInr(Number(charge.charge_min)));
  }
  if (charge.charge_max != null && Number.isFinite(Number(charge.charge_max))) {
    limits.push("Max " + formatInr(Number(charge.charge_max)));
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
        note === "Higher applicable charge applies"
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
  const footnoteParts = [];
  if (primaryRest.length) {
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
  const primaryBand = formatEmiBounceSlabBand(primaryFirst);
  const primaryDetail = primaryBand
    ? primaryBand + (preferred ? " in " + preferred.toLowerCase() + " areas" : "")
    : preferred;

  return {
    display: {
      main: formatInr(Number(primaryFirst.fixed_amount)),
      marker: "†",
      details: [primaryDetail].filter(Boolean),
      note: ""
    },
    footnote: footnoteParts.length
      ? "† " +
        (bankDisplayName || primaryFirst.bank_name) +
        ": " +
        formatSlabBasisSentence(primaryFirst, "bounce amount") +
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
  if (charge.percentage != null && Number.isFinite(Number(charge.percentage))) {
    return formatPct(Number(charge.percentage) * 100);
  }
  if (charge.fixed_amount != null && Number.isFinite(Number(charge.fixed_amount))) {
    return formatInr(Number(charge.fixed_amount));
  }
  if (charge.note_1) return charge.note_1;
  return "See bank rules";
}

/** Fee rule from bank data — not computed from the customer's loan amount. */
function formatChargeRule(charge) {
  if (!charge) return "—";
  const parts = [];
  if (charge.percentage != null && Number.isFinite(Number(charge.percentage))) {
    parts.push(formatPct(Number(charge.percentage) * 100));
  }
  if (charge.fixed_amount != null && Number.isFinite(Number(charge.fixed_amount))) {
    parts.push(formatInr(Number(charge.fixed_amount)));
  }
  if (charge.charge_min != null && Number.isFinite(Number(charge.charge_min))) {
    parts.push("min " + formatInr(Number(charge.charge_min)));
  }
  if (charge.charge_max != null && Number.isFinite(Number(charge.charge_max))) {
    parts.push("max " + formatInr(Number(charge.charge_max)));
  }
  if (parts.length) return parts.join(" · ");
  if (charge.note_1) return charge.note_1;
  return "See bank rules";
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

function enrichMatchedRow(offer, query, bankCharges, governmentCharges) {
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
          main: "As per slab",
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
  const schemeCharges = listSchemeCharges(bankCharges, offer);
  const feeRows = schemeCharges.map(function (charge) {
    return [charge.charge_name, formatChargeRule(charge)];
  });

  return {
    id: offer.offer_row_id,
    bankKey: offer.bank_key,
    bankName: offer.bank_name,
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
    governmentCharges: governmentChargeTotal,
    governmentChargeRows: governmentChargeRows,
    processingFeePct:
      processingCharge && processingCharge.percentage != null
        ? processingCharge.percentage * 100
        : null,
    prepaymentChargeDisplay: prepaymentChargeDisplay,
    prepaymentChargeSortValue: prepaymentSortValue(prepayOwnFundsCharge),
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
    feeRows: feeRows,
    otherChargeNote: (function () {
      const other = feeRows.find(function (pair) {
        return pair[0] !== "Processing fee";
      });
      return other ? other[0] + (other[1] && other[1] !== "—" ? " " + other[1] : "") : "—";
    })(),
    offer: offer,
    processingCharge: processingCharge,
    prepayOwnFundsCharge: prepayOwnFundsCharge,
    prepayTakeoverCharge: prepayTakeoverCharge,
    prepayCharge: prepayOwnFundsCharge,
    overdueCharge: overdueCharge,
    overdueChargeSlabs: overdueChargeSlabs,
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
    return enrichMatchedRow(offer, query, dataset.bank_charges, dataset.government_charges);
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

function chargeDisplayHtml(display) {
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
    (value.marker
      ? '<sup class="hlc-col-footnote" aria-hidden="true">' +
        escapeHtml(value.marker) +
        "</sup>"
      : "") +
    "</span>" +
    details +
    "</span>"
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

  const HLC_TESTING = isHlcTestingMode(root);
  const matchDebounceMs = HLC_TESTING ? 0 : MATCH_DEBOUNCE_MS;

  const state = {
    dataset: null,
    engine: createMatchEngine(),
    group: "essentials",
    productFilters: defaultProductFilters(),
    prepaymentMethod: PREPAYMENT_METHOD_OWN,
    selected: new Set(),
    sortKey: null,
    sortDir: null,
    rows: [],
    showAllBanks: false,
    matchTimer: null,
    dataVersion: "",
    /** Previous render’s displayed cell values (for transient delta highlights). */
    cellSnapshot: null
  };

  const el = {
    form: document.getElementById("hlc-inputs"),
    age: document.getElementById("hlc-age"),
    cibil: document.getElementById("hlc-cibil"),
    monthlyIncome: document.getElementById("hlc-monthly-income"),
    monthlyIncomeNote: document.getElementById("hlc-monthly-income-note"),
    existingEmis: document.getElementById("hlc-existing-emis"),
    cardLimits: document.getElementById("hlc-card-limits"),
    cardLoadPct: document.getElementById("hlc-card-load-pct"),
    tenure: document.getElementById("hlc-tenure"),
    foir: document.getElementById("hlc-foir"),
    foirFace: document.getElementById("hlc-foir-face"),
    ageNote: document.getElementById("hlc-age-note"),
    cibilNote: document.getElementById("hlc-cibil-note"),
    coApplicant: document.getElementById("hlc-coapplicant"),
    coApplicantFields: document.getElementById("hlc-coapplicant-fields"),
    coMonthlyIncome: document.getElementById("hlc-co-income"),
    coExistingEmis: document.getElementById("hlc-co-existing-emis"),
    coCardLimits: document.getElementById("hlc-co-card-limits"),
    occupation: document.getElementById("hlc-occupation"),
    occupationNote: document.getElementById("hlc-occupation-note"),
    purpose: document.getElementById("hlc-purpose"),
    purposeNote: document.getElementById("hlc-purpose-note"),
    propertyValue: document.getElementById("hlc-property-value"),
    loanHint: document.getElementById("hlc-loan-hint"),
    tenureNote: document.getElementById("hlc-tenure-note"),
    status: document.getElementById("hlc-status"),
    meta: document.getElementById("hlc-match-meta"),
    table: document.querySelector(".hlc-compare"),
    cols: document.getElementById("hlc-compare-cols"),
    head: document.getElementById("hlc-compare-head"),
    body: document.getElementById("hlc-compare-body"),
    scroll: document.getElementById("hlc-table-scroll"),
    applyBar: document.getElementById("hlc-apply-bar"),
    applyBtn: document.getElementById("hlc-apply-btn"),
    drawer: document.getElementById("hlc-drawer"),
    drawerBackdrop: document.getElementById("hlc-drawer-backdrop"),
    drawerTitle: document.getElementById("hlc-drawer-title"),
    drawerSub: document.getElementById("hlc-drawer-sub"),
    drawerBody: document.getElementById("hlc-drawer-body"),
    drawerClose: document.getElementById("hlc-drawer-close"),
    toast: document.getElementById("hlc-toast"),
    paddleLeft: document.getElementById("hlc-paddle-left"),
    paddleRight: document.getElementById("hlc-paddle-right"),
    chargesNote: document.getElementById("hlc-charges-note"),
    showMoreBtn: document.getElementById("hlc-show-more"),
    selectHint: document.getElementById("hlc-select-hint")
  };

  function revealResultsShell() {
    const shell = document.getElementById("hlc-results-shell");
    if (!shell) return;
    shell.hidden = false;
    shell.classList.add("is-visible");
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

  function updateSelectHint(hasRows) {
    if (!el.selectHint) return;
    if (!hasRows) {
      el.selectHint.hidden = true;
      el.selectHint.classList.add("is-dismissed");
      return;
    }
    el.selectHint.hidden = false;
    el.selectHint.classList.remove("is-dismissed");
    el.selectHint.setAttribute("aria-hidden", "false");
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

  function setFieldIssue(input, noteEl, message, options) {
    if (!input) return;
    const opts = options || {};
    const isInvalid = Boolean(message);
    input.setAttribute("aria-invalid", isInvalid ? "true" : "false");
    const shell = input.closest(".hlc-input-shell");
    if (shell) shell.classList.toggle("is-invalid", isInvalid);
    if (noteEl) {
      if (isInvalid || !opts.preserveNoteWhenValid) {
        noteEl.textContent = message || "";
      }
      noteEl.classList.toggle("is-invalid", isInvalid);
    }
  }

  function setChoiceIssue(fieldEl, noteEl, message) {
    if (fieldEl) fieldEl.classList.toggle("is-invalid", Boolean(message));
    if (noteEl) {
      noteEl.textContent = message || "";
      noteEl.classList.toggle("is-invalid", Boolean(message));
    }
  }

  function syncPrimaryFieldIssues() {
    const missing = [];
    const checks = [
      {
        input: el.monthlyIncome,
        note: el.monthlyIncomeNote,
        key: "monthlyIncome"
      },
      {
        input: el.propertyValue,
        note: el.loanHint,
        key: "propertyValue",
        preserveNoteWhenValid: true
      },
      {
        input: el.age,
        note: el.ageNote,
        key: "age"
      },
      {
        input: el.cibil,
        note: el.cibilNote,
        key: "cibilScore"
      },
      {
        input: el.tenure,
        note: el.tenureNote,
        key: "tenureYears"
      }
    ];

    checks.forEach(function (check) {
      const hasValue = check.input ? digitCount(check.input.value) > 0 : true;
      const message = hasValue ? "" : REQUIRED_FIELD_MESSAGES[check.key];
      if (message) missing.push(message);
      setFieldIssue(check.input, check.note, message, {
        preserveNoteWhenValid: Boolean(check.preserveNoteWhenValid)
      });
    });

    const occupationValue = el.occupation ? String(el.occupation.value || "").trim() : "";
    const occupationMessage = occupationValue ? "" : REQUIRED_FIELD_MESSAGES.occupation;
    if (occupationMessage) missing.push(occupationMessage);
    setChoiceIssue(
      el.occupation ? el.occupation.closest(".hlc-field--occupation") : null,
      el.occupationNote,
      occupationMessage
    );

    const purposeValue = el.purpose ? String(el.purpose.value || "").trim() : "";
    const purposeMessage = purposeValue ? "" : REQUIRED_FIELD_MESSAGES.purpose;
    if (purposeMessage) missing.push(purposeMessage);
    setChoiceIssue(
      el.purpose ? el.purpose.closest(".hlc-field--purpose") : null,
      el.purposeNote,
      purposeMessage
    );

    if (!digitCount(el.propertyValue ? el.propertyValue.value : "")) {
      if (el.loanHint) el.loanHint.textContent = REQUIRED_FIELD_MESSAGES.propertyValue;
    } else if (el.loanHint) {
      el.loanHint.classList.remove("is-invalid");
    }
    if (!digitCount(el.tenure ? el.tenure.value : "")) {
      if (el.tenureNote) el.tenureNote.textContent = TENURE_HELP_REQUIRED;
    } else if (el.tenureNote) {
      el.tenureNote.textContent = TENURE_HELP_DEFAULT;
      el.tenureNote.classList.remove("is-invalid");
    }
    if (el.status) {
      el.status.textContent =
        missing.length === 0
          ? ""
          : missing.length === 1
            ? missing[0]
            : "Fill in the highlighted fields";
    }
    return missing.length === 0;
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

  function setTenureIncomplete(isIncomplete) {
    setFieldIssue(el.tenure, el.tenureNote, isIncomplete ? TENURE_HELP_REQUIRED : "");
    if (el.tenureNote && !isIncomplete) el.tenureNote.textContent = TENURE_HELP_DEFAULT;
    if (el.status) {
      el.status.textContent = isIncomplete ? TENURE_HELP_REQUIRED : "";
    }
  }

  function tenureInputIsComplete() {
    if (!el.tenure) return true;
    return digitCount(el.tenure.value) > 0;
  }

  function updateLoanHint() {
    if (!el.loanHint) return;
    if (el.loanHint.classList.contains("is-invalid")) return;
    el.loanHint.textContent = "";
  }

  function setOccupation(value) {
    if (!el.occupation) return;
    el.occupation.value = value;
    document.querySelectorAll(".hlc-occupation-pills .hlc-chip[data-occupation]").forEach(function (btn) {
      const selected = btn.getAttribute("data-occupation") === value;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    setChoiceIssue(
      el.occupation.closest(".hlc-field--occupation"),
      el.occupationNote,
      ""
    );
  }

  function setPurpose(value) {
    if (!el.purpose) return;
    const purpose = normalizePurpose(value);
    el.purpose.value = purpose;
    document.querySelectorAll(".hlc-purpose-pills .hlc-chip[data-purpose]").forEach(function (btn) {
      const selected = btn.getAttribute("data-purpose") === purpose;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    setChoiceIssue(
      el.purpose.closest(".hlc-field--purpose"),
      el.purposeNote,
      ""
    );
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
      state.sortKey = null;
      state.sortDir = null;
    }
    document.querySelectorAll(".hlc-rate-pills .hlc-chip[data-rate-type]").forEach(function (btn) {
      const selected = btn.getAttribute("data-rate-type") === rate;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  }

  function setPrepaymentMethod(method) {
    const next =
      method === PREPAYMENT_METHOD_BT
        ? PREPAYMENT_METHOD_BT
        : PREPAYMENT_METHOD_OWN;
    if (state.prepaymentMethod === next) return;
    state.prepaymentMethod = next;
    applyPrepaymentMethodToRows(state.rows, state.prepaymentMethod);
    renderTable();
  }

  function setFacilityType(value) {
    const facility = value === "Overdraft" ? "Overdraft" : "Term Loan";
    state.productFilters.overdraft = facility === "Overdraft";
    document.querySelectorAll(".hlc-facility-pills .hlc-chip[data-facility-type]").forEach(function (btn) {
      const selected = btn.getAttribute("data-facility-type") === facility;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  }

  function setBankType(value) {
    const bankType = normalizeBankType(value);
    state.productFilters.bankType = bankType;
    document.querySelectorAll(".hlc-bank-type-pills .hlc-chip[data-bank-type]").forEach(function (btn) {
      const selected = btn.getAttribute("data-bank-type") === bankType;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
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
    const hidden = totalRows - visibleRows;
    if (hidden <= 0 || state.showAllBanks) {
      el.showMoreBtn.hidden = true;
      return;
    }
    el.showMoreBtn.hidden = false;
    const label = el.showMoreBtn.querySelector(".hlc-show-more-label");
    const text =
      "Show " + hidden + " more bank" + (hidden === 1 ? "" : "s");
    if (label) {
      label.textContent = text;
    } else {
      el.showMoreBtn.textContent = text;
    }
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

    if (el.table) el.table.setAttribute("data-group", state.group);
    if (el.cols) {
      let colHtml = '<col class="hlc-col-bank">';
      columns.forEach(function (column) {
        colHtml += '<col class="' + columnWidthClass(column) + '">';
      });
      el.cols.innerHTML = colHtml;
    }

    let headHtml = "<tr>";
    headHtml += '<th class="hlc-sticky-col" scope="col">Bank</th>';
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
      const footnoteHtml = footnoteMarker
        ? '<sup class="hlc-col-footnote" aria-hidden="true">' +
          escapeHtml(footnoteMarker) +
          "</sup>"
        : "";
      const prepaymentMethods =
        isPrepayment
          ? '<select class="hlc-prepay-header-select" data-prepay-method="' +
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
      const headerLabel =
        isPrepayment
          ? '<span class="hlc-column-label">' +
            '<span class="hlc-column-title">' +
            escapeHtml(column.label) +
            footnoteHtml +
            sortInd +
            "</span>" +
            prepaymentMethods +
            "</span>"
          : escapeHtml(column.label);
      headHtml +=
        '<th class="' +
        columnAlignClass(column) +
        sortClass +
        '" scope="col"' +
        sortAttr +
        ariaSort +
        (footnoteMarker ? ' aria-describedby="hlc-charges-note"' : "") +
        ">" +
        headerLabel +
        (isPrepayment ? "" : footnoteHtml) +
        (isPrepayment ? "" : sortInd) +
        "</th>";
    });
    headHtml += "</tr>";
    el.head.innerHTML = headHtml;

    updateChargesFootnote(footnoteState.text);

    if (!rows.length) {
      el.body.innerHTML =
        '<tr><td class="hlc-empty" colspan="' +
        (columns.length + 1) +
        '">No banks matched these inputs. Try a different income, property agreement value, age, CIBIL score, purpose, or filters.</td></tr>';
      state.cellSnapshot = nextSnapshot;
      updateShowMoreButton(0, 0);
      updateSelectHint(false);
      updateApplyBar();
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
              column.key === "downPayment" ||
              column.key === "emi" ||
              column.key === "processingFee" ||
              column.key === "governmentCharges";
            const cellContent =
              column.type === "charge"
                ? row[column.key] && row[column.key].action
                  ? '<button type="button" class="hlc-charge-detail-button" data-charge-detail="' +
                    escapeHtml(row[column.key].action) +
                    '" data-row-id="' +
                    escapeHtml(row.id) +
                    '" aria-label="Show ' +
                    escapeHtml(column.label.toLowerCase()) +
                    " slabs for " +
                    escapeHtml(row.bankName) +
                    '">' +
                    chargeDisplayHtml(row[column.key]) +
                    '<span class="hlc-charge-detail-arrow" aria-hidden="true">›</span></button>'
                  : chargeDisplayHtml(row[column.key])
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
          '<td class="hlc-sticky-col">' +
          '<div class="hlc-bank-cell">' +
          '<div class="hlc-bank-name">' +
          row.bankName +
          "</div>" +
          '<div class="hlc-bank-sub">' +
          '<span class="hlc-bank-scheme">' +
          row.scheme +
          "</span>" +
          '<button type="button" class="hlc-bank-detail" data-detail="' +
          row.id +
          '"><span class="hlc-bank-detail-label">More</span><span class="hlc-bank-detail-arrow" aria-hidden="true">›</span></button>' +
          "</div>" +
          "</div></td>" +
          cells +
          "</tr>"
        );
      })
      .join("");

    state.cellSnapshot = nextSnapshot;
    updateShowMoreButton(rows.length, visibleRows.length);
    updateSelectHint(rows.length > 0);
    updateApplyBar();
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
      const noteParts = [FLOATING_PREPAY_NOTE];
      if (state.productFilters.fixedRate) {
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
          noteParts.push(
            "* Charged " +
              joinReadableList(units) +
              ", depending on the lender’s schedule."
          );
        }
        if (bases.length) {
          noteParts.push(
            "* Calculated " +
              joinReadableList(bases) +
              ", depending on the lender’s schedule."
          );
        }
        if (hasGst) {
          noteParts.push(
            "* GST is added where the lender marks it as applicable."
          );
        }
      }
      const overdueNotes = Array.from(
        new Set(
          visibleRows
            .map(function (row) {
              return row.overdueDetailFootnote;
            })
            .filter(Boolean)
        )
      );
      const emiNotes = Array.from(
        new Set(
          visibleRows
            .map(function (row) {
              return row.emiBounceDetailFootnote;
            })
            .filter(Boolean)
        )
      );
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
      const overdueCommonNotes = percentageOverdueRows.length
        ? ["‡ Percentage overdue charges are calculated on the overdue amount."]
        : [];
      const emiCommonNotes = [];
      if (emiUnits.length) {
        emiCommonNotes.push(
          "^ Charged " +
            joinReadableList(emiUnits) +
            ", depending on the lender’s schedule."
        );
      }
      if (emiBases.length) {
        emiCommonNotes.push(
          "^ Calculated " +
            joinReadableList(emiBases) +
            ", depending on the lender’s schedule."
        );
      }
      if (hasEmiGst) {
        emiCommonNotes.push("^ GST is added where the lender marks it as applicable.");
      }
      if (overdueCommonNotes.length) {
        result.headerMarkers.overdueChargeDisplay = "‡";
      }
      if (emiCommonNotes.length) {
        result.headerMarkers.emiBounceChargeDisplay = "^";
      }
      result.text = noteParts
        .concat(overdueCommonNotes)
        .concat(overdueNotes)
        .concat(emiCommonNotes)
        .concat(emiNotes)
        .join("\n\n");
      return result;
    }
    const showCharges = state.group === "charges" && visibleRows.length > 0;
    if (!showCharges || !state.dataset) {
      return result;
    }
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
      result.text = note;
    }
    return result;
  }

  function updateChargesFootnote(note) {
    if (!el.chargesNote) return;
    el.chargesNote.hidden = !note;
    el.chargesNote.textContent = note || "";
  }

  function updateApplyBar() {
    const count = state.selected.size;
    el.applyBtn.disabled = count === 0;
    el.applyBtn.textContent = "Apply";
  }

  function showDrawer(title, subtitle, bodyHtml) {
    el.drawerTitle.textContent = title;
    el.drawerSub.textContent = subtitle || "";
    el.drawerBody.innerHTML = bodyHtml;

    el.drawerBackdrop.hidden = false;
    requestAnimationFrame(function () {
      el.drawerBackdrop.classList.add("open");
      el.drawer.classList.add("open");
      el.drawer.setAttribute("aria-hidden", "false");
    });
  }

  function openChargeSlabs(id, detail) {
    if (detail !== "overdue-slabs") return;
    const row = state.rows.find(function (entry) {
      return entry.id === id;
    });
    if (!row || !row.overdueChargeSlabs || !row.overdueChargeSlabs.length) return;

    const slabRows = row.overdueChargeSlabs.map(function (charge) {
      return [
        formatChargeSlabBand(charge),
        formatInr(Number(charge.fixed_amount))
      ];
    });
    const bodyHtml =
      drawerSlabTable("Overdue amount", "Charge", slabRows) +
      '<p class="hlc-drawer-foot">Each listed charge applies per instance. Figures are indicative. The bank decides final terms.</p>';

    showDrawer(row.bankName, "Overdue charge · As per slab", bodyHtml);
  }

  function openDrawer(id) {
    const row = state.rows.find(function (entry) {
      return entry.id === id;
    });
    if (!row) return;

    const laterChargeRows = [
      [
        "Prepayment · Own funds",
        formatPrepaymentChargeDetail(row.prepayOwnFundsCharge)
      ],
      [
        "Prepayment · Balance transfer",
        formatPrepaymentChargeDetail(row.prepayTakeoverCharge)
      ],
      ["Overdue", formatChargeDisplayText(row.overdueChargeDisplay)],
      ["EMI bounce", formatChargeDisplayText(row.emiBounceChargeDisplay)]
    ];
    if (row.overdueDetailFootnote) {
      laterChargeRows.push(["Overdue details", row.overdueDetailFootnote]);
    }
    if (row.emiBounceDetailFootnote) {
      laterChargeRows.push(["Charge details", row.emiBounceDetailFootnote]);
    }

    const bodyHtml =
      drawerSection("Scheme", [
        ["Facility", row.facilityLabel || "—"],
        ["Purpose", row.purpose || "—"],
        ["Rate type", row.rateType || "—"],
        ["Borrower category", row.borrowerCategoryLabel || "—"]
      ]) +
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
      drawerSection(
        "Charges",
        row.feeRows && row.feeRows.length
          ? row.feeRows
          : [["Applicable charges", "None listed"]]
      ) +
      drawerSection("Later charges", laterChargeRows) +
      '<p class="hlc-drawer-foot">Published rules are shown without estimating an event-specific amount. Figures are indicative. The bank decides final terms.</p>';

    showDrawer(row.bankName, row.scheme || "", bodyHtml);
  }

  function calculationStep(label, equation, detail) {
    return (
      '<div class="hlc-calc-step">' +
      '<p class="hlc-calc-step-label">' +
      label +
      "</p>" +
      '<p class="hlc-calc-equation">' +
      equation +
      "</p>" +
      (detail
        ? '<p class="hlc-calc-detail">' + detail + "</p>"
        : "") +
      "</div>"
    );
  }

  function calculationTotal(label, equation, amount) {
    return (
      '<div class="hlc-calc-total">' +
      '<div><p class="hlc-calc-total-label">' +
      label +
      '</p><p class="hlc-calc-total-equation">' +
      equation +
      "</p></div>" +
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
    const cardLoad = cardLimits * (cardLoadPct / 100);
    const emiRoom = Math.max(
      0,
      totalIncome * (foirPct / 100) - existingEmis - cardLoad
    );
    const applicableLimits = [row.fromProperty, row.fromIncome];
    let steps =
      calculationStep(
        "Property limit",
        formatInr(propertyValue) +
          " × " +
          formatPct(propertyPct) +
          " = " +
          formatInr(row.fromProperty),
        "The allowed percentage of the property value sets this limit."
      ) +
      calculationStep(
        "Monthly EMI available",
        "(" +
          formatInr(totalIncome) +
          " × " +
          formatPct(foirPct) +
          ") − " +
          formatInr(existingEmis) +
          " − (" +
          formatInr(cardLimits) +
          " × " +
          formatPct(cardLoadPct) +
          ") = " +
          formatInr(emiRoom),
        "Income allowance minus existing EMIs and the credit-card load."
      ) +
      calculationStep(
        "Income limit",
        formatInr(emiRoom) +
          " a month at " +
          formatPct(row.effectiveRoiPct) +
          " for " +
          row.tenureMonths +
          " months = " +
          formatInr(row.fromIncome),
        "The monthly EMI available is converted into a loan amount using the standard EMI formula."
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
        "Maximum loan listed = " + formatInr(bankMaximum),
        ""
      );
    }

    const limitEquation =
      "Lowest of " +
      applicableLimits.map(function (amount) {
        return formatInr(amount);
      }).join(", ") +
      " = " +
      formatInr(row.loanAmount);

    return (
      '<div class="hlc-calc-steps">' +
      steps +
      "</div>" +
      calculationTotal(
        "Loan amount shown",
        limitEquation,
        formatInr(row.loanAmount)
      )
    );
  }

  function downPaymentCalculationHtml(row) {
    const propertyValue = Math.max(
      0,
      Number(readQuery().propertyValue) || 0
    );
    const equation =
      formatInr(propertyValue) +
      " − " +
      formatInr(row.loanAmount) +
      " = " +
      formatInr(row.downPayment);

    return (
      '<div class="hlc-calc-steps">' +
      calculationStep(
        "Property value minus loan",
        equation,
        "This is the part of the property value not covered by the calculated loan amount."
      ) +
      "</div>" +
      calculationTotal(
        "Down payment shown",
        equation,
        formatInr(row.downPayment)
      )
    );
  }

  function emiCalculationHtml(row) {
    const monthlyRate = row.roiDecimal / 12;
    const monthlyRateDecimal = monthlyRate.toFixed(8);
    const monthlyFactor = (1 + monthlyRate).toFixed(8);
    const formula =
      formatInr(row.loanAmount) +
      " × " +
      monthlyRateDecimal +
      " × (" +
      monthlyFactor +
      ")^" +
      row.tenureMonths +
      " ÷ ((" +
      monthlyFactor +
      ")^" +
      row.tenureMonths +
      " − 1)";

    return (
      '<div class="hlc-calc-steps">' +
      calculationStep(
        "Monthly interest rate",
        formatPct(row.effectiveRoiPct) +
          " ÷ 12 = " +
          formatCalculationPct(monthlyRate * 100, 4),
        "The annual rate is divided by 12."
      ) +
      calculationStep(
        "EMI formula",
        formula,
        "Loan amount × monthly rate × (1 + monthly rate)^months ÷ ((1 + monthly rate)^months − 1)."
      ) +
      "</div>" +
      calculationTotal(
        "EMI shown",
        formatInr(row.loanAmount) +
          " at " +
          formatPct(row.effectiveRoiPct) +
          " for " +
          row.tenureMonths +
          " months",
        formatInr(row.emi)
      )
    );
  }

  function processingFeeCalculationHtml(row) {
    const charge = row.processingCharge;
    if (!charge) {
      return (
        calculationStep(
          "Processing fee rule",
          "No matching rule is listed in the data.",
          ""
        ) +
        calculationTotal(
          "Amount shown",
          "No calculation available",
          formatInr(row.processingFee)
        )
      );
    }

    const pct =
      charge.percentage == null ? NaN : Number(charge.percentage);
    const fixed =
      charge.fixed_amount == null ? NaN : Number(charge.fixed_amount);
    let steps = "";
    let totalEquation = "";

    if (Number.isFinite(pct) && pct > 0) {
      const beforeLimits = row.loanAmount * pct;
      const baseEquation =
        formatInr(row.loanAmount) +
        " × " +
        formatPct(pct * 100) +
        " = " +
        formatInr(beforeLimits);
      steps += calculationStep("Percentage calculation", baseEquation, "");
      totalEquation = baseEquation;

      if (
        charge.charge_min != null &&
        beforeLimits < Number(charge.charge_min)
      ) {
        const minimum = Number(charge.charge_min);
        steps += calculationStep(
          "Minimum applied",
          formatInr(beforeLimits) + " → " + formatInr(minimum),
          formatInr(beforeLimits) +
            " is below the " +
            formatInr(minimum) +
            " minimum."
        );
        totalEquation = "Minimum " + formatInr(minimum) + " applied";
      } else if (
        charge.charge_max != null &&
        beforeLimits > Number(charge.charge_max)
      ) {
        const maximum = Number(charge.charge_max);
        steps += calculationStep(
          "Maximum applied",
          formatInr(beforeLimits) + " → " + formatInr(maximum),
          formatInr(beforeLimits) +
            " is above the " +
            formatInr(maximum) +
            " maximum."
        );
        totalEquation = "Maximum " + formatInr(maximum) + " applied";
      } else if (charge.charge_min != null || charge.charge_max != null) {
        let rangeDetail = formatInr(beforeLimits) + " needs no adjustment.";
        if (charge.charge_min != null && charge.charge_max != null) {
          rangeDetail =
            formatInr(beforeLimits) +
            " is within the " +
            formatInr(Number(charge.charge_min)) +
            " to " +
            formatInr(Number(charge.charge_max)) +
            " range.";
        } else if (charge.charge_min != null) {
          rangeDetail =
            formatInr(beforeLimits) +
            " is above the " +
            formatInr(Number(charge.charge_min)) +
            " minimum.";
        } else if (charge.charge_max != null) {
          rangeDetail =
            formatInr(beforeLimits) +
            " is below the " +
            formatInr(Number(charge.charge_max)) +
            " maximum.";
        }
        steps += calculationStep(
          "Rule check",
          "No limit applied",
          rangeDetail
        );
      }
    } else if (Number.isFinite(fixed)) {
      totalEquation = "Flat processing fee";
      steps += calculationStep(
        "Flat fee",
        "Flat charge = " + formatInr(fixed),
        ""
      );
    } else if (charge.percentage === 0) {
      totalEquation = "0% processing fee";
      steps += calculationStep(
        "Processing fee rule",
        formatInr(row.loanAmount) + " × 0% = ₹0",
        ""
      );
    }

    return (
      '<div class="hlc-calc-steps">' +
      steps +
      "</div>" +
      calculationTotal(
        "Processing fee shown",
        totalEquation,
        formatInr(row.processingFee)
      )
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
    const query = readQuery();
    const charges = listApplicableGovernmentCharges(
      (state.dataset && state.dataset.government_charges) || [],
      query,
      row.loanAmount,
      DEFAULT_JURISDICTION_STATE
    );
    const amounts = [];
    const steps = charges.map(function (charge) {
      const amount = computeGovernmentChargeAmount(charge, row.loanAmount);
      amounts.push(amount);
      const method = normalizeText(charge.calculation_method);
      let equation = "Flat charge = " + formatInr(amount);
      let detail = "";
      if (method === "percentage") {
        const beforeLimits = row.loanAmount * Number(charge.percentage);
        equation =
          formatInr(row.loanAmount) +
          " × " +
          formatPct(Number(charge.percentage) * 100) +
          " = " +
          formatInr(beforeLimits);
        if (
          charge.min_amount_inr != null &&
          beforeLimits < Number(charge.min_amount_inr)
        ) {
          detail =
            "Minimum " +
            formatInr(Number(charge.min_amount_inr)) +
            " applied.";
        } else if (
          charge.max_amount_inr != null &&
          beforeLimits > Number(charge.max_amount_inr)
        ) {
          detail =
            "Maximum " +
            formatInr(Number(charge.max_amount_inr)) +
            " applied. Amount included: " +
            formatInr(amount) +
            ".";
        }
      }
      return calculationStep(
        governmentChargeName(charge.charge_name),
        equation,
        detail
      );
    }).join("");
    const totalEquation =
      amounts.map(function (amount) {
        return formatInr(amount);
      }).join(" + ") +
      " = " +
      formatInr(row.governmentCharges);

    return (
      '<div class="hlc-calc-steps">' +
      steps +
      "</div>" +
      calculationTotal(
        "Government charges shown",
        totalEquation,
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

    if (calculationKey === "downPayment") {
      showDrawer(
        "Down payment",
        "Property value " + formatInr(readQuery().propertyValue),
        downPaymentCalculationHtml(row) +
          '<p class="hlc-drawer-foot">Government charges, bank charges and other purchase costs are not included in this down payment.</p>'
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
          '<p class="hlc-drawer-foot">Calculated from the processing fee rule matched to your inputs. Final charges remain subject to the lender’s terms.</p>'
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

  function drawerSection(title, pairs) {
    return (
      '<section class="hlc-drawer-section">' +
      "<h4>" +
      title +
      "</h4>" +
      '<div class="hlc-drawer-card">' +
      pairs
        .map(function (pair) {
          return (
            '<div class="hlc-kv"><span class="hlc-kv-label">' +
            pair[0] +
            '</span><span class="hlc-kv-value">' +
            pair[1] +
            "</span></div>"
          );
        })
        .join("") +
      "</div></section>"
    );
  }

  function drawerSlabTable(leftHeader, rightHeader, pairs) {
    return (
      '<section class="hlc-drawer-section">' +
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
      "</tbody></table></div></section>"
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
    if (HLC_TESTING) state.showAllBanks = true;
    root.setAttribute("aria-busy", "false");
    renderTable({ highlightDeltas: !HLC_TESTING });
    if (HLC_TESTING) revealResultsShell();
  }

  function setSoftMissInput(input, on) {
    if (!input) return;
    const shell = input.closest(".hlc-input-shell");
    if (shell) shell.classList.toggle("is-soft-miss", Boolean(on));
  }

  function setSoftMissChoice(fieldEl, on) {
    if (fieldEl) fieldEl.classList.toggle("is-soft-miss", Boolean(on));
  }

  function clearAllPrimaryIssues() {
    const checks = [
      { input: el.monthlyIncome, note: el.monthlyIncomeNote },
      { input: el.propertyValue, note: el.loanHint, preserveNoteWhenValid: true },
      { input: el.age, note: el.ageNote },
      { input: el.cibil, note: el.cibilNote },
      { input: el.tenure, note: el.tenureNote }
    ];
    checks.forEach(function (check) {
      if (!check.input) return;
      setFieldIssue(check.input, check.note, "", {
        preserveNoteWhenValid: Boolean(check.preserveNoteWhenValid)
      });
      setSoftMissInput(check.input, false);
      if (check.note) {
        check.note.textContent = "";
        check.note.classList.remove("is-invalid");
      }
    });
    if (el.tenureNote) el.tenureNote.textContent = TENURE_HELP_DEFAULT;
    if (el.loanHint) {
      el.loanHint.textContent = "";
      el.loanHint.classList.remove("is-invalid");
    }
    setChoiceIssue(
      el.occupation ? el.occupation.closest(".hlc-field--occupation") : null,
      el.occupationNote,
      ""
    );
    setChoiceIssue(
      el.purpose ? el.purpose.closest(".hlc-field--purpose") : null,
      el.purposeNote,
      ""
    );
    setSoftMissChoice(
      el.occupation ? el.occupation.closest(".hlc-field--occupation") : null,
      false
    );
    setSoftMissChoice(
      el.purpose ? el.purpose.closest(".hlc-field--purpose") : null,
      false
    );
    if (el.status) el.status.textContent = "";
  }

  function highlightMissingPrimaryFields() {
    clearAllPrimaryIssues();
    let missing = false;

    const inputChecks = [
      el.monthlyIncome,
      el.propertyValue,
      el.age,
      el.cibil,
      el.tenure
    ];
    inputChecks.forEach(function (input) {
      const empty = !input || digitCount(input.value) === 0;
      if (empty) {
        missing = true;
        setSoftMissInput(input, true);
      }
    });

    const occupationEmpty = !(el.occupation && String(el.occupation.value || "").trim());
    if (occupationEmpty) {
      missing = true;
      setSoftMissChoice(
        el.occupation ? el.occupation.closest(".hlc-field--occupation") : null,
        true
      );
    }

    const purposeEmpty = !(el.purpose && String(el.purpose.value || "").trim());
    if (purposeEmpty) {
      missing = true;
      setSoftMissChoice(
        el.purpose ? el.purpose.closest(".hlc-field--purpose") : null,
        true
      );
    }

    if (missing) {
      const card = el.form && el.form.closest(".hlc-inputs-card");
      const target = card || el.form;
      if (target && typeof target.scrollIntoView === "function") {
        target.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }

    return !missing;
  }

  function clearResolvedPrimaryIssues() {
    const checks = [
      el.monthlyIncome,
      el.propertyValue,
      el.age,
      el.cibil,
      el.tenure
    ];
    checks.forEach(function (input) {
      if (!input || digitCount(input.value) === 0) return;
      setSoftMissInput(input, false);
      setFieldIssue(input, null, "");
    });
    if (el.occupation && String(el.occupation.value || "").trim()) {
      setSoftMissChoice(el.occupation.closest(".hlc-field--occupation"), false);
      setChoiceIssue(el.occupation.closest(".hlc-field--occupation"), el.occupationNote, "");
    }
    if (el.purpose && String(el.purpose.value || "").trim()) {
      setSoftMissChoice(el.purpose.closest(".hlc-field--purpose"), false);
      setChoiceIssue(el.purpose.closest(".hlc-field--purpose"), el.purposeNote, "");
    }
  }

  function validatePrimaryFieldsForSubmit() {
    return highlightMissingPrimaryFields();
  }

  function scheduleMatch() {
    clearTimeout(state.matchTimer);
    clearResolvedPrimaryIssues();
    if (!primaryFieldsAreComplete()) {
      root.setAttribute("aria-busy", "false");
      return;
    }
    clearAllPrimaryIssues();
    state.matchTimer = setTimeout(function () {
      runMatch().catch(function (error) {
        console.error(error);
        showToast("Could not match banks. Refresh and try again.");
        root.setAttribute("aria-busy", "false");
      });
    }, matchDebounceMs);
  }

  function toggleSelect(id) {
    if (state.selected.has(id)) state.selected.delete(id);
    else state.selected.add(id);
    renderTable();
  }

  function setColumnGroup(group) {
    state.group = group;
    document.querySelectorAll(".hlc-column-tab[data-group]").forEach(function (tab) {
      if (tab.getAttribute("data-group") === group) {
        tab.setAttribute("aria-current", "page");
        tab.setAttribute("aria-selected", "true");
      } else {
        tab.removeAttribute("aria-current");
        tab.setAttribute("aria-selected", "false");
      }
    });
    renderTable();
  }

  document.querySelectorAll(".hlc-column-tab[data-group]").forEach(function (tab) {
    tab.addEventListener("click", function () {
      setColumnGroup(tab.getAttribute("data-group"));
    });
  });

  if (el.showMoreBtn) {
    el.showMoreBtn.addEventListener("click", function () {
      state.showAllBanks = true;
      renderTable();
    });
  }

  document.querySelectorAll(".hlc-toggle-chips").forEach(function (group) {
    group.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-product-filter]");
      if (!btn || !group.contains(btn)) return;
      event.preventDefault();
      const key = btn.getAttribute("data-product-filter");
      const next = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", next ? "true" : "false");
      state.productFilters[key] = next;
      scheduleMatch();
    });
  });

  const occupationPills = document.querySelector(".hlc-occupation-pills");
  if (occupationPills) {
    occupationPills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-occupation]");
      if (!btn || !occupationPills.contains(btn)) return;
      event.preventDefault();
      setOccupation(btn.getAttribute("data-occupation"));
      scheduleMatch();
    });
  }

  const purposePills = document.querySelector(".hlc-purpose-pills");
  if (purposePills) {
    purposePills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-purpose]");
      if (!btn || !purposePills.contains(btn)) return;
      event.preventDefault();
      setPurpose(btn.getAttribute("data-purpose"));
      scheduleMatch();
    });
  }

  const coApplicantPills = document.querySelector(".hlc-coapplicant-pills");
  if (coApplicantPills) {
    coApplicantPills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-coapplicant]");
      if (!btn || !coApplicantPills.contains(btn)) return;
      event.preventDefault();
      setCoApplicant(btn.getAttribute("data-coapplicant"));
      scheduleMatch();
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
      scheduleMatch();
    });
  }

  const facilityPills = document.querySelector(".hlc-facility-pills");
  if (facilityPills) {
    facilityPills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-facility-type]");
      if (!btn || !facilityPills.contains(btn)) return;
      event.preventDefault();
      setFacilityType(btn.getAttribute("data-facility-type"));
      scheduleMatch();
    });
  }

  const bankTypePills = document.querySelector(".hlc-bank-type-pills");
  if (bankTypePills) {
    bankTypePills.addEventListener("click", function (event) {
      const btn = event.target.closest(".hlc-chip[data-bank-type]");
      if (!btn || !bankTypePills.contains(btn)) return;
      event.preventDefault();
      setBankType(btn.getAttribute("data-bank-type"));
      scheduleMatch();
    });
  }

  el.form.addEventListener("input", scheduleMatch);
  el.form.addEventListener("change", scheduleMatch);
  if (el.foir) {
    el.foir.addEventListener("change", syncFoirFace);
    el.foir.addEventListener("change", scheduleMatch);
  }
  if (el.cardLoadPct) el.cardLoadPct.addEventListener("change", scheduleMatch);

  el.head.addEventListener("change", function (event) {
    const method = event.target.closest(".hlc-prepay-header-select");
    if (!method || !el.head.contains(method)) return;
    setPrepaymentMethod(method.value);
  });

  el.head.addEventListener("click", function (event) {
    if (event.target.closest(".hlc-prepay-header-select")) return;
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

  document.body.addEventListener("click", function (event) {
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
    const bankCell = event.target.closest(".hlc-compare tbody td.hlc-sticky-col");
    if (!bankCell) return;
    const row = bankCell.closest("tr[data-id]");
    if (row) toggleSelect(row.getAttribute("data-id"));
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
    if (event.key === "Escape") closeDrawer();
  });

  el.applyBtn.addEventListener("click", function () {
    showToast(
      "Apply once is coming next — your " +
        state.selected.size +
        " selected bank" +
        (state.selected.size === 1 ? "" : "s") +
        " will go in one packet."
    );
  });

  el.paddleLeft.addEventListener("click", function () {
    el.scroll.scrollBy({ left: -220, behavior: "smooth" });
  });
  el.paddleRight.addEventListener("click", function () {
    el.scroll.scrollBy({ left: 220, behavior: "smooth" });
  });

  syncFoirFace();

  fetch(DATA_URL)
    .then(function (response) {
      if (!response.ok) throw new Error("Failed to load compare data");
      return response.json();
    })
    .then(function (dataset) {
      state.dataset = dataset;
      state.dataVersion = dataset.meta && dataset.meta.data_version ? dataset.meta.data_version : "";
      root.setAttribute("aria-busy", "false");
      clearAllPrimaryIssues();
      if (!primaryFieldsAreComplete()) return;
      return runMatch();
    })
    .catch(function (error) {
      console.error(error);
      showToast("Could not load comparison data. Refresh and try again.");
      root.setAttribute("aria-busy", "false");
    });

  window.__hlcValidatePrimaryFields = validatePrimaryFieldsForSubmit;
}

module.exports = {
  GROUPS,
  PREPAYMENT_METHOD_OWN,
  PREPAYMENT_METHOD_BT,
  FLOATING_PREPAY_NOTE,
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
  applyPrepaymentMethodToRows,
  prepayChargeForMethod,
  formatChargeDisplay,
  formatChargeDisplayText,
  formatChargeBasis,
  formatPct,
  formatTenureYears,
  initPage
};

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
  } else {
    initPage();
  }
}
