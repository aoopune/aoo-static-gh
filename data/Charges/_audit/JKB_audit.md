# JKB / Jammu and Kashmir Bank — Charges Audit

## Summary
- Source Structured_Data rows: 27
- Master Bank_charges rows (jammu and kashmir bank): 31
- Matched OK: 8
- Matched with rename only: 13
- Value mismatches: 2
- Missing in master (in source, not in master): 4
- Extra/redundant in master (in master, not in source): 9
- Duplicate issues in master: 0

## Verdict
FAIL — 2 value mismatch(es), 4 source charge(s) missing in master, 9 extra/redundant master row(s), 0 duplicate issue group(s).

## 1. Matched OK (including renames)

### 1a. Exact name + values OK
- **Ceding of Charge on Security including Pari Passu Charge** (facility=Any) → `CHG-OC-520` **Ceding of Charge on Security including Pari Passu Charge**; confirmed Percentage 0.05%→0.0005; charge_min=3000; charge_max=20000; charge_unit=Request; freq=Each approval; pct_base: source='Limit' master='Sanctioned loan amount' (soft); exemptions 1–3 preserved; gst master='Yes' (soft).
- **Issue of Certificates (No Dues / Balance / Interest / Account Maintaining)** (facility=Any; Priority Sector Nil) → `CHG-OC-523` **Issue of Certificates**; Priority Sector Nil encoded as exemption_1='Priority sector loans' on CHG-OC-523 (₹200 Issue of Certificates) rather than separate Fixed amount 0 row; values semantically present (soft encoding).
- **Signature Verification / Photo Attestation** (facility=Any) → `CHG-OC-525` **Signature Verification / Photo Attestation**; confirmed Fixed amount 200; charge_unit=Instance; freq: source='Each instance' master='Each time' (soft equivalent); gst master='Yes' (soft).
- **Exchange / Remittance Charges on Term Loan Disbursement Drafts** (facility=Term Loan) → `CHG-OC-526` **Exchange / Remittance Charges on Term Loan Disbursement Drafts**; confirmed Nil→Fixed amount 0; facility=Term Loan; charge_unit=Disbursement remittance; freq=At disbursement; gst master='Yes' (soft).
- **NACH / ECS Mandate Registration Charge** (facility=Any) → `CHG-OC-527` **NACH / ECS Mandate Registration Charge**; confirmed Fixed amount 50; charge_unit=Mandate; freq=One time; note_1 preserves NACH/ECS including E-mandate; gst master='Yes' (soft).
- **Cheque Return Unpaid — Local Cheque Returned by Other Banks** (facility=Any) → `CHG-OC-532` **Cheque Return Unpaid - Local Cheque Returned by Other Banks**; confirmed Fixed amount 200; charge_unit: source=Per instrument master=Instance (soft unit); freq=Each return; em dash→hyphen normalize; gst master='Yes' (soft).
- **Cheque Return Unpaid — Outstation Cheque** (facility=Any) → `CHG-OC-530` **Cheque Return Unpaid - Outstation Cheque**; confirmed Formula ₹500 + out of pocket → Fixed amount 500 + out_of_pocket_expenses_additional=Yes; charge_unit=Instrument; freq=Each return; em dash→hyphen normalize; gst master='Yes' (soft).
- **Over the Counter Cheque Return Charge** (facility=Any) → `CHG-OC-531` **Over the Counter Cheque Return Charge**; confirmed Fixed amount 100; charge_unit=Instrument; freq=Each return; notes preserve OTC/manual-deduct / no-fault wording; gst master='Yes' (soft).

