# After the product video, do not say “one standardized view” again

They start this clip by testing order: put the product first, then the sentence. They skip up to the Explore-banks demo on purpose. Once a visitor has already *watched* the whole market in one table, the next charcoal line that says the same thing is leftover voice-over. Tell it in the video — or do not tell it again underneath.

## Classification
- kind: discussion | copy | information-architecture
- status: open
- surface: homepage / Explore banks product demo (`section[aria-label="Explore banks product demo"]`) and `section.home-lead` second `.home-lead-line` (“Now, the entire market sits in one standardized view…”)
- viewport: 1366×768 @2x
- speakers: ASR is not diarized (`audio.json` language tag `mr`; they speak mixed English). Two live turns: Speaker A runs the skip-and-watch test and says if they are watching the video they do not have to tell it. Speaker B: “Okay, you can tell it.” Speaker A rejects that: “You have to see it there only.”

## Session metadata
- folder: `wb-rec-260815-2009`
- recording id: `e5ccc985-647d-47ca-bd54-67b8bb2a8319`
- clip: 6 of the 15 Aug 2026 homepage pass (Yash + Parth)
- started_at: 2026-08-15T14:39:23.871Z
- ended_at: 2026-08-15T14:48:19.960Z
- duration_ms: 536089 (~8 min 56 s)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 68
- event count: 166
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left the homepage)
- viewport: 1366×768, device_scale_factor 2
- previous clip: `wb-rec-260815-2000` (transparent slide unnecessary; six unique points; refactor into a story; font/color liked; zero fade; accordion called cheap)
- next clip: `wb-rec-260815-2018` starts 2026-08-15T14:48:26.950Z (~7 s later) — disclaimer voice, then AI-native agent listening. Not this beat.

## Where on the page
- URL: `http://localhost:8765/`
- Session opens leftover from the previous recording: `screenshots/0000.png` is still “Built around you.” with Guides expanded. First focus at **00:03.554** (`t=3554`) is `#home-built-trigger-0`. They are **not** talking about Guides yet; they scroll away from it.
- They move into the dark lead: **00:09.367** scroll y=1534, then click the standardized-view paragraph.
- Click: **00:09.824** (`t=9824`) `locator("main > div > section:nth-of-type(1) > div > div > div > div > p:nth-of-type(1)")` — CSS `p.home-lead-line` that begins “Now, the entire market sits…”. `screenshot_id` 2. `locator_matches` n=1.
- Then they prove the point by going back to the product: **00:14.933** y=0 (hero / demo), **00:17.066** y=1020.5, **00:18.632** y=1188.5 (between demo and story).
- On-page copy they are pointing at (`index.html` `.home-lead-stack`, ~3156–3159):
  - Title: “We completely re-engineered your home loan journey.”
  - Line 2: “Now, the entire market sits in one standardized view, built so you can cross-examine rates, rules, and fine print at a glance.”
  - Line 3: “You can look through every lender before you give your phone number or email.”
  - Line 4: “You pick your banks, apply once to all of them, and they compete for you.”
- The “video” is the desktop product demo (Safari chrome, comparison table). This clip does not restyle that demo. Later, at **08:11.884**, they jump to y=0 again and inspect `div.spd-safari-toolbar` (`screenshots/0062.png`) — leftover inspect while heading to the footer, **not** a new demo issue in this beat.
- Screenshots:
  - `0001.png` (t=8208) — three lead lines; “Transparent” outlined at the bottom
  - `0002.png` (t=10226, the click) — four-line lead including the title
  - `0003.png` (t=20207) — after skip-to-top: only the re-engineered title in the dark field
  - `0004.png` (t=28208) — back on the three story lines + “Transpare…”

## What they said (faithful, complete)

**00:01.370–00:03.750** Speaker A:
> Raw ASR: “How does a product look like when it is given in the starting?”
> Corrected: “How does a product look when it is given at the start?”
> Meaning: they are testing story order — product first, then words. Not asking for a new hero layout.

**00:05.310–00:12.050** Speaker A, reading the live sentence:
> Raw ASR: “Suppose this is the sentence. Now the entire market sits in one standardized view.”
> Corrected: same. “Suppose this is the sentence” = they are using the on-page line as the example, not inventing a new slogan.

