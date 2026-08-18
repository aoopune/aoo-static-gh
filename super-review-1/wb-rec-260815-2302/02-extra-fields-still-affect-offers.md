# Extra fields in the dropdown still have to change the offers

They agree the extra block can collapse (`01`). The next sentence is the condition: **these things still have to affect** the result.
Hiding Existing EMIs, cards, FOIR, tenure, and co-applicant must not mean the comparison pretends they are zero.
They have just **re-opened** Adjust eligibility while saying this — the five extra rows are on screen.
The credit-card story (`03`) is why those extras exist; this line is the product rule.

## Classification
- kind: issue | product
- status: open
- surface: explore-banks / `details#hlc-form-more` extras (`#hlc-existing-emis`, `#hlc-card-limits`, `#hlc-foir`, `#hlc-tenure`, `#hlc-coapplicant`) feeding Bank options. They do not click See options in this clip.
- viewport: 1366x768 @2x
- speakers: After Speaker A’s dropdown line (`01`), a second turn: “Correct.” Then “But actually these things have to be affected.” ASR is not diarized. Treat “Correct” as Speaker B agreeing with the dropdown; the “but actually” as the constraint (B or A).

## Session metadata
- folder: `wb-rec-260815-2302`
- recording id: `1c3a6e22-3a9a-475d-8d5b-350dfe605171`
- clip: 20 of 30
- started_at: 2026-08-15T17:32:34.848Z
- ended_at: 2026-08-15T17:34:36.510Z
- duration_ms: 121662 (~2 min 2 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 19
- event count: 34
- console: empty
- tabs: 1
- previous: `01` (dropdown so the form doesn’t get too big) — same accordion clicks
- next: `03` (credit-card rejection analogy: banks look at more than salary and score)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Same extra block as `01`. While they say this, they have just **re-opened** Adjust eligibility (`0002.jpg`, t=6101). The five extra rows are on screen: Existing EMIs ₹555, cards ₹0 + 10% load, FOIR 55% (default), Tenure 20*, Co-applicant No.
- `0003.jpg` (t=14202) stays on that open block through the start of the credit-card story (`03`).
- No fill, no See options click. Table is below the fold when the extra block is open.

## What they said (faithful, complete)

**00:04.640–00:07.820** Speaker B then A (or B continuing):
> Raw ASR: “Correct. But actually these things have to be affected.”
> Corrected: “Correct. But actually these things have to **affect** [the offers / the result].”
> ASR **affected** ~0.21; **Correct** ~0.19; **these** ~0.21. **These things** = the extra Adjust eligibility rows they just collapsed and opened (`01`), not a new set of fields.
> Do not invent the word “offers” in their mouth — they said “these things have to be affected.” The home-loan job on this page is the bank table (rate / amount / tenure / EMI), so “affect” means those numbers must still move.

They do not name a formula, a default of zero, or which extra field matters most. That ranking starts with existing EMI (`04`) and FOIR (`05`).

## First-principles problem
- What must be true: collapsing a row for **size** cannot change the **eligibility math**. If existing EMI, card load, or FOIR is on the person, the table must show it.
- Root vs symptom: a closed accordion is a UI. The root failure would be **offers computed as if the extra facts were absent**.
- Constraints they implied: dropdown is allowed (`01`); the extra facts still have to affect the comparison.

## Directions they considered
- Agree with dropdown (“Correct”).
- Immediately qualify: the hidden rows still have to **affect**.
- Lean: this is the product rule for `01`, not a separate layout mock.
- They do not say “always expanded.” They do not say “ignore extras until opened.”

## Company / user / future thinking
- User: will not open every accordion. If closed extras are treated as ₹0 / 55% default / no co-applicant without being true, the table **lies** (`06`: surprise later → lose trust).
- Company: independent comparison means the picture includes obligations, not only income and CIBIL (`03`’s card analogy).
- Future: 2304 pre-fill is one way to keep extras in the math without forcing a tall empty form. Do not ship a dropdown that drops extras from the calculation.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: eligibility pipeline that reads `#hlc-existing-emis`, `#hlc-card-limits` / card-load percent, `#hlc-foir`, `#hlc-tenure`, `#hlc-coapplicant` whether `#hlc-form-more` is open or closed; submit `#hlc-see-options`.
- Acceptance criteria in their words: “these things have to be affected” / still affect the offers even when dropped down.
- What NOT to do: do not skip extras when the accordion is closed. Do not zero Existing EMIs because the row is hidden. Do not treat this as a request to add an Education field (`03` is an analogy). Do not merge this into “make the form bigger” (`01` already chose dropdown).
- Open questions: when extras are blank, is the honest behaviour “unknown / incomplete” (`06`) or a stated default (FOIR 55% on screen)? 2249 `04` already forbids skip-and-still-trust.
- Related recordings:
  - continues_from: `01`; `wb-rec-260815-2249` `04` (if they don’t fill they can’t go) and `05` (which extras are for everyone)
  - continues_in: `03`–`06` (why extras matter; surprise/trust); `wb-rec-260815-2304` (pre-fill so friction stays low)

## Evidence index
- `audio.vtt` 00:04.640–00:07.820
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (“affected” ~0.21)
- `events.json`: accordion already reopened at t=5699; idle through this line
- `screenshots/0002.jpg`–`0003.jpg`
- `pages.json`: extra fields required false except Tenure
- Site `pages/explore-banks.html`: field ids above
