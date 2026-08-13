# CSB / CSB Bank — Charges Audit

## Summary
- Source Structured_Data rows: 15
- Master Bank_charges rows (csb bank): 22
- Matched OK: 2
- Matched with rename only: 12
- Value mismatches: 0
- Missing in master (in source, not in master): 1
- Extra/redundant in master (in master, not in source): 8
- Duplicate issues in master: 0

## Verdict
FAIL — 0 value mismatch(es), 1 source charge(s) missing in master, 8 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Additional Housing Loan Service Charge at Disbursal** (facility=Term Loan; product=Housing Loan) → `CHG-OC-99` **Additional Housing Loan Service Charge at Disbursal** (facility=Term Loan); confirmed Formula ₹100 per ₹1 lakh encoded as Fixed amount 100 + fixed_amount_per_lakh_or_part=Yes; pct_base wording: source='Loan amount' master='Sanctioned loan amount' (treated equivalent); frequency: source='At disbursal' master='At disbursement' (treated equivalent); gst_applicable: source notes applicable taxes/levies; master='Yes' (not counted as mismatch).
- **Cheque Bounce Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-102` **Cheque Bounce Charge** (facility=Any); confirmed Fixed amount 500; frequency Each time; charge_unit=Instance; facility Term Loan→Any broadening (amounts match — not counted as mismatch); gst_applicable: source unspecified; master='Yes' (not counted as mismatch).

### 1b. Rename only (values OK)
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-89` **Service charges** (facility=Any) — rename; confirmed Fixed amount 10; slab None–25000; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-90` **Service charges** (facility=Any) — rename; confirmed Fixed amount 25; slab 25001–200000; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-91` **Service charges** (facility=Any) — rename; confirmed Fixed amount 75; slab 200001–300000; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-92` **Service charges** (facility=Any) — rename; confirmed Fixed amount 125; slab 300001–500000; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-93` **Service charges** (facility=Any) — rename; confirmed Fixed amount 175; slab 500001–1000000; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-94` **Service charges** (facility=Any) — rename; confirmed Fixed amount 250; slab 1000001–2500000; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-95` **Service charges** (facility=Any) — rename; confirmed Fixed amount 500; slab 2500001–5000000; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-96` **Service charges** (facility=Any) — rename; confirmed Fixed amount 750; slab 5000001–7500000; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-97` **Service charges** (facility=Any) — rename; confirmed Fixed amount 1000; slab 7500001–10000000; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Advance Account Service Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-98` **Service charges** (facility=Any) — rename; confirmed Fixed amount 2000; slab 10000001–None; fixed_amount_unit=annum; charge_unit=account; freq=Quarterly auto-debit; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent).
- **Valuation Expenses** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-100` **Property Valuation Report Charges** (facility=Any) — rename; confirmed At actuals; frequency: source='Each time' master='At Sanction' (soft note only); charge_unit: source='Per instance' master='Property'; property_valuation_scope master='Both' (source unspecified); gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Inspection Charge** (facility=Any; product=Housing Loan; loc=Any) → `CHG-OC-101` **Inspection Charges** (facility=Any) — rename; confirmed At actuals; frequency Each time; charge_unit≈Instance; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).

## 2. Value mismatches

(none)

## 3. Missing in master

- **CERSAI Charge** | facility=Term Loan | product=Housing Loan | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per property | frequency=Each time | conditions='Non-refundable charges under Central Registry of Securitization Asset Reconstruction and Security Interest of India. GST extra as published.' (Structured_Data excel row 13)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `csb bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 14 `Other charges` rows map to Structured_Data (10 service slabs + disbursal + valuation + inspection + cheque bounce). CERSAI is missing rather than duplicated.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **6 rows** origin=`Offers.processing`. Not in Structured_Data (source has advance-account service / disbursal service / CERSAI / valuation / inspection / cheque bounce only — no processing-fee rows).
  - Sample ids: CHG-PROC-1157, CHG-PROC-1158, CHG-PROC-1159, CHG-PROC-1160, CHG-PROC-1161, CHG-PROC-1162
  - Schemes seen: Housing Loan ×6; facility=Term Loan; rate_type=Floating.
  - Percentage/min/max fingerprints: {(0.006, 10000, None): 6} (= 0.60% of sanctioned amount, min ₹10,000).
  - CIBIL bands (distinct, not duplicates): 800–900, 750–799, 700–749, 650–699, 600–649, 300–599.
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-99` **Overdue charges** | facility=Term Loan | scheme=Housing Loan | rate_type=Floating | pct=0.24 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-85` **Prepayment charges** | facility=Term Loan | scheme=Housing Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
(none)

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `CSB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (15 rows).
- Master filter: `Bank_charges` where `bank_key` == `csb bank` (22 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Advance Account Service Charge** renamed to **Service charges**; all 10 published slabs present with identical fixed amounts and loan-amount bands (open lower bound `slab_from=null` for ≤₹25,000 treated equivalent to source `Loan_Amount_From` blank).
- Formula **₹100 per ₹1 lakh** correctly encoded as `Fixed Amount` + `fixed_amount_per_lakh_or_part=Yes`.
- **CERSAI Charge** ₹100/property is the only Structured_Data row absent from master.
- No Other-charges redundant/duplicate rows vs Structured_Data.
- No `Slab_Table` or `CSV.fixed_prepay` origin rows for this bank.
- Offers.processing CIBIL bands share the same fee fingerprint but are distinct score bands (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 1
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 7 listed items/groups
- **Prepayment extras → ignored:** 1 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Charge

### Still missing — bank service charges (actionable)
- (none)
