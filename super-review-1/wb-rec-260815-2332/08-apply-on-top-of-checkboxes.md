# Apply should sit on top of the checkboxes

They call the select-all row **beautiful**, then place **Apply**: it should come **here, on top of these checkboxes**. On screen Apply once is top-right of the table, beside “8 selected,” while the master checkbox lives in the Lenders header. They click select-all, then deselect.

## Classification
- kind: issue | layout (primary CTA vs row selection)
- status: open
- surface: `#hlc-apply-btn` **Apply once** (recorded “8 selected” then later “33 selected”) / master checkbox `th#hlc-th-bank` **Select all visible banks** / **Deselect all visible banks** / per-row checkboxes
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. Language tag `mr`. *Beautiful* p≈0.06 — keep it, low confidence.

## Session metadata
- folder: `wb-rec-260815-2332`
- recording id: `244b886f-17a3-4f87-b2bf-d28ddfbcf6ab`
- clip: 24 of 30
- started_at: 2026-08-15T18:02:07.502Z
- ended_at: 2026-08-15T18:11:22.771Z
- duration_ms: 555269 (~9 min 15 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 76
- event count: 158
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `07` (lenders)
- next: `09` (data last checked). Accidental Apply navigation at 05:57 is `10`, not this layout call.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- **Apply once** is a large light-blue button at the **top right** of the compare stage, aligned with Overview / Charges / Other charges — **not** stacked on the checkbox column.
- **03:09.529** click master checkbox SVG (`th#hlc-th-bank > div > button > svg:nth-of-type(2) > path`) — accessible name **Select all visible banks**. `0030.png` (t=189933): rows highlighted, **8 selected** next to Apply once.
- **03:21.401** click same control — **Deselect all visible banks**. `0032.png` (t=201801): checkboxes empty, Apply idle.
- Speech “Apply should come here on top of these checkboxes” sits between those two clicks (`0031.png` still selected).
- They do not click Apply in this span.

## What they said (faithful, complete)

**03:15.650–03:16.450** Speaker A:
> Raw ASR: “Beautiful.”
> Corrected: looking at the selected table / checkbox column. Very low p — do not design from the adjective alone.

**03:17.410–03:20.690** Speaker A:
> Raw ASR / corrected: “Apply should come here on top of these checkboxes.”
> *should* p≈0.96, *come* p≈0.98, *here* p≈0.95, *checkboxes* p≈0.82. **Here** = the select-all / row-check column, not the tab row and not the filters.

They do not say left vs center vs sticky. They do not say to remove the “N selected” count.

## First-principles problem
- What must be true: Apply is the action **on the banks you ticked**. The control should sit on that ticking, not on a distant corner of the tab chrome.
- Root vs symptom: Apply already exists and works (05:57 proves it). The root is **spatial**: CTA is not on the checkboxes.
- Constraint: keep one Apply (2322: keep Apply here, don’t duplicate). Move/attach it to the selection, don’t add a second Apply.

## Directions they considered
- Place Apply **on top of these checkboxes**.
- Lean: a layout instruction, not “make Apply bigger.”

## Company / user / future thinking
- User: ticks rows, then looks for the button **where they ticked**. Top-right next to tabs is a different job (tabs = what you are looking at).
- Company: one application for many lenders (`07`). The checkbox column is that multi-select.
- Future: at 05:57 they select all 33 and hit Apply — the button still works from the corner. This ticket is placement, not the apply.html flow.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-apply-btn`, selection count, `th#hlc-th-bank` checkbox in `pages/explore-banks.html` / `src/home-loan-compare.js`. 2322 already said keep Apply with this table chrome.
- Acceptance criteria in their words: “Apply should come here on top of these checkboxes.”
- What NOT to do: do not put Apply in the Filters sidebar. Do not hide checkboxes. Do not treat the 05:57 navigation as this issue. Do not add Apply on every row.
- Open questions: Apply above the master checkbox vs replacing the top-right slot; whether “N selected” travels with it.
- Related recordings:
  - continues_from: `wb-rec-260815-2322` `06` (keep Apply here)
  - continues_in: `10` (they click Apply once to 33 banks by accident / to leave)

## Evidence index
- `audio.vtt` 03:15.650–03:20.690
- `events.json` t=189529 select all; t=201401 deselect
- `screenshots/0030.png`–`0032.png` (8 selected; Apply top-right)
- `replay.spec.ts` Select all / Deselect all / later `#hlc-apply-btn`
