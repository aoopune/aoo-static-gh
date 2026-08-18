# Parked on two naked “Zero”s — they already said it looks broken

This abort’s only screenshot is the hollow zeros beat: two huge white “Zero”s on charcoal, no “commissions,” no “bias,” no sentence under them. They had named that frame as looking like a broken site in the last real clip, then scrolled **up** into it again here (y=3882 → 4022). About five seconds after they kill this take, they say it again: when you scroll up, you see both zeros and you don’t know if the website is broken.

## Classification
- kind: issue | scroll animation
- status: open (same bug as 1929 `08` and 1951 `02`; this clip is the restart-time evidence, not a third invention)
- surface: homepage / `.home-story-dark` / `section.home-zero` / `h2#home-zero-title` / `.home-zero-zero` vs `.home-zero-rest` / `.home-zero-body` (scrub `--hz-rest` / `--hz-body`)
- viewport: 1366×768 @2x (desktop only in these three takes)
- speakers: none in this clip’s ASR. Speaker A names the bug in 1929 (scroll **down**) and again in 1951 (scroll **up**). Speaker B is silent on this motion in both neighbors.

## Session metadata
- folder: `wb-rec-260815-1950`
- recording id: `30d8fa4c-7f30-4f46-9877-07af312fd0ad`
- clip: 3 of 30
- started_at: 2026-08-15T14:20:49.725Z
- ended_at: 2026-08-15T14:20:56.309Z
- duration_ms: 6584
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 1 · event count: 5 · console: empty · tabs: 1
- viewport: width 1366, height 768, device_scale_factor 2
- previous: `wb-rec-260815-1929` ended on the **finished** zeros poster at y=4282 after they already complained about two zeros
- next: `wb-rec-260815-1951` starts on the same hollow PNG, asks for 9 minutes, then restates scroll-up two zeros

## Where on the page
- URL: `http://localhost:8765/`
- Live copy **after** the scrub completes (DOM / landmark heading, not this PNG):
  - “Zero” + “commissions.”
  - “Zero” + “bias.”
  - Body: “So you get a fair view of every lender listed on our platform, with none ranked or pushed ahead of another.”
- Why two zeros show first: `.home-zero-zero` fades in on `.is-in`; `.home-zero-rest` and `.home-zero-body` wait on `--hz-rest` / `--hz-body`. Early in the pin (track `min-height: 230svh`), only the two “Zero” words are visible. Scrolling **up** re-enters that state.
- This clip’s camera:
  - `screenshots/0000.png` (t=200, start, 65,904 bytes) — **the hollow frame**: two stacked “Zero”s, nothing else in the dark field. Nav still on the light bar.
  - Scroll **t=2030** y=**3882** (further up than 1929’s rest y=4282, and slightly above 1951’s first named-up scroll y=4080.5)
  - Scroll **t=3231** y=**4022** (still in the hollow band; 1951 only gets “commissions / bias / body” around y=4565)
- Neighbor frames of the same beat:
  - 1929 `0038.png` — first time they name it, after scrolling **down**
  - 1929 `0065.png` — last frame of that take: **full** poster (they had left the hollow beat)
  - 1951 `0000.png`–`0003.png` — same two-Zero start as this abort; `0004.png` is the completed poster
- What this PNG shows that 1929’s ending does not: they came **back** from the finished poster into the empty two-Zero stop. That is the scroll-up path 1951 then puts into words.

## What they said (faithful, complete)

**This clip:** no cues. Empty `audio.vtt` / `audio.txt`. Do not put words in their mouths for 14:20:49–14:20:56Z.

### Last real clip — first report (scroll down) — `wb-rec-260815-1929`

**05:09.180–05:14.740** Speaker A:
> Raw ASR / corrected: “When I scrolled down to this section, I saw two zeros on the screen.”

**05:14.740–05:20.800** Speaker A:
> Raw ASR / corrected: “And I had no context of what is going to come up. In fact, I felt that the website was broken.”

**05:21.480–05:29.300** Speaker A (option A):
> Raw ASR / corrected: “So either it can be zero commissions that appears first. And zero bias that appears later.”

**05:30.300–05:43.300** Speaker A (option B):
> Raw ASR: “Or it can be just the first zero that appears first. And then as I scroll down, commissions. And then as I scroll down, even more bias. Or something of that sort.”
> Corrected: keep raw “even more bias.” Sense: then, as you keep scrolling, **bias** (the second claim) — not a slogan “even more bias.” Sequence: first Zero → commissions → then bias.

**05:44.740–05:50.460** Speaker A (reading the live poster once complete):
> Raw ASR: “Zero commissions, zero bias. So you get a fair view of every lender listed on our platform.”
> They do not rewrite the fair-view sentence in 1929; that workshop is 1951.

Example they like: a **finished claim** on screen (Zero commissions, then Zero bias).  
Example they reject: two orphan “Zero”s with no following words — “I felt that the website was broken.”

### This abort — they park that rejected frame

No speech. Screenshot + y=3882 / y=4022 = the rejected example, held for 6.5 s, then they stop the recorder.

