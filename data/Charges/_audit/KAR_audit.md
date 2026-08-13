# KAR / Karnataka Bank — Charges Audit

## Summary
- Source Structured_Data rows: 35
- Master Bank_charges rows (karnataka bank): 41
- Matched OK: 5
- Matched with rename only: 27
- Value mismatches: 1
- Missing in master (in source, not in master): 2
- Extra/redundant in master (in master, not in source): 8
- Duplicate issues in master: 0

## Verdict
FAIL — 1 value mismatch(es), 2 source charge(s) missing in master, 8 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Sanction Modification / Security Release / Permission Charge** (facility=Both) → `CHG-OC-538` **Sanction Modification / Security Release / Permission Charge**; confirmed Fixed amount 2000; charge_unit=occasion; freq: source='Each occasion' master='Each time' (soft equivalent); facility Both→Any broadening (amounts match — soft); gst master='Yes' (soft).
- **CIBIL/CRIF Consumer Report Charge** (facility=Both) → `CHG-OC-539` **CIBIL/CRIF Consumer Report Charge**; confirmed Fixed amount 100; customer_type=Individual; charge_unit=Report; freq=Each report; facility Both→Any broadening (amounts match — soft); gst master='Yes' (soft).
- **CIBIL/CRIF Corporate Report Charge** (facility=Both) → `CHG-OC-540` **CIBIL/CRIF Corporate Report Charge**; confirmed Fixed amount 1000; customer_type: source='Non-individual' master='Non-Individual' (casing soft); charge_unit=Report; freq=Each report; facility Both→Any broadening (amounts match — soft); gst master='Yes' (soft).
- **NOC / No Due / Balance / Interest Certificate Charge** (facility=Any) → `CHG-OC-563` **NOC / No Due / Balance / Interest Certificate Charge**; confirmed Fixed amount 150; charge_unit=Certificate; freq=Each certificate; notes preserve Govt. scheme waiver; gst master='Yes' (soft).
- **No Due Certificate for Loan from Other Bank** (facility=Any) → `CHG-OC-564` **No Due Certificate for Loan from Other Bank**; confirmed Fixed amount 25; charge_unit=Certificate; freq=Each certificate; gst master='Yes' (source says Including GST; soft).

