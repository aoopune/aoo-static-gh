# Click the underlines — a drawer like that, with the missed-EMI calculation

They have just named intelligence (`02`). They immediately restate the **extra money for a month if one EMI is missed**, then the click: **“I need a drawer like that. And I need to know the underlines. I need to click them and do the calculations.”** Old cut buried this 30 seconds after the opening drawer ask. It is the **how**: underlined figures open the `01` calc.

## Classification
- kind: issue | interaction / click-to-calc
- status: open
- surface: explore-banks / **Other charges** overdue (and bounce) **figures** that look underlined / dashed — not only DCB’s blue “Fixed amount by overdue range >”. During this span they have scrolled to the I–K banks (`0008.png`: IndusInd **24.00% p.a.**, J&K **0.20% p.a.**).
- viewport: 1366x768 @2x
- speakers: Speaker A (“I need…”). ASR not diarized. No Speaker B.

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
- previous: same take `02` (don’t take the double-on-a-miss bank)
- next: same take `04` (labels on J&K / IndusInd)

## Where on the page
- Still **Other charges**. After intelligence they stay on the list, then scroll **down** to y=**1941.5** at **01:04.999** (`0008.png` t=66199) as they say underlines — IndusInd / J&K / IDFC FIRST in frame. Clickable-looking treatment: DCB (earlier) and Union Bank rate-change use a blue chevron **link**; % p.a. cells are `.hlc-charge-rule` text. They **scroll past** the figures; `events.json` has **no** cell click.
- **01:12.065** y=2201 (gap before labels) → `0009.png` t=74200 still on the same pair.
- They do **not** open `#hlc-drawer`. `data-charge-detail` only fires `openChargeSlabs` for slab actions. `data-calculation-detail` is loan / EMI / processing, not overdue.
- Screenshots: `0007.png` (approach), `0008.png`–`0009.png` (underlines + IndusInd/J&K).

## What they said (faithful, complete)

**00:54.730–00:59.670** Speaker A (immediately after “part of the intelligence”):
> Raw ASR: “I need to know how much extra money I need for a month if my one EMI is missed.”
> Corrected: same. Restates `01`’s rupee question as the **input to intelligence** (`02`). “extra” in this segment is very low-confidence in `audio.json` (~0.0004) but the same sentence was clear at 00:17; keep it. This line was filed under reject in the old cut; it is the bridge into the click.

**01:01.950–01:03.770** Speaker A:
> Raw ASR: “I need a drawer like that.”
> Corrected: same. **Drawer** p≈0.09 in this segment (was 0.92 at 00:13) — still the same word they used in `01`. “Like that” = the overdue drawer they already described (and 0013’s missing calc).

**01:04.510–01:09.350** Speaker A:
> Raw ASR: “And I need to know the underlines. I need to click them and do the calculations.”
> Corrected: same. **Underlines** p≈0.66. **Click** p≈0.69. **Calculations** p≈0.89. The **underlines** are the overdue (and bounce) figures; click → calculation. They do not click in this recording. ~4.6 s of scroll follows; labels start at 01:13 (`04`). ASR has no extra cue in that gap.

No Speaker B.

## First-principles problem
- What must be true: the visitor can **click the number they are staring at** and get the month’s extra rupees. A drawer that only opens from DCB’s `>` (or from Notes ‡) is not “the underlines.”
- Root vs symptom: looking underlined without being a control is the symptom. The root is **percentage cells are dead text** while slab cells are links.
- Constraints: same calc as `01`. Bounce is **included** when they click overdue (`06`), not a second mystery click. Do not make the whole row the hit target if they named the **underlines**.

## Directions they considered
- **Drawer like that** (the `01` overdue drawer).
- **Know the underlines** — they must be findable.
- **Click them and do the calculations.**
- Lean: interaction spec for `01`, not a new tab. They still do not click in this take.

## Company / user / future thinking
- User: sees 24.00% p.a. with a dashed look and expects it to behave like DCB’s `>`. Dead underlines teach them the site is decoration.
- Company: intelligence (`02`) that says “don’t take this bank” has to be **checkable** on the cell. Labels (`04`) sit on the same rows they are looking at.
- Future: `06` repeats “if we click on the overdue charge, we need to do the calculations” and adds bounce into the total. 0031 clicks **Notes** chevrons — that is wording, not this cell click.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: overdue/bounce cell markup (`.hlc-charge-rule` vs `[data-charge-detail]` / `[data-calculation-detail]`); click handler around `src/home-loan-compare.js` ~9322; a new `openCalculation` key (or overdue path in `openChargeSlabs`) that today does not exist for % p.a. cells.
- Acceptance criteria in their words: “I need a drawer like that”; “I need to know the underlines”; “I need to click them and do the calculations”; plus the restated “how much extra money… if my one EMI is missed.”
- What NOT to do: do not leave percentage cells as dead underlines. Do not treat Notes ‡ / Collapse all (they focused Collapse all at 00:07, they did not click it here) as the calc. Do not wait for a cell click in this recording — they **described** the click.
- Open questions: bounce underlines also clickable, or only overdue (`06` says click **overdue**, include bounce in the total). Hover vs always-visible underline (this review is desktop 1366×768; do not hide the affordance behind hover on phone).
- Related recordings:
  - continues_from: same take `01` (drawer + extra money), `02` (intelligence needs that number)
  - continues_in: same take `04` (labels on the banks now on screen), `06` (click overdue → total including bounce)

## Evidence index
- `audio.vtt` 00:54.730–01:09.350
- `audio.json` segments 10–12 (extra money restated; drawer like that; underlines)
- `events.json`: scroll y=1941.5 t=64999 (during underlines); y=2201 t=72065 (gap before labels)
- `screenshots/0007.png`–`0009.png`
- On-screen: IndusInd **24.00% p.a. or ₹100** / 3 days / bounce **₹750**; J&K **0.20% p.a. or ₹200** / 15 days / bounce **₹200**
