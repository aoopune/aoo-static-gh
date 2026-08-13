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
LOCKED = {"offers": 806, "bank_charges": 2347, "government_charges": 18}


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

    for key, n in LOCKED.items():
        got = len(data.get(key) or [])
        t.check(f"count_{key}", got == n, str(got))
        t.check(f"meta_count_{key}", (meta.get("row_counts") or {}).get(key) == n, str((meta.get("row_counts") or {}).get(key)))

    offers = data["offers"]
    banks = data["bank_charges"]
    govt = data["government_charges"]

    print("\n=== Keys / types ===")
    t.check("offer_keys", all(o.get("bank_key") and o.get("offer_row_id") is not None for o in offers), "")
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

    print("\n" + "=" * 50)
    print(f"Passed: {t.passed}   Failed: {len(t.failed)}")
    if t.failed:
        print("Failed:", ", ".join(t.failed))
        return 1
    print("All JSON self-tests passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
