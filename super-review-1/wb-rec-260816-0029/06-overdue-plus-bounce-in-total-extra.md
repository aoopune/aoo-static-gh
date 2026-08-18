# Overdue plus EMI bounce in the total extra money — click overdue, run the calc

The month’s extra (`01`) is not overdue alone. They want **overdue charge and EMI bounce charge fitted into the calculations**. **Click overdue → do the calculations.** If **one EMI is missed for a month**, the figure is **total extra money, including EMI bounce**. They then scroll back toward these rows (IndusInd ₹750 bounce vs J&K ₹200). “Intelligence already visible” is the next file (`07`).

## Classification
- kind: issue | calc total (two charges) + click-to-calc
- status: open
- surface: explore-banks / **Other charges** columns **Overdue charge ‡** and **EMI bounce charge ^**, same rows as `04` (IndusInd ₹750 bounce vs J&K ₹200). Click target they name is **overdue**, not a merged column.
- viewport: 1366x768 @2x
- speakers: Speaker A. One line repeated (“We need to fit that into the calculations” twice) — same ask, not a second speaker. ASR not diarized. No Speaker B.

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
- previous: same take `05` (“Interest rate is extraordinary” at the foot)
- next: same take `07` (intelligence already visible here)

## Where on the page
- **01:49–02:04** they scroll **up** from the foot: y=2409 (`0013.png` t=112199, J&K / Karnataka / Kotak) then **1907** (`0014.png` t=120200) — IndusInd / J&K pair again. `0014.png`: IndusInd row looks highlighted; overdue **24.00% p.a. or ₹100** (3 days); bounce **₹750**. Header still **1 selected**; no checkbox click in events.
- Still **no click** on an overdue cell. Next clip `wb-rec-260816-0031` clicks Notes chevrons (`#hlc-charge-note-overdue-charge`, EMI bounce, rate change) — language, not this rupee total.
- Screenshots: `0013.png`, `0014.png` (bounce talk). `0012.png` is the previous file’s foot.

## What they said (faithful, complete)

**01:49.430–02:04.630** Speaker A:
> Raw ASR: “We also need an overdue charge and EMI bounce charge. We need to fit that into the calculations. We need to fit that into the calculations. If we click on the overdue charge, we need to do the calculations. If one EMI is missed for a month, we need total extra money. Including EMI bounce charge.”
> Corrected: same. **Fit overdue + EMI bounce into the calculations.** **Click the overdue charge** → run the calc (`03` underlines). Output: **total extra money** for **one missed EMI for a month**, **including bounce**.
> **overdue** p≈0.65; **bounce** p≈0.94 then 0.68; **Including** p≈0.84. The repeated “fit that into the calculations” is emphasis (second pass starts with **We** p≈0.014 — ASR stutter, not Speaker B).

They do not ask to merge the two columns into one. Intelligence-visible is `07` after a ~5 s scroll to the top (no extra ASR in that gap).

## First-principles problem
- What must be true: one miss = **one total** the user can act on. Overdue % p.a. without bounce understates IndusInd (₹750 bounce) vs J&K (₹200).
- Root vs symptom: two columns is correct (they keep both). The root is the **drawer total** (`01`) omitting bounce, so “double money” (`02`) is incomplete.
- Constraints: click target they name is **overdue**, not a third column. Bounce is **included in** that calc.

## Directions they considered
- Put **overdue + EMI bounce** in the **same** calculation.
- **Click overdue** → calc (same underlines as `03`).
- Total = extra money for **one missed EMI for a month**, **including bounce**.
- Lean: composition of `01`’s drawer, not a new tab.

## Company / user / future thinking
- User: a “24% overdue” warning that forgets ₹750 bounce still lies about the month they miss.
- Company: intelligence (`02`) that rejects a bank for **double on a miss** must add bounce, or the double is fiction. Labels (`04`) “highest penalty” should mean **that total**, not % p.a. alone.
- Future: `07` says use the **visible** table. 0031 opens Notes (legal language, MCLR, scheme names). That is **wording**, not this total. Leave the calc open.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: overdue click → `openChargeSlabs` / a new `openCalculation` path that today does not exist for % p.a. cells; EMI bounce display already on the row (`emiBounceChargeDisplay`). Footnotes ‡ / ^ in `#hlc-charges-note` are **not** the calc they asked to click — they want the **cell**.
- Acceptance criteria in their words: “overdue charge and EMI bounce charge… fit that into the calculations”; “if we click on the overdue charge, we need to do the calculations”; “if one EMI is missed for a month, we need total extra money, including EMI bounce charge.”
- What NOT to do: do not drop the bounce column. Do not calc bounce only when overdue is 0. Do not treat “Interest rate is extraordinary” as this file (`05`). Do not assume they clicked overdue this clip — they described the click; 0031 clicks **Notes**, which is a different control.
- Open questions: bounce always added (even if the miss is not a bounce)? Grace days (IndusInd 3 / J&K 15 / IDFC 7) inside the same month total? GST on bounce.
- Related recordings:
  - continues_from: `wb-rec-260816-0013` (overdue rupee calc); same take `01` (drawer), `03` (underlines), `04` (J&K / IndusInd), `05` (as_per_roi type)
  - continues_in: same take `07` (intelligence already visible); `wb-rec-260816-0031` does **not** close this total

## Evidence index
- `audio.vtt` 01:49.430–02:04.630
- `audio.json` segments 19–24 (overdue; bounce; fit twice; click overdue; total extra; including bounce)
- `events.json`: scroll y=2409 t=109898; y=1907 t=115165
- `screenshots/0013.png`, `0014.png`
- `replay.spec.ts`: no overdue cell click
- On-screen totals to respect: IndusInd overdue 24% + bounce **₹750**; J&K 0.20% + bounce **₹200**; Yes Bank overdue at **home loan interest rate** + bounce **₹750** (`05`)
