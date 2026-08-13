# CAN / Canara Bank — Charges Audit

## Summary
- Source Structured_Data rows: 24
- Master Bank_charges rows (canara bank): 75
- Matched OK: 1
- Matched with rename only: 7
- Value mismatches: 5
- Missing in master (in source, not in master): 11
- Extra/redundant in master (in master, not in source): 62
- Duplicate issues in master: 1

## Verdict
FAIL — 5 value mismatch(es), 11 source charge(s) missing in master, 62 extra/redundant master row(s), 1 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Drawdown Failure Charge** (facility=Both; product=Any loan account) → `CHG-OC-106` **Drawdown Failure Charge** (facility=Any); confirmed Fixed amount 100; gst_applicable Yes.

### 1b. Rename only (values OK)
- **Cheque Return Charge** (facility=Both; product=Any) → `CHG-OC-107` **Cheque Return Charges** (facility=Any) — rename; confirmed Fixed amount 200; slab None–1000.0; gst_applicable No.
- **Cheque Return Charge** (facility=Both; product=Any) → `CHG-OC-110` **Cheque Return Charges** (facility=Any) — rename; confirmed Fixed amount 1000; slab 5000000.0–10000000.0; gst_applicable No.
- **Cheque Return Charge** (facility=Both; product=Any) → `CHG-OC-111` **Cheque Return Charges** (facility=Any) — rename; confirmed Fixed amount 2000; slab 10000000.0–None; gst_applicable No.
- **ECS Debit Return Charge** (facility=Both; product=Any) → `CHG-OC-112` **ECS / NACH Debit Return Charge** (facility=Any) — rename; confirmed Fixed amount 300; slab None–1000.0; gst_applicable No. Soft note: schedule w.e.f 11.07.2026 not stored on master.
- **ECS Debit Return Charge** (facility=Both; product=Any) → `CHG-OC-115` **ECS / NACH Debit Return Charge** (facility=Any) — rename; confirmed Fixed amount 1000; slab 5000000.0–10000000.0; gst_applicable No. Soft note: schedule w.e.f 11.07.2026 not stored on master.
- **ECS Debit Return Charge** (facility=Both; product=Any) → `CHG-OC-116` **ECS / NACH Debit Return Charge** (facility=Any) — rename; confirmed Fixed amount 2000; slab 10000000.0–None; gst_applicable No. Soft note: schedule w.e.f 11.07.2026 not stored on master.
- **ECS Debit Return Charge** (facility=Both; product=Any) → `CHG-OC-114` **ECS / NACH Debit Return Charge** (facility=Any) — rename; confirmed Fixed amount 500; slab 100000.0–5000000.0; gst_applicable No. Soft note: schedule applicable upto 10.07.2026 not stored on master.

## 2. Value mismatches

### Documentation Charge (excel row 2; product=Canara Home Loan Plus) → `CHG-OC-103` Documentation Charges
- Rename also present: `Documentation Charge` → `Documentation Charges`
- Source fingerprint: type=Formula amount='Rs 100 per lac or part thereof' min=1000.0 max=25000.0 pct_on=None slab=None-None product='Canara Home Loan Plus' facility=Term Loan
- Master fingerprint: fixed=100 per_lakh=Yes pct=None pct_pa=None min=1000 max=25000 slab=None-None pct_base=None facility=Term Loan gst=Yes purpose='Top-up Loan'
- **gst_applicable**: source='Unspecified (bank text does not state GST on this line)' vs master='Yes'

### Interest Rate Regime Switchover Charge (excel row 4; product=EMI based Retail loans) → `CHG-OC-104` Interest Rate Type Switch Fees
- Rename also present: `Interest Rate Regime Switchover Charge` → `Interest Rate Type Switch Fees`
- Source fingerprint: type=Percentage amount='0.25%' min=250.0 max=25000.0 pct_on='loan amount' slab=None-None product='EMI based Retail loans' facility=Term Loan
- Master fingerprint: fixed=None per_lakh=None pct=0.0025 pct_pa=None min=250 max=25000 slab=None-None pct_base='Outstanding loan amount' facility=Any gst=Yes purpose='Any'
- **percentage_base_value / Percentage_Calculated_On**: source='loan amount' vs master='Outstanding loan amount'

### Cheque Return Charge (excel row 7; product=Any) → `CHG-OC-108` Cheque Return Charges
- Rename also present: `Cheque Return Charge` → `Cheque Return Charges`
- Source fingerprint: type=Fixed amount amount='300' min=None max=None pct_on=None slab=1000.0-1000000.0 product='Any' facility=Both
- Master fingerprint: fixed=300 per_lakh=None pct=None pct_pa=None min=None max=None slab=1001-100000 pct_base=None facility=Any gst=No purpose='Any'
- **slab_to**: source=1000000.0 vs master=100000