### 1b. Rename only (values OK)
- **Inspection Charge** (facility=Any) → `CHG-OC-511` **Inspection Charges** — rename; confirmed Formula 'Actual expenses + Rs.1000' → Fixed amount 1000 + actuals_in_addition_to_charge=Yes; slab None–1000000; slab_basis=Sanctioned loan amount; charge_frequency_per_financial_year=1; charge_unit: source=Per borrower entity master=Instance (soft); rename Inspection Charge→Inspection Charges; gst master='Yes' (soft).
- **Inspection Charge** (facility=Any) → `CHG-OC-512` **Inspection Charges** — rename; confirmed Formula 'Actual expenses + Rs.2000' → Fixed amount 2000 + actuals_in_addition_to_charge=Yes; slab 1000001–10000000; slab_basis=Sanctioned loan amount; charge_frequency_per_financial_year=1; rename Inspection Charge→Inspection Charges; gst master='Yes' (soft).
- **Inspection Charge** (facility=Any) → `CHG-OC-513` **Inspection Charges** — rename; confirmed Formula 'Actual expenses + Rs.3000' → Fixed amount 3000 + actuals_in_addition_to_charge=Yes; slab 10000001–50000000; slab_basis=Sanctioned loan amount; charge_frequency_per_financial_year=1; rename Inspection Charge→Inspection Charges; gst master='Yes' (soft).
- **Inspection Charge** (facility=Any) → `CHG-OC-514` **Inspection Charges** — rename; confirmed Formula 'Actual expenses + Rs.6000' → Fixed amount 6000 + actuals_in_addition_to_charge=Yes; slab 50000001–None; slab_basis=Sanctioned loan amount; charge_frequency_per_financial_year=1; rename Inspection Charge→Inspection Charges; gst master='Yes' (soft).
- **Commitment Charge — Delayed Drawdown** (facility=Term Loan) → `CHG-OC-515` **Commitment Charge - Delayed drawdown** — rename; confirmed Percentage 1.00%→0.01; slab 10000001–None; facility=Term Loan; grace_period_months=3; charge_unit=delayed drawdown event; pct_base master='Delayed drawdown amount' (source wording soft); rename em dash/Drawdown casing; gst master='Yes' (soft).
- **Term Loan Review Charge** (facility=Term Loan) → `CHG-OC-516` **Term Loan Review Charges** — rename; confirmed Percentage 0.05%→0.0005; charge_max=250000; slab None–500000000; facility=Term Loan; pct_base: source='Loan Limit' master='Sanctioned loan amount' (soft); rename Term Loan Review Charge→Term Loan Review Charges; gst master='Yes' (soft).
- **Term Loan Review Charge** (facility=Term Loan) → `CHG-OC-517` **Term Loan Review Charges** — rename; confirmed Percentage 0.10%→0.001; charge_max=500000; slab 500000001–None; facility=Term Loan; pct_base: source='Loan Limit' master='Sanctioned loan amount' (soft); rename Term Loan Review Charge→Term Loan Review Charges; gst master='Yes' (soft).
- **Credit Information Report (Consumer CIR)** (facility=Any) → `CHG-OC-518` **Credit Information Report (CIC) Charges** — rename; confirmed Fixed amount 50; charge_unit=Report; freq=Each time CIR is obtained; rename Credit Information Report (Consumer CIR)→Credit Information Report (CIC) Charges; gst master='Yes' (soft).
- **Modification in Terms & Conditions of Sanction** (facility=Any) → `CHG-OC-519` **Sanction Amendment / Modification Charges** — rename; confirmed Percentage 0.05%→0.0005; charge_min=3000; charge_max=20000; charge_unit=Request; freq=Each approval; pct_base: source='Limit' master='Sanctioned loan amount' (soft); exemptions 1–3 preserved; rename Modification in Terms & Conditions of Sanction→Sanction Amendment / Modification Charges; gst master='Yes' (soft).
- **Revalidation of Sanction** (facility=Any) → `CHG-OC-521` **Revalidation of Sanction Charges** — rename; confirmed Percentage 0.05%→0.0005; charge_min=3000; charge_max=20000; charge_unit=Request; freq=Each approval; same Z1 exemptions; rename Revalidation of Sanction→Revalidation of Sanction Charges; gst master='Yes' (soft).
- **Other Miscellaneous Approvals (Advances)** (facility=Any) → `CHG-OC-522` **Other miscellaneous approvals not specified** — rename; confirmed Percentage 0.05%→0.0005; charge_min=3000; charge_max=20000; charge_unit=Request; freq=Each approval; same Z1 exemptions; rename Other Miscellaneous Approvals (Advances)→Other miscellaneous approvals not specified; gst master='Yes' (soft).
- **Issue of Certificates (No Dues / Balance / Interest / Account Maintaining)** (facility=Any) → `CHG-OC-523` **Issue of Certificates** — rename; confirmed Fixed amount 200; charge_unit=Certificate; freq=Each issuance; note_1 preserves No dues/Balance/Interest/Account maintaining; exemption_1 Priority sector; rename long Issue of Certificates title→Issue of Certificates; gst master='Yes' (soft).
- **NACH / ECS Failed Mandate (Insufficient Funds)** (facility=Any) → `CHG-OC-528` **ECS / NACH Debit Return Charge** — rename; confirmed Fixed amount 200; charge_unit=Return; freq=Each return; note_1='Failed Mandate(Debit) on account of Insufficient Funds.'; rename NACH / ECS Failed Mandate (Insufficient Funds)→ECS / NACH Debit Return Charge; gst master='Yes' (soft).

