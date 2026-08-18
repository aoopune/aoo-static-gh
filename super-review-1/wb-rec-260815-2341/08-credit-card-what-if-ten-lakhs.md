# If credit-card limits were 10 lakh, that load would show

After calling the steps great they walk a what-if on Step 3. Credit-card limits are ₹0 now (“you didn't take it”). If you took credit card, it would have been **10 lakhs**. Then **1 lakh**. Then **1 lakh**. Okay. Okay. Next clip spells the rule: total limits across cards, then 10%.

## Classification
- kind: discussion | product rule they check by hypothetical
- status: open (keep Step 3 visible at ₹0; the 10% definition is named in 2355)
- surface: Loan amount drawer Step **3. Credit-card load** (₹0 × **10.00%** = ₹0). Form **Credit card limits ₹0** with “About **10%** counts as monthly load.”
- viewport: 1366x768 @2x
- speakers: Speaker A walks the what-if. Short **“Okay. Okay.”** likely Speaker B. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2341`
- recording id: `a22402c8-4a16-4e52-8736-ec1980e3cab1`
- clip: 25 of 30
- started_at: 2026-08-15T18:11:25.578Z
- ended_at: 2026-08-15T18:20:59.868Z
- duration_ms: 574290 (~9 min 34 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 84 (JPEG)
- event count: 128
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `07` (steps 1–5 praised; “you didn't take it” on ₹0 cards)
- next: `09` (240 months). `wb-rec-260815-2355` `04` — “total credit card limit across all credit cards, then 10% load.”

## Where on the page
- Same open Loan amount drawer (`0063.jpg`–`0071.jpg`). Step 3 still **₹0 × 10.00% = ₹0**. They do not type 10 lakh into the form in this clip — they only say it.
- No extra click in this span. Next click is **08:35.957** on Step 3’s result for `10`.
- Form behind: Credit card limits **₹0**. Monthly income **₹1,00,000** (the other “1 lakh” on screen).

## What they said (faithful, complete)

**07:36.980–07:55.670** Speaker A, then a short confirm:
> Raw ASR: “You took credit card. If you took credit card, it would have been 10 lakhs. And then 1 lakh. Then 1 lakh. Okay. Okay.”
> Corrected: “You took credit card. If you took credit card, it would have been **10 lakhs**. And then 1 lakh. Then 1 lakh. Okay. Okay.”
> Hypothetical: put **₹10,00,000** in credit-card limits (form is ₹0 now). “And then 1 lakh” twice — likely **10% of 10 lakh = ₹1,00,000** load, and/or monthly income **₹1,00,000** still in the chain. ASR **1** p≈0.07 / 0.04 — on-screen 1 lakh income is real; 10% of 10 lakh is the load arithmetic they check. Next clip (`2355` `04`) spells credit-card load as 10% of **total limits across all cards**. “Okay. Okay.” = likely Speaker B agreeing.

They do not ask to change the 10% rule here. They do not hide Step 3 because it is ₹0.

## First-principles problem
- What must be true: Step 3 is a **real** step even when the result is ₹0. The customer can imagine a limit (10 lakh) and see that the load would appear.
- Root vs symptom: praise in `07` already kept the empty card row. This file’s depth is they **tested** the step with a number. 2355’s depth is the **definition** (limits, not the bill).
- Constraints: keep 10%. Keep the step at ₹0. Do not swap limits for billed amount in this clip.

## Directions they considered
- Credit-card what-if (10 lakh → then 1 lakh) is how they check the step is real.
- Lean: not a request to change the 10% rule here.

## Company / user / future thinking
- User: “you didn't take it” only teaches if they can see what **would** have been taken.
- Company: unused card limit as monthly load is one of the honest steps — bury it and the FOIR chain lies.
- Future: `wb-rec-260815-2355` `04` writes the definition out loud. Do not duplicate that wording as if it were decided in this span.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Step 3 copy in `loanAmountCalculationHtml`; form helper on credit-card limits.
- Acceptance in their words: “if you took credit card, it would have been 10 lakhs”; “and then 1 lakh”; “okay, okay.”
- What NOT to do: do not hide Step 3 at ₹0. Do not change 10% in this clip. Do not treat “1 lakh” as a new product cap.
- Open questions: whether they meant 10% of 10 lakh, or pointing at income ₹1,00,000. 2355 answers “total limits then 10%.”
- Related recordings:
  - continues_from: `07`
  - continues_in: `wb-rec-260815-2355` `04`–`05`

## Evidence index
- `audio.vtt` 07:36.980–07:55.670
- `audio.json`: 10 lakhs; 1 lakh twice, low digit confidence; Okay. Okay.
- `screenshots/0063.jpg`–`0071.jpg` Step 3 ₹0 × 10.00%
- Form: Credit card limits ₹0; income ₹1,00,000
- No click in this span
