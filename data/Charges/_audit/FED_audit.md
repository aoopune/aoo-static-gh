# FED / Federal Bank — Charges Audit

## Summary
- Source Structured_Data rows: 31
- Master Bank_charges rows (federal bank): 47
- Matched OK: 13
- Matched with rename only: 20
- Value mismatches: 4
- Missing in master (in source, not in master): 2
- Extra/redundant in master (in master, not in source): 10
- Duplicate issues in master: 0

## Verdict
FAIL — 4 value mismatch(es), 2 source charge(s) missing in master, 10 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **CIBIL Report Charge** (facility=Both) → `CHG-OC-292` **CIBIL Report Charge**; confirmed Nil→Fixed amount 0; charge_unit=Report; frequency Each time; facility Both→Any broadening (amounts match — not counted as mismatch); gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Property Inspection Fee** (facility=Both; loc=Within same Panchayat/Municipality/Corporation/10km limits) → `CHG-OC-313` **Property Inspection Fee**; confirmed Nil→Fixed amount 0; slab None–25000; charge_by_area=Within same Panchayat/Municipality/Corporation/10km limits; charge_unit=annum; freq=Per annum; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent); facility Both→Any; gst master='Yes' (soft).
- **Property Inspection Fee** (facility=Both; loc=Within same Panchayat/Municipality/Corporation/10km limits) → `CHG-OC-314` **Property Inspection Fee**; confirmed Fixed amount 100; slab 25001–200000; charge_by_area=Within same…/10km limits; charge_unit=annum; freq=Per annum; slab_basis master='Sanctioned loan amount' (source loan-amount band; treated equivalent); facility Both→Any; gst master='Yes' (soft).
- **Property Inspection Fee** (facility=Both; loc=Within same Panchayat/Municipality/Corporation/10km limits) → `CHG-OC-315` **Property Inspection Fee**; confirmed Percentage 5e-05 (=0.005%); min=100 max=500; slab_from=200001; charge_unit=Inspection; pct_base: source='limit' master='Sanctioned loan amount' (treated equivalent); frequency: source='per inspection' master='Per annum' (soft note only — not counted as mismatch); facility Both→Any; gst master='Yes' (soft).
- **Legal and Pre-Credit Inspection / Verification Charge** (facility=Both) → `CHG-OC-316` **Legal and Pre-Credit Inspection / Verification Charge**; confirmed At actuals; charge_unit=Instance; frequency Each time; facility Both→Any; gst master='Yes' (soft).
- **Property Inspection Fee (Beyond Local Limits)** (facility=Both; loc=Beyond same Panchayat/Municipality/Corporation/10km limits) → `CHG-OC-317` **Property Inspection Fee (Beyond Local Limits)**; confirmed Formula 'Normal Charges + Actual Expenses…' encoded as Fixed amount 0 (normal Nil slab) + actuals_in_addition_to_charge=Yes; slab None–25000; area=Beyond same…/10km limits; facility Both→Any; gst master='Yes' (soft).
- **Property Inspection Fee (Beyond Local Limits)** (facility=Both; loc=Beyond same Panchayat/Municipality/Corporation/10km limits) → `CHG-OC-318` **Property Inspection Fee (Beyond Local Limits)**; confirmed Formula expanded: Fixed amount 100 (normal charges twin) + actuals_in_addition_to_charge=Yes; slab 25001–200000; area=Beyond…; facility Both→Any; gst master='Yes' (soft).
- **Property Inspection Fee (Beyond Local Limits)** (facility=Both; loc=Beyond same Panchayat/Municipality/Corporation/10km limits) → `CHG-OC-319` **Property Inspection Fee (Beyond Local Limits)**; confirmed Formula expanded: Percentage 5e-05 (=0.005%) (normal charges twin) + actuals_in_addition_to_charge=Yes; slab_from=200001; area=Beyond…; soft: CHG-OC-319 lacks charge_min=100 / charge_max=500 present on within-limits twin CHG-OC-315 (not counted as mismatch — formula expansion omits caps); facility Both→Any; gst master='Yes' (soft).
- **Loan Repayment Mandate Return Charge** (facility=Both) → `CHG-OC-320` **Loan Repayment Mandate Return Charge**; confirmed Fixed amount 200; charge_unit=Return; frequency='first return in a month only'; facility Both→Any; gst master='Yes' (soft).
- **ECS/NACH Return Charge** (facility=Both) → `CHG-OC-321` **ECS/NACH Return Charge**; confirmed Fixed amount 350; charge_unit=Return; frequency='first return of a particular mandate' (Savings Bank EMI collection); soft: source Account_Type=Savings Bank not stored in a master column — amount+frequency fingerprint distinguishes from Current/OD/CC twin; facility Both→Any; gst master='Yes' (soft).
- **ECS/NACH Return Charge** (facility=Both) → `CHG-OC-322` **ECS/NACH Return Charge**; confirmed Fixed amount 500; frequency='subsequent returns' (Savings Bank); soft: Savings Bank account type not in master column; facility Both→Any; gst master='Yes' (soft).
- **ECS/NACH Return Charge** (facility=Both) → `CHG-OC-323` **ECS/NACH Return Charge**; confirmed Fixed amount 400; frequency='first return of a particular mandate' (Current/OD/CC); soft: Current/OD/CC account type not in master column — distinguished by amount vs SB ₹350 twin; facility Both→Any; gst master='Yes' (soft).
- **ECS/NACH Return Charge** (facility=Both) → `CHG-OC-324` **ECS/NACH Return Charge**; confirmed Fixed amount 750; frequency='subsequent returns' (Current/OD/CC); soft: Current/OD/CC account type not in master column; facility Both→Any; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Rate Switch Fee** (facility=Both) → `CHG-OC-288` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.0025 (=0.25%); facility=Term Loan; Fixed→Floating; pct_base=Balance outstanding; charge_unit=Switch; frequency Each time; rename Rate Switch Fee → Interest Rate Type Switch Fees; source Facility=Both + 'balance outstanding / Drawing power whichever is higher' split into TL (Balance outstanding) + OD (Drawing Power) direction pairs (treated equivalent encoding; 'whichever is higher' not encoded as max-of rule — soft); gst_applicable: source notes GST additional on applicable charges; master='Yes' (not counted as mismatch).
- **Rate Switch Fee** (facility=Both) → `CHG-OC-289` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.0025 (=0.25%); facility=Term Loan; Floating→Fixed; pct_base=Balance outstanding; charge_unit=Switch; frequency Each time; rename Rate Switch Fee → Interest Rate Type Switch Fees; source Facility=Both + 'balance outstanding / Drawing power whichever is higher' split into TL (Balance outstanding) + OD (Drawing Power) direction pairs (treated equivalent encoding; 'whichever is higher' not encoded as max-of rule — soft); gst_applicable: source notes GST additional on applicable charges; master='Yes' (not counted as mismatch).
- **Rate Switch Fee** (facility=Both) → `CHG-OC-290` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.0025 (=0.25%); facility=Overdraft; Fixed→Floating; pct_base=Drawing Power; charge_unit=Switch; frequency Each time; rename Rate Switch Fee → Interest Rate Type Switch Fees; source Facility=Both + 'balance outstanding / Drawing power whichever is higher' split into TL (Balance outstanding) + OD (Drawing Power) direction pairs (treated equivalent encoding; 'whichever is higher' not encoded as max-of rule — soft); gst_applicable: source notes GST additional on applicable charges; master='Yes' (not counted as mismatch).
- **Rate Switch Fee** (facility=Both) → `CHG-OC-291` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.0025 (=0.25%); facility=Overdraft; Floating→Fixed; pct_base=Drawing Power; charge_unit=Switch; frequency Each time; rename Rate Switch Fee → Interest Rate Type Switch Fees; source Facility=Both + 'balance outstanding / Drawing power whichever is higher' split into TL (Balance outstanding) + OD (Drawing Power) direction pairs (treated equivalent encoding; 'whichever is higher' not encoded as max-of rule — soft); gst_applicable: source notes GST additional on applicable charges; master='Yes' (not counted as mismatch).
- **NOC / Credit Opinion Charge** (facility=Both) → `CHG-OC-295` **No Objection Certificate Issuance Fees** — rename; confirmed Fixed amount 20000; slab_from=50000001; slab_to=None; rename NOC / Credit Opinion Charge → No Objection Certificate Issuance Fees; source combined NOC/Credit Opinion split into separate NOC + Credit Opinion master series; slab_basis master='Sanctioned loan amount' (source credit-limit band; treated equivalent); facility Both→Any; gst master='Yes' (soft).
- **NOC / Credit Opinion Charge** (facility=Both) → `CHG-OC-298` **Credit Opinion Report Charges** — rename; confirmed Fixed amount 20000; slab_from=50000001; slab_to=None; rename NOC / Credit Opinion Charge → Credit Opinion Report Charges; source combined NOC/Credit Opinion split into separate NOC + Credit Opinion master series; slab_basis master='Sanctioned loan amount' (source credit-limit band; treated equivalent); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network I) → `CHG-OC-299` **Property Valuation Report Charges** — rename; confirmed Fixed amount 1300; slab None–500000; charge_by_area='Network I'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network II) → `CHG-OC-300` **Property Valuation Report Charges** — rename; confirmed Fixed amount 1200; slab None–500000; charge_by_area='Network II'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network I) → `CHG-OC-301` **Property Valuation Report Charges** — rename; confirmed Fixed amount 1950; slab 500001–1000000; charge_by_area='Network I'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network II) → `CHG-OC-302` **Property Valuation Report Charges** — rename; confirmed Fixed amount 1800; slab 500001–1000000; charge_by_area='Network II'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network I) → `CHG-OC-303` **Property Valuation Report Charges** — rename; confirmed Fixed amount 3900; slab 1000001–5000000; charge_by_area='Network I'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network II) → `CHG-OC-304` **Property Valuation Report Charges** — rename; confirmed Fixed amount 6500; slab 1000001–5000000; charge_by_area='Network II'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network I) → `CHG-OC-305` **Property Valuation Report Charges** — rename; confirmed Fixed amount 6500; slab 5000001–10000000; charge_by_area='Network I'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network II) → `CHG-OC-306` **Property Valuation Report Charges** — rename; confirmed Fixed amount 7800; slab 5000001–10000000; charge_by_area='Network II'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network I) → `CHG-OC-307` **Property Valuation Report Charges** — rename; confirmed Fixed amount 7800; slab 10000001–50000000; charge_by_area='Network I'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network II) → `CHG-OC-308` **Property Valuation Report Charges** — rename; confirmed Fixed amount 9750; slab 10000001–50000000; charge_by_area='Network II'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network I) → `CHG-OC-309` **Property Valuation Report Charges** — rename; confirmed Fixed amount 9750; slab 50000001–250000000; charge_by_area='Network I'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network II) → `CHG-OC-310` **Property Valuation Report Charges** — rename; confirmed Fixed amount 13000; slab 50000001–250000000; charge_by_area='Network II'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network I) → `CHG-OC-311` **Property Valuation Report Charges** — rename; confirmed Fixed amount 13000; slab 250000001–None; charge_by_area='Network I'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both; loc=Network II) → `CHG-OC-312` **Property Valuation Report Charges** — rename; confirmed Fixed amount 19500; slab 250000001–None; charge_by_area='Network II'; charge_unit=Property; frequency Each time; rename Valuation Fee → Property Valuation Report Charges; slab_basis master='Realizable value of assets' (source property-value band; treated equivalent); property_valuation_scope master='Both' (source unspecified — soft); facility Both→Any; gst master='Yes' (soft).

