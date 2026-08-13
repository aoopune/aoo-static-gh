# DHL / Dhanlaxmi Bank — Charges Audit

## Summary
- Source Structured_Data rows: 58
- Master Bank_charges rows (dhanlaxmi bank): 62
- Matched OK: 17
- Matched with rename only: 32
- Value mismatches: 0
- Missing in master (in source, not in master): 10
- Extra/redundant in master (in master, not in source): 14
- Duplicate issues in master: 0

## Verdict
FAIL — 0 value mismatch(es), 10 source charge(s) missing in master, 14 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Equitable Mortgage Creation Charge** (facility=Term Loan) → `CHG-OC-240` **Equitable Mortgage Creation Charge**; confirmed Nil→Fixed amount 0; slab None–200000; slab_basis=Sanctioned loan amount (source loan-limit band; treated equivalent); facility Term Loan→Any; gst_applicable master='Yes' (source excluding taxes — soft).
- **Equitable Mortgage Creation Charge** (facility=Term Loan) → `CHG-OC-241` **Equitable Mortgage Creation Charge**; confirmed Percentage 0.001 (=0.10%); charge_max=5000; slab_from=200000; pct_base: source='Loan amount' master='Sanctioned loan amount' (treated equivalent); facility Term Loan→Any; gst_applicable master='Yes' (soft).
- **SI/ECS/PDC Setup Charge at Account Opening** (facility=Term Loan) → `CHG-OC-263` **SI/ECS/PDC Setup Charge at Account Opening**; confirmed Nil→Fixed amount 0; note setting instruction at account opening preserved; facility Term Loan→Any; gst master='Yes' (soft).
- **SI/ECS/PDC Setup Charge after Account Opening** (facility=Term Loan) → `CHG-OC-264` **SI/ECS/PDC Setup Charge after Account Opening**; confirmed Fixed amount 150; note after account opening preserved.
- **SI/ECS/PDC Amendment Charge** (facility=Term Loan) → `CHG-OC-265` **SI/ECS/PDC Amendment Charge**; confirmed Fixed amount 200; note Amendment/Modification preserved.
- **Old Records Enquiry Charge** (facility=Term Loan) → `CHG-OC-266` **Old Records Enquiry Charge**; confirmed Fixed amount 500; charge_unit=query; note Enquiry beyond 1 year & upto 3 years preserved; facility Term Loan kept; purpose_normalized soft note only.
- **Old Records Enquiry Charge** (facility=Term Loan) → `CHG-OC-267` **Old Records Enquiry Charge**; confirmed Formula 'Rs.500/- per query + additional Rs.100/- per additional year' encoded as Fixed amount 500 + note_2/special_rule for +₹100 per additional year beyond 3 years; Enquiry beyond 3 years band preserved; facility Term Loan.
- **NeSL Digital Document Storage Charge** (facility=Term Loan) → `CHG-OC-268` **NeSL Digital Document Storage Charge**; confirmed Fixed amount 100; customer=Individual; charge_unit=account.
- **NeSL Digital Document Storage Charge** (facility=Term Loan) → `CHG-OC-269` **NeSL Digital Document Storage Charge**; confirmed Fixed amount 500; customer Non-individual→Non-Individual; charge_unit=account.
- **Cheque/ECS Swap Charge** (facility=Term Loan) → `CHG-OC-270` **Cheque/ECS Swap Charge**; confirmed Fixed amount 250; charge_unit=Swap; facility Term Loan→Any; gst master='Yes' (source +GST — soft).
- **E-Mandate Registration Charge** (facility=Term Loan) → `CHG-OC-271` **E-Mandate Registration Charge**; confirmed Fixed amount 150; charge_unit=Mandate; frequency One time; facility Term Loan→Any.
- **Legal Audit Fee** (facility=Term Loan) → `CHG-OC-272` **Legal Audit Fee**; confirmed Fixed amount 3500; charge_max=15000 (account-level cap); charge_by_area='Category A Cities'; charge_unit=Property; facility Term Loan→Any; gst master='Yes' (soft).
- **Legal Audit Fee** (facility=Term Loan) → `CHG-OC-273` **Legal Audit Fee**; confirmed Fixed amount 3000; charge_max=15000 (account-level cap); charge_by_area='Category B Cities'; charge_unit=Property; facility Term Loan→Any; gst master='Yes' (soft).
- **Legal Audit Fee** (facility=Term Loan) → `CHG-OC-274` **Legal Audit Fee**; confirmed Fixed amount 2500; charge_max=15000 (account-level cap); charge_by_area='Category C Cities'; charge_unit=Property; facility Term Loan→Any; gst master='Yes' (soft).
- **Legal Audit Fee** (facility=Term Loan) → `CHG-OC-275` **Legal Audit Fee**; confirmed Fixed amount 2000; charge_max=15000 (account-level cap); charge_by_area='Category D Cities'; charge_unit=Property; facility Term Loan→Any; gst master='Yes' (soft).
- **EMI Cycle Change Charge** (facility=Term Loan) → `CHG-OC-285` **EMI Cycle Change Charge**; confirmed Fixed amount 500; charge_unit=Instance; frequency Each time; facility Term Loan→Any.
- **Escrow Account Charge** (facility=Term Loan) → `CHG-OC-287` **Escrow Account Charge**; confirmed Fixed amount 10000; charge_unit=year; frequency Per annum; facility Term Loan→Any.

