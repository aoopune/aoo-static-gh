/**
 * Overview Guide page behaviours (borrow / EMI calculators).
 * Card flip open/close lives in shroffin-guide.js — do not bind flips here.
 * Safe no-op when calculator markup is absent (other Guide pages).
 */
(function () {
  "use strict";

  function parseMoney(raw) {
    if (raw == null) return NaN;
    var cleaned = String(raw).replace(/[,+\s₹]/g, "");
    if (!cleaned) return 0;
    var n = Number(cleaned);
    return Number.isFinite(n) ? n : NaN;
  }

  function formatRupee(n) {
    if (!Number.isFinite(n) || n <= 0) return "₹0";
    return "₹" + Math.round(n).toLocaleString("en-IN");
  }

  function formatIndianAmount(str, maxDigits) {
    var digits = String(str).replace(/\D/g, "").slice(0, maxDigits || 12);
    if (!digits) return "";
    if (digits.length <= 3) return digits;
    var result = digits.slice(-3);
    var rest = digits.slice(0, -3);
    while (rest.length > 0) {
      result = rest.slice(-2) + "," + result;
      rest = rest.slice(0, -2);
    }
    return result;
  }

  function bindIndianMoneyInputs(formEl, names) {
    names.forEach(function (name) {
      var el = formEl.elements[name];
      if (!el) return;
      el.addEventListener("input", function () {
        var start = this.selectionStart;
        var oldValue = this.value;
        var digitsBefore = (oldValue.slice(0, start).match(/\d/g) || []).length;
        var formatted = formatIndianAmount(oldValue, 12);
        this.value = formatted;
        var newPos = 0;
        var count = 0;
        for (var i = 0; i < formatted.length && count < digitsBefore; i++) {
          if (/\d/.test(formatted[i])) count++;
          newPos = i + 1;
        }
        this.setSelectionRange(newPos, newPos);
      });
    });
  }

  function propertyCap(price) {
    if (price <= 3000000) return price * 0.9;
    if (price <= 7500000) return price * 0.8;
    return price * 0.75;
  }

  function loanFromEmi(emi, annualRate, years) {
    if (emi <= 0 || years <= 0) return 0;
    var r = annualRate / 100 / 12;
    var n = Math.round(years * 12);
    if (r <= 0) return emi * n;
    return (emi * (1 - Math.pow(1 + r, -n))) / r;
  }

  function emiFromLoan(principal, annualRate, years) {
    if (principal <= 0 || years <= 0) return 0;
    var r = annualRate / 100 / 12;
    var n = Math.round(years * 12);
    if (r <= 0) return principal / n;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  function bindBorrowCalc() {
    var form = document.getElementById("borrow-calc-form");
    if (!form) return;
    var result = document.getElementById("borrow-calc-result");
    var outTotal = document.getElementById("borrow-calc-total");
    var outProp = document.getElementById("borrow-calc-prop");
    var outInc = document.getElementById("borrow-calc-inc");

    bindIndianMoneyInputs(form, ["price", "income", "emis", "cards"]);
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var price = parseMoney(form.price.value);
      var income = parseMoney(form.income.value);
      var emis = parseMoney(form.emis.value);
      var cards = parseMoney(form.cards.value);
      var years = parseMoney(form.years.value);
      var rate = parseMoney(form.rate.value);
      var foirPct = parseMoney(form.foir.value);
      if ([50, 55, 60, 65, 70].indexOf(foirPct) === -1) foirPct = 55;

      if (!(price > 0) || !(income > 0) || !(years > 0) || !(rate > 0)) {
        if (result) result.hidden = true;
        return;
      }
      if (!Number.isFinite(emis) || emis < 0) emis = 0;
      if (!Number.isFinite(cards) || cards < 0) cards = 0;

      var fromProperty = propertyCap(price);
      var maxAllEmis = income * (foirPct / 100);
      var cardLoad = cards * 0.1;
      var homeEmiRoom = Math.max(0, maxAllEmis - emis - cardLoad);
      var fromIncome = loanFromEmi(homeEmiRoom, rate, years);
      var estimate = Math.min(fromProperty, fromIncome);

      if (outProp) outProp.textContent = formatRupee(fromProperty);
      if (outInc) outInc.textContent = formatRupee(fromIncome);
      if (outTotal) outTotal.textContent = formatRupee(estimate);
      if (result) result.hidden = false;
    });
  }

  function bindEmiCalc() {
    var form = document.getElementById("emi-calc-form");
    if (!form) return;
    var result = document.getElementById("emi-calc-result");
    var outTotal = document.getElementById("emi-calc-total");
    var outPayable = document.getElementById("emi-calc-payable");
    var outInterest = document.getElementById("emi-calc-interest");

    bindIndianMoneyInputs(form, ["amount"]);
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var amount = parseMoney(form.amount.value);
      var years = parseMoney(form.years.value);
      var rate = parseMoney(form.rate.value);

      if (!(amount > 0) || !(years > 0) || !(rate > 0)) {
        if (result) result.hidden = true;
        return;
      }

      years = Math.min(40, years);
      var monthly = emiFromLoan(amount, rate, years);
      var months = Math.round(years * 12);
      var totalPayable = monthly * months;
      var totalInterest = Math.max(0, totalPayable - amount);

      if (outTotal) outTotal.textContent = formatRupee(monthly);
      if (outPayable) outPayable.textContent = formatRupee(totalPayable);
      if (outInterest) outInterest.textContent = formatRupee(totalInterest);
      if (result) result.hidden = false;
    });
  }

  function initOverviewCalculators() {
    if (!document.getElementById("borrow-flip") && !document.getElementById("emi-flip")) {
      return function () {};
    }

    bindBorrowCalc();
    bindEmiCalc();

    return function cleanup() {};
  }

  window.ShroffinGuidePages = window.ShroffinGuidePages || {};
  window.ShroffinGuidePages.overview = initOverviewCalculators;
})();
