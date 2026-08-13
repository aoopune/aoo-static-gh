# BOB / Bank of Baroda — Charges Audit

## Summary
- Source Structured_Data rows: 21
- Master Bank_charges rows (bank of baroda): 273
- Matched OK: 7
- Matched with rename only: 9
- Value mismatches: 0
- Missing in master (in source, not in master): 5
- Extra/redundant in master (in master, not in source): 257
- Duplicate issues in master: 1

## Verdict
FAIL — 0 value mismatch(es), 5 source charge(s) missing in master, 257 extra/redundant master row(s), 1 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Modification Charge** (facility=Any; product=Baroda Home Loan) → `CHG-OC-42` **Modification Charge** (facility=Any); confirmed Fixed amount 5000; slab 0.0–10000000.0; gst_applicable Yes aligns with source GST note.
- **Modification Charge** (facility=Any; product=Baroda Home Loan) → `CHG-OC-43` **Modification Charge** (facility=Any); confirmed Fixed amount 15000; slab 10000001.0–100000000.0; gst_applicable Yes aligns with source GST note.
- **Modification Charge** (facility=Any; product=Baroda Home Loan) → `CHG-OC-44` **Modification Charge** (facility=Any); confirmed Fixed amount 25000; slab 100000001.0–None; gst_applicable Yes aligns with source GST note.
- **Deviation Charge** (facility=Any; product=Baroda Home Loan) → `CHG-OC-45` **Deviation Charge** (facility=Any); confirmed Fixed amount 1500; max=5000; gst_applicable Yes aligns with source GST note.
- **NACH Return Charge** (facility=Any; product=Baroda Home Loan) → `CHG-OC-46` **NACH Return Charge** (facility=Any); confirmed Fixed amount 250; gst_applicable Yes aligns with source GST note.
- **NACH Mandate Charge** (facility=Any; product=Baroda Home Loan) → `CHG-OC-47` **NACH Mandate Charge** (facility=Any); confirmed Fixed amount 100; gst_applicable Yes aligns with source GST note.
- **DDI / Auto Debit / SI Bounce Charge** (facility=Any; product=Baroda Home Loan) → `CHG-OC-48` **DDI / Auto Debit / SI Bounce Charge** (facility=Any); confirmed Fixed amount 500; gst_applicable Yes aligns with source GST note.

