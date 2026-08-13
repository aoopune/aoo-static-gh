# CUB / City Union Bank — Charges Audit

## Summary
- Source Structured_Data rows: 33
- Master Bank_charges rows (city union bank): 51
- Matched OK: 8
- Matched with rename only: 13
- Value mismatches: 3
- Missing in master (in source, not in master): 12
- Extra/redundant in master (in master, not in source): 27
- Duplicate issues in master: 0

## Verdict
FAIL — 3 value mismatch(es), 12 source charge(s) missing in master, 27 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Duplicate Interest Certificate** (facility=Both; product=Home loans and loans against properties) → `CHG-OC-168` **Duplicate Interest Certificate** (facility=Any); confirmed Fixed amount 250; charge_unit=Instance; frequency Each time; facility Both→Any broadening (amounts match — not counted as mismatch); gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Non-Collection of Property Documents Charges** (facility=Both; product=Home loans and loans against properties) → `CHG-OC-173` **Non-Collection of Property Documents Charges** (facility=Any); confirmed Fixed amount 1000; charge_unit=month; frequency Monthly; facility Both→Any; note_1 preserves 60-day post-closure levy language; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Breach of Construction Timeline Charges** (facility=Term Loan; product=Home loans and loans against properties) → `CHG-OC-174` **Breach of Construction Timeline Charges** (facility=Any); confirmed Formula '1% annually on POS or 50000 whichever is lower' encoded as Percentage 0.01 (=1%) + charge_max=50000; pct_base≈Outstanding principal loan amount; annual nature via charge_unit=year + frequency 'Every year after 4 years…' (percentage_per_annum blank — soft only); facility Term Loan→Any broadening (amounts match — not counted as mismatch); gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Renewal Fees** (facility=Overdraft; product=Home loans and loans against properties) → `CHG-OC-175` **Renewal Fees** (facility=Overdraft); confirmed Fixed amount 5000; charge_unit=renewal; frequency On renewal; Drop line OD note preserved; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **EMI Bounce / Dishonour Charges** (facility=Both; product=Home loans and loans against properties) → `CHG-OC-177` **EMI Bounce / Dishonour Charges** (facility=Any); confirmed Fixed amount 500; charge_unit=transaction; frequency Each bounce/return/dishonour; facility Both→Any; bounce-instruction note preserved; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Cheque / Repayment Mode Swap Charges** (facility=Both; product=Home loans and loans against properties) → `CHG-OC-178` **Cheque / Repayment Mode Swap Charges** (facility=Any); confirmed Fixed amount 500; charge_unit=Instance; frequency Each time; facility Both→Any; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Non-Submission of Post Disbursement Documents Charges** (facility=Both; product=Home loans and loans against properties) → `CHG-OC-184` **Non-Submission of Post Disbursement Documents Charges** (facility=Any); confirmed Fixed amount 5000; charge_unit=month; frequency Monthly; due-until-submitted note preserved; facility Both→Any; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Delay in Creation of EM Charge Charges** (facility=Both; product=Home loans and loans against properties) → `CHG-OC-185` **Delay in Creation of EM Charge Charges** (facility=Any); confirmed Percentage 0.02 (=2%); charge_unit=annum; frequency While delay/high-risk point continues; pct_base: source='Outstanding liability' master='Outstanding loan amount' (treated equivalent); p.a. encoded via charge_unit=annum (percentage_per_annum blank — soft only); gst_applicable master='Yes' aligns with source '+ GST'; facility Both→Any.

