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
    testGuideIntelligence();
  })
  .finally(function () {
    testIntelligence();
  })
  .finally(function () {
    console.log('Unit tests: ' + passed + ' passed, ' + failed + ' failed');
    process.exit(failed > 0 ? 1 : 0);
  });

async function testHomeLoanCompare() {
  var compare = require('../src/home-loan-compare.js');
  var CHARGE_NOT_PUBLISHED_BY_BANK = compare.CHARGE_NOT_PUBLISHED_BY_BANK;
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

  ok(
    compare.bankLogoPath('HDFC Bank') === '../images/banks/hdfc-bank.png',
    'compare bank logo path for HDFC'
  );
  ok(
    compare.bankLogoHtml('HDFC Bank').indexOf('hlc-bank-logo') !== -1,
    'compare bank logo html includes img'
  );
  ok(compare.bankLogoPath('Unknown Bank') === '', 'compare unknown bank has no logo');

  var bankLogos = require('../src/bank-logos.js');
  ok(
    bankLogos.bankLogoPath('HDFC Bank') === '../images/banks/hdfc-bank.png',
    'shared bank logo path for HDFC'
  );
  ok(
    typeof bankLogos.createBankLogoImg === 'function',
    'shared bank logos expose createBankLogoImg'
  );

  ok(compare.formatInrDigits(100000) === '1,00,000', 'compare formats Indian commas');
  ok(
    compare.formatHlcDisplayValue('100000', { format: 'money' }) === '1,00,000',
    'money display rule commas raw digits'
  );
  ok(
    compare.formatHlcDisplayValue('1,00,000', { format: 'money' }) === '1,00,000',
    'money display rule is idempotent on comma text'
  );
  ok(
    compare.formatHlcDisplayValue('5000000', { format: 'money' }) === '50,00,000',
    'money display rule commas sample loan amount'
  );
  ok(
    compare.formatHlcDisplayValue('0', { format: 'money' }) === '0',
    'money display rule keeps zero without commas'
  );
  ok(
    compare.formatHlcDisplayValue('35', { format: 'digits', maxDigits: 2 }) === '35',
    'digits display rule stays plain'
  );
  ok(
    compare.formatHlcDisplayValue('99', { format: 'digits', maxDigits: 2, maxValue: 30 }) === '30',
    'digits display rule respects max'
  );
  ok(
    compare.formatFreshnessLabel('2026-07-14') === 'Last checked on 14 July 2026',
    'freshness line is Last checked on plus the date'
  );
  ok(compare.formatFreshnessLabel('') === '', 'freshness line is empty without a date');
  ok(
    compare.formatDrawerFreshnessSubtitle('Home Loan', '2026-07-14') ===
      'Home Loan · Last checked on 14 July 2026',
    'drawer subtitle reuses the same freshness line'
  );
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

  var cappedTerms = compare.computeOfferTerms(
    compare.queryFromInputs(Object.assign({}, {
      age: 35,
      cibilScore: 780,
      monthlyIncome: 100000,
      existingEmis: 0,
      cardLimits: 0,
      occupation: 'Salaried',
      propertyValue: 6250000,
      tenureYears: 20,
      loanAmountRequest: '2000000'
    })),
    sampleOffer,
    0.08
  );
  ok(cappedTerms.loanAmount === 2000000, 'compare loanAmountRequest caps table loan below eligibility');
  ok(cappedTerms.limiting === 'request', 'compare limiting is request when request caps');
  ok(cappedTerms.requestCapped === true, 'compare requestCapped flag when request wins');

  var uncappedTerms = compare.computeOfferTerms(
    compare.queryFromInputs(Object.assign({}, {
      age: 35,
      cibilScore: 780,
      monthlyIncome: 100000,
      existingEmis: 0,
      cardLimits: 0,
      occupation: 'Salaried',
      propertyValue: 6250000,
      tenureYears: 20,
      loanAmountRequest: '0'
    })),
    sampleOffer,
    0.08
  );
  ok(uncappedTerms.loanAmount === terms.loanAmount, 'empty loanAmountRequest does not cap loan');
  ok(uncappedTerms.requestCapped === false, 'empty loanAmountRequest leaves requestCapped false');

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

  var coBase = {
    age: 30,
    cibilScore: 780,
    monthlyIncome: 50000,
    existingEmis: 0,
    occupation: 'Salaried',
    propertyValue: 100000000,
    tenureYears: 30,
    foirPct: 55,
    includeCoApplicant: 'yes'
  };

  var twoEarners = compare.queryFromInputs(Object.assign({}, coBase, {
    coApplicants: [
      { relationship: 'Spouse', occupation: 'Salaried', age: 30, monthlyIncome: 50000 },
      { relationship: 'Brother', occupation: 'Salaried', age: 32, monthlyIncome: 40000 }
    ]
  }));
  ok(twoEarners.coApplicants.length === 2, 'compare keeps several co-applicants');
  ok(
    compare.computeOfferTerms(twoEarners, sampleOffer, 0.08).fromIncome >
      compare.computeOfferTerms(withCo, sampleOffer, 0.08).fromIncome,
    'compare pools income across every co-applicant'
  );

  var cappedList = compare.normalizeCoApplicants(
    [1, 2, 3, 4, 5, 6, 7].map(function () {
      return { relationship: 'Spouse', occupation: 'Salaried', age: 30, monthlyIncome: 1000 };
    })
  );
  ok(cappedList.length === compare.MAX_CO_APPLICANTS, 'compare caps co-applicants at the lender limit');

  var strangerCo = compare.queryFromInputs(Object.assign({}, coBase, {
    coApplicants: [
      { relationship: 'Other', occupation: 'Salaried', age: 30, monthlyIncome: 200000 }
    ]
  }));
  ok(
    compare.computeOfferTerms(strangerCo, sampleOffer, 0.08).fromIncome ===
      compare.computeOfferTerms(compare.queryFromInputs(Object.assign({}, coBase, { includeCoApplicant: 'no' })), sampleOffer, 0.08).fromIncome,
    'compare ignores income from a relationship lenders will not club'
  );

  var notEarningCo = compare.queryFromInputs(Object.assign({}, coBase, {
    coApplicants: [
      { relationship: 'Spouse', occupation: 'Not earning', age: 30, monthlyIncome: 200000 }
    ]
  }));
  ok(
    compare.computeOfferTerms(notEarningCo, sampleOffer, 0.08).fromIncome ===
      compare.computeOfferTerms(compare.queryFromInputs(Object.assign({}, coBase, { includeCoApplicant: 'no' })), sampleOffer, 0.08).fromIncome,
    'compare ignores income for a co-applicant marked not earning'
  );

  // Tenure is capped by the eldest borrower whose income is counted, so a small
  // income from a near-retirement parent must not be allowed to shrink the loan.
  var oldParentCo = compare.queryFromInputs(Object.assign({}, coBase, {
    coApplicants: [
      { relationship: 'Father', occupation: 'Salaried', age: 68, monthlyIncome: 20000 }
    ]
  }));
  var soloTerms = compare.computeOfferTerms(
    compare.queryFromInputs(Object.assign({}, coBase, { includeCoApplicant: 'no' })),
    sampleOffer,
    0.08
  );
  var parentTerms = compare.computeOfferTerms(oldParentCo, sampleOffer, 0.08);
  ok(
    parentTerms.fromIncome === soloTerms.fromIncome,
    'compare drops an older earner when counting them would cost more tenure than it gains'
  );
  ok(
    parentTerms.incomeBasis.droppedIds.indexOf('co-1') !== -1,
    'compare records which co-applicant was left out of the income pool'
  );
  ok(
    parentTerms.tenureMonths === soloTerms.tenureMonths,
    'compare keeps the full tenure when the older earner is left out'
  );

  var richParentCo = compare.queryFromInputs(Object.assign({}, coBase, {
    coApplicants: [
      { relationship: 'Father', occupation: 'Salaried', age: 68, monthlyIncome: 5000000 }
    ]
  }));
  var richParentTerms = compare.computeOfferTerms(richParentCo, sampleOffer, 0.08);
  ok(
    richParentTerms.incomeBasis.countedIds.indexOf('co-1') !== -1,
    'compare still counts an older earner when the income clearly beats the lost tenure'
  );

  var weakCoCibil = compare.queryFromInputs(Object.assign({}, coBase, {
    coApplicants: [
      { relationship: 'Spouse', occupation: 'Salaried', age: 30, cibilScore: 640, monthlyIncome: 50000 }
    ]
  }));
  ok(weakCoCibil.cibilScore === 640, 'compare prices on the weakest score on the loan');
  ok(weakCoCibil.primaryCibilScore === 780, 'compare keeps the primary score for display');

  ok(
    compare.matchesApplicantAges({ age_min: 21, age_max: 65 }, [72, 30]),
    'compare accepts a scheme when one earning applicant fits its age window'
  );
  ok(
    !compare.matchesApplicantAges({ age_min: 21, age_max: 65 }, [72, 68]),
    'compare rejects a scheme when no earning applicant fits its age window'
  );

  var engine = compare.createMatchEngine();
  var axisOffer = dataset.offers.find(function (offer) {
    return (
      offer.bank_name === 'Axis Bank' &&
      offer.rate_type === 'Floating' &&
      compare.prefilterOffer(offer, query)
    );
  });
  ok(axisOffer, 'compare fixture axis offer exists');
  ok(await compare.matchesOfferRules(engine, axisOffer, query), 'json-rules-engine accepts matching offer');
  var salariedOnlyOffer = dataset.offers.find(function (offer) {
    return (
      offer.occupation === 'Salaried' &&
      offer.rate_type === 'Floating' &&
      compare.prefilterOffer(offer, query)
    );
  });
  ok(salariedOnlyOffer, 'compare fixture salaried-only offer exists');
  ok(
    !(await compare.matchesOfferRules(
      engine,
      salariedOnlyOffer,
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
  ok(
    axisRow.propertyCheckChargeRows.length === 3 &&
      axisRow.propertyCheckChargeRows[0].name === 'Legal and technical' &&
      axisRow.propertyCheckChargeRows[1].name === 'Title search report' &&
      axisRow.propertyCheckChargeRows[2].name === 'Valuation' &&
      axisRow.propertyCheckCharges ===
        axisRow.propertyCheckChargeRows[0].amount +
          axisRow.propertyCheckChargeRows[1].amount +
          axisRow.propertyCheckChargeRows[2].amount,
    'compare joins Axis property-check total from three overlay lines'
  );
  ok(
    rows.every(function (row) {
      var lines = row.propertyCheckChargeRows || [];
      if (lines.length !== 3) return false;
      var amounts = lines.map(function (line) {
        return line.amount;
      });
      var distinct = amounts.every(function (amount, index) {
        return amounts.indexOf(amount) === index;
      });
      var hundreds = amounts.every(function (amount) {
        return amount >= 3900 && amount <= 5300 && amount % 100 === 0;
      });
      return (
        distinct &&
        hundreds &&
        row.propertyCheckCharges === amounts[0] + amounts[1] + amounts[2]
      );
    }),
    'each bank has three distinct property-check amounts in hundreds'
  );
  ok(
    new Set(
      rows.map(function (row) {
        return row.propertyCheckCharges;
      })
    ).size === rows.length,
    'no two banks share the same property-check total'
  );
  var regularGovernmentNote = compare.formatOptionalGovernmentChargesNote(
    dataset.government_charges,
    query,
    rows[0].loanAmount,
    compare.DEFAULT_JURISDICTION_STATE
  );
  ok(
    regularGovernmentNote.indexOf('apply across India') >= 0 &&
      regularGovernmentNote.indexOf('specific to Maharashtra') >= 0,
    'government note separates India-wide and Maharashtra charges'
  );
  var governmentNoteParts = regularGovernmentNote.split('\n').filter(Boolean);
  var governmentNoteHtml = compare.chargesNoteGroupHtml(
    'Government charges',
    governmentNoteParts
  );
  ok(
    governmentNoteParts.length >= 3 &&
      governmentNoteHtml.indexOf('<br><br>') !== -1 &&
      governmentNoteHtml.indexOf('NOI document handling') !== -1 &&
      governmentNoteHtml.indexOf('NOI stamp duty') !== -1,
    'government charges footnote renders each note on its own line'
  );
  var topUpGovernmentNote = compare.formatOptionalGovernmentChargesNote(
    dataset.government_charges,
    Object.assign({}, query, { purpose: 'Top-up Loan' }),
    rows[0].loanAmount,
    compare.DEFAULT_JURISDICTION_STATE
  );
  ok(
    topUpGovernmentNote.indexOf('specific to Maharashtra') >= 0,
    'top-up government charges retain a matching jurisdiction note'
  );
  ok(
    compare.DEFAULT_GOVERNMENT_GST_RATE === 0.18,
    'government GST rate is 18%'
  );
  ok(
    compare.computeGovernmentChargeAmount(
      { calculation_method: 'Flat', flat_amount_inr: 100, gst_applicable: 'Yes' },
      5000000
    ) === 100,
    'CERSAI table amount stays exclusive of taxes'
  );
  ok(
    compare.computeGovernmentChargeAmount(
      { calculation_method: 'Flat', flat_amount_inr: 50, gst_applicable: 'Yes' },
      400000
    ) === 50,
    'CERSAI lower slab stays exclusive of taxes'
  );
  ok(
    compare.computeGovernmentChargeAmount(
      { calculation_method: 'Flat', flat_amount_inr: 100, gst_applicable: 'No' },
      5000000
    ) === 100,
    'government fees without GST stay at the listed amount'
  );
  ok(
    compare.computeGovernmentChargeBaseAmount(
      { calculation_method: 'Flat', flat_amount_inr: 100, gst_applicable: 'Yes' },
      5000000
    ) === 100,
    'CERSAI base amount stays exclusive of GST'
  );
  var govtTotal50L = compare.computeGovernmentChargesTotal(
    dataset.government_charges,
    query,
    5000000,
    compare.DEFAULT_JURISDICTION_STATE
  );
  ok(
    govtTotal50L === 31100,
    'government total for a ₹50 lakh loan excludes taxes on CERSAI'
  );
  var cersaiCreation = compare
    .listApplicableGovernmentCharges(
      dataset.government_charges,
      query,
      5000000,
      compare.DEFAULT_JURISDICTION_STATE
    )
    .find(function (charge) {
      return charge.charge_name === 'CERSAI Security Interest Creation';
    });
  var cersaiParts = compare.governmentChargeAmountParts(cersaiCreation, 5000000);
  ok(
    cersaiCreation &&
      cersaiParts.base === 100 &&
      cersaiParts.gstAmount === 18 &&
      cersaiParts.total === 118,
    'CERSAI creation calculation adds 18% GST on the ₹100 slab'
  );
  ok(compare.GROUPS.laterCharges.length === 4, 'compare has four later-charge columns');
  ok(
    compare.GROUPS.laterCharges.every(function (column) {
      return column.sort === 'text';
    }),
    'every later-charge column provides the standard sort controls'
  );
  var sortedChargeRows = compare.sortRows(
    [
      { id: 'ten', bankName: 'Ten', charge: { main: '10%' } },
      { id: 'two', bankName: 'Two', charge: { main: '2%' } },
      { id: 'zero', bankName: 'Zero', charge: { main: '0%' } }
    ],
    'charge',
    'asc'
  );
  ok(
    sortedChargeRows.map(function (row) {
      return row.id;
    }).join(',') === 'zero,two,ten',
    'charge sorting uses the displayed values in natural numeric order'
  );
  ok(
    compare.GROUPS.laterCharges[2].footnote === '‡',
    'overdue charge header uses its own footnote marker'
  );
  ok(
    compare.GROUPS.laterCharges[1].key === 'rateChangeChargeDisplay',
    'rate change charge sits after prepayment in later charges'
  );
  ok(
    compare.GROUPS.laterCharges[1].footnote === '°',
    'rate change charge header uses the degree footnote marker'
  );
  ok(
    compare.laterChargesColumns(false).every(function (column) {
      return column.key !== 'prepaymentChargeDisplay';
    }),
    'floating later-charges columns hide prepayment'
  );
  ok(
    compare.laterChargesColumns(false).some(function (column) {
      return column.key === 'rateChangeChargeDisplay';
    }),
    'floating later-charges columns still include rate change'
  );
  ok(
    compare.laterChargesColumns(true)[0].key ===
      'prepaymentChargeDisplay',
    'fixed later-charges columns include prepayment'
  );
  ok(
    compare.laterChargesColumns(true).some(function (column) {
      return column.key === 'rateChangeChargeDisplay';
    }),
    'fixed later-charges columns include rate change'
  );
  ok(
    compare.laterChargesFeeCount(false) === 3,
    'floating other-charges layout uses three fee columns'
  );
  ok(
    compare.laterChargesFeeCount(true) === 4,
    'fixed other-charges layout uses four fee columns'
  );
  ok(
    compare.RATE_CHANGE_FREQUENCY_NOTE ===
      '° These fees are usually charged each time you switch rate type — not once for the whole loan.',
    'rate change shared frequency note uses the locked copy'
  );
  ok(
    compare.rateChangeFrequencyNoteForMethod(
      compare.RATE_CHANGE_METHOD_TYPE
    ) === compare.RATE_CHANGE_FREQUENCY_NOTE &&
      compare.rateChangeFrequencyNoteForMethod(
        compare.RATE_CHANGE_METHOD_REPRICE
      ) === compare.RATE_CHANGE_FREQUENCY_NOTE_REPRICE &&
      compare.rateChangeFrequencyNoteForMethod(
        compare.RATE_CHANGE_METHOD_BENCHMARK
      ) === compare.RATE_CHANGE_FREQUENCY_NOTE_BENCHMARK,
    'rate change frequency note follows the selected method'
  );
  ok(
    compare.RATE_CHANGE_BENCHMARK_MEANING_NOTE.indexOf('RBI repo rate') !== -1 &&
      compare.RATE_CHANGE_BENCHMARK_MEANING_NOTE.indexOf('rate the bank sets') !== -1 &&
      compare.RATE_CHANGE_BENCHMARK_MEANING_NOTE.indexOf('You choose') !== -1 &&
      compare.RATE_CHANGE_BENCHMARK_MEANING_NOTE.indexOf('MCLR') === -1 &&
      compare.RATE_CHANGE_BENCHMARK_MEANING_NOTE.indexOf('BPLR') === -1,
    'benchmark meaning note says how the rate is decided, not MCLR/BPLR'
  );
  ok(
    compare.RATE_CHANGE_REPRICING_MEANING_NOTE.indexOf('higher rate') !== -1 &&
      compare.RATE_CHANGE_REPRICING_MEANING_NOTE.indexOf('lower rate') !== -1 &&
      compare.RATE_CHANGE_REPRICING_MEANING_NOTE.indexOf('Floating') !== -1,
    'repricing meaning note states higher-to-lower on the same rate type'
  );
  ok(
    compare.formatBenchmarkSwitchShortNote({
      benchmark_switch_from: 'MCLR',
      benchmark_switch_to: 'EBR'
    }) === 'From a rate the bank sets to the RBI repo rate.' &&
      compare.formatBenchmarkSwitchShortNote({
        benchmark_switch_from: 'Base Rate / MCLR / BPLR',
        benchmark_switch_to: 'RLLR'
      }) === 'From a rate the bank sets to the RBI repo rate.',
    'Notes from/to names repo vs a rate the bank sets, not MCLR/BPLR'
  );
  ok(
    compare.expandBenchmarkSwitchSide('Base Rate / MCLR / BPLR') ===
      'Base Rate / Marginal Cost of Funds based Lending Rate (MCLR) / Benchmark Prime Lending Rate (BPLR)' &&
      compare.expandBenchmarkSwitchSide('External Benchmark Rate (Repo Rate)') ===
        'External Benchmark Rate linked to the repo rate (EBR)',
    'benchmark labels expand to long forms'
  );
  ok(
    compare
      .formatBenchmarkSwitchDetail({
        fixed_amount: 5000,
        benchmark_switch_from: 'MCLR',
        benchmark_switch_to: 'EBR'
      })
      .indexOf(
        'From Marginal Cost of Funds based Lending Rate (MCLR) to External Benchmark Rate (EBR)'
      ) !== -1,
    'benchmark panel detail uses expanded from/to labels'
  );
  ok(
    compare.rateChangeTypeSwitchLabel('Floating') === 'Floating ➔ Fixed' &&
      compare.rateChangeTypeSwitchLabel('Fixed') === 'Fixed ➔ Floating',
    'rate change type-switch label follows the rate filter'
  );
  ok(
    compare.formatRateChangeChargeDisplay(null).main === CHARGE_NOT_PUBLISHED_BY_BANK,
    'missing rate change charge displays as not published by bank'
  );
  ok(
    compare.formatRateChangeChargeDisplay({ fixed_amount: 0 }).main === '₹0',
    'zero fixed rate-change amount displays as ₹0 not Nil'
  );
  ok(
    rows.every(function (row) {
      return row.prepaymentChargeDisplay.main === 'Nil (₹0)';
    }),
    'compare lists floating-rate prepayment as Nil (₹0)'
  );
  ok(
    compare.FLOATING_PREPAY_NOTE ===
      'Floating home loans to individuals have no prepayment charge under RBI.',
    'floating prepayment note states the RBI rule'
  );
  ok(
    compare.FIXED_FORECLOSURE_NOTE ===
      'Foreclosure means closing the full loan early. Lenders usually apply the same charge as prepayment, so foreclosure is not listed separately.',
    'fixed-rate note explains foreclosure follows prepayment'
  );
  ok(
    compare.PROCESSING_FEE_LOGIN_NOTE.indexOf('login fee') !== -1 &&
      compare.PROCESSING_FEE_LOGIN_NOTE.indexOf('mandatory') !== -1 &&
      compare.PROCESSING_FEE_LOGIN_NOTE.indexOf('already inside this number') !==
        -1 &&
      compare.PROCESSING_FEE_LOGIN_NOTE.indexOf("don't list it separately") ===
        -1,
    'processing fee note explains login fee without inventing amounts'
  );
  ok(
    compare.GROUPS.charges[0].key === 'processingFee' &&
      compare.GROUPS.charges[0].footnote === compare.PROCESSING_FEE_MARKER &&
      compare.GROUPS.charges[1].key === 'propertyCheckCharges' &&
      compare.GROUPS.charges[1].label === 'Property check charges' &&
      compare.GROUPS.charges[1].footnote === compare.PROPERTY_CHECK_MARKER &&
      compare.GROUPS.charges[2].key === 'governmentCharges' &&
      compare.GROUPS.charges[2].footnote === compare.GOVERNMENT_CHARGES_MARKER,
    'charges columns are processing, property checks, then government'
  );
  function footnoteMarksForGroup(columns) {
    return columns
      .map(function (column) {
        return column.footnote;
      })
      .filter(function (mark) {
        return typeof mark === 'string' && mark;
      });
  }
  ok(
    (function () {
      var marks = footnoteMarksForGroup(compare.GROUPS.charges);
      return marks.length === 3 && new Set(marks).size === marks.length;
    })() &&
      (function () {
        var marks = footnoteMarksForGroup(compare.GROUPS.laterCharges);
        return marks.length === 3 && new Set(marks).size === marks.length;
      })(),
    'each column note on a tab uses a distinct index mark'
  );
  ok(
    compare.columnFootnoteMarker('charges', 'processingFee') === '*' &&
      compare.columnFootnoteMarker('charges', 'propertyCheckCharges') === '†' &&
      compare.columnFootnoteMarker('charges', 'governmentCharges') === '^' &&
      compare.PROCESSING_FEE_LOGIN_NOTE.indexOf(compare.PROCESSING_FEE_MARKER + ' ') ===
        0 &&
      compare.PROPERTY_CHECK_NOTE.indexOf(compare.PROPERTY_CHECK_MARKER + ' ') ===
        0 &&
      compare.chargesNoteGroupHtml('Processing fees', [
        compare.PROCESSING_FEE_LOGIN_NOTE
      ]).indexOf('(*)') !== -1 &&
      compare.chargesNoteGroupHtml('Property check charges', [
        compare.PROPERTY_CHECK_NOTE
      ]).indexOf('(†)') !== -1,
    'charges headers and notes share one unique mark per note'
  );
  ok(
    compare.PROPERTY_CHECK_NOTE.indexOf('GST extra') !== -1 &&
      compare.PROPERTY_CHECK_NOTE.indexOf('Typical industry amounts') !== -1 &&
      compare.chargesNoteGroupId('Property check charges') ===
        'hlc-charge-note-property-check-charges',
    'property check note explains GST and typical amounts'
  );
  ok(
    compare.RBI_FLOATING_PREPAY_HREF ===
      'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=13140&Mode=0',
    'floating prepayment note uses the Guide RBI notification URL'
  );
  ok(
    compare.floatingPrepayNoteHtml().indexOf('guide-section-link') !== -1 &&
      compare.floatingPrepayNoteHtml().indexOf('Id=13140') !== -1 &&
      compare.floatingPrepayNoteHtml().indexOf('target="_blank"') !== -1 &&
      compare
        .floatingPrepayNoteHtml()
        .indexOf('RBI directions') !== -1,
    'floating prepayment note links RBI directions to the RBI page'
  );
  ok(
    compare.footnoteRefHtml('*', 'hlc-charge-note-processing-fees').indexOf(
      'hlc-col-footnote'
    ) !== -1 &&
      compare.footnoteRefHtml('*', 'hlc-charge-note-processing-fees').indexOf(
        'data-note-target="hlc-charge-note-processing-fees"'
      ) !== -1 &&
      compare.footnoteRefHtml('*', 'hlc-charge-note-processing-fees').indexOf(
        'type="button"'
      ) !== -1 &&
      compare.footnoteRefHtml('*', 'hlc-charge-note-emi-bounce-charge', {
        plain: true
      }).indexOf('data-note-target="hlc-charge-note-emi-bounce-charge"') !== -1 &&
      compare.footnoteRefHtml('*', 'hlc-charge-note-emi-bounce-charge', {
        plain: true
      }).indexOf('<button') === -1 &&
      compare.footnoteRefHtml('', 'hlc-charge-note-x') === '' &&
      compare.chargesNoteGroupId('Processing fees') ===
        'hlc-charge-note-processing-fees',
    'footnote marks link to the matching notes group'
  );
  ok(
    compare.chargesNoteGroupHtml('Rate change charge', ['° Note one', '° Note two'])
      .indexOf('hlc-charges-note-group') !== -1 &&
      compare.chargesNoteGroupHtml('Rate change charge', ['° Note one', '° Note two'])
        .indexOf('hlc-charges-note-toggle') !== -1 &&
      compare.chargesNoteGroupHtml('Rate change charge', ['° Note one', '° Note two'])
        .indexOf('Rate change charge') !== -1 &&
      compare.chargesNoteGroupHtml('Rate change charge', ['° Note one', '° Note two'])
        .indexOf('hlc-charges-note-chevron') !== -1 &&
      compare.chargesNoteGroupHtml('Rate change charge', []) === '' &&
      compare.chargesNoteGroupHtml('Overdue charge', ['‡ Note']).indexOf(
        'Overdue charge'
      ) !== -1 &&
      compare.chargesNoteGroupHtml('Rate change charge', [
        '° Note one',
        '¤ Bank note',
        '° Dup'
      ]).indexOf('(° ¤)') !== -1 &&
      compare
        .footnoteMarkersFromNoteParts(['° A', '‡ B', '° C', 'plain'])
        .join('') === '°‡' &&
      compare.chargesNoteToolbarHtml().indexOf('Notes') !== -1 &&
      compare.chargesNoteToolbarHtml().indexOf('Expand all') !== -1 &&
      compare.chargesNoteToolbarHtml().indexOf('Collapse all') === -1 &&
      compare.chargesNoteToolbarHtml().split('hlc-charges-note-toggle-all')
        .length === 2,
    'charges footnotes group under the matching column charge name'
  );
  ok(
    compare.drawerDiscloseHtml('Scheme', '<div>body</div>', { open: true }).indexOf(
      'hlc-drawer-group'
    ) !== -1 &&
      compare.drawerDiscloseHtml('Scheme', '<div>body</div>', { open: true }).indexOf(
        'hlc-drawer-chevron'
      ) !== -1 &&
      compare.drawerDiscloseHtml('Scheme', '<div>body</div>', { open: true }).indexOf(
        ' open'
      ) !== -1 &&
      compare.drawerDiscloseHtml('Eligibility', '<div>body</div>').indexOf(
        ' open'
      ) === -1 &&
      typeof compare.drawerToolbarHtml === 'undefined',
    'side panel sections use disclose chevrons without Expand/Collapse all'
  );
  ok(
    (function () {
      const html = compare.calcDrawerBodyHtml('<div class="hlc-calc-panel">walk</div>', {
        detailsHtml: '<div class="hlc-calc-details">slabs</div>',
        noteLines: ['First bank note', 'Second bank note'],
        footHtml: '<p class="hlc-drawer-foot">guide</p>'
      });
      const closedCount = (html.match(/<details class="hlc-drawer-group">/g) || [])
        .length;
      return (
        html.indexOf('hlc-calc-always') !== -1 &&
        html.indexOf('How this is worked out') === -1 &&
        html.indexOf('Calculation of the charges') === -1 &&
        html.indexOf('Charges breakup') !== -1 &&
        html.indexOf('Notes') !== -1 &&
        closedCount === 2 &&
        html.indexOf('hlc-drawer-chevron') !== -1 &&
        html.indexOf('guide') !== -1 &&
        html.indexOf('guide') > html.lastIndexOf('hlc-drawer-group')
      );
    })(),
    'calc drawers show walk always open; Charges breakup + Notes stay closed discloses; foot outside'
  );
  ok(
    (function () {
      const html = compare.calcDrawerBodyHtml('<div class="hlc-calc-panel">walk</div>', {
        noteLines: ['Allowed only if CIBIL is above 700.']
      });
      return (
        html.indexOf('hlc-calc-always') !== -1 &&
        html.indexOf('<details class="hlc-drawer-group">') === -1 &&
        html.indexOf('>Notes<') === -1 &&
        html.indexOf('Allowed only if CIBIL is above 700.') !== -1 &&
        html.indexOf('hlc-calc-notes') !== -1
      );
    })(),
    'a single calc note sits in the drawer, not in a Notes dropdown'
  );
  ok(
    compare.formatPrepaymentChargeDisplay(null).main === CHARGE_NOT_PUBLISHED_BY_BANK,
    'missing prepayment charge displays as not published by bank'
  );
  ok(
    compare.chargeDisplayIsUnpublished(compare.formatPrepaymentChargeDisplay(null)),
    'missing prepayment is unpublished'
  );
  ok(
    compare.chargeDisplayIsUnpublished(compare.formatRateChangeChargeDisplay(null)),
    'missing rate change is unpublished'
  );
  ok(
    !compare.chargeDisplayIsUnpublished({ main: 'Nil (₹0)', details: [] }),
    'Nil is published as zero, not unpublished'
  );
  ok(
    !compare.columnOpensCalculation(
      { key: 'prepaymentChargeDisplay', type: 'charge' },
      compare.chargeNotPublishedDisplay()
    ),
    'unpublished charge does not open a calculation drawer'
  );
  ok(
    compare.columnOpensCalculation(
      { key: 'prepaymentChargeDisplay', type: 'charge' },
      { main: '2.00%', details: [] }
    ),
    'published prepayment still opens a calculation drawer'
  );
  ok(
    compare.columnOpensCalculation({ key: 'loanAmount', type: 'inr' }, 0),
    'loan amount still opens a calculation drawer'
  );
  ok(
    compare.formatPrepaymentChargeDisplay({
      fixed_amount: 0,
      note_1: 'Prepayment not charged (prepayment_applicable=No)'
    }).main === 'Nil (₹0)',
    'encoded no-charge prepayment displays as Nil (₹0)'
  );
  ok(
    compare.formatPrepaymentChargeDisplay({
      fixed_amount: 0,
      note_1: 'Prepayment nil (CSV NIL)'
    }).main === 'Nil (₹0)',
    'CSV NIL prepayment displays as Nil (₹0)'
  );
  ok(
    compare.formatPrepaymentChargeDisplay({
      percentage: 0.02,
      percentage_base_value: 'Prepaid_Amount',
      has_slab_wise_charges: 'No'
    }).main === '2.00%',
    'simple prepayment percentage uses shared percent formatting'
  );
  ok(
    compare.formatPrepaymentChargeDisplay({
      percentage: 0.005,
      percentage_base_value: 'Amount_Being_Paid',
      has_slab_wise_charges: 'No'
    }).main === '0.50%',
    'half-percent prepayment percentage uses shared percent formatting'
  );
  ok(
    compare.formatPrepaymentChargeDetail({
      percentage: 0.02,
      percentage_base_value: 'Prepaid_Amount',
      has_slab_wise_charges: 'No'
    }).indexOf('On amount prepaid') >= 0,
    'prepayment detail keeps prepaid amount basis'
  );
  ok(
    compare.formatChargeBasis('Amount_Being_Paid') === 'On amount being paid',
    'prepayment basis labels amount being paid'
  );
  ok(
    compare.formatChargeBasis('Sanctioned_Limit') === 'On sanctioned limit',
    'prepayment basis labels sanctioned limit'
  );
  ok(
    compare.formatChargeBasis('Highest_Outstanding_90_Days') ===
      'On highest outstanding in 90 days',
    'prepayment basis labels highest outstanding in 90 days'
  );
  ok(
    compare.formatChargeBasis('Outstanding_Amount') === 'On outstanding amount',
    'prepayment basis labels outstanding amount'
  );
  ok(
    compare.formatChargeBasis(
      'Outstanding_Loan_Amount_And_Undisbursed_Amount'
    ) === 'On outstanding + undisbursed amount',
    'basis uses + instead of plus'
  );
  ok(
    compare.formatPrepaymentChargeDisplay({
      percentage: 0.02,
      has_slab_wise_charges: 'Yes',
      slab_from: 0,
      slab_to: 10000000
    }).main === '2.00%',
    'slab prepayment with percentage shows the rate'
  );
  ok(
    compare
      .formatPrepaymentChargeDetail({
        percentage: 0.01,
        percentage_base_value: 'Outstanding_Amount',
        percentage_applies_per: 'residual_year_to_original_maturity',
        has_slab_wise_charges: 'No'
      })
      .indexOf('per residual year to original maturity') >= 0,
    'Kotak-style residual-year detail is formatted'
  );
  ok(
    compare
      .formatPrepaymentChargeDetail({
        percentage: 0.02,
        percentage_base_value: 'Amount_Being_Paid',
        months_from_event_min: 0,
        months_from_event_max: 6,
        months_from_event_basis: 'final_disbursement',
        has_slab_wise_charges: 'No'
      })
      .indexOf('within 6 months of final disbursement') >= 0,
    'IDBI-style months-from-event detail is formatted'
  );
  var syntheticPrepayRows = [
    {
      id: 'listed',
      bankName: 'A',
      prepayOwnFundsCharge: { percentage: 0.02, has_slab_wise_charges: 'No' },
      prepayTakeoverCharge: null
    },
    {
      id: 'half',
      bankName: 'B',
      prepayOwnFundsCharge: { percentage: 0.005, has_slab_wise_charges: 'No' },
      prepayTakeoverCharge: null
    },
    {
      id: 'free',
      bankName: 'C',
      prepayOwnFundsCharge: {
        fixed_amount: 0,
        note_1: 'Prepayment not charged (prepayment_applicable=No)'
      },
      prepayTakeoverCharge: null
    },
    {
      id: 'missing',
      bankName: 'D',
      prepayOwnFundsCharge: null,
      prepayTakeoverCharge: { percentage: 0.02, has_slab_wise_charges: 'No' }
    }
  ];
  compare.applyPrepaymentMethodToRows(
    syntheticPrepayRows,
    compare.PREPAYMENT_METHOD_OWN
  );
  var sortedPrepay = compare.sortRows(
    syntheticPrepayRows,
    'prepaymentChargeDisplay',
    'asc'
  );
  ok(
    sortedPrepay
      .map(function (row) {
        return row.id;
      })
      .join(',') === 'free,half,listed,missing',
    'prepayment sort places Nil (₹0) first and not published by bank last'
  );
  compare.applyPrepaymentMethodToRows(
    syntheticPrepayRows,
    compare.PREPAYMENT_METHOD_BT
  );
  ok(
    syntheticPrepayRows[0].prepaymentChargeDisplay.main === CHARGE_NOT_PUBLISHED_BY_BANK &&
      syntheticPrepayRows[3].prepaymentChargeDisplay.main === '2.00%',
    'prepayment method switch remaps display without rematching'
  );

  var syntheticRateRows = [
    {
      id: 'type',
      bankName: 'A',
      rateChangeTypeSwitchCharge: { percentage: 0.005 },
      rateChangeRepricingCharge: { percentage: 0.01 },
      rateChangeBenchmarkCharge: { fixed_amount: 5000 },
      rateChangeTypeSwitchCandidates: [{ percentage: 0.005, charge_name: 'Interest Rate Type Switch Fees', charge_group_id: 'g1', has_slab_wise_charges: 'No' }],
      rateChangeRepricingCandidates: [{ percentage: 0.01, charge_name: 'Interest Rate Repricing Fees', charge_group_id: 'g2', has_slab_wise_charges: 'No' }],
      rateChangeBenchmarkCandidates: [{ fixed_amount: 5000, charge_name: 'Interest Rate Benchmark Switch Fees', charge_group_id: 'g3', has_slab_wise_charges: 'No' }]
    },
    {
      id: 'slabs',
      bankName: 'B',
      loanAmount: 6000000,
      emi: 40000,
      tenureMonths: 240,
      rateChangeTypeSwitchCharge: {
        fixed_amount: 1000,
        charge_name: 'Interest Rate Type Switch Fees',
        charge_group_id: 'g4',
        has_slab_wise_charges: 'Yes',
        slab_from: 0
      },
      rateChangeRepricingCharge: null,
      rateChangeBenchmarkCharge: null,
      rateChangeTypeSwitchCandidates: [
        {
          fixed_amount: 1000,
          charge_name: 'Interest Rate Type Switch Fees',
          charge_group_id: 'g4',
          has_slab_wise_charges: 'Yes',
          slab_from: 0,
          slab_to: 5000000
        },
        {
          fixed_amount: 2000,
          charge_name: 'Interest Rate Type Switch Fees',
          charge_group_id: 'g4',
          has_slab_wise_charges: 'Yes',
          slab_from: 5000001,
          slab_to: 10000000
        }
      ],
      rateChangeRepricingCandidates: [],
      rateChangeBenchmarkCandidates: []
    }
  ];
  compare.applyRateChangeMethodToRows(
    syntheticRateRows,
    compare.RATE_CHANGE_METHOD_TYPE
  );
  ok(
    syntheticRateRows[0].rateChangeChargeDisplay.main === '0.50%',
    'rate change defaults to type switch display'
  );
  ok(
    syntheticRateRows[1].rateChangeChargeDisplay.main === '₹2,000' &&
      syntheticRateRows[1].rateChangeChargeDisplay.details.join(' ').indexOf(
        '₹50,00,001'
      ) >= 0,
    'multi-slab rate change uses the loan-amount band that matches this loan'
  );
  compare.applyRateChangeMethodToRows(
    syntheticRateRows,
    compare.RATE_CHANGE_METHOD_REPRICE
  );
  ok(
    syntheticRateRows[0].rateChangeChargeDisplay.main === '1.00%',
    'rate change method switch remaps to repricing'
  );
  compare.applyRateChangeMethodToRows(
    syntheticRateRows,
    compare.RATE_CHANGE_METHOD_BENCHMARK
  );
  ok(
    syntheticRateRows[0].rateChangeChargeDisplay.main === '₹5,000',
    'rate change method switch remaps to benchmark'
  );
  ok(
    compare.rankRateChangeBenchmark({
      charge_name: 'Interest Rate Benchmark Switch Fees',
      percentage: 0.001,
      note_1: 'Applies when conversion is to less than card rate.'
    }) >
      compare.rankRateChangeBenchmark({
        charge_name: 'Interest Rate Benchmark Switch Fees',
        fixed_amount: 0,
        note_1: 'Nil if conversion to card rate.'
      }),
    'benchmark ranker prefers priced atom over conditional nil'
  );
  ok(
    compare
      .buildRateChangeExceptionNotes(
        [
          {
            bankName: 'HDFC Bank',
            rateChangeTypeSwitchCharge: {
              charge_frequency_other: 'Once'
            }
          },
          {
            bankName: 'Yes Bank',
            rateChangeTypeSwitchCharge: {
              note_1: 'Only if permitted by the bank at the time of request'
            }
          }
        ],
        compare.RATE_CHANGE_METHOD_TYPE,
        false
      )
      .join(' ')
      .indexOf(
        compare.RATE_CHANGE_BANK_MARKERS['hdfc bank'] +
          ' This type switch fee applies only once.'
      ) >= 0,
    'rate change bank notes use a bank-specific marker without repeating the bank name'
  );
  ok(
    compare.RATE_CHANGE_BANK_MARKERS['hdfc bank'] !==
      compare.RATE_CHANGE_COMMON_MARKER &&
      compare.RATE_CHANGE_BANK_MARKERS['yes bank'] !==
        compare.RATE_CHANGE_BANK_MARKERS['hdfc bank'],
    'each bank exception marker is distinct from the common ° mark'
  );
  var markedRateRows = [
    {
      id: 'hdfc',
      bankName: 'HDFC Bank',
      offer: { rate_type: 'Floating' },
      rateChangeTypeSwitchCharge: { percentage: 0.005, charge_frequency_other: 'Once' },
      rateChangeRepricingCharge: null,
      rateChangeBenchmarkCharge: null,
      rateChangeTypeSwitchCandidates: [],
      rateChangeRepricingCandidates: [],
      rateChangeBenchmarkCandidates: []
    }
  ];
  compare.applyRateChangeMethodToRows(
    markedRateRows,
    compare.RATE_CHANGE_METHOD_TYPE
  );
  ok(
    !markedRateRows[0].rateChangeChargeDisplay.marker &&
      markedRateRows[0].rateChangeDrawerNotes.indexOf(
        'This type switch fee applies only once.'
      ) >= 0,
    'HDFC rate-change bank note lives in that bank’s drawer, not as a cell mark'
  );
  ok(
    compare
      .chargeDrawerNoteLines(markedRateRows[0], 'rateChangeChargeDisplay')
      .indexOf('This type switch fee applies only once.') >= 0,
    'HDFC type-switch note is listed for that drawer only'
  );
  ok(
    compare
      .buildRateChangeExceptionNotes(
        [
          {
            bankName: 'Axis Bank',
            rateChangeRepricingCharge: {
              note_1:
                'Lower Rate will be equal to the applicable carded interest rate only.'
            },
            rateChangeRepricingCandidates: []
          },
          {
            bankName: 'Bank of Baroda',
            rateChangeTypeSwitchCharge: {
              note_1:
                'Conversion charges will be applied after clubbing balance in all the linked account.'
            },
            rateChangeTypeSwitchCandidates: []
          },
          {
            bankName: 'Dhanlaxmi Bank',
            rateChangeRepricingCharge: {
              note_1: 'Not applicable for new loans and roll over cases.'
            },
            rateChangeRepricingCandidates: []
          },
          {
            bankName: 'Kotak Mahindra Bank',
            rateChangeTypeSwitchCharge: {
              charge_frequency_other:
                'Each time (multiple switches allowed during tenure)'
            },
            rateChangeTypeSwitchCandidates: []
          },
          {
            bankName: 'Indian Overseas Bank',
            rateChangeTypeSwitchCharge: {
              charge_frequency_other: 'At the time of exercising the option'
            },
            rateChangeTypeSwitchCandidates: []
          }
        ],
        compare.RATE_CHANGE_METHOD_TYPE,
        false
      )
      .join(' ')
      .indexOf('Multiple switches are allowed during the loan.') >= 0 &&
      compare
        .buildRateChangeExceptionNotes(
          [
            {
              bankName: 'Indian Overseas Bank',
              rateChangeTypeSwitchCharge: {
                charge_frequency_other: 'At the time of exercising the option'
              },
              rateChangeTypeSwitchCandidates: []
            }
          ],
          compare.RATE_CHANGE_METHOD_TYPE,
          false
        )
        .join(' ')
        .indexOf('Charged when you exercise the option.') >= 0,
    'exceptional type-switch frequency rules become bank notes'
  );
  ok(
    compare
      .buildRateChangeExceptionNotes(
        [
          {
            bankName: 'Axis Bank',
            rateChangeRepricingCharge: {
              note_1:
                'Lower Rate will be equal to the applicable carded interest rate only.'
            },
            rateChangeRepricingCandidates: []
          },
          {
            bankName: 'Dhanlaxmi Bank',
            rateChangeRepricingCharge: {
              note_1: 'Not applicable for new loans and roll over cases.'
            },
            rateChangeRepricingCandidates: []
          }
        ],
        compare.RATE_CHANGE_METHOD_REPRICE,
        false
      )
      .join(' ')
      .indexOf('Lower rate means the bank’s card rate only.') >= 0 &&
      compare
        .buildRateChangeExceptionNotes(
          [
            {
              bankName: 'Dhanlaxmi Bank',
              rateChangeRepricingCharge: {
                note_1: 'Not applicable for new loans and roll over cases.'
              },
              rateChangeRepricingCandidates: []
            }
          ],
          compare.RATE_CHANGE_METHOD_REPRICE,
          false
        )
        .join(' ')
        .indexOf('Not for new loans or rollover cases.') >= 0,
    'repricing bank notes rewrite card-rate and new-loan limits'
  );
  ok(
    compare
      .buildRateChangeExceptionNotes(
        [
          {
            bankName: 'Bank of Baroda',
            rateChangeTypeSwitchCharge: {
              note_1:
                'Conversion charges will be applied after clubbing balance in all the linked account.'
            },
            rateChangeTypeSwitchCandidates: []
          }
        ],
        compare.RATE_CHANGE_METHOD_TYPE,
        false
      )
      .join(' ')
      .indexOf(
        'Fee is calculated after balances in linked accounts are clubbed.'
      ) >= 0,
    'Baroda type-switch note explains linked-account clubbing'
  );
  ok(
    compare
      .buildRateChangeExceptionNotes(
        [
          {
            bankName: 'Axis Bank',
            rateChangeRepricingCharge: {
              note_1:
                'Lower Rate will be equal to the applicable carded interest rate only.'
            },
            rateChangeRepricingCandidates: []
          }
        ],
        compare.RATE_CHANGE_METHOD_TYPE,
        false
      )
      .join(' ')
      .indexOf('card rate') === -1 &&
      compare
        .buildRateChangeExceptionNotes(
          [
            {
              bankName: 'Kotak Mahindra Bank',
              rateChangeBenchmarkCharge: {
                benchmark_switch_from: 'MCLR',
                benchmark_switch_to: 'EBR'
              },
              rateChangeBenchmarkCandidates: []
            }
          ],
          compare.RATE_CHANGE_METHOD_REPRICE,
          false
        )
        .join(' ')
        .indexOf('From MCLR') === -1,
    'rate change bank notes stay off when the selected method does not use them'
  );
  ok(
    compare
      .buildRateChangeExceptionNotes(
        [
          {
            bankName: 'Kotak Mahindra Bank',
            rateChangeBenchmarkCharge: {
              benchmark_switch_from: 'MCLR',
              benchmark_switch_to: 'External Benchmark Rate (Repo Rate)'
            },
            rateChangeBenchmarkCandidates: []
          },
          {
            bankName: 'IDBI Bank',
            rateChangeBenchmarkCharge: {
              customer_type: 'Individual',
              fixed_amount: 5000,
              benchmark_switch_from: 'Base Rate / MCLR / BPLR',
              benchmark_switch_to: 'RLLR'
            },
            rateChangeBenchmarkCandidates: [
              { customer_type: 'Individual', fixed_amount: 5000 },
              { customer_type: 'Non-Individual', percentage: 0.0025 }
            ]
          }
        ],
        compare.RATE_CHANGE_METHOD_BENCHMARK,
        false
      )
      .join(' ')
      .indexOf('From a rate the bank sets to the RBI repo rate.') >= 0 &&
      compare
        .buildRateChangeExceptionNotes(
          [
            {
              bankName: 'IDBI Bank',
              rateChangeBenchmarkCharge: {
                customer_type: 'Individual',
                fixed_amount: 5000,
                benchmark_switch_from: 'Base Rate / MCLR / BPLR',
                benchmark_switch_to: 'RLLR'
              },
              rateChangeBenchmarkCandidates: [
                { customer_type: 'Individual', fixed_amount: 5000 },
                { customer_type: 'Non-Individual', percentage: 0.0025 }
              ]
            }
          ],
          compare.RATE_CHANGE_METHOD_BENCHMARK,
          false
        )
        .join(' ')
        .indexOf(
          'Listed fee is for individuals; non-individual pricing differs.'
        ) >= 0,
    'benchmark notes include short from/to and IDBI customer-type limit'
  );
  ok(
    rows.every(function (row) {
      return row.overdueChargeDisplay.main !== CHARGE_NOT_PUBLISHED_BY_BANK;
    }),
    'compare lists an overdue rule for every matched bank'
  );
  ok(
    axisRow.overdueChargeDisplay.details.indexOf('On overdue amount') < 0,
    'compare moves the shared overdue basis out of individual cells'
  );
  var dcbRow = rows.find(function (row) {
    return row.bankName === 'DCB Bank';
  });
  ok(
    dcbRow &&
      dcbRow.overdueChargeDisplay.main ===
        compare.formatInr(
          Number(
            compare.matchChargeSlab(dcbRow.overdueChargeSlabs, dcbRow.emi)
              .fixed_amount
          )
        ) &&
      dcbRow.overdueChargeDisplay.details[0],
    'DCB Bank overdue cell uses the slab that matches this EMI'
  );
  ok(
    dcbRow &&
      dcbRow.overdueChargeSlabs.length === 76 &&
      dcbRow.overdueChargeSlabs[0].fixed_amount === 150 &&
      dcbRow.overdueChargeSlabs[75].fixed_amount === 17520100,
    'DCB Bank keeps every overdue slab available for the details panel'
  );
  var centralBankOverdueRow = rows.find(function (row) {
    return row.bankName === 'Central Bank of India';
  });
  ok(
    centralBankOverdueRow &&
      /2(\.00)?%\s*p\.a\./i.test(
        centralBankOverdueRow.overdueChargeDisplay.main
      ) &&
      centralBankOverdueRow.overdueChargeDisplay.details.join(' ').indexOf(
        '₹30,001'
      ) >= 0,
    'Central Bank of India uses the overdue slab that matches this EMI, not the up-to-₹30,000 band'
  );
  var centralBankOverdueDetails = compare.chargeCalculationDetailsHtml(
    centralBankOverdueRow,
    'overdueChargeDisplay'
  );
  ok(
    centralBankOverdueRow &&
      !centralBankOverdueRow.overdueDetailFootnote &&
      /0%/.test(centralBankOverdueDetails) &&
      /2(\.00)?%\s*p\.a\./i.test(centralBankOverdueDetails) &&
      centralBankOverdueDetails.indexOf('₹30,001') >= 0,
    'Central Bank of India keeps both overdue bands in All amounts, not a first-slab footnote'
  );
  var idfcOverdueRow = rows.find(function (row) {
    return row.bankName === 'IDFC FIRST Bank';
  });
  ok(
    idfcOverdueRow &&
      idfcOverdueRow.overdueChargeDisplay.main === '12.00% p.a.' &&
      idfcOverdueRow.overdueChargeDisplay.details.indexOf(
        'or ₹300, whichever is higher'
      ) >= 0 &&
      idfcOverdueRow.overdueChargeDisplay.details.indexOf(
        'No charge up to 7 days late'
      ) >= 0,
    'IDFC FIRST Bank shows its percentage and 7-day grace period'
  );
  var indusindOverdueRow = rows.find(function (row) {
    return row.bankName === 'IndusInd Bank';
  });
  ok(
    indusindOverdueRow &&
      indusindOverdueRow.overdueChargeDisplay.main === '24.00% p.a.' &&
      indusindOverdueRow.overdueChargeDisplay.details.indexOf(
        'or ₹100, whichever is higher'
      ) >= 0 &&
      indusindOverdueRow.overdueChargeDisplay.details.indexOf(
        'No charge up to 3 days late'
      ) >= 0,
    'IndusInd Bank shows its percentage and 3-day grace period'
  );
  var jammuKashmirOverdueRow = rows.find(function (row) {
    return row.bankName === 'Jammu and Kashmir Bank';
  });
  ok(
    jammuKashmirOverdueRow &&
      jammuKashmirOverdueRow.overdueChargeDisplay.main === '0.20% p.a.' &&
      jammuKashmirOverdueRow.overdueChargeDisplay.details.indexOf(
        'or ₹200, whichever is higher'
      ) >= 0 &&
      jammuKashmirOverdueRow.overdueChargeDisplay.details.indexOf(
        'No charge up to 15 days late'
      ) >= 0,
    'Jammu and Kashmir Bank shows the percentage first and the rest in small type'
  );
  var yesBankOverdueRow = rows.find(function (row) {
    return row.bankName === 'Yes Bank';
  });
  ok(
    yesBankOverdueRow &&
      yesBankOverdueRow.overdueChargeDisplay.main ===
        'At home loan interest rate',
    'Yes Bank shows overdue charge as at home loan interest rate'
  );
  ok(
    rows.filter(function (row) {
      return row.emiBounceChargeDisplay.main !== CHARGE_NOT_PUBLISHED_BY_BANK;
    }).length >= rows.length - 1,
    'compare lists EMI bounce rules where the source data provides them'
  );

  var cappedCharge = compare.formatChargeDisplay({
    percentage: 0.02,
    percentage_per_annum: 'Yes',
    percentage_base_value: 'Default_Amount',
    charge_min: 300,
    charge_max: 100000,
    charge_unit: 'Instance',
    gst_applicable: 'Yes'
  });
  ok(cappedCharge.main === '2.00% p.a.', 'later charge keeps the published percentage');
  ok(
    cappedCharge.details.indexOf('On overdue amount · Per instance') >= 0,
    'later charge shows its calculation basis and unit'
  );
  ok(
    cappedCharge.details.indexOf('Min ₹300 · Max ₹1,00,000') >= 0,
    'later charge shows minimum and maximum below the main value'
  );
  ok(cappedCharge.details.indexOf('GST extra') >= 0, 'later charge shows GST when applicable');

  var percentBand = compare.formatChargeDisplay({
    percentage_min: 0.0025,
    percentage_max: 0.02,
    percentage_base_value: 'Sanctioned loan amount',
    charge_unit: 'Sanction',
    gst_applicable: 'Yes'
  });
  ok(percentBand.main === '0.25% – 2.00%', 'percentage band shows min – max on the main line');
  ok(
    percentBand.main.indexOf('0.25% – 2.00%') === 0,
    'percentage band does not need the old single percentage field'
  );
  ok(
    percentBand.details.indexOf('On sanctioned loan amount · At sanction') >= 0 ||
      percentBand.details.some(function (d) {
        return /sanctioned loan amount/i.test(d);
      }),
    'percentage band keeps the rupee basis in details'
  );
  ok(
    !percentBand.details.some(function (d) {
      return /^Min |^Max |Min ₹|Max ₹/.test(d);
    }),
    'percentage band does not misuse rupee Min/Max for the % ends'
  );

  var uptoPercent = compare.formatChargeDisplay({
    percentage_max: 0.02,
    percentage_base_value: 'Outstanding loan amount',
    gst_applicable: 'Yes'
  });
  ok(uptoPercent.main === 'Up to 2.00%', 'percentage ceiling shows Up to X%');

  var uptoRupee = compare.formatChargeDisplay({
    charge_max: 5000,
    charge_unit: 'Property',
    gst_applicable: 'Yes',
    note_1: 'Up to ₹5,000 per property'
  });
  ok(uptoRupee.main === 'Up to ₹5,000', 'rupee ceiling with no flat fee shows Up to ₹X');
  ok(
    !uptoRupee.details.some(function (d) {
      return /Max ₹5,000/.test(d);
    }),
    'rupee Up to main line does not also repeat Max in details'
  );
  var rupeeBand = compare.formatChargeDisplay({
    charge_min: 45,
    charge_max: 150,
    charge_unit: 'Report',
    gst_applicable: 'Yes'
  });
  ok(rupeeBand.main === '₹45 – ₹150', 'rupee band shows min – max on the main line');
  ok(
    !rupeeBand.details.some(function (d) {
      return /Min ₹45|Max ₹150/.test(d);
    }),
    'rupee band does not also repeat Min/Max in details'
  );
  var panelFee = compare.buildFeeTableEntries('Documentation charges', [
    {
      charge_name: 'Documentation charges',
      fixed_amount: 500,
      charge_unit: 'Instance',
      gst_applicable: 'Yes'
    }
  ]);
  ok(
    panelFee.entries[0].amount === '₹500' &&
      panelFee.entries[0].gstApplicable === true &&
      panelFee.entries[0].chargeHeaderUnit === 'Per instance' &&
      panelFee.entries[0].meta === '' &&
      compare.chargeColumnTitle(true) === 'Charge*',
    'side panel marks GST on the Charge header and puts the unit there too'
  );
  var panelSlabs = compare.buildFeeTableEntries('Property Valuation Report Charges', [
    {
      charge_name: 'Property Valuation Report Charges',
      has_slab_wise_charges: 'Yes',
      charge_group_id: 'g1',
      slab_from: 0,
      slab_to: 1000000,
      fixed_amount: 750,
      gst_applicable: 'Yes'
    },
    {
      charge_name: 'Property Valuation Report Charges',
      has_slab_wise_charges: 'Yes',
      charge_group_id: 'g1',
      slab_from: 1000001,
      slab_to: null,
      fixed_amount: 4400,
      gst_applicable: 'Yes'
    }
  ]);
  ok(
    panelSlabs.entries.length === 1 &&
      panelSlabs.entries[0].kind === 'slab-table' &&
      panelSlabs.entries[0].what === 'Property Valuation Report Charges' &&
      panelSlabs.entries[0].slabRows.length === 2 &&
      panelSlabs.entries[0].slabRows[0].amount === '₹750' &&
      panelSlabs.entries[0].slabRightHeader === 'Charge*' &&
      panelSlabs.entries[0].what.indexOf(' · ') === -1,
    'side panel slab fees use a range/charge table instead of one long line per row'
  );
  var panelArea = compare.buildFeeTableEntries('No Dues Certificate Charge', [
    {
      charge_name: 'No Dues Certificate Charge',
      charge_by_area: 'Metro / Urban',
      customer_type: 'Individual',
      fixed_amount: 100,
      charge_unit: 'Certificate',
      gst_applicable: 'Yes',
      note_1: 'No charges for Government sponsored schemes'
    },
    {
      charge_name: 'No Dues Certificate Charge',
      charge_by_area: 'Metro / Urban',
      customer_type: 'Non-Individual',
      fixed_amount: 150,
      charge_unit: 'Certificate',
      gst_applicable: 'Yes',
      note_1: 'No charges for Government sponsored schemes'
    },
    {
      charge_name: 'No Dues Certificate Charge',
      charge_by_area: 'Rural / Semi-urban',
      customer_type: 'Individual',
      fixed_amount: 25,
      charge_unit: 'Certificate',
      gst_applicable: 'Yes',
      note_1: 'No charges for Government sponsored schemes'
    },
    {
      charge_name: 'No Dues Certificate Charge',
      charge_by_area: 'Rural / Semi-urban',
      customer_type: 'Non-Individual',
      fixed_amount: 75,
      charge_unit: 'Certificate',
      gst_applicable: 'Yes',
      note_1: 'No charges for Government sponsored schemes'
    }
  ]);
  ok(
    panelArea.entries.length === 1 &&
      panelArea.entries[0].kind === 'area-matrix' &&
      panelArea.entries[0].what === 'No Dues Certificate Charge' &&
      panelArea.entries[0].matrixColumns.join('|') ===
        'Metro / Urban|Rural / Semi-urban' &&
      panelArea.entries[0].matrixRows.length === 2 &&
      panelArea.entries[0].matrixRows[0].label === 'Individual' &&
      panelArea.entries[0].matrixRows[0].cells[0].amount === '₹100' &&
      panelArea.entries[0].chargeHeaderUnit === 'Per certificate' &&
      panelArea.entries[0].gstApplicable === true,
    'side panel area fees use one column per area from the sheet'
  );
  var panelAreaSlabs = compare.buildFeeTableEntries('Legal Opinion Fees', [
    {
      charge_name: 'Legal Opinion Fees',
      charge_by_area: 'Metro',
      has_slab_wise_charges: 'Yes',
      charge_group_id: 'g-metro',
      slab_from: null,
      slab_to: 10000000,
      fixed_amount: 3000
    },
    {
      charge_name: 'Legal Opinion Fees',
      charge_by_area: 'Metro',
      has_slab_wise_charges: 'Yes',
      charge_group_id: 'g-metro',
      slab_from: 10000001,
      slab_to: null,
      fixed_amount: 4000
    },
    {
      charge_name: 'Legal Opinion Fees',
      charge_by_area: 'Rural',
      has_slab_wise_charges: 'Yes',
      charge_group_id: 'g-rural',
      slab_from: null,
      slab_to: 10000000,
      fixed_amount: 1000
    },
    {
      charge_name: 'Legal Opinion Fees',
      charge_by_area: 'Rural',
      has_slab_wise_charges: 'Yes',
      charge_group_id: 'g-rural',
      slab_from: 10000001,
      slab_to: null,
      fixed_amount: 1500
    }
  ]);
  ok(
    panelAreaSlabs.entries.length === 1 &&
      panelAreaSlabs.entries[0].kind === 'area-matrix' &&
      panelAreaSlabs.entries[0].matrixColumns.join('|') === 'Metro|Rural' &&
      panelAreaSlabs.entries[0].matrixRows.length === 2 &&
      panelAreaSlabs.entries[0].slabLeftHeader &&
      panelAreaSlabs.entries[0].matrixRows[0].cells[0].amount === '₹3,000' &&
      panelAreaSlabs.entries[0].matrixRows[0].cells[1].amount === '₹1,000',
    'side panel area+slab fees use area column headers with amount bands as rows'
  );
  var schemeAreaOffer = {
    bank_key: 'central bank of india',
    purpose: 'Regular Home Loan',
    occupation: 'Any',
    facility_type: 'Term Loan',
    borrower_category: 'Any',
    rate_type: 'Floating',
    scheme: 'Cent Home loan'
  };
  var schemeAreaSections = compare.listSchemeChargePanelSections(
    [
      {
        charge_name: 'Legal Opinion Fees',
        when_it_matters: 'Before offer',
        bank_key: 'central bank of india',
        purpose: 'Any',
        facility_type: 'Any',
        charge_by_area: 'Metro',
        has_slab_wise_charges: 'Yes',
        charge_group_id: 'g-metro',
        slab_from: null,
        slab_to: 10000000,
        fixed_amount: 3000
      },
      {
        charge_name: 'Legal Opinion Fees',
        when_it_matters: 'Before offer',
        bank_key: 'central bank of india',
        purpose: 'Any',
        facility_type: 'Any',
        charge_by_area: 'Metro',
        has_slab_wise_charges: 'Yes',
        charge_group_id: 'g-metro',
        slab_from: 10000001,
        slab_to: null,
        fixed_amount: 4000
      },
      {
        charge_name: 'Legal Opinion Fees',
        when_it_matters: 'Before offer',
        bank_key: 'central bank of india',
        purpose: 'Any',
        facility_type: 'Any',
        charge_by_area: 'Rural',
        has_slab_wise_charges: 'Yes',
        charge_group_id: 'g-rural',
        slab_from: null,
        slab_to: 10000000,
        fixed_amount: 1000
      },
      {
        charge_name: 'Legal Opinion Fees',
        when_it_matters: 'Before offer',
        bank_key: 'central bank of india',
        purpose: 'Any',
        facility_type: 'Any',
        charge_by_area: 'Rural',
        has_slab_wise_charges: 'Yes',
        charge_group_id: 'g-rural',
        slab_from: 10000001,
        slab_to: null,
        fixed_amount: 1500
      },
      {
        charge_name: 'Legal Audit Fee',
        when_it_matters: 'Before offer',
        bank_key: 'central bank of india',
        purpose: 'Any',
        facility_type: 'Any',
        charge_by_area: 'Category A Cities',
        has_slab_wise_charges: 'No',
        fixed_amount: 3500
      },
      {
        charge_name: 'Legal Audit Fee',
        when_it_matters: 'Before offer',
        bank_key: 'central bank of india',
        purpose: 'Any',
        facility_type: 'Any',
        charge_by_area: 'Category B Cities',
        has_slab_wise_charges: 'No',
        fixed_amount: 3000
      }
    ],
    schemeAreaOffer
  );
  var schemeLegal = schemeAreaSections.find(function (section) {
    return section.label === 'Legal Opinion Fees';
  });
  var schemeAudit = schemeAreaSections.find(function (section) {
    return section.label === 'Legal Audit Fee';
  });
  ok(
    schemeLegal &&
      schemeLegal.entries[0].kind === 'area-matrix' &&
      schemeLegal.entries[0].matrixColumns.join('|') === 'Metro|Rural' &&
      schemeAudit &&
      schemeAudit.entries[0].kind === 'area-matrix' &&
      schemeAudit.entries[0].matrixColumns.join('|') ===
        'Category A Cities|Category B Cities',
    'scheme panel keeps every area row so Metro/category names become column headers'
  );
  var panelCopy = compare.buildFeeTableEntries('Loan Document Copy Charges', [
    {
      charge_name: 'Loan Document Copy Charges',
      fixed_amount: 0,
      charge_unit: 'Request',
      gst_applicable: 'Yes',
      note_1: 'First Time Issue of copies of loan documents.'
    },
    {
      charge_name: 'Loan Document Copy Charges',
      fixed_amount: 10,
      charge_unit: 'leaf (loan document page)',
      charge_min: 100,
      gst_applicable: 'Yes',
      note_1: 'Subsequent Issue, irrespective of amount.'
    }
  ]);
  ok(
    panelCopy.entries.length === 2 &&
      panelCopy.entries.every(function (entry) {
        return entry.what === 'Loan Document Copy Charges';
      }) &&
      panelCopy.entries[0].detail.indexOf('First Time Issue') >= 0 &&
      panelCopy.entries[0].amount === '₹0' &&
      panelCopy.entries[0].meta.indexOf('Per request') >= 0 &&
      panelCopy.entries[0].gstApplicable === true &&
      !panelCopy.entries[0].chargeHeaderUnit &&
      panelCopy.entries[0].what.indexOf('First issue') === -1,
    'side panel keeps the sheet charge name and puts note text in Particulars'
  );
  var panelCustomer = compare.buildFeeTableEntries(
    'No-Dues / Balance Confirmation Certificate Charge',
    [
      {
        charge_name: 'No-Dues / Balance Confirmation Certificate Charge',
        customer_type: 'Individual',
        fixed_amount: 100,
        charge_unit: 'Occasion',
        gst_applicable: 'Yes',
        note_1:
          'Issuance of Any Other Certificate i.e. No Dues, Balance Confirmation.'
      },
      {
        charge_name: 'No-Dues / Balance Confirmation Certificate Charge',
        customer_type: 'Non-Individual',
        fixed_amount: 150,
        charge_unit: 'Occasion',
        gst_applicable: 'Yes',
        note_1:
          'Issuance of Any Other Certificate i.e. No Dues, Balance Confirmation.'
      }
    ]
  );
  ok(
    panelCustomer.entries.length === 2 &&
      panelCustomer.entries[0].customerType === 'Individual' &&
      panelCustomer.entries[1].customerType === 'Non-Individual' &&
      panelCustomer.entries[0].detail === '' &&
      panelCustomer.entries[1].detail === '' &&
      panelCustomer.notes.length === 1 &&
      panelCustomer.notes[0].indexOf('Issuance of Any Other Certificate') >= 0 &&
      panelCustomer.entries[0].amount === '₹100' &&
      panelCustomer.entries[1].amount === '₹150',
    'side panel puts customer type in its own field and shared wording in notes'
  );
  var laterSections = compare.listAdditionalAfterOfferPanelSections(
    require('../data/home-loans-compare.json').bank_charges.filter(function (charge) {
      return charge.bank_name === 'Bank of Maharashtra';
    }),
    compare.queryFromInputs({
      age: 35,
      cibilScore: 780,
      monthlyIncome: 100000,
      occupation: 'Salaried',
      propertyValue: 6250000
    }),
    {
      bank_key: 'bank of maharashtra',
      bank_name: 'Bank of Maharashtra',
      scheme: 'Maha Super Housing Loan',
      purpose: 'Regular Home Loan',
      facility_type: 'Term Loan',
      rate_type: 'Floating',
      occupation: 'Salaried',
      borrower_category: 'Any'
    }
  );
  ok(
    laterSections.length >= 4 &&
      laterSections.every(function (section) {
        return section.label && section.entries.length;
      }) &&
      laterSections.every(function (section) {
        return section.entries.every(function (entry) {
          return !entry.what || entry.what === section.label || entry.kind;
        });
      }) &&
      laterSections.filter(function (section) {
        return section.label === 'Loan Document Copy Charges';
      }).length === 1,
    'side panel lists each charge name in its own block, not mixed in one table'
  );
  var hdfcCharges = require('../data/home-loans-compare.json').bank_charges.filter(
    function (charge) {
      return charge.bank_name === 'HDFC Bank';
    }
  );
  var hdfcOffer = {
    bank_key: 'hdfc bank',
    bank_name: 'HDFC Bank',
    scheme: 'Home Loan',
    purpose: 'Regular Home Loan',
    facility_type: 'Term Loan',
    rate_type: 'Floating',
    occupation: 'Salaried',
    borrower_category: 'Any'
  };
  var hdfcOther = compare.listDrawerOtherChargeSections(hdfcCharges, hdfcOffer);
  var hdfcSwitch = hdfcOther.find(function (section) {
    return section.label === 'Interest Rate Type Switch Fees';
  });
  ok(
    hdfcSwitch &&
      hdfcSwitch.entries.length === 1 &&
      hdfcSwitch.entries.some(function (entry) {
        return String(entry.detail).indexOf('Fixed to Floating') >= 0;
      }) &&
      !hdfcSwitch.entries.some(function (entry) {
        return String(entry.detail).indexOf('Floating to Fixed') >= 0;
      }),
    'drawer Other charges shows published Fixed→Floating only'
  );
  var hdfcLater = compare.listAdditionalAfterOfferPanelSections(
    hdfcCharges,
    compare.queryFromInputs({
      age: 35,
      cibilScore: 780,
      monthlyIncome: 100000,
      occupation: 'Salaried',
      propertyValue: 6250000
    }),
    hdfcOffer
  );
  var hdfcShown = {};
  hdfcLater.concat(hdfcOther).forEach(function (section) {
    var amount =
      section.entries && section.entries[0] && section.entries[0].amount;
    if (amount === CHARGE_NOT_PUBLISHED_BY_BANK) return;
    hdfcShown[section.label] = true;
  });
  var hdfcAfterNames = {};
  hdfcCharges.forEach(function (charge) {
    if (charge.when_it_matters !== 'After offer') return;
    if (String(charge.bank_key || '').toLowerCase() !== 'hdfc bank') return;
    if (
      charge.purpose &&
      charge.purpose !== 'Any' &&
      charge.purpose !== hdfcOffer.purpose
    ) {
      return;
    }
    if (
      charge.facility_type &&
      charge.facility_type !== 'Any' &&
      charge.facility_type !== hdfcOffer.facility_type
    ) {
      return;
    }
    if (charge.scheme && charge.scheme !== hdfcOffer.scheme) return;
    hdfcAfterNames[charge.charge_name] = true;
  });
  ok(
    Object.keys(hdfcAfterNames).every(function (name) {
      return hdfcShown[name];
    }),
    'drawer lists every after-offer charge name for the scheme, not only user-selected matches'
  );
  var hdfcEarly = compare.listSchemeChargePanelSections(hdfcCharges, hdfcOffer);
  var hdfcProcessing = hdfcEarly.find(function (section) {
    return section.label === 'Processing fee';
  });
  ok(
    hdfcProcessing &&
      hdfcProcessing.entries.length >= 1 &&
      hdfcProcessing.entries.every(function (entry) {
        return String(entry.detail || '').indexOf('CIBIL') === -1;
      }) &&
      hdfcProcessing.entries.some(function (entry) {
        return String(entry.amount || '').indexOf('0.50%') >= 0;
      }),
    'drawer processing fee shows published fee without CIBIL bands'
  );
  var hdfcLegal = hdfcEarly.find(function (section) {
    return section.label === 'Legal and technical';
  });
  ok(
    hdfcLegal &&
      hdfcLegal.entries.some(function (entry) {
        return /^₹[0-9,]+$/.test(String(entry.amount || ''));
      }),
    'drawer property checks show the overlay amount for HDFC'
  );
  var compareJson = require('../data/home-loans-compare.json');
  var bandhanCharges = compareJson.bank_charges.filter(function (charge) {
    return charge.bank_name === 'Bandhan Bank';
  });
  var bandhanOffer = {
    bank_key: 'bandhan bank',
    bank_name: 'Bandhan Bank',
    scheme: 'Suraksha Home Loan',
    purpose: 'Regular Home Loan',
    facility_type: 'Term Loan',
    rate_type: 'Floating',
    occupation: 'Any',
    borrower_category: 'Any'
  };
  var bandhanEarly = compare.listSchemeChargePanelSections(
    bandhanCharges,
    bandhanOffer
  );
  ok(
    bandhanEarly.some(function (section) {
      return section.label === 'Legal and technical';
    }) &&
      bandhanEarly.some(function (section) {
        return section.label === 'Title search report';
      }) &&
      bandhanEarly.some(function (section) {
        return section.label === 'Valuation';
      }) &&
      !bandhanEarly.some(function (section) {
        return section.label === 'Property Valuation Report Charges';
      }) &&
      !bandhanEarly.some(function (section) {
        return section.label === 'Title Search Report Fees';
      }),
    'drawer hides published property-check rows when the overlay is present'
  );
  var hdfcPartRules = compare.listPartPrepaymentRulesForOffer(
    compareJson.part_prepayment_rules,
    hdfcOffer
  );
  ok(
    hdfcPartRules.length === 2,
    'HDFC floating offer gets digital and offline part prepayment rules'
  );
  var hdfcDigitalPairs = compare.buildPartPrepaymentRulePairs(
    hdfcPartRules.find(function (rule) {
      return rule.mode === 'digital';
    })
  );
  ok(
    hdfcDigitalPairs.some(function (pair) {
      return pair[0] === 'Minimum part prepayment' && pair[1].indexOf('₹25,000') >= 0;
    }) &&
      hdfcDigitalPairs.some(function (pair) {
        return (
          pair[0] === 'Maximum per financial year' && pair[1].indexOf('25%') >= 0
        );
      }),
    'HDFC digital part prepayment rules show minimum and FY cap'
  );
  var hdfcPartHtml = compare.drawerPartPrepaymentRulesHtml(hdfcPartRules);
  ok(
    hdfcPartHtml.indexOf('Part prepayment rules') >= 0 &&
      hdfcPartHtml.indexOf('hlc-fee-sections') >= 0 &&
      hdfcPartHtml.indexOf('Online / digital') >= 0 &&
      hdfcPartHtml.indexOf('Branch / offline') >= 0 &&
      hdfcPartHtml.indexOf('community reports') === -1,
    'drawer part prepayment section matches other nested dropdowns'
  );
  var iciciOffer = {
    bank_key: 'icici bank',
    bank_name: 'ICICI Bank',
    scheme: 'Home Loan',
    purpose: 'Regular Home Loan',
    facility_type: 'Term Loan',
    rate_type: 'Floating',
    occupation: 'Salaried',
    borrower_category: 'Any'
  };
  var iciciPartRules = compare.listPartPrepaymentRulesForOffer(
    compareJson.part_prepayment_rules,
    iciciOffer
  );
  ok(
    iciciPartRules.length === 3,
    'ICICI floating offer gets all published part prepayment variants'
  );
  var bobOffer = {
    bank_key: 'bank of baroda',
    bank_name: 'Bank of Baroda',
    scheme: 'Home Loan',
    purpose: 'Regular Home Loan',
    facility_type: 'Term Loan',
    rate_type: 'Floating',
    occupation: 'Salaried',
    borrower_category: 'Any'
  };
  ok(
    compare.listPartPrepaymentRulesForOffer(
      compareJson.part_prepayment_rules,
      bobOffer
    ).length === 0 &&
      compare.drawerPartPrepaymentRulesHtml([]) === '',
    'banks without part prepayment rules stay out of the drawer section'
  );
  var freqDetail = compare.buildFeeTableEntries('Administrative Charges', [
    {
      charge_name: 'Administrative Charges',
      fixed_amount: 0,
      charge_unit: 'Sanction',
      charge_frequency_other: 'At sanction/disbursement'
    }
  ]);
  ok(
    freqDetail.entries[0].detail.indexOf('At sanction/disbursement') >= 0,
    'drawer particulars include published charge frequency from the sheet'
  );
  var legalActuals = compare.buildFeeTableEntries('Legal/Miscellaneous Charges', [
    {
      charge_name: 'Legal/Miscellaneous Charges',
      charge_type: 'At actuals',
      actuals_in_addition_to_charge: 'Yes',
      charge_frequency_other: 'As incurred',
      note_1:
        'Miscellaneous charges for legal suit, recovery, professionals (title search, valuation), SARFAESI, ads, auction, security guard, enforcement logistics, notices, and any other unbudgeted costs the bank incurs for the customer.'
    }
  ]);
  ok(
    legalActuals.entries.length === 1 &&
      legalActuals.entries[0].amount === 'At actuals' &&
      legalActuals.entries[0].meta === '+ Actual expenses' &&
      legalActuals.entries[0].detail === 'As incurred' &&
      legalActuals.notes.length === 1 &&
      legalActuals.notes[0].indexOf('SARFAESI') >= 0 &&
      legalActuals.entries[0].detail.indexOf('SARFAESI') === -1,
    'at-actuals legal fee keeps a short line and puts the long bank note underneath'
  );
  var inspectionActuals = compare.buildFeeTableEntries('Property Inspection Charge', [
    {
      charge_name: 'Property Inspection Charge',
      charge_type: 'At actuals',
      out_of_pocket_expenses_additional: 'Yes'
    }
  ]);
  ok(
    inspectionActuals.entries[0].amount === 'At actuals†' &&
      inspectionActuals.entries[0].meta === '' &&
      inspectionActuals.notes.length === 1 &&
      inspectionActuals.notes[0] === '† Out-of-pocket expenses.',
    'property inspection shows At actuals† with out-of-pocket footnote'
  );
  var metaOnly = compare.formatChargeMetaLine({
    fixed_amount: 500,
    charge_unit: 'Instance',
    gst_applicable: 'Yes'
  });
  ok(
    metaOnly.indexOf('GST') === -1 && metaOnly.indexOf('Per instance') >= 0,
    'side panel meta line keeps unit/basis and leaves GST to the shared footnote'
  );
  var compactBounceCharge = compare.formatChargeDisplay(
    {
      fixed_amount: 500,
      charge_unit: 'Return',
      gst_applicable: 'Yes'
    },
    { hideUnit: true, hideGst: true }
  );
  ok(
    compactBounceCharge.details.indexOf('Per return') === -1 &&
      compactBounceCharge.details.indexOf('GST extra') === -1,
    'EMI bounce table moves repeated unit and GST wording to its footnotes'
  );
  var perThousandCharge = compare.formatChargeDisplay({
    fixed_amount: 2,
    fixed_amount_per_1000_rs: 'Yes',
    percentage_base_value: 'Returned amount',
    charge_min: 100,
    charge_max: 400
  });
  ok(
    perThousandCharge.main === '₹2' &&
      perThousandCharge.mainSuffix === 'per ₹1,000',
    'later charge places its per-thousand basis beside the main amount'
  );
  ok(
    perThousandCharge.details.indexOf('Min ₹100 · Max ₹400') >= 0,
    'per-thousand charge keeps its minimum and maximum'
  );
  var southIndianRow = rows.find(function (row) {
    return row.bankName === 'South Indian Bank';
  });
  ok(
    southIndianRow &&
      southIndianRow.emiBounceChargeDisplay.main === '₹2' &&
      southIndianRow.emiBounceChargeDisplay.mainSuffix === 'per ₹1,000',
    'South Indian Bank displays its NACH return basis beside the main amount'
  );
  ok(
    southIndianRow &&
      southIndianRow.emiBounceChargeDisplay.details.indexOf('On returned amount') < 0,
    'South Indian Bank leaves the shared amount basis out of its comparison cell'
  );
  var idfcRow = rows.find(function (row) {
    return row.bankName === 'IDFC FIRST Bank';
  });
  ok(
    idfcRow &&
      idfcRow.emiBounceChargeDisplay.details.indexOf('On bounced EMI') < 0,
    'IDFC FIRST Bank leaves the shared amount basis out of its comparison cell'
  );
  var bankOfBarodaRow = rows.find(function (row) {
    return row.bankName === 'Bank of Baroda';
  });
  ok(
    bankOfBarodaRow &&
      bankOfBarodaRow.emiBounceChargeDisplay.main === '₹125' &&
      !bankOfBarodaRow.emiBounceChargeDisplay.marker &&
      bankOfBarodaRow.emiBounceChargeDisplay.details.indexOf(
        'ECS / cheque return'
      ) >= 0 &&
      /for a bounce amount up to ₹1 lakh/i.test(
        bankOfBarodaRow.emiBounceChargeDisplay.details.join(' ')
      ),
    'Bank of Baroda bounce cell uses the metro slab that matches this EMI'
  );
  ok(
    compare
      .chargeCalculationDetailsHtml(bankOfBarodaRow, 'emiBounceChargeDisplay')
      .indexOf('Rural') >= 0,
    'Bank of Baroda bounce drawer still lists rural bands in All amounts'
  );
  ok(
    bankOfBarodaRow.emiBounceShownNote.indexOf('band') >= 0 &&
      compare
        .chargeDrawerNoteLines(bankOfBarodaRow, 'emiBounceChargeDisplay')
        .join(' ')
        .indexOf('band') >= 0,
    'Bank of Baroda bounce names the band that applies to this EMI'
  );
  var canaraRow = rows.find(function (row) {
    return row.bankName === 'Canara Bank';
  });
  ok(
    canaraRow &&
      canaraRow.emiBounceChargeDisplay.main ===
        compare.formatInr(Number(canaraRow.emiBounceCharge.fixed_amount)) &&
      /for a bounce amount/i.test(
        canaraRow.emiBounceChargeDisplay.details.join(' ')
      ),
    'Canara Bank bounce cell uses the slab that matches this EMI'
  );
  ok(
    canaraRow &&
      canaraRow.emiBounceChargeSlabs.length > 1 &&
      canaraRow.emiBounceChargeSlabs.some(function (charge) {
        return Number(charge.fixed_amount) === 500;
      }) &&
      canaraRow.emiBounceChargeSlabs.some(function (charge) {
        return Number(charge.fixed_amount) === 2000;
      }),
    'Canara Bank bounce schedule keeps every published band for All amounts'
  );
  var bankOfIndiaBounceRow = rows.find(function (row) {
    return row.bankName === 'Bank of India';
  });
  ok(
    bankOfIndiaBounceRow &&
      /sanctioned loan amount/i.test(
        bankOfIndiaBounceRow.emiBounceChargeDisplay.details.join(' ')
      ) &&
      bankOfIndiaBounceRow.emiBounceChargeDisplay.main ===
        compare.formatInr(Number(bankOfIndiaBounceRow.emiBounceCharge.fixed_amount)),
    'EMI bounce uses the sanctioned-loan slab that matches this loan'
  );
  var indusindRow = rows.find(function (row) {
    return row.bankName === 'IndusInd Bank';
  });
  ok(
    indusindRow && indusindRow.emiBounceChargeDisplay.main === '₹750',
    'IndusInd Bank shows published bounce amount'
  );

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

  var deltaCols = [
    { key: 'loanAmount', type: 'inr' },
    { key: 'emi', type: 'inr' },
    { key: 'tenureLabel', type: 'text' }
  ];
  var deltaRowsA = [
    { id: 'bank-a', loanAmount: 5000000, emi: 40000, tenureLabel: '20' },
    { id: 'bank-b', loanAmount: 4800000, emi: 39000, tenureLabel: '20' }
  ];
  var deltaRowsB = [
    { id: 'bank-a', loanAmount: 5000000, emi: 42000, tenureLabel: '15' },
    { id: 'bank-c', loanAmount: 4500000, emi: 38000, tenureLabel: '20' }
  ];
  var snapA = compare.buildCellSnapshot(deltaRowsA, deltaCols);
  var snapB = compare.buildCellSnapshot(deltaRowsB, deltaCols);
  ok(snapA['bank-a'].loanAmount === compare.formatInr(5000000), 'compare snapshot stores display loan');
  ok(
    !compare.cellDidChange(null, 'bank-a', 'emi', snapB['bank-a'].emi),
    'compare delta skips first paint with no prior snapshot'
  );
  ok(
    !compare.cellDidChange(snapA, 'bank-a', 'loanAmount', snapB['bank-a'].loanAmount),
    'compare delta ignores unchanged loan cells'
  );
  ok(
    compare.cellDidChange(snapA, 'bank-a', 'emi', snapB['bank-a'].emi),
    'compare delta flags EMI when it moves'
  );
  ok(
    compare.cellDidChange(snapA, 'bank-a', 'tenureLabel', snapB['bank-a'].tenureLabel),
    'compare delta flags tenure label when it moves'
  );
  ok(
    !compare.cellDidChange(snapA, 'bank-c', 'emi', snapB['bank-c'].emi),
    'compare delta does not flash brand-new rows'
  );
  ok(
    !compare.cellDidChange(snapA, 'bank-a', 'processingFee', 'x'),
    'compare delta needs prior cell for the same column'
  );

  ok(query.rateType === 'Floating', 'compare defaults to floating rate');
  ok(query.facilityType === 'Term Loan', 'compare defaults to term loan');
  ok(
    query.bankType === 'All' &&
      query.bankTypes.indexOf('Public') !== -1 &&
      query.bankTypes.indexOf('Private') !== -1,
    'compare bank type defaults to public and private'
  );

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
  ok(
    fixedQuery.rateTypes.length === 1 && fixedQuery.rateTypes[0] === 'Fixed',
    'compare fixed filter selects only fixed'
  );

  var overdraftQuery = compare.queryFromInputs(
    { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000 },
    { overdraft: true }
  );
  ok(overdraftQuery.facilityType === 'Overdraft', 'compare overdraft filter switches facility type');

  var allBankTypeQuery = compare.queryFromInputs(
    { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000 },
    {}
  );
  ok(allBankTypeQuery.bankType === 'All', 'compare bank type defaults to All when both checked');

  var publicOffer = { rate_type: 'Floating', facility_type: 'Term Loan', bank_type: 'Public', borrower_category: 'Any' };
  var privateOffer = { rate_type: 'Floating', facility_type: 'Term Loan', bank_type: 'Private', borrower_category: 'Any' };
  var publicQuery = compare.queryFromInputs(
    { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000 },
    { bankType: 'Public' }
  );
  ok(compare.matchesProductFilters(publicOffer, publicQuery), 'compare public filter keeps public banks');
  ok(!compare.matchesProductFilters(privateOffer, publicQuery), 'compare public filter drops private banks');
  ok(compare.matchesProductFilters(privateOffer, allBankTypeQuery), 'compare both bank types keeps private banks');

  var bothRateQuery = compare.queryFromInputs(
    { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000 },
    { rateFloating: true, fixedRate: true }
  );
  ok(
    bothRateQuery.rateTypes.indexOf('Floating') !== -1 &&
      bothRateQuery.rateTypes.indexOf('Fixed') !== -1,
    'compare can include both floating and fixed rates'
  );

  var scoredOffer = { cibil_score_status: 'Scored', cibil_band_applicable: 'Yes', cibil_band_score_min: 775, cibil_band_score_max: 799 };
  var noScoreOffer = { cibil_score_status: 'No_Score', cibil_band_applicable: 'Yes', cibil_band_score_min: -1, cibil_band_score_max: 0 };
  var thinFileOffer = { cibil_score_status: 'Thin_File', cibil_band_applicable: 'Yes', cibil_band_score_min: 101, cibil_band_score_max: 150 };
  var notUsedOffer = { cibil_score_status: 'Not_Used', cibil_band_applicable: 'No', cibil_band_score_min: null, cibil_band_score_max: null };
  ok(compare.matchesCibilBand(scoredOffer, 780), 'compare scored band matches entered score');
  ok(!compare.matchesCibilBand(noScoreOffer, 780), 'compare no-score row rejected when score entered');
  ok(!compare.matchesCibilBand(thinFileOffer, 780), 'compare thin-file row rejected for normal score');
  ok(compare.matchesCibilBand(thinFileOffer, 120), 'compare thin-file band matches thin-file score');
  ok(compare.matchesCibilBand(notUsedOffer, 780), 'compare not-used row still matches when score entered');
  ok(compare.matchesCibilBand(noScoreOffer, null), 'compare empty CIBIL matches no-score rows only');
  ok(!compare.matchesCibilBand(thinFileOffer, null), 'compare empty CIBIL does not match thin-file');
  ok(!compare.matchesCibilBand(scoredOffer, null), 'compare empty CIBIL does not match scored');
  ok(compare.matchesCibilBand(notUsedOffer, null), 'compare empty CIBIL still matches not-used');

  var shortTenureOffer = {
    roi_availability: 'Offered',
    purpose: 'Regular Home Loan',
    occupation: 'Any',
    borrower_category: 'Any',
    rate_type: 'Fixed',
    facility_type: 'Term Loan',
    bank_type: 'Public',
    cibil_score_status: 'Scored',
    cibil_band_applicable: 'Yes',
    cibil_band_score_min: 750,
    cibil_band_score_max: 799,
    loan_amount_band_applicable: 'Yes',
    loan_amount_min: 3000001,
    loan_amount_max: 1000000000,
    tenure_band_applicable: 'Yes',
    tenure_months_min: 1,
    tenure_months_max: 120,
    req_repayment_tenure_months_max: 360,
    age_min: 18,
    age_max: 70,
    roi: 0.0825
  };
  var longTenureOffer = Object.assign({}, shortTenureOffer, {
    tenure_months_min: 121,
    tenure_months_max: 360,
    roi: 0.0875
  });
  var fixedQuery = compare.queryFromInputs(
    { age: 35, cibilScore: 780, monthlyIncome: 100000, occupation: 'Salaried', propertyValue: 6250000, tenureYears: 20 },
    { fixedRate: true }
  );
  ok(!compare.prefilterOffer(shortTenureOffer, fixedQuery), 'compare 20-year request rejects up-to-10-year slab');
  ok(compare.prefilterOffer(longTenureOffer, fixedQuery), 'compare 20-year request keeps 11-30-year slab');

  var pnbFixed = await compare.matchOffers(
    dataset,
    fixedQuery,
    compare.createMatchEngine()
  );
  var pnbRow = pnbFixed.find(function (row) { return row.bankName === 'Punjab National Bank'; });
  ok(pnbRow, 'compare PNB fixed-rate row still appears');
  ok(pnbRow.id === 'OFF-26', 'compare PNB fixed-rate uses long-tenure data row for 20-year request');
  ok(Math.round(pnbRow.tenureYears) === 20, 'compare PNB fixed-rate shows 20-year tenure from matched row');
  compare.applyPrepaymentMethodToRows(pnbFixed, compare.PREPAYMENT_METHOD_OWN);
  ok(
    pnbRow.prepaymentChargeDisplay.main === '2.00%',
    'PNB fixed own-funds prepayment shows percentage'
  );
  compare.applyPrepaymentMethodToRows(pnbFixed, compare.PREPAYMENT_METHOD_BT);
  ok(
    pnbRow.prepaymentChargeDisplay.main === '2.00%',
    'PNB fixed balance-transfer prepayment shows percentage'
  );
  ok(
    compare.formatPrepaymentChargeDetail(pnbRow.prepayOwnFundsCharge).indexOf(
      'On amount prepaid'
    ) >= 0,
    'PNB own-funds detail keeps prepaid basis'
  );

  var boiRow = pnbFixed.find(function (row) {
    return row.bankName === 'Bank of India';
  });
  if (boiRow) {
    compare.applyPrepaymentMethodToRows(pnbFixed, compare.PREPAYMENT_METHOD_OWN);
    ok(
      boiRow.prepaymentChargeDisplay.main === 'Nil (₹0)',
      'Bank of India fixed own-funds prepayment is Nil (₹0)'
    );
    compare.applyPrepaymentMethodToRows(pnbFixed, compare.PREPAYMENT_METHOD_BT);
    ok(
      boiRow.prepaymentChargeDisplay.main === '2.00%',
      'Bank of India fixed balance-transfer prepayment shows percentage'
    );
  }

  var bomRow = pnbFixed.find(function (row) {
    return row.bankName === 'Bank of Maharashtra';
  });
  if (bomRow) {
    compare.applyPrepaymentMethodToRows(pnbFixed, compare.PREPAYMENT_METHOD_OWN);
    ok(
      bomRow.prepaymentChargeDisplay.main === 'Nil (₹0)',
      'Bank of Maharashtra fixed own-funds prepayment is Nil (₹0)'
    );
    compare.applyPrepaymentMethodToRows(pnbFixed, compare.PREPAYMENT_METHOD_BT);
    ok(
      bomRow.prepaymentChargeDisplay.main === 'Nil (₹0)',
      'Bank of Maharashtra fixed balance-transfer prepayment is Nil (₹0)'
    );
  }

  ok(compare.propertyFundedPct(2500000) === 90, 'funded share 90% up to ₹30 lakh');
  ok(compare.propertyFundedPct(6000000) === 80, 'funded share 80% up to ₹75 lakh');
  ok(compare.propertyFundedPct(8000000) === 75, 'funded share 75% above ₹75 lakh');

  var emiCheck = compare.emiFromLoan(4800000, 0.0725, 20);
  ok(Math.round(emiCheck) > 0, 'EMI from ₹48 lakh at 7.25% for 20 years is a rupee');

  var amort = compare.amortizationSchedule(4800000, 0.0725, 240);
  ok(
    Math.abs((amort.rows[0].interest + amort.rows[0].principal) - amort.emi) < 1,
    'first month principal plus interest matches EMI'
  );
  ok(
    amort.rows[amort.rows.length - 1].outstanding < 1,
    'last amortization month clears the loan'
  );

  var amortHtml = compare.amortizationTableHtml(amort);
  ok(
    amortHtml.indexOf('Check amortisation schedule') >= 0 &&
      amortHtml.indexOf('hlc-drawer-group') >= 0 &&
      amortHtml.indexOf('hlc-drawer-chevron') >= 0 &&
      amortHtml.indexOf('hlc-drawer-group--nested" open>') === -1 &&
      amortHtml.indexOf('<th>Month</th><th>EMI</th><th>Principal</th><th>Interest</th><th>Balance</th>') >= 0 &&
      amortHtml.indexOf('Year 2') >= 0 &&
      amortHtml.indexOf('Year 20') >= 0 &&
      amortHtml.indexOf('class="hlc-amort-year"') === -1 &&
      (amortHtml.match(/<details class="hlc-drawer-group hlc-drawer-group--nested">/g) || [])
        .length === 20,
    'amortisation schedule starts closed; years reuse drawer dropdowns'
  );
  ok(
    compare
      .amortizationTableHtml(compare.amortizationSchedule(4800000, 0.0725, 12))
      .indexOf('Year 2') === -1,
    'a one-year loan has no later-year dropdowns'
  );

  var overdue2 = compare.overdueExtraForMissedEmi(
    { percentage: 0.02, percentage_per_annum: 'Yes' },
    37938,
    0.0725
  );
  ok(Math.round(overdue2.extra) === 63, '2% a year on ₹37,938 EMI is about ₹63 this month');

  var overdue24 = compare.overdueExtraForMissedEmi(
    { percentage: 0.24, percentage_per_annum: 'Yes' },
    37938,
    0.0725
  );
  ok(Math.round(overdue24.extra) === 759, '24% a year on ₹37,938 EMI is about ₹759 this month');

  var overdueFloor = compare.overdueExtraForMissedEmi(
    {
      percentage: 0.002,
      percentage_per_annum: 'Yes',
      charge_min: 200,
      special_rule: 'overdue_whichever_higher=yes'
    },
    37938,
    0.0725
  );
  ok(Math.round(overdueFloor.extra) === 200, '0.20% a year loses to the ₹200 floor');

  var bounceGst = compare.bounceExtraForMissedEmi(
    { fixed_amount: 750, gst_applicable: 'Yes' },
    37938
  );
  ok(Math.round(bounceGst.extra) === 750, 'bounce base is the published rupee');
  ok(Math.round(bounceGst.gst) === 135, 'bounce GST 18% on ₹750 is ₹135');
  ok(Math.round(bounceGst.total) === 885, 'bounce plus GST');

  var boiBounceSlabs = [
    {
      slab_from: null,
      slab_to: 25000,
      slab_basis: 'Sanctioned loan amount',
      fixed_amount: 0,
      has_slab_wise_charges: 'Yes',
      charge_name: 'EMI bounce',
      charge_group_id: 'g'
    },
    {
      slab_from: 25001,
      slab_to: 1000000,
      slab_basis: 'Sanctioned loan amount',
      fixed_amount: 250,
      has_slab_wise_charges: 'Yes',
      charge_name: 'EMI bounce',
      charge_group_id: 'g'
    },
    {
      slab_from: 1000001,
      slab_to: null,
      slab_basis: 'Sanctioned loan amount',
      fixed_amount: 500,
      has_slab_wise_charges: 'Yes',
      charge_name: 'EMI bounce',
      charge_group_id: 'g'
    }
  ];
  var bigLoanCase = compare.chargeCaseFromParts(40000, 5000000, 240);
  var smallLoanCase = compare.chargeCaseFromParts(40000, 20000, 240);
  ok(
    compare.bounceExtraForMissedEmi(
      compare.resolveApplicableCharge(boiBounceSlabs, boiBounceSlabs[0], bigLoanCase),
      40000
    ).extra === 500,
    'bounce resolve uses the sanctioned-loan slab for this loan, not the first band'
  );
  ok(
    compare.bounceExtraForMissedEmi(
      compare.resolveApplicableCharge(boiBounceSlabs, boiBounceSlabs[0], smallLoanCase),
      40000
    ).extra === 0,
    'bounce resolve uses the up-to-₹25,000 band when that loan is that small'
  );
  var centralOverdueSlabs = [
    {
      percentage: 0,
      has_slab_wise_charges: 'Yes',
      slab_from: 0,
      slab_to: 30000,
      note_1: 'overdue_tenure_months_max=23.0',
      charge_type: 'percentage'
    },
    {
      percentage: 0.02,
      percentage_per_annum: 'Yes',
      has_slab_wise_charges: 'Yes',
      slab_from: 30001,
      slab_to: null,
      charge_type: 'percentage'
    }
  ];
  ok(
    Math.round(
      compare.overdueExtraForMissedEmi(
        compare.resolveApplicableCharge(
          centralOverdueSlabs,
          centralOverdueSlabs[0],
          bigLoanCase
        ),
        40000,
        0.08
      ).extra
    ) === Math.round(40000 * (0.02 / 12)),
    'overdue resolve uses the from-₹30,001 band on this EMI, not the first 0% band'
  );
  ok(
    compare.chargeRowApplies(centralOverdueSlabs[0], bigLoanCase) === false &&
      compare.chargeRowApplies(
        centralOverdueSlabs[0],
        compare.chargeCaseFromParts(20000, 5000000, 12)
      ) === true,
    'tenure-capped overdue notes drop out of a 20-year home loan'
  );

  var rankCheap = {
    id: 'cheap',
    effectiveRoiPct: 8,
    loanAmount: 4000000,
    emi: 30000,
    processingFee: 1000,
    propertyCheckCharges: 4000,
    governmentCharges: 11800,
    prepaymentChargeDisplay: { main: '2%' },
    prepaymentChargeSortValue: 2,
    rateChangeChargeDisplay: { main: '0.50%' },
    rateChangeChargeSortValue: 0.5,
    overdueChargeDisplay: { main: '2%' },
    overdueCharge: { percentage: 0.02, percentage_per_annum: 'Yes' },
    emiBounceChargeDisplay: { main: '₹100' },
    emiBounceCharge: { fixed_amount: 100 },
    roiDecimal: 0.08
  };
  var rankDear = {
    id: 'dear',
    effectiveRoiPct: 10,
    loanAmount: 5000000,
    emi: 40000,
    processingFee: 5000,
    propertyCheckCharges: 4000,
    governmentCharges: 11800,
    prepaymentChargeDisplay: { main: '4%' },
    prepaymentChargeSortValue: 4,
    rateChangeChargeDisplay: { main: '1%' },
    rateChangeChargeSortValue: 1,
    overdueChargeDisplay: { main: '24%' },
    overdueCharge: {
      percentage: 0.24,
      percentage_per_annum: 'Yes',
      has_grace_period: 'Yes',
      grace_period_days: 7
    },
    emiBounceChargeDisplay: { main: '₹750' },
    emiBounceCharge: { fixed_amount: 750, gst_applicable: 'Yes' },
    roiDecimal: 0.1
  };
  var rankTie = Object.assign({}, rankCheap, {
    id: 'tie',
    processingFee: 1000
  });
  var rankHidden = Object.assign({}, rankDear, {
    id: 'hidden',
    overdueChargeDisplay: { main: CHARGE_NOT_PUBLISHED_BY_BANK },
    emiBounceChargeDisplay: { main: CHARGE_NOT_PUBLISHED_BY_BANK },
    overdueCharge: { percentage: 0.9 },
    emiBounceCharge: { fixed_amount: 9000 }
  });
  var ranks = compare.buildCompareRanks([rankCheap, rankDear, rankTie, rankHidden]);
  ok(ranks.cheap.processingFee === 'low', 'lowest processing fee is tagged low');
  ok(ranks.tie.processingFee === 'low', 'tied lowest processing fees both get Lowest');
  ok(ranks.dear.processingFee === 'high', 'highest processing fee is tagged high');
  ok(ranks.cheap.loanAmount === 'low', 'smaller loan is Lowest');
  ok(ranks.dear.loanAmount === 'high', 'larger loan is Highest');
  ok(compare.compareRankTone('processingFee', 'low') === 'helpful', 'cheap fee is helpful green');
  ok(compare.compareRankTone('processingFee', 'high') === 'costly', 'dear fee is costly red');
  ok(compare.compareRankTone('loanAmount', 'high') === 'helpful', 'higher loan is helpful green');
  ok(compare.compareRankTone('loanAmount', 'low') === 'costly', 'lower loan is costly red');
  ok(!ranks.cheap.propertyCheckCharges && !ranks.dear.propertyCheckCharges, 'same property-check rupees get no compare pill');
  ok(!ranks.cheap.governmentCharges && !ranks.dear.governmentCharges, 'same government rupees get no compare pill');
  ok(!ranks.hidden || !ranks.hidden.overdueChargeDisplay, 'unpublished overdue is left out of min/max');
  ok(!ranks.hidden || !ranks.hidden.emiBounceChargeDisplay, 'unpublished bounce is left out of min/max');
  ok(ranks.cheap.overdueChargeDisplay === 'low', 'published overdue still ranks without the unpublished bank');
  var tenth = Object.assign({}, rankDear, { id: 'tenth', processingFee: 50 });
  var ranksAll = compare.buildCompareRanks([
    rankCheap, rankDear, rankTie, rankHidden,
    Object.assign({}, rankDear, { id: 'r5', processingFee: 4000 }),
    Object.assign({}, rankDear, { id: 'r6', processingFee: 4100 }),
    Object.assign({}, rankDear, { id: 'r7', processingFee: 4200 }),
    Object.assign({}, rankDear, { id: 'r8', processingFee: 4300 }),
    Object.assign({}, rankDear, { id: 'r9', processingFee: 4400 }),
    tenth
  ]);
  ok(ranksAll.tenth.processingFee === 'low', 'Lowest uses every matching bank, not only the first visible rows');
  ok(ranksAll.cheap.processingFee !== 'low', 'a visible cheap fee is not Lowest if a later bank is cheaper');
  ok(compare.overdueGraceDays(rankDear) === 7, 'grace days come from that bank overdue charge');
  ok(compare.gracePillLabel(7) === '7-day grace', 'grace pill says 7-day grace');
  ok(compare.gracePillLabel(1) === '1-day grace', 'grace pill says 1-day grace');
  ok(compare.gracePillLabel(15) === '15-day grace', 'grace pill says 15-day grace');
  ok(compare.gracePillLabel(0) === '', 'no grace pill when days are 0');
  var overdueCol = { key: 'overdueChargeDisplay', type: 'charge', label: 'Overdue charge' };
  var feeCol = { key: 'processingFee', type: 'inr', label: 'Processing fee' };
  var gracePills = compare.compareRankPillsHtml(rankDear, overdueCol, ranks);
  ok(gracePills.indexOf('Highest') !== -1, 'overdue extreme uses Highest');
  ok(gracePills.indexOf('7-day grace') !== -1, 'grace pill sits with the overdue figure');
  ok(gracePills.indexOf('hlc-rank-pills') !== -1, 'pills are grouped under the figure');
  ok(gracePills.indexOf('Highest loan') === -1, 'pills do not say Highest loan');
  ok(gracePills.indexOf('here') === -1, 'pills do not say here');
  var unpublishedPills = compare.compareRankPillsHtml(rankHidden, overdueCol, ranksAll);
  ok(unpublishedPills === '', 'unpublished overdue has no pill or colour cue');
  var feePills = compare.compareRankPillsHtml(rankCheap, feeCol, ranks);
  ok(feePills.indexOf('Lowest') !== -1 && feePills.indexOf('Nil') === -1, 'compare pill is Lowest, not Nil');

  var rateSlabs = [
    {
      has_slab_wise_charges: 'Yes',
      slab_from: 0,
      slab_to: 2500000,
      fixed_amount: 5000,
      charge_name: 'Interest Rate Type Switch'
    },
    {
      has_slab_wise_charges: 'Yes',
      slab_from: 2500001,
      slab_to: null,
      fixed_amount: 10000,
      charge_name: 'Interest Rate Type Switch'
    }
  ];
  var rateDetails = compare.chargeCalculationDetailsHtml(
    { rateChangeChargeSlabs: rateSlabs },
    'rateChangeChargeDisplay'
  );
  ok(
    rateDetails.indexOf('hlc-slab-table') !== -1 && rateDetails.indexOf('5,000') !== -1,
    'rate-change extra detail is the published range table'
  );
  ok(
    compare.chargeCalculationDetailsHtml(
      { overdueCharge: { percentage: 0.02 } },
      'overdueChargeDisplay'
    ) === '',
    'a single overdue rule has no extra table under the walk'
  );

  var walkModel = compare.loanAmountWalkModel(rows[0], query);
  ok(walkModel.fundedPct === 80, '₹62.5 lakh house uses the 80% band');
  ok(walkModel.cardLoad === 0, 'card load is present at ₹0');
  ok(walkModel.result === rows[0].loanAmount, 'walk result matches table loan amount');

  ok(
    walkModel.loanFactor > 0 &&
      Math.abs(
        walkModel.loanFactor -
          compare.loanFromEmi(1, rows[0].roiDecimal, rows[0].tenureMonths)
      ) < 1e-9,
    'walk model loan factor matches loanFromEmi(1,…)'
  );

  var row = compare.receiptRowHtml({
    label: compare.receiptPctLabel('LTV ratio'),
    op: '×',
    value: compare.formatPctFigure(80),
    ruleAfter: true
  });
  ok(
    row.indexOf('hlc-receipt-op') !== -1 &&
      row.indexOf('>×<') !== -1 &&
      row.indexOf('>80.00<') !== -1 &&
      row.indexOf('80%') === -1 &&
      row.indexOf('LTV ratio (%)') !== -1,
    'receipt row keeps op and bare .00 figure; % lives on the label'
  );
  ok(
    row.indexOf('hlc-receipt-row--ruled') !== -1 &&
      row.indexOf('hlc-receipt-rule') === -1,
    'ruleAfter underlines the figure itself (covers the number)'
  );

  ok(
    compare.formatPctFigure(8.5) === '8.50' &&
      compare.formatPctFigure(80) === '80.00' &&
      compare.formatPctPlain(80) === '80.00%' &&
      compare.formatReceiptFigure(6250000) === '6250000.00' &&
      compare.formatReceiptAmount(6250000) === '₹62,50,000.00' &&
      compare.formatReceiptAmount(6250000).indexOf(',') !== -1 &&
      compare.receiptPctLabel('Fee %') === 'Fee (%)' &&
      compare.receiptPctLabel('Loan rate p.a.') === 'Loan rate (% p.a.)',
    'receipt figures: always .00; amounts use Indian commas; % on label/prose'
  );

  var pctOp = compare.receiptPctOpRow('GST', 18, { ruleAfter: true });
  ok(
    pctOp.label === 'GST (%)' &&
      pctOp.op === '×' &&
      pctOp.value === '18.00' &&
      pctOp.ruleAfter === true,
    'receiptPctOpRow is the canonical ×-percent receipt line'
  );

  var answerRow = compare.receiptRowHtml({
    label: 'Eligible amount',
    value: '₹80.00',
    answer: true
  });
  ok(
    answerRow.indexOf('hlc-receipt-row--answer') !== -1 &&
      answerRow.indexOf('hlc-receipt-row--final') === -1,
    'answer rows are sub-results, not finals'
  );

  var midAfterRule = compare.receiptBlockHtml([
    { label: 'FOIR (%)', op: '×', value: '50.00', ruleAfter: true },
    { label: 'Max EMI allowed', value: '₹55,000.00' }
  ]);
  ok(
    midAfterRule.indexOf('Max EMI allowed') !== -1 &&
      midAfterRule.indexOf('hlc-receipt-row--answer') === -1 &&
      midAfterRule.indexOf('hlc-receipt-row--final') === -1,
    'mid-working lines after a rule stay at base weight'
  );

  var block = compare.receiptBlockHtml([
    { label: 'Property value', value: compare.formatReceiptAmount(100) },
    compare.receiptPctOpRow('LTV ratio', 80, { ruleAfter: true }),
    {
      label: 'Eligible amount',
      value: compare.formatReceiptAmount(80),
      final: true
    }
  ]);
  ok(
    block.indexOf('hlc-receipt') !== -1 &&
      block.indexOf('Eligible amount') !== -1 &&
      block.indexOf('LTV ratio (%)') !== -1 &&
      block.indexOf('>80.00<') !== -1 &&
      block.indexOf('₹100.00') !== -1 &&
      block.indexOf('80%') === -1 &&
      block.indexOf('hlc-drawer-card') === -1,
    'receipt block vertical method: .00 figures, commas on amounts, % on label'
  );

  ok(
    compare.receiptPartMark(0) === 'a' &&
      compare.receiptPartMark(1) === 'b' &&
      compare.receiptPartLabel('CERSAI creation', 'a') === 'CERSAI creation (a)' &&
      compare.receiptSumTotalLabel(['a', 'b', 'c']) === 'Total (a + b + c)' &&
      compare.receiptSumTotalLabel(['1', '2', '3']) === 'Total (1 + 2 + 3)' &&
      compare.receiptSumTotalLabel([]) === 'Total' &&
      compare.withReceiptStepNumber(2, [{ label: 'Loan amount', value: '₹1' }])[0]
        .label === '2. Loan amount' &&
      compare.withReceiptStepNumber(2, [{ label: 'Loan amount', value: '₹1' }])[0]
        .step === true,
    'school step marks: 1./2. headings and Total (1 + 2 + 3)'
  );

  var dual = compare.receiptDualHtml(
    [{ label: 'Property value', value: '₹1' }],
    [{ label: 'Net monthly income', value: '₹2' }],
    [{ label: 'Loan amount', value: '₹3' }]
  );
  ok(
    dual.indexOf('1. Property value') !== -1 &&
      dual.indexOf('2. Net monthly income') !== -1 &&
      dual.indexOf('3. Loan amount') !== -1 &&
      dual.indexOf('hlc-receipt-row--step') !== -1 &&
      dual.indexOf('2. Monthly Income') === -1 &&
      dual.indexOf('3. Required loan amount') === -1 &&
      dual.indexOf('₹3') !== -1 &&
      dual.indexOf('hlc-receipt-dual') === -1 &&
      dual.indexOf('hlc-receipt-col') === -1 &&
      (dual.match(/class="hlc-receipt"/g) || []).length === 3,
    'loan amount steps are sequential receipts like EMI/charges; numbered first labels'
  );

  var lowerResult = compare.loanLowerOfResultHtml('₹50,00,000.00');
  ok(
    lowerResult.indexOf('hlc-loan-lower-result') !== -1 &&
      lowerResult.indexOf('hlc-loan-lower-result-amount') !== -1 &&
      lowerResult.indexOf('hlc-loan-lower-result-rule') === -1 &&
      lowerResult.indexOf('₹50,00,000.00') !== -1 &&
      lowerResult.indexOf('Loan amount') === -1,
    'loan lower-of result is a bare amount with figure-width underline'
  );

  ok(
    Math.abs(
      compare.loanFactorFromRate(0.085, 240) - compare.loanFromEmi(1, 0.085, 240)
    ) < 1e-9,
    'loan factor matches loanFromEmi(1,…)'
  );

  var panel = compare.calcPanelHtml({
    leadHtml: compare.calcLeadHtml('EMI every month is', '₹1'),
    receiptHtml: compare.receiptBlockHtml([
      { label: 'EMI', value: '₹1', final: true }
    ])
  });
  ok(
    panel.indexOf('hlc-calc-lead-sentence') !== -1 &&
      panel.indexOf('hlc-calc-lead-amount') !== -1 &&
      panel.indexOf('EMI every month is') !== -1,
    'calc panel lead keeps sentence and amount on separate lines'
  );

  var panelWithLogo = compare.calcPanelHtml({
    bankName: 'HDFC Bank',
    leadHtml: compare.calcLeadHtml('EMI every month is', '₹1')
  });
  ok(
    panelWithLogo.indexOf('hlc-calc-panel--with-logo') !== -1 &&
      panelWithLogo.indexOf('hlc-bank-logo--calc') !== -1 &&
      panelWithLogo.indexOf('hdfc-bank.png') !== -1 &&
      panelWithLogo.indexOf('alt="HDFC Bank"') !== -1,
    'calc panel shows a larger bank logo when bankName is set'
  );

}

// ─── Guide intelligence tests (GI-01–GI-11) ──────────────────────────────────
function testGuideIntelligence() {
  var fs = require('fs');
  var path = require('path');
  var root = path.join(__dirname, '..');
  var genPath = path.join(root, 'js/guide-intelligence.generated.js');
  var ledgerPath = path.join(
    root,
    'super-review-1/guide-intelligence-drafts/_guide-intelligence-founder-choices-ledger.json'
  );

  ok(fs.existsSync(genPath), 'GI-01 guide-intelligence.generated.js exists');

  var genSrc = fs.readFileSync(genPath, 'utf8');
  var dataMatch = genSrc.match(/window\.ShroffinGuideIntelligence = (\{[\s\S]*\});/);
  ok(dataMatch, 'GI-02 generated file exports ShroffinGuideIntelligence object');
  var data = dataMatch ? JSON.parse(dataMatch[1]) : {};

  var pageKeys = Object.keys(data);
  ok(pageKeys.length === 1, 'GI-03 one page key in generated data');

  var total = 0;
  pageKeys.forEach(function (pk) {
    total += Object.keys(data[pk]).length;
  });
  ok(total === 5, 'GI-04 five section entries total');

  ok(
    data['loan-cover'] &&
      data['loan-cover'].compare &&
      data['loan-cover'].compare.bullets.length === 2,
    'GI-05 loan-cover compare card has two bullets'
  );

  var intelUi = require('../js/shroffin-guide-intelligence.js');
  ok(intelUi.escapeText('<b>') === '&lt;b&gt;', 'GI-09 escapeText escapes angle brackets');
  ok(intelUi.escapeSectionId('loan-amount') === 'loan-amount', 'GI-09b escapeSectionId passes simple ids');

  var ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
  ok(ledger.choices.length === 5, 'GI-11 ledger still has 5 choices');
}

// ─── Intelligence layer tests (T01–T20) ───────────────────────────────────────
function testIntelligence() {
  var hlcI = require('../src/hlc-intelligence.js');
  var hlc = require('../src/home-loan-compare.js');
  var fs = require('fs');
  var path = require('path');

  var DATASET = JSON.parse(fs.readFileSync(
    path.join(__dirname, '../data/home-loans-compare.json'), 'utf8'
  ));

  function syncMatchFn(q) {
    var prefiltered = DATASET.offers.filter(function(o) { return hlc.prefilterOffer(o, q); });
    return hlc.pickBestOfferPerBank(prefiltered).map(function(o) {
      return hlc.enrichMatchedRow(o, q, DATASET.bank_charges, DATASET.government_charges, DATASET.part_prepayment_rules);
    });
  }

  var BASE_FILTERS = {
    rateFloating: true, fixedRate: false, bankPublic: true, bankPrivate: true,
    womenApplicant: false, greenHome: false, govtPsu: false, insurance: false,
    facilityTermLoan: true, overdraft: false
  };

  function makeQuery(valueOverrides, filterOverrides) {
    return hlc.queryFromInputs(Object.assign({
      age: '35', cibilScore: '680', monthlyIncome: '80000', existingEmis: '0',
      tenureYears: '20', propertyValue: '6000000', occupation: 'Salaried',
      purpose: 'Purchase', includeCoApplicant: 'no'
    }, valueOverrides || {}), Object.assign({}, BASE_FILTERS, filterOverrides || {}));
  }

  function makeCtx(overrides) {
    var q = (overrides && overrides.query) ? overrides.query : makeQuery();
    var ctx = { query: q };
    if (overrides && overrides.rows !== undefined) {
      ctx.rows = overrides.rows;
    } else {
      ctx.rows = syncMatchFn(q);
    }
    ctx.matchFnSync = syncMatchFn;
    ctx.helpers = {
      emiFromLoan: hlc.emiFromLoan,
      simulatePartPrepaymentScenario: hlc.simulatePartPrepaymentScenario
    };
    return ctx;
  }

  var VAGUE_TITLE = /\b(a lot|several|some banks|real money|worth knowing|opens a cheaper|varies a lot|is cheaper)\b/i;

  // T01: CIBIL band tip fires with positive rupeeImpact + news title facts
  var ctx1 = makeCtx({});
  var tip1 = hlcI.tipCibilBand(ctx1);
  ok(tip1 !== null, 'T01 tipCibilBand must fire for score 680');
  ok(tip1 !== null && tip1.rupeeImpact > 0, 'T01 rupeeImpact must be positive');
  ok(tip1 !== null && /\d/.test(tip1.body), 'T01 body must contain a number');
  ok(tip1 !== null && tip1.heading.indexOf('680') !== -1, 'T01 heading names current CIBIL');
  ok(tip1 !== null && /\d+\.\d+%/.test(tip1.heading), 'T01 heading contains rate figure');
  ok(tip1 !== null && !VAGUE_TITLE.test(tip1.heading), 'T01 heading not vague');

  // T02: CIBIL already at 825+ — tip suppressed
  var q2 = makeQuery({ cibilScore: '825' });
  var ctx2 = makeCtx({ query: q2 });
  var tip2 = hlcI.tipCibilBand(ctx2);
  ok(tip2 === null, 'T02 tipCibilBand must be suppressed at 825');

  // T03: Women tip suppressed when filter already on
  var q3 = makeQuery({}, { womenApplicant: true });
  var ctx3 = makeCtx({ query: q3 });
  var tip3 = hlcI.tipWomen(ctx3);
  ok(tip3 === null, 'T03 tipWomen must suppress when filter already on');

  // T04: buildIntelligence returns ranked tips; UI previews first 3
  var ctx4 = makeCtx({});
  var intel4 = hlcI.buildIntelligence(ctx4);
  ok(Array.isArray(intel4.tips), 'T04 buildIntelligence returns tips array');
  ok(hlcI.INTEL_TIPS_MAX === 3, 'T04 strip tip max is 3');
  ok(hlcI.INTEL_TIPS_PREVIEW === 3, 'T04 preview alias still 3');
  // Every tip kind can fire at most once → hard ceiling is the tip catalog size
  ok(intel4.tips.length <= 11, 'T04 tips cannot exceed tip catalog size');

  // T05: Zero rows → empty intelligence
  var ctx5 = makeCtx({ rows: [] });
  var intel5 = hlcI.buildIntelligence(ctx5);
  ok(intel5.tips.length === 0, 'T05 zero rows → no tips');
  ok(intel5.status === '', 'T05 zero rows → empty status');

  // T06: No banned words in any tip body
  var ctx6 = makeCtx({});
  var intel6 = hlcI.buildIntelligence(ctx6);
  var BANNED = /\b(AI|LLM|powered by|machine learning|Google Flights|best CIBIL)\b/i;
  intel6.tips.forEach(function(t) {
    ok(!BANNED.test(t.heading + ' ' + t.body), 'T06 no banned copy in tip: ' + t.heading);
  });

  // T07: Every tip heading and body contain at least one numeric figure
  var ctx7 = makeCtx({});
  var intel7 = hlcI.buildIntelligence(ctx7);
  intel7.tips.forEach(function(t) {
    ok(/[\d\u20b9%]/.test(t.heading), 'T07 tip heading has a figure: ' + t.heading);
    ok(/[\d\u20b9%]/.test(t.body), 'T07 tip body has a figure: ' + t.heading);
    ok(!VAGUE_TITLE.test(t.heading), 'T07 tip heading not vague: ' + t.heading);
  });

  // T08: tipProcessingFee fires when spread is large enough — names both banks + ₹
  var ctx8 = makeCtx({});
  var fees8 = ctx8.rows.map(function(r) { return r.processingFee; }).filter(function(x) { return Number.isFinite(x) && x >= 0; });
  if (fees8.length >= 2 && Math.max.apply(null, fees8) - Math.min.apply(null, fees8) >= 5000) {
    var tip8 = hlcI.tipProcessingFee(ctx8);
    ok(tip8 !== null, 'T08 tipProcessingFee must fire with large spread');
    ok(tip8 !== null && tip8.rupeeImpact >= 5000, 'T08 tipProcessingFee rupeeImpact >= 5000');
    ok(tip8 !== null && tip8.heading.indexOf('Processing fee:') === 0, 'T08 heading starts with Processing fee:');
    ok(tip8 !== null && (tip8.heading.match(/\u20b9/g) || []).length >= 2, 'T08 heading has two ₹ amounts');
  } else {
    ok(true, 'T08 skipped — data spread < 5000');
  }

  // T09: buildStatusLine is one personalized sentence — your match count + one story
  var ctx9 = makeCtx({});
  var status9 = hlcI.buildStatusLine(ctx9);
  var story9 = hlcI.buildStatusStory(ctx9);
  var lowest9 = hlcI.bestRateRow(ctx9.rows);
  ok(typeof status9 === 'string' && status9.length > 0, 'T09 buildStatusLine non-empty');
  ok(lowest9, 'T09 has lowest-rate row');
  ok(story9.kind === 'leader' || story9.kind === 'leaderOutlier' || story9.kind === 'edge' || story9.kind === 'tightBand', 'T09 story kind is computed');
  ok(/^Across \d+ banks for your profile, /.test(status9) || /^For your profile, only /.test(status9), 'T09 opens as personalized sentence');
  ok(status9.indexOf(String(ctx9.rows.length) + ' banks for your profile') !== -1 || ctx9.rows.length === 1, 'T09 embeds match count from this profile');
  if (story9.kind === 'leader' || story9.kind === 'leaderOutlier' || story9.kind === 'edge') {
    ok(status9.indexOf(lowest9.bankName) !== -1, 'T09 names true lowest-rate bank');
    ok(status9.indexOf(Number(lowest9.effectiveRoiPct).toFixed(2) + '%') !== -1, 'T09 includes leader rate');
  }
  ok(status9.indexOf('Rates on your list:') === -1, 'T09 no label-shaped Rates on your list opener');
  ok(status9.indexOf('rates run to') === -1, 'T09 no parameter dump of band high');
  ok(status9.indexOf('edges the list') === -1, 'T09 no sports-ticker phrasing');
  if (ctx9.rows.length >= 2 && lowest9) {
    var shuffled = ctx9.rows.slice().sort(function(a, b) {
      return (b.effectiveRoiPct || 0) - (a.effectiveRoiPct || 0);
    });
    var statusShuf = hlcI.buildStatusLine({ rows: shuffled });
    if (hlcI.buildStatusStory({ rows: shuffled }).kind !== 'tightBand') {
      ok(statusShuf.indexOf(lowest9.bankName) !== -1, 'T09 still names true lowest after row order flip');
    }
  }

  // T09b: leaderOutlier when cheapest bank is worst on processing fee (synthetic)
  var synthLeader = {
    bankName: 'Alpha Bank', bankKey: 'alpha', effectiveRoiPct: 7.25,
    processingFee: 150000, missedEmiTotal: 1000, emi: 40000, loanAmount: 5000000, tenureYears: 20
  };
  var synthLowFee = {
    bankName: 'Beta Bank', bankKey: 'beta', effectiveRoiPct: 7.40,
    processingFee: 2500, missedEmiTotal: 1000, emi: 40500, loanAmount: 5000000, tenureYears: 20
  };
  var storyOutlier = hlcI.buildStatusStory({ rows: [synthLeader, synthLowFee] });
  ok(storyOutlier.kind === 'leaderOutlier', 'T09b leaderOutlier when leader has highest processing fee');
  ok(storyOutlier.line.indexOf('Across 2 banks for your profile, Alpha Bank is cheapest at 7.25%') === 0, 'T09b personalized opener + leader');
  ok(storyOutlier.line.indexOf('processing fee is') !== -1, 'T09b processing fee outlier clause');
  ok(storyOutlier.line.indexOf('Beta Bank') !== -1, 'T09b names comparison bank');

  // T09c: tight band story when rates cluster and no leader outlier
  var synthA = { bankName: 'Bank A', effectiveRoiPct: 7.25, processingFee: 5000, missedEmiTotal: 2000 };
  var synthB = { bankName: 'Bank B', effectiveRoiPct: 7.30, processingFee: 5200, missedEmiTotal: 2100 };
  var synthC = { bankName: 'Bank C', effectiveRoiPct: 7.40, processingFee: 5100, missedEmiTotal: 2050 };
  var storyTight = hlcI.buildStatusStory({ rows: [synthA, synthB, synthC] });
  ok(storyTight.kind === 'tightBand', 'T09c tightBand when spread < 0.30% and no outlier');
  ok(storyTight.line.indexOf('Across 3 banks for your profile, rates sit in a') === 0, 'T09c personalized tight-band sentence');
  ok(storyTight.line.indexOf('fees, government charges, and penalties matter more') !== -1, 'T09c tight band so-what');

  // T09d: edge story when leader barely ahead
  var synthEdgeLead = { bankName: 'Edge Lead', effectiveRoiPct: 7.25, processingFee: 5000, missedEmiTotal: 2000 };
  var synthEdgeTrail = { bankName: 'Edge Trail', effectiveRoiPct: 7.30, processingFee: 5100, missedEmiTotal: 2050 };
  var synthEdgeFar = { bankName: 'Edge Far', effectiveRoiPct: 9.50, processingFee: 5200, missedEmiTotal: 2100 };
  var storyEdge = hlcI.buildStatusStory({ rows: [synthEdgeLead, synthEdgeTrail, synthEdgeFar] });
  ok(storyEdge.kind === 'edge', 'T09d edge when gap to runner-up < 0.15%');
  ok(storyEdge.line.indexOf('Across 3 banks for your profile, Edge Lead is cheapest at 7.25%') === 0, 'T09d personalized edge sentence');
  ok(storyEdge.line.indexOf('Edge Trail is next at 7.30%') !== -1, 'T09d names runner-up rate');

  // T09e: missedEmiTotal populated on enriched rows (pipeline accuracy)
  var ctx9e = makeCtx({});
  var withMiss = ctx9e.rows.filter(function(r) { return Number.isFinite(r.missedEmiTotal) && r.missedEmiTotal > 0; });
  ok(withMiss.length > 0, 'T09e enriched rows include missedEmiTotal from pipeline');

  // T09f: different match counts change the personalized frame
  var qNarrow = makeQuery({}, { bankPublic: true, bankPrivate: false });
  var ctxNarrow = makeCtx({ query: qNarrow });
  var statusNarrow = hlcI.buildStatusLine(ctxNarrow);
  var statusWide = hlcI.buildStatusLine(makeCtx({}));
  if (ctxNarrow.rows.length > 0 && ctxNarrow.rows.length !== makeCtx({}).rows.length) {
    ok(statusNarrow !== statusWide, 'T09f status changes when match set changes');
    ok(statusNarrow.indexOf(String(ctxNarrow.rows.length) + ' banks for your profile') !== -1 || ctxNarrow.rows.length === 1, 'T09f narrow profile embeds its own count');
  } else {
    ok(true, 'T09f skipped — public-only filter did not change match count');
  }

  // T10: tips are sorted descending by rupeeImpact
  var ctx10 = makeCtx({});
  var intel10 = hlcI.buildIntelligence(ctx10);
  for (var i = 1; i < intel10.tips.length; i++) {
    ok(intel10.tips[i - 1].rupeeImpact >= intel10.tips[i].rupeeImpact, 'T10 tips sorted by rupeeImpact');
  }
  ok(true, 'T10 sort check done');

  // T11: Missed-EMI penalty title names both banks and both totals
  var ctx11 = makeCtx({});
  var tip11 = hlcI.tipMissPenalty(ctx11);
  if (tip11) {
    ok(tip11.heading.indexOf('One missed EMI:') === 0, 'T11 missPenalty news title');
    ok((tip11.heading.match(/\u20b9/g) || []).length >= 2, 'T11 heading has two ₹ amounts');
    ok(!/varies a lot/i.test(tip11.heading), 'T11 no vague varies-a-lot');
  } else {
    ok(true, 'T11 skipped — miss penalty tip did not fire');
  }

  // T12: Existing EMIs title carries before/after loan limits
  var q12 = makeQuery({ existingEmis: '45000', monthlyIncome: '150000', propertyValue: '15000000' });
  var ctx12 = makeCtx({ query: q12 });
  var tip12 = hlcI.tipExistingEmis(ctx12);
  if (tip12) {
    ok(/\/mo EMIs cap you at/.test(tip12.heading), 'T12 existingEmis news title shape');
    ok(tip12.heading.indexOf('clear them for') !== -1, 'T12 heading has clear-them counterfactual');
    ok((tip12.heading.match(/\u20b9/g) || []).length >= 3, 'T12 heading has EMI + two limits');
  } else {
    ok(true, 'T12 skipped — existingEmis tip did not fire on this profile');
  }

  // T13: Fixed-only filter tip puts both rates in the title
  var q13 = makeQuery({}, { rateFloating: false, fixedRate: true });
  var ctx13 = makeCtx({ query: q13 });
  var tip13 = hlcI.tipFixedVsFloating(ctx13);
  if (tip13) {
    ok(/fixed-only at \d+\.\d+%/.test(tip13.heading), 'T13 fixed rate in title');
    ok(/floating starts at \d+\.\d+%/.test(tip13.heading), 'T13 floating rate in title');
    ok(!/is cheaper/.test(tip13.heading), 'T13 no bare cheaper claim');
  } else {
    ok(true, 'T13 skipped — fixedVsFloating tip did not fire');
  }

  // T14: Age×tenure scopes to list count — never "most banks"
  var q14 = makeQuery({ age: '58', tenureYears: '20' });
  var ctx14 = makeCtx({ query: q14 });
  var tip14 = hlcI.tipAgeTenure(ctx14);
  if (tip14) {
    ok(/You asked for \d+ years/.test(tip14.heading), 'T14 asked tenure in title');
    ok(/banks on your list cap you at/.test(tip14.heading), 'T14 scoped list cap in title');
    ok(/EMI up \u20b9/.test(tip14.heading), 'T14 EMI delta in title');
    ok(!/most banks/i.test(tip14.heading + ' ' + tip14.body), 'T14 no industry-wide most banks');
  } else {
    ok(true, 'T14 skipped — ageTenure tip did not fire');
  }

  // T15: Prepayment title has prepay ₹ and EMI before/after; uses published rules/charge
  var ctx15 = makeCtx({});
  var tip15 = hlcI.tipPrepayment(ctx15);
  if (tip15) {
    ok(/prepayment at year \d+ cuts EMI from/.test(tip15.heading), 'T15 prepayment news title');
    ok((tip15.heading.match(/\u20b9/g) || []).length >= 3, 'T15 heading has prepay + two EMIs');
    ok(!/real money/i.test(tip15.heading), 'T15 no real-money filler');
    ok(!/RBI/i.test(tip15.body), 'T15 body uses published bank data, not generic RBI note');
    ok(
      /Minimum per request|FY cap|Pay via|No prepayment charge published|prepayment charge on this amount/i.test(tip15.body),
      'T15 body cites part-prepayment rules or published charge'
    );
  } else {
    ok(true, 'T15 skipped — prepayment tip did not fire');
  }

  // T16: Women tip (when it fires) puts both rates in title — no "several"
  var tip16 = hlcI.tipWomen(makeCtx({}));
  if (tip16) {
    ok(/Women as primary:/.test(tip16.heading), 'T16 women news title');
    ok((tip16.heading.match(/\d+\.\d+%/g) || []).length >= 2, 'T16 both rates in title');
    ok(!/several/i.test(tip16.heading), 'T16 no several');
  } else {
    ok(true, 'T16 skipped — women tip did not fire');
  }

  // T17: Green tip (when it fires) puts both rates in title — no "some banks"
  var tip17 = hlcI.tipGreen(makeCtx({}));
  if (tip17) {
    ok(/Green-rated property:/.test(tip17.heading), 'T17 green news title');
    ok((tip17.heading.match(/\d+\.\d+%/g) || []).length >= 2, 'T17 both rates in title');
    ok(!/some banks/i.test(tip17.heading), 'T17 no some banks');
  } else {
    ok(true, 'T17 skipped — green tip did not fire');
  }

  // T18: Occupation tip (self-employed) puts match counts in title
  var q18 = makeQuery({ occupation: 'Self-employed' });
  var ctx18 = makeCtx({ query: q18 });
  var tip18 = hlcI.tipOccupation(ctx18);
  if (tip18) {
    ok(/Self-employed matches \d+ bank/.test(tip18.heading), 'T18 occupation count in title');
    ok(/salaried co-applicant reaches \d+/.test(tip18.heading), 'T18 salaried counterfactual count in title');
  } else {
    ok(true, 'T18 skipped — occupation tip did not fire');
  }

  // T19: CIBIL heading embeds both computed rates from the tip pipeline
  if (tip1) {
    var curRateMatch = tip1.heading.match(/best rate is (\d+\.\d+)%/);
    var nextRateMatch = tip1.heading.match(/cuts it to (\d+\.\d+)%/);
    ok(!!curRateMatch && !!nextRateMatch, 'T19 CIBIL heading parses both rates');
    ok(tip1.body.indexOf('at CIBIL') !== -1, 'T19 CIBIL body names the upgrade band');
  }

  // T20: status + tip set never use banned vague title fillers when tips exist
  var intel20 = hlcI.buildIntelligence(makeCtx({}));
  ok(!VAGUE_TITLE.test(intel20.status), 'T20 status not vague');
  ok(intel20.status.indexOf('Rates on your list:') === -1, 'T20 status not a parameter label');
  ok(/^Across \d+ banks for your profile, |^For your profile, only /.test(intel20.status), 'T20 status is one personalized sentence');
  intel20.tips.forEach(function(t) {
    ok(t.heading.split(/[\d\u20b9%]/).length >= 3, 'T20 heading has ≥2 concrete tokens: ' + t.heading);
  });

  // T21: Government charges tip fires when spread is large enough
  var ctx21 = makeCtx({});
  var govtTotals = ctx21.rows.map(function(r) { return r.governmentCharges; }).filter(function(x) { return Number.isFinite(x) && x >= 0; });
  if (govtTotals.length >= 2 && Math.max.apply(null, govtTotals) - Math.min.apply(null, govtTotals) >= 1000) {
    var tip21 = hlcI.tipGovernmentCharges(ctx21);
    ok(tip21 !== null, 'T21 tipGovernmentCharges must fire with large spread');
    ok(tip21 !== null && tip21.heading.indexOf('Government charges at sanction:') === 0, 'T21 heading shape');
    ok(tip21 !== null && (tip21.heading.match(/\u20b9/g) || []).length >= 2, 'T21 heading has two ₹ amounts');
    ok(tip21 !== null && /stamp duty|CERSAI|government fees/i.test(tip21.body), 'T21 body names government fee types');
  } else {
    ok(true, 'T21 skipped — government spread < 1000');
  }

  // T22: simulatePartPrepaymentScenario uses rules + charge from enriched row
  var row22 = ctx21.rows.find(function(r) {
    return r.partPrepaymentRules && r.partPrepaymentRules.length && r.loanAmount >= 1000000;
  });
  if (row22) {
    var sim22 = hlc.simulatePartPrepaymentScenario(row22, { emiFromLoan: hlc.emiFromLoan });
    ok(sim22 !== null, 'T22 simulation runs on row with part-prepayment rules');
    if (sim22) {
      ok(sim22.prepayAmount > 0 && sim22.emiDrop >= 200, 'T22 simulation has positive prepay and EMI drop');
      ok(Array.isArray(sim22.constraintNotes), 'T22 simulation returns constraint notes from rules');
    }
  } else {
    ok(true, 'T22 skipped — no enriched row with part-prepayment rules');
  }

  // T23: leaderOutlier can surface government charges on cheapest bank
  var synthGovLead = {
    bankName: 'Gov Lead', bankKey: 'gov-lead', effectiveRoiPct: 7.25,
    processingFee: 5000, governmentCharges: 32000, missedEmiTotal: 1000
  };
  var synthGovLow = {
    bankName: 'Gov Low', bankKey: 'gov-low', effectiveRoiPct: 7.40,
    processingFee: 5100, governmentCharges: 29000, missedEmiTotal: 1000
  };
  var storyGov = hlcI.buildStatusStory({ rows: [synthGovLead, synthGovLow] });
  ok(storyGov.kind === 'leaderOutlier', 'T23 leaderOutlier when leader has highest government charges');
  ok(storyGov.line.indexOf('government charges at sanction are') !== -1, 'T23 government outlier clause');

  // T24: renderIntelligenceHtml shows status-only (no tips)
  var fakePanel24 = {
    hidden: true,
    classList: { remove: function() {}, add: function() {} },
    statusEl: { textContent: "" },
    tipsEl: { innerHTML: "STALE", hidden: false },
    moreEl: { hidden: false, setAttribute: function() {}, removeAttribute: function() {}, innerHTML: "x" },
    querySelector: function(sel) {
      if (sel === "#hlc-intel-status") return this.statusEl;
      if (sel === "#hlc-intel-tips") return this.tipsEl;
      if (sel === "#hlc-intel-more") return this.moreEl;
      return null;
    }
  };
  hlcI.renderIntelligenceHtml(fakePanel24, {
    status: "Across 2 banks for your profile, Alpha Bank is cheapest at 7.25%.",
    tips: []
  });
  ok(fakePanel24.hidden === false, 'T24 status-only panel is shown');
  ok(fakePanel24.statusEl.textContent.indexOf('Alpha Bank') !== -1, 'T24 status text set');
  ok(fakePanel24.tipsEl.innerHTML === "", 'T24 tips list cleared when empty');
  ok(fakePanel24.tipsEl.hidden === true, 'T24 tips list hidden when empty');
  ok(fakePanel24.moreEl.hidden === true, 'T24 more button hidden when no tips');

  // T25: renderIntelligenceHtml hides when status and tips both empty
  var fakePanel25 = {
    hidden: false,
    classList: { remove: function() {}, add: function() {} },
    statusEl: { textContent: "old" },
    tipsEl: { innerHTML: "<li>old</li>", hidden: false },
    moreEl: { hidden: false, setAttribute: function() {}, removeAttribute: function() {}, innerHTML: "x" },
    querySelector: function(sel) {
      if (sel === "#hlc-intel-status") return this.statusEl;
      if (sel === "#hlc-intel-tips") return this.tipsEl;
      if (sel === "#hlc-intel-more") return this.moreEl;
      return null;
    }
  };
  hlcI.renderIntelligenceHtml(fakePanel25, { status: "", tips: [] });
  ok(fakePanel25.hidden === true, 'T25 empty intel hides panel');
  ok(fakePanel25.statusEl.textContent === "", 'T25 status cleared');
  ok(fakePanel25.tipsEl.innerHTML === "", 'T25 tips cleared');
  ok(fakePanel25.tipsEl.hidden === true, 'T25 tips list hidden when panel empty');

  // T26: strip-only by default; More opens 3 tips; + reveals the rest
  var tipStub = function(kind) {
    return { kind: kind, heading: "Fee is \u20b91,000", body: "Gap is \u20b9500 on list." };
  };
  var fakePanel26 = {
    hidden: true,
    classList: {
      _open: false,
      _expanded: false,
      _more: false,
      contains: function(name) {
        if (name === "is-tips-open") return !!this._open;
        if (name === "is-tips-expanded") return !!this._expanded;
        if (name === "is-tips-more") return !!this._more;
        return false;
      },
      remove: function() {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] === "is-tips-open") this._open = false;
          if (arguments[i] === "is-tips-expanded") this._expanded = false;
          if (arguments[i] === "is-tips-more") this._more = false;
        }
      },
      add: function() {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] === "is-tips-open") this._open = true;
          if (arguments[i] === "is-tips-expanded") this._expanded = true;
          if (arguments[i] === "is-tips-more") this._more = true;
        }
      }
    },
    statusEl: { textContent: "" },
    tipsEl: {
      innerHTML: "",
      hidden: true,
      attrs: {},
      setAttribute: function(k, v) { this.attrs[k] = v; }
    },
    moreEl: {
      hidden: true,
      attrs: {},
      innerHTML: "",
      setAttribute: function(k, v) { this.attrs[k] = v; },
      removeAttribute: function(k) { delete this.attrs[k]; },
      querySelector: function() { return null; }
    },
    plusEl: {
      hidden: true,
      attrs: {},
      innerHTML: '<span class="hlc-intel-plus-label">+</span>',
      setAttribute: function(k, v) { this.attrs[k] = v; },
      removeAttribute: function(k) { delete this.attrs[k]; },
      querySelector: function(sel) {
        if (sel !== ".hlc-intel-plus-label") return null;
        var self = this;
        return {
          set textContent(v) {
            self.innerHTML = '<span class="hlc-intel-plus-label">' + v + "</span>";
          },
          get textContent() {
            return self.innerHTML;
          }
        };
      }
    },
    querySelector: function(sel) {
      if (sel === "#hlc-intel-status") return this.statusEl;
      if (sel === "#hlc-intel-tips") return this.tipsEl;
      if (sel === "#hlc-intel-more") return this.moreEl;
      if (sel === "#hlc-intel-plus") return this.plusEl;
      return null;
    }
  };
  hlcI.renderIntelligenceHtml(fakePanel26, {
    status: "Across 2 banks for your profile, Alpha Bank is cheapest at 7.25%.",
    tips: [tipStub("a"), tipStub("b"), tipStub("c"), tipStub("d"), tipStub("e")]
  });
  ok(fakePanel26.hidden === false, 'T26 panel shown with tips');
  ok(fakePanel26.classList._open === false, 'T26 starts as status strip (tips closed)');
  ok((fakePanel26.tipsEl.innerHTML.match(/<li class="hlc-intel-tip/g) || []).length === 5, 'T26 renders all tip items');
  ok((fakePanel26.tipsEl.innerHTML.match(/hlc-intel-tip--extra/g) || []).length === 2, 'T26 marks tips beyond preview as extra');
  ok(fakePanel26.moreEl.hidden === false, 'T26 more control visible when tips exist');
  ok(fakePanel26.plusEl.hidden === true, 'T26 plus hidden while strip closed');
  ok(fakePanel26.moreEl.innerHTML.indexOf("More") !== -1, 'T26 more label is More');

  var extraNodes = [
    { setAttribute: function(k, v) { this[k] = v; }, classList: { contains: function(n) { return n === "hlc-intel-tip--extra"; } } },
    { setAttribute: function(k, v) { this[k] = v; }, classList: { contains: function(n) { return n === "hlc-intel-tip--extra"; } } }
  ];
  var tipNodes = [
    { classList: { contains: function() { return false; } } },
    { classList: { contains: function() { return false; } } },
    { classList: { contains: function() { return false; } } },
    extraNodes[0],
    extraNodes[1]
  ];
  var detailNodes = [
    { setAttribute: function(k, v) { this[k] = v; }, parentNode: tipNodes[0] },
    { setAttribute: function(k, v) { this[k] = v; }, parentNode: tipNodes[1] },
    { setAttribute: function(k, v) { this[k] = v; }, parentNode: tipNodes[2] },
    { setAttribute: function(k, v) { this[k] = v; }, parentNode: tipNodes[3] },
    { setAttribute: function(k, v) { this[k] = v; }, parentNode: tipNodes[4] }
  ];
  fakePanel26.tipsEl.querySelectorAll = function(sel) {
    if (sel === ".hlc-intel-tip") return tipNodes;
    if (sel === ".hlc-intel-tip--extra") return extraNodes;
    if (sel === ".hlc-intel-tip-detail") return detailNodes;
    return [];
  };
  hlcI.expandIntelligenceTips(fakePanel26);
  ok(fakePanel26.classList._open === true, 'T26 expand sets is-tips-open');
  ok(fakePanel26.classList._expanded === true, 'T26 expand shows tip bodies under headings');
  ok(fakePanel26.plusEl.hidden === false, 'T26 plus visible after tip row opens');
  ok(fakePanel26.plusEl.innerHTML.indexOf("+2") !== -1, 'T26 plus shows remaining count');
  ok(fakePanel26.moreEl.innerHTML.indexOf("Show less") !== -1, 'T26 more label becomes Show less');
  ok(detailNodes[0]["aria-hidden"] === "false", 'T26 preview details visible when open');
  ok(detailNodes[3]["aria-hidden"] === "true", 'T26 extra details stay hidden until plus');

  hlcI.toggleIntelligenceTipsMore(fakePanel26);
  ok(fakePanel26.classList._more === true, 'T26 plus opens remaining tips');
  ok(extraNodes[0]["aria-hidden"] === "false", 'T26 extras aria-hidden false after plus');
  ok(detailNodes[3]["aria-hidden"] === "false", 'T26 extra details visible after plus');
  ok(fakePanel26.plusEl.innerHTML.indexOf("\u2212") !== -1, 'T26 plus becomes minus when extras open');

  hlcI.toggleIntelligenceTips(fakePanel26);
  ok(fakePanel26.classList._open === false, 'T26 toggle closes tip heading row');
  ok(fakePanel26.classList._more === false, 'T26 closing tip row also collapses extras');
  ok(fakePanel26.plusEl.hidden === true, 'T26 plus hidden after strip close');
  ok(fakePanel26.moreEl.innerHTML.indexOf("More") !== -1, 'T26 more label restored after close');
  ok(fakePanel26.moreEl.attrs["aria-expanded"] === "false", 'T26 more aria-expanded false after close');

  // Soft-command ban on tip bodies (news + limit, not orders)
  var SOFT_COMMAND = /\b(raising the score|is the lever|applying earlier|confirm the certificate|if you open floating|before you pick a bank|you should|must apply)\b/i;
  var intelSoft = hlcI.buildIntelligence(makeCtx({}));
  intelSoft.tips.forEach(function(t) {
    ok(!SOFT_COMMAND.test(t.body), 'soft-command ban on buildIntelligence tip body: ' + t.kind);
  });
  [tip1, tip12, tip13, tip14, tip17].forEach(function(t) {
    if (t) {
      ok(!SOFT_COMMAND.test(t.body), 'soft-command ban on fired tip body: ' + t.kind);
    }
  });
}
