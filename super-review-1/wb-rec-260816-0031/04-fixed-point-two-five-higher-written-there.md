# Fixed 0.25 higher than floating — that gap is also written there

Inside the choose-advice (`03`) they require the **price of fixed** to sit on screen: even if fixed is **0.25 or higher**, **that is also written there**. Speaker B agrees. On this recording the Fixed chip actually says **About 1–2% higher**, not 0.25.

## Classification
- kind: issue | visible premium / filter copy
- status: open
- surface: spoken while Other charges is on screen (`0013.png`–`0015.png`). Filter **Rate** → **Fixed** note **About 1–2% higher** is visible later in `0026.png` / `0031.png` (left rail). They never click Fixed.
- viewport: 1366x768 @2x
- speakers: Speaker A states 0.25; “Yes, that is also written there” = Speaker B agreeing. ASR not diarized.

## Session metadata
- folder: `wb-rec-260816-0031`
- recording id: `abd34f08-4d04-49d6-a699-6c354e5780bd`
- clip: **30 of 30** (last clip of the 15 Aug 2026 review)
- started_at: 2026-08-15T19:01:37.835Z
- ended_at: 2026-08-15T19:08:12.983Z
- duration_ms: 395148 (~6 min 35 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 56 (PNG + JPEG)
- event count: 130
- console: empty (`console.json` is `[]`)
- tabs: 1
- pages.json: 1 page (`p1`)
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260816-0029` (~9 s earlier)
- next: none

## Where on the page
- **01:26–01:42** after they collapse Rate change Notes (`0013.png` t=85468). Viewport is table + prepayment note (`0014.png` / `0015.png`). Left **Filters** rail is in frame on later shots: Floating selected, Fixed **About 1–2% higher** (`0026.png`). Facility Overdraft chip also says **About 0.15–1% higher** (`0031.png`) — they did **not** name overdraft.
- They point at “written there.” Do **not** invent a 0.25 cell in the table — none is labeled 0.25 in these screenshots. The only on-screen higher-rate note is **About 1–2% higher**.
- Drawer **How the rate is built** (opened ~20s later) can show **Fixed rate premium** when data has it (`buildRateDerivationPairs`); this Yes Bank row is **Floating**, so that pair is not in `0019.png`.

## What they said (faithful, complete)

**01:26.060–01:33.580** Speaker A:
> Raw ASR: “And when you take a fixed rate, even if the fixed rate is 0.25 or higher, that is also written there.”
> Corrected: same. Taking **fixed** must still **show the extra** — **0.25 or higher**. First **0.25**: 0 p≈0.73 + .25 p≈0.98.

**01:34.280–01:36.560** Speaker B:
> Raw ASR: “Yes, that is also written there.”
> Corrected: same. Agrees the gap belongs **on screen**.

**01:36.720–01:42.480** Speaker A:
> Raw ASR: “0.25 is higher than the floating rate.”
> Corrected: same. The number they name is **0.25** above floating. ASR **0** on the second “0.25” is weak (~0.31); **.25** p≈0.99. They say it twice. On-screen chip is **1–2%**, not 0.25 — file the **mismatch**, do not pick a winner.

Then they continue the market-down / take-a-bet / intelligence correction in `03`.

## First-principles problem
- What must be true: choosing fixed (`03`) includes seeing **how much extra vs floating**.
- Root vs symptom: a Fixed chip without a gap hides the cost. Root is **the premium written next to the choice**.
- Constraints: they say **0.25**; the page currently prints **About 1–2% higher**. Do not silently “fix” 0.25 to 1–2% or the reverse.

## Directions they considered
- Write the fixed-vs-floating gap **there** (next to the choice).
- Amount they name: **0.25 or higher**.
- B confirms “written there.”
- Lean: a visible note on Fixed, which already exists as 1–2%. They may want the **true** spread (0.25 if that is the fact), not a wide band.

## Company / user / future thinking
- User: otherwise “take fixed when rates will rise” (`03`) without seeing the **entry tax**.
- Company: same honesty as scheme names (`05`) — do not hide the attribute that changes the bill.
- Future: rest of `03` (intelligence: floating long term). This file is only the **written premium**.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-filter-option-note` **About 1–2% higher** on Fixed (`pages/explore-banks.html` ~759); optional `fixedRatePremiumLabel` in `buildRateDerivationPairs`.
- Acceptance in their words: “even if the fixed rate is 0.25 or higher, that is also written there”; “0.25 is higher than the floating rate.”
- What NOT to do: do not remove the on-chip note. Do not assume 0.25 is live data for this Yes Bank floating row. Do not treat 1–2% as what they said. Do not rewrite the Overdraft **0.15–1%** chip from this line.
- Open questions: is 0.25 a typical SBI/Canara-style premium they remember, or a specific cell off-screen? Should the chip show the **matched** premium per bank instead of 1–2%?
- Related recordings:
  - continues_from: `03` (same speech; this is the premium clause)
  - continues_in: `05` (Yes Bank drawer / bank attributes)

## Evidence index
- `audio.vtt` 01:26.060–01:42.480
- `audio.json` words: first 0.25 (0 p≈0.73 / .25 p≈0.98); second 0 p≈0.31 / .25 p≈0.99
- `events.json`: idle; rate-change note click t=85066 just before this
- `screenshots/0013.png`–`0015.png`; Fixed chip `0026.png`, `0031.png`
- On-screen: **About 1–2% higher** (not 0.25)
