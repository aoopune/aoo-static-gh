# PNB / Punjab National Bank — Charges Audit

## Summary
- Source Structured_Data rows: 45
- Master Bank_charges rows (punjab national bank): 111
- Matched OK: 5
- Matched with rename only: 35
- Value mismatches: 0
- Missing in master (in source, not in master): 0 (PMAY/Pride off Offers; CERSAI/mortgage govt)
- Extra/redundant in master (in master, not in source): 76
- Duplicate issues in master: 0

## Verdict
PASS — compare-scope service charges corrected. PMAY / PNB Pride documentation not on Offers (skipped). CERSAI / mortgage ignored (govt).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Security Inspection / Verification Charge** (facility=Both; product=Housing Loan) → `CHG-OC-654` **Security Inspection / Verification Charge** (facility=Any); confirmed Fixed amount 250 + GST; notes match source: regular periodical inspection done away with; irregular/NPA follow PNB frequency.
- **Bank Official Presence With Document Copy** (facility=Any) → `CHG-OC-630` **Bank Official Presence With Document Copy**; confirmed Formula '2000 plus actual photocopy charges' encoded as Fixed amount 2000 + actuals_in_addition_to_charge=Yes; charge_unit=Request; freq when presence of bank official is required; gst master='Yes' (soft).
- **Term Loan Disbursement Instrument Charge** (facility=Term Loan) → `CHG-OC-655` **Term Loan Disbursement Instrument Charge** (facility=Any); confirmed Nil/'No charges' encoded as Fixed Amount 0 (Nil↔0 equivalent); charge_unit=Instrument; facility Term Loan→Any broadening (amounts match — soft); gst master='Yes' (soft).
- **NACH Mandate Verification Charge** (facility=Any) → `CHG-OC-657` **NACH Mandate Verification Charge**; confirmed Fixed amount 100; charge_unit=Mandate; freq inward NACH mandate verification physical/e-mandate; gst master='Yes' (source: GST extra — soft).
- **NACH Debit Return Charge** (facility=Any) → `CHG-OC-658` **NACH Debit Return Charge**; confirmed Fixed amount 250; charge_unit=Return; freq on return of NACH debit due to insufficient funds; gst master='Yes' (source: GST extra — soft).

