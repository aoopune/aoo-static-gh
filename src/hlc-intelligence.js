// src/hlc-intelligence.js
"use strict";

// ─── Re-use exported helpers from the parent bundle ──────────────────────────
// hlc-intelligence is required() by home-loan-compare.js which already exports
// selectedRateTypes, emiFromLoan, missedEmiMonthTotal, loanAmountWalkModel, etc.
// We receive them via the ctx object, not a direct require, keeping this module
// self-contained and testable without a DOM.

var CIBIL_UPGRADE_STEPS = [700, 725, 750, 800, 825]; // real band boundaries from data

var HORIZON = { NOW: "Now", MONTHS: "Over months", BEFORE: "Before you apply" };

function finiteOr(v, def) { return (Number.isFinite(v) && v === v) ? v : def; }
function roundInr(n) { return Math.round(n); }
function lakhStr(n) {
  var l = n / 100000;
  return (l < 1 ? Math.round(n).toLocaleString("en-IN") : (Math.round(l * 10) / 10) + " lakh");
}
function moStr(n) { return "\u20b9" + Math.abs(Math.round(n)).toLocaleString("en-IN") + "/mo"; }
function inrStr(n) { return "\u20b9" + Math.abs(roundInr(n)).toLocaleString("en-IN"); }
function pctStr(n) { return Number(n).toFixed(2) + "%"; }

// ─── matchOffersSync is injected via ctx.matchFnSync ─────────────────────────
// Counterfactual query builder — clones query, mutates only the target field,
// derives dependent fields via the same helpers used in queryFromInputs.
function cfQuery(base, patch) {
  var q = Object.assign({}, base, { productFilters: Object.assign({}, base.productFilters) });
  Object.assign(q.productFilters, patch.productFilters || {});
  // Re-derive rate/facility/bank types if productFilters changed
  if (patch.productFilters) {
    var f = q.productFilters;
    var rates = [];
    if (f.rateFloating) rates.push("Floating");
    if (f.fixedRate)    rates.push("Fixed");
    q.rateTypes = rates.length ? rates : ["Floating", "Fixed"];
    q.womenApplicant = Boolean(f.womenApplicant);
    q.greenHome      = Boolean(f.greenHome);
  }
  if (patch.cibilScore !== undefined) q.cibilScore = patch.cibilScore;
  if (patch.occupation !== undefined) q.occupation  = patch.occupation;
  if (patch.existingEmis !== undefined) q.existingEmis = patch.existingEmis;
  return q;
}

function bestRate(rows) {
  var r = Infinity;
  for (var i = 0; i < rows.length; i++) {
    var v = finiteOr(rows[i].effectiveRoiPct, Infinity);
    if (v < r) r = v;
  }
  return r === Infinity ? null : r;
}
function bestRateRow(rows) {
  var best = null;
  var r = Infinity;
  for (var i = 0; i < rows.length; i++) {
    var v = finiteOr(rows[i].effectiveRoiPct, Infinity);
    if (v < r) {
      r = v;
      best = rows[i];
    }
  }
  return best;
}
function bestEmi(rows) {
  var e = Infinity;
  for (var i = 0; i < rows.length; i++) {
    var v = finiteOr(rows[i].emi, Infinity);
    if (v < e) e = v;
  }
  return e === Infinity ? null : e;
}

// ─── Tip A: CIBIL band upgrade ────────────────────────────────────────────────
// Pattern: straight news (score + both rates in title). Body = gap ₹ + scope.
function tipCibilBand(ctx) {
  var q = ctx.query; var rows = ctx.rows; var matchFn = ctx.matchFnSync;
  if (!q.cibilScore || q.cibilScore >= 825) return null;
  var currentBestRate = bestRate(rows);
  if (!currentBestRate) return null;
  var nextStep = null;
  for (var i = 0; i < CIBIL_UPGRADE_STEPS.length; i++) {
    if (CIBIL_UPGRADE_STEPS[i] > q.cibilScore) { nextStep = CIBIL_UPGRADE_STEPS[i]; break; }
  }
  if (!nextStep) return null;
  var cfRows = matchFn(cfQuery(q, { cibilScore: nextStep }));
  var cfRate = bestRate(cfRows);
  if (!cfRate || cfRate >= currentBestRate) return null;
  var rateDrop = +(currentBestRate - cfRate).toFixed(2);
  if (rateDrop < 0.05) return null; // suppress noise < 5 bps
  var currentBestEmi = bestEmi(rows);
  var cfBestEmi = bestEmi(cfRows);
  var emiDelta = currentBestEmi && cfBestEmi ? roundInr(currentBestEmi - cfBestEmi) : 0;
  if (emiDelta < 50) return null;
  var tenureYears = finiteOr(q.tenureYears, 20);
  var totalSaving = emiDelta * tenureYears * 12;
  return {
    kind: "cibil",
    horizon: HORIZON.BEFORE,
    heading: "At " + q.cibilScore + " CIBIL your best rate is " + pctStr(currentBestRate) + " \u2014 " + nextStep + " cuts it to " + pctStr(cfRate),
    body: "That " + pctStr(rateDrop) + " gap is " + moStr(emiDelta) + " (\u20b9" + lakhStr(totalSaving) + " over " + tenureYears + " years) on your matched list at CIBIL " + nextStep + ". Banks still set final terms.",
    rupeeImpact: totalSaving
  };
}

