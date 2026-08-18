#!/usr/bin/env node
/**
 * Audit Later charges: every bank's shown values vs packaged bank_charges atoms.
 * Ground truth = data/home-loans-compare.json (and XLSX parity).
 */
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const compare = require("../src/home-loan-compare.js");
const CHARGE_NOT_PUBLISHED_BY_BANK = compare.CHARGE_NOT_PUBLISHED_BY_BANK;

const ROOT = path.join(__dirname, "..");
const JSON_PATH = path.join(ROOT, "data", "home-loans-compare.json");
const FIXED_PREPAY_CSV = path.join(ROOT, "data", "fixed-prepay-structured.csv");

const issues = [];
const notes = [];

function issue(kind, bank, detail) {
  issues.push({ kind: kind, bank: bank || "", detail: detail || "" });
}
function note(kind, bank, detail) {
  notes.push({ kind: kind, bank: bank || "", detail: detail || "" });
}

function parseMainPercent(main) {
  const m = String(main || "").match(/^(\d+(?:\.\d+)?)%/);
  return m ? Number(m[1]) / 100 : null;
}
function parseMainInr(main) {
  const digits = String(main || "").replace(/[^\d]/g, "");
  return digits ? Number(digits) : null;
}
function nearlyEqual(a, b) {
  if (a == null || b == null) return false;
  return Math.abs(Number(a) - Number(b)) <= 1e-9;
}
function displayText(d) {
  return compare.formatChargeDisplayText(d);
}

function auditOverdue(row, rateLabel) {
  const bank = row.bankName + " [" + rateLabel + "]";
  const charge = row.overdueCharge;
  const disp = row.overdueChargeDisplay;
  if (!charge) {
    issue("overdue_missing", bank, "no Overdue charges atom");
    return;
  }
  if (charge.charge_name !== "Overdue charges") {
    issue("overdue_wrong_name", bank, charge.charge_name);
  }

  const slabs = row.overdueChargeSlabs || [];
  if (slabs.length > 1) {
    const matched = compare.resolveApplicableCharge(
      slabs,
      row.overdueCharge,
      compare.chargeCaseFromRow(row)
    );
    if (matched && matched.fixed_amount != null) {
      const expected = compare.formatInr(Number(matched.fixed_amount));
      if (disp.main !== expected) {
        issue("overdue_slab_amount", bank, disp.main + " vs " + expected);
      }
    }
    slabs.forEach(function (s, i) {
      if (
        s.fixed_amount == null &&
        (s.percentage == null || !Number.isFinite(Number(s.percentage)))
      ) {
        issue(
          "overdue_slab_missing_amount",
          bank,
          "i=" + i + " type=" + s.charge_type + " pct=" + s.percentage
        );
      }
    });
    return;
  }

  if (
    charge.special_rule &&
    String(charge.special_rule).toLowerCase() === "as_per_roi"
  ) {
    if (disp.main !== "At home loan interest rate") {
      issue("overdue_as_per_roi", bank, disp.main);
    }
    return;
  }

  if (charge.percentage != null && Number.isFinite(Number(charge.percentage))) {
    const shown = parseMainPercent(disp.main);
    if (!nearlyEqual(shown, charge.percentage)) {
      issue(
        "overdue_pct_mismatch",
        bank,
        "atom=" + charge.percentage + " main=" + disp.main + " parsed=" + shown
      );
    }
  } else if (
    charge.fixed_amount != null &&
    Number.isFinite(Number(charge.fixed_amount))
  ) {
    const shown = parseMainInr(disp.main);
    if (shown !== Number(charge.fixed_amount) && disp.main !== "Fixed amount by overdue range") {
      issue(
        "overdue_fixed_mismatch",
        bank,
        "atom=" + charge.fixed_amount + " main=" + disp.main
      );
    }
  } else if (disp.main === CHARGE_NOT_PUBLISHED_BY_BANK || disp.main === "—") {
    issue("overdue_empty_atom", bank, JSON.stringify({
      type: charge.charge_type,
      special: charge.special_rule,
      note: charge.note_1
    }));
  }

  // If percentage multi-slab footnote exists, every higher slab % must appear
  if (row.overdueDetailFootnote) {
    if (!disp.marker) {
      issue("overdue_footnote_no_marker", bank, row.overdueDetailFootnote);
    }
  }
}

