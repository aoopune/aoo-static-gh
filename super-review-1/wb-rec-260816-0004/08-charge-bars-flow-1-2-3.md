# Charge rows should flow — bars 1-2-3 by width, not one stacked independently

On **SBI** then **Punjab & Sind** property-check drawers they stop on layout. **This bar 1, 2, 3 — put one at a time. This bar is small. This is the width of the bar.** If 1-2-3-4 have width, **it will split**. Don’t keep a standard on the **side of the panel**. If 1-2-3-4 **came down**, how easy — put a **line**, don’t do each block **independently**. Same thing on the next drawer. Open a **small bar**, give all the **sequentialities**, it will sit. **Repeatable.** 1-2-3-4-5 **come down one by one**; if width is less, okay; math from the top; **it will flow.**

## Classification
- kind: issue | layout / drawer math blocks
- status: open
- surface: Property check drawers — **SBI · Home Loan** (07:01.377, four numbered cards + total ₹15,100) and **Punjab & Sind Bank · PSB Apna Ghar** (07:43.712, ₹14,700). Then **08:05.276** Overview tab; **08:07.013** Loan amount drawer for Punjab & Sind (six stacked steps) while they say 1-2-3-4-5. Shared CSS: `.hlc-math-sheet-wrap` column stack; each `.hlc-math-block` is label | numbers (`.hlc-math-block-aside`).
- viewport: 1366x768 @2x
- speakers: Speaker A. “Yes” on “repeatable” likely B. ASR not diarized.

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
- previous: `wb-rec-260815-2355` (~5 s earlier) — 1-2-3-4-5 sequencing on loan-amount calc; this clip applies the same idea to **charge** rows
- next: `wb-rec-260816-0013` (~3 s later) — immediately Charges / SBI property check / government charges (more 1-2-3-4 blocks)

## Where on the page
- **07:00.997** scroll; table now shows Term loan / Overdraft facility rail (`0055.png`): Karnataka Bank / Punjab & Sind ₹12,000 processing; SBI **₹15,000** processing / **₹15,100** property (row highlighted).
- **07:01.377** SBI property check (`0056.png`–`0058.png`): 1 Legal and technical ₹5,200; 2 Title search ₹5,300; 3 Valuation ₹4,600; 4 Total sum → **₹15,100**. Foot: typical industry average, GST extra. Backdrop click **07:32.524**.
- **07:43.712** Punjab & Sind property check (`0061.png`–`0063.png`): 1 ₹4,800; 2 ₹4,600; 3 ₹5,300; 4 Total **₹14,700**. Backdrop **08:03.158**.
- **08:05.276** tab **Overview** (`0065.png`); **08:07.013** “Show how loan amount for Punjab & Sind Bank was calculated” (`0066.png`–`0070.png`):
  1. Property limit: ₹60,00,000 × 80% = **₹48,00,000**
  2. Income allowance: ₹1,00,000 × 55% = **₹55,000**
  3. Credit-card load: ₹0 × 10% = **₹0**
  4. Monthly EMI available: ₹55,000 − ₹555 − ₹0 = **₹54,445**
  5. Income limit: **₹67,32,799**
  6. Lowest of these limits: **₹48,00,000**
- They talk **1-2-3-4-5 come down** and **flow** until backdrop **08:41.703**. End frame `0071.png`: Overview table, drawer closed (Karnataka 8.25% / Punjab & Sind 7.55% / PNB 7.25%; loan **₹48,00,000**, tenure 20).
- Recording drawers: numbered cards in a **vertical** list. They want **width-driven flow**, one **repeatable** pattern — processing-fee 1-2 (Canara/DCB), property-check 1-2-3-4, loan-amount 1–6.

## What they said (faithful, complete)

**07:13.410–07:33.170** Speaker A (SBI drawer):
> Raw ASR: “This bar 1, 2, 3, put one at a time. And this bar is small. This is the width of the bar. If it is the width, 1, 2, 3, 4, it will split. Why put one at a time? Then you can solve the problem.”
> Corrected: same. **Bar** = the numbered charge/math **row/card** (1 legal, 2 title, 3 valuation, 4 total; **bar** p≈0.33 then 0.87). **Put one at a time** = current stack. **Bar is small** / **width of the bar**. If there is width, **1-2-3-4 will split** (**split** p≈0.93). **Why put one at a time?** — stacking is the problem they want solved.

**07:35.370–07:39.490** Speaker A:
> Raw ASR: “You have to keep the standard on the side of the panel. No.”
> Corrected: same. Proposal to keep a **standard** (legend / labels) on the **side of the panel** (**panel** p≈0.93) — then **No**. Current CSS already parks labels in `.hlc-math-block-aside` beside numbers; they reject a side-panel standard as the fix.

**07:43.690–08:09.590** Speaker A (Punjab & Sind drawer, then they keep talking):
> Raw ASR: “If 1, 2, 3, 4 came down, how easy would it be 2 is here, and you have to put a line like this. Then you don't have to do this independently. And the same thing happens here too. I used to think that 1, 2, 3, 4, who can do this?”
> Corrected: **If 1-2-3-4 came down, how easy.** **2 is here** + **put a line like this** (the total’s rule line / a connector between sequential bars). **Don’t do this independently** — one layout, not a special case per drawer. **The same thing happens here too** (next bank / next charge type). “Who can do this?” = the stacked 1-2-3-4 is hard to read.

