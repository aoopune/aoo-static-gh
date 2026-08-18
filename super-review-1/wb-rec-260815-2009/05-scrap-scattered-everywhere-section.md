# Scrap the “Scattered everywhere” section — maybe keep the word, not the essay

They scroll into the next dark block, play a few seconds of its video, and decide the *section* can go. “Scattered” / “consolidated” might still be useful as a word somewhere. They do not want a whole slide that essays standardization–scatter–consolidation. One piece of information. Not an essay. Don’t get carried away.

## Classification
- kind: product-thinking | copy
- status: open
- surface: homepage / `section.home-open` / `#home-open-title` “Scattered everywhere. Consolidated here.” / Play–Pause on `main > section:nth-of-type(5)`
- viewport: 1366×768 @2x
- speakers: Speaker A leads (scrap the section; maybe keep the word; check whether the other likes it). No recorded fight to keep the full section.

## Session metadata
- folder: `wb-rec-260815-2009`
- recording id: `e5ccc985-647d-47ca-bd54-67b8bb2a8319`
- clip: 6, 15 Aug 2026, Yash + Parth, `http://localhost:8765/`
- started_at: 2026-08-15T14:39:23.871Z
- ended_at: 2026-08-15T14:48:19.960Z
- duration_ms: 536089
- screenshot count: 68; event count: 166; console empty; tabs: 1
- viewport: 1366×768 @2x

## Where on the page
- URL: `http://localhost:8765/`
- On-page copy:
  - h2: “Scattered everywhere.” (soft) / “Consolidated here.” (strong)
  - Caption: “Truly the standard way to compare home loan lenders.” (`Truly` in brand blue)
  - Stage: stacked bank-site windows collapsing into one comparison table (Play / Pause / Replay)
- Scroll into it: **03:04.978** y=7177.5 → **03:07.144** y=7391.5 → **03:11.111** y=7849 → **03:12.644** y=8024.5
- Play / Pause:
  - **03:16.753** Play (`screenshots/0027.png`) — `getByRole("button", { name: "Play" })` css `main > section:nth-of-type(5) > div > div > button`
  - **03:22.706** Pause (`screenshots/0028.png`)
- They then scroll around the same block (y≈7806–8367) and later back toward Built around you.
- Screenshots: `0026.png` (Help copy still at top, Scattered heading below); `0027.png`–`0034.png` (Scattered / Consolidated + play control + caption). Pause button is visible in `0027.png` while they identify the clip.

## What they said (faithful, complete)

**03:11.150–03:17.690** Speaker A:
> Raw ASR: “This is also the same as before. The same as before. And what is this video? Yes.”
> Corrected: this block is repeating a point they already have (standardized view / consolidation). They notice the video and confirm it (“yes”) as they hit Play.

**03:21.250–03:31.290** Speaker A:
> Raw ASR: “It's a word that you can scrap. Because these two are in the lower section. This is the first one. The other one is the new one.”
> Corrected: the *wording* (the scattered / consolidated pair) can be scrapped as a **section**. “These two” = the two lines “Scattered everywhere.” / “Consolidated here.” They are sorting which phrase is leftover vs useful — first line vs the stronger “new” line — not naming a second page.

**03:34.670–03:47.750** Speaker A:
> Raw ASR: “Okay. Let's scrap this section as well. But it's scattered everywhere. Sorry. I don't know if you like it or not.”
> Corrected: scrap this section as well (same instinct as dropping other heavy slides last clip). They immediately reuse the on-page phrase “scattered everywhere,” then apologize / check whether the other co-founder likes keeping that **word**. The other person’s yes/no is **not** recorded as a yes.

**03:52.860–04:15.020** Speaker A:
> Raw ASR: “We can use this word somewhere. Maybe scattered information is consolidated here. Let's see what kind of word it is. Because we don't want to get carried away. We want to convey only one information. Standardization, scatterization, consolidation.”
> Corrected: maybe keep the *word* somewhere — e.g. “scattered information is consolidated here.” Check whether that word earns a place. **Do not get carried away.** Convey **one** piece of information, not a trio of -ations.
> **“Scatterization”** is their nonce (or ASR) for the scatter idea — **not** a customer-facing term to ship. User-facing language, if any, is “scattered” / “consolidated.”

**04:19.040–04:20.980** Speaker A:
> Raw ASR / corrected: “We are not writing an essay.”

Then they fold this into the wider “get rid of sections / pick the unique point / refactor” instruction (`06`). This file stops at: this *section* is surplus; the *word* is optional spare copy.

## First-principles
- What must be true: “market was scattered, we put it in one place” is already the standardized-view point. A full-screen video restating that is a second essay.
- Root vs symptom: a handsome motion piece is the symptom. The root is duplicate unique-point inventory.
- Constraints: few words; one information; not an essay; they may reuse a phrase, not the whole block. Last clip’s goal was consolidation of *sections* — keeping this slide would work against that.

## Directions they considered
- Scrap the section — **lean**.
- Keep “scattered” / “consolidated” as a word somewhere — **maybe**, after checking it does not carry them away.
- Keep the video as its own homepage moment — **not** supported (they play it only to identify it, then pause).
- Pros: the phrase is sticky. Cons: it duplicates the six/seven-point story and invites a three-word essay (standardization / scatter / consolidation).

## Company / user / future thinking
- Company: consolidation is *how they built the product*, not a seventh-and-eighth slogan. (The actual seventh is Help — `04`.)
- User: they already saw one table in the hero; they do not need a second “truly the standard way” movie for the same fact.
- Future: if the word returns, it returns inside the seven-point refactor, not as `section.home-open` by default.

## Fix metadata
- Likely code owners: `section.home-open` in `index.html` (`#home-open-title`, `.home-open-visual`, Play control, `.home-open-caption`).
- Acceptance in their words: “let’s scrap this section as well”; at most “we can use this word somewhere”; “we want to convey only one information”; “we are not writing an essay”; “we don’t want to get carried away.”
- What NOT to do: do not polish the scattered-banks animation as if this clip asked for a visual upgrade. Do not ship “scatterization.” Do not keep the section just because the word might be useful later.
- Open questions: which single sentence, if any, inherits “scattered / consolidated.” The other co-founder’s taste (“I don’t know if you like it or not”) is not recorded as a yes.
- continues_from: `04-seventh-unique-point-help-toward-what-you-need.md` (“same as before”)
- continues_in: `06-refactor-four-dark-sections-seven-points.md` (this is one of the blocks they want to get rid of / harvest)

## Evidence index
- `audio.vtt` / `audio.txt` 03:11.150–04:20.980
- `events.json`: scrolls t=184978–192644; Play t=196753 screenshot_id 27; Pause t=202706 screenshot_id 28; further scrolls t=204346–220078
- `screenshots/0026.png`–`0034.png`
- `pages.json`: heading “Scattered everywhere. Consolidated here.”; second Play action
- `replay.spec.ts`: Play then Pause on `main > section:nth-of-type(5)`
- `index.html`: `section.home-open`, caption “Truly the standard way to compare home loan lenders.”
