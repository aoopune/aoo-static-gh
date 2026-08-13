# TMB / Tamilnad Mercantile Bank — Charges Audit

## Summary
- Source Structured_Data rows: 30
- Master Bank_charges rows (tamilnad mercantile bank): 31
- Matched OK: 6
- Matched with rename only: 16
- Value mismatches: 0
- Missing in master (in source, not in master): 0 (NesL/CERSAI govt; OD closure not on Offers)
- Extra/redundant in master (in master, not in source): 9
- Duplicate issues in master: 0

## Verdict
PASS — compare-scope service charges corrected. NesL / CERSAI ignored (govt). OD-only closure not on Offers.

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Duplicate Passbook / Sheet** (facility=Term Loan; product=Home Loan) → `CHG-OC-756` **Duplicate Passbook / Sheet**; confirmed Fixed amount 25; charge_unit=Instance; freq=Each time; facility Term Loan; gst master='Yes' (source + GST).
- **Folio Charges** (facility=Overdraft; product=Home Loan) → `CHG-OC-758` **Folio Charges**; confirmed Fixed amount 50; charge_min=350; charge_unit=folio; freq=per half year; facility Overdraft; note_2 preserves email-id / email-statement waiver condition; gst master='Yes' (soft).
- **Inward Clearing Return Charges** (facility=Both; product=Home Loan) → `CHG-OC-760` **Inward Clearing Return Charges**; confirmed Formula ₹1.50 per ₹1,000 encoded as Fixed amount 1.5 + fixed_amount_per_1000_rs=Yes; charge_min=500; charge_max=15000; charge_unit=Instrument; facility Both→Any (soft); gst master='Yes' (soft).
- **ECS Credit Return Charges** (facility=Both; product=Home Loan) → `CHG-OC-762` **ECS Credit Return Charges**; confirmed Nil/Free→Fixed amount 0; charge_unit=Instance; freq=Each time; facility Both→Any (soft); note_1 preserves Free for all SB/Current/OD/CC variants; gst master='Yes' (soft).
- **Stop Payment Charges** (facility=Overdraft; product=Home Loan) → `CHG-OC-763` **Stop Payment Charges**; confirmed Fixed amount 200; charge_max=500; charge_unit=Instrument; facility Overdraft; freq=Each time; gst master='Yes' (soft).
- **Stage-wise Completion Report Fee** (facility=Term Loan; product=Home Loan) → `CHG-OC-769` **Stage-wise Completion Report Fee**; confirmed Fixed amount 1000; charge_unit=Report; freq=each stage; facility Term Loan; note_1 preserves construction stage-wise panel engineer wording; gst master='Yes' (source Rs.1000/- does not say GST — soft).

