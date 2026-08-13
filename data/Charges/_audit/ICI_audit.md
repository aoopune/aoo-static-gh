# ICI / ICICI Bank — Charges Audit

## Summary
- Source Structured_Data rows: 38
- Master Bank_charges rows (icici bank): 57
- Matched OK: 7
- Matched with rename only: 17
- Value mismatches: 1
- Missing in master (in source, not in master): 13
- Extra/redundant in master (in master, not in source): 32
- Duplicate issues in master: 0

## Verdict
FAIL — 1 value mismatch(es), 13 source charge(s) missing in master, 32 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Administrative Charges** (facility=Both) → `CHG-OC-341` **Administrative Charges**; confirmed Formula '0.25% of Facility Amount or 5000 whichever is lower' encoded as Percentage 0.0025 (=0.25%) + charge_max=5000; pct_base: source='Facility Amount' master='Sanctioned loan amount' (treated equivalent); charge_unit=Sanction; frequency At disbursement; refundable_if_not_sanctioned=No; facility Both→Any; gst_applicable: source notes GST over and above; master='Yes' (soft).
- **Commitment Charges / Non Utilisation Fee** (facility=Overdraft) → `CHG-OC-342` **Commitment Charges / Non Utilisation Fee**; confirmed Percentage 0.005 (=0.5%); facility=Overdraft; customer_type=Non-Individual; frequency Quarterly; pct_base: source='Deficit amount below minimum 30% quarterly average utilisation' master='Unutilized amount' (treated equivalent via utilisation_below_per_quarter=0.3 + special_rule); special_rule preserves not-applicable-for-salaried; charge_unit=Quarter; gst master='Yes' (soft).
- **Penal Charges for Non-Submission of Post Disbursement Documents** (facility=Both) → `CHG-OC-354` **Penal Charges for Non-Submission of Post Disbursement Documents**; confirmed Fixed amount 5000; charge_unit=month; frequency='Monthly until documents submitted'; facility Both→Any; gst master='Yes' (soft).
- **Non-Collection of Property Documents** (facility=Both) → `CHG-OC-355` **Non-Collection of Property Documents**; confirmed Fixed amount 1000; charge_unit=month; frequency='Monthly till collection'; note_1 preserves post-60-days-from-closure; facility Both→Any; gst master='Yes' (soft).
- **Solvency Certificate Charges** (facility=Both) → `CHG-OC-360` **Solvency Certificate Charges**; confirmed Percentage 0.01 (=1%); charge_min=10000; charge_max=25000; pct_base: source='Solvency amount' master='Solvency certificate amount' (treated equivalent); charge_unit=Certificate; frequency Each request; facility Both→Any; gst master='Yes' (soft).
- **Cheque reissuance & revalidation charges** (facility=Both) → `CHG-OC-362` **Cheque reissuance & revalidation charges**; confirmed Nil→Fixed amount 0; frequency Each request; facility Both→Any; gst master='Yes' (soft).
- **Disbursement cheque cancellation & reissuance** (facility=Both) → `CHG-OC-363` **Disbursement cheque cancellation & reissuance**; confirmed Nil→Fixed amount 0; frequency Each request; facility Both→Any; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Conversion Charges** (facility=Term Loan) → `CHG-OC-344` **Interest Rate Type Switch Fees** — rename; confirmed Fixed amount 3000; facility=Term Loan; Floating→Fixed; charge_unit=Switch; frequency Each time; rename Conversion Charges → Interest Rate Type Switch Fees; source Conditions 'floating (adjustable) rate linked term loan to Fixed or floating (adjustable)' → Floating→Fixed ₹3000 twin; Floating→Floating destination not separately encoded (soft); gst master='Yes' (soft).
- **Conversion Charges** (facility=Overdraft) → `CHG-OC-345` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.005 (=0.5%); facility=Overdraft; Fixed→Floating; pct_base=Outstanding principal loan amount ≈ source Principal outstanding; charge_unit=Switch; rename Conversion Charges → Interest Rate Type Switch Fees; source Facility=Overdraft single row split into Fixed↔Floating direction pair (treated equivalent encoding); gst master='Yes' (soft).
- **Conversion Charges** (facility=Overdraft) → `CHG-OC-346` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.005 (=0.5%); facility=Overdraft; Floating→Fixed; pct_base=Outstanding principal loan amount ≈ source Principal outstanding; charge_unit=Switch; rename Conversion Charges → Interest Rate Type Switch Fees; source Facility=Overdraft single row split into Fixed↔Floating direction pair (treated equivalent encoding); gst master='Yes' (soft).
- **Cheque or ECS or NACH Dishonor Charges** (facility=Both) → `CHG-OC-347` **EMI / Cheque / ECS / ACH Bounce Charge** — rename; confirmed Fixed amount 500; frequency='Each bounce/return/dishonour'; charge_unit=Instance; rename Cheque or ECS or NACH Dishonor Charges → EMI / Cheque / ECS / ACH Bounce Charge; facility Both→Any; gst master='Yes' (soft).
- **Cheque or Repayment Mode Swap Charges** (facility=Both) → `CHG-OC-348` **Cheque / Repayment Mode Swap Charges** — rename; confirmed Fixed amount 500; frequency Each time; charge_unit=Instance; rename Cheque or Repayment Mode Swap Charges → Cheque / Repayment Mode Swap Charges; facility Both→Any; gst master='Yes' (soft).
- **Charges for Amortisation Schedule** (facility=Both) → `CHG-OC-349` **Amortisation Schedule Issuance Charges** — rename; confirmed Fixed amount 200; frequency Each request; charged_for_physical_copy=Yes; note_1 physical print at branch; rename Charges for Amortisation Schedule → Amortisation Schedule Issuance Charges; facility Both→Any; gst master='Yes' (soft).
- **Charges for Statement of Account** (facility=Both) → `CHG-OC-350` **Statement of Account Charges - Duplicate** — rename; confirmed Fixed amount 200; charged_for_physical_copy=Yes; charged_for_digital_copy=No; charge_unit=Request; rename Charges for Statement of Account → Statement of Account Charges - Duplicate; frequency: source='Each request' master='Each time' (soft); facility Both→Any; gst master='Yes' (soft).
- **Duplicate NOC or No Dues Certificate** (facility=Both) → `CHG-OC-351` **Duplicate No Objection Certificate Issuance Fees** — rename; confirmed Fixed amount 250; frequency Each request; charge_unit=Instance; rename Duplicate NOC or No Dues Certificate → Duplicate No Objection Certificate Issuance Fees; source combined Duplicate NOC/No Dues split into separate NOC + No Dues master series (CUB Duplicate NOC/No Dues precedent); facility Both→Any; gst master='Yes' (soft).
- **Duplicate NOC or No Dues Certificate** (facility=Both) → `CHG-OC-352` **Duplicate No Dues Certificate Issuance Fees** — rename; confirmed Fixed amount 250; frequency Each request; charge_unit=Instance; rename Duplicate NOC or No Dues Certificate → Duplicate No Dues Certificate Issuance Fees; source combined Duplicate NOC/No Dues split into separate NOC + No Dues master series; facility Both→Any; gst master='Yes' (soft).
- **Re-validation of No Objection Certificate** (facility=Both) → `CHG-OC-353` **Revalidation of No Objection Certificate Fees** — rename; confirmed Fixed amount 250; frequency Each request; charge_unit=Instance; rename Re-validation of No Objection Certificate → Revalidation of No Objection Certificate Fees; facility Both→Any; gst master='Yes' (soft).
- **Renewal Fee** (facility=Overdraft) → `CHG-OC-356` **Renewal Fees** — rename; confirmed Fixed amount 5000; facility=Overdraft; charge_unit=renewal; frequency On renewal; rename Renewal Fee → Renewal Fees; note_2 'Not applicable for Money Saver and Insta OD' encodes Structured_Data excel rows 18–19 Nil Renewal Fee product exclusions (soft coverage; not separate master rows); gst master='Yes' (soft).
- **Loan / Property Document Retrieval Charges** (facility=Both) → `CHG-OC-357` **Property Document Retrieval Charge** — rename; confirmed Fixed amount 800; frequency Each request; charge_unit=Instance; rename Loan / Property Document Retrieval Charges → Property Document Retrieval Charge; facility Both→Any; gst master='Yes' (soft).
- **Cash Transaction Charges** (facility=Both) → `CHG-OC-358` **Cash EMI Payment Charges** — rename; confirmed Fixed amount 150; frequency='Each cash EMI repayment'; charge_unit=Instance; rename Cash Transaction Charges → Cash EMI Payment Charges; note_1 cash EMI at branches; facility Both→Any; gst master='Yes' (soft).
- **Non Maintenance of Mode of Payment Charges (NMMP)** (facility=Both) → `CHG-OC-359` **Non-Maintenance of Mode of Payment (NMMP) Charges** — rename; confirmed Fixed amount 800; frequency Each time; charge_unit=Instance; rename Non Maintenance of Mode of Payment Charges (NMMP) → Non-Maintenance of Mode of Payment (NMMP) Charges; facility Both→Any; gst master='Yes' (soft).
- **Additional Admin Fee for Non-Auto Debit cases** (facility=Both) → `CHG-OC-361` **Administrative Fee for Non-Auto Debit cases** — rename; confirmed Nil→Fixed amount 0; frequency Each instance; rename Additional Admin Fee for Non-Auto Debit cases → Administrative Fee for Non-Auto Debit cases; facility Both→Any; gst master='Yes' (soft).
- **CIBIL report** (facility=Both) → `CHG-OC-364` **CIBIL Report Charge** — rename; confirmed Nil→Fixed amount 0; frequency Each report; rename CIBIL report → CIBIL Report Charge; facility Both→Any; gst master='Yes' (soft).
- **List of Documents** (facility=Both) → `CHG-OC-365` **List of Documents Charge - Duplicate** — rename; confirmed Nil→Fixed amount 0; charged_for_physical_copy=Yes; charged_for_digital_copy=No; charge_unit=Request; rename List of Documents → List of Documents Charge - Duplicate; facility Both→Any; gst master='Yes' (soft).

