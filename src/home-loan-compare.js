"use strict";

const { Engine } = require("json-rules-engine");

const DATA_URL = "../data/home-loans-compare.json";
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
const FOIR_CHOICES = [50, 55, 60, 65, 70];

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
    { key: "processingFee", label: "Processing fee", type: "inr", sort: "num" },
    { key: "processingFeePct", label: "Fee %", type: "pct", sort: "num" },
    { key: "otherChargeNote", label: "Other (sample)", type: "text", sort: "text" }
  ]
};

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

function computeOfferTerms(query, offer, roiDecimal) {
  const tenureMonths = resolveTenureMonths(offer, query.age, query.tenureYears);
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
  if (status === "Not_Used") return true;
  if (cibilScore == null) return status !== "Scored";
  if (status === "Scored") {
    return inNumericBand(
      cibilScore,
      "Yes",
      offer.cibil_band_score_min,
      offer.cibil_band_score_max
    );
  }
  return true;
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
  const terms = computeOfferTerms(query, offer, roiDecimal);
  if (!(terms.tenureMonths > 0) || !(terms.loanAmount > 0)) return false;

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
      terms.tenureMonths,
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

function prefilterPrepayCharge(charge, offer) {
  if (charge.charge_name !== "Prepayment charges") return false;
  if (normalizeText(charge.bank_key) !== normalizeText(offer.bank_key)) return false;
  if (charge.rate_type && offer.rate_type && charge.rate_type !== offer.rate_type) return false;
  if (charge.purpose && offer.purpose && charge.purpose !== offer.purpose) return false;
  return true;
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

function formatPrepayLabel(charge) {
  if (!charge) return "—";
  if (charge.fixed_amount === 0 && (charge.percentage == null || charge.percentage === 0)) {
    return "0%";
  }
  if (charge.percentage != null && charge.percentage > 0) {
    return (charge.percentage * 100).toFixed(2) + "%";
  }
  if (charge.note_1) return charge.note_1;
  return "See bank rules";
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
  if (value < 0) return formatPct(Math.abs(value) * 100) + " off";
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

function pickPrepayCharge(charges, offer) {
  const candidates = charges.filter(function (charge) {
    return prefilterPrepayCharge(charge, offer);
  });
  if (!candidates.length) return null;
  candidates.sort(function (a, b) {
    return specificityScore(b, ["scheme", "purpose", "rate_type"]) - specificityScore(a, ["scheme", "purpose", "rate_type"]);
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
  if (offer.cibil_score_status === "Scored") {
    return (
      String(offer.cibil_band_score_min || "") +
      "–" +
      String(offer.cibil_band_score_max || "")
    );
  }
  return offer.cibil_score_status.replace(/_/g, " ");
}

function enrichMatchedRow(offer, query, bankCharges) {
  const roiDecimal = effectiveRoiDecimal(offer, query);
  const terms = computeOfferTerms(query, offer, roiDecimal);
  const offerQuery = Object.assign({}, query, {
    loanAmount: terms.loanAmount,
    tenureMonths: terms.tenureMonths
  });
  const processingCharge = pickBestCharge(bankCharges, offerQuery, offer, "Processing fee");
  const prepayCharge = pickPrepayCharge(bankCharges, offer);
  const processingFee = computeProcessingFee(processingCharge, terms.loanAmount);
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
    processingFeePct:
      processingCharge && processingCharge.percentage != null
        ? processingCharge.percentage * 100
        : null,
    prepayLabel: formatPrepayLabel(prepayCharge),
    prepayPct:
      prepayCharge && prepayCharge.percentage != null ? prepayCharge.percentage * 100 : null,
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
    prepayCharge: prepayCharge
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
    return enrichMatchedRow(offer, query, dataset.bank_charges);
  });
}

const DEFAULT_SORT_KEY = "effectiveRoiPct";
const DEFAULT_SORT_DIR = "asc";

function sortRows(rows, sortKey, sortDir) {
  const key = sortKey || DEFAULT_SORT_KEY;
  const direction = sortDir === "desc" ? -1 : 1;
  return rows.slice().sort(function (a, b) {
    const left = a[key];
    const right = b[key];
    let cmp = 0;
    if (typeof left === "number" && typeof right === "number") {
      cmp = left - right;
    } else {
      cmp = String(left || "").localeCompare(String(right || ""), "en", {
        sensitivity: "base"
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
  if (column.type === "pct" && typeof value === "number") return formatPct(value);
  if (column.type === "inr" && typeof value === "number") return formatInr(value);
  if (column.type === "num" && typeof value === "number") return String(value);
  return value == null ? "—" : String(value);
}

function columnAlignClass(column) {
  if (column.type === "inr" || column.type === "pct" || column.type === "num") {
    return "hlc-col-num";
  }
  return "hlc-col-text";
}

function initPage() {
  const root = document.querySelector("[data-hlc-root]");
  if (!root) return;

  const state = {
    dataset: null,
    engine: createMatchEngine(),
    group: "essentials",
    productFilters: defaultProductFilters(),
    selected: new Set(),
    sortKey: DEFAULT_SORT_KEY,
    sortDir: DEFAULT_SORT_DIR,
    rows: [],
    showAllBanks: false,
    matchTimer: null,
    dataVersion: ""
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
    head: document.getElementById("hlc-compare-head"),
    body: document.getElementById("hlc-compare-body"),
    scroll: document.getElementById("hlc-table-scroll"),
    applyBar: document.getElementById("hlc-apply-bar"),
    selectedCount: document.getElementById("hlc-selected-count"),
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
    showMoreBtn: document.getElementById("hlc-show-more"),
    selectHint: document.getElementById("hlc-select-hint")
  };

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

  function updateLoanHint(query) {
    if (!el.loanHint) return;
    const fromProperty = maxLoanForProperty(query.propertyValue);
    if (!(fromProperty > 0)) {
      el.loanHint.textContent = "";
      return;
    }
    el.loanHint.textContent = "Up to " + formatInr(fromProperty) + " on this property";
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
    document.querySelectorAll(".hlc-rate-pills .hlc-chip[data-rate-type]").forEach(function (btn) {
      const selected = btn.getAttribute("data-rate-type") === rate;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
    });
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

  function renderTable() {
    const columns = GROUPS[state.group];
    const rows = sortRows(state.rows, state.sortKey, state.sortDir);
    const visibleRows =
      state.showAllBanks || rows.length <= INITIAL_VISIBLE_BANKS
        ? rows
        : rows.slice(0, INITIAL_VISIBLE_BANKS);

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

    let headHtml = "<tr>";
    headHtml += '<th class="hlc-sticky-col" scope="col">Bank</th>';
    columns.forEach(function (column) {
      const canSort = column.key === DEFAULT_SORT_KEY;
      const ariaSort =
        canSort && state.sortKey === column.key
          ? state.sortDir === "asc"
            ? ' aria-sort="ascending"'
            : ' aria-sort="descending"'
          : ' aria-sort="none"';
      const sortClass = canSort ? " hlc-sortable" : " hlc-sort-static";
      const sortAttr = canSort ? ' data-sort="' + column.key + '"' : "";
      const sortInd =
        '<span class="hlc-sort-ind" aria-hidden="true">' +
        '<span class="hlc-sort-up">' +
        '<svg width="8" height="5" viewBox="0 0 8 5" aria-hidden="true" focusable="false">' +
        '<path d="M1 4.5 4 1.5 7 4.5" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg></span>" +
        '<span class="hlc-sort-down">' +
        '<svg width="8" height="5" viewBox="0 0 8 5" aria-hidden="true" focusable="false">' +
        '<path d="M1 0.5 4 3.5 7 0.5" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg></span>" +
        "</span>";
      headHtml +=
        '<th class="' +
        columnAlignClass(column) +
        sortClass +
        '" scope="col"' +
        sortAttr +
        ariaSort +
        ">" +
        column.label +
        sortInd +
        "</th>";
    });
    headHtml += "</tr>";
    el.head.innerHTML = headHtml;

    if (!rows.length) {
      el.body.innerHTML =
        '<tr><td class="hlc-empty" colspan="' +
        (columns.length + 1) +
        '">No banks matched these inputs. Try a different age, CIBIL score, occupation, or property value.</td></tr>';
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
            return (
              '<td class="' +
              columnAlignClass(column) +
              '">' +
              cellValue(row, column) +
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

    updateShowMoreButton(rows.length, visibleRows.length);
    updateSelectHint(rows.length > 0);
    updateApplyBar();
  }

  function updateApplyBar() {
    const count = state.selected.size;
    el.selectedCount.textContent = String(count);
    el.applyBtn.disabled = count === 0;
    if (count > 0) el.applyBar.classList.add("visible");
    else el.applyBar.classList.remove("visible");
  }

  function openDrawer(id) {
    const row = state.rows.find(function (entry) {
      return entry.id === id;
    });
    if (!row) return;

    el.drawerTitle.textContent = row.bankName;
    el.drawerSub.textContent = row.scheme || "";

    el.drawerBody.innerHTML =
      drawerSection("Scheme", [
        ["Facility", row.facilityLabel || "—"],
        ["Purpose", row.purpose || "—"],
        ["Rate type", row.rateType || "—"],
        ["Borrower category", row.borrowerCategoryLabel || "—"]
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
      drawerSection("Eligibility", [
        ["CIBIL", row.cibilLabel],
        ["Age", row.ageRange],
        ["Occupation", row.occupationLabel]
      ]) +
      drawerSection("Prepayment", [
        ["Summary", row.prepayLabel],
        ["Self prepay %", row.prepayPct != null ? formatPct(row.prepayPct) : "—"]
      ]) +
      '<p class="hlc-drawer-foot">These parts build the rate in the table. Figures are indicative. The bank decides final terms.</p>';

    el.drawerBackdrop.hidden = false;
    requestAnimationFrame(function () {
      el.drawerBackdrop.classList.add("open");
      el.drawer.classList.add("open");
      el.drawer.setAttribute("aria-hidden", "false");
    });
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
    root.setAttribute("aria-busy", "true");
    const query = readQuery();
    updateLoanHint(query);
    state.rows = await matchOffers(state.dataset, query, state.engine);
    state.showAllBanks = false;
    if (state.sortKey !== DEFAULT_SORT_KEY) {
      state.sortKey = DEFAULT_SORT_KEY;
      state.sortDir = DEFAULT_SORT_DIR;
    }
    root.setAttribute("aria-busy", "false");
    renderTable();
  }

  function scheduleMatch() {
    clearTimeout(state.matchTimer);
    state.matchTimer = setTimeout(function () {
      runMatch().catch(function (error) {
        console.error(error);
        showToast("Could not match banks. Refresh and try again.");
        root.setAttribute("aria-busy", "false");
      });
    }, MATCH_DEBOUNCE_MS);
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
  if (el.foir) el.foir.addEventListener("change", scheduleMatch);
  if (el.cardLoadPct) el.cardLoadPct.addEventListener("change", scheduleMatch);

  el.head.addEventListener("click", function (event) {
    const header = event.target.closest("th.hlc-sortable");
    if (!header) return;
    const key = header.getAttribute("data-sort");
    if (key !== DEFAULT_SORT_KEY) return;
    if (state.sortKey === DEFAULT_SORT_KEY && state.sortDir === "asc") {
      state.sortDir = "desc";
    } else {
      state.sortKey = DEFAULT_SORT_KEY;
      state.sortDir = DEFAULT_SORT_DIR;
    }
    renderTable();
  });

  document.body.addEventListener("click", function (event) {
    const detail = event.target.closest("[data-detail]");
    if (detail) {
      event.stopPropagation();
      openDrawer(detail.getAttribute("data-detail"));
      return;
    }
    const row = event.target.closest(".hlc-compare tbody tr[data-id]");
    if (row) toggleSelect(row.getAttribute("data-id"));
  });

  if (el.body) {
    el.body.addEventListener("keydown", function (event) {
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

  fetch(DATA_URL)
    .then(function (response) {
      if (!response.ok) throw new Error("Failed to load compare data");
      return response.json();
    })
    .then(function (dataset) {
      state.dataset = dataset;
      state.dataVersion = dataset.meta && dataset.meta.data_version ? dataset.meta.data_version : "";
      return runMatch();
    })
    .catch(function (error) {
      console.error(error);
      showToast("Could not load comparison data. Refresh and try again.");
      root.setAttribute("aria-busy", "false");
    });
}

module.exports = {
  GROUPS,
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
  pickBestOfferPerBank,
  enrichMatchedRow,
  matchOffers,
  sortRows,
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
