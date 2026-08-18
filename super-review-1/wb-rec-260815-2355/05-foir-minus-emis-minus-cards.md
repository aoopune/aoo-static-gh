# FOIR minus existing EMIs minus card load = monthly EMI eligibility

They dictate the middle of the loan-amount story as a formula. Start from **Income allowance**, put it **into FOIR** (ASR **fire**), **minus existing EMIs**, **minus credit card load**, **equal to monthly EMI eligibility**. Then they tap the two minus amounts in Step 4.

## Classification
- kind: issue | calc story / labelling
- status: open
- surface: Loan amount drawer Step **2. Income allowance** (₹1,00,000 × 55.00% = ₹55,000) and Step **4. Monthly EMI available** (₹55,000 − **₹555** − **₹0** = ₹54,445). Form: Existing EMIs ₹555; Share of income / FOIR (55% on screen).
- viewport: 1366x768 @2x
- speakers: Speaker A. “And then she said that you should do this” may be A quoting a rule, or a second person; ASR **she** p≈0.26. Not diarized.

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
- previous: `wb-rec-260815-2341` already ran this chain to ₹54,445 / ₹68.88L
- next: `wb-rec-260816-0004`

## Where on the page
- Step 4 arithmetic (`0017.jpg`–`0018.jpg`): ₹55,000 − ₹555 − ₹0 = **₹54,445**.
- Clicks:
  - **01:36.952** step 4 `span:nth-of-type(1)` in the second inner div — one minus amount
  - **01:40.568** step 4 third inner `span:nth-of-type(1)` — the other minus amount
- On-screen Step 2 is already **income × 55%** labeled **Income allowance**, not a separate “FOIR” multiply after that box. They still **say FOIR** as a named operation.

## What they said (faithful, complete)

**01:26.910–01:31.830** Speaker A:
> Raw ASR: “And then she said that you should do this. Income allowance.”
> Corrected: **Income allowance** matches the Step 2 heading (p≈0.84/0.86). “she said” is low confidence — do not invent a named woman. Treat as: this is the prescribed next move.

**01:33.970–01:35.330** Speaker A:
> Raw ASR: “Into fire.”
> Corrected: “Into **FOIR**.”
> **Into** p≈0.02; **fire.** p≈0.20. On-screen the 55% is FOIR / share of income. Not a fire icon, not “FIRE” the acronym.

**01:37.230–01:46.350** Speaker A, clicking the minus rows:
> Raw ASR: “Minus existing EMI's. Minus credit card load. Is equal to monthly EMI eligibility.”
> Corrected: same. High confidence on **Minus / existing / EMI's / credit card load / equal to / monthly EMI eligibility.** On-screen the result label is **Monthly EMI available** (₹54,445), not the words “eligibility.” They want that result **named** as monthly EMI eligibility.

Income limit 68L vs lower 48L is `06`.

## First-principles problem
- What must be true: the customer can **read one sentence** that matches the boxes: allowance (FOIR share) minus EMIs minus card load = money left for this EMI.
- Root vs symptom: Step 4 is already the subtraction. The root is **names** — FOIR is said but labeled “Income allowance”; the result is “available” while they say “eligibility.”
- Constraints: keep ₹555 and ₹0 as the live inputs; don’t skip card load at zero.

## Directions they considered
- Write the chain: Income allowance → FOIR → minus EMIs → minus card load → monthly EMI eligibility.
- Lean: sequencing + labels (`07` will repeat “names and labels”). Not a new third cap.
- They do **not** change FOIR from 55% here.

## Company / user / future thinking
- User: this is the only place existing EMIs and cards **hurt** the new loan. If the words don’t match the boxes, they cannot check the bank later.
- Company: Shroffin’s job is the full picture. FOIR without the word FOIR is a private nickname.
- Future: `06` turns ₹54,445 into a loan cap; `07` demands names on every calculation.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Step 2 / Step 4 labels in `loanAmountCalculationHtml`; form `#hlc-existing-emis`, `#hlc-foir`, `#hlc-card-limits`.
- Acceptance criteria in their words: “Income allowance. Into FOIR. Minus existing EMIs. Minus credit card load. Is equal to monthly EMI eligibility.”
- What NOT to do: do not drop the card-load minus when it is ₹0. Do not relabel FOIR as “fire.” Do not treat “eligibility” as the table’s ₹48L (that is `06`).
- Open questions: keep heading **Income allowance** and add FOIR, or rename. **Available** vs **eligibility** for Step 4.
- Related recordings:
  - continues_from: `03` (55% guess), `04` (10% load)
  - continues_in: `06`, `07`

## Evidence index
- `audio.vtt` 01:26.910–01:46.350
- `audio.json`: fire p≈0.20; EMI eligibility p≈0.99/0.94
- `events.json` clicks t=96952, 100568
- `screenshots/0017.jpg`, `0018.jpg`
- `replay.spec.ts` two Step 4 span clicks
- On-screen: ₹55,000 − ₹555 − ₹0 = ₹54,445