## 2. Value mismatches

- **Solvency Certificate** (facility=Any; Structured_Data excel row 19) → `CHG-OC-524` **Solvency Certificate Charges**; DIFF fixed_amount_per_lakh_or_part: source='Formula ₹200/- + GST per Lakh (requires Fixed amount 200 + fixed_amount_per_lakh_or_part=Yes)' master=None (Master stores flat Fixed amount 200 with charge_min=1000 charge_max=15000 but omits fixed_amount_per_lakh_or_part=Yes; without the flag the ₹200/lakh formula is incorrect); rename Solvency Certificate→Solvency Certificate Charges would be OK if per-lakh flag set; min/max 1000/15000 match source.
- **Cheque Return Unpaid — Cheque Drawn on Us** (facility=Any; Structured_Data excel row 26) → `CHG-OC-529` **Cheque Return Unpaid - Cheque Drawn on Us**; DIFF fixed_amount: source=500 master=200 (Source F1 Local Cheques ii. Cheque (drawn on us) returned unpaid: ₹500; master has ₹200 (same as Local Cheque Returned by Other Banks)); name em dash→hyphen normalize OK; notes preserve local-cheque / no-fault wording.

## 3. Missing in master

- **CERSAI Creation or Modification of Security Interest** | facility=Any | product='Housing Loan' | type=Fixed amount | amount='100' | min=None max=None | pct_on=None | loan_from=None loan_to=500000 | customer=Any | loc=Any | charged_per='Per creation or modification' | frequency='On creation or modification of security interest' | conditions='For loans up to Rs.5.00 Lacs. Plus 18% GST.' (Structured_Data excel row 10)
- **CERSAI Creation or Modification of Security Interest** | facility=Any | product='Housing Loan' | type=Fixed amount | amount='200' | min=None max=None | pct_on=None | loan_from=500000 loan_to=None | customer=Any | loc=Any | charged_per='Per creation or modification' | frequency='On creation or modification of security interest' | conditions='For loans of ₹ 5.00 Lacs & above. Plus 18% GST.' (Structured_Data excel row 11)
- **CERSAI Search** | facility=Any | product='Housing Loan' | type=Fixed amount | amount='20' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per='Per search' | frequency='Each search' | conditions='Search for an information on CERSAI. Plus 18% GST.' (Structured_Data excel row 12)
- **Out of Pocket Expenses (Courier, Inspection Conveyance, Special Audit, etc.)** | facility=Any | product='Housing Loan' | type=At actuals | amount='At actuals' | min=None max=None | pct_on=None | loan_from=None loan_to=None | customer=Any | loc=Any | charged_per='Per service' | frequency='As incurred' | conditions='Recovered in full on actual cost basis for Courier/dispatch of documents/outstation cheques, telecommunication, swift operations, local conveyance onsite inspections/special audit of borrowers etc.' (Structured_Data excel row 21)

## 4. Extra / redundant / not in individual file

Master `Bank_charges` rows for `jammu and kashmir bank` with no Structured_Data counterpart (or redundant duplicate of a mapped charge). Processing / prepayment / overdue often come from Offers/CSV origins and appear outside Structured_Data.

### 4a. Other-charges redundant / duplicate vs Structured_Data
(none) — all 22 `Other charges` rows map to Structured_Data (20 value-OK including renames; 2 value mismatches on Solvency per-lakh flag and Cheque Drawn on Us amount). CERSAI ×3 and Out of Pocket Expenses are missing rather than duplicated.

