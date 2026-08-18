# If they say yes, take the extra details — the problem is usefulness, not too many fields

They click Co-applicant **Yes** while saying: if an applicant says yes, **take their details**. Don’t think too much. The customer does **not** have a problem with the details; they should **feel that the details are useful**. This is the same usefulness test as `04`, applied to the yes-branch fields.

## Classification
- kind: product-thinking | interaction (progressive disclosure)
- status: open
- surface: `#hlc-coapplicant-row` No/Yes pills; `#hlc-coapplicant-fields` (income, EMIs, card limits) shown when Yes
- viewport: 1366×768 @2x
- speakers: Speaker A. ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2304`
- recording id: `6033ef99-94cd-427e-b722-e831e6342b86`
- clip: 21 of 30
- started_at: 2026-08-15T17:34:55.529Z
- ended_at: 2026-08-15T17:43:48.848Z
- duration_ms: 533319 (~8 min 53 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 73
- event count: 129
- console: empty
- tabs: 1
- ASR: `audio.json` language tag `mr`
- previous: this folder `05`; `wb-rec-260815-2302` also clicked Yes then No on co-applicant
- next: this folder `07`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- **03:45.261** click Co-applicant **Yes** (`0030.jpg` t=225667); fill `#hlc-coapplicant` = `"yes"` at t=226164. Extra fields appear on the same card: **Co-applicant income ₹0**, **Co-applicant EMIs ₹0**, **Co-applicant card limits ₹0** (black mask rects on those rows). Existing EMIs still ₹555; FOIR still 55%; Tenure still 20. See options still on the right of Adjust.
- They leave Yes on for the rest of the clip (no click back to No).
- **04:07.550** they then click Adjust eligibility summary (`0033.jpg`) and the extra block **collapses** (`0034.jpg`) — that toggle is the start of the card-hierarchy talk (`07`), not a reversal of Yes.
- Screenshots: `0030.jpg`–`0032.jpg` (t=225667–244201) Yes + three co-applicant fields at ₹0.

## What they said (RAW + corrected, both speakers)

**03:42.600–03:47.300** Speaker A (timed with the Yes click):
> Raw ASR: “And okay, bro. If an applicant says yes, then take their details.”
> Corrected: same. Opening **And okay, bro.** is weak (p≈0.008–0.12). **applicant** p≈0.96, **yes,** p≈0.74, **details.** p≈0.85. **Yes** = Co-applicant Yes (event + still). Take the extra income / EMIs / card-limit fields.

**03:50.040–03:52.220** Speaker A:
> Raw ASR / corrected: “Don't think too much. Don't think too much.”
> Second pass is strong (**Don't** p≈0.57, **much.** p≈0.996). Do not over-design the yes branch (no extra gate, no second mandatory sermon).

**03:52.860–04:02.800** Speaker A:
> Raw ASR: “What you should do is, we should think that the customer doesn't have a problem with the details. They should feel that the details are useful.”
> Corrected: same. **customer** p≈0.59, **problem** p≈0.95, **useful.** p≈0.70. Field count is not the objection (`04` already: no problem with 10 fields **if useful**). Usefulness is.

Silent gap **04:02–04:30** (~28 s) before `07`. Do not invent speech for it.

## First-principles problem
- What must be true: a Yes is consent to **more fields**, which should appear and be taken. The customer’s objection is “is this useful?”, not “how many boxes?”
- Root vs symptom: hiding co-applicant fields until Yes is fine. Root they are stating: don’t hesitate to collect them, and don’t treat length as the problem.
- Constraints: if yes → take details; don’t overthink; usefulness over mandatory (`04`).

## Directions they considered
- If Yes, take details immediately.
- Don’t think too much (no extra product anxiety on this branch).
- Reframe: customers accept details that feel useful.
- Lean: keep the Yes reveal; fill it; explain it (`04`). Not a new wizard.

## Company / user / future
- User: saying they have a co-applicant is enough — show the three fields. They will fill them if the tips say why.
- Company: we are not afraid of detail. We are afraid of **useless** detail. That is the opposite of shortening the form for its own sake (`2302` dropdown vs `2249` show columns).
- Future: `07` will still rank some columns as less important (FOIR). Usefulness and importance are related, not identical.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: co-applicant pills + `#hlc-coapplicant-fields` show/hide in `pages/explore-banks.html` / the existing script around `#hlc-coapplicant`.
- Acceptance criteria in their words: if an applicant says yes, take their details; don’t think too much; the customer doesn’t have a problem with the details; they should feel the details are useful.
- What NOT to do: do not add a second confirm after Yes. Do not hide co-applicant income after Yes. Do not mark those three fields mandatory (`04`).
- Open questions: whether co-applicant fields stay prefilled at ₹0 (they did not type). Whether collapsing Adjust eligibility should also hide a Yes they already gave (`0034.jpg` collapses the whole extra block).
- Related recordings:
  - continues_from: `04` (usefulness / ten fields); `wb-rec-260815-2302` `08`/`09` (Yes then No)
  - continues_in: `07`; session continues_in: `wb-rec-260815-2313`

## Evidence index
- `audio.vtt` 03:42.600–04:02.800
- `events.json`: click Yes t=225261; fill `#hlc-coapplicant` `"yes"` t=226164
- `replay.spec.ts`: Yes click + fill `"yes"`
- `screenshots/0030.jpg`–`0032.jpg`
- Site: `#hlc-coapplicant-row`, `#hlc-coapplicant-fields`
