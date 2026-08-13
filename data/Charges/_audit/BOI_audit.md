# BOI / Bank of India — Charges Audit

## Summary
- Source Structured_Data rows: 34
- Master Bank_charges rows (bank of india): 162
- Matched OK: 1
- Matched with rename only: 8
- Value mismatches: 0
- Missing in master (in source, not in master): 25
- Extra/redundant in master (in master, not in source): 153
- Duplicate issues in master: 1

## Verdict
FAIL — 0 value mismatch(es), 25 source charge(s) missing in master, 153 extra/redundant master row(s), 1 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Legal / Technical Verification Fee** (facility=Both; product=Star Home Loan) → `CHG-OC-60` **Legal / Technical Verification Fee** (facility=Any); confirmed At actuals; gst_applicable Yes.

### 1b. Rename only (values OK)
- **Conversion / Rate Switch Charge** (facility=Both; product=Star Home Loan) → `CHG-OC-57` **Interest Rate Type Switch Fees** (facility=Any) — rename; confirmed Percentage 0.10% (=0.001 fraction); min=15000; max=50000; pct_on≈Outstanding loan amount and undisbursed amount; facility Both→Any. Source covers Floating↔Fixed; master encodes Fixed→Floating on this row.
- **Valuation Fee** (facility=Both; product=Star Home Loan) → `CHG-OC-59` **Property Valuation Report Charges** (facility=Any) — rename; confirmed At actuals; gst_applicable Yes.
- **Credit Report (CIBIL/CIC) Charge** (facility=Both; product=Star Home Loan) → `CHG-OC-61` **Credit Information Report (CIC) Charges** (facility=Any) — rename; confirmed Fixed amount 50.
- **Credit Report (All Four CIC) Charge** (facility=Both; product=Star Home Loan) → `CHG-OC-62` **Credit Information Report (CIC) Charges** (facility=Any) — rename; confirmed Fixed amount 200; note_1='When all four CIC reports generated'.
- **Credit Report Copy Charge** (facility=Both; product=Star Home Loan) → `CHG-OC-63` **Credit Information Report (CIC) Charges - Copy** (facility=Any) — rename; confirmed Fixed amount 50.
- **EMI Bounce / NACH-ECS-SI Failure Charge** (facility=Both; product=Star Home Loan) → `CHG-OC-64` **EMI / Cheque / ECS / ACH Bounce Charge** (facility=Any) — rename; confirmed Nil → Fixed Amount 0; slab_to=25000 (source loan_from=0 loan_to=25000); slab_basis=Sanctioned loan amount.
- **EMI Bounce / NACH-ECS-SI Failure Charge** (facility=Both; product=Star Home Loan) → `CHG-OC-65` **EMI / Cheque / ECS / ACH Bounce Charge** (facility=Any) — rename; confirmed Fixed amount 250; slab 25001–1000000.
- **EMI Bounce / NACH-ECS-SI Failure Charge** (facility=Both; product=Star Home Loan) → `CHG-OC-66` **EMI / Cheque / ECS / ACH Bounce Charge** (facility=Any) — rename; confirmed Fixed amount 500; slab_from=1000001 open upper.

## 2. Value mismatches

(none)

## 3. Missing in master

