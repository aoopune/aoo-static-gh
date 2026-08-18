# Show how an overdue is made — days, notice, collection, and a calculation you can put numbers on

They leave the rate-change note, scroll **Overdue charge ‡**, and click cells that do **not** open a drawer. **What is 5%? I need a calculation here. This does not have a calculation.** Show **how an overdue is made**: after a miss, **how much money**, **how much charge**, **how many days to notice**, **how many days to a collection agency**. **Show me the calculation** — meaning they can put **their** data on top of it.

## Classification
- kind: issue | calc drawer / missing story
- status: open
- surface: explore-banks / **Other charges** / column **Overdue charge ‡** (`#hlc-th-overdueChargeDisplay`) / note `details#hlc-charge-note-overdue-charge` / cells `tbody#hlc-compare-body tr td:nth-of-type(4)` — clicks on **row 30 Tamilnad Mercantile 2.00% p.a.** and **row 29 SBI 2.40% p.a.** do not open `#hlc-drawer`
- viewport: 1366x768 @2x
- speakers: Speaker A (“I need…”, “I don't know” ×3). **No, bro** at the start of `08` may be B. ASR not diarized.

## Session metadata
- folder: `wb-rec-260816-0013`
- recording id: `924b010f-fab9-4953-ba2d-7edc0de4e239`
- clip: 28 of 30
- started_at: 2026-08-15T18:43:33.349Z
- ended_at: 2026-08-15T18:52:58.320Z
- duration_ms: 564971 (~9 min 25 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 82
- event count: 180
- console: empty
- tabs: 1
- previous: `06` (lawyer voice on rate-change notes)
- next: `08` in this folder (2% **p.a.** vs **next month** rupees); then `wb-rec-260816-0029` after ~6 min — **drawer + calculation for every overdue type**

## Where on the page
- **07:24.700** collapse/toggle rate-change note. Scrolls **07:33–07:54**. `0067.png` (~07:52): City Union **5.00% p.a.**, CSB **24.00% p.a.**, DCB **Fixed amount by overdue range >**, Federal **18.00% p.a.** — likely when they ask “What is 5%?”
- **07:58.319** open note for mark **‡** / `details#hlc-charge-note-overdue-charge`. `0068.png`: IndusInd **24.00% p.a. or ₹100**, J&K **0.20% p.a. or ₹200**, Karur Vysya **5.00% p.a.**, Nainital **2.00% p.a.**
- **08:09.973** click row **30** overdue span → Tamilnad Mercantile **2.00% p.a.** (`0070.png`, row selected). **08:12.982** / **08:14.097** row **29** → SBI **2.40% p.a.** (`0071.png`, **2 selected**). **08:15.044** row 30 again. **No drawer.** Code path `openChargeSlabs` is for range slabs (DCB `>`); percentage spans are text.
- Drawer foot elsewhere already admits: “Published rules are shown **without estimating an event-specific amount.**”
- They do not click DCB’s range link in this take. EMI bounce stays a sibling column (0029 `04` will add it to the total).

## What they said (faithful, complete)

**07:27.940–07:42.230** Speaker A (scrolling overdue):
> Raw ASR / corrected: “What is 5%? What is it? What is it? What is it?”
> **5** p≈0.68, **%?** p≈0.82. On screen around this time: **5.00% p.a.** (City Union / Karur Vysya / later ICICI). They do not name the bank. This is the start of “what does this percent **mean in rupees?**”

**08:10.850–08:15.410** Speaker A (clicking TMB / SBI cells that do nothing):
> Raw ASR / corrected: “What is it? I need a **calculation here**. This does **not** have a calculation.”
> Timed to the dead clicks (`0070.png`–`0073.png`). **calculation** p≈0.99.

**08:16.530–08:38.370** Speaker A:
> Raw ASR: “No, you have to show how an overdue is made. I want to know should I overdue after missing And how much money should I overdue? And how much charge should I get? And how many days should I send notice? And how many days should I get a collection agency?”
> Corrected: “No, you have to show **how an overdue is made**. I want to know [what happens] **after missing** [an EMI]. And **how much money** should I [owe] overdue? And **how much charge** should I get? And **how many days** should I send **notice**? And **how many days** should I get a **collection agency**?”
> **how an overdue is made** p≈0.34/0.85/0.58. **collection agency** p≈0.95/0.99. Sequence they want: miss → overdue rupees → extra charge → notice days → collection days.

**08:41.110–08:56.870** Speaker A:
> Raw ASR: “I don't know. I don't know. I don't know. I am just saying that I have missed You should know something. There is no monitoring value. It doesn't matter. Show me the calculation.”
> Corrected: “I don't know” (×3). “I am just saying that I have **missed** [an EMI]. You should know something. There is no **monthly** value [ASR **monitoring** p≈0.003]. It doesn't matter. **Show me the calculation.**”
> **missed** p≈0.32. **monitoring** is noise; next file is explicitly p.a. vs **next month**. **Show me the calculation** p≈0.14/0.90/0.82/0.76.

**09:02.380–09:06.220** Speaker A:
> Raw ASR: “Calculation means I can put the data on top of my calculation. Why?”
> Corrected: “**Calculation** means I can put **the data on top of** my calculation. Why?”
> They want **inputs** (missed EMI / days late) driving the same story — not a static “2.00% p.a.” label. **Why?** = why doesn’t this cell do that?

`08` starts at “No, bro. How did you get 2%?”

## First-principles problem
- What must be true: “overdue” is a **timeline with rupees**, not a published percent. After **one miss**, the customer must see **extra money**, **extra charge**, **notice**, **collection**.
- Root vs symptom: dead underlines and “published rules without an event-specific amount” are the symptom. The root is **no making-of** for an overdue (the same job property-check / government drawers already do with 1-2-3-4).
- Constraints: keep the published % / grace / floor text. DCB’s range drawer is one type, not the whole answer (`0029` will say **every type**). Bounce is not this clip’s total.

## Directions they considered
- A **calculation here** (on the overdue cell they clicked).
- Story of **how an overdue is made**.
- After a **miss**: money overdue, charge, **days to notice**, **days to collection agency**.
- Customer can **put data on top** of that calculation.
- Lean: this is the overdue twin of the charge drawers they already like. `08` then fixes the **unit** (% p.a. vs next month).

## Company / user / future thinking
- User: “I missed” is the only scenario they name. The table currently answers with a year-rate.
- Company: showing 2% next to 24% without a month’s bill hides which bank is dangerous — the honesty 0029 will call intelligence.
- Future: `08` is the unit. `wb-rec-260816-0029` names the **drawer** and **every type**. Do not treat this clip’s “show how” as finished in 0029’s first file without the notice/collection days they asked here.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `src/home-loan-compare.js` `overdueChargeDisplay`, `openChargeSlabs` (today slabs only), `openCalculation` / math-sheet pattern used for government and property check; Notes `#hlc-charge-note-overdue-charge`; foot copy “without estimating an event-specific amount.” Clicks on `tr td` percent spans must do something. CSS: underlined charge figures vs `.hlc-charge-rule` links.
- Acceptance criteria in their words: “I need a calculation here. This does not have a calculation.” “Show how an overdue is made.” “How much money… how much charge… how many days should I send notice… collection agency.” “I can put the data on top of my calculation.” “Show me the calculation.”
- What NOT to do: do not only expand the ‡ note. do not treat TMB 2% vs SBI 2.40% as the bug (they clicked both because **neither** calculates). do not skip notice/collection days. do not invent a 24-row UI from CSB 24% (`0029` mis-ASR “24-step”). do not ship the calc only on DCB `>`.
- Open questions: default inputs when they “put data on top” (one missed EMI, how many days late). Whether notice/collection days are in the dataset or must be labelled unpublished. Whether bounce joins this same calc (0029 `04` says yes in the **total**).
- Related recordings:
  - continues_from: `06` (they leave legal notes for overdue)
  - continues_in: `08` (2% p.a. vs next-month amount)
  - continues_in: `wb-rec-260816-0029` `01` (drawer + calc for every overdue type)

## Evidence index
- `audio.vtt` 07:27.940–09:06.220
- `events.json`: ‡ note t=478319; tr:nth-of-type(30) t=489973; tr:nth-of-type(29) t=492982 / 494097; tr 30 again t=495044
- `screenshots/0067.png`–`0073.png` (5%, 24%, TMB 2.00%, SBI 2.40%; no drawer)
- `replay.spec.ts`: those same `td:nth-of-type(4) > span > span` clicks
- `src/home-loan-compare.js` `openChargeSlabs`; drawer foot “without estimating an event-specific amount”
