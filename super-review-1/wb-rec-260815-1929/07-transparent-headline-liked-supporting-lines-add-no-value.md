# They like “Transparent, like never before.” The two lines under it do not earn their place

They scroll into the next dark block: huge outlined “Transparent,” then “like never before.” They like that. Under it, “So you find what works for you” does not add much, and “with no surprises” adds nothing at all. They want supporting lines that actually say something — or skip this whole block — or redesign it. They do not pick which of those three.

## Classification
- kind: issue (body) + praise (headline)
- status: open
- surface: homepage / `section.home-clear` / `h2#home-clear-title` / `.home-clear-word` “Transparent,” / `.home-clear-aside` “like never before.” / `.home-clear-body` (`.home-clear-body-lead` + `.home-clear-body-tail`)
- viewport: 1366×768 @2x
- speakers: Speaker A. Speaker B silent. No disagreement.

## Session metadata
- folder: `wb-rec-260815-1929`
- recording id: `fb743d3e-45ef-48e2-a191-4c7147d743cb`
- started_at: 2026-08-15T13:59:20.405Z
- ended_at: 2026-08-15T14:08:27.240Z
- duration_ms: 546835
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 66
- event count: 115
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- Live copy (`index.html` ~3166–3174):
  - Headline: “Transparent,” (outline) + “like never before.”
  - Body: “So you find what works for you” + “ — with no surprises.”
- Clicks: none on this section. They arrive by scroll after dismissing the lag note.
- Scroll:
  - **04:23.099** y=2605.5
  - **04:27.032** y=2891
  - **04:27.831** y=3175.5
  - **04:29.298** y=3084.5 (settle; they talk here)
- Screenshots while they judge the lines (04:44–05:02):
  - `screenshots/0033.png` (t=264196) — Transparent in view
  - `screenshots/0034.png`, `0035.png`
  - `screenshots/0036.png` (t=290196) — during “so you find what works”
  - `screenshots/0037.png` (t=298196) — during “no surprises” / skip-or-redesign
- What is visible: light nav; charcoal full viewport; “Transparent,” as large hollow type (letters overlapping); “like never before.” solid white; smaller two-line body centered. Lots of empty dark. CSS holds the section (`min-height: 175svh` on `.js .home-clear-track`).

## What they said (faithful, complete)

**04:44.700–04:47.480** Speaker A:
> Raw ASR: “Transparent like never before, I like this.”
> Corrected: same. They like the headline pair.

**04:48.140–04:52.080** Speaker A:
> Raw ASR: “So you find what works for you, I don't think it adds so much value.”
> Corrected: same. Low value, not zero.

**04:52.340–04:55.780** Speaker A:
> Raw ASR: “And with no surprises, I don't think it adds any value at all.”
> Corrected: same. Stronger: **no** value.

**04:56.600–05:02.600** Speaker A:
> Raw ASR / corrected: “Let's find some sentences that add value, or let's skip this section entirely, or redesign this section.”

They do not draft replacement sentences. They do not criticize the outline type. Next they scroll into two bare zeros (`08`).

## First-principles problem
- What must be true: every line in this block should either carry a real claim or leave. A liked headline is not enough if the supporting lines say nothing extra.
- Root vs symptom: the symptom is two weak sublines. The root is value — does the sentence tell the customer something they did not already get from “Transparent, like never before”? They say those two do not.
- Constraints: keep the liked headline unless they later choose skip or redesign. Do not pad with empty comfort (“no surprises”).

## Directions they considered
1. Find supporting sentences that **add value**.
2. **Skip this section entirely.**
3. **Redesign this section.**
- Lean: headline stays liked; both sublines are on the chopping block. No vote among 1–3. “No surprises” is the weaker of the two (“any value at all” vs “so much value”).

## Company / user / future thinking
- Transparency is a claim they want to stand behind as a feeling and a headline.
- They will not keep copy just to fill a layout. If a line does not help the customer choose or trust, it should go or the section should be rebuilt.
- “No surprises” as empty comfort is not how they want Shroffin to talk.
- Later in `wb-rec-260815-1951` they ask whether the four dark-story sections are all needed — that is the same “skip this section” instinct at page scale.

## Fix metadata
- Likely code owners: `section.home-clear` / `#home-clear-title` / `.home-clear-body` in `index.html`; outline type CSS under “Clear — Transparent as hollow outline type.”
- Acceptance in their words: “Transparent like never before, I like this”; supporting lines must “add value”; or skip the section; or redesign it. “With no surprises” must not stay if it still adds no value.
- What NOT to do: do not rewrite the liked headline just because the body failed. Do not replace “no surprises” with another empty comfort line. Do not invent new supporting copy in this audit — they did not draft it here.
- Open questions: keep the section with new body lines, delete it, or redesign structure? Is the outline “Transparent” part of what they like, or only the words?
- continues_from: `06-scrolling-false-alarm-review-as-cursor-phone-text.md`
- continues_in: `wb-rec-260815-1951` (`06-four-story-sections-trim.md`) — related to “skip this section,” not a replacement for this file. No new Transparent sentences in 1951.

## Evidence index
- `audio.vtt` 04:44.700–05:02.600
- `events.json` scrolls t=263099–269298; no click
- `screenshots/0033.png`–`0037.png`
- `pages.json` h2 “Transparent, like never before.”
- Site `index.html` ~3166–3174 and `.home-clear*` CSS ~361–378