### 1b. Rename only (values OK)
- **Documentation Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-618` **Documentation Charges** — rename; confirmed Fixed amount 1350; purpose=Regular Home Loan; charge_unit=Instance; freq=At sanction/disbursement; rename Documentation Charge→Documentation Charges; gst master='Yes' (soft).
- **Documentation Charge** (facility=Term Loan; product=Housing Loan; loan_type=Housing takeover) → `CHG-OC-619` **Documentation Charges** — rename; confirmed Fixed amount 1350; purpose=Regular Home Loan (Takeover); freq=At sanction/disbursement; rename Documentation Charge→Documentation Charges; gst master='Yes' (soft).
- **Max Saver One-Time Charge** (facility=Overdraft; product=PNB Max Saver) → `CHG-OC-620` **Max Saver One-Time Conversion Charge** — rename; confirmed Fixed amount 2500; charge_unit=Request; freq=At conversion/opening of Max Saver; note_1 preserves already-paid upfront & documentation condition; rename Max Saver One-Time Charge→Max Saver One-Time Conversion Charge; gst master='Yes' (soft).
- **Documentation Charge** (facility=Both; product='Overdraft/ Term Loan to Existing Housing Loan Borrowers') → `CHG-OC-622` **Documentation Charges** — rename; confirmed Fixed amount 450; purpose=Top-up Loan; facility=Any (covers Term Loan + Overdraft top-up); gst master='Yes' (soft).
- **Rate Type Switchover Charge** (facility=Term Loan) → `CHG-OC-623` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.005 (=0.50%) + charge_max=10000 (whichever is lower); pct_base=Outstanding loan amount; switch Fixed→Floating; charge_unit=Switch; source one row 'switching between fixed and floating' split into direction pairs (treated equivalent encoding); rename Rate Type Switchover Charge→Interest Rate Type Switch Fees; facility Term Loan→Any (soft); gst master='Yes' (source: GST levied as applicable — soft).
- **Rate Type Switchover Charge** (facility=Term Loan) → `CHG-OC-624` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.005 (=0.50%) + charge_max=10000; pct_base=Outstanding loan amount; switch Floating→Fixed; paired with CHG-OC-623; rename Rate Type Switchover Charge→Interest Rate Type Switch Fees; gst master='Yes' (soft).
- **Sanction Amendment / Modification Charge** (facility=Any) → `CHG-OC-625` **Sanction Amendment / Modification Charges** — rename; confirmed Percentage 0.0005 (=0.05%); min=5000 max=1000000; pct_base: source='Loan amount' master='Sanctioned loan amount' (treated equivalent); notes preserve CDR/restructuring exemption and ROI/service-charge-not-an-amendment; rename Charge→Charges; gst master='Yes' (soft).
- **Revalidation of Sanction - Term Loan** (facility=Term Loan) → `CHG-OC-626` **Revalidation of Sanction Charges** — rename; confirmed Formula '25% of applicable upfront fees' encoded as Percentage 0.25 + pct_base='Upfront fee' + charge_max=500000; facility=Term Loan; rename Revalidation of Sanction - Term Loan→Revalidation of Sanction Charges; gst master='Yes' (soft).
- **NOC Issuance Charge** (facility=Any) → `CHG-OC-627` **No Objection Certificate Issuance Fees** — rename; confirmed Percentage 0.0005 (=0.05%); min=2000 max=50000; pct_base: source='Limit' master='Sanctioned loan amount' (treated equivalent); notes preserve within-consortium exemption; rename NOC Issuance Charge→No Objection Certificate Issuance Fees; gst master='Yes' (soft).
- **Copy of Documents Charge** (facility=Any) → `CHG-OC-628` **Loan Document Copy Charges** — rename; confirmed Fixed amount 500; slab None–10000000; slab_basis master='Sanctioned loan amount' (source limit/loan band — treated equivalent); rename Copy of Documents Charge→Loan Document Copy Charges; gst master='Yes' (soft).
- **Copy of Documents Charge** (facility=Any) → `CHG-OC-629` **Loan Document Copy Charges** — rename; confirmed Formula '1000 plus actual photocopy charges' encoded as Fixed amount 1000 + actuals_in_addition_to_charge=Yes; slab_from=10000001 (source 'Over Rs. 100 Lakh' Loan_Amount_From=10000000 — exclusive+1 vs 'Above/Over' wording treated equivalent); rename Copy of Documents Charge→Loan Document Copy Charges; gst master='Yes' (soft).
- **Credit Information / Opinion Charge** (facility=Any; customer=Individual) → `CHG-OC-631` **Credit Opinion Report Charges** — rename; confirmed Fixed amount 1000; customer_type=Individual; charge_unit≈occasion; freq on request of borrower; rename Credit Information / Opinion Charge→Credit Opinion Report Charges; gst master='Yes' (soft).
- **Credit Information / Opinion Charge** (facility=Any; customer=Non-individual) → `CHG-OC-632` **Credit Opinion Report Charges** — rename; confirmed Fixed amount 1500; customer_type: source='Non-individual' master='Non-Individual' (casing soft); rename Credit Information / Opinion Charge→Credit Opinion Report Charges; gst master='Yes' (soft).
- **Credit Information Report (CIC) Charge** (facility=Any; customer=Individual) → `CHG-OC-633` **Credit Information Report (CIC) Charges** — rename; confirmed Fixed amount 100; charge_unit=Report; freq when CIC report drawn; rename Charge→Charges; gst master='Yes' (soft).
- **Credit Information Report (CIC) Charge** (facility=Any; customer=Non-individual) → `CHG-OC-634` **Credit Information Report (CIC) Charges** — rename; confirmed Fixed amount 500; customer_type Non-Individual (casing soft); charge_unit=Report; rename Charge→Charges; gst master='Yes' (soft).
- **Legal Opinion / NEC Charge** (facility=Any; loc=Metro) → `CHG-OC-641` **Legal Opinion / NEC Charges**; confirmed Fixed amount 3000; slab None–10000000; charge_by_area=Metro; charge_unit=Property; `out_of_pocket_expenses_additional=Yes`; gst master='Yes' (soft).
- **Legal Opinion / NEC Charge** (facility=Any; loc=Urban & Semi-Urban) → `CHG-OC-642` **Legal Opinion / NEC Charges**; confirmed Fixed amount 1500; slab None–10000000; charge_by_area='Urban & Semi-urban'; OOP flag Yes.
- **Legal Opinion / NEC Charge** (facility=Any; loc=Rural) → `CHG-OC-643` **Legal Opinion / NEC Charges**; confirmed Fixed amount 1000; slab None–10000000; charge_by_area=Rural; OOP flag Yes.
- **Legal Opinion / NEC Charge** (facility=Any; loc=Metro) → `CHG-OC-644` **Legal Opinion / NEC Charges**; confirmed Fixed amount 4000; slab_from=10000001; area=Metro; OOP flag Yes.
- **Legal Opinion / NEC Charge** (facility=Any; loc=Urban & Semi-Urban) → `CHG-OC-645` **Legal Opinion / NEC Charges**; confirmed Fixed amount 2500; slab_from=10000001; area=Urban & Semi-urban; OOP flag Yes.
- **Legal Opinion / NEC Charge** (facility=Any; loc=Rural) → `CHG-OC-646` **Legal Opinion / NEC Charges**; confirmed Fixed amount 1500; slab_from=10000001; area=Rural; OOP flag Yes. Duplicate NEC series `CHG-OC-635–640` deleted (same amounts; would have doubled the per-property cap).
- **Valuation Fee** (facility=Any) → `CHG-OC-647` **Property Valuation Report Charges** — rename; confirmed Fixed amount 2000; slab None–2000000; slab_basis master='Realizable value of assets' (source 'Value of assets / realizable value' — equivalent); property_valuation_scope master='Both' (source includes Property/Fixed Assets/Plant & Machinery — soft); charge_unit=Property; rename Valuation Fee→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-648` **Property Valuation Report Charges** — rename; confirmed Fixed amount 3000; slab 2000001–5000000 (source 'Above Rs. 20 Lakh to Rs. 50 Lakh' Loan_Amount_From=2000000 — exclusive+1 vs 'Above' wording treated equivalent); slab_basis='Realizable value of assets'; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-649` **Property Valuation Report Charges** — rename; confirmed Fixed amount 4000; slab 5000001–10000000; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-650` **Property Valuation Report Charges** — rename; confirmed Fixed amount 8000; slab 10000001–50000000; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-651` **Property Valuation Report Charges** — rename; confirmed Fixed amount 12000; slab 50000001–100000000; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-652` **Property Valuation Report Charges** — rename; confirmed Fixed amount 15000; slab 100000001–500000000; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-653` **Property Valuation Report Charges** — rename; confirmed Fixed amount 25000; slab_from=500000001; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **ECS Debit Return Charge** (facility=Any) → `CHG-OC-656` **ECS Debit Return Charge**; confirmed Fixed amount 100; distinct from NACH ₹250 on `CHG-OC-658`.

## 2. Value mismatches

(none) — `CHG-OC-621` Max Saver Charge Rule: invented ₹1,350 removed; `special_rule` = charges as per Housing Loans (upfront/processing + documentation) if those were not paid. ₹2,500 already-paid path `CHG-OC-620` unchanged.

## 3. Missing in master

(none actionable for compare)

- PMAY documentation Nil ×3 + PMAY additional Formula + PNB Pride Nil ×2 — **skipped** (not on Offers).
- CERSAI / mortgage — ignored (govt).

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `punjab national bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none remaining.) Deleted duplicate NEC series `CHG-OC-635–640`. Legal Opinion / NEC kept as one ladder `CHG-OC-641–646`.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **60 rows** origin=`Offers.processing`. Not in Structured_Data (source documentation rows explicitly exclude processing; no processing-fee Structured_Data rows).
  - Sample ids: CHG-PROC-1, CHG-PROC-2, CHG-PROC-3, CHG-PROC-4, CHG-PROC-5, CHG-PROC-6, CHG-PROC-7, CHG-PROC-8, CHG-PROC-9, CHG-PROC-10, CHG-PROC-11, CHG-PROC-12…
  - Schemes seen: Housing Loan For Public ×27; PNB Max-Saver ×27; Top-up Loan ×6; facility=Term Loan ×30 / Overdraft ×30; rate_type=Floating ×20 / Fixed ×40.
  - Percentage/min/max/loan-band fingerprints: {(0.0035, 2500, 15000, 1, 3000000): 18, (0.0035, 2500, 15000, 3000001, 1000000000): 24, (0, None, None, 1, 3000000): 6, (0, None, None, 3000001, 1000000000): 6, (0.0035, 2500, 15000, None, None): 6} (= 0.35% min ₹2,500 max ₹15,000 on public/Max-Saver loan bands; 0% for Central/State/PSU employees and Pensioners; Top-up 0.35% with no loan band).
  - CIBIL bands (distinct, not duplicates): 600–699, 700–749, 750–799, 750–900, 800–900, plus cibil_band_applicable=No (govt-employee waiver and Top-up).
  - Occupations / borrower categories: Salaried ×12 (govt/PSU/pensioner 0% fee) vs Any ×48 — distinct dimensions, not duplicates. Fixed-rate rows also split tenure 1–120 vs 121–360 months.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation+borrower_category+scheme+facility+rate_type+loan band+tenure: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-1` **Overdue charges** | facility=Term Loan | scheme=Housing Loan For Public | purpose=Regular Home Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-2` **Overdue charges** | facility=Term Loan | scheme=Housing Loan For Public | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-3` **Overdue charges** | facility=Overdraft | scheme=PNB Max-Saver | purpose=Regular Home Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-4` **Overdue charges** | facility=Overdraft | scheme=PNB Max-Saver | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-5` **Overdue charges** | facility=Term Loan | scheme=Top-up Loan | purpose=Top-up Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-6` **Overdue charges** | facility=Overdraft | scheme=Top-up Loan | purpose=Top-up Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-7` **Overdue charges** | facility=Term Loan | scheme=Top-up Loan | purpose=Top-up Loan | rate_type=Fixed | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-8` **Overdue charges** | facility=Overdraft | scheme=Top-up Loan | purpose=Top-up Loan | rate_type=Fixed | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-1` **Prepayment charges** | facility=Term Loan | scheme=Housing Loan For Public | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-4` **Prepayment charges** | facility=Overdraft | scheme=PNB Max-Saver | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-7` **Prepayment charges** | facility=Term Loan | scheme=Top-up Loan | purpose=Top-up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-8` **Prepayment charges** | facility=Overdraft | scheme=Top-up Loan | purpose=Top-up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-168` **Prepayment charges** | facility=Term Loan | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | pct_base=Prepaid_Amount | gst=Yes
- `CHG-PRE-169` **Prepayment charges (takeover)** | facility=Term Loan | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes
- `CHG-PRE-170` **Prepayment charges** | facility=Overdraft | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | pct_base=Prepaid_Amount | gst=Yes
- `CHG-PRE-171` **Prepayment charges (takeover)** | facility=Overdraft | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | pct_base=Sanctioned_Limit | gst=Yes

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `PNB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (45 rows).
- Master filter: `Bank_charges` where `bank_key` == `punjab national bank` (111 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- Percentages stored as fractions (0.50%→0.005, 0.05%→0.0005, 25%→0.25, 0.35%→0.0035). Nil/'No charges'/'NIL' ↔ Fixed Amount 0.
- **Documentation Charge** renamed to **Documentation Charges** (Housing ₹1,350 / takeover ₹1,350 / existing-borrower OD-TL ₹450).
- **Rate Type Switchover Charge** 0.50% of outstanding or ₹10,000 whichever lower split into Fixed→Floating and Floating→Fixed **Interest Rate Type Switch Fees**.
- **Legal Opinion / NEC Charge** is one per-property maximum schedule (`CHG-OC-641–646`); duplicate NEC series deleted; `out_of_pocket_expenses_additional=Yes`.
- **Valuation Fee** seven realizable-value slabs all present under **Property Valuation Report Charges** with identical fixed amounts. Master exclusive+1 lower bounds match published 'Above' wording (source excel repeats the round lakh/crore figure).
- Max Saver unpaid path `CHG-OC-621`: `special_rule` only (no invented ₹1,350). Already-paid path `CHG-OC-620` ₹2,500.
- ECS return `CHG-OC-656` named ECS Debit Return Charge ₹100; NACH `CHG-OC-658` ₹250.
- Top-up documentation `CHG-OC-622` facility=Any so OD top-up hits ₹450.
- PMAY / Pride documentation skipped (not on Offers). CERSAI / mortgage ignored (govt).
- Offers.processing: 60 fee clones (Housing Loan For Public + PNB Max-Saver × CIBIL × loan band × rate/tenure; Top-up 0.35%); full-key internal duplicates: 0. Offers.overdue ×8 at 2% p.a. on Default_Amount; Offers.prepayment ×4 fixed 0 (floating, not charged); CSV.fixed_prepay ×4 at 2% Fixed rate (self + takeover × TL/OD).
- openpyxl `data_only=True` used for both workbooks.

_Audit generated with openpyxl data_only=True. Source: `data/Charges/PNB_Home_Loan_Charges_Official.xlsx` Structured_Data. Master: `data/HOME_LOANS_COMPARE_v1.xlsx` Bank_charges filtered bank_key=`punjab national bank`._

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 5
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 8 listed items/groups
- **Offers.overdue → no action unless noted separately:** 8 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Creation / Modification Charge
- CERSAI Creation / Modification Charge
- CERSAI Search Charge
- CERSAI Satisfaction / Correction Charge
- Mortgage Creation Charge

### Still missing — bank service charges (actionable)
- (none)

### Off-Offers skip (do not add)
- PMAY documentation Nil ×3 + additional Formula; PNB Pride documentation Nil ×2
