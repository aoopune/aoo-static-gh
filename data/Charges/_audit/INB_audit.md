# INB / Indian Bank — Charges Audit

## Summary
- Source Structured_Data rows: 54
- Master Bank_charges rows (indian bank): 88
- Matched OK: 18
- Matched with rename only: 23
- Value mismatches: 0
- Missing in master (in source, not in master): 13
- Extra/redundant in master (in master, not in source): 45
- Duplicate issues in master: 0

## Verdict
FAIL — 0 value mismatch(es), 13 source charge(s) missing in master, 45 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Incidental Charges** (facility=Term Loan) → `CHG-OC-429` **Incidental Charges**; confirmed Fixed amount 250; charge_unit=year; freq=Per annum; facility=Term Loan; product scope IB Home Loan to Residents / NRI / Home Advantage / Plot NRI / IBHL-CRE (master purpose=Any — soft); gst master='Yes' (soft).
- **Documentation Charges** (facility=Term Loan) → `CHG-OC-435` **Documentation Charges**; confirmed Formula Rs 250 per lakh or part thereof max 60000 → Fixed amount 250 + fixed_amount_per_lakh_or_part=Yes; charge_max=60000; slab 1000001–None (source from=1000000 soft off-by-one); facility=Term Loan; freq=At documentation; note_1 preserves execution-of-documents wording; gst master='Yes' (soft).
- **Cheque Return Inward Charge** (facility=Any) → `CHG-OC-453` **Cheque Return Inward Charge**; confirmed Fixed amount 250; slab None–100000; slab_basis=Transaction amount; charge_unit=Instance; freq=Each time; gst master='Yes' (soft).
- **Cheque Return Inward Charge** (facility=Any) → `CHG-OC-454` **Cheque Return Inward Charge**; confirmed Fixed amount 500; slab 100000–10000000; slab_basis=Transaction amount; charge_unit=Instance; gst master='Yes' (soft).
- **Cheque Return Inward Charge** (facility=Any) → `CHG-OC-455` **Cheque Return Inward Charge**; confirmed Fixed amount 750; slab 10000000–None; slab_basis=Transaction amount; charge_unit=Instance; gst master='Yes' (soft).
- **ECS/NACH Debit Return Charge** (facility=Any) → `CHG-OC-456` **ECS/NACH Debit Return Charge**; confirmed Fixed amount 100; slab None–50000; customer=Individual; charge_unit=Instance; freq=Each time; gst master='Yes' (soft).
- **ECS/NACH Debit Return Charge** (facility=Any) → `CHG-OC-457` **ECS/NACH Debit Return Charge**; confirmed Fixed amount 150; slab None–50000; customer Non-individual→Non-Individual; charge_unit=Instance; gst master='Yes' (soft).
- **ECS/NACH Debit Return Charge** (facility=Any) → `CHG-OC-458` **ECS/NACH Debit Return Charge**; confirmed Fixed amount 75; slab None–50000; charge_unit=Instance; customer: source Customer_Type=Individual + Conditions='Pensioners, Senior Citizens and individuals in Rural areas' → master customer_type stores pensioner band (soft encoding); gst master='Yes' (soft).
- **Direct Debit Return Charge** (facility=Any) → `CHG-OC-462` **Direct Debit Return Charge**; confirmed Fixed amount 300; charge_unit=transaction; freq=Per transaction; gst master='Yes' (soft).
- **Direct Debit Mandate Registration** (facility=Any) → `CHG-OC-464` **Direct Debit Mandate Registration**; confirmed Fixed amount 100; charge_unit=Mandate; freq=Per mandate registration; gst master='Yes' (soft).
- **No Dues Certificate** (facility=Any) → `CHG-OC-465` **No Dues Certificate**; confirmed Fixed amount 100; customer=Individual; charge_unit=Certificate; note_1 preserves Weaker-section / Service Area nil; gst master='Yes' (soft).
- **No Dues Certificate** (facility=Any) → `CHG-OC-466` **No Dues Certificate**; confirmed Fixed amount 200; customer Non-individual→Non-Individual; charge_unit=Certificate; note_1 Weaker-section nil; gst master='Yes' (soft).
- **No Dues Certificate** (facility=Any) → `CHG-OC-467` **No Dues Certificate**; confirmed Fixed amount 75; charge_unit=Certificate; customer: source Customer_Type=Individual + Conditions pensioner/senior/rural → master customer_type stores pensioner band (soft); gst master='Yes' (soft).
- **Signature Verification / Loan Certification** (facility=Any) → `CHG-OC-468` **Signature Verification / Loan Certification**; confirmed Fixed amount 150; customer=Individual; charge_unit=occasion; freq=Each time; gst master='Yes' (soft).
- **Signature Verification / Loan Certification** (facility=Any) → `CHG-OC-469` **Signature Verification / Loan Certification**; confirmed Fixed amount 200; customer Non-individual→Non-Individual; charge_unit=occasion; gst master='Yes' (soft).
- **Signature Verification / Loan Certification** (facility=Any) → `CHG-OC-470` **Signature Verification / Loan Certification**; confirmed Fixed amount 100; charge_unit=occasion; customer: source Customer_Type=Individual Conditions=None but Source_Text='For Pensioners, Senior Citizens and individuals in Rural areas' → master customer_type=pensioner band (soft, values match); gst master='Yes' (soft).
- **Dishonoured Cheque Certificate (Duplicate)** (facility=Any) → `CHG-OC-471` **Dishonoured Cheque Certificate (Duplicate)**; confirmed Fixed amount 75; charge_unit=Certificate; freq=Each certificate; note_1 preserves second/duplicate dishonoured-cheque certificate; gst master='Yes' (soft).
- **ECS/NACH Debit Return Charge** (facility=Any) → `CHG-OC-459` / `CHG-OC-460` / `CHG-OC-461` **ECS/NACH Debit Return Charge**; source Formula row (Amount=None) with Conditions stating Rs 200 / Rs 300 / Rs 500 by slab above Rs 50000 — expanded in master to 3 Fixed Amount slabs; CHG-OC-459 Fixed 200 slab 50001–500000; CHG-OC-460 Fixed 300 slab 500001–1000000; CHG-OC-461 Fixed 500 slab 1000001–None; slab_basis=Transaction amount; values align with Structured_Data Conditions / published slab intent; Source_Text OCR garbled but Conditions explicit; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Document Copy Charges** (facility=Any) → `CHG-OC-430` **Loan Document Copy Charges** — rename; confirmed Fixed amount 10; charge_min=100; charge_unit=leaf; freq=Per leaf; rename Document Copy Charges → Loan Document Copy Charges; note_1 preserves certified-copy wording; facility Any; gst master='Yes' (soft).
- **NOC / Charge Ceding Fee** (facility=Any) → `CHG-OC-431` **No Objection Certificate Issuance Fees** — rename; confirmed Nil→Fixed amount 0; slab None–50000000; slab_basis=Sanctioned loan amount; charge_unit=Instance; rename NOC / Charge Ceding Fee → No Objection Certificate Issuance Fees; note_1 preserves NOC for ceding charge; gst master='Yes' (soft).
- **NOC / Charge Ceding Fee** (facility=Any) → `CHG-OC-432` **No Objection Certificate Issuance Fees** — rename; confirmed Fixed amount 60000; slab 50000001–100000000 (source inclusive 50000000→master off-by-one soft); charge_unit=Instance; rename NOC / Charge Ceding Fee → No Objection Certificate Issuance Fees; gst master='Yes' (soft).
- **NOC / Charge Ceding Fee** (facility=Any) → `CHG-OC-433` **No Objection Certificate Issuance Fees** — rename; confirmed Fixed amount 120000; slab 100000001–None (source from=100000000→master off-by-one soft); charge_unit=Instance; rename NOC / Charge Ceding Fee → No Objection Certificate Issuance Fees; gst master='Yes' (soft).
- **Revalidation of Sanction** (facility=Any) → `CHG-OC-436` **Revalidation of Sanction Charges** — rename; confirmed Nil→Fixed amount 0; slab None–1000000; slab_basis=Sanctioned loan amount; freq=Each revalidation; rename Revalidation of Sanction → Revalidation of Sanction Charges; gst master='Yes' (soft).
- **Revalidation of Sanction** (facility=Any) → `CHG-OC-437` **Revalidation of Sanction Charges** — rename; confirmed Percentage 0.10%→0.001; charge_max=1000000; slab 1000001–None (source from=1000000 soft off-by-one); pct_base: source='total FB+NFB limits' master='Sanctioned loan amount' (soft approximation); rename Revalidation of Sanction → Revalidation of Sanction Charges; gst master='Yes' (soft).
- **Sanction Amendment / Modification** (facility=Any) → `CHG-OC-438` **Sanction Amendment / Modification Charges** — rename; confirmed Nil→Fixed amount 0; slab None–10000000; charge_unit=Instance; freq=Each time; rename Sanction Amendment / Modification → Sanction Amendment / Modification Charges; gst master='Yes' (soft).
- **Sanction Amendment / Modification** (facility=Any) → `CHG-OC-439` **Sanction Amendment / Modification Charges** — rename; confirmed Fixed amount 25000; slab 10000001–50000000 (source from=10000000 soft off-by-one); charge_unit=Instance; rename Sanction Amendment / Modification → Sanction Amendment / Modification Charges; gst master='Yes' (soft).
- **Sanction Amendment / Modification** (facility=Any) → `CHG-OC-440` **Sanction Amendment / Modification Charges** — rename; confirmed Fixed amount 50000; slab 50000001–100000000 (source from=50000000 soft off-by-one); charge_unit=Instance; rename Sanction Amendment / Modification → Sanction Amendment / Modification Charges; gst master='Yes' (soft).
- **Sanction Amendment / Modification** (facility=Any) → `CHG-OC-441` **Sanction Amendment / Modification Charges** — rename; confirmed Fixed amount 100000; slab 100000001–None (source from=100000000 soft off-by-one); charge_unit=Instance; rename Sanction Amendment / Modification → Sanction Amendment / Modification Charges; gst master='Yes' (soft).
- **Credit Information / Opinion Letter** (facility=Any) → `CHG-OC-442` **Credit Opinion Report Charges** — rename; confirmed Fixed amount 120; customer=Individual; charge_unit=Report; freq=Each report; rename Credit Information / Opinion Letter → Credit Opinion Report Charges; gst master='Yes' (soft).
- **Credit Information / Opinion Letter** (facility=Any) → `CHG-OC-443` **Credit Opinion Report Charges** — rename; confirmed Fixed amount 500; customer Non-individual→Non-Individual; charge_unit=Report; freq=Each report; rename Credit Information / Opinion Letter → Credit Opinion Report Charges; gst master='Yes' (soft).
- **Solvency Certificate** (facility=Any) → `CHG-OC-444` **Solvency Certificate Charges** — rename; confirmed Fixed amount 650; slab None–100000; charge_unit=Certificate; freq=Each certificate; rename Solvency Certificate → Solvency Certificate Charges; slab_basis master='Sanctioned loan amount' (source certificate-amount band; treated equivalent); gst master='Yes' (soft).
- **Solvency Certificate** (facility=Any) → `CHG-OC-445` **Solvency Certificate Charges** — rename; confirmed Fixed amount 5000; slab 100000–1000000; charge_unit=Certificate; rename Solvency Certificate → Solvency Certificate Charges; gst master='Yes' (soft).
- **Solvency Certificate** (facility=Any) → `CHG-OC-446` **Solvency Certificate Charges** — rename; confirmed Fixed amount 11000; slab 1000000–25000000; charge_unit=Certificate; rename Solvency Certificate → Solvency Certificate Charges; gst master='Yes' (soft).
- **Solvency Certificate** (facility=Any) → `CHG-OC-447` **Solvency Certificate Charges** — rename; confirmed Fixed amount 27000; slab 25000000–100000000; charge_unit=Certificate; rename Solvency Certificate → Solvency Certificate Charges; gst master='Yes' (soft).
- **Solvency Certificate** (facility=Any) → `CHG-OC-448` **Solvency Certificate Charges** — rename; confirmed Fixed amount 50000; slab 100000000–None; charge_unit=Certificate; rename Solvency Certificate → Solvency Certificate Charges; gst master='Yes' (soft).
- **Term Loan Review Charge** (facility=Term Loan) → `CHG-OC-449` **Term Loan Review Charges** — rename; confirmed Nil→Fixed amount 0; slab None–500000; slab_basis=Outstanding loan amount; charge_unit=Review; freq=On review; facility=Term Loan; rename Term Loan Review Charge → Term Loan Review Charges; gst master='Yes' (soft).
- **Term Loan Review Charge** (facility=Term Loan) → `CHG-OC-450` **Term Loan Review Charges** — rename; confirmed Formula Rs 120 per lakh → Fixed amount 120 + fixed_amount_per_lakh_or_part=Yes; charge_max=1000000; slab 500000–None; slab_basis=Outstanding loan amount; facility=Term Loan; rename Term Loan Review Charge → Term Loan Review Charges; gst master='Yes' (soft).
- **Credit Report (CIBIL) Charges** (facility=Any) → `CHG-OC-451` **Credit Information Report (CIC) Charges** — rename; confirmed Fixed amount 34; charge_unit=Report; freq=Each report; note_1='Report from CIBIL database'; rename Credit Report (CIBIL) Charges → Credit Information Report (CIC) Charges; gst master='Yes' (soft).
- **Credit Report (Experian) Charges** (facility=Any) → `CHG-OC-452` **Credit Information Report (CIC) Charges** — rename; confirmed Fixed amount 32; charge_unit=Report; freq=Each report; note_1='Report from EXPERIAN database'; rename Credit Report (Experian) Charges → Credit Information Report (CIC) Charges; gst master='Yes' (soft).
- **ECS/NACH Mandate Registration** (facility=Any) → `CHG-OC-463` **ECS / NACH Mandate Registration Charge** — rename; confirmed Fixed amount 115; charge_unit=Mandate; freq=Per mandate registration; note_1 preserves one-time mandate + signature verification; rename ECS/NACH Mandate Registration → ECS / NACH Mandate Registration Charge; gst master='Yes' (soft).
- **Valuation Fee** (facility=Both) → `CHG-OC-472` **Property Valuation Report Charges** — rename; confirmed At actuals (At borrower's cost); charge_unit=Property; freq=Each valuation; note_1 preserves panel-engineer wording; property_valuation_scope=Both; rename Valuation Fee → Property Valuation Report Charges; facility Both→Any; purpose master='Top-up Loan' ≈ source product IB Home Loan Plus (soft); gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

- **Incidental Charges** | facility=Term Loan | product=Mortgage Loan Rent Encash / Ind Mortgage Scheme | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=per year | frequency=None | conditions=None (Structured_Data excel row 3)
- **Equitable Mortgage Charges** | facility=Both | product=Mortgage Loan Rent Encash / Ind Mortgage Scheme | type=Nil | amount=None | min=None max=None | pct_on=None | loan_from=None loan_to=1000000 | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Loan/limit up to Rs 10 lakh' (Structured_Data excel row 4)
- **Equitable Mortgage Charges** | facility=Both | product=Mortgage Loan Rent Encash / Ind Mortgage Scheme | type=Formula | amount=Rs 300 per lakh subject to max of Rs 30000 | min=None max=None | pct_on=loan/limit | loan_from=1000000 loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Above Rs 10 lakh' (Structured_Data excel row 5)
- **EM Extension Charges** | facility=Both | product=Mortgage Loan Rent Encash / Ind Mortgage Scheme | type=Percentage | amount=50% | min=None max=None | pct_on=applicable EM charges | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Extension of EM over the same property' (Structured_Data excel row 6)
- **Equitable Mortgage Charges** | facility=Both | product=IB Rental | type=Nil | amount=None | min=None max=None | pct_on=None | loan_from=None loan_to=1000000 | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Loan/limit up to Rs 10 lakh' (Structured_Data excel row 7)
- **Equitable Mortgage Charges** | facility=Both | product=IB Rental | type=Formula | amount=Rs 300 per lakh subject to max of Rs 30000 | min=None max=None | pct_on=loan/limit | loan_from=1000000 loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Above Rs 10 lakh' (Structured_Data excel row 8)
- **EM Extension Charges** | facility=Both | product=IB Rental | type=Percentage | amount=50% | min=None max=None | pct_on=applicable EM charges | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='Extension of EM over the same property' (Structured_Data excel row 9)
- **Equitable Mortgage Charges** | facility=Term Loan | product=IB Home Loan | type=Nil | amount=None | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions='No equitable mortgage charges for IB Home Loan accounts irrespective of loan amount' (Structured_Data excel row 10)
- **ROC Charge Registration Fee** | facility=Any | product=Any | type=Fixed amount | amount=50000 | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=per year | frequency=annual | conditions=None (Structured_Data excel row 22)
- **Registration / Modification of Charge** | facility=Any | product=Any | type=Formula | amount=Rs 500 plus actual out of pocket expenses | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per=None | frequency=None | conditions=None (Structured_Data excel row 23)
- **Cheque Return Outward Charge** | facility=Any | product=Any | type=Fixed amount | amount=200 | min=None max=None | pct_on=None | loan_from=None loan_to=1000000 | customer=Any | loc=Any | charged_per=per instance | frequency=None | conditions='Local cheque deposited by customers; no charge for technical reason returns' (Structured_Data excel row 44)
- **Cheque Return Outward Charge** | facility=Any | product=Any | type=Fixed amount | amount=500 | min=None max=None | pct_on=None | loan_from=1000000 loan_to=10000000 | customer=Any | loc=Any | charged_per=per instance | frequency=None | conditions='Local cheque deposited by customers; no charge for technical reason returns' (Structured_Data excel row 45)
- **Cheque Return Outward Charge** | facility=Any | product=Any | type=Fixed amount | amount=1000 | min=None max=None | pct_on=None | loan_from=10000000 loan_to=None | customer=Any | loc=Any | charged_per=per instance | frequency=None | conditions='Local cheque deposited by customers; no charge for technical reason returns' (Structured_Data excel row 46)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `indian bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — complementary Nil ≤₹10L Documentation slab (`CHG-OC-434`) removed; source only publishes above-₹10L Formula (excel row 15 → `CHG-OC-435`).

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **36 rows** origin=`Offers.processing`. Not in Structured_Data (source is Indian Bank SOC / product pages — incidental, EM, documentation, NOC, revalidation, sanction amendment, solvency, review, CIC, cheque/ECS returns, mandates, no-dues, signature, valuation; no processing-fee rows).
  - Sample ids: CHG-PROC-764, CHG-PROC-765, CHG-PROC-766, CHG-PROC-767, CHG-PROC-768, CHG-PROC-769, CHG-PROC-770, CHG-PROC-771
  - Schemes seen: IB Home Loan ×18; IB Home Loan Flexi ×18
  - Fixed-amount / facility / rate_type fingerprints: {(1500, 'Term Loan', 'Floating', 'IB Home Loan', 1–2500000): 6, (1500, 'Overdraft', 'Floating', 'IB Home Loan Flexi', 1–2500000): 6, (2500, 'Term Loan', 'Floating', 'IB Home Loan', 2500001–7500000): 6, (2500, 'Overdraft', 'Floating', 'IB Home Loan Flexi', 2500001–7500000): 6, (5000, 'Term Loan', 'Floating', 'IB Home Loan', 7500001–1000000000): 6, (5000, 'Overdraft', 'Floating', 'IB Home Loan Flexi', 7500001–1000000000): 6}
    - ₹1,500 Fixed × Term Loan Floating (IB Home Loan ≤25L) and Overdraft Floating (IB Home Loan Flexi ≤25L)
    - ₹2,500 Fixed × Term Loan / Overdraft for loan 25L–75L
    - ₹5,000 Fixed × Term Loan / Overdraft for loan >75L (max band 1000000000)
  - CIBIL bands (distinct, not duplicates): 300–599, 600–649, 650–699, 700–749, 750–799, 800–900.
  - Scheme × loan-band × CIBIL matrix: 2 schemes × 3 loan bands × 6 CIBIL bands = 36.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-70` **Overdue charges** | facility=Term Loan | scheme=IB Home Loan | rate_type=Floating | pct=0.02 | pct_base=Default_Amount
- `CHG-OD-71` **Overdue charges** | facility=Overdraft | scheme=IB Home Loan Flexi | rate_type=Floating | pct=0.02 | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-56` **Prepayment charges** | facility=Term Loan | scheme=IB Home Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-57` **Prepayment charges** | facility=Overdraft | scheme=IB Home Loan Flexi | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-186` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | note=Prepayment nil (CSV NIL)
- `CHG-PRE-187` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | note=None
- `CHG-PRE-188` **Prepayment charges** | facility=Overdraft | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | note=Prepayment nil (CSV NIL)
- `CHG-PRE-189` **Prepayment charges (takeover)** | facility=Overdraft | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | note=None

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `INB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (54 rows).
- Master filter: `Bank_charges` where `bank_key` == `indian bank` (87 rows after OC-434 removal).
- Semantic matching used; renames allowed when amounts/slabs match.
- Nil correctly encoded as Fixed amount 0 on NOC / Revalidation / Sanction amendment / Term Loan Review Nil slabs.
- Per-lakh formulas (Documentation ₹250/lakh; Term Loan Review ₹120/lakh) correctly encoded as Fixed amount + `fixed_amount_per_lakh_or_part=Yes`.
- ECS/NACH Debit Return above ₹50k: single Structured_Data Formula row (excel 55) correctly expanded to three Fixed slabs ₹200 / ₹300 / ₹500 in master.
- **Missing families:** Equitable Mortgage + EM Extension across Mortgage / IB Rental / IB Home Loan (excel 4–10); Incidental ₹500 Mortgage (excel 3); ROC Charge Registration Fee (excel 22); Registration / Modification of Charge (excel 23); Cheque Return Outward three slabs (excel 44–46).
- No Other-charges extra vs Structured_Data after removing invented Documentation Nil ≤₹10L.
- No `Slab_Table` origin rows for this bank.
- Offers.processing CIBIL × loan-band cells share fee fingerprints within each band but are distinct score keys (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 5
- **Still missing (bank service charges):** 8
- **Offers.processing extras → not an error (not from Structured_Data):** 36 listed items/groups
- **Prepayment extras → ignored:** 6 listed items/groups
- **Offers.overdue → no action unless noted separately:** 2 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 1
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Equitable Mortgage Charges
- Equitable Mortgage Charges
- Equitable Mortgage Charges
- Equitable Mortgage Charges
- Equitable Mortgage Charges

### Still missing — bank service charges (actionable)
- Incidental Charges
- EM Extension Charges
- EM Extension Charges
- ROC Charge Registration Fee
- Registration / Modification of Charge
- Cheque Return Outward Charge
- Cheque Return Outward Charge
- Cheque Return Outward Charge