function auditBounce(row, rateLabel) {
  const bank = row.bankName + " [" + rateLabel + "]";
  const charge = row.emiBounceCharge;
  const disp = row.emiBounceChargeDisplay;
  if (!charge) {
    issue("bounce_missing", bank, "no bounce/return atom");
    return;
  }
  if (!/(bounce|dishonour|return)/i.test(charge.charge_name || "")) {
    issue("bounce_wrong_name", bank, charge.charge_name);
  }

  const slabs = row.emiBounceChargeSlabs || [];
  if (slabs.length > 1) {
    const matched = compare.resolveApplicableCharge(
      slabs,
      row.emiBounceCharge,
      compare.chargeCaseFromRow(row)
    );
    if (matched && matched.fixed_amount != null) {
      const expected = Number(matched.fixed_amount);
      const shown = parseMainInr(disp.main);
      if (shown !== expected) {
        issue(
          "bounce_slab_amount",
          bank,
          "shown=" + disp.main + " expected=" + compare.formatInr(expected)
        );
      }
    }
  }

  // Display must match the resolved charge atom.
  if (charge.percentage != null && Number.isFinite(Number(charge.percentage))) {
    const shown = parseMainPercent(disp.main);
    if (shown != null && !nearlyEqual(shown, charge.percentage)) {
      issue(
        "bounce_pct_mismatch",
        bank,
        "atom=" + charge.percentage + " main=" + disp.main
      );
    }
  }
  if (
    charge.fixed_amount != null &&
    Number.isFinite(Number(charge.fixed_amount)) &&
    !charge.fixed_amount_per_1000_rs
  ) {
    if (/^₹/.test(disp.main)) {
      const shown = parseMainInr(disp.main);
      if (shown !== Number(charge.fixed_amount)) {
        issue(
          "bounce_fixed_mismatch",
          bank,
          "atom=" + charge.fixed_amount + " main=" + disp.main
        );
      }
    }
  }
  if (charge.fixed_amount_per_1000_rs != null) {
    const per = Number(charge.fixed_amount_per_1000_rs);
    if (disp.main.indexOf(String(per)) < 0 && displayText(disp).indexOf("per ₹1,000") < 0) {
      issue(
        "bounce_per_1000_mismatch",
        bank,
        "atom=" + per + " main=" + disp.main
      );
    }
  }
}

function auditPrepay(row, rateLabel) {
  const bank = row.bankName + " [" + rateLabel + "]";
  if (rateLabel === "Floating") {
    if (row.prepaymentChargeDisplay.main !== "Nil (₹0)") {
      issue("floating_prepay_not_nil", bank, row.prepaymentChargeDisplay.main);
    }
    return;
  }

  function check(label, charge) {
    const disp = compare.formatPrepaymentChargeDisplay(charge);
    if (!charge) {
      if (disp.main !== CHARGE_NOT_PUBLISHED_BY_BANK) {
        issue("prepay_" + label + "_orphan", bank, disp.main);
      } else {
        note("prepay_" + label + "_not_listed", bank, "no atom in package");
      }
      return;
    }
    if (compare.isPrepaymentNotCharged(charge)) {
      if (disp.main !== "Nil (₹0)") {
        issue("prepay_" + label + "_nil", bank, disp.main);
      }
      return;
    }
    if (charge.percentage != null && Number.isFinite(Number(charge.percentage))) {
      const shown = parseMainPercent(disp.main);
      if (!nearlyEqual(shown, charge.percentage)) {
        issue(
          "prepay_" + label + "_pct",
          bank,
          "atom=" + charge.percentage + " main=" + disp.main + " parsed=" + shown
        );
      }
    } else if (
      charge.fixed_amount != null &&
      Number.isFinite(Number(charge.fixed_amount))
    ) {
      const shown = parseMainInr(disp.main);
      if (shown !== Number(charge.fixed_amount)) {
        issue(
          "prepay_" + label + "_fixed",
          bank,
          "atom=" + charge.fixed_amount + " main=" + disp.main
        );
      }
    }
    const expectName =
      label === "own" ? "Prepayment charges" : "Prepayment charges (takeover)";
    if (charge.charge_name !== expectName) {
      issue("prepay_" + label + "_name", bank, charge.charge_name);
    }
  }

  check("own", row.prepayOwnFundsCharge);
  check("takeover", row.prepayTakeoverCharge);

  const ownDisp = compare.formatPrepaymentChargeDisplay(row.prepayOwnFundsCharge);
  if (ownDisp.main !== row.prepaymentChargeDisplay.main) {
    issue(
      "prepay_row_desync",
      bank,
      "row=" + row.prepaymentChargeDisplay.main + " own=" + ownDisp.main
    );
  }
}

