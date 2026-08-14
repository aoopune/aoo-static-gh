#!/usr/bin/env python3
"""Self-only checks for data/home-loans-compare.json against curated xlsx."""
from __future__ import annotations

import hashlib
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "HOME_LOANS_COMPARE_v1.xlsx"
JSON_PATH = ROOT / "data" / "home-loans-compare.json"
PART_PREPAY_RULES_CSV = ROOT / "data" / "part-prepayment-rules.csv"
LOCKED = {"offers": 806, "bank_charges": 1402, "government_charges": 18}
LOCKED_PART_PREPAY_RULES = 21
PROCESSING_ROWS = 212


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def near(a, b, tol=1e-12) -> bool:
    try:
        return abs(float(a) - float(b)) <= tol
    except (TypeError, ValueError):
        return False


class T:
    def __init__(self) -> None:
        self.passed = 0
        self.failed: list[str] = []

    def check(self, name: str, ok: bool, detail: str = "") -> None:
        if ok:
            self.passed += 1
            print(f"  PASS  {name}")
        else:
            self.failed.append(name)
            print(f"  FAIL  {name}  {detail}")


def main() -> int:
    t = T()
    if not JSON_PATH.exists():
        print(f"Missing {JSON_PATH}", file=sys.stderr)
        return 1
    if not SOURCE.exists():
        print(f"Missing {SOURCE}", file=sys.stderr)
        return 1

    try:
        data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        print(f"JSON parse FAIL: {e}", file=sys.stderr)
        return 1

    meta = data.get("meta") or {}
    digest = sha256_file(SOURCE)

    print("=== Meta / counts ===")
    t.check("schema_version_1", meta.get("schema_version") == 1, str(meta.get("schema_version")))
    t.check("package_name", meta.get("package") == "home-loans-compare", str(meta.get("package")))
    t.check("source_sha", meta.get("source_sha256") == digest, str(meta.get("source_sha256")))
    dv = str(meta.get("data_version") or "")
    t.check("data_version_prefix", dv.startswith("hlc-"), dv)
    t.check("data_version_hash8", dv.endswith(digest[:8]), dv)
    latest = meta.get("latest_checked_on")
    bank_freshness = meta.get("bank_freshness") or {}
    t.check("latest_checked_on_present", bool(latest), str(latest))
    t.check("bank_freshness_map", isinstance(bank_freshness, dict) and len(bank_freshness) > 0, str(len(bank_freshness)))

    for key, n in LOCKED.items():
        got = len(data.get(key) or [])
        t.check(f"count_{key}", got == n, str(got))
        t.check(f"meta_count_{key}", (meta.get("row_counts") or {}).get(key) == n, str((meta.get("row_counts") or {}).get(key)))

    offers = data["offers"]
    banks = data["bank_charges"]
    govt = data["government_charges"]
    part_prepayment_rules = data.get("part_prepayment_rules") or []

    print("\n=== Keys / types ===")
    t.check("offer_keys", all(o.get("bank_key") and o.get("offer_row_id") is not None for o in offers), "")
    t.check(
        "offers_last_checked_on",
        all(o.get("last_checked_on") for o in offers),
        "",
    )
    t.check(
        "charges_last_checked_on",
        all(c.get("last_checked_on") for c in banks),
        "",
    )
    t.check(
        "govt_no_last_checked_on",
        all("last_checked_on" not in g for g in govt),
        "",
    )
    t.check(
        "bank_type_values",
        all(o.get("bank_type") in ("Public", "Private") for o in offers),
        "",
    )
    offer_banks = {o.get("bank_key") for o in offers}
    public_keys = {
        "bank of baroda", "bank of india", "bank of maharashtra", "canara bank",
        "central bank of india", "indian bank", "indian overseas bank",
        "punjab and sind bank", "punjab national bank", "state bank of india",
        "uco bank", "union bank of india",
    }
    t.check("bank_type_public_12", len(offer_banks & public_keys) == 12, str(sorted(offer_banks & public_keys)))
    t.check("bank_type_private_21", len(offer_banks - public_keys) == 21, str(sorted(offer_banks - public_keys)))
    t.check(
        "bank_type_matches_key",
        all(
            (o.get("bank_type") == "Public") == (o.get("bank_key") in public_keys)
            for o in offers
        ),
        "",
    )
    t.check("charge_keys", all(c.get("charge_row_id") and c.get("bank_key") for c in banks), "")
    offer_fresh = {o.get("bank_key"): o.get("last_checked_on") for o in offers if o.get("bank_key")}
    charge_fresh = {c.get("bank_key"): c.get("last_checked_on") for c in banks if c.get("bank_key")}
    inconsistent_offers = sorted(
        bank_key
        for bank_key, checked_on in offer_fresh.items()
        if any(o.get("bank_key") == bank_key and o.get("last_checked_on") != checked_on for o in offers)
    )
    inconsistent_charges = sorted(
        bank_key
        for bank_key, checked_on in charge_fresh.items()
        if any(c.get("bank_key") == bank_key and c.get("last_checked_on") != checked_on for c in banks)
    )
    t.check("offers_freshness_consistent", len(inconsistent_offers) == 0, str(inconsistent_offers[:5]))
    t.check("charges_freshness_consistent", len(inconsistent_charges) == 0, str(inconsistent_charges[:5]))
    mismatched = sorted(
        bank_key
        for bank_key in offer_fresh
        if bank_key in charge_fresh and offer_fresh[bank_key] != charge_fresh[bank_key]
    )
    t.check("offers_charges_freshness_match", len(mismatched) == 0, str(mismatched[:5]))
    t.check(
        "meta_bank_freshness_matches_offers",
        all(bank_freshness.get(k) == v for k, v in offer_fresh.items()),
        "",
    )
    t.check("roi_type", all(o.get("roi") is None or isinstance(o.get("roi"), (int, float)) for o in offers), "")

    print("\n=== Axis Floating → Fixed ===")
    axis = [
        r
        for r in banks
        if r.get("bank_name") == "Axis Bank"
        and r.get("charge_name") == "Interest Rate Type Switch Fees"
        and r.get("interest_rate_type_switch_from") == "Floating"
        and r.get("interest_rate_type_switch_to") == "Fixed"
    ]
    t.check("axis_switch_count_2", len(axis) == 2, str(len(axis)))
    t.check(
        "axis_switch_1pct_min_10000",
        all(near(r.get("percentage"), 0.01) and r.get("charge_min") == 10000 for r in axis),
        str([(r.get("percentage"), r.get("charge_min"), r.get("facility_type")) for r in axis]),
    )

    print("\n=== Joins / hygiene ===")
    bank_keys = {c.get("bank_key") for c in banks if c.get("bank_key")}
    orphan = sorted({o.get("bank_key") for o in offers if o.get("bank_key") not in bank_keys})
    t.check("every_offer_bank_key_has_charges", len(orphan) == 0, str(orphan[:10]))
    t.check("no_purpose_home_loan", not any(r.get("purpose") == "Home Loan" for r in banks), "")
    t.check("no_needs_review", not any(r.get("when_it_matters") == "NEEDS_REVIEW" for r in banks), "")
    t.check("no_loan_agreement_stamp", not any(r.get("charge_name") == "Loan Agreement Stamp Duty" for r in govt), "")
    t.check("govt_count", len(govt) == LOCKED["government_charges"], str(len(govt)))

    print("\n=== Part prepayment rules ===")
    t.check(
        "part_prepayment_rules_count",
        len(part_prepayment_rules) == LOCKED_PART_PREPAY_RULES,
        str(len(part_prepayment_rules)),
    )
    t.check(
        "meta_part_prepayment_rules_count",
        (meta.get("row_counts") or {}).get("part_prepayment_rules")
        == LOCKED_PART_PREPAY_RULES,
        str((meta.get("row_counts") or {}).get("part_prepayment_rules")),
    )
    t.check(
        "part_prepayment_rules_source_meta",
        meta.get("part_prepayment_rules_source") == "data/part-prepayment-rules.csv",
        str(meta.get("part_prepayment_rules_source")),
    )
    t.check(
        "part_prepayment_rules_csv_exists",
        PART_PREPAY_RULES_CSV.exists(),
        str(PART_PREPAY_RULES_CSV),
    )
    t.check(
        "part_prepayment_rule_ids",
        all(
            row.get("rule_row_id") and row.get("bank_key") and row.get("mode")
            for row in part_prepayment_rules
        ),
        "",
    )
    part_prepay_banks = {row.get("bank_key") for row in part_prepayment_rules}
    t.check(
        "part_prepayment_rules_ten_banks",
        len(part_prepay_banks) == 10,
        str(sorted(part_prepay_banks)),
    )
    t.check(
        "part_prepayment_rules_subset_of_offers",
        part_prepay_banks <= offer_banks,
        str(sorted(part_prepay_banks - offer_banks)),
    )
    forbidden = {"na", "n/a", "unknown", "not published", "nil", "-"}
    bad_values: list[str] = []
    for row in part_prepayment_rules:
        for key, value in row.items():
            if isinstance(value, str) and value.strip().lower() in forbidden:
                bad_values.append(f"{row.get('rule_row_id')}:{key}={value!r}")
    t.check("part_prepayment_rules_no_placeholders", len(bad_values) == 0, str(bad_values[:5]))

    print("\n=== Processing fees (post-cleanup) ===")
    proc = [r for r in banks if r.get("origin") == "Offers.processing"]
    t.check("processing_fee_rows", len(proc) == PROCESSING_ROWS, str(len(proc)))
    cibil_proc = [
        r for r in proc
        if r.get("cibil_band_applicable") not in (None, "No", "")
        or r.get("cibil_band_score_min") is not None
        or r.get("cibil_band_score_max") is not None
    ]
    t.check("processing_fee_no_cibil", len(cibil_proc) == 0, str(len(cibil_proc)))
    axis_proc = [r for r in proc if r.get("bank_name") == "Axis Bank"]
    t.check("processing_fee_axis_2", len(axis_proc) == 2, str(len(axis_proc)))
    sbi_proc = [r for r in proc if r.get("bank_name") == "State Bank of India"]
    t.check("processing_fee_sbi_8", len(sbi_proc) == 8, str(len(sbi_proc)))
    canara_pct = sorted(
        {round(float(r.get("percentage")), 6) for r in proc if r.get("bank_name") == "Canara Bank" and r.get("percentage") is not None}
    )
    t.check("processing_fee_canara_no_025", canara_pct == [0.005], str(canara_pct))

    print("\n" + "=" * 50)
    print(f"Passed: {t.passed}   Failed: {len(t.failed)}")
    if t.failed:
        print("Failed:", ", ".join(t.failed))
        return 1
    print("All JSON self-tests passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
