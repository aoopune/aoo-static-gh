# BOM / Bank of Maharashtra — Charges Audit

## Summary
- Source Structured_Data rows: 33
- Master Bank_charges rows (bank of maharashtra): 82
- Matched OK: 7
- Matched with rename only: 10
- Value mismatches: 3
- Missing in master (in source, not in master): 13
- Extra/redundant in master (in master, not in source): 62
- Duplicate issues in master: 2

## Verdict
FAIL — 3 value mismatch(es), 13 source charge(s) missing in master, 62 extra/redundant master row(s), 2 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Construction Delay Charge** (facility=Term Loan; product=Housing Loan for purchase of plot and construction thereof) → `CHG-OC-72` **Construction Delay Charge** (facility=Term Loan); confirmed Percentage 2% p.a. (=0.02 fraction, percentage_per_annum=Yes); pct_on≈Sanctioned amount / Sanctioned loan amount; gst_applicable Yes. Note: master has spurious interest_rate_type_switch Fixed→Floating unrelated to this charge.
- **No Dues Certificate Charge** (facility=Any; loc=Metro / Urban; customer=Individual) → `CHG-OC-74` **No Dues Certificate Charge** (facility=Any); confirmed Fixed amount 100; area=Metro / Urban; customer=Individual; gst_applicable Yes.
- **No Dues Certificate Charge** (facility=Any; loc=Metro / Urban; customer=Non-individual) → `CHG-OC-75` **No Dues Certificate Charge** (facility=Any); confirmed Fixed amount 150; area=Metro / Urban; customer=Non-Individual.
- **No Dues Certificate Charge** (facility=Any; loc=Rural / Semi-Urban; customer=Individual) → `CHG-OC-76` **No Dues Certificate Charge** (facility=Any); confirmed Fixed amount 25; area=Rural / Semi-urban; customer=Individual.
- **No Dues Certificate Charge** (facility=Any; loc=Rural / Semi-Urban; customer=Non-individual) → `CHG-OC-77` **No Dues Certificate Charge** (facility=Any); confirmed Fixed amount 75; area=Rural / Semi-urban; customer=Non-Individual.
- **Cheque Return Charge (Inward, Financial)** (facility=Any) → `CHG-OC-87` **Cheque Return Charge (Inward, Financial)** (facility=Any); confirmed Fixed amount 500; gst_applicable Yes.
- **Cheque Return Charge (Inward, Non-Financial)** (facility=Any) → `CHG-OC-88` **Cheque Return Charge (Inward, Non-Financial)** (facility=Any); confirmed Fixed amount 150; gst_applicable Yes.

### 1b. Rename only (values OK)
- **Rate Switchover Charge** (facility=Term Loan; product=Any retail housing loan) → `CHG-OC-68` **Interest Rate Type Switch Fees** (facility=Any) — rename; confirmed Fixed amount 5000; master encodes Fixed→Floating; source covers floating↔fixed both ways.
- **Flexi Scheme Conversion Charge** (facility=Both; product=Maha Super Housing Loan / Maha Super Flexi Housing Loan) → `CHG-OC-70` **Facility Conversion fees** (facility=Term Loan) — rename; confirmed Fixed amount 2000; master encodes Maha Super Housing Loan→Maha Super Flexi Housing Loan (TL→OD). Source Both directions in one row.
- **Solvency Certificate Charge** (facility=Any) → `CHG-OC-73` **Solvency Certificate Charges** (facility=Any) — rename; confirmed Percentage 0.30% (=0.003); min=1000; max=30000; pct_on=Solvency certificate amount.
- **Credit Report Charge** (facility=Any) → `CHG-OC-78` **Credit Opinion Report Charges** (facility=Any) — rename; confirmed Fixed amount 1000.
- **Loan Document Copy Charge** (facility=Any; first-time) → `CHG-OC-79` **Loan Document Copy Charges** (facility=Any) — rename; confirmed Nil → Fixed Amount 0; note_1 first-time issue.
- **Loan Document Copy Charge** (facility=Any; subsequent) → `CHG-OC-80` **Loan Document Copy Charges** (facility=Any) — rename; confirmed Fixed amount 10 per leaf; min=100.
- **CIC Report Charge** (facility=Any; customer=Individual) → `CHG-OC-81` **Credit Information Report (CIC) Charges** (facility=Any) — rename; confirmed Fixed amount 100; customer=Individual.
- **CIC Report Charge** (facility=Any; customer=Non-individual corporates) → `CHG-OC-82` **Credit Information Report (CIC) Charges** (facility=Any) — rename; confirmed Fixed amount 1000; customer=Non-Individual.
- **NOC / Sanction Modification Charge** (facility=Any; loan 10Cr–50Cr) → `CHG-OC-85` **No Objection Certificate Issuance Fees / Sanction Modification Charges** (facility=Any) — rename; confirmed Fixed amount 300000; slab 100000000–500000000.
- **NOC / Sanction Modification Charge** (facility=Any; loan above 50Cr) → `CHG-OC-86` **No Objection Certificate Issuance Fees / Sanction Modification Charges** (facility=Any) — rename; confirmed Fixed amount 500000; slab_from=500000000 open upper.

