# IDB / IDBI Bank — Charges Audit

## Summary
- Source Structured_Data rows: 47
- Master Bank_charges rows (idbi bank): 141
- Matched OK: 29
- Matched with rename only: 16
- Value mismatches: 0
- Missing in master (in source, not in master): 2
- Extra/redundant in master (in master, not in source): 96
- Duplicate issues in master: 0

## Verdict
FAIL — 0 value mismatch(es), 2 source charge(s) missing in master, 96 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Property Inspection Charge** (facility=Term Loan) → `CHG-OC-373` **Property Inspection Charge**; confirmed Fixed amount 750; slab None–3500000; charge_unit=Property; freq=Once at sanction; facility=Term Loan; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent); gst master='Yes' (soft).
- **Property Inspection Charge** (facility=Term Loan) → `CHG-OC-374` **Property Inspection Charge**; confirmed Fixed amount 1500; slab 3500001–7500000; charge_unit=Property; freq=Once at sanction; facility=Term Loan; slab_basis master='Sanctioned loan amount' (treated equivalent); gst master='Yes' (soft).
- **Property Inspection Charge** (facility=Term Loan) → `CHG-OC-375` **Property Inspection Charge**; confirmed Fixed amount 2000; slab 7500001–None; charge_unit=Property; freq=Once at sanction; facility=Term Loan; slab_basis master='Sanctioned loan amount' (treated equivalent); gst master='Yes' (soft).
- **Property Swapping Charge** (facility=Both) → `CHG-OC-376` **Property Swapping Charge**; confirmed Fixed amount 25000; charge_unit=Instance; freq=Per request; note_1 documents-separately; facility Both→Any; gst master='Yes' (soft).
- **Partial Property Release Charge** (facility=Both) → `CHG-OC-377` **Partial Property Release Charge**; confirmed Fixed amount 10000; charge_unit=Instance; freq=Per request; facility Both→Any; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Branch) → `CHG-OC-378` **NEFT Charge**; confirmed Nil/Free→Fixed amount 0; fixed_amount_at_branch=Yes; slab None–5000; slab_basis=Transaction amount; facility=Overdraft; cu=transaction; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Branch) → `CHG-OC-379` **NEFT Charge**; confirmed Fixed amount 2; fixed_amount_at_branch=Yes; slab 5001–10000; facility=Overdraft; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Branch) → `CHG-OC-380` **NEFT Charge**; confirmed Fixed amount 5; fixed_amount_at_branch=Yes; slab 10001–100000; facility=Overdraft; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Branch) → `CHG-OC-381` **NEFT Charge**; confirmed Fixed amount 15; fixed_amount_at_branch=Yes; slab 100001–200000; facility=Overdraft; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Branch) → `CHG-OC-382` **NEFT Charge**; confirmed Fixed amount 25; fixed_amount_at_branch=Yes; slab 200001–None; facility=Overdraft; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Net banking / Mobile) → `CHG-OC-383` **NEFT Charge**; confirmed Nil/Free→Fixed amount 0; fixed_amount_at_net_mobile_banking=Yes; slab None–5000; facility=Overdraft; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Net banking / Mobile) → `CHG-OC-384` **NEFT Charge**; confirmed Fixed amount 3; fixed_amount_at_net_mobile_banking=Yes; slab 5001–10000; facility=Overdraft; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Net banking / Mobile) → `CHG-OC-385` **NEFT Charge**; confirmed Fixed amount 6; fixed_amount_at_net_mobile_banking=Yes; slab 10001–100000; facility=Overdraft; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Net banking / Mobile) → `CHG-OC-386` **NEFT Charge**; confirmed Fixed amount 12; fixed_amount_at_net_mobile_banking=Yes; slab 100001–200000; facility=Overdraft; gst master='Yes' (soft).
- **NEFT Charge** (facility=Overdraft; channel=Net banking / Mobile) → `CHG-OC-387` **NEFT Charge**; confirmed Fixed amount 12; fixed_amount_at_net_mobile_banking=Yes; slab 200001–None; facility=Overdraft; gst master='Yes' (soft).
- **RTGS Charge** (facility=Overdraft; channel=Branch) → `CHG-OC-388` **RTGS Charge**; confirmed Fixed amount 24.5; fixed_amount_at_branch=Yes; slab 200000–500000; facility=Overdraft; gst master='Yes' (soft).
- **RTGS Charge** (facility=Overdraft; channel=Branch) → `CHG-OC-389` **RTGS Charge**; confirmed Fixed amount 49.5; fixed_amount_at_branch=Yes; slab 500001–None; facility=Overdraft; gst master='Yes' (soft).
- **RTGS Charge** (facility=Overdraft; channel=Net banking) → `CHG-OC-390` **RTGS Charge**; confirmed Fixed amount 15; fixed_amount_at_net_mobile_banking=Yes; slab 200000–500000; channel source='Net banking'; facility=Overdraft; gst master='Yes' (soft).
- **RTGS Charge** (facility=Overdraft; channel=Net banking) → `CHG-OC-391` **RTGS Charge**; confirmed Fixed amount 30; fixed_amount_at_net_mobile_banking=Yes; slab 500001–None; facility=Overdraft; gst master='Yes' (soft).
- **IMPS Charge** (facility=Overdraft; channel=Net banking / Mobile / Branch) → `CHG-OC-392` **IMPS Charge**; confirmed Fixed amount 1; slab None–1000; facility=Overdraft; channel Net banking / Mobile / Branch; gst master='Yes' (soft).
- **IMPS Charge** (facility=Overdraft; channel=Net banking / Mobile / Branch) → `CHG-OC-393` **IMPS Charge**; confirmed Fixed amount 5; slab 1001–25000; facility=Overdraft; gst master='Yes' (soft).
- **IMPS Charge** (facility=Overdraft; channel=Net banking / Mobile / Branch) → `CHG-OC-394` **IMPS Charge**; confirmed Fixed amount 10; slab 25001–100000; facility=Overdraft; gst master='Yes' (soft).
- **IMPS Charge** (facility=Overdraft; channel=Net banking / Mobile / Branch) → `CHG-OC-395` **IMPS Charge**; confirmed Fixed amount 15; slab 100001–500000; facility=Overdraft; gst master='Yes' (soft).
- **Omni Pay Issuance Charge** (facility=Overdraft) → `CHG-OC-399` **Omni Pay Issuance Charge**; confirmed Formula Rs.1.10/1000 → Fixed amount 1.1 + fixed_amount_per_1000_rs=Yes; charge_min=53; cu=issuance; facility=Overdraft; gst master='Yes' (soft).
- **Digital Documentation Charge** (facility=Both) → `CHG-OC-400` **Digital Documentation Charge**; confirmed Fixed amount 100; charge_unit=Instance; freq=As applicable; facility Both→Any; gst master='Yes' (soft).
- **EMI / Cheque / ECS / ACH Bounce Charge** (facility=Both) → `CHG-OC-404` **EMI / Cheque / ECS / ACH Bounce Charge**; confirmed Fixed amount 300; charge_unit=Instance; frequency: source='Per instance' master='Each time' (treated equivalent); facility Both→Any; gst master='Yes' (soft).
- **Re-issuance of PO/DD Charge** (facility=Both) → `CHG-OC-406` **Re-issuance of PO/DD Charge**; confirmed Fixed amount 115; charge_unit=Instance; freq=Per request; facility Both→Any; gst master='Yes' (soft).
- **Duplicate Certificate / Interest Paid Certificate Charge** (facility=Both) → `CHG-OC-407` **Duplicate Certificate / Interest Paid Certificate Charge**; confirmed Fixed amount 150; charge_unit=Instance; freq=Per request; facility Both→Any; gst master='Yes' (soft).
- **Non-collection of Original Documents Charge** (facility=Both) → `CHG-OC-409` **Non-collection of Original Documents Charge**; confirmed Fixed amount 1000; charge_unit=Instance; freq='After 30 days from loan closure'; note_1 preserves wording; facility Both→Any; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Legal Charge** (facility=Both; loc=Metro / Urban) → `CHG-OC-366` **Legal Charges** — rename; confirmed Fixed amount 2500; charge_by_area Metro / Urban; charge_unit=Instance; freq=As applicable; rename Legal Charge → Legal Charges; facility Both→Any; gst master='Yes' (source Plus taxes — soft).
- **Technical Charge** (facility=Both; loc=Metro / Urban) → `CHG-OC-368` **Legal & Technical Charges** — rename; confirmed Fixed amount 2500; charge_by_area Metro / Urban; charge_unit=Instance; freq=As applicable; rename Technical Charge → Legal & Technical Charges (master uses published table umbrella for Technical column; amount matches); facility Both→Any; gst master='Yes' (soft).
- **Legal Charge** (facility=Both; loc=Semi Urban / Rural) → `CHG-OC-367` **Legal Charges** — rename; confirmed Fixed amount 2500; charge_by_area Semi Urban & Rural≈source Semi Urban / Rural; charge_unit=Instance; freq=As applicable; rename Legal Charge → Legal Charges; facility Both→Any; gst master='Yes' (soft).
- **Technical Charge** (facility=Both; loc=Semi Urban / Rural) → `CHG-OC-369` **Legal & Technical Charges** — rename; confirmed Fixed amount 2500; charge_by_area Semi Urban & Rural≈source Semi Urban / Rural; charge_unit=Instance; freq=As applicable; rename Technical Charge → Legal & Technical Charges (umbrella name for Technical column; amount matches); facility Both→Any; gst master='Yes' (soft).
- **Interest Rate Conversion Charge (BR/BPLR/MCLR to RLLR)** (facility=Both; cust=Individual) → `CHG-OC-370` **Interest Rate Benchmark Switch Fees** — rename; confirmed Fixed amount 5000; customer=Individual; charge_unit=Switch; freq=Per conversion request; benchmark_switch Base Rate / MCLR / BPLR → RLLR (source BR/BPLR/MCLR to RLLR); rename Interest Rate Conversion Charge (BR/BPLR/MCLR to RLLR) → Interest Rate Benchmark Switch Fees; facility Both→Any; gst master='Yes' (soft).
- **Interest Rate Conversion Charge (BR/BPLR/MCLR to RLLR)** (facility=Both; cust=Non-individual) → `CHG-OC-371` **Interest Rate Benchmark Switch Fees** — rename; confirmed Percentage 0.0025 (=0.25%); customer=Non-Individual; charge_unit=Switch; freq=Per conversion request; pct_base: source='Outstanding amount' master='Outstanding loan amount' (treated equivalent); benchmark_switch Base Rate / MCLR / BPLR → RLLR; rename Interest Rate Conversion Charge (BR/BPLR/MCLR to RLLR) → Interest Rate Benchmark Switch Fees; facility Both→Any; gst master='Yes' (soft).
- **Interest Rate Conversion Charge (Interest Saver to Home Loan)** (facility=Both) → `CHG-OC-372` **Facility Conversion fees** — rename; confirmed Percentage 0.005 (=0.50%); pct_base=Outstanding loan amount; charge_unit=Conversion; freq=Per conversion request; facility_conversion Home Loan Interest Saver → Home Loan; rename Interest Rate Conversion Charge (Interest Saver to Home Loan) → Facility Conversion fees; facility: source=Both master=Overdraft (Interest Saver is OD product — soft, amounts match); gst master='Yes' (soft).
- **Cash Deposit Charge** (facility=Overdraft) → `CHG-OC-396` **Cash Deposit Amount Charges** — rename; confirmed Formula Rs.4.00/1000 → Fixed amount 4 + fixed_amount_per_1000_rs=Yes; slab None–300000; facility=Overdraft; rename Cash Deposit Charge → Cash Deposit Amount Charges; gst master='Yes' (soft).
- **Cash Deposit Charge** (facility=Overdraft) → `CHG-OC-397` **Cash Deposit Amount Charges** — rename; confirmed Formula Rs.5.00/1000 → Fixed amount 5 + fixed_amount_per_1000_rs=Yes; slab 300001–None; facility=Overdraft; rename Cash Deposit Charge → Cash Deposit Amount Charges; gst master='Yes' (soft).
- **Cheque Book Issuance Charge** (facility=Overdraft) → `CHG-OC-398` **Cheque Book Issuance Charges** — rename; confirmed Fixed amount 5; fixed_amount_unit=Leaf; charge_unit=leaf; freq=Per issuance; facility=Overdraft; rename Cheque Book Issuance Charge → Cheque Book Issuance Charges; gst master='Yes' (soft).
- **Copy of Property Documents Charge** (facility=Both) → `CHG-OC-401` **Property Document Retrieval Charge** — rename; confirmed Fixed amount 225; charge_unit=Instance; freq=Per request; rename Copy of Property Documents Charge → Property Document Retrieval Charge; soft: source 'Other than Natural Amortization' applies to Document Retrieval sibling (r38), not this copy charge; master note unset on both; facility Both→Any; gst master='Yes' (soft).
- **Document Retrieval Charge** (facility=Both) → `CHG-OC-402` **Property Document Retrieval Charge** — rename; confirmed Fixed amount 2500; charge_unit=Instance; freq=Per request; rename Document Retrieval Charge → Property Document Retrieval Charge; soft: source Conditions 'Other than Natural Amortization' not stored in master note_1; facility Both→Any; gst master='Yes' (soft).
- **Repayment Mode Change / ECS-ACH Swap Charge** (facility=Both) → `CHG-OC-403` **Repayment Mode Change / ECS ACH Swap Charge** — rename; confirmed Fixed amount 575; charge_unit=Instance; freq=Per request; note_1 swap wording; rename Repayment Mode Change / ECS-ACH Swap Charge → Repayment Mode Change / ECS ACH Swap Charge (hyphen→space); facility Both→Any; gst master='Yes' (soft).
- **Duplicate Statement Charge** (facility=Both) → `CHG-OC-405` **Statement of Account Charges - Duplicate** — rename; confirmed Fixed amount 115; charge_unit=Request; frequency: source='Per request' master='Each time' (treated equivalent); rename Duplicate Statement Charge → Statement of Account Charges - Duplicate; facility Both→Any; gst master='Yes' (soft).
- **CIBIL Credit Information Copy Charge** (facility=Both) → `CHG-OC-408` **Credit Information Report (CIC) Charges - Copy** — rename; confirmed Fixed amount 50; charge_unit=Report; freq=Per request; rename CIBIL Credit Information Copy Charge → Credit Information Report (CIC) Charges - Copy; facility Both→Any; gst master='Yes' (soft).
- **Rate Switch Charge (Floating ROI to Fixed ROI)** (facility=Both) → `CHG-OC-410` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.005 (=0.50%); charge_max=100000; pct_base=Outstanding loan amount; charge_unit=Switch; interest_rate_type_switch Floating→Fixed; freq=Per conversion request; rename Rate Switch Charge (Floating ROI to Fixed ROI) → Interest Rate Type Switch Fees; facility Both→Any; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

