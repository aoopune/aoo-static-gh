# Next line: private vs public — minimum fee vs variable; there is no guide

Right after “mandatory fee” they dictate the **next** line: **private banks minimum fee** (said twice), **public banks minimum fee**, **public banks variable fee**. They then repeat **there is no guide** four times — they want this written as a guide, and the login-fee Notes they have open do not count.

## Classification
- kind: issue | copy / guide
- status: open
- surface: Processing fees * note and Notes **Processing fees (\*)**. Filter rail **Bank type** All / Public / Private is on the cheap-end frames (`0000.jpg`, `0001.jpg`, `0014.png`); they do **not** click it. Nav has **Guide**. They say the processing-fee **guide** is missing.
- viewport: 1366x768 @2x
- speakers: Speaker A dictating “next, you have to write.” ASR not diarized.

## Session metadata
- folder: `wb-rec-260816-0004`
- recording id: `08aa721b-3f2e-484c-b39e-58b789d21095`
- clip: 27 of 30
- started_at: 2026-08-15T18:34:46.547Z
- ended_at: 2026-08-15T18:43:30.319Z
- duration_ms: 523772 (~8 min 44 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 128
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2355` (~5 s earlier)
- next: `wb-rec-260816-0013` (~3 s later)

## Where on the page
- Same * note as `01`/`02`. Speech **01:21–01:39** is still on `0007.png`–`0010.png`: ICICI / Kotak / RBL ₹96,000 (private names) and IDFC FIRST ₹1,44,000, with Notes open.
- Bank type **All** is selected whenever that rail is in view. They never click Public or Private in this recording.
- Later drawers (`06`) **show** the mechanics they are naming: Canara (public) **maximum applied ₹10,000**; DCB (private) **2%** above a **₹5,000 minimum**; IDFC FIRST (private) **3%** of ₹48L. That is evidence for the split, not a click in this span.
- “There is a guide / There is no guide”: global nav **Guide** exists; Charges Notes exist (login-fee paragraph). They still say **no guide** for this meaning.

## What they said (faithful, complete)

**01:21.160–01:30.400** Speaker A:
> Raw ASR: “Next, you have to write, private banks minimum fee, private banks minimum fee, public banks minimum fee, public banks variable fee.”
> Corrected: same list. **Next** = after mandatory (`02`). **Private banks — minimum fee** (repeated; second **private** p≈0.004 — they are repeating, not renaming). **Public banks — minimum fee**, then **public banks — variable fee**. ASR **minimum** on the public-banks line p≈0.08; **variable** on the last clause p≈0.24. Do **not** invent a full public-vs-private tariff. Record the four phrases they spoke.

**01:30.740–01:39.100** Speaker A:
> Raw ASR: “There is a guide. There is no guide. There is no guide. There is no guide. There is no guide.”
> Corrected: same. One beat of “there is a guide” (**guide** p≈0.86), then **there is no guide** ×4 (later **guide** p≈0.96 / 0.0007 / 0.20 / 0.97). The processing-fee explanation they want is **not** on a guide. The login-fee * Notes they are staring at do not count as that guide.

Then `02`’s “you have to write, yes… how to avoid this.”

## First-principles problem
- What must be true: after mandatory, the customer sees **how the fee is built** differs — **minimum** vs **variable**, and they tied that split to **private vs public**.
- Root vs symptom: a single login-fee * for every bank hides that split. The missing **guide** is the place they expected the rule, not a new filter (Public/Private already exists).
- Constraints: they listed phrases to **write**, not a request to auto-filter the table in this span.

## Directions they considered
- Write private-banks **minimum fee**.
- Write public-banks **minimum** and public-banks **variable**.
- Put it in a **guide** — they say that guide is **absent**.
- Lean: copy + guide, not a new Bank type control.

## Company / user / future thinking
- User: sees Indian Bank ₹2,500 (flat, when they scroll back) and IDFC ₹1,44,000 (3% of ₹48L) in one column with no private/public rule stated.
- Company: full picture includes **why** public and private rupees are different kinds, not only sorted amounts.
- Future: drawers in `06` **show** min/max/percent. This item is the **written rule**; those drawers are the worked example. `wb-rec-260816-0013` starts back on Charges then Other charges — do not dump floating/MCLR into this note.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Processing fees * note; a Guide article/section that does not exist yet for this meaning; do not pretend `pages/guide.html` already covers it (they said **no guide**). Bank type filter is already there — not the gap.
- Acceptance criteria in their words: “next, you have to write, private banks minimum fee… public banks minimum fee, public banks variable fee”; “there is no guide.”
- What NOT to do: do not invent exact public/private percentages they did not speak. Do not treat the login-fee * as the guide. Do not add a second Bank type control. Do not flatten “public banks minimum” and “public banks variable” into one invented rule.
- Open questions: precise public vs private rule (min vs % vs cap) per bank — later drawers show mixed mechanics. Whether “minimum” on public was a slip before “variable.”
- Related recordings:
  - continues_from: `02` (“next, you have to write”)
  - continues_in: `06` (Canara max / DCB min / IDFC 3% as live examples); guide still missing at clip end

## Evidence index
- `audio.vtt` 01:21.160–01:39.100
- `audio.json`: **private** / **public** / **minimum** p≈0.08 on the public-min beat; **guide** repeated
- `events.json`: idle; Bank type not clicked
- `screenshots/0007.png`–`0010.png`; filter **All / Public / Private** from `0000.jpg` / `0001.jpg` / `0014.png`
- On-screen * note: still login fee only
