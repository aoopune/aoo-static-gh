# UCO / UCO Bank — Charges Audit

## Summary
- Source Structured_Data rows: 15
- Master Bank_charges rows (uco bank): 29
- Matched OK: 1
- Matched with rename only: 10
- Value mismatches: 0
- Missing in master (in source, not in master): 0 (stamp/registration govt; GST note already on rows; BSBD not on Offers)
- Extra/redundant in master (in master, not in source): 18
- Duplicate issues in master: 0

## Verdict
PASS — compare-scope service charges corrected. Stamp / registration ignored (govt). GST note already `gst_applicable=Yes`. BSBD concession is a savings-account rule, not UCO Home / Top Up.

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **CIBIL Report Pulling Charge** (facility=Both; product=UCO Home Loan) → `CHG-OC-772` **CIBIL Report Pulling Charge**; confirmed Nil→Fixed amount 0; freq=Each time; facility Both→Any (soft broadening); purpose master='Any' (source product UCO Home Loan); gst master='Yes' (source retail schedule NIL row; GST note is separate excel row 5 — soft).

### 1b. Rename only (values OK)
- **Documentation Charge** (facility=Both) → `CHG-OC-771` **Documentation Charges** — rename; confirmed Nil→Fixed amount 0; freq=Each time; facility Both→Any (soft); purpose master='Regular Home Loan' (source product UCO Home Loan); rename Charge→Charges; gst master='Yes' (soft).
- **Inspection Charge** (facility=Both) → `CHG-OC-773` **Inspection Charges** — rename; confirmed Nil→Fixed amount 0; freq=Each time; when_it_matters=After offer; facility Both→Any (soft); purpose master='Any'; rename Charge→Charges; gst master='Yes' (soft).
- **Cheque Return Charge - Inward** (facility=Any) → `CHG-OC-774` **Cheque Return Inward Charge** — rename; confirmed Fixed amount 250 (source '250 + GST' → gst_applicable=Yes); slab None–100000; slab_basis=Transaction amount; charge_unit=Instrument; freq=Each time; rename 'Cheque Return Charge - Inward'→'Cheque Return Inward Charge'.
- **Cheque Return Charge - Inward** (facility=Any) → `CHG-OC-775` **Cheque Return Inward Charge** — rename; confirmed Fixed amount 500 (source '500 + GST'); slab 100001–1000000 (source Loan_Amount_From=100000 'above ₹1 lakh up to ₹10 lakh' — exclusive+1 treated equivalent); slab_basis=Transaction amount; charge_group_id=CHG-OC-774; rename→Cheque Return Inward Charge; gst='Yes'.
- **Cheque Return Charge - Inward** (facility=Any) → `CHG-OC-776` **Cheque Return Inward Charge** — rename; confirmed Fixed amount 900 (source '900 + GST'); slab_from=10000001 (source Loan_Amount_From=10000000 'above ₹100 lakh' — exclusive+1 treated equivalent); slab_basis=Transaction amount; Source Conditions note: published PDF lists no separate amount for ₹10–100 lakh inward band — neither source nor master has that gap band; charge_group_id=CHG-OC-774; rename→Cheque Return Inward Charge; gst='Yes'.
- **ECS/NACH Debit Return Charge** (facility=Any) → `CHG-OC-777` **ECS/NACH Debit Return / Dishonour Charges** — rename; confirmed Fixed amount 250 (source '250 + GST'); slab None–100000; slab_basis=Transaction amount; charge_unit=Instrument; note_1 preserves insufficient-funds wording; rename Charge→'/ Dishonour Charges'; gst='Yes'.
- **ECS/NACH Debit Return Charge** (facility=Any) → `CHG-OC-778` **ECS/NACH Debit Return / Dishonour Charges** — rename; confirmed Fixed amount 250; slab 100001–1000000 (source 'above ₹1 lakh up to ₹10 lakh' exclusive+1); charge_group_id=CHG-OC-777; rename→ECS/NACH Debit Return / Dishonour Charges; gst='Yes'.
- **ECS/NACH Debit Return Charge** (facility=Any) → `CHG-OC-779` **ECS/NACH Debit Return / Dishonour Charges** — rename; confirmed Fixed amount 250; slab 1000001–10000000 (source 'above ₹10 lakh up to ₹100 lakh' exclusive+1); charge_group_id=CHG-OC-777; rename→ECS/NACH Debit Return / Dishonour Charges; gst='Yes'.
- **ECS/NACH Debit Return Charge** (facility=Any) → `CHG-OC-780` **ECS/NACH Debit Return / Dishonour Charges** — rename; confirmed Fixed amount 250; slab_from=10000001 (source 'above ₹100 lakh' exclusive+1); charge_group_id=CHG-OC-777; rename→ECS/NACH Debit Return / Dishonour Charges; gst='Yes'.
- **Standing Instruction Failure Charge** (facility=Any) → `CHG-OC-781` **Standing Instruction Failure Charges** — rename; confirmed Fixed amount 100 (source '100 + GST'); charge_unit=Failure; freq=Each time; note_1/note_2 preserve insufficient-funds + home-loan EMI SI failure wording; rename Charge→Charges; gst='Yes'.

