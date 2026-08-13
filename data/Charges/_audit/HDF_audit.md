# HDF / HDFC Bank — Charges Audit

## Summary
- Source Structured_Data rows: 35
- Master Bank_charges rows (hdfc bank): 28
- Matched OK: 11
- Matched with rename only: 5
- Value mismatches: 0
- Missing in master (in source, not in master): 19
- Extra/redundant in master (in master, not in source): 13
- Duplicate issues in master: 0

## Verdict
FAIL — 0 value mismatch(es), 19 source charge(s) missing in master, 13 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Re-Appraisal Of Loan After 6 Months From Sanction** (facility=Both) → `CHG-OC-337` **Re-Appraisal Of Loan After 6 Months From Sanction**; confirmed Fixed amount / Upto 3300 encoded as fixed_amount=3300 (source Max_Amount=3300; master charge_max unset — soft; peer Upto rows use fixed+max); employment_type master='Salaried' narrows source band 'Salaried / Self employed Professional' (amount matches — soft, not counted as mismatch); facility Both→Any; gst master='Yes' (source exclusive of taxes; 10% senior-citizen discount not encoded — soft).
- **Re-Appraisal Of Loan After 6 Months From Sanction** (facility=Both) → `CHG-OC-336` **Re-Appraisal Of Loan After 6 Months From Sanction**; confirmed Fixed amount / Upto 5000 encoded as fixed_amount=5000 (source Max_Amount=5000; master charge_max unset — soft); employment_type master='Self-Employed' approximates source band 'Self-Employed Non-Professionals / NRI / Value Plus Loans / HDFC Reach Scheme' (amount matches — soft); facility Both→Any; gst master='Yes' (soft).
- **Repayment Mode Change Charges** (facility=Both) → `CHG-OC-327` **Repayment Mode Change Charges**; confirmed Fixed amount / Upto 500 → fixed_amount=500 + charge_max=500; frequency Each change; charge_unit=Instance; special_rule preserves 10% senior-citizen discount; facility Both→Any; gst master='Yes' (soft).
- **Administrative Charges** (facility=Both) → `CHG-OC-328` **Administrative Charges**; confirmed Fixed amount / Upto 5000 plus taxes → fixed_amount=5000 + charge_max=5000; charge_unit=Sanction; refundable_if_not_sanctioned=No; facility Both→Any; gst master='Yes' (source plus applicable taxes — soft).
- **Payment Return Charges** (facility=Both) → `CHG-OC-329` **Payment Return Charges**; confirmed Fixed amount 450; frequency Each payment return; charge_unit=Instance; facility Both→Any; gst master='Yes' (soft).
- **Payment Return Charges (Per Dishonor)** (facility=Both) → `CHG-OC-330` **Payment Return Charges (Per Dishonor)**; confirmed Fixed amount 300; frequency Each dishonour; charge_unit=dishonour; facility Both→Any; gst master='Yes' (soft).
- **Property Document Retention charges** (facility=Both) → `CHG-OC-331` **Property Document Retention charges**; confirmed Fixed amount 1000; charge_unit=calendar month; frequency='Monthly after free period'; facility Both→Any; gst master='Yes' (soft).
- **Interest on amount utilized above Operating Limit (DOD)** (facility=Overdraft) → `CHG-OC-332` **Interest on amount utilized above Operating Limit (DOD)**; confirmed Percentage 0.18 (=18% p.a.); percentage_per_annum=Yes; facility=Overdraft; pct_base: source='Amount utilized above the Operating Limit of overdraft facility' master='Overutilised Amount' (treated equivalent); charge_unit≈On excess utilization; gst master='Yes' (soft).
- **Check Dishonour Charges** (facility=Both) → `CHG-OC-333` **Check Dishonour Charges**; confirmed Fixed amount 300; frequency Each dishonour; charge_unit=Instance; note_1 references bank-linked documents-charges page; facility Both→Any; gst master='Yes' (soft).
- **PDC Swap** (facility=Both) → `CHG-OC-334` **PDC Swap**; confirmed Fixed amount / Upto 500 → fixed_amount=500 + charge_max=500; frequency Each swap; facility Both→Any; gst master='Yes' (soft).
- **Disbursement Cheque Cancellation Charge Post Disbursement** (facility=Both) → `CHG-OC-335` **Disbursement Cheque Cancellation Charge Post Disbursement**; confirmed Fixed amount / Upto 500 → fixed_amount=500 + charge_max=500; frequency Each cancellation post disbursement; facility Both→Any; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **List Of Documents (duplicate LOD post disbursement)** (facility=Both) → `CHG-OC-325` **List of Documents Charge - Duplicate** — rename; confirmed Fixed amount / Upto 500 → fixed_amount=500 + charge_max=500; charge_unit=Request; charged_for_physical_copy=Yes; rename List Of Documents (duplicate LOD post disbursement) → List of Documents Charge - Duplicate; facility Both→Any; gst master='Yes' (soft).
- **Photocopy of Documents** (facility=Both) → `CHG-OC-326` **Loan Document Copy Charges** — rename; confirmed Fixed amount / Upto 500 → fixed_amount=500 + charge_max=500; charge_unit=Instance; frequency Each request; rename Photocopy of Documents → Loan Document Copy Charges; special_rule preserves 10% senior-citizen discount; facility Both→Any; gst master='Yes' (soft).
- **Conversion Fees - Switch to lower rate in Variable rate loans (1st Conversion)** (facility=Term Loan) → `CHG-OC-338` **Interest Rate Repricing Fees** — rename; confirmed Formula 'Upto 0.50% … or Rs 3000, whichever is lower' encoded as Percentage 0.005 (=0.50%) + charge_max=3000; rename Conversion Fees - Switch to lower rate in Variable rate loans (1st Conversion) → Interest Rate Repricing Fees; interest_rate_repricing Floating Higher→Lower; pct_base Outstanding principal + undisbursed ≈ source Principal Outstanding and undisbursed; frequency: source='1st Conversion with charges' master='Each Repricing' (soft); subsequent-conversion ₹2000 twin (excel row 15) not encoded here; facility Term Loan kept; gst master='Yes' (soft).
- **Conversion Fees - Switch from Combination/Fixed rate to Variable rate** (facility=Term Loan) → `CHG-OC-340` **Interest Rate Type Switch Fees** — rename; confirmed Percentage Upto 1.50% → percentage=0.015; Fixed→Floating; rename Conversion Fees - Switch from Combination/Fixed rate to Variable rate → Interest Rate Type Switch Fees; pct_base master includes undisbursed (matches Conversion Charges section note on source); Combination/Fixed→Variable ≈ Fixed→Floating (soft); facility Term Loan; frequency Once≈At conversion; gst master='Yes' (soft).
- **Switch to Lower Rate in Variable rate Loans** (facility=Term Loan) → `CHG-OC-338` **Interest Rate Repricing Fees** — rename; confirmed same Formula fingerprint as 1st-conversion twin (0.50% or ₹3000 whichever lower) → Percentage 0.005 + charge_max=3000 on shared CHG-OC-338; rename Switch to Lower Rate in Variable rate Loans → Interest Rate Repricing Fees; product wording Housing/Extension/Renovation/Plot/Top Up aligns with 1st-conversion cap; collapsed into same master row as excel row 14 (DHL CIC dual-source precedent); facility Term Loan; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

