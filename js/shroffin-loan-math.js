/**
 * Shroffin home-loan math helpers.
 * Assumptions (indicative estimates, not a sanction):
 * - Reducing balance, monthly compounding, constant rate for projections
 * - LTV by Agreement Value slabs (RBI ceilings, as taught on Guide · Property): ≤₹30L 90%, ₹30–75L 80%, >₹75L 75%
 * - FOIR bands are bank practice (not RBI): 40–60%, default 50%; net monthly income
 * - Floating-rate individual home loans: ₹0 prepayment charge (optional fee for fixed/BT)
 */
(function (root) {
  "use strict";

  function monthlyRate(annualPct) {
    if (!(annualPct > 0)) return 0;
    return annualPct / 100 / 12;
  }

  function monthsFromYears(years) {
    return Math.max(0, Math.round(Number(years) * 12));
  }

  function emiFromLoan(principal, annualRate, years) {
    var p = Number(principal);
    var n = monthsFromYears(years);
    if (!(p > 0) || !(n > 0)) return 0;
    var r = monthlyRate(annualRate);
    if (r <= 0) return p / n;
    var f = Math.pow(1 + r, n);
    return (p * r * f) / (f - 1);
  }

  function loanFromEmi(emi, annualRate, years) {
    var e = Number(emi);
    var n = monthsFromYears(years);
    if (!(e > 0) || !(n > 0)) return 0;
    var r = monthlyRate(annualRate);
    if (r <= 0) return e * n;
    return (e * (1 - Math.pow(1 + r, -n))) / r;
  }

  function tenureMonthsFromEmi(principal, annualRate, emi) {
    var p = Number(principal);
    var e = Number(emi);
    var r = monthlyRate(annualRate);
    if (!(p > 0) || !(e > 0)) return 0;
    if (r <= 0) return Math.ceil(p / e);
    if (e <= p * r) return Infinity;
    return Math.ceil(Math.log(e / (e - p * r)) / Math.log(1 + r));
  }

  /** RBI LTV ceiling by Agreement Value — same bands as Guide · Property. */
  function ltvCeilingForProperty(propertyValue) {
    var value = Number(propertyValue);
    if (!(value > 0)) return 0;
    if (value <= 3000000) return 0.9;
    if (value <= 7500000) return 0.8;
    return 0.75;
  }

  /** Max loan by property Agreement Value using RBI LTV ceilings. */
  function maxLoanForProperty(propertyValue) {
    var value = Number(propertyValue);
    if (!(value > 0)) return 0;
    return value * ltvCeilingForProperty(value);
  }

  function ltvRatioForLoan(loanAmount) {
    var loan = Number(loanAmount);
    if (!(loan > 0)) return 0;
    if (loan <= 3000000) return 0.9;
    if (loan <= 7500000) return 0.8;
    return 0.75;
  }

  function downPaymentForProperty(propertyValue) {
    var value = Number(propertyValue);
    var loan = maxLoanForProperty(value);
    return Math.max(0, value - loan);
  }

  function propertyFromLoanAndDown(loan, downPayment) {
    var l = Math.max(0, Number(loan) || 0);
    var d = Math.max(0, Number(downPayment) || 0);
    var fromCash = l + d;
    var fromLtv = l / (ltvRatioForLoan(l) || 0.75);
    if (d > 0) return Math.min(fromCash, fromLtv);
    return fromLtv;
  }

  function eligibility(opts) {
    var income = Math.max(0, Number(opts.income) || 0);
    var existingEmis = Math.max(0, Number(opts.existingEmis) || 0);
    var cardBalance = Math.max(0, Number(opts.cardBalance) || 0);
    var foirPct = Number(opts.foirPct);
    if (![40, 45, 50, 55, 60].includes(foirPct)) foirPct = 50;
    var rate = Number(opts.rate) || 0;
    var years = Number(opts.years) || 0;

    var maxAllEmis = income * (foirPct / 100);
    var cardLoad = cardBalance * 0.1;
    var homeEmiRoom = Math.max(0, maxAllEmis - existingEmis - cardLoad);
    var loan = loanFromEmi(homeEmiRoom, rate, years);

    return {
      foirPct: foirPct,
      maxAllEmis: maxAllEmis,
      homeEmiRoom: homeEmiRoom,
      eligibleLoan: loan
    };
  }

  /**
   * Guide · Loan amount: lower of property LTV cap and income EMI capacity.
   * FOIR bands and card-limits treatment match guide.html borrow estimate.
   * Optional co-applicant income/EMIs/card limits are added into the same FOIR math.
   */
  function guideLoanAmount(opts) {
    var price = Math.max(0, Number(opts.propertyValue) || 0);
    var income = Math.max(0, Number(opts.income) || 0);
    var existingEmis = Math.max(0, Number(opts.existingEmis) || 0);
    var cardLimits = Math.max(0, Number(opts.cardLimits) || 0);
    var foirPct = Number(opts.foirPct);
    if (![50, 55, 60, 65, 70].includes(foirPct)) foirPct = 55;
    var rate = Number(opts.rate) || 0;
    var years = Number(opts.years) || 0;
    var includeCo = !!opts.includeCoApplicant;
    var coIncome = includeCo ? Math.max(0, Number(opts.coIncome) || 0) : 0;
    var coExistingEmis = includeCo ? Math.max(0, Number(opts.coExistingEmis) || 0) : 0;
    var coCardLimits = includeCo ? Math.max(0, Number(opts.coCardLimits) || 0) : 0;

    var fromProperty = maxLoanForProperty(price);

    function incomeSide(totalIncome, totalEmis, totalCards) {
      var maxAllEmis = totalIncome * (foirPct / 100);
      var cardLoad = totalCards * 0.1;
      var homeEmiRoom = Math.max(0, maxAllEmis - totalEmis - cardLoad);
      return {
        maxAllEmis: maxAllEmis,
        homeEmiRoom: homeEmiRoom,
        fromIncome: loanFromEmi(homeEmiRoom, rate, years)
      };
    }

    var alone = incomeSide(income, existingEmis, cardLimits);
    var combined = incomeSide(
      income + coIncome,
      existingEmis + coExistingEmis,
      cardLimits + coCardLimits
    );
    var fromIncome = combined.fromIncome;
    var estimate = Math.min(fromProperty, fromIncome);
    var estimateAlone = Math.min(fromProperty, alone.fromIncome);
    var addedByCoApplicant = Math.max(0, fromIncome - alone.fromIncome);
    var addedToIndicative = Math.max(0, estimate - estimateAlone);

    return {
      foirPct: foirPct,
      fromProperty: fromProperty,
      fromIncome: fromIncome,
      fromIncomeAlone: alone.fromIncome,
      estimate: estimate,
      estimateAlone: estimateAlone,
      homeEmiRoom: combined.homeEmiRoom,
      maxAllEmis: combined.maxAllEmis,
      includeCoApplicant: includeCo,
      addedByCoApplicant: addedByCoApplicant,
      addedToIndicative: addedToIndicative,
      limiting: fromProperty <= fromIncome ? "property" : "income"
    };
  }

  function amortisationSchedule(principal, annualRate, years) {
    var p = Number(principal);
    var n = monthsFromYears(years);
    var emi = emiFromLoan(p, annualRate, years);
    var r = monthlyRate(annualRate);
    var rows = [];
    var balance = p;
    var totalInterest = 0;

    for (var m = 1; m <= n && balance > 0.005; m++) {
      var interest = balance * r;
      var principalPart = emi - interest;
      if (m === n || principalPart > balance) {
        principalPart = balance;
        emi = interest + principalPart;
      }
      balance = Math.max(0, balance - principalPart);
      totalInterest += interest;
      rows.push({
        month: m,
        emi: emi,
        interest: interest,
        principal: principalPart,
        balance: balance
      });
    }

    var byYear = [];
    rows.forEach(function (row) {
      var y = Math.ceil(row.month / 12);
      var bucket = byYear[y - 1];
      if (!bucket) {
        bucket = { year: y, interest: 0, principal: 0, emi: 0, endBalance: 0, months: [] };
        byYear[y - 1] = bucket;
      }
      bucket.interest += row.interest;
      bucket.principal += row.principal;
      bucket.emi += row.emi;
      bucket.endBalance = row.balance;
      bucket.months.push(row);
    });

    return {
      emi: emiFromLoan(p, annualRate, years),
      months: n,
      totalInterest: totalInterest,
      totalPayable: p + totalInterest,
      rows: rows,
      years: byYear
    };
  }

  function prepaymentImpact(opts) {
    var principal = Number(opts.principal);
    var rate = Number(opts.rate);
    var years = Number(opts.years);
    var lumpSum = Math.max(0, Number(opts.lumpSum) || 0);
    var extraEmi = Math.max(0, Number(opts.extraEmi) || 0);
    var fee = Math.max(0, Number(opts.fee) || 0);
    var mode = opts.mode === "reduceEmi" ? "reduceEmi" : "reduceTenure";

    var base = amortisationSchedule(principal, rate, years);
    var emi = base.emi;
    var r = monthlyRate(rate);
    var balanceAfter = Math.max(0, principal - lumpSum);

    if (!(balanceAfter > 0)) {
      return {
        mode: mode,
        baseInterest: base.totalInterest,
        newInterest: 0,
        interestSaved: Math.max(0, base.totalInterest - fee),
        monthsSaved: base.months,
        newEmi: 0,
        newMonths: 0,
        fee: fee
      };
    }

    var maxMonths = Math.max(base.months * 2, 600);

    if (mode === "reduceEmi") {
      // Keep remaining tenure the same. Recalculate EMI on the reduced balance.
      var tenureYears = years;
      var revisedEmi = emiFromLoan(balanceAfter, rate, tenureYears);
      var pay = revisedEmi + extraEmi;
      var bal = balanceAfter;
      var totalInterest = 0;
      var month = 0;
      while (bal > 0.005 && month < maxMonths) {
        month++;
        var interest = bal * r;
        if (pay <= interest + 1e-9) break;
        var principalPart = Math.min(bal, pay - interest);
        bal -= principalPart;
        totalInterest += interest;
      }
      // Tenure target is unchanged unless extra monthly payments clear the loan early.
      var targetMonths = monthsFromYears(tenureYears);
      var monthsSaved = Math.max(0, targetMonths - month);
      return {
        mode: mode,
        baseInterest: base.totalInterest,
        newInterest: totalInterest,
        interestSaved: Math.max(0, base.totalInterest - totalInterest - fee),
        monthsSaved: monthsSaved,
        newEmi: pay,
        newMonths: month,
        fee: fee
      };
    }

    // reduce tenure — keep original EMI (+ optional extra)
    var payKeep = emi + extraEmi;
    var bal2 = balanceAfter;
    var totalInterest2 = 0;
    var month2 = 0;
    while (bal2 > 0.005 && month2 < maxMonths) {
      month2++;
      var intPart = bal2 * r;
      if (payKeep <= intPart + 1e-9) break;
      var prin = Math.min(bal2, payKeep - intPart);
      bal2 -= prin;
      totalInterest2 += intPart;
    }

    return {
      mode: mode,
      baseInterest: base.totalInterest,
      newInterest: totalInterest2,
      interestSaved: Math.max(0, base.totalInterest - totalInterest2 - fee),
      monthsSaved: Math.max(0, base.months - month2),
      newEmi: payKeep,
      newMonths: month2,
      fee: fee
    };
  }

  function balanceTransfer(opts) {
    var outstanding = Number(opts.outstanding);
    var oldRate = Number(opts.oldRate);
    var newRate = Number(opts.newRate);
    var yearsLeft = Number(opts.yearsLeft);
    var fees = Math.max(0, Number(opts.fees) || 0);

    var stay = amortisationSchedule(outstanding, oldRate, yearsLeft);
    var move = amortisationSchedule(outstanding, newRate, yearsLeft);
    var interestSaved = stay.totalInterest - move.totalInterest;
    var netSaved = interestSaved - fees;

    return {
      oldEmi: stay.emi,
      newEmi: move.emi,
      interestSaved: interestSaved,
      fees: fees,
      netSaved: netSaved,
      oldTotalInterest: stay.totalInterest,
      newTotalInterest: move.totalInterest
    };
  }

  /**
   * Income-tax engine for FY 2025-26 / AY 2026-27 (Budget 2025 slabs).
   * Resident individual. Order: slab tax → surcharge (+ marginal relief) →
   * Section 87A rebate (+ marginal relief on the ₹12L / ₹5L cliff) → 4% cess.
   * Not a filing utility — planning estimate only.
   */
  var CESS_RATE = 0.04;
  var NEW_REGIME_SLABS = [
    { upTo: 400000, rate: 0 },
    { upTo: 800000, rate: 0.05 },
    { upTo: 1200000, rate: 0.1 },
    { upTo: 1600000, rate: 0.15 },
    { upTo: 2000000, rate: 0.2 },
    { upTo: 2400000, rate: 0.25 },
    { upTo: Infinity, rate: 0.3 }
  ];
  var OLD_EXEMPT = { below60: 250000, senior: 300000, superSenior: 500000 };

  function slabTaxFromBands(income, bands) {
    var ti = Math.max(0, Number(income) || 0);
    var tax = 0;
    var prev = 0;
    for (var i = 0; i < bands.length; i++) {
      var band = bands[i];
      var slice = Math.min(ti, band.upTo) - prev;
      if (slice > 0) tax += slice * band.rate;
      if (ti <= band.upTo) break;
      prev = band.upTo;
    }
    return tax;
  }

  function oldRegimeBands(ageBand) {
    var exempt =
      ageBand === "superSenior"
        ? OLD_EXEMPT.superSenior
        : ageBand === "senior"
          ? OLD_EXEMPT.senior
          : OLD_EXEMPT.below60;
    return [
      { upTo: exempt, rate: 0 },
      { upTo: 500000, rate: 0.05 },
      { upTo: 1000000, rate: 0.2 },
      { upTo: Infinity, rate: 0.3 }
    ];
  }

  function surchargeRate(income, regime) {
    var ti = Math.max(0, Number(income) || 0);
    if (ti <= 5000000) return 0;
    if (ti <= 10000000) return 0.1;
    if (ti <= 20000000) return 0.15;
    if (regime === "new") return 0.25;
    if (ti <= 50000000) return 0.25;
    return 0.37;
  }

  function surchargeThresholds(regime) {
    if (regime === "new") {
      return [
        { limit: 5000000, rate: 0 },
        { limit: 10000000, rate: 0.1 },
        { limit: 20000000, rate: 0.15 },
        { limit: Infinity, rate: 0.25 }
      ];
    }
    return [
      { limit: 5000000, rate: 0 },
      { limit: 10000000, rate: 0.1 },
      { limit: 20000000, rate: 0.15 },
      { limit: 50000000, rate: 0.25 },
      { limit: Infinity, rate: 0.37 }
    ];
  }

  function taxPlusSurchargeAt(income, slabTaxFn, regime) {
    var base = slabTaxFn(income);
    var rate = surchargeRate(income, regime);
    return { base: base, surcharge: base * rate, total: base + base * rate };
  }

  /** Extra tax+surcharge when crossing a surcharge slab must not exceed extra income. */
  function applySurchargeMarginalRelief(income, slabTaxFn, regime) {
    var actual = taxPlusSurchargeAt(income, slabTaxFn, regime);
    var thresholds = surchargeThresholds(regime);
    var relieved = actual.total;
    for (var i = 1; i < thresholds.length; i++) {
      var limit = thresholds[i - 1].limit;
      if (!(income > limit)) continue;
      var atLimit = taxPlusSurchargeAt(limit, slabTaxFn, regime);
      var capped = atLimit.total + (income - limit);
      if (capped < relieved) relieved = capped;
    }
    var surcharge = Math.max(0, relieved - actual.base);
    return { base: actual.base, surcharge: surcharge, total: actual.base + surcharge };
  }

  function apply87A(income, taxBeforeRebate, regime) {
    var ti = Math.max(0, Number(income) || 0);
    var tax = Math.max(0, taxBeforeRebate);
    var rebate = 0;
    var note = "";

    if (regime === "new") {
      if (ti <= 1200000) {
        rebate = Math.min(tax, 60000);
        note = "Section 87A rebate (new regime). Taxable income up to ₹12 lakh.";
      } else {
        // Marginal relief on the rebate cliff: tax before cess ≤ income − ₹12 lakh.
        var cliffCap = ti - 1200000;
        if (tax > cliffCap) {
          rebate = tax - cliffCap;
          note =
            "Marginal relief near the Section 87A threshold (new regime). Tax before cess is limited to income above ₹12 lakh.";
        }
      }
    } else if (ti <= 500000) {
      rebate = Math.min(tax, 12500);
      note = "Section 87A rebate (old regime). Taxable income up to ₹5 lakh.";
    }

    return {
      rebate: rebate,
      taxAfterRebate: Math.max(0, tax - rebate),
      note: note
    };
  }

  /**
   * Full tax on total income for the chosen regime.
   * ageBand: 'below60' | 'senior' | 'superSenior' (old regime exemption only).
   */
  function computeIncomeTax(totalIncome, opts) {
    opts = opts || {};
    var regime = opts.regime === "new" ? "new" : "old";
    var ageBand = opts.ageBand || "below60";
    var ti = Math.max(0, Number(totalIncome) || 0);

    var slabTaxFn =
      regime === "new"
        ? function (x) {
            return slabTaxFromBands(x, NEW_REGIME_SLABS);
          }
        : function (x) {
            return slabTaxFromBands(x, oldRegimeBands(ageBand));
          };

    var withSurcharge = applySurchargeMarginalRelief(ti, slabTaxFn, regime);
    var rebatePart = apply87A(ti, withSurcharge.total, regime);
    var taxBeforeCess = Math.round(rebatePart.taxAfterRebate);
    var cess = Math.round(taxBeforeCess * CESS_RATE);
    var total = taxBeforeCess + cess;

    return {
      taxableIncome: ti,
      regime: regime,
      slabTax: Math.round(withSurcharge.base),
      surcharge: Math.round(withSurcharge.surcharge),
      rebate: Math.round(rebatePart.rebate),
      rebateNote: rebatePart.note,
      taxBeforeCess: taxBeforeCess,
      cess: cess,
      total: total
    };
  }

  /**
   * Fold house-property income into other taxable income.
   * New regime: HP loss does not cut other heads. Old: set-off capped at ₹2 lakh.
   */
  function combineWithHouseProperty(otherIncome, hpIncome, regime) {
    var other = Math.max(0, Number(otherIncome) || 0);
    var hp = Number(hpIncome) || 0;
    if (hp >= 0) return other + hp;
    if (regime === "new") return other;
    return Math.max(0, other - Math.min(-hp, 200000));
  }

  /**
   * Home loan tax estimate aligned with Guide (tax-benefits.html) + FY 2025-26 tax math.
   * Interest: Section 22. Principal: Schedule XV (old regime only).
   * Rupee effect = tax(income before claims) − tax(income after claims), with cess.
   */
  function taxSavings(opts) {
    var principalPaidYear = Math.max(0, Number(opts.principalPaidYear) || 0);
    var interestPaidYear = Math.max(0, Number(opts.interestPaidYear) || 0);
    var regime = opts.regime === "new" ? "new" : "old";
    var selfOccupied = opts.selfOccupied !== false;
    var purpose = opts.purpose === "repair" ? "repair" : "buyBuild";
    var readyWithin5Years = opts.readyWithin5Years !== false;
    var usedBasket = Math.max(0, Number(opts.usedPrincipalBasket) || 0);
    var ageBand = opts.ageBand || "below60";
    var taxableIncomeBefore = Math.max(0, Number(opts.taxableIncomeBefore) || 0);
    var annualRent = Math.max(0, Number(opts.annualRent) || 0);

    var interestDeduction = 0;
    var principalDeduction = 0;
    var interestNote = "";
    var principalNote = "";
    var taxSavedNote = "";
    var interestCap = null;

    if (regime === "new" && selfOccupied) {
      interestNote = "New tax regime. Self occupied interest under Section 22 cannot be claimed.";
      principalNote = "New tax regime. Principal under Schedule XV cannot be claimed.";
      taxSavedNote =
        "Under the new tax regime these home loan claims do not change tax on self occupied property. Estimate is ₹0.";
      var zeroTax = computeIncomeTax(taxableIncomeBefore, { regime: regime, ageBand: ageBand });
      return {
        regime: regime,
        interestDeduction: 0,
        principalDeduction: 0,
        taxSaved: 0,
        canEstimateRupees: true,
        interestCap: 0,
        interestNote: interestNote,
        principalNote: principalNote,
        taxSavedNote: taxSavedNote,
        taxBefore: zeroTax,
        taxAfter: zeroTax
      };
    }

    // Interest — Section 22
    if (selfOccupied) {
      interestCap = 200000;
      if (purpose === "repair") {
        interestCap = 30000;
        interestNote = "Repair, renewal, or reconstruction. Section 22 interest limit is ₹30,000 a year.";
      } else if (!readyWithin5Years) {
        interestCap = 30000;
        interestNote =
          "Buy or build loan where the home was not ready within 5 years. Section 22 interest limit is ₹30,000 a year.";
      } else {
        interestNote =
          "Self occupied under the old tax regime. Section 22 interest limit is ₹2 lakh a year when the home was ready within 5 years.";
      }
      interestDeduction = Math.min(interestPaidYear, interestCap);
    } else {
      interestDeduction = interestPaidYear;
      if (regime === "new") {
        interestNote =
          "Let out under the new tax regime. Interest can reduce house property income after the 30% standard deduction on rent. A house property loss usually cannot cut salary or other heads.";
      } else {
        interestNote =
          "Let out under the old tax regime. Section 22 has no fixed upper cap on interest. House property loss set off against other income is limited to ₹2 lakh a year.";
      }
    }

    // Principal — Schedule XV, old regime only
    if (regime === "old") {
      var principalRoom = Math.max(0, 150000 - usedBasket);
      principalDeduction = Math.min(principalPaidYear, principalRoom);
      principalNote =
        "Schedule XV principal repayment (old tax regime). Shared ₹1.5 lakh basket with EPF, life insurance, and other eligible items. Starts after possession.";
    } else {
      principalDeduction = 0;
      principalNote = "New tax regime. Principal under Schedule XV cannot be claimed.";
    }

    var taxBefore = null;
    var taxAfter = null;
    var taxSaved = null;
    var canEstimateRupees = true;
    var incomeBefore = taxableIncomeBefore;
    var incomeAfter = taxableIncomeBefore;

    if (!selfOccupied) {
      // Need rent to model house property income and loss set-off correctly.
      if (!(annualRent > 0) && !(taxableIncomeBefore > 0)) {
        canEstimateRupees = false;
        taxSavedNote =
          "Enter taxable income and annual rent so tax can be worked with house property rules, cess, and Section 87A.";
      } else if (!(annualRent > 0)) {
        canEstimateRupees = false;
        taxSavedNote =
          "Enter annual rent for a let out home. Interest is applied against house property income (rent less 30% standard deduction), not as a flat slab shortcut.";
      } else {
        var hpBeforeInterest = annualRent * 0.7;
        var hpAfterInterest = hpBeforeInterest - interestDeduction;
        // taxableIncomeBefore = other heads only (salary etc.), before Sch XV principal
        var otherBeforePrincipal = taxableIncomeBefore;
        incomeBefore = combineWithHouseProperty(otherBeforePrincipal, hpBeforeInterest, regime);
        var afterHp = combineWithHouseProperty(otherBeforePrincipal, hpAfterInterest, regime);
        incomeAfter = Math.max(0, afterHp - principalDeduction);
        taxBefore = computeIncomeTax(incomeBefore, { regime: regime, ageBand: ageBand });
        taxAfter = computeIncomeTax(incomeAfter, { regime: regime, ageBand: ageBand });
        taxSaved = Math.max(0, taxBefore.total - taxAfter.total);
        taxSavedNote =
          "Tax with claims minus tax without claims. Uses FY 2025-26 / AY 2026-27 slabs, surcharge where due, Section 87A rebate and marginal relief, and 4% Health and Education Cess. Municipal taxes on the property are not entered here. Not your refund.";
      }
    } else {
      // Old + self-occupied
      incomeBefore = taxableIncomeBefore;
      incomeAfter = Math.max(0, taxableIncomeBefore - interestDeduction - principalDeduction);
      taxBefore = computeIncomeTax(incomeBefore, { regime: regime, ageBand: ageBand });
      taxAfter = computeIncomeTax(incomeAfter, { regime: regime, ageBand: ageBand });
      taxSaved = Math.max(0, taxBefore.total - taxAfter.total);
      taxSavedNote =
        "Tax with claims minus tax without claims. Uses FY 2025-26 / AY 2026-27 old regime slabs for your age band, surcharge where due, Section 87A rebate, and 4% Health and Education Cess. Enter taxable income after standard deduction and other claims, before Section 22 and Schedule XV for this loan. Not your refund.";
    }

    return {
      regime: regime,
      interestDeduction: interestDeduction,
      principalDeduction: principalDeduction,
      taxSaved: taxSaved,
      canEstimateRupees: canEstimateRupees,
      interestCap: interestCap,
      interestNote: interestNote,
      principalNote: principalNote,
      taxSavedNote: taxSavedNote,
      taxBefore: taxBefore,
      taxAfter: taxAfter,
      incomeBefore: incomeBefore,
      incomeAfter: incomeAfter
    };
  }

  function firstYearPrincipalInterest(principal, annualRate, years) {
    var sched = amortisationSchedule(principal, annualRate, years);
    var year = sched.years[0] || { principal: 0, interest: 0 };
    return { principal: year.principal, interest: year.interest, emi: sched.emi };
  }

  root.ShroffinLoanMath = {
    emiFromLoan: emiFromLoan,
    loanFromEmi: loanFromEmi,
    tenureMonthsFromEmi: tenureMonthsFromEmi,
    ltvCeilingForProperty: ltvCeilingForProperty,
    maxLoanForProperty: maxLoanForProperty,
    ltvRatioForLoan: ltvRatioForLoan,
    downPaymentForProperty: downPaymentForProperty,
    propertyFromLoanAndDown: propertyFromLoanAndDown,
    eligibility: eligibility,
    guideLoanAmount: guideLoanAmount,
    amortisationSchedule: amortisationSchedule,
    prepaymentImpact: prepaymentImpact,
    balanceTransfer: balanceTransfer,
    computeIncomeTax: computeIncomeTax,
    taxSavings: taxSavings,
    firstYearPrincipalInterest: firstYearPrincipalInterest,
    FOIR_BANDS: [40, 45, 50, 55, 60]
  };
})(typeof window !== "undefined" ? window : globalThis);
