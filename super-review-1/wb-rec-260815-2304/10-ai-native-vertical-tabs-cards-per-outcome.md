# Sketch: AI-native vertical tabs — tenure as two cards, rate as one, around “10 years”

They try to **draw** sectioning: it should be an **easy form**, **AI native** (said twice). Imagine: here you have written **10 years** — give **vertical tabs**. Tenure with **two cards**; **interest rate** with **one card**. They count sections: maybe **four**, then **three** — **rate, amount, tenure**. They click **Overview** (a **horizontal** tab) while saying this. `11` then kills 1:1 grouping.

## Classification
- kind: product-thinking | visual-system / IA sketch
- status: open (sketch, then undermined in `11`)
- surface: `#hlc-tenure` (on-page **20 years**, they say **10 years**); results tabs Overview / Charges / Other charges (`getByRole("tab", { name: "Overview" })`) — horizontal today
- viewport: 1366×768 @2x
- speakers: Speaker A sketches; “How many sections? Let me see.” is A counting. ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2304`
- recording id: `6033ef99-94cd-427e-b722-e831e6342b86`
- clip: 21 of 30
- started_at: 2026-08-15T17:34:55.529Z
- ended_at: 2026-08-15T17:43:48.848Z
- duration_ms: 533319 (~8 min 53 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 73
- event count: 129
- console: empty
- tabs: 1
- previous: this folder `09`
- next: this folder `11`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Tenure in the extra block is **20 years** when open; they **say** “10 years” as the imagined label (do not treat 10 as a typed value — they never fill `#hlc-tenure`).
- **07:01.936** click Monthly income label/field (`0056.jpg`).
- **07:06.703** click tab **Overview** (`0057.jpg`) while talking vertical tabs / tenure cards. Hero **Explore banks.** is in this still; Adjust eligibility **collapsed**; See options bottom-right; Overview already selected (click is a point, not a navigation away).
- **07:11.671** click `main > div > div > div` (`0058.jpg`) — workspace chrome, not a new tab.
- **07:34** scroll y=343.5 (`0061.jpg`) — bank table (PNB 9.85% / BoB 10.00% / BoI / IOB; loan amount ₹5,400; tenure 20) while counting rate / amount / tenure / charges.
- Screenshots: `0054.jpg`–`0064.jpg`.

## What they said (RAW + corrected, both speakers)

**06:29.440–06:41.860** Speaker A:
> Raw ASR: “It is not important but we should in an easy form. There should be an AI native. AI native.”
> Corrected: “It is not important but we should [do it] in an **easy form**. There should be an **AI-native** [form]. AI-native.”
> **easy** p≈0.98, **form.** p≈0.58. First **AI** p≈0.83, **native.** p≈0.70; second **AI** p≈0.000 (repeat). “Not important” = sectioning may not be the hill (`09` already called it a big issue) — but the form should still feel easy / AI-native. They do not define the product term beyond repeating it.

**06:47.420–07:24.560** Speaker A (the sketch):
> Raw ASR: “Imagine that suppose you do like this. Here you have written 10 years. You give vertical tabs. Here you have written 10 years. This is the tenure with two cards. And the interest rate with one card.”
> Corrected: same shape, with weak tokens flagged. **10 years.** p≈0.82 / 0.50 then second **years.** p≈0.13. **vertical** p≈0.02, **tabs.** p≈0.66 — keep **vertical tabs** because it is the only layout word they offer, but do not treat the word “vertical” as high-confidence ASR. **tenure** p≈0.003 — almost noise; they just said **10 years**, so tenure is the intended object, not a sure token. **two cards.** p≈0.42 / 0.66. **interest rate** p≈0.93 / 0.93. **one card.** p≈0.47 / 0.74. They do not say what the two tenure cards contain.

**07:26.340–07:47.840** Speaker A (counting sections):
> Raw ASR: “How much can you do? There were four sections. How many sections? Let me see. The rate, amount, tenure. There were three. What else? The section 1. The section 1 affects. The rate, amount, tenure. All three were affected.”
> Corrected: same. **four sections.** p≈0.55 / 0.97. **rate, amount, tenure.** second pass is strong (p≈0.77 / 0.95 / 0.998). **three.** p≈0.04 — weak, but they just named three nouns. Then “section 1” **affects all three** — the crack that `11` opens. They have not yet named charges.

This is brainstorming of a **visual system** (vertical tabs + a different number of cards per outcome). They do not choose a library, a breakpoint, or copy. `2313` will keep outcomes as an **up-down** order instead of this tab sketch. No Speaker B turn in this beat.

## First-principles problem
- What must be true: the form/results chrome should make **rate vs amount vs tenure** obvious (cards/tabs), in an easy, “AI-native” way.
- Root vs symptom: horizontal Overview/Charges tabs are not what they asked for in this sketch (they asked **vertical**). Root: outcomes need a **place** in the UI. `11` says one input will not stay in one place.
- Constraints: easy form; vertical tabs; tenure two cards; rate one card; count started at four then three (rate, amount, tenure).

## Directions they considered
- Easy / AI-native form (label only).
- Vertical tabs next to a “10 years” tenure readout.
- Tenure = two cards; interest rate = one card.
- Four sections vs three (rate, amount, tenure).
- Lean: sketch only. `11` immediately finds that section 1 affects all three + charges.

## Company / user / future
- User: should see tenure and rate as **objects** (cards), not only as table headers.
- Company: “AI-native” here is a **feel** they named twice — not a chatbot. Do not invent an assistant from this clip.
- Future: `2313` translates the same three outcomes into **up-down importance** (how much money, how much rate, how much tenure) and column importance **left-right**.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-tenure`; results tablist (Overview / Charges / Other charges) if anyone were to rotate it vertical; card layout around outcomes. **Do not implement this sketch without `11`.**
- Acceptance criteria in their words: easy form; AI-native; vertical tabs; “here you have written 10 years”; tenure with two cards; interest rate with one card; rate, amount, tenure as the three.
- What NOT to do: do not change tenure from 20 to 10 (they were imagining). Do not ship vertical tabs as a restyle of Overview without the sectioning logic. Do not build a chatbot.
- Open questions: what the two tenure cards are. What the fourth section was before they said three. How Charges fits (they add it in `11`).
- Related recordings:
  - continues_from: `09` (sectioning map)
  - continues_in: `11` (rejects 1:1); `wb-rec-260815-2313`

## Evidence index
- `audio.vtt` 06:29.440–07:47.840
- `events.json`: income click t=421936; Overview tab t=426703; main click t=431671; scroll y=343.5 t=454183
- `replay.spec.ts`: Overview tab click
- `screenshots/0054.jpg`–`0064.jpg` (`0057` Overview + h1; `0061` table)
- Site: `#hlc-tenure` value 20; tab **Overview**