## 2. Value mismatches

### NOC / Credit Opinion Charge (excel row 6) → `CHG-OC-293` No Objection Certificate Issuance Fees
- Rename also present: `NOC / Credit Opinion Charge` → `No Objection Certificate Issuance Fees`
- Source fingerprint: type=Fixed amount amount='1000' min=None max=None pct_on=None slab=None-999999 facility=Both loc='Any' cust=Any
- Master fingerprint: fixed=1000 pct=None min=None max=None slab=None-1000000 pct_base=None facility=Any gst=Yes
- **slab_to / Loan_Amount_To**: source='999999 (wording: credit limit less than Rs.10 L)' vs master='1000000 (inclusive ≤ ₹10,00,000)'
- Note: rename NOC / Credit Opinion Charge → No Objection Certificate Issuance Fees
- Note: source combined NOC/Credit Opinion split into separate NOC + Credit Opinion master series (CUB Duplicate NOC/No Dues precedent)
- Note: fixed amount 1000 matches; facility Both→Any; gst master='Yes' (soft)

### NOC / Credit Opinion Charge (excel row 6) → `CHG-OC-296` Credit Opinion Report Charges
- Rename also present: `NOC / Credit Opinion Charge` → `Credit Opinion Report Charges`
- Source fingerprint: type=Fixed amount amount='1000' min=None max=None pct_on=None slab=None-999999 facility=Both loc='Any' cust=Any
- Master fingerprint: fixed=1000 pct=None min=None max=None slab=None-1000000 pct_base=None facility=Any gst=Yes
- **slab_to / Loan_Amount_To**: source='999999 (wording: credit limit less than Rs.10 L)' vs master='1000000 (inclusive ≤ ₹10,00,000)'
- Note: rename NOC / Credit Opinion Charge → Credit Opinion Report Charges
- Note: source combined NOC/Credit Opinion split into separate NOC + Credit Opinion master series (CUB Duplicate NOC/No Dues precedent)
- Note: fixed amount 1000 matches; facility Both→Any; gst master='Yes' (soft)

