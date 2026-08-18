# Tell how important each column is — stars, a red/orange/green meter, or a 10/10 score

After calling the open form a perfect table, they want **an indication of how important this column is to my loan application.** They list three encodings and do not pick one: **stars**; a **meter** (red, orange, green — “it has become very red”); or a **score** (10 on 10, 8 on 10). The invariant: somewhere, tell me how important this column is.

## Classification
- kind: product-thinking | visual-system brainstorm (not a shipped control)
- status: open
- surface: Loan inputs fields as **columns** (they point at the card). No stars, meters, or scores exist on the page in this recording.
- viewport: 1366×768 @2x
- speakers: Speaker A lists the systems. “Okay, now how can you do that?” may be Speaker B prompting. ASR is not diarized.

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
- console: empty (`console.json` is `[]`)
- tabs: 1
- ASR: `audio.json` language tag `mr`; not diarized
- previous: this folder `01` (“perfect table” / prefill)
- next: this folder `03` (6+4); session continues in `wb-rec-260815-2313` (same importance job as up-down vs left-right + colors)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Still on the Loan inputs card with Adjust eligibility **open** (`0005.jpg`–`0009.jpg`). Every label has a grey **i**. **No** stars, meters, traffic-light bars, or 10/10 scores exist on the form or the bank grid — the three systems are **speech only**.
- Click: **00:37.351** `#hlc-monthly-income` (`0005.jpg`) during this talk — they use income as the first “column,” they do not type. Occupation still **Self-employed**, Purpose still **Regular** (Salaried / Top-up clicks are `03`).
- Screenshots: `0005.jpg`–`0009.jpg` (t=37752–70200) — same filled card; black mask rects on the extra row. Overview table not in these stills.

## What they said (RAW + corrected, both speakers)

**00:32.050–00:42.550** Speaker A (the requirement):
> Raw ASR: “And somewhere, I need an indication that how important is this column to my loan application.”
> Corrected: “And somewhere, I need an indication of **how important this column is to my loan application**.”
> **indication** p≈0.98, **column** p≈0.98. “Column” = a form field (they have been calling extra fields columns since `2249`), not necessarily a bank-table header.

**00:43.390–00:47.230** prompt + first system:
> Raw ASR: “Okay, now how can you do that? Maybe you can give it stars.”
> Corrected: same. **Okay,** p≈0.15 — may be Speaker B prompting. First visual: **stars.** p≈0.79.

**00:48.790–00:55.370** Speaker A (second system):
> Raw ASR: “Okay, or you can give it a meter. Red, orange, green, something like that. It has become very red.”
> Corrected: same. Second visual: a **meter.** p≈0.90. Colors: **Red,** p≈0.71, **orange,** p≈0.77, **green,** p≈0.97. Worked example: “it has become **very red**” (**red.** p≈0.98). They do not say whether red is good or bad; do not invent traffic-light polarity beyond the words.

**00:56.470–01:01.730** Speaker A (third system):
> Raw ASR: “Okay, or you can give it a score. 10 on 10, 8 on 10, something like that.”
> Corrected: same. Third visual: a **score.** p≈0.998. Examples: **10 on 10**, **8 on 10**.

**01:02.650–01:05.690** Speaker A (the invariant):
> Raw ASR / corrected: “But somewhere, tell me how important this column is.”

They do not compare stars vs meter vs score (no “stars are childish,” no colorblind note, no pick). `03` reuses “10 on 10 is the consequence” while counting columns — still not a decision. `07` later adds a **fourth** system (small card / red / big type). `2313` turns importance into axes + colors.

## First-principles problem
- What must be true: the visitor can tell **which inputs move the loan a lot** and which barely move it, without reading every tooltip first.
- Root vs symptom: empty **i** icons and a collapsed extra row are the symptom. Root: all columns look equal, so Existing EMIs / FOIR feel optional until they surprise you (`01`).
- Constraints: they want a mark **on the column**, not a lecture. They listed three encodings and left them open.

## Directions they considered
1. Stars on the column.
2. Meter, colored red / orange / green; example “very red.”
3. Numeric score: 10/10, 8/10.
- Invariant: “somewhere, tell me how important this column is.”
- Lean: capture the brainstorm; do **not** ship one encoding from this clip. `07` and `2313` add more encodings.

## Company / user / future
- User: filling a 10-field form is fine **if** they can see which columns are 10/10 vs “less consequential” (`03`).
- Company: this is teaching, not ranking banks. Importance is “to **my loan application**,” not a Shroffin best-buy badge.
- Future: `2313` maps **up-down** = outcome importance (how much money / rate / tenure) and **left-right** = column importance, using **colors**. Keep stars / meter / score as the menu they named **here**.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: per-field chrome on `form#hlc-inputs` (labels / `.hlc-field-help` / a new mark next to each column). Not the Overview tab chrome unless they later point at Rate / Amount / Tenure (`10`–`11`).
- Acceptance criteria in their words: an indication of how important this column is to my loan application; stars **or** meter (red, orange, green; “very red”) **or** score (10 on 10, 8 on 10); “somewhere, tell me.”
- What NOT to do: do not pick a winner in this file. Do not put stars on bank **rows** (they said **column**). Do not treat the recorder’s black mask bars as UI. Do not invent a fourth color.
- Open questions: is red “this matters a lot” or “this is dangerous”? They only said “very red.” Does every field get a mark, or only the extra four (`03`)?
- Related recordings:
  - continues_from: `wb-rec-260815-2302` (FOIR / existing EMI / surprise); this folder `01`
  - continues_in: `03` (6+4; “10 on 10 is the consequence”); `07` (card size/color/type — a **fourth** encoding); `wb-rec-260815-2313`

## Evidence index
- `audio.vtt` / `audio.text` / `audio_sentences.txt` 00:32.050–01:05.690
- `audio.json`: **stars.** p≈0.79; **meter.** p≈0.90; **score.** p≈0.998; red/orange/green as above
- `events.json`: idle after income click; no new control
- `screenshots/0005.jpg`–`0009.jpg` — no stars / meter / score on screen
- Site: `form#hlc-inputs` fields; nothing implements this yet
