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
    compare.RATE_CHANGE_BENCHMARK_MEANING_NOTE.indexOf(
      'Marginal Cost of Funds based Lending Rate (MCLR)'
    ) !== -1 &&
      compare.RATE_CHANGE_BENCHMARK_MEANING_NOTE.indexOf(
        'Repo Linked Lending Rate (RLLR)'
      ) !== -1 &&
      compare.RATE_CHANGE_BENCHMARK_MEANING_NOTE.indexOf(
        'External Benchmark Lending Rate (EBLR)'
      ) !== -1,
    'benchmark meaning note spells out older and newer reference rates'
  );
  ok(
    compare.RATE_CHANGE_REPRICING_MEANING_NOTE.indexOf('higher rate') !== -1 &&
      compare.RATE_CHANGE_REPRICING_MEANING_NOTE.indexOf('lower rate') !== -1 &&
      compare.RATE_CHANGE_REPRICING_MEANING_NOTE.indexOf('Floating') !== -1,
    'repricing meaning note states higher-to-lower on the same rate type'
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
    compare.formatRateChangeChargeDisplay(null).main === 'Not listed',
    'missing rate change charge displays as not listed'
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
      'Floating-rate home loans to individuals have no prepayment or foreclosure charge. Under Reserve Bank of India (RBI) directions, Part E, paragraphs 352 and 353.',
    'floating prepayment note states the RBI rule'
  );
  ok(
    compare.FIXED_FORECLOSURE_NOTE ===
      'Foreclosure means closing the full loan early. Lenders usually apply the same charge as prepayment, so foreclosure is not listed separately.',
    'fixed-rate note explains foreclosure follows prepayment'
  );
  ok(
    compare.PROCESSING_FEE_LOGIN_NOTE.indexOf('login fee') !== -1 &&
      compare.PROCESSING_FEE_LOGIN_NOTE.indexOf('differs by bank') !== -1 &&
      compare.PROCESSING_FEE_LOGIN_NOTE.indexOf("don't list it separately") ===
        -1 &&
      compare.PROCESSING_FEE_LOGIN_NOTE.indexOf('don’t list it separately yet') !==
        -1,
    'processing fee note explains login fee without inventing amounts'
  );
  ok(
    compare.GROUPS.charges[0].key === 'processingFee' &&
      compare.GROUPS.charges[0].footnote === '*',
    'processing fees column carries the login-fee footnote marker'
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
        .indexOf('Part E, paragraphs 352 and 353') !== -1,
    'floating prepayment note links Part E to the RBI page'
  );
  ok(
    compare.chargesNoteGroupHtml('Rate change charge', ['° Note one', '° Note two'])
      .indexOf('hlc-charges-note-heading') !== -1 &&
      compare.chargesNoteGroupHtml('Rate change charge', ['° Note one', '° Note two'])
        .indexOf('Rate change charge') !== -1 &&
      compare.chargesNoteGroupHtml('Rate change charge', []) === '' &&
      compare.chargesNoteGroupHtml('Overdue charge', ['‡ Note']).indexOf(
        'Overdue charge'
      ) !== -1,
    'charges footnotes group under the matching column charge name'
  );
  ok(
    compare.formatPrepaymentChargeDisplay(null).main === 'Not listed',
    'missing prepayment charge displays as not listed'
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
    'prepayment sort places Nil (₹0) first and not listed last'
  );
  compare.applyPrepaymentMethodToRows(
    syntheticPrepayRows,
    compare.PREPAYMENT_METHOD_BT
  );
  ok(
    syntheticPrepayRows[0].prepaymentChargeDisplay.main === 'Not listed' &&
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
    syntheticRateRows[1].rateChangeChargeDisplay.action === 'rate-change-slabs' &&
      syntheticRateRows[1].rateChangeChargeDisplay.main ===
        'Fixed amount by loan amount range',
    'multi-slab rate change uses loan-amount range action'
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
    markedRateRows[0].rateChangeChargeDisplay.marker ===
      compare.RATE_CHANGE_BANK_MARKERS['hdfc bank'],
    'HDFC rate-change cell carries the bank-specific footnote marker'
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
      .indexOf('From MCLR to EBR (repo rate).') >= 0 &&
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
      return row.overdueChargeDisplay.main !== 'Not listed';
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
        'Fixed amount by overdue range' &&
      dcbRow.overdueChargeDisplay.action === 'overdue-slabs',
    'DCB Bank links its overdue cell to the overdue range details'
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
      centralBankOverdueRow.overdueChargeDisplay.main === '0%' &&
      centralBankOverdueRow.overdueChargeDisplay.marker === '◊' &&
      centralBankOverdueRow.overdueChargeDisplay.details[0] ===
        'Up to ₹30,000 · Applies when loan tenure is up to 23 months.',
    'Central Bank of India shows its first overdue slab and condition'
  );
  ok(
    centralBankOverdueRow &&
      centralBankOverdueRow.overdueDetailFootnote ===
        '◊ Central Bank of India: The charge depends on the overdue amount. 2% p.a. from ₹30,001.',
    'Central Bank of India footnote names the slab basis and higher slab'
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
      return row.emiBounceChargeDisplay.main !== 'Not listed';
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
  var panelFee = compare.buildFeeTableEntries('Documentation charges', [
    {
      charge_name: 'Documentation charges',
      fixed_amount: 500,
      charge_unit: 'Instance',
      gst_applicable: 'Yes'
    }
  ]);
  ok(
    panelFee.entries[0].amount === '₹500*' &&
      panelFee.entries[0].gstApplicable === true &&
      panelFee.entries[0].meta.indexOf('GST') === -1,
    'side panel marks GST with * on the amount instead of repeating GST extra'
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
      bankOfBarodaRow.emiBounceChargeDisplay.marker === '§' &&
      bankOfBarodaRow.emiBounceChargeDisplay.details[0] ===
        'ECS / cheque return' &&
      bankOfBarodaRow.emiBounceChargeDisplay.details[1] ===
        'for a bounce amount up to ₹1 lakh in metro areas',
    'Bank of Baroda shows ECS metro first slab with § marker'
  );
  ok(
    bankOfBarodaRow &&
      bankOfBarodaRow.emiBounceDetailFootnote ===
        '§ Bank of Baroda: The amount shown is the ECS / cheque return for a bounce amount up to ₹1 lakh in metro areas. Metro: ₹125 up to ₹1 lakh; ₹250 from ₹1,00,001 to ₹99,99,999; ₹500 from ₹1 crore. Rural / Semi-urban: ₹100 up to ₹1 lakh; ₹225 from ₹1,00,001 to ₹99,99,999; ₹450 from ₹1 crore. NACH return: ₹250. Auto debit / SI bounce: ₹500. Technical ECS / cheque return: ₹0.',
    'Bank of Baroda § note states ECS shown and lists every bounce fact'
  );
  var canaraRow = rows.find(function (row) {
    return row.bankName === 'Canara Bank';
  });
  ok(
    canaraRow &&
      canaraRow.emiBounceChargeDisplay.main === '₹300' &&
      canaraRow.emiBounceChargeDisplay.marker === '†' &&
      canaraRow.emiBounceChargeDisplay.details[0] ===
        'for a bounce amount up to ₹1,000',
    'Canara Bank shows its first ECS and NACH return slab in the table'
  );
  ok(
    canaraRow &&
      canaraRow.emiBounceDetailFootnote.indexOf(
        'The charge depends on the bounce amount.'
      ) >= 0 &&
      canaraRow.emiBounceDetailFootnote.indexOf(
        '₹750 from ₹1,001 to ₹1 lakh'
      ) >= 0 &&
      canaraRow.emiBounceDetailFootnote.indexOf(
        '₹2,000 from ₹1,00,00,001'
      ) >= 0,
    'Canara Bank footnote lists every higher ECS and NACH return slab'
  );
  var bankOfIndiaBounceRow = rows.find(function (row) {
    return row.bankName === 'Bank of India';
  });
  ok(
    bankOfIndiaBounceRow &&
      bankOfIndiaBounceRow.emiBounceChargeDisplay.details[0] ===
        'for a sanctioned loan amount up to ₹25,000' &&
      bankOfIndiaBounceRow.emiBounceDetailFootnote.indexOf(
        'The charge depends on the sanctioned loan amount.'
      ) >= 0,
    'EMI bounce slabs show the published non-bounce calculation basis'
  );
  var indusindRow = rows.find(function (row) {
    return row.bankName === 'IndusInd Bank';
  });
  ok(
    indusindRow &&
      indusindRow.emiBounceChargeDisplay.details.indexOf('+ Actual expenses') >= 0,
    'IndusInd Bank displays additional actual expenses'
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
      bomRow.prepaymentChargeDisplay.main === 'Not listed',
      'Bank of Maharashtra fixed own-funds prepayment follows CSV NA as not listed'
    );
    compare.applyPrepaymentMethodToRows(pnbFixed, compare.PREPAYMENT_METHOD_BT);
    ok(
      bomRow.prepaymentChargeDisplay.main === 'Not listed',
      'Bank of Maharashtra fixed balance-transfer prepayment follows CSV NA as not listed'
    );
  }
}
