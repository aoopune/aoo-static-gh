# Typed digits normal weight; still-to-type digits extra weight (Amazon)

This take starts ~8 s after `2125` died mid-Amazon (“when you type F…”). They check the mic, then one of them says they have **cracked the Amazon links**: the **amount already typed** stays **normal font weight**; the **type you are going to type** (untyped / still empty) gets the **extra** weight. The other says you pay so much for a PM, then “you have studied it well.” They never click a field.

## Classification
- kind: issue | UI / input formatting
- status: open
- surface: explore-banks / Loan inputs / money fields `#hlc-monthly-income`, `#hlc-property-value` (`data-hlc-format="money"`). Spoken object is **amount**, not Age or CIBIL.
- viewport: 1366x768 @2x
- speakers: Speaker A (same range / Amazon camp as `2125`) states the weight rule and “cracked the Amazon links.” Speaker B: PM-cost aside, then “you have studied it well.” ASR is not diarized; language tag `mr` with English product words.

## Session metadata
- folder: `wb-rec-260815-2134`
- recording id: `1965821a-27df-4039-8e62-b268e8696a5b`
- clip: 11 of 30
- started_at: 2026-08-15T16:04:29.489Z
- ended_at: 2026-08-15T16:10:04.857Z
- duration_ms: 335368 (~5 min 35 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 40 (JPEG; `screenshots/0000.jpg`–`0039.jpg` — README says PNG, bundle is JPEG)
- event count: 53
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2125` ended 16:04:20.986Z (~8.5 s earlier) — CIBIL exact vs windows, then Amazon typeahead cut off at “When you type F, it freezes.”
- next: `wb-rec-260815-2201` (~21 min later) is ~11 s off-topic bar chat — **skip as content**. Next real take: `wb-rec-260815-2204`.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Section: `h1` “Explore banks.” then form **Loan inputs** (`#hlc-inputs`). Hero money row is Monthly income + Property agreement value.
- On-page copy in the recording:
  - Monthly income **₹ 1,00,000** (placeholder same string)
  - Property agreement value **₹ 62,50,000**
  - Age **35** years; CIBIL **780**; Occupation **Self-employed**; Purpose **Regular**
  - Accordion: **Adjust eligibility** (“Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”)
  - Button: **See options**
  - Below the card: tabs Overview (active) / Charges / Other charges; headers Lenders / Rate / Loan amount / Tenure (yrs) / EMI
- Click/focus during this talk: **none**. First real interaction is CIBIL focus at **05:02.637**, long after this beat.
- Scroll: none until **05:03.794** (y=337.5).
- Screenshots while they talk about this (**00:00–00:34**):
  - `0000.jpg` (t=207, start) — filled card, Overview headers at the bottom
  - `0001.jpg` (t=8208) — same while “formatting / Amazon links”
  - `0002.jpg` (t=18207) — “what is this Amazon link?”
  - `0003.jpg` (t=26208) / `0004.jpg` (t=34208) — still the same rest state through “you have studied it well”
- What is visible: rupee amounts already filled, Indian grouping. Typed numbers read as one weight. ₹ prefix is quieter. Empty/untyped remainder is **not** on screen (placeholders equal the values). Two heuristic black bars sit on Age / CIBIL near the bottom of the card (`mask_rects` on `0000.jpg`). This is **not** a hyperlink to amazon.com.

## What they said (faithful, complete)

**00:00.730–00:03.110** both (mic check):
> Raw ASR: “How is it going?” / “Yes, it is going.”
> Corrected: same. Confirms the recorder is live after the ~8 s split from `2125`.

**00:06.970–00:10.890** Speaker A:
> Raw ASR: “Yes, I am formatting it nicely. I have cracked all the Amazon links.”
> Corrected: they are **formatting** the field look and say they have **cracked** the **Amazon** pattern. **Links** = Amazon search-suggestion rows (the `2125` football / “type F” analogy), not shopping URLs.

**00:12.690–00:13.910** Speaker B:
> Raw ASR / corrected: “You have to pay so much for a PM.”
> Aside. **PM** spoken as letters — in this co-founder review, a product manager. Not a page control.

**00:16.830–00:27.230** Speaker A (the rule):
> Raw ASR: “When we searched, we thought, what is this Amazon link? The amount you have typed, you keep the normal font weight. The type that you are going to type, you keep the extra font weight.”
> Corrected: when they looked this up they thought “what is this Amazon [suggestion] look?” **Amount already typed → normal font weight. Type you are going to type (untyped / still-to-enter) → extra font weight.**
> Word probs on “Amazon” / “link?” are weak; sense is locked by `2125`’s Amazon typeahead and by “font weight” landing twice.

**00:29.090–00:34.030** Speaker B:
> Raw ASR / corrected: “You have studied it well.”
> Praise. No pixel, CSS weight number, or mock. Then ~21 s silence before the CIBIL dropdown fight (`02`).

They do not type a partial amount. They do not name Age or CIBIL as the object of this weight rule.

## First-principles problem
- What must be true: while a rupee amount is being filled, **committed digits** and **not-yet-typed digits** must read as two weights, so the field feels like a price still being written, not a finished caption.
- Root vs symptom: “Amazon links / font weight” is the symptom. Root: hero money inputs are one `font-weight: 500` string (`.hlc-field--hero input`). There is no typed-vs-untyped split.
- Constraints they implied: **normal = typed; extra = still to type.** They did not ask to change Indian comma grouping or the ₹ prefix.

## Directions they considered
- Format amounts the Amazon-suggestion way (typed vs untyped weight). **Lean.**
- Typed = normal; untyped remainder = extra. **Specified.**
- PM-cost joke — not a product direction.
- They do not propose a second control, a dropdown, or a live preview besides weight.

## Company / user / future thinking
- User: types Monthly income and Property agreement value on this card. Weight should say what is already in vs what is still empty.
- Company: Explore banks is where real money is entered. The field should feel like a careful amount, not a bold label.
- Future: this visual is separate from the CIBIL range debate that fills the rest of the clip. Do not fold it into dropdown / min-max work and lose it. `2204` restates income / CIBIL / property as **parameters**, not font weight.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-monthly-income` / `#hlc-property-value` in `pages/explore-banks.html`; `.hlc-field--hero input` in `css/shroffin-explore-banks.css` (today `font-weight: 500` on the whole value); money-format JS that writes the grouped string.
- Acceptance criteria in their words: “the amount you have typed, you keep the normal font weight”; “the type that you are going to type, you keep the extra font weight”; Amazon-style field, not a shopping link.
- What NOT to do: do not treat this as an external Amazon URL. Do not “fix” it by only bolding the entire filled value (that is already close to the screenshot). Do not mix this with CIBIL dropdown / min-max (`02`). Do not invent a CSS weight number they did not speak.
- Open questions: does “type you are going to type” mean placeholder-only, or a ghost of remaining digits after a partial type (e.g. `1,00` typed + `,000` still heavier)? They did not demo a partial type. Same rule for Age / CIBIL, or **amount** only? They said amount.
- Related recordings:
  - continues_from: `wb-rec-260815-2125` `02` — Amazon typeahead for CIBIL, cut off at “when you type F.” This clip reuses Amazon for **typed vs untyped weight**.
  - continues_in: not this topic. Skip `2201`. `2204` does not reopen font weight.

## Evidence index
- `audio.vtt` 00:00.730–00:34.030
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span (`language: mr`; “Amazon links”, “font weight”)
- `events.json`: idle 00:00–00:52; no click
- `pages.json`: Loan inputs; Monthly income / Property agreement value text fields
- `screenshots/index.json` + `0000.jpg`–`0004.jpg`
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- Site `pages/explore-banks.html` `#hlc-monthly-income`, `#hlc-property-value`; CSS `.hlc-field--hero input { font-weight: 500 }`