// ─── Tip B: Occupation — self-employed switch ─────────────────────────────────
// Pattern: straight news (match counts + optional rate/EMI). Body = so-what.
function tipOccupation(ctx) {
  var q = ctx.query; var rows = ctx.rows; var matchFn = ctx.matchFnSync;
  if (!q.occupation || q.occupation === "Salaried") return null;
  var cfRows = matchFn(cfQuery(q, { occupation: "Salaried" }));
  var delta = cfRows.length - rows.length;
  if (delta <= 0) return null;
  var currentBestRate = bestRate(rows);
  var cfRate = bestRate(cfRows);
  var rateDrop = (currentBestRate && cfRate && cfRate < currentBestRate) ? +(currentBestRate - cfRate).toFixed(2) : 0;
  var emiDelta = rateDrop > 0 ? roundInr((bestEmi(rows) || 0) - (bestEmi(cfRows) || 0)) : 0;
  if (delta < 2 && emiDelta < 50) return null;
  var tenureYears = finiteOr(q.tenureYears, 20);
  var salariedCount = cfRows.length;
  var heading = "Self-employed matches " + rows.length + " bank" + (rows.length === 1 ? "" : "s") + " \u2014 salaried co-applicant reaches " + salariedCount;
  if (rateDrop > 0.05 && currentBestRate && cfRate) {
    heading += "; best rate " + pctStr(currentBestRate) + " \u2192 " + pctStr(cfRate);
  }
  var body = "That is " + delta + " more option" + (delta === 1 ? "" : "s") + " on the salaried counterfactual";
  if (rateDrop > 0.05) {
    body += ", and " + moStr(emiDelta) + " less EMI at the new best rate";
  }
  body += ". Banks price self-employed income tighter; a salaried co-applicant widens the list.";
  return {
    kind: "occupation",
    horizon: HORIZON.MONTHS,
    heading: heading,
    body: body,
    rupeeImpact: emiDelta * tenureYears * 12 || delta * 1000
  };
}

// ─── Tip C: Women applicant discount ─────────────────────────────────────────
// Pattern: straight news (both rates). Body = ₹ proof + KYC note. Ban "several".
function tipWomen(ctx) {
  var q = ctx.query; var rows = ctx.rows; var matchFn = ctx.matchFnSync;
  if (q.productFilters && q.productFilters.womenApplicant) return null;
  var cfPatch = { productFilters: { womenApplicant: true } };
  var cfRows = matchFn(cfQuery(q, cfPatch));
  var currentBestRate = bestRate(rows); var cfRate = bestRate(cfRows);
  if (!cfRate || !currentBestRate || cfRate >= currentBestRate) return null;
  var rateDrop = +(currentBestRate - cfRate).toFixed(2);
  if (rateDrop < 0.05) return null;
  var emiDelta = roundInr((bestEmi(rows) || 0) - (bestEmi(cfRows) || 0));
  if (emiDelta < 100) return null;
  var tenureYears = finiteOr(q.tenureYears, 20);
  var total = emiDelta * tenureYears * 12;
  var cfBest = bestRateRow(cfRows);
  var bankClause = cfBest && cfBest.bankName ? " at " + cfBest.bankName : "";
  return {
    kind: "women",
    horizon: HORIZON.BEFORE,
    heading: "Women as primary: best rate on your list " + pctStr(currentBestRate) + " \u2192 " + pctStr(cfRate) + bankClause,
    body: "That " + pctStr(rateDrop) + " cut is " + moStr(emiDelta) + " (\u20b9" + lakhStr(total) + " over " + tenureYears + " years) on the women-applicant counterfactual. Standard KYC is enough; no special proof.",
    rupeeImpact: total
  };
}

// ─── Tip D: Existing EMI headroom ─────────────────────────────────────────────
// Pattern: straight news (existing EMI + both loan limits). Body = eligibility lever.
function tipExistingEmis(ctx) {
  var q = ctx.query;
  if (!q.existingEmis || q.existingEmis < 5000) return null;
  var rows = ctx.rows; var matchFn = ctx.matchFnSync;
  var cfRows = matchFn(cfQuery(q, { existingEmis: 0 }));
  var currentLoan = rows.length ? finiteOr(rows[0].loanAmount, 0) : 0;
  var cfLoan = cfRows.length ? finiteOr(cfRows[0].loanAmount, 0) : 0;
  var loanDelta = cfLoan - currentLoan;
  if (loanDelta < 100000) return null;
  return {
    kind: "existingEmis",
    horizon: HORIZON.NOW,
    heading: moStr(q.existingEmis) + " EMIs cap you at \u20b9" + lakhStr(currentLoan) + " \u2014 clear them for \u20b9" + lakhStr(cfLoan),
    body: "Banks count existing EMIs against income. That \u20b9" + lakhStr(loanDelta) + " gap is the eligibility difference on this profile between current EMIs and cleared EMIs.",
    rupeeImpact: loanDelta
  };
}

