# The product “video” looks good — viewport, padding, everything

Right after the spacing complaint they look at the big moving demo under the headline — Explore banks inside a Safari-like window on the landscape — and say it looks good. Viewport, padding, the lot. This is praise. Do not “fix” it while centering the headline.

## Classification
- kind: praise
- status: resolved | not-a-bug
- surface: homepage / `section.spd-section--home` / aria-label “Explore banks product demo” / `.spd-stage` / `.spd-playback` Replay/Play
- viewport: 1366×768 @2x
- speakers: Speaker A praises. No disagreement.

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
- This is not a file named “video.” It is the desktop product demo: iframe `pages/_product-demo-frame.html`, Safari chrome, URL bar `shroffin.com`, playback control `.spd-playback`.
- Focus already on Replay at **00:21.017** (`t=21017`) `getByRole("button", { name: "Replay" })`.
- Scroll into the demo as they praise it:
  - **00:40.073** y=315.5
  - **00:41.574** y=319.5
  - **00:43.508** y=766.5 then **00:44.307** y=415.5 (overshoot, then settle on the demo)
- Screenshots:
  - `screenshots/0004.png` (t=34195) — headline + CTA still in view; top of demo
  - `screenshots/0005.png` (t=44195) — demo fills the viewport: filters + bank table over dusk hills, “Apply once”, Replay/refresh at bottom-left
  - `screenshots/0006.png` (t=52195) — still on demo; dark story line starting to peek (“We completely re-engineered your home loan”)
- What is visible: Axis / South Indian / J&K rows checked, rates ~7.35%, loan ₹50,00,000, 20 years, EMI ~₹39,822; “Show 13 more banks”; “Data last checked on 14 July 2026”; landscape wallpaper behind the white card (`css/shroffin-product-demo.css` `.spd-stage` background `media/demos/product-demo-desktop.jpg?v=20260815b`). `--spd-margin-y: 60px` / `--spd-margin-x: 130px` is the padding they are likely calling “video padding.”

## What they said (faithful, complete)

**00:40.640–00:44.740** Speaker A:
> Raw ASR: “Your video looks good, video view code, video padding, everything looks good.”
> Corrected (best reading): “Your video looks good — video, **viewport**, video padding, everything looks good.”
> Alternate parse of “view code”: they listed viewport **and** the demo implementation. Either way the demo is accepted.

They do not ask to change speed, crop, chrome, or the table. They immediately ask whether the photo is theirs.

## First-principles problem
- What must be true: this demo’s look, framing, and padding already pass. Hero copy centering (`02`) must not steal padding from here.
- Root vs symptom: not a problem. Adjacent issue is the white band above, not this stage.
- Constraints: keep viewport and padding.

## Directions they considered
- Keep as-is. Lean: complete praise for this clip.

## Company / user / future thinking
- The product should look like the real Explore banks tool, calmly framed. They are happy with that first impression of the tool itself.

## Fix metadata
- Likely code owners: `css/shroffin-product-demo.css` (`.spd-section--home`, `.spd-stage` margins); `index.html` demo section ~3014–3084; iframe `pages/_product-demo-frame.html`; `.spd-playback`.
- Acceptance in their words: “video looks good”; “video padding, everything looks good.”
- What NOT to do: do not restyle this demo as a side effect of hero vertical centering. Do not treat “video view code” as a request to change code.
- Open questions: none on the demo itself.
- continues_from: `wb-rec-260815-1928` (abort)
- continues_in: none for this praise. Photo ownership is the next sentence (`04`).

## Evidence index
- `audio.vtt` 00:40.640–00:44.740
- `events.json` focus t=21017; scrolls t=40073, 41574, 43508, 44307
- `screenshots/0004.png`, `0005.png`, `0006.png`
- `pages.json` region “Explore banks product demo”; actions Replay / Play
- `replay.spec.ts` does not click Replay
- `css/shroffin-product-demo.css` `.spd-stage` padding + photo