- **Sub-Registrar Registration Charge** | facility=Both | product=Star Home Loan | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Charge to be borne by the borrower.' (Structured_Data excel row 5)
- **ROC Registration Charge** | facility=Both | product=Star Home Loan | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Charge to be borne by the borrower.' (Structured_Data excel row 6)
- **Stamping Charge** | facility=Both | product=Star Home Loan | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Charge to be borne by the borrower.' (Structured_Data excel row 7)
- **Charge Creation Fee** | facility=Both | product=Star Home Loan | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Charge to be borne by the borrower.' (Structured_Data excel row 8)
- **Property / Asset Insurance Premium** | facility=Both | product=Star Home Loan | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Premia for Insurance of property/assets charged to the bank to be borne by the borrower.' (Structured_Data excel row 9)
- **Property Inspection Out-of-Pocket Expenses** | facility=Both | product=Star Home Loan | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='No Inspection charges on Retail Loan Schemes. Actual out of pocket expenses to be recovered from the borrower.' (Structured_Data excel row 10)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=500001 loan_to=None | customer=Any | conditions='Particulars of creation or modification of security interest by way of mortgage by deposit of title deeds. Rule: Sub-rule (2) of rule 4.. Form: Form I.' (Structured_Data excel row 17)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | conditions='Particulars of creation or modification of security interest by way of mortgage by deposit of title deeds. Rule: Sub-rule (2) of rule 4.. Form: Form I.' (Structured_Data excel row 18)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=500001 loan_to=None | customer=Any | conditions='Particulars of creation or modification of security interest by way of mortgage of immovable property other than by deposit of title deeds Rule: Sub-rule (2A) o' (Structured_Data excel row 19)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | conditions='Particulars of creation or modification of security interest by way of mortgage of immovable property other than by deposit of title deeds Rule: Sub-rule (2A) o' (Structured_Data excel row 20)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=500001 loan_to=None | customer=Any | conditions='Particulars of creation or modification of security interest in hypothecation of plant and machinery, stocks, debt including book debt or receivables, whether e' (Structured_Data excel row 21)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | conditions='Particulars of creation or modification of security interest in hypothecation of plant and machinery, stocks, debt including book debt or receivables, whether e' (Structured_Data excel row 22)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=500001 loan_to=None | customer=Any | conditions='Particulars of creation or modification of security interest in intangible assets, being know-how, patent, copyright, trade mark, licence, franchise or any othe' (Structured_Data excel row 23)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | conditions='Particulars of creation or modification of security interest in intangible assets, being know-how, patent, copyright, trade mark, licence, franchise or any othe' (Structured_Data excel row 24)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=500001 loan_to=None | customer=Any | conditions='Particulars of creation or modification of security interest in any under construction residential or commercial building or a part thereof by an agreement or i' (Structured_Data excel row 25)
- **CERSAI Registration / Modification Fee** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | conditions='Particulars of creation or modification of security interest in any under construction residential or commercial building or a part thereof by an agreement or i' (Structured_Data excel row 26)
- **CERSAI Satisfaction of Charge Fee** | facility=Both | product=Star Home Loan | type=Nil | amount=Nil | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Particulars of satisfaction of charge for security interest. Form II.' (Structured_Data excel row 27)
- **CERSAI Fee — Particulars of securitization or reconst** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Particulars of securitization or reconstruction of financial assets' (Structured_Data excel row 28)
- **CERSAI Fee — Particulars of satisfaction of securitiz** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Particulars of satisfaction of securitization or reconstruction transactions' (Structured_Data excel row 29)
- **CERSAI Fee — Any application for information recorded** | facility=Both | product=Star Home Loan | type=Fixed amount | amount=10 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Any application for information recorded/maintained in the Register by any person' (Structured_Data excel row 30)
- **CERSAI Condonation of Delay Fee** | facility=Both | product=Star Home Loan | type=Formula | amount=Not exceeding 10 times of the basic fee, as applicable | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Any application for condonation of delay up to 30 days' (Structured_Data excel row 31)
- **CERSAI Delay in Filing Additional Fee** | facility=Both | product=Star Home Loan | type=Formula | amount=Twice the amount of applicable fee | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Delay in filing of chargeable transaction: From 31 to 40 days. If the applicable fee is Rs.100/- then additional fee applicable will be Rs.200/-' (Structured_Data excel row 32)
- **CERSAI Delay in Filing Additional Fee** | facility=Both | product=Star Home Loan | type=Formula | amount=Five times the amount of applicable fee | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Delay in filing of chargeable transaction: From 41 days to 50 days. If the applicable fee is Rs.100/- then additional fee applicable will be Rs.500/-' (Structured_Data excel row 33)
- **CERSAI Delay in Filing Additional Fee** | facility=Both | product=Star Home Loan | type=Formula | amount=Ten times the amount of applicable fee | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='Delay in filing of chargeable transaction: From 51 days to 60 days. If the applicable fee is Rs.100/- then additional fee applicable will be Rs.1000/-' (Structured_Data excel row 34)
- **CERSAI Multiple Security Interest Fee Rule** | facility=Both | product=Star Home Loan | type=Formula | amount=Highest applicable fee among filed security interests | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | conditions='When more than one security interest creation/modification is filed together, pay the highest fee among applicable security interests.' (Structured_Data excel row 35)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `bank of india` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
- `CHG-OC-58` **Interest Rate Type Switch Fees** | origin=Other charges | facility=Any | type=Percentage | fixed=None | pct=0.001 | min=15000 max=50000 | switch Floating→Fixed — directional duplicate of `CHG-OC-57` (same 0.10% / min ₹15,000 / max ₹50,000 conversion fee); Structured_Data has one Conversion / Rate Switch Charge covering both directions

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **128 rows** origin=`Offers.processing`. Not in Structured_Data (source sheet has no processing-fee rows).
  - Sample ids: CHG-PROC-76, CHG-PROC-77, CHG-PROC-78, CHG-PROC-79, CHG-PROC-80, CHG-PROC-81, CHG-PROC-82, CHG-PROC-83, …
  - Schemes seen: Star Home Loan, Star Smart Home Loan, Star Top Up Loan; Term Loan + Overdraft; Floating + Fixed.
  - Percentage bands: 0.2% / min ₹2,000 / max ₹10,000 (96 rows); 0.35% / min ₹3,500 / max ₹30,000 (32 rows).
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 rows). All 128 fingerprints unique (band/scheme/facility/rate/CIBIL variants).

