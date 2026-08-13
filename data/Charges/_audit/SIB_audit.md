# SIB / South Indian Bank — Charges Audit

## Summary
- Source Structured_Data rows: 18
- Master Bank_charges rows (south indian bank): 30
- Matched OK: 8
- Matched with rename only: 9
- Value mismatches: 0
- Missing in master (in source, not in master): 0
- Extra/redundant in master (in master, not in source): 12
- Duplicate issues in master: 0

## Verdict
PASS — compare-scope service charges corrected.

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Cheque Return Charge - Inward First Return** (facility=Term Loan; product=SIB Home Loan) → `CHG-OC-713` **Cheque Return Charge - Inward First Return**; confirmed Fixed amount 250; charge_unit=Instrument; freq=Each time; note_1/note_2 preserve inward first-return Savings wording; facility Term Loan; gst master='Yes' (source Charges subject to GST — soft).
- **Cheque Return Charge - Inward Second Return Onwards** (facility=Term Loan; product=SIB Home Loan) → `CHG-OC-714` **Cheque Return Charge - Inward Second Return Onwards**; confirmed Fixed amount 500; charge_unit=Instrument; freq=Each time; note_1/note_2 preserve inward second-return-onwards wording; facility Term Loan; gst master='Yes' (source Charges subject to GST — soft).
- **Direct Debit Return Charge** (facility=Term Loan; product=SIB Home Loan) → `CHG-OC-716` **Direct Debit Return Charge**; confirmed Fixed amount 100; charge_unit=Instance; freq=Each time; notes preserve CHEQUE/ECS/NACH RETURN / home-loan direct-debit failure wording; facility Term Loan; gst master='Yes' (soft).
- **ECS / NACH Mandate Registration Charge** (facility=Term Loan; product=SIB Home Loan) → `CHG-OC-717` **ECS / NACH Mandate Registration Charge**; confirmed Fixed amount 100; charge_unit=Registration; freq=Each time; note_2 preserves Waived for PM-KMY and PM-SYM; facility Term Loan; gst master='Yes' (soft).
- **Standing Instruction Setting Up Charge** (facility=Term Loan; product=SIB Home Loan) → `CHG-OC-718` **Standing Instruction Setting Up Charge**; confirmed Fixed amount 100; charge_unit=Instruction; freq=Each time; notes preserve SI setup for home-loan repayment; facility Term Loan; gst master='Yes' (soft).
- **Standing Instruction Amendment Charge** (facility=Term Loan; product=SIB Home Loan) → `CHG-OC-719` **Standing Instruction Amendment Charge**; confirmed Fixed amount 100; charge_unit=Amendment; freq=Each time; notes preserve SI amendment wording; facility Term Loan; gst master='Yes' (soft).
- **Standing Instruction Execution Charge** (facility=Term Loan; product=SIB Home Loan) → `CHG-OC-720` **Standing Instruction Execution Charge**; confirmed Fixed amount 10; charge_unit=Execution; freq=Each time; note_2 preserves Bank-induced internal charges are Free; facility Term Loan; gst master='Yes' (soft).
- **NACH Return Charge - Inward** (facility=Term Loan; product=SIB Home Loan) → `CHG-OC-715` **NACH Return Charge - Inward**; confirmed Formula ₹2 per ₹1,000 encoded as Fixed amount 2 + fixed_amount_per_1000_rs=Yes; charge_min=100; charge_max=400; percentage_base_value='Returned amount'; charge_unit=Instance; freq=Each time; facility Term Loan; note preserves NACH return inward on Savings / home-loan EMI NACH; source Conditions also waive PM-KMY & PM-SYM (not in exemption_* columns — soft); gst master='Yes' (source Charges subject to GST — soft).