## 2. Value mismatches

- **Account Handling Charge** (excel row 2; product=HOUSING LOAN EXCEPT MAHA SUPER GREEN) ↔ `CHG-OC-67` **Account Handling Charge** — percentage_base_value: source='Loan amount' vs master='Outstanding loan amount'. Percentage 0.10% (=0.001), min=500, max=11000 match; base is wrong. Facility Term Loan→Any. Product-specific Green/Topup source rows not separately present.
- **Incidental Closure Charge** (excel row 25) ↔ `CHG-OC-83` **Incidental Loan Closure Charge** — customer_type: source='Any' vs master='Non-Individual'. Fixed amount 150 matches; rename Closure→Loan Closure OK; customer_type incorrectly narrowed to Non-Individual.
- **NOC / Sanction Modification Charge** (excel row 26; ₹1 Cr–₹10 Cr slab) ↔ `CHG-OC-84` **No Objection Certificate Issuance Fees / Sanction Modification Charges** — slab_from: source=10000000 vs master=None. Fixed amount 100000 matches; source exposure ₹1 Cr–₹10 Cr but master open lower bound (null)–₹10 Cr. Rename OK.

## 3. Missing in master

- **Account Handling Charge** | facility=Term Loan | product=MAHA SUPER GREEN HOUSING LOAN SCHEME | type=Percentage | amount=0.10% | min=500 max=11000 | pct_on=Loan amount | customer=Any | conditions='Includes Documentation, Inspection/supervision, NeSL and CIBIL charges. Charges excluding GST.' (Structured_Data excel row 3)
- **Account Handling Charge** | facility=Term Loan | product=MAHA BANK HOUSING TOPUP LOAN | type=Percentage | amount=0.10% | min=500 max=11000 | pct_on=Loan amount | customer=Any | conditions='Includes Documentation, Inspection/supervision, NeSL and CIBIL charges. Charges excluding GST.' (Structured_Data excel row 4)
- **Account Handling Charge Waiver** | facility=Both | product=Maha Super Housing Loan / Maha Super Flexi Housing loan | type=Nil | amount=Nil | min=None max=None | pct_on=None | customer=Individual | conditions='Retail loan schemes for all Judicial Officers in India. Processing fee also Nil (excluded as processing fee).' (Structured_Data excel row 5)
- **Account Handling Charge Waiver** | facility=Term Loan | product=Housing Loan Schemes under Elite PLUS | type=Nil | amount=Nil | min=None max=None | pct_on=None | customer=Individual | conditions='Retail Loan Schemes for High-Ranking Government Officials – "Elite PLUS" Scheme. Processing fee also Nil.' (Structured_Data excel row 6)
- **CERSAI Creation / Modification Charge** | facility=Any | product=Any | type=Fixed amount | amount=250 | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | conditions='Loan amount up to Rs. 5.00 Lac. Per asset Id.' (Structured_Data excel row 18)
- **CERSAI Creation / Modification Charge** | facility=Any | product=Any | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=500000 loan_to=None | customer=Any | conditions='Loan amount above Rs. 5.00 Lac. Per asset Id.' (Structured_Data excel row 19)
- **CERSAI Search Charge** | facility=Any | product=Any | type=Fixed amount | amount=50 | min=None max=None | pct_on=None | customer=Any | conditions='Search of each security with CERSAI.' (Structured_Data excel row 20)
- **CERSAI Attachment Order Charge** | facility=Any | product=Any | type=Fixed amount | amount=250 | min=None max=None | pct_on=None | customer=Any | conditions='Attachment order under CERSAI s.26B; recovered at closure/satisfaction.' (Structured_Data excel row 21)
- **CIC Report Charge** | facility=Any | product=Any | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | customer=Non-individual | conditions='Non-Individual (CIBIL) for MSME Scoring.' (Structured_Data excel row 24)
- **Cheque Return Charge (Outward, Financial)** | facility=Any | product=Any | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | customer=Any | conditions='Outward financial reason, up to three cheque returns in a month.' (Structured_Data excel row 29)
- **Cheque Return Charge (Outward, Financial)** | facility=Any | product=Any | type=Fixed amount | amount=1000 | min=None max=None | pct_on=None | customer=Any | conditions='Outward financial reason, after three returns in the same month.' (Structured_Data excel row 30)
- **Cheque Return Charge (Outward, Non-Financial)** | facility=Any | product=Any | type=Fixed amount | amount=150 | min=None max=None | pct_on=None | customer=Any | conditions='Outward non-financial reason attributable to drawer.' (Structured_Data excel row 31)
- **Service Charge Waiver** | facility=Any | product=Any | type=Nil | amount=Nil | min=None max=None | pct_on=None | customer=Individual | conditions='Ex-staff Members of Bank of Maharashtra — no service charges if not gainfully employed.' (Structured_Data excel row 34)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `bank of maharashtra` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
- `CHG-OC-69` **Interest Rate Type Switch Fees** | origin=Other charges | facility=Any | type=Fixed Amount | fixed=5000 | pct=None — directional duplicate of `CHG-OC-68` (Floating→Fixed); Structured_Data has one Rate Switchover Charge covering both directions at ₹5,000
- `CHG-OC-71` **Facility Conversion fees** | origin=Other charges | facility=Overdraft | type=Fixed Amount | fixed=2000 | pct=None — directional duplicate of `CHG-OC-70` (Flexi→Housing); Structured_Data has one Flexi Scheme Conversion Charge (Both) at ₹2,000

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **53 rows** origin=`Offers.processing`. Not in Structured_Data (source sheet has no processing-fee rows; Account Handling is separate).
  - Sample ids: CHG-PROC-686, CHG-PROC-687, CHG-PROC-688, CHG-PROC-689, CHG-PROC-690, CHG-PROC-691, CHG-PROC-692, CHG-PROC-693, …
  - Schemes seen: Maha Super Housing Loan (19), Maha Bank Top Up Loan (18), Maha Super Flexi Housing Loan (16); facilities={'Term Loan': 37, 'Overdraft': 16}; rate_types={'Floating': 50, 'Fixed': 3}; occupations={'Salaried': 25, 'Self-Employed': 25, 'Any': 3}.
  - All rows Percentage 0.0025 (=0.25%) with charge_max bands {25000: 35, 50000: 18}.
  - Internal clone fingerprint groups with multiplicity>1: **0** groups (0 extra clone rows). All 53 fingerprints unique.

