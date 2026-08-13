# IOB / Indian Overseas Bank — Charges Audit

## Summary
- Source Structured_Data rows: 41
- Master Bank_charges rows (indian overseas bank): 83
- Matched OK: 15
- Matched with rename only: 11
- Value mismatches: 0
- Missing in master (in source, not in master): 15
- Extra/redundant in master (in master, not in source): 56
- Duplicate issues in master: 0

## Verdict
FAIL — 0 value mismatch(es), 15 source charge(s) missing in master, 56 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Loan Documentation Charges** (facility=Any) → `CHG-OC-473` **Loan Documentation Charges**; confirmed Nil→Fixed amount 0; slab None–200000; slab_basis=Sanctioned loan amount; charge_unit=loan; freq=Once at documentation; upto ₹2L inclusive; next slab from 200001; gst master='Yes' (soft).
- **Loan Documentation Charges** (facility=Any) → `CHG-OC-474` **Loan Documentation Charges**; confirmed Fixed amount 1250; slab 200000–1000000; slab_basis=Sanctioned loan amount; charge_unit=loan; freq=Once at documentation; gst master='Yes' (soft).
- **Loan Documentation Charges** (facility=Any) → `CHG-OC-475` **Loan Documentation Charges**; confirmed Fixed amount 2500; slab 1000000–2500000; slab_basis=Sanctioned loan amount; charge_unit=loan; freq=Once at documentation; gst master='Yes' (soft).
- **Loan Documentation Charges** (facility=Any) → `CHG-OC-476` **Loan Documentation Charges**; confirmed Fixed amount 5000; slab 2500000–10000000; slab_basis=Sanctioned loan amount; charge_unit=loan; freq=Once at documentation; gst master='Yes' (soft).
- **Loan Documentation Charges** (facility=Any) → `CHG-OC-477` **Loan Documentation Charges**; confirmed Fixed amount 50000; slab 10000000–100000000; slab_basis=Sanctioned loan amount; charge_unit=loan; freq=Once at documentation; gst master='Yes' (soft).
- **Loan Documentation Charges** (facility=Any) → `CHG-OC-478` **Loan Documentation Charges**; confirmed Fixed amount 200000; slab 100000000–None; slab_basis=Sanctioned loan amount; charge_unit=loan; freq=Once at documentation; gst master='Yes' (soft).
- **Document Copy with Bank Official Present** (facility=Any) → `CHG-OC-479` **Document Copy with Bank Official Present**; confirmed Formula 'Actual photocopying charges plus Rs.1000' → Fixed amount 1000 + actuals_in_addition_to_charge=Yes; charge_unit=Request; freq=Each time; note_1 preserves bank-official-present wording; note_2 states actual photocopying in addition; gst master='Yes' (soft).
- **Release of Personal Guarantee or Collateral Security** (facility=Any) → `CHG-OC-483` **Release of Personal Guarantee or Collateral Security**; confirmed Percentage 0.10%→0.001; charge_min=5000; charge_max=500000; charge_unit=Instance; freq=Each time; pct_base: source='limit' → Sanctioned loan amount; gst master='Yes' (soft).
- **No Dues Certificate** (facility=Any) → `CHG-OC-486` **No Dues Certificate**; confirmed Nil→Fixed amount 0; charge_unit=Certificate; freq=on request; note_1='Priority sector customers.'; gst master='Yes' (soft).
- **No Dues Certificate** (facility=Any) → `CHG-OC-487` **No Dues Certificate**; confirmed Fixed amount 500; charge_unit=Certificate; freq=on request; note_1 preserves non-priority Individual/Firm/Non-Individuals; gst master='Yes' (soft).
- **CIC Fees** (facility=Term Loan) → `CHG-OC-489` **CIC Fees**; confirmed Nil→Fixed amount 0; freq=Each report; note_1='Nil as per State Government Guideline.'; product/scheme: source='MO GHARA Housing Scheme for State of Odisha' facility=Term Loan — master scheme unset / facility=Any (soft); gst master='Yes' (soft).
- **CIBIL Charges** (facility=Any) → `CHG-OC-493` **CIBIL Charges**; confirmed Fixed amount 100; customer=Individual; charge_unit=Report; freq=Each report; gst master='Yes' (soft; source Plus GST).
- **CIBIL Charges** (facility=Any) → `CHG-OC-494` **CIBIL Charges**; confirmed Fixed amount 900; customer Non-individual→Non-Individual; charge_unit=Report; freq=Each report; gst master='Yes' (soft; source plus GST).
- **Cheque Return - Inward Return** (facility=Any) → `CHG-OC-495` **Cheque Return - Inward Return**; confirmed Fixed amount 250; slab None–100000; slab_basis=Transaction amount; charge_unit=occasion; freq=Each return; gst master='Yes' (soft).
- **Cheque Return - Inward Return** (facility=Any) → `CHG-OC-496` **Cheque Return - Inward Return**; confirmed Fixed amount 500; slab 100000–None; slab_basis=Transaction amount; charge_unit=occasion; freq=Each return; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Document Copy Sought by Customer** (facility=Any) → `CHG-OC-480` **Loan Document Copy Charges** — rename; confirmed Formula 'Actual photocopying charges plus Rs.500' → Fixed amount 500 + actuals_in_addition_to_charge=Yes; charge_unit=Request; freq=Each time; rename Document Copy Sought by Customer → Loan Document Copy Charges; note_1 preserves customer-sought copies; gst master='Yes' (soft).
- **Rephasement or Deferment of Loan Installments** (facility=Any) → `CHG-OC-481` **Rephasing or Deferment of Loan Installments** — rename; confirmed Percentage 0.10%→0.001; charge_min=5000; charge_max=200000; charge_unit=Instance; freq=Each time; pct_base: source='limit' → Sanctioned loan amount; rename Rephasement→Rephasing; gst master='Yes' (soft).
- **Substitution of Collateral Security or Personal Guarantee** (facility=Any) → `CHG-OC-482` **Substitution of Collateral Security or Personal Guarantee Charges** — rename; confirmed Percentage 0.10%→0.001; charge_min=5000; charge_max=500000; charge_unit=Instance; freq=Each time; pct_base: source='limit' → Sanctioned loan amount; rename adds 'Charges'; gst master='Yes' (soft).
- **Search Report** (facility=Any) → `CHG-OC-484` **Title Search Report Fees** — rename; confirmed Fixed amount 1000; customer=Individual; charge_unit: source=per report master=Property (soft unit); freq=Each time; rename Search Report → Title Search Report Fees; gst master='Yes' (soft).
- **Search Report** (facility=Any) → `CHG-OC-485` **Title Search Report Fees** — rename; confirmed Fixed amount 1500; customer Non-individual→Non-Individual; charge_unit=Property (soft vs per report); freq=Each time; rename Search Report → Title Search Report Fees; gst master='Yes' (soft).
- **Documentation Fees** (facility=Term Loan) → `CHG-OC-488` **Documentation Charges** — rename; confirmed Nil→Fixed amount 0; freq=At documentation; note_1='Nil as per State Government Guideline.'; product/scheme: source='MO GHARA Housing Scheme for State of Odisha' facility=Term Loan — master scheme unset / facility=Any (soft attribution); rename Documentation Fees → Documentation Charges; gst master='Yes' (soft).
- **Floating to Fixed or Fixed to Floating Rate Switch** (facility=Term Loan) → `CHG-OC-490` / `CHG-OC-491` **Interest Rate Type Switch Fees** — rename; confirmed Percentage 0.10%→0.001; charge_max=5000; charge_unit=Switch; freq=At the time of exercising the option; source single Vice Versa row expanded to 2 master rows: CHG-OC-490 Fixed→Floating + CHG-OC-491 Floating→Fixed; pct_base master='Outstanding loan amount' (source also allows sanctioned if not fully disbursed — soft partial); facility Term Loan→Any (soft); rename Floating to Fixed or Fixed to Floating Rate Switch → Interest Rate Type Switch Fees; gst master='Yes' (soft).
- **Duplicate Loan Account Statement** (facility=Any) → `CHG-OC-492` **Statement of Account Charges - Duplicate** — rename; confirmed Fixed amount 150; charge_unit=40 entries; freq=Each request; fixed_amount_unit=40 entries; rename Duplicate Loan Account Statement → Statement of Account Charges - Duplicate; gst master='Yes' (soft).
- **ECS/NACH Mandate Registration** (facility=Any) → `CHG-OC-497` **ECS / NACH Mandate Registration Charge** — rename; confirmed Fixed amount 125; charge_unit=Mandate; freq=on registration; rename ECS/NACH Mandate Registration → ECS / NACH Mandate Registration Charge; FREEDOM SB/CD / Startup Current NIL exemptions in source Conditions not copied to master note/exemption (soft omission); gst master='Yes' (soft).
- **ECS Return - Inward Return** (facility=Any) → `CHG-OC-498` **ECS / NACH Debit Return Charge** — rename; confirmed Fixed amount 200; slab None–100000; slab_basis=Transaction amount; charge_unit=occasion; freq=Each return; note_1='ECS Return Charges - Inward Return.'; rename ECS Return - Inward Return → ECS / NACH Debit Return Charge; gst master='Yes' (soft).
- **ECS Return - Inward Return** (facility=Any) → `CHG-OC-499` **ECS / NACH Debit Return Charge** — rename; confirmed Fixed amount 500; slab 100000–None; slab_basis=Transaction amount; charge_unit=occasion; freq=Each return; note_1='ECS Return Charges - Inward Return.'; rename ECS Return - Inward Return → ECS / NACH Debit Return Charge; gst master='Yes' (soft).

