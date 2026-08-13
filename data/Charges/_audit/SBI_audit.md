# SBI / State Bank of India — Charges Audit

## Summary
- Source Structured_Data rows: 35
- Master Bank_charges rows (state bank of india): 109
- Matched OK: 18
- Matched with rename only: 15
- Value mismatches: 0
- Missing in master (in source, not in master): 0 (stamp / registration / CERSAI govt; Combo not on Offers)
- Extra/redundant in master (in master, not in source): 84
- Duplicate issues in master: 0

## Verdict
PASS — compare-scope service charges corrected. Stamp / registration / CERSAI ignored (govt). Combo plot+construction not on Offers (deleted).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Property Inspection Charge** (facility=Both) → `CHG-OC-724` **Property Inspection Charge**; confirmed At actuals; when_it_matters=After offer; charge_unit=Inspection; freq='As decided by bank'; cost borne by customer; facility Both→Any; gst master='Yes' (soft).
- **Loan Revalidation Fee** (facility=Both) → `CHG-OC-725` **Loan Revalidation Fee**; confirmed Fixed amount 5000; charge_unit=Revalidation; freq='Each time loan is revalidated'; note_1 preserves 'Processing Fee for Revalidation of Loans.'; facility Both→Any; gst master='Yes' (source Plus GST — soft).
- **Safe Custody Charges for Title Deeds** (facility=Both) → `CHG-OC-730` **Safe Custody Charges for Title Deeds**; confirmed Fixed amount 1000; charge_unit='Quarter or part thereof'; grace_period_days=60; freq='Per quarter or part thereof after free period'; notes preserve 60-day / 30-day MITC collection cues; facility Both→Any; gst master='Yes' (source Plus GST — soft).
- **Failed or Non-Payment of EMI Charge** (facility=Both) → `CHG-OC-731` **Failed or Non-Payment of EMI Charge**; confirmed Fixed amount 250; charge_unit='EMI missed'; freq='Each missed EMI'; facility Both→Any; gst master='Yes' (source Plus GST — soft).
- **Cheque Return Charge (Insufficient Funds)** (facility=Both) → `CHG-OC-732` **Cheque Return Charge (insufficient funds)**; confirmed Fixed amount 500; charge_unit=Instance; freq='Each return'; name casing soft: Insufficient Funds→insufficient funds (not counted as rename); facility Both→Any; gst master='Yes' (source Plus GST — soft).
- **Failed SI / NACH Charge** (facility=Both) → `CHG-OC-734` **Failed SI / NACH Charge**; confirmed Fixed amount 250; charge_unit='Failed SI / NACH'; freq='Each failure'; facility Both→Any; gst master='Yes' (source Plus GST — soft).
- **Bounced Cheque / NACH / SI Penalty (present rate)** (facility=Both) → `CHG-OC-735` **Bounced Cheque / NACH / SI Penalty (present rate)**; confirmed Fixed amount 250; charge_unit=Bounce; note preserves present-rate any-reason bounce wording; facility Both→Any; gst master='Yes' (source Plus GST — soft).
- **NACH Mandate Authorisation Charge** (facility=Both) → `CHG-OC-736` **NACH Mandate Authorisation Charge**; confirmed Fixed amount 50; charge_unit=Mandate; freq='One time'; notes preserve E-mandate + home-loan EMI NACH applicability; facility Both→Any; gst master='Yes' (source Plus GST — soft).
- **Penal Charge for Non-Creation of Valid Mortgage** (facility=Both) → `CHG-OC-737` **Penal Charge for Non-Creation of Valid Mortgage**; confirmed Fixed amount 5000; charge_unit='The delay period'; freq='For first 15 days of delay'; note preserves 60-day mortgage / possession-letter trigger; facility Both→Any; gst master='Yes' (soft).
- **Penal Charge for Non-Creation of Valid Mortgage** (facility=Both) → `CHG-OC-738` **Penal Charge for Non-Creation of Valid Mortgage**; confirmed Percentage 0.005 (=0.50% p.a.) + charge_min=5000; percentage_per_annum=Yes; pct_base: source='Sanctioned Limit' master='Sanctioned loan amount' (treated equivalent); freq='For delay beyond 15 days'; facility Both→Any; gst master='Yes' (soft).
- **Penal Charge for Non-Renewal of Property Insurance** (facility=Both) → `CHG-OC-739` **Penal Charge for Non-Renewal of Property Insurance**; confirmed Fixed amount 5000; charge_unit='The delay period'; freq='For first 15 days of delay'; note preserves non-renewal of property insurance; facility Both→Any; gst master='Yes' (soft).
- **Penal Charge for Non-Renewal of Property Insurance** (facility=Both) → `CHG-OC-740` **Penal Charge for Non-Renewal of Property Insurance**; confirmed Percentage 0.005 (=0.50% p.a.) + charge_min=5000; percentage_per_annum=Yes; pct_base: source='Sanctioned Limit' master='Sanctioned loan amount' (treated equivalent); freq='For delay beyond 15 days'; facility Both→Any; gst master='Yes' (soft).
- **Cheque Return Charge (Technical Reasons)** (facility=Both) → `CHG-OC-733` **Cheque Return Charge (technical reasons)**; confirmed Fixed amount 150; charge_unit=Instance; freq='Each return'; note_1 preserves RBI not-at-fault exemption; name casing soft: Technical Reasons→technical reasons; facility Both→Any; gst master='Yes' (source Plus GST — soft).

