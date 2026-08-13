# IND / IndusInd Bank — Charges Audit

## Summary
- Source Structured_Data rows: 46
- Master Bank_charges rows (indusind bank): 27
- Matched OK: 4
- Matched with rename only: 7
- Value mismatches: 0
- Missing in master (in source, not in master): 35
- Extra/redundant in master (in master, not in source): 16
- Duplicate issues in master: 0

## Verdict
FAIL — 0 value mismatch(es), 35 source charge(s) missing in master, 16 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Collection Charges (Local)** (facility=Term Loan) → `CHG-OC-505` **Collection Charges (Local)**; confirmed Nil→Fixed amount 0; freq=Each instance; facility=Term Loan; note_1='Local as per municipal/city limits.'; gst master='Yes' (soft).
- **Rebooking of Loans** (facility=Term Loan) → `CHG-OC-508` **Rebooking of Loans**; confirmed Nil→Fixed amount 0; freq=Each time; facility=Term Loan; note_1 preserves within-6-months Property/Collateral / borrowing-structure wording; gst master='Yes' (soft).
- **Loan Cancellation Charges** (facility=Term Loan) → `CHG-OC-509` **Loan Cancellation Charges**; confirmed Fixed amount 1000; charge_unit=Instance; freq=Each time; facility=Term Loan; note_1 preserves franking/stamping actuals; gst master='Yes' (soft).
- **Non-Compliance of Terms of Sanction (Plot + Construction)** (facility=Term Loan) → `CHG-OC-510` **Non-Compliance of Terms of Sanction (Plot + Construction)**; confirmed Formula 'Repo rate/External Benchmark + 5.5%' → Percentage 0.055 + percentage_per_annum=Yes; pct_base: source='Already disbursed amount (interest rate revision)' master='Disbursed loan amount' (treated equivalent); benchmark_switch_to='Repo rate / External Benchmark'; note_1 preserves Plot+Construction 12-month / delayed-progress wording; charge_unit=annum; semantic soft: published as interest-rate revision to Repo/EBR+5.5%, encoded as 5.5% p.a. percentage charge on disbursed amount; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Bounce Charge** (facility=Term Loan) → `CHG-OC-500` **Cheque/ECS/NACH/SI/ACH Debit Return / Dishonour Charges** — rename; confirmed Fixed amount 750; charge_unit=Instance; freq=Each time; facility=Term Loan; rename Bounce Charge → Cheque/ECS/NACH/SI/ACH Debit Return / Dishonour Charges; actuals_in_addition_to_charge=Yes on master (source Bounce Charge is Fixed ₹750; GST/taxes over-and-above — soft; note_1 wording echoes Affordable 'repayment dishonour'); gst master='Yes' (soft).
- **Swapping Charges** (facility=Term Loan) → `CHG-OC-501` **Swapping Charges (Cheque/SI/ECS/ACH etc.)** — rename; confirmed Fixed amount 500; charge_unit=swap instance; freq=Each swap; facility=Term Loan; rename Swapping Charges → Swapping Charges (Cheque/SI/ECS/ACH etc.); gst master='Yes' (soft).
- **Duplicate Statement Charges** (facility=Term Loan) → `CHG-OC-502` **Statement of Account Charges - Duplicate** — rename; confirmed Nil→Fixed amount 0; charge_unit=Request; freq=Each time; rename Duplicate Statement Charges → Statement of Account Charges - Duplicate; facility Term Loan→Any; charged_for_physical/digital_copy=No; gst master='Yes' (soft).
- **List of Documents (LOD)** (facility=Term Loan) → `CHG-OC-503` **List of Documents Charge - Duplicate** — rename; confirmed Nil→Fixed amount 0; charge_unit=Request; freq=Each time; rename List of Documents (LOD) → List of Documents Charge - Duplicate; facility Term Loan→Any; charged_for_physical_copy=Yes / digital=No (soft flags on Nil row); gst master='Yes' (soft).
- **Document Copy Charges** (facility=Term Loan) → `CHG-OC-504` **Property Document Retrieval Charge** — rename; confirmed Fixed amount 500; charge_unit=Request; freq=Each request; facility=Term Loan; rename Document Copy Charges → Property Document Retrieval Charge; note_1 preserves 'For providing copy of property documents'; gst master='Yes' (soft).
- **Repricing Charges** (facility=Term Loan) → `CHG-OC-506` **Interest Rate Repricing Fees** — rename; confirmed Percentage 'Upto 0.50%'→0.005; charge_min=5000; pct_base: source='Principal outstanding' master='Outstanding principal loan amount' (treated equivalent); interest_rate_repricing_type=Floating Higher→Lower; charge_unit=Instance; freq=Each time; rename Repricing Charges → Interest Rate Repricing Fees; 'Upto' encoded as 0.50% ceiling (soft); gst master='Yes' (soft).
- **Swap of Property/Collateral** (facility=Term Loan) → `CHG-OC-507` **Swap of Property/Collateral Charges** — rename; confirmed Nil→Fixed amount 0; charge_unit=Swap; freq=Each swap; facility=Term Loan; rename Swap of Property/Collateral → Swap of Property/Collateral Charges; note_1 soft expansion about substituting collateral/guarantee; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

