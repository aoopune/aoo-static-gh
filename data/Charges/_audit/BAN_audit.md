# BAN / Bandhan Bank — Charges Audit

## Summary
- Source Structured_Data rows: 34
- Master Bank_charges rows (bandhan bank): 23
- Matched OK: 2
- Matched with rename only: 8
- Value mismatches: 3
- Missing in master (in source, not in master): 21
- Extra/redundant in master (in master, not in source): 10
- Duplicate issues in master: 3

## Verdict
FAIL — 3 value mismatch(es), 21 source charge(s) missing in master, 10 extra/redundant master row(s), 3 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Cheque/SI/NACH Bounce Charge** (facility=Both) → `CHG-OC-29` **Cheque/SI/NACH Bounce Charge** (facility=Term Loan); confirmed Fixed amount 500; gst_applicable Yes aligns with source GST extra. Note: master facility narrowed to Term Loan (source Both).
- **NPA Administration Charge** (facility=Both) → `CHG-OC-39` **NPA Administration Charge** (facility=Term Loan); confirmed Percentage 2% p.a. (0.02), pct_on=Outstanding loan amount; percentage_per_annum=Yes. Note: master facility narrowed to Term Loan (source Both).

### 1b. Rename only (values OK)
- **ROI Reset Administrative Charge** (facility=Both) → `CHG-OC-28` **Interest Rate Repricing Fees** (facility=Term Loan) — rename; confirmed Fixed amount 3000. Master encodes Floating Higher→Lower repricing fields; source is customer-initiated ROI reset. Facility narrowed Both→Term Loan.
- **Statement of Account** (facility=Both) → `CHG-OC-30` **Statement of Account Charges - Duplicate** (facility=Any) — rename; confirmed Fixed amount 500; charged_for_physical_copy=Yes / digital=No matches branch physical-copy condition.
- **Technical Inspection Charge — Local** (facility=Both) → `CHG-OC-32` **Technical Inspection Charges — Local** (facility=Term Loan) — rename; confirmed Fixed amount 250 per visit; frequency matches subsequent phase-wise inspection. Facility narrowed Both→Term Loan.
- **Technical Inspection Charge — Outstation** (facility=Both) → `CHG-OC-33` **Technical Inspection Charges — Outstation** (facility=Term Loan) — rename; confirmed Fixed amount 350 per visit. Facility narrowed Both→Term Loan.
- **Search Report and TCC Charge** (facility=Both) → `CHG-OC-34` **Title Search Report Fees** (facility=Any) — rename; confirmed At actuals with charge_max=5000; note_1 'Includes Total Cost of Credit Charges' maps TCC.
- **Copy of Property Documents** (facility=Both) → `CHG-OC-35` **Property Document Retrieval Charge** (facility=Term Loan) — rename; confirmed Fixed amount 500. Facility narrowed Both→Term Loan.
- **Docket Release plus Account Closure Charge** (facility=Both) → `CHG-OC-37` **Property Document Retrieval Charge** (facility=Any) — rename; confirmed Fixed amount 250; note_1 'Includes Account Closure Charges' supports docket-release/account-closure semantics despite shared master name with CHG-OC-35.
- **List of Documents / Foreclosure Statement** (facility=Both) → `CHG-OC-38` **List of Documents Charge - Duplicate** (facility=Any) — rename; confirmed Fixed amount 1000; physical=Yes.

## 2. Value mismatches

### Administrative Fee (facility=Both) → `CHG-OC-27` Administrative Charges
- Rename also present: `Administrative Fee` → `Administrative Charges`
- Source fingerprint: type=Percentage amount='0.25% to 2.00%' min=None max=None pct_on='Scheme-dependent (not further specified)'
- Master fingerprint: fixed=None pct=0.0025 min=None max=None pct_base='Sanctioned loan amount' facility=Any
- **percentage**: source='0.25% to 2.00% (scheme-dependent range)' vs master=0.0025
- **percentage_base_value / Percentage_Calculated_On**: source='Scheme-dependent (not further specified)' vs master='Sanctioned loan amount'