### 1b. Rename only (values OK)
- **Legal Opinion and Search Report Fee** (facility=Both) → `CHG-OC-721` **Legal Opinion and Search Report Fee**; confirmed At actuals; one published advocate fee; refundable_if_not_sanctioned=No; search twin `CHG-OC-722` deleted.
- **Valuation Fee** (facility=Both) → `CHG-OC-723` **Property Valuation Report Charges** — rename; confirmed At actuals; charge_unit=Property; property_valuation_scope=Both; refundable_if_not_sanctioned=No; notes preserve empanelled valuer / non-refund if not sanctioned; rename Valuation Fee→Property Valuation Report Charges; facility Both→Any; gst master='Yes' (soft).
- **Rate Switch Fee (EBLR to EBLR)** (facility=Both) → `CHG-OC-726` **Interest Rate Repricing Fees** — rename; confirmed Fixed amount 5000; charge_unit=Instance; freq='Each Repricing'; master interest_rate_repricing_type=Floating Higher→Lower encodes EBLR-to-EBLR current-card-rate switch (soft encoding); rename Rate Switch Fee (EBLR to EBLR)→Interest Rate Repricing Fees; facility Both→Any; gst master='Yes' (soft).
- **Rate Regime Switch Fee (MCLR/Base Rate/SBAR to EBLR)** (facility=Both) → `CHG-OC-727` **Interest Rate Benchmark Switch Fees** — rename; confirmed Fixed amount 5000; charge_unit=Switch; benchmark_switch_from='MCLR / Base Rate / SBAR' to='EBLR / EBR'; rename Rate Regime Switch Fee (MCLR/Base Rate/SBAR to EBLR)→Interest Rate Benchmark Switch Fees; facility Both→Any; gst master='Yes' (soft).
- **Facility Conversion Fee (Term Loan to Maxgain and vice versa)** (facility=Both) → `CHG-OC-728` **Facility Conversion fees** — rename; confirmed Fixed amount 5000; facility=Overdraft; conversion Overdraft(SBI Maxgain)→Term Loan; charge_unit=Conversion; source one vice-versa row split into direction pairs (treated equivalent encoding); rename Facility Conversion Fee…→Facility Conversion fees; gst master='Yes' (soft).
- **Facility Conversion Fee (Term Loan to Maxgain and vice versa)** (facility=Both) → `CHG-OC-729` **Facility Conversion fees** — rename; confirmed Fixed amount 5000; facility=Term Loan; conversion Term Loan→Overdraft(SBI Maxgain); charge_unit=Conversion; paired with CHG-OC-728; rename Facility Conversion Fee…→Facility Conversion fees; gst master='Yes' (soft).
- **Interest Certificate (Original)** (facility=Both) → `CHG-OC-885` **Interest Certificate**; confirmed Nil / ₹0; group `CHG-OC-746`; charged_for_original_copy_or_first_issue=Yes.
- **Interest Certificate (Duplicate)** (facility=Both) → `CHG-OC-746` **Interest Certificate**; confirmed Fixed amount 150; charged_for_original_copy_or_first_issue=No.
- **Interest Certificate / Account Statement via Phone Banking (Physical Delivery)** (facility=Both) → `CHG-OC-747` **Interest Certificate / Account Statement (Phone Banking)**; confirmed Fixed amount 44; charged_for_physical_copy=Yes; charged_for_digital_copy=No (email FREE).
- **Interest Certificate / Account Statement via Email** (facility=Both) → `CHG-OC-747` email FREE via charged_for_digital_copy=No.
- **No Dues Certificate (Priority Sector)** (facility=Both) → `CHG-OC-748` note 'Free for Priority sector housing loans' (no priority filter on Offers; not a selectable waiver row).
- **No Dues Certificate (Individual, Non-Priority Sector)** (facility=Both) → `CHG-OC-748` **No Dues Certificate**; confirmed Fixed amount 100; customer_type=Individual.
- **No Dues Certificate (Firm/Non-Individuals)** (facility=Both) → `CHG-OC-749` **No Dues Certificate** — rename; confirmed Fixed amount 200; customer_type master='Non-Individual' (source 'Non-individual' casing soft); rename No Dues Certificate (Firm/Non-Individuals)→No Dues Certificate; facility Both→Any; gst master='Yes' (soft).
- **Balance Certificate** (facility=Both) → `CHG-OC-750` **Balance Confirmation Certificate Charges** — rename; confirmed Fixed amount 150; charge_unit=Certificate; freq='Each time'; rename Balance Certificate→Balance Confirmation Certificate Charges; facility Both→Any; gst master='Yes' (source Plus GST — soft).

