# Scrolling “takes time” — they take it back, then say how they will review

Right after the sentence workshop, Speaker A thinks the page is slow to scroll: they keep scrolling and it takes a bit of time. Within seconds they say there is no such problem. It is just a matter of time — the dark story is meant to hold while you move. They then tell each other how to keep reviewing: act as a cursor, act as a phone, act as text. Do not file a scroll-performance bug from the first sentence.

## Classification
- kind: dismissed (lag) + session-note (how they will review)
- status: dismissed (scrolling); not-a-bug (review method)
- surface: homepage / sticky `section.home-lead` pin (`.home-lead-track` / `.home-lead-pin`, `data-home-scrub="lead"`) while they try to leave the four-line block
- viewport: 1366×768 @2x (desktop only in this recording)
- speakers: Speaker A raises the lag, then withdraws it, then says act as cursor and as phone. Around **04:29** a second voice: “Yes, we have to act as a text” — treated as Speaker B agreeing. No leftover disagreement: both treat scrolling as fine.

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
- Still on the four-line story, then they click it and scroll as if hunting lag.
- Clicks (pointing / trying to move, not leaving the site):
  - **04:02.829** (`t=242829`) `locator("main > div > section:nth-of-type(1) > div > div > div > div")` — screenshot_id 29 (`screenshots/0029.png`)
  - **04:06.141** (`t=246141`) `locator("main > div > section:nth-of-type(1) > div > div > div > div > p:nth-of-type(1)")` — first story `<p>` (“Now, the entire market…”) — screenshot_id 30
  - **04:12.407** (`t=252407`) `locator("main > div > section:nth-of-type(1) > div > div > div")` — screenshot_id 31
  - **04:14.786** (`t=254786`) inner stack div again
  - **04:14.952** (`t=254952`) `getByRole("heading")` / `locator("#home-lead-title")` — screenshot_id 32
- Scroll during complaint and take-back:
  - **04:10.498** y=**1207.5** (up from 1595.5)
  - **04:16.064** y=**796**
  - **04:18.997** y=**468** (back toward the demo / top of the dark band)
  - Then they jump forward: **04:23.099** y=**2605.5** into Transparent
- Screenshots:
  - `screenshots/0028.png` — full four-line story (end of copy workshop)
  - `screenshots/0029.png`, `0030.png` — four lines; they click line 2
  - `screenshots/0031.png` (t=252810) — after scrolling up: **only** “We completely re-engineered your home loan journey.” on a large empty charcoal field (later lines not highlighted / left the pin)
  - `screenshots/0032.png` (t=255190) — still only the first line; they click `#home-lead-title`
  - `screenshots/0033.png` (t=264196) — already on Transparent after they accept “no such problem”
- What is visible: the sticky pin makes the same charcoal viewport linger while scroll Y changes. That hold is what they first named as “takes a bit of time.” CSS: `.js .home-lead-track { min-height: 185svh; }` and sticky `.home-lead-pin`.

## What they said (faithful, complete)

**04:00.830–04:07.450** Speaker A:
> Raw ASR: “I have noticed one more issue. I keep scrolling, but it takes me a bit of time.”
> Corrected: same. They think scroll response is slow.

**04:07.990–04:11.230** Speaker A (take-back):
> Raw ASR / corrected: “No, there is no such problem. There is no such problem with scrolling.”

**04:16.480–04:17.780** Speaker A:
> Raw ASR / corrected: “It is just a matter of time.”
> Meaning in context: the section is supposed to take time as you scroll (hold / scrub), not that the browser is janky.

**04:20.060–04:20.700** Speaker A:
> Raw ASR: “So...”

**04:20.700–04:24.280** Speaker A:
> Raw ASR: “We have to do it this way. We have to act as a cursor.”
> Corrected: same. How they will review / move: as a mouse cursor — not fight the sticky hold. (If “Cursair” were heard, the parallel with phone and text still makes **cursor** the right reading.)

**04:25.640–04:27.060** Speaker A:
> Raw ASR / corrected: “We have to act as a phone.”

**04:29.080–04:30.420** Speaker B (agreement):
> Raw ASR / corrected: “Yes, we have to act as a text.”

They do not ask to shorten the sticky track, remove scrub, or change scroll physics. Next speech is Transparent (`07`).

## First-principles problem
- What must be true: they do **not** want a scrolling-performance bug. Record the false alarm so later work does not “fix” the hold they accepted.
- Root vs symptom: symptom was “scroll takes time.” Root they named is time-on-section (sticky story), not a broken wheel. Screenshots 0031–0032 match: one line pinned, lots of empty charcoal, while Y has already moved.
- Constraints: keep the designed pause. Review three ways: cursor (pointer), phone, and the words themselves.

## Directions they considered
- Treat as a lag bug — **withdrawn** within ~7 seconds.
- Treat as intended duration — **lean: this.** “No such problem”; “just a matter of time.”
- How to continue: act as cursor, as phone, as text. Lean: do the rest of the page that way. This recording stays desktop; “act as a phone” is a reminder for a later pass, not a viewport change here.

## Company / user / future thinking
- They will let the page take time if the time is the story, not a hitch.
- A homepage review is incomplete if it is only what looks wrong on this laptop. They also have to move like a pointer, like a phone, and like a reader of sentences.

## Fix metadata
- Likely code owners: none for a change. Sticky/scrub lives on `.home-lead-track` / `.home-lead-pin` and `js/shroffin-scrub.js`. Do not retune those from this clip.
- Acceptance in their words: “there is no such problem with scrolling”; “it is just a matter of time”; “we have to act as a cursor / phone / text.”
- What NOT to do: do not speed up, unstick, or shorten this section because of 04:00–04:07. Do not file a performance bug from that span alone.
- Open questions: none on scrolling. Phone pass is still outstanding after this desktop recording.
- continues_from: `05-story-coherence-liked-same-info-fewer-simpler-sentences.md` (same story block)
- continues_in: none for the dismissed lag. Review-as-phone remains a method for later clips; this file does not claim 1951 as a phone pass (1951 is still desktop homepage).

## Evidence index
- `audio.vtt` 04:00.830–04:30.420
- `audio.tsv` 240830–270420
- `events.json`: clicks t=242829, 246141, 252407, 254786, 254952; scrolls t=250498 y=1207.5, t=256064 y=796, t=258997 y=468, t=263099 y=2605.5
- `screenshots/0028.png`–`0033.png`
- `replay.spec.ts` clicks the same lead locators then `#home-lead-title`
- `pages.json` region “We completely re-engineered your home loan journey.”
- Site `index.html` `.js .home-lead-track` min-height 185svh
