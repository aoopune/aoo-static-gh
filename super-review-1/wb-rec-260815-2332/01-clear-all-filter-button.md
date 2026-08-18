# Make Clear all look like a real button — everyone has one

They start on Explore banks with the Rate filter sitting on **Fixed** (“About 1–2% higher”).
They say it is a good idea to **clear this**, then ask whether there is a **button** for it.
One of them does not know; the other says everyone has a button like this.
A second voice accepts. They never click Clear all in this take.

## Classification
- kind: issue | UI control (filters)
- status: open
- surface: explore-banks / `aside#hlc-filters-panel` / `#hlc-filters-clear` labelled **Clear all** (recorded as a blue text link beside **Filters**, not a filled button)
- viewport: 1366x768 @2x
- speakers: Speaker A asks for the button. Speaker B: “I don’t know.” / “Okay.” / **“I accept.”** (p≈0.96 on *accept*). ASR is not diarized. `audio.json` language tag is `mr`.

## Session metadata
- folder: `wb-rec-260815-2332`
- recording id: `244b886f-17a3-4f87-b2bf-d28ddfbcf6ab`
- clip: 24 of 30
- started_at: 2026-08-15T18:02:07.502Z
- ended_at: 2026-08-15T18:11:22.771Z
- duration_ms: 555269 (~9 min 15 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 76 (`0000.jpg`–`0075.jpg` / `.png`)
- event count: 158
- console: empty (`console.json` is `[]`)
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260815-2322` ended 2026-08-15T18:01:46.586Z (~21 s earlier) — they closed on tab chrome + “mastered this process.” Same URL, same leftover form (Existing EMIs ₹555, co-applicant No).
- next: `02` in this folder (tabs / columns), then `wb-rec-260815-2341` ~3 s after this take ends.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` — title “Explore banks – Shroffin”
- Filters head: **Filters** + **Clear all** (`button#hlc-filters-clear.hlc-filters-clear`). In the recording it reads as a blue text link, not a primary/secondary button.
- What they are pointing at: Rate group, **Fixed** selected, caption “About 1–2% higher.” Borrower / Concessions checkboxes are empty. Bank type **All**.
- On-page table at start (`0000.jpg` / `0001.jpg` / `0002.png`): Overview tab; PNB 8.75% … Canara 8.80% (Fixed list). **Apply once** top-right. Column **Lenders**.
- Clicks in this span: **none**. Scrolls at **00:05.230** and **00:09.162** (payload empty in `events.json`) — they are looking, not filtering.
- Screenshots: `0000.jpg` (t=196) form still open at top; `0001.jpg` (t=8199) table + Clear all; `0002.png` (t=18198) Fixed clearly selected while they talk.

## What they said (faithful, complete)

**00:10.040–00:13.220** Speaker A:
> Raw ASR: “It's a good idea to clear this.”
> Corrected: “It's a good idea to **clear this**.” *clear* p≈0.70. **This** = the active filter (Fixed), not the whole page.

**00:13.320–00:15.280** Speaker A:
> Raw ASR / corrected: “Do you have a button for this?”
> *button* p≈0.85. They can already see the **Clear all** words; they want it to *be* a button.

**00:15.340–00:15.720** Speaker B:
> Raw ASR / corrected: “I don't know.”

**00:15.920–00:16.840** Speaker A:
> Raw ASR / corrected: “Everyone has a button like this.”

**00:17.480–00:17.700** Speaker B:
> Raw ASR / corrected: “Okay.”

**00:19.800–00:20.600** Speaker B:
> Raw ASR / corrected: “I accept.”
> *accept* p≈0.96. Agreement to ship a real Clear-all **button**, not a new filter.

They do not name pixels, icon, or copy besides the control type. Tabs start in `02`.

## First-principles problem
- What must be true: if a filter is on (here **Fixed**), the customer needs an obvious way to put the list back to default without hunting each group.
- Root vs symptom: the words **Clear all** already exist. The complaint is **it does not look like a button**, so they are not sure it is the control (“do you have a button”).
- Constraint they implied: match the pattern **everyone** already knows (a clear-all **button**), not a quiet text link.

## Directions they considered
- One direction: a **button** that clears this (the active filters).
- Lean: B accepts it. Not a taste nit.
- They do **not** click it, do **not** ask to remove Fixed as an option, do **not** retune “About 1–2% higher.”

## Company / user / future thinking
- User: arrives to compare; may have tapped Fixed (or the last session left it on). Clearing should feel like a normal filter toolbar, not a hidden text link.
- Company: Shroffin is independent comparison — the default list (Floating, in later shots) is the fair first view. A weak clear control hides that default.
- Future: `10` will switch Fixed → Floating on purpose to hunt SBI. Do not treat that later click as this Clear-all ticket.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-filters-clear`; styles for `.hlc-filters-clear`; show/hide in `src/home-loan-compare.js` (`el.filtersClear`). Live markup is already `<button type="button">` with `hidden` until filters are dirty — recorded look is still a **text link**.
- Acceptance criteria in their words: “It's a good idea to clear this.” “Do you have a button for this?” “Everyone has a button like this.”
- What NOT to do: do not add a second Clear control. Do not restyle Bank type / Rate segments as the “button.” Do not invent a full filter reset of loan inputs (Existing EMIs ₹555 stays; they are not talking about the form).
- Open questions: filled vs outline button; whether Clear all should stay next to the Filters heading.
- Related recordings:
  - continues_from: `wb-rec-260815-2322` (same page, leftover Fixed list / ₹555)
  - continues_in: `02` (tabs); later `10` clicks **Floating** instead of Clear all

## Evidence index
- `audio.vtt` 00:10.040–00:20.600
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (clear; button; I accept)
- `events.json`: idle + scrolls only until 01:03
- `screenshots/0000.jpg`–`0002.png`: Clear all + Fixed selected
- `pages.json` / `RECAP.md`: Filters region
- `manifest.json` viewport 1366×768 @2x; `console.json` `[]`
- Site: `#hlc-filters-clear`, Rate **Fixed**