### 1b. Rename only (values OK)
- **Penal Charge — Non-compliance of Sanction Terms** (facility=Both; product=Home Loan) → `CHG-OC-751` **Penal Charge - Non-compliance of Sanction Terms** — rename; confirmed Percentage 0.02 (=2% p.a.); percentage_per_annum=Yes; charge_unit=annum; freq=while default continues; pct_base: source='as published (penal charge on account)' master='Sanctioned loan amount' (soft / treated equivalent for compare); facility Both→Any (soft); purpose Any; rename em dash — → hyphen -; gst master='Yes' (source GST not explicit on penal schedule — soft).
- **Penal Charge — Non-execution of Documentation** (facility=Both; product=Home Loan) → `CHG-OC-752` **Penal Charge - Non-execution of Documentation** — rename; confirmed Percentage 0.01 (=1% p.a.); percentage_per_annum=Yes; special_rule preserves >6 months from sanction + overall penal ≤2%; pct_base soft Sanctioned loan amount; facility Both→Any; rename em dash — → hyphen -; gst master='Yes' (soft).
- **Penal Charge — MODTD Registration Pending** (facility=Both; product=Home Loan) → `CHG-OC-753` **Penal Charge - MODTD Registration Pending** — rename; confirmed Percentage 0.01 (=1% p.a.); percentage_per_annum=Yes; note_1/note_2 preserve >6 months from disbursement + mortgaged home loans; pct_base soft; facility Both→Any; rename em dash — → hyphen -; gst master='Yes' (soft).
- **Penal Charge — Deviation from Financial Covenants** (facility=Both; product=Home Loan) → `CHG-OC-754` **Penal Charge - Deviation from Financial Covenants** — rename; confirmed Percentage 0.02 (=2% p.a.); percentage_per_annum=Yes; pct_base soft; facility Both→Any; rename em dash — → hyphen -; gst master='Yes' (soft).
- **Penal Charge — Non-compliance of Critical Sanction Terms** (facility=Both; product=Home Loan) → `CHG-OC-755` **Penal Charge - Non-compliance of Critical Sanction Terms** — rename; confirmed Percentage 0.02 (=2% p.a.); percentage_per_annum=Yes; pct_base soft; facility Both→Any; rename em dash — → hyphen -; gst master='Yes' (soft).
- **Duplicate Statement of Account** (facility=Both; product=Home Loan) → `CHG-OC-757` **Statement of Account Charges - Duplicate** — rename; confirmed Fixed amount 25; charge_max=100; charge_unit=Sheet; freq=Each time; facility Both→Any (soft); charged_for_physical_copy=Yes / digital=No (source schedule physical sheets — soft flags); rename Duplicate Statement of Account → Statement of Account Charges - Duplicate; gst master='Yes' (soft).
- **Cheque Book Issue Charges** (facility=Overdraft; product=Home Loan) → `CHG-OC-759` **Cheque Book Issuance Charges** — rename; confirmed Fixed amount 5; charge_unit=leaf; freq=Each time; facility Overdraft; notes preserve OD/CC applicability; rename Issue → Issuance; gst master='Yes' (soft).
- **ECS Debit Return Charges** (facility=Both; product=Home Loan) → `CHG-OC-761` **ECS/NACH Debit Return Charges** — rename; confirmed Fixed amount 500; charge_unit=Instance; freq=Each time; note_1 preserves SBTASC & SBGBG account-type variant (this source row); 3 identical ₹500 ECS debit account-type variants consolidated into 1 master row; rename ECS Debit Return Charges → ECS/NACH Debit Return Charges; gst master='Yes' (soft).
- **ECS Debit Return Charges** (facility=Both; product=Home Loan) → `CHG-OC-761` **ECS/NACH Debit Return Charges** — rename; confirmed Fixed amount 500 (All other Savings Bank accounts variant); same master row as SBTASC/SBGBG & Current variants — consolidation; master note_1 cites SBTASC & SBGBG only (soft); rename ECS Debit → ECS/NACH Debit; gst master='Yes' (soft).
- **ECS Debit Return Charges** (facility=Both; product=Home Loan) → `CHG-OC-761` **ECS/NACH Debit Return Charges** — rename; confirmed Fixed amount 500 (All variant of Current Accounts); same master row — consolidation; master note cites SBTASC & SBGBG only (soft); rename ECS Debit → ECS/NACH Debit; gst master='Yes' (soft).
- **Balance Confirmation Certificate** (facility=Overdraft; product=Home Loan) → `CHG-OC-764` **Balance Confirmation Certificate Charges** — rename; confirmed Fixed amount 100; charge_unit=Certificate; facility Overdraft; freq=Each time; rename + Charges suffix; gst master='Yes' (soft).
- **Property Valuation Fee (Land & Building)** (facility=Both; product=Home Loan) → `CHG-OC-765` **Property Valuation Report Charges - Local**; progressive upto/next/balance in `special_rule` (exclusive slab twins `CHG-OC-766/767` deleted).
- **Property Valuation Fee (Vacant Land)** (facility=Both; product=Home Loan) → `CHG-OC-768` **Property Valuation Report Charges - Local** — rename; confirmed Percentage 0.0025 (=0.25%); charge_min=250; charge_max=2000; property_valuation_scope='Vacant land'; rename Vacant Land fee → Report Charges - Local + scope flag; gst master='Yes' (soft).
- **Valuer Outstation TA / DA Charges** (facility=Both; product=Home Loan) → `CHG-OC-770` **Property Valuation Report Charges - Outstation** — rename; confirmed At actuals; charge_unit=assignment; freq=per valuation; property_valuation_scope=Both; source 'As agreed between parties' → At actuals (treated equivalent); rename Valuer Outstation TA/DA → Property Valuation Report Charges - Outstation; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