- **CERSAI Registration Charge** | facility=Both | product=Home Loan | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | loc=Any | charged_per=Per registration | frequency=At registration | conditions='For loan amount up to Rs 5 Lakh. Plus taxes.' (Structured_Data excel row 47)
- **CERSAI Registration Charge** | facility=Both | product=Home Loan | type=Fixed amount | amount=200 | min=None max=None | pct_on=None | loan_from=500001 loan_to=None | customer=Any | loc=Any | charged_per=Per registration | frequency=At registration | conditions='For loan amount above Rs 5 Lakh. Plus taxes.' (Structured_Data excel row 48)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `idbi bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 45 `Other charges` rows map to Structured_Data (Legal/Technical area pairs, benchmark/facility/rate switches, inspection slabs, property swap/release, NEFT/RTGS/IMPS/cash/cheque/Omni OD schedule, documentation/statement/bounce/CIC, etc.). CERSAI is missing rather than duplicated.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **84 rows** origin=`Offers.processing`. Not in Structured_Data (source is IDBI SOC Structured Retail Asset schedule — legal/technical, rate/facility switches, inspection, property swap/release, NEFT/RTGS/IMPS/cash/cheque/Omni OD fees, documentation/bounce/statement/CIC, CERSAI; no processing-fee rows).
  - Sample ids: CHG-PROC-891, CHG-PROC-892, CHG-PROC-893, CHG-PROC-894, CHG-PROC-895, CHG-PROC-896, CHG-PROC-897, CHG-PROC-898
  - Schemes seen: Plain Vanilla Home Loan ×28; Home Loan Ultra Saver ×28; Home Loan Top Up ×28
  - Fixed-amount / facility / rate_type fingerprints: {(None, None, None, 10000, 'Term Loan', 'Floating'): 28, (None, None, None, 10000, 'Overdraft', 'Floating'): 14, (None, None, None, 15000, 'Term Loan', 'Floating'): 28, (None, None, None, 15000, 'Overdraft', 'Floating'): 14}
    - ₹10,000 Fixed × Term Loan Floating (Plain Vanilla + Top Up, loan ≤75L) and Overdraft Floating (Ultra Saver ≤75L)
    - ₹15,000 Fixed × Term Loan Floating (Plain Vanilla + Top Up, loan >75L) and Overdraft Floating (Ultra Saver >75L)
  - CIBIL bands (distinct, not duplicates): 650–699, 700–720, 721–740, 741–760, 761–780, 781–824, 825–900.
  - Occupation × band matrix: Salaried × Self-Employed × 7 CIBIL bands × 2 loan bands × 3 schemes = 84 (=7×2×2×3).
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-86` **Overdue charges** | facility=Term Loan | scheme=Plain Vanilla Home Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-87` **Overdue charges** | facility=Overdraft | scheme=Home Loan Ultra Saver | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-88` **Overdue charges** | facility=Term Loan | scheme=Home Loan Top Up | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-72` **Prepayment charges** | facility=Term Loan | scheme=Plain Vanilla Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-73` **Prepayment charges** | facility=Overdraft | scheme=Home Loan Ultra Saver | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-74` **Prepayment charges** | facility=Term Loan | scheme=Home Loan Top Up | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-222` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | months=0–6 (final_disbursement) | note=Within 6 months from final disbursement
- `CHG-PRE-223` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | months=6–None (final_disbursement) | note=After 6 months from final disbursement — nil
- `CHG-PRE-224` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | months=None–None (None) | note=None
- `CHG-PRE-225` **Prepayment charges** | facility=Overdraft | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | months=0–6 (final_disbursement) | note=Within 6 months from final disbursement
- `CHG-PRE-226` **Prepayment charges** | facility=Overdraft | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | months=6–None (final_disbursement) | note=After 6 months from final disbursement — nil
- `CHG-PRE-227` **Prepayment charges (takeover)** | facility=Overdraft | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | months=None–None (None) | note=None

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `IDB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (47 rows).
- Master filter: `Bank_charges` where `bank_key` == `idbi bank` (141 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- Published Legal & Technical table (₹2500 Legal + ₹2500 Technical per Metro/Urban and Semi Urban/Rural) mapped 1:1; Technical column renamed to **Legal & Technical Charges** in master.
- NEFT Free/Nil correctly encoded as Fixed amount 0; Branch vs Net/Mobile encoded via `fixed_amount_at_branch` / `fixed_amount_at_net_mobile_banking`.
- Cash deposit / Omni Pay per-₹1000 formulas correctly encoded as Fixed amount + `fixed_amount_per_1000_rs=Yes`.
- **CERSAI Registration Charge** ₹100 (≤5L) / ₹200 (>5L) are the only Structured_Data rows absent from master.
- No Other-charges redundant/duplicate rows vs Structured_Data.
- No `Slab_Table` origin rows for this bank.
- Offers.processing CIBIL × occupation × loan-band cells share fee fingerprints within each band but are distinct score/occupation keys (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 2
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 84 listed items/groups
- **Prepayment extras → ignored:** 9 listed items/groups
- **Offers.overdue → no action unless noted separately:** 3 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Registration Charge
- CERSAI Registration Charge

### Still missing — bank service charges (actionable)
- (none)
