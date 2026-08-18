# No Back on Concessions — they look for one and use Explore banks

On the Guide concessions page they ask if something is blue, then: no back, where is the back? “This is mobile.” The page has Guide chrome and a blue **Explore banks** button, not a Back control. They click the banner and land back on Explore banks. The detour from Learn more has no explicit return.

## Classification
- kind: issue | navigation
- status: open
- surface: `pages/concessions.html` guide chrome (local nav + `Explore banks` CTA); `#guide-swap`; `getByRole("banner")`
- viewport: 1366×768 @2x
- speakers: Speaker A. B silent on this beat.

## Session metadata
- folder: `wb-rec-260815-2106`
- recording id: `2c589daf-48f1-4304-8831-5a9870fea870`
- clip: 8 of 30
- started_at: 2026-08-15T15:36:22.615Z
- ended_at: 2026-08-15T15:45:24.586Z
- duration_ms: 541971 (~9 min 2 s)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 202
- console: empty (`console.json` is `[]`)
- tabs: 1
- previous: `wb-rec-260815-2018` — homepage
- next: `wb-rec-260815-2116` — stays on Explore banks; no Guide detour

## Where on the page
- URL: `http://localhost:8765/pages/concessions.html#bank-rates` then back to Explore banks.
- Clicks:
  - **05:26.974** (`t=326974`, shot 66) `#guide-swap` — the guide body wrapper, not a labelled Back
  - **05:38.371** (`t=338371`, shot 68) `getByRole("banner")` — Guide header strip (logo / “Guide” / chapter links / **Explore banks**)
  - Nav **05:41.696** (`t=341696`, shot 69) concessions → `explore-banks.html`
- Scroll **05:34.818** y=0 — hero “You may already pay less.” + house models + Rate discounts / PMAY / Fees.
- Screenshots:
  - `screenshots/0066.png` — still on the rate-discount grid (blue title)
  - `screenshots/0067.png` / `0068.png` — scrolled to hero; Guide nav; blue **Explore banks** top-right; **no Back**
  - `screenshots/0069.jpg` — Explore banks again
- What is visible: they came from a filter Learn more. Return path is the product CTA, browser chrome, or a miss-click on `#guide-swap` — not “Back to compare.”

## What they said (faithful, complete)

**05:25.830–05:27.210** Speaker A:
> Raw ASR: “Is this blue?”
> Corrected: same (`blue?` p≈0.80). Likely the blue section title and/or the blue Explore banks button — they are hunting a way out.

**05:30.920–05:33.280** Speaker A:
> Raw ASR: “No back. Where is the back?”
> Corrected: same (`back?` p≈0.92). There is **no Back**.

**05:36.980–05:37.960** Speaker A:
> Raw ASR: “This is mobile.”
> Corrected: same (`mobile.` p≈0.51). They read the Guide chrome as **mobile-like** (local nav, no back chevron) even on this desktop viewport — or they are saying a back control is what they’d expect on mobile.

They do not ask to remove Explore banks from the Guide header. They want a **back** after arriving from the product.

## First-principles problem
- What must be true: if compare sends you to a Guide chapter, you must be able to return to **the same compare state** without guessing which blue control is “home.”
- Root vs symptom: “where is the back?” is the symptom. Root: Learn more is a full page change (`concessions.html`) with Guide chrome, not a stacked detail with Back.
- Constraints: `08` already says prefer not sending people away. If the link stays, return must be obvious.

## Directions they considered
- Look for Back; don’t find it; click banner (Explore banks) to leave.
- Lean: missing Back is a real issue for this entry path. Not a request to redesign the whole Guide.

## Company / user / future thinking
- User: came from Filters → Learn more. Mental model is “detail, then back,” not “new Guide section.”
- Company: Guide is a real page (they praised it). Product chrome should still return them to Explore banks.
- Future: `08` wants the facts on the i so this trip is optional.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/concessions.html` guide header / Explore banks CTA; Learn more in `pages/explore-banks.html` `#hlc-help-concessions`. Prefer in-filter help (`08`) so Back is less needed; if the link stays, a clear return to `explore-banks.html` (history back or labelled control) for this entry.
- Acceptance criteria in their words: they should not say “no back / where is the back?”
- What NOT to do: do not use this pattern’s ↗ off-site treatment for same-site Guide links. Do not hide the Guide Explore banks CTA they used as an escape. Do not invent a mobile-only back that leaves desktop as it is if the ask is the missing control on this trip (recording is desktop).
- Open questions: did “this is mobile” mean the Guide header feels like an app, or a real mobile breakpoint? Viewport here is 1366×768.
- Related recordings:
  - continues_from: `08` (the Learn more click)
  - continues_in: rest of `08` after return (write it on the filter); then `10`

## Evidence index
- `audio.vtt` 05:25.830–05:37.960
- `events.json` click `#guide-swap` t=326974; scroll y=0 t=334818; banner t=338371; nav t=341696 screenshot_id 69
- `screenshots/0066.png`–`0069.jpg`
- `pages.json` p3 headings / Explore banks in guide chrome
- Site: `pages/concessions.html` `#guide-swap`, banner, Explore banks; `pages/explore-banks.html` Learn more
