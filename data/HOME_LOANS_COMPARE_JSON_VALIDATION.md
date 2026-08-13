# HOME_LOANS_COMPARE JSON VALIDATION

**Result:** PASS (export completed)

- data_version: `hlc-20260813-5a5f2e9f`
- source_sha256: `5a5f2e9f547269398c930c40a30b2ccb663500b6b7d20cbb294a12101548fb09`
- generated_at: `2026-08-13T21:17:10+00:00`
- offers: 806
- bank_charges: 2347
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
