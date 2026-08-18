# Why monthly income — answer the visitor; keep take-home, not CTC

After calling the income line the main eligibility sentence, they speak as the customer: why put this, why do you want my monthly income, what does it **do** in loan processing. They keep the second half of the tooltip: **use take-home, not CTC.** That is salary CTC, not CIBIL.

## Classification
- kind: issue | copy + form-field philosophy
- status: open
- surface: Explore banks / `#hlc-monthly-income` / `#hlc-help-monthly-income` (“Use take-home, not CTC.”)
- viewport: 1366×768 @2x
- speakers: Speaker A throughout, in the visitor’s mouth. Speaker B is not heard on this block.

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
- Same Monthly income **i** as `01`, still the object. Second sentence on the popover: “Use take-home, not CTC.” Learn more → `guide.html#loan-amount`.
- Extra About Monthly income clicks while they ask “why”: **01:40.341 / 01:41.294 / 01:41.907 / 01:42.547** (`0017.jpg`–`0020.jpg`). They have not moved to Property yet (first property **i** is **02:25.292**).
- Field stays ₹1,00,000. CIBIL 780 is visible on the card; they are not talking about it.
- ASR trap: “stay home / CDC” can sound like CIBIL if you only hear the audio. The screenshot text is **take-home, not CTC.** The CIBIL field is the next recording (`wb-rec-260815-2125`).

## What they said (faithful, complete)

**01:44.820–01:48.040** Speaker A (as the visitor):
> Raw ASR: “I have come here to see why you should cut your monthly income.”
> Corrected: “I have come here to see **why you should put** [ / why I should give] **your monthly income.**”
> ASR: **cut ≈ put / give** (`cut` p≈0.50). They immediately ask “why do you want my monthly income?” — not a request to reduce income.

**01:50.880–01:53.600** Speaker A:
> Raw ASR / corrected: “Why do you want my monthly income?”

**01:55.840–02:00.740** Speaker A:
> Raw ASR: “Tell me, what does your monthly income work in loan processing?”
> Corrected: “Tell me, what does **monthly income do** in loan processing?”

**02:05.250–02:09.110** Speaker A:
> Raw ASR: “And yes, you can stay home, not CDC.”
> Corrected: “And yes, **use take-home, not CTC.**”
> Second `CDC.` p≈0.00 — screenshot still decides. They **keep** this instruction. Pros: it is the one part of the tooltip they affirm. Cons: they still want the *first* sentence rewritten (`01`).

**02:12.150–02:17.310** Speaker A:
> Raw ASR: “What does monthly income work in loan processing? That's what sets how much bank loan works.”
> Corrected: “What does monthly income **do** in loan processing? That's what **sets how much bank loan** [you can get / banks can offer].”
> They restate the current meaning (`sets` p≈0.24), then trail off “But…” (**02:18.290–02:18.990**) and move to the property popover (`03`).

Examples: no rupee figures on income (the box stays ₹1,00,000). The example voice is the **why** questions, not a sample salary.

## First-principles problem
- What must be true: a required field must earn the number. The visitor did not come to donate income; they came to see banks. Help must answer **why this** and **what it does in processing**, then tell them **which** income (take-home, not CTC).
- Root vs symptom: hiding the reason behind “sets how much loan…” is the symptom. Root: the tooltip is written as a calculator caption, not as a reply to “why do you want this from me?”
- Constraints: keep take-home vs CTC. Do not turn the **i** into a lecture; the **i** is where the why lives (`05` later says the same for property). Shroffin does not guarantee a loan amount — banks offer; this input only shapes the comparison.

## Directions they considered
1. Speak as the customer: why put it, why do you want it, what does it do in loan processing.
2. Keep “use take-home, not CTC.”
3. The true job of the line is still “how much loan banks can offer” — said in human order, not “sets.”
- Lean: why-first, then which number (take-home). No new field.

## Company / user / future
- User: salaried people in India know CTC vs in-hand. If the form silently uses CTC, eligibility looks bigger than the bank will use. Take-home is the honest input.
- Company: explain the rule; don’t harvest a score. This is the opposite of aggregator “free CIBIL” bait: we ask income because **processing uses it**, and we say so.
- Future: the same three questions (why / what does it do / which figure) are the template for Age, CIBIL, Occupation, Purpose, Adjust eligibility (`06`). They start Age’s **i** at 08:48 without answering it in this clip; CIBIL continues in 2125.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: same `#hlc-help-monthly-income` paragraph as `01` (one rewrite should cover sentence craft **and** why/take-home).
- Acceptance criteria in their words: the **i** answers “why do you want my monthly income?” and “what does monthly income do in loan processing?”; still “use take-home, not CTC.”
- What NOT to do: do not map CDC→CIBIL. Do not remove take-home vs CTC. Do not add a second income field (CTC and take-home) — they never asked for that.
- Open questions: whether “loan processing” belongs in the short tooltip or only behind Learn more (`guide.html#loan-amount`).
- Related recordings:
  - continues_from: this folder `01` (same popover; “sets” / main eligibility)
  - continues_in: `06` (apply why-first to the rest of the form); `wb-rec-260815-2125` is CIBIL, not CTC

## Evidence index
- `audio.vtt` 01:44.820–02:18.990
- `audio.json` `cut` p≈0.50; second `CDC.` p≈0.00; `sets` p≈0.24
- `events.json`: Monthly income **i** t=100341–102547
- `screenshots/0017.jpg`–`0025.jpg`
- Site `pages/explore-banks.html` help text “Use take-home, not CTC.”