async function matchAll(dataset, fixedRate) {
  const query = compare.queryFromInputs(
    {
      age: 35,
      cibilScore: 780,
      monthlyIncome: 100000,
      occupation: "Salaried",
      propertyValue: 6250000
    },
    { fixedRate: !!fixedRate }
  );
  const engine = compare.createMatchEngine();
  return compare.matchOffers(dataset, query, engine);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') inQuotes = !inQuotes;
    else if (inQuotes) cell += c;
    else if (c === ",") {
      row.push(cell.trim());
      cell = "";
    } else if (c === "\n" || c === "\r") {
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
      if (c === "\r" && text[i + 1] === "\n") i++;
    } else cell += c;
  }
  if (cell || row.length) {
    row.push(cell.trim());
    if (row.some(Boolean)) rows.push(row);
  }
  return rows;
}

function auditFixedPrepayCsv(dataset) {
  const raw = fs.readFileSync(FIXED_PREPAY_CSV, "utf8");
  const table = parseCsv(raw);
  const headers = table[0];
  const idx = {};
  headers.forEach(function (h, i) {
    idx[h] = i;
  });
  const jsonRows = dataset.bank_charges.filter(function (c) {
    return c.origin === "CSV.fixed_prepay";
  });

  // Build lookup: bank_key|charge_name|percentage|fixed|status
  function keyOf(bankKey, chargeName, percentage, fixed, status) {
    return [
      bankKey,
      chargeName,
      percentage == null || percentage === "" ? "" : String(Number(percentage)),
      fixed == null || fixed === "" ? "" : String(Number(fixed)),
      status || ""
    ].join("|");
  }

  const jsonKeys = new Map();
  jsonRows.forEach(function (c) {
    const status = compare.isPrepaymentNotCharged(c) ? "NIL" : "CHARGE";
    const k = keyOf(
      c.bank_key,
      c.charge_name,
      c.percentage,
      c.fixed_amount,
      status
    );
    jsonKeys.set(k, c);
  });

  let csvChargeRows = 0;
  let csvMatched = 0;
  for (let r = 1; r < table.length; r++) {
    const row = table[r];
    const status = String(row[idx.charge_status] || "").toLowerCase();
    if (status === "na") continue; // intentionally not in JSON
    csvChargeRows++;
    const bankKey = row[idx.bank_key];
    const chargeName = row[idx.charge_name];
    const percentage =
      row[idx.percentage] === "" || row[idx.percentage] == null
        ? null
        : Number(row[idx.percentage]);
    const fixed =
      row[idx.fixed_amount] === "" || row[idx.fixed_amount] == null
        ? null
        : Number(row[idx.fixed_amount]);
    const normStatus = status === "nil" ? "NIL" : "CHARGE";
    const softHits = jsonRows.filter(function (c) {
      return (
        String(c.bank_key) === String(bankKey) &&
        c.charge_name === chargeName &&
        ((normStatus === "NIL" && compare.isPrepaymentNotCharged(c)) ||
          (normStatus !== "NIL" &&
            percentage != null &&
            nearlyEqual(c.percentage, percentage)) ||
          (normStatus !== "NIL" &&
            percentage == null &&
            fixed != null &&
            Number(c.fixed_amount) === fixed))
      );
    });
    if (!softHits.length) {
      issue(
        "fixed_prepay_csv_missing_in_json",
        row[idx.bank_name] || bankKey,
        chargeName +
          " status=" +
          status +
          " pct=" +
          percentage +
          " fixed=" +
          fixed
      );
    } else {
      csvMatched++;
      const soft = softHits[0];
      const disp = compare.formatPrepaymentChargeDisplay(soft);
      if (normStatus === "NIL" && disp.main !== "Nil (₹0)") {
        issue("fixed_prepay_csv_nil_display", soft.bank_name, disp.main);
      }
      if (
        normStatus !== "NIL" &&
        percentage != null &&
        !nearlyEqual(parseMainPercent(disp.main), percentage)
      ) {
        issue(
          "fixed_prepay_csv_pct_display",
          soft.bank_name,
          "csv=" + percentage + " display=" + disp.main
        );
      }
    }
  }
  note(
    "fixed_prepay_csv_coverage",
    "",
    "csvChargeRows=" +
      csvChargeRows +
      " matched=" +
      csvMatched +
      " jsonOriginRows=" +
      jsonRows.length
  );
}

