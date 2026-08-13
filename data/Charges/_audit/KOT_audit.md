# KOT / Kotak Mahindra Bank — Charges Audit

## Summary
- Source Structured_Data rows: 24
- Master Bank_charges rows (kotak mahindra bank): 36
- Matched OK: 7
- Matched with rename only: 12
- Value mismatches: 0
- Missing in master (in source, not in master): 5
- Extra/redundant in master (in master, not in source): 18
- Duplicate issues in master: 0

## Verdict
FAIL — 0 value mismatch(es), 5 source charge(s) missing in master, 18 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Hard Copy of Other Documents / Letters** (facility=Both) → `CHG-OC-581` **Hard Copy of Other Documents / Letters**; confirmed Fixed amount 500; charge_unit=Instance; freq=Each time; facility Both→Any broadening (amounts match — soft); gst master='Yes' (soft); note_1 preserves examples (Subsidy Confirmation / Credit Opinion / Interest paid confirmation); trailing '))' typo in master note_1 (soft).
- **Repayment Mode / Account Swap Charge** (facility=Both) → `CHG-OC-582` **Repayment Mode / Account Swap Charge**; confirmed Fixed amount 500; charge_unit=Instance; freq=Each time; facility Both→Any; gst master='Yes' (soft).
- **Instrument Dishonour Charge** (facility=Both) → `CHG-OC-587` **Instrument Dishonour Charge**; confirmed Fixed amount 750; charge_unit=Instance; freq=Each time; note_1='Cheque/ECS/Mandate dishonour.'; facility Both→Any; gst master='Yes' (soft).
- **Penal Charge for Non-Compliance of Sanction Terms** (facility=Both) → `CHG-OC-588` **Penal Charge for Non-Compliance of Sanction Terms**; confirmed Formula ₹5.50 per day per lac → Fixed amount 5.5 + fixed_amount_unit=day + fixed_amount_per_lakh_or_part=Yes; percentage_base_value='Underlying exposure'; freq='From the day of breach until complied'; facility Both→Any; gst master='Yes' (soft).
- **Penal Charge for Delay or Non-Creation of Security** (facility=Both) → `CHG-OC-589` **Penal Charge for Delay or Non-Creation of Security**; confirmed Formula ₹5.50 per day per lac → Fixed amount 5.5 + fixed_amount_unit=day + fixed_amount_per_lakh_or_part=Yes; freq='For delay beyond stipulated days up to 180 days from original due date (ODD)'; facility Both→Any; gst master='Yes' (soft).
- **Penal Charge for Delay or Non-Creation of Security** (facility=Both) → `CHG-OC-590` **Penal Charge for Delay or Non-Creation of Security**; confirmed Formula ₹11 per day per lac → Fixed amount 11 + fixed_amount_unit=day + fixed_amount_per_lakh_or_part=Yes; freq='Beyond 180 days from original due date (ODD)'; pct_base sum of revolving limits + non-revolving outstanding; facility Both→Any; gst master='Yes' (soft).
- **Non-Utilization Charge** (facility=Overdraft) → `CHG-OC-591` **Non-Utilization Charge**; confirmed Percentage 0.4% p.a.→0.004 + percentage_per_annum=Yes; utilisation_below_per_quarter=0.25; customer_type=Individual; pct_base: source='Under-utilized limit' master='Unutilized amount' (soft equivalent); facility=Overdraft; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Valuation Fee** (facility=Both) → `CHG-OC-576` **Property Valuation Report Charges** — rename; confirmed Fixed amount / Upto 5000 → fixed_amount=5000 + charge_max=5000; charge_unit=Property; freq='One time at loan disbursement'; refundable_if_not_sanctioned=No; property_valuation_scope master='Both'; rename Valuation Fee→Property Valuation Report Charges; facility Both→Any; gst master='Yes' (soft).
- **Interest Certificate / Statement of Account / Amortisation Schedule** (facility=Both) → `CHG-OC-577` **Statement of Account Charges - Duplicate** — rename; Digital/self-service Nil covered by charged_for_digital_copy=No on physical SOA row (no separate Nil master row); paired with excel row 4 Physical ₹250 on same CHG-OC-577; rename Interest Certificate / Statement of Account / Amortisation Schedule → Statement of Account Charges - Duplicate (digital free via flag); channel source=Mobile/Net/WhatsApp; facility Both→Any; gst master='Yes' (soft).
- **Interest Certificate / Statement of Account / Amortisation Schedule** (facility=Both) → `CHG-OC-577` **Statement of Account Charges - Duplicate** — rename; confirmed Fixed amount 250; charged_for_physical_copy=Yes; charged_for_digital_copy=No; charge_unit=Request; freq=Each time; rename Interest Certificate / Statement of Account / Amortisation Schedule → Statement of Account Charges - Duplicate; channel source=Branch (physical); facility Both→Any; gst master='Yes' (soft).
- **Duplicate No Objection Certificate** (facility=Both) → `CHG-OC-578` **Duplicate No Objection Certificate Issuance Fees** — rename; confirmed Fixed amount 100; charge_unit=Instance; freq=Each time; rename Duplicate No Objection Certificate→Duplicate No Objection Certificate Issuance Fees; facility Both→Any; gst master='Yes' (soft).
- **Copy of Property Documents** (facility=Both) → `CHG-OC-579` **Property Document Retrieval Charge** — rename; confirmed Fixed amount 500; charge_unit=Instance; freq=Each time; note_1 preserves copy-of-property-documents wording; rename Copy of Property Documents→Property Document Retrieval Charge; facility Both→Any; gst master='Yes' (soft).
- **Duplicate List of Documents** (facility=Both) → `CHG-OC-580` **List of Documents Charge - Duplicate** — rename; confirmed Fixed amount 500; charged_for_physical_copy=Yes; charged_for_digital_copy=No; charge_unit=Request; freq=Each time; rename Duplicate List of Documents→List of Documents Charge - Duplicate; facility Both→Any; gst master='Yes' (soft).
- **Switch Fee (Floating to Floating)** (facility=Both) → `CHG-OC-583` **Interest Rate Benchmark Switch Fees** — rename; confirmed Percentage 0.5%→0.005; charge_max=10000; pct_base Principal outstanding and undisbursed ≈ Outstanding principal loan amount and undisbursed amount; benchmark_switch_from/to encodes MCLR→External Benchmark Rate (Repo Rate); freq: source='Each time (multiple switches…)' master='Per request' (soft); rename Switch Fee (Floating to Floating)→Interest Rate Benchmark Switch Fees; facility Both→Any; gst master='Yes' (soft).
- **Switch Fee (Floating to Fixed)** (facility=Both) → `CHG-OC-584` **Interest Rate Type Switch Fees** — rename; confirmed Fixed amount 2500; interest_rate_type_switch Floating→Fixed; charge_unit=Switch; freq='Each time (multiple switches allowed during tenure)'; rename Switch Fee (Floating to Fixed)→Interest Rate Type Switch Fees; facility Both→Any; gst master='Yes' (soft).
- **Switch Fee (Fixed to Floating)** (facility=Both) → `CHG-OC-585` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.5% p.a.→0.005 + percentage_per_annum=Yes; percentage_base_value='Each residual tenure (maximum cap of 3%)' preserves 3% cap in text (no numeric charge_max — soft); interest_rate_type_switch Fixed→Floating; rename Switch Fee (Fixed to Floating)→Interest Rate Type Switch Fees; facility Both→Any; gst master='Yes' (soft).
- **Reschedulement of Loan Term** (facility=Both) → `CHG-OC-586` **Rescheduling of Loan Term** — rename; confirmed Fixed amount 500; charge_unit=Instance; freq=Each time; rename Reschedulement of Loan Term→Rescheduling of Loan Term; facility Both→Any; gst master='Yes' (soft).
- **Commitment Charge (Non-Utilization)** (facility=Overdraft) → `CHG-OC-592` **Non-Utilization Charge** — rename; confirmed Formula ₹5.50 per day per lac → Fixed amount 5.5 + fixed_amount_unit=day + fixed_amount_per_lakh_or_part=Yes; utilisation_below_per_quarter=0.6; customer_type: source='Non-individual' master='Non-Individual' (casing soft); special_rule preserves commitment-charge wording; rename Commitment Charge (Non-Utilization)→Non-Utilization Charge; facility=Overdraft; gst master='Yes' (soft).
- **Other Services (Revalidation of Sanction, Change in Property, Change in EMI Date, Solvency Charges, Legal Charges, etc.)** (facility=Both) → `CHG-OC-593` **Other Services Charges** — rename; confirmed At actuals; charge_unit≈service request; freq='When customer applies for the service'; note_1 lists revalidation/property/EMI date/solvency/legal; rename Other Services (…)→Other Services Charges; facility Both→Any; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

