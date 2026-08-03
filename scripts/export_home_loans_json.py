#!/usr/bin/env python3
"""
Export data/HOME_LOANS_COMPARE_v1.xlsx → data/home-loans-compare.json
Dumb dump only. No fee/rate repair.

Product query contract (Compare later; no JSON reshape):
1. Match offers by inputs; Blank/Any = no restriction; prefer roi_availability Offered for quotes.
2. Join bank_charges on bank_key (+ filters / when_it_matters).
3. Slabs: group charge_group_id, order by slab_from.
4. Govt: filter by jurisdiction/state.
5. EMI in UI from matched roi + amount + tenure.
6. Apply packet: data_version + bank_keys + offer_row_ids + charge ids.
"""
from __future__ import annotations

import hashlib
import json
import re
import sys
from datetime import date, datetime, timezone
from pathlib import Path
from typing import Any

from openpyxl import load_workbook

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "HOME_LOANS_COMPARE_v1.xlsx"
OUT_JSON = ROOT / "data" / "home-loans-compare.json"
OUT_VAL = ROOT / "data" / "HOME_LOANS_COMPARE_JSON_VALIDATION.md"

SHEETS = {
    "Offers": "offers",
    "Bank_charges": "bank_charges",
    "Government_charges": "government_charges",
}
LOCKED_COUNTS = {"offers": 806, "bank_charges": 2337, "government_charges": 18}
HEADER_RE = re.compile(r"^[A-Za-z][A-Za-z0-9_]*$")


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def cell_value(v: Any) -> Any:
    if v is None:
        return None
    if isinstance(v, str) and v.strip() == "":
        return None
    if isinstance(v, datetime):
        return v.date().isoformat()
    if isinstance(v, date):
        return v.isoformat()
    return v


def read_sheet(wb, sheet_name: str) -> list[dict[str, Any]]:
    ws = wb[sheet_name]
    headers = [c.value for c in next(ws.iter_rows(min_row=1, max_row=1))]
    if any(h is None or not isinstance(h, str) for h in headers):
        raise SystemExit(f"Bad headers on {sheet_name}: {headers!r}")
    bad = [h for h in headers if not HEADER_RE.match(h)]
    if bad:
        raise SystemExit(f"Illegal header names on {sheet_name}: {bad}")
    rows: list[dict[str, Any]] = []
    for raw in ws.iter_rows(min_row=2, values_only=True):
        vals = list(raw)
        if len(vals) < len(headers):
            vals += [None] * (len(headers) - len(vals))
        elif len(vals) > len(headers):
            vals = vals[: len(headers)]
        if all(cell_value(v) is None for v in vals):
            continue
        rows.append({headers[i]: cell_value(vals[i]) for i in range(len(headers))})
    return rows


def atomic_write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(text, encoding="utf-8")
    tmp.replace(path)


def main() -> int:
    if not SOURCE.exists():
        print(f"Missing source: {SOURCE}", file=sys.stderr)
        return 1

    digest = sha256_file(SOURCE)
    now = datetime.now(timezone.utc).replace(microsecond=0)
    generated_at = now.isoformat()
    data_version = f"hlc-{now.strftime('%Y%m%d')}-{digest[:8]}"

    wb = load_workbook(SOURCE, read_only=True, data_only=True)
    if set(wb.sheetnames) != set(SHEETS.keys()):
        print(f"Unexpected sheets {wb.sheetnames!r}; expected {sorted(SHEETS)}", file=sys.stderr)
        wb.close()
        return 1

    payload: dict[str, Any] = {
        "meta": {
            "data_version": data_version,
            "package": "home-loans-compare",
            "schema_version": 1,
            "generated_at": generated_at,
            "source_xlsx": "data/HOME_LOANS_COMPARE_v1.xlsx",
            "source_sha256": digest,
            "row_counts": {},
        }
    }

    for sheet_name, key in SHEETS.items():
        rows = read_sheet(wb, sheet_name)
        expected = LOCKED_COUNTS[key]
        if len(rows) != expected:
            print(f"COUNT FAIL {key}: got {len(rows)} expected {expected}", file=sys.stderr)
            wb.close()
            return 1
        payload[key] = rows
        payload["meta"]["row_counts"][key] = len(rows)

    wb.close()

    # Fail before write if required id fields missing on first row
    if not payload["offers"] or "bank_key" not in payload["offers"][0] or "offer_row_id" not in payload["offers"][0]:
        print("FAIL: offers missing bank_key/offer_row_id", file=sys.stderr)
        return 1
    if not payload["bank_charges"] or "charge_row_id" not in payload["bank_charges"][0]:
        print("FAIL: bank_charges missing charge_row_id", file=sys.stderr)
        return 1

    atomic_write_text(OUT_JSON, json.dumps(payload, ensure_ascii=False, separators=(",", ":")))

    lines = [
        "# HOME_LOANS_COMPARE JSON VALIDATION",
        "",
        "**Result:** PASS (export completed)",
        "",
        f"- data_version: `{data_version}`",
        f"- source_sha256: `{digest}`",
        f"- generated_at: `{generated_at}`",
        f"- offers: {LOCKED_COUNTS['offers']}",
        f"- bank_charges: {LOCKED_COUNTS['bank_charges']}",
        f"- government_charges: {LOCKED_COUNTS['government_charges']}",
        "- output: `data/home-loans-compare.json`",
        "",
        "## Product query contract",
        "1. Match offers by inputs; Blank/Any = no restriction; Offered for customer quotes.",
        "2. Join bank_charges on bank_key (+ filters / when_it_matters).",
        "3. Slabs: group charge_group_id, order slab_from.",
        "4. Govt: filter by jurisdiction/state.",
        "5. EMI in UI from matched roi + amount + tenure.",
        "6. Apply packet: data_version + bank_keys + offer_row_ids + charge ids.",
        "",
        "## One-shot",
        "- Candidate primary JSON only; not auto-promoted to live site.",
        "- Secondary/tertiary/Approve UI out of this export.",
        "",
    ]
    atomic_write_text(OUT_VAL, "\n".join(lines))
    print(f"Wrote {OUT_JSON}")
    print(f"Wrote {OUT_VAL}")
    print(f"data_version={data_version}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
