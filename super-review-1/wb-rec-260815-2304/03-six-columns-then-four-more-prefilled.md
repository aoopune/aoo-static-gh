# Six columns, then four more — all prefilled, so you do not increase the friction

They walk the card as **columns**: suppose I see **6**, then **4 more** here, **all prefilled**. That is **10** columns at the start. Friction must **not** go up just because the extra four are visible. Some columns are **10 on 10** consequence; others are **less consequential** — everyone has their own like. The ten stay prefilled.

## Classification
- kind: product-thinking | layout (show extra fields without extra work)
- status: open
- surface: `.hlc-form-primary-grid` (six) + `details#hlc-form-more` extra row (they count **four** more; the subtitle lists five names)
- viewport: 1366×768 @2x
- speakers: Speaker A counts aloud while clicking. ASR is not diarized.

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
- previous: this folder `02`
- next: this folder `04`; session continues in `wb-rec-260815-2313`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- The **six** they click in order (**01:12–01:14**) while saying “1, 2, 3, 4, 5, 6”:
  1. `#hlc-monthly-income` t=72598
  2. `#hlc-property-value` t=72979 (`0010.jpg`) — still Self-employed / Regular
  3. `#hlc-age` t=73499
  4. `#hlc-cibil` t=73765 (`0011.jpg`)
  5. **Salaried** t=74165 (`0012.jpg`) — Occupation **changes** from Self-employed to Salaried; Purpose still Regular in this frame
  6. **Top-up** t=74609 — Purpose **changes** from Regular to Top-up
- The **four more**: they do **not** click them in this count. They point at the already-open Adjust eligibility block. On-page extra fields: Existing EMIs, Credit card limits, FOIR, Tenure, Co-applicant (subtitle names those five; `2249` also counted four then five). Do not invent which one they skipped.
- After the six clicks, Occupation is **Salaried** and Purpose is **Top-up** for the rest of the clip (`0013.jpg` t=84200 confirms both). Property stays leftover **₹6,000**. Extra row still open with ₹555 / ₹0 / 55% / 20 / No.
- Screenshots: `0010.jpg`–`0018.jpg` (t=73000–126201). No importance chrome. Black mask rects on the extra row.

## What they said (RAW + corrected, both speakers)

**01:05.690–01:20.290** Speaker A (the walk):
> Raw ASR: “Okay, now what will happen? Suppose I see 6 columns. 1, 2, 3, 4, 5, 6. Then I see 4 more columns here. 1, 2, 3, 4. And all are pre-fielded.”
> Corrected: “Suppose I see **6 columns**. 1, 2, 3, 4, 5, 6. Then I see **4 more columns here**. 1, 2, 3, 4. And all are **prefilled**.”
> **Okay,** at 01:05 p≈0.004 — noise. **6** p≈0.30 but the six clicks match. **pre-fielded.** p≈0.62. The four are the extra block, already filled.

**01:20.410–01:22.330** Speaker A:
> Raw ASR / corrected: “Okay, so you don't have to increase the friction.”
> **friction.** p≈0.94. Showing 10 columns is allowed **if** they stay prefilled (no extra typing tax).

**01:24.250–01:34.270** Speaker A:
> Raw ASR: “At the start, I came here. I have seen 10 columns. 10 on 10 is the consequence. But everyone has their own like. That this is less consequential. This is less consequential. Okay.”
> Corrected: same. **10 columns** = 6+4. **on** in “10 on 10” is p≈0.003 — could be “10, 10 is the consequence” (ten columns, and 10/10 consequence) or the score language from `02`. Keep both; they still contrast **10 on 10** vs **less consequential** twice. They do not name which two weaker columns. “Everyone has their own like” = different people will weight columns differently.

**01:35.050–01:38.150** Speaker A (bridge into `04`):
> Raw ASR: “And these 10 are pre-fielded. And I can see tooltips below.”
> Corrected: “And these **10 are prefilled**. And I can see **tooltips** below.”
> Tooltip *content* is `04`. Here the point is: ten filled columns + tips visible.

They do not ask to add an 11th field. They do not ask to remove prefill.

## First-principles problem
- What must be true: the extra obligation fields are **on the first picture**, already filled, and marked as more/less consequential (`02`), so seeing ten is not “a longer form.”
- Root vs symptom: a collapsed Adjust eligibility row is the symptom of hiding four columns. Root they are solving: **friction** (typing) vs **surprise** (`01`). Prefill is how both can be true.
- Constraints: 6+4=10; all prefilled; do not increase friction; consequence can be 10/10 or less.

## Directions they considered
- Show six, then four more, all prefilled.
- Do not raise friction for that.
- Accept that some columns are 10/10 and some are less consequential (personal weighting).
- Lean: layout rule for the extra block (aligns with `2249` “show extra columns directly,” against `2302` “dropdown so the form doesn’t get too big”). Capture the tension; they are on the **show them, prefilled** side in this span.

## Company / user / future
- User: arriving and seeing ten filled columns is fine; arriving and being asked to **type** ten is not.
- Company: comparison that hides FOIR / EMIs to look short will surprise later. Showing them empty would look like homework.
- Future: `04` says they will happily fill all ten **if** the tooltip names the rupee effect. `07` will rank FOIR as not that important (a “less consequential” column).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `.hlc-form-primary-grid` + `#hlc-form-more` (whether extra fields are collapsed). Defaults already on the extra inputs.
- Acceptance criteria in their words: see 6 columns, then 4 more, all prefilled; don’t increase the friction; at the start I have seen 10 columns; 10 on 10 vs less consequential; these 10 are prefilled.
- What NOT to do: do not empty the extra fields to “force honesty” (`2240` `05` is a different incentive). Do not treat their **four** as a mandate to delete credit-card limits — they counted four; the subtitle still lists five. Do not add a second form page.
- Open questions: four vs five extra fields (`2249` already flipped 4→5). Whether “everyone has their own like” means **user-set** importance or just an observation that weights differ.
- Related recordings:
  - continues_from: `02`; `wb-rec-260815-2302` (dropdown so the form doesn’t get too big); `wb-rec-260815-2249/01` (show extra columns; counted four then five)
  - continues_in: `04`; session continues_in: `wb-rec-260815-2313`

## Evidence index
- `audio.vtt` 01:05.690–01:38.150
- `events.json`: six clicks t=72598–74609 (income → property → age → CIBIL → Salaried → Top-up)
- `replay.spec.ts`: same six locators
- `screenshots/0010.jpg`–`0018.jpg`
- Site: six primary zones + `#hlc-form-more` extra fields
