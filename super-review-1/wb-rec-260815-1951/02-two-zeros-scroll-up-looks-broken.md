# Scrolling up shows two naked “Zero”s — it looks like the site broke

This clip opens already inside the dark “Zero commissions / Zero bias” block. When they scroll up a little, both giant “Zero”s are on screen and “commissions,” “bias,” and the sentence under them are gone. For a moment you cannot tell if the page is broken. They want the claims to arrive in order — Zero commissions, then Zero bias, then the sentence — or, if a scroll stop has nothing real to show, don’t park there.

## Classification
- kind: issue
- status: open
- surface: homepage / `.home-story-dark` / `section.home-zero` / `h2#home-zero-title` / `.home-zero-zero` vs `.home-zero-rest` / `.home-zero-body` (scrub `--hz-rest` / `--hz-body`)
- viewport: 1366×768 @2x (desktop only)
- speakers: Speaker A (primary reviewer) names the bug and the two fixes. Speaker B is silent after the 9-minute check. No disagreement.

## Session metadata
- folder: `wb-rec-260815-1951`
- recording id: `ce85813c-385e-4259-a46a-98178da92985`
- started_at: 2026-08-15T14:21:00.929Z
- ended_at: 2026-08-15T14:29:32.515Z
- duration_ms: 511586
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- events: 91 · screenshots: 62 · console: 0 · tabs: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- Section: `section.home-zero` labelled by `#home-zero-title`
- On-page copy when the scrub is complete:
  - “Zero” + “commissions.”
  - “Zero” + “bias.”
  - “So you get a fair view of every lender listed on our platform, with none ranked or pushed ahead of another.”
- Why the empty frame exists: with JS on, `.home-zero-zero` fades in on `.is-in`, while `.home-zero-rest` and `.home-zero-body` stay at `--hz-rest` / `--hz-body` = 0 until later scroll. The sticky track is `min-height: 230svh`, so that mid-state is easy to land on — including when scrolling **up**.
- Scrolls while they name it (this clip’s unique motion is **up**, not only down):
  - **00:15.661** (`t=15661`) y=**4080.5**
  - **00:17.661** (`t=17661`) y=**4044**
  - **00:23.660** (`t=23660`) y=**3984** — slightly up; matches “when you scroll up, you can see both the zeroes”
  - **00:28.527** (`t=28527`) y=**4248.5**
  - **00:34.060** (`t=34060`) y=**4565** — rest + body have arrived
- Later click (pointing, not navigating), still this heading: **01:02.882** (`t=62882`) `locator("h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(2)")` — the **“commissions.”** span. screenshot_id 8.
- Screenshots:
  - `0000.png` (t=207, start) through `0003.png` (t=24208) — charcoal full viewport, **two stacked white “Zero”s only**. No “commissions.” No “bias.” No body. Nav still on the light bar.
  - `0004.png` (t=32208) — full poster: Zero / commissions. / Zero / bias. + fair-view sentence.
- What the PNGs show: the same section, two scrub depths. The jump from orphan zeros to the full claim is the bug they are looking at. This clip **starts** on the broken-looking frame; 1929 had **scrolled down into** it.

## What they said (faithful, complete)

**00:14.600–00:15.980** Speaker A:
> Raw ASR: “So, in this section,”
> Corrected: same. “This section” = the zeros poster they are already sitting in.

**00:16.880–00:24.460** Speaker A:
> Raw ASR: “I found the problem that when you scroll up, you can see both the zeroes. And you don't know if the website is broken or not.”
> Corrected: same. **This clip’s example is scroll up.** Both zeros visible; no following words; it reads as a broken site.

**00:25.220–00:34.480** Speaker A:
> Raw ASR: “So, if you have seen one zero, or if you have seen the first zero, zero commissions, and then the next zero and zero bias, and then the next sentence,”
> Corrected: preferred sequence: first complete claim **Zero commissions**, then **Zero bias**, then **the next sentence** (the fair-view body). Not both zeros before their matching words.

