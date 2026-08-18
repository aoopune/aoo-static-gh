# The customer does not ask for the bank

After “show banks and intelligence” they add the customer’s actual question: **mostly, the customer does not ask for the bank.** They click **See options** in the same beat — the control that reveals the lender table — so the line is about **why that table exists**, not a request to hide banks.

## Classification
- kind: issue | product-thinking
- status: open
- surface: explore-banks / `#hlc-see-options` (“See options”) submitting `form#hlc-inputs` into **Bank options** (Overview: Lenders / Rate / Loan amount / Tenure / EMI)
- viewport: 1366x768 @2x
- speakers: Speaker A. Speaker B not a separate turn. ASR not diarized; language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2249`
- recording id: `55f40b18-3bf3-46a3-b169-7adabe6886b1`
- clip: 19 of 30
- started_at: 2026-08-15T17:19:17.338Z
- ended_at: 2026-08-15T17:21:34.102Z
- duration_ms: 136764 (~2 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 20
- event count: 43
- console: empty
- tabs: 1
- previous: `02` (must still show banks and intelligence)
- next: `04` (optional columns vs cannot go) after ~21 s of accordion clicking; `wb-rec-260815-2240` `10` already said See options is not “see banks”

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Click/focus:
  - Extra block still **open** through `0005.jpg` (t=32186)
  - **00:35.477** click `#hlc-see-options` (`0006.jpg`, t=35880) — Bank options table: Canara 8.80% / ₹5,400 / 20 yrs / EMI ₹48; City Union, PNB, Baroda, BOI, IOB
  - Speech **00:33.710–00:37.950** overlaps that click
- Then idle ~21 s until `04`: they scroll and toggle Adjust eligibility (`0007.jpg` collapsed + table at t=43034) without a new sentence.
- Leftover ₹6,000 property still makes every loan ₹5,400 — they do not name that glitch in this span.

## What they said (faithful, complete)

**00:33.710–00:37.950** Speaker A:
> Raw ASR: “And this is mostly the case that the customer does not ask for the bank.”
> Corrected: same. **ask** ~0.19; **bank** ~0.92. **Mostly** = typical person, not a rare edge.
> Meaning with `02` + `04`: people do not arrive saying “give me Canara.” They decide **loan amount** and **EMI** (`04`). Banks are the result of those facts, not the first ask.

Speaker B: none in this span. Example on screen: the Overview lender list they just submitted into. Pros they imply: keep banks (`02`) but do not design the page as if “which bank?” is the customer’s opening question. Cons: a See options / bank table that pretends that *is* the ask (2240 `10`).

They do not name a bank. They do not say remove the table.

## First-principles problem
- What must be true: the page can **show banks** (`02`) without treating “pick a bank” as the customer’s first job. The first job is the numbers that change the offer (`04`, `05`).
- Root vs symptom: not a missing bank logo. The root is **what question the UI answers**. See options answers “see lenders.” They say that is not what the customer asked.
- Constraints: still show banks and intelligence (`02`); extras still matter (`04`).

## Directions they considered
- One observation, not a widget sketch: customer ≠ bank-shopper at the door.
- Lean: product philosophy, same family as 2240’s opinionated tool. They prove it by clicking the control that currently *does* “ask for the bank.”

## Company / user / future thinking
- User: wants “how much loan / how much EMI” (`04`). The bank list is downstream.
- Company: Shroffin compares lenders; it does not start the conversation as a bank picker. Intelligence is the extra columns and the offer math, not a brand grid.
- Future: `04`–`05` inventory which extra fields everyone actually has. `2302` then argues those hidden facts still change the offer (credit-card rejection story).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Explore banks framing — `#hlc-see-options` label and what it promises; Loan inputs vs Bank options order. 2240 already forbade “See options” as the name for this submit.
- Acceptance criteria in their words: “the customer does not ask for the bank.”
- What NOT to do: do not hide the bank table to “agree.” Do not treat this as “people never care which bank.” Do not use leftover identical ₹5,400 rows as the evidence for this sentence.
- Open questions: if they are not asking for a bank, what should See options / the first screen promise? Unanswered here; 2240 wanted the button **below** the extra block, centered, and not named See options.
- Related recordings:
  - continues_from: `02`; `wb-rec-260815-2240` `10`–`11` (See options wording and placement)
  - continues_in: `04` (they decide loan amount and EMI — that is the ask)

## Evidence index
- `audio.vtt` 00:33.710–00:37.950
- `audio.json`: **ask** ~0.19; **customer** ~0.69; **bank** ~0.92
- `events.json`: See options click/submit t=35477 (`0006.jpg`); scroll y=249.5 t=38432
- `screenshots/0005.jpg`–`0007.jpg`
- `pages.json`: Bank options, Filters, Overview
- `replay.spec.ts`: second `#hlc-see-options` click
- `manifest.json` viewport 1366×768 @2x; `console.json` `[]`
