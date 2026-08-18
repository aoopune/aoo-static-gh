# Color-code which limit wins — minimum of two, left track and right track

The steps are neat; that is not enough. One number is “my eligibility”; they don’t know **what about this** (the other cap). Property ₹48L and income ₹68.88L are two caps; the loan is the **minimum of 2**. They want a **color code** so you see which one binds, and **left-side / right-side** calculations (1-2-3 and 1-2-3). 80% LTV means the other **20%** is the buyer’s share — keep that. They click credit-card load while talking. First / second / third tracks at the end (ASR **25**, then **1 lakh**).

## Classification
- kind: issue | visualization / calc story
- status: open
- surface: Loan amount drawer / step 6 **Lowest of these limits** (₹48,00,000 vs ₹68,88,494) and the two chains that feed it (property vs income). Step 1 shows **80.00%** of ₹60L. They also click step **3 Credit-card load** (`div:nth-of-type(3)`).
- viewport: 1366x768 @2x
- speakers: Speaker A: “Look, bro,” color code, min of 2, left/right. Short “Yes / Okay / that's the limit” likely Speaker B agreeing. ASR not diarized.

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
- previous: `09` (240 months / 20 years on the income track)
- next: `wb-rec-260815-2355` `01` — arrange the viewers, Step 1 / Step 2, carry ₹55,000; `06` — “income limit is 68 lakhs; lower of these means you get 48 lakhs.”

## Where on the page
- Same six-step Loan amount drawer as `07`–`09` (`0063.jpg`, `0076.jpg`–`0083.jpg`):
  - Left-hand story in their words = **property**: ₹60L × **80%** = ₹48L (buyer’s remaining **20%** of ₹60L = ₹12L)
  - Right-hand story = **income**: ₹1L × 55% → minus ₹555 EMI → minus card load → 240 months @ 7.25% = ₹68.88L
  - Winner on screen: **₹48,00,000** (property), not the higher income cap
- Click **08:35.957** (`0077.jpg`): `div#hlc-drawer-body > div:nth-of-type(1) > div:nth-of-type(3) > … span:nth-of-type(2)` — **Credit-card load** result (₹0). They talk 20% / 1 lakh after this.
- No color split on the recording’s six-step list: one stack, same ink. (Later source has `.hlc-story-track--house` / `--income` active colors; **this clip’s screenshots do not show that two-track layout**.)
- Nearby numbers they might be pointing at: EMI **₹37,938**, EMI available **₹54,445**, income limit **₹68,88,494**, property **₹48,00,000**, existing EMI **₹555**, 20% of ₹60L = **₹12,00,000**.
- Screenshots: `0076.jpg`–`0083.jpg` (t=512219–570223) through end. Clip audio ends ~09:31.9; last screenshot t=570.2s.

## What they said (faithful, complete)

**08:29.040–08:38.740** Speaker A:
> Raw ASR: “This is my eligibility. I have to pay 14,000. But what about this? I don't know.”
> Corrected: “This is my eligibility. I have to pay **[ASR 14,000]**. But what about **this**? I don't know.”
> Do **not** invent which figure “14,000” was. On-screen nearby: ₹37,938 EMI, ₹54,445 EMI available, ₹48,00,000 / ₹68,88,494 limits, ₹12,00,000 as 20% of ₹60L. The point is: one number is “my eligibility,” and **the other limit** (“what about this?”) is unexplained. They click Step 3 (₹0) during “what about this?”

**08:39.220–08:50.780** Speaker A:
> Raw ASR: “It's not just neat. If you have a color code, it will show you. [×4] Look, bro. Minimum of 2.”
> Corrected: same. The step list being tidy (`07`) is not enough. A **color code** should show **which** of the two limits you are looking at / which one **wins**. “Look, bro” = A to B. **Minimum of 2** p≈0.99 — the loan is `min(property, income)`.

**08:52.060–09:05.880** Speaker A, with agrees:
> Raw ASR: “Then left-side calculation, right-side calculation. 1-2-3, 1-2-3. Minimum of 2. Yes. Yes, it's correct. Minimum of 2. Okay.”
> Corrected: same. Two parallel tracks, each with its own 1-2-3, then take the minimum. “Yes, it's correct” / “Okay” = B confirming the rule.

