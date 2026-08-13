# YES / Yes Bank — Charges Audit

## Summary
- Source Structured_Data rows: 25
- Master Bank_charges rows (yes bank): 36
- Matched OK: 4
- Matched with rename only: 20
- Value mismatches: 0
- Missing in master (in source, not in master): 0 (equitable mortgage / stamp duty govt)
- Extra/redundant in master (in master, not in source): 11
- Duplicate issues in master: 0

## Verdict
PASS — compare-scope service charges corrected. Equitable mortgage / stamp duty ignored (govt). Stamp-paper ₹125 is the bank handling fee (added).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **EMI Cycle Date Change Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-824` **EMI Cycle Date Change Charge** (facility=Term Loan); confirmed Nil→Fixed amount 0; charge_unit=change; freq=Per change; gst master='Yes' (source unspecified — soft).
- **Cheque Bounce / Return Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-832` **Cheque Bounce / Return Charge** (facility=Term Loan); confirmed Fixed amount 750; charge_unit=presentation; freq=Per presentation; gst master='Yes' (source unspecified — soft).
- **Foreclosure Statement Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-895` **Foreclosure Statement Charge**; confirmed Fixed amount 500; charge_unit=Request; freq=Each request; when_it_matters=After offer; gst master='Yes' (soft).
- **Stamp Paper / E-Stamp Paper Service Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-897` **Stamp Paper / E-Stamp Paper Service Charge**; confirmed Fixed amount 125; gst_applicable=No; note Inclusive of GST; when_it_matters=Before offer; bank handling fee (not statutory stamp duty).

