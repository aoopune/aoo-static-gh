# Sit on this form and keep a prefill — they do not want a surprise later

The last clip ended with lost trust if an EMI shows up later. This take opens on the same fear: **no, because I don’t want a surprise later.** They decide to **sit here only** on Loan inputs / Adjust eligibility and **keep a prefill** for the obligation fields. They call the open card a **perfect table**. They do not type a new number in this beat.

## Classification
- kind: issue | product + trust (stay on form; prefill obligations)
- status: open
- surface: `pages/explore-banks.html` / `form#hlc-inputs` / `details#hlc-form-more` already **open** from `2302` — `#hlc-existing-emis` ₹555, `#hlc-foir` 55% (default), Co-applicant **No**
- viewport: 1366×768 @2x
- speakers: Speaker A answers `2302`. Short **Okay** (p≈0.14) may be Speaker B. ASR is not diarized; `audio.json` language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2304`
- recording id: `6033ef99-94cd-427e-b722-e831e6342b86`
- clip: 21 of 30
- started_at: 2026-08-15T17:34:55.529Z
- ended_at: 2026-08-15T17:43:48.848Z
- duration_ms: 533319 (~8 min 53 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 73 (`0000.jpg`–`0072.jpg`)
- event count: 129
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2302` — FOIR / existing EMI; “if I get a surprise later, I will lose my trust”; last beat clicked Co-applicant **No**
- next: this folder `02` (stars / meter / score); session continues in `wb-rec-260815-2313`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` — title “Explore banks – Shroffin”
- Adjust eligibility is **already expanded**. Visible leftover test values: Monthly income **₹1,00,000**; Property agreement value **₹6,000**; Age **35**; CIBIL **780**; Occupation **Self-employed**; Purpose **Regular**; Existing EMIs **₹555**; Credit card limits **₹0** (“About 10% counts as monthly load”); FOIR **55% (default)**; Tenure **20 years**; Co-applicant **No**. Blue-outline **See options** sits to the right of the extra header.
- Under the card at start (`0000.jpg`): Overview selected; **Canara Bank** 8.80% / ₹5,400 / 20 yrs / EMI ₹48. Black mask rects on the extra row are recorder redaction, not UI.
- Click / focus:
  - **00:01.558** focus Co-applicant **No**
  - **00:03.176** scroll `y=168.5` — they sit on the extra block; the bank table drops out of later stills
  - **00:37.351** click `#hlc-monthly-income` (`0005.jpg`) — no typing; this click already overlaps the importance talk in `02`
- Screenshots: `0000.jpg` (t=199, table still in view) then `0001.jpg`–`0004.jpg` (t=8199–34199) — form-only still while they say sit here / prefill / perfect table. No stars, meters, or scores on screen.

## What they said (RAW + corrected, both speakers)

Silent inspect **00:00–00:03.380**: focus Co-applicant No, then scroll onto the extra row. No VTT yet.

**00:03.380–00:06.560** Speaker A (direct answer to `2302`):
> Raw ASR: “No, because I don't want to get a surprise later.”
> Corrected: same. **No** = do not drop or hide the obligation fields. **surprise** p≈0.97, **later.** p≈0.70. Same trust sentence as `2302` `06`.

**00:07.780–00:12.900** Speaker A (possible **Okay** from B):
> Raw ASR: “Okay, I will come. I will sit in a place. I will sit here only. I have to keep a pre-field for that.”
> Corrected: “Okay, I will come. I will sit in a place. I will **sit here only**. I have to keep a **prefill** for that.”
> **Okay,** p≈0.14 — may be B. **pre** p≈0.86, **-field** p≈0.54 → **prefill**. “Here” = this Loan inputs / Adjust eligibility block (they just scrolled onto it). Stay on the form; do not send FOIR elsewhere.

**00:13.440–00:29.290** Speaker A:
> Raw ASR: “And somewhere... actually this is a perfect table. I have to keep a pre-field.”
> Corrected: “And somewhere… actually this is a **perfect table**. I have to keep a **prefill**.”
> Long pause inside the first cue (~00:13–00:26). **perfect** p≈0.97, **table.** p≈0.99. Repeat **pre-field.** p≈0.96. Said while the **form** is fully open (six primary + extra row), not while clicking the bank grid. Indication-of-importance starts in `02`.

They do not type a new EMI. They do not close Adjust eligibility in this span.

## First-principles problem
- What must be true: if existing EMIs / FOIR change the loan the table shows, that number has to sit on **this** card, already filled, before the visitor treats the rows as the answer.
- Root vs symptom: “surprise later” is the trust symptom. Root: the obligation lives in a second step (or another site) after the first picture has already been believed.
- Constraints they named: sit here; keep a prefill. How to *mark* that a column matters is `02`, not this file.

## Directions they considered
- Reject hiding / deferring the field (the opening **No**).
- Sit on this form only; keep a prefill.
- Treat the open card as a “perfect table” worth staying on.
- Lean: continuation of `2302`’s trust rule, not a new layout.

## Company / user / future
- User: will lose trust if the site later reveals that existing EMIs / FOIR cut the loan. They would rather see a filled field now.
- Company: Shroffin is a comparison picture, not a bank. A prefill that tells the truth of obligations is how the picture stays honest.
- Future: `02`–`04` add importance marks, 6+4 columns, and tooltip rupees on top of this sit-here rule. `2240` `05` already warned that a prefill can also become a fake-income demo — do not collapse those two jobs.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-existing-emis`, `#hlc-foir`, `details#hlc-form-more` (open vs collapsed), default values on those inputs.
- Acceptance criteria in their words: “I don’t want to get a surprise later”; “I will sit here only”; “I have to keep a prefill for that”; “this is a perfect table.”
- What NOT to do: do not send FOIR off-site (`04` says they would otherwise “go somewhere and get my FOIR”). Do not treat leftover ₹6,000 property as this issue. Do not decide stars/meter/score here (`02`).
- Open questions: whether Adjust eligibility stays a disclosure or the extra fields stay **open** as they are in this still (`2249` wanted them shown directly; `2302` said drop down so the form doesn’t get too big).
- Related recordings:
  - continues_from: `wb-rec-260815-2302` (`06` surprise later loses trust; `04` existing EMI is a big thing; `07` “this is all mandatory”; `09` clicked Co-applicant No)
  - continues_in: this folder `02` then `03`. Session continues_in: `wb-rec-260815-2313`. Cross: `wb-rec-260815-2240/05` (prefill as demo), `wb-rec-260815-2249/01` (show extra columns)

## Evidence index
- `audio.vtt` / `audio.txt` / `audio.text` / `audio.tsv` / `audio.lrc` / `audio.srt` / `audio_sentences.txt` 00:03.380–00:29.290
- `audio.json` language `mr`; **pre-field** tokens as above
- `events.json`: focus Co-applicant No t=1558; scroll y=168.5 t=3176; click `#hlc-monthly-income` t=37351
- `screenshots/index.json` + `screenshots/0000.jpg`–`0005.jpg` (`0000` table still in view; `0001` form after scroll)
- `manifest.json` viewport 1366×768 dsf 2, duration_ms 533319
- `console.json` `[]`; `tabs.json` 1 tab
- Site: `#hlc-existing-emis`, `#hlc-foir`, `#hlc-form-more`
