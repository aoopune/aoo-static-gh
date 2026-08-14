#!/usr/bin/env python3
"""
Audit: every non-NA fixed-prepay cell in source maps to ≥1 Fixed Bank_charges row in JSON.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_XLSX = ROOT / "data" / "Home Loans.xlsx"
DEFAULT_CSV = ROOT / "data" / "Home Loans - Pre-payment charges - takeover_fixed rrate (1).csv"
DEFAULT_JSON = ROOT / "data" / "home-loans-compare.json"

sys.path.insert(0, str(ROOT / "scripts"))
from structure_fixed_prepay_csv import (  # noqa: E402
    DEFAULT_SHEET,
    cell_kind,
    load_bank_rows_from_csv,
    load_bank_rows_from_xlsx,
)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--xlsx", type=Path, default=DEFAULT_XLSX)
    ap.add_argument("--sheet", type=str, default=DEFAULT_SHEET)
    ap.add_argument("--csv", type=Path, default=None, help="Legacy CSV instead of xlsx")
    ap.add_argument("--compare-json", type=Path, default=DEFAULT_JSON)
    args = ap.parse_args()

    data = json.loads(args.compare_json.read_text(encoding="utf-8"))
    fixed = [
        c
        for c in data["bank_charges"]
        if c.get("charge_name")
        in ("Prepayment charges", "Prepayment charges (takeover)")
        and c.get("rate_type") == "Fixed"
    ]

    def has_row(bank: str, facility: str, charge_name: str, expect_nil: bool) -> bool:
        for c in fixed:
            if c.get("bank_name") != bank:
                continue
            if c.get("facility_type") != facility:
                continue
            if c.get("charge_name") != charge_name:
                continue
            is_nil = c.get("fixed_amount") == 0 and (
                c.get("percentage") is None or c.get("percentage") == 0
            )
            if expect_nil and is_nil:
                return True
            if not expect_nil and not is_nil and c.get("percentage") is not None:
                return True
        return False

    if args.csv is not None:
        bank_rows = load_bank_rows_from_csv(args.csv)
    else:
        bank_rows = load_bank_rows_from_xlsx(args.xlsx, args.sheet)

    gaps = []
    for bank, cells_raw, _url in bank_rows:
        while len(cells_raw) < 4:
            cells_raw.append("")
        cells = [
            ("Term Loan", "Prepayment charges", cells_raw[0], "TL_self"),
            ("Term Loan", "Prepayment charges (takeover)", cells_raw[1], "TL_take"),
            ("Overdraft", "Prepayment charges", cells_raw[2], "OD_self"),
            ("Overdraft", "Prepayment charges (takeover)", cells_raw[3], "OD_take"),
        ]
        if bank == "Yes Bank":
            if cell_kind(cells_raw[2]) == "blank":
                cells[2] = ("Overdraft", "Prepayment charges", cells_raw[0], "OD_self")
            if cell_kind(cells_raw[3]) == "blank":
                cells[3] = ("Overdraft", "Prepayment charges (takeover)", cells_raw[1], "OD_take")

        for facility, charge_name, raw, ref in cells:
            k = cell_kind(raw)
            if k == "na" or (k == "blank" and bank != "Yes Bank"):
                continue
            if k == "rule" and "within 6 months" in raw.lower():
                ok_charged = has_row(bank, facility, charge_name, expect_nil=False)
                ok_nil = has_row(bank, facility, charge_name, expect_nil=True)
                if not ok_charged or not ok_nil:
                    gaps.append(f"{bank}|{ref}: need charged+nil bands")
                continue
            if k == "nil":
                if not has_row(bank, facility, charge_name, expect_nil=True):
                    gaps.append(f"{bank}|{ref}: missing nil row")
                continue
            if not has_row(bank, facility, charge_name, expect_nil=False):
                gaps.append(f"{bank}|{ref}: missing charged row ({raw[:60]!r})")

    print(f"fixed_prepay_rows_in_json={len(fixed)}")
    if gaps:
        print(f"GAPS={len(gaps)}")
        for g in gaps:
            print(" ", g)
        return 1
    print("AUDIT PASS: 0 gaps")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
