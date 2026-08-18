# When people are told what is inside, they click

They reopen loan amount, EMI, and the bank name to prove all three are clickable. The rule: **say what is inside**, then people click. “If you want to know more about the Bank of Maharashtra, click it.” Same cue, named destination.

## Classification
- kind: issue | copy / affordance (label the door)
- status: open
- surface: Overview BoM row: dotted **₹48,00,000**, dotted **₹37,938** (`Show how emi for Bank of Maharashtra was calculated`), bank-name span `.hlc-bank-name-text`, **More**. EMI drawer (opened ~2 s): Step 1 monthly rate 7.25%/12 = 0.6042%; Step 2 EMI formula with **^240**; EMI shown **₹37,938**.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized.

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
- previous: `04` (two destinations)
- next: `06` (More on Super Housing Loan is misleading). EMI **math** continues in `wb-rec-260815-2355` `08`–`10`, not here.

## Where on the page
- **05:10.588** loan amount again (`0047.jpg`); close **05:13.521**
- **05:16.490** EMI ₹37,938 (`0049.jpg`) — EMI drawer, two steps, **240** in the formula; close **05:18.255** (~2 s — a click demo, not an EMI-math review)
- **05:20.627** / **05:24.225** bank-name span (`0051.jpg`–`0052.jpg`) — dotted underline on “Bank of Maharashtra”; table Tenure **20**, EMI **₹37,938**, More ⊕ still on the scheme line
- Speech **04:45–05:22** sits on this reopen pass after calling More a dump (`04`).
- Screenshots: `0044.jpg`–`0052.jpg`.

## What they said (faithful, complete)

**04:45.510–05:22.240** Speaker A (loan amount, EMI, then bank name):
> Raw ASR: “It is clickable. It is the same. Generally, when people are told what is inside, they click it. Click it. If you want to know more about it, click it. If you want to know more about it, click it. If you want to know more about the bank of Maharashtra, click it.”
> Corrected: same. Rule they want: **say what is inside**, then people click. They prove loan amount, EMI, and bank name/More are all clickable. “It is the same” = same kind of door (click opens a drawer), not the same contents (`04` already split calc vs dump).
> Clicks line up: “know more about it, click it” over loan amount **05:10** and EMI **05:16**; “know more about the Bank of Maharashtra, click it” over the bank-name span **05:20**.

They do not ask to change the EMI formula here. They do not ask to drop any of the three clickables.

## First-principles problem
- What must be true: before clicking, the customer knows **which** something will open (scheme book vs how ₹48L was calculated vs how EMI was calculated).
- Root vs symptom: `03` is guessability of the underline. This file is **preview copy**. A plus that does not say “calculations” vs “scheme” still dumps people into the wrong drawer.
- Constraints: keep three destinations distinct. EMI click is a real third door (they opened it).

## Directions they considered
- Label what is inside (“if you want to know more about X, click”) so people actually click.
- Same clickable pattern on loan amount, EMI, and bank/More.
- Lean: the cue (`03`) plus a **named** inside. `06` then says “More” on Super Housing Loan fails that test.

## Company / user / future thinking
- User: will not click a dotted ₹48,00,000 unless they know it explains the money. Will not click More unless they know it is the scheme they take to the manager (`01`).
- Company: honesty is useless if it is unlabeled.
- Future: `06` is the Super Housing Loan “More” being misleading. `wb-rec-260815-2355` `11` praises click → open immediately / slide.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: accessible names already exist (`Show how loan amount … was calculated`, `Show how emi …`, `More about Bank of Maharashtra`) — **visible** label is the gap; `src/home-loan-compare.js` table cells.
- Acceptance in their words: “when people are told what is inside, they click”; “if you want to know more about the Bank of Maharashtra, click it.”
- What NOT to do: do not hide the EMI click. Do not make all three open the same dump. Do not treat this as EMI-formula work (`09` / 2355).
- Open questions: exact visible strings for the three doors (they gave the pattern, not final copy).
- Related recordings:
  - continues_from: `04`
  - continues_in: `06`. `wb-rec-260815-2355` `11` (click opens immediately)

## Evidence index
- `audio.vtt` 04:45.510–05:22.240
- `events.json`: loan amount t=310588; EMI t=316490; bank-name t=320627, 324225
- `screenshots/0047.jpg`, `0049.jpg`, `0051.jpg`–`0052.jpg`
- `replay.spec.ts` EMI button + bank-name span
- EMI drawer on `0049.jpg`: ^240 still in months (tenure label is `09`)
