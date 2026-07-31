#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

CSV='data/Home Loans - Pre-payment charges - takeover_fixed rrate (1).csv'
STRUCT='data/fixed-prepay-structured.csv'
COMPARE='data/HOME_LOANS_COMPARE_v1.xlsx'
LOCK_SNIP='/tmp/bank_charges_lock.txt'

echo '== structure CSV =='
python3 scripts/structure_fixed_prepay_csv.py --input "$CSV" --output "$STRUCT"

echo '== upsert COMPARE (Fixed prepay only) =='
python3 scripts/upsert_fixed_prepay_into_compare.py \
  --structured "$STRUCT" \
  --compare "$COMPARE" \
  --write-lock-snippet "$LOCK_SNIP"

N="$(tr -d '[:space:]' < "$LOCK_SNIP")"
echo "== patch export locks to bank_charges=$N =="
python3 - << PY
from pathlib import Path
n = int(Path("$LOCK_SNIP").read_text().strip())
for rel in ("scripts/export_home_loans_json.py", "scripts/selftest_home_loans_json.py"):
    p = Path(rel)
    text = p.read_text(encoding="utf-8")
    if "LOCKED_COUNTS" in text:
        text2 = __import__("re").sub(
            r'("bank_charges"\s*:\s*)\d+',
            rf"\g<1>{n}",
            text,
            count=1,
        )
        if "LOCKED =" in text2 and "bank_charges" in text2:
            text2 = __import__("re").sub(
                r'("bank_charges"\s*:\s*)\d+',
                rf"\g<1>{n}",
                text2,
            )
        p.write_text(text2, encoding="utf-8")
        print(f"patched {rel}")
    elif "LOCKED =" in text:
        text2 = __import__("re").sub(
            r'("bank_charges"\s*:\s*)\d+',
            rf"\g<1>{n}",
            text,
        )
        p.write_text(text2, encoding="utf-8")
        print(f"patched {rel}")
    else:
        raise SystemExit(f"no lock map in {rel}")
PY

echo '== export JSON =='
python3 scripts/export_home_loans_json.py

echo '== selftest JSON =='
python3 scripts/selftest_home_loans_json.py

echo '== audit CSV coverage =='
python3 scripts/audit_fixed_prepay_coverage.py --csv "$CSV" --compare-json data/home-loans-compare.json

echo '== build compare bundle =='
npm run build:compare

echo '== unit tests =='
npm test

echo 'FIXED PREPAY ONESHOT PASS'
