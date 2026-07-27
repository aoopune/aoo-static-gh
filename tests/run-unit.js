#!/usr/bin/env node
'use strict';
var passed = 0;
var failed = 0;
function ok(cond, msg) {
  if (cond) { passed++; return; }
  failed++;
  console.error('FAIL: ' + msg);
}
function parseCSV(text) {
  var rows = [];
  var row = [];
  var cell = '';
  var inQuotes = false;
  for (var i = 0; i < text.length; i++) {
    var c = text[i];
    if (c === '"') inQuotes = !inQuotes;
    else if (inQuotes) cell += c;
    else if (c === ',') { row.push(cell.trim()); cell = ''; }
    else if (c === '\n' || c === '\r') {
      row.push(cell.trim()); rows.push(row); row = []; cell = '';
      if (c === '\r' && text[i + 1] === '\n') i++;
    } else cell += c;
  }
  if (cell !== '' || row.length > 0) { row.push(cell.trim()); rows.push(row); }
  return rows;
}
var rows = parseCSV('a,b,c\n1,2,3\n"x,y",z,4');
ok(rows.length === 3, 'parseCSV row count');
ok(rows[0][0] === 'a' && rows[1][1] === '2', 'parseCSV cells');
ok(rows[2][0] === 'x,y', 'parseCSV quoted comma');

var apf = require('../src/apf-project-search.js');
var apfDataset = require('../data/apf-home-loan-projects.json');

async function testApfSearch() {
  ok(apf.normalize('  Godrej Properties—Limited ') === 'godrej properties limited', 'APF normalization');

  var query = apf.queryFromValues({
    developer_name: 'GOLDLEAF',
    project_name: '1 Gold Leaf',
    area_name: 'Warje'
  });
  ok(apf.hasAnyInput(query), 'APF accepts all three inputs');
  ok(apf.hasAnyInput({ developer_name: 'x', project_name: '', area_name: '' }), 'APF accepts one input');
  ok(!apf.hasAnyInput({ developer_name: '', project_name: '', area_name: '' }), 'APF rejects an empty query');

  var sample = {
    source_row: 2,
    bank_name: 'Axis Bank',
    developer_name: 'GOLDLEAF REALETORS',
    project_name: '1 GOLD LEAF',
    area_name: 'Warje',
    apf_code: 'PUNPAS042246',
    rera_no_raw: null,
    search: {
      developer_name: 'goldleaf realetors',
      project_name: '1 gold leaf',
      area_name: 'warje'
    }
  };
  ok(apf.prefilterRecord(sample, query), 'APF prefilter matches all inputs');

  var engine = apf.createSearchEngine();
  ok(await apf.matchesRules(engine, sample, query), 'json-rules-engine accepts matching APF record');
  ok(
    !(await apf.matchesRules(engine, sample, Object.assign({}, query, { area_name: 'baner' }))),
    'json-rules-engine rejects non-matching APF record'
  );

  ok(apf.dedupeResults([sample, Object.assign({}, sample)]).length === 1, 'APF exact result deduplication');
  ok(apfDataset.records.length === 11597, 'APF dataset preserves every source row');
  ok(
    apfDataset.records.filter(function (record) { return record.quality.exact_duplicate; }).length === 13,
    'APF dataset flags exact duplicates'
  );
  ok(
    apfDataset.records.every(function (record) {
      return record.apf_code === null || typeof record.apf_code === 'string';
    }),
    'APF codes are stored as text'
  );
}

testApfSearch()
  .catch(function (error) {
    failed++;
    console.error(error);
  })
  .finally(function () {
    return testHomeLoanCompare();
  })
  .catch(function (error) {
    failed++;
    console.error(error);
  })
  .finally(function () {
    console.log('Unit tests: ' + passed + ' passed, ' + failed + ' failed');
    process.exit(failed > 0 ? 1 : 0);
  });