// ─── Tip E: Age × tenure trap ─────────────────────────────────────────────────
// Pattern: angle (asked vs list cap + EMI). Scope to matched rows — never "most banks".
function tipAgeTenure(ctx) {
  var q = ctx.query; var rows = ctx.rows;
  if (!q.age || !q.tenureYears) return null;
  var trapped = rows.filter(function(r) { return r.tenureYears < q.tenureYears - 0.5; });
  if (trapped.length < 2) return null;
  var emi0 = bestEmi(rows);
  var maxActualTenure = 0;
  for (var i = 0; i < rows.length; i++) {
    var t = finiteOr(rows[i].tenureYears, 0);
    if (t > maxActualTenure) maxActualTenure = t;
  }
  if (!maxActualTenure || !emi0) return null;
  var forcedEmi = emi0;
  var fullTenureEmi = null;
  for (var j = 0; j < rows.length; j++) {
    var r = rows[j];
    if (!r.loanAmount) continue;
    var roiDec = finiteOr(r.roiDecimal, null);
    if (roiDec == null) {
      var pct = finiteOr(r.effectiveRoiPct, null);
      if (pct == null) continue;
      roiDec = pct / 100;
    }
    if (ctx.helpers && ctx.helpers.emiFromLoan) {
      fullTenureEmi = ctx.helpers.emiFromLoan(r.loanAmount, roiDec, q.tenureYears);
      forcedEmi = ctx.helpers.emiFromLoan(r.loanAmount, roiDec, maxActualTenure);
    }
    break;
  }
  if (!fullTenureEmi || forcedEmi <= fullTenureEmi + 100) return null;
  var emiDiff = roundInr(forcedEmi - fullTenureEmi);
  var trappedCount = trapped.length;
  return {
    kind: "ageTenure",
    horizon: HORIZON.NOW,
    heading: "You asked for " + q.tenureYears + " years \u2014 " + trappedCount + " banks on your list cap you at " + maxActualTenure + ", EMI up " + moStr(emiDiff),
    body: "Age rules shorten tenure on those " + trappedCount + " matches, so monthly cost jumps on this list. Banks still set final terms.",
    rupeeImpact: emiDiff * maxActualTenure * 12
  };
}

// ─── Tip F: Missed-EMI penalty spread ────────────────────────────────────────
// Pattern: straight news (both banks + both ₹). Body = spread meaning.
function tipMissPenalty(ctx) {
  var rows = ctx.rows;
  if (rows.length < 2) return null;
  var totals = rows.map(function(r) {
    return { bank: r.bankName, total: finiteOr(r.missedEmiTotal, 0) };
  }).filter(function(x) { return x.total > 0; });
  if (totals.length < 2) return null;
  totals.sort(function(a, b) { return a.total - b.total; });
  var low = totals[0]; var high = totals[totals.length - 1];
  var spread = high.total - low.total;
  if (spread < 500) return null;
  return {
    kind: "missPenalty",
    horizon: HORIZON.NOW,
    heading: "One missed EMI: " + inrStr(low.total) + " at " + low.bank + ", " + inrStr(high.total) + " at " + high.bank,
    body: "Same miss, " + inrStr(spread) + " apart on your list. Penalty size is a day-one risk difference, not a rate story.",
    rupeeImpact: spread
  };
}

// ─── Tip G: Floating vs fixed ─────────────────────────────────────────────────
// Pattern: straight news + judgment (filter state + both rates). Body = ₹ + mechanism.
function tipFixedVsFloating(ctx) {
  var q = ctx.query; var rows = ctx.rows; var matchFn = ctx.matchFnSync;
  var allFixed = rows.length > 0 && rows.every(function(r) { return r.rateType === "Fixed"; });
  if (!allFixed) return null;
  var cfPatch = { productFilters: { rateFloating: true, fixedRate: false } };
  var cfRows = matchFn(cfQuery(q, cfPatch));
  if (!cfRows.length) return null;
  var cfRate = bestRate(cfRows); var curRate = bestRate(rows);
  if (!cfRate || !curRate || cfRate >= curRate) return null;
  var rateDrop = +(curRate - cfRate).toFixed(2);
  if (rateDrop < 0.1) return null;
  var emiDelta = roundInr((bestEmi(rows) || 0) - (bestEmi(cfRows) || 0));
  var tenureYears = finiteOr(q.tenureYears, 20);
  var total = emiDelta * tenureYears * 12;
  return {
    kind: "fixedVsFloating",
    horizon: HORIZON.NOW,
    heading: "Your filter is fixed-only at " + pctStr(curRate) + " \u2014 floating starts at " + pctStr(cfRate),
    body: "That is " + moStr(emiDelta) + " less now (\u20b9" + lakhStr(total) + " over the term) on the floating counterfactual for this profile. Fixed locks the rate; floating tracks RBI\u2019s repo.",
    rupeeImpact: total
  };
}