### Next real clip — same bug, now named as scroll up — `wb-rec-260815-1951`

After “Just give me 9 minutes.” / “9 minutes?” (session, see `00`):

**00:14.600–00:24.460** Speaker A:
> Raw ASR: “So, in this section, I found the problem that when you scroll up, you can see both the zeroes. And you don't know if the website is broken or not.”
> Corrected: same. **This restart’s example is scroll up.** Both zeros visible; no following words; it reads as a broken site. Matches this abort’s PNG.

**00:25.220–00:34.480** Speaker A:
> Raw ASR: “So, if you have seen one zero, or if you have seen the first zero, zero commissions, and then the next zero and zero bias, and then the next sentence,”
> Corrected: preferred sequence: **Zero commissions** → **Zero bias** → **the next sentence** (fair-view body). Not both zeros before their matching words.

**00:34.900–00:39.640** Speaker A:
> Raw ASR: “that would be better. Or if there is nothing to show, you can explore.”
> Corrected: ordered reveal would be better. **Or**, if a scroll stop has nothing meaningful to show, don’t hold the empty two-zero beat. “Explore” here is not the “Explore banks” button.

They do not praise the animation. They do not give pixels. They immediately start on the word “commissions” (1951 `03`).

## First-principles problem
- What must be true: every pause in this sticky block should show a **finished claim**, not two orphan numbers that look like a failed load.
- Root vs symptom: the symptom is “two zeros, is the site broken?” The root is reveal order: both `.home-zero-zero` nodes appear before `--hz-rest` brings “commissions.” / “bias.” and `--hz-body` brings the sentence. Scrolling **up** re-enters that hollow state — which is what this abort’s start PNG and y=3882/4022 demonstrate, and what 1951 then says out loud.
- Constraint they implied: keep both claims and the sentence; change **when** each piece appears, or skip a frame that has nothing to show.

## Directions they considered
1. Sequential reveal (1929 option A, restated 1951): **Zero commissions** first, **Zero bias** later, then the body sentence.
2. Word-by-word (1929 option B, not fully repeated in 1951): first zero alone, then “commissions,” then later “bias.”
3. If the mid-scroll frame has **nothing to show**, don’t keep two naked zeros — 1951: “you can explore” / don’t invent a beat.
- Lean: real bug, not taste. This folder adds **restart-time stills** of the empty frame after they had already seen the completed poster. It does not add a new third fix.
- Pros of ordered reveal: the independence story (no commission, no bias) can start. Cons they do not name a motion spec (duration, ease, sticky height) in any of the three takes.

## Company / user / future thinking
- User: a first-time scroller has no idea “Zero / Zero” is a punchline in progress. They think the page failed. This abort is what that pause looks like.
- Company: the independence story never starts if the entrance looks broken. They still want the two-zero idea; they want it **staged**.
- Future: 1951 continues into commissions-as-customer-fee confusion, mixed website/bank vs website/customer context, then ranking that money cannot buy. Do not pull those copy fights into this file. `wb-rec-260815-2000` later notes the zeros slide fading again — continuation of this motion, not a new product fact.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `section.home-zero` in `index.html` / `content/pages/home.body.html` / `templates/layouts/home.html` (`#home-zero-title`, `.home-zero-zero`, `.home-zero-rest`, `.home-zero-body`) and the home scrub that sets `--hz-rest` / `--hz-body` (`.js .home-zero[data-home-scrub="zero"]`, sticky `.home-zero-track` min-height 230svh).
- Acceptance in their words: not two zeros with “no context”; must not feel “the website was broken”; “zero commissions that appears first” then “zero bias”; or first zero then commissions then bias; 1951 add: then “the next sentence”; “or if there is nothing to show, you can explore.”
- What NOT to do: do not ship a third stacked “Zero.” Do not treat this abort’s empty ASR as a pass on the bug. Do not “fix” it by deleting the independence claims. Do not implement “explore” as a new CTA on this block.
- Open questions: which of the two sequences they prefer when both are still on the table; exact scrub stops; whether an empty beat is skipped or never created.
- Related recordings:
  - continues_from: `wb-rec-260815-1929` `08` (scroll **down** into two zeros / “website was broken” / two sequences). After that they stay on the completed poster for commissions/bias/earn (`09`–`11`).
  - continues_in: `wb-rec-260815-1951` `02` (scroll **up**, start-of-clip PNGs, third option: don’t hold an empty beat). Fair-view sentence rewrite is 1951 `03`/`04`, not this file.

## Evidence index
- This folder: `screenshots/0000.png`; `events.json` scroll y=3882 t=2030, y=4022 t=3231; `pages.json` zeros heading; empty `audio.vtt`
- 1929: `audio.vtt` 05:09.180–05:50.460; `screenshots/0038.png` (hollow) vs `0039.png` / `0065.png` (full); last scroll y=4282
- 1951: `audio.vtt` 00:14.600–00:39.640; `screenshots/0000.png`–`0003.png` (hollow) vs `0004.png` (full); scrolls y=4080.5 / 4044 / 3984 / 4248.5 / 4565
