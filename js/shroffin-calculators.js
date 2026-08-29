/**
 * Calculator page binders — reads [data-calc] on forms.
 */
(function () {
  "use strict";

  var MathLib = window.ShroffinLoanMath;
  /** No calculator number field may hold more than this many digit characters. */
  var MAX_DIGITS = 10;
  /** Interest rate fields: at most this many digits after the decimal. */
  var RATE_DECIMALS = 2;
  /** Tenure / years fields: at most this many digit characters. */
  var TENURE_DIGITS = 2;

  function parseMoney(raw) {
    if (raw == null) return NaN;
    var s = String(raw).replace(/[₹,\s]/g, "").trim();
    if (!s) return NaN;
    return Number(s);
  }

  function parseRate(raw) {
    var n = parseMoney(raw);
    if (!Number.isFinite(n)) return n;
    return Math.round(n * Math.pow(10, RATE_DECIMALS)) / Math.pow(10, RATE_DECIMALS);
  }

  function parseYears(raw) {
    var n = parseMoney(raw);
    if (!Number.isFinite(n)) return n;
    var capped = Math.min(Math.pow(10, TENURE_DIGITS) - 1, Math.max(0, n));
    return Math.trunc(capped) === capped ? capped : Math.round(capped * 100) / 100;
  }

  function fieldName(input) {
    return String((input && (input.name || input.id)) || "").toLowerCase();
  }

  function isRateField(input) {
    return fieldName(input).indexOf("rate") !== -1;
  }

  function isTenureField(input) {
    var name = fieldName(input);
    return name === "years" || name === "yearsleft" || name.indexOf("tenure") !== -1;
  }

  function maxDigitsFor(input) {
    if (isTenureField(input)) return TENURE_DIGITS;
    return MAX_DIGITS;
  }

  function digitCount(raw) {
    return String(raw == null ? "" : raw).replace(/\D/g, "").length;
  }

  /**
   * Keep at most maxDigits digit characters.
   * Allows one decimal point; drops commas / ₹ / spaces.
   */
  function truncateToMaxDigits(raw, maxDigits) {
    var limit = maxDigits == null ? MAX_DIGITS : maxDigits;
    var src = String(raw == null ? "" : raw);
    var out = "";
    var digits = 0;
    var seenDot = false;
    for (var i = 0; i < src.length; i++) {
      var ch = src.charAt(i);
      if (ch >= "0" && ch <= "9") {
        if (digits >= limit) continue;
        out += ch;
        digits++;
      } else if (ch === "." && !seenDot) {
        out += ch;
        seenDot = true;
      }
    }
    return out;
  }

  /** Cap fractional digits (keeps trailing dot while typing if present). */
  function truncateToDecimals(raw, maxDecimals) {
    var s = String(raw == null ? "" : raw);
    var dot = s.indexOf(".");
    if (dot === -1) return s;
    return s.slice(0, dot + 1 + maxDecimals);
  }

  function formatRate(n) {
    if (!Number.isFinite(n)) return "";
    var rounded = Math.round(n * Math.pow(10, RATE_DECIMALS)) / Math.pow(10, RATE_DECIMALS);
    return String(rounded);
  }

  function formatINR(n, digits) {
    if (!Number.isFinite(n)) return "—";
    var d = digits == null ? 0 : digits;
    return (
      "₹" +
      Number(n).toLocaleString("en-IN", {
        maximumFractionDigits: d,
        minimumFractionDigits: d
      })
    );
  }

  /** Indian grouping while typing (e.g. 12,00,000). */
  function formatIndianAmountDigits(raw, maxDigits) {
    var digits = String(raw == null ? "" : raw).replace(/\D/g, "").slice(
      0,
      maxDigits == null ? MAX_DIGITS : maxDigits
    );
    if (!digits) return "";
    return Number(digits).toLocaleString("en-IN");
  }

  function applyIndianMoneyFormat(input, digitLimit) {
    var start = input.selectionStart;
    var oldValue = input.value;
    var digitsBefore =
      typeof start === "number"
        ? (oldValue.slice(0, start).match(/\d/g) || []).length
        : digitCount(oldValue);
    var formatted = formatIndianAmountDigits(oldValue, digitLimit);
    if (input.value !== formatted) input.value = formatted;
    if (typeof start !== "number" || typeof input.setSelectionRange !== "function") return;
    var newPos = 0;
    var count = 0;
    for (var i = 0; i < formatted.length && count < digitsBefore; i++) {
      if (/\d/.test(formatted.charAt(i))) count++;
      newPos = i + 1;
    }
    input.setSelectionRange(newPos, newPos);
  }

  function formatMonths(m) {
    if (!Number.isFinite(m) || m === Infinity) return "—";
    var years = Math.floor(m / 12);
    var months = m % 12;
    if (years <= 0) return months + (months === 1 ? " month" : " months");
    if (months === 0) return years + (years === 1 ? " year" : " years");
    return years + " yr " + months + " mo";
  }

  function bindMoneyInput(input) {
    if (!input) return;
    var plain = input.getAttribute("data-format") === "plain";
    var rateField = isRateField(input);
    var tenureField = isTenureField(input);
    var digitLimit = maxDigitsFor(input);
    var keepCommas = !plain && !rateField && !tenureField;

    function enforceLimits() {
      if (keepCommas) {
        applyIndianMoneyFormat(input, digitLimit);
        return;
      }
      var next = truncateToMaxDigits(input.value, digitLimit);
      if (rateField) next = truncateToDecimals(next, RATE_DECIMALS);
      if (next !== input.value) input.value = next;
    }

    function pretty() {
      if (keepCommas) {
        var moneyN = parseMoney(input.value);
        if (!Number.isFinite(moneyN)) {
          input.value = formatIndianAmountDigits(input.value, digitLimit);
          return;
        }
        input.value = Math.trunc(moneyN).toLocaleString("en-IN");
        return;
      }
      enforceLimits();
      var n = parseMoney(input.value);
      if (!Number.isFinite(n)) return;
      if (rateField) {
        input.value = formatRate(n);
        return;
      }
      if (tenureField) {
        input.value = String(parseYears(n));
        return;
      }
      if (plain) {
        input.value = String(n);
        return;
      }
      input.value = n.toLocaleString("en-IN");
    }

    input.addEventListener("beforeinput", function (event) {
      if (event.isComposing) return;
      if (event.inputType && event.inputType.indexOf("insert") !== 0) return;
      var data = event.data;
      if (data == null || data === "") return;
      var start = input.selectionStart;
      var end = input.selectionEnd;
      if (typeof start !== "number" || typeof end !== "number") return;
      var next = input.value.slice(0, start) + data + input.value.slice(end);
      if (digitCount(next) > digitLimit) {
        event.preventDefault();
        return;
      }
      if (rateField && /\d/.test(data)) {
        var cleaned = truncateToMaxDigits(next, digitLimit);
        var limited = truncateToDecimals(cleaned, RATE_DECIMALS);
        if (limited.length < cleaned.length) event.preventDefault();
      }
    });
    input.addEventListener("input", enforceLimits);
    input.addEventListener("blur", pretty);
    input.addEventListener("change", pretty);
    if (!keepCommas) {
      input.addEventListener("focus", function () {
        var n = parseMoney(input.value);
        if (Number.isFinite(n)) {
          var raw = rateField
            ? formatRate(n)
            : tenureField
              ? String(parseYears(n))
              : plain
                ? String(n)
                : String(Math.trunc(n) === n ? Math.trunc(n) : n);
          input.value = rateField
            ? truncateToDecimals(truncateToMaxDigits(raw, digitLimit), RATE_DECIMALS)
            : truncateToMaxDigits(raw, digitLimit);
        }
      });
    }
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }


  function readForm(form) {
    var data = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.disabled) return;
      if (el.type === "radio" && !el.checked) return;
      data[el.name] = el.value;
    });
    return data;
  }

  function renderAmort(container, schedule) {
    if (!container || !schedule) return;
    var html =
      '<div class="calc-table-wrap"><table class="calc-table"><thead><tr>' +
      "<th>Year</th><th>Principal</th><th>Interest</th><th>Balance</th><th></th>" +
      "</tr></thead><tbody>";

    schedule.years.forEach(function (y) {
      var id = "amort-y-" + y.year;
      html +=
        "<tr>" +
        "<td>Year " +
        y.year +
        "</td>" +
        "<td>" +
        formatINR(y.principal) +
        "</td>" +
        "<td>" +
        formatINR(y.interest) +
        "</td>" +
        "<td>" +
        formatINR(y.endBalance) +
        "</td>" +
        '<td><button type="button" class="calc-year-toggle" data-amort-toggle="' +
        id +
        '" aria-expanded="false">Months</button></td>' +
        "</tr>" +
        '<tr class="calc-month-rows" id="' +
        id +
        '" hidden><td colspan="5">' +
        '<div class="calc-table-wrap"><table class="calc-table"><thead><tr>' +
        "<th>Mo</th><th>EMI</th><th>Principal</th><th>Interest</th><th>Balance</th>" +
        "</tr></thead><tbody>";

      y.months.forEach(function (row) {
        html +=
          "<tr><td>" +
          row.month +
          "</td><td>" +
          formatINR(row.emi) +
          "</td><td>" +
          formatINR(row.principal) +
          "</td><td>" +
          formatINR(row.interest) +
          "</td><td>" +
          formatINR(row.balance) +
          "</td></tr>";
      });

      html += "</tbody></table></div></td></tr>";
    });

    html += "</tbody></table></div>";
    container.innerHTML = html;
  }

  function initReveals() {
    var nodes = document.querySelectorAll(".calc-reveal");
    if (!nodes.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(function (n) {
        n.classList.add("is-in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  function bindEmi(form) {
    var amortEl = document.getElementById("calc-amort-body");
    var amortSection = document.querySelector(".calc-amort");
    var amortToggle = document.getElementById("amort-toggle");
    var amortPanel = document.getElementById("calc-amort-panel");

    function setAmortOpen(open) {
      if (!amortSection || !amortToggle || !amortPanel) return;
      amortSection.classList.toggle("is-open", open);
      amortToggle.setAttribute("aria-expanded", open ? "true" : "false");
      amortPanel.setAttribute("aria-hidden", open ? "false" : "true");
      if (open) amortPanel.removeAttribute("inert");
      else amortPanel.setAttribute("inert", "");

      var closed =
        amortToggle.getAttribute("data-closed-label") || "Amortisation schedule";
      var label = open ? "Close" : closed;
      Array.prototype.slice.call(amortToggle.childNodes).forEach(function (node) {
        if (node.nodeType === 3) amortToggle.removeChild(node);
      });
      var svg = amortToggle.querySelector("svg");
      amortToggle.insertBefore(document.createTextNode(label + (svg ? " " : "")), svg || null);
    }

    function setAmortClosedLabel(yearCount) {
      if (!amortToggle) return;
      var base =
        amortToggle.getAttribute("data-closed-base") ||
        amortToggle.getAttribute("data-closed-label") ||
        "Amortisation schedule";
      amortToggle.setAttribute("data-closed-base", base);
      var label = yearCount > 0 ? base + " (" + yearCount + ")" : base;
      amortToggle.setAttribute("data-closed-label", label);
      if (!amortSection.classList.contains("is-open")) {
        setAmortOpen(false);
      }
    }

    function run() {
      var d = readForm(form);
      var principal = parseMoney(d.principal);
      var rate = parseRate(d.rate);
      var years = parseMoney(d.years);
      if (!(principal > 0) || !(rate > 0) || !(years > 0)) return;
      var sched = MathLib.amortisationSchedule(principal, rate, years);
      setText("out-emi", formatINR(sched.emi));
      setText("out-interest", formatINR(sched.totalInterest));
      setText("out-payable", formatINR(sched.totalPayable));
      setText("out-months", formatMonths(sched.months));
      renderAmort(amortEl, sched);
      setAmortClosedLabel(sched.years ? sched.years.length : 0);
    }
    ["principal", "rate", "years"].forEach(function (name) {
      bindMoneyInput(form.elements[name]);
    });
    form.addEventListener("input", run);
    form.addEventListener("change", run);
    if (amortToggle) {
      amortToggle.addEventListener("click", function () {
        var open = !amortSection.classList.contains("is-open");
        setAmortOpen(open);
        if (open) {
          window.requestAnimationFrame(function () {
            amortToggle.scrollIntoView({ behavior: "smooth", block: "nearest" });
          });
        }
      });
      setAmortOpen(false);
    }
    document.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-amort-toggle]");
      if (!btn) return;
      var row = document.getElementById(btn.getAttribute("data-amort-toggle"));
      if (!row) return;
      var open = row.hasAttribute("hidden");
      if (open) row.removeAttribute("hidden");
      else row.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    run();
  }

  function bindLoanAmount(form) {
    function run() {
      var d = readForm(form);
      var emi = parseMoney(d.emi);
      var rate = parseRate(d.rate);
      var years = parseMoney(d.years);
      if (!(emi > 0) || !(rate > 0) || !(years > 0)) return;
      var loan = MathLib.loanFromEmi(emi, rate, years);
      var months = Math.round(years * 12);
      setText("out-loan", formatINR(loan));
      setText("out-payable", formatINR(emi * months));
      setText("out-interest", formatINR(emi * months - loan));    }
    ["emi", "rate", "years"].forEach(function (name) {
      bindMoneyInput(form.elements[name]);
    });
    form.addEventListener("input", run);
    run();
  }

  function bindHowMuchLoan(form) {
    var coFields = document.getElementById("co-applicant-fields");
    var coRow = document.getElementById("out-co-row");
    var coGroup = form.elements.coApplicant;

    function coApplicantOn() {
      if (!coGroup) return false;
      var value = coGroup.value;
      if (value == null || value === "") {
        var checked = form.querySelector('input[name="coApplicant"]:checked');
        value = checked ? checked.value : "no";
      }
      return String(value).toLowerCase() === "yes";
    }

    function syncCoApplicantPanel() {
      var on = coApplicantOn();
      if (coFields) {
        if (on) coFields.removeAttribute("hidden");
        else coFields.setAttribute("hidden", "");
      }
      if (coRow) {
        if (on) coRow.removeAttribute("hidden");
        else coRow.setAttribute("hidden", "");
      }
      return on;
    }

    function run() {
      var d = readForm(form);
      var includeCo = syncCoApplicantPanel();
      var result = MathLib.guideLoanAmount({
        propertyValue: parseMoney(d.price),
        income: parseMoney(d.income),
        existingEmis: parseMoney(d.existingEmis) || 0,
        cardLimits: parseMoney(d.cardLimits) || 0,
        includeCoApplicant: includeCo,
        coIncome: parseMoney(d.coIncome) || 0,
        coExistingEmis: parseMoney(d.coExistingEmis) || 0,
        coCardLimits: parseMoney(d.coCardLimits) || 0,
        foirPct: parseMoney(d.foir),
        rate: parseRate(d.rate),
        years: parseMoney(d.years)
      });
      setText("out-loan", formatINR(result.estimate));
      setText("out-prop", formatINR(result.fromProperty));
      setText("out-inc", formatINR(result.fromIncome));
      setText("out-co-add", formatINR(result.addedByCoApplicant || 0));
      setText("out-emi-room", formatINR(result.homeEmiRoom));
      setText(
        "out-bind",
        result.limiting === "property" ? "Property" : "Income"
      );
    }
    [
      "price",
      "income",
      "existingEmis",
      "cardLimits",
      "coIncome",
      "coExistingEmis",
      "coCardLimits",
      "rate",
      "years"
    ].forEach(function (name) {
      if (form.elements[name]) bindMoneyInput(form.elements[name]);
    });
    form.addEventListener("input", run);
    form.addEventListener("change", run);
    run();
  }

  function bindEligibility(form) {
    function run() {
      var d = readForm(form);
      var result = MathLib.eligibility({
        income: parseMoney(d.income),
        existingEmis: parseMoney(d.existingEmis) || 0,
        cardBalance: parseMoney(d.cardBalance) || 0,
        foirPct: parseMoney(d.foir),
        rate: parseRate(d.rate),
        years: parseMoney(d.years)
      });
      setText("out-loan", formatINR(result.eligibleLoan));
      setText("out-emi-room", formatINR(result.homeEmiRoom));
      setText("out-foir-cap", formatINR(result.maxAllEmis));    }
    ["income", "existingEmis", "cardBalance", "rate", "years"].forEach(function (name) {
      bindMoneyInput(form.elements[name]);
    });
    form.addEventListener("input", run);
    form.addEventListener("change", run);
    run();
  }

  function bindAffordability(form) {
    function run() {
      var d = readForm(form);
      var elig = MathLib.eligibility({
        income: parseMoney(d.income),
        existingEmis: parseMoney(d.existingEmis) || 0,
        cardBalance: parseMoney(d.cardBalance) || 0,
        foirPct: parseMoney(d.foir),
        rate: parseRate(d.rate),
        years: parseMoney(d.years)
      });
      var down = parseMoney(d.down) || 0;
      var property = MathLib.propertyFromLoanAndDown(elig.eligibleLoan, down);
      var maxLoan = MathLib.maxLoanForProperty(property);
      var loan = Math.min(elig.eligibleLoan, maxLoan);
      setText("out-property", formatINR(property));
      setText("out-loan", formatINR(loan));
      setText("out-down", formatINR(Math.max(0, property - loan)));    }
    ["income", "existingEmis", "cardBalance", "down", "rate", "years"].forEach(function (name) {
      bindMoneyInput(form.elements[name]);
    });
    form.addEventListener("input", run);
    form.addEventListener("change", run);
    run();
  }

  function bindPrepayment(form) {
    function run() {
      var d = readForm(form);
      var result = MathLib.prepaymentImpact({
        principal: parseMoney(d.principal),
        rate: parseRate(d.rate),
        years: parseMoney(d.years),
        lumpSum: parseMoney(d.lumpSum) || 0,
        extraEmi: parseMoney(d.extraEmi) || 0,
        fee: parseMoney(d.fee) || 0,
        mode: d.mode
      });
      setText("out-saved", formatINR(result.interestSaved));
      setText("out-new-emi", formatINR(result.newEmi));
      setText("out-new-tenure", formatMonths(result.newMonths));
      setText("out-months-saved", formatMonths(result.monthsSaved));    }
    ["principal", "rate", "years", "lumpSum", "extraEmi", "fee"].forEach(function (name) {
      bindMoneyInput(form.elements[name]);
    });
    form.addEventListener("input", run);
    form.addEventListener("change", run);
    run();
  }

  function bindBalanceTransfer(form) {
    function run() {
      var d = readForm(form);
      var result = MathLib.balanceTransfer({
        outstanding: parseMoney(d.outstanding),
        oldRate: parseRate(d.oldRate),
        newRate: parseRate(d.newRate),
        yearsLeft: parseMoney(d.yearsLeft),
        fees: parseMoney(d.fees) || 0
      });
      setText("out-net", formatINR(result.netSaved));
      setText("out-old-emi", formatINR(result.oldEmi));
      setText("out-new-emi", formatINR(result.newEmi));
      setText("out-interest-saved", formatINR(result.interestSaved));    }
    ["outstanding", "oldRate", "newRate", "yearsLeft", "fees"].forEach(function (name) {
      bindMoneyInput(form.elements[name]);
    });
    form.addEventListener("input", run);
    run();
  }

  function bindTenure(form) {
    function run() {
      var d = readForm(form);
      var months = MathLib.tenureMonthsFromEmi(
        parseMoney(d.principal),
        parseRate(d.rate),
        parseMoney(d.emi)
      );
      setText("out-tenure", formatMonths(months));
      if (Number.isFinite(months) && months !== Infinity) {
        var p = parseMoney(d.principal);
        var e = parseMoney(d.emi);
        var rate = parseRate(d.rate);
        setText("out-interest", formatINR(e * months - p));
        setText("out-payable", formatINR(e * months));      } else {
        setText("out-interest", "—");
        setText("out-payable", "—");      }
    }
    ["principal", "rate", "emi"].forEach(function (name) {
      bindMoneyInput(form.elements[name]);
    });
    form.addEventListener("input", run);
    run();
  }

  function bindTax(form) {
    var readyField = form.querySelector("[data-ready-wrap]");
    var purposeField = form.querySelector("[data-purpose-wrap]");
    var basketField = form.querySelector("[data-basket-wrap]");
    var incomeField = form.querySelector("[data-income-wrap]");
    var ageField = form.querySelector("[data-age-wrap]");
    var rentField = form.querySelector("[data-rent-wrap]");
    var rupeeGroup = form.querySelector("[data-rupee-wrap]");

    function syncSituationVisibility() {
      var d = readForm(form);
      var oldRegime = d.regime !== "new";
      var selfOccupied = d.occupancy !== "letout";
      var buyBuild = d.purpose !== "repair";

      if (purposeField) purposeField.hidden = !(oldRegime && selfOccupied);
      if (readyField) readyField.hidden = !(oldRegime && selfOccupied && buyBuild);

      // New + self occupied: claims are ₹0 — hide rupee inputs.
      var showRupee = !(d.regime === "new" && selfOccupied);
      var showBasket = oldRegime && showRupee;
      var showAge = oldRegime && showRupee;
      var showRent = showRupee && !selfOccupied;

      if (rupeeGroup) rupeeGroup.hidden = !showRupee;
      if (incomeField) incomeField.hidden = !showRupee;
      if (ageField) ageField.hidden = !showAge;
      if (rentField) rentField.hidden = !showRent;
      if (basketField) basketField.hidden = !showBasket;
    }

    function run() {
      syncSituationVisibility();
      var d = readForm(form);
      var principal = parseMoney(d.principal);
      var rate = parseRate(d.rate);
      var years = parseMoney(d.years);
      var year1 = MathLib.firstYearPrincipalInterest(principal, rate, years);
      var result = MathLib.taxSavings({
        principalPaidYear: year1.principal,
        interestPaidYear: year1.interest,
        taxableIncomeBefore: parseMoney(d.taxableIncome) || 0,
        annualRent: parseMoney(d.annualRent) || 0,
        ageBand: d.ageBand || "below60",
        regime: d.regime,
        selfOccupied: d.occupancy !== "letout",
        purpose: d.purpose,
        readyWithin5Years: d.ready !== "no",
        usedPrincipalBasket: parseMoney(d.usedBasket) || 0
      });
      setText(
        "out-tax",
        result.canEstimateRupees === false || result.taxSaved == null
          ? "—"
          : formatINR(result.taxSaved)
      );
      setText("out-int-ded", formatINR(result.interestDeduction));
      setText("out-prin-ded", formatINR(result.principalDeduction));
      setText(
        "out-tax-before",
        result.taxBefore ? formatINR(result.taxBefore.total) : "—"
      );
      setText(
        "out-tax-after",
        result.taxAfter ? formatINR(result.taxAfter.total) : "—"
      );
      setText("out-year-int", formatINR(year1.interest));
      setText("out-year-prin", formatINR(year1.principal));
      setText("out-int-note", result.interestNote || "");
      setText("out-prin-note", result.principalNote || "");
      setText("out-tax-note", result.taxSavedNote || "");
      var noteEl = document.getElementById("out-tax-note");
      if (noteEl) noteEl.hidden = !result.taxSavedNote;

      var rebateNote = "";
      if (result.taxAfter && result.taxAfter.rebateNote) {
        rebateNote = result.taxAfter.rebateNote;
      } else if (result.taxBefore && result.taxBefore.rebateNote) {
        rebateNote = result.taxBefore.rebateNote;
      }
      setText("out-rebate-note", rebateNote);
      var rebateEl = document.getElementById("out-rebate-note");
      if (rebateEl) rebateEl.hidden = !rebateNote;

      var taxLabel = document.getElementById("out-tax-label");
      if (taxLabel) {
        taxLabel.textContent =
          result.canEstimateRupees === false
            ? "Enter income (and rent if let out) for a tax difference"
            : "Estimated tax difference (with 4% cess)";
      }
    }

    ["principal", "rate", "years", "usedBasket", "taxableIncome", "annualRent"].forEach(
      function (name) {
        if (form.elements[name]) bindMoneyInput(form.elements[name]);
      }
    );
    form.addEventListener("input", run);
    form.addEventListener("change", run);
    run();
  }

  var binders = {
    emi: bindEmi,
    "loan-amount": bindLoanAmount,
    "how-much-loan": bindHowMuchLoan,
    eligibility: bindEligibility,
    affordability: bindAffordability,
    prepayment: bindPrepayment,
    "balance-transfer": bindBalanceTransfer,
    tenure: bindTenure,
    "tax-savings": bindTax
  };

  function initLiveDock() {
    var hero = document.querySelector(".calc-readout-hero");
    var numEl = document.querySelector(".calc-readout-hero .calc-result-num");
    var labelEl = document.querySelector(".calc-readout-hero .calc-result-label");
    var readout = document.querySelector(".calc-readout");
    if (!hero || !numEl || !labelEl || !readout) return;

    var dock = document.createElement("button");
    dock.type = "button";
    dock.className = "calc-live-dock";
    dock.setAttribute("aria-label", "Jump to full estimate");
    dock.innerHTML =
      '<span class="calc-live-dock-inner">' +
      '<span class="calc-live-dock-copy">' +
      '<span class="calc-live-dock-num" data-calc-live-num>—</span>' +
      '<span class="calc-live-dock-label" data-calc-live-label></span>' +
      "</span>" +
      '<span class="calc-live-dock-go">Details</span>' +
      "</span>";
    document.body.appendChild(dock);
    document.body.classList.add("calc-dock-ready");

    var liveNum = dock.querySelector("[data-calc-live-num]");
    var liveLabel = dock.querySelector("[data-calc-live-label]");

    function syncDock() {
      liveNum.textContent = numEl.textContent || "—";
      liveLabel.textContent = labelEl.textContent || "";
    }

    syncDock();

    if (typeof MutationObserver === "function") {
      var observer = new MutationObserver(syncDock);
      observer.observe(numEl, {
        characterData: true,
        childList: true,
        subtree: true
      });
      observer.observe(labelEl, {
        characterData: true,
        childList: true,
        subtree: true
      });
    }

    var mq = window.matchMedia("(max-width: 899px)");
    var heroVisible = false;

    function updateVisibility() {
      var show = mq.matches && !heroVisible;
      dock.classList.toggle("is-visible", show);
      dock.setAttribute("aria-hidden", show ? "false" : "true");
      if (!show) dock.setAttribute("tabindex", "-1");
      else dock.removeAttribute("tabindex");
    }

    if (typeof IntersectionObserver === "function") {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            heroVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
          });
          updateVisibility();
        },
        {
          root: null,
          threshold: [0, 0.35, 0.6],
          rootMargin: "-8% 0px -8% 0px"
        }
      );
      io.observe(hero);
    } else {
      heroVisible = false;
      updateVisibility();
    }

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", updateVisibility);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(updateVisibility);
    }
    updateVisibility();

    dock.addEventListener("click", function () {
      readout.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initReveals();
    initLiveDock();
    if (!MathLib) return;
    var form = document.querySelector("form[data-calc]");
    if (!form) return;
    var type = form.getAttribute("data-calc");
    if (binders[type]) binders[type](form);
  });
})();
