# Every new thing is a new release — make the guide and put the tools first

They treat each new piece as its own **release**: take a picture, clap, ask what the timeline is. **Before** going ahead they say they have to **make a guide**, **put tools**, get app-style **updates** ready, get everything **ready-made**. They are looking at Explore banks (a tool under a nav that already has Guide and Tools) while they say this — process, not a new button.

## Classification
- kind: discussion | release process (shipping rule, not a layout bug)
- status: open
- surface: explore-banks / global nav **Guide** + **Tools**; the page itself is the tool they would ship with a matching guide
- viewport: 1366x768 @2x
- speakers: Speaker A: every release is something new; guide + tools before. Someone asks “What is the timeline?” ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2231`
- recording id: `7b334a7d-43b4-4fd5-a754-99f766cf3f24`
- clip: 17 of 30
- started_at: 2026-08-15T17:01:14.381Z
- ended_at: 2026-08-15T17:10:02.771Z
- duration_ms: 528390 (~8 min 48 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 63 (JPEG)
- event count: 85
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2222`
- next: `wb-rec-260815-2240`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Nav (every screenshot): **Guide**, **Tools**, **Support**, **About**. They say “make a guide” / “put tools” with that chrome on screen. They do not open either menu.
- Scroll during this talk (`events.json` scroll `data` is empty; viewport from screenshots):
  - **03:20.200** (`t=200200`) scroll — `0024.jpg` (t=204201) shows a deeper table: Canara through **Bank of India**; Filters now includes **Bank type** All / **Public** / Private (Public selected)
  - **03:53.833** / **03:56.267** further scrolls
  - **03:56.722** (`t=236722`) **click** `getByRole("main")` (`screenshot_id` 28 → `0028.jpg`) — card is back in view (income ₹1,00,000 and property ₹6,000 visible again)
- Screenshots:
  - `0023.jpg` (t=196201) — still the `04` scrolled table as they say “let’s take a picture”
  - `0024.jpg`–`0027.jpg` (t=204201–230202) — deeper table while “every new thing is a new release” / guide / tools
  - `0028.jpg`–`0030.jpg` (t=237125–254202) — after click main, nearer the card again
- What is visible: they **looked** at the comparison table while talking releases. They do not edit a guide page. Property still ₹6,000; they do not comment on that here.

## What they said (faithful, complete)

**03:03.440–03:14.160** Speaker A:
> Raw ASR: “Okay, let's take a picture. We will... We will clap. Every new thing is a new release for me.”
> Corrected: same. Ritual: **picture** + **clap** per ship. Rule: **every new thing** = a **new release** (not a silent dump of features).

**03:16.360–03:23.740** (timeline / feature):
> Raw ASR: “What is the timeline? This is a new feature. Every release is something new. Okay.”
> Corrected: same. Someone asks **timeline**. Answer-shape: this (whatever they are looking at / about to ship) is a **new feature**; **every release is something new** — they will not batch “everything” into one undated drop.

**03:23.740–03:35.800** Speaker A (prerequisites):
> Raw ASR: “And before that, we have to make a guide. We have to put tools. Like... There are updates in the apps. I have to get them ready. I have to get everything ready-made.”
> Corrected: same. **Before** the release: (1) **make a guide**, (2) **put tools**, (3) get **updates** ready the way **apps** do (release notes / store-style updates — they did not open a native app in this recording). **Ready-made** = not shipping a half-wired tool.

**03:36.740–03:48.160** Speaker A:
> Raw ASR: “We have to go ahead. I have to get a lot of stuff. And I have to do it like this. Not like this. I mean, you have to see it. I don't know. Okay.”
> Corrected: same. They contrast **like this / not like this** while looking at the page (the click that follows is on `main`, not a named control). “You have to see it” = inspect the real ship, not describe it. “I don’t know” = they do not close a pixel spec here.

Then ~15 s of “Okay / we have to go ahead / Hmm” (`04:02.570–04:07.250`) before they snap **back to CIBIL** (`06`).

## First-principles problem
- What must be true: a new piece of Shroffin is a **named release**, with **guide** and **tools** ready, not a quiet code push. Celebration (picture/clap) is how they mark it.
- Root vs symptom: not “add a changelog widget on Explore banks.” The root is **ship completeness**: Guide + Tools + ready-made updates before “go ahead.”
- Constraints: matches slow growth (`04`) — small releases, not one mass launch.

## Directions they considered
- Each new thing = its own release; clap / picture.
- Ask the timeline; treat it as a **new feature**.
- Blockers before go-ahead: **guide**, **tools**, app-like **updates**, everything **ready-made**.
- “Like this, not like this” while looking at Explore banks — they did not name the wrong pattern in words.

## Company / user / future thinking
- User: should meet a **guide** and **tools** that already match the new thing, not a raw table with no explanation.
- Company: they already have Guide and Tools in the nav; this talk is the rule that those must be **filled** before a feature is a release.
- Future: cadence of many small releases, not one polished-for-investment dump (`03`). Next they return to the CIBIL field (`06`).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: not this HTML card. When a feature ships, matching **Guide** pages and **Tools** entry (this Explore banks page is one tool) must exist. Do not invent a clap animation.
- Acceptance criteria in their words: **every new thing is a new release**; **before that** make a **guide**, **put tools**, get updates ready, everything **ready-made**.
- What NOT to do: do not treat scroll-to-table as a “show more banks” issue. Do not skip Guide because the tool “already exists.”
- Open questions: exact timeline they asked for; what “like this / not like this” pointed at (click is `main` only). Unanswered.
- Related recordings:
  - continues_from: this clip `04` (go slowly)
  - continues_in: this clip `06` (back to CIBIL). Session: `wb-rec-260815-2222` (AI feature to build) and `wb-rec-260815-2240`

## Evidence index
- `audio.vtt` 03:03.440–03:48.160 (then filler to 04:07)
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` / `audio.lrc`
- `events.json`: scrolls t=200200 / 233833 / 236267; click `main` t=236722
- `screenshots/0023.jpg`–`0030.jpg` (esp. `0024` table during guide/tools; `0028` after main click)
- `replay.spec.ts`: `locator("main").click()`
- `manifest.json`; `pages.json` `[]`
