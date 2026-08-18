# “Adjust eligibility” is not a good phrase — Super-English, something simpler

They scroll back to the bottom of the Loan inputs card and name the extra-fields control: **Adjust eligibility** is not a good word. They reach for “fine-tune,” then lock it to their **Super-English** rule (simple English). They do not pick the final label until `11` (additional columns / attributes / parameters).

## Classification
- kind: issue | copy
- status: open
- surface: explore-banks / recorded `details#hlc-form-more` summary **“Adjust eligibility”**. Helper line under it: “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant.” Live HTML may no longer show that summary (`#hlc-form-more` is now a panel, not a labelled accordion); the recorded control is what they judged.
- viewport: 1366x768 @2x
- speakers: Speaker A: eligibility is not a good word. Speaker B: “Super-English, yes.” ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2240`
- recording id: `a82e9a9f-c11f-4376-881d-25a436d5e6f5`
- clip: 18 of 30
- started_at: 2026-08-15T17:10:04.687Z
- ended_at: 2026-08-15T17:19:10.273Z
- duration_ms: 545586 (~9 min 6 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 67
- event count: 127
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2231`
- next: `wb-rec-260815-2249`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Control: left side of the card footer, chevron + **Adjust eligibility** + grey list of extra fields. **See options** sits to the right (`#hlc-see-options`).
- Scroll: **06:05.383** y=97 — “Coming down” onto this footer (`0042.jpg`).
- Click: none yet. First click on this summary is **06:30.395** (`10`).
- Screenshots: `0042.jpg` (t=372206) — collapsed Adjust eligibility + See options, right before they say “C option.”

## What they said (faithful, complete)

**06:03.620–06:08.440** Speaker A:
> Raw ASR: “Okay. Coming down. And just eligibility is not a good word.”
> Corrected: “Okay. Coming down. And **Adjust eligibility** is not a good word.”
> ASR: **just eligibility ≈ Adjust eligibility** (the label on screen; they just scrolled to it). “Coming down” = they scrolled to that control (y=97). “Eligibility” is the word they reject; they are looking at the whole phrase.

**06:12.740–06:15.840** both:
> Raw ASR: “Fine-tune... Super-English rule. Super-English, yes.”
> Corrected: same. **Fine-tune** is a candidate they float, not a decision. **Super-English** = their internal rule to use very simple English (they say “something in very simple English” again in `11`). Speaker B confirms the rule applies here.

They do not mention FOIR, tenure, or co-applicant copy in this span — only the **name of the opener**. Next word in the same breath is “C option” (`10`) as they click See options.

## First-principles problem
- What must be true: the control that reveals extra loan fields must be named in everyday words. “Eligibility” is banker-speak; it fails Super-English.
- Root vs symptom: the chevron/dropdown can stay (`10` debates whether it is a dropdown). The root in this file is **the words** “Adjust eligibility.”
- Constraints they implied: Super-English; a simpler verb than “eligibility” (fine-tune is an example, not the winner).

## Directions they considered
- Reject “Adjust eligibility.”
- Float “fine-tune.”
- Apply Super-English.
- Final name list is in `11` (additional columns / attributes / parameters). Do not treat fine-tune as chosen.

## Company / user / future thinking
- User: should not need to know the word eligibility to open Existing EMIs / tenure / co-applicant.
- Company: Super-English is a standing copy rule (they treat it as already known). This is opinionated language (`01`), not a customer-voted label (`03`).
- Future: `11` + `wb-rec-260815-2249` push the control toward **columns / extra parameters** you may fill — not “adjusting eligibility.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: the more-fields toggle label on Explore banks (`#hlc-form-more`; recorded as `details#hlc-form-more > summary`). Do not retitle the legal disclaimer “eligibility criteria.”
- Acceptance criteria in their words: Adjust eligibility is not a good word; Super-English; later `11`: additional columns / attributes / parameters, “but something in very simple English.”
- What NOT to do: do not ship “fine-tune” as final (only a sketch). Do not mix this with See options wording (`10`). Do not assume current HTML still shows the string “Adjust eligibility” — check the recorded UI (`0000.jpg` / `0042.jpg`).
- Open questions: exact Super-English winner — `11` lists three phrases and still says “something in very simple English.”
- Related recordings:
  - continues_from: this clip `08` (they finish API and come down the page).
  - continues_in: this clip `10`–`11`; `wb-rec-260815-2249` (“instead of adjusting the availability, show the columns”).

## Evidence index
- `audio.vtt` 06:03.620–06:15.840
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (just eligibility, Super-English)
- `events.json`: scroll y=97 t=365383
- `screenshots/0042.jpg`
- `replay.spec.ts`: later `details#hlc-form-more > summary`
- Recorded UI: summary “Adjust eligibility”; live site: `#hlc-form-more` / `#hlc-see-options` (submit label may now read **Compare banks**)