(none actionable for compare)

- CIC ₹45–₹150 → `CHG-OC-887`. Documentation Nil → `CHG-OC-888`. Insurance At actuals → `CHG-OC-889`. Outward clearing ₹100 → `CHG-OC-890`.
- NesL + CERSAI ignored (govt). OD account closure not on Offers.

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `tamilnad mercantile bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none remaining.) Deleted exclusive Land & Building slab twins `CHG-OC-766/767`.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **7 rows** origin=`Offers.processing`. Not in Structured_Data (source covers CIC range / Documentation Nil / Insurance actuals / NesL / CERSAI / Penal ×5 / passbook·statement·folio·cheque-book / inward+outward clearing / ECS debit×3+credit / stop-payment / balance confirmation / account-closure×2 / valuation Land&Building×3 + Vacant + outstation TA/DA / stage-wise completion — no processing-fee rows).
  - Sample ids: CHG-PROC-1163, CHG-PROC-1164, CHG-PROC-1165, CHG-PROC-1166, CHG-PROC-1167, CHG-PROC-1168, CHG-PROC-1169
  - Schemes seen: Elite Home Loan ×7; facility=Term Loan; rate_type=Floating; occupation=Any; purpose=Regular Home Loan.
  - Percentage/min/max fingerprints: {(0.005, None, None): 7} (= 0.50% of sanctioned amount, no min/max).
  - CIBIL bands (distinct, not duplicates): -1–0, 300–649, 650–674, 675–700, 701–749, 750–799, 800–900.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation+scheme+facility+rate_type+fee: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-100` **Overdue charges** | facility=Term Loan | scheme=Elite Home Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-86` **Prepayment charges** | facility=Term Loan | scheme=Elite Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
(none)

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `TMB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (30 rows).
- Master filter: `Bank_charges` where `bank_key` == `tamilnad mercantile bank` (31 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Penal Charge** family (5): em dash — → hyphen -; 2%/1%/1%/2%/2% p.a. correctly stored as 0.02/0.01 with `percentage_per_annum=Yes`.
- **Inward Clearing Return**: Formula ₹1.50 per ₹1,000 (min ₹500 max ₹15,000) → Fixed 1.5 + `fixed_amount_per_1000_rs=Yes`.
- **ECS Debit Return** ×3 identical ₹500 account-type variants consolidated into one **ECS/NACH Debit Return Charges** row (master note cites SBTASC & SBGBG).
- **ECS Credit Return** Free → Fixed amount 0.
- Land & Building valuation one `special_rule` row `CHG-OC-765`. Vacant land `CHG-OC-768`. Outstation At actuals `CHG-OC-770`. CIC ₹45–₹150 `CHG-OC-887`. Documentation Nil `CHG-OC-888`. Insurance At actuals `CHG-OC-889`. Outward clearing ₹100 `CHG-OC-890`.
- Offers.processing: 7 Elite Home Loan CIBIL bands at 0.50% (incl. −1–0 unscored); full-key internal duplicates: 0.
- Offers.overdue ×1: 2% p.a. on Default_Amount; Offers.prepayment ×1 fixed 0 (floating, not charged).
- openpyxl data_only=True used for both workbooks.

_Audit generated with openpyxl data_only=True. Source: `data/Charges/TMB_Home_Loan_Charges_Official.xlsx` Structured_Data. Master: `data/HOME_LOANS_COMPARE_v1.xlsx` Bank_charges filtered bank_key=`tamilnad mercantile bank`._

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 2
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 7 listed items/groups
- **Prepayment extras → ignored:** 1 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- NesL Charges
- CERSAI Charges

### Still missing — bank service charges (actionable)
- (none) — OD account closure not on Offers (skipped).