## 2. Value mismatches

(none)

## 3. Missing in master

(none actionable for compare)

- GST note already encoded as `gst_applicable=Yes` on service rows (not a separate fee).
- Stamp / registration ignored (govt). BSBD 25% cheque concession is a Basic Savings account rule, not UCO Home / Top Up.

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `uco bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 11 `Other charges` rows map to Structured_Data (Documentation Charges Nil→0; CIBIL Report Pulling Charge Nil→0; Inspection Charges Nil→0; Cheque Return Inward Charge ×3 slabs; ECS/NACH Debit Return / Dishonour Charges ×4 slabs; Standing Instruction Failure Charges). GST formula note / Stamp Duty ×2 / BSBD concession are missing rather than duplicated.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **14 rows** origin=`Offers.processing`. Not in Structured_Data (source covers Documentation/CIBIL/Inspection Nil, GST formula note, Stamp Duty at actuals ×2, Cheque Return Inward slabs + BSBD concession, ECS/NACH return slabs, SI failure — no processing-fee rows).
  - Sample ids: CHG-PROC-739, CHG-PROC-740, CHG-PROC-741, CHG-PROC-742, CHG-PROC-743, CHG-PROC-744, CHG-PROC-745, CHG-PROC-746
  - Schemes seen: UCO Home ×8; UCO Top Up Home Loan ×6; facility=Term Loan; rate_type=Floating; occupation=Any.
  - Percentage/min/max fingerprints: {(0.005, 1500, 15000): 14} (= 0.50% of sanctioned amount, min ₹1,500 max ₹15,000).
  - CIBIL bands UCO Home (distinct, not duplicates): 850–900, 825–849, 800–824, 750–799, 700–749, 650–699, 600–649, −1–0.
  - CIBIL bands UCO Top Up: 850–900, 825–849, 800–824, 750–799, 700–749, 650–699 (no −1–0 / 600–649 on Top Up).
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+occupation+scheme+facility+rate_type+fee: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-67` **Overdue charges** | facility=Term Loan | scheme=UCO Home | purpose=Regular Home Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-68` **Overdue charges** | facility=Term Loan | scheme=UCO Top Up Home Loan | purpose=Top-up Loan | rate_type=Floating | pct=0.02 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-52` **Prepayment charges** | facility=Term Loan | scheme=UCO Home | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-53` **Prepayment charges** | facility=Term Loan | scheme=UCO Top Up Home Loan | purpose=Top-up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
(none)

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `UCO_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (15 rows).
- Master filter: `Bank_charges` where `bank_key` == `uco bank` (29 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Documentation / CIBIL / Inspection** Nil → Fixed amount 0 (Documentation/Inspection renamed with Charges suffix; CIBIL name exact). Inspection `when_it_matters=After offer`; Documentation + CIBIL Before offer.
- **Cheque Return Inward** ₹250 (≤₹1L) / ₹500 (above ₹1L–₹10L exclusive+1) / ₹900 (above ₹100L exclusive+1); ₹10–100L inward amount unpublished — gap left.
- **ECS/NACH Debit Return** four transaction-amount slabs all ₹250, exclusive+1 edges (`CHG-OC-777`–`780`).
- **Standing Instruction Failure** ₹100 → **Standing Instruction Failure Charges**.
- GST note already on rows. Stamp/registration ignored (govt). BSBD concession not on Offers.
- Other-charges extras: **0** (all 11 OC rows map). No `Slab_Table` or `CSV.fixed_prepay` origin rows.
- Offers.processing 14 (0.50% min ₹1,500 max ₹15,000; UCO Home ×8 + Top Up ×6; 0 full-key clones). Offers.overdue ×2 at 2% p.a. on Default_Amount. Offers.prepayment ×2 floating fixed 0.
- openpyxl data_only=True used for both workbooks.

_Audit generated with openpyxl data_only=True. Source: `data/Charges/UCO_Home_Loan_Charges_Official.xlsx` Structured_Data. Master: `data/HOME_LOANS_COMPARE_v1.xlsx` Bank_charges filtered bank_key=`uco bank`._

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 2
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 14 listed items/groups
- **Prepayment extras → ignored:** 2 listed items/groups
- **Offers.overdue → no action unless noted separately:** 2 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Stamp Duty, Registration and Other Documentation Costs
- Stamp Duty, Registration and Other Documentation Costs

### Still missing — bank service charges (actionable)
- (none) — GST already `gst_applicable=Yes` on service rows. BSBD cheque concession not on Offers.
