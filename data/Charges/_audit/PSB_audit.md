# PSB / Punjab and Sind Bank — Charges Audit

## Summary
- Source Structured_Data rows: 41
- Master Bank_charges rows (punjab and sind bank): 83
- Matched OK: 14
- Matched with rename only: 16
- Value mismatches: 0
- Missing in master (in source, not in master): 0 (stamp/ROC govt; Home Loan Plus switch off Offers)
- Extra/redundant in master (in master, not in source): 48
- Duplicate issues in master: 0

## Verdict
PASS — compare-scope service charges corrected. Stamp/revenue + ROC ignored (govt). PSB Home Loan Plus 0.25% switch not on Offers.

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Documentation and Inspection Charge (Composite)** (facility=Any) → `CHG-OC-659` **Documentation and Inspection Charge (Composite)**; confirmed Nil encoded as Fixed Amount 0 (Nil↔0 equivalent); slab None–100000; slab_basis master='Sanctioned loan amount' (source loan-amount band — treated equivalent); charge_unit=One time; freq=One time at sanction; gst_applicable: source Conditions do not always say GST; master='Yes' (not counted as mismatch).
- **Documentation and Inspection Charge (Composite)** (facility=Any) → `CHG-OC-660` **Documentation and Inspection Charge (Composite)**; confirmed Fixed amount 1000; slab 100000–1000000; slab_basis='Sanctioned loan amount'; gst master='Yes' (soft).
- **Documentation and Inspection Charge (Composite)** (facility=Any) → `CHG-OC-661` **Documentation and Inspection Charge (Composite)**; confirmed Fixed amount 5000; slab 1000000–2500000; gst master='Yes' (soft).
- **Documentation and Inspection Charge (Composite)** (facility=Any) → `CHG-OC-662` **Documentation and Inspection Charge (Composite)**; confirmed Fixed amount 8000; slab 2500000–5000000; gst master='Yes' (soft).
- **Documentation and Inspection Charge (Composite)** (facility=Any) → `CHG-OC-663` **Documentation and Inspection Charge (Composite)**; confirmed Fixed amount 10000; slab 5000000–10000000; gst master='Yes' (soft).
- **Documentation and Inspection Charge (Composite)** (facility=Any) → `CHG-OC-664` **Documentation and Inspection Charge (Composite)**; confirmed Fixed amount 25000; slab 10000000–50000000; gst master='Yes' (soft).
- **Documentation and Inspection Charge (Composite)** (facility=Any) → `CHG-OC-665` **Documentation and Inspection Charge (Composite)**; confirmed Fixed amount 50000; slab 50000000–None; gst master='Yes' (soft).
- **ECS/NACH Mandate Registration / Signature Verification** (facility=Any) → `CHG-OC-671` **ECS/NACH Mandate Registration / Signature Verification**; confirmed Fixed amount 150; charge_unit=Mandate; freq=Per mandate registration; note_1 preserves ECS/NACH registration / signature verification; source Nil for PM-KMY/PM-SYM/PM-LVMY contribution mandates not separately encoded as exemption fields (soft); gst master='Yes' (source: GST extra — soft).
- **Cheque/Bill Inward Return Charge** (facility=Any) → `CHG-OC-674` **Cheque/Bill Inward Return Charge**; confirmed Fixed amount 250; slab None–100000; slab_basis master='Transaction amount' (source Loan_Amount columns = transaction amount — equivalent); charge_unit=Instrument; freq=Per return; note_2 preserves not-at-fault / technical exemption; gst master='Yes' (source: GST extra — soft).
- **Cheque/Bill Inward Return Charge** (facility=Any) → `CHG-OC-675` **Cheque/Bill Inward Return Charge**; confirmed Fixed amount 500; slab 100000–1000000; slab_basis='Transaction amount'; gst master='Yes' (soft).
- **Cheque/Bill Inward Return Charge** (facility=Any) → `CHG-OC-676` **Cheque/Bill Inward Return Charge**; confirmed Fixed amount 900; slab 1000000–10000000; slab_basis='Transaction amount'; gst master='Yes' (soft).
- **Cheque/Bill Inward Return Charge** (facility=Any) → `CHG-OC-677` **Cheque/Bill Inward Return Charge**; confirmed Fixed amount 3500; slab 10000000–None; slab_basis='Transaction amount'; gst master='Yes' (soft).
- **Commitment Charge (Delayed Drawdown)** (facility=Term Loan) → `CHG-OC-678` **Commitment Charge (Delayed Drawdown)**; confirmed Percentage 0.005 (=0.50% p.a.) + percentage_per_annum=Yes; percentage_base_value='Delayed drawdown amount' (source pct_on='delayed drawdown amount' — equivalent); slab 50000000–None; slab_basis='Sanctioned loan amount' (source above Rs.5 cr term loans — treated equivalent); note_1 preserves delayed drawdown beyond 3 months; source export-credit/rice-sheller/cold-store exemptions not fully mirrored in exemption_* fields (soft); gst master='Yes' (soft).
- **External Due Diligence Charge** (facility=Term Loan) → `CHG-OC-686` **External Due Diligence Charge**; confirmed Nil encoded as Fixed Amount 0; product PSB Apna Ghar Gaurav waiver preserved in note_1; facility Term Loan→Any broadening (amounts match — soft); note_2 also lists Sahaj though source row is Gaurav-only (soft note breadth); gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Document Copy Charge** (facility=Any) → `CHG-OC-666` **Loan Document Copy Charges** — rename; confirmed Nil encoded as Fixed Amount 0; slab None–25000; slab_basis='Sanctioned loan amount'; rename Document Copy Charge→Loan Document Copy Charges; charge_unit≈Request; freq: source='Per request' master='Each time' (treated equivalent); gst master='Yes' (soft).
- **Document Copy Charge** (facility=Any) → `CHG-OC-667` **Loan Document Copy Charges** — rename; confirmed Fixed amount 1000; slab 25000–10000000; rename Document Copy Charge→Loan Document Copy Charges; gst master='Yes' (source: GST extra — soft).
- **Document Copy Charge** (facility=Any) → `CHG-OC-668` **Loan Document Copy Charges** — rename; confirmed Formula 'Rs.2000/- + actual charges' encoded as Fixed amount 2000 + actuals_in_addition_to_charge=Yes; slab 10000000–None; rename Document Copy Charge→Loan Document Copy Charges; gst master='Yes' (soft).
- **NOC for Ceding Charge / Other Purposes** (facility=Any) → `CHG-OC-669` **No Objection Certificate Issuance Fees** — rename; confirmed Percentage 0.001 (=0.10%) + charge_min=5000; slab None–50000000; pct_base: source='loan/limit' master='Sanctioned loan amount' (treated equivalent); rename NOC for Ceding Charge / Other Purposes→No Objection Certificate Issuance Fees; note_2 preserves consortium N/A; gst master='Yes' (soft).
- **NOC for Ceding Charge / Other Purposes** (facility=Any) → `CHG-OC-670` **No Objection Certificate Issuance Fees** — rename; confirmed Percentage 0.0005 (=0.05%) + charge_max=50000; slab 50000000–None; pct_base loan/limit→Sanctioned loan amount (equivalent); rename→No Objection Certificate Issuance Fees; gst master='Yes' (soft).
- **ECS/NACH Return Charge (Inward)** (facility=Any) → `CHG-OC-672` **ECS/NACH Debit Return Charges** — rename; confirmed Fixed amount 200; slab None–100000; slab_basis='Transaction amount'; rename ECS/NACH Return Charge (Inward)→ECS/NACH Debit Return Charges; note_1 preserves inward non-availability/failed mandate; gst master='Yes' (soft).
- **ECS/NACH Return Charge (Inward)** (facility=Any) → `CHG-OC-673` **ECS/NACH Debit Return Charges** — rename; confirmed Fixed amount 500; slab 100000–None; slab_basis='Transaction amount'; rename→ECS/NACH Debit Return Charges; gst master='Yes' (soft).
- **Review of Term Loan Outstanding** (facility=Term Loan) → `CHG-OC-679` **Term Loan Review Charges** — rename; confirmed Nil encoded as Fixed Amount 0; slab None–50000; slab_basis='Outstanding loan amount'; rename Review of Term Loan Outstanding→Term Loan Review Charges; gst master='Yes' (soft).
- **Review of Term Loan Outstanding** (facility=Term Loan) → `CHG-OC-680` **Term Loan Review Charges** — rename; confirmed Percentage 0.0015 (=0.15%); slab 50000–10000000; pct_base: source='loan outstanding' master='Outstanding loan amount' (equivalent); rename→Term Loan Review Charges; gst master='Yes' (soft).
- **Review of Term Loan Outstanding** (facility=Term Loan) → `CHG-OC-681` **Term Loan Review Charges** — rename; confirmed Percentage 0.001 (=0.10%); slab 10000000–500000000; pct_base Outstanding loan amount; rename→Term Loan Review Charges; gst master='Yes' (soft).
- **Review of Term Loan Outstanding** (facility=Term Loan) → `CHG-OC-682` **Term Loan Review Charges** — rename; confirmed Percentage 0.0005 (=0.05%); slab 500000000–None; pct_base Outstanding loan amount; rename→Term Loan Review Charges; gst master='Yes' (soft).
- **Credit Information / Opinion** (facility=Any) → `CHG-OC-683` **Credit Opinion Report Charges** — rename; confirmed Fixed amount 1000; charge_unit≈occasion; freq=Per request; rename Credit Information / Opinion→Credit Opinion Report Charges; gst master='Yes' (source: GST extra — soft).
- **Inspection Charge** (facility=Term Loan) → `CHG-OC-684` **Inspection Charges** — rename; confirmed Nil encoded as Fixed Amount 0; product PSB Apna Ghar - सहज waiver for permanent Central/State/PSU/education employees preserved in note_1; source Sahaj + Gaurav Inspection Nil rows collapsed into one master Nil row (note_2 lists both schemes); facility Term Loan→Any (soft); rename Inspection Charge→Inspection Charges; freq: source='Not charged' master='One time at sanction' (Nil waiver — soft); gst master='Yes' (soft).
- **Legal and Valuation Charge** (facility=Term Loan) → `CHG-OC-685` **Legal and Valuation Charges** — rename; confirmed Nil encoded as Fixed Amount 0; advocate/valuer borne by bank preserved in note_1; source Sahaj + Gaurav Legal and Valuation Nil rows collapsed into one master Nil row (note_2 lists both schemes); facility Term Loan→Any (soft); rename Legal and Valuation Charge→Legal and Valuation Charges; gst master='Yes' (soft).
- **Inspection Charge** (facility=Term Loan) → `CHG-OC-684` **Inspection Charges** — rename; confirmed Nil encoded as Fixed Amount 0; collapsed onto same CHG-OC-684 as Sahaj Inspection Nil; source Conditions: full waiver for defence personnel under PSB Apna Ghar Gaurav — master note_1 emphasizes permanent-employee Sahaj audience (defence nuance soft/not in note_1); amounts Nil↔0 OK; rename Inspection Charge→Inspection Charges; gst master='Yes' (soft).
- **Legal and Valuation Charge** (facility=Term Loan) → `CHG-OC-685` **Legal and Valuation Charges** — rename; confirmed Nil encoded as Fixed Amount 0; collapsed onto same CHG-OC-685 as Sahaj Legal/Valuation Nil; rename Legal and Valuation Charge→Legal and Valuation Charges; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

