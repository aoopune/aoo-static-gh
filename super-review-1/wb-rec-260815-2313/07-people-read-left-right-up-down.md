# People already read left-to-right and up-to-down — match that, don’t invent a custom order

They close the cognitive-load talk with how **models** and **people** are trained. If you use the usual pattern, you train less; if you customize, you must train more. People usually go **left to right**, **up to down**. Shroffin should **do the same**. That is the why under the layout map in `01`, said at the end of this take. Next recording starts on how many options a 60 lakh property gives, then the Compare banks button.

## Classification
- kind: product-thinking | layout law (reading order)
- status: open
- surface: same Explore banks card still on screen (no new click). The law applies to the **form + table** in `01` and to **sentence order** in `06`.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. Clip ends here. `audio.json` language tag: `mr`.

## Session metadata
- folder: `wb-rec-260815-2313`
- recording id: `152443cc-6acb-4cd3-848e-1e260b989c24`
- clip: 22 of 30
- started_at: 2026-08-15T17:43:51.324Z
- ended_at: 2026-08-15T17:52:30.230Z
- duration_ms: 518906 (~8 min 39 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765` (Google already left)
- screenshot count: 69 — `0067.jpg` / `0068.jpg` (t=502208 / 510208), same opened card
- event count: 112
- console: empty
- tabs: Explore banks
- previous: same-take `01` (named UTD / LTR as the map) and `06` (named cognitive load)
- next: `wb-rec-260815-2322` started 17:52:41.328Z (~11 s later) — “How many options do we have?” then “We have to change a button to compare banks”

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- No events after **05:02.329**. They are looking at the same Loan inputs + Overview table they opened in `02`: fields laid out left-to-right (income | property; age | CIBIL | occupation | purpose; then extra row), table columns left-to-right (Lenders, Rate, Loan amount, Tenure, EMI), page top-to-bottom (heading → card → table).
- Screenshots: `0067.jpg`–`0068.jpg` match `0045.jpg` (Adjust eligibility open, See options, leftover ₹6,000 / Top-up). They do not demo a “custom” order on screen; they talk against inventing one.

## What they said (faithful, complete)

**07:19.570–07:47.170** Speaker A (models / training data):
> Raw ASR: “It is like... It is like... The trend of modern training data. If you use the same practices. The training of the model needs to be less. Versus you have to customize it. Then you have to train it. This is it.”
> Corrected: same. Analogy: **modern training data** has habits. Reuse those habits → less training (**less.** p≈0.09). **Customize** the pattern → you must train more (higher load).

**07:50.870–08:05.690** Speaker A (follow common instructions):
> Raw ASR: “I mean... Model is more likely to follow what kind of instructions. And I use the same instructions. Instead of customizing it.”
> Corrected: same. **Model** p≈0.01 on the start — the analogy is still “the model follows the instruction shape it already knows.” Prefer the instruction shape the model (and by extension the person) already follows.

**08:05.690–08:20.690** Speaker A (example of a common workflow):
> Raw ASR: “I mean... The trend of the model is to open the PR first. Then write the code. Then open the PR. I mean... The load of the model is reduced.”
> Corrected: “The trend of the model is [a familiar git/PR workflow] — **open the PR** / **write the code** / **open the PR**. The load of the model is reduced.”
> They say open-PR both before and after write-code; treat this as “use the **usual** PR story,” not as a literal three-step they want on Explore banks. It is the analogy for **don’t invent a private sequence**. ASR **load** on “The load of the model” p≈0.00 — the surrounding “is reduced” still carries the point.

**08:23.730–08:34.370** Speaker A (the law, back on people):
> Raw ASR: “This is what I mean. We see how people are trained. People usually train left to right. Up to down. We do the same.”
> Corrected: same. **People** p≈0.23; **left** p≈0.40; **Up** p≈0.16. **People** are trained **left to right**, **up to down**. **We do the same.** End of clip. VTT stops at 08:34.370; recording runs to 08:39 idle (`ended_at` 17:52:30.230Z).

No Speaker B line in this close. No new layout mock. This restates `01` as a **training** fact, not as a new axis.

## First-principles problem
- What must be true: Shroffin’s picture (form, table, sentences) should use the order people **already** have — left→right, top→bottom — so they do not spend effort learning a private grammar.
- Root vs symptom: “cognitive load” in `06` is extra words. Here the root is extra **sequence**. Custom order = custom training = more load. Same root as `01`’s two axes.
- Constraints: do not customize reading order for cleverness. Match common practice (their model/PR analogy is only to explain that).

## Directions they considered
- Use the same practices / same instructions as the trained default. Lean: **we do the same** as people’s LTR / UTD habit.
- Customizing (a special order, a special instruction shape) is the expensive path.
- They do not pick a new table column order in this close; they already ranked outcomes UTD in `01` (money, rate, tenure).

## Company / user / future thinking
- User: already reads pages like text — left to right, top to bottom. Don’t make them learn Shroffin-first.
- Company: the comparison tool should feel like a page they already know how to scan. That is how you get to foolproof (`04`) without a lecture (`01`).
- Future: `2322` will talk Compare banks vs Explore, and banks vs lenders — vocabulary, not a new reading direction. Keep LTR/UTD when that button and those words land.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: same as `01` — `pages/explore-banks.html` input grid + Overview column order + any future importance marks (2304). Copy order in `06` should also scan LTR/UTD (short lines, not inverted cause–effect).
- Acceptance criteria in their words: “People usually train left to right. Up to down. We do the same.” “If you use the same practices. The training … needs to be less.”
- What NOT to do: do not invent a novel F-pattern or “start from EMI” just to be different. Do not put the PR/code analogy on the website. Do not treat this as the Compare banks rename (`2322`).
- Open questions: today’s table leads with **Rate** (sort up), while `01` listed **money** first among outcomes — reconcile without violating LTR. Importance marks from 2304 must sit in this same reading order.
- Related recordings:
  - continues_from: same-take `01` (UTD = outcomes; LTR = column importance) and `06` (cognitive load). `wb-rec-260815-2304` (column importance marks; 1:1 sectioning rejected).
  - continues_in: `wb-rec-260815-2322` — next clip (~11 s later, 17:52:41Z); first beats are **how many options** / 60 lakh property, then **change the button to Compare banks**, then banks vs lenders. Not a third axis of reading order.

## Evidence index
- `audio.vtt` 07:19.570–08:34.370 (end of speech)
- `audio.text` / `audio_sentences.txt` last lines
- `audio.json`: **left** / **Up to down** / **We do the same**
- `events.json`: idle through 08:22+ (last idle t=502299)
- `screenshots/0067.jpg`–`0068.jpg`
- `manifest.json` ended_at 2026-08-15T17:52:30.230Z
- Site: `pages/explore-banks.html` form grid + Overview columns
