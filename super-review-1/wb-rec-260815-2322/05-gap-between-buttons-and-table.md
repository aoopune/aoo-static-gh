# Put a little more gap between the tab buttons and the table — not too much

They say this is just a table. There is a little gap between the buttons and the table, and a little gap between the headers; they want a little more. They click the Lenders header while talking. Then: you have to do that — but it’s too much. Slightly more air, not a new layout.

## Classification
- kind: issue | layout / spacing
- status: open
- surface: explore-banks / `.hlc-column-tabs` + **Apply once** + **edit** vs table `#hlc-th-bank` / first data row
- viewport: 1366x768 @2x
- speakers: Speaker A states the gap. Speaker B: “Yes, you have to do that.” Then A: “But it’s too much.” Mild push-pull, not a fight. ASR not diarized. Language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2322`
- recording id: `bcd9788e-d24d-4ab3-8482-49a528a01c2f`
- clip: 23 of 30
- started_at: 2026-08-15T17:52:41.328Z
- ended_at: 2026-08-15T18:01:46.586Z
- duration_ms: 545258 (~9 min 5 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 149
- console: empty
- tabs: 1
- previous: `04` (same header, weight/color)
- next: `06` (tab switcher chrome)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Visible chrome (`0031.png` t=256187, `0032.png` t=258621): Overview | Charges | Other charges, pencil **edit**, **Apply once**. Directly under that: checkbox + **Lenders** | Rate | Loan amount | Tenure | EMI, then PNB / Canara / BoB… at ₹48,00,000.
- **Buttons** in this sentence = that tab row (tabs + edit + Apply once), not See options on the form.
- Scroll **04:10.932** y=759.5 (table head in view).
- Clicks while they talk gap:
  - **04:18.218** (`t=258218`) `locator("#hlc-th-bank")`
  - **04:20.785** (`t=260785`) `locator("th#hlc-th-bank > div")`
- They are pointing at the Lenders header / the join between buttons and table. No “8 selected” yet (that is later, `06`).

## What they said (faithful, complete)

**04:13.410–04:15.770** Speaker A:
> Raw ASR / corrected: “Now... This is just a table.”

**04:17.130–04:21.430** Speaker A (over the first header click):
> Raw ASR: “There is a little gap. There is a little gap between the buttons and the table.”
> Corrected: same. Space between the tab/Apply row and the column-title row is small.

**04:22.850–04:26.950** Speaker A:
> Raw ASR: “There is a little gap between the headers. A little more. A little more.”
> Corrected: same. Also the gap **between the headers** (column titles vs each other, or titles vs the first row). They want **a little more**.

**04:28.490–04:31.310** Speaker A:
> Raw ASR: “Or you can put it like this. This is a table.”
> Corrected: they are showing a spacing they like — still “this is a table,” not a card stack.

**04:32.330–04:36.950** A and B:
> Raw ASR: “Yes, you have to do that. But it's too much. Okay, this is a table.”
> Corrected: B (or A confirming the need): **yes, you have to do that** (add air). Then: **but it’s too much** (don’t overshoot). Close: this is a table.

They do not give pixels. They do not ask to move Apply or the tabs in this beat (`06` does).

## First-principles problem
- What must be true: the customer should feel **one table** under a thin control row. The join needs a little more air so buttons and column titles don’t read as one jammed strip — and not so much that the table floats away.
- Root vs symptom: tight vertical rhythm between `.hlc-column-tabs` / Apply and `thead`. Not missing chrome.
- Constraints: “this is just a table.” A little more ≠ a new section, card, or divider block.

## Directions they considered
- A little more gap (buttons↔table, and between headers).
- “Put it like this” (they demonstrate).
- Pull back: **too much** is wrong.
- Lean: small increase, still a table.

## Company / user / future thinking
- User: they are comparing rows. Extra chrome gap should not steal height from the first banks.
- Company: calm, unhurried layout — a little space, not a dashboard widget.
- Future: whatever tab shape they keep in `06` must keep this same “one table” spacing.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: results head CSS around `.hlc-column-tabs` / `.hlc-table-wrap` / `thead` `#hlc-th-bank`; not the Loan inputs card.
- Acceptance in their words: “a little gap between the buttons and the table”; “a little more”; “yes you have to do that”; “but it’s too much”; “this is a table.”
- What NOT to do: do not insert a large empty band. Do not restyle this as cards (`07` Myntra contrast). Do not move this gap onto the form’s See options button.
- Open questions: is “between the headers” column-to-column (horizontal) or header-row-to-body (vertical)? Speech + click on `th#hlc-th-bank` lean vertical, under the buttons.
- Related recordings:
  - continues_from: `04-lenders-header-weight-and-color.md`; session `wb-rec-260815-2313`
  - continues_in: `06-tab-switcher-chrome-four-columns.md`. Session `wb-rec-260815-2332` does not re-open this gap.

## Evidence index
- `audio.vtt` 04:13.410–04:36.950
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` same span
- `events.json`: scroll y=759.5 at 250.932; click `#hlc-th-bank` t=258218; click `th#hlc-th-bank > div` t=260785
- `screenshots/0031.png`–`0034.png`
- `replay.spec.ts`: `#hlc-th-bank` click then `th#hlc-th-bank > div` click
- Site: `pages/explore-banks.html` results shell; `src/home-loan-compare.js` table head