- **Stamp Duty & Statutory / Regulatory Charges** | facility=Both | product=Home Loan | type=At actuals | amount=At actual | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=As applicable | frequency=As applicable | conditions='As applicable in the respective States for Stamp Duty/ MOD/ MOE/ Registration. Non-refundable. All government taxes applicable.' (Structured_Data excel row 7)
- **Incidental Charges** | facility=Both | product=Home Loan | type=At actuals | amount=At actual | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=As applicable | frequency=As applicable | conditions='Incidental charges and expenses are levied to cover the cost, charges, expense and other monies as per actuals applicable to a case.' (Structured_Data excel row 8)
- **CERSAI Charges** | facility=Both | product=Home Loan | type=At actuals | amount=At actual (upto Rs.100/-) | min=None max=100 | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per property / as levied | frequency=On creation/modification as applicable | conditions='At actual up to Rs.100/- on main Home Loan charges table. Fees/charges levied by regulatory/government entities such as CERSAI also stated as per actual charges/fee levied by regulatory bodies + applicable taxes/statutory levies. Non-refundable.' (Structured_Data excel row 9)
- **Mortgage Guarantee** | facility=Both | product=Home Loan | type=At actuals | amount=At actual | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=As levied by third party | frequency=As applicable | conditions='Fees/charges levied by third parties such as mortgage guarantee company as per actual fee/charges + applicable taxes/statutory levies.' (Structured_Data excel row 10)
- **Non Compliance of sanction / agreed Terms - Critical security related deferrals** | facility=Both | product=Home Loan | type=Percentage | amount=Upto 2% per annum on principal outstanding | min=None max=50000 | pct_on=Principal outstanding | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per month | frequency=Charged on monthly basis until fulfilment | conditions='Upto 2% charges per annum on principal outstanding for non compliance of agreed terms upto its fulfillment. Subject to a Max of Rs 50000/- for Critical security related deferrals. All charges exclusive of taxes.' (Structured_Data excel row 12)
- **Non Compliance of sanction / agreed Terms - Other deferrals** | facility=Both | product=Home Loan | type=Percentage | amount=Upto 2% per annum on principal outstanding | min=None max=25000 | pct_on=Principal outstanding | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per month | frequency=Charged on monthly basis until fulfilment | conditions='Upto 2% charges per annum on principal outstanding for non compliance of agreed terms upto its fulfillment. Max of Rs 25000/- for other deferrals. All charges exclusive of taxes.' (Structured_Data excel row 13)
- **Conversion Fees - Switch to lower rate in Variable rate loans (Subsequent conversions)** | facility=Term Loan | product=Home Loan / HL Top UP / Plot Equity loan | type=Formula | amount=Upto 0.50% of Principal Outstanding and undisbursed amount (if any) or Rs 2000, whichever is lower | min=None max=2000 | pct_on=Principal Outstanding and undisbursed amount (if any) at the time of Conversion | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per conversion | frequency=Subsequent conversions | conditions='For Home Loan, HL Top UP & Plot Equity loan. Switch to lower rate in Variable rate loans. All charges exclusive of taxes; 10% discount to senior citizens on all service charges.' (Structured_Data excel row 15)
- **Fees on account of External Opinion (legal/technical verifications)** | facility=Both | product=Home Loan | type=At actuals | amount=As per actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per opinion / verification | frequency=As applicable | conditions='Legal/technical verifications. Documents-charges page states fees payable on an actual basis directly to the concerned advocate / technical valuer.' (Structured_Data excel row 21)
- **Re-Appraisal Of Loan After 6 Months From Sanction** | facility=Both | product=Home Loan | type=Fixed amount | amount=Upto 2000 plus applicable taxes | min=None max=2000 | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=If re-appraised after 6 months from sanction | conditions='Documents-charges page amount (Up to ₹2,000 plus applicable taxes). Main Home Loan product page publishes higher caps (Rs. 3300 / Rs. 5000 by customer type).' (Structured_Data excel row 26)
- **Reversal of Provisional Prepayment under HDFC Maxvantage Scheme** | facility=Overdraft | product=HDFC Maxvantage Scheme | type=Fixed amount | amount=250 plus applicable taxes/statutory levies | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per reversal | frequency=At the time of reversal | conditions='Applies to HDFC Maxvantage Scheme (home loan overdraft-style product).' (Structured_Data excel row 27)
- **Fees on account of external opinion from advocates/technical valuers** | facility=Both | product=Home Loan | type=At actuals | amount=On an actual basis | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per opinion | frequency=As applicable | conditions='Payable directly to the concerned advocate / technical valuer for the nature of assistance so rendered.' (Structured_Data excel row 28)
- **Property Insurance Premium** | facility=Both | product=Home Loan | type=At actuals | amount=Premium amounts as charged by insurer | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=As per policy | frequency=Promptly and regularly during pendency of loan | conditions='Customer pays premium amounts directly to the insurance provider so as to keep the policy/policies alive at all times during the pendency of the loan.' (Structured_Data excel row 29)
- **Stamp Duty / MOD / MOE / CERSAI and other statutory or regulatory charges** | facility=Both | product=Home Loan | type=At actuals | amount=As levied by statutory/regulatory bodies | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=As applicable | frequency=As applicable | conditions='Borne and paid (or refunded as the case may be) solely by the customer. CERSAI charges also published on CERSAI website www.cersai.org.in.' (Structured_Data excel row 30)
- **Conversion Fees - Switch to Lower Rate in Variable rate Loans** | facility=Term Loan | product=Home Loan / Extension / Renovation | type=Formula | amount=Upto 0.50% of Principal Outstanding and undisbursed amount (if any) or a cap ₹50000 plus taxes, whichever is lower | min=None max=50000 | pct_on=Principal Outstanding and undisbursed amount (if any) at the time of Conversion | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per conversion | frequency=On every Spread change | conditions='Documents-charges page. Cap ₹50000 differs from main Home Loan product page cap of Rs 3000 (1st) / Rs 2000 (subsequent).' (Structured_Data excel row 31)
- **Conversion Fees - Switching to Variable Rate Loan from Fixed Rate Loan** | facility=Term Loan | product=Home Loan / Extension / Renovation | type=Formula | amount=Upto 0.50% of Principal Outstanding and undisbursed amount (if any) or a cap ₹50000 plus taxes, whichever is lower | min=None max=50000 | pct_on=Principal Outstanding and undisbursed amount (if any) at the time of Conversion | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per conversion | frequency=Once | conditions='Documents-charges page.' (Structured_Data excel row 32)
- **Conversion Fees - Switch from Combination Rate Home Loan fixed rate to Variable rate** | facility=Term Loan | product=Combination Rate Home Loan | type=Percentage | amount=1.75% of the Principal Outstanding and undisbursed amount (if any) plus taxes | min=None max=None | pct_on=Principal Outstanding and undisbursed amount (if any) at the time of Conversion | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per conversion | frequency=Once | conditions='Documents-charges page publishes 1.75%; main Home Loan product page publishes Upto 1.50%.' (Structured_Data excel row 33)
- **Conversion Fees - Switch to Lower Rate (Plot Loans)** | facility=Term Loan | product=Plot Loans | type=Percentage | amount=0.5% of principal outstanding and undisbursed amount (if any) plus taxes | min=None max=None | pct_on=Principal outstanding and undisbursed amount (if any) at the time of Conversion | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per conversion | frequency=On every Spread change | conditions='Plot Loans conversion on documents-charges page.' (Structured_Data excel row 34)
- **Conversion Fees - Switch to Lower Rate (Loans under HDFC Reach) Variable Rate** | facility=Term Loan | product=HDFC Reach Scheme | type=Percentage | amount=Upto 1.50% of the principal outstanding and undisbursed amount (if any) + applicable taxes/statutory levies | min=None max=None | pct_on=Principal outstanding and undisbursed amount (if any) at the time of conversion | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per conversion | frequency=On every Spread change | conditions='Loans under HDFC Reach - Variable Rate.' (Structured_Data excel row 35)
- **Incidental Charges (recovery of dues from defaulting customer)** | facility=Both | product=Home Loan | type=At actuals | amount=As expended | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=As applicable | frequency=As applicable | conditions='Levied to cover costs, charges, expenses and other monies expended in connection with recovery of dues from a defaulting customer. Policy copy available from branch on request.' (Structured_Data excel row 36)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `hdfc bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
- `CHG-OC-339` **Interest Rate Type Switch Fees** | facility=Term Loan | type=Percentage | fixed=None | pct=0.005 | max=3000 | switch=Floating→Fixed | freq=Once | pct_base=Outstanding principal loan amount and undisbursed amount — not in Structured_Data (no Floating→Fixed conversion row; Variable lower-rate maps to Interest Rate Repricing Fees CHG-OC-338; Fixed/Combination→Variable maps to CHG-OC-340 at 1.50%).

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **6 rows** origin=`Offers.processing`. Not in Structured_Data (source is HDFC home-loan fees schedule — re-appraisal / documents / repayment / statutory / admin / non-compliance / conversion / bounce / retention / DOD / PDC / cheque cancel; no processing-fee rows).
  - Sample ids: CHG-PROC-872, CHG-PROC-873, CHG-PROC-874, CHG-PROC-875, CHG-PROC-876, CHG-PROC-877
  - Schemes seen: Home Loan ×6; facility=Term Loan; rate_type=Floating.
  - Percentage/min/max fingerprints: {(0.005, 4000, None): 6} (= 0.50% of sanctioned amount, min ₹4,000).
  - CIBIL bands (distinct, not duplicates): 300–599, 600–649, 650–699, 700–749, 750–799, 800–900.
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-83` **Overdue charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | pct=0.18 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-69` **Prepayment charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-204` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | gst=None | note=Prepayment nil (CSV NIL)
- `CHG-PRE-205` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes | note=None
- `CHG-PRE-206` **Prepayment charges** | facility=Overdraft | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | gst=None | note=Prepayment nil (CSV NIL)
- `CHG-PRE-207` **Prepayment charges (takeover)** | facility=Overdraft | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes | note=None

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `HDF_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (35 rows).
- Master filter: `Bank_charges` where `bank_key` == `hdfc bank` (28 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Re-Appraisal** ₹3,300 / ₹5,000 customer bands present; master employment_type Salaried vs Self-Employed approximates source Salaried/SEP vs SENP/NRI/Value Plus/Reach (soft). Documents-charges page **₹2,000** re-appraisal twin (excel row 26) absent.
- **List Of Documents (duplicate LOD)** → **List of Documents Charge - Duplicate**; **Photocopy of Documents** → **Loan Document Copy Charges**.
- **Conversion Fees** Variable lower-rate 1st conversion (0.50% or ₹3,000) renamed to **Interest Rate Repricing Fees** (CHG-OC-338); excel row 20 same fingerprint collapsed onto same row. Subsequent-conversion ₹2,000 cap (row 15) and documents-page ₹50,000 caps (rows 31–32) missing.
- **Conversion Fees** Combination/Fixed→Variable 1.50% renamed to **Interest Rate Type Switch Fees** Fixed→Floating (CHG-OC-340). Documents-page Combination→Variable **1.75%** (row 33), Plot 0.5% (row 34), and HDFC Reach upto 1.50% (row 35) missing.
- **CHG-OC-339** Floating→Fixed 0.50% cap ₹3,000 is an Other-charges orphan (no Structured_Data Floating→Fixed row).
- Statutory / incidental / CERSAI / mortgage guarantee / non-compliance / external opinion / insurance / Maxvantage reversal rows from Structured_Data are absent from master.
- No `Slab_Table` origin rows for this bank.
- Offers.processing CIBIL bands share the same fee fingerprint but are distinct score bands (not internal duplicates).
- openpyxl `data_only=True` used for both workbooks.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 6
- **Still missing (bank service charges):** 13
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 2 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 2
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Stamp Duty & Statutory / Regulatory Charges
- CERSAI Charges
- Mortgage Guarantee
- Reversal of Provisional Prepayment under HDFC Maxvantage Scheme
- Stamp Duty / MOD / MOE / CERSAI and other statutory or regulatory charges
- Conversion Fees - Switch to Lower Rate (Loans under HDFC Reach) Variable Rate

### Still missing — bank service charges (actionable)
- Incidental Charges
- Non Compliance of sanction / agreed Terms - Critical security related deferrals
- Non Compliance of sanction / agreed Terms - Other deferrals
- Conversion Fees - Switch to lower rate in Variable rate loans (Subsequent conversions)
- Fees on account of External Opinion (legal/technical verifications)
- Re-Appraisal Of Loan After 6 Months From Sanction
- Fees on account of external opinion from advocates/technical valuers
- Property Insurance Premium
- Conversion Fees - Switch to Lower Rate in Variable rate Loans
- Conversion Fees - Switching to Variable Rate Loan from Fixed Rate Loan
- Conversion Fees - Switch from Combination Rate Home Loan fixed rate to Variable rate
- Conversion Fees - Switch to Lower Rate (Plot Loans)
- Incidental Charges (recovery of dues from defaulting customer)
