# Intelligence lives here — a second tool, or a line next to the number they just typed

They walk in from the last take’s unfinished sentence: this Explore banks card is the wrong home for the hacks blob, so **make a different tool**, try it elsewhere, put it here only **when it is finalized**. Within half a minute they reverse: **no new interface, no two interfaces** — suggest **right here**. Example on the monthly-income box they focus: **₹1 lakh** in the field → **you just did ₹1.25 lakh, right?**

## Classification
- kind: issue | product-thinking + architecture (placement)
- status: open (two homes named; they spend the example on inline, then reach for Google Flights in `02`)
- surface: explore-banks / Loan inputs (`form#hlc-inputs`) / `#hlc-monthly-income` (empty `#hlc-monthly-income-note` under it). Not a layout bug. “Here” = this card.
- viewport: 1366x768 @2x
- speakers: Speaker A states both placements and the 1 lakh / 1.25 lakh example. ASR is not diarized (`audio.json` language tag `mr`). Short **Yes** lines later belong to `02`.

## Session metadata
- folder: `wb-rec-260815-2213`
- recording id: `820288e7-0391-48c1-ae98-6c895d38b144`
- clip: 15 of 30
- started_at: 2026-08-15T16:43:16.850Z
- ended_at: 2026-08-15T16:52:07.526Z
- duration_ms: 530676 (~8 min 51 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 62 (JPEG; `screenshots/0000.jpg`–`0061.jpg`)
- event count: 67
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2206` ended `2026-08-15T16:43:07.910Z` (~9 s earlier) — intelligence / hacks / Pareto; last file: **this interface**, the things **below** get approximated. This take opens on the next breath: so make a different tool.
- next: later files in this folder, then `wb-rec-260815-2222` starts `2026-08-15T16:52:14.273Z` (~7 s after this clip ends) — the feature needs to be built; top three optimizations from the offer list; do not show AI.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Section: `h1` “Explore banks.” then form **Loan inputs** (`#hlc-inputs`)
- On-page values while they say “put it here” / “1 Lakh” (recording, not later live HTML):
  - Monthly income `#hlc-monthly-income` = **₹1,00,000** (the 1 lakh in the example; placeholder is also `1,00,000`)
  - Property agreement value `#hlc-property-value` = **₹6,000** (leftover from earlier local use; live HTML default is `62,50,000` — they do not discuss 6,000 here)
  - Age 35, CIBIL 780, Occupation **Salaried**, Purpose **Regular**
  - Accordion **Adjust eligibility** collapsed (“Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”)
  - Submit on the card: **See options** (`#hlc-see-options`; live HTML may now say **Compare banks**)
  - Below: Overview / Charges / Other charges; **Apply once**; table headers
- Click/focus during this talk:
  - **00:22.269** (`t=22269`) **focus** `#hlc-monthly-income` — same seconds they say “or we can just put it here”
  - **00:23.120** scroll y=181; **00:24.725** scroll y=98.5 — small nudge so a lender row is under the card. They do **not** type 1.25 lakh.
- Screenshots:
  - `0000.jpg`–`0002.jpg` (t=186–16241) — start: income ₹1,00,000, property ₹6,000, Salaried; table header only at the bottom
  - `0003.jpg` (t=24241) — after income focus + scroll: **Canara Bank** Housing loan, loan amount **₹5,400**, tenure 20, EMI **₹48**; Rate column black-masked
- What is **not** on screen: no second tool, no “prices are low” line, no 1.25 lakh suggestion. They are describing UI that does not exist yet, while pointing at this card.

## What they said (faithful, complete)

**00:00.000–00:14.600** Speaker A (placement A — a different tool):
> Raw ASR: “Bro, we need to make a different tool. And we can do it. We can do it. The one we just described, we can't just put it here. We need to put it in a different place. Then we can take it and see it. And when it's finalized, we can put it here.”
> Corrected: same. **“Bro”** is low-confidence ASR (p≈0.06) — keep as address, not a product word. **“The one we just described”** = the intelligence / hacks product from `wb-rec-260815-2206` (how to save maximum money for minimum effort; do not only sit on these inputs). **“Here”** = this Explore banks page / this Loan inputs card. Sequence they name: build it **somewhere else** → try it → **when finalized**, put it on this page.

**00:15.400–00:21.080** Speaker A (hesitation, then reverse):
> Raw ASR: “We can see it. We can see it. Or we can just put it here. Or we can just put it here.”
> Corrected: same. They repeat “put it here” — second thought, not a third product.

**00:22.620–00:38.060** Speaker A (placement B — no two interfaces; inline on the number):
> Raw ASR: “We don't need a new interface. We don't need two interfaces. We can just put it here. And we can suggest it right-right. Suppose it's right here. 1 Lakh. You just did 1.25 Lakh, right?”
> Corrected: **We don’t need a new interface. We don’t need two interfaces.** Put it **here**. Suggest it **right here** (ASR **right-right** ≈ right here / exactly here; next line is “Suppose it’s right here”). Suppose [monthly income] is **₹1 lakh**. [The product says:] **you just did ₹1.25 lakh, right?**
> They **focus** `#hlc-monthly-income` (value **₹1,00,000**) as this lands. They never type 1.25. The 1.25 lakh is the **suggestion next to the field they already filled**, not a second page.

**00:40.560–00:43.960** Speaker A (when the suggestion is allowed; hands off to `02`):
> Raw ASR: “Or it's okay. They have searched it. How does it work in Google Flights?”
> Corrected: same. **They have searched it** = after the person has already run this tool (See options / the table is up), showing the suggestion is okay. They then name the analog for **how** an inline note looks: **Google Flights**. Full Flights copy is file `02`.

They do not pick a wireframe, a new URL, or a component name. They do not say the 1.25 lakh is a default, a validation error, or a “best parameter” lecture (that lecture was forbidden in `2204`).

## First-principles problem
- What must be true: the intelligence from 2206 (how to save more money with the numbers you can change) has to **show up for the person using Explore banks** without turning this page into a second product they have to learn.
- Root vs symptom: the empty `#hlc-monthly-income-note` under 1 lakh is not “broken.” The root is **where a suggestion lives** — a separate tool they finish first, vs a line **on the field they just used**.
- Constraints they implied: do not ship two comparison UIs; a suggestion can sit **on the value already typed** (1 lakh → 1.25 lakh); it is okay **after search**, not as a gate before they can see banks. 2204 still holds: this is not “the best income is 1.25 lakh.”

## Directions they considered
- **A:** Different tool, elsewhere, then copy onto this page when finalized.
- **B (they spend the example on this):** No new interface; no two interfaces; **suggest right here** on monthly income.
- Analog they reach for next (not designed in this file): Google Flights price-now line on the **same** list (`02`).
- They do not mock a drawer, a new nav item, or a chat. “See options” is not renamed.

## Company / user / future thinking
- User: already on Explore banks with **₹1,00,000** in monthly income. They should not have to open a second “hacks” product to hear “1.25 lakh would change this.” After they have searched, a line next to the number they typed is enough.
- Company: Shroffin today is this one comparison card → bank table → apply once. A **second interface** for intelligence would split “compare banks” from “how to get a better deal.” They name that split and then reject it for v1 of the idea.
- Future: prototype off this page if the feature is messy (2206: things below get approximated). Ship **here** when the sentence is as small as Flights’ “prices are low at this moment.” How to **build** the ranking behind that sentence is `06`; whether to say “AI” is `2222`.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` Loan inputs — especially `#hlc-monthly-income` and empty `#hlc-monthly-income-note` (same pattern: `#hlc-cibil-note`, `#hlc-occupation-note`, `#hlc-loan-hint`). Not a new site section unless they later revive “different tool.”
- Acceptance criteria in their words: don’t need two interfaces; suggest **right here**; example **1 lakh → you just did 1.25 lakh**; okay once **they have searched**; don’t dump the unfinished 2206 hacks blob onto this card.
- What NOT to do: do not add a second Explore-banks-like form. Do not treat leftover **₹6,000** property as this issue. Do not publish “1.25 lakh is the best income” as a target to farm (`2204`). Do not build the Google Flights **copy** in this file’s name — that is `02`. Do not treat Amazon-sale distrust as this issue — that is `04`.
- Open questions: is “1.25 lakh” a real next slab in the data, or only an example number? Does the note appear on income only, or on CIBIL/occupation too (`03`, `07`)? Separate URL for drafting, or only inline from day one?
- Related recordings:
  - continues_from: `wb-rec-260815-2206` — hacks / intelligence / Pareto; **this interface** approximates what is below. Earlier: `2204` (don’t tell best parameters); `2134` (CIBIL min/max / I’ll raise the score).
  - continues_in: `02` in this folder (Google Flights analog). Feature-build / AI labelling: `wb-rec-260815-2222`.

## Evidence index
- `audio.vtt` 00:00.000–00:43.960
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span (`right-right`, 1 Lakh, 1.25 Lakh)
- `events.json`: focus `#hlc-monthly-income` t=22269; scroll y=181 / 98.5
- `pages.json` / `RECAP.md`: Explore banks, Loan inputs, monthly income field
- `screenshots/index.json` + `0000.jpg`–`0003.jpg`
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- `replay.spec.ts`: goto Explore banks; later Self-employed click (that click is `03`, not this block)
- Site `pages/explore-banks.html`: `#hlc-monthly-income`, `#hlc-monthly-income-note`