// ─── Tip H: Green home discount ──────────────────────────────────────────────
// Pattern: straight news (both rates). Body = ₹. Ban "some banks".
function tipGreen(ctx) {
  var q = ctx.query; var rows = ctx.rows; var matchFn = ctx.matchFnSync;
  if (q.productFilters && q.productFilters.greenHome) return null;
  var cfRows = matchFn(cfQuery(q, { productFilters: { greenHome: true } }));
  var cfRate = bestRate(cfRows); var curRate = bestRate(rows);
  if (!cfRate || !curRate || cfRate >= curRate) return null;
  var rateDrop = +(curRate - cfRate).toFixed(2);
  if (rateDrop < 0.05) return null;
  var emiDelta = roundInr((bestEmi(rows) || 0) - (bestEmi(cfRows) || 0));
  if (emiDelta < 100) return null;
  var tenureYears = finiteOr(q.tenureYears, 20);
  var cfBest = bestRateRow(cfRows);
  var bankClause = cfBest && cfBest.bankName ? " at " + cfBest.bankName : "";
  return {
    kind: "green",
    horizon: HORIZON.BEFORE,
    heading: "Green-rated property: best rate on your list " + pctStr(curRate) + " \u2192 " + pctStr(cfRate) + bankClause,
    body: "That " + pctStr(rateDrop) + " cut is " + moStr(emiDelta) + " every month on the green-home counterfactual (IGBC / GRIHA). Banks still set final terms.",
    rupeeImpact: emiDelta * tenureYears * 12
  };
}

// ─── Tip I: Processing fee spread ────────────────────────────────────────────
// Pattern: straight news (both banks + both ₹). Already ₹-led; name actors in title.
function tipProcessingFee(ctx) {
  var rows = ctx.rows;
  if (rows.length < 2) return null;
  var fees = rows.map(function(r) {
    return { bank: r.bankName, fee: finiteOr(r.processingFee, -1) };
  }).filter(function(x) { return x.fee >= 0; });
  if (fees.length < 2) return null;
  fees.sort(function(a, b) { return a.fee - b.fee; });
  var low = fees[0]; var high = fees[fees.length - 1];
  var spread = high.fee - low.fee;
  if (spread < 5000) return null;
  return {
    kind: "processingFee",
    horizon: HORIZON.NOW,
    heading: "Processing fee: " + inrStr(low.fee) + " at " + low.bank + ", " + inrStr(high.fee) + " at " + high.bank,
    body: "Day-one gap of " + inrStr(spread) + " on your list before the first EMI. Fee size does not change the rate — it changes cash out at sanction.",
    rupeeImpact: spread
  };
}

// ─── Tip J: Government charges at sanction ───────────────────────────────────
// Uses governmentCharges total from the enriched pipeline (same as Charges tab).
function tipGovernmentCharges(ctx) {
  var rows = ctx.rows;
  if (rows.length < 2) return null;
  var totals = rows.map(function(r) {
    return { bank: r.bankName, total: finiteOr(r.governmentCharges, -1) };
  }).filter(function(x) { return x.total >= 0; });
  if (totals.length < 2) return null;
  totals.sort(function(a, b) { return a.total - b.total; });
  var low = totals[0];
  var high = totals[totals.length - 1];
  var spread = high.total - low.total;
  if (spread < 1000) return null;
  return {
    kind: "governmentCharges",
    horizon: HORIZON.NOW,
    heading: "Government charges at sanction: " + inrStr(low.total) + " at " + low.bank + ", " + inrStr(high.total) + " at " + high.bank,
    body: "Stamp duty, CERSAI, and other government fees on your list differ by " + inrStr(spread) + " for this loan amount and state. These sit outside the bank processing fee.",
    rupeeImpact: spread
  };
}

// ─── Tip K: Part-prepayment power ────────────────────────────────────────────
// Pattern: straight news (prepay ₹ + EMI before/after). Rules + charge from enriched row.
function tipPrepayment(ctx) {
  var rows = ctx.rows;
  if (!rows.length) return null;
  var simulate = ctx.helpers && ctx.helpers.simulatePartPrepaymentScenario;
  if (typeof simulate !== "function") return null;

  var leader = bestRateRow(rows);
  var scenario = leader ? simulate(leader, ctx.helpers) : null;
  var targetRow = leader;
  if (!scenario) {
    for (var i = 0; i < rows.length; i++) {
      var candidate = simulate(rows[i], ctx.helpers);
      if (candidate) {
        scenario = candidate;
        targetRow = rows[i];
        break;
      }
    }
  }
  if (!scenario || !targetRow) return null;

  var bankLabel = scenario.bankName || targetRow.bankName || "your top match";
  var body = "That EMI cut is \u20b9" + lakhStr(scenario.lifetimeSaving) + " over the remaining term on " + bankLabel + " at the current rate path";
  if (scenario.prepayCharge > 0) {
    body += ", minus " + inrStr(scenario.prepayCharge) + " prepayment charge on this amount (\u20b9" + lakhStr(scenario.netSaving) + " net)";
  }
  body += ".";
  if (scenario.constraintNotes && scenario.constraintNotes.length) {
    body += " " + scenario.constraintNotes.join(". ") + ".";
  }

  return {
    kind: "prepayment",
    horizon: HORIZON.MONTHS,
    heading: inrStr(scenario.prepayAmount) + " prepayment at year " + scenario.year + " cuts EMI from " + moStr(scenario.emiBefore) + " to " + moStr(scenario.emiAfter),
    body: body,
    rupeeImpact: scenario.netSaving
  };
}

