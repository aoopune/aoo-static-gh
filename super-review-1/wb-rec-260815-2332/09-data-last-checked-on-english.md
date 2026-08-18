# “Data last checked on” is not correct English — polish it

They scroll to the line under the table: **Data last checked on 14 July 2026**. They say that sentence is **not correct English**. Make it good polished English. They offer **Accuracy guaranteed** or **updated as of**.

## Classification
- kind: issue | copy
- status: open
- surface: `p#hlc-freshness-note.hlc-freshness-note` — live string from `formatFreshnessLabel`: `"Data last checked on " + date` (recorded **Data last checked on 14 July 2026**)
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. Language tag `mr`. High confidence on the English they want.

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
- previous: `08` (Apply / checkboxes). Scrolls **03:26–04:20** down the filters + table to the freshness line.
- next: `10` (search SBI / default rate sort)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- After deselect, they scroll (`0033.png` t=210169): table scrolled so **City Union → BoM** are in view; footer of the compare block shows **Data last checked on 14 July 2026**; “Need some help? Chat now…” under that. **Clear all** is scrolled off the filter head.
- `0037.png` (t=246170) still shows the same freshness line under the table.
- No click on the note. Clicks resume at **04:21.591** on `th#hlc-th-bank > div` (`10`).
- Code: `src/home-loan-compare.js` `formatFreshnessLabel` returns `"Data last checked on " + formatCheckedOnDate(isoDate)` with `en-IN` long month.

## What they said (faithful, complete)

**03:32.030–03:36.050** Speaker A:
> Raw ASR / corrected: “This sentence, data last checked on, is not correct English.”
> *sentence* p≈0.99, *checked* p≈0.97, *correct* p≈0.98, *English* p≈0.96. They quote the on-screen phrase.

**03:38.950–03:40.870** Speaker A:
> Raw ASR / corrected: “Just make it good polished English.”
> *polished* p≈0.90, *English* p≈1.00.

**03:50.010–03:57.550** Speaker A:
> Raw ASR / corrected: “Something like maybe Accuracy guaranteed or updated as of.”
> *Accuracy* p≈0.77, *guaranteed* p≈0.77, *updated* p≈0.65, *as of* p≈0.95 / 0.91. Two **examples**, not a locked headline.

They do not mention the date 14 July 2026 as wrong. They do not ask for a Hindi string.

## First-principles problem
- What must be true: the line tells the customer **when this data was last verified**. The grammar of “Data last checked on [date]” is what they reject.
- Root vs symptom: not the date formatter (`14 July 2026` is fine). The **template** is clunky English.
- Constraint: keep a freshness line; polish it. “Accuracy guaranteed” is a legal claim — they said “something like maybe,” next to the safer **updated as of**.

## Directions they considered
- Polish the sentence.
- Examples: **Accuracy guaranteed** **or** **updated as of**.
- Lean: copy fix. They did not pick one winner.

## Company / user / future thinking
- User: needs to know the table is dated, in calm English (`06`: stand behind what is true).
- Company: Shroffin should not promise “accuracy guaranteed” unless legal agrees. **Updated as of 14 July 2026** matches what the code already knows.
- Future: drawer subtitle also concatenates this label (`formatDrawerFreshnessSubtitle`) — one source of truth.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `formatFreshnessLabel` in `src/home-loan-compare.js` (~line 1086); `#hlc-freshness-note`; any drawer reuse.
- Acceptance criteria in their words: “This sentence, data last checked on, is not correct English. Just make it good polished English. Something like maybe Accuracy guaranteed or updated as of.”
- What NOT to do: do not remove the date. Do not ship “Accuracy guaranteed” as a slogan without a product/legal pass — they listed it as *maybe*. Do not treat Chat now / phone as this sentence.
- Open questions: exact winning line (**Updated as of 14 July 2026** vs **Last checked 14 July 2026** vs other polish).
- Related recordings:
  - continues_from: `06` (stand behind the number)
  - continues_in: `10`

## Evidence index
- `audio.vtt` 03:32.030–03:57.550
- `screenshots/0033.png`–`0038.png` (“Data last checked on 14 July 2026”)
- `src/home-loan-compare.js` `formatFreshnessLabel`
- `pages/explore-banks.html` `#hlc-freshness-note`
