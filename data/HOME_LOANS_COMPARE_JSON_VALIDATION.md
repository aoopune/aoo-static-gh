# HOME_LOANS_COMPARE JSON VALIDATION

**Result:** PASS (export completed)

- data_version: `hlc-20260801-a024dc1c`
- source_sha256: `a024dc1c2b781c8fbca28b8d2e50d221fd3952b1e73223e32a1b3bcb76cebddc`
- generated_at: `2026-08-01T13:19:38+00:00`
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
