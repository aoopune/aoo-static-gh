# The Lenders header looks good, but they are unsure of its weight and color

After parking banks vs lenders, they scroll back to the results table. The header block looks good. Then: the word **Lender** — they do not know if it is high or low (weight), the color is also different, and they do not know the header. This is unfinished visual treatment of `th#hlc-th-bank`, not a rename.

## Classification
- kind: issue | typography / table header
- status: open (they praise the block, then leave weight and color undecided)
- surface: explore-banks / results `#hlc-results-shell` / `th#hlc-th-bank` `.hlc-bank-head-label` **Lenders** vs Rate / Loan amount / Tenure / EMI headers
- viewport: 1366x768 @2x
- speakers: Speaker A. No disagreement. Short pauses, not a second speaker fighting the point. ASR not diarized. Language tag `mr`.

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
- previous: `03` (they then look at this word on the table)
- next: `05` (same header: gap under the buttons)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- They were idle on the Loan inputs card through the naming talk (`0007.jpg`–`0027.jpg`). First table scroll of this beat: **03:47.465** y=374, **03:52.400** y=648, **03:55.099** y=622.
- On screen (`0028.jpg` t=232185, `0029.jpg` t=240186): Overview tab; **Lenders** | Rate (sorted up) | Loan amount | Tenure (yrs) | EMI. Rows: PNB 8.75% ₹48,00,000 / 20 / ₹42,418, then Canara, Bank of Baroda, City Union Bank, Bank of India. **Apply once** on the right. Filters **Bank type**. Rate filter **Fixed**.
- `0031.png`: **Lenders** reads heavier and darker than Rate / Loan amount / Tenure / EMI.
- They are looking at the **table header row**, especially the **Lenders** label — not the page h1, not See options.
- No click in this span. Next click (`05`) is the bank header cell at 04:18.

## What they said (faithful, complete)

**03:52.290–03:57.210** Speaker A:
> Raw ASR: “Now... What you have done... The header block. It looks good.”
> Corrected: same. **Header block** = the results head they just scrolled to (tabs + column titles), not the site nav.

**03:59.770–04:06.570** Speaker A:
> Raw ASR: “It means... You have written all this. Lender... I don't know if it's high or low.”
> Corrected: they have written all this (the header). **Lender(s)** — they do not know if that word is **high or low** (type weight / how heavy it sits vs the other column titles). Not “high or low rates.”

**04:07.250–04:10.490** Speaker A:
> Raw ASR: “Now... The color is also different. We don't know the header.”
> Corrected: same. **Lenders** is a different color from Rate / Loan amount / Tenure / EMI. They have **not decided** the header treatment.

They do not pick a weight, a hex, or “make it match.” They do not say change the word here (that fight is `03`). No Speaker B in this span.

## First-principles problem
- What must be true: the first column title should read as one family with Rate / Loan / Tenure / EMI — same job (a column name) — unless they *choose* to make the bank column a different kind of header.
- Root vs symptom: leftover from the banks/lenders split (`03`): the label is the odd noun **and** it already looks odd (weight + color). Symptom is “we don’t know the header.” Root is no single rule for that cell.
- Constraints: they already said the block **looks good**. Do not rebuild the whole head to fix one word’s weight.

## Directions they considered
- Keep the header block (it looks good).
- Lender high vs low — **undecided**.
- Color different — named, not resolved.
- Lean: notice it; do not ship a new style from this clip.

## Company / user / future thinking
- User: the first column is how they find the institution. If that title is heavier or a different grey, it can feel like a section name, not a column — extra load after `2313`.
- Company: customer-facing lines prefer **banks**; this cell says **Lenders**. Visual mismatch on top of the word mismatch.
- Future: settle the noun in `03` / `2332`, then one type style for all column titles. Do not invent a special “Lenders” color.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `src/home-loan-compare.js` `.hlc-bank-head-label` inside `th#hlc-th-bank`; table-head CSS vs `.hlc-sortable` titles.
- Acceptance in their words: header block looks good; they still “don’t know if it’s high or low”; “the color is also different”; “we don’t know the header.”
- What NOT to do: do not restyle Rate/EMI to match a one-off Lenders color. Do not treat this as the rename (`03`). Do not add a second header row.
- Open questions: should Lenders match the metric headers exactly, or stay slightly stronger because it is the name column? Unspoken.
- Related recordings:
  - continues_from: `wb-rec-260815-2313` (same page, importance/layout); `03-banks-vs-lenders-naming-philosophy.md`
  - continues_in: `05-gap-between-buttons-and-table.md`. Session continues in `wb-rec-260815-2332` (does not re-open weight/color)

## Evidence index
- `audio.vtt` 03:52.290–04:10.490
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` same span
- `events.json`: scroll y=374 / 648 / 622 at 227.465 / 232.400 / 235.099; no click
- `screenshots/index.json` + `screenshots/0028.jpg`–`0031.png`
- `pages.json`: heading “Bank options”; title “Explore banks – Shroffin”
- `manifest.json` viewport 1366×768, dsf 2
- Site: `src/home-loan-compare.js` ~6626 `.hlc-bank-head-label` “Lenders”
