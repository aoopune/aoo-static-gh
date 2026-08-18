# Arrange the viewers — Step 1, Step 2, then carry ₹55,000 into Step 3

The clip opens already inside Bank of Maharashtra’s **Loan amount** drawer. They pick up the last recording’s two-track idea and say the person looking must see **Step 1** then **Step 2**. If **₹55,000** can **carry**, they can do **the next step 3**. They tap **Loan amount shown**, call it amazing, close, and open the same cell again to walk it.

## Classification
- kind: issue | layout / calc story
- status: open
- surface: `#hlc-drawer` titled **Loan amount** / Bank of Maharashtra · Maha Super Housing Loan. Six numbered boxes. Step 2 result **₹55,000** (income allowance) must feed later boxes. They double-click footer `div#hlc-drawer-body > div:nth-of-type(2) > strong` (**Loan amount shown ₹48,00,000**).
- viewport: 1366x768 @2x
- speakers: Speaker A directs the layout. Short **“Okay, okay”** (00:22.800) is likely Speaker B. ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2355`
- recording id: `2136e699-2334-4e39-a724-eb3e92e1d3bd`
- clip: 26 of 30
- started_at: 2026-08-15T18:25:24.871Z
- ended_at: 2026-08-15T18:34:41.661Z
- duration_ms: 556790 (~9 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 92 (`0000.jpg`–`0091.jpg`; mix of JPEG and PNG)
- event count: 200 (click / focus / idle / scroll only)
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- pages.json: empty — landmarks taken from screenshots + events
- previous: `wb-rec-260815-2341` ended 2026-08-15T18:20:59.868Z (~4 min 25 s earlier) — color-code which limit wins; **minimum of 2**; left-side / right-side **1-2-3**; keep the **20%**. Same drawer still open when this clip starts.
- next: `wb-rec-260816-0004` starts 2026-08-15T18:34:46.547Z (~5 s later) — processing fee in one sentence. This clip already opens Indian Bank’s ₹2,500 processing drawer at 09:07.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` — title “Explore banks – Shroffin”
- Drawer already open at t=0 (`0000.jpg`–`0003.jpg`). On-page copy in the recording:
  1. **Property limit** — ₹60,00,000 × **80.00%** = **₹48,00,000**
  2. **Income allowance** — ₹1,00,000 × **55.00%** = **₹55,000**
  3. **Credit-card load** — ₹0 × 10.00% = ₹0
  4. **Monthly EMI available** — ₹55,000 − ₹555 − ₹0 = ₹54,445
  5. **Income limit** — ₹54,445 / month, **7.25%**, 240 months = ₹68,88,494 (“Standard EMI formula.”)
  6. **Lowest of these limits** — ₹48,00,000 vs ₹68,88,494 → **₹48,00,000**
  - Footer: **Loan amount shown ₹48,00,000**
- Form behind the drawer: Existing EMIs **₹555**; Credit card limits **₹0** (“About **10%** counts as monthly load”); Co-applicant **No**. Table: Bank of Maharashtra Maha Super Housing Loan **7.25%** / **₹48,00,000**.
- Click/focus (speech ↔ events):
  - **00:25.420 / 00:25.658** double-click footer `strong` (`0003.jpg`) while they say “Loan amount”
  - **00:36.887** click `#hlc-drawer-backdrop` (`0005.jpg`) — drawer closes
  - **00:39.319** reopen `getByRole("button", { name: "Show how loan amount for Bank of Maharashtra was calculated" })` text ₹48,00,000 (`0006.jpg`) — “I'll just show you”
- The 1→5 box taps start at **00:42** and belong to `02`. Credit-card and FOIR talk is `04` / `05`.

## What they said (faithful, complete)

**00:04.800–00:07.080** Speaker A:
> Raw ASR: “We need to arrange the viewers.”
> Corrected: same shape. **viewers** p≈0.68; **We** p≈0.02. On screen they are staring at the six-step stack. Prev clip asked for left/right tracks. Treat as: arrange how the **person looking** sees the steps — not a new page named Viewers. Do not invent a “viewer mode.”