## 2. Value mismatches

(none)

## 3. Missing in master

- **Mortgage Charges** | facility=Any | product='Housing loans/ Subhagruha Loans' | type=Nil | amount='Nil' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=None | charged_per=None | frequency='once' | conditions='Mortgage charges are not applicable for Housing loans/ Subhagruha Loans. Schedule mortgage slabs apply only where land and building is taken as prime security (MCC/LAP accounts).' (Structured_Data excel row 10)
- **Release of Mortgaged Securities on Closure** | facility=Any | product='Any' | type=Fixed amount | amount='3000' | min=None max=None | pct_on=None | loan_from=2500000 loan_to=5000000 | customer=Any | loc=None | charged_per='per release' | frequency='on closure' | conditions='Only for Registered Mortgage, not Equitable Mortgage. Loans of Rs 25 lacs and above.' (Structured_Data excel row 11)
- **Release of Mortgaged Securities on Closure** | facility=Any | product='Any' | type=Fixed amount | amount='5000' | min=None max=None | pct_on=None | loan_from=5000000 loan_to=None | customer=Any | loc=None | charged_per='per release' | frequency='on closure' | conditions='Only for Registered Mortgage, not Equitable Mortgage. Loans of Rs 25 lacs and above.' (Structured_Data excel row 12)
- **Change in Terms and Conditions** | facility=Any | product='Any' | type=Percentage | amount='0.10%' | min=10000 max=1000000 | pct_on='Loan Amount' | loan_from=None loan_to=None | customer=Any | loc=None | charged_per='per instance' | frequency='each time' | conditions='Recovery of service charges for services other than sanction of credit facilities. Row also covers change in items of machinery (corporate context).' (Structured_Data excel row 13)
- **NOC for Takeover of Loan** | facility=Term Loan | product='Housing Loans & Term Loans with floating interest rate in the name of individuals' | type=Nil | amount='Nil' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Individual | loc=None | charged_per=None | frequency='on request' | conditions='Takeover NOC charge schedule applies other than Housing Loans and Term Loans with floating interest rate in the name of individuals.' (Structured_Data excel row 19)
- **All Bank Charges** | facility=Term Loan | product='IOB EASY PLOT' | type=Nil | amount='Nil' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=None | charged_per=None | frequency=None | conditions='Staff/Ex Staff: No bank charges of any type.' (Structured_Data excel row 24)
- **Loan Documentation Charges** | facility=Term Loan | product='IOB EASY PLOT' | type=Formula | amount='As applicable' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=None | charged_per=None | frequency=None | conditions='Non-Staff: Documentation Charges as applicable (see No. 10 Loan Documentation Charges slabs). Processing charge excluded from Structured_Data.' (Structured_Data excel row 25)
- **Loan Documentation Charges** | facility=Term Loan | product='IOB HARIT SUBHAGRUHA' | type=Formula | amount='As applicable' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=None | charged_per=None | frequency=None | conditions='Documentation Charges as applicable (see No. 10 Loan Documentation Charges slabs). Processing charge excluded from Structured_Data.' (Structured_Data excel row 26)
- **Monthly Loan Account Statement (First/Original)** | facility=Any | product='Any' | type=Nil | amount='Free' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=None | loc=None | charged_per=None | frequency=None | conditions='Monthly statement of account (First/original). Through Internet - Free.' (Structured_Data excel row 28)
- **CERSAI Charges** | facility=Any | product='Any' | type=Fixed amount | amount='50' | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | loc=None | charged_per='per registration' | frequency=None | conditions='LOAN LIMIT up to Rs 5 lacs.' (Structured_Data excel row 30)
- **CERSAI Charges** | facility=Any | product='Any' | type=Fixed amount | amount='100' | min=None max=None | pct_on=None | loan_from=500000 loan_to=None | customer=Any | loc=None | charged_per='per registration' | frequency=None | conditions='LOAN LIMIT greater than Rs 5 lacs.' (Structured_Data excel row 31)
- **Cheque Return - Outward return** | facility=Any | product='Any' | type=Fixed amount | amount='250' | min=None max=None | pct_on=None | loan_from=None loan_to=100000 | customer=Any | loc=None | charged_per='per occasion' | frequency='each return' | conditions='Outward return (Cheque deposited by our customer and returned by other Bank). GST applicable (bank states it is not a penal charge). Cheque return charges shall be levied only where the customer is at fault.' (Structured_Data excel row 36)
- **Cheque Return - Outward return** | facility=Any | product='Any' | type=Fixed amount | amount='500' | min=None max=None | pct_on=None | loan_from=100000 loan_to=None | customer=Any | loc=None | charged_per='per occasion' | frequency='each return' | conditions='Outward return (Cheque deposited by our customer and returned by other Bank). GST applicable (bank states it is not a penal charge). Cheque return charges shall be levied only where the customer is at fault.' (Structured_Data excel row 37)
- **ECS Return - Outward Return** | facility=Any | product='Any' | type=Fixed amount | amount='150' | min=None max=None | pct_on=None | loan_from=None loan_to=100000 | customer=Any | loc=None | charged_per='per occasion' | frequency='each return' | conditions='ECS Return Charges - Outward Return.' (Structured_Data excel row 41)
- **ECS Return - Outward Return** | facility=Any | product='Any' | type=Fixed amount | amount='400' | min=None max=None | pct_on=None | loan_from=100000 loan_to=None | customer=Any | loc=None | charged_per='per occasion' | frequency='each return' | conditions='ECS Return Charges - Outward Return.' (Structured_Data excel row 42)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `indian overseas bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 27 `Other charges` rows map to Structured_Data (26 source rows; rate-switch Vice Versa expands to 2 master rows).

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **46 rows** origin=`Offers.processing`. Not in Structured_Data (source is IOB SOC — documentation slabs, document copies, mortgage nil/release, T&C change, rephasement, collateral, search, takeover NOC, no-dues, MO GHARA nils, Easy Plot/Harit doc pointers, rate switch, statements, CERSAI, CIBIL, cheque/ECS returns, mandate; no processing-fee rows).
  - Sample ids: CHG-PROC-526, CHG-PROC-527, CHG-PROC-528, CHG-PROC-529, CHG-PROC-530, CHG-PROC-531, CHG-PROC-532, CHG-PROC-533
  - Schemes seen: Subhagruha Housing Loan ×30; Subhagruha Top Up Loan ×16
  - Percentage fingerprints (all 0.50% of sanctioned amount):
    - max ₹20,000 × Term Loan Floating: Housing Salaried ≤75L ×7 CIBIL; Housing Self-Employed ≤75L ×7; Top Up Any ≤75L ×7; plus Fixed Housing/Top Up ≤75L ×1 each (no CIBIL)
    - max ₹25,000 × Term Loan Floating: Housing Salaried >75L ×7; Housing Self-Employed >75L ×7; Top Up Any >75L ×7; plus Fixed Housing/Top Up >75L ×1 each (no CIBIL)
  - CIBIL bands on Floating rows (distinct, not duplicates): −1–0, 680–699, 700–724, 725–749, 750–774, 775–799, 800–900 (`cibil_band_score_min`/`max`). Fixed rows: no CIBIL band (4 rows).
  - Matrix: Floating (Housing×2 occupations + Top Up×Any) × 2 loan bands × 7 CIBIL = 42; Fixed × 2 schemes × 2 loan bands = 4; total 46.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL band: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-48` **Overdue charges** | facility=Term Loan | scheme=Subhagruha Housing Loan | rate_type=Floating | pct=0.02 | pct_base=Default_Amount