function auditXlsxParity() {
  const py = `
import json, sys, re
from pathlib import Path
from openpyxl import load_workbook
root = Path(${JSON.stringify(ROOT)})
wb = load_workbook(root / 'data' / 'HOME_LOANS_COMPARE_v1.xlsx', read_only=True, data_only=True)
ws = wb['Bank_charges']
headers = [c.value for c in next(ws.iter_rows(min_row=1, max_row=1))]
xlsx_rows = []
for raw in ws.iter_rows(min_row=2, values_only=True):
    xlsx_rows.append({headers[i]: raw[i] if i < len(headers) else None for i in range(len(headers))})
data = json.loads((root / 'data' / 'home-loans-compare.json').read_text())
json_rows = data['bank_charges']

def is_later(r):
    name = (r.get('charge_name') or '')
    if r.get('when_it_matters') != 'After offer':
        return False
    if name == 'Overdue charges':
        return True
    if name in ('Prepayment charges', 'Prepayment charges (takeover)'):
        return True
    if re.search(r'bounce|dishonour|return', name, re.I):
        return True
    return False

xj = [r for r in xlsx_rows if is_later(r)]
jj = [r for r in json_rows if is_later(r)]
print('COUNTS', len(xj), len(jj))
xm = {str(r.get('charge_row_id') or ''): r for r in xj}
jm = {str(r.get('charge_row_id') or ''): r for r in jj}
only_x = sorted(set(xm) - set(jm) - {''})
only_j = sorted(set(jm) - set(xm) - {''})
print('ONLY_XLSX', len(only_x))
print('ONLY_JSON', len(only_j))
fields = ['bank_key','bank_name','charge_name','percentage','fixed_amount','fixed_amount_per_1000_rs','charge_min','charge_max','percentage_per_annum','percentage_base_value','special_rule','note_1','note_2','has_slab_wise_charges','slab_from','slab_to','charge_type','gst_applicable','has_grace_period','grace_period_days','charge_by_area','origin','rate_type']
mismatches = 0
for kid in sorted(set(xm) & set(jm)):
    xr, jr = xm[kid], jm[kid]
    for f in fields:
        xv, jv = xr.get(f), jr.get(f)
        if xv is None or xv == '':
            xv = None
        if jv is None or jv == '':
            jv = None
        if xv == jv:
            continue
        try:
            if xv is not None and jv is not None and float(xv) == float(jv):
                continue
        except Exception:
            pass
        mismatches += 1
        if mismatches <= 30:
            print(f'MISMATCH {kid}|{jr.get("bank_name")}|{jr.get("charge_name")}|{f}|xlsx={xv!r}|json={jv!r}')
print('FIELD_MISMATCHES', mismatches)
`;
  const res = spawnSync("python3", ["-c", py], {
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024
  });
  if (res.status !== 0) {
    issue("xlsx_parity_failed", "", (res.stderr || "").slice(0, 400));
    return;
  }
  (res.stdout || "")
    .trim()
    .split("\n")
    .forEach(function (line) {
      if (line.startsWith("COUNTS")) {
        note("xlsx_counts", "", line);
        const p = line.split(/\s+/);
        if (p[1] !== p[2]) {
          issue("xlsx_json_count", "", line);
        }
      } else if (line.startsWith("ONLY_XLSX")) {
        if (Number(line.split(/\s+/)[1]) > 0) issue("later_only_xlsx", "", line);
      } else if (line.startsWith("ONLY_JSON")) {
        if (Number(line.split(/\s+/)[1]) > 0) issue("later_only_json", "", line);
      } else if (line.startsWith("FIELD_MISMATCHES")) {
        note("xlsx_fields", "", line);
        if (Number(line.split(/\s+/)[1]) > 0) {
          issue("xlsx_field_mismatches", "", line);
        }
      } else if (line.startsWith("MISMATCH")) {
        issue("xlsx_field_sample", "", line.slice(9));
      }
    });
}

function auditInventory(dataset) {
  const banks = new Set(
    dataset.offers.map(function (o) {
      return o.bank_key;
    })
  );
  const overdue = new Set();
  const bounce = new Set();
  dataset.bank_charges.forEach(function (c) {
    if (c.when_it_matters !== "After offer") return;
    if (c.charge_name === "Overdue charges") overdue.add(c.bank_key);
    if (/(bounce|dishonour|return)/i.test(c.charge_name || "")) bounce.add(c.bank_key);
  });
  banks.forEach(function (bk) {
    const name = (
      dataset.offers.find(function (o) {
        return o.bank_key === bk;
      }) || {}
    ).bank_name;
    if (!overdue.has(bk)) issue("inventory_no_overdue", name, bk);
    if (!bounce.has(bk)) issue("inventory_no_bounce", name, bk);
  });
  note(
    "inventory",
    "",
    "banks=" + banks.size + " overdue=" + overdue.size + " bounce=" + bounce.size
  );
}