## 2. Value mismatches

### Conversion Charges (excel row 5) → `CHG-OC-343` Interest Rate Type Switch Fees
- Rename also present: `Conversion Charges` → `Interest Rate Type Switch Fees`
- Source fingerprint: type=Percentage amount='2%' min=None max=None pct_on='Principal outstanding' slab=None-None facility=Term Loan loc='Any' cust=Any
- Master fingerprint: fixed=3000 pct=None min=None max=None slab=None-None pct_base=None facility=Term Loan switch=Fixed→Floating gst=Yes
- **charge_type / Amount_Type + amount**: source='Percentage 2% (=0.02) of Principal outstanding (Semi Fixed / Fixed → Adjustable)' vs master='Fixed Amount 3000 (Fixed→Floating)'
- Note: rename Conversion Charges → Interest Rate Type Switch Fees
- Note: direction Fixed/Semi-Fixed→Adjustable ≈ Fixed→Floating (semantic OK); amount/type wrong
- Note: paired with TL Floating→Fixed ₹3000 twin CHG-OC-344 from excel row 4; OD 0.5% twins CHG-OC-345/346 from excel row 6 are OK
- Note: facility Term Loan kept; gst master='Yes' (soft)

## 3. Missing in master

- **Charges for Prepayment Statement** | facility=Both | product=Mortgage Loans | type=Fixed amount | amount=200 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=Each request | conditions='For physical print out at the branch. GST and other taxes apply over and above.' (Structured_Data excel row 11)
- **Penal Charges for Breach of Construction Timeline** | facility=Term Loan | product=Mortgage Loans | type=Formula | amount=1% annually on principal outstanding or 50000 whichever is lower | min=None max=50000 | pct_on=Principal outstanding | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per year | frequency=Every year after 4 years till construction completed | conditions='Land loan: construction of house must be completed within 4 years from first disbursement. If not completed, penal charges as above (or such other amount as Bank may specify), levied as per Bank discretion, every year after 4 years till construction is completed. GST and other taxes apply over and above.' (Structured_Data excel row 16)
- **Information Utility Charges** | facility=Both | product=Mortgage Loans | type=Fixed amount | amount=300 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Non-individual | loc=Any | charged_per=Per instance | frequency=Each time | conditions='Only for Corporate Cases. GST and other taxes apply over and above.' (Structured_Data excel row 22)
- **CERSAI Charges** | facility=Both | product=Mortgage Loans | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | loc=Any | charged_per=Per instance | frequency=As applicable | conditions='Non-refundable CERSAI charges for loan upto 5L. Live service-charges page slabs used (penal page May 2024 revision showed flat 100). GST and other taxes apply over and above.' (Structured_Data excel row 23)
- **CERSAI Charges** | facility=Both | product=Mortgage Loans | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=500001 loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As applicable | conditions='Non-refundable CERSAI charges for loan above 5L. Live service-charges page slabs used (penal page May 2024 revision showed flat 100). GST and other taxes apply over and above.' (Structured_Data excel row 24)
- **Auction Charges for Repossessed Asset** | facility=Both | product=Mortgage Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='GST and other taxes apply over and above where applicable.' (Structured_Data excel row 25)
- **Charges Incurred in Filing Legal Suit** | facility=Both | product=Mortgage Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='GST and other taxes apply over and above where applicable.' (Structured_Data excel row 26)
- **Charges Incurred in SARFAESI Proceedings** | facility=Both | product=Mortgage Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='GST and other taxes apply over and above where applicable.' (Structured_Data excel row 27)
- **Enforcement Charges** | facility=Both | product=Mortgage Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='GST and other taxes apply over and above where applicable.' (Structured_Data excel row 28)
- **Paper Advertisement Charges** | facility=Both | product=Mortgage Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='GST and other taxes apply over and above where applicable.' (Structured_Data excel row 29)
- **Professional Charges (Advocate Charges/Retainer ship Charges)** | facility=Both | product=Mortgage Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='GST and other taxes apply over and above where applicable.' (Structured_Data excel row 30)
- **Repossession Charges** | facility=Both | product=Mortgage Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='GST and other taxes apply over and above where applicable.' (Structured_Data excel row 31)
- **Security Guard Charges** | facility=Both | product=Mortgage Loans | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='GST and other taxes apply over and above where applicable.' (Structured_Data excel row 32)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `icici bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 25 `Other charges` rows map to a Structured_Data counterpart (24 value-OK matches/renames + 1 value mismatch on Conversion Charges TL Fixed→Floating / Semi Fixed→Adjustable).

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **24 rows** origin=`Offers.processing`. Not in Structured_Data (source is ICICI mortgage/home-loan service & penal schedule — admin / commitment / conversion / bounce / SOA / NOC / penal / renewal / CERSAI / actuals / solvency / Nil service items; no processing-fee rows).
  - Sample ids: CHG-PROC-848, CHG-PROC-849, CHG-PROC-850, CHG-PROC-851, CHG-PROC-852, CHG-PROC-853, CHG-PROC-854, CHG-PROC-855 … CHG-PROC-868, CHG-PROC-869, CHG-PROC-870, CHG-PROC-871
  - Schemes seen: Home Loan ×12; ICICI Money Saver ×12; facilities={'Term Loan': 12, 'Overdraft': 12}; occupations={'Salaried': 12, 'Self-Employed': 12}; rate_type=Floating.
  - Percentage/min/max fingerprints: {(0.02, None, None): 24} (= 2.00% of sanctioned amount, no min/max).
  - CIBIL bands (distinct, not duplicates): 300–599, 600–649, 650–699, 700–749, 750–799, 800–900.
  - Distinct by scheme × facility × occupation × CIBIL band: **0** internal clone groups with multiplicity>1.

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-81` **Overdue charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-82` **Overdue charges** | facility=Overdraft | scheme=ICICI Money Saver | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-67` **Prepayment charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-68` **Prepayment charges** | facility=Overdraft | scheme=ICICI Money Saver | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-218` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | gst=None | note=Prepayment nil (CSV NIL)
- `CHG-PRE-219` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes | note=None
- `CHG-PRE-220` **Prepayment charges** | facility=Overdraft | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | gst=None | note=Prepayment nil (CSV NIL)
- `CHG-PRE-221` **Prepayment charges (takeover)** | facility=Overdraft | rate_type=Fixed | fixed=None | pct=0.03 | pct_base=Amount_Being_Paid | gst=Yes | note=None

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `ICI_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (38 rows).
- Master filter: `Bank_charges` where `bank_key` == `icici bank` (57 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Conversion Charges** renamed/split to **Interest Rate Type Switch Fees**: TL Floating→Fixed ₹3,000 (OK); OD 0.5% Fixed↔Floating (OK); TL Semi Fixed/Fixed→Adjustable **2%** mismatched as Fixed Amount ₹3,000 on `CHG-OC-343`.
- **Duplicate NOC or No Dues Certificate** split into **Duplicate No Objection Certificate Issuance Fees** + **Duplicate No Dues Certificate Issuance Fees** (₹250 each).
- **Renewal Fee** Money Saver / Insta OD Nil (excel rows 18–19) covered as exclusions on `CHG-OC-356` notes (not counted missing).
- Missing: **Charges for Prepayment Statement** ₹200; **Penal Charges for Breach of Construction Timeline** (1% p.a. or ₹50,000 lower); **Information Utility Charges** ₹300; **CERSAI** ₹50 / ₹100 slabs; eight **At actuals** recovery/enforcement charges (Auction through Security Guard).
- No Other-charges orphan/redundant rows vs Structured_Data.
- No `Slab_Table` origin rows for this bank.
- Offers.processing rows share the 2% fee fingerprint but are distinct by scheme (Home Loan TL vs ICICI Money Saver OD), occupation, and CIBIL band (not internal duplicates).
- openpyxl `data_only=True` used for both workbooks.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 2
- **Still missing (bank service charges):** 11
- **Offers.processing extras → not an error (not from Structured_Data):** 24 listed items/groups
- **Prepayment extras → ignored:** 6 listed items/groups
- **Offers.overdue → no action unless noted separately:** 2 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 1

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Charges
- CERSAI Charges

### Still missing — bank service charges (actionable)
- Charges for Prepayment Statement
- Penal Charges for Breach of Construction Timeline
- Information Utility Charges
- Auction Charges for Repossessed Asset
- Charges Incurred in Filing Legal Suit
- Charges Incurred in SARFAESI Proceedings
- Enforcement Charges
- Paper Advertisement Charges
- Professional Charges (Advocate Charges/Retainer ship Charges)
- Repossession Charges
- Security Guard Charges
