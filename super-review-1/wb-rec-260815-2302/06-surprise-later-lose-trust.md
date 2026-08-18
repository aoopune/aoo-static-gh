# If they get a surprise later, they lose trust in the website

After they name FOIR (`05`) they say why it matters on this page: if they get a **surprise later**, they will **lose trust from the website**.
The other founder repeats **lose your trust**.
Speaker A: “Yes, but I have to think about something.”
Next clip (`2304`) opens with the same fear — they do not want that surprise — and chooses a **pre-fill**.

## Classification
- kind: issue | product + trust
- status: open
- surface: explore-banks / Loan inputs extras still open; Bank options EMI column is the number that would “surprise” if extras were ignored. They do not click the table. Existing EMIs still focused (`0009.jpg` / `0010.jpg`).
- viewport: 1366x768 @2x
- speakers: Speaker A: surprise later → lose trust from the website. Speaker B: “But you will lose your trust.” Speaker A: “Yes, but I have to think about something.” ASR not diarized.

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
- previous: `05` (FOIR / utilization); `wb-rec-260815-2249` `04` (if they don’t fill they can’t go)
- next: `07` (this is all mandatory); `wb-rec-260815-2304` first line: “No, because I don't want to get a surprise later.”

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Extra block open; Existing EMIs ₹555 focused (`0009.jpg` t=60202, `0010.jpg` t=68203). FOIR 55% and card 10% load still visible. Table not in the shot while they say “EMI.”
- When the accordion is closed (`01`’s `0001.jpg`) the Overview table shows EMI **₹48** from the leftover ₹6,000 property — they do **not** point at that leftover EMI as the bug. The **trust** claim is about a later real-bank surprise if extras were missing or wrong.

## What they said (faithful, complete)

**00:57.780–00:58.940** Speaker A:
> Raw ASR: “That's why your EMI is not fixed.”
> Corrected: **do not trust the word “fixed.”** Token **fixed** ≈ **0.001** (noise). **That's** ~0.10, **your** ~0.26. Possible echoes: FOIR’s “fixed obligation,” or “EMI is not [right / final / the real one].” Keep the raw line; do not claim they said EMI is “unfixed” as a product term.
> Meaning from the **next** sentence, which is strong: the EMI/offer on the site must not become a **surprise later**.

**00:59.020–01:03.480** Speaker A:
> Raw ASR / corrected: “That means if I get a **surprise later**, I will **lose my trust from the website**.”
> **surprise** ~0.95, **trust** ~0.96, **website** ~0.95. **from** ~0.18. This is the acceptance line.

**01:04.260–01:05.380** Speaker B:
> Raw ASR: “But you will lose your trust.”
> Corrected: same idea restated (you / the customer will lose trust). **trust** ~0.16 on this take — still clearly answering A.

**01:05.660–01:07.580** Speaker A:
> Raw ASR / corrected: “Yes, but I have to think about something.”
> They do not name the “something” before a ~4 s pause. `07` is what they do next (mandatory / accordion). 2304 continues the surprise thread with **pre-fill**.

## First-principles problem
- What must be true: the EMI and loan amount on Explore banks must match what a bank will actually use **after** existing EMI, card load, and FOIR. A pretty table that ignores those is a **lie they will discover later**.
- Root vs symptom: “lose trust” is the outcome. The root is extras dropped, defaulted to zero, or left optional while still treated as complete (`02`, 2249 `04`).
- Constraints they implied: no surprise later; trust in **the website** (Shroffin), not only in a bank.

## Directions they considered
- Name the failure: surprise later → lose trust.
- B agrees it is a trust loss.
- A still has to **think** (size vs mandatory vs what to collect) — not a finished UI spec.
- 2304’s direction (pre-fill, importance) is **not** decided in this clip.

## Company / user / future thinking
- User: uses this site to decide. If the bank later cuts the loan because of EMIs/FOIR that were never in the picture, they blame **the website**.
- Company: independent comparison earns trust by being **complete enough** that the table survives contact with a bank. Dropdown for size (`01`) is allowed only if the math still includes extras (`02`).
- Future: 2304 — pre-fill so they are not surprised, and show how important each column is. Do not “fix” trust with a disclaimer instead of the numbers.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: eligibility + EMI display in the Bank options table; extra-field defaults; any path that submits `#hlc-see-options` without extras.
- Acceptance criteria in their words: “if I get a surprise later, I will lose my trust from the website.” B: “you will lose your trust.”
- What NOT to do: do not treat “EMI is not fixed” as a request to unlock the Tenure/EMI cells. Do not paper over missing extras with “indicative only” copy as the whole fix. Do not ignore 2249’s bind (optional but can’t go).
- Open questions: what “surprise later” is in product terms (bank login, sanction, or the next screen on this site). Pre-fill vs mandatory is split across `07` and 2304.
- Related recordings:
  - continues_from: `05`; `wb-rec-260815-2249` `04`
  - continues_in: `07`; **`wb-rec-260815-2304`** (“I don't want to get a surprise later” → pre-fill / stars)

## Evidence index
- `audio.vtt` 00:57.780–01:07.580
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (fixed ≈0.001; surprise/trust/website strong)
- `events.json`: idle; last interaction still Existing EMIs
- `screenshots/0009.jpg`–`0010.jpg`
- `wb-rec-260815-2304` `audio.vtt` 00:03.380 “No, because I don't want to get a surprise later.”