### Cheque Return Charge (excel row 8; product=Any) → `CHG-OC-109` Cheque Return Charges
- Rename also present: `Cheque Return Charge` → `Cheque Return Charges`
- Source fingerprint: type=Fixed amount amount='500' min=None max=None pct_on=None slab=1000000.0-5000000.0 product='Any' facility=Both
- Master fingerprint: fixed=500 per_lakh=None pct=None pct_pa=None min=None max=None slab=100001-5000000 pct_base=None facility=Any gst=No purpose='Any'
- **slab_from**: source=1000000.0 vs master=100001

### ECS Debit Return Charge (excel row 22; product=Any) → `CHG-OC-113` ECS / NACH Debit Return Charge
- Rename also present: `ECS Debit Return Charge` → `ECS / NACH Debit Return Charge`
- Source fingerprint: type=Fixed amount amount='750' min=None max=None pct_on=None slab=100000.0-5000000.0 product='Any' facility=Both
- Master fingerprint: fixed=750 per_lakh=None pct=None pct_pa=None min=None max=None slab=1001-100000 pct_base=None facility=Any gst=No purpose='Any'
- **slab_from**: source=100000.0 vs master=1001
- **slab_to**: source=5000000.0 vs master=100000
- Note (schedule_validity): source='w.e.f 11.07.2026' (not on master)

## 3. Missing in master