function secondBestRateRow(rows) {
  var rated = [];
  for (var i = 0; i < rows.length; i++) {
    var v = finiteOr(rows[i].effectiveRoiPct, null);
    if (v != null) rated.push(rows[i]);
  }
  if (rated.length < 2) return null;
  rated.sort(function(a, b) { return a.effectiveRoiPct - b.effectiveRoiPct; });
  var bestRate = rated[0].effectiveRoiPct;
  for (var j = 1; j < rated.length; j++) {
    if (rated[j].effectiveRoiPct > bestRate + 0.0001) return rated[j];
  }
  return null;
}

function rateSpreadPct(rows) {
  var lo = bestRate(rows);
  if (lo == null) return null;
  var hi = lo;
  for (var i = 0; i < rows.length; i++) {
    var v = finiteOr(rows[i].effectiveRoiPct, null);
    if (v != null && v > hi) hi = v;
  }
  return +(hi - lo).toFixed(2);
}

function extremumOnRows(rows, getter) {
  var entries = [];
  for (var i = 0; i < rows.length; i++) {
    var v = getter(rows[i]);
    if (v != null && Number.isFinite(v)) {
      entries.push({ row: rows[i], bank: rows[i].bankName, value: v });
    }
  }
  if (entries.length < 2) return null;
  entries.sort(function(a, b) { return a.value - b.value; });
  var low = entries[0];
  var high = entries[entries.length - 1];
  return { low: low, high: high, gap: high.value - low.value };
}

function leaderIsWorstOn(rows, leader, getter, minGap) {
  var ex = extremumOnRows(rows, getter);
  if (!ex || ex.gap < minGap) return null;
  var leaderVal = getter(leader);
  if (leaderVal == null || !Number.isFinite(leaderVal)) return null;
  if (leaderVal < ex.high.value - 0.001) return null;
  return {
    leaderValue: leaderVal,
    lowValue: ex.low.value,
    lowBank: ex.low.bank,
    gap: ex.gap
  };
}

var STATUS_THRESHOLDS = {
  rateSpreadTight: 0.30,
  rateEdge: 0.15,
  processingFeeGap: 5000,
  governmentChargesGap: 1000,
  missedEmiGap: 500
};

function pickLeaderCostOutlier(rows, leader) {
  var candidates = [];
  var missed = leaderIsWorstOn(rows, leader, function(r) {
    return finiteOr(r.missedEmiTotal, null);
  }, STATUS_THRESHOLDS.missedEmiGap);
  if (missed) {
    candidates.push({
      kind: "missedEmi",
      gap: missed.gap,
      leaderValue: missed.leaderValue,
      lowBank: missed.lowBank,
      priority: missed.gap
    });
  }
  var fee = leaderIsWorstOn(rows, leader, function(r) {
    var f = finiteOr(r.processingFee, -1);
    return f >= 0 ? f : null;
  }, STATUS_THRESHOLDS.processingFeeGap);
  if (fee) {
    candidates.push({
      kind: "processingFee",
      gap: fee.gap,
      leaderValue: fee.leaderValue,
      lowBank: fee.lowBank,
      priority: fee.gap
    });
  }
  var govt = leaderIsWorstOn(rows, leader, function(r) {
    var g = finiteOr(r.governmentCharges, -1);
    return g >= 0 ? g : null;
  }, STATUS_THRESHOLDS.governmentChargesGap);
  if (govt) {
    candidates.push({
      kind: "governmentCharges",
      gap: govt.gap,
      leaderValue: govt.leaderValue,
      lowBank: govt.lowBank,
      priority: govt.gap
    });
  }
  if (!candidates.length) return null;
  candidates.sort(function(a, b) { return b.priority - a.priority; });
  return candidates[0];
}

function banksForYouPhrase(n) {
  if (n === 1) return "1 bank";
  return n + " banks";
}

function formatLeaderOutlierClause(outlier) {
  if (outlier.kind === "missedEmi") {
    return "one missed EMI there costs " + inrStr(outlier.leaderValue) + ", highest among these matches";
  }
  if (outlier.kind === "processingFee") {
    return "its processing fee is " + inrStr(outlier.gap) + " above " + outlier.lowBank;
  }
  if (outlier.kind === "governmentCharges") {
    return "government charges at sanction are " + inrStr(outlier.gap) + " above " + outlier.lowBank;
  }
  return "";
}

