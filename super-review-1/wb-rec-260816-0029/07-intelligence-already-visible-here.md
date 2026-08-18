# Intelligence already visible here — use the overdue + bounce spread on the table

They scroll **back to the top** of Other charges and close the clip: **“We also need this intelligence, which is already visible here.”** The old four-file cut folded this into the bounce calc. It is a separate close: the **spread is already on the page** (Axis 8% / ₹500 vs Bank of India 1% / ₹0). Labels (`04`), reject-on-double (`02`), and the rupee total (`01`/`06`) should **speak that table**, not wait for a hidden dataset.

## Classification
- kind: issue | intelligence / use visible data
- status: open
- surface: explore-banks / **Other charges** top of the lender list — Axis **8.00% p.a.** / ₹500, Bandhan **2.00% p.a.** / ₹500, Bank of Baroda **2.00% p.a.** / ₹125, Bank of India **1.00% p.a.** / ₹0, Bank of Maharashtra **2.00% p.a.** / ₹500 selected (`0015.jpg` / `0016.jpg`).
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. No Speaker B. ~13 s of silence after this line until the recording ends; do not invent an aside.

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
- previous: same take `06` (overdue + bounce in the total)
- next: `wb-rec-260816-0031` starts 2026-08-15T19:01:37.835Z (~9 s later) — friendly lawyer / MCLR / scheme names. Last clip of the 15 Aug 2026 review.

## Where on the page
- **02:06.831–02:10.831** scroll **to the top**: y=1395.5 → 1100.5 → 900.5 → **702.5 → 692** (`0015.jpg` t=130199, `0016.jpg` t=140199). Co-applicant **No** peeks above the tabs again. Filters: Bank type **All**. **1 selected** · Apply once. BoM row still the selected one.
- “Already visible here” lands on this **spread of overdue + bounce**, not a new widget. Same columns they have been on the whole clip.
- **02:12.850–02:26.263**: ASR empty. Idle 9.1 s then 3.3 s; last scroll y=782 at 02:23.265. No further product talk in the transcript. Next folder starts ~9 s after `ended_at`.
- Screenshots: `0015.jpg`, `0016.jpg`.

## What they said (faithful, complete)

**02:09.970–02:12.850** Speaker A (scrolled back to the top of Other charges):
> Raw ASR: “We also need this intelligence, which is already visible here.”
> Corrected: same. **intelligence** p≈0.73; **already** p≈0.70; **visible** p≈0.44; **here** p≈0.50. The **spread** (Axis 8% vs BoI 1%, bounce ₹500 vs ₹0 vs ₹125) is already on the table — `02`/`04` intelligence should **use** it (labels, reject-on-double, rupee total), not wait for a hidden dataset.

No Speaker B. No third sentence. Do not attach `05`’s “extraordinary” or `06`’s bounce formula to this line.

## First-principles problem
- What must be true: intelligence is **allowed to talk about what the table already shows**. Building a second, invisible ranking while Axis 8% and BoI 1% sit on screen is the wrong root.
- Root vs symptom: missing badges (`04`) and missing rupee totals (`01`/`06`) are symptoms of **not voicing** this spread. The data is not missing.
- Constraints: they still want the **calc** and the **labels**. “Already visible” is not “ship nothing.” It is “don’t pretend we lack the input.”

## Directions they considered
- Keep using the **visible** table as intelligence (`already visible here`).
- Same intelligence as `02` (don’t take the double-on-a-miss bank) and `04` (least / highest labels).
- Lean: wire advice to this grid. Not a new data source.

## Company / user / future thinking
- User: can already **see** Axis vs Bank of India vs BoM if they look. They should not have to become the intelligence.
- Company: Shroffin’s job is to **say** what this grid means before the loan (`02`), including bounce (`06`) and named extremes (`04`).
- Future: 0031 is **how Notes are worded** (friendly lawyer, not symbols). That clip does not replace this intelligence. Compare-and-apply “not taken yet” is 0031’s last beat — not this table.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: intelligence copy / tips that read **existing** `overdueChargeDisplay` + `emiBounceChargeDisplay` (and the `01` month-rupee once it exists). No new scrape. Row chrome from `04`.
- Acceptance criteria in their words: “we also need this intelligence, which is already visible here.”
- What NOT to do: do not wait for a new dataset. Do not hide the table behind the advice. Do not treat ~13 s of end silence as a new issue. Do not close this in 0031.
- Open questions: tip above the list vs per-row labels vs both (`04` is labels on the bank). Whether “visible here” also means the Notes block they focused at 00:07 — they had scrolled **away** from Notes to the **top of the grid** when they said it; prefer the grid.
- Related recordings:
  - continues_from: same take `02` (intelligence = reject on miss cost), `04` (labels), `06` (total extra)
  - continues_in: `wb-rec-260816-0031` — friendly lawyer language, MCLR/BPLR, scheme names (Notes clicks). **Does not close** this intelligence.

## Evidence index
- `audio.vtt` 02:09.970–02:12.850 (last cue; silence through 02:26)
- `audio.json` segment 25; `audio.text` ends on this sentence
- `events.json`: scroll y=1395.5→692 t=126831–130831; idle t=131236 duration 9096; last scroll y=782 t=143265
- `screenshots/0015.jpg` (t=130199), `0016.jpg` (t=140199)
- `manifest.json` ended_at 2026-08-15T19:01:28.697Z; next folder `wb-rec-260816-0031` started_at 2026-08-15T19:01:37.835Z
- On-screen: Axis **8.00% p.a.** / ₹500; Bandhan **2.00%** / ₹500; BoB **2.00%** / ₹125; BoI **1.00%** / ₹0; BoM **2.00%** / ₹500 selected
