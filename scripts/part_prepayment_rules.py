#!/usr/bin/env python3
"""
Load part-prepayment rules (Sheet52 format) from CSV for home-loans-compare.json.

Blank CSV cells are omitted from JSON — never N/A or placeholder values.
Only banks present in the CSV are exported (no rows for banks without data).
"""
from __future__ import annotations

import csv
import re
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_CSV = ROOT / "data" / "part-prepayment-rules.csv"

INT_FIELDS = frozenset(
    {
        "part_payment_not_allowed_for_first",
        "blocked_within_days_of_emi_due_date",
        "minimum_part_payment_amount_flat_inr",
        "minimum_part_payment_amount_of_emis",
        "minimum_part_payment_percent",
        "maximum_part_payment_month_inr",
        "maximum_part_payment_percent",
        "maximum_part_payment_year_percent",
        "part_payment_allowed_in_a_calendar_month",
        "part_payment_allowed_in_a_financial_year",
        "part_payment_allowed_per_day",
        "part_payment_reflects_in_portal_days_min",
        "part_payment_reflects_in_portal_days_max",
    }
)

FORBIDDEN_VALUES = frozenset(
    {
        "na",
        "n/a",
        "n.a.",
        "nil",
        "unknown",
        "not published",
        "not applicable",
        "-",
        "—",
    }
)


def bank_key(name: str) -> str:
    s = (name or "").lower().strip()
    s = re.sub(r"\s+", " ", s)
    return s.replace("&", "and")


def blank_to_none(value: Any) -> Any:
    if value is None:
        return None
    if isinstance(value, str):
        s = value.strip()
        if not s:
            return None
        if s.lower() in FORBIDDEN_VALUES:
            return None
        return s
    return value


def parse_int(value: Any) -> int | None:
    value = blank_to_none(value)
    if value is None:
        return None
    if isinstance(value, bool):
        return None
    if isinstance(value, int):
        return value
    if isinstance(value, float):
        if value.is_integer():
            return int(value)
        raise ValueError(f"Expected whole number, got {value!r}")
    s = str(value).strip()
    if not s:
        return None
    if s.lower() in FORBIDDEN_VALUES:
        return None
    try:
        f = float(s)
    except ValueError as exc:
        raise ValueError(f"Expected integer, got {value!r}") from exc
    if not f.is_integer():
        raise ValueError(f"Expected whole number, got {value!r}")
    return int(f)


def coerce_field(key: str, value: Any) -> Any:
    value = blank_to_none(value)
    if value is None:
        return None
    if key in INT_FIELDS:
        return parse_int(value)
    return value


def load_part_prepayment_rules(
    csv_path: Path = DEFAULT_CSV,
    *,
    known_bank_keys: frozenset[str] | None = None,
) -> list[dict[str, Any]]:
    if not csv_path.exists():
        raise FileNotFoundError(f"Missing part prepayment rules CSV: {csv_path}")

    with csv_path.open(encoding="utf-8", newline="") as handle:
        reader = csv.DictReader(handle)
        if not reader.fieldnames:
            raise ValueError(f"No headers in {csv_path}")
        if "bank_name" not in reader.fieldnames or "mode" not in reader.fieldnames:
            raise ValueError(f"CSV must include bank_name and mode columns: {csv_path}")

        rows: list[dict[str, Any]] = []
        for index, raw in enumerate(reader, start=1):
            bank_name = blank_to_none(raw.get("bank_name"))
            mode = blank_to_none(raw.get("mode"))
            if bank_name is None or mode is None:
                raise ValueError(f"Row {index}: bank_name and mode are required")

            row: dict[str, Any] = {
                "rule_row_id": f"PPR-{index:03d}",
                "bank_name": bank_name,
                "bank_key": bank_key(bank_name),
                "mode": mode,
            }

            for key in reader.fieldnames:
                if key in ("bank_name", "mode"):
                    continue
                parsed = coerce_field(key, raw.get(key))
                if parsed is not None:
                    row[key] = parsed

            if known_bank_keys is not None and row["bank_key"] not in known_bank_keys:
                raise ValueError(
                    f"Row {index}: bank_key {row['bank_key']!r} not in compare offers"
                )

            rows.append(row)

    return rows
