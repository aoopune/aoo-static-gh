# KVB / Karur Vysya Bank — Charges Audit

## Summary
- Source Structured_Data rows: 10
- Master Bank_charges rows (karur vysya bank): 42
- Matched OK: 3
- Matched with rename only: 6
- Value mismatches: 0
- Missing in master (in source, not in master): 1
- Extra/redundant in master (in master, not in source): 34
- Duplicate issues in master: 0

## Verdict
FAIL — 0 value mismatch(es), 1 source charge(s) missing in master, 34 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **NACH Mandate Processing** (facility=Any) → `CHG-OC-567` **NACH Mandate Processing**; confirmed Fixed amount 100; charge_unit=Instance; freq=Each time; source Conditions exempt Kalpatharu/Jan Dhan/Gramajyothi (SB products) — master exemptions blank (soft); gst master='Yes' (source: GST as applicable — soft).
- **NACH Debit Return / Standing Instruction Failure / Drawdown Failure** (facility=Any) → `CHG-OC-568` **NACH Debit Return / Standing Instruction Failure / Drawdown Failure**; confirmed Fixed amount 500; charge_unit: source='per instance' master='Failure' (soft equivalent); freq=Each time; note_1 preserves NACH debit returns / SI failures / drawdown failures wording; gst master='Yes' (source: plus GST — soft).
- **Cheque Return — Local Cheque (of our bank)** (facility=Any) → `CHG-OC-572` **Cheque Return - Local Cheque (of our bank)**; confirmed Fixed amount 30; charge_unit=Instance; freq=Each time; name em dash (—) vs hyphen (-) treated equivalent (not a rename); note_1/2 preserve ECS-referenced cheque return schedule / non-rural & senior citizen-rural columns; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Duplicate Passbook / Sheet — Loan Accounts** (facility=Any) → `CHG-OC-566` **Duplicate Passbook** — rename; confirmed Fixed amount 25 + charge_min=25; charge_unit=Sheet; freq=Each time; special_rule='Beyond one sheet Rs. 25/- per sheet' preserves source Min/beyond-one-sheet wording; rename Duplicate Passbook / Sheet — Loan Accounts→Duplicate Passbook; gst master='Yes' (soft).
- **ECS Debit Return** (facility=Any) → cheque-return schedule — source Amount_Type=Formula amount='Applicable return charges as mentioned for cheques'; no separate ECS fee row. Covered by Local ₹30 (`CHG-OC-572`), Outward SB ₹100 (`CHG-OC-570`), Outward Other ₹200 (`CHG-OC-571`); notes on those rows say ECS Debit returns use this schedule.
- **Cheque Return — Outward Cheques (SB Accounts)** (facility=Any) → `CHG-OC-570` **Cheque Return - Outward Cheques (SB Accounts)** — rename (em dash→hyphen only); confirmed Fixed amount 100; charge_unit=Instance; freq=Each time; note_1: ECS Debit returns use this cheque schedule; gst master='Yes' (soft).
- **Cheque Return — Outward Cheques (All other Accounts)** (facility=Any) → `CHG-OC-571` **Cheque Return - Outward Cheques (All other Accounts)** — rename (em dash→hyphen only); confirmed Fixed amount 200; charge_unit=Instance; freq=Each time; note_1: ECS Debit returns use this cheque schedule; gst master='Yes' (soft).
- **CIBIL Report Obtention** (facility=Any) → `CHG-OC-574` **CIBIL Report Retrieval** — rename; confirmed Fixed amount 100; customer_type=Individual; charge_unit=Report; freq=Each time; rename CIBIL Report Obtention→CIBIL Report Retrieval; gst master='Yes' (soft).
- **CIBIL Report Obtention** (facility=Any) → `CHG-OC-575` **CIBIL Report Retrieval** — rename; confirmed Fixed amount 1000; customer_type: source='Non-individual' master='Non-Individual' (casing soft); charge_unit=Report; freq=Each time; rename CIBIL Report Obtention→CIBIL Report Retrieval; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

