# Click opens immediately — then it slides; select follows

They leave the philosophy (`10`) and state the interaction rule. **If you click it, it will open immediately.** Then it will **slide** and **select**. They prove it: close, reopen EMI, reopen Loan amount, **Show 23 more banks**, tap the freshness note, tap row 1, then the Lenders header **select-all / deselect** marks. They call that **very nice**.

## Classification
- kind: issue | interaction / motion
- status: open
- surface: dotted-underline amount buttons (loan amount / EMI) that open `#hlc-drawer`; `button#hlc-show-more`; `#hlc-freshness-note`; `th#hlc-th-bank` select-all SVGs; first body row.
- viewport: 1366x768 @2x
- speakers: Speaker A. “Very nice / Very nice one” may include B. ASR not diarized.

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
- previous: `wb-rec-260815-2341` already wanted a click cue (underline + plus, not a dump)
- next: `wb-rec-260816-0004`

## Where on the page
- Speech **05:44.950–05:51.390** while they have just closed Loan amount and are on Overview (`0052.png` after Show more).
- Clicks in this span:
  - **05:39.617** `button#hlc-show-more > span` — accessible name **Show 23 more banks** (`0052.png`). Status **23 selected** / **Apply once**.
  - **05:48.524** `#hlc-freshness-note` (`0054.png` — “Data last checked on 14 July 2026”)
  - **05:55.348** first body cell `tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(1) > div`
  - **05:56.608** `th#hlc-th-bank` first SVG — **Select all visible banks** (`0056.png`)
  - **05:57.230** second SVG — **Deselect all visible banks** (`0057.png`)
  - **05:58.359** `getByRole("main")` (`0058.png`)
- Amount cells already used earlier: loan amount **00:39**, EMI **02:19** / **05:14** — those are the “click it → drawer” proofs. Dotted underline on ₹48,00,000 and EMI is visible in `0046.png` / `0052.png`.

## What they said (faithful, complete)

**05:44.950–05:51.390** Speaker A:
> Raw ASR: “I think if you click it, it will open immediately. Then it will slide and select.”
> Corrected: same. **click** p≈0.72; **open** p≈0.56; **immediately** p≈0.49; **slide** p≈0.72; **select** p≈0.26.
> **Immediately** = the drawer (or more-banks list) must start **now**, not after a thinking pause. **Slide** = the panel motion they just watched. **Select** is weaker ASR — they then **do** select-all / deselect, so keep select as a real action they tested, not as a command to auto-select a bank.

**06:02.900–06:12.790** Speaker A (or B):
> Raw ASR / corrected: “Very nice one. Very nice. Very nice one.”
> Praise for this click/slide behavior (and the table they expanded). Empower copy in `10` starts at 06:19, after this praise.

## First-principles problem
- What must be true: a click on a calculated amount (or the more-banks control) **opens at once** and the panel **slides**. Selection is a separate, visible control — not a mystery delay.
- Root vs symptom: extra taps on freshness / header SVGs are exploration. The root is **time-to-open + slide**, leftover from 2341’s “how to guess underline.”
- Constraints: keep the dotted amount as the opener (`12` debates dash vs Apple underline). Don’t make click feel like a page reload.

## Directions they considered
- Click → **open immediately** → **slide**. They also exercise **select all / deselect**.
- Lean: interaction quality on existing openers, not a new button.
- They do **not** ask to remove Show 23 more, or to change Apply once.

## Company / user / future thinking
- User: if the “revolutionary” math (`10`) opens late, they will never see it.
- Company: honesty that you cannot reach is decoration.
- Future: Charges amounts use the same dotted cue (`12`). Same immediately/slide rule should apply when they open processing fee at 09:07.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: amount buttons (`.hlc-charge-amount` / loan-amount / EMI cell buttons), `#hlc-drawer` slide, `#hlc-show-more`, header select-all in `th#hlc-th-bank`.
- Acceptance criteria in their words: “if you click it, it will open immediately. Then it will slide and select.” “Very nice one.”
- What NOT to do: do not auto-select a lender because ASR said select. Do not delay the drawer for animation-of-animation. Do not treat freshness-note click as the spec (it is a stray hit while talking).
- Open questions: whether “immediately” forbids the calm slide or only forbids a blank wait **before** the slide. Site motion rules prefer a slow slide — they named **both** immediately **and** slide.
- Related recordings:
  - continues_from: `10`; `wb-rec-260815-2341` click cue
  - continues_in: `12` (what the dash is for)

## Evidence index
- `audio.vtt` 05:44.950–05:51.390, 06:02.900–06:12.790
- `events.json`: show-more t=339617; freshness t=348524; row t=355348; select t=356608; deselect t=357230
- `screenshots/0052.png`–`0058.png`, `0046.png` (dotted EMI / loan amount)
- `replay.spec.ts`: `#hlc-show-more`, `#hlc-freshness-note`, `#hlc-th-bank` SVGs
- `css/shroffin-explore-banks.css` `.hlc-charge-amount` dotted underline
