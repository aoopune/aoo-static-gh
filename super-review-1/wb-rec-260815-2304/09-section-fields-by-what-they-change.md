# They wanted to section the form by what each field changes — and already felt it was a big issue

They list a map: **property agreement value** changes **only the loan amount**; **interest rate** changes **only with age and CIBIL**; **age, occupation, purpose** change **tenure**. That is the **sectioning** idea — group fields by the outcome they move. They call it a **big issue**: there might be only **one** section, but they would still have to make a **different** section. `10`–`11` try a UI, then reject clean 1:1 sectioning.

## Classification
- kind: product-thinking | information architecture (form grouping)
- status: open (they do not settle it here)
- surface: `#hlc-property-value`, `#hlc-age`, `#hlc-cibil`, occupation, purpose, `#hlc-tenure` → Overview columns Loan amount / Rate / Tenure
- viewport: 1366×768 @2x
- speakers: Speaker A thinking aloud. ASR is not diarized.

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
- previous: this folder `08`
- next: this folder `10`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Adjust eligibility **collapsed** after 05:37 (`0046.jpg`–`0055.jpg`). Primary six fields + See options. Overview / Charges / Other charges tabs sit under the card (horizontal, not vertical yet).
- They **talk** the map; they do not click property/age/CIBIL in this span (those clicks return in `11` at 08:05+).
- Scroll: y=0 / y=10 while thinking (t=341180, 350081, 352712).

## What they said (RAW + corrected, both speakers)

**05:38.340–05:47.180** Speaker A (setup):
> Raw ASR: “I was thinking that there are so many requirements. There are so many things. Every thing changes in one age.”
> Corrected: “I was thinking that there are so many requirements. There are so many things. Everything changes in **one [go] / with age**.”
> **requirements.** p≈0.99. Repeat “so many things” is weak. **one** p≈0.28, **age.** p≈0.26 — ambiguous (the Age field vs “one stretch”). Next lines assign **age** to **tenure** and to **rate** (with CIBIL) — keep both.

**05:49.100–06:03.040** Speaker A (the map they want to be true):
> Raw ASR: “The property agreement value changes only in the loan amount. The interest rate changes only in the age and the civil score. The age, the occupation, the purpose changes in the tenure.”
> Corrected: “The **property agreement value** changes **only** the **loan amount**. The **interest rate** changes **only** with **age** and the **CIBIL** score. The **age**, the **occupation**, the **purpose** change **tenure**.”
> **property / agreement** tokens are weak (p≈0.14–0.25) but **loan amount.** p≈0.98. **civil** p≈0.56, **score.** p≈0.97 → **CIBIL**. **occupation,** p≈0.64, **purpose** p≈0.98, **tenure.** p≈0.61. These are **claimed exclusive** mappings. `11` will take the exclusivity back.

**06:05.040–06:21.300** Speaker A (sectioning as a problem):
> Raw ASR: “I was thinking about the sectioning issue. I was thinking about it. But it is a big issue. We will have to find a section. There will be only one section. But we will have to do a different section.”
> Corrected: same. **sectioning** p≈0.58. **issue.** p≈0.007 on the “big issue” line — the word is weak; **big** p≈0.58. **one** p≈0.96, **different** p≈0.68. **Sectioning** = grouping the form (or the page) by those outcome buckets. They already feel the contradiction: maybe **one** section, but they would still need a **different** section.

They do not name Charges / Other charges as sections yet (`10` will). They do not draw the vertical tabs yet (`10`). No Speaker B turn in this beat.

## First-principles problem
- What must be true: if the user is to become “intelligent while filling” (`2313`), each column should be tied to **what it moves** (amount vs rate vs tenure).
- Root vs symptom: a flat six-plus-four grid is the symptom. Root they are probing: **can fields be partitioned by outcome?** They already suspect the partition is a **big issue**.
- Constraints: they stated exclusive maps (property→amount only; rate→age+CIBIL only; age/occupation/purpose→tenure). `11` tests whether exclusivity is true.

## Directions they considered
- Group by outcome using that three-line map.
- Admit sectioning is a big issue (one section vs a different section).
- Lean: this is the **question**, not the layout. UI sketches are `10`. Rejection is `11`.

## Company / user / future
- User: “why are you asking this?” should answer with **which number on the bank row moves** (`2240` `07` already wanted live movement).
- Company: we compare on amount, rate, tenure (and charges). The form should teach that map — if the map is clean. If it isn’t, don’t fake sections (`11`).
- Future: `2313` keeps outcome importance **up-down** (money, rate, tenure) even after 1:1 sectioning dies.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: grouping of `#hlc-inputs` zones; Overview columns Rate / Loan amount / Tenure. Do not section from this file alone.
- Acceptance criteria in their words: property agreement value → loan amount only; rate → age and CIBIL only; age, occupation, purpose → tenure; sectioning is a big issue.
- What NOT to do: do not ship three form sections from this map before `11`. Do not pretend charges are untouched (they will say charges move too).
- Open questions: is Age in **two** buckets (rate and tenure) already a sectioning break? They put age in both sentences.
- Related recordings:
  - continues_from: `wb-rec-260815-2240/07` (changing a field should show what moves)
  - continues_in: `10` (vertical tabs / cards); `11` (not 1:1); `wb-rec-260815-2313`

## Evidence index
- `audio.vtt` 05:38.340–06:21.300
- `events.json`: idle + small scrolls; Adjust already collapsed
- `screenshots/0046.jpg`–`0055.jpg`
- Site: `#hlc-property-value`, `#hlc-age`, `#hlc-cibil`, occupation/purpose, Overview columns