### NOC / Credit Opinion Charge (excel row 7) → `CHG-OC-294` No Objection Certificate Issuance Fees
- Rename also present: `NOC / Credit Opinion Charge` → `No Objection Certificate Issuance Fees`
- Source fingerprint: type=Fixed amount amount='5000' min=None max=None pct_on=None slab=1000000-50000000 facility=Both loc='Any' cust=Any
- Master fingerprint: fixed=5000 pct=None min=None max=None slab=1000001-50000000 pct_base=None facility=Any gst=Yes
- **slab_from / Loan_Amount_From**: source='1000000 (wording: Rs.10 L and above to Rs.500 L including Rs.500 L)' vs master='1000001'
- Note: rename NOC / Credit Opinion Charge → No Objection Certificate Issuance Fees
- Note: source combined NOC/Credit Opinion split into separate NOC + Credit Opinion master series
- Note: fixed amount 5000 and slab_to=50000000 match; facility Both→Any; gst master='Yes' (soft)

### NOC / Credit Opinion Charge (excel row 7) → `CHG-OC-297` Credit Opinion Report Charges
- Rename also present: `NOC / Credit Opinion Charge` → `Credit Opinion Report Charges`
- Source fingerprint: type=Fixed amount amount='5000' min=None max=None pct_on=None slab=1000000-50000000 facility=Both loc='Any' cust=Any
- Master fingerprint: fixed=5000 pct=None min=None max=None slab=1000001-50000000 pct_base=None facility=Any gst=Yes
- **slab_from / Loan_Amount_From**: source='1000000 (wording: Rs.10 L and above to Rs.500 L including Rs.500 L)' vs master='1000001'
- Note: rename NOC / Credit Opinion Charge → Credit Opinion Report Charges
- Note: source combined NOC/Credit Opinion split into separate NOC + Credit Opinion master series
- Note: fixed amount 5000 and slab_to=50000000 match; facility Both→Any; gst master='Yes' (soft)

