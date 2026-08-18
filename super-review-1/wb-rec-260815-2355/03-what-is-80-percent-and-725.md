# What is 80% and 7.25%? (ASR 800 and 75)

They stay on the Loan amount drawer and ask how the numbers were made. ASR says **800** and **75**. On screen those are **80.00%** of the property and **7.25%** interest. They guess a multiply by **5** or **55** — Step 2 is income × **55.00%**. They click the Step 1 result while asking.

## Classification
- kind: issue | labelling / calc literacy
- status: open
- surface: Loan amount drawer Step **1. Property limit** (₹60,00,000 × **80.00%**) and Step **5. Income limit** (**7.25%**, 240 months). Click **00:55.485** on step 1 result span.
- viewport: 1366x768 @2x
- speakers: Speaker A asking; “I don't know” is A as the customer (or A and B). ASR not diarized.

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
- previous: `wb-rec-260815-2341` already said **80%** LTV and **20%** buyer share; this clip asks **what the 80 and 7.25 are** as if unlabeled.
- next: `wb-rec-260816-0004`

## Where on the page
- Drawer still open (`0010.jpg`–`0016.jpg` periodic; `0011.jpg` interaction at the click).
- Visible percents: **80.00%** (Step 1), **55.00%** (Step 2), **10.00%** (Step 3), **7.25%** (Step 5). No “800” and no “75.”
- **00:55.485** click `div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(1) > … span:nth-of-type(2)` — Step 1’s **₹48,00,000** / 80% result (`0011.jpg`).
- 2341 already named 80% and the leftover 20%. Here they still cannot tell **where 80 and 7.25 came from**.

## What they said (faithful, complete)

**00:51.990–00:53.990** Speaker A:
> Raw ASR / corrected: “And how to calculate this.”

**00:54.090–00:58.650** Speaker A:
> Raw ASR: “Now he has done into 800. What is 800? I don't know.”
> Corrected: “Now [the calc] has done **into 80%**. What is **80%**? I don't know.”
> **800** p≈0.29 then **800?** p≈0.62. Step 1 is **80.00%**, not 800. “he” = the page / formula, not a person off-screen.

**00:59.110–01:01.890** Speaker A:
> Raw ASR: “And then 75. Where did he get this?”
> Corrected: “And then **7.25**. Where did [it] get this?”
> **75.** p≈0.16. On-screen interest is **7.25%** (table + Step 5). Do not invent a 75% FOIR or 75 lakh.

**01:03.970–01:07.370** Speaker A:
> Raw ASR: “Did he get it or not? Or did he multiply it with 5? Or did he multiply it with 55?”
> Corrected: same questions. **5?** p≈0.51; **55?** p≈0.13. Step 2 is ₹1,00,000 × **55.00%**. They are guessing which percent made ₹55,000. Leave 5 as a slip; **55** matches the box.

Credit-card load starts at 01:09 (`04`).

## First-principles problem
- What must be true: **80%** and **7.25%** have to be **named** (LTV / this bank’s rate), not only printed as digits.
- Root vs symptom: “what is 800” is ASR + unlabeled percent. The root is **orphan percentages** — the customer cannot tell property cap from rate from FOIR.
- Constraints: do not change the math (80% of ₹60L, 7.25% in the EMI-back solve). Label the source.

## Directions they considered
- Ask what 80% is, what 7.25% is, and whether ₹55,000 came from ×5 or ×55.
- Lean: literacy labels on the percents they already show. Not a new formula.
- They do **not** re-ask the 20% buyer share in this span (that was 2341).

## Company / user / future thinking
- User: sees × 80.00% and 7.25% and cannot say them back to a manager.
- Company: showing the sum without saying **whose rule** (bank LTV vs bank rate vs FOIR) is the same opacity as a black-box EMI.
- Future: `05` names FOIR; `08` asks why annual rate is shown when interest is monthly. Keep 80% and 7.25% as this issue.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Step 1 percent label (LTV / property share) and Step 5 rate label in `loanAmountCalculationHtml`. Table rate column already shows 7.25%.
- Acceptance criteria in their words: “What is 80%?” “Where did he get this?” (7.25). “Or did he multiply it with 55?”
- What NOT to do: do not “fix” ASR by adding an 800% or 75% control. Do not treat 5 as a product multiplier. Do not hide 55.00%.
- Open questions: exact words for 80% (LTV / max share of property). Whether 7.25% needs “this bank’s rate” in Step 5, not only in the table.
- Related recordings:
  - continues_from: `wb-rec-260815-2341` 80% / 20%
  - continues_in: `04` credit-card 10%; `05` FOIR 55%

## Evidence index
- `audio.vtt` 00:51.990–01:07.370
- `audio.json`: 800 p≈0.29; 75 p≈0.16; 55 p≈0.13
- `events.json` click t=55485 (step 1 result)
- `screenshots/0010.jpg`–`0016.jpg` (`0011.jpg` at the click)
- `replay.spec.ts` step 1 result span click
- On-screen: 80.00%, 55.00%, 7.25% in `0000.jpg` / `0006.jpg`