(none actionable for compare)

- ECS/NACH outward → `CHG-OC-877/878`. Cheque/bill outward → `CHG-OC-879–882`. Top Up documentation At actuals → `CHG-OC-883`.
- Stamp/revenue (Apna Ghar / Gaurav) + ROC ignored (govt). Home Loan Plus switch skipped (not on Offers).

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `punjab and sind bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — OC rows map to Structured_Data including new outward ECS/cheque and Top Up documentation.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **42 rows** origin=`Offers.processing`. Not in Structured_Data (source has documentation/inspection composite, document copy, NOC, ECS/NACH, cheque inward, commitment, review, credit opinion, ROC, product documentation/switchover/waivers — no processing-fee Structured_Data rows).
  - Sample ids: CHG-PROC-572, CHG-PROC-573, CHG-PROC-574, CHG-PROC-575, CHG-PROC-576, CHG-PROC-577, CHG-PROC-578, CHG-PROC-579, CHG-PROC-580, CHG-PROC-581, CHG-PROC-582, CHG-PROC-583…
  - Schemes seen: PSB Apna Ghar ×28; PSB Apna Ghar Sahaj & Apna Ghar Gaurav ×7; PSB Apna Ghar Top Up ×7; facility=Term Loan; rate_type=Floating.
  - Percentage/min/max/loan-band fingerprints: {(0, None, None, None, None): 7, (0.0015, 1000, 3750, 1, 2500000): 7, (0.0015, 1000, 3750, None, None): 7, (0.0025, None, 12500, 2500001, 5000000): 7, (0.0025, None, 15000, 5000001, 7500000): 7, (0.0025, None, None, 7500001, 1000000000): 7} (= Apna Ghar 0.15% min ₹1,000 max ₹3,750 on ₹1–₹25L; 0.25% max ₹12,500 on ₹25L+–₹50L; 0.25% max ₹15,000 on ₹50L+–₹75L; 0.25% uncapped min on ₹75L+–₹100Cr; Sahaj & Gaurav 0% fee; Top Up 0.15% min ₹1,000 max ₹3,750).
  - CIBIL bands (distinct, not duplicates): 300–649, 650–699, 700–724, 725–749, 750–790, 791–824, 825–900.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL+scheme+facility+rate_type+loan band: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-52` **Overdue charges** | facility=Term Loan | scheme=PSB Apna Ghar | purpose=Regular Home Loan | rate_type=Floating | pct=0.01 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-53` **Overdue charges** | facility=Term Loan | scheme=PSB Apna Ghar Sahaj & Apna Ghar Gaurav | purpose=Regular Home Loan | rate_type=Floating | pct=0.01 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-54` **Overdue charges** | facility=Term Loan | scheme=PSB Apna Ghar Top Up | purpose=Top-up Loan | rate_type=Floating | pct=0.01 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-41` **Prepayment charges** | facility=Term Loan | scheme=PSB Apna Ghar | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-42` **Prepayment charges** | facility=Term Loan | scheme=PSB Apna Ghar Sahaj & Apna Ghar Gaurav | purpose=Regular Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-43` **Prepayment charges** | facility=Term Loan | scheme=PSB Apna Ghar Top Up | purpose=Top-up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
(none)

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `PSB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (41 rows).
- Master filter: `Bank_charges` where `bank_key` == `punjab and sind bank` (83 rows). No alternate keys (`punjab & sind bank`, `psb`) present.
- Semantic matching used; renames allowed when amounts/slabs match.
- Percentages stored as fractions (0.10%→0.001, 0.05%→0.0005, 0.50%→0.005, 0.15%→0.0015, 0.25%→0.0025). Nil ↔ Fixed Amount 0.
- **Document Copy Charge** renamed to **Loan Document Copy Charges** (Nil / ₹1,000 / ₹2,000+actuals).
- **NOC for Ceding Charge / Other Purposes** renamed to **No Objection Certificate Issuance Fees** (0.10% min ₹5,000 up to ₹5 Cr; 0.05% max ₹50,000 above ₹5 Cr).
- **ECS/NACH Return Charge (Inward)** `CHG-OC-672/673` ₹200 / ₹500 (exclusive+1). Outward `CHG-OC-877/878` ₹150 / ₹400.
- **Review of Term Loan Outstanding** renamed to **Term Loan Review Charges** (Nil ≤₹50k; 0.15% / 0.10% / 0.05% above).
- **Credit Information / Opinion** renamed to **Credit Opinion Report Charges** (₹1,000).
- Sahaj + Gaurav inspection / legal-valuation Nil (`CHG-OC-684` / `CHG-OC-685`) and Gaurav-only external DD Nil (`CHG-OC-686`) pinned to scheme `PSB Apna Ghar Sahaj & Apna Ghar Gaurav`.
- Formula **Rs.2000/- + actual charges** correctly encoded as Fixed 2000 + `actuals_in_addition_to_charge=Yes`.
- Cheque/Bill Outward `CHG-OC-879–882` ₹200 / ₹400 / ₹750 / ₹2,500 (exclusive+1; not-at-fault/technical still free).
- Top Up documentation At actuals `CHG-OC-883` scheme `PSB Apna Ghar Top Up`.
- Slab edges exclusive+1 on composite, document copy, NOC, ECS inward, cheque inward, review, delayed drawdown.
- Stamp/revenue (Apna Ghar / Gaurav) + ROC ignored (govt). Home Loan Plus 0.25% switch skipped (not on Offers).
- No Other-charges redundant/orphan rows vs Structured_Data. No `Slab_Table` or `CSV.fixed_prepay` origin rows for this bank.
- Offers.processing: 42 fee clones (Apna Ghar loan-band×CIBIL; Sahaj&Gaurav 0%; Top Up 0.15%); full-key internal duplicates: 0. Offers.overdue ×3 at 1% p.a. on Default_Amount; Offers.prepayment ×3 fixed 0 (floating, not charged).
- openpyxl `data_only=True` used for both workbooks.

_Audit generated with openpyxl data_only=True. Source: `data/Charges/PSB_Home_Loan_Charges_Official.xlsx` Structured_Data. Master: `data/HOME_LOANS_COMPARE_v1.xlsx` Bank_charges filtered bank_key=`punjab and sind bank`._

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 1
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 42 listed items/groups
- **Prepayment extras → ignored:** 3 listed items/groups
- **Offers.overdue → no action unless noted separately:** 3 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- ROC Charge Registration / Modification / Satisfaction

### Still missing — bank service charges (actionable)
- (none)

### Off-Offers / govt skip
- Documentation Charge (Stamp/Revenue) ×2 — Apna Ghar / Gaurav (stamp)
- Scheme Switchover Charge — PSB HOME LOAN PLUS (not on Offers)
