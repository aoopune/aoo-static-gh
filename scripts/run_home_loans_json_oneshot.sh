#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "== preflight =="
test -f "data/HOME_LOANS_COMPARE_v1.xlsx" || { echo "FAIL: missing data/HOME_LOANS_COMPARE_v1.xlsx"; exit 1; }
test -f "scripts/export_home_loans_json.py" || { echo "FAIL: missing export script"; exit 1; }
test -f "scripts/selftest_home_loans_json.py" || { echo "FAIL: missing selftest script"; exit 1; }
python3 -c "import openpyxl" || { echo "FAIL: openpyxl not installed (pip install openpyxl)"; exit 1; }

echo "== export =="
python3 scripts/export_home_loans_json.py

echo "== selftest =="
python3 scripts/selftest_home_loans_json.py

echo "== cache-bust data URL =="
node scripts/stamp-asset-versions.js

echo "== unit tests =="
node tests/run-unit.js

echo "== artifacts =="
test -f "data/home-loans-compare.json" || { echo "FAIL: json missing"; exit 1; }
test -f "data/HOME_LOANS_COMPARE_JSON_VALIDATION.md" || { echo "FAIL: validation md missing"; exit 1; }
python3 -c "import json; json.load(open('data/home-loans-compare.json',encoding='utf-8')); print('JSON parse OK')"

echo "ONE-SHOT PASS"