### 4c. From Offers.overdue (not in Structured_Data)
- **16 rows** — Overdue 1% p.a. (days 1–60) / 2% p.a. (days 61+) on Default_Amount; schemes Star Home Loan / Star Smart Home Loan / Star Top Up Loan × Floating/Fixed × TL/OD.
  - Ids: CHG-OD-15, CHG-OD-16, CHG-OD-17, CHG-OD-18, CHG-OD-19, CHG-OD-20, CHG-OD-21, CHG-OD-22, CHG-OD-23, CHG-OD-24, CHG-OD-25, CHG-OD-26, CHG-OD-27, CHG-OD-28, CHG-OD-29, CHG-OD-30

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-16` **Prepayment charges** | facility=Term Loan | scheme=Star Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-17` **Prepayment charges** | facility=Overdraft | scheme=Star Smart Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-18` **Prepayment charges** | facility=Term Loan | scheme=Star Top Up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-19` **Prepayment charges** | facility=Overdraft | scheme=Star Top Up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-174` **Prepayment charges** | facility=Term Loan | type=Fixed Amount | fixed=0 | pct=None | pct_base=None | rate_type=Fixed | note=Prepayment nil (CSV NIL)
- `CHG-PRE-175` **Prepayment charges (takeover)** | facility=Term Loan | type=Percentage | fixed=None | pct=0.02 | pct_base=Highest_Outstanding_90_Days | rate_type=Fixed | note=None
- `CHG-PRE-176` **Prepayment charges** | facility=Overdraft | type=Fixed Amount | fixed=0 | pct=None | pct_base=None | rate_type=Fixed | note=Prepayment nil (CSV NIL)
- `CHG-PRE-177` **Prepayment charges (takeover)** | facility=Overdraft | type=Percentage | fixed=None | pct=0.02 | pct_base=Highest_Outstanding_90_Days | rate_type=Fixed | note=None

## 5. Notes

- Source of truth: `BOI_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (34 rows).
- Master filter: `Bank_charges` where `bank_key` == `bank of india` (162 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Nil** in source (EMI bounce ≤ ₹25,000) accepted as master `Fixed Amount` 0.
- EMI bounce slab lower bound source `0` vs master `slab_from=null` treated as equivalent (open lower bound up to ₹25,000).
- Conversion `percentage_base_value` wording differs slightly (`Loan outstanding amount + undisbursed portion, if any` vs `Outstanding loan amount and undisbursed amount`) — treated as semantic match, not a value mismatch.
- Facility Both→Any narrowing on matched rows not failed when amounts match.
- `CHG-OC-57` / `CHG-OC-58` encode Fixed→Floating and Floating→Fixed for the same 0.10% conversion fee; only one Structured_Data row covers both directions.
- No processing / prepayment / overdue rows exist in Structured_Data; all Offers.* and CSV.fixed_prepay rows are therefore extra vs this source sheet.
- Entire CERSAI fee schedule (registration/modification by security-interest type, satisfaction Nil, securitization fees, delay/condonation formulas, multiple-interest rule) is **missing** from master Other charges.
- Six borrower-borne at-actuals items beyond valuation/legal (Sub-Registrar, ROC, Stamping, Charge Creation, Insurance premium, Inspection OOP) are also missing.
- No Slab_Table origin rows for this bank.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 20
- **Still missing (bank service charges):** 5
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 2 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 1
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Sub-Registrar Registration Charge
- CERSAI Registration / Modification Fee
- CERSAI Registration / Modification Fee
- CERSAI Registration / Modification Fee
- CERSAI Registration / Modification Fee
- CERSAI Registration / Modification Fee
- CERSAI Registration / Modification Fee
- CERSAI Registration / Modification Fee
- CERSAI Registration / Modification Fee
- CERSAI Registration / Modification Fee
- CERSAI Registration / Modification Fee
- CERSAI Satisfaction of Charge Fee
- CERSAI Fee — Particulars of securitization or reconst
- CERSAI Fee — Particulars of satisfaction of securitiz
- CERSAI Fee — Any application for information recorded
- CERSAI Condonation of Delay Fee
- CERSAI Delay in Filing Additional Fee
- CERSAI Delay in Filing Additional Fee
- CERSAI Delay in Filing Additional Fee
- CERSAI Multiple Security Interest Fee Rule

### Still missing — bank service charges (actionable)
- ROC Registration Charge
- Stamping Charge
- Charge Creation Fee
- Property / Asset Insurance Premium
- Property Inspection Out-of-Pocket Expenses
