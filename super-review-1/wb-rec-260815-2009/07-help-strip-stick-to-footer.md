# Help strip is nice — stick it to the footer; it is not a full-screen chapter

After the unique-point recipe they land on “Need some help? Chat now or call …”. They like the strip. They do not like the empty padding above and below. DevTools paints that gap **orange**; they read **52.64**. The strip should sit on the footer, on every page that has a footer, with space reduced — a mini band, not its own scroll chapter. They even float putting that help on the nav. Inspected for a long time.

## Classification
- kind: issue | layout | information-architecture
- status: open
- surface: site chrome / `aside.site-help-strip` (“Get help”) sitting above `footer.site-footer`; copy “Need some help? Chat now ↗ or call 91123 34367”
- viewport: 1366×768 @2x
- speakers: Speaker A describes size, padding, sticky-to-footer, site-wide, inspector numbers, “not a section.” Speaker B: “Yes, check the footer.” Both look at the inspector.

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
- Landmark: complementary “Get help”
- On-page: “Need some help?” + Chat now (WhatsApp, `guide-section-link`) + call 91123 34367
- Markup: `aside.site-help-strip` immediately before `footer.site-footer` (`index.html` ~3685)
- Scroll to the bottom band: **05:10.713** y=8764.5, then they hunt around y≈8365–8556 while talking
- Focus (not a click to navigate): **06:17.731** `#home-built-trigger-4` still in the document; they are not working the accordion anymore
- Inspector: `screenshots/0048.png` (t=374219) — overlay on `aside.site-help-strip`
  - dimensions ~1366×77
  - **margin 52px 0 64px** (they say **52.64**)
  - green padding ~15.6px 16px
  - **orange** margin boxes above and below — that orange is what they mean by “this orange, orange, needs to be fixed”
  - accessibility name “Get help”, role complementary
- Other shots: `0041.png`–`0047.png` strip floating in white space between the Scattered video and the footer columns; `0049.png`–`0054.png` same while they keep talking
- They say this should be the same **everywhere a footer exists** — not homepage-only.
- Note: later CSS in `css/shroffin-shell.css` may show `margin-block: 0` on `.site-help-strip`. **This recording’s live page showed 52 / 64.** Fix against what they inspected, not against a later zero-margin assumption.

## What they said (faithful, complete)

**05:14.090–05:26.800** Speaker A:
> Raw ASR: “This strip is very big. This strip is nice. This strip is nice.”
> Corrected: same. Praise and size complaint together. Do not delete the strip because it is “very big.”

**05:28.920–05:54.620** Speaker A:
> Raw ASR: “But I think this padding above it, padding below it is causing some issues over here. If it was sticky to the footer. This footer has a big heat strip. If this padding section itself was the strip.”
> Corrected: padding above and below is the problem. If the strip were **sticky to the footer**… This footer has a big **help** strip. If this padded gap *itself* were the strip (the strip should *be* that band, flush, not sitting in extra padding).
> ASR: **heat strip ≈ help strip**.

**05:56.040–06:06.120** Speaker A:
> Raw ASR: “And then everywhere there is footer, there is this strip on top of footer. Basically, space is reduced. It is the same for everyone. Only space is reduced.”
> Corrected: on every page that has a footer, this strip sits on top of the footer. Same treatment for everyone. The change is **reduced space**, not a new invention.

**06:08.780–06:19.400** Speaker A (memory of an earlier version):
> Raw ASR: “This was before. But there used to be holes in it. Instead, it was stuck somewhere. It used to be like this. It needed some help. It was stuck to the footer.”
> Corrected: they remember a prior state with “holes” / it stuck in the wrong place; they wanted it stuck to the footer.

**06:21.700–06:38.080** Speaker A (inspector):
> Raw ASR: “So we are talking about this aside, site help strip box. Look at this. The margin is 52.64. Now it is 52.64. This one is also there. But that margin needs to be fixed.”
> Corrected: they name the element: **aside, site help strip**. Margin **52.64** (matches DevTools ~52px top / 64px bottom). That margin needs to be fixed.

**06:40.660–07:03.920** Speaker A:
> Raw ASR: “This orange orange, needs to be fixed. It needs to be fixed to the footer.” (repeated several times) “This is the only thing. This is for everyone. The last section is in strip. The strip is in the footer. No padding will be there.”
> Corrected: the **orange** DevTools margin highlight needs to go — fix the strip **to the footer**. Last homepage object is the strip; the strip belongs with the footer; **no padding**.