### 1b. Rename only (values OK)
- **Conversion Charge (ROI Switch)** (facility=Both; product=Home Loan & Mortgage Loan; loc=Any) → `CHG-OC-40` **Interest Rate Type Switch Fees** (facility=Any) — rename; confirmed Percentage 0.10% (= 0.001 fraction); min=10000; max=100000; pct_on≈Outstanding loan amount and undisbursed amount; gst_applicable Yes aligns with source GST note. Facility Both→Any. Linked-account clubbing note preserved on master note_1.
- **Standing Instruction Failure Charge** (facility=Any; product=Baroda Home Loan; loc=Any) → `CHG-OC-49` **Standing Instruction Failure Charges** (facility=Any) — rename; confirmed Fixed amount 100.
- **Cheque / ECS Return Charge (Operative SB)** (facility=Any; product=Baroda Home Loan; loc=Metro / Urban) → `CHG-OC-50` **ECS / Cheque Debit Return Charge (Operative SB)** (facility=Any) — rename; confirmed Fixed amount 125; slab 0.0–100000.0; area=Metro.
- **Cheque / ECS Return Charge (Operative SB)** (facility=Any; product=Baroda Home Loan; loc=Metro / Urban) → `CHG-OC-51` **ECS / Cheque Debit Return Charge (Operative SB)** (facility=Any) — rename; confirmed Fixed amount 250; slab 100001.0–9999999.0; area=Metro.
- **Cheque / ECS Return Charge (Operative SB)** (facility=Any; product=Baroda Home Loan; loc=Metro / Urban) → `CHG-OC-52` **ECS / Cheque Debit Return Charge (Operative SB)** (facility=Any) — rename; confirmed Fixed amount 500; slab 10000000.0–None; area=Metro.
- **Cheque / ECS Return Charge (Operative SB)** (facility=Any; product=Baroda Home Loan; loc=Rural / Semi-Urban) → `CHG-OC-53` **ECS / Cheque Debit Return Charge (Operative SB)** (facility=Any) — rename; confirmed Fixed amount 100; slab 0.0–100000.0; area=Rural / Semi-urban. Source conditions also cover Senior Citizen/Pensioners at any branch; master encodes area only (Rural / Semi-urban).
- **Cheque / ECS Return Charge (Operative SB)** (facility=Any; product=Baroda Home Loan; loc=Rural / Semi-Urban) → `CHG-OC-54` **ECS / Cheque Debit Return Charge (Operative SB)** (facility=Any) — rename; confirmed Fixed amount 225; slab 100001.0–9999999.0; area=Rural / Semi-urban. Source conditions also cover Senior Citizen/Pensioners at any branch; master encodes area only (Rural / Semi-urban).
- **Cheque / ECS Return Charge (Operative SB)** (facility=Any; product=Baroda Home Loan; loc=Rural / Semi-Urban) → `CHG-OC-55` **ECS / Cheque Debit Return Charge (Operative SB)** (facility=Any) — rename; confirmed Fixed amount 450; slab 10000000.0–None; area=Rural / Semi-urban. Source conditions also cover Senior Citizen/Pensioners at any branch; master encodes area only (Rural / Semi-urban).
- **Cheque / ECS Return Charge (Technical Reason)** (facility=Any; product=Baroda Home Loan; loc=Any) → `CHG-OC-56` **ECS / Cheque Debit Return Charge (Technical Reason)** (facility=Any) — rename; confirmed Nil → master Fixed amount 0. Source Amount_Type=Nil mapped to master Fixed Amount 0.

## 2. Value mismatches

(none)
## 3. Missing in master

