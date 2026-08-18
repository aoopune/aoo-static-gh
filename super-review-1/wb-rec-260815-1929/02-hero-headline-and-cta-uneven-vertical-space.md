# Uneven space above the headline and below the button

The first thing they see: in the top block that holds “Get a fair view of home loans…”, the empty space above that text and the empty space below the blue button are not even. Headline and button should feel like they sit in the middle of that whole block — one unit, centered — not a tight pair floating too high.

## Classification
- kind: issue | layout
- status: open
- surface: homepage / `section.home-hero` / `h1#home-hero-title` / `.home-hero-copy` / `.home-hero-ctas` / `a.home-hero-cta-primary` (“Explore banks”)
- viewport: 1366×768 @2x
- speakers: Speaker A names it. Speaker B silent. No disagreement.

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
- On-page copy:
  - Headline: “Get a fair view of home loans and apply to your chosen banks in one go.” (`#home-hero-title`, two `.home-hero-title-line` spans)
  - Button: “Explore banks” (`getByRole("link", { name: "Explore banks" })`)
- They do **not** click the headline or the button. At **00:21.017** (`t=21017`) they **focus** the demo Replay control (`getByRole("button", { name: "Replay" })`, css `main > section:nth-of-type(2) > div > div:nth-of-type(2) > button`) — that belongs to the video praise next, not this spacing note.
- Scroll while they finish the point: **00:32.808** y=4, **00:33.597** y=0 (tiny nudge, back to top).
- Screenshots 00:17–00:38:
  - `screenshots/0000.png` (t=193) through `screenshots/0004.png` (t=34195)
- What the PNGs show: large white band under the nav; headline and pill sit as a compact pair; more white above the headline than between the pill and the top of the landscape/demo card. The pair does not read as the vertical center of “this entire block.”
- Code already *tries* even padding: `.home-hero-copy` comment is “split evenly so title + CTA sit centered,” padding `calc((52px + clamp(3.75rem, 7.5vw, 5.5rem)) / 2) 0`. At this viewport their eye still says it is not even. The demo (`section.spd-section--home`) is a sibling with top padding 0, so the lower white is only the hero’s bottom padding before the photo stage.

## What they said (faithful, complete)

**00:17.160–00:31.500** Speaker A:
> Raw ASR: “First thing I see in this top block, which has the Get a Fair View of Home Loans, this text, is that the amount of spacing above this text and below the CBE is not even.”
> Corrected: “First thing I see in this top block, which has the ‘Get a fair view of home loans’ text, is that the amount of spacing above this text and below the **CTA** is not even.”
> ASR: **CBE → CTA** (the Explore banks button).

**00:31.500–00:38.500** Speaker A:
> Raw ASR / corrected: “It should feel like the text and the button are in the center of this entire block.”

They give no pixels, no flex recipe, no alternate headline. They do not dislike the words here — they only use them as a landmark. Next they praise the video.

## First-principles problem
- What must be true: space **above the headline** and space **below the button** should feel the same, so **text + button as one object** sit in the middle of the top block.
- Root vs symptom: the symptom is “uneven padding.” The root is optical vertical placement of `.home-hero-copy` in the white band between the fixed nav and the product-demo stage — not the headline wording, and not the demo (which they immediately like). Equal CSS padding on `.home-hero-copy` is not enough if the eye still sees a taller empty band under the nav than under the pill.
- Constraints: keep the video’s viewport and padding; center the **pair**, not the headline alone.

## Directions they considered
- Only one: even space above the text and below the CTA, so the pair feels centered in the whole block.
- Lean: first issue of the sitting; treat as real, not taste.

## Company / user / future thinking
- The first screen has to feel composed. If the opening words sit high, the page already feels slightly off before the customer reads a sentence.

## Fix metadata
- Likely code owners: `index.html` `section.home-hero` / `#home-hero-title` / `.home-hero-copy` / `.home-hero-ctas`; same rules in `templates/layouts/home.html` / `content/pages/home.body.html` if that is the source; pill styles in `css/shroffin-shell.css` (`.home-hero-cta-primary`) — do not restyle the pill to “fix” space.
- Acceptance in their words: spacing above the text and below the CTA is even; “the text and the button are in the center of this entire block.”
- What NOT to do: do not shrink, re-pad, or restyle the product demo to solve this. Do not rewrite the headline for this ticket. Do not assume the existing “split evenly” comment means the job is done — they still see it.
- Open questions: is “this entire block” the white copy band only, or the first viewport including the top of the demo? From “above this text and below the CTA,” it is the copy band.
- continues_from: `wb-rec-260815-1928` (abort)
- continues_in: not this topic. Later clips do not return to hero centering.

## Evidence index
- `audio.vtt` 00:17.160–00:38.500
- `audio.tsv` 17160–38500 (CBE)
- `events.json`: focus Replay t=21017; scroll t=32808 y=4, t=33597 y=0
- `screenshots/0000.png`–`0004.png`
- `pages.json` h1 + action Explore banks
- `manifest.json` viewport 1366×768 dsf 2
- Site `index.html` `.home-hero` ~55–150, markup ~3004–3010
