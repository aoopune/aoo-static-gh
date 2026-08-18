# Do not replace CIBIL with average / high / 700+ excellent

After parking 10-point pieces (“let’s see the second one”), they name the substitute they **do not** want. People already carry coarse labels in their head: **average, high,** and **700 plus is excellent**. Those are already there. They are not the control.

## Classification
- kind: discussion | product / CIBIL input (rejected substitute)
- status: open (explicit reject of this path; exact vs window still unresolved)
- surface: Explore banks / `#hlc-cibil` still a required exact integer **780** — no average/high chips on screen
- viewport: 1366x768 @2x
- speakers: Speaker A states they don’t want average. Speaker B (or A continuing) names the labels already in the customer’s mind. ASR unlabeled.

## Session metadata
- folder: `wb-rec-260815-2125`
- recording id: `ba64f48a-197b-40a6-883c-3d23b6cf8313`
- started_at: 2026-08-15T15:55:21.859Z
- ended_at: 2026-08-15T16:04:20.986Z
- duration_ms: 539127 (~8 min 59 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 70
- event count: 94
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2116` (~11 s earlier) — not this topic
- next: `wb-rec-260815-2134` — CIBIL continues; they still do not revive average/high chips
- ASR: no Sibyl in this span

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Same Loan inputs card. CIBIL still **780**, no chips, no “excellent” copy.
- Click: none in this span (idle after the 00:56 `#hlc-cibil` click).
- Screenshots **01:11–01:24**: `0012.jpg` (t=74196) / `0013.jpg` (t=82196). Same rest UI as `01`.

## What they said (faithful, complete)

**01:11.250–01:24.870** Speaker A, then agreement:
> Raw ASR: “And I don't want to do average. No, the ones that are in their mind. Means... These are there. Average, high. Already, they are there. So, 700 plus is excellent. They are already there. Yes.”
> Corrected: **Do not** use coarse labels people already carry: **average, high,** “**700 plus is excellent.**” Those are already in the customer’s head; they are not the control they want. “Yes” is agreement that those labels already exist out in the world.
> ASR: **average** p≈0.72 / 0.88; **excellent** p≈0.97 — this reject is clear. (A later line at 07:23 “it was average” is a **memory** of a score, p≈0.05 — do not collapse that into this reject; see `08`.)

This is the “second one” they said they would look at after 10-point pieces. They look at it and throw it out.

## First-principles problem
- What must be true: if CIBIL changes the rates banks show, the input cannot be a marketing grade (**average / high / excellent**) that every bureau already taught the customer.
- Root vs symptom: “don’t make me type 780” is the symptom. Replacing the integer with **average/high** would still not map to bank windows (`01`, `03`).
- Constraint: this path is **unwanted**, not deferred.

## Directions they considered
- Coarse **average / high / 700+ excellent** — **explicitly unwanted**.
- Lean: do not ship these chips. The live fight stays exact vs windows (`01`), then 10 vs 5–5 (`03`).

## Company / user / future thinking
- User: already knows “700+ is excellent.” Repeating that on the form teaches nothing and cannot price a row.
- Company: Shroffin’s comparison has to follow **bank bands**, not bureau marketing language.
- Future: 2134 uses remembered **680–700**, not average/high labels. Do not treat 2134’s memory-range as a revival of this reject.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: same `#hlc-cibil` control. Do not add a parallel grade widget.
- Acceptance criteria in their words: “I don’t want to do average”; “Average, high. Already, they are there”; “700 plus is excellent” is already in their mind — not the input.
- What NOT to do: do not ship average / high / excellent chips. Do not “fix” exact-vs-window by coarsening the label.
- Open questions: none on this substitute — it is out. Window size and exact-vs-range remain open elsewhere.
- Related recordings:
  - continues_from: `01` in this folder (“let’s see the second one”)
  - continues_in: `03` (bank windows / 10 vs 5–5). `wb-rec-260815-2134` `03` is remembered **680–700**, not these chips.

## Evidence index
- `audio.vtt` 01:11.250–01:24.870
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (average / high / 700 plus is excellent)
- `events.json`: idle
- `screenshots/0012.jpg`–`0013.jpg`
- Site `#hlc-cibil` — no grade chips
