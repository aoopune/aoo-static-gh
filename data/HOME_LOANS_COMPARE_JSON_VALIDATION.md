# HOME_LOANS_COMPARE JSON VALIDATION

**Result:** PASS (export completed)

- data_version: `hlc-20260814-dd5825a5`
- source_sha256: `dd5825a5d9628366c0196b441cf0342813743fcebfa6d4ac70fbd12126fe8853`
- generated_at: `2026-08-14T19:30:25+00:00`
- latest_checked_on: `2026-07-14`
- offers: 806
- bank_charges: 1501 (xlsx 1402 + property-check overlay)
- government_charges: 18
- part_prepayment_rules: 21
- output: `data/home-loans-compare.json`
- part_prepayment_rules_source: `data/part-prepayment-rules.csv`
- processing_fee_rows (Offers.processing): 212
- processing fees: CIBIL cleared; no 0.25% Canara tier
- property_check_placeholder_rows: 99 (origin `Temporary.property_checks`)

## Product query contract
1. Match offers by inputs; Blank/Any = no restriction; Offered for customer quotes.
2. Join bank_charges on bank_key (+ filters / when_it_matters).
3. Slabs: group charge_group_id, order slab_from.
4. Govt: filter by jurisdiction/state.
5. EMI in UI from matched roi + amount + tenure.
6. Apply packet: data_version + bank_keys + offer_row_ids + charge ids.

## One-shot
- Candidate primary JSON only; not auto-promoted to live site.
- Secondary/tertiary/Approve UI out of this export.