- **Conversion Charge (ROI Switch)** | facility=Term Loan | product=Digital HL Top Up Loan | type=Percentage | amount=0.10% | min=1000 max=None | pct_on=Outstanding balance + undisbursed portion (if any) | loan_from=None loan_to=None | customer=Any | conditions='Minimum Rs.1000+GST per account at each conversion. Same source row also lists Personal/Pension/Defense Pensioner loans; this row is only for Digital HL Top Up ' (Structured_Data excel row 3)
- **Conversion Charge (ROI Switch)** | facility=Term Loan | product=Baroda Ashray (Reverse Mortgage) | type=Percentage | amount=0.10% | min=5000 max=None | pct_on=Outstanding balance + undisbursed portion (if any) | loan_from=None loan_to=None | customer=Any | conditions='Minimum Rs.5000+GST per account at each conversion.' (Structured_Data excel row 4)
- **Out of Pocket Expenses** | facility=Term Loan | product=Baroda Yoddha Home Loan | type=Fixed amount | amount=8500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Processing charges are NIL; out of pocket expenses Rs.8,500/- per property apply. Charges excl. of GST.' (Structured_Data excel row 5)
- **Advocate / Valuer / CERSAI / ITR Verification Charges (Staff)** | facility=Term Loan | product=Baroda Home Loan & Baroda Home Improvement Loan | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Staff | conditions='For staff members only: actual charges for Advocate / Valuers / CERSAI / ITR verification (if any) only to be recovered. Public borrowers pay unified processing' (Structured_Data excel row 6)
- **Mortgage Creation Charge** | facility=Both | product=Baroda Home Loan / Home Improvement Loan / Top-up Loan | type=Nil | amount=Nil | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Mortgage creation charges are recovered separately for Retail Loans except Education Loans and Home Loans/ Home Improvement Loan and Top-up Loan. Therefore Nil ' (Structured_Data excel row 11)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `bank of baroda` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
- `CHG-OC-41` **Interest Rate Type Switch Fees** | origin=Other charges | facility=Any | type=Percentage | fixed=None | pct=0.001 | min=10000 max=100000 — identical duplicate of `CHG-OC-40` (same 0.10% / min ₹10,000 / max ₹1,00,000 conversion fee); not a second Structured_Data product row

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **240 rows** origin=`Offers.processing`. Not in Structured_Data (Structured_Data excludes public unified processing slabs; only staff actuals / Yoddha OOP appear there).
  - Sample ids: CHG-PROC-236, CHG-PROC-237, CHG-PROC-238, CHG-PROC-239, CHG-PROC-240, CHG-PROC-241, CHG-PROC-242, CHG-PROC-243, …
  - Schemes seen: Baroda Home Loan, Baroda Max Savings Home Loan, Baroda Top Up Loan; Term Loan + Overdraft; Floating + Fixed; CIBIL bands; % 0.50%/0.25%/0.35% with min/max (₹8,500–₹15,000 / ₹8,500–₹25,000 / ₹5,000–₹12,500).
  - Internal clone fingerprint groups with multiplicity>1: **80** groups (160 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- **8 rows** — Overdue charges 2% p.a. on Default_Amount; schemes Baroda Home Loan / Max Savings / Top Up × Floating/Fixed × TL/OD.
  - Ids: CHG-OD-34, CHG-OD-35, CHG-OD-36, CHG-OD-37, CHG-OD-38, CHG-OD-39, CHG-OD-40, CHG-OD-41

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-27` **Prepayment charges** | facility=Term Loan | scheme=Baroda Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-29` **Prepayment charges** | facility=Overdraft | scheme=Baroda Max Savings Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-31` **Prepayment charges** | facility=Term Loan | scheme=Baroda Top Up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-33` **Prepayment charges** | facility=Overdraft | scheme=Baroda Top Up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-182` **Prepayment charges** | facility=Term Loan | type=Fixed Amount | fixed=0 | pct=None | pct_base=None | rate_type=Fixed | note=Prepayment nil (CSV NIL)
- `CHG-PRE-183` **Prepayment charges (takeover)** | facility=Term Loan | type=Percentage | fixed=None | pct=0.005 | pct_base=Amount_Being_Paid | rate_type=Fixed | note=None
- `CHG-PRE-184` **Prepayment charges** | facility=Overdraft | type=Fixed Amount | fixed=0 | pct=None | pct_base=None | rate_type=Fixed | note=Prepayment nil (CSV NIL)
- `CHG-PRE-185` **Prepayment charges (takeover)** | facility=Overdraft | type=Percentage | fixed=None | pct=0.005 | pct_base=Amount_Being_Paid | rate_type=Fixed | note=None

## 5. Notes

- Source of truth: `BOB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (21 rows).
- Master filter: `Bank_charges` where `bank_key` == `bank of baroda` (273 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Nil** in source (technical cheque return) accepted as master `Fixed Amount` 0.
- Modification slab lower bound source `0` vs master `slab_from=null` treated as equivalent (open lower bound up to ₹1 Cr).
- Conversion `percentage_base_value` wording differs slightly (`Outstanding balance + undisbursed portion, if any` vs `Outstanding loan amount and undisbursed amount`) — treated as semantic match, not a value mismatch.
- Facility Both/Any narrowing on conversion and other rows not failed when amounts match.
- Public unified processing fee slabs (0.50%/0.25% etc.) are **intentionally absent** from Structured_Data (staff-only actuals row references them); all 240 Offers.processing rows are therefore extra vs this source sheet.
- `CHG-OC-40` / `CHG-OC-41` are byte-identical conversion fees; only one maps to Structured_Data row 2 (Home Loan & Mortgage Loan). Product-specific conversion rows (Digital HL Top Up min ₹1,000; Baroda Ashray min ₹5,000) are missing entirely.
- No Slab_Table origin rows for this bank.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 2
- **Still missing (bank service charges):** 3
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 2 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 1
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Advocate / Valuer / CERSAI / ITR Verification Charges (Staff)
- Mortgage Creation Charge

### Still missing — bank service charges (actionable)
- Conversion Charge (ROI Switch)
- Conversion Charge (ROI Switch)
- Out of Pocket Expenses