**00:12.440–00:18.760** Speaker A:
> Raw ASR: “Step 1. Step 2. If we can carry 55,000, we can do the next step 3.”
> Corrected: **Step 1. Step 2.** If we can **carry ₹55,000**, we can do the **next step 3**.
> ₹55,000 is on-screen Step 2 (income allowance). Step 3 is Credit-card load. **Carry** = the ₹55,000 must remain visible and usable in the next box, not vanish after Step 2. This “next step 3” is not the “next step” in `02` (that one is after 1–5).

**00:22.800–00:23.630** Speaker B (likely):
> Raw ASR / corrected: “Okay, okay.”

**00:24.820–00:35.160** Speaker A, while hitting the footer then closing:
> Raw ASR: “Loan amount. We are getting a lot of loans. Bro, it's amazing. It's amazing. I'll just show you.”
> Corrected: **Loan amount.** They click **Loan amount shown**. “We are getting a lot of loans” — **lot** p≈0.08; they may mean the **loan amount** figure, not “many loans.” **amazing** on the second pass p≈0.05 — still praise for this drawer. **I'll just show you** matches the close + reopen at 00:36–00:39.

## First-principles problem
- What must be true: Step 2’s **₹55,000** has to stay in the story so Step 3 (and Step 4) can use it. The viewer should read **1 then 2 then 3**, not a pile of equal boxes.
- Root vs symptom: tapping the footer and calling it amazing is not the request. The root is **arrangement + carry** — leftover from 2341’s left/right 1-2-3.
- Constraints they implied: keep the numbered steps; make ₹55,000 the thing that **carries**.

## Directions they considered
- Arrange the view as **Step 1, Step 2**, then **carry ₹55,000** into **Step 3**.
- Lean: layout of the same six-step drawer, not a new calculator.
- They do **not** yet ask why Step 6 exists (`02`), what 80% / 7.25% are (`03`), or to color the winning limit (that was 2341).

## Company / user / future thinking
- User: opened this cell to see **why the table says ₹48L**. They need to follow money from income share (₹55,000) into the next deduction, not hunt which box is “the answer.”
- Company: Shroffin shows the calculation, not a magic total. A step that cannot carry its result fights that honesty.
- Future: `02` asks what the step after 1–5 is for; `06` names lower-of ₹48L vs ₹68L. Do not fold those into this carry-₹55,000 ask.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `src/home-loan-compare.js` `loanAmountCalculationHtml` and the recorded six-step stack in `#hlc-drawer-body`. Footer strong is **Loan amount shown**. Table opener: `tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(3) > button` (loan amount cell).
- Acceptance criteria in their words: “arrange the viewers”; “Step 1. Step 2.”; “If we can carry 55,000, we can do the next step 3.”
- What NOT to do: do not treat “next step 3” as Step 6. Do not hide ₹55,000 after Step 2. Do not ship 2341’s color tracks as if they were decided in this span. Do not change the ₹555 existing EMI leftover.
- Open questions: “viewers” vs a clearer “view / figures” label. Whether carry is a visual connector, a repeated ₹55,000 in Step 3/4, or the two-track layout from 2341.
- Related recordings:
  - continues_from: `wb-rec-260815-2341` `06` — color-code; min of 2; left/right 1-2-3
  - continues_in: `02` (why the step after 1–5 is useful)

## Evidence index
- `audio.vtt` / `audio.txt` / `audio.text` 00:04.800–00:35.160
- `audio.json` words: viewers p≈0.68; 55 + ,000 p≈0.73/0.70; step 3 p≈0.48; lot p≈0.08
- `events.json`: footer clicks t=25420 / 25658; backdrop t=36887; reopen loan-amount t=39319
- `screenshots/index.json` + `0000.jpg`–`0006.jpg`
- `RECAP.md` timeline 00:25–00:39; `pages.json` empty; `console.json` `[]`; `tabs.json` 1 tab
- `replay.spec.ts`: `#hlc-drawer-body > div:nth-of-type(2) > strong`; `#hlc-drawer-backdrop`; loan-amount cell button
- `manifest.json` viewport 1366×768, dsf 2; mic true
- Site `pages/explore-banks.html` `#hlc-drawer` / `#hlc-drawer-body`
