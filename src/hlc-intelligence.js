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
function bestEmi(rows) {
  var e = Infinity;
  for (var i = 0; i < rows.length; i++) {
    var v = finiteOr(rows[i].emi, Infinity);
    if (v < e) e = v;
  }
  return e === Infinity ? null : e;
}

// ─── Tip A: CIBIL band upgrade ────────────────────────────────────────────────
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
    heading: "A higher CIBIL opens a cheaper rate",
    body: "Your CIBIL is " + q.cibilScore + ". If it reaches " + nextStep + ", the best available rate drops from " + currentBestRate.toFixed(2) + "% to " + cfRate.toFixed(2) + "% \u2014 saving you " + moStr(emiDelta) + " (\u20b9" + lakhStr(totalSaving) + " total over " + tenureYears + " years).",
    rupeeImpact: totalSaving
  };
}

// ─── Tip B: Occupation — self-employed switch ─────────────────────────────────
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
  return {
    kind: "occupation",
    horizon: HORIZON.MONTHS,
    heading: "Adding a salaried co-applicant unlocks more banks",
    body: "Self-employed applicants match " + rows.length + " bank" + (rows.length === 1 ? "" : "s") + ". Adding a salaried co-applicant opens " + delta + " more option" + (delta === 1 ? "" : "s") + (rateDrop > 0.05 ? " \u2014 and the best rate drops " + rateDrop.toFixed(2) + "% (saves " + moStr(emiDelta) + "/mo)" : "") + ".",
    rupeeImpact: emiDelta * tenureYears * 12 || delta * 1000
  };
}

// ─── Tip C: Women applicant discount ─────────────────────────────────────────
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
  return {
    kind: "women",
    horizon: HORIZON.BEFORE,
    heading: "Women applicant rate is lower at several banks",
    body: "If the primary applicant is a woman, the best available rate drops " + rateDrop.toFixed(2) + "% \u2014 saving " + moStr(emiDelta) + " (\u20b9" + lakhStr(total) + " over " + tenureYears + " years). No special proof needed; standard KYC is enough.",
    rupeeImpact: total
  };
}

// ─── Tip D: Existing EMI headroom ─────────────────────────────────────────────
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
    heading: "Existing EMIs are cutting your loan limit",
    body: "Your current EMIs of \u20b9" + q.existingEmis.toLocaleString("en-IN") + "/mo are reducing your loan eligibility. Clearing them before applying could raise your loan limit from \u20b9" + lakhStr(currentLoan) + " to \u20b9" + lakhStr(cfLoan) + " \u2014 a \u20b9" + lakhStr(loanDelta) + " difference.",
    rupeeImpact: loanDelta
  };
}

// ─── Tip E: Age × tenure trap ─────────────────────────────────────────────────
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
    if (!r.roi || !r.loanAmount) continue;
    if (ctx.helpers && ctx.helpers.emiFromLoan) {
      fullTenureEmi = ctx.helpers.emiFromLoan(r.loanAmount, r.roi / 100, q.tenureYears);
      forcedEmi = ctx.helpers.emiFromLoan(r.loanAmount, r.roi / 100, maxActualTenure);
    }
    break;
  }
  if (!fullTenureEmi || forcedEmi <= fullTenureEmi + 100) return null;
  var emiDiff = roundInr(forcedEmi - fullTenureEmi);
  return {
    kind: "ageTenure",
    horizon: HORIZON.NOW,
    heading: "Your age is forcing a shorter loan \u2014 EMI is higher",
    body: "You asked for " + q.tenureYears + " years. Most banks cap you at " + maxActualTenure + " years because of your age, which pushes EMI up by " + moStr(emiDiff) + ". Applying 2\u20133 years earlier (or with a younger co-applicant) restores the full tenure.",
    rupeeImpact: emiDiff * maxActualTenure * 12
  };
}

// ─── Tip F: Missed-EMI penalty spread ────────────────────────────────────────
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
    heading: "Missed-EMI penalty varies a lot across banks",
    body: "Miss one EMI at " + low.bank + " and you owe \u20b9" + roundInr(low.total).toLocaleString("en-IN") + " extra. At " + high.bank + " that climbs to \u20b9" + roundInr(high.total).toLocaleString("en-IN") + " \u2014 a \u20b9" + roundInr(spread).toLocaleString("en-IN") + " difference for the same mistake.",
    rupeeImpact: spread
  };
}

// ─── Tip G: Floating vs fixed ─────────────────────────────────────────────────
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
  return {
    kind: "fixedVsFloating",
    horizon: HORIZON.NOW,
    heading: "Your filter shows fixed-rate loans only \u2014 floating is cheaper",
    body: "All matched offers are fixed rate at " + curRate.toFixed(2) + "%. Floating-rate options start at " + cfRate.toFixed(2) + "%, saving " + moStr(emiDelta) + " right now (\u20b9" + lakhStr(emiDelta * tenureYears * 12) + " over the term). Fixed locks the rate; floating tracks RBI\u2019s repo.",
    rupeeImpact: emiDelta * tenureYears * 12
  };
}

