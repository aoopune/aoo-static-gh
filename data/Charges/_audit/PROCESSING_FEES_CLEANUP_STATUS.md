# Processing fees cleanup — final status

**Completed:** 2026-08-14

Source of truth: `data/Home Loans.xlsx` → **Processing fees**
Master: `data/HOME_LOANS_COMPARE_v1.xlsx` → **Bank_charges** (`origin=Offers.processing`)

## Overall numbers

| Metric | Before cleanup | After cleanup |
|---|---:|---:|
| Processing fee rows | 1,161 | 212 |
| Total Bank_charges rows | 2,347 | 1398 |
| Banks | 33 | 33 |
| Rows with CIBIL on processing | ~999+ | 0 |
| Exact duplicate keys | many | 0 |

## Problem-by-problem

### Unwanted CIBIL bands on processing fees

**Status:** DONE

- **What was wrong:** Most banks had 5–10 CIBIL score bands per fee — not in your human sheet.
- **What we did:** Set cibil_band_applicable=No and cleared min/max on every Offers.processing row; removed duplicate rows that only differed by CIBIL.
- **Now:** 0 rows still have CIBIL on processing fees (target: 0).

### SBI — 72 duplicate rows and max-cap confusion

**Status:** DONE

- **What was wrong:** 9× copies of each rule (72 rows). Max ₹15,000 and ₹18,000 looked like a conflict.
- **What we did:** You deleted 64 duplicate rows manually. Kept 8 rows: scheme × occupation split (Salaried max ₹15,000; Self-Employed max ₹18,000).
- **Now:** 8 rows, no CIBIL, no duplicates.

### Canara — extra 0.25% tier not in your sheet

**Status:** DONE

- **What was wrong:** Master had 0.25%, min ₹750, max ₹5,000 on top of your 0.50% rule.
- **What we did:** Deleted 5 rows with 0.25% (CHG-PROC-501, 506, 511, 516, 521 and dedupe siblings).
- **Now:** 5 rows — all 0.50%, min ₹1,500, max ₹10,000 with loan-amount bands only.

### REVIEW banks — CIBIL noise on top of real splits

**Status:** DONE

- **What was wrong:** PNB, Union, BOM, ICICI, IDBI, Indian Bank, IOB, KVB, Nainital, PSB had CIBIL splits your sheet never mentions.
- **What we did:** Automated cleanup: CIBIL cleared + dedupe across all banks.
- **Now:** Row counts reduced to real splits only (scheme, loan slab, occupation, etc.).

### Bank of Baroda — 240 rows (CIBIL explosion)

**Status:** DONE

- **What was wrong:** Rates matched your sheet but 10 CIBIL bands multiplied every row.
- **What we did:** CIBIL cleared + dedupe.
- **Now:** 24 rows — 0.50% / 0.25% loan bands with min ₹8,500, no CIBIL.

### Jammu & Kashmir — bank name spelling

**Status:** DONE

- **What was wrong:** Your sheet said 'Jammu & Kashmir bank'; master uses 'Jammu and Kashmir Bank'.
- **What we did:** Updated Home Loans.xlsx Processing fees row to official name 'Jammu and Kashmir Bank'.
- **Now:** Names aligned; 1 processing row (0.25%, min ₹2,000, max ₹50,000).

### PASS banks (19) — amounts already matched

**Status:** DONE

- **What was wrong:** Axis, HDFC, Yes, Federal, DCB, Kotak, RBL, etc. — core rate/min/max correct; some had extra CIBIL rows.
- **What we did:** CIBIL cleared + dedupe where needed. Axis left untouched (already 2 correct rows).
- **Now:** All 19 still pass amount checks; CIBIL removed.

### Multiple rows per bank (intentional, not a bug)

**Status:** BY DESIGN

- **What was wrong:** Your sheet is one summary line; master needs rows when fee differs by scheme, loan size, occupation, etc.
- **What we did:** Kept rows that differ on real dimensions; removed only CIBIL-only duplicates.
- **Now:** 212 total processing rows across 33 banks (down from 1,161).

## Per-bank verdict (post-cleanup)

| Bank | Verdict | Rows | CIBIL rows | Ref amount check |
|---|---|---:|---:|---|
| Axis Bank | PASS (multi-row) | 2 | 0 | OK |
| Bandhan Bank | PASS | 1 | 0 | OK |
| Bank of Baroda | PASS (multi-row) | 24 | 0 | OK |
| Bank of India | PASS (multi-row) | 32 | 0 | OK |
| Bank of Maharashtra | PASS (multi-row) | 9 | 0 | OK |
| CSB Bank | PASS | 1 | 0 | OK |
| Canara Bank | PASS (multi-row) | 5 | 0 | OK |
| Central Bank of India | PASS (multi-row) | 3 | 0 | OK |
| City Union Bank | PASS (multi-row) | 6 | 0 | OK |
| DCB Bank | PASS | 1 | 0 | OK |
| Dhanlaxmi Bank | PASS | 1 | 0 | OK |
| Federal Bank | PASS | 1 | 0 | OK |
| HDFC Bank | PASS | 1 | 0 | OK |
| ICICI Bank | PASS (multi-row) | 4 | 0 | OK |
| IDBI Bank | PASS (multi-row) | 12 | 0 | OK |
| IDFC FIRST Bank | PASS | 1 | 0 | OK |
| Indian Bank | PASS (multi-row) | 6 | 0 | OK |
| Indian Overseas Bank | PASS (multi-row) | 10 | 0 | OK |
| IndusInd Bank | PASS (multi-row) | 2 | 0 | OK |
| Jammu and Kashmir Bank | PASS | 1 | 0 | OK |
| Karnataka Bank | PASS | 1 | 0 | OK |
| Karur Vysya Bank | PASS (multi-row) | 6 | 0 | OK |
| Kotak Mahindra Bank | PASS (multi-row) | 2 | 0 | OK |
| Nainital Bank | PASS (multi-row) | 21 | 0 | OK |
| Punjab & Sind Bank | PASS (multi-row) | 6 | 0 | OK |
| Punjab National Bank | PASS (multi-row) | 30 | 0 | OK |
| RBL Bank | PASS (multi-row) | 2 | 0 | OK |
| South Indian Bank | PASS | 1 | 0 | OK |
| State Bank of India | PASS (multi-row) | 8 | 0 | OK |
| Tamilnad Mercantile Bank | PASS | 1 | 0 | OK |
| UCO Bank | PASS (multi-row) | 2 | 0 | OK |
| Union Bank of India | PASS (multi-row) | 8 | 0 | OK |
| Yes Bank | PASS | 1 | 0 | OK |

**Summary:** 33 banks audited; 0 FAIL; 12 single-row PASS; 21 multi-row PASS.

Regenerate this report: `python3 scripts/audit_processing_fees_human.py`
