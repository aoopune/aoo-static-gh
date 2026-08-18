# Filter block gaps read as heading and subheading — and they work

After they make Bank type / Rate / Facility feel like one family, they look at the space between filter groups. Those gaps make Borrower / Concessions / Bank type feel like a heading and the next block a subheading. They like that. “These gaps actually work.”

## Classification
- kind: praise | layout
- status: not-a-bug
- surface: `aside#hlc-filters-panel` / `.hlc-filter-group` legends (Borrower, Concessions, Bank type, Rate, Facility)
- viewport: 1366×768 @2x
- speakers: Speaker A throughout. No objection from B.

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
- next: `wb-rec-260815-2116` — does not revisit filter spacing

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Scroll **03:22.696** y=461; **03:25.598** y=573.5; **03:40.497** y=569.5 — left rail in view, Facility at the bottom of the pane.
- Click: none in this span (last click was Term loan at 03:20).
- Screenshots:
  - `screenshots/0040.jpg` (t=210194) — Filters: Borrower, Concessions, Bank type (All), Rate (Floating); space between legends
  - `screenshots/0041.jpg`–`0043.jpg` (t=220194–238193) — same stack
- What is visible: stacked fieldsets with a little air between legends and chips. Not a new component.

## What they said (faithful, complete)

**03:25.420–03:40.580** Speaker A:
> Raw ASR: “This block. So, these filters make a little gap. And this gap makes you feel that this is the heading of your section.”
> Corrected: same. The **gap** between filter blocks is what makes the legend read as a **section heading**.

**03:41.420–03:45.620** Speaker A:
> Raw ASR: “And this is the subheading of this section. And this is the subheading of this section.”
> Corrected: same (repeated). The next legend reads as the next heading / subheading in the same rail — not one blob of chips.

**03:46.140–03:51.180** Speaker A:
> Raw ASR: “And it works. It works. These gaps actually work.”
> Corrected: same (`actually` p≈0.97). Keep the gaps.

They do not ask for more padding, cards, or dividers. The next sentence (`07`) is the contrast: checkboxes vs other widgets are **not** this even.

## First-principles problem
- What must be true: each filter group must look like its own short section (legend + controls), so Public/Private is not visually glued to Green home.
- Root vs symptom: they are praising **spacing as hierarchy**, not asking for extra labels.
- Constraints: keep the little gap. Do not pack the rail into one chip cloud.

## Directions they considered
- Keep the gaps. No alternative.

## Company / user / future thinking
- User: the rail should scan as Borrower → Concessions → Bank type → Rate → Facility, each a heading plus controls.
- Company: hierarchy is already doing the job; don’t add a second Filters title system.
- Future: `07` is the uneven widgets under those headings.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `aside#hlc-filters-panel` / `.hlc-filter-group` spacing in `pages/explore-banks.html` CSS.
- Acceptance criteria in their words: “these gaps actually work”; gap makes you feel “this is the heading of your section.”
- What NOT to do: do not remove the gaps to save height. Do not add fake H2s they did not ask for. Do not “fix” this praise by restyling Bank type again (`05` owns that).
- Open questions: none.
- Related recordings:
  - continues_from: `05` (“this block… then it becomes uniform”)
  - continues_in: `07` same rail, checkbox vs pill mismatch and i-click

## Evidence index
- `audio.vtt` 03:25.420–03:51.180
- `events.json` scrolls t=202696 y=461, t=205598 y=573.5, t=220497 y=569.5
- `screenshots/0040.jpg`–`0043.jpg`
- Site: `pages/explore-banks.html` `#hlc-filters-panel`
