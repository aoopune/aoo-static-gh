# Credit-card load — total limits across all cards, then 10%

They point at **Credit-card load** and ask what the load is. The rule they say out loud: **total credit card limit across all credit cards**, then the bank (they) took a **10% load**. On screen the box is ₹0 × **10.00%** = ₹0, and the form already says “About **10%** counts as monthly load.”

## Classification
- kind: issue | copy / calc literacy
- status: open
- surface: Loan amount drawer Step **3. Credit-card load**; form field Credit card limits ₹0 with note “About **10%** counts as monthly load.”
- viewport: 1366x768 @2x
- speakers: Speaker A states the rule. ASR not diarized.

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
- previous: `wb-rec-260815-2341` clicked this same Credit-card load box while talking 20% / ₹1 lakh — they already treated ₹0 as a real step.
- next: `wb-rec-260816-0004`

## Where on the page
- Step 3 on the open drawer (`0011.jpg`–`0016.jpg`): **₹0 × 10.00% = ₹0**.
- Form (visible beside the drawer): **Credit card limits ₹0**; helper “About **10%** counts as monthly load.”
- No new click in this speech span. Next clicks (01:36 / 01:40) are Step 4 minus-spans in `05`.
- They had already clicked the Step 3 container at **00:43.753** while counting 1–5 (`02`).

## What they said (faithful, complete)

**01:09.990–01:16.050** Speaker A:
> Raw ASR: “And then the credit card load. But what is the load of this?”
> Corrected: same. The heading is **Credit-card load**. “Load of this” = what quantity is being loaded (limit vs outstanding vs something else).

**01:16.590–01:23.170** Speaker A:
> Raw ASR: “Total credit card limit across all credit cards. And then they took a 10% load. They took a load.”
> Corrected: same. High-confidence on **total / credit / card / limit / across / all**. **10** and **%** p≈0.57/0.79. Rule: sum **limits** (not stated as current dues), then take **10%** as monthly load.

**01:24.990–01:26.910** Speaker A:
> Raw ASR: “This credit card load came from that.”
> Corrected: same. The ₹0 in Step 3 **came from** the form’s ₹0 limits × 10%. Even at zero they want the chain visible.

FOIR minus EMIs minus this load is `05`.

## First-principles problem
- What must be true: the customer can say **what was totaled** (all card **limits**) and **what 10% is** (monthly load), including when the result is ₹0.
- Root vs symptom: ₹0 looks like “nothing happened.” The root is **the 10% rule not sitting on the step** as clearly as it sits under the form field.
- Constraints: keep 10%; keep “across all cards”; do not skip the step when limits are zero.

## Directions they considered
- Spell the recipe: **total limits across all cards → 10% load**.
- Lean: the form note already says 10%. The drawer step should say the same thing in the same words.
- They do **not** ask to use outstanding balance instead of limit in this clip.

## Company / user / future thinking
- User: thinks a ₹0 box is empty, then is surprised later when a real limit cuts EMI.
- Company: FOIR math is honest only if card load is a named deduction, not a silent 10%.
- Future: `05` subtracts this load from income allowance. `01` already said ₹55,000 must carry into Step 3.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Step 3 **Credit-card load** in `loanAmountCalculationHtml`; form helper on `#hlc-card-limits` (“About 10% counts as monthly load”).
- Acceptance criteria in their words: “Total credit card limit across all credit cards. And then they took a 10% load.” “What is the load of this?”
- What NOT to do: do not hide Step 3 at ₹0. Do not change 10% in this clip. Do not treat “load” as outstanding dues unless a later clip says so.
- Open questions: whether Step 3 should repeat the form sentence verbatim. Whether “they” is banks in general or this calc.
- Related recordings:
  - continues_from: `wb-rec-260815-2341` card-load click; `02` / `03` in this folder
  - continues_in: `05` minus credit card load

## Evidence index
- `audio.vtt` 01:09.990–01:26.910
- `audio.json`: “Total credit card limit across all credit cards” all p>0.55
- `screenshots/0000.jpg`, `0006.jpg`, `0011.jpg` — Step 3 and form 10% note
- `events.json`: earlier step 3 click t=43753
- Form copy on recording: “About 10% counts as monthly load”
