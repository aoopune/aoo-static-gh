# Plus or info, small — do not make people guess the underline

Back on the table they hunt how you are supposed to know More details exists. Bank of Maharashtra is not the underlined control. Put **info** / a **plus** — it must not be big, not huge on the phone, not a fat extra column. Dotted underline fails “how would I guess this is clickable?”

## Classification
- kind: issue | discoverability / affordance
- status: open
- surface: Explore banks table row 1 (Bank of Maharashtra): dotted-underline bank name `.hlc-bank-name-text`, grey scheme + **More** (`More about Bank of Maharashtra`) already showing a blue circled **plus**. Dotted-underline **₹48,00,000** and **₹37,938** are the other clickables (`04`). CSS comment in source: “ink digits + blue dotted underline (cue without painting the whole number as a navigation link).”
- viewport: 1366x768 @2x (they also say the cue must not get big **on the phone**)
- speakers: Speaker A leads. ASR not diarized.

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
- previous: `02` in this folder (facts belong in the product — now: how you **see** the door). `wb-rec-260815-2332` already had More + plus on the scheme line.
- next: `04` (loan amount vs bank are two different destinations). `wb-rec-260815-2355` `12` later argues Dash vs Apple underline on Charges.

## Where on the page
- Drawer closed **03:24.458** (`0030.jpg`): Overview table fully visible. BoM **Maha Super Housing Loan. More ⊕**. Rate 7.25%. Loan amount **₹48,00,000** dotted blue underline. Tenure **20**. EMI **₹37,938** dotted underline. Form Tenure **20 years**. 23 selected / Apply once.
- **03:39.074** they click **More** (`0032.jpg`) then Scheme summary **03:42.287**; close **03:47.120** (`0034.jpg`) — proving the overlay “blocks” the table.
- Screenshots while they brainstorm the cue: `0030.jpg`–`0037.jpg`. **More** is already the word “More” plus a circled plus. Bank name “Bank of Maharashtra” is **not** the obvious underlined control.
- Two destinations are demonstrated in `04`; this file is only the **size and guessability** of the mark.

## What they said (faithful, complete)

**03:23.650–03:31.890** Speaker A (drawer just closed; looking at the BoM row):
> Raw ASR: “The bank of Maharashtra didn't underline it. They put a clip in it. Then, it got blocked.”
> Corrected: “The Bank of Maharashtra didn't underline it. They put a **click** in it. Then it got **blocked** [by the drawer].”
> ASR **clip** p≈0.92 (high) but they immediately click **More** and the overlay covers the table — **click** is the action; **blocked** = backdrop/drawer. Alternate: they meant the **plus/info mark** (“clip”) on More. Either way: the **bank name** is not the obvious underlined control; More is.

**03:34.670–03:50.690** Speaker A:
> Raw ASR: “I am told that there is more important information. But, I am told that it is the same information. It is not important information. I am told that you should see this too.”
> Corrected: same sense — the UI implies there is **more**, but it is not obvious **what** is more, or that it is the **same** scheme book they just praised. “See this too” = a second place (calc vs details) — unpacked in `04`.

**03:52.490–04:12.990** Speaker A:
> Raw ASR: “ADD.info ADD.info It should not be big. It should not be on the phone. Column should not be big. You have to put the plus sign. How to guess underline?”
> Corrected: “**Add info** / **info**. It should not be big. It should not be [huge] on the phone. Column should not be big. You have to put the **plus** sign. How to guess underline?”
> ASR **ADD.info** twice (**ADD** p≈0.40 / 0.50; **.info** p≈0.69 / 0.84). On-page they already have a small plus on More. Direction: a **small** plus or info mark — **not** a new wide column, **not** a large mobile control. Dotted underline fails the “how would I guess this is clickable?” test. **plus** p≈0.23, **sign** p≈0.96; **guess** p≈0.85, **underline** p≈0.48.

They then click ₹48,00,000 (`04`) to show the other destination. Do not treat this span as a request to merge calc and More.

## First-principles problem
- What must be true: the customer can **see** that a name or number opens something, without having to guess that a dotted line is a button.
- Root vs symptom: the drawers already exist (`01`–`02`). The failure here is the **cue** (dotted underline + vague “more”), not missing data.
- Constraints: small mark; no fat extra column; must work on the phone without a large extra control.

## Directions they considered
- Dotted underline: rejected as something you have to **guess**.
- Big column / big phone control: rejected.
- **Plus** sign or small **info**: preferred (they name both).
- Lean: keep the click target; fix the signal so it is small and obvious.

## Company / user / future thinking
- User: will not click a dotted number or a grey scheme line unless they know it is a door.
- Company: Shroffin’s honesty is the scheme book (`01`) and the calculation (`07`). If those are invisible, the table is just rates.
- Future: `04` splits the two doors. `05` says tell people what is inside. `wb-rec-260815-2355` `12` later defines Dash as linking vs index stars.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-bank-name-text` and calculated-amount buttons in `css/shroffin-explore-banks.css` (dotted underline ~3300); More button in the lender cell (`More about Bank of Maharashtra`); `src/home-loan-compare.js` table cell render.
- Acceptance in their words: you should not have to “guess underline”; plus/info “should not be big”; “should not be on the phone”; “column should not be big.”
- What NOT to do: do not add a wide extra column. Do not make a large mobile-only blob. Do not remove More or the calc. Do not treat the existing circled plus as “already done” without checking whether people still have to guess the underline.
- Open questions: plus vs info icon (they named both). Whether bank name itself should be the control.
- Related recordings:
  - continues_from: `02` (facts belong in the product)
  - continues_in: `04` (two destinations). `wb-rec-260815-2355` `12` (Dash vs Apple underline)

## Evidence index
- `audio.vtt` 03:23.650–04:12.990
- `audio.json`: ADD.info; draw/clip; plus sign; guess underline
- `events.json`: backdrop t=204458; More t=219074; Scheme t=222287; close t=227120
- `screenshots/0030.jpg`–`0037.jpg`
- `replay.spec.ts` More / backdrop
- CSS: `.hlc-bank-name-text` dotted underline
