# Reject a bank before taking the loan if one missed EMI costs double — even at 0.1% cheaper

The overdue drawer (`01`) is not a footnote. **Even before taking a loan**, they want to **not take this bank** if **one missed EMI** means **double money**, even when that bank is **0.1% cheaper**. “This is also a part of the **intelligence**.” Rate-shopping without the miss-cost is the thing they are refusing.

## Classification
- kind: issue | product intelligence / compare philosophy
- status: open
- surface: explore-banks / **Other charges** · **Overdue charge** vs the Overview **Rate** column (not on screen this clip; they name **0.1%** as the cheap-rate lure). Table still showing CSB **24.00% p.a.** / Federal **18.00% p.a.** while they talk reject (`0004.png`–`0006.png`).
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. No Speaker B turn in this span.

## Session metadata
- folder: `wb-rec-260816-0029`
- recording id: `1ce6b2c1-5803-4478-9e29-c1f823caae0f`
- clip: 29 of 30
- started_at: 2026-08-15T18:59:02.434Z
- ended_at: 2026-08-15T19:01:28.697Z
- duration_ms: 146263 (~2 min 26 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 17
- event count: 58
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: same take `01` (drawer + extra money + 24%); prior recording `wb-rec-260816-0013` (~6 min earlier)
- next: same take `03` (click underlines); folder `wb-rec-260816-0031` ~9 s after this take ends

## Where on the page
- Still **Other charges**, no tab switch. After the 24% / extra-money lines they idle (~00:32–00:48, `0004.png`–`0006.png` identical) then scroll **down** (y=1499.5 → 1638.5 at 00:52.798–00:54.096) as they say don’t take this bank / intelligence.
- No click on a rate cell. Overview Rate is **not** in this viewport. The **0.1%** is spoken, not read off a row.
- On-screen penalty contrast that makes the speech land: CSB **24.00% p.a.** vs Canara/Central **0%** (conditional) vs Dhanlaxmi **3.00% p.a.** (`0005.png` / `0006.png`, t=40200–48200). Dhanlaxmi’s **0.10%** is a **rate-change** charge (on outstanding, min ₹2,500 · max ₹5,000) — do **not** merge that with the spoken 0.1% interest-rate lure.
- `0007.png` (t=58199, after the scroll): DCB range / IDFC **12.00% p.a. or ₹300** / Indian Bank **2.00% p.a.** — still no 0.1% **rate** cell.
- Screenshots: `0004.png`–`0007.png`.

## What they said (faithful, complete)

**00:35.610–00:50.670** Speaker A:
> Raw ASR: “Even before taking a loan, I need to tell the bank to not take this bank. If it has a 0.1% interest rate, then take that bank. But don't take this bank, because if even one EMI is missed, you have to withdraw double money.”
> Corrected: “Even **before taking a loan**, I need to [be told / tell **the customer**] **not to take this bank**. If it has a **0.1%** [cheaper] interest rate, then take **that** bank. But **don't take this bank**, because if even **one EMI is missed**, you have to **put in / pay double** money.”
> ASR **tell the bank to not take this bank** = the product warning the **borrower**, not a message to the lender. **Withdraw** p≈0.46 → pay/put **double** on the miss, not a cash-withdrawal product. **0.1** p≈0.28 then **.1** p≈0.99. They do not point at a 0.1% cell here.

**00:51.730–00:54.330** Speaker A:
> Raw ASR: “This is also a part of the intelligence.”
> Corrected: same. **Intelligence** p≈0.56. = reject/warn on **miss cost**, not only pick the lower rate. The extra-money restatement that immediately follows is `03` (how you know the number).

No Speaker B. They do not name J&K / IndusInd in this span (`04`).

## First-principles problem
- What must be true: **before** sanction, the compare can say **don’t take this bank** when one miss costs **about double**, even if the rate is **0.1%** better.
- Root vs symptom: a tidy overdue % column is a symptom. The root is **intelligence = rate × miss-penalty**, and miss-penalty must be a **month’s extra rupees** (`01`), not “24.00% p.a.” in a vacuum.
- Constraints: they still allow taking the cheaper bank **if** the miss cost is not savage. The rule is **don’t let 0.1% win against double-on-a-miss**. They do not name a specific pair of banks here (J&K vs IndusInd is `04`).

## Directions they considered
- Warn **before taking the loan** (not after the bounce).
- Counter-example they accept: **0.1% cheaper → take that bank** *unless* one miss costs **double**.
- Name it **intelligence** (“this is also a part of”).
- Lean: a compare rule / tip, fed by the `01` calc. Not a request to hide high-penalty banks from the table.

## Company / user / future thinking
- User: otherwise takes the 0.1% cheaper line and only learns the 24% / double bill **after** a miss.
- Company: Shroffin intelligence is not “lowest rate.” It is **don’t walk into a bank where one missed EMI costs double**. Same product word as earlier takes (intelligence as a product, not “AI”). `04` says put **labels** (least / highest penalty) **on the intelligence**. `07` closes: “this intelligence, which is already visible here” — the table already shows the spread; the missing piece is the **advice + rupee total**.
- Future: `03` is the click into the number. `04` names the example banks. `06` folds bounce into the double. Do not close this in 0031 (that clip is lawyer language / MCLR / scheme names).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Other-charges compare + the not-yet-built **intelligence** tips. Inputs: overdue rupee-for-one-miss from `01`, plus EMI bounce (`06`), versus Overview rate. No new column required in this clip’s words — they want a **tell / don’t take** on top of numbers already in the table.
- Acceptance criteria in their words: “even before taking a loan… not take this bank”; “if it has a 0.1% interest rate, then take that bank”; “if even one EMI is missed, you have to [pay] double money”; “this is also a part of the intelligence.”
- What NOT to do: do not auto-hide high-penalty banks. Do not treat 0.1% as Dhanlaxmi’s rate-change fee. Do not call it AI. Do not skip the `01` calc and only paint a badge. Do not treat the 00:54 extra-money restatement as this file (`03`).
- Open questions: what “double” means in math (2× EMI? EMI + overdue ≈ 2×?). Whether the warn is a row label (`04`), a tip above the list, or both. Threshold: only ~2×, or any miss cost that swamps 0.1% rate.
- Related recordings:
  - continues_from: `wb-rec-260816-0013` (need the overdue rupee calc) and same take `01` (drawer is how you know the extra money)
  - continues_in: same take `03` (underlines / drawer like that), `04` (J&K least / IndusInd highest — feed those labels to intelligence), `07` (“intelligence already visible here”)

## Evidence index
- `audio.vtt` 00:35.610–00:54.330
- `audio.json` segments 6–9 (0.1%; withdraw double; intelligence)
- `events.json`: idle 00:32–00:48; scroll y=1499.5 t=52798; y=1638.5 t=54096
- `screenshots/0004.png`–`0007.png`
- On-screen while they talk: CSB **24.00% p.a.** still in the list; no 0.1% **rate** cell in frame