// ─── Tip H: Green home discount ──────────────────────────────────────────────
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
  return {
    kind: "green",
    horizon: HORIZON.BEFORE,
    heading: "Green-rated property gets a lower rate at some banks",
    body: "If your property has a green rating (IGBC / GRIHA), the best available rate drops " + rateDrop.toFixed(2) + "% \u2014 saving " + moStr(emiDelta) + " every month.",
    rupeeImpact: emiDelta * tenureYears * 12
  };
}

// ─── Tip I: Processing fee spread ────────────────────────────────────────────
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
    heading: "Processing fees differ by \u20b9" + lakhStr(spread) + " across banks",
    body: low.bank + " charges \u20b9" + roundInr(low.fee).toLocaleString("en-IN") + " upfront. " + high.bank + " charges \u20b9" + roundInr(high.fee).toLocaleString("en-IN") + " \u2014 a day-one difference of \u20b9" + roundInr(spread).toLocaleString("en-IN") + " before your first EMI.",
    rupeeImpact: spread
  };
}

// ─── Tip K: Part-prepayment power ────────────────────────────────────────────
function tipPrepayment(ctx) {
  var rows = ctx.rows;
  if (!rows.length) return null;
  var best = rows[0];
  var loanAmt = finiteOr(best.loanAmount, 0);
  if (loanAmt < 1000000) return null; // skip < ₹10L
  var tenureYears = finiteOr(ctx.query.tenureYears, 20);
  var roi = finiteOr(best.roi, 8.5) / 100;
  if (!ctx.helpers || !ctx.helpers.emiFromLoan) return null;
  var fullEmi = ctx.helpers.emiFromLoan(loanAmt, roi, tenureYears);
  // Simulate one prepayment of 5% principal at year 3
  var prepayAmt = loanAmt * 0.05;
  var remainingAfter3 = loanAmt;
  for (var m = 0; m < 36; m++) {
    var interest = remainingAfter3 * (roi / 12);
    var principal = fullEmi - interest;
    remainingAfter3 -= principal;
  }
  remainingAfter3 -= prepayAmt;
  if (remainingAfter3 <= 0) return null;
  var newEmi = ctx.helpers.emiFromLoan(remainingAfter3, roi, tenureYears - 3);
  var emiDrop = roundInr(fullEmi - newEmi);
  if (emiDrop < 200) return null;
  var saving = emiDrop * (tenureYears - 3) * 12;
  return {
    kind: "prepayment",
    horizon: HORIZON.MONTHS,
    heading: "A one-time prepayment at year 3 can save real money",
    body: "Paying \u20b9" + lakhStr(prepayAmt) + " extra at year 3 (5% of your loan) drops EMI from " + moStr(fullEmi) + " to " + moStr(newEmi) + " \u2014 saving \u20b9" + lakhStr(saving) + " over the remaining term. Floating-rate loans have zero penalty for this.",
    rupeeImpact: saving
  };
}

// ─── Status line (tight spread note) ─────────────────────────────────────────
function buildStatusLine(ctx) {
  var rows = ctx.rows;
  if (!rows.length) return "";
  var rates = rows.map(function(r) { return finiteOr(r.effectiveRoiPct, null); }).filter(Boolean);
  if (!rates.length) return "";
  var lo = Math.min.apply(null, rates);
  var hi = Math.max.apply(null, rates);
  var bestRow = rows[0];
  var spread = hi - lo;
  var tightNote = spread < 0.3 ? " Rates are tightly clustered \u2014 non-rate costs matter more here." : "";
  return "Rates for your profile: " + lo.toFixed(2) + "%\u2013" + hi.toFixed(2) + "%. Lowest: " + bestRow.bankName + "." + tightNote;
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
    tipPrepayment(ctx)
  ].filter(Boolean);
  candidates.sort(function(a, b) { return b.rupeeImpact - a.rupeeImpact; });
  return {
    status:   buildStatusLine(ctx),
    tips:     candidates.slice(0, 3),
    rowFlags: buildRowFlags(ctx),
    allIn:    ""
  };
}

// ─── Render ───────────────────────────────────────────────────────────────────
function renderIntelligenceHtml(panelEl, intel) {
  if (!panelEl) return;
  if (!intel || !intel.tips || !intel.tips.length) {
    panelEl.hidden = true;
    return;
  }
  var statusEl = panelEl.querySelector("#hlc-intel-status");
  if (statusEl) statusEl.textContent = intel.status || "";
  var tipsEl = panelEl.querySelector("#hlc-intel-tips");
  if (tipsEl) {
    tipsEl.innerHTML = intel.tips.map(function(t) {
      return '<li class="hlc-intel-tip">'
        + '<span class="hlc-intel-horizon hlc-intel-horizon--' + escHtml(t.kind) + '">' + escHtml(t.horizon) + '</span>'
        + '<strong class="hlc-intel-heading">' + escHtml(t.heading) + '</strong>'
        + '<p class="hlc-intel-body">' + escHtml(t.body) + '</p>'
        + '</li>';
    }).join("");
  }
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
  tipPrepayment: tipPrepayment,
  buildStatusLine: buildStatusLine,
  buildRowFlags: buildRowFlags,
  CIBIL_UPGRADE_STEPS: CIBIL_UPGRADE_STEPS
};