- **Annual Renewal Charge** | facility=Overdraft | product='Home Loan' | type=Percentage | amount='0.25%' | min=None max=None | pct_on='Overdraft Limit (dropped limit after reduction of annual drop)' | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per='Per year' | frequency='On the due date of renewal' | conditions='Collected on the due date of renewal on the Overdraft Limit (dropped limit after reduction of annual drop). Not applicable for Smart Home Loan Overdraft product.' (Structured_Data excel row 18)
- **Annual Renewal Charge** | facility=Overdraft | product='Home Loan' | type=Nil | amount='Not Applicable' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency='On the due date of renewal' | conditions='Annual Renewal Charges are not applicable for Smart Home Loan Overdraft product.' (Structured_Data excel row 19)
- **Overline / Excess Drawal Penal Charge** | facility=Overdraft | product='Home Loan' | type=Percentage | amount='8% per annum' | min=None max=None | pct_on='Overdue amount' | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per='Per day on overdue amount' | frequency='While amount drawn is beyond maximum Overdraft Limit' | conditions='Penal charges where the amount drawn by the Borrower is beyond the maximum Overdraft Limit, or in case of overline accounts. 8% per annum on overdue amount.' (Structured_Data excel row 22)
- **Stamp Duty / Registration Charges** | facility=Both | product='Home Loan' | type=At actuals | amount='At actuals (vary from State to State)' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per='Per agreement / registration' | frequency='At documentation' | conditions='Stamp Duty on Home Loan Agreement, Overdraft Agreement, Guarantor Agreement, Registration Charges etc. vary from State to State. Stamping/Notarisation of RBI and other Affidavits are as applicable.' (Structured_Data excel row 23)
- **Priority Sector Loan Charge Exemption** | facility=Both | product='Home Loan' | type=Nil | amount='Not applicable' | min=None max=None | pct_on=None | loan_from=None loan_to=50000 | customer=Any | loc=Any | charged_per=None | frequency='For eligible priority sector loans' | conditions='For priority sector loans up to ₹50,000, loan related charges (including guarantee fees of credit guarantee schemes) and ad hoc service charges/inspection charges are not applicable. For eligible priority sector loans to SHGs/JLGs, this limit is applicable per member and not to the group as a whole.' (Structured_Data excel row 24)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `kotak mahindra bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 18 `Other charges` rows map to Structured_Data (7 exact name + 12 rename-only source rows = 19 matched; digital/physical Interest Certificate–SOA pair share `CHG-OC-577`). Annual Renewal ×2, Overline, Stamp Duty, and Priority Sector exemption are missing rather than duplicated.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **12 rows** origin=`Offers.processing`. Not in Structured_Data (source is Kotak Home Loan fees & charges — valuation/SOA/NOC/docs/switch/penal/non-util/other services; no processing-fee rows).
  - Sample ids: CHG-PROC-1010, CHG-PROC-1011, CHG-PROC-1012, CHG-PROC-1013, CHG-PROC-1014, CHG-PROC-1015, CHG-PROC-1016, CHG-PROC-1017, CHG-PROC-1018, CHG-PROC-1019, CHG-PROC-1020, CHG-PROC-1021
  - Schemes seen: Home Loan ×12; facility=Term Loan; rate_type=Floating; purpose=Regular Home Loan.
  - Percentage/min/max fingerprints: {(0.02, None, None): 12} (= 2% of sanctioned amount).
  - CIBIL bands × occupation (distinct, not duplicates): 800–900 / 750–799 / 700–749 / 650–699 / 600–649 / 300–599 × {Salaried, Self-Employed}.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-92` **Overdue charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | pct=0.08 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-78` **Prepayment charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-230` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=0 | note=Prepayment nil (CSV NIL)
