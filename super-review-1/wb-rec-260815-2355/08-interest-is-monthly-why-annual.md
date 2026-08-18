# Interest is monthly — why calculate annual? Write ÷12 as months; what is 0.006?

They close Loan amount and open **EMI** for the same Bank of Maharashtra row (₹37,938). They need to know interest is **monthly**. They do not know why they must **calculate the annual interest**. **12** should be written as **months**. The formula’s **0.00604167** (ASR **0.06**) is the same monthly rate already shown as **0.6042%**. They praise the reveal, then still ask what the decimal is.

## Classification
- kind: issue | labelling / EMI math
- status: open
- surface: `#hlc-drawer` title **EMI** / Bank of Maharashtra · Maha Super Housing Loan. Step 1: **7.25% ÷ 12 = 0.6042%**. Step 2: ₹48,00,000 × **0.00604167** × (1.00604167)^240 / ((1.00604167)^240 − 1) = **₹37,938**. Clicks on Step 1 result (**04:06.110**, **04:07.825**) and a Step 2 span (**04:11.366**).
- viewport: 1366x768 @2x
- speakers: Speaker A questions; “Good, good. Very nice” is praise from A (or B). ASR not diarized.

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
- previous: `wb-rec-260815-2341` already complained **240 months** vs **20 years** on this same solve
- next: `wb-rec-260816-0004`

## Where on the page
- **02:19.904** `getByRole("button", { name: "Show how emi for Bank of Maharashtra was calculated" })` text ₹37,938 (`0023.jpg`). Drawer title **EMI**.
- Step 1 copy: **Monthly interest rate** — **7.25% ÷ 12 = 0.6042%**.
- Step 2: full EMI formula; **EMI shown ₹37,938**; foot: “indicative EMI… lender decides final terms.”
- Clicks after a long look:
  - **04:06.110 / 04:07.825** Step 1 result span (the **12** / 0.6042% side) — `0036.jpg`–`0037.jpg`
  - **04:11.366** Step 2 inner span (`0038.jpg`) while they ask what **0.06** is
- Amortization / outstanding / principal is `09` (speech at 03:07–03:38, still on this same EMI drawer).

## What they said (faithful, complete)

**02:47.240–02:50.900** Speaker A:
> Raw ASR: “Oh, I need to know that interest is monthly.”
> Corrected: same. **interest** p≈0.70; **monthly.** p≈0.68.

**03:02.720–03:06.320** Speaker A:
> Raw ASR: “I don't know why I need to calculate the annual interest.”
> Corrected: same. **annual** p≈0.72. The table shows **7.25%** per year; Step 1 then divides by 12. They want to know **why annual is the starting unit**.

**03:17.240–03:21.760** Speaker A (after the outstanding / week lines in `09`):
> Raw ASR: “That rate is required for a month. And then it is divided by 2.”
> Corrected: **That rate is required for a month.** Then it is **divided by 12**.
> **2.** p≈0.54. On-screen and at 04:05 they say **12**. Do not add a “divide by 2” product rule.

**04:03.580–04:13.800** Speaker A, clicking Step 1 then Step 2:
> Raw ASR: “Okay, I don't know much about this. 12 is divided by months. It would have been better if it was written as months. And then why is it written into? What is 0.06?”
> Corrected: **12** is the months divisor — **write it as months**, not a bare 12. **What is 0.006?** (on-screen **0.00604167** and **0.6042%**). “written into” = why the formula repeats the rate as a decimal.

**04:15.340–04:28.670** Speaker A:
> Raw ASR: “Monthly interest rate into monthly interest rate compounded. Is equal to 100% BMS short. Good, good. Very nice, very nice. Very nice.”
> Corrected: they are reading **(1.00604167)^240** as monthly rate **compounded**. **100% BMS short** — **100** p≈0.03, **BMS** p≈0.53, **short** p≈0.26. Do **not** invent a BMS metric. Keep as a garbled read of the formula. **Good / very nice** is praise for showing the math (`10` then names why).

## First-principles problem
- What must be true: EMI interest is **per month**. If you start from a **yearly** percent, the drawer must say **why**, and **÷ 12 months** must be written as months, and the **decimal** must be the same rate, not a second mystery number.
- Root vs symptom: “what is 0.06” is the symptom. The root is **one rate shown three ways** (7.25%, 0.6042%, 0.00604167) without saying they are the same.
- Constraints: keep the standard EMI formula; don’t switch the product to weekly interest (`09` asks for outstanding after each period).

## Directions they considered
- Know that interest is **monthly**; question **annual** as the input; label **12 as months**; explain **0.006…** as the monthly rate in decimal; show compounding.
- Lean: labelling on the existing two EMI steps. Not a new rate type.
- Amortization table is a separate ask (`09`).

## Company / user / future thinking
- User: pays every month. Annual % is bank advertising; monthly is the charge.
- Company: a “revolutionary” EMI drawer (`10`) fails if the first line still looks like unexplained ÷12.
- Future: 2341 already wanted tenure as **20 years** not 240 months — same unit-honesty job.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `emiCalculationHtml` Step 1 (**7.25% ÷ 12**) and Step 2 coefficients **0.00604167** / **1.00604167**.
- Acceptance criteria in their words: “interest is monthly.” “I don't know why I need to calculate the annual interest.” “better if it was written as months.” “What is 0.06?”
- What NOT to do: do not divide by 2. Do not drop annual 7.25% from the table — explain the conversion. Do not treat BMS short as a spec.
- Open questions: show 7.25% ÷ 12 months = 0.6042% = 0.00604167 as one labeled identity. Whether annual even belongs in Step 1 vs “bank quotes yearly; we charge monthly.”
- Related recordings:
  - continues_from: `07`; `wb-rec-260815-2341` tenure 240 vs 20 years
  - continues_in: `09` amortization; `10` nobody knows EMI

## Evidence index
- `audio.vtt` 02:47.240–03:06.320, 03:17.240–03:21.760, 04:03.580–04:28.670
- `audio.json`: monthly; annual; 12; 0.06; compounded; 2 p≈0.54
- `events.json`: EMI open t=139904; Step 1 clicks t=246110 / 247825; Step 2 t=251366
- `screenshots/0023.jpg`–`0024.jpg`, `0036.jpg`–`0038.jpg`
- `replay.spec.ts`: EMI cell `td:nth-of-type(5) > button`; Step 1/2 spans
- On-screen: 7.25% ÷ 12 = 0.6042%; 0.00604167 in the formula
