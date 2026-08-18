# Dark-to-light of the night looks like a movie

After the second open of live Explore banks they sit on the white tool and praise the change from home: dark to light, of the night, like a movie. Several “Nice”s. Look-and-feel, not a bug.

## Classification
- kind: praise | visual / scene change
- status: not-a-bug
- surface: homepage dusk product-demo (landscape photo behind the fake browser) → live `pages/explore-banks.html` white tool
- viewport: 1366×768 @2x
- speakers: Speaker A (or both overlapping “Nice”). No disagreement. No speaker labels in ASR.

## Session metadata
- folder: `wb-rec-260815-2106`
- recording id: `2c589daf-48f1-4304-8831-5a9870fea870`
- clip: 8 of 30
- started_at: 2026-08-15T15:36:22.615Z
- ended_at: 2026-08-15T15:45:24.586Z
- duration_ms: 541971 (~9 min 2 s)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 202
- console: empty (`console.json` is `[]`)
- tabs: 1
- previous: `wb-rec-260815-2018` — homepage closed (“home page done.”)
- next: `wb-rec-260815-2116` — already on Explore banks; input-copy, not this look

## Where on the page
- URL while they speak: `http://localhost:8765/pages/explore-banks.html` (second landing, after `0003.jpg` blank chrome).
- The **look they are naming** is the homepage they just left twice: dusk / night-roof photo under the fake “Explore banks.” window (`0000.png`, `0002.png`).
- Click during this talk: **00:37.621** (`t=37621`, screenshot_id 5) `locator("main > div")` — a click on the main column, not a named control.
- Idle **00:23–00:46** while they look.
- Screenshots while they praise (**00:34–00:46**):
  - `0004.jpg` (t=32208) — white page, heading “Explore banks.”, loan-input card; dusk is gone
  - `0005.jpg` (t=38024) — same; the `main > div` click
  - `0006.jpg` (t=46209)
- Contrast frames: `0000.png` / `0002.png` — tool sitting in a fake browser on a **dark sunset / night** photo. That is the dark they leave.

## What they said (faithful, complete)

**00:34.490–00:38.210** Speaker A:
> Raw ASR / corrected: “Nice. Nice.”

**00:39.110–00:41.550** Speaker A:
> Raw ASR: “Dark to light of the night. It looks like a movie.”
> Corrected: **dark to light**, of the night (the homepage dusk photo). **It looks like a movie.** (`Dark` p≈0.21; `movie.` p≈0.14 — weak words, but the phrase is the beat they came to say, and it matches the dusk→white cut they just made.)

**00:44.250–00:45.950** both / overlapping:
> Raw ASR / corrected: “Nice. Nice.”

No pixel notes. No request to add a fade. No request to darken Explore banks. Praise only — do not convert this into a motion ticket.

## First-principles problem
- What must be true: leaving the homepage’s dark product shot into the live white tool should feel like arriving, not a jolt they dislike. Here they **like** it.
- Root vs symptom: praise of contrast (dusk demo → white product), not a missing CSS transition they asked to build.
- Constraints: keep the cinematic dark-to-light. Do not “fix” it by painting both pages the same grey.

## Directions they considered
- Only praise. No alternative look. No dismissed redesign.

## Company / user / future thinking
- User: the jump from story to the working compare page should feel like a film cut — they already feel that.
- Company: homepage demo can stay cinematic (dark photo); the product stays a clear white tool.
- Future: later beats in this clip criticise filter chrome, not this transition.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none required. Homepage demo photo in `index.html` (Explore banks product-demo region); live page `pages/explore-banks.html`.
- Acceptance criteria in their words: “dark to light of the night”; “it looks like a movie”; “Nice.”
- What NOT to do: do not flatten the homepage dusk photo or paint Explore banks dark to “match.” Do not add a snappy transition they did not ask for.
- Open questions: none from this beat.
- Related recordings:
  - continues_from: `01` in this folder (the open they are reacting to); homepage closed in `wb-rec-260815-2018`
  - continues_in: `03` pre-populated values on the same white card

## Evidence index
- `audio.vtt` 00:34.490–00:45.950
- `audio.json` “movie.” p≈0.14; language `mr`
- `events.json`: idle; click `main > div` t=37621 screenshot_id 5
- `screenshots/0004.jpg`–`0006.jpg` (contrast: `0000.png` / `0002.png`)
- `manifest.json` viewport 1366×768
- Site: `index.html` product demo + `pages/explore-banks.html`