### Valuation Report Charge (facility=Both) → `CHG-OC-31` Property Valuation Report Charges
- Rename also present: `Valuation Report Charge` → `Property Valuation Report Charges`
- Source fingerprint: type=Fixed amount amount='Upto 5000' min=None max=5000
- Master fingerprint: fixed=5000 pct=None min=None max=None facility=Term Loan
- **amount_shape**: source='Upto 5000 (ceiling via Max_Amount=5000; not a flat fixed fee)' vs master='fixed_amount=5000 (flat Fixed Amount); charge_max=null'
- **facility_type**: source='Both' vs master='Term Loan'

### Field Investigation Charge (facility=Both) → `CHG-OC-36` Field Investigation Charge
- Source fingerprint: type=Fixed amount amount='Up to 500' min=None max=500
- Master fingerprint: fixed=500 pct=None min=None max=None note_1='Depends on place of visit and loan amount.'
- **amount_shape**: source='Up to 500 (ceiling via Max_Amount=500; depends on place of visit and loan amount)' vs master='fixed_amount=500 (flat Fixed Amount); charge_max=null'
- **facility_type**: source='Both' vs master='Term Loan'

## 3. Missing in master

- **CERSAI Charge — Creation** | facility=Both | product=Home Loan and Loan Against Property | type=Fixed amount amount=100 per account; freq=At charge creation/registration/modification; GST extra (Structured_Data excel row 6)
- **CERSAI Charge — Satisfaction** | facility=Both | product=Home Loan and Loan Against Property | type=Nil amount=Nil; freq=At satisfaction/release of charge (Structured_Data excel row 7)
- **Mortgage Registration and Release Charge** | facility=Both | product=Home Loan and Loan Against Property | type=At actuals; amount=On actual as per the prevalent guidelines of the state (Structured_Data excel row 12)
- **Legal/Miscellaneous Charges** | facility=Both | product=Home Loan and Loan Against Property | type=At actuals amount=At Actuals; recovery/legal/SARFAESI/etc. (Structured_Data excel row 14)
- **Stamp Duty and Statutory Charges** | facility=Both | product=Home Loan and Loan Against Property | type=At actuals; as per applicable laws of the State (Structured_Data excel row 15)
- **Insurance Premium** | facility=Both | product=Home Loan and Loan Against Property | type=At actuals; obtaining insurance from Bandhan Bank is not mandatory (Structured_Data excel row 20)
- **Document Retrieval Charge (Photocopy)** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount=Nil (Structured_Data excel row 21)
- **Statement of Account** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount=Nil (micro schedule; distinct from HL/LAP ₹500 SOA) (Structured_Data excel row 22)
- **Duplicate NOC** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount=Nil (Structured_Data excel row 23)
- **All Other NOC** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount='Not applicable' (Structured_Data excel row 24)
- **Stamp Duties** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=At actuals amount=On Actual (Structured_Data excel row 25)
- **Loan Cancellation** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil; interim interest payable; PF/Stamp Duty/documentation retained (Structured_Data excel row 26)
- **Change of Address** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount=Nil (Structured_Data excel row 27)
- **Agreement Copy** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount=Nil (Structured_Data excel row 28)
- **Legal and Other Recovery Charges** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=At actuals amount=On Actual (Structured_Data excel row 29)
- **PDD Collection Charge** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount=Nil (Structured_Data excel row 30)
- **Valuation Charge** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount=Nil (Structured_Data excel row 31)
- **CERSAI Charge** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=At actuals amount=On Actual (Structured_Data excel row 32)
- **Provisional / Final IT Certificate** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount=Nil (Structured_Data excel row 33)
- **Equitable Mortgage Charge Creation** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=At actuals amount=On Actual-As Applicable in states (Structured_Data excel row 34)
- **Fore Closure Statement** | facility=Term Loan | product=Micro Home Loan / Suawas Saral / Suniwas Home Loan | type=Nil amount=Nil (document fee, not foreclosure penalty) (Structured_Data excel row 35)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `bandhan bank` with no Structured_Data counterpart. Processing / overdue / prepayment rows come from Offers/CSV origins and were **not** loaded into Structured_Data.

