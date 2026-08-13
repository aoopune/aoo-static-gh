# UBI / Union Bank of India — Charges Audit

## Summary
- Source Structured_Data rows: 40
- Master Bank_charges rows (union bank of india): 74
- Matched OK: 13
- Matched with rename only: 19
- Value mismatches: 0
- Missing in master (in source, not in master): 0 (mortgage / CERSAI / stamp / memorandum govt)
- Extra/redundant in master (in master, not in source): 41
- Duplicate issues in master: 0

## Verdict
PASS — compare-scope service charges corrected. Mortgage / CERSAI / stamp / memorandum ignored (govt). Benchmark middle slab left at ₹1 cr (source “1000 lakh” would overlap next slab).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Legal Fee to Advocate** (facility=Any; product=Union Home) → `CHG-OC-782` **Legal Fee to Advocate**; confirmed At actuals; charge_unit=Property; freq=Per asset / as incurred; gst master='Yes' (source schedule excluding GST — soft).
- **Relaxation / Deviation Charge** (facility=Term Loan; product=Union Home) → `CHG-OC-790` **Relaxation / Deviation Charge**; confirmed Percentage 0.10%→0.001; charge_min=500 charge_max=5000; pct_base: source='Loan amount' master='Sanctioned loan amount' (treated equivalent); charge_unit=Deviation; freq=One time per deviation; facility Term Loan→Any (soft consolidation with excel row 11); gst master='Yes' (soft).
- **Relaxation / Deviation Charge** (facility=Any; product='Any other retail scheme not specified above') → `CHG-OC-790` **Relaxation / Deviation Charge**; confirmed same 0.10% min ₹500 max ₹5,000 fingerprint; 2 published product rows consolidated into 1 master row (facility=Any); gst master='Yes' (soft).
- **NACH / Direct Debit Mandate Return Charge** (facility=Any) → `CHG-OC-805` **NACH / Direct Debit Mandate Return Charge**; confirmed Fixed amount 400 (basic; GST extra in source); charge_unit=Return; freq=Each return; gst master='Yes' (soft).
- **ECS Mandate Certification / Verification Charge** (facility=Any) → `CHG-OC-806` **ECS Mandate Certification / Verification Charge**; confirmed Fixed amount 100; charge_unit=Mandate; freq: source='Each mandate' master='Per mandate registration' (treated equivalent); gst master='Yes' (soft).
- **Image Based Mandate Registration Charge** (facility=Any) → `CHG-OC-807` **Image Based Mandate Registration Charge**; confirmed Fixed amount 150; charge_unit=Registration; freq=Each registration; gst master='Yes' (soft).
- **E-Mandate Registration Charge** (facility=Any) → `CHG-OC-808` **E-Mandate Registration Charge**; confirmed Fixed amount 100; charge_unit=Mandate; freq=Each registration; gst master='Yes' (soft).
- **Inward Cheque Return Charge (Financial Reasons)** (facility=Any) → `CHG-OC-809` **Inward Cheque Return Charge (Financial Reasons)**; confirmed Fixed amount 250; slab None–100000; slab_basis=Transaction amount (cheque-amount band); charge_unit=Return; freq=Each return; gst master='Yes' (soft).
- **Inward Cheque Return Charge (Financial Reasons)** (facility=Any) → `CHG-OC-810` **Inward Cheque Return Charge (Financial Reasons)**; confirmed Fixed amount 500; slab 100001–500000 (source 'Above 1 lac to 5 lacs' Loan_Amount_From=100000 — exclusive+1 vs 'Above' wording treated equivalent); slab_basis=Transaction amount; gst master='Yes' (soft).
- **Inward Cheque Return Charge (Financial Reasons)** (facility=Any) → `CHG-OC-811` **Inward Cheque Return Charge (Financial Reasons)**; confirmed Fixed amount 500; slab 500001–1000000; slab_basis=Transaction amount; gst master='Yes' (soft).
- **Inward Cheque Return Charge (Financial Reasons)** (facility=Any) → `CHG-OC-812` **Inward Cheque Return Charge (Financial Reasons)**; confirmed Formula EBLR+7.80% p.a. for 1 day on cheque amount min ₹750 → `special_rule` only (no fake % p.a.) + charge_min=750; slab_from=1000001; gst master='Yes' (soft).
- **Credit Information Report Charge (for credit appraisal)** (facility=Any) → `CHG-OC-891` **Credit Information Report Charge (for credit appraisal)**; confirmed Nil→Fixed amount 0; charge_unit=Report; freq=At appraisal; when_it_matters=Before offer; gst master='Yes' (soft).
- **Miscellaneous Request Charges (including NOC)** (facility=Any) → `CHG-OC-893` **Miscellaneous Request Charges (including NOC)**; confirmed Nil→Fixed amount 0; charge_unit=Occasion; freq=Each time; when_it_matters=After offer; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Valuation Fee** (facility=Any) → `CHG-OC-783` **Property Valuation Report Charges** — rename; confirmed Fixed amount 500; slab None–50000; slab_basis master='Realizable value of assets' (source Conditions: value of security Upto Rs. 50000/- — treated equivalent); property_valuation_scope='Both'; charge_unit=Property; freq=Per asset / as incurred; Retail loan column ₹500; rename Valuation Fee→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-784` **Property Valuation Report Charges** — rename; confirmed Fixed amount 1000; slab 50001–100000 (source Above Rs. 50000/- upto Rs. 1 lac); Retail loan column ₹1000; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-785` **Property Valuation Report Charges** — rename; confirmed Fixed amount 3000; slab 100001–2500000 (source Above Rs.1 lac upto Rs.25 lacs); Structured_Data Fees Payable ₹3000; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-786` **Property Valuation Report Charges** — rename; confirmed Fixed amount 3000; slab 2500001–5000000 (source Above Rs.25 lac upto Rs.50 lac); Retail loan column ₹3000 (general Fees Payable was ₹5000 — master correctly used retail); rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-787` **Property Valuation Report Charges** — rename; confirmed Fixed amount 10000; slab 5000001–10000000 (source Above Rs.50 lac upto Rs.1 crore); Structured_Data Fees Payable ₹10000; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-788` **Property Valuation Report Charges** — rename; confirmed Fixed amount 10000; slab 10000001–50000000 (source Above Rs.1 crore upto Rs.5 crore); Retail loan column ₹10000 (general was ₹15000 — master correctly used retail); rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Valuation Fee** (facility=Any) → `CHG-OC-789` **Property Valuation Report Charges** — rename; confirmed Fixed amount 20000; slab_from=50000001 (source Above Rs.5 crore); Structured_Data Fees Payable ₹20000; rename→Property Valuation Report Charges; gst master='Yes' (soft).
- **Rate Switch Charge (Floating to Fixed)** (facility=Term Loan) → `CHG-OC-791` **Interest Rate Type Switch Fees** — rename; confirmed Fixed amount 10000; slab None–5000000; slab_basis=Sanctioned loan amount; interest_rate_type_switch Floating→Fixed; charge_unit=Switch; freq: source='Each time' master='Per request' (treated equivalent); facility Term Loan→Any (soft); rename Rate Switch Charge (Floating to Fixed)→Interest Rate Type Switch Fees; gst master='Yes' (source +GST).
- **Rate Switch Charge (Floating to Fixed)** (facility=Term Loan) → `CHG-OC-792` **Interest Rate Type Switch Fees** — rename; confirmed Fixed amount 15000; slab_from=5000001 (source 'above Rs.50.00 lakh' exclusive+1); interest_rate_type_switch Floating→Fixed; rename→Interest Rate Type Switch Fees; gst master='Yes' (soft).
- **Rate Switch Charge (to External Benchmark)** (facility=Term Loan) → `CHG-OC-793` **Interest Rate Benchmark Switch Fees** — rename; confirmed Fixed amount 5000; slab None–3000000 (Upto Rs 30 Lakh); slab_basis=Outstanding loan amount (source: outstanding term-loan component); benchmark_switch MCLR / Base Rate / SBAR→EBLR; facility Term Loan→Any (soft); rename Rate Switch Charge (to External Benchmark)→Interest Rate Benchmark Switch Fees; gst master='Yes' (source +GST).
- **Rate Switch Charge (to External Benchmark)** (facility=Term Loan) → `CHG-OC-794` **Interest Rate Benchmark Switch Fees** — rename; confirmed Fixed amount 7500; slab 3000001–10000000; slab_to left at ₹1 cr (source “Upto Rs 1000 Lakh” would overlap next slab “Above Rs 100 Lakh”); rename→Interest Rate Benchmark Switch Fees; gst master='Yes' (soft).
- **Rate Switch Charge (to External Benchmark)** (facility=Term Loan) → `CHG-OC-795` **Interest Rate Benchmark Switch Fees** — rename; confirmed Fixed amount 10000; slab_from=10000001 (source 'Above Rs 100 Lakh' Loan_Amount_From=10000000 — exclusive+1 vs 'Above' wording treated equivalent); rename→Interest Rate Benchmark Switch Fees; gst master='Yes' (soft).
- **Documentation Charge** (facility=Any) → `CHG-OC-796` **Documentation Charges** — rename; confirmed Nil→Fixed amount 0; charge_unit=Instance; freq=At documentation; rename Charge→Charges; gst master='Yes' (soft).
- **Inspection Charge** (facility=Any) → `CHG-OC-797` **Inspection Charges** — rename; confirmed Nil→Fixed amount 0; charge_unit=Instance; freq=Per quarter; rename Charge→Charges; gst master='Yes' (soft).
- **Document Copy Charge** (facility=Any) → `CHG-OC-798` **Loan Document Copy Charges** — rename; confirmed Fixed amount 500; slab None–10000000; slab_basis master='Sanctioned loan amount' (source loan upto Rs.1.00 crore — treated equivalent); out_of_pocket_expenses_additional=Yes; freq=Each request; rename Document Copy Charge→Loan Document Copy Charges; gst master='Yes' (soft).
- **Document Copy Charge** (facility=Any) → `CHG-OC-799` **Loan Document Copy Charges** — rename; confirmed Fixed amount 1000; slab_from=10000001 (source loan over Rs.1.00 crore exclusive+1); out_of_pocket_expenses_additional=Yes; rename Document Copy Charge→Loan Document Copy Charges; gst master='Yes' (soft).
- **Credit Information Report Copy (borrower request)** (facility=Any; customer=Consumer Report) → `CHG-OC-800` **Credit Information Report (CIC) Charges - Copy** — rename; confirmed Fixed amount 100; customer_type=Individual; charge_unit=Request; freq=Each request; when_it_matters=After offer; rename Copy (borrower request)→(CIC) Charges - Copy; gst master='Yes' (soft).
- **Credit Information Report Copy (borrower request)** (facility=Any; customer=Non-individual) → `CHG-OC-892` **Credit Information Report (CIC) Charges - Copy** — rename; confirmed Fixed amount 1000; customer_type=Non-Individual; charge_group_id=`CHG-OC-800`; freq=Each request; when_it_matters=After offer; gst master='Yes' (soft).
- **Product Switch Charge (Smart Save to Regular Home Loan)** (facility=Both; product=Union Smart Save) → `CHG-OC-803` **Facility Conversion fees** — rename; confirmed Percentage 0.25%→0.0025; charge_max=5000; pct_base=Outstanding loan amount; facility_conversion Union Smart Save→Regular Home Loan; facility Both→Overdraft (Smart Save OD encoding — soft); freq=Each conversion; note_1='Union Smart Save to Union Home'; rename Product Switch Charge→Facility Conversion fees; gst master='Yes' (soft).
- **Product Switch Charge (to Smart Save)** (facility=Both; product=Union Smart Save) → `CHG-OC-804` **Facility Conversion fees** — rename; confirmed Nil→Fixed amount 0; facility_conversion Regular Home Loan→Union Smart Save; facility Both→Term Loan (soft); note_1='Union Home to Union Smart Save'; rename Product Switch Charge (to Smart Save)→Facility Conversion fees; gst master='Yes' (soft).
- **Standing Instruction Failure Charge** (facility=Any) → `CHG-OC-813` **Standing Instruction Failure Charges** — rename; confirmed Fixed amount 100; charge_unit=Failure; freq=Each failure; note_1 preserves insufficient-balance condition; rename Charge→Charges; gst master='Yes' (soft).

## 2. Value mismatches

(none)

- Valuation ₹3000 / ₹10000 / ₹20000 → `CHG-OC-785` / `CHG-OC-787` / `CHG-OC-789`.
- Benchmark middle slab `CHG-OC-794` left at slab_to=10000000 (₹1 cr). Source “Upto Rs 1000 Lakh” would overlap next slab “Above Rs 100 Lakh”.

## 3. Missing in master

(none actionable for compare)

- CIC appraisal Nil → `CHG-OC-891`. CIC commercial copy ₹1000 → `CHG-OC-892`. Misc request / NOC Nil → `CHG-OC-893`.
- Mortgage / CERSAI / stamp / memorandum ignored (govt).

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `union bank of india` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none remaining.) Deleted invented CIC 25L+ rows `CHG-OC-801` / `CHG-OC-802`.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **32 rows** origin=`Offers.processing`. Not in Structured_Data (source covers legal / valuation slabs / relaxation / rate-switch / Nil misc-request·documentation·inspection·mortgage / CERSAI / document-copy / CIC appraisal Nil + copies / product-switch / NACH·ECS·IBM·e-mandate / inward cheque / stamp / memorandum / SI failure — no processing-fee rows).
  - Sample ids: CHG-PROC-204, CHG-PROC-205, CHG-PROC-206, CHG-PROC-207, CHG-PROC-208, CHG-PROC-209, CHG-PROC-210, CHG-PROC-211
  - Schemes seen: Union Home ×18; Union Home - Smart Save ×14; facility=Term Loan ×18 / Overdraft ×14; rate_type=Floating ×29 / Fixed ×3.
  - Percentage/min/max fingerprints: {(0.005, None, 15000): 32} (= 0.50% of sanctioned amount, max ₹15,000).
  - CIBIL bands (distinct, not duplicates): −1–0, 600–649, 650–679, 680–699, 700–749, 750–799, 800–900; plus Salaried Central/State/PSU employees and Pensioners 750–900 on Union Home.
  - Occupations: Salaried ×15; Self-Employed ×14; Any ×3 (Fixed Union Home loan-amount bands).
  - Fixed-rate Union Home rows also split loan bands 1–3000000 / 3000001–5000000 / 5000001–20000000 (cibil_band_applicable=No).
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation+borrower_category+scheme+facility+rate_type+loan band: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-31` **Overdue charges** | facility=Term Loan | scheme=Union Home | purpose=Regular Home Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-32` **Overdue charges** | facility=Overdraft | scheme=Union Home - Smart Save | purpose=Regular Home Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-33` **Overdue charges** | facility=Term Loan | scheme=Union Home | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-24` **Prepayment charges** | facility=Term Loan | scheme=Union Home | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-25` **Prepayment charges** | facility=Overdraft | scheme=Union Home - Smart Save | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-178` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=0 | note=Prepayment nil (CSV NIL) | purpose=Regular Home Loan
- `CHG-PRE-179` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes | purpose=Regular Home Loan
- `CHG-PRE-180` **Prepayment charges** | facility=Overdraft | rate_type=Fixed | fixed=0 | note=Prepayment nil (CSV NIL) | purpose=Regular Home Loan
- `CHG-PRE-181` **Prepayment charges (takeover)** | facility=Overdraft | rate_type=Fixed | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes | purpose=Regular Home Loan

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `UBI_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (40 rows).
- Master filter: `Bank_charges` where `bank_key` == `union bank of india` (74 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Valuation Fee** seven security-value slabs → **Property Valuation Report Charges**: ₹500 / ₹1000 / ₹3000 / ₹3000 / ₹10000 / ₹10000 / ₹20000 (`CHG-OC-783`–`789`).
- **Relaxation / Deviation** Union Home + other-retail 0.10% min ₹500 max ₹5,000 consolidated into one master row (0.001).
- **Rate Switch (Floating to Fixed)** ₹10000 upto ₹50L / ₹15000 above ₹50L exclusive+1 (`CHG-OC-791` / `792`).
- **Rate Switch (to External Benchmark)** ₹5000 upto ₹30L / ₹7500 to ₹1 cr / ₹10000 above ₹1 cr. Middle slab left at ₹1 cr (source “1000 lakh” would overlap next slab).
- **Inward Cheque Return** above ₹10 lacs: EBLR+7.80% for 1 day min ₹750 in `special_rule` only (`CHG-OC-812`).
- CIC appraisal Nil `CHG-OC-891`. Consumer copy ₹100 Individual `CHG-OC-800`. Commercial copy ₹1000 Non-Individual `CHG-OC-892`. Misc request / NOC Nil `CHG-OC-893`. Document copy OOP † on `CHG-OC-798` / `799`.
- Invented CIC 25L+ `CHG-OC-801` / `802` deleted.
- No `Slab_Table` origin rows. Offers.processing 32 (0.50% max ₹15,000; Union Home + Smart Save; 0 full-key clones). Offers.overdue ×3 at 2% p.a. on Default_Amount. Offers.prepayment ×2 floating fixed 0. CSV.fixed_prepay ×4 (fixed-rate self NIL + takeover 2%).
- openpyxl data_only=True used for both workbooks.

_Audit generated with openpyxl data_only=True. Source: `data/Charges/UBI_Home_Loan_Charges_Official.xlsx` Structured_Data. Master: `data/HOME_LOANS_COMPARE_v1.xlsx` Bank_charges filtered bank_key=`union bank of india`._

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 6
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 32 listed items/groups
- **Prepayment extras → ignored:** 6 listed items/groups
- **Offers.overdue → no action unless noted separately:** 3 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Mortgage Creation Charge
- CERSAI / Central Registry Registration Charge
- CERSAI / Central Registry Registration Charge
- CERSAI / Central Registry Satisfaction Charge
- Stamp Duty
- Memorandum Registration Charge

### Still missing — bank service charges (actionable)
- (none)
