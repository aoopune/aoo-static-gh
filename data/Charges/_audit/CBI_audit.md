# CBI / Central Bank of India — Charges Audit

## Summary
- Source Structured_Data rows: 49
- Master Bank_charges rows (central bank of india): 71
- Matched OK: 15
- Matched with rename only: 26
- Value mismatches: 1
- Missing in master (in source, not in master): 7
- Extra/redundant in master (in master, not in source): 33
- Duplicate issues in master: 2

## Verdict
FAIL — 1 value mismatch(es), 7 source charge(s) missing in master, 33 extra/redundant master row(s), 2 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Sanction Amendment / Modification Charge** (facility=Both; product=Any) → `CHG-OC-154` **Sanction Amendment / Modification Charges** (facility=Any); confirmed Percentage 0.02% (= 0.0002 fraction); min=1000.0; max=500000.0; pct_base wording: source='loan amount' master='Sanctioned loan amount' (treated equivalent); gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='When accepted sanction terms are amended or modified' master='When accepted sanction terms are amended or modified'.
- **Term Loan Disbursement Instrument Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-140` **Term Loan Disbursement Instrument Charge** (facility=Term Loan); confirmed Nil → master Fixed amount 0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='At disbursement' master='At disbursement'.
- **Term Loan Disbursement Instrument Charge** (facility=Term Loan; product=Any) → `CHG-OC-140` **Term Loan Disbursement Instrument Charge** (facility=Term Loan); confirmed Nil → master Fixed amount 0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='At disbursement' master='At disbursement'.
- **No-Dues / Balance Confirmation Certificate Charge** (facility=Both; product=Any) → `CHG-OC-161` **No-Dues / Balance Confirmation Certificate Charge** (facility=Any); confirmed Fixed amount 150.0; customer=Non-Individual; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each certificate' master='Each certificate'.
- **No-Dues / Balance Confirmation Certificate Charge** (facility=Both; product=Any) → `CHG-OC-160` **No-Dues / Balance Confirmation Certificate Charge** (facility=Any); confirmed Fixed amount 100.0; customer=Individual; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each certificate' master='Each certificate'.
- **Credit Information Report (CIC) Charge** (facility=Any; product=Any) → `CHG-OC-122` **Credit Information Report (CIC) Charges** (facility=Any); confirmed Fixed amount 500.0; customer=Non-Individual; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each time CIC is pulled' master='Each time CIC is pulled'.
- **Credit Information Report (CIC) Charge** (facility=Any; product=Any) → `CHG-OC-121` **Credit Information Report (CIC) Charges** (facility=Any); confirmed Fixed amount 50.0; customer=Individual; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each time CIC is pulled' master='Each time CIC is pulled'.
- **API Integration Charge** (facility=Any; product=Any retail loan including housing) → `CHG-OC-120` **API Integration Charge** (facility=Any); confirmed Fixed amount 81.0; frequency: source='At fresh proposal' master='At fresh proposal'.
- **Documentation Charge** (facility=Term Loan; product=CENT TOP UP SCHEME) → `CHG-OC-119` **Documentation Charges** (facility=Term Loan); confirmed Fixed amount 450.0; frequency: source='At sanction/disbursement' master='At sanction/disbursement'.
- **Documentation Charge** (facility=Term Loan; product=Top Up Home Loan (Term Loan)) → `CHG-OC-119` **Documentation Charges** (facility=Term Loan); confirmed Fixed amount 450.0; frequency: source='At sanction/disbursement' master='At sanction/disbursement'.
- **Documentation Charge** (facility=Term Loan; product=Cent Home loan) → `CHG-OC-117` **Documentation Charges** (facility=Term Loan); confirmed Fixed amount 1350.0; frequency: source='At sanction/disbursement' master='At sanction/disbursement'.
- **Documentation Charge** (facility=Term Loan; product=Housing Loan) → `CHG-OC-117` **Documentation Charges** (facility=Term Loan); confirmed Fixed amount 1350.0; frequency: source='At sanction/disbursement' master='At sanction/disbursement'.
- **Documentation Charge** (facility=Overdraft; product=Cent Home Double Plus Scheme) → `CHG-OC-118` **Documentation Charges** (facility=Overdraft); confirmed Fixed amount 1350.0; frequency: source='At sanction/disbursement' master='At sanction/disbursement'.
- **NACH Debit Return Charge** (facility=Any; product=Any) → `CHG-OC-148` **NACH Debit Return Charge** (facility=Any); confirmed Fixed amount 100.0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each return' master='Each return'.
- **NACH Mandate Verification Charge** (facility=Any; product=Any) → `CHG-OC-147` **NACH Mandate Verification Charge** (facility=Any); confirmed Fixed amount 100.0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='On acceptance' master='On acceptance'.

### 1b. Rename only (values OK)
- **ECS / Cheque Inward Return Charge** (facility=Any; product=Any; loc=Any) → `CHG-OC-144` **ECS / Cheque Debit Return Charge** (facility=Any) — rename; confirmed Fixed amount 2500.0; slab 10000001.0–None; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Second and subsequent returns in the month' master='Second and subsequent returns in the month'.
- **ECS / Cheque Inward Return Charge** (facility=Any; product=Any; loc=Any) → `CHG-OC-143` **ECS / Cheque Debit Return Charge** (facility=Any) — rename; confirmed Fixed amount 2000.0; slab 10000001.0–None; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='First return in the month' master='First return in the month'.
- **LSR / NEC Charge** (facility=Any; product=Any; loc=Rural) → `CHG-OC-128` **Non-Encumbrance Certificate Charges** (facility=Any) — rename; confirmed Fixed amount 1500.0; slab 10000001.0–None; area=Rural; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='As incurred' master='When required for property/security'.
- **LSR / NEC Charge** (facility=Any; product=Any; loc=Urban & Semi-urban) → `CHG-OC-127` **Non-Encumbrance Certificate Charges** (facility=Any) — rename; confirmed Fixed amount 2500.0; slab 10000001.0–None; area=Urban & Semi-urban; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='As incurred' master='When required for property/security'.
- **LSR / NEC Charge** (facility=Any; product=Any; loc=Metro) → `CHG-OC-126` **Non-Encumbrance Certificate Charges** (facility=Any) — rename; confirmed Fixed amount 4000.0; slab 10000001.0–None; area=Metro; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='As incurred' master='When required for property/security'.
- **LSR / NEC Charge** (facility=Any; product=Any; loc=Rural) → `CHG-OC-125` **Non-Encumbrance Certificate Charges** (facility=Any) — rename; confirmed Fixed amount 1000.0; slab None–10000000.0; area=Rural; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='As incurred' master='When required for property/security'.
- **LSR / NEC Charge** (facility=Any; product=Any; loc=Urban & Semi-urban) → `CHG-OC-124` **Non-Encumbrance Certificate Charges** (facility=Any) — rename; confirmed Fixed amount 1500.0; slab None–10000000.0; area=Urban & Semi-urban; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='As incurred' master='When required for property/security'.
- **LSR / NEC Charge** (facility=Any; product=Any; loc=Metro) → `CHG-OC-123` **Non-Encumbrance Certificate Charges** (facility=Any) — rename; confirmed Fixed amount 3000.0; slab None–10000000.0; area=Metro; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='As incurred' master='When required for property/security'.
- **Valuation Fee (Vacant Plot / Land / Residential Site)** (facility=Any; product=Any; loc=Any) → `CHG-OC-153` **Property Valuation Report Charges** (facility=Any) — rename; confirmed fixed component 2500.0; Percentage 10% (= 0.1 fraction); slab 10000001.0–None; scope=Vacant land; pct_base≈Over Actual fee; pct_base wording: source='actual valuer fee' master='Over Actual fee' (treated equivalent); source Amount_Type=Formula encoded as master charge_type=Both; prop_scope=Vacant land; frequency: source='As incurred' master='Each valuation'.
- **Valuation Fee (Vacant Plot / Land / Residential Site)** (facility=Any; product=Any; loc=Any) → `CHG-OC-152` **Property Valuation Report Charges** (facility=Any) — rename; confirmed fixed component 1875.0; Percentage 10% (= 0.1 fraction); slab 5000001.0–10000000.0; scope=Vacant land; pct_base≈Over Actual fee; pct_base wording: source='actual valuer fee' master='Over Actual fee' (treated equivalent); source Amount_Type=Formula encoded as master charge_type=Both; prop_scope=Vacant land; frequency: source='As incurred' master='Each valuation'.
- **Valuation Fee (Vacant Plot / Land / Residential Site)** (facility=Any; product=Any; loc=Any) → `CHG-OC-151` **Property Valuation Report Charges** (facility=Any) — rename; confirmed fixed component 1250.0; Percentage 10% (= 0.1 fraction); slab 2500001.0–5000000.0; scope=Vacant land; pct_base≈Over Actual fee; pct_base wording: source='actual valuer fee' master='Over Actual fee' (treated equivalent); source Amount_Type=Formula encoded as master charge_type=Both; prop_scope=Vacant land; frequency: source='As incurred' master='Each valuation'.
- **Valuation Fee (Vacant Plot / Land / Residential Site)** (facility=Any; product=Any; loc=Any) → `CHG-OC-150` **Property Valuation Report Charges** (facility=Any) — rename; confirmed fixed component 1000.0; Percentage 10% (= 0.1 fraction); slab 1000001.0–2500000.0; scope=Vacant land; pct_base≈Over Actual fee; pct_base wording: source='actual valuer fee' master='Over Actual fee' (treated equivalent); source Amount_Type=Formula encoded as master charge_type=Both; prop_scope=Vacant land; frequency: source='As incurred' master='Each valuation'.
- **Valuation Fee (Vacant Plot / Land / Residential Site)** (facility=Any; product=Any; loc=Any) → `CHG-OC-149` **Property Valuation Report Charges** (facility=Any) — rename; confirmed fixed component 750.0; Percentage 10% (= 0.1 fraction); slab None–1000000.0; scope=Vacant land; pct_base≈Over Actual fee; pct_base wording: source='actual valuer fee' master='Over Actual fee' (treated equivalent); source Amount_Type=Formula encoded as master charge_type=Both; prop_scope=Vacant land; frequency: source='As incurred' master='Each valuation'.
- **Credit Information / Opinion Charge** (facility=Both; product=Any; loc=Any) → `CHG-OC-159` **Credit Opinion Report Charges** (facility=Any) — rename; confirmed Fixed amount 1000.0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each request' master='Each request'.
- **Copy of Documents Charge** (facility=Both; product=Any; loc=Any) → `CHG-OC-158` **Loan Document Copy Charges** (facility=Any) — rename; confirmed Fixed amount 2000.0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); actual photocopy charges ↔ actuals_in_addition_to_charge=Yes; frequency: source='Each request' master='Each time'.
- **Copy of Documents Charge** (facility=Both; product=Any; loc=Any) → `CHG-OC-157` **Loan Document Copy Charges** (facility=Any) — rename; confirmed Fixed amount 1000.0; slab 10000001.0–None; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); actual photocopy charges ↔ actuals_in_addition_to_charge=Yes; frequency: source='Each request' master='Each time'.
- **Copy of Documents Charge** (facility=Both; product=Any; loc=Any) → `CHG-OC-156` **Loan Document Copy Charges** (facility=Any) — rename; confirmed Fixed amount 500.0; slab None–10000000.0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each request' master='Each time'.
- **ECS / Cheque Inward Return Charge** (facility=Any; product=Any; loc=Any) → `CHG-OC-145` **ECS / Cheque Debit Return Charge** (facility=Any) — rename; confirmed Fixed amount 100.0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each return' master='Each return'.
- **ECS / Cheque Inward Return Charge** (facility=Any; product=Any; loc=Any) → `CHG-OC-142` **ECS / Cheque Debit Return Charge** (facility=Any) — rename; confirmed Fixed amount 500.0; slab 100001.0–10000000.0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each return' master='Each return'.
- **ECS / Cheque Inward Return Charge** (facility=Any; product=Any; loc=Any) → `CHG-OC-141` **ECS / Cheque Debit Return Charge** (facility=Any) — rename; confirmed Fixed amount 200.0; slab None–100000.0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each return' master='Each return'.
- **Valuation Fee** (facility=Any; product=Any; loc=Any) → `CHG-OC-139` **Property Valuation Report Charges** (facility=Any) — rename; confirmed Fixed amount 11000.0; slab 10000001.0–None; scope=Land & Building; frequency: source='As incurred' master='Each valuation'.
- **Valuation Fee** (facility=Any; product=Any; loc=Any) → `CHG-OC-138` **Property Valuation Report Charges** (facility=Any) — rename; confirmed Fixed amount 8250.0; slab 5000001.0–10000000.0; scope=Land & Building; frequency: source='As incurred' master='Each valuation'.
- **Valuation Fee** (facility=Any; product=Any; loc=Any) → `CHG-OC-137` **Property Valuation Report Charges** (facility=Any) — rename; confirmed Fixed amount 5500.0; slab 2500001.0–5000000.0; scope=Land & Building; frequency: source='As incurred' master='Each valuation'.
- **Valuation Fee** (facility=Any; product=Any; loc=Any) → `CHG-OC-136` **Property Valuation Report Charges** (facility=Any) — rename; confirmed Fixed amount 4400.0; slab 1000001.0–2500000.0; scope=Land & Building; frequency: source='As incurred' master='Each valuation'.
- **ECS / Cheque Inward Return Charge Waiver** (facility=Any; product=Any; loc=Any) → `CHG-OC-146` **ECS / Cheque Debit Return Charge** (facility=Any) — rename; confirmed Nil → master Fixed amount 0; gst_applicable: source unspecified; master='Yes' (not counted as mismatch); frequency: source='Each return' master='Each return'.
- **Credit Information Report (CIC) Charge Waiver** (facility=Any; product=Any; loc=Any) → `CHG-OC-121` **Credit Information Report (CIC) Charges** (facility=Any) — rename; confirmed Nil waiver; slab None–25000.0; customer=Individual; encoded as exemption_1 on CHG-OC-121: Priority Sector Loans up to ₹25000.

## 2. Value mismatches

### NOC Issuance Charge (excel row 44) → `CHG-OC-155` No Objection Certificate Issuance Fees
- Rename also present: `NOC Issuance Charge` → `No Objection Certificate Issuance Fees`
- Source fingerprint: type=Percentage amount='0.05%' min=2000.0 max=50000.0 pct_on='limit' slab=None-None product='Any' facility=Both loc='Any' cust='Any' freq='Each time NOC is issued'
- Master fingerprint: fixed=None pct=0.0005 min=2000.0 max=50000.0 slab=None-None pct_base='Sanctioned loan amount' facility=Any gst=Yes purpose='Any' area=None cust=None scope=None
- **percentage_base_value / Percentage_Calculated_On**: source='limit' vs master='Sanctioned loan amount'
- Note: gst_applicable: source unspecified; master='Yes' (not counted as mismatch)
- Note: frequency: source='Each time NOC is issued' master='Each request'

## 3. Missing in master

- **Documentation Charge** | facility=Term Loan | product=Cent Swabhiman Scheme | type=Fixed amount | amount=1000 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | conditions='Reverse mortgage (Cent Swabhiman Scheme) documentation charge in retail credit schedule.' (Structured_Data excel row 7)
- **CERSAI Creation / Modification Charge** | facility=Any | product=Any | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | loan_from=None loan_to=500000.0 | customer=Any | loc=Any | conditions='Creation or modification of Security Interest in favour of secured creditor — loan/security interest up to ₹5.00 lakh.' (Structured_Data excel row 12)
- **CERSAI Creation / Modification Charge** | facility=Any | product=Any | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=500001.0 loan_to=None | customer=Any | loc=Any | conditions='Creation or modification of Security Interest in favour of secured creditor — above ₹5.00 lakh.' (Structured_Data excel row 13)
- **CERSAI Search Charge** | facility=Any | product=Any | type=Fixed amount | amount=10 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | conditions='Any application for information recorded / maintained in the Register by any person (CERSAI Search).' (Structured_Data excel row 14)
- **CERSAI Satisfaction / Correction Charge** | facility=Any | product=Any | type=Nil | amount=Nil | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | conditions='Satisfaction or Correction of any existing security interest.' (Structured_Data excel row 15)
- **Valuation Fee** | facility=Any | product=Any | type=Fixed amount | amount=3300 | min=None max=None | pct_on=None | loan_from=None loan_to=1000000.0 | customer=Any | loc=Any | conditions='Amount recovered towards professional fees from borrower for property valuation under Retail/Agriculture advances, plus GST. Value parameters refer to property …' (Structured_Data excel row 22)
- **Out of Pocket Expenses** | facility=Any | product=Any | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | conditions='Registration / Modification / Satisfaction of charges with RoC, postages, telegrams, telex, cable charges, fax etc. collected from the beneficiary, unless other…' (Structured_Data excel row 29)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `central bank of india` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
- `CHG-OC-129` **Legal Opinion Fees** | origin=Other charges | facility=Any | type=Fixed Amount | fixed=3000.0 | pct=None | min=None max=None | slab=None–10000000.0 | area=Metro | scope=None — identical duplicate of NEC/LSR amounts (twin CHG-OC-123); Structured_Data has only LSR / NEC Charge
- `CHG-OC-130` **Legal Opinion Fees** | origin=Other charges | facility=Any | type=Fixed Amount | fixed=1500.0 | pct=None | min=None max=None | slab=None–10000000.0 | area=Urban & Semi-urban | scope=None — identical duplicate of NEC/LSR amounts (twin CHG-OC-124); Structured_Data has only LSR / NEC Charge
- `CHG-OC-131` **Legal Opinion Fees** | origin=Other charges | facility=Any | type=Fixed Amount | fixed=1000.0 | pct=None | min=None max=None | slab=None–10000000.0 | area=Rural | scope=None — identical duplicate of NEC/LSR amounts (twin CHG-OC-125); Structured_Data has only LSR / NEC Charge
- `CHG-OC-132` **Legal Opinion Fees** | origin=Other charges | facility=Any | type=Fixed Amount | fixed=4000.0 | pct=None | min=None max=None | slab=10000001.0–None | area=Metro | scope=None — identical duplicate of NEC/LSR amounts (twin CHG-OC-126); Structured_Data has only LSR / NEC Charge
- `CHG-OC-133` **Legal Opinion Fees** | origin=Other charges | facility=Any | type=Fixed Amount | fixed=2500.0 | pct=None | min=None max=None | slab=10000001.0–None | area=Urban & Semi-urban | scope=None — identical duplicate of NEC/LSR amounts (twin CHG-OC-127); Structured_Data has only LSR / NEC Charge
- `CHG-OC-134` **Legal Opinion Fees** | origin=Other charges | facility=Any | type=Fixed Amount | fixed=1500.0 | pct=None | min=None max=None | slab=10000001.0–None | area=Rural | scope=None — identical duplicate of NEC/LSR amounts (twin CHG-OC-128); Structured_Data has only LSR / NEC Charge
- `CHG-OC-135` **Legal Opinion Fees** | origin=Other charges | facility=Any | type=Fixed Amount | fixed=3300.0 | pct=None | min=None max=None | slab=None–1000000.0 | area=None | scope=None — mislabeled: ₹3300 / slab ≤ ₹10L matches source Valuation Fee (Land & Building) first slab, but charge_name is Legal Opinion Fees; Property Valuation series starts at CHG-OC-136 (₹4400)

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **15 rows** origin=`Offers.processing`. Not in Structured_Data (source has documentation / CIC / CERSAI / LSR-NEC / valuation / bounce / NACH / sanction / NOC / certificates — no processing-fee rows; product pages note processing waiver till 31.03.2026).
  - Sample ids: CHG-PROC-61, CHG-PROC-62, CHG-PROC-63, CHG-PROC-64, CHG-PROC-65, CHG-PROC-66, CHG-PROC-67, CHG-PROC-68, …
  - Schemes seen: {'Cent Home loan': 5, 'Cent Home Double Plus': 5, 'Cent Top Up Loan': 5}; facilities={'Term Loan': 10, 'Overdraft': 5}; rate_types={'Floating': 15}.
  - Percentage/min/max fingerprints: {(0.005, None, 20000.0): 15}.
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- **6 rows** — Overdue charges on Default_Amount (slabbed); schemes Cent Home / Double Plus / Top Up.
  - `CHG-OD-9` pct=0.0 pct_pa_flag=Yes slab=0.0–30000.0 rate_type=Floating scheme=Cent Home loan facility=Term Loan
  - `CHG-OD-10` pct=0.02 pct_pa_flag=Yes slab=30001.0–None rate_type=Floating scheme=Cent Home loan facility=Term Loan
  - `CHG-OD-11` pct=0.0 pct_pa_flag=Yes slab=0.0–30000.0 rate_type=Floating scheme=Cent Home Double Plus facility=Overdraft
  - `CHG-OD-12` pct=0.02 pct_pa_flag=Yes slab=30001.0–None rate_type=Floating scheme=Cent Home Double Plus facility=Overdraft
  - `CHG-OD-13` pct=0.0 pct_pa_flag=Yes slab=0.0–30000.0 rate_type=Floating scheme=Cent Top Up Loan facility=Term Loan
  - `CHG-OD-14` pct=0.02 pct_pa_flag=Yes slab=30001.0–None rate_type=Floating scheme=Cent Top Up Loan facility=Term Loan

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-13` **Prepayment charges** | facility=Term Loan | scheme=Cent Home loan | rate_type=Floating | fixed=0.0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-14` **Prepayment charges** | facility=Overdraft | scheme=Cent Home Double Plus | rate_type=Floating | fixed=0.0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-15` **Prepayment charges** | facility=Term Loan | scheme=Cent Top Up Loan | rate_type=Floating | fixed=0.0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-172` **Prepayment charges** | facility=Term Loan | type=Fixed Amount | fixed=0.0 | pct=None | pct_base=None | rate_type=Fixed | note=Prepayment nil (CSV NIL)
- `CHG-PRE-173` **Prepayment charges (takeover)** | facility=Term Loan | type=Percentage | fixed=None | pct=0.04 | pct_base=Amount_Being_Paid | rate_type=Fixed | note=None

### 4f. Slab_Table extras
(none — no Slab_Table origin rows for this bank)

## 5. Notes

- Source of truth: `CBI_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (49 rows).
- Master filter: `Bank_charges` where `bank_key` == `central bank of india` (71 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Nil** (technical cheque return; TL disbursement instrument) accepted as master `Fixed Amount` 0.
- CIC Priority Sector waiver (source Nil row) encoded on master as `exemption_1` on CIC charge rows — counted matched.
- LSR / NEC Charge mapped to **Non-Encumbrance Certificate Charges**; master **Legal Opinion Fees** with identical area/slab/amounts flagged as extra duplicates.
- `CHG-OC-135` Legal Opinion Fees ₹3300 (≤ ₹10L) is a mislabeled first Property Valuation slab; correctly named Land & Building valuation ₹3300 is missing.
- Vacant-plot valuation: source Formula ↔ master `Both` (fixed + 0.10 on Over Actual fee); `property_valuation_scope=Vacant land`.
- NOC `Percentage_Calculated_On`=`limit` vs master `Sanctioned loan amount` = strict value mismatch.
- Sanction amendment `loan amount` ≈ `Sanctioned loan amount` treated as soft-equivalent.
- Multiple source documentation product pages club into shared master purpose/facility rows when amounts match (many-to-one).
- Facility Both→Any narrowing not failed when amounts match.
- No Slab_Table origin rows for this bank.
- Offers.processing rows remain extra vs Structured_Data despite product-page processing waiver till 31.03.2026.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 5
- **Still missing (bank service charges):** 2
- **Offers.processing extras → not an error (not from Structured_Data):** 15 listed items/groups
- **Prepayment extras → ignored:** 5 listed items/groups
- **Offers.overdue → no action unless noted separately:** 6 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 7
- **Value mismatches still listed in §2:** 1

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Creation / Modification Charge
- CERSAI Creation / Modification Charge
- CERSAI Search Charge
- CERSAI Satisfaction / Correction Charge
- Out of Pocket Expenses

### Still missing — bank service charges (actionable)
- Documentation Charge
- Valuation Fee