**00:34.900–00:39.640** Speaker A:
> Raw ASR: “that would be better. Or if there is nothing to show, you can explore.”
> Corrected: that ordered reveal would be better. **Or**, if a scroll position has nothing meaningful to show, don’t hold the empty two-zero beat — move on / let the reader go. “Explore” here is not the “Explore banks” button; they are talking about this animation having nothing worth showing.

They do not praise the animation. They do not give pixels. They immediately start on the word “commissions” (`03`).

## First-principles problem
- What must be true: every pause in this sticky block should show a **finished claim**, not two orphan numbers that look like a failed load.
- Root vs symptom: the symptom is “two zeros, is the site broken?” The root is reveal order: both `.home-zero-zero` nodes appear before `--hz-rest` brings in “commissions.” / “bias.” and `--hz-body` brings the sentence. Scrolling **up** re-enters that hollow state, which is what this take demonstrates.
- Constraint they implied: keep both claims and the sentence; change **when** each piece appears, or skip a frame that has nothing to show.

## Directions they considered
1. Sequential reveal they name here: **Zero commissions** → **Zero bias** → the body sentence.
2. Fallback they already named in 1929 (not repeated as a full list here): first zero alone, then “commissions,” then later “bias.”
3. If the mid-scroll frame has **nothing to show**, don’t keep two naked zeros — “you can explore” / don’t invent a beat.
- Lean: real bug, not taste. Same complaint as 1929, now with **scroll-up** evidence, start-of-clip PNGs of the empty frame, and the third option (don’t hold an empty beat).

## Company / user / future thinking
- User: a first-time scroller has no idea “Zero / Zero” is a punchline in progress. They think the page failed.
- Company: the independence story (no commission, no bias) never starts if the entrance looks broken.
- Future: they do not ask to drop the two-zero idea. They ask to **stage** it so it reads as copy. 2000 later notes the zeros slide fading again; that is a continuation of this motion, not a new product fact.

## Fix metadata
- Code owners: `section.home-zero` in `index.html` / `content/pages/home.body.html` / `templates/layouts/home.html` (`#home-zero-title`, `.home-zero-zero`, `.home-zero-rest`, `.home-zero-body`) and the home scrub that sets `--hz-rest` / `--hz-body` (`.js .home-zero[data-home-scrub="zero"]`, sticky `.home-zero-track` min-height 230svh).
- Acceptance in their words: you should not “see both the zeroes” with no following words; “you don't know if the website is broken or not” should go away; better if you see **zero commissions**, then **zero bias**, then **the next sentence**; or don’t leave a frame with nothing to show.
- What NOT to do: do not delete the two claims or the fair-view sentence to hide the glitch. Do not treat this as a type-size problem. Do not restyle “Best of all” as a side effect.
- Open: pair-complete (this clip’s lean) vs zero-then-word (allowed in 1929).
- continues_from: `wb-rec-260815-1929` `08-two-zeros-no-context.md` — they already said two zeros / “website was broken” / sequence options, after **scrolling down**. `wb-rec-260815-1950` is an abort; no substance.
- continues_in: animation not re-solved in `wb-rec-260815-2000` (that clip inventories unique facts and later notes the zeros fade). Do not treat 2000 as the first report of this empty frame.

## Evidence index
- `audio.vtt` 00:14.600–00:39.640
- `audio.txt` / `audio.text` / `audio.tsv` / `audio_sentences.txt` same span
- `events.json`: scrolls t=15661 / 17661 / 23660 / 28527 / 34060; click t=62882 screenshot_id 8
- `pages.json`: h2 “Zero commissions. Zero bias.”
- `screenshots/0000.png`–`0004.png` (0000–0003 = two zeros only; 0004 = full copy)
- `replay.spec.ts`: waits, then clicks `h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(2)`
- Site: `#home-zero-title`, `--hz-rest`, `--hz-body`, comment “nano-scroll for commissions / bias”
