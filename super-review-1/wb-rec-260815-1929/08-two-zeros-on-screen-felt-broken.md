# Two “Zero”s on screen with no words yet — it felt like the site was broken

When they scrolled into the next block, two huge words “Zero” sat on the dark screen with no “commissions” or “bias” yet. They had no idea what was coming. For a moment it felt as if the website was broken. They want the claim to arrive in order — full “Zero commissions” then “Zero bias,” or one Zero then the word “commissions” then bias — not two naked zeros. They then read the finished poster, including the fair-view sentence, which they do not rewrite until the next real clip.

## Classification
- kind: issue | scroll animation
- status: open
- surface: homepage / `section.home-zero` / `h2#home-zero-title` / `.home-zero-zero` vs `.home-zero-rest` / `.home-zero-body` (scrub `--hz-rest` / `--hz-body`)
- viewport: 1366×768 @2x
- speakers: Speaker A. No disagreement. This clip is the first report; they restate it at the start of `wb-rec-260815-1951`.

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
- Live copy after scrub:
  - “Zero” + “commissions.”
  - “Zero” + “bias.”
  - Body: “So you get a fair view of every lender listed on our platform, with none ranked or pushed ahead of another.”
- Why two zeros show first: `.home-zero-zero` fades in on `.is-in`; `.home-zero-rest` and `.home-zero-body` wait on `--hz-rest` / `--hz-body`. Early in the pin, only the two “Zero” words are visible. Track is `min-height: 230svh`.
- Scroll into the broken-looking state:
  - **05:05.800** y=3766.5
  - **05:08.498** y=4371
  - **05:09.200** y=4411.5 — they talk “two zeros” here
- Click (pointing at the first Zero):
  - **05:31.562** (`t=331562`) `locator("h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(1)")` — first `.home-zero-zero` — screenshot_id 41
- Screenshots:
  - `screenshots/0037.png` — still Transparent (leaving previous topic)
  - `screenshots/0038.png` (t=306196) — **the frame they name**: two large white “Zero”s stacked on charcoal, **no** “commissions,” **no** “bias,” **no** body
  - `screenshots/0039.png` (t=314196) — full claims: Zero commissions / Zero bias + body
  - `screenshots/0040.png`, `screenshots/0041.png` (click) — full copy
  - `screenshots/0042.png`–`0049.png` — they stay on the completed poster while they start wording (`09`+)
- What 0038 vs 0039 show: same section, different scrub progress. Two orphan Zeros, then the full poster.

## What they said (faithful, complete)

**05:09.180–05:14.740** Speaker A:
> Raw ASR: “When I scrolled down to this section, I saw two zeros on the screen.”
> Corrected: same.

**05:14.740–05:20.800** Speaker A:
> Raw ASR: “And I had no context of what is going to come up. In fact, I felt that the website was broken.”
> Corrected: same.

**05:21.480–05:25.920** Speaker A (option A, first half):
> Raw ASR / corrected: “So either it can be zero commissions that appears first.”

**05:26.980–05:29.300** Speaker A (option A, second half):
> Raw ASR / corrected: “And zero bias that appears later.”

**05:30.300–05:34.300** Speaker A (option B):
> Raw ASR / corrected: “Or it can be just the first zero that appears first.”

**05:34.860–05:37.000** Speaker A:
> Raw ASR / corrected: “And then as I scroll down, commissions.”

**05:38.300–05:40.780** Speaker A:
> Raw ASR: “And then as I scroll down, even more bias.”
> Corrected: keep the raw “even more bias.” Sense in context: then, as you keep scrolling, **bias** (the second claim) — not a slogan “even more bias.” Option B is word-by-word: first Zero → commissions → then bias.

**05:41.600–05:43.300** Speaker A:
> Raw ASR / corrected: “Or something of that sort.”

**05:44.740–05:46.760** Speaker A (reading the live heading once complete):
> Raw ASR / corrected: “Zero commissions, zero bias.”

**05:47.480–05:50.460** Speaker A (reading the live body; stops early):
> Raw ASR: “So you get a fair view of every lender listed on our platform.”
> Corrected: they are reading `.home-zero-body`. On the page the sentence continues “with none ranked or pushed ahead of another,” which they do **not** finish aloud here. The rewrite of that sentence is in `wb-rec-260815-1951`.

They pause (~13 s). Next speech is liking the independence intent (`09`).

## First-principles problem
- What must be true: at every moment of this scroll-story, the customer should know what they are looking at. A giant “Zero” twice with no noun is not a claim; it looks like missing text.
- Root vs symptom: symptom is “two zeros / site broken.” Root is reveal order: both `.home-zero-zero` nodes appear before `.home-zero-rest` has opacity. Trust is damaged before “commissions” lands.
- Constraints: they still want a scroll-built sequence. They do not ask to kill the section or the large type.

## Directions they considered
1. Show **“Zero commissions” first**, then **“Zero bias” later**.
2. Show **only the first Zero**, then **commissions** as you scroll, then **bias** as you scroll further.
3. “Something of that sort” — same idea, not a third fully specified dance.
- Lean: sequential, always with enough words to make a sentence. They do not pick 1 vs 2 here.
- End state they read aloud: completed “Zero commissions, zero bias” plus the fair-view line.

## Company / user / future thinking
- First impression of this block is fragility. If it looks broken, the independence story never starts.
- They are designing for a scroller who does not know the punchline. Context must arrive *with* the number.

## Fix metadata
- Likely code owners: `section.home-zero` in `index.html` ~3180–3194; `--hz-rest` / `--hz-body` in `js/shroffin-scrub.js`; CSS `.js .home-zero-zero` / `.home-zero-rest` in the home stylesheet.
- Acceptance in their words: never land on “two zeros” with “no context of what is going to come up”; must not feel “the website was broken.” Prefer “zero commissions” then “zero bias,” **or** first zero → commissions → bias, “or something of that sort.”
- What NOT to do: do not leave both “Zero” words visible while “commissions” and “bias” are at opacity 0. Do not delete the scroll story unless a later clip says so. Do not treat this as the wording rewrite of “commissions” / “bias” (`09` / `10`).
- Open questions: option 1 vs option 2? What should scroll-*up* look like? (They name scroll-up explicitly in 1951.)
- continues_from: `07-transparent-headline-liked-supporting-lines-add-no-value.md`
- continues_in: `wb-rec-260815-1951` `01-two-zeros-scroll-looks-broken.md`. Skip aborted `wb-rec-260815-1950`. 1951 restates: when you scroll **up**, both zeros are visible and you don’t know if the site is broken; sequential reveal, then the next sentence; or if there is nothing to show, don’t park there. Fair-view sentence rewrite is 1951 `03`.

## Evidence index
- `audio.vtt` 05:09.180–05:50.460
- `events.json` scrolls t=305800–309200; click t=331562; screenshot_id 41
- `screenshots/0038.png` (two zeros only), `0039.png`–`0041.png` (full copy)
- `pages.json` h2 “Zero commissions. Zero bias.”
- `replay.spec.ts` waits/clicks `h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(1)`
- Site `index.html` ~3180–3194; `js/shroffin-scrub.js`
