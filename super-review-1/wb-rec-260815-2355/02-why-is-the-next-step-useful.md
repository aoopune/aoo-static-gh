# After 1-2-3-4-5, why is the next step useful?

They reopen the Loan amount drawer and tap the first five boxes in order. “I followed 1, 2, 3, 4, 5. So I don't know why the next step is useful.” Step 6 (**Lowest of these limits**) sits under a finished income story and is not named as the compare. Last clip already praised 1–5 and asked to color which limit wins — here the new question is **what Step 6 is for**.

## Classification
- kind: issue | calc story / sequencing
- status: open
- surface: Loan amount drawer Step **6. Lowest of these limits** (₹48,00,000 vs ₹68,88,494). They have just clicked steps 1–5 (`div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(1)` … `(5)`).
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2355`
- recording id: `2136e699-2334-4e39-a724-eb3e92e1d3bd`
- clip: 26 of 30
- started_at: 2026-08-15T18:25:24.871Z
- ended_at: 2026-08-15T18:34:41.661Z
- duration_ms: 556790 (~9 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 200
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2341` — min of 2; color which limit wins. This clip asks why the sixth box exists at all.
- next: `wb-rec-260816-0004` after ~5 s

## Where on the page
- Same six-step **Loan amount** drawer as `01`, reopened at **00:39.319** (`0006.jpg`).
- Click order while they count (`0007.jpg`–`0009.jpg`):
  - **00:42.843** step 1 container
  - **00:43.320** step 2 inner
  - **00:43.753** step 3 container (Credit-card load)
  - **00:44.120** step 4 span
  - **00:44.552** step 5 span (7.25% / 240 months / income limit)
- They do **not** click Step 6 in this span. Step 6 is visible at the bottom of `0003.jpg` / `0006.jpg`: two figures above a line, **₹48,00,000** below.
- “Next step” here = the box **after** 1–5, i.e. Step 6 — not Step 3 from `01`.

## What they said (faithful, complete)

**00:40.370–00:45.230** Speaker A, tapping 1 then 2 then 3 then 4 then 5:
> Raw ASR: “Basically, what is happening right now. I followed 1, 2, 3, 4, 5.”
> Corrected: same. **followed** p≈0.26; the clicks match 1–5. They are walking the stack, not skipping to the footer.

**00:46.890–00:51.110** Speaker A:
> Raw ASR: “So I don't know why the next step is useful.”
> Corrected: same. **next** p≈0.12, **step** p≈0.15, **useful** p≈0.65. On screen the only unused numbered box is **6. Lowest of these limits**. Do not read this as “Step 3 isn’t useful” — they already demanded Step 3 once ₹55,000 carries (`01`).

How to calculate 80% / 7.25% starts in `03` at 00:51.

## First-principles problem
- What must be true: after the income math finishes (Step 5 = ₹68.88L), the reader still needs a **reason** to look at one more box.
- Root vs symptom: a sixth heading is the symptom. The root is **not saying that this box is the compare** (min of property ₹48L vs income ₹68L) — the job 2341 tried to color.
- Constraints: keep steps 1–5; explain or restyle Step 6 so it is not “another calculation.”

## Directions they considered
- One direction: make the step after 1–5 **useful** — i.e. obviously the decision, not a seventh sum.
- Lean: sequencing / purpose, not deleting Step 6. They later name it in `06` (“lower of these means you get 48 lakhs”).
- They do **not** pick colors again in this span.

## Company / user / future thinking
- User: can follow 1–5 and still not know why the table shows ₹48L instead of ₹68L.
- Company: independent comparison only works if the **binding cap** is a step with a job, not leftover arithmetic.
- Future: `06` states the 68 vs 48 result; `07` wants names and labels on every calculation. Fix usefulness here without waiting for those.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Loan amount drawer Step 6 label **Lowest of these limits** in `loanAmountCalculationHtml`.
- Acceptance criteria in their words: “I followed 1, 2, 3, 4, 5. So I don't know why the next step is useful.”
- What NOT to do: do not merge with `01`’s “next step 3.” Do not delete Step 6. Do not treat this as a request to hide 80% or 55%.
- Open questions: whether usefulness is a sentence under Step 5 (“now compare”), a rename, or the two-track + min visual from 2341.
- Related recordings:
  - continues_from: `01` in this folder; `wb-rec-260815-2341` `06`
  - continues_in: `06` (68 vs 48 named)

## Evidence index
- `audio.vtt` 00:40.370–00:51.110
- `audio.json`: followed; next/step low p; useful p≈0.65
- `events.json`: clicks t=42843, 43320, 43753, 44120, 44552
- `screenshots/0006.jpg`–`0009.jpg`
- `replay.spec.ts`: step 1–5 locators in `#hlc-drawer-body`
- `RECAP.md` 00:39–00:45
