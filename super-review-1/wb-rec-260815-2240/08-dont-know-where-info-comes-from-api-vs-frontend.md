# We don’t know where the numbers come from — live tips may need an API; today this is front-end only

They hit a data limit on the live-update idea: if you put information in one place, they do not know where “all the information” will come from. They say they need two tips. Then: this (the live intelligence) is an **API**; first time an API is available; otherwise this page is **front-end only**.

## Classification
- kind: discussion | constraint (architecture / data)
- status: open
- surface: explore-banks / same form + table; not a visual bug. Constraint on `06`/`07` tips and auto-updates.
- viewport: 1366x768 @2x
- speakers: Speaker A states the gap. Speaker B: “Okay.” / “Do you know what is API?” ASR is not diarized.

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
- Scroll while they talk API: **05:53.351** y=173, **05:55.051** y=172, **05:56.750** y=188.5 — small nudges on the same card + table (`0041.jpg` t=362206 shows two lender rows: Canara + City Union Bank). No click until **06:18** (next files).
- Screenshots: `0041.jpg`–`0042.jpg`.

## What they said (faithful, complete)

**05:34.300–05:42.280** Speaker A:
> Raw ASR: “So basically, Google sites don't have the same information. If you put one information somewhere... It means if you put all the information... We don't know where it will come from.”
> Corrected: keep **Google sites** as spoken (not flagged low-confidence) — could still be “all these sites” or something else. Do not invent a Google product. The **clear** claim: putting information **in one place** is not the same as having **all** information; they **do not know the source** of the rest (which bank, which field, which backend).

**05:47.020–05:48.640** both:
> Raw ASR: “Okay. We need two tips.”
> Corrected: same. “Two tips” = two tooltips / two hints (they asked for **three** in `06`; here they say **two**. Record both; do not collapse). Not “two types” unless later clips prove it.

**05:49.620–05:58.760** both:
> Raw ASR: “Do you know what is API? This one is API. First time API is available. Otherwise, this is all front-end only. What do you have to listen?”
> Corrected: “Do you know what an API is? This one is [an] API. First time [an] API is available. Otherwise, this is all front-end only.”
> Last line **What do you have to listen?** is not safely correctable (maybe “what do you have to list”). Leave raw. `Otherwise,` is very low-confidence (~0.02) but “front-end only” is the payload.
> Meaning they state: the **live** “then it will look like this” / extra tips they want is **not** something the current static page can fully do — it needs a server/API. They note this would be the **first** time they have an API; today Explore banks is **front-end only**.

**06:03.620** Speaker B: “Okay.” Then they scroll up (“Coming down”) into the button-copy block (`09`).

## First-principles problem
- What must be true: if the page is going to react with tips and changing rates (`07`), the extra facts have to **come from somewhere**. Right now they cannot point to that source; the page they are reviewing is client-side.
- Root vs symptom: “we don’t know where it will come from” is the root data problem. “Need an API” is the constraint they name, not a request to design a REST spec in this clip.
- Constraints they implied: do not pretend all information is already in the form; front-end-only is the current reality; API would be new.

## Directions they considered
- Admit provenance is unknown if you only fill one field.
- Need two tips (count differs from three in `06`).
- Treat the missing live layer as API vs all-front-end.
- Lean: this is a blocker on `07`, not a rejection of live updates.

## Company / user / future thinking
- User: should not have to know where a rate or a tip is computed. They should see a number and a hint. The company still has to know the source.
- Company: opinionated product (`01`) still needs a **true** rate (`07`: tell me ROI first). If rates only exist in a spreadsheet baked into the front end, “automatic based on this” has a ceiling.
- Future: they say an API is becoming available for the first time. This clip does not name the API, the vendor, or the fields it would return.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: compare data path for Explore banks vs any future API. Not the See options label (`10`).
- Acceptance criteria in their words: we don’t know where [the rest of] the information will come from; we need two tips; this one is API; otherwise this is all front-end only.
- What NOT to do: do not stub a fake API to “look live.” Do not ignore the two-vs-three tips mismatch — ask which count they mean. Do not “correct” Google sites to a brand.
- Open questions: ASR “Google sites.” Two tips vs three tooltips (`06`). What the first API actually is.
- Related recordings:
  - continues_from: this clip `07`.
  - continues_in: this clip `09` (they scroll to Adjust eligibility / Super-English). Not 2249 (that clip is columns vs mandatory fields).

## Evidence index
- `audio.vtt` 05:34.300–05:58.760
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (Google sites, API)
- `events.json`: scrolls t=353351 / 355051 / 356750 (y=173 / 172 / 188.5)
- `screenshots/0041.jpg`–`0042.jpg`
- `manifest.json` viewport 1366×768, dsf 2