- `CHG-PROC-800` **Processing fee** (origin=Offers.processing, excel row 1635) — percentage=0.01; scheme=Suraksha Home Loan; CIBIL 800–900 — not in Structured_Data
- `CHG-PROC-801` **Processing fee** (origin=Offers.processing, excel row 1636) — percentage=0.01; CIBIL 750–799 — not in Structured_Data
- `CHG-PROC-802` **Processing fee** (origin=Offers.processing, excel row 1637) — percentage=0.01; CIBIL 700–749 — not in Structured_Data
- `CHG-PROC-803` **Processing fee** (origin=Offers.processing, excel row 1638) — percentage=0.01; CIBIL 650–699 — not in Structured_Data
- `CHG-PROC-804` **Processing fee** (origin=Offers.processing, excel row 1639) — percentage=0.01; CIBIL 600–649 — not in Structured_Data
- `CHG-PROC-805` **Processing fee** (origin=Offers.processing, excel row 1640) — percentage=0.01; CIBIL 300–599 — not in Structured_Data
- `CHG-OD-72` **Overdue charges** (origin=Offers.overdue, excel row 2090) — percentage=0.02 p.a. on Default_Amount; distinct from Structured_Data NPA Administration Charge (outstanding). Not in Structured_Data
- `CHG-PRE-58` **Prepayment charges** (origin=Offers.prepayment, excel row 2232) — fixed_amount=0; note Prepayment not charged — not in Structured_Data
- `CHG-PRE-198` **Prepayment charges (takeover)** (origin=CSV.fixed_prepay, excel row 2289) — percentage=0.04; loan age <12 months; Fixed rate takeover — not in Structured_Data
- `CHG-PRE-199` **Prepayment charges (takeover)** (origin=CSV.fixed_prepay, excel row 2290) — percentage=0.02; loan age ≥12 months; Fixed rate takeover — not in Structured_Data

## 5. Notes

- Source of truth: `BAN_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (34 rows). Two products: HL/LAP schedule (rows 2–20) and Micro Home Loan schedule (rows 21–35).
- Master filter: `Bank_charges` where `bank_key` == `bandhan bank` (23 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Upto / Up to** ceilings in source (Valuation, Field Investigation) were coded in master as flat `fixed_amount` — treated as value mismatches.
- **Administrative Fee** source range 0.25%–2.00% collapsed in master to a single 0.25% (`0.0025`) on sanctioned amount.
- Several HL/LAP source rows have `Facility_Type=Both` while matched master OC rows use `Term Loan` or `Any`; amount-matched rows were not failed solely for Both→Term Loan narrowing, except where already in the mismatch set.
- Entire Micro Home Loan schedule is absent from master Bank_charges.
- Duplicate naming: `Property Document Retrieval Charge` covers both property-document copy (₹500) and docket-release/account-closure (₹250).
- openpyxl `data_only=True` used for both workbooks.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 6
- **Still missing (bank service charges):** 15
- **Offers.processing extras → not an error (not from Structured_Data):** 6 listed items/groups
- **Prepayment extras → ignored:** 3 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 3

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Charge — Creation
- CERSAI Charge — Satisfaction
- Mortgage Registration and Release Charge
- Stamp Duty and Statutory Charges
- CERSAI Charge
- Equitable Mortgage Charge Creation

### Still missing — bank service charges (actionable)
- Legal/Miscellaneous Charges
- Insurance Premium
- Document Retrieval Charge (Photocopy)
- Statement of Account
- Duplicate NOC
- All Other NOC
- Stamp Duties
- Loan Cancellation
- Change of Address
- Agreement Copy
- Legal and Other Recovery Charges
- PDD Collection Charge
- Valuation Charge
- Provisional / Final IT Certificate
- Fore Closure Statement