### 1b. Rename only (values OK)
- **Repayment Mode Swap Charge (SI to NACH)** (facility=Term Loan; product=Home Loan) → `CHG-OC-814` **Repayment Mode Swap Charge** (facility=Term Loan) — rename; confirmed Fixed amount 500; charge_unit=transaction; freq=Per transaction; variant SI→NACH preserved in note_1; rename drops parenthetical variant from charge_name; gst master='Yes' (soft).
- **Repayment Mode Swap Charge (NACH to New Bank)** (facility=Term Loan; product=Home Loan) → `CHG-OC-815` **Repayment Mode Swap Charge** (facility=Term Loan) — rename; confirmed Fixed amount 500; note_1='NACH swap to new bank'; rename drops parenthetical variant; gst master='Yes' (soft).
- **Repayment Mode Swap Charge (NACH to SI)** (facility=Term Loan; product=Home Loan) → `CHG-OC-816` **Repayment Mode Swap Charge** (facility=Term Loan) — rename; confirmed Nil→Fixed amount 0; note_1='NACH to Standing Instruction'; rename drops parenthetical variant; gst master='Yes' (soft).
- **Loan Cancellation / Re-booking Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-817` **Loan Cancellation / Re-booking Charges** (facility=Term Loan) — rename; confirmed Fixed amount 2000; charge_unit=cancellation/re-booking; freq=Per cancellation/re-booking; note_1 preserves interim-period interest wording (source Conditions truncated trailing clause — soft); rename Charge→Charges; gst master='Yes' (soft).
- **Repayment / Amortization Schedule Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-818` **Amortisation Schedule Issuance Charges** (facility=Term Loan) — rename; confirmed Fixed amount 500; charged_for_physical_copy=Yes; charged_for_digital_copy=No; note_1='Physical mode or via Branch'; rename Amortization→Amortisation + Issuance Charges; gst master='Yes' (soft).
- **Repayment / Amortization Schedule Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-819` **Amortisation Schedule Issuance Charges** (facility=Term Loan) — rename; confirmed Nil→Fixed amount 0; charged_for_physical_copy=No; charged_for_digital_copy=Yes; note_1='On registered e-mail id'; rename as CHG-OC-818; gst master='Yes' (soft).
- **Duplicate NOC / No Due Certificate Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-820` **Duplicate NOC / No Due Certificate Charge** (facility=Term Loan); confirmed Fixed amount 500; one published ₹500 (No Due twin `CHG-OC-821` deleted).
- **Loan Account Statement Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-822` **Statement of Account Charges - Duplicate** (facility=Any) — rename; confirmed Fixed amount 500; charged_for_physical_copy=Yes; charged_for_digital_copy=No; charge_unit=Statement; facility Term Loan→Any (soft); rename Loan Account Statement Charge → Statement of Account Charges - Duplicate; gst master='Yes' (soft).
- **Loan Account Statement Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-896` **Statement of Account Charges - Duplicate** (facility=Any) — rename; confirmed Nil→Fixed amount 0; charged_for_physical_copy=No; charged_for_digital_copy=Yes; note_1='On registered e-mail id'; charge_group_id=`CHG-OC-822`; gst master='Yes' (soft).
- **Document Retrieval Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-823` **Property Document Retrieval Charge** (facility=Any) — rename; confirmed Fixed amount 750; charge_unit=Instance; freq=Each time; facility Term Loan→Any (soft); rename Document Retrieval Charge → Property Document Retrieval Charge; gst master='Yes' (soft).
- **Duplicate List of Documents (LOD) Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-825` **List of Documents Charge - Duplicate** (facility=Any) — rename; confirmed Fixed amount 750; charge_unit=Request; no physical/digital flags (source has no channel); facility Term Loan→Any (soft); rename Duplicate List of Documents (LOD) Charge → List of Documents Charge - Duplicate; gst master='Yes' (soft).
- **Legal / Incidental / Repossession / Collection Charges** (facility=Term Loan; product=Home Loan) → `CHG-OC-894` **Legal / Incidental / Repossession / Collection Charges**; confirmed At actuals; when_it_matters=After offer; gst master='Yes' (soft).
- **Rate Switch / Conversion (Floating to Fixed)** (facility=Term Loan; product=Home Loan) → `CHG-OC-826` **Interest Rate Type Switch Fees** (facility=Term Loan) — rename; confirmed Percentage 0.005 (=0.50%); pct_base: source='Loan amount outstanding' master='Outstanding loan amount' (treated equivalent); interest_rate_type_switch Floating→Fixed; note_1 preserves permitted-by-bank wording; charge_unit=Switch; rename Rate Switch / Conversion (…) → Interest Rate Type Switch Fees; gst master='Yes' (soft).
- **Rate Switch / Conversion (Fixed to Floating)** (facility=Term Loan; product=Home Loan) → `CHG-OC-827` **Interest Rate Type Switch Fees** (facility=Term Loan) — rename; confirmed Percentage 0.01 (=1%); pct_base Outstanding loan amount; switch Fixed→Floating; note_1 preserves permitted-by-bank wording; rename → Interest Rate Type Switch Fees; gst master='Yes' (soft).
- **Rate Switch / Conversion (Higher Floating to Lower Floating)** (facility=Term Loan; product=Home Loan) → `CHG-OC-828` **Interest Rate Repricing Fees** (facility=Term Loan) — rename; confirmed Percentage 0.005 (=0.50%); pct_base Outstanding loan amount; repricing Floating Higher→Lower; source Conditions 'Only if permitted…' not mirrored on repricing rows (soft); rename → Interest Rate Repricing Fees; gst master='Yes' (soft).
- **Rate Switch / Conversion (Higher Fixed to Lower Fixed)** (facility=Term Loan; product=Home Loan) → `CHG-OC-829` **Interest Rate Repricing Fees** (facility=Term Loan) — rename; confirmed Percentage 0.01 (=1%); pct_base Outstanding loan amount; repricing Fixed Higher→Lower; rename → Interest Rate Repricing Fees; gst master='Yes' (soft).
- **Property Swapping / Part Property Release Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-830` **Property Swapping / Part Property Release Charges** (facility=Term Loan) — rename; confirmed Percentage 0.001 (=0.10%) + charge_min=10000; pct_base Outstanding loan amount; charge_unit=swap/release; rename Charge→Charges; gst master='Yes' (soft).
- **Non-Maintenance of Mode of Payment (NMMP) Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-831` **Non-Maintenance of Mode of Payment (NMMP) Charges** (facility=Term Loan) — rename; confirmed Fixed amount 750; freq=When mode of payment is not maintained; rename Charge→Charges; gst master='Yes' (soft).
- **PDD Non-Submission / Material Terms Non-Compliance Charge** (facility=Term Loan; product=Home Loan) → `CHG-OC-833` **Post Disbursement Documentation Non-Submission / Material Terms Non-Compliance Charge** (facility=Term Loan) — rename; confirmed Fixed amount 2000; charge_unit=month; monthly until PDDs submitted; when_it_matters=After offer; note_1/note_2 preserve title-document satisfaction + discrepancies-not-submitted wording; rename PDD→Post Disbursement Documentation; gst master='Yes' (soft).
- **Benchmark Switch Charge (Base Rate/MCLR to External Benchmark)** (facility=Term Loan; product=Home Loan) → `CHG-OC-834` **Interest Rate Benchmark Switch Fees** (facility=Term Loan) — rename; confirmed Nil→Fixed amount 0; benchmark_switch Base Rate / MCLR → External Benchmark Rate; freq=Per request; source contact email yestouch@yesbank.in not mirrored (soft); rename → Interest Rate Benchmark Switch Fees; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