**09:06.660–09:15.260** both, on the 80% / remainder:
> Raw ASR: “20% Yes, it's directly. That's the limit. Yes, that's the limit. Yes, then keep this much. And the second one is this.”
> Corrected: “**20%**. Yes, it's directly. That's the limit. … Yes, then keep this much. And the second one is this.”
> ASR **20** p≈0.08 — on-screen Step 1 is **80.00%** LTV; **20%** is the buyer’s remaining share of ₹60L. “Keep this much” = do not hide that 20%. “The second one” = the other track (income / ₹1,00,000).

**09:20.330–09:31.890** Speaker A (clip ends here):
> Raw ASR: “First, this is 25. Then this is 1 lakh. And the third one is this. This is 1 lakh.”
> Corrected: raw kept. ASR **25.** p≈0.57 — does not match a labeled 25 on the drawer (80.00%, 55.00%, 10.00%, 7.25%, ₹48L, ₹55,000, ₹1,00,000). Likely they are **assigning colors / tracks** while pointing: first mark, then **₹1,00,000** income, then a third. “Third” p≈0.008; last “1 lakh” p≈0.008 — weak, but they did say “the second one” just before. Do not invent a 25% product rule. Next clip starts by arranging viewers / Step 1 / Step 2.

## First-principles problem
- What must be true: the user sees **two (or three) caps** and **which one is binding**. Here property ₹48L wins over income ₹68.88L. Color should carry that, not only the final ₹48L.
- Root vs symptom: “neat” numbered list is a symptom of a single stack. The root is **two stories** (house vs income) that need two visual tracks, then `min`. “What about this? I don't know” is the same root in their words.
- Constraints: keep 1–5 math (`07`). Keep 20% visible as the complement of 80% LTV. Card load stays a real step even at ₹0 (`07`–`08`).

## Directions they considered
- Color code so “it will show you” which limit.
- Left calculation vs right calculation, each 1-2-3.
- Explicit **minimum of 2** (they say it three times; B agrees).
- Keep the **20%** (buyer’s share) as a first-class limit fact.
- A possible third track (card / “1 lakh”) — named once, low confidence.
- Lean: this is the missing visual on an otherwise praised calc. Not a request to change 80% or 55%.

## Company / user / future thinking
- User: otherwise thinks “eligibility” is ₹68L (or EMI) and does not see **why** the table shows ₹48L.
- Company: showing the lower of two limits without painting the winner is how people miss the house cap — the same honesty job as the scheme name (`01`).
- Future: `wb-rec-260815-2355` opens still on this drawer: “We need to arrange the viewers. Step 1. Step 2…” then credit-card load and “lower of these means you get 48 lakhs.” Finish the two-track / color idea there; do not treat this clip as closed.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: loan-amount drawer layout. Current `src/home-loan-compare.js` `loanAmountCalculationHtml` already has Property vs Income `storyTrack` plus `.hlc-story-track--house` / `--income` colors in `css/shroffin-explore-banks.css`. **This recording’s screenshots are still the single six-step stack** — accept against **that** UI, not by assuming the later tracks shipped in this review.
- Acceptance in their words: “what about this? I don't know”; “not just neat”; “if you have a color code, it will show you”; “left-side calculation, right-side calculation”; “1-2-3, 1-2-3”; “minimum of 2”; keep the **20%**.
- What NOT to do: do not collapse to one number with no tracks. Do not drop credit-card load. Do not hide 20% / 80% LTV. Do not invent a “25%” rule from ASR. Do not treat ASR 14,000 as a new EMI to code.
- Open questions: two tracks or three (they say “the third one” once, low confidence). Color mapping for property vs income vs (optional) bank max. What “14,000” and “25” were pointing at.
- Related recordings:
  - continues_from: `07` (steps are good) and `09` (240 months / 20 years on the income track)
  - continues_in: `wb-rec-260815-2355` `01` / `06` — arrange the steps, “lower of these means you get 48 lakhs,” sequencing and labels

## Evidence index
- `audio.vtt` 08:29.040–09:31.890
- `events.json`: click credit-card load t=515957; idle through 09:20
- `screenshots/0063.jpg`, `0076.jpg`–`0083.jpg`
- `replay.spec.ts` final click `div:nth-of-type(3) … span:nth-of-type(2)`
- On-screen limits: ₹48,00,000 vs ₹68,88,494; 80.00% LTV
- `audio.json`: 20% p≈0.08; 25. p≈0.57; third p≈0.008
