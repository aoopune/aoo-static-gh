# HOME_LOANS_COMPARE JSON VALIDATION

**Result:** PASS (export completed)

- data_version: `hlc-20260727-d13085a5`
- source_sha256: `d13085a5ea94a3a7500fb65c99cc5235190435ee5582713e3e8b4d6bf5ae4ae4`
- generated_at: `2026-07-27T18:35:39+00:00`
- offers: 1149
- bank_charges: 2281
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
