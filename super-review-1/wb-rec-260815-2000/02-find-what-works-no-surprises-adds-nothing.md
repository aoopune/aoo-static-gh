# “So you find what works — with no surprises” still adds nothing

On the same Transparent slide, they point at the small grey line under the headline. “Find what works for you” and “with no surprises” do not add a fact. They say you do not have to add that line. This is the same empty-support complaint as 1929, now said while the whole slide is already on trial.

## Classification
- kind: copy
- status: open | unresolved (line should go; replacement not drafted)
- surface: homepage / `section.home-clear` / `.home-clear-body` / `.home-clear-body-lead` + `.home-clear-body-tail`
- viewport: 1366×768 @2x
- speakers: Speaker A (Parth) reads the line and dismisses it. No pushback.

## Session metadata
- folder: `wb-rec-260815-2000`
- recording id: `6be15ad6-ecbe-44e0-8c46-58dd985b7dca`
- started_at: 2026-08-15T14:30:27.912Z
- ended_at: 2026-08-15T14:39:10.279Z
- duration_ms: 522367
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- events_count: 172
- screenshots_count: 63
- console_count: 0
- tabs_count: 1
- pages_count: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- Copy on screen (exact): `So you find what works for you` + ` — with no surprises.`
- Events + locators:
  - Click **01:05.705** (t=65705) `locator("main > div > section:nth-of-type(2) > div > div > div > p > span:nth-of-type(2)")` — the **tail** span “ — with no surprises.” `screenshot_id`: 8.
  - CSS of that paragraph: `p.home-clear-body` with `span.home-clear-body-lead` then `span.home-clear-body-tail`.
- Screenshots:
  - `screenshots/0007.png` (t=56206) — headline + body visible as they start “and there is a sentence in it.”
  - `screenshots/0008.png` (t=66113, click) — same; cursor on the grey supporting line.
- What the PNG shows: the only extra words on a full-screen type slide. Small, grey, centered under the display type.

## What they said (faithful, complete)

**00:56.680–00:58.520** Speaker A:
> Raw ASR: “And there is a sentence in it.”
> Corrected: And there is a sentence **in this section** (under the headline).

**00:58.640–01:00.760** Speaker A (reads on-screen copy):
> Raw ASR: “So you find what works for you with no surprises.”
> Corrected: same as the page: **So you find what works for you — with no surprises.**

**01:01.460–01:02.280** Speaker A:
> Raw ASR: “You don't have to add anything.”
> Corrected: **You don’t have to add [this].** The line is optional and they would skip it.

**01:03.860–01:05.660** Speaker A (click lands on the tail at 01:05.705):
> Raw ASR: “With no surprises, you don't have to add anything.”
> Corrected: **“With no surprises” — you don’t have to add [that] anything.** They single out the tail, then the whole sentence.

They do not offer a replacement. They do not say the headline must stay if the body dies. That debate already happened in 1929 (headline liked; body empty). Here the empty body is extra proof the **slide** has nothing in it (`01`).

## First-principles
- What must be true: a supporting line must add a **fact** the headline did not already say.
- Root vs symptom: “no surprises” is comfort, not information. Comfort that restates “transparent” is noise.
- Constraint: if the whole slide is later dropped (`01`), this line dies with it. If the slide is kept in another form, this line still must not return as filler.

## Directions they considered
- Do not add this sentence. Lean: cut. No rewrite offered.

## Company / user / future thinking
- User: “no surprises” does not tell them what will happen on the site.
- Company: they already plan to prove the claim with commissions / bias / look-through (`03`, `04`). A slogan under Transparent competes with those facts.

## Fix metadata
- Likely code owners: `index.html` ~3174 `p.home-clear-body` / `.home-clear-body-lead` / `.home-clear-body-tail`; CSS `.home-clear-body*` in `index.html`.
- Acceptance in their words: “you don’t have to add anything”; “with no surprises, you don’t have to add anything.”
- What NOT to do: do not swap in another soft comfort line (“peace of mind”, “no hidden catches”) and call it done. Do not invent new supporting copy in this audit — they did not draft it.
- Open questions: if Transparent stays in some form, what (if anything) sits under it.
- continues_from: `wb-rec-260815-1929` `07-transparent-headline-liked-supporting-lines-add-no-value.md` — same two phrases, same “adds no value.” This clip repeats the cut while putting the whole slide on trial.
- continues_in: none as a separate copy ticket. Folded into `01` / `05` / `06` if the dark band is rebuilt.

## Evidence index
- `audio.vtt` 00:56.680–01:05.660
- `events.json` click t=65705, screenshot_id 8
- `screenshots/0007.png`, `0008.png`
- `replay.spec.ts` clicks `section:nth-of-type(2) … p > span:nth-of-type(2)`
- `index.html` `.home-clear-body`
