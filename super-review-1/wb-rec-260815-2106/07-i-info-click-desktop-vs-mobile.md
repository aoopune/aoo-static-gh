# i-info is click-to-open — desktop vs mobile, and hard to hit

They like the gaps, then notice the rail is mixed: Borrower and Concessions are checkboxes; Bank type / Rate / Facility are the pill widgets. They try the Borrower **i**. It does not feel like it opens by itself. It opens when you click — they mention mobile vs desktop. They click the SVG circles and rects of the i, not a large target.

## Classification
- kind: issue | help popover + mixed controls
- status: open
- surface: `#hlc-borrower-label` `button[aria-label="About Borrower"]` `.hlc-field-help` (SVG mark); same pattern on Concessions i (next file)
- viewport: 1366×768 @2x (they also name mobile)
- speakers: Speaker A. No dissent.

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
- next: `wb-rec-260815-2116` hammers the **input** i’s the same way (SVG circles on Monthly income)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- On-page: Borrower checkbox “Govt / PSU employee and pensioner”; Concessions checkboxes Women / Green home / Insurance; then the All/Public/Private pills.
- Clicks:
  - **04:00.018 / 04:00.678 / 04:01.640** (`t=240018–241640`, shots 44–46) `legend#hlc-borrower-label` … `svg > rect` — stem of the i
  - **04:03.736** (shot 47) `aside#hlc-filters-panel > div:nth-of-type(2)` — click beside, not the button
  - **04:04.874** (shot 48) `svg > circle:nth-of-type(1)` — About Borrower, the i disc
  - **04:15.461** (shot 50) filters panel div again
- Screenshots: `0044.jpg`–`0051.jpg` — Borrower i in the legend; table still showing mixed public+private banks; no large popover obvious in the stills (help may be `hidden` until a clean hit).
- What is visible: tiny grey i next to “Borrower”. They miss it, hit the rect, hit the panel, then the circle.

## What they said (faithful, complete)

**03:52.560–03:55.460** Speaker A:
> Raw ASR: “But there are no such checkboxes. There are many even widgets.”
> Corrected: there are **not** [only] such checkboxes. There are many **uneven** widgets (ASR **even ≈ uneven**, `even` p≈0.22). Borrower/Concessions = checks; Bank type/Rate/Facility = pills (`05`).

**04:01.870–04:07.570** Speaker A:
> Raw ASR: “Does this happen when you open it? It happens when you click from your mobile. From the desktop.”
> Corrected: does the i-help **happen when you open** [the page / hover]? It happens when you **click**. [They name] **mobile** (`mobile.` p≈0.75). **From the desktop.** (`From` p≈0.09). Desktop = click, not hover-on-open. They are checking whether desktop behaves like mobile.

They do not read the Borrower popover text out loud (“Only if you work for the government…”). The struggle is **opening** it.

## First-principles problem
- What must be true: the i is how you learn a filter without leaving the table. It must be an easy hit and an obvious open (click on desktop; same idea on a phone). Mixed checkbox vs pill widgets make the rail feel unlike one system (`05` already wants checkboxes).
- Root vs symptom: missed clicks on `svg > rect` / `circle` are the symptom. Root: the help control is a small SVG mark, click-only, and the rail mixes two control types.
- Constraints: desktop is this recording (1366×768). They still mention mobile — don’t assume hover-only on desktop if they expect click, and don’t ship hover-only on touch.

## Directions they considered
1. Notice checkboxes vs other widgets.
2. Probe whether i opens by itself vs on click; call out mobile vs desktop.
- Lean: i should open on a clear click; don’t make them hunt the SVG. Widget mix is the same “uniform” ask as `05`.

## Company / user / future thinking
- User: tap/click the i and get the rule. Should not feel like a desktop-only hover secret, and should not miss the target.
- Company: help stays in-product (`08` will say don’t send people to another page).
- Future: Concessions i is worse — they hammer it, then leave for Learn more (`08`). `2116` hammers the **input** i’s the same way.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-field-help` / `.hlc-field-help-mark` in `pages/explore-banks.html` (Borrower `#hlc-help-borrower`); clickable area should be the **button**, not inner SVG shapes. Align control type with `05`.
- Acceptance criteria in their words: they should not have to ask “does this happen when you open it?”; click on desktop (and mobile) should open it; widgets should not feel uneven vs the checkboxes.
- What NOT to do: do not leave the hit target as `svg > rect` / `circle`. Do not make desktop hover-only if they are clicking. Do not “fix” by removing the i (`08` needs **more** i copy, not less).
- Open questions: exact mobile vs desktop difference they believed — they name both, recording is desktop only.
- Related recordings:
  - continues_from: `06`
  - continues_in: `08` Concessions i + Learn more; `wb-rec-260815-2116` same SVG i-clicks on loan inputs

## Evidence index
- `audio.vtt` 03:52.560–04:07.570
- `events.json` Borrower i clicks t=240018–244874; panel clicks t=243736, 255461
- `screenshots/0044.jpg`–`0051.jpg`
- `replay.spec.ts` `legend#hlc-borrower-label` svg rect/circle
- Site: `pages/explore-banks.html` `#hlc-borrower-label` `.hlc-field-help`
