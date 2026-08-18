# Show the extra columns on the card — not behind “Adjust eligibility”

The last clip ended mid-thought on renaming **Adjust eligibility** to additional columns / attributes / parameters. This take is the product call: **instead of that hide**, show the extra fields **here, directly**. They count **four**, then correct to **five** — Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant.

## Classification
- kind: issue | product + layout
- status: open
- surface: explore-banks / `form#hlc-inputs` / recorded accordion `details#hlc-form-more` labelled **Adjust eligibility** (subtitle: “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”) / submit `#hlc-see-options` (“See options”)
- viewport: 1366x768 @2x
- speakers: Speaker A (primary reviewer) states the rule. Speaker B is not a separate ASR turn in this span. ASR is not diarized; `audio.json` language tag is `mr`.

## Session metadata
- folder: `wb-rec-260815-2249`
- recording id: `55f40b18-3bf3-46a3-b169-7adabe6886b1`
- clip: 19 of 30
- started_at: 2026-08-15T17:19:17.338Z
- ended_at: 2026-08-15T17:21:34.102Z
- duration_ms: 136764 (~2 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 20 (JPEG; `screenshots/0000.jpg`–`0019.jpg`)
- event count: 43
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2240` ended 2026-08-15T17:19:10.273Z (~7 s earlier) — Adjust eligibility is a bad phrase; See options should sit below it, centered; rename to additional columns / attributes / parameters in simple English (`09`–`11`)
- next: `wb-rec-260815-2302` starts 2026-08-15T17:32:34.848Z (~11 min later) — reverse: **drop down** so the form does not get too big; extras must still change offers

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Section: `h1` “Explore banks.” then form **Loan inputs**. Extra fields live in recorded `details#hlc-form-more` (clicks hit `summary > span > span:nth-of-type(1)` or `:nth-of-type(2)`).
- On-page copy in the recording (not later live HTML):
  - Accordion title: **Adjust eligibility**
  - Subtitle: “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”
  - Extra fields when open: Existing EMIs ₹555; Credit card limits ₹0 (“About **10%** counts as monthly load”); Share of income for EMIs / FOIR **55% (default)**; Tenure **20** years (asterisk); Co-applicant **No**
  - Primary fields: Monthly income ₹1,00,000; Property agreement value ₹6,000; Age 35; CIBIL 780; Occupation **Self-employed**; Purpose **Regular**
  - Button: **See options** on the right of the extra header
- Click/focus (speech ↔ events):
  - Start `0000.jpg` (t=185): extra block already **open**
  - **00:01.995** click `#hlc-see-options` (`0001.jpg`, t=2397) — jumps to Bank options table (Canara 8.80% / ₹5,400 / 20 yrs / EMI ₹48)
  - **00:06.728** click accordion title span (`0002.jpg`, t=7134) — extra block **collapsed**; table still in view
  - **00:15.088** click accordion subtitle span (`0003.jpg`, t=15490) — extra block **open** again while they say “4 columns” / “5 columns”
- They do not type. Leftover ₹6,000 property / ₹555 existing EMI are from `2240`; they do not complain about those figures here.
- Live site today: extras sit in `div#hlc-form-more` / `#hlc-form-more-panel` (no `<details>`). Match the **recorded** accordion they clicked.

## What they said (faithful, complete)

**00:01.210–00:13.590** Speaker A:
> Raw ASR: “What we need to do is, instead of adjusting the availability, we need to show the columns here.”
> Corrected: “What we need to do is, instead of **Adjust eligibility**, we need to show the columns here.”
> **availability** ~0.08 — almost certainly the on-screen label **Adjust eligibility** (2240 already called that phrase a bad word and listed “additional columns”). **here** = this Loan inputs card, not a second page.

**00:13.930–00:16.510** Speaker A:
> Raw ASR / corrected (same): “Directly. There are only 4 columns here.”
> **Directly** = not behind the accordion. **4 columns** = first count of the extra rows.

**00:18.870–00:19.430** Speaker A:
> Raw ASR: “5 columns.”
> Corrected: same. They re-count. The subtitle lists **five**: Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant. **5** ~0.16; treat the correction as the intended count, not a table-column count (Overview already shows Rate / Loan amount / Tenure / EMI).

Speaker B: no separate line in this span. Examples they use: the extra rows they just opened. Pros they imply: the customer sees the columns without hunting “Adjust eligibility.” Cons are the next breath (`02`): the card gets huge.

They do not pick a Super-English label in this span (2240 `11` still owns that). They do not say “drop down” here — that is `2302` `01`.

## First-principles problem
- What must be true: the five extra eligibility facts cannot live only behind a label the last clip already rejected. If they are columns the product needs, they belong **on the card**.
- Root vs symptom: the symptom is a collapsed “Adjust eligibility” row. The root is **hiding fields that decide loan amount and EMI** (`04`) behind a banker phrase.
- Constraints they implied: show them **here**; show them **directly**; there are **five** of them. Size is acknowledged immediately in `02` and later reversed in `2302` — do not pretend this clip already chose a dropdown.

## Directions they considered
- One direction: flatten the extra block onto Loan inputs instead of “adjusting” anything.
- Lean: this is a product call continuing 2240’s “additional columns,” not a taste nit. They open the accordion to count the rows.
- They do **not** rename the summary in this span. They do **not** delete See options.

## Company / user / future thinking
- User: arrives to compare banks. Extra facts (EMI, cards, FOIR, tenure, co-applicant) are how the offer is made — they should not have to discover a chevron named eligibility.
- Company: Shroffin is a home-loan **comparison**, not a bank. The opinionated stand in this take is: those columns are part of the tool, not an advanced drawer. `03` adds that the customer is not even asking “for the bank” first.
- Future: ~11 min later they keep the fields but put them back in a **drop down** so the card is not too tall (`2302` `01`), with the rule that collapsed fields still change offers (`2302` `02`). Record both takes; do not silently cancel this one.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` extra-fields block. Recording used `details#hlc-form-more` / summary **Adjust eligibility**. Live page is `div#hlc-form-more` / `#hlc-form-more-panel` with `#hlc-existing-emis`, `#hlc-card-limits`, `#hlc-foir`, `#hlc-tenure`, `#hlc-coapplicant`.
- Acceptance criteria in their words: “instead of Adjust eligibility, we need to show the columns here. Directly.” Five extra columns.
- What NOT to do: do not treat 2302’s dropdown as if this clip never happened. Do not “fix” by deleting the five fields. Do not treat leftover ₹6,000 / ₹555 as this issue. Do not count Overview table columns as the “4 / 5” they meant.
- Open questions: always-visible five rows vs a compact row that still shows the columns without the eligibility name (2240: additional columns / attributes / parameters, simple English). How See options sits once the extras are not a side-by-side header (`2240` `11`).
- Related recordings:
  - continues_from: `wb-rec-260815-2240` `09`–`11` (bad phrase; additional columns; See options below, centered)
  - continues_in: `02` in this folder (size vs banks/intelligence); `wb-rec-260815-2302` `01`–`02` (dropdown size compromise; extras still affect)

## Evidence index
- `audio.vtt` 00:01.210–00:19.430
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span (**availability** ~0.08; **5** ~0.16)
- `events.json`: See options t=1995 (`0001.jpg`); accordion t=6728 (`0002.jpg` closed), t=15088 (`0003.jpg` open)
- `pages.json` / `RECAP.md`: Explore banks, Loan inputs, Existing EMIs / FOIR / Tenure / Co-applicant
- `screenshots/index.json` + `0000.jpg`–`0003.jpg`
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- `replay.spec.ts`: `#hlc-see-options` then `details#hlc-form-more > summary` clicks
- Site `pages/explore-banks.html`: `#hlc-form-more` (live markup may no longer be `<details>`)
