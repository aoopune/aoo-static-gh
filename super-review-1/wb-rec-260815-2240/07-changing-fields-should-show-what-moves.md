# You can’t dump the whole first picture — changing income, property, or age should show what moves (including the rate)

They agree you cannot take **all** of the first information in one dump. Put a number, and the page should update: income in, then property, then age; they even say monthly income will go down; **ROI** (rate) will change — but **before** that, tell them what the ROI is. Speaker B: “Yes, correct.”

## Classification
- kind: issue | product (live feedback on inputs vs table)
- status: open
- surface: explore-banks / `#hlc-monthly-income`, `#hlc-property-value`, `#hlc-age` → Overview table columns Rate / Loan amount / EMI (Rate often masked in screenshots).
- viewport: 1366x768 @2x
- speakers: Speaker A walks the sequence. Speaker B: “Yes, correct” twice. ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2240`
- recording id: `a82e9a9f-c11f-4376-881d-25a436d5e6f5`
- clip: 18 of 30
- started_at: 2026-08-15T17:10:04.687Z
- ended_at: 2026-08-15T17:19:10.273Z
- duration_ms: 545586 (~9 min 6 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 67
- event count: 127
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2231`
- next: `wb-rec-260815-2249`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- They **talk** this sequence; they do **not** type income/property/age here (Age fill comes later at **06:21** for validation). The table already shows Canara Bank **₹5,400** / **20 yrs** / **₹48** from the leftover ₹6,000 property — a live-looking result, which is what they are pointing at conceptually.
- Scroll: **04:38.732** y=287, **04:40.166** y=106 — looking down at the table then back to the form while saying “if you put it here.”
- Screenshots: `0032.jpg`–`0040.jpg` form + Canara row; Rate column blacked out by recorder (they still talk **ROI** = rate of interest).

## What they said (faithful, complete)

**04:38.640–04:55.940** both:
> Raw ASR: “If you put it here, what can you do about it? But the thing is... If you put the first information... You can't take all the pieces of the first information. You can't take all the pieces of the first information. Yes, correct.”
> Corrected: same. “First information” = the first picture of the page (`06`: form + tips + two rows). You **cannot** deliver every piece of that picture in one dump. The repeat of “pieces of the first information” has near-zero word confidence on `pieces` / `first` / `information.` — the first pass of the same line is usable. Speaker B: “Yes, correct.”

**04:59.560–05:23.100** Speaker A (the live loop):
> Raw ASR: “Once I put it there... Automatically, based on this... If you put it here... Then it will look like this. Then it will look like this. Then it will look like this. Suppose I put the income there. Then I change the property value. Then I change the age. Then the monthly income will go down. If you change by this... ROI will change. But before that, tell me what is the ROI?”
> Corrected: same on the sequence. Automatic updates as each field is placed. Example order: **income** → **property agreement value** → **age**. “Monthly income will go down” is said after changing age — they may mean **eligibility / loan / EMI** going down, or they literally mean the income figure; do not overwrite. **ROI** = **rate of interest** (table Rate column), not a Google/SEO “ROI.” Last “ROI?” is near-zero ASR (~0.005) but they already said “ROI will change” in the line before. Order they insist on: **show the current rate first**, then let them see it **change** when they change a field.

**05:24.400–05:25.880** Speaker B:
> Raw ASR / corrected: “Yes, correct.”

They do not click See options in this span. The idea is the table (or tips) should **follow** the fields, not wait for a separate “dump.”

## First-principles problem
- What must be true: the first glance (`06`) is a **sequence of reveals**, not one slab of every fact. Each input they put should have a visible consequence; the rate should be knowable **before** it moves.
- Root vs symptom: “too much first information” is the symptom of teaching everything at once. Root: the page must **pace** cause and effect (this field → that row/rate).
- Constraints they implied: automatic (“based on this”); income, property, age as the example chain; name the ROI before advertising that it will change.

## Directions they considered
- Don’t take all first-information pieces at once.
- Auto-update the picture as each field is entered.
- Show ROI, then show ROI change.
- Lean: Speaker B twice agrees. This is the “show me like this” from `05`.

## Company / user / future thinking
- User: learns by **doing** (put income, change property, change age), not by reading a spec. Needs the rate visible or the “it will change” lesson has no before-state.
- Company: opinionated pacing (`01`): they choose this order instead of dumping every column and every helper on land.
- Future: `08` says they don’t know where all information will come from and that live tips may need an **API** (today the page is “front-end only”). Capture the data constraint there.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` inputs + compare bundle that refreshes Rate / loan / EMI as `#hlc-monthly-income`, `#hlc-property-value`, `#hlc-age` change — not only on `#hlc-see-options` submit.
- Acceptance criteria in their words: you can’t take all the pieces of the first information; put income, change property, change age; then it will look like this (repeated); ROI will change; **before that, tell me what is the ROI**.
- What NOT to do: do not add a tutorial overlay that dumps every fact. Do not hide the Rate column (they want it named first). Do not invent that they asked for a specific animation.
- Open questions: whether “monthly income will go down” is a slip for EMI/eligibility. Whether updates must be keystroke-live or on blur. `08` asks where the numbers come from.
- Related recordings:
  - continues_from: this clip `05`–`06`.
  - continues_in: this clip `08` (don’t know where information comes from; API vs front-end).

## Evidence index
- `audio.vtt` 04:38.640–05:25.880
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span (ROI)
- `events.json`: scrolls t=278732 / 280166 (y=287 then y=106)
- `screenshots/0032.jpg`–`0040.jpg`
- Site `pages/explore-banks.html`: `#hlc-monthly-income`, `#hlc-property-value`, `#hlc-age`; table Rate column