// One personalized sentence: your match set + one computed story. Never a ticker dump.
function buildStatusStory(ctx) {
  var rows = ctx.rows;
  if (!rows.length) return { kind: "empty", line: "" };
  var leader = bestRateRow(rows);
  if (!leader) return { kind: "empty", line: "" };
  var lo = finiteOr(leader.effectiveRoiPct, null);
  if (lo == null) return { kind: "empty", line: "" };
  var bank = leader.bankName || "A matched bank";
  var n = rows.length;

  if (n === 1) {
    return {
      kind: "single",
      line: "For your profile, only " + bank + " matches \u2014 at " + pctStr(lo) + "."
    };
  }

  var across = "Across " + banksForYouPhrase(n) + " for your profile, ";
  var spread = rateSpreadPct(rows);
  var outlier = pickLeaderCostOutlier(rows, leader);

  if (outlier) {
    return {
      kind: "leaderOutlier",
      outlierKind: outlier.kind,
      line: across + bank + " is cheapest at " + pctStr(lo) + " \u2014 " + formatLeaderOutlierClause(outlier) + "."
    };
  }

  if (spread != null && spread < STATUS_THRESHOLDS.rateSpreadTight) {
    var bandLabel = spread < 0.01 ? "under 0.01" : spread.toFixed(2);
    return {
      kind: "tightBand",
      spread: spread,
      line: across + "rates sit in a " + bandLabel + "% band \u2014 fees, government charges, and penalties matter more than the headline rate."
    };
  }

  var runner = secondBestRateRow(rows);
  if (runner) {
    var edgeGap = +(runner.effectiveRoiPct - lo).toFixed(2);
    if (edgeGap > 0 && edgeGap < STATUS_THRESHOLDS.rateEdge) {
      return {
        kind: "edge",
        line: across + bank + " is cheapest at " + pctStr(lo) + " \u2014 " + runner.bankName + " is next at " + pctStr(runner.effectiveRoiPct) + "."
      };
    }
  }

  return {
    kind: "leader",
    line: across + bank + " is cheapest at " + pctStr(lo) + "."
  };
}

// ─── Status line ─────────────────────────────────────────────────────────────
function buildStatusLine(ctx) {
  return buildStatusStory(ctx).line;
}

// ─── Row flags (for table badges) ────────────────────────────────────────────
function buildRowFlags(ctx) {
  var rows = ctx.rows; var flags = {};
  if (rows.length < 2) return flags;
  var totals = rows.map(function(r) { return finiteOr(r.missedEmiTotal, 0); }).filter(function(x) { return x > 0; });
  if (!totals.length) return flags;
  var sorted = totals.slice().sort(function(a, b) { return a - b; });
  var median = sorted[Math.floor(sorted.length / 2)];
  rows.forEach(function(r) {
    var t = finiteOr(r.missedEmiTotal, 0);
    if (t > median * 2) flags[r.bankKey] = "high-penalty";
  });
  return flags;
}

// ─── Main entry ──────────────────────────────────────────────────────────────
function buildIntelligence(ctx) {
  if (!ctx || !ctx.rows || !ctx.rows.length) {
    return { status: "", tips: [], rowFlags: {}, allIn: "" };
  }
  var candidates = [
    tipCibilBand(ctx),
    tipOccupation(ctx),
    tipWomen(ctx),
    tipGreen(ctx),
    tipExistingEmis(ctx),
    tipAgeTenure(ctx),
    tipMissPenalty(ctx),
    tipFixedVsFloating(ctx),
    tipProcessingFee(ctx),
    tipGovernmentCharges(ctx),
    tipPrepayment(ctx)
  ].filter(Boolean);
  candidates.sort(function(a, b) { return b.rupeeImpact - a.rupeeImpact; });
  return {
    status:   buildStatusLine(ctx),
    // Engine may return many; UI strip shows INTEL_TIPS_MAX headings, details behind More.
    tips:     candidates,
    rowFlags: buildRowFlags(ctx),
    allIn:    ""
  };
}

/**
 * Strip contract:
 * - Default after Compare: eyebrow + status only.
 * - More opens the tip row (first INTEL_TIPS_PREVIEW tips, side-by-side + body).
 * - + reveals every remaining tip (all tips stay in the DOM).
 * - Show less returns to the status strip and collapses extras.
 */
var INTEL_TIPS_PREVIEW = 3;
/** @deprecated Alias — preview window, not a hard cap on tip count. */
var INTEL_TIPS_MAX = INTEL_TIPS_PREVIEW;

function tipItemHtml(t, isExtra) {
  return '<li class="hlc-intel-tip'
    + (isExtra ? " hlc-intel-tip--extra" : "")
    + '"'
    + (isExtra ? ' aria-hidden="true"' : "")
    + ">"
    + '<strong class="hlc-intel-heading">' + escHtml(t.heading) + "</strong>"
    + '<div class="hlc-intel-tip-detail" aria-hidden="true">'
    + '<div class="hlc-intel-tip-detail-clip">'
    + '<span class="hlc-intel-horizon hlc-intel-horizon--' + escHtml(t.kind) + '">' + escHtml(t.horizon) + "</span>"
    + '<p class="hlc-intel-body">' + escHtml(t.body) + "</p>"
    + "</div>"
    + "</div>"
    + "</li>";
}

var INTEL_MORE_CHEVRON =
  '<span class="hlc-intel-more-chevron" aria-hidden="true">'
  + '<svg viewBox="0 -960 960 960" focusable="false">'
  + '<path fill="currentColor" d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>'
  + "</svg></span>";

function ensureIntelMoreStructure(moreEl) {
  if (!moreEl) return null;
  var label = moreEl.querySelector ? moreEl.querySelector(".hlc-intel-more-label") : null;
  var chev = moreEl.querySelector ? moreEl.querySelector(".hlc-intel-more-chevron") : null;
  if (!label || !chev) {
    moreEl.innerHTML = '<span class="hlc-intel-more-label"></span>' + INTEL_MORE_CHEVRON;
    label = moreEl.querySelector ? moreEl.querySelector(".hlc-intel-more-label") : null;
  }
  return label;
}