async function testHomeLoanCompare() {
  var compare = require('../src/home-loan-compare.js');
  var fs = require('fs');
  var path = require('path');
  var dataset = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/home-loans-compare.json'), 'utf8')
  );

  ok(compare.matchesOptionalField('Any', 'Salaried'), 'compare Any occupation matches');
  ok(!compare.matchesOptionalField('Self-Employed', 'Salaried'), 'compare occupation mismatch');
  ok(compare.inNumericBand(5000000, 'Yes', 1, 10000000), 'compare loan amount in band');
  ok(!compare.inNumericBand(5000000, 'Yes', 1, 3000000), 'compare loan amount out of band');

  var query = compare.queryFromInputs({
    age: 35,
    cibilScore: 780,
    monthlyIncome: 100000,
    occupation: 'Salaried',
    propertyValue: 6250000
  });
  ok(query.purpose === 'Regular Home Loan', 'compare purpose defaults to regular home loan');
  ok(query.foirPct === 55, 'compare FOIR defaults to 55 like how-much-loan');
  ok(query.tenureYears === 20, 'compare tenure defaults to 20 years');
  ok(query.existingEmis === 0, 'compare existing EMIs default 0');
  ok(query.cardLimits === 0, 'compare card limits default 0');
  ok(query.cardLoadPct === 10, 'compare card load defaults to 10%');
  ok(query.includeCoApplicant === false, 'compare co-applicant off by default');
  var topUpQuery = compare.queryFromInputs({
    age: 35,
    cibilScore: 780,
    monthlyIncome: 100000,
    occupation: 'Salaried',
    purpose: 'Top-up Loan',
    propertyValue: 6250000
  });
  ok(topUpQuery.purpose === 'Top-up Loan', 'compare purpose accepts top-up');
  ok(compare.parseMoney('1,00,000') === 100000, 'compare parses Indian comma money');
  ok(compare.parseMoney('₹62,50,000') === 6250000, 'compare parses rupee money');
  ok(compare.formatInrDigits(100000) === '1,00,000', 'compare formats Indian commas');
  ok(compare.formatIndianAmountDigits('1200000', 10) === '12,00,000', 'compare formats amount digits while typing');
  ok(compare.formatIndianAmountDigits('12,00,000', 10) === '12,00,000', 'compare keeps commas when re-formatting');
  ok(compare.matchesAge({ age_min: 21, age_max: 70 }, 35), 'compare age in range');
  ok(!compare.matchesAge({ age_min: 21, age_max: 70 }, 75), 'compare age out of range');

  var sampleOffer = { req_repayment_tenure_months_max: 360, age_max: 70, tenure_band_applicable: 'No' };
  ok(compare.tenureMonthsForOffer(sampleOffer, 35) === 360, 'compare tenure capped by offer max when age allows');
  ok(compare.tenureMonthsForOffer(sampleOffer, 55) === 180, 'compare tenure shrinks with age to age_max');
  ok(compare.tenureMonthsForOffer({ req_repayment_tenure_months_max: 360, age_max: 65, tenure_band_applicable: 'No' }, 58) === 84, 'compare tenure stops at age_max boundary');
  ok(compare.resolveTenureMonths(sampleOffer, 35, 20) === 240, 'compare uses requested 20 years when allowed');
  ok(compare.resolveTenureMonths(sampleOffer, 55, 30) === 180, 'compare tenure request capped by age');
  ok(compare.resolveTenureMonths(sampleOffer, 35, 40) === 360, 'compare tenure request capped at 30 years');

  var terms = compare.computeOfferTerms(query, sampleOffer, 0.08);
  ok(terms.loanAmount === 5000000, 'compare loan is lower of LTV and income at sample rate');
  ok(terms.downPayment === 1250000, 'compare down payment is property minus loan');
  ok(terms.limiting === 'property', 'compare property LTV limits at default sample');
  ok(Math.round(terms.tenureYears) === 20, 'compare uses default tenure years');
  ok(terms.emi > 0, 'compare EMI computed from loan tenure and rate');

  var incomeCase = {
    age: 35,
    cibilScore: 780,
    monthlyIncome: 80000,
    existingEmis: 0,
    cardLimits: 200000,
    occupation: 'Salaried',
    propertyValue: 20000000,
    tenureYears: 20
  };
  var foir55 = compare.computeOfferTerms(
    compare.queryFromInputs(Object.assign({}, incomeCase, { foirPct: 55, cardLoadPct: 10 })),
    sampleOffer,
    0.085
  );
  var foir70 = compare.computeOfferTerms(
    compare.queryFromInputs(Object.assign({}, incomeCase, { foirPct: 70, cardLoadPct: 10 })),
    sampleOffer,
    0.085
  );
  ok(foir70.fromIncome > foir55.fromIncome, 'compare FOIR choice raises income loan capacity');
  ok(foir70.loanAmount > foir55.loanAmount, 'compare FOIR choice recalculates loan when income limits');

  var card0 = compare.computeOfferTerms(
    compare.queryFromInputs(Object.assign({}, incomeCase, { foirPct: 55, cardLoadPct: 0 })),
    sampleOffer,
    0.085
  );
  var card10 = compare.computeOfferTerms(
    compare.queryFromInputs(Object.assign({}, incomeCase, { foirPct: 55, cardLoadPct: 10 })),
    sampleOffer,
    0.085
  );
  ok(card0.fromIncome > card10.fromIncome, 'compare card-load % choice recalculates income capacity');
  ok(card0.loanAmount > card10.loanAmount, 'compare card-load % choice recalculates loan when income limits');

  var heavyEmis = compare.queryFromInputs({
    age: 35,
    cibilScore: 780,
    monthlyIncome: 100000,
    existingEmis: 50000,
    occupation: 'Salaried',
    propertyValue: 6250000,
    tenureYears: 20,
    foirPct: 55
  });
  var termsHeavy = compare.computeOfferTerms(heavyEmis, sampleOffer, 0.08);
  ok(termsHeavy.loanAmount < terms.loanAmount, 'compare existing EMIs reduce income capacity');

  var withCards = compare.queryFromInputs({
    age: 35,
    cibilScore: 780,
    monthlyIncome: 100000,
    existingEmis: 0,
    cardLimits: 500000,
    occupation: 'Salaried',
    propertyValue: 6250000,
    tenureYears: 20,
    foirPct: 55
  });
  var termsCards = compare.computeOfferTerms(withCards, sampleOffer, 0.08);
  ok(termsCards.loanAmount < terms.loanAmount, 'compare card limits reduce income capacity at 10% load');
  ok(
    compare.maxLoanFromIncome(100000, 0.08, 240, 55, 0, 100000, 10) ===
      compare.maxLoanFromIncome(100000, 0.08, 240, 55, 10000, 0, 10),
    'compare 10% of card limits equals same EMI room cut'
  );
  ok(
    compare.maxLoanFromIncome(100000, 0.08, 240, 55, 0, 500000, 0) ===
      compare.maxLoanFromIncome(100000, 0.08, 240, 55, 0, 0, 10),
    'compare 0% card load ignores card limits'
  );

  var withCo = compare.queryFromInputs({
    age: 35,
    cibilScore: 780,
    monthlyIncome: 50000,
    existingEmis: 0,
    includeCoApplicant: 'yes',
    coMonthlyIncome: 50000,
    coExistingEmis: 0,
    occupation: 'Salaried',
    propertyValue: 6250000,
    tenureYears: 20,
    foirPct: 55
  });
  var alone = compare.queryFromInputs({
    age: 35,
    cibilScore: 780,
    monthlyIncome: 50000,
    existingEmis: 0,
    occupation: 'Salaried',
    propertyValue: 6250000,
    tenureYears: 20,
    foirPct: 55
  });
  var termsCo = compare.computeOfferTerms(withCo, sampleOffer, 0.08);
  var termsAlone = compare.computeOfferTerms(alone, sampleOffer, 0.08);
  ok(termsCo.fromIncome > termsAlone.fromIncome, 'compare co-applicant income raises income loan');

  var engine = compare.createMatchEngine();
  var axisOffer = dataset.offers.find(function (offer) {
    return (
      offer.bank_name === 'Axis Bank' &&
      offer.occupation === 'Salaried' &&
      offer.rate_type === 'Floating' &&
      compare.prefilterOffer(offer, query)
    );
  });
  ok(axisOffer, 'compare fixture axis offer exists');
  ok(await compare.matchesOfferRules(engine, axisOffer, query), 'json-rules-engine accepts matching offer');
  ok(
    !(await compare.matchesOfferRules(
      engine,
      axisOffer,
      Object.assign({}, query, { occupation: 'Self-Employed' })
    )),
    'json-rules-engine rejects occupation mismatch when offer is salaried-only'
  );

  var rows = await compare.matchOffers(dataset, query, engine);
  ok(rows.length >= 20, 'compare matches multiple banks');
  ok(
    rows.every(function (row) {
      return row.emi > 0 && row.effectiveRoiPct > 0;
    }),
    'compare enriched rows have EMI and ROI'
  );
  var axisRow = rows.find(function (row) {
    return row.bankName === 'Axis Bank';
  });
  ok(axisRow, 'compare includes Axis Bank for default query');
  ok(axisRow.processingFee >= 10000, 'compare joins processing fee for Axis');

  var pnbRow = rows.find(function (row) {
    return row.bankName === 'Punjab National Bank';
  });
  ok(pnbRow, 'compare includes PNB for default query');
  ok(
    pnbRow.processingFee > 0 && pnbRow.processingFee <= 15000,
    'compare uses general PNB processing fee when govt/psu filter is off'
  );
  ok(
    !compare.matchesBorrowerCategoryForOffer(
      compare.GOVT_PSU_BORROWER_CATEGORY,
      false
    ),
    'compare borrower filter rejects PSU rows when filter off'
  );
  ok(
    !compare.matchesBorrowerCategoryForOffer('Any', true),
    'compare govt filter rejects Any offers'
  );
  ok(
    compare.matchesBorrowerCategoryForCharge('Any', true),
    'compare govt filter still allows Any charge rows'
  );

  ok(query.rateType === 'Floating', 'compare defaults to floating rate');
  ok(query.facilityType === 'Term Loan', 'compare defaults to term loan');

  var govtOffer = dataset.offers.find(function (offer) {
    return offer.borrower_category === compare.GOVT_PSU_BORROWER_CATEGORY && offer.rate_type === 'Floating';
  });
  ok(govtOffer, 'compare fixture govt/psu offer exists');
  ok(!compare.matchesProductFilters(govtOffer, query), 'compare hides govt/psu offers when filter off');
  ok(
    compare.matchesProductFilters(
      govtOffer,
      compare.queryFromInputs(
        { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000 },
        { govtPsu: true }
      )
    ),
    'compare shows govt/psu offers when filter on'
  );

  var fixedQuery = compare.queryFromInputs(
    { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000 },
    { fixedRate: true }
  );
  ok(fixedQuery.rateType === 'Fixed', 'compare fixed filter switches rate type');

  var overdraftQuery = compare.queryFromInputs(
    { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000 },
    { overdraft: true }
  );
  ok(overdraftQuery.facilityType === 'Overdraft', 'compare overdraft filter switches facility type');

  var allBankTypeQuery = compare.queryFromInputs(
    { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000 },
    {}
  );
  ok(allBankTypeQuery.bankType === 'All', 'compare bank type defaults to All');

  var publicOffer = { rate_type: 'Floating', facility_type: 'Term Loan', bank_type: 'Public', borrower_category: 'Any' };
  var privateOffer = { rate_type: 'Floating', facility_type: 'Term Loan', bank_type: 'Private', borrower_category: 'Any' };
  var publicQuery = compare.queryFromInputs(
    { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000 },
    { bankType: 'Public' }
  );
  ok(compare.matchesProductFilters(publicOffer, publicQuery), 'compare public filter keeps public banks');
  ok(!compare.matchesProductFilters(privateOffer, publicQuery), 'compare public filter drops private banks');
  ok(compare.matchesProductFilters(privateOffer, allBankTypeQuery), 'compare All keeps private banks');
}
