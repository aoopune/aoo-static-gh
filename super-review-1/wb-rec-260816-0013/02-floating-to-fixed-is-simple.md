# Floating → Fixed is simple — stop making that switch look complex

After they leave government charges (“let’s go to the main topic”), Other charges sits on the default **Floating → Fixed** dropdown. They cycle Repricing and Benchmark switch, land back on **Floating → Fixed**, and say it out loud: **it’s simple**. Then they go to the next type.

## Classification
- kind: issue | product / rate-change column
- status: open
- surface: explore-banks / **Other charges** tab / column **Rate change charge** / combobox `getByRole("combobox", { name: "Rate change type" })` inside `th#hlc-th-rateChangeChargeDisplay` / option `typeSwitch` labelled **Floating → Fixed**
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. No Speaker B in this span.

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
- previous: `01` in this folder (government charges); `wb-rec-260816-0004` ~3 s before this recording
- next: `03` in this folder — Repricing / “the repo rate doesn’t change automatically” / CIBIL intelligence

## Where on the page
- Other charges from **01:40.579**. Default method in code is `RATE_CHANGE_METHOD_TYPE` (**Floating → Fixed**). `0030.png` (t≈180s, combobox click **03:00.029**) still shows that label, with Axis **1.00% on outstanding principal · Min ₹10,000**, Bandhan **Not published**, Baroda **0.10%** on outstanding + undisbursed, BOM **₹5,000**.
- They walk the three options (input events; values not captured in `events.json` `data`, recovered from RECAP + screenshots):
  - **03:09.501** **Repricing** (`0032.png`) — Axis becomes “Fixed amount by loan amount range”
  - **03:13.354** **Benchmark switch** (`0033.png`) — visible cells “Not published by bank”
  - **03:16.351** **Floating → Fixed** (`0035.png`) — back to Axis 1.00% / Baroda 0.10% / BOM ₹5,000
- Speech **03:16–03:26** is on that last landing. Overdue **2.00% p.a.** is visible in the next column; they are **not** talking overdue yet (`07`/`08`).
- Filters unchanged: All / Floating / Term loan. Co-applicant **No**. **Apply once**.

## What they said (faithful, complete)

**03:11.070–03:15.550** Speaker A (just after selecting typeSwitch):
> Raw ASR: “Oh my god! There are many complexes. Let's see.”
> Corrected: “Oh my god! There are many **complex** [things]. Let's see.”
> **complexes** p≈0.31. They have just flipped Repricing → Benchmark → Floating → Fixed. The complexity is the **three-way dropdown**, not a new page.

**03:16.870–03:24.660** Speaker A:
> Raw ASR: “Floating to fixed. And the low notes are floating to fixed. It's simple.”
> Corrected: “**Floating to fixed.** And the **loan** [ASR **low notes** p≈0.34 / 0.003] is floating to fixed. **It's simple.**”
> **Floating / to / fixed** are high confidence (p≈0.85–0.98). Matches the visible option label **Floating → Fixed**. Do not invent a Notes rewrite from “low notes.”

**03:24.980–03:26.400** Speaker A:
> Raw ASR / corrected: “Let's go to the next one.”
> Next click is the same combobox at **03:28.468** → **Repricing** (`03`).

## First-principles problem
- What must be true: switching **floating → fixed** is one ordinary job. The column should present it as that job.
- Root vs symptom: “many complexes” is the symptom of **one header** hiding three different products (type switch / repricing / benchmark). The root they name here is: **Floating → Fixed is simple** — so that option must not inherit the legal soup written for benchmark switch (`04`–`06`).
- Constraints: keep the other two types; they explicitly go to “the next one.” Do not delete Repricing or Benchmark switch in the name of simplicity.

## Directions they considered
- Call this option **Floating to fixed**.
- Treat it as **simple**.
- Then move on (Repricing is `03`).
- Lean: this is the default Other-charges view. They are not asking for a fourth dropdown.

## Company / user / future thinking
- User: most people who open “rate change” mean “what if I lock floating to fixed?” That should be readable without MCLR footnotes.
- Company: comparison should not punish the simple switch with the same density as a benchmark migration.
- Future: `03` is CIBIL/repricing intelligence; `04` is the benchmark list. Do not merge those into this “it’s simple” line.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `src/home-loan-compare.js` `RATE_CHANGE_METHOD_TYPE` / `rateChangeTypeSwitchLabel` / header `<select aria-label="Rate change type">` option labelled **Floating → Fixed**; default `state.rateChangeMethod`. Notes: do not attach `RATE_CHANGE_BENCHMARK_MEANING_NOTE` to this method (that string is benchmark-only in code already).
- Acceptance criteria in their words: “Floating to fixed.” “It's simple.” “Let's go to the next one.”
- What NOT to do: do not hide the dropdown. do not retitle Repricing as Floating → Fixed. do not treat Axis’s 1.00% / BOM’s ₹5,000 as wrong in this clip — they did not challenge those figures here. do not use this line to rewrite prepayment RBI notes (`06`).
- Open questions: whether “simple” means shorter cell copy, a calmer default, or a one-line meaning note for type-switch only (code already has a separate meaning note for Repricing: “not Floating ➔ Fixed”).
- Related recordings:
  - continues_from: `01` (“let’s go to the main topic” → Other charges)
  - continues_in: `03` (Repricing / rate does not change automatically / CIBIL)

## Evidence index
- `audio.vtt` 03:11.070–03:26.400
- `audio.json` words: Floating/to/fixed high p; low/notes low p
- `events.json`: Other charges t=100579; combobox t=180029; fills t=189501 / 193354 / 196351 (typeSwitch)
- `screenshots/0030.png` (Floating → Fixed at click), `0032.png` (Repricing), `0033.png` (Benchmark switch), `0035.png` (Floating → Fixed while they speak)
- `replay.spec.ts`: `#hlc-th-rateChangeChargeDisplay > span > select` fills `repricing` / `benchmark` / `typeSwitch`
- `src/home-loan-compare.js` `RATE_CHANGE_METHOD_TYPE` default
