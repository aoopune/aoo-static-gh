# Write that these banks are among the highest processing fees — put it on the website

They leave “cheapest” and open **Canara** (₹10,000 **maximum applied**), then **DCB** (₹96,000), then **IDFC FIRST** (₹1,44,000 = ₹48L × **3.00%**). They want the product to **write** that these banks are **one of the highest who charge processing fees** — **this bank is known for the highest amount in the whole market**. “You can put it on the website.”

## Classification
- kind: issue | intelligence labels
- status: open
- surface: Processing fee drawers — **Canara Bank · Housing loan** (04:28.510), **DCB Bank · Home Loan** (05:10.821), **IDFC FIRST Bank · Home Loan** (06:31.256). Table sorted by processing fee; they scroll into the expensive cluster (₹48,000 / ₹96,000 / ₹1,44,000).
- viewport: 1366x768 @2x
- speakers: Speaker A dictates the label. **“Highest?”** (05:35.920, p≈0.65) likely Speaker B checking. ASR not diarized.

## Session metadata
- folder: `wb-rec-260816-0004`
- recording id: `08aa721b-3f2e-484c-b39e-58b789d21095`
- clip: 27 of 30
- started_at: 2026-08-15T18:34:46.547Z
- ended_at: 2026-08-15T18:43:30.319Z
- duration_ms: 523772 (~8 min 44 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 128
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2355` (~5 s earlier)
- next: `wb-rec-260816-0013` (~3 s later)

## Where on the page
- **04:28.510** Canara processing (`0033.png`–`0036.png`):
  1. Percentage: **₹48,00,000 × 0.50% = ₹24,000**
  2. Maximum applied: ₹24,000 → **₹10,000**, “Above the bank maximum.”
  - Processing fee shown: **₹10,000**
  - Same login-fee drawer foot as Indian Bank
- **04:43.266** / **04:43.874** they click drawer step 2 amount / step 3 (max row).
- **04:52.473** Close; **04:54.436** open Processing fees * note again; table scrolled to the mid/dear cluster (`0038.png` HDFC–IndusInd ₹24k–₹48k; `0039.png` Bandhan–RBL ₹48k then ₹96k).
- **05:10.821** DCB (`0040.png`–`0041.png`):
  1. Percentage: **₹48,00,000 × 2.00% = ₹96,000**
  2. Limit check: ₹96,000 / “Above the ₹5,000 minimum.”
- **06:31.256** IDFC FIRST (`0051.png`): **₹48,00,000 × 3.00% = ₹1,44,000**. Highest rupee in the visible list. No “highest” badge on screen. Notes * still at the foot of the table.

## What they said (faithful, complete)

**04:26.980–05:00.800** Speaker A (Canara drawer):
> Raw ASR: “Processing fee. Variable fee. Maximum apply. 10,000 cash. You have to pay 10,000 cash. You have to pay at least 10,000 cash. You have to pay 10,000 cash.”
> Corrected: **Processing fee. Variable fee. Maximum applied.** On-screen label is **Maximum applied** / bank maximum **₹10,000** (not “cash”; **cash** p≈0.06–0.85 across repeats). “At least 10,000” — they are sitting on a **cap** (₹24,000 calculated, ₹10,000 kept). Do not turn that into a minimum; DCB’s min is the later “₹5,000 minimum.”

**05:00.800–05:26.140** Speaker A (note + DCB):
> Raw ASR: “If I feel like how to save this money, I already know how to do it. I have to pay 2,000 cash. I have written 2,000 cash. Now I have to enter the reality and accept the actual money. I have to pay 10,000 cash.”
> Corrected: **How to save this money — I already know** (Flights/`05`). ASR **2** p≈0.08 / 0.19 — cheapest on-screen processing is Indian Bank **₹2,500** — do **not** invent 2,000 as a product number. “I have written 2,000… enter the reality and accept the actual money… pay 10,000” = the cheap figure they hoped vs Canara’s **₹10,000** shown. “Cash” = rupees.

**05:28.740–05:36.300** A, then B:
> Raw ASR: “And you have to write that these banks are one of the highest who charge processing fees. Highest?”
> Corrected: same. **Write** that these banks are **one of the highest** on processing fees (**highest** p≈0.98). **“Highest?”** = B confirming the word.

**06:23.600–06:53.850** Speaker A (IDFC FIRST open at 06:31):
> Raw ASR: “What is this? What is this? This bank will also give you an idea. What is this? 3 million? You can put it on the website. Again, this is one of the highest. This bank is known for the highest amount of processing fees in the whole market.”
> Corrected: **What is this?** (the 3% / ₹1,44,000). “This bank will also give you an idea” = the **intelligence label**. ASR **million** p≈0.017 — on-screen is **× 3.00%**, so **3 percent**, not 3 million. **You can put it on the website.** **Again, this is one of the highest.** **This bank is known for the highest amount of processing fees in the whole market.**

Risk-model talk between “Highest?” and IDFC is `07`.

## First-principles problem
- What must be true: the expensive end is **named**, not only sorted. Customer should see **highest in the market** (IDFC 3% / ₹1.44L) the way they see **cheapest** (`05`).
- Root vs symptom: sort already puts IDFC last. They still ask “what is this?” and demand a **written** reputation/intelligence line on the site.
- Constraints: labels must follow the math they opened (Canara **max**, DCB **% + min**, IDFC **3%**). Don’t badge Canara ₹10,000 as “highest in the market” — that sentence is on **IDFC** while ₹1,44,000 is showing.

## Directions they considered
- Call the mechanic: **variable**; **maximum applied** (Canara).
- Contrast hoped cheap rupees vs **actual** ₹10,000 / ₹96,000 / ₹1,44,000.
- **Write** “one of the highest who charge processing fees.”
- On IDFC: **put it on the website**; **known for the highest… in the whole market.**
- Lean: intelligence labels (`05`), not a new formula.

## Company / user / future thinking
- User: otherwise thinks ₹10,000 (Canara cap) is “high” and never sees that DCB/IDFC are another league.
- Company: independent comparison includes calling out **dear** banks, not only cheap ones.
- Future: `07` is **why** some banks sit at the top (risk / default / years of interest). Next clip keeps “intelligence to save money.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Charges table / processing-fee drawer intelligence copy. Numbers already from processing-fee math (rate, min, max). Missing is the **highest / known for** label they asked to put on the site.
- Acceptance criteria in their words: “you have to write that these banks are one of the highest who charge processing fees”; “you can put it on the website”; “known for the highest amount of processing fees in the whole market.”
- What NOT to do: do not label Canara ₹10,000 as market-highest (IDFC ₹1,44,000 / 3% is that line). Do not print “3 million.” Do not invent ₹2,000 as a published fee. Do not skip the written label because sort already exists.
- Open questions: badge on the row, in the drawer, or both. How many banks count as “one of the highest” (DCB cluster vs IDFC alone).
- Related recordings:
  - continues_from: `05` (cheapest / save money / intelligence cheap)
  - continues_in: `07` (risk model after “Highest?”); `wb-rec-260816-0013` — intelligence to save money continues

## Evidence index
- `audio.vtt` 04:26.980–05:36.300 and 06:23.600–06:53.850
- `audio.json`: **highest** p≈0.98; **million** p≈0.017; **2** p≈0.08
- `events.json`: Canara processing t=268510 (₹10,000); DCB t=310821 (₹96,000); IDFC FIRST t=391256 (₹1,44,000)
- `screenshots/0033.png`–`0036.png` (Canara ₹10,000 max); `0038.png`–`0039.png` (scroll to dear cluster); `0040.png`–`0046.png` (DCB ₹96,000); `0051.png`–`0054.png` (IDFC ₹1,44,000 / 3%)
- `replay.spec.ts`: `tr:nth-of-type(5)` Canara; `tr:nth-of-type(29)` DCB; `tr:nth-of-type(33)` IDFC FIRST
- On-screen: no “highest” label — only rupees and math