### 1b. Rename only (values OK)
- **Conversion Charges** (facility=Term Loan; product=Home loans and loans against properties; loc=Any) → `CHG-OC-164` **Interest Rate Type Switch Fees** (facility=Term Loan) — rename; confirmed Fixed amount 3000; switch Floating→Fixed; charge_unit=Switch; frequency Each time; source also covers floating→floating (adjustable) at ₹3000 — Floating→Floating not separately encoded (soft); gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Conversion Charges** (facility=Overdraft; product=Home loans and loans against properties; loc=Any) → `CHG-OC-165` **Interest Rate Type Switch Fees** (facility=Overdraft) — rename; confirmed Percentage 0.005 (=0.5%); pct_base≈Outstanding principal loan amount (=Principal outstanding); Fixed→Floating OD split; source states OD 0.5% without direction; master encodes both directions; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Conversion Charges** (facility=Overdraft; product=Home loans and loans against properties; loc=Any) → `CHG-OC-166` **Interest Rate Type Switch Fees** (facility=Overdraft) — rename; confirmed Percentage 0.005 (=0.5%); pct_base≈Outstanding principal loan amount; Floating→Fixed OD split; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Property Document Photocopy / Retrieval Charges** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-167` **Property Document Retrieval Charge** (facility=Any) — rename; confirmed Fixed amount 200; charge_unit≈Instance (source Per document set); facility Both→Any; distinct from CHG-OC-176 ₹500 Loan/Property Document Retrieval; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **List of Documents Charges** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-169` **List of Documents Charge - Duplicate** (facility=Any) — rename; confirmed Fixed amount 500; charge_unit≈Request/Instance; frequency Each time; master adds Duplicate + physical-copy flags (source does not restrict to duplicate — soft rename); facility Both→Any; gst_applicable master='Yes' (source unspecified — soft).
- **Revision in Spread** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-170` **Interest Rate Repricing Fees** (facility=Any) — rename; confirmed Formula '0.10% of POS or 3000 whichever higher' encoded as Percentage 0.001 + charge_min=3000; pct_base≈Outstanding principal; master splits Floating Higher→Lower repricing row; facility Both→Any; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Revision in Spread** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-171` **Interest Rate Repricing Fees** (facility=Any) — rename; confirmed Percentage 0.001 + charge_min=3000; Fixed Higher→Lower repricing twin of CHG-OC-170; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Loan / Property Document Retrieval Charges** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-176` **Property Document Retrieval Charge** (facility=Any) — rename; confirmed Fixed amount 500; charge_unit=Instance; frequency Each time; facility Both→Any; distinct from CHG-OC-167 ₹200 photocopy/retrieval; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Amortisation Schedule Charges** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-179` **Amortisation Schedule Issuance Charges** (facility=Any) — rename; confirmed Fixed amount 200; physical branch printout via charged_for_physical_copy=Yes; facility Both→Any; charge_unit Schedule≈Per printout; gst_applicable: source unspecified; master='Yes' (not counted as mismatch).
- **Statement of Account Charges** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-180` **Statement of Account Charges - Duplicate** (facility=Any) — rename; confirmed Fixed amount 200; physical branch printout flags set; master name adds 'Duplicate' (source is physical printout charge — soft rename); facility Both→Any; gst_applicable master='Yes' (source unspecified — soft).
- **Duplicate NOC / No Dues Certificate** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-181` **Duplicate No Objection Certificate Issuance Fees** (facility=Any) — rename; confirmed Fixed amount 250; source single row split into NOC + No Dues master rows; facility Both→Any; gst_applicable master='Yes' (source unspecified — soft).
- **Duplicate NOC / No Dues Certificate** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-182` **Duplicate No Dues Certificate Issuance Fees** (facility=Any) — rename; confirmed Fixed amount 250; No Dues half of source combined certificate row; facility Both→Any; gst_applicable master='Yes' (source unspecified — soft).
- **NOC Revalidation Charges** (facility=Both; product=Home loans and loans against properties; loc=Any) → `CHG-OC-183` **Revalidation of No Objection Certificate Fees** (facility=Any) — rename; confirmed Fixed amount 250; frequency Each request≈Each time; facility Both→Any; gst_applicable master='Yes' (source unspecified — soft).

## 2. Value mismatches

### Administrative Charges (facility=Both) → `CHG-OC-162` Legal and Valuation Charges
- Rename also present: `Administrative Charges` → `Legal and Valuation Charges`
- Source fingerprint: type=Fixed amount amount='Up to 10000' min=None max=10000 pct_on=None
- Master fingerprint: fixed=10000 pct=None min=None max=10000 base=None facility=Any
- **amount_shape**: source='Up to 10000 (ceiling via Max_Amount=10000; not a flat fixed fee; additional amount may apply for other/higher sq.ft properties)' vs master='fixed_amount=10000 (flat Fixed Amount); charge_max=10000'

### Conversion Charges (facility=Term Loan) → `CHG-OC-163` Interest Rate Type Switch Fees
- Rename also present: `Conversion Charges` → `Interest Rate Type Switch Fees`
- Source fingerprint: type=Percentage amount='2%' min=None max=None pct_on=Principal outstanding
- Master fingerprint: fixed=3000 pct=None min=None max=None base=None facility=Term Loan switch=Fixed→Floating
- **charge_type**: source='Percentage' vs master='Fixed Amount'
- **amount**: source='2% of Principal outstanding (Semi Fixed / Fixed → Floating)' vs master='fixed_amount=3000 (no percentage); interest_rate_type_switch Fixed→Floating'

### Property Swapping / Partial Property Release (facility=Both) → `CHG-OC-172` Property Swapping / Part Property Release Charges
- Rename also present: `Property Swapping / Partial Property Release` → `Property Swapping / Part Property Release Charges`
- Source fingerprint: type=Percentage amount='0.10%' min=10000 max=25000 pct_on=Loan amount
- Master fingerprint: fixed=None pct=0.001 min=10000 max=25000 base=Outstanding loan amount facility=Any
- **percentage_base_value**: source='Loan amount' vs master='Outstanding loan amount'

## 3. Missing in master

- **CERSAI Charges** | facility=Both | product=Home loans and loans against properties | type=Fixed amount | amount=100 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per property | frequency=Each time | conditions='Non refundable charges under CERSAI.' (Structured_Data excel row 6)
- **Statutory / Mortgage Creation Charges** | facility=Both | product=Home loans and loans against properties | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=Each time | conditions='Includes stamp duty, MOE and similar statutory / mortgage creation charges.' (Structured_Data excel row 10)
- **Escrow Non-Adherence Charges** | facility=Both | product=Home loans and loans against properties | type=Percentage | amount=2% per annum | min=None max=None | pct_on=Principal outstanding | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per quarter | frequency=Quarterly | conditions='Applicable for Loan against rent receivables. Charged for non-compliance of agreed escrow terms up to fulfilment.' (Structured_Data excel row 12)
- **Auction Charges for Repossessed Asset** | facility=Both | product=Home loans and loans against properties | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='' (Structured_Data excel row 18)
- **Legal Suit Charges** | facility=Both | product=Home loans and loans against properties | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='' (Structured_Data excel row 19)
- **SARFAESI Proceedings Charges** | facility=Both | product=Home loans and loans against properties | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='' (Structured_Data excel row 20)
- **Enforcement Charges** | facility=Both | product=Home loans and loans against properties | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='' (Structured_Data excel row 21)
- **Paper Advertisement Charges** | facility=Both | product=Home loans and loans against properties | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='' (Structured_Data excel row 22)
- **Professional Charges (Advocate / Retainership)** | facility=Both | product=Home loans and loans against properties | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='' (Structured_Data excel row 23)
- **Repossession Charges** | facility=Both | product=Home loans and loans against properties | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='' (Structured_Data excel row 24)
- **Security Guard Charges** | facility=Both | product=Home loans and loans against properties | type=At actuals | amount=At actuals | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per instance | frequency=As incurred | conditions='' (Structured_Data excel row 25)
- **Prepayment Statement Charges** | facility=Both | product=Home loans and loans against properties | type=Fixed amount | amount=200 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=Per printout | frequency=Each time | conditions='For physical print out at the branch.' (Structured_Data excel row 30)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `city union bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 24 `Other charges` rows map to a Structured_Data counterpart (21 value-OK matches/renames + 3 value mismatches). No unmatched OC orphan rows.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **18 rows** origin=`Offers.processing`. Not in Structured_Data (source is CUB service-charges schedule — admin/conversion/CERSAI/documents/penal/recovery actuals only; no processing-fee rows).
  - Sample ids: CHG-PROC-806, CHG-PROC-807, CHG-PROC-808, CHG-PROC-809, CHG-PROC-810, CHG-PROC-811, CHG-PROC-812, CHG-PROC-813…
  - Schemes seen: Affordable Home Loan ×6; Prime Home Loan ×6; Premium Home Loan ×6; facility=Term Loan; rate_type=Floating×9 + Fixed×9.
  - Percentage/min/max fingerprints: {(0.0035, None, None): 6 (=0.35% Affordable); (0.0025, None, None): 6 (=0.25% Prime); (0.002, None, None): 6 (=0.20% Premium)}.
  - CIBIL bands (distinct, not duplicates): 800–900, 700–799, 100–200 × each scheme×rate_type.
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-73` **Overdue charges** | facility=Term Loan | scheme=Affordable Home Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-74` **Overdue charges** | facility=Term Loan | scheme=Prime Home Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-75` **Overdue charges** | facility=Term Loan | scheme=Premium Home Loan | rate_type=Floating | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-76` **Overdue charges** | facility=Term Loan | scheme=Affordable Home Loan | rate_type=Fixed | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-77` **Overdue charges** | facility=Term Loan | scheme=Prime Home Loan | rate_type=Fixed | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount
- `CHG-OD-78` **Overdue charges** | facility=Term Loan | scheme=Premium Home Loan | rate_type=Fixed | pct=0.05 | percentage_per_annum=Yes | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-59` **Prepayment charges** | facility=Term Loan | scheme=Affordable Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-60` **Prepayment charges** | facility=Term Loan | scheme=Prime Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-61` **Prepayment charges** | facility=Term Loan | scheme=Premium Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
(none)

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `CUB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (33 rows).
- Master filter: `Bank_charges` where `bank_key` == `city union bank` (51 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Administrative Charges** “Up to ₹10,000” coded as flat `fixed_amount=10000` (with `charge_max=10000`) — value mismatch per BAN upto/ceiling precedent.
- **Conversion Charges** Fixed/Semi-Fixed→Floating at **2% of POS** is present as `CHG-OC-163` but wrongly stored as Fixed ₹3,000 (₹3,000 applies to floating-linked TL conversions only).
- **Property Swapping** percentage base `Loan amount` vs master `Outstanding loan amount` — strict value mismatch (BOM/CAN precedent).
- Formula encodings OK where matched: Revision in Spread → 0.10% + min ₹3,000; Breach of construction → 1% + max ₹50,000.
- Eight recovery/legal **At actuals** rows (auction through security guard) plus CERSAI ₹100, statutory/mortgage actuals, escrow 2% p.a., and prepayment-statement ₹200 are absent from master.
- No Other-charges redundant/duplicate orphan rows vs Structured_Data; no `Slab_Table` or `CSV.fixed_prepay` origin rows for this bank.
- Offers.processing CIBIL bands share fee fingerprints within each scheme×rate but are distinct score bands (not internal duplicates).
- openpyxl `data_only=True` used for both workbooks.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 2
- **Still missing (bank service charges):** 10
- **Offers.processing extras → not an error (not from Structured_Data):** 19 listed items/groups
- **Prepayment extras → ignored:** 3 listed items/groups
- **Offers.overdue → no action unless noted separately:** 6 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 3

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Charges
- Statutory / Mortgage Creation Charges

### Still missing — bank service charges (actionable)
- Escrow Non-Adherence Charges
- Auction Charges for Repossessed Asset
- Legal Suit Charges
- SARFAESI Proceedings Charges
- Enforcement Charges
- Paper Advertisement Charges
- Professional Charges (Advocate / Retainership)
- Repossession Charges
- Security Guard Charges
- Prepayment Statement Charges