### 1b. Rename only (values OK)
- **Term Loan Review Charge** (facility=Term Loan) → `CHG-OC-533` **Term Loan Review Charges** — rename; confirmed Nil→Fixed amount 0; slab None–100000; slab_basis=Sanctioned loan amount; charge_unit≈account/Review; freq=On earliest anniversary date of the financial year; rename Term Loan Review Charge→Term Loan Review Charges; gst master='Yes' (soft).
- **Term Loan Review Charge** (facility=Term Loan) → `CHG-OC-534` **Term Loan Review Charges** — rename; confirmed Fixed amount 250; slab 100001–1000000; slab_basis=Sanctioned loan amount; freq=On earliest anniversary date of the financial year; rename Term Loan Review Charge→Term Loan Review Charges; gst master='Yes' (soft).
- **Term Loan Review Charge** (facility=Term Loan) → `CHG-OC-535` **Term Loan Review Charges** — rename; confirmed Fixed amount 500; slab 1000001–10000000; slab_basis=Sanctioned loan amount; freq=On earliest anniversary date of the financial year; rename Term Loan Review Charge→Term Loan Review Charges; gst master='Yes' (soft).
- **Term Loan Review Charge** (facility=Term Loan) → `CHG-OC-536` **Term Loan Review Charges** — rename; confirmed Fixed amount 3000; slab 10000001–None; slab_basis=Sanctioned loan amount; freq=On earliest anniversary date of the financial year; rename Term Loan Review Charge→Term Loan Review Charges; gst master='Yes' (soft).
- **Documentation Charge** (facility=Both) → `CHG-OC-537` **Documentation Charges** — rename; confirmed Percentage 0.05%→0.0005; charge_max=25000; slab 1000001–None; pct_base: source='sanctioned facility' master='Sanctioned loan amount' (soft equivalent); facility Both→Any broadening (amounts match — soft); rename Documentation Charge→Documentation Charges; gst master='Yes' (soft); note_2 preserves Lead Bank consortium MD&CEO determination wording.
- **EMI Bounce Charge** (facility=Term Loan) → `CHG-OC-541` **EMI Bounce Charges** — rename; confirmed Fixed amount 250; slab None–10000; slab_basis=Transaction amount (EMI ≤₹10,000 band from Conditions); charge_unit=occasion; freq=Each occasion when EMI not paid within 30 days of due date; facility Term Loan→Any broadening (soft); rename EMI Bounce Charge→EMI Bounce Charges; gst master='Yes' (soft).
- **EMI Bounce Charge** (facility=Term Loan) → `CHG-OC-542` **EMI Bounce Charges** — rename; confirmed Fixed amount 500; slab 10001–None; slab_basis=Transaction amount (EMI >₹10,000); charge_unit=occasion; freq=Each occasion when EMI not paid within 30 days of due date; facility Term Loan→Any broadening (soft); rename EMI Bounce Charge→EMI Bounce Charges; gst master='Yes' (soft).
- **Rate Switch / Migration Charge** (facility=Term Loan) → `CHG-OC-543` **Interest Rate Benchmark Switch Fees** — rename; confirmed Fixed amount 10000 + charge_min=10000; facility=Term Loan; charge_unit=Switch; freq: source='Each switch/migration' master='Per request' (soft); benchmark_switch_from/to encodes Base Rate/MCLR/BPLR→EBLR (source also mentions PLR→MCLR path — soft note); rename Rate Switch / Migration Charge→Interest Rate Benchmark Switch Fees; gst master='Yes' (soft).
- **Rate Switch / Migration Charge** (facility=Overdraft) → `CHG-OC-544` **Interest Rate Benchmark Switch Fees** — rename; confirmed Fixed amount 10000 + charge_min=10000; facility=Overdraft; charge_unit=Switch; freq: source='Each switch/migration' master='Per request' (soft); rename Rate Switch / Migration Charge→Interest Rate Benchmark Switch Fees; gst master='Yes' (soft).
- **Inspection Charge** (facility=Term Loan) → `CHG-OC-545` **Inspection Charges** — rename; confirmed Nil→Fixed amount 0; slab None–100000; slab_basis=Sanctioned loan amount; charge_unit=Inspection; freq: source blank (Priority Sector ≤₹1L Nil) master='Per annum cap Rs.1000' (soft mis-copy from higher slab — amounts/slab OK); rename Inspection Charge→Inspection Charges; gst master='Yes' (soft).
- **Inspection Charge** (facility=Term Loan) → `CHG-OC-546` **Inspection Charges** — rename; confirmed Fixed amount 100; charge_max=400; slab 100001–1000000; slab_basis=Sanctioned loan amount; freq=Per annum cap Rs.400; note_1='Priority sector advances.'; rename Inspection Charge→Inspection Charges; outstation actuals in source Conditions not flagged as actuals_in_addition (soft); gst master='Yes' (soft).
- **Inspection Charge** (facility=Term Loan) → `CHG-OC-547` **Inspection Charges** — rename; confirmed Fixed amount 250; charge_max=1000; slab 1000001–None; slab_basis=Sanctioned loan amount; freq=Per annum cap Rs.1000; note_1='Priority sector advances.'; rename Inspection Charge→Inspection Charges; gst master='Yes' (soft).
- **Property Valuation Fee** (facility=Both) → `CHG-OC-548` **Property Valuation Report Charges** — rename; confirmed Percentage 0.15%→0.0015; charge_min=250 charge_max=750; slab None–500000; pct_base=Value of Property; property_valuation_scope=Non-agricultural property; facility Both→Any (soft); rename Property Valuation Fee→Property Valuation Report Charges; gst master='Yes' (soft).
- **Property Valuation Fee** (facility=Both) → `CHG-OC-549` **Property Valuation Report Charges** — rename; confirmed Percentage 0.125%→0.00125; charge_min=750 charge_max=1250; slab 500001–1000000; pct_base=Value of Property; rename Property Valuation Fee→Property Valuation Report Charges; gst master='Yes' (soft).
- **Property Valuation Fee** (facility=Both) → `CHG-OC-550` **Property Valuation Report Charges** — rename; confirmed Percentage 0.10%→0.001; charge_min=1250 charge_max=5000; slab 1000001–5000000; pct_base=Value of Property; rename Property Valuation Fee→Property Valuation Report Charges; gst master='Yes' (soft).
- **Property Valuation Fee** (facility=Both) → `CHG-OC-551` **Property Valuation Report Charges** — rename; confirmed Formula Rs.5000+0.05%/10L beyond → charge_type=Both; fixed_amount=5000; percentage 0.05%→0.0005; percentage_per_10_lakh_beyond_slab_from=Yes; min=5000 max=7500; slab 5000001–10000000; rename Property Valuation Fee→Property Valuation Report Charges; gst master='Yes' (soft).
- **Property Valuation Fee** (facility=Both) → `CHG-OC-552` **Property Valuation Report Charges** — rename; confirmed Formula Rs.7500+0.025%/10L beyond → charge_type=Both; fixed_amount=7500; percentage 0.025%→0.00025; percentage_per_10_lakh_beyond_slab_from=Yes; min=7500 max=10000; slab 10000001–None; rename Property Valuation Fee→Property Valuation Report Charges; gst master='Yes' (soft).
- **Agricultural Property Valuation Fee** (facility=Both) → `CHG-OC-553` **Property Valuation Report Charges - Agricultural land** — rename; confirmed Nil→Fixed amount 0; slab None–25000; property_valuation_scope=Agricultural land; charge_unit=Property; freq=Each valuation; rename Agricultural Property Valuation Fee→Property Valuation Report Charges - Agricultural land; facility Both→Any (soft); gst master='Yes' (soft).
- **Agricultural Property Valuation Fee** (facility=Both) → `CHG-OC-554` **Property Valuation Report Charges - Agricultural land** — rename; confirmed Fixed amount 500; slab 25001–500000; property_valuation_scope=Agricultural land; rename Agricultural Property Valuation Fee→Property Valuation Report Charges - Agricultural land; gst master='Yes' (soft).
- **Agricultural Property Valuation Fee** (facility=Both) → `CHG-OC-555` **Property Valuation Report Charges - Agricultural land** — rename; confirmed Fixed amount 1000; slab 500001–1000000; property_valuation_scope=Agricultural land; rename Agricultural Property Valuation Fee→Property Valuation Report Charges - Agricultural land; gst master='Yes' (soft).
- **Agricultural Property Valuation Fee** (facility=Both) → `CHG-OC-556` **Property Valuation Report Charges - Agricultural land** — rename; confirmed Formula ₹100 per lakh → Fixed amount 100 + fixed_amount_per_lakh_or_part=Yes; charge_min=1000 charge_max=10000; slab 1000001–None; rename Agricultural Property Valuation Fee→Property Valuation Report Charges - Agricultural land; gst master='Yes' (soft).
- **Solvency / Financial Certificate Charge** (facility=Any) → `CHG-OC-557` **Solvency Certificate Charges** — rename; confirmed Fixed amount 500; slab None–500000; slab_basis=Certificate amount; charge_unit=Certificate; freq=Each certificate; rename Solvency / Financial Certificate Charge→Solvency Certificate Charges; note_1 preserves financial certificates; gst master='Yes' (soft).
- **Confidential Opinion Charge** (facility=Any) → `CHG-OC-559` **Confidential Opinion Report Charge** — rename; confirmed Fixed amount 500; customer_type=Individual; charge_unit=opinion; freq=Each request; rename Confidential Opinion Charge→Confidential Opinion Report Charge; gst master='Yes' (soft).
- **Confidential Opinion Charge** (facility=Any) → `CHG-OC-560` **Confidential Opinion Report Charge** — rename; confirmed Fixed amount 2000; customer_type: source='Non-individual' master='Non-Individual' (casing soft); charge_unit=opinion; freq=Each request; rename Confidential Opinion Charge→Confidential Opinion Report Charge; gst master='Yes' (soft).
- **Failed Standing Instruction Charge (Loan Account)** (facility=Term Loan) → `CHG-OC-561` **Standing Instruction Failure Charges** — rename; confirmed Fixed amount 250; slab None–10000; slab_basis=Transaction amount; charge_unit≈instance/Failure; freq: source='Each failed SI' master='Each occasion' (soft); facility Term Loan→Any broadening (soft); rename Failed Standing Instruction Charge (Loan Account)→Standing Instruction Failure Charges; gst master='Yes' (soft).
- **Failed Standing Instruction Charge (Loan Account)** (facility=Term Loan) → `CHG-OC-562` **Standing Instruction Failure Charges** — rename; confirmed Fixed amount 500; slab 10001–None; slab_basis=Transaction amount; charge_unit≈instance/Failure; facility Term Loan→Any broadening (soft); rename Failed Standing Instruction Charge (Loan Account)→Standing Instruction Failure Charges; gst master='Yes' (soft).
- **Record Copy of Document Charge** (facility=Any) → `CHG-OC-565` **Loan Document Copy Charges** — rename; confirmed Fixed amount 150; charge_unit=Instance; freq: source='Each instance' master='Each time' (soft); rename Record Copy of Document Charge→Loan Document Copy Charges; gst master='Yes' (soft).