**00:13.030–00:21.930** Speaker A, after skipping:
> Raw ASR: “Now I have skipped this video and come down. And I am watching the video, so I don't have to tell it. That it sits in one view.”
> Corrected: “Now I have skipped this video and come down. And [if] I am watching the video, I don’t have to tell [anyone] that it sits in one view.”
> The skip is the experiment: watch the table → the next section must not recap the table.

**00:22.190–00:30.610** debate, both speakers:
> Raw ASR Speaker B: “Okay, you can tell it.”
> Raw ASR Speaker A: “But what is this? You have to see it there only. I can see the standardized view.”
> Corrected: Speaker B allows saying it in copy. Speaker A: no — the visitor should see it **in the product, there only**. “What is this?” is them looking at the leftover sentence, not asking for a definition of “standardized.”

They do not rewrite the sentence in this minute. They do not attack the demo. They set a rule: show it in the video, or do not retell it after the visitor has already seen it. Speaker B’s “you can tell it” is **floated and rejected in the same breath** — it is not the close of the beat.

Immediate follow-ups in this same dark section (not this file): a plus button (**dismissed**), then an Excel background (**parked**), then “let’s not talk about this section.”

## First-principles
- What must be true: after the Explore-banks demo, “it sits in one view” is already known. The next beat has to be *new* information.
- Root vs symptom: a repeated sentence is the symptom. The root is story order — the standardized-view *product* is given at the start, so the standardized-view *claim* in `.home-lead` is leftover narration.
- Constraints: keep the product at the start. Do not delete the demo to “make room” for the sentence. Last clip already counted six unique points and asked for a shorter story; this line is a candidate to drop or replace, not to decorate.

## Directions they considered
- Speaker B: you can still tell it in words — **floated, then rejected.**
- Speaker A: see it in the product only; do not retell “sits in one view.”
- Lean: Speaker A’s rule. Do not treat Speaker B’s permission as the decision.
- Pros Speaker B implied: the claim is still true, so saying it is allowed. Cons Speaker A stated: the visitor already saw it; repeating it is empty.

## Company / user / future thinking
- Company: Shroffin’s difference is a standardized market view, not a bank. That fact can live in the product they already built.
- User: if they just watched the table, a second “one view” line is extra reading.
- Future: later in this clip they harvest seven unique points into the four dark sections. This line is a candidate to drop or replace with a *next* beat — not a candidate to decorate with a plus or a spreadsheet.

## Fix metadata
- Likely code owners: `section.home-lead` / `.home-lead-line` in `index.html` (~3157, “Now, the entire market sits…”). Hero demo stays (`css/shroffin-product-demo.css`, `pages/_product-demo-frame.html`).
- Acceptance in their words: if the visitor is watching the video, “I don’t have to tell it that it sits in one view”; “you have to see it there only.”
- What NOT to do: do not remove or restyle the hero video. Do not add a plus button or Excel overlay to “explain” this sentence (those ideas are raised and killed in the next two minutes). Do not treat Speaker B’s “you can tell it” as the decision. Do not invent a demo-chrome bug from the later `spd-safari-toolbar` inspect.
- Open questions: if the sentence is cut, what new information occupies that slot? Left to the seven-point refactor later in this clip.
- continues_from: `wb-rec-260815-2000` (`03-six-unique-points-inventory.md`, `05-refactor-six-points-into-a-story.md`) — this “standardized view” line was already inside the six-point story they were refactoring; standardized market / “bring everything to you” was how they do uniqueness, not a seventh label yet
- continues_in: `02-plus-button-no-friction-dismissed.md` (same section, rejected control); `06-refactor-four-dark-sections-seven-points.md` (how remaining copy should be rebuilt)

## Evidence index
- `audio.vtt` / `audio.txt` / `audio.text` / `audio_sentences.txt` 00:01.370–00:30.610
- `events.json`: focus `#home-built-trigger-0` t=3554; scroll y=1534 t=9367; click story `p:nth-of-type(1)` t=9824 screenshot_id 2; scroll y=0 t=14933; y=1020.5 / 1188.5 t=17066 / 18632
- `screenshots/0001.png`–`0004.png` (`screenshots/index.json`)
- `pages.json`: region “We completely re-engineered your home loan journey.”; region “Explore banks product demo”
- `replay.spec.ts`: first real click is that lead paragraph
- `index.html`: `.home-lead-line` “Now, the entire market sits in one standardized view…”
- `manifest.json`: viewport 1366×768, dsf 2; mic on; `console.json` empty