**07:05.520–07:20.340** Speaker A:
> Raw ASR: “It feels like it is a jumble. One strip is there. But this is not a section. It is in strip. But this has some different place. This is not part of the above sections.”
> Corrected: it feels jumbled because a strip is being treated like a section. It is **not** one of the homepage story sections. It belongs in a different place (chrome / footer).

**07:22.840–07:37.600** Speaker A:
> Raw ASR: “It flows to the top. Basically, these two will fly away. Then it should be put on the navel. Navel has support. It is just for some help. It is there for help.”
> Corrected: if story sections “fly away” (refactor/remove), help still has to live somewhere. Then: put it on the **nav**. Nav already has Support. It is only for some help.
> ASR: **navel ≈ nav**.
> Nav placement is **floated, not closed**. Footer-stick is the repeated lean.

**07:41.360–08:05.460** Speaker A, then Speaker B:
> Raw ASR: “But the thing is, this section gets completed only after starting. This section. It is the same. This does not need to be an independent section. What is the current section? You have to occupy the whole screen. Then scroll and go to the next section. Then scroll and go to the next section. And this is a mini section. Then check the footer. Yes, check the footer.”
> Corrected: homepage story sections are full-viewport chapters you scroll between. This help band is a **mini section** that should not occupy the whole screen or wait until the page “completes.” It does not need to be an independent section. Next: check the footer (Speaker B agrees).

## First-principles problem
- What must be true: help is chrome (always available), not a homepage chapter. It should read as a thin strip joined to the footer (and possibly echoed in nav Support), with no leftover white padding making it look like its own slide.
- Root vs symptom: “strip is very big” is the symptom. The root is margin/padding treating `aside.site-help-strip` like a section with breathing room, plus IA (independent mini-section vs footer/nav chrome).
- Constraints: keep the strip (they like it); same on every footer page; reduce space; no full-screen occupancy.

## Directions they considered
- Flush / sticky the strip to the footer, kill the orange margin, no padding — **lean** (repeated).
- Site-wide, not homepage-only — **yes**.
- Put help on the nav (Support already exists) — **floated**, not closed.
- Keep it as an independent full-screen / mini section — **no**.
- Praise: “this strip is nice” — do not delete Chat now / the phone line.

## Company / user / future thinking
- Company: help is a standing offer (chat or call), not a seventh unique-point slide. Unique-point seven (“help toward what you need”) is *product behavior*; this strip is *how to reach them*.
- User: should not have to finish the homepage movie to find chat/phone. Should not see a lonely padded band that looks like another chapter.
- Future: if story sections are removed in the refactor, this chrome must still exist (footer and/or nav).

## Fix metadata
- Likely code owners: `aside.site-help-strip` in `index.html` (~3685) and shared chrome (`css/shroffin-shell.css` `.site-help-strip`; `scripts/lib/site-chrome.js` / templates that emit the same aside). They inspected homepage margin ~52 / 64 at recording time.
- Acceptance in their words: strip stays nice; padding above/below gone; “fixed to the footer”; “no padding will be there”; “everywhere there is footer, there is this strip on top of footer”; “space is reduced”; “the same for everyone”; “this is not a section”; not an independent / whole-screen section.
- What NOT to do: do not delete Chat now / the phone number. Do not turn this into another dark unique-point section. Do not only fix homepage if they asked for every footer. Do not treat “navel / nav” as a closed spec that replaces the footer strip.
- Open questions: nav placement vs footer-only. Exact pixels — they named 52.64 as the **bad** margin, not a target value.
- continues_from: unique-point work in this folder (`06`); earlier homepage clips did not settle this chrome
- continues_in: `08-footer-ui-legal-not-the-disclaimer-story.md` (they move from strip to footer UI)

## Evidence index
- `audio.vtt` / `audio.txt` 05:14.090–08:05.460
- `events.json`: scroll t=310713 y=8764.5 and following bottom-of-page scrolls; focus `#home-built-trigger-4` t=377731
- `screenshots/0041.png`–`0055.png` especially `0048.png` (inspector on `aside.site-help-strip`, orange margin 52 / 64)
- `pages.json`: landmark complementary “Get help”
- `index.html`: `aside.site-help-strip` immediately before `footer.site-footer`
- `css/shroffin-shell.css`: `.site-help-strip` rules (shared chrome)