(none actionable for compare)

- Legal/Incidental/Repossession At actuals → `CHG-OC-894`. Foreclosure Statement ₹500 → `CHG-OC-895`. SOA email Nil → `CHG-OC-896`. Stamp-paper service ₹125 → `CHG-OC-897`.
- Equitable mortgage / stamp duty At actuals ignored (govt).

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `yes bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none remaining.) Deleted No Due twin `CHG-OC-821`.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **6 rows** origin=`Offers.processing`. Not in Structured_Data (source covers statutory/stamp-paper, repayment-mode swaps, cancellation, amortisation/SOA/foreclosure statements, NOC/No Due, document retrieval/LOD, EMI cycle, legal-at-actuals, rate switch/repricing/benchmark, property swap, NMMP, cheque bounce, PDD — no processing-fee rows).
  - Sample ids: CHG-PROC-1151, CHG-PROC-1152, CHG-PROC-1153, CHG-PROC-1154, CHG-PROC-1155, CHG-PROC-1156
  - Schemes seen: Home Loan ×6; facility=Term Loan; rate_type=Floating; purpose=Regular Home Loan; occupation=Any.
  - Percentage/min/max fingerprints: {(0.01, 10000, None): 6} (= 1.00% of sanctioned amount, min ₹10,000).
  - CIBIL bands (distinct, not duplicates): 800–900, 750–799, 700–749, 650–699, 600–649, 300–599.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation+scheme+facility+rate_type+fee: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-98` **Overdue charges** | facility=Term Loan | scheme=Home Loan | purpose=Regular Home Loan | rate_type=Floating | pct=None | percentage_per_annum=Yes | pct_base=Default_Amount | special_rule=As_Per_ROI

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-84` **Prepayment charges** | facility=Term Loan | scheme=Home Loan | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-242` **Prepayment charges** | facility=Term Loan | purpose=Regular Home Loan | rate_type=Fixed | fixed=0 | note=Prepayment nil (CSV NIL)
- `CHG-PRE-243` **Prepayment charges (takeover)** | facility=Term Loan | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes
- `CHG-PRE-244` **Prepayment charges** | facility=Overdraft | purpose=Regular Home Loan | rate_type=Fixed | fixed=0 | note=Prepayment nil (CSV NIL)
- `CHG-PRE-245` **Prepayment charges (takeover)** | facility=Overdraft | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `YES_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (25 rows).
- Master filter: `Bank_charges` where `bank_key` == `yes bank` (36 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Repayment Mode Swap** three variants (SI→NACH ₹500; NACH→New Bank ₹500; NACH→SI Nil→0) all present under shared name with note_1 distinguishing.
- **Duplicate NOC / No Due** one ₹500 row `CHG-OC-820`. Twin `CHG-OC-821` deleted.
- **Loan Account Statement** physical ₹500 `CHG-OC-822` + email Nil `CHG-OC-896`. Amortisation physical ₹500 `CHG-OC-818` + email Nil `CHG-OC-819` with matching channel flags. LOD `CHG-OC-825` unscoped by channel.
- Rate switches: Floating↔Fixed type-switch 0.50%/1.00%; Higher→Lower Floating/Fixed repricing 0.50%/1.00%; Benchmark Base Rate/MCLR→EBR Nil→0.
- **Property Swapping / Part Property Release** 0.10% of outstanding min ₹10,000 confirmed. PDD ₹2000/month After offer. Legal/repossession At actuals `CHG-OC-894`. Foreclosure Statement ₹500 `CHG-OC-895`. Stamp-paper service ₹125 incl. GST `CHG-OC-897`.
- Equitable mortgage / stamp duty At actuals ignored (govt).
- Other-charges extras: **0**. No `Slab_Table` origin rows.
- Offers.processing 6 (1.00% min ₹10,000; Home Loan ×6 CIBIL bands; 0 full-key clones). Offers.overdue ×1 As_Per_ROI on Default_Amount. Offers.prepayment ×1 floating fixed 0. CSV.fixed_prepay ×4 (TL/OD Fixed nil + takeover 2% Amount_Being_Paid).
- openpyxl data_only=True used for both workbooks.

_Audit generated with openpyxl data_only=True. Source: `data/Charges/YES_Home_Loan_Charges_Official.xlsx` Structured_Data. Master: `data/HOME_LOANS_COMPARE_v1.xlsx` Bank_charges filtered bank_key=`yes bank`._

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 1
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 6 listed items/groups
- **Prepayment extras → ignored:** 5 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Equitable Mortgage / Stamp Duty / Other Statutory Charges

### Still missing — bank service charges (actionable)
- (none)