/** Strip ↔ tip row. Hidden when there are no tips. */
function syncIntelMoreButton(moreEl, hasTips, open) {
  if (!moreEl) return;
  if (!hasTips) {
    moreEl.hidden = true;
    moreEl.setAttribute("aria-expanded", "false");
    return;
  }
  moreEl.hidden = false;
  moreEl.setAttribute("aria-expanded", open ? "true" : "false");
  var text = open ? "Show less" : "More";
  var label = ensureIntelMoreStructure(moreEl);
  if (label) {
    label.textContent = text;
  } else {
    moreEl.innerHTML = '<span class="hlc-intel-more-label">' + text + "</span>" + INTEL_MORE_CHEVRON;
  }
}

/**
 * + control for tips beyond the preview row.
 * Visible only while the tip row is open and extras exist.
 */
function syncIntelPlusButton(plusEl, extraCount, tipsOpen, extrasOpen) {
  if (!plusEl) return;
  var n = Math.max(0, Number(extraCount) || 0);
  if (!tipsOpen || n === 0) {
    plusEl.hidden = true;
    plusEl.setAttribute("aria-expanded", "false");
    plusEl.removeAttribute("data-extra-count");
    return;
  }
  plusEl.hidden = false;
  plusEl.setAttribute("aria-expanded", extrasOpen ? "true" : "false");
  plusEl.setAttribute("data-extra-count", String(n));
  plusEl.setAttribute(
    "aria-label",
    extrasOpen ? "Show fewer tips" : ("Show " + n + " more tip" + (n === 1 ? "" : "s"))
  );
  var label = plusEl.querySelector ? plusEl.querySelector(".hlc-intel-plus-label") : null;
  var text = extrasOpen ? "−" : ("+" + n);
  if (label) {
    label.textContent = text;
  } else {
    plusEl.innerHTML = '<span class="hlc-intel-plus-label">' + text + "</span>";
  }
}

function tipNodesIn(panelEl) {
  var tipsEl = panelEl ? panelEl.querySelector("#hlc-intel-tips") : null;
  return tipsEl ? tipsEl.querySelectorAll(".hlc-intel-tip") : [];
}

function tipExtraNodesIn(panelEl) {
  var tipsEl = panelEl ? panelEl.querySelector("#hlc-intel-tips") : null;
  return tipsEl ? tipsEl.querySelectorAll(".hlc-intel-tip--extra") : [];
}

function tipDetailNodesIn(panelEl) {
  var tipsEl = panelEl ? panelEl.querySelector("#hlc-intel-tips") : null;
  return tipsEl ? tipsEl.querySelectorAll(".hlc-intel-tip-detail") : [];
}

function syncTipDetailAria(panelEl, open) {
  var details = tipDetailNodesIn(panelEl);
  for (var i = 0; i < details.length; i++) {
    var tip = details[i].parentNode;
    var isExtra = tip && tip.classList && tip.classList.contains("hlc-intel-tip--extra");
    var extrasOpen = panelEl.classList.contains("is-tips-more");
    var visible = open && (!isExtra || extrasOpen);
    details[i].setAttribute("aria-hidden", visible ? "false" : "true");
  }
}

function syncExtraTipAria(panelEl, extrasOpen) {
  var extras = tipExtraNodesIn(panelEl);
  for (var i = 0; i < extras.length; i++) {
    extras[i].setAttribute("aria-hidden", extrasOpen ? "false" : "true");
  }
}

/** Reveal/hide tips beyond the first INTEL_TIPS_PREVIEW (+ control). */
function setIntelligenceTipsMore(panelEl, extrasOpen) {
  if (!panelEl) return;
  var plusEl = panelEl.querySelector("#hlc-intel-plus");
  var extras = tipExtraNodesIn(panelEl);
  var extraCount = extras.length;
  if (!extraCount || !panelEl.classList.contains("is-tips-open")) {
    panelEl.classList.remove("is-tips-more");
    syncExtraTipAria(panelEl, false);
    syncIntelPlusButton(plusEl, extraCount, panelEl.classList.contains("is-tips-open"), false);
    syncTipDetailAria(panelEl, panelEl.classList.contains("is-tips-open"));
    return;
  }
  if (extrasOpen) panelEl.classList.add("is-tips-more");
  else panelEl.classList.remove("is-tips-more");
  syncExtraTipAria(panelEl, !!extrasOpen);
  syncIntelPlusButton(plusEl, extraCount, true, !!extrasOpen);
  syncTipDetailAria(panelEl, true);
}

function toggleIntelligenceTipsMore(panelEl) {
  if (!panelEl) return;
  setIntelligenceTipsMore(panelEl, !panelEl.classList.contains("is-tips-more"));
}

/**
 * Open/close the tip row (strip ↔ first 3 tips with bodies).
 * Closing also collapses the + extras row.
 */