### 4b. From Offers.processing (not in Structured_Data) — Processing fee clones
- **5 rows** origin=`Offers.processing`. Not in Structured_Data (source is JKB SOC Annexure-I — inspection slabs, commitment/review, CIR, CERSAI, sanction amendments, certificates, remittance nil, NACH/cheque returns; no processing-fee rows).
  - Sample ids: CHG-PROC-753, CHG-PROC-754, CHG-PROC-755, CHG-PROC-756, CHG-PROC-757
  - Schemes seen: Housing Loan ×5; facility=Term Loan; rate_type=Floating; purpose=Regular Home Loan; occupation=Any.
  - Percentage/min/max fingerprints: {(0.0025, 2000, 50000): 5} (= 0.25% of sanctioned amount, min ₹2,000, max ₹50,000).
  - CIBIL bands (distinct, not duplicates): 750–900, 726–749, 701–725, 675–700, 300–674.
  - Internal clone fingerprint groups with multiplicity>1 on full key including CIBIL band: **0** groups (0 rows).

### 4c. From Offers.overdue (not in Structured_Data)
- `CHG-OD-69` **Overdue charges** | facility=Term Loan | scheme=Housing Loan | rate_type=Floating | pct=0.002 | percentage_per_annum=Yes | pct_base=Default_Amount | charge_min=200 | grace_period_days=15 | note=overdue_whichever_higher=Yes

### 4d. From Offers.prepayment (not in Structured_Data)
- `CHG-PRE-54` **Prepayment charges** | facility=Term Loan | scheme=Housing Loan | rate_type=Floating | fixed=0 | note=Prepayment not charged (prepayment_applicable=No)

### 4e. From CSV.fixed_prepay (not in Structured_Data)
- `CHG-PRE-246` **Prepayment charges** | facility=Term Loan | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | source_ref=Jammu and Kashmir Bank|TL_self
- `CHG-PRE-247` **Prepayment charges (takeover)** | facility=Term Loan | rate_type=Fixed | fixed=None | pct=0.02 | pct_base=Amount_Being_Paid | source_ref=Jammu and Kashmir Bank|TL_take

### 4f. From Slab_Table (not in Structured_Data)
(none)

## 5. Notes

- Source of truth: `JKB_Home_Loan_Charges_Official.xlsx` sheet **Structured_Data** (27 rows).
- Master filter: `Bank_charges` where `bank_key` == `jammu and kashmir bank` (31 rows).
- Semantic matching used; renames allowed when amounts/slabs match.
- Nil correctly encoded as Fixed amount 0 on Exchange / Remittance Term Loan disbursement drafts.
- Inspection Formula (actual expenses + fixed) correctly encoded as Fixed amount + `actuals_in_addition_to_charge=Yes` across 4 slabs.
- Outstation cheque Formula ₹500 + OOP correctly encoded as Fixed amount 500 + `out_of_pocket_expenses_additional=Yes`.
- Percentage 0.05%/0.10%/1.00% correctly stored as fractions 0.0005 / 0.001 / 0.01.
- Priority Sector Nil for Issue of Certificates encoded as `exemption_1` on the ₹200 row (not a separate Fixed 0 row).
- Solvency `CHG-OC-524`: ₹200 per lakh (`fixed_amount_per_lakh_or_part=Yes`) of Solvency certificate amount, min ₹1,000 max ₹15,000. Cheque drawn on us `CHG-OC-529` = ₹500. OOP At actuals → `CHG-OC-871`. CERSAI still ignored (govt).
- No Other-charges extra/redundant vs Structured_Data (mismatched rows are mapped, not extra).
- No `Slab_Table` origin rows for this bank.
- Offers.processing CIBIL bands share the same fee fingerprint but are distinct score bands (not internal duplicates).

---
## Rules reclassification (post Axis review)
See `AUDIT_RULES.md`. Applied across all banks:
- **Government/statutory missing → ignored:** 3
- **Still missing (bank service charges):** 0
- **Offers.processing extras → not an error (not from Structured_Data):** 1 listed items/groups
- **Prepayment extras → ignored:** 3 listed items/groups
- **Offers.overdue → no action unless noted separately:** 0 listed items/groups
- **Other-charges / Slab_Table extras still to review:** 0
- **Value mismatches still listed in §2:** 0

### Ignored government-class missing (do not add to Bank_charges from this sheet)
- CERSAI Creation or Modification of Security Interest
- CERSAI Creation or Modification of Security Interest
- CERSAI Search

### Still missing — bank service charges (actionable)
(none)
