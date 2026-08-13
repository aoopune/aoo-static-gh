# IDF / IDFC FIRST Bank — Charges Audit

## Summary
- Source Structured_Data rows: 27
- Master Bank_charges rows (idfc first bank): 27
- Matched OK: 8
- Matched with rename only: 13
- Value mismatches: 0
- Missing in master (in source, not in master): 6
- Extra/redundant in master (in master, not in source): 10
- Duplicate issues in master: 1

## Verdict
FAIL — 0 value mismatch(es), 6 source charge(s) missing in master, 10 extra/redundant master row(s), 1 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **EMI Pick up / Collection Charges** (facility=Term Loan) → `CHG-OC-412` **EMI Pick up / Collection Charges**; confirmed Fixed amount 500; charge_unit=pick up / collection; freq=Each time; facility source=Term Loan master=Any (soft); gst master='Yes' (soft).
- **Cheque / Instrument Swap Charges** (facility=Term Loan) → `CHG-OC-414` **Cheque / Instrument Swap Charges**; confirmed Nil→Fixed amount 0; charge_unit=Swap; freq=Each time; note_1='Per swap'; facility Term Loan→Any; gst master='Yes' (soft).
- **Loan Rescheduling Charges** (facility=Term Loan) → `CHG-OC-416` **Loan Rescheduling Charges**; confirmed Nil→Fixed amount 0; charge_unit=rescheduling; freq=Each time; note_1='Per rescheduling'; facility Term Loan→Any; gst master='Yes' (soft).
- **Repayment Schedule (Soft Copy)** (facility=Term Loan) → `CHG-OC-419` **Repayment Schedule (Soft Copy)**; confirmed Nil→Fixed amount 0; charge_unit=Request; freq=Each time; note_1='Soft copy'; facility Term Loan→Any; gst master='Yes' (soft).
- **Repayment Schedule (Physical Copy)** (facility=Term Loan) → `CHG-OC-420` **Repayment Schedule (Physical Copy)**; confirmed Fixed amount 500; charged_for_physical_copy=Yes; charge_unit=Request; freq=Each time; note_1='Physical copy'; channel source=Branch; facility Term Loan→Any; gst master='Yes' (soft).
- **EMI Bounce Charges** (facility=Term Loan) → `CHG-OC-422` **EMI Bounce Charges**; confirmed Percentage 0.12 (=12%); charge_min=400; charge_max=1000; pct_base=EMI bounced; charge_unit=presentation; freq='Each presentation dishonoured'; facility Term Loan→Any; gst master='Yes' (soft).
- **Technical Bounce Charges (Mandate Rejection)** (facility=Term Loan) → `CHG-OC-423` **Technical Bounce Charges (Mandate Rejection)**; confirmed Percentage 0.12 (=12%); charge_min=400; charge_max=1000; pct_base=EMI bounced; charge_unit=month; freq preserves 3rd consecutive bounce month until mandate registered; notes preserve mandate-rejection wording; facility Term Loan→Any; gst master='Yes' (soft).
- **Cancellation and Rebooking Charges** (facility=Term Loan) → `CHG-OC-424` **Cancellation and Rebooking Charges**; confirmed Formula '0.25% … or Rs.10000 whichever is lower' → Percentage 0.0025 (=0.25%) + charge_max=10000; pct_base=Sanctioned loan amount; charge_unit=cancellation / rebooking; freq=Each time; note_1 preserves 30-day / 1st EMI foreclosure rule; facility Term Loan→Any; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Duplicate No Objection Certificate Issuance Charges** (facility=Term Loan) → `CHG-OC-411` **Duplicate No Objection Certificate Issuance Fees** — rename; confirmed Fixed amount 500; charge_unit=Request; freq=Each time; rename Duplicate No Objection Certificate Issuance Charges → Duplicate No Objection Certificate Issuance Fees; note_1 preserves 'in addition to bank's issued letter'; facility source=Term Loan master=Any (soft); gst master='Yes' (source exclusive of GST — soft).
- **Document Retrieval Charges** (facility=Term Loan) → `CHG-OC-413` **Property Document Retrieval Charge** — rename; confirmed Nil→Fixed amount 0; charge_unit=Instance; freq=Each time; rename Document Retrieval Charges → Property Document Retrieval Charge; facility Term Loan→Any; gst master='Yes' (soft).
- **MCLR to EBR Type Conversion** (facility=Term Loan) → `CHG-OC-415` **Interest Rate Benchmark Switch Fees** — rename; confirmed Nil→Fixed amount 0; charge_unit=Switch; benchmark_switch MCLR→EBR; frequency: source='Each time' master='Per request' (treated equivalent); rename MCLR to EBR Type Conversion → Interest Rate Benchmark Switch Fees; facility Term Loan→Any; gst master='Yes' (soft).
- **List of Documents (Soft Copy)** (facility=Term Loan) → `CHG-OC-418` **List of Documents Charge - Duplicate** — rename; Soft-copy Nil covered by charged_for_digital_copy=No on physical List row (no separate soft master row); paired with excel row 11 Physical ₹500 on same CHG-OC-418; rename List of Documents (Soft Copy) → List of Documents Charge - Duplicate (digital free via flag); facility Term Loan→Any; gst master='Yes' (soft).
- **List of Documents (Physical Copy)** (facility=Term Loan) → `CHG-OC-418` **List of Documents Charge - Duplicate** — rename; confirmed Fixed amount 500; charged_for_physical_copy=Yes; charged_for_digital_copy=No; charge_unit=Request; freq=Each time; rename List of Documents (Physical Copy) → List of Documents Charge - Duplicate; channel source=Branch (physical); facility Term Loan→Any; gst master='Yes' (soft).
- **Statement of Account (Soft Copy)** (facility=Term Loan) → `CHG-OC-421` **Statement of Account Charges - Duplicate** — rename; Soft-copy Nil covered by charged_for_digital_copy=No on physical SOA row (no separate soft master row); paired with excel row 15 Physical ₹500 on same CHG-OC-421; rename Statement of Account (Soft Copy) → Statement of Account Charges - Duplicate (digital free via flag); facility Term Loan→Any; gst master='Yes' (soft).
- **Statement of Account (Physical Copy)** (facility=Term Loan) → `CHG-OC-421` **Statement of Account Charges - Duplicate** — rename; confirmed Fixed amount 500; charged_for_physical_copy=Yes; charged_for_digital_copy=No; charge_unit=Request; freq=Each time; rename Statement of Account (Physical Copy) → Statement of Account Charges - Duplicate; channel source=Branch; facility Term Loan→Any; gst master='Yes' (soft).
- **Switch Fees (Rate Repricing)** (facility=Term Loan) → `CHG-OC-425` **Interest Rate Repricing Fees** — rename; confirmed 'Up to 2%' → Percentage 0.02; pct_base: source='Loan outstanding (principal outstanding)' master='Outstanding loan amount' (treated equivalent); interest_rate_repricing Floating Higher→Lower; charge_unit=Instance; freq: source='Each time' master='Each Repricing' (treated equivalent); rename Switch Fees (Rate Repricing) → Interest Rate Repricing Fees; facility Term Loan→Any; gst master='Yes' (soft).
- **Switch Fee (Floating to Fixed)** (facility=Term Loan) → `CHG-OC-426` **Interest Rate Type Switch Fees** — rename; confirmed Formula '0.1% of principal outstanding or Rs.10000 whichever is lower' → Percentage 0.001 (=0.1%) + charge_max=10000; pct_base: source='Principal outstanding' master='Outstanding principal loan amount' (treated equivalent); interest_rate_type_switch Floating→Fixed; freq='Up to 2 times during loan tenure'; note_1 preserves 3-year lock after float→fixed; rename Switch Fee (Floating to Fixed) → Interest Rate Type Switch Fees; facility Term Loan→Any; gst master='Yes' (soft).
- **Switch Fee (Fixed to Floating)** (facility=Term Loan) → `CHG-OC-427` **Interest Rate Type Switch Fees** — rename; confirmed 'Upto 2%' → Percentage 0.02; pct_base Principal outstanding ≈ Outstanding principal loan amount; interest_rate_type_switch Fixed→Floating; freq='Up to 2 times during loan tenure'; rename Switch Fee (Fixed to Floating) → Interest Rate Type Switch Fees; note_1 also documents hybrid end-of-tenure Nil (covers excel row 26); facility Term Loan→Any; gst master='Yes' (soft).
- **Switch Fee (Higher Fixed to Lower Fixed)** (facility=Term Loan) → `CHG-OC-428` **Interest Rate Repricing Fees** — rename; confirmed 'Upto 1%' → Percentage 0.01; pct_base Principal outstanding ≈ Outstanding principal loan amount; interest_rate_repricing Fixed Higher→Lower; charge_unit=Instance; freq='Each Repricing'; rename Switch Fee (Higher Fixed to Lower Fixed) → Interest Rate Repricing Fees; facility Term Loan→Any; gst master='Yes' (soft).
- **Switch Fee (Hybrid Fixed to Floating at End of Agreed Tenure)** (facility=Term Loan) → `CHG-OC-427` **Interest Rate Type Switch Fees** — rename; Hybrid Fixed→Floating at end of agreed tenure published Nil — encoded as note_1 on Fixed→Floating 2% row (no separate Nil master row); rename Switch Fee (Hybrid Fixed to Floating at End of Agreed Tenure) → Interest Rate Type Switch Fees (Nil via note); paired with excel rows 24/27 on CHG-OC-427; facility Term Loan→Any; gst master='Yes' (soft).
- **Switch Fee (Hybrid Fixed to Floating Before End of Agreed Tenure)** (facility=Term Loan) → `CHG-OC-427` **Interest Rate Type Switch Fees** — rename; confirmed 'Upto 2%' before end of hybrid agreed tenure = same Fixed→Floating 2% as excel row 24; interest_rate_type_switch Fixed→Floating; pct=0.02; pct_base Principal outstanding ≈ Outstanding principal loan amount; rename Switch Fee (Hybrid Fixed to Floating Before End of Agreed Tenure) → Interest Rate Type Switch Fees; facility Term Loan→Any; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