### 1b. Rename only (values OK)
- **Solvency Certificate** (facility=Any; product=Retail Loan) → `CHG-OC-704`–`CHG-OC-710` **Solvency Certificate Charges**; confirmed ₹500 / ₹1,000 / ₹2,000 / ₹3,000 / ₹4,000 / ₹5,000 / ₹10,000; exclusive+1 edges; slab_basis=Certificate amount.
- **Rate Type Switch Fixed to Floating** (facility=Any; product=Retail Loan) → `CHG-OC-711` **Interest Rate Type Switch Fees**; no ₹/%; special_rule='Option once exercised cannot be changed.'; Fixed→Floating.
- **Rate Type Switch Floating to Fixed** (facility=Any; product=Retail Loan) → `CHG-OC-712` **Interest Rate Type Switch Fees**; same special_rule; Floating→Fixed.

## 2. Value mismatches

(none)

## 3. Missing in master

(none) — No Due Certificate Nil → `CHG-OC-886`.

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `south indian bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none remaining.)

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **6 rows** origin=`Offers.processing`. Not in Structured_Data (source covers No Due Nil / Solvency slabs / rate-type switch not-permitted / cheque·NACH·direct-debit returns / ECS-NACH mandate / SI setup·amend·execute — no processing-fee rows).
  - Sample ids: CHG-PROC-1040, CHG-PROC-1041, CHG-PROC-1042, CHG-PROC-1043, CHG-PROC-1044, CHG-PROC-1045
  - Schemes seen: SIB Home Loan ×6; facility=Term Loan; rate_type=Floating; occupation=Any; purpose=Regular Home Loan.
  - Percentage/min/max fingerprints: {(0.005, 10000, 50000): 6} (= 0.50% of sanctioned amount, min ₹10,000, max ₹50,000).
  - CIBIL bands (distinct, not duplicates): 300–599, 600–649, 650–699, 700–749, 750–799, 800–900.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation+scheme+facility+rate_type+fee: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-95` **Overdue charges** | facility=Term Loan | scheme=SIB Home Loan | rate_type=Floating | pct=0.06 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-81` **Prepayment charges** | facility=Term Loan | scheme=SIB Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-238` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | pct=0.04 | pct_base=Amount_Being_Paid | slab=0–10000000 | slab_basis=loan_amount | note='Up to Rs 1 crore loan amount (slab basis assumed)'
- `CHG-PRE-239` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | pct=0.03 | pct_base=Amount_Being_Paid | slab=10000000.01–None | slab_basis=loan_amount | note='Above Rs 1 crore loan amount (slab basis assumed)'
- `CHG-PRE-240` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | pct=0.04 | pct_base=Amount_Being_Paid | slab=0–10000000 | slab_basis=loan_amount | note='Up to Rs 1 crore loan amount (slab basis assumed)'
- `CHG-PRE-241` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | pct=0.03 | pct_base=Amount_Being_Paid | slab=10000000.01–None | slab_basis=loan_amount | note='Above Rs 1 crore loan amount (slab basis assumed)'

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `SIB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (18 rows).
- Master filter: `Bank_charges` where `bank_key` == `south indian bank` (30 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- Solvency 7 slabs `slab_basis=Certificate amount`. Rate switch both ways `special_rule` only (not ₹0). No Due Nil `CHG-OC-886`. NACH inward ₹2/₹1,000 min ₹100 max ₹400.
- No Other-charges redundant/orphan rows vs Structured_Data (all 17 OC rows map). No `Slab_Table` origin rows.
- Offers.processing: 6 fee clones (SIB Home Loan × CIBIL bands; 0.50% min ₹10,000 max ₹50,000); full-key internal duplicates: 0.
- Offers.overdue ×1: 6% p.a. on Default_Amount; Offers.prepayment ×1 fixed 0 (floating, not charged).
- CSV.fixed_prepay ×4: Fixed-rate self 4%/3% (≤₹1Cr / >₹1Cr) + takeover twin 4%/3%.
- openpyxl data_only=True used for both workbooks.

_Audit generated with openpyxl data_only=True. Source: `data/Charges/SIB_Home_Loan_Charges_Official.xlsx` Structured_Data. Master: `data/HOME_LOANS_COMPARE_v1.xlsx` Bank_charges filtered bank_key=`south indian bank`._

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 0
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 6 listed items/groups
- **Prepayment extras → ignored:** 5 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- (none classified from JSON/MD)

### Still missing — bank service charges (actionable)
- (none)