- **No Due Certificate / NOC** | facility=Term Loan | product=Home Loan | type=Nil | amount=Nil | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions=None (Structured_Data excel row 3)
- **Duplicate No Due Certificate / NOC / Re-issuance FCL/LOD** | facility=Term Loan | product=Home Loan | type=Nil | amount=Nil | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions=None (Structured_Data excel row 4)
- **Stamp Charges / Registration Charges** | facility=Term Loan | product=Home Loan | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Borrower liable to pay all Registration charges and Stamp Duty as applicable under the law.' (Structured_Data excel row 5)
- **Legal / Repossession / Incidental Charges** | facility=Term Loan | product=Home Loan | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='GST and other taxes levies etc. charged over and above as per schedule note.' (Structured_Data excel row 16)
- **Bounce Fee** | facility=Term Loan | product=Home Loan | type=Fixed amount | amount=750 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='On bounce / SI failure for financial reason. Amount is ₹750 + GST as published on penal charges schedule.' (Structured_Data excel row 17)
- **Documentation Charges** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=2500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per case | frequency=None | conditions='Non-refundable. GST as applicable.' (Structured_Data excel row 18)
- **Stamping Charges** | facility=Term Loan | product=Affordable Home Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Applicable as per the respective State’s Stamp Act. Non-refundable.' (Structured_Data excel row 19)
- **Loan Cancellation / Re-booking Charges** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=5000 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='GST as applicable.' (Structured_Data excel row 20)
- **Collection Charges (Local)** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=250 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='Local as per municipal/city limits. Return related / Non bounce related instance. GST as applicable.' (Structured_Data excel row 21)
- **Cash Collection Charges** | facility=Term Loan | product=Affordable Home Loans | type=Percentage | amount=Upto 1% | min=100 max=None | pct_on=Cash collected | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='Whether paid at branch or paid to field executive towards dues/overdues/settlement/sale proceeds etc. GST as applicable.' (Structured_Data excel row 22)
- **Swap Charges (Repayment Mode)** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='Change / Replacement of Repayment Mode instructions per instance, upto max. GST as applicable.' (Structured_Data excel row 23)
- **No Repayment Mandate / Invalid Mandate Visit Charge** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=300 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='Visit to customer premises charged whether any installment payment is made or not. Applies for no repayment mandate / invalid SI/Debit/ACH mandate. GST as applicable.' (Structured_Data excel row 24)
- **Repayment Dishonour Charges** | facility=Term Loan | product=Affordable Home Loans | type=Formula | amount=Rs. 750 + Bank charges on actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='Cheque/SI/ACH. GST as applicable.' (Structured_Data excel row 25)
- **Non-Submission of Property Collateral Documents / MOTD** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=5000 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per month | frequency=Per month or part thereof | conditions='If stipulated. For delays over 60 days. GST as applicable.' (Structured_Data excel row 26)
- **ROC/CERSAI Not Done Within Timelines** | facility=Term Loan | product=Affordable Home Loans | type=Formula | amount=Rs. 5000/- per month or part thereof for delays over 30 days + all penalties levied by ROC + actual cost incurred + ROC Consultant Charges | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per month | frequency=Per month or part thereof | conditions='Customer additionally bears all penalties levied by ROC, actual cost incurred, and ROC Consultant Charges. GST as applicable.' (Structured_Data excel row 27)
- **Closure of Bank Account Without Intimation** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per month | frequency=Per month | conditions='Closure of bank account from which repayment instruments/ACH issued, without intimation, upto max. GST as applicable.' (Structured_Data excel row 28)
- **Non-Payment of Property Tax** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per month | frequency=Per month or part thereof | conditions='For delays over 90 days from due date. GST as applicable.' (Structured_Data excel row 29)
- **Document Copy Charges** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per request | frequency=None | conditions='For providing copy of property documents (photostat). GST as applicable.' (Structured_Data excel row 30)
- **Swap of Property/Collateral** | facility=Term Loan | product=Affordable Home Loans | type=Formula | amount=0.1% of loan amount outstanding or Rs.10000 per event, whichever is higher | min=10000 max=None | pct_on=Loan amount outstanding | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per event | frequency=None | conditions='0.1% of loan amount outstanding or Rs.10000/- per event of such swap, whichever is higher. GST as applicable.' (Structured_Data excel row 31)
- **Release of Property/Collateral on Live Loan** | facility=Term Loan | product=Affordable Home Loans | type=Formula | amount=0.1% of loan amount outstanding or Rs.10000 per event, whichever is higher | min=10000 max=None | pct_on=Loan amount outstanding | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per event | frequency=None | conditions='Release of property/collateral on live loan. 0.1% of loan amount outstanding or Rs.10000/- per event, whichever is higher. GST as applicable.' (Structured_Data excel row 32)
- **Re-booking of Loan** | facility=Term Loan | product=Affordable Home Loans | type=Formula | amount=Upto 2% of loan amount outstanding or Rs.10000 per event, whichever is higher | min=10000 max=None | pct_on=Loan amount outstanding | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per event | frequency=None | conditions='Due to change in property/collateral, change in borrower structure etc. Upto 2% of loan amount outstanding or Rs.10000/- per event of such request, whichever is higher. GST as applicable.' (Structured_Data excel row 33)
- **Loan Statement Charges (Additional)** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=200 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per additional statement | frequency=None | conditions='Latest loan statement from Base Branch free of charge every year. Rs. 200+GST per additional statement requested.' (Structured_Data excel row 34)
- **CIBIL / Credit Information Report Charges** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Individual | loc=Any | charged_per=Per report | frequency=None | conditions='Rs.50+GST for Individual.' (Structured_Data excel row 35)
- **CIBIL / Credit Information Report Charges** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Non-individual | loc=Any | charged_per=Per report | frequency=None | conditions='Rs. 500+GST for Non-Individual.' (Structured_Data excel row 36)
- **Legal / Repossession / Incidental Charges** | facility=Term Loan | product=Affordable Home Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions=None (Structured_Data excel row 37)
- **Travel and Collection Follow-up Charges** | facility=Term Loan | product=Affordable Home Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions=None (Structured_Data excel row 38)
- **SMS / Tele-calling Charges** | facility=Term Loan | product=Affordable Home Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions=None (Structured_Data excel row 39)
- **Foreclosure Statement Charges** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=200 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per statement | frequency=None | conditions='Free for 1 time; thereafter Rs.200+GST.' (Structured_Data excel row 40)
- **Compensation Charges (Disbursement Before Agreement Date)** | facility=Term Loan | product=Affordable Home Loans | type=Formula | amount=Contracted rate of interest for intervening days | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='If disbursement happens before the loan agreement date, for the intervening days, at contracted rate of interest.' (Structured_Data excel row 41)
- **Due Date Shifting Charges** | facility=Term Loan | product=Affordable Home Loans | type=Formula | amount=Contracted rate of interest | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Beyond chosen initial moratorium period, at contracted rate of interest.' (Structured_Data excel row 42)
- **NeSL IU Registration / Renewal Charges** | facility=Term Loan | product=Affordable Home Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions=None (Structured_Data excel row 43)
- **Any Other Charges** | facility=Term Loan | product=Affordable Home Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions=None (Structured_Data excel row 44)
- **ROC Filing / Amendment Charges** | facility=Term Loan | product=Affordable Home Loans | type=Fixed amount | amount=2500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=None | conditions='Incurred by the Lender. Rs. 2500 + GST. Applies where ROC filing/amendment is required.' (Structured_Data excel row 45)
- **CERSAI Registration Charges** | facility=Term Loan | product=Affordable Home Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Incurred by the Lender.' (Structured_Data excel row 46)
- **ROC Consultant Fees** | facility=Term Loan | product=Affordable Home Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Incurred by the Lender.' (Structured_Data excel row 47)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `indusind bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 11 `Other charges` rows map to Home Loan Schedule Of Charges Structured_Data (bounce/swap/statement/LOD/document copy/collection/repricing/collateral swap/rebooking/cancellation/non-compliance). NOC / stamp / legal / Bounce Fee / entire Affordable CFD schedule remain missing rather than duplicated.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **14 rows** origin=`Offers.processing`. Not in Structured_Data (source is IndusInd Home Loan SOC + Affordable CFD SOC — bounce/NOC/stamp/swap/statement/LOD/document copy/collection/repricing/cancellation/non-compliance/legal + Affordable documentation/collection/swap/dishonour/CIBIL/ROC/CERSAI etc.; no processing-fee rows).
  - Sample ids: CHG-PROC-1170, CHG-PROC-1171, CHG-PROC-1172, CHG-PROC-1173, CHG-PROC-1174, CHG-PROC-1175, CHG-PROC-1176, CHG-PROC-1177
  - Schemes seen: Home Loan ×14; facility=Term Loan; rate_type=Floating; purpose=Regular Home Loan.
  - Percentage fingerprint: {(0.01, 'Term Loan', 'Floating')}: 14 (= 1.00% of Sanctioned loan amount across all bands/occupations).
  - Occupations (distinct, not duplicates): Salaried ×7; Self-Employed ×7.
  - CIBIL bands (distinct, not duplicates): -1–0, 300–649, 650–674, 675–700, 701–749, 750–799, 800–900.
  - Matrix: 7 CIBIL bands × 2 occupations = 14.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-101` **Overdue charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | fixed=100 | pct=0.24 | percentage_per_annum=Yes | pct_base=Default_Amount | note=overdue_whichever_higher=Yes

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-87` **Prepayment charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
(none)

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `IND_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (46 rows).
- Master filter: `Bank_charges` where `bank_key` == `indusind bank` (27 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- Nil correctly encoded as Fixed amount 0 on Duplicate Statement / LOD / Collection Local / Swap of Property / Rebooking.
- Repricing 'Upto 0.50%' encoded as `percentage_max` 0.005 + `charge_min` 5000 (no flat `percentage`).
- Non-Compliance Formula Repo/EBR+5.5% encoded as Percentage 0.055 p.a. on disbursed amount (interest-revision semantic — soft).
- **Mapped family:** Home Loan Schedule Of Charges core set (excel rows 2,6–15) → CHG-OC-500..510.
- **Home Loan SOC now in master:** No Due Certificate / NOC Nil → `CHG-OC-861`; Duplicate NOC / Re-issuance FCL/LOD Nil → `CHG-OC-862`; Legal / Repossession / Incidental At actuals → `CHG-OC-863`. Repricing `CHG-OC-506` has `percentage_max` 0.50% + `charge_min` ₹5,000. Bounce `CHG-OC-500` is ₹750 + GST only (`actuals_in_addition` cleared). Stamp still ignored (govt). Bounce Fee excel 17 not added (same ₹750 bounce as excel 2).
- **Missing Affordable CFD SOC:** entire product block excel rows 18–47 (30 rows) — documentation ₹2500, stamping actuals, cancellation/rebooking ₹5000, collection ₹250, cash collection upto 1%, swap ₹500, mandate visit ₹300, repayment dishonour ₹750+actuals, MOTD/ROC delay formulas, property-tax/account-closure monthly fees, document copy ₹500, collateral swap/release 0.1%/₹10k, rebooking upto 2%, statement ₹200, CIBIL ₹50/₹500, legal/travel/SMS actuals, foreclosure statement, compensation/due-date interest formulas, NeSL/CERSAI/ROC consultant actuals, ROC filing ₹2500, any-other actuals.
- No Other-charges redundant/duplicate rows vs Structured_Data (11/11 mapped).
- No `Slab_Table` or `CSV.fixed_prepay` origin rows for this bank.
- Offers.processing CIBIL × occupation cells share the same 1% fee fingerprint but are distinct score/occupation keys (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 4
- **Still missing (bank service charges):** 28
- **Offers.processing extras → not an error (not from Structured_Data):** 14 listed items/groups
- **Prepayment extras → ignored:** 1 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Stamp Charges / Registration Charges
- ROC/CERSAI Not Done Within Timelines
- NeSL IU Registration / Renewal Charges
- CERSAI Registration Charges

### Still missing — bank service charges (actionable)
- Bounce Fee
- Documentation Charges
- Stamping Charges
- Loan Cancellation / Re-booking Charges
- Collection Charges (Local)
- Cash Collection Charges
- Swap Charges (Repayment Mode)
- No Repayment Mandate / Invalid Mandate Visit Charge
- Repayment Dishonour Charges
- Non-Submission of Property Collateral Documents / MOTD
- Closure of Bank Account Without Intimation
- Non-Payment of Property Tax
- Document Copy Charges
- Swap of Property/Collateral
- Release of Property/Collateral on Live Loan
- Re-booking of Loan
- Loan Statement Charges (Additional)
- CIBIL / Credit Information Report Charges
- CIBIL / Credit Information Report Charges
- Legal / Repossession / Incidental Charges
- Travel and Collection Follow-up Charges
- SMS / Tele-calling Charges
- Foreclosure Statement Charges
- Compensation Charges (Disbursement Before Agreement Date)
- Due Date Shifting Charges
- Any Other Charges
- ROC Filing / Amendment Charges
- ROC Consultant Fees