- **Copies of Documents (Soft Copy)** | facility=Term Loan | product=Home Loan | type=Nil | amount=Nil | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | channel=Any | charged_per=Per request | frequency=Each time | conditions='Soft copy. Per request for copies. Charges exclusive of GST unless stated otherwise on page.' (Structured_Data excel row 8)
- **Copies of Documents (Physical Copy)** | facility=Term Loan | product=Home Loan | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | channel=Branch | charged_per=Per request | frequency=Each time | conditions='Physical copy. Per request for copies. Charges exclusive of GST unless stated otherwise on page.' (Structured_Data excel row 9)
- **Stamp Duty and Other Statutory Charges** | facility=Term Loan | product=Home Loan | type=At actuals | amount=As applicable for each state | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | channel=Any | charged_per=As applicable | frequency=As applicable | conditions='As applicable for each state.' (Structured_Data excel row 16)
- **Equitable Mortgage Creation Charges** | facility=Term Loan | product=Home Loan | type=At actuals | amount=As applicable for each state | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | channel=Any | charged_per=As applicable | frequency=As applicable | conditions='As applicable for each state.' (Structured_Data excel row 17)
- **Equitable Mortgage Cancellation Charges** | facility=Term Loan | product=Home Loan | type=At actuals | amount=As applicable for each state | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | channel=Any | charged_per=As applicable | frequency=As applicable | conditions='As applicable for each state.' (Structured_Data excel row 18)
- **Collection Legal Charge** | facility=Term Loan | product=Home Loan | type=At actuals | amount=Charged on actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | channel=Any | charged_per=As incurred | frequency=As incurred | conditions='Levied to cover costs, charges, expenses and other monies expended in connection with recovery of dues from a defaulting customer.' (Structured_Data excel row 28)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `idfc first bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
- `CHG-OC-417` **Statement of Account Charges - Duplicate** | Fixed Amount 500 | charged_for_physical_copy=Yes | charged_for_digital_copy=No | charge_unit=Request | freq=Each time
  - **Redundant duplicate** of mapped `CHG-OC-421` (identical SOA physical ₹500 fingerprint).
  - Position in OC sequence sits where **Copies of Documents (Physical Copy)** ₹500 would be expected, but the name is SOA — not a valid semantic rename for Copies. Copies Soft/Physical remain missing (section 3).
- Mapped Other-charges: **17** of 18 rows map to Structured_Data; **1** redundant twin above.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **5 rows** origin=`Offers.processing`. Not in Structured_Data (source is IDFC FIRST retail home-loan schedule — NOC/EMI pickup/document-copy/switch/bounce/cancellation/statutory; no processing-fee rows).
  - Sample ids: CHG-PROC-975, CHG-PROC-976, CHG-PROC-977, CHG-PROC-978, CHG-PROC-979
  - Schemes seen: Home Loan ×5
  - Fee fingerprint: {(pct, fixed, facility, rate_type): count} = {(0.03, None, 'Term Loan', 'Floating'): 5}
    - 3% of Sanctioned loan amount × Term Loan Floating across all CIBIL bands
  - CIBIL bands (distinct, not duplicates): 600–649, 650–699, 700–749, 750–799, 800–900.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-89` **Overdue charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | fixed=300 | pct=0.12 | percentage_per_annum=Yes | pct_base=Default_Amount | grace_days=7 | note=overdue_whichever_higher=Yes

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-75` **Prepayment charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-228` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | note=Prepayment nil (CSV NIL)
- `CHG-PRE-229` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | note=None

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `IDF_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (27 rows).
- Master filter: `Bank_charges` where `bank_key` == `idfc first bank` (27 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- Nil correctly encoded as Fixed amount 0 (document retrieval, swap, MCLR→EBR, rescheduling, soft repayment schedule).
- Soft/physical document pairs: List and SOA soft-Nil covered via `charged_for_digital_copy=No` on physical ₹500 rows; Repayment Schedule keeps separate Soft (0) + Physical (500) rows.
- **Copies of Documents** Soft Nil + Physical ₹500 have no master counterpart (OC-417 is a mis-positioned SOA duplicate, not a Copies rename).
- Switch/repricing schedule: Rate Repricing ≤2%, Floating→Fixed 0.1%/₹10k cap, Fixed→Floating ≤2%, Higher Fixed→Lower Fixed ≤1%, Hybrid end-tenure Nil (note), Hybrid before-end ≤2% (same Fixed→Floating row).
- Statutory / equitable mortgage / collection-legal **At actuals** rows absent from Bank_charges (often live only on Government_charges or omitted).
- No `Slab_Table` origin rows for this bank.
- Offers.processing CIBIL bands share the same 3% fingerprint but are distinct score keys (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 3
- **Still missing (bank service charges):** 3
- **Offers.processing extras → not an error (not from Structured_Data):** 5 listed items/groups
- **Prepayment extras → ignored:** 3 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 1
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Stamp Duty and Other Statutory Charges
- Equitable Mortgage Creation Charges
- Equitable Mortgage Cancellation Charges

### Still missing — bank service charges (actionable)
- Copies of Documents (Soft Copy)
- Copies of Documents (Physical Copy)
- Collection Legal Charge