function setIntelligenceTipsExpanded(panelEl, open) {
  if (!panelEl) return;
  var moreEl = panelEl.querySelector("#hlc-intel-more");
  var plusEl = panelEl.querySelector("#hlc-intel-plus");
  var tipsEl = panelEl.querySelector("#hlc-intel-tips");
  var tips = tipNodesIn(panelEl);
  var extras = tipExtraNodesIn(panelEl);
  var hasTips = tips.length > 0;
  if (!hasTips) {
    panelEl.classList.remove("is-tips-open", "is-tips-expanded", "is-tips-more");
    if (tipsEl) tipsEl.setAttribute("aria-hidden", "true");
    syncIntelMoreButton(moreEl, false, false);
    syncIntelPlusButton(plusEl, 0, false, false);
    return;
  }
  if (open) {
    panelEl.classList.add("is-tips-open", "is-tips-expanded");
  } else {
    panelEl.classList.remove("is-tips-open", "is-tips-expanded", "is-tips-more");
  }
  if (tipsEl) tipsEl.setAttribute("aria-hidden", open ? "false" : "true");
  if (!open) syncExtraTipAria(panelEl, false);
  syncTipDetailAria(panelEl, !!open);
  syncIntelMoreButton(moreEl, true, !!open);
  syncIntelPlusButton(plusEl, extras.length, !!open, false);
}

/** Toggle tip row (strip ↔ preview tips). */
function toggleIntelligenceTips(panelEl) {
  if (!panelEl) return;
  setIntelligenceTipsExpanded(panelEl, !panelEl.classList.contains("is-tips-open"));
}

function expandIntelligenceTips(panelEl) {
  setIntelligenceTipsExpanded(panelEl, true);
}

// ─── Render ───────────────────────────────────────────────────────────────────
function renderIntelligenceHtml(panelEl, intel) {
  if (!panelEl) return;
  var statusEl = panelEl.querySelector("#hlc-intel-status");
  var tipsEl = panelEl.querySelector("#hlc-intel-tips");
  var moreEl = panelEl.querySelector("#hlc-intel-more");
  var plusEl = panelEl.querySelector("#hlc-intel-plus");
  var status = intel && intel.status != null ? String(intel.status).trim() : "";
  var tips = intel && Array.isArray(intel.tips) ? intel.tips.slice() : [];
  var hasTips = tips.length > 0;
  var hasStatus = status.length > 0;
  if (!intel || (!hasStatus && !hasTips)) {
    if (statusEl) statusEl.textContent = "";
    if (tipsEl) {
      tipsEl.innerHTML = "";
      tipsEl.hidden = true;
      tipsEl.setAttribute("aria-hidden", "true");
    }
    syncIntelMoreButton(moreEl, false, false);
    syncIntelPlusButton(plusEl, 0, false, false);
    panelEl.hidden = true;
    panelEl.classList.remove("is-tips-open", "is-tips-expanded", "is-tips-more");
    return;
  }
  if (statusEl) statusEl.textContent = status;
  /* Fresh Compare always lands on the status strip — tip row closed. */
  panelEl.classList.remove("is-tips-open", "is-tips-expanded", "is-tips-more");
  if (tipsEl) {
    if (hasTips) {
      tipsEl.innerHTML = tips.map(function(t, i) {
        return tipItemHtml(t, i >= INTEL_TIPS_PREVIEW);
      }).join("");
      tipsEl.hidden = false;
      tipsEl.setAttribute("aria-hidden", "true");
    } else {
      tipsEl.innerHTML = "";
      tipsEl.hidden = true;
      tipsEl.setAttribute("aria-hidden", "true");
    }
  }
  syncIntelMoreButton(moreEl, hasTips, false);
  syncIntelPlusButton(plusEl, Math.max(0, tips.length - INTEL_TIPS_PREVIEW), false, false);
  panelEl.hidden = false;
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

module.exports = {
  buildIntelligence: buildIntelligence,
  renderIntelligenceHtml: renderIntelligenceHtml,
  expandIntelligenceTips: expandIntelligenceTips,
  toggleIntelligenceTips: toggleIntelligenceTips,
  setIntelligenceTipsExpanded: setIntelligenceTipsExpanded,
  setIntelligenceTipsMore: setIntelligenceTipsMore,
  toggleIntelligenceTipsMore: toggleIntelligenceTipsMore,
  INTEL_TIPS_MAX: INTEL_TIPS_MAX,
  INTEL_TIPS_PREVIEW: INTEL_TIPS_PREVIEW,
  // Exported for unit tests:
  tipCibilBand: tipCibilBand,
  tipOccupation: tipOccupation,
  tipWomen: tipWomen,
  tipGreen: tipGreen,
  tipExistingEmis: tipExistingEmis,
  tipAgeTenure: tipAgeTenure,
  tipMissPenalty: tipMissPenalty,
  tipFixedVsFloating: tipFixedVsFloating,
  tipProcessingFee: tipProcessingFee,
  tipGovernmentCharges: tipGovernmentCharges,
  tipPrepayment: tipPrepayment,
  buildStatusLine: buildStatusLine,
  buildStatusStory: buildStatusStory,
  pickLeaderCostOutlier: pickLeaderCostOutlier,
  buildRowFlags: buildRowFlags,
  bestRate: bestRate,
  bestRateRow: bestRateRow,
  CIBIL_UPGRADE_STEPS: CIBIL_UPGRADE_STEPS,
  HORIZON: HORIZON
};