## 2. Value mismatches

(none)

## 3. Missing in master

(none actionable for compare)

- Stamp / registration / CERSAI ignored (govt).
- COMBO plot+construction penalties not on Offers (`CHG-OC-741`–`745` deleted).

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `state bank of india` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none remaining.) Deleted Title Search twin `CHG-OC-722` and Combo `CHG-OC-741`–`745`.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **72 rows** origin=`Offers.processing`. Not in Structured_Data (source MITC/service-charges cover legal/valuation/statutory/inspection/CERSAI/revalidation/switches/conversion/safe-custody/bounce/penal/certificates — no processing-fee rows).
  - Sample ids: CHG-PROC-614, CHG-PROC-615, CHG-PROC-616, CHG-PROC-617, CHG-PROC-618, CHG-PROC-619, CHG-PROC-620, CHG-PROC-621, CHG-PROC-622, CHG-PROC-623, CHG-PROC-624, CHG-PROC-625…
  - Schemes seen: Home Loan ×18; Home Loan Maxgain ×18; Top Up Loan ×18; Top Up Loan (Maxgain) ×18; facility=Term Loan ×36 / Overdraft ×36; rate_type=Floating ×72.
  - Percentage/min/max fingerprints: {(0.0035, 5000, 15000): 36, (0.0035, 5000, 18000): 36} (= 0.35% min ₹5,000 max ₹15,000 Salaried / Maxgain-15000 path; max ₹18,000 Self-Employed / Maxgain-18000 path).
  - CIBIL bands (distinct, not duplicates): 825–900, 780–824, 750–779, 700–749, 650–699, 550–649, 151–200, 101–150, −1–0.
  - Occupations: Salaried ×27 / Self-Employed ×27 / Any ×18 (Maxgain dual max caps without occupation split).
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation+scheme+facility+rate_type+fee: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-55` **Overdue charges** | facility=Term Loan | scheme=Home Loan | purpose=Regular Home Loan | rate_type=Floating | pct=0.024 | percentage_per_annum=Yes | pct_base=Default_Amount | note=overdue_days_min=1.0; overdue_days_max=60.0
- `CHG-OD-56` **Overdue charges** | facility=Term Loan | scheme=Home Loan | purpose=Regular Home Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount | note=overdue_days_min=61.0
- `CHG-OD-57` **Overdue charges** | facility=Overdraft | scheme=Home Loan Maxgain | purpose=Regular Home Loan | rate_type=Floating | pct=0.024 | percentage_per_annum=Yes | pct_base=Default_Amount | note=overdue_days_min=1.0; overdue_days_max=60.0
- `CHG-OD-58` **Overdue charges** | facility=Overdraft | scheme=Home Loan Maxgain | purpose=Regular Home Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount | note=overdue_days_min=61.0
- `CHG-OD-59` **Overdue charges** | facility=Term Loan | scheme=Top Up Loan | purpose=Top-up Loan | rate_type=Floating | pct=0.024 | percentage_per_annum=Yes | pct_base=Default_Amount | note=overdue_days_min=1.0; overdue_days_max=60.0
- `CHG-OD-60` **Overdue charges** | facility=Term Loan | scheme=Top Up Loan | purpose=Top-up Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount | note=overdue_days_min=61.0
- `CHG-OD-61` **Overdue charges** | facility=Overdraft | scheme=Top Up Loan (Maxgain) | purpose=Top-up Loan | rate_type=Floating | pct=0.024 | percentage_per_annum=Yes | pct_base=Default_Amount | note=overdue_days_min=1.0; overdue_days_max=60.0
- `CHG-OD-62` **Overdue charges** | facility=Overdraft | scheme=Top Up Loan (Maxgain) | purpose=Top-up Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount | note=overdue_days_min=61.0

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-44` **Prepayment charges** | facility=Term Loan | scheme=Home Loan | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-45` **Prepayment charges** | facility=Overdraft | scheme=Home Loan Maxgain | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-46` **Prepayment charges** | facility=Term Loan | scheme=Top Up Loan | purpose=Top-up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-47` **Prepayment charges** | facility=Overdraft | scheme=Top Up Loan (Maxgain) | purpose=Top-up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
(none)

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: SBI_Home_Loan_Charges_Official.xlsx sheet Structured_Data (35 rows).
- Master filter: Bank_charges where bank_key == 'state bank of india' (109 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- Percentages stored as fractions (0.50%→0.005, 2%→0.02, 0.35%→0.0035). Nil/Free/FREE ↔ Fixed Amount 0 or charged_for_* =No / note exemption encoding.
- Legal Opinion and Search Report one At actuals `CHG-OC-721`. Combo penalties deleted (not on Offers). Original interest cert Nil `CHG-OC-885` + duplicate ₹150 `CHG-OC-746`. Phone Banking statement/cert ₹44 `CHG-OC-747`. No Dues Individual ₹100 / Non-Individual ₹200. Inspection After offer.
- Valuation Fee → Property Valuation Report Charges At actuals; Rate Switch (EBLR→EBLR) → Interest Rate Repricing Fees ₹5,000; Rate Regime (MCLR/Base/SBAR→EBLR) → Interest Rate Benchmark Switch Fees ₹5,000.
- Facility Conversion Fee vice-versa ₹5,000 split into Overdraft↔Term Loan Facility Conversion fees pair.
- Offers.processing: 72 fee clones (Home Loan / Home Loan Maxgain / Top Up Loan / Top Up Loan (Maxgain) × CIBIL × occupation; 0.35% min ₹5,000 max ₹15,000 Salaried or ₹18,000 Self-Employed); full-key internal duplicates: 0.
- Offers.overdue ×8: 2.4% p.a. (days 1–60) and 5% p.a. (days ≥61) on Default_Amount per scheme/facility; Offers.prepayment ×4 fixed 0 (floating, not charged).
- openpyxl data_only=True used for both workbooks.

_Audit generated with openpyxl data_only=True. Source: `data/Charges/SBI_Home_Loan_Charges_Official.xlsx` Structured_Data. Master: `data/HOME_LOANS_COMPARE_v1.xlsx` Bank_charges filtered bank_key=`state bank of india`._

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 3
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 5 listed items/groups
- **Offers.overdue → no action unless noted separately:** 8 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Stamp Duty
- Registration Charges
- CERSAI Registration Charges

### Still missing — bank service charges (actionable)
- (none)
