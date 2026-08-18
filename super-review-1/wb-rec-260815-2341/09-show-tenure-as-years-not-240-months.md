# Don’t write tenure as 240 months — it is 20 years

Inside the same Loan amount drawer, Step 5 says the income limit is computed at 7.25% for **240 months**. They cannot see where “240 months” is. They already entered **20 years**. After a beat they agree: yes, this is 20 years. Show years (or say 240 months **is** 20 years), not a raw month count that looks like a different product. The EMI drawer they opened earlier also uses **^240**.

## Classification
- kind: issue | copy / labelling
- status: open
- surface: Loan amount drawer / step **Income limit** line: `₹54,445 / month` at `7.25%` for **`240 months`**. Table column **Tenure (yrs)** already shows **20**. Form field Tenure: **20 years**. EMI drawer (`0049.jpg`) formula uses **(1.00604167)^240**.
- viewport: 1366x768 @2x
- speakers: Speaker A questions; a confirm “Yes, this is 20 years” may be A or B. ASR not diarized.

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
- previous: `08` (same drawer, card what-if)
- next: `10` (color / min of two). `wb-rec-260815-2355` `08` — interest is monthly, why annual; “better if it was written as months” with the week/month story.

## Where on the page
- Drawer still **Loan amount** for Bank of Maharashtra · Maha Super Housing Loan (`0063.jpg`–`0075.jpg`).
- Step 5 text on screen: Income limit from **₹54,445/month**, **7.25%**, **240 months** → ₹68,88,494. Note: “Standard EMI formula.”
- Table behind (when visible): Tenure **20**. Adjust eligibility: Tenure **20 years** (`0030.jpg`, `0051.jpg`).
- EMI drawer they opened at **05:16** (`0049.jpg`) already showed **240** as the exponent — they did not complain then; they complain now while reading Step 5.
- No extra click in this span; they are reading Step 5. Next click is **08:35.957** on Step 3 for `10`.
- Screenshots: `0066.jpg` (t=428203) — steps 3–6 including 240 months; `0072.jpg`–`0075.jpg` through the “20 years” confirm.
- Gap **08:16–08:24** (~8 s) before “Yes, this is 20 years.”

## What they said (faithful, complete)

**08:01.970–08:16.210** Speaker A:
> Raw ASR: “We calculate and calculate the loan amount. And the interest is lowered. 2.40 months. Where is 2.40 months? 20 years. This is 9 months.”
> Corrected: “We calculate and calculate the loan amount. And the interest is [used / applied]. **240 months.** Where is **240 months?** **20 years.** This is [in] months.”
> ASR **2.40 months** — digits **2** p≈0.04, **.40** p≈0.29; on-page it is **240 months** (20 × 12). “Interest is lowered” p≈0.17/0.53 — they are on the income-limit formula (rate × tenure), not asking to cut the 7.25%. “9 months” p≈0.39 on **9** — they may be misreading 240, rejecting a short tenure, or saying “this is **in** months.” They correct themselves next. Do not invent a 9-month product.

**08:24.320–08:26.140**:
> Raw ASR / corrected: “Yes, this is 20 years.”
> They map 240 months back to the **20 years** already in the form and the table.

They do not ask to change tenure, rate, or the ₹68,88,494 math — only how the duration is **said**.

## First-principles problem
- What must be true: the duration in the calc is the **same duration the user typed** (20 years). Writing 240 months without that translation looks like a different loan.
- Root vs symptom: the engine needs months for EMI. The symptom is showing **only** months in the sentence the human reads.
- Constraints: keep 240 as the math input if needed; the **label** should read as 20 years (optionally “240 months”). Same unit problem exists in the EMI formula they opened at 05:16.

## Directions they considered
- Read 240 months → ask where it is → name 20 years → confirm “yes, this is 20 years.”
- Lean: label as years. Next clip (`2355`) also says it would be better if it was written as months **with** the week/month story — still not “240” with no years.

## Company / user / future thinking
- User: set tenure in **years** on the form. The drawer must not feel like a different clock.
- Company: the calc is the honesty layer (`07`); honesty fails if the unit looks alien.
- Future: `wb-rec-260815-2355` continues EMI math (monthly rate, “12 is divided by months”, “better if it was written as months”).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: income-limit / tenure line in the loan-amount drawer; EMI formula exponent in the EMI drawer; table already uses **Tenure (yrs)**.
- Acceptance in their words: they can see it is **20 years**, not a mystery “240 months” / “2.40 months.”
- What NOT to do: do not change the 20-year input. Do not hide that EMI math uses months. Do not treat “interest is lowered” as a request to change 7.25%. Do not invent a 9-month tenure.
- Open questions: show “20 years (240 months)” vs only years. They asked “where is 240 months?” then accepted 20 years.
- Related recordings:
  - continues_from: `07` / `08` (same drawer)
  - continues_in: `10`. `wb-rec-260815-2355` `08`–`09` — EMI formula and amortization.

## Evidence index
- `audio.vtt` 08:01.970–08:26.140
- `audio.json` “2.40 months” low digit confidence; screen = 240 months; “9 months” p≈0.39
- `screenshots/0063.jpg`–`0075.jpg` Step 5; `0049.jpg` EMI ^240
- Table/form: tenure 20 years (`0030.jpg`, `0051.jpg`, `0063.jpg`)
- `events.json`: no click in this span