### 1b. Rename only (values OK)
- **CIBIL Consumer Credit Information Report Charge** (facility=Term Loan; loc=Any) → `CHG-OC-239` **Credit Information Report (CIC) Charges** — rename; confirmed Fixed amount 100; charge_unit=Report; customer=Individual; CIBIL + CRIF both map to single Credit Information Report (CIC) Charges row at ₹100; facility Term Loan→Any broadening (amounts match — not counted as mismatch); gst_applicable: source notes charges excluding applicable taxes; master='Yes' (not counted as mismatch).
- **CRIF Consumer Credit Information Report Charge** (facility=Term Loan; loc=Any) → `CHG-OC-239` **Credit Information Report (CIC) Charges** — rename; confirmed Fixed amount 100; charge_unit=Report; customer=Individual; CRIF Other Products ₹100 collapsed into CIC Charges (SHG ₹15 not separately encoded — soft); facility Term Loan→Any; gst: source CRIF states including GST; master='Yes' (soft).
- **Documentation Charge** (facility=Term Loan; loc=Any) → `CHG-OC-242` **Documentation Charges** — rename; confirmed Fixed amount 0; slab None–1000000; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent); rename Documentation Charge → Documentation Charges; facility Term Loan→Any; gst master='Yes' (soft).
- **Documentation Charge** (facility=Term Loan; loc=Any) → `CHG-OC-243` **Documentation Charges** — rename; confirmed Fixed amount 500; slab 1000000–5000000; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent); rename Documentation Charge → Documentation Charges; facility Term Loan→Any; gst master='Yes' (soft).
- **Documentation Charge** (facility=Term Loan; loc=Any) → `CHG-OC-244` **Documentation Charges** — rename; confirmed Fixed amount 1000; slab 5000000–10000000; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent); rename Documentation Charge → Documentation Charges; facility Term Loan→Any; gst master='Yes' (soft).
- **Documentation Charge** (facility=Term Loan; loc=Any) → `CHG-OC-245` **Documentation Charges** — rename; confirmed Fixed amount 5000; slab 10000000–100000000; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent); rename Documentation Charge → Documentation Charges; facility Term Loan→Any; gst master='Yes' (soft).
- **Documentation Charge** (facility=Term Loan; loc=Any) → `CHG-OC-246` **Documentation Charges** — rename; confirmed Fixed amount 10000; slab 100000000–None; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent); rename Documentation Charge → Documentation Charges; facility Term Loan→Any; gst master='Yes' (soft).
- **Rate Switch Charge - Base Rate/MCLR to MCLR/RLLR (to card rate)** (facility=Term Loan; loc=Any) → `CHG-OC-247` **Interest Rate Benchmark Switch Fees** — rename; confirmed Nil→Fixed amount 0; benchmark Base Rate/MCLR → MCLR/RLLR; note 'Nil if conversion to card rate'; rename Rate Switch Charge…(to card rate) → Interest Rate Benchmark Switch Fees; facility Term Loan→Any.
- **Rate Switch Charge - Base Rate/MCLR to MCLR/RLLR (below card rate)** (facility=Term Loan; loc=Any) → `CHG-OC-248` **Interest Rate Benchmark Switch Fees** — rename; confirmed Percentage 0.001 (=0.10%); min=2500 max=5000; pct_base: source='Outstanding amount' master='Outstanding loan amount' (treated equivalent); rename …(below card rate) → Interest Rate Benchmark Switch Fees; note below-card-rate preserved.
- **Rate Type Switch Charge - Fixed to Floating or Floating to Fixed** (facility=Term Loan; loc=Any) → `CHG-OC-249` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.01 (=1%); charge_max=50000; Fixed→Floating half of source bidirectional switch; pct_base Outstanding≈Outstanding loan amount; rename Rate Type Switch Charge → Interest Rate Type Switch Fees; facility Term Loan→Any.
- **Rate Type Switch Charge - Fixed to Floating or Floating to Fixed** (facility=Term Loan; loc=Any) → `CHG-OC-250` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.01 (=1%); charge_max=50000; Floating→Fixed half of source bidirectional switch; rename Rate Type Switch Charge → Interest Rate Type Switch Fees; same source excel row 13.
- **ROI Reduction Charge granted by CCPC** (facility=Term Loan; loc=Any) → `CHG-OC-251` **Interest Rate Repricing Fees** — rename; confirmed Percentage 0.001 (=0.10%); min=2500 max=5000; pct_base Outstanding≈Outstanding loan amount; note new-loans/rollover exclusion preserved; rename ROI Reduction Charge granted by CCPC → Interest Rate Repricing Fees (Floating Higher→Lower).
- **NOC Issuance Charge** (facility=Term Loan; loc=Any) → `CHG-OC-252` **No Objection Certificate Issuance Fees** — rename; confirmed Fixed amount 5000; slab None–50000000; slab_basis Sanctioned loan amount (treated equivalent); rename NOC Issuance Charge → No Objection Certificate Issuance Fees; charge_unit≈approval; facility Term Loan→Any.
- **NOC Issuance Charge** (facility=Term Loan; loc=Any) → `CHG-OC-253` **No Objection Certificate Issuance Fees** — rename; confirmed Fixed amount 10000; slab 50000000–100000000; slab_basis Sanctioned loan amount (treated equivalent); rename NOC Issuance Charge → No Objection Certificate Issuance Fees; charge_unit≈approval; facility Term Loan→Any.
- **NOC Issuance Charge** (facility=Term Loan; loc=Any) → `CHG-OC-254` **No Objection Certificate Issuance Fees** — rename; confirmed Fixed amount 15000; slab 100000000–None; slab_basis Sanctioned loan amount (treated equivalent); rename NOC Issuance Charge → No Objection Certificate Issuance Fees; charge_unit≈approval; facility Term Loan→Any.
- **No Due Certificate Charge** (facility=Term Loan; loc=Any) → `CHG-OC-255` **No Due Certificate Charges** — rename; confirmed Fixed amount 500; customer=Individual; note not applicable for loan closure preserved; rename No Due Certificate Charge → No Due Certificate Charges; facility Term Loan→Any.
- **No Due Certificate Charge** (facility=Term Loan; loc=Any) → `CHG-OC-256` **No Due Certificate Charges** — rename; confirmed Fixed amount 750; customer Non-individual→Non-Individual; note loan-closure exclusion preserved; rename No Due Certificate Charge → No Due Certificate Charges.
- **Credit Opinion Letter Charge** (facility=Term Loan; loc=Any) → `CHG-OC-257` **Credit Opinion Report Charges** — rename; confirmed Nil→Fixed amount 0; slab None–200000; charge_unit=letter; rename Credit Opinion Letter Charge → Credit Opinion Report Charges.
- **Credit Opinion Letter Charge** (facility=Term Loan; loc=Any) → `CHG-OC-258` **Credit Opinion Report Charges** — rename; confirmed Fixed amount 2000; slab_from=200000; note take-over debit timing preserved; rename Credit Opinion Letter Charge → Credit Opinion Report Charges.
- **Solvency Certificate Charge** (facility=Term Loan; loc=Any) → `CHG-OC-259` **Solvency Certificate Charges** — rename; confirmed Fixed amount 2000; slab None–200000; slab_basis master='Certificate amount' (source certificate-amount band; treated equivalent); rename Solvency Certificate Charge → Solvency Certificate Charges; facility Term Loan→Any.
- **Solvency Certificate Charge** (facility=Term Loan; loc=Any) → `CHG-OC-260` **Solvency Certificate Charges** — rename; confirmed Fixed amount 5000; slab 200000–2500000; slab_basis master='Certificate amount' (source certificate-amount band; treated equivalent); rename Solvency Certificate Charge → Solvency Certificate Charges; facility Term Loan→Any.
- **Solvency Certificate Charge** (facility=Term Loan; loc=Any) → `CHG-OC-261` **Solvency Certificate Charges** — rename; confirmed Fixed amount 5000; slab 2500000–5000000; slab_basis master='Certificate amount' (source certificate-amount band; treated equivalent); rename Solvency Certificate Charge → Solvency Certificate Charges; facility Term Loan→Any.
- **Solvency Certificate Charge** (facility=Term Loan; loc=Any) → `CHG-OC-262` **Solvency Certificate Charges** — rename; confirmed Fixed amount 10000; slab 5000000–None; slab_basis master='Certificate amount' (source certificate-amount band; treated equivalent); rename Solvency Certificate Charge → Solvency Certificate Charges; facility Term Loan→Any.
- **Title Search Report Fee** (facility=Term Loan; loc=Category A Cities) → `CHG-OC-276` **Title Search Report Fees** — rename; confirmed Fixed amount 5000; charge_max=15000; charge_by_area='Category A Cities'; charge_unit=Property; rename Title Search Report Fee → Title Search Report Fees; facility Term Loan→Any.
- **Title Search Report Fee** (facility=Term Loan; loc=Category B Cities) → `CHG-OC-277` **Title Search Report Fees** — rename; confirmed Fixed amount 3500; charge_max=15000; charge_by_area='Category B Cities'; charge_unit=Property; rename Title Search Report Fee → Title Search Report Fees; facility Term Loan→Any.
- **Title Search Report Fee** (facility=Term Loan; loc=Category C Cities) → `CHG-OC-278` **Title Search Report Fees** — rename; confirmed Fixed amount 3000; charge_max=15000; charge_by_area='Category C Cities'; charge_unit=Property; rename Title Search Report Fee → Title Search Report Fees; facility Term Loan→Any.
- **Title Search Report Fee** (facility=Term Loan; loc=Category D Cities) → `CHG-OC-279` **Title Search Report Fees** — rename; confirmed Fixed amount 2000; charge_max=15000; charge_by_area='Category D Cities'; charge_unit=Property; rename Title Search Report Fee → Title Search Report Fees; facility Term Loan→Any.
- **Valuation Charge - Vacant Land** (facility=Term Loan; loc=Any) → `CHG-OC-280` **Property Valuation Report Charges** — rename; confirmed Percentage 0.0025 (=0.25%); charge_max=2000; property_valuation_scope='Vacant land'; pct_base: source='Value of vacant land' master='Value of Property' (scope makes equivalent); rename Valuation Charge - Vacant Land → Property Valuation Report Charges; frequency At Sanction (soft vs source unspecified).
- **Valuation Charge - Building** (facility=Term Loan; loc=Any) → `CHG-OC-281` **Property Valuation Report Charges** — rename; confirmed Percentage 0.001 (=0.1%); min=500 max=10000; scope master='Land & Building' covers source Building/Plant Machinery (soft scope wording); pct_base Value of assets≈Value of Property; rename Valuation Charge - Building → Property Valuation Report Charges; compound-buildings note preserved.
- **EMI Bounce Charge** (facility=Term Loan; loc=Any) → `CHG-OC-282` **EMI Bounce Charges** — rename; confirmed Fixed amount 300; charge_unit=Bounce; frequency Per bounce; rename EMI Bounce Charge → EMI Bounce Charges; facility Term Loan→Any.
- **Facility Statement Charge** (facility=Term Loan; loc=Any) → `CHG-OC-283` **Statement of Account Charges - Duplicate** — rename; confirmed Fixed amount 500; charge_unit=Statement; charged_for_physical_copy=Yes; nil-half-yearly first statement soft (not separately encoded); rename Facility Statement Charge → Statement of Account Charges - Duplicate (source is facility statement fee — soft rename).
- **Document Retrieval Charge** (facility=Term Loan; loc=Any) → `CHG-OC-284` **Property Document Retrieval Charge** — rename; confirmed Fixed amount 500; charge_unit=Instance; rename Document Retrieval Charge → Property Document Retrieval Charge.

