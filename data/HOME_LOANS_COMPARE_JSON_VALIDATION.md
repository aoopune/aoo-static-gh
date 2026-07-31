# HOME_LOANS_COMPARE JSON VALIDATION

**Result:** PASS (export completed)

- data_version: `hlc-20260731-04b0e951`
- source_sha256: `04b0e9513659ab6bf0fdc34fb4233d34c52aabab84593948d8492f17bbf5442e`
- generated_at: `2026-07-31T14:23:58+00:00`
- offers: 1149
- bank_charges: 2337
- government_charges: 18
- output: `data/home-loans-compare.json`

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