### 4c. From Offers.overdue (not in Structured_Data)
- **4 rows** — Overdue charges 2% p.a. on Default_Amount; schemes Maha Super Housing Loan / Maha Super Flexi Housing Loan / Maha Bank Top Up Loan × Floating/Fixed × TL/OD.
  - Ids: CHG-OD-63, CHG-OD-64, CHG-OD-65, CHG-OD-66

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-48` **Prepayment charges** | facility=Term Loan | scheme=Maha Super Housing Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-49` **Prepayment charges** | facility=Overdraft | scheme=Maha Super Flexi Housing Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-50` **Prepayment charges** | facility=Term Loan | scheme=Maha Bank Top Up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- (none)

### 4f. Slab_Table extras
- (none — no Slab_Table origin rows for this bank)

## 5. Notes

- Source of truth: `BOM_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (33 rows).
- Master filter: `Bank_charges` where `bank_key` == `bank of maharashtra` (82 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- **Nil** in source (first-time loan document copy) accepted as master `Fixed Amount` 0.
- Account Handling `percentage_base_value` `Loan amount` vs `Outstanding loan amount` treated as strict value mismatch.
- NOC lowest slab source `loan_from=10000000` vs master `slab_from=null` treated as value mismatch.
- Incidental Closure `customer_type` Any vs Non-Individual treated as value mismatch.
- `CHG-OC-68` / `CHG-OC-69` and `CHG-OC-70` / `CHG-OC-71` are directional duplicates of single Structured_Data rows.
- No Slab_Table or CSV.* origin rows for this bank.
- Offers.processing / overdue / prepayment absent from Structured_Data; flagged as extra.
- Entire CERSAI schedule and all Outward cheque-return tiers missing from master.
- Account Handling product variants (Maha Super Green; Housing Topup) and Judicial/Elite PLUS / ex-staff waivers missing as distinct master rows.

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 6
- **Still missing (bank service charges):** 7
- **Offers.processing extras → not an error (not from Structured_Data):** 53 listed items/groups
- **Prepayment extras → ignored:** 3 listed items/groups
- **Offers.overdue → no action unless noted separately:** 4 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 2
- **Value mismatches still listed in §2:** 3

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Account Handling Charge
- Account Handling Charge
- CERSAI Creation / Modification Charge
- CERSAI Creation / Modification Charge
- CERSAI Search Charge
- CERSAI Attachment Order Charge

### Still missing — bank service charges (actionable)
- Account Handling Charge Waiver
- Account Handling Charge Waiver
- CIC Report Charge
- Cheque Return Charge (Outward, Financial)
- Cheque Return Charge (Outward, Financial)
- Cheque Return Charge (Outward, Non-Financial)
- Service Charge Waiver
