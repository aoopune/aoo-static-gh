# Put “See options” below Adjust eligibility, in the center — and rename Adjust eligibility in simple English

They want the footer rebuilt: **See options** should be a button **below** Adjust eligibility, **centered**. After you open extra fields you should not have to travel sideways to the submit. Adjust eligibility should become something else — they list **additional columns**, **additional attributes**, **additional parameters** — “but something in very simple English.” Clip ends mid-sentence (“In the same…”). 2249 continues: show **columns** instead of “adjusting availability.”

## Classification
- kind: issue | layout + copy
- status: open
- surface: explore-banks / card footer: `details#hlc-form-more` summary **Adjust eligibility** (left) + `#hlc-see-options` **See options** (right). When open (`0047.jpg`, `0060.jpg`), See options stays **beside** the summary, not under the extra fields.
- viewport: 1366x768 @2x
- speakers: Speaker A states the layout and name list. ASR is not diarized. Speaker B not clearly separated on this block.

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
- next: `wb-rec-260815-2249` (~7 s later) — “instead of adjusting the availability, we need to show the columns here. Directly.” Existing EMIs is still **555** on that take.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Recorded layout: one row — Adjust eligibility (chevron + helper list) | See options (pill, right). Open state: extra fields fill the card; See options remains **right of the summary**.
- Click/focus:
  - **08:11.770** click summary **svg** (`0060.jpg`) — open Adjust eligibility again (Existing EMIs still **₹0**).
  - **08:13.381** scroll y=134.5.
  - **08:18.461** click `#hlc-existing-emis` (`0061.jpg`, blue underline on ₹0).
  - **08:19.953** fill `"0"`; **08:20.519** Backspace; **08:20.771** `""`; **08:21.642** fill `"555"`; **08:28.103** final `"555"`; **08:28.104** click summary span.
  - `0062.jpg` (t=508205, ~100 ms after that click) still shows the extra block with Existing EMIs **₹555**, Credit card limits ₹0, FOIR 55% (default), Tenure 20 years; See options still on the **right**. They typed 555 while saying the button should sit with Adjust eligibility — they are **in** the extra-fields panel, reaching for See options.
- Screenshots: `0060.jpg`–`0061.jpg` open panel + See options on the right; `0062.jpg` 555 visible; `0063.jpg`–`0066.jpg` rest of the take. Clip audio cuts at **09:04.880**.

## What they said (faithful, complete)

**08:02.280–08:16.100** Speaker A:
> Raw ASR: “Just C options. Just move it. C options should be below this adjust eligibility. Anyway, when you adjust eligibility... there should be a button here.”
> Corrected: “Just **See options**. Just move it. See options should be **below** this Adjust eligibility. Anyway, when you adjust eligibility… there should be a button here.”
> `C` at 08:05.86 is ~0.01 — the on-screen button and the earlier “C option = See options” mapping still hold.

**08:17.300–08:35.580** (while focusing Existing EMIs / typing 555):
> Raw ASR: “If I adjust eligibility over here... then I have to go to this button... to see... It should not come below this. This button... Additional parameters.”
> Corrected: “If I adjust eligibility over here, then I have to go to this button to see [results].” The sideways See options is the travel they dislike. **“It should not come below this”** is ambiguous (the extra fields vs the button; `It` ~0.06). Do not pick. They then name **Additional parameters** as a label sketch.

**08:37.540–08:50.520**:
> Raw ASR: “Adjust eligibility... should become something else. Like... Additional columns. Additional attributes. Additional parameters. But something in very simple English.”
> Corrected: same. Three candidates, **none chosen**. Super-English (`09`) still binds: simple English beats any of the three if they sound like jargon. **Columns** is the word 2249 will pick up.

**08:53.360–09:04.880**:
> Raw ASR: “And this C options... should be a button... that is below this adjust eligibility. And in center. And in center. In the same...”
> Corrected: “And this **See options** should be a button that is **below** this Adjust eligibility. And **in [the] center**. And in center. In the same…”
> Repeated: **below** + **centered**. Sentence cuts off with the recording.

They do not ask to remove extra fields. They do not decide See options vs Submit vs See banks again (`10` already rejected See options as a *name*). This file is **placement** plus **renaming Adjust eligibility**.

## First-principles problem
- What must be true: extra fields and the action that **uses** those fields must sit in one vertical story: open extras → (optionally fill) → the compare/submit control **under that**, in the middle — not a second control off to the right.
- Root vs symptom: “I have to go to this button” is the symptom of a **split footer** (disclosure left, submit right). Root: two jobs (`10`) laid out as one row.
- Constraints they implied: See options stays a **button**; it moves below; it is centered; Adjust eligibility is renamed in Super-English; columns/attributes/parameters are sketches.

## Directions they considered
- Move See options below Adjust eligibility.
- Center it.
- Put a button “here” when you adjust eligibility (with the extras).
- Rename Adjust eligibility → additional columns / attributes / parameters / simpler English.
- Lean: layout instruction is repeated twice; name is not final.
- Ambiguous line: “It should not come below this” — do not treat as a veto of “below”; they immediately and repeatedly say See options **should** be below Adjust eligibility.

## Company / user / future thinking
- User: if they opened extra fields to change EMIs (they typed 555), the next thing they want is **see the banks**, not a hunt to the right-hand pill.
- Company: Super-English name for extras + honest submit (`10`). Opinionated layout (`01`): they choose this stack instead of the current split row.
- Future: `wb-rec-260815-2249` — “instead of adjusting the availability, we need to show the **columns** here. Directly.” That is the continuation of **additional columns**, plus which fields are mandatory.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-form-actions` / `#hlc-form-more` / `.hlc-form-submit` / `#hlc-see-options` in `pages/explore-banks.html`. Recorded DOM: `details#hlc-form-more > summary` beside the submit.
- Acceptance criteria in their words: See options should be below Adjust eligibility and in the center; when you adjust eligibility there should be a button here; Adjust eligibility should become something else (additional columns / attributes / parameters) in very simple English.
- What NOT to do: do not leave See options on the right of the open panel. Do not pick “additional attributes” as final. Do not drop Super-English. Do not treat 2249’s mandatory-field talk as already decided here.
- Open questions: final extra-fields label. Final submit label (`10`). What “In the same…” was going to finish.
- Related recordings:
  - continues_from: this clip `09` (eligibility is a bad word) and `10` (See options is the wrong name / it is a form submit).
  - continues_in: `wb-rec-260815-2249` — columns vs “adjusting availability”; optional vs mandatory fields (Existing EMI, card limits, FOIR, tenure, co-applicant). Existing EMIs leftover **555**.

## Evidence index
- `audio.vtt` 08:02.280–09:04.880 (clip ends)
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (C options, additional columns/attributes/parameters)
- `wb-rec-260815-2249/audio.vtt` 00:01.210–00:16.510 (columns directly; 4 then 5)
- `events.json`: summary svg click t=491770; `#hlc-existing-emis` fill `0` → `""` → `555` t=499953–508103; summary click t=508104; scroll y=134.5 t=493381
- `screenshots/0060.jpg`–`0066.jpg` (`0062.jpg` shows ₹555)
- `replay.spec.ts`: `#hlc-existing-emis` fill `555`; form-more summary clicks
- Site `pages/explore-banks.html`: `#hlc-form-more`, `#hlc-see-options`, `#hlc-existing-emis`