**08:12.190–08:22.450** both:
> Raw ASR: “Then you open a small bar and give all the sequentialities. And it will sit. How many blocks is this? It is an external thing. It is a repeatable thing. Yes.”
> Corrected: open a **small bar**, give all the **sequence** (steps). **It will sit.** **How many blocks is this?** **External** (shared, not inside one bank’s custom). **Repeatable** (p≈0.88). **Yes.** (B agrees; p≈0.05 on the ASR yes — still a confirm beat.)

**08:23.830–08:38.830** Speaker A (loan-amount drawer open 08:07):
> Raw ASR: “1, 2, 3, 4, 5, it will come down one by one. And if the width is less, it is okay. If the mat is normal from the top, if it comes like this, then it will come down. It will flow. It will flow.”
> Corrected: **1-2-3-4-5 come down one by one** (loan-amount steps; screen has six). **If the width is less, it is okay** (wrap). ASR **mat** p≈0.11 → **math** is normal **from the top**, then it comes down. **It will flow** (×2; p≈0.86 / 0.96).

Clip ends on that flow. Next recording starts on Charges again (SBI property check, then **government charges** 1-2-3-4).

## First-principles problem
- What must be true: charge math is a **sequence** that **flows with width** — 1-2-3-(4-5) in a row when there is room, wrap when there isn’t — **one repeatable bar**, not each drawer inventing a stack.
- Root vs symptom: “one at a time” / side standard is the symptom of `.hlc-math-sheet-wrap { flex-direction: column }`. The root is **sequence + width**, same as they wanted left/right 1-2-3 tracks on loan amount in earlier clips — now on **charge** rows.
- Constraints: keep the numbered meaning (legal / title / valuation / total; % / min / max). Don’t hide math. Reduced width must still work (they said so).

## Directions they considered
- Stop **one at a time** if width allows **1-2-3-4 split**.
- Reject **standard on the side of the panel**.
- **Came down** + a **line**; not independent blocks.
- **Small bar** + all sequentialities; **repeatable** / **external**.
- **Flow** from the top; okay if width is less.
- Lean: one layout system for property check, processing fee, loan amount (and next, government charges).

## Company / user / future thinking
- User: should read charges the way they read a Flights row (`05`) — sequence, not a homework stack.
- Company: same honesty as the calc they already praised — now the **bars** have to carry it.
- Future: `wb-rec-260816-0013` opens Charges, SBI property check, then **government charges** drawers and Other charges (floating/fixed, MCLR, overdue). Continue the **same flow pattern** there; do not treat this clip’s “it will flow” as finished.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-math-sheet-wrap` / `.hlc-math-block` / `.hlc-math-block-aside` in `css/shroffin-explore-banks.css`; `mathSheet` / `mathBlock` in `src/home-loan-compare.js` — **one** pattern used by processing fee, property check, loan amount (and government charges next clip).
- Acceptance criteria in their words: “this bar 1, 2, 3”; “width of the bar”; “1, 2, 3, 4, it will split”; not “one at a time”; not “standard on the side of the panel”; “don't do this independently”; “repeatable”; “it will flow.”
- What NOT to do: do not build a second card system beside `mathSheet`. Do not only restyle SBI. Do not keep side-legend as the answer. Do not freeze desktop (`min-width: 834px`) while flowing only on phone — they spoke **width**, including this 1366 desktop drawer.
- Open questions: exact wrap breakpoint inside the drawer; whether table-cell magnitude bars (if any in the recording UI) are the same “bar” — speech is timed to **drawer cards**, not to a click on a table sparkline. Connector **line** vs existing `.hlc-math-rule`.
- Related recordings:
  - continues_from: `wb-rec-260815-2355` / earlier loan-amount 1-2-3 sequencing; this clip applies the same idea to **charge** rows
  - continues_in: `wb-rec-260816-0013` — immediately Charges / SBI property check / government charges (more 1-2-3-4 blocks); ASR garbled but they stay on charge drawers then Other charges (floating/fixed, MCLR, overdue)

## Evidence index
- `audio.vtt` 07:13.410–08:38.830
- `audio.json`: **bar** / **split** p≈0.93; **panel** p≈0.93; **repeatable** p≈0.88; **mat** p≈0.11; **flow** p≈0.86 / 0.96
- `events.json`: SBI property check t=421377 (₹15,100); backdrop t=452524; Punjab & Sind property check t=463712 (₹14,700); backdrop t=483158; Overview t=485276; loan amount Punjab & Sind t=487013 (₹48,00,000); backdrop t=521703
- `screenshots/0055.png`–`0058.png`, `0061.png`–`0063.png`, `0065.png`–`0071.png`
- `replay.spec.ts`: SBI `tr:nth-of-type(14) td:nth-of-type(3)`; Punjab & Sind `tr:nth-of-type(11)`; Overview tab; loan amount same row
- On-screen: numbered 1–4 property-check cards; loan-amount steps 1–6 — column stack, no Flights-style flow
