# Income limit is 68 lakhs; lower of these is 48 lakhs

They close the formula with the two caps. **Income limit is 68 lakhs.** **Lower of these** means you get **48 lakhs.** That is Step 5 (₹68,88,494) vs Step 1 (₹48,00,000) in Step 6. Last clip already said **minimum of 2**; this clip **names the two figures**.

## Classification
- kind: issue | calc story
- status: open
- surface: Step **5. Income limit ₹68,88,494** and Step **6. Lowest of these limits** → **₹48,00,000**. Table loan amount **₹48,00,000**. Footer **Loan amount shown ₹48,00,000**.
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
- previous: `wb-rec-260815-2341` `06` — color-code; min of 2; they did not yet say “68” and “48” as the pair
- next: `wb-rec-260816-0004`

## Where on the page
- Still the same drawer (`0018.jpg`–`0021.jpg`). No click in this speech span (01:47–01:59).
- Step 5 result: **₹68,88,494** (they say **68 lakhs**).
- Step 6 lists **₹48,00,000** and **₹68,88,494**; winner **₹48,00,000** (they say **48 lakhs**).
- Table and footer already show ₹48,00,000 — property cap won. Income cap is the higher unused number.

## What they said (faithful, complete)

**01:47.810–01:55.410** Speaker A:
> Raw ASR: “And then finally. Now you understand that the income limit is 68 lakhs.”
> Corrected: **And then finally.** Now [you] understand that the **income limit is 68 lakhs**.
> **68** p≈0.57; **lakhs** p≈0.69. On-screen **₹68,88,494** — they round to 68. Heading is already **Income limit**.

**01:55.570–01:59.090** Speaker A:
> Raw ASR: “And lower of these means you get 48 lakhs.”
> Corrected: same. **lower of these** p≈0.60/0.77/0.68; **48 lakhs** p≈0.91/0.94. Matches Step 6 copy **Lowest of these limits** and the ₹48,00,000 result.

Sequencing / names / labels is `07` immediately after.

## First-principles problem
- What must be true: the reader sees **two caps** and that the loan is the **lower** one — here **48**, not **68**.
- Root vs symptom: `02` asked why the next step is useful. This is the answer they then speak: **lower of these**. The root is still that Step 6 does not **feel** like that sentence until they say it.
- Constraints: do not swap which number wins; property 48 beats income 68 on this input set.

## Directions they considered
- Name income limit **68 lakhs**, then **lower of these → 48 lakhs**.
- Lean: this is the missing caption for Step 6, in their words. Color/tracks remain 2341’s ask.
- They do **not** restate 20% down payment here.

## Company / user / future thinking
- User: otherwise walks away thinking they can borrow ~₹69L because that box looks like “the loan.”
- Company: showing ₹48L in the table without saying “because 48 < 68” is how people miss the house cap.
- Future: `07` wants this compare to have a name like every other calculation.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Step 5 / Step 6 in `loanAmountCalculationHtml`; table loan-amount cell.
- Acceptance criteria in their words: “the income limit is 68 lakhs.” “lower of these means you get 48 lakhs.”
- What NOT to do: do not round the stored math to 68/48; they rounded while talking. Do not treat 48 as processing-fee ₹48,000 (Charges tab, later). Do not mark this closed because 2341 said min of 2 — this clip supplies the two amounts.
- Open questions: show both figures in lakhs as well as rupees. Whether Step 6 should say “property won.”
- Related recordings:
  - continues_from: `02`, `wb-rec-260815-2341` `06`
  - continues_in: `07`

## Evidence index
- `audio.vtt` 01:47.810–01:59.090
- `audio.json`: 68 lakhs; lower of these; 48 lakhs
- `screenshots/0000.jpg`, `0003.jpg`, `0006.jpg` — Step 5 ₹68,88,494 / Step 6 ₹48,00,000
- No click in this span
- `RECAP.md` idle through 01:58 while they talk