## 3. Missing in master

- **CERSAI Registration / Modification Charge** | facility=Both | product=Housing loan | type=Nil | amount=Nil | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=per registration or modification | frequency=each time | conditions='Cersai registration/modification charges for Housing loan are Nil under latest Retail Loan Charges product table.' (Structured_Data excel row 4)
- **CERSAI Property Search Charge** | facility=Both | product=Housing loan | type=Fixed amount | amount=15 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=per search | frequency=each time | conditions='Charge for searching security interest on properties.' (Structured_Data excel row 5)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `federal bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 37 `Other charges` rows map to a Structured_Data counterpart (33 value-OK matches/renames + 4 value mismatches on the NOC/Credit Opinion ₹10L slab boundary). CERSAI rows are missing rather than duplicated.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **6 rows** origin=`Offers.processing`. Not in Structured_Data (source is Federal Bank retail/housing schedule — rate switch / CIBIL / CERSAI / NOC-Credit Opinion / valuation / inspection / bounce; no processing-fee rows).
  - Sample ids: CHG-PROC-885, CHG-PROC-886, CHG-PROC-887, CHG-PROC-888, CHG-PROC-889, CHG-PROC-890
  - Schemes seen: Home Loan ×6; facility=Term Loan; rate_type=Floating.
  - Percentage/min/max fingerprints: {(0.005, 10000, None): 6} (= 0.50% of sanctioned amount, min ₹10,000).
  - CIBIL bands (distinct, not duplicates): 300–599, 600–649, 650–699, 700–749, 750–799, 800–900.
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-85` **Overdue charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | pct=0.18 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-71` **Prepayment charges** | facility=Term Loan | scheme=Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-216` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | pct=0.03 | pct_base=Amount_Being_Paid | gst=Yes
- `CHG-PRE-217` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | pct=0.03 | pct_base=Amount_Being_Paid | gst=Yes

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `FED_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (31 rows).
- Master filter: `Bank_charges` where `bank_key` == `federal bank` (47 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Rate Switch Fee** 0.25% renamed/split to four **Interest Rate Type Switch Fees** rows (TL/OD × Fixed↔Floating); TL uses Balance outstanding, OD uses Drawing Power.
- **NOC / Credit Opinion Charge** split into parallel **No Objection Certificate Issuance Fees** + **Credit Opinion Report Charges** series (same three amount bands).
- Strict slab mismatch at the ₹10L boundary: source `< ₹10L` (`Loan_Amount_To=999999`) / `≥ ₹10L` (`Loan_Amount_From=1000000`) vs master `≤ 1000000` / `≥ 1000001` — fee at exactly ₹10,00,000 differs (source ₹5,000 vs master ₹1,000).
- **Valuation Fee** Network I/II × 7 property-value slabs all present with identical fixed amounts under **Property Valuation Report Charges**.
- **Property Inspection Fee (Beyond Local Limits)** formula expanded into three normal-charge twin slabs with `actuals_in_addition_to_charge=Yes`.
- **CERSAI Registration / Modification** (Nil) and **CERSAI Property Search** (₹15) are absent from master.
- No Other-charges orphan/redundant rows vs Structured_Data.
- No `Slab_Table` origin rows for this bank.
- Offers.processing CIBIL bands share the same fee fingerprint but are distinct score bands (not internal duplicates).
- openpyxl `data_only=True` used for both workbooks.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 2
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 2 listed items/groups
- **Offers.overdue → no action unless noted separately:** 1 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 2
- **Value mismatches still listed in §2:** 4

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Registration / Modification Charge
- CERSAI Property Search Charge

### Still missing — bank service charges (actionable)
- (none)
