# Refactor the four dark sections so seven points flow — few words, then pick *n* screens

They stop harvesting and give the later build recipe: throw out surplus dark slides, keep the important unique point (the seventh) plus supplementary lines for the other six, and rebuild the four charcoal sections so all seven points are told in a coherent, polished, short sequence. Only after that, decide how those seven points spread across *n* sections. Section count is not frozen at four.

## Classification
- kind: product-thinking | information-architecture | copy
- status: open
- surface: homepage / `.home-story-dark` four sections: `section.home-lead`, `section.home-clear` (“Transparent, like never before.”), `section.home-zero` (“Zero commissions. Zero bias.”), `section.home-best` (“Best of all, you can look through everything at your own pace,”) — plus the Built around you / Scattered harvest they just did
- viewport: 1366×768 @2x
- speakers: Speaker A states the recipe. No dissent recorded. Last clip Speaker B already agreed “one screen does not take too many words.”

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
- The four dark sections (`index.html` inside `.home-story-dark`):
  1. `home-lead` — re-engineered journey + standardized view + browse before number + apply once
  2. `home-clear` — “Transparent, like never before.” / “So you find what works for you — with no surprises.”
  3. `home-zero` — “Zero commissions. Zero bias.”
  4. `home-best` — “Best of all, you can look through everything at your own pace,” / “without spam calls, a hard sell, or pushy notifications.”
- During this speech they are still physically on Scattered / Built around you, then jump around:
  - **04:32.435** click `#home-built-trigger-4` Help (`screenshots/0036.png`) — harvesting the seventh point while naming the refactor
  - **04:39.047** scroll y=6043 then **04:43.612** y=3392.5 — they **go back up** into the dark stack
  - `screenshots/0037.png`–`0040.png`: Zero / Transparent / Best of all (the four dark sections they name). `0037.png` shows the dual “Zero” fade they already complained about last clip.
- They do not edit copy in the browser. This is an architecture instruction for later.

## What they said (faithful, complete)

**04:25.560–04:36.980** Speaker A:
> Raw ASR: “This section also let's get rid of it. This section also let's get rid of it. Just pick important, this unique point from here. And supplementary information of other unique points from here.”
> Corrected: get rid of this section, and that one too (Scattered, and the extra dark slides they have been calling heavy). From the accordion / leftover slides: pick the **important unique point** (the seventh: help toward what you need) and **supplementary information** for the other unique points.

**04:38.080–04:53.460** Speaker A:
> Raw ASR: “And let's refactor these four dark sections. To convey those seven unique points in a coherent manner. With very few words, polished English.”
> Corrected: same. Target = the four charcoal story sections. Job = seven unique points, coherent, few words, polished English.

**04:54.880–05:03.980** Speaker A:
> Raw ASR: “Such that points flow into each other. And then let's refactor into how those seven points get distributed across n number of sections.”
> Corrected: same. Two passes:
> 1. Sequence first — points flow into each other.
> 2. **Then** a second refactor: how many sections (*n*) get which points.
> Section count is **not** frozen at four.

This is the same program as `wb-rec-260815-2000` (six points; don’t make the homepage long; one screen must not take too many words; goal = consolidation) with the inventory updated to **seven**.

They do **not** list the seven points as a numbered manifesto in this clip. From this clip + the previous one, the harvest is: standardized view; browse before number; one application; zero commission / zero bias / genuine; look through at your own pace / no spam; transparency as a quality they may *not* want a whole slide for; **plus** help toward what you need. Exact packing is the later refactor — do not invent a locked seven-line list they did not read out.

## First-principles
- What must be true: unique points are the content; sections are disposable containers. Seven facts must flow; *n* screens is a later packing decision.
- Root vs symptom: too many dark full-screens is the symptom. The root is points duplicated across hero video, lead copy, Transparent / Zero / Best, accordion, and Scattered.
- Constraints they stated here and last clip: very few words; polished English; points flow into each other; not an essay; do not get carried away; one screen ≠ too many words; do not make the homepage long.

## Directions they considered
- Delete surplus sections (Scattered and other repeats) — **yes**.
- Keep four dark sections as the *current* clay to refactor — **yes**, not as a forever count of four.
- After the story is coherent, redistribute seven points across *n* sections — **yes** (second pass).
- Last clip’s example split (slide of two, slide of three, slide of the last point) is still an example, not a lock.
- Lean: story/architecture work, not a visual polish of the existing slides. Do not add plus / Excel (`02`, `03`).

## Company / user / future thinking
- Company: the homepage’s job is to convey seven differences, not to exhibit every motion study they built.
- User: one idea should lead to the next without a long page or a packed screen.
- Future: implementation is a copy + section refactor, then a distribution pass. This clip is the recipe, not the rewritten sentences. `wb-rec-260815-2018` does **not** finish this — it moves to disclaimer voice.

## Fix metadata
- Likely code owners: `.home-story-dark` (`home-lead`, `home-clear`, `home-zero`, `home-best`) in `index.html` plus related home CSS/JS (`shroffin-home-stance.js`, `shroffin-scrub.js`). Harvest sources: `section.home-built`, `section.home-open`.
- Acceptance in their words: refactor the four dark sections to convey seven unique points coherently, “with very few words, polished English,” “points flow into each other”; then decide distribution across *n* sections; pick the important unique point + supplementary info from the lower blocks.
- What NOT to do: do not add a plus button or Excel background. Do not keep Scattered as a fifth dark essay. Do not freeze *n* = 4. Do not write an essay of standardization / scatter / consolidation.
- Open questions: the numbered seven-point list and which points share a screen.
- continues_from: `wb-rec-260815-2000` (`03-six-unique-points-inventory.md`, `05-refactor-six-points-into-a-story.md`); this folder `04`, `05`
- continues_in: homepage unique-point rewrite is still open after this session. `wb-rec-260815-2018` is disclaimer language, not this refactor.

## Evidence index
- `audio.vtt` / `audio.txt` 04:25.560–05:03.980
- `events.json`: click Help t=272435 screenshot_id 36; scrolls t=274312, 279047, 283612 (back into dark stack)
- `screenshots/0036.png`–`0040.png`
- `pages.json`: the four dark headings + Built around you + Scattered
- `index.html`: `.home-story-dark` through `section.home-best`