- `CHG-PRE-231` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | pct=0.01 | pct_base=Outstanding_Amount | note=1% of outstanding per residual year to original maturity
- `CHG-PRE-232` **Prepayment charges** | facility=Overdraft | rate_type=Fixed | fixed=0 | note=Prepayment nil (CSV NIL)
- `CHG-PRE-233` **Prepayment charges (takeover)** | facility=Overdraft | rate_type=Fixed | pct=0.01 | pct_base=Outstanding_Amount | note=1% of outstanding per residual year to original maturity

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `KOT_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (24 rows).
- Master filter: `Bank_charges` where `bank_key` == `kotak mahindra bank` (36 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Upto ₹5000** Valuation correctly encoded as Fixed amount 5000 + charge_max=5000 (HDF-style Upto ceiling).
- Interest cert / SOA / amortisation: physical ₹250 branch `CHG-OC-577`; digital/net Nil `CHG-OC-874` (same group). Fixed→Floating `CHG-OC-585`: 0.50% p.a. residual tenure + `percentage_max` 0.03.
- Formula ₹5.50/₹11 per day per lac correctly uses `fixed_amount_per_lakh_or_part=Yes`.
- **Commitment Charge (Non-Utilization)** renamed to **Non-Utilization Charge** with Non-Individual + 60% utilisation threshold.
- Missing family: Annual Renewal 0.25% OD (+ Smart Home NA), Overline/Excess Drawal 8% p.a., Stamp Duty/Registration at actuals, Priority Sector ≤₹50k charge exemption.
- No Other-charges extra/redundant vs Structured_Data (18 OC rows all map; 0 value mismatches).
- No `Slab_Table` origin rows for this bank.
- Offers.processing CIBIL bands share the same 2% fingerprint but Salaried vs Self-Employed are distinct occupation keys (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 1
- **Still missing (bank service charges):** 4
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 2 listed items/groups
- **Offers.overdue → no action unless noted separately:** 0 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Stamp Duty / Registration Charges

### Still missing — bank service charges (actionable)
- Annual Renewal Charge
- Annual Renewal Charge
- Overline / Excess Drawal Penal Charge
- Priority Sector Loan Charge Exemption
