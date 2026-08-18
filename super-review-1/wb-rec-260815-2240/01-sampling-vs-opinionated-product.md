# Sampling hears every band — the product still has to be opinionated

The last clip ended on a bell curve: equal samples from every income band. They finish the sentence here: all those standard deviations together are called **sampling**. If they built from the feedback of all of those people, they would get a product — and **beyond that**, the product should be **opinionated**. The other founder already held this and has nothing to add.

## Classification
- kind: product-thinking | company philosophy
- status: open
- surface: explore-banks / Loan inputs (`form#hlc-inputs`) — they are still sitting on the form while finishing 2231’s research argument. Not a layout bug.
- viewport: 1366x768 @2x
- speakers: Speaker A (primary) finishes the sampling sentence and states the product rule. Speaker B: “That’s what I said. I don’t know what to say.” ASR is not diarized. Whisper language tag: `mr`.

## Session metadata
- folder: `wb-rec-260815-2240`
- recording id: `a82e9a9f-c11f-4376-881d-25a436d5e6f5`
- clip: 18 of 30
- started_at: 2026-08-15T17:10:04.687Z
- ended_at: 2026-08-15T17:19:10.273Z
- duration_ms: 545586 (~9 min 6 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 67 (JPEG; `screenshots/0000.jpg`–`0066.jpg`)
- event count: 127
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2231` ended 2026-08-15T17:10:02.771Z (~2 s earlier) — YC / first-customer trap; sample ₹40,000 and ₹5 lakh income bands; clip cuts on “All standard deviations. We need people in between.”
- next: `wb-rec-260815-2249` started 2026-08-15T17:19:17.338Z (~7 s later) — instead of Adjust eligibility, show the extra **columns** directly.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Section: `h1` “Explore banks.” then form **Loan inputs** (`#hlc-inputs`).
- On-page at rest (unchanged this span): Monthly income **₹1,00,000**; Property agreement value **₹6,000** (leftover; not discussed); Age **35**; CIBIL **780**; Occupation **Self-employed**; Purpose **Regular**; collapsed **Adjust eligibility** (helper: “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”); **See options** (`#hlc-see-options`, `type="submit"`). Below: Overview tab, Canara Bank row (loan **₹5,400**, tenure **20**, EMI **₹48**). Rate cells have recorder black `mask_rects`.
- Click/focus: none. First real interaction is `#hlc-monthly-income` focus at **03:59.183**.
- Scroll: none. Idle from start through **03:56**.
- Screenshots while they finish sampling: `0000.jpg`–`0003.jpg` (t=221–26223) — same card at rest.

## What they said (faithful, complete)

Mid-sentence from **2231** (that take ended: equal samples from every band of a bell curve — ₹40,000 income people, ₹5 lakh income people, and the people in between — “All standard deviations”).

**00:02.650–00:06.290** Speaker A:
> Raw ASR: “All standard deviations are called sampling.”
> Corrected: “All standard deviations **[together]** are called sampling.” Same 2231 idea: sampling = people from every band of the curve, not one cohort. Low-confidence glue words (`All` ~0.23, `are` / `called` ~0.27); **standard deviations** and **sampling** are the stable terms.

**00:07.710–00:17.310** Speaker A:
> Raw ASR: “Now, if I consider the feedback of all of them, I will make a product. But beyond that, the product should be opinionated.”
> Corrected: same. “All of them” = those sampled bands. Hearing everyone is how you *make a product*. It is not the last step. After that the product must take a stand.

**00:17.990–00:22.110** Speaker B:
> Raw ASR / corrected (same): “That’s what I said. I don’t know what to say. That’s what I said.”
> Agreement, not a counter. No extra rule. Second “That’s what I said” is very low-confidence ASR (`That's` ~0.06, `said.` ~0.03) but matches the first line.

They do not name a control, a survey tool, or a feature in this span. Next breath (`02`) is why they started the company at all.

## First-principles problem
- What must be true: Shroffin can listen across income bands (2231) and still ship **one** point of view. Sampling is how you avoid a single-bubble customer. Opinion is how you avoid a mush of every request.
- Root vs symptom: not a form-copy issue. The root is **how they will use customer talk**: as input, not as the spec.
- Constraints they implied: do not skip sampling; do not let sampling *be* the product.

## Directions they considered
- Only one direction: consider feedback from all sampled people, **then** make the product opinionated.
- Lean: Speaker B already held this; Speaker A is locking it. Company rule, not a taste nit.
- Rejected: a product that is only “the feedback of all of them.”

## Company / user / future thinking
- User: the sampled person is a **source of signal**, not the author of the screen. Later in this same clip they say people cannot tell their problems (`03`) and will not put the truth in the form (`05`) — this first minute is the company-level version of that.
- Company: Shroffin is a home-loan comparison tool. If they implement every request from every band, they stop having a point of view (which fields exist, what the table shows, what they refuse to coach). Opinionated = they decide the tool.
- Future: 2231 already forbade building for one paying customer or one cohort. This clip forbids the opposite failure: building for *everyone at once*. Next breaths apply the same rule to “we are not doing it for any customer” (`03`).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none for this span — philosophy, not a widget. When it *does* hit code, it is a test on Explore banks decisions (which fields, which helpers, which “best” numbers) in `pages/explore-banks.html` / `#hlc-inputs`: does this change come from a founder stand, or from averaging requests?
- Acceptance criteria in their words: consider the feedback of all of them (sampling); “beyond that, the product should be opinionated.”
- What NOT to do: do not “fix” this by adding a survey widget or by deleting sampling. Do not treat leftover ₹6,000 property as this topic.
- Open questions: where sampling still happens (2231: gift card, Cursor-style first users) vs where they just decide. They answer that in the next minutes of this clip.
- Related recordings:
  - continues_from: `wb-rec-260815-2231` — Cursor / first users / do not serve one customer; bell curve; equal samples from every standard deviation; clip ends mid-sentence on “All standard deviations.”
  - continues_in: this same clip `02` (don’t start because someone wants it) and `03` (founders’ opinions, not customers).

## Evidence index
- `audio.vtt` 00:02.650–00:22.110
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` / `audio.lrc` same span
- `wb-rec-260815-2231/audio.vtt` 08:21.830–08:43.930 (bell curve; “All standard deviations”)
- `events.json`: idle only through this span
- `pages.json` / `RECAP.md`: Explore banks, Loan inputs
- `screenshots/index.json` + `0000.jpg`–`0003.jpg`
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- Site `pages/explore-banks.html`: `#hlc-inputs` (backdrop only)