- **Borrower Insurance Coverage (Optional)** | facility=Term Loan | product='Happy Home Loans' | type=At actuals | amount='SINGLE PREMIUM payable by the borrower' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Individual | loc=Any | charged_per='per policy' | frequency='once' | conditions='Available to the extent of loan amount with LIC, SBI Life and BSLI as SINGLE PREMIUM payable by the borrower (available if the borrower is interested).' (Structured_Data excel row 11)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `karur vysya bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
- **0 rows** remaining. Deleted `CHG-OC-569` (ECS-named twin of local cheque ₹30 / `CHG-OC-572`) and invented `CHG-OC-573` (0.50% Floating→Fixed switch not in Structured_Data).

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **30 rows** origin=`Offers.processing`. Not in Structured_Data (source is KVB account/technology/collection/CIBIL service charges + optional Happy Home borrower insurance — no processing-fee rows).
  - Sample ids: CHG-PROC-980, CHG-PROC-981, CHG-PROC-982, CHG-PROC-983, CHG-PROC-984, CHG-PROC-985, CHG-PROC-986, CHG-PROC-987, CHG-PROC-988, CHG-PROC-989, CHG-PROC-990, CHG-PROC-991…
  - Schemes seen: Housing Loan ×15; Housing Loan Top Up ×15; facility=Term Loan; rate_type=Floating; occupation=Any.
  - Fixed-amount / loan-band fingerprints: {(2500, 1, 2500000): 10, (5000, 2500001, 5000000): 10, (7500, 5000001, 1000000000): 10} (₹2,500 for loan ≤₹25L; ₹5,000 for ₹25L–₹50L; ₹7,500 for >₹50L — each repeated across Housing Loan + Top Up × CIBIL bands).
  - CIBIL bands (distinct, not duplicates): 600–649, 650–699, 700–749, 750–799, 800–900.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation+scheme+loan band: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-90` **Overdue charges** | facility=Term Loan | scheme=Housing Loan | purpose=Regular Home Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-91` **Overdue charges** | facility=Term Loan | scheme=Housing Loan Top Up | purpose=Top-up Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-76` **Prepayment charges** | facility=Term Loan | scheme=Housing Loan | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-77` **Prepayment charges** | facility=Term Loan | scheme=Housing Loan Top Up | purpose=Top-up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
(none)

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `KVB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (10 rows).
- Master filter: `Bank_charges` where `bank_key` == `karur vysya bank` (42 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Duplicate Passbook / Sheet — Loan Accounts** ₹25 (min ₹25, per sheet) renamed to **Duplicate Passbook** with special_rule for beyond-one-sheet.
- **ECS Debit Return** Formula (“Applicable return charges as mentioned for cheques”) soft-covered by Local ₹30 / Outward SB ₹100 / Outward Other ₹200 schedule already in master.
- Outward cheque returns stay named **Cheque Return - Outward** (`CHG-OC-570` SB ₹100 / `CHG-OC-571` all other ₹200); Local Cheque maps to `CHG-OC-572` ₹30. ECS Debit Return only points at this cheque schedule.
- **CIBIL Report Obtention** renamed to **CIBIL Report Retrieval** (Individual ₹100 / Non-Individual ₹1,000).
- Missing: **Borrower Insurance Coverage (Optional)** At actuals / SINGLE PREMIUM (Happy Home Loans).
- Deleted `CHG-OC-569` (ECS-named twin of local cheque ₹30) and invented switch `CHG-OC-573`. Outward cheques `CHG-OC-570`/`571` renamed back to Cheque Return - Outward (SB / all other); notes still say ECS uses this schedule.
- No `Slab_Table` or `CSV.fixed_prepay` origin rows for this bank.
- Offers.processing: 30 fee clones (Housing Loan + Top Up × three loan-amount bands × five CIBIL bands); full-key internal duplicates: 0.
- Offers.overdue ×2 at 5% p.a. on Default_Amount; Offers.prepayment ×2 fixed 0 (not charged).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 0
- **Still missing (bank service charges):** 1
- **Offers.processing extras → not an error (not from Structured_Data):** 30 listed items/groups
- **Prepayment extras → ignored:** 2 listed items/groups
- **Offers.overdue → no action unless noted separately:** 2 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- (none classified from JSON/MD)

### Still missing — bank service charges (actionable)
- Borrower Insurance Coverage (Optional)
