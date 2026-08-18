# Flattening the extras is a big challenge — the card still has to show banks and intelligence

They have just opened the five extra rows (`01`). Next: it will be a **big challenge**. They point at the tall card — **see how big it has become** — then lock the non-negotiable: they still have to **show the banks**, and **banks and intelligence**. ASR also says “culture”; treat that as the same stand, not a new widget.

## Classification
- kind: issue | product + layout
- status: open
- surface: explore-banks / Loan inputs card with `details#hlc-form-more` **open** (five extra rows) sitting above Bank options. The table is the “banks”; the form + comparison is the “intelligence.”
- viewport: 1366x768 @2x
- speakers: Speaker A. Speaker B not a separate turn. ASR not diarized; language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2249`
- recording id: `55f40b18-3bf3-46a3-b169-7adabe6886b1`
- clip: 19 of 30
- started_at: 2026-08-15T17:19:17.338Z
- ended_at: 2026-08-15T17:21:34.102Z
- duration_ms: 136764 (~2 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 20 (JPEG; `0000.jpg`–`0019.jpg`)
- event count: 43
- console: empty
- tabs: 1
- previous: `01` in this folder (show columns directly)
- next: `03` in this folder (customer does not ask for the bank); `wb-rec-260815-2302` `01` (dropdown so the form does not get too big)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- They are looking at the **open** extra block they just expanded (`0003.jpg` t=15490, then idle `0004.jpg` t=24186 / `0005.jpg` t=32186). Same five rows as `01`. See options still sits to the **right** of the Adjust eligibility header — so the card is tall and the table is pushed off.
- No click in this speech span. Next click is See options at **00:35.477** (`03`).
- Screenshots: `0003.jpg`–`0005.jpg` — extra fields filling the viewport; redaction bars over the rate area at the bottom of the card.

## What they said (faithful, complete)

**00:19.930–00:20.990** Speaker A:
> Raw ASR / corrected: “It will be a big challenge.”
> **challenge** ~0.13. Object = showing those five columns **directly** (`01`) without wrecking the page.

**00:21.550–00:23.030** Speaker A:
> Raw ASR: “We have to show the culture.”
> Corrected: keep **culture** as spoken (~0.46). Best reading in this breath: the product’s stand / way of working — not a new UI control named Culture. The next two lines name what that stand is: **banks** and **intelligence**. Do not rewrite this word to “columns” (already said) or “calculator.”

**00:23.330–00:25.990** Speaker A:
> Raw ASR / corrected: “See how big it has become. It has become so big.”
> They are pointing at the open Loan inputs card (`0004.jpg` / `0005.jpg`). This is the size cost of `01`.

**00:25.990–00:30.310** Speaker A:
> Raw ASR: “We have to show the banks. We have to show the banks and intelligence.”
> Corrected: same. **banks** in the second line ~0.015 — still the intended word; they repeat it. **Intelligence** = the comparison / extra facts that make the table more than a rate list (2240/2231 already use this word for the product’s brain).

Speaker B: silent here. Example: the oversized open accordion vs the Bank options table they flashed at `0001.jpg`. Pros: extras visible; banks + intelligence still the job. Cons: the card eats the viewport — `2302` will pick a dropdown for that.

## First-principles problem
- What must be true: Explore banks is one page that must still **show banks** and still **show intelligence**. Flattening extras cannot be allowed to replace that job with a homework form.
- Root vs symptom: the symptom is a tall card. The root is a **collision of two duties**: extras on the card (`01`) and banks/intelligence still on screen.
- Constraints they implied: size is a real challenge; they do **not** drop banks or intelligence to win size. `2302` later solves size with collapse, not by deleting fields.

## Directions they considered
- Acknowledge the size problem (“so big”).
- Keep showing banks and intelligence anyway.
- Lean: a hard product constraint, not a visual nit. They do not sketch a new layout in this span (no tabs, no second card, no “drop down” yet).

## Company / user / future thinking
- User: came to see **bank options**. If the form covers the table, the page has failed even if every extra field is honest.
- Company: Shroffin’s culture in their mouth is comparison with a brain — banks **and** intelligence — not a long eligibility form that pretends to be the product.
- Future: `2302` `01` is the size compromise (drop down). `2302` `02` is the intelligence compromise (collapsed extras must still affect offers). This clip is why both of those sentences exist.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-inputs` + `#hlc-form-more` height vs Bank options region. Do not “fix” by deleting the table or the extras.
- Acceptance criteria in their words: it is a big challenge; “see how big it has become”; “we have to show the banks and intelligence.”
- What NOT to do: do not shrink the card by removing Existing EMIs / cards / FOIR / tenure / co-applicant. Do not hide Bank options to make the form pretty. Do not treat ASR “culture” as a feature name.
- Open questions: how to show five extra columns **and** the table in 1366×768 without the later dropdown — unanswered here.
- Related recordings:
  - continues_from: `01` (show directly)
  - continues_in: `03`; `wb-rec-260815-2302` `01` (dropdown for size)

## Evidence index
- `audio.vtt` 00:19.930–00:30.310
- `audio.json`: **challenge** ~0.13; **culture** ~0.46; second **banks** ~0.015; **intelligence** ~0.49
- `events.json`: idle only in this span (after accordion open t=15088)
- `screenshots/0003.jpg`–`0005.jpg`
- `pages.json` / `RECAP.md`: Loan inputs + Bank options
- `manifest.json` viewport 1366×768 @2x; `console.json` `[]`
- Site: `#hlc-form-more-panel` vs bank table below the card
