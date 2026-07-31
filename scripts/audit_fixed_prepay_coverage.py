#!/usr/bin/env python3
"""
Audit: every non-NA CSV fixed-prepay cell maps to ≥1 Fixed Bank_charges row in JSON.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_CSV = ROOT / "data" / "Home Loans - Pre-payment charges - takeover_fixed rrate (1).csv"
DEFAULT_JSON = ROOT / "data" / "home-loans-compare.json"

BANK_ALIASES = {
    "Central bank of India": "Central Bank of India",
    "Bank of Maharastra": "Bank of Maharashtra",
    "Federal bank": "Federal Bank",
    "IDFC first Bank": "IDFC FIRST Bank",
    "Indusind Bank": "IndusInd Bank",
    "Karur Vyasa Bank": "Karur Vysya Bank",
    "Jammu & Kashmir bank": "Jammu and Kashmir Bank",
}


def norm_bank(raw: str) -> str:
    s = re.sub(r"\s+", " ", (raw or "").strip())
    return BANK_ALIASES.get(s, s)


def kind(v: str) -> str:
    t = (v or "").strip()
    if not t:
        return "blank"
    u = t.upper().replace(" ", "")
    if u in ("NIL", "NIL."):
        return "nil"
    if u in ("NA", "N/A", "N.A."):
        return "na"
    return "rule"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", type=Path, default=DEFAULT_CSV)
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

    raw_rows = list(csv.reader(args.csv.open(encoding="utf-8")))
    gaps = []
    for r in raw_rows[3:]:
        if not r or not (r[0] or "").strip():
            continue
        while len(r) < 6:
            r.append("")
        bank = norm_bank(r[0])
        cells = [
            ("Term Loan", "Prepayment charges", r[1], "TL_self"),
            ("Term Loan", "Prepayment charges (takeover)", r[2], "TL_take"),
            ("Overdraft", "Prepayment charges", r[3], "OD_self"),
            ("Overdraft", "Prepayment charges (takeover)", r[4], "OD_take"),
        ]
        if bank == "Yes Bank":
            if kind(r[3]) == "blank":
                cells[2] = ("Overdraft", "Prepayment charges", r[1], "OD_self")
            if kind(r[4]) == "blank":
                cells[3] = ("Overdraft", "Prepayment charges (takeover)", r[2], "OD_take")

        for facility, charge_name, raw, ref in cells:
            k = kind(raw)
            if k == "na" or (k == "blank" and bank != "Yes Bank"):
                continue
            expect_nil = k == "nil" or (
                k == "rule" and "after 6 months" in raw.lower() and "within 6" in raw.lower()
            )
            # IDBI combined cell needs both charged and nil — check charged presence for rule
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