- **Documentation Charge** | facility=Term Loan | product=Canara Site Loan | type=Formula | amount=Rs 100 per lac or part thereof | min=1000.0 max=25000.0 | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Documentation charges for Canara Site Loan (residential site purchase) as published on product page.' (Structured_Data excel row 3)
- **Cheque Return Charge Waiver - Technical Reasons** | facility=Both | product=Any | type=Nil | amount=Nil | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='No cheque return charges if instrument returned on technical reasons.' (Structured_Data excel row 11)
- **Cheque Return Charge Waiver - Not at Customer Fault** | facility=Both | product=Any | type=Nil | amount=Nil | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='No cheque return charges where customer is not at fault.' (Structured_Data excel row 12)
- **ECS Debit Return Charge** | facility=Both | product=Any | type=Fixed amount | amount=300 | min=None max=None | pct_on=None | loan_from=None loan_to=1000.0 | customer=Any | conditions='ECS (Debit Return) … below ₹1000. Schedule applicable upto 10.07.2026.' (Structured_Data excel row 13)
- **ECS Debit Return Charge** | facility=Both | product=Any | type=Fixed amount | amount=400 | min=None max=None | pct_on=None | loan_from=1000.0 loan_to=5000.0 | customer=Any | conditions='ECS (Debit Return) … ₹1000 to below ₹5000. Schedule applicable upto 10.07.2026.' (Structured_Data excel row 14)
- **ECS Debit Return Charge** | facility=Both | product=Any | type=Fixed amount | amount=450 | min=None max=None | pct_on=None | loan_from=5000.0 loan_to=10000.0 | customer=Any | conditions='ECS (Debit Return) … ₹5000 to below ₹10000. Schedule applicable upto 10.07.2026.' (Structured_Data excel row 15)
- **ECS Debit Return Charge** | facility=Both | product=Any | type=Fixed amount | amount=475 | min=None max=None | pct_on=None | loan_from=10000.0 loan_to=100000.0 | customer=Any | conditions='ECS (Debit Return) … ₹10000 to below ₹1 Lakh. Schedule applicable upto 10.07.2026.' (Structured_Data excel row 16)
- **ECS Debit Return Charge** | facility=Both | product=Any | type=Fixed amount | amount=1000 | min=None max=None | pct_on=None | loan_from=5000000.0 loan_to=10000000.0 | customer=Any | conditions='ECS (Debit Return) … ₹50 Lakhs to below ₹1 Crore. Schedule applicable upto 10.07.2026.' (Structured_Data excel row 18)
- **ECS Debit Return Charge** | facility=Both | product=Any | type=Fixed amount | amount=2000 | min=None max=None | pct_on=None | loan_from=10000000.0 loan_to=None | customer=Any | conditions='ECS (Debit Return) … ₹1 Crore and above. Schedule applicable upto 10.07.2026.' (Structured_Data excel row 19)
- **ECS Debit Return Charge** | facility=Both | product=Any | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=1000.0 loan_to=100000.0 | customer=Any | conditions='ECS (Debit Return) … ₹1000 to below ₹1 Lakh. Schedule applicable w.e.f 11.07.2026.' (Structured_Data excel row 21)
- **Non-Construction Penal Charge** | facility=Term Loan | product=Housing Loan | type=Percentage | amount=2.00% p.a. | min=None max=None | pct_on=outstanding liability | loan_from=None loan_to=None | customer=Any | conditions='Penalty for non-construction of house … 2.00% p.a. from date of sanction till start of construction on outstanding liability.' (Structured_Data excel row 25)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `canara bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
- `CHG-OC-105` **Interest Rate Type Switch Fees** | origin=Other charges | facility=Any | type=Percentage | fixed=None | pct=0.0025 | min=250 max=25000 — directional duplicate of `CHG-OC-104` (Floating→Fixed); Structured_Data has one Interest Rate Regime Switchover Charge covering Floating↔Fixed both ways at 0.25% / min ₹250 / max ₹25,000

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **50 rows** origin=`Offers.processing`. Not in Structured_Data (source sheet has documentation / switch / bounce / ECS / non-construction penal — no processing-fee rows).
  - Sample ids: CHG-PROC-476, CHG-PROC-477, CHG-PROC-478, CHG-PROC-479, CHG-PROC-480, CHG-PROC-481, CHG-PROC-482, CHG-PROC-483, …
  - Schemes seen: {'Housing loan': 50}; facilities={'Term Loan': 50}; rate_types={'Floating': 40, 'Fixed': 10}.
  - Percentage/min/max fingerprints: {(0.005, 1500, 10000): 25, (0.0025, 750, 5000): 25}.
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- **6 rows** — Overdue charges on Default_Amount (slabbed % p.a.); scheme Housing loan × Floating/Fixed.
  - Ids: CHG-OD-42, CHG-OD-43, CHG-OD-44, CHG-OD-45, CHG-OD-46, CHG-OD-47
  - `CHG-OD-42` pct=0 slab=0–25000 rate_type=Floating
  - `CHG-OD-43` pct=0.01 slab=25001–200000 rate_type=Floating
  - `CHG-OD-44` pct=0.02 slab=200001–None rate_type=Floating
  - `CHG-OD-45` pct=0 slab=0–25000 rate_type=Fixed
  - `CHG-OD-46` pct=0.01 slab=25001–200000 rate_type=Fixed
  - `CHG-OD-47` pct=0.02 slab=200001–None rate_type=Fixed

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-35` **Prepayment charges** | facility=Term Loan | scheme=Housing loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-190` **Prepayment charges** | facility=Term Loan | type=Fixed Amount | fixed=0 | pct=None | pct_base=None | rate_type=Fixed | note=Prepayment nil (CSV NIL)
- `CHG-PRE-191` **Prepayment charges (takeover)** | facility=Term Loan | type=Percentage | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | rate_type=Fixed | note=None
- `CHG-PRE-192` **Prepayment charges** | facility=Overdraft | type=Fixed Amount | fixed=0 | pct=None | pct_base=None | rate_type=Fixed | note=Prepayment nil (CSV NIL)
- `CHG-PRE-193` **Prepayment charges (takeover)** | facility=Overdraft | type=Percentage | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | rate_type=Fixed | note=None

### 4f. Slab_Table extras
(none — no Slab_Table origin rows for this bank)

## 5. Notes

- Source of truth: `CAN_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (24 rows).
- Master filter: `Bank_charges` where `bank_key` == `canara bank` (75 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Nil** waivers (technical / not-at-fault cheque return) have no Fixed Amount 0 master rows — counted missing (master cheque notes only say 'Due to insufficient funds only').
- Documentation `gst_applicable` Unspecified vs Yes treated as strict value mismatch (source: bank text does not state GST).
- Rate switch `percentage_base_value` `loan amount` vs `Outstanding loan amount` treated as strict value mismatch (BOM precedent).
- Cheque return master slabs (esp. ₹300 band capped at ₹1 Lakh vs source below ₹10 Lakh; ₹500 band from ₹1 Lakh+ vs source from ₹10 Lakh) are wrong vs Structured_Data.
- ECS master rows are a hybrid: neither full pre-11.07.2026 fine schedule (₹400/₹450/₹475) nor clean post-11.07.2026 schedule (₹500 for ₹1k–₹1L; ₹750 for ₹1L–₹50L).
- ECS schedule validity dates (upto 10.07.2026 / w.e.f 11.07.2026) soft-noted when amount+slab otherwise match; not counted as a standalone value mismatch.
- `CHG-OC-104` / `CHG-OC-105` are directional splits of one Structured_Data switchover row; only OC-104 consumed for matching.
- Canara Site Loan documentation (same ₹100/lac formula) has no separate master row (`CHG-OC-103` purpose=Top-up Loan only).
- Non-Construction Penal Charge 2% p.a. on outstanding liability is absent from master Other charges (Offers.overdue rows are EMI default slabs, not this charge).
- No Slab_Table origin rows for this bank.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 0
- **Still missing (bank service charges):** 11
- **Offers.processing extras → not an error (not from Structured_Data):** 50 listed items/groups
- **Prepayment extras → ignored:** 5 listed items/groups
- **Offers.overdue → no action unless noted separately:** 6 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 1
- **Value mismatches still listed in §2:** 5

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- (none classified from JSON/MD)

### Still missing — bank service charges (actionable)
- Documentation Charge
- Cheque Return Charge Waiver - Technical Reasons
- Cheque Return Charge Waiver - Not at Customer Fault
- ECS Debit Return Charge
- ECS Debit Return Charge
- ECS Debit Return Charge
- ECS Debit Return Charge
- ECS Debit Return Charge
- ECS Debit Return Charge
- ECS Debit Return Charge
- Non-Construction Penal Charge