## 2. Value mismatches

(none)

## 3. Missing in master

- **CERSAI Creation Charge** | facility=Term Loan | product=Home Loan | type=Fixed amount | amount=350 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per creation | frequency=None | conditions='Bank wording: Rs.100 + 250=Rs.350/-. Charges excluding applicable taxes.' (Structured_Data excel row 15)
- **CERSAI Modification Charge** | facility=Term Loan | product=Home Loan | type=Fixed amount | amount=250 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per modification | frequency=None | conditions='Bank wording: Rs.50+200=Rs.250/-. Charges excluding applicable taxes.' (Structured_Data excel row 16)
- **Registered Notice Charge** | facility=Term Loan | product=Home Loan | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per notice | frequency=None | conditions='Charges for Notice (303500013). Charges excluding applicable taxes.' (Structured_Data excel row 48)
- **Legal Notice Charge** | facility=Term Loan | product=Home Loan | type=Formula | amount=Actuals + Rs.1000/- | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per notice | frequency=None | conditions='Charges for Notice (303500013). Charges excluding applicable taxes.' (Structured_Data excel row 49)
- **Facility Cancellation Charge** | facility=Term Loan | product=Home Loan | type=Formula | amount=Rs. 2000 + service tax plus interest charges from disbursement date till cancellation request | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per cancellation | frequency=None | conditions='From property-loan fees PDF still linked on Home Loans page; not restated in SOC wef 10.03.2026.' (Structured_Data excel row 54)
- **Stamp Duty and Registration** | facility=Term Loan | product=Home Loan | type=At actuals | amount=As per actual | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='Facility documentation & Property. From property-loan fees PDF still linked on Home Loans page.' (Structured_Data excel row 55)
- **Legal, Repossession and Incidental Charges** | facility=Term Loan | product=Home Loan | type=At actuals | amount=As per actual | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='From property-loan fees PDF still linked on Home Loans page.' (Structured_Data excel row 56)
- **Insurance Premium** | facility=Term Loan | product=Home Loan | type=At actuals | amount=As per actual | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per policy | frequency=None | conditions='From property-loan fees PDF still linked on Home Loans page.' (Structured_Data excel row 57)
- **ROC Charge Creation** | facility=Term Loan | product=Home Loan | type=At actuals | amount=As per actual | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='Creation of charge with ROC. From property-loan fees PDF still linked on Home Loans page.' (Structured_Data excel row 58)
- **Any Other Charge** | facility=Term Loan | product=Home Loan | type=Formula | amount=As per sanction letter | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=As applicable | frequency=None | conditions='From property-loan fees PDF still linked on Home Loans page.' (Structured_Data excel row 59)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `dhanlaxmi bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
- `CHG-OC-286` **Commitment Charges / Non Utilisation Fee** | facility=Overdraft | type=Percentage | fixed=None | pct=0.01 | pct_base=Unutilized amount | utilisation_below_per_quarter=0.6 | freq=Per quarter | note — not in Structured_Data (SOC / property-loan fees schedule has no commitment / non-utilisation fee row).

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **7 rows** origin=`Offers.processing`. Not in Structured_Data (source is Dhanlaxmi schedule-of-charges / property-loan fees — CIC/EM/documentation/rate-switch/NOC/certificates/repayment/legal/valuation/bounce/statement etc.; no processing-fee rows).
  - Sample ids: CHG-PROC-878, CHG-PROC-879, CHG-PROC-880, CHG-PROC-881, CHG-PROC-882, CHG-PROC-883, CHG-PROC-884
  - Schemes seen: Home Loan ×7; facility=Term Loan; rate_type={'Floating': 7}.
  - Percentage/min/max fingerprints: {(0.01, 10000, None): 7} (= 1.00% of sanctioned amount, min ₹10,000).
  - CIBIL bands (distinct, not duplicates): 300–599, 600–649, 650–699, 700–749, 750–799, 800–824, 825–900.
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-84` **Overdue charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | pct=0.03 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-70` **Prepayment charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-212` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | pct=0.03 | pct_base=Amount_Being_Paid | gst=Yes
- `CHG-PRE-213` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | pct=0.03 | pct_base=Amount_Being_Paid | gst=Yes
- `CHG-PRE-214` **Prepayment charges** | facility=Overdraft | rate_type=Fixed | pct=0.03 | pct_base=Amount_Being_Paid | gst=Yes
- `CHG-PRE-215` **Prepayment charges (takeover)** | facility=Overdraft | rate_type=Fixed | pct=0.03 | pct_base=Amount_Being_Paid | gst=Yes

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `DHL_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (58 rows).
- Master filter: `Bank_charges` where `bank_key` == `dhanlaxmi bank` (62 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **CIBIL** and **CRIF** consumer report charges both map to one **Credit Information Report (CIC) Charges** ₹100 Individual row.
- **Rate Type Switch** (Fixed↔Floating 1% max ₹50,000) split into two master switch-direction rows — values OK.
- **Old Records Enquiry** beyond 3 years formula correctly noted via `special_rule` / `note_2` (+₹100 per additional year) on Fixed ₹500 base.
- **CERSAI** creation ₹350 / modification ₹250, Registered/Legal Notice, Facility Cancellation, stamp duty/ROC/insurance/legal-repossession actuals, and Any Other Charge are absent from master.
- Other-charges orphan: **Commitment Charges / Non Utilisation Fee** (OD 1% of unutilized, utilisation_below 60%/quarter) — not in Structured_Data.
- No `Slab_Table` origin rows for this bank.
- Offers.processing CIBIL bands share the same fee fingerprint but are distinct score bands (not internal duplicates).
- openpyxl `data_only=True` used for both workbooks.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 4
- **Still missing (bank service charges):** 6
- **Offers.processing extras → not an error (not from Structured_Data):** 7 listed items/groups
- **Prepayment extras → ignored:** 5 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 1
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Creation Charge
- CERSAI Modification Charge
- Stamp Duty and Registration
- ROC Charge Creation

### Still missing — bank service charges (actionable)
- Registered Notice Charge
- Legal Notice Charge
- Facility Cancellation Charge
- Legal, Repossession and Incidental Charges
- Insurance Premium
- Any Other Charge
