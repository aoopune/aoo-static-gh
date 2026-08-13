# RBL / RBL Bank — Charges Audit

## Summary
- Source Structured_Data rows: 16
- Master Bank_charges rows (rbl bank): 31
- Matched OK: 5
- Matched with rename only: 12
- Value mismatches: 0
- Missing in master (in source, not in master): 0 (CERSAI + stamp/mortgage govt)
- Extra/redundant in master (in master, not in source): 16
- Duplicate issues in master: 0

## Verdict
PASS — compare-scope service charges corrected. CERSAI + stamp/MOD/MOE ignored (govt).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Repayment Mode Swap Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-687` **Repayment Mode Swap Charge** (facility=Term Loan); confirmed Fixed amount 500; charge_unit=Instance; frequency Each time; gst_applicable: source notes Applicable GST and other statutory taxes over and above; master='Yes' (not counted as mismatch).
- **Duplicate Interest Certificate Issuance Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-689` **Duplicate Interest Certificate Issuance Charge** (facility=Term Loan); confirmed Fixed amount 250; charge_unit=Instance; frequency Each time; gst master='Yes' (soft).
- **CIBIL Report Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-692` **CIBIL Report Charge** (facility=Term Loan); confirmed Fixed amount 100; charge_unit=Report; frequency Each time; note: source Conditions say levied only upon customer request (not mirrored as separate note field — soft); gst master='Yes' (soft).
- **Field Collection Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-700` **Field Collection Charge** (facility=Term Loan); confirmed Fixed amount 500; charge_unit=Instance; frequency Each time; gst master='Yes' (soft).
- **Non-Collection of Property Documents Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-701` **Non-Collection of Property Documents Charge** (facility=Term Loan); confirmed Fixed amount 500; charge_unit=month; frequency monthly until documents collected; note_1/note_2 preserve post-60-days-from-closure and levied-till-collection language; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Cheque / ECS / NACH Dishonour Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-688` **Cheque/ECS/NACH Debit Return / Dishonour Charges** — rename; confirmed Fixed amount 500; charge_unit=Instance; frequency Each time; rename Dishonour Charge → Debit Return / Dishonour Charges (spacing/slash normalized); gst master='Yes' (soft).
- **Duplicate NOC / No Due Certificate Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-690` **Duplicate NOC / No Due Certificate Charge**; confirmed Fixed amount 250; one published ₹250 (duplicate NEC-style split `CHG-OC-691` deleted).
- **Loan Cancellation / Rebooking Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-693` **Loan Cancellation / Re-booking Charges** — rename; confirmed Fixed amount 2000; charge_unit=Instance; frequency Each time; note_2 preserves franking/stamping norms as per actuals if applicable (source Conditions; actuals_in_addition_to_charge blank — soft encoding via note); rename Rebooking Charge → Re-booking Charges; gst master='Yes' (soft).
- **List of Documents Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-694` **List of Documents Charge**; confirmed Fixed amount 500; no duplicate/channel flags.
- **Property Documents Retrieval / Photocopy Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-695` **Property Document Retrieval Charge** — rename; confirmed Fixed amount 500; charge_unit=Instance; frequency Each time; facility Term Loan→Any (soft); rename Property Documents Retrieval / Photocopy Charge → Property Document Retrieval Charge; gst master='Yes' (soft).
- **Rate Switch / Change Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-698` / `CHG-OC-699` **Interest Rate Type Switch Fees**; confirmed 0.50% of outstanding principal or ₹10,000 whichever lower; Fixed→Floating and Floating→Fixed. Repricing clones `CHG-OC-696/697` deleted (same published fee; would have shown four times).
- **Non-Submission of Post-Disbursement Documents Fee** (facility=Term Loan; product=Housing Loan) → `CHG-OC-702` **Non-Submission of Post Disbursement Documents Charges** — rename; confirmed Fixed amount 3000; slab None–3500000; slab_basis master='Sanctioned loan amount' (source loan-amount band — treated equivalent); charge_unit=month; freq Monthly until documents submitted; note_1 preserves levied-from-due-till-not-submitted; rename Fee→Charges and Post-Disbursement→Post Disbursement; gst master='Yes' (soft).
- **Non-Submission of Post-Disbursement Documents Fee** (facility=Term Loan; product=Housing Loan) → `CHG-OC-703` **Non-Submission of Post Disbursement Documents Charges** — rename; confirmed Fixed amount 5000; slab 3500001–None; slab_basis='Sanctioned loan amount'; charge_unit=month; freq Monthly until documents submitted; rename Fee→Charges; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

(none actionable for compare)

- Legal, Repossession & Incidental → `CHG-OC-884` At actuals.
- CERSAI + stamp/MOD/MOE ignored (govt).

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `rbl bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none remaining.) Deleted duplicate No Due `CHG-OC-691` and repricing clones `CHG-OC-696/697`.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **12 rows** origin=`Offers.processing`. Not in Structured_Data (source has repayment-mode / bounce / certificates / CIBIL / cancellation / list-of-docs / CERSAI / retrieval / rate-switch / statutory-mortgage / legal-repossession / field-collection / non-collection / non-submission only — no processing-fee rows).
  - Sample ids: CHG-PROC-1028, CHG-PROC-1029, CHG-PROC-1030, CHG-PROC-1031, CHG-PROC-1032, CHG-PROC-1033, CHG-PROC-1034, CHG-PROC-1035, CHG-PROC-1036, CHG-PROC-1037, CHG-PROC-1038, CHG-PROC-1039
  - Schemes seen: Housing Loan ×12; facility=Term Loan; rate_type=Floating; purpose=Regular Home Loan.
  - Percentage/min/max fingerprints: {(0.02, 15000, None): 12} (= 2.00% of sanctioned amount, min ₹15,000).
  - CIBIL bands (distinct, not duplicates): 800–900, 750–799, 700–749, 650–699, 600–649, 300–599.
  - Occupations: Salaried ×6 vs Self-Employed ×6 — same fee fingerprint per CIBIL band, distinct occupation dimension (not internal duplicates).
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation+scheme+facility+rate_type: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-94` **Overdue charges** | facility=Term Loan | scheme=Housing Loan | purpose=Regular Home Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-80` **Prepayment charges** | facility=Term Loan | scheme=Housing Loan | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-236` **Prepayment charges** | facility=Term Loan | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes
- `CHG-PRE-237` **Prepayment charges (takeover)** | facility=Term Loan | purpose=Regular Home Loan | rate_type=Fixed | pct=0.02 | pct_base=Amount_Being_Paid | gst=Yes

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `RBL_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (16 rows).
- Master filter: `Bank_charges` where `bank_key` == `rbl bank` (31 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Duplicate NOC / No Due** one ₹250 row `CHG-OC-690`. Rate switch 0.50%/₹10k only as type-switch `CHG-OC-698/699`. List of documents ₹500 unscoped by channel. Legal/repossession/incidental At actuals `CHG-OC-884`.
- No Other-charges redundant/duplicate rows vs Structured_Data.
- No `Slab_Table` origin rows for this bank.
- Offers.processing Salaried/Self-Employed pairs share the same fee fingerprint but are distinct occupation bands (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 2
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 13 listed items/groups
- **Prepayment extras → ignored:** 3 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Charge
- Statutory / Mortgage Creation Charges

### Still missing — bank service charges (actionable)
- (none)
