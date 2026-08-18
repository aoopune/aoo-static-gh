# Nobody in India knows “ceiling”; property help also starts with “Sets”

They open Property agreement value’s **i**. The tooltip says “Sets the ceiling on the loan against this house.” They read it aloud, then: **no one in India knows about ceilings.** Same craft fault as income: the sentence **starts with sets.** The requirement is already in the popover — change the line, don’t add chrome.

## Classification
- kind: issue | copy
- status: open
- surface: Explore banks / `#hlc-property-value` / `button[aria-label="About Property agreement value"]` / `#hlc-help-property-value`
- viewport: 1366×768 @2x
- speakers: Speaker A states the jargon and **sets** problems. Speaker B is not heard on this block.

## Session metadata
- folder: `wb-rec-260815-2116`
- recording id: `cff0d45a-1eff-4415-a374-98232f3208a8`
- clip: 9 of 30
- started_at: 2026-08-15T15:46:08.706Z
- ended_at: 2026-08-15T15:55:10.521Z
- duration_ms: 541815 (~9 min 2 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 95
- event count: 183
- console: empty
- tabs: 1
- ASR language: `en`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- On-page popover `#hlc-help-property-value` (visible on `0039.jpg` t=180187):
  - “**Sets the ceiling on the loan against this house. Use the sale agreement price.**”
  - “Learn more” → `guide.html#loan-amount-property`
- Field: ₹62,50,000. Label: “Property agreement value” (HTML: `Property agreement` + `span.hlc-field-label-tail` `value`).
- First About Property agreement value: focus **02:25.290**, click **02:25.292** (`0026.jpg`). More **i** clicks **02:26.316 / 02:26.946**, **02:36.537–02:39.678**, field focus **02:43.877** `#hlc-property-value`, **i** again **02:45.890** (SVG rect).
- `0029.jpg` (t=156188) is the first property-**i** interaction still; `0039.jpg`–`0042.jpg` hold the “ceiling” tooltip while they talk.
- What “ceiling” means here (from the sentence + second clause, not from LTV jargon on screen): the **upper bound on the loan against this house**, and the number to type is the **sale agreement price**. The **word** on the page is “ceiling,” which they reject for India.

## What they said (faithful, complete)

**02:32.160–02:34.320** Speaker A:
> Raw ASR: “Ceiling won the loan against this house.”
> Corrected: “**Sets the ceiling on** the loan against this house.” (on-page verbatim)
> ASR: `Ceiling` p≈0.46 — he is reading the tooltip, not inventing a new noun.

**02:35.460–02:37.980** Speaker A:
> Raw ASR / corrected: “No one in India knows about ceilings.”
> `ceilings.` p≈0.70.

**02:39.760–02:47.540** Speaker A:
> Raw ASR: “Sets the ceilings. All the properties are in this house. Let's talk about it.”
> Corrected: “**Sets the ceiling.** [On the loan] **against this house.** Let’s talk about it.”
> ASR: “All the properties are in this house” ≈ the on-page tail **“on the loan against this house.”**

**02:51.870–02:58.870** Speaker A:
> Raw ASR: “Because... Our requirements have been captured in this. So we have to change the loop.”
> Corrected: the **i** already holds what we need to say; **we have to change the line / look / wording.**
> ASR: **loop.** p≈0.73 — most likely **look** or **line** (the tooltip sentence), not a code loop. They are staring at the popover. `change` p≈0.06.

**03:01.530–03:06.950** Speaker A:
> Raw ASR: “This sentence starts with sets. And the word ceiling doesn't work in India.”
> Corrected: same. Two named faults, stacked: **sets** (`sets.` p≈0.16) + **ceiling** (`ceiling` p≈0.69).

They do not propose a replacement for “ceiling” in this span. `04` is what the field **means** (agreement vs registry vs valuation). `05` is the **label**. This note is only the help **sentence** and the banned word.

## First-principles problem
- What must be true: help text uses words a home-loan seeker in India already has. “Ceiling” is English-finance jargon; they say **nobody here knows it.**
- Root vs symptom: “weird tooltip” is the symptom. Root: the sentence is a product-engineer’s caption (**sets** + **ceiling**) instead of “this price caps how much loan you can take on this house” in everyday words.
- Constraints: keep the second instruction’s **intent** (use the sale agreement price) — they spend `04` making that precise. Do not swap in another unknown (LTV, FOIR, cap) without checking the same India test. FOIR’s tooltip already says “Cap on EMIs versus income” — same family, not discussed in this clip.

## Directions they considered
1. Reject **ceiling** for India.
2. Reject sentences that **start with sets**.
3. The popover already “captured” the requirement — change the wording, don’t add a new widget.
- Lean: rewrite `#hlc-help-property-value`; don’t invent a diagram of LTV.

## Company / user / future
- User: knows “agreement value,” “registry,” “how much loan on this house.” Does not know “ceilings.”
- Company: plain language a stranger understands in one read. Jargon theatre is banned in voice. This is that rule on a form **i**.
- Future: every other **Sets…** tooltip on this card is in the firing line (`06`): Age “Sets the longest tenure…”. Do not “fix” ceiling by writing LTV unless they ask; they never said LTV.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-help-property-value` `.hlc-field-help-text`
- Acceptance criteria in their words: “no one in India knows about ceilings”; “this sentence starts with sets”; “the word ceiling doesn’t work in India.”
- What NOT to do: do not keep “ceiling” as a smart word. Do not only fix the property **label** (`05`) and leave this tooltip. Do not assume they asked for the letters “LTV” on screen.
- Open questions: exact replacement phrase (max loan on this house / how much of this house’s price can be a loan / sale agreement price as the limit). `04` supplies the meaning.
- Related recordings:
  - continues_from: this folder `01` (same **sets** verdict on Monthly income)
  - continues_in: `04` (which value to type), `05` (label), `06` (same India-jargon test on remaining **i**s)

## Evidence index
- `audio.vtt` 02:32.160–03:06.950
- `audio.json` `Ceiling` p≈0.46; `ceilings.` p≈0.70; `loop.` p≈0.73; `sets.` p≈0.16
- `events.json`: About Property agreement value t=145290+; `#hlc-property-value` t=163877
- `screenshots/0026.jpg`–`0029.jpg`, `0039.jpg`–`0042.jpg`
- `pages.json` / site: “Sets the ceiling on the loan against this house. Use the sale agreement price.”
