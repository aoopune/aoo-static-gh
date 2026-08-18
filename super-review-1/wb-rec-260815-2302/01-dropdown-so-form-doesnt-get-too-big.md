# Keep the extra fields in a dropdown so the form does not get too big

After an ~11 min gap they reverse 2249’s “show the columns **directly**.” First line of this take: **drop down** so the **form doesn’t get too big**.
They prove it on the card — close **Adjust eligibility**, then open it again.
The extra rows stay in that accordion: Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant.
The next sentence (`02`) is the condition: collapsing them must not mean they stop affecting the offers.

## Classification
- kind: issue | product + layout
- status: open
- surface: explore-banks / Loan inputs (`form#hlc-inputs`) / recorded accordion `details#hlc-form-more` labelled **Adjust eligibility** (subtitle: “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”) / submit `#hlc-see-options` (“See options”)
- viewport: 1366x768 @2x
- speakers: Speaker A states the dropdown. Speaker B’s “Correct” is the first word of `02`. ASR is not diarized; `audio.json` language tag is `mr`.

## Session metadata
- folder: `wb-rec-260815-2302`
- recording id: `1c3a6e22-3a9a-475d-8d5b-350dfe605171`
- clip: 20 of 30
- started_at: 2026-08-15T17:32:34.848Z
- ended_at: 2026-08-15T17:34:36.510Z
- duration_ms: 121662 (~2 min 2 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 19 (JPEG; `screenshots/0000.jpg`–`0018.jpg`)
- event count: 34
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2249` ended 2026-08-15T17:21:34.102Z (~11 min earlier) — show extra columns **directly**; size was already a problem (`02` there); optional vs mandatory (`04`)
- next: `wb-rec-260815-2304` starts 2026-08-15T17:34:55.529Z (~19 s later) — sit here, keep a **pre-fill**, then stars/meter for column importance

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Section: `h1` “Explore banks.” then form **Loan inputs**. Extra fields live in recorded `details#hlc-form-more` (clicks hit `summary > span > span:nth-of-type(1)`).
- On-page copy in the recording (not later live HTML):
  - Accordion title: **Adjust eligibility**
  - Subtitle: “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”
  - Extra fields when open: Existing EMIs ₹555; Credit card limits ₹0 (“About **10%** counts as monthly load”); Share of income for EMIs / FOIR **55% (default)**; Tenure **20** years (asterisk); Co-applicant **No**
  - Primary fields: Monthly income ₹1,00,000; Property agreement value ₹6,000; Age 35; CIBIL 780; Occupation **Self-employed**; Purpose **Regular**
  - Button: **See options** on the right of the extra header
- Click/focus (speech ↔ events):
  - Start `0000.jpg` (t=200): extra block already **open**; table not in view
  - **00:04.186** click accordion summary (`0001.jpg`, t=4590) — extra block **collapsed**; Overview table visible (Canara Bank 8.80% / ₹5,400 / 20 yrs / EMI ₹48)
  - **00:05.699** click the same summary (`0002.jpg`, t=6101) — extra block **open** again
- They do not type. Leftover ₹6,000 property / ₹555 existing EMI are from earlier clips; they do not complain about those figures here.

## What they said (faithful, complete)

**00:00.000–00:03.940** Speaker A:
> Raw ASR: “So we have to drop down so that the form doesn't get too big.”
> Corrected: same. **Drop down** = keep the extra rows in this **accordion** (they close and reopen it while saying this). Not a new HTML `<select>`.
> ASR: **we** is weak (~0.03); **too** ~0.18; the rest of the line is usable.

Speaker B’s “Correct” and the “these things have to affect” caveat are `02` — same two seconds of clicking, next sentence.

They do not propose a new label, a second card, or deleting See options. They do not say “show directly” in this clip.

## First-principles problem
- What must be true: the extra eligibility rows cannot make the **Loan inputs** card so tall that banks and the table disappear; a **dropdown/accordion** is the size control they pick in this take.
- Root vs symptom: the symptom is a tall card (2249 `02` “so big”). The root they act on here is **always showing five extra rows**. Collapsing **Adjust eligibility** is the size fix they demonstrate.
- Constraints they implied: keep a drop-down; form must not get too big. The next sentence (`02`) forbids treating collapse as “these fields don’t matter.”

## Directions they considered
- One direction: **drop down** the extra block so the form stays short.
- Lean: this is a product/layout call after sitting with 2249’s “show directly,” not a taste nit. They physically collapse then expand the row.
- They do **not** pick a new name for Adjust eligibility in this span (2240 already rejected that phrase). They do **not** flatten the five fields into the main grid.

## Company / user / future thinking
- User: arrives to compare banks. A card that eats the viewport before the table feels like homework, not comparison.
- Company: Shroffin is independent comparison — full picture, customer decides. They still have to show banks on the same page (2249 `02`). Hiding the extra block is a **layout** move, not a claim that EMI/cards/FOIR are optional trivia (`02`, `04`, `05`).
- Future: 2304 will try **pre-fill** plus importance (stars/meter) so ten columns can stay visible without friction. Do not treat this clip’s dropdown as the last word on that.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` extra-fields block. Recording used `details#hlc-form-more` / summary **Adjust eligibility**. Live page is a `div#hlc-form-more` without that accordion and submit `#hlc-see-options` now says **Compare banks** — match the **recorded** control they clicked, not a later redesign, unless the user asks to follow live HTML.
- Acceptance criteria in their words: “we have to drop down so that the form doesn't get too big.”
- What NOT to do: do not “fix” size by deleting Existing EMIs / cards / FOIR / tenure / co-applicant. Do not treat 2249’s “show the columns directly” as cancelled without recording the tension — this clip is the size compromise. Do not ship collapse that zeros or ignores the extra numbers (`02`). Do not treat leftover ₹6,000 / ₹555 as this issue.
- Open questions: is “drop down” always-collapsed until clicked, or a compact row that can expand? Exact label once it is not “Adjust eligibility” (2240: additional columns / attributes / parameters).
- Related recordings:
  - continues_from: `wb-rec-260815-2249` `01` (show columns directly) and `02` (card became so big; still have to show banks/intelligence)
  - continues_in: `02` in this folder (these things still have to affect offers); `wb-rec-260815-2304` (pre-fill + importance so more columns can stay on the card)

## Evidence index
- `audio.vtt` 00:00.000–00:03.940
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span (drop down; we ~0.03)
- `events.json`: accordion clicks t=4186 (`0001.jpg` closed) and t=5699 (`0002.jpg` open)
- `pages.json` / `RECAP.md`: Explore banks, Loan inputs, Existing EMIs / FOIR / Tenure / Co-applicant
- `screenshots/index.json` + `0000.jpg`–`0002.jpg`
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- `replay.spec.ts`: `details#hlc-form-more > summary` clicks
- Site `pages/explore-banks.html`: `#hlc-form-more`, extra fields listed above (live markup is no longer `<details>`; live submit label is **Compare banks**)