- `CHG-OD-49` **Overdue charges** | facility=Term Loan | scheme=Subhagruha Top Up Loan | rate_type=Floating | pct=0.02 | pct_base=Default_Amount
- `CHG-OD-50` **Overdue charges** | facility=Term Loan | scheme=Subhagruha Housing Loan | rate_type=Fixed | pct=0.02 | pct_base=Default_Amount
- `CHG-OD-51` **Overdue charges** | facility=Term Loan | scheme=Subhagruha Top Up Loan | rate_type=Fixed | pct=0.02 | pct_base=Default_Amount

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-37` **Prepayment charges** | facility=Term Loan | scheme=Subhagruha Housing Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)
- `CHG-PRE-38` **Prepayment charges** | facility=Term Loan | scheme=Subhagruha Top Up Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-194` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | note=Prepayment nil (CSV NIL)
- `CHG-PRE-195` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | note=None
- `CHG-PRE-196` **Prepayment charges** | facility=Overdraft | rate_type=Fixed | fixed=0 | pct=None | pct_base=None | note=Prepayment nil (CSV NIL)
- `CHG-PRE-197` **Prepayment charges (takeover)** | facility=Overdraft | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | note=None

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `IOB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (41 rows).
- Master filter: `Bank_charges` where `bank_key` == `indian overseas bank` (83 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- Nil / Free correctly encoded as Fixed amount 0 on documentation ≤₹2L, No Dues (priority), MO GHARA Documentation/CIC.
- Formula document-copy rows correctly encoded as Fixed amount + `actuals_in_addition_to_charge=Yes`.
- Percentage 0.10% correctly stored as fraction 0.001 on rephasement / collateral / rate-switch.
- Rate-switch Vice Versa: single Structured_Data row expanded to Fixed→Floating + Floating→Fixed master rows.
- Documentation / cheque-inward / ECS-inward slabs: English upto inclusive / above exclusive (no shared edges). Rephasement / collateral sub / release: `percentage_base_value` = Sanctioned loan amount (source “limit”). Added: Change in T&C 0.10% min ₹10k max ₹10L (`CHG-OC-864`); takeover NOC Nil Floating Individual (`CHG-OC-865`); first/original monthly SOA Nil digital (`CHG-OC-866`); cheque outward ₹250/₹500 (`CHG-OC-867`/`868`); ECS outward ₹150/₹400 (`CHG-OC-869`/`870`). Mortgage housing Nil skipped. CERSAI + registered-mortgage release ignored (govt). Easy Plot / Harit still not on compare.
- No Other-charges extra/redundant vs Structured_Data.
- No `Slab_Table` origin rows for this bank.
- Offers.processing Floating CIBIL × occupation × loan-band cells are distinct score keys (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 4
- **Still missing (bank service charges):** 4
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 6 listed items/groups
- **Offers.overdue → no action unless noted separately:** 0 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- Release of Mortgaged Securities on Closure
- Release of Mortgaged Securities on Closure
- CERSAI Charges
- CERSAI Charges

### Still missing — bank service charges (actionable)
- Mortgage Charges (housing/Subhagruha Nil — skipped by user)
- All Bank Charges
- Loan Documentation Charges
- Loan Documentation Charges