## 2. Value mismatches

- **Solvency / Financial Certificate Charge** (facility=Any; Structured_Data excel row 27) → `CHG-OC-558` **Solvency Certificate Charges**; DIFF fixed_amount_per_lakh_or_part: source='Formula ₹200.00 per lakh (requires Fixed amount 200 + fixed_amount_per_lakh_or_part=Yes)' master=None; Master stores flat Fixed amount 200 with charge_min=500 charge_max=100000 and slab 500001–None but omits fixed_amount_per_lakh_or_part=Yes; without the flag the ₹200/lakh formula is incorrect; rename Solvency / Financial Certificate Charge→Solvency Certificate Charges would be OK if per-lakh flag set; min/max 500/100000 match source.

## 3. Missing in master

- **Standing Instruction Registration Charge** | facility=Term Loan | product='Any home loan' | type=Nil | amount='Nil' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=None | charged_per='per instruction' | frequency='One time' | conditions='If the instructions have to be executed within the Bank - Free of cost.' (Structured_Data excel row 32)
- **Standing Instruction Registration Charge** | facility=Term Loan | product='Any home loan' | type=Fixed amount | amount='100' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=None | charged_per='per instruction' | frequency='One time' | conditions='Standing instruction other than within the Bank: Rs.100/- per Instruction. Modification of Standing Instruction is not allowed; old needs to be cancelled and fresh standing instruction has to be created.' (Structured_Data excel row 33)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `karnataka bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 33 `Other charges` rows map to Structured_Data (32 value-OK including renames; 1 value mismatch on Solvency per-lakh flag). Standing Instruction Registration ×2 are missing rather than duplicated.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **6 rows** origin=`Offers.processing`. Not in Structured_Data (source is Karnataka Bank Credit/General service charges — review/documentation/CIBIL/EMI bounce/rate switch/inspection/valuation/solvency/confidential opinion/SI failure/NOC/document copy; no processing-fee rows).
  - Sample ids: CHG-PROC-1022, CHG-PROC-1023, CHG-PROC-1024, CHG-PROC-1025, CHG-PROC-1026, CHG-PROC-1027
  - Schemes seen: KBL - Apna Ghar ×6; facility=Term Loan; rate_type=Floating.
  - Percentage/min/max fingerprints: {(0.0025, None, None): 6} (= 0.25% of sanctioned amount).
  - CIBIL bands (distinct, not duplicates): 800–900, 750–799, 700–749, 650–699, 600–649, 300–599.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL band: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-93` **Overdue charges** | facility=Term Loan | scheme=KBL - Apna Ghar | rate_type=Floating | pct=0.03 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-79` **Prepayment charges** | facility=Term Loan | scheme=KBL - Apna Ghar | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
(none)

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: KAR_Home_Loan_Charges_Official.xlsx sheet Structured_Data (35 rows).
- Master filter: Bank_charges where bank_key == 'karnataka bank' (41 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- Nil correctly encoded as Fixed amount 0 on Term Loan Review ≤₹1L, Inspection ≤₹1L, Agricultural valuation ≤₹25,000.
- Non-agri valuation Formula slabs correctly use charge_type=Both + percentage_per_10_lakh_beyond_slab_from=Yes.
- Agricultural Formula ₹100/lakh correctly uses fixed_amount_per_lakh_or_part=Yes.
- Solvency above ₹5L `CHG-OC-558`: ₹200 per lakh (`fixed_amount_per_lakh_or_part=Yes`) of Solvency certificate amount, min ₹500 max ₹1,00,000. SI registration: within bank Nil → `CHG-OC-872`; other than within bank ₹100 → `CHG-OC-873`. Priority inspection ladder `CHG-OC-545`/`546`/`547` share group `CHG-OC-545`; Nil row has Priority sector note.
- No Other-charges extra/redundant vs Structured_Data (33 OC rows all map; 1 mapped with value mismatch).
- No Slab_Table or CSV.fixed_prepay origin rows for this bank.
- Offers.processing CIBIL bands share the same fee fingerprint but are distinct score bands (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 0
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 1 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- (none classified from JSON/MD)

### Still missing — bank service charges (actionable)
(none)