function auditRateChange(row, rateLabel) {
  const bank = row.bankName + " [" + rateLabel + "]";
  const methods = [
    {
      id: compare.RATE_CHANGE_METHOD_TYPE,
      charge: row.rateChangeTypeSwitchCharge,
      label: "type"
    },
    {
      id: compare.RATE_CHANGE_METHOD_REPRICE,
      charge: row.rateChangeRepricingCharge,
      label: "reprice"
    },
    {
      id: compare.RATE_CHANGE_METHOD_BENCHMARK,
      charge: row.rateChangeBenchmarkCharge,
      label: "benchmark"
    }
  ];
  methods.forEach(function (entry) {
    const probe = {
      rateChangeTypeSwitchCharge: row.rateChangeTypeSwitchCharge,
      rateChangeRepricingCharge: row.rateChangeRepricingCharge,
      rateChangeBenchmarkCharge: row.rateChangeBenchmarkCharge,
      rateChangeTypeSwitchCandidates: row.rateChangeTypeSwitchCandidates,
      rateChangeRepricingCandidates: row.rateChangeRepricingCandidates,
      rateChangeBenchmarkCandidates: row.rateChangeBenchmarkCandidates
    };
    compare.applyRateChangeMethodToRows([probe], entry.id);
    const disp = probe.rateChangeChargeDisplay;
    const charge = entry.charge;
    if (!charge) {
      if (!disp || disp.main !== CHARGE_NOT_PUBLISHED_BY_BANK) {
        issue(
          "rate_change_missing_display",
          bank,
          entry.label + "=" + (disp && disp.main)
        );
      }
      return;
    }
    const resolved = compare.resolveApplicableCharge(
      probe.rateChangeChargeSlabs,
      charge,
      compare.chargeCaseFromRow(row),
      row.loanAmount
    );
    const expected = compare.formatRateChangeChargeDisplay(resolved);
    if (disp.main !== expected.main) {
      issue(
        "rate_change_display_mismatch",
        bank,
        entry.label + " row=" + disp.main + " atom=" + expected.main
      );
    }
  });
}

function printMatrix(rows, label) {
  console.log("\n=== " + label + " ===");
  rows
    .slice()
    .sort(function (a, b) {
      return a.bankName.localeCompare(b.bankName);
    })
    .forEach(function (row) {
      console.log(
        [
          row.bankName.padEnd(28),
          displayText(row.overdueChargeDisplay).slice(0, 28).padEnd(28),
          displayText(row.emiBounceChargeDisplay).slice(0, 28).padEnd(28),
          displayText(row.prepaymentChargeDisplay).slice(0, 12).padEnd(12),
          displayText(row.rateChangeChargeDisplay).slice(0, 18)
        ].join(" | ")
      );
    });
}

async function main() {
  const dataset = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  console.log("Dataset", dataset.meta.data_version);

  auditInventory(dataset);
  auditXlsxParity();
  auditFixedPrepayCsv(dataset);

  const floating = await matchAll(dataset, false);
  const fixed = await matchAll(dataset, true);
  console.log("Matched floating banks", floating.length, "fixed banks", fixed.length);

  floating.forEach(function (row) {
    auditOverdue(row, "Floating");
    auditBounce(row, "Floating");
    auditPrepay(row, "Floating");
    auditRateChange(row, "Floating");
  });
  fixed.forEach(function (row) {
    auditOverdue(row, "Fixed");
    auditBounce(row, "Fixed");
    auditPrepay(row, "Fixed");
    auditRateChange(row, "Fixed");
  });

  printMatrix(floating, "Floating later charges");
  printMatrix(fixed, "Fixed later charges");

  console.log("\n=== NOTES (" + notes.length + ") ===");
  notes.forEach(function (n) {
    console.log("NOTE", n.kind, n.bank, n.detail);
  });

  const byKind = {};
  issues.forEach(function (i) {
    byKind[i.kind] = (byKind[i.kind] || 0) + 1;
  });
  console.log("\n=== ISSUES (" + issues.length + ") ===");
  Object.keys(byKind)
    .sort()
    .forEach(function (k) {
      console.log("COUNT", byKind[k], k);
    });
  issues.forEach(function (i) {
    console.log("ISSUE", i.kind, "|", i.bank, "|", i.detail);
  });

  console.log(
    "\nVERDICT:",
    issues.length === 0
      ? "PASS — every later-charge figure matches packaged source data"
      : "FAIL — " + issues.length + " issue(s)"
  );
  process.exit(issues.length ? 1 : 0);
}

main().catch(function (err) {
  console.error(err);
  process.exit(2);
});
