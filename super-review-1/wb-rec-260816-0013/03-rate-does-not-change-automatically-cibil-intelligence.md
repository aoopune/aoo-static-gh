# The rate does not change automatically — CIBIL intelligence is: go tell the bank

On **Repricing** they ask “what is this?” **You have to change the rate.** **The repo rate does not change automatically** — that is different. If CIBIL is better, go to the bank and say so, or leave. That is **intelligence**, to **save money**. Raising CIBIL is how you get the loan; the site should say you have to **increase** it.

## Classification
- kind: issue | product / intelligence
- status: open
- surface: explore-banks / **Other charges** / Rate change type **Repricing** (`RATE_CHANGE_METHOD_REPRICE`) / same combobox as `02`
- viewport: 1366x768 @2x
- speakers: Speaker A throughout. ASR not diarized. No clear B turn until `04` (“No, I don't”).

## Session metadata
- folder: `wb-rec-260816-0013`
- recording id: `924b010f-fab9-4953-ba2d-7edc0de4e239`
- clip: 28 of 30
- started_at: 2026-08-15T18:43:33.349Z
- ended_at: 2026-08-15T18:52:58.320Z
- duration_ms: 564971 (~9 min 25 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 82
- event count: 180
- console: empty
- tabs: 1
- previous: `02` (Floating → Fixed is simple)
- next: `04` — Benchmarks (MCLR, repo, MIBOR, LIBOR) after they fill **benchmark** at 04:04

## Where on the page
- **03:28.468** click combobox; **03:29.844** fill **repricing**. `0032.png` / `0036.png`–`0039.png`: header subtitle **Repricing**. Axis **Fixed amount by loan amount range** (blue link); Bandhan **₹3,000**; Baroda / BOI / BOM / Canara **Not published by bank**.
- They stay on Repricing until **04:03.063** (benchmark). No CIBIL field is edited in this clip; Loan inputs stay off-screen. The CIBIL talk is **what Repricing should mean**, not a form click.
- Code already has a Repricing meaning note: “moving from a higher rate to a lower rate on the same rate type — not Floating ➔ Fixed.” That note is **not** what they say here. They say: **you** change it; **repo does not auto-cut**; **CIBIL** is the lever.

## What they said (faithful, complete)

**03:26.400–03:31.540** Speaker A (switching off Floating → Fixed):
> Raw ASR / corrected: “What is this? What is this? You have to change the rate.”
> Timed to Repricing. “You” = the borrower, not the page auto-updating.

**03:33.480–03:36.040** Speaker A:
> Raw ASR: “But the vapor rate doesn't change automatically. That's different.”
> Corrected: “But the **repo** rate doesn't change automatically. That's different.”
> **vapor** p≈0.16 → **repo** (same ASR error in `04`). **doesn't change automatically** p≈0.67–0.91. Repricing is **not** “RBI cut repo, so my EMI falls.”

**03:36.200–03:50.000** Speaker A:
> Raw ASR: “If you have more civil, you can go to the bank and tell them that you have more civil, change the rate or else I will go to you. Then you change the rate. This is also intelligence. To save money.”
> Corrected: “If you have more **CIBIL**, you can go to the bank and tell them that you have more **CIBIL**, change the rate or else I will go to [another bank]. Then you change the rate. This is also **intelligence**. To **save money**.”
> **civil** p≈0.32 then **0.98** — **CIBIL**. “go to you” p≈0.51 → **another bank** / elsewhere (threat to switch). **intelligence** p≈0.70; **save money** p≈0.98. Same “intelligence / save money” thread as 0004’s Google-Flights processing-fee talk.

**03:51.220–03:56.840** Speaker A:
> Raw ASR: “You can say that if you take so much of your civil, you will get a loan. But you have to increase it.”
> Corrected: “You can say that if you take so much of your **CIBIL**, you will get a loan. But you have to **increase** it.”
> Two jobs: (1) show that a **higher CIBIL** unlocks a better rate / the loan; (2) tell the customer they must **raise** the score — it will not rise for them.

Silence until **04:03.940** “Benchmarks.” (`04`).

## First-principles problem
- What must be true: **repricing** is an action the customer **takes** (often with a better CIBIL, or by threatening to leave). It is not an automatic follow-on from **repo**.
- Root vs symptom: a Repricing column of ₹3,000 / “not published” is the symptom. The root they name is **missing intelligence**: the site does not say *you* go to the bank, *repo will not do it for you*, *CIBIL is the bargaining chip*.
- Constraints: keep Floating → Fixed as a **different** thing (`02`: “that's different”). Do not auto-reprice in the table when CIBIL is typed — they want the **advice**, not a silent recalc that hides the visit-the-bank step.

## Directions they considered
- Spell **you have to change the rate**.
- Contrast with **repo**, which does **not** change the loan automatically.
- CIBIL up → walk in (or switch banks) → then the rate changes. Label that **intelligence** / **save money**.
- Say that getting the loan may require **increasing** CIBIL.
- Lean: this is a product-copy / intelligence call on the Repricing view, not a new calculator in this span (calculators arrive at overdue, `07`).

## Company / user / future thinking
- User: thinks a repo cut, or a better bureau score sitting in the form, will quietly lower EMI. That belief is expensive. The honest line is: **you still have to ask**.
- Company: Shroffin is independent — full picture, customer decides. Showing the fee to reprice without the **move** (raise CIBIL, walk in, or leave) is a fee list, not intelligence.
- Future: `04` names the **benchmarks** you might switch; do not collapse “repo doesn’t auto-change” into the MCLR glossary. 0004 already used **intelligence** for processing-fee shopping; this is the rate-change twin.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Repricing meaning note `RATE_CHANGE_REPRICING_MEANING_NOTE` (today: higher-to-lower on the same type, not Floating ➔ Fixed) — extend or sibling so it also says **not automatic with repo** and **CIBIL / ask the bank**. Header select Repricing. Do **not** put this on `typeSwitch`. Loan-inputs CIBIL field is **not** clicked here; any “increase it” hint belongs with Repricing intelligence, not a new mandatory CIBIL lecture on Overview.
- Acceptance criteria in their words: “You have to change the rate.” “The repo rate doesn't change automatically. That's different.” “If you have more CIBIL… change the rate or else I will go.” “This is also intelligence. To save money.” “You have to increase it.”
- What NOT to do: do not auto-apply a lower rate when the form CIBIL is high and call that “intelligence.” do not mix this into Floating → Fixed (`02`). do not treat “civil” as a legal-language issue (`06`). do not add a second Repricing column.
- Open questions: whether the “or else I will go” line is on-page copy or a spoken example of what the customer should say at the branch. Whether Bandhan’s ₹3,000 is the example fee they want next to that advice (they did not name Bandhan).
- Related recordings:
  - continues_from: `02` (“let’s go to the next one”)
  - continues_in: `04` (Benchmarks / MCLR / repo / MIBOR / LIBOR)
  - related: `wb-rec-260816-0004` `05` — “save money” / intelligence (processing fee)

## Evidence index
- `audio.vtt` 03:26.400–03:56.840
- `audio.json`: vapor p≈0.16; civil 0.32 then 0.98; intelligence 0.70
- `events.json`: combobox t=208468; fill repricing t=209844; next fill benchmark t=244644
- `screenshots/0032.png`, `0036.png`–`0039.png` (Repricing column)
- `src/home-loan-compare.js` `RATE_CHANGE_METHOD_REPRICE`, `RATE_CHANGE_REPRICING_MEANING_NOTE`
