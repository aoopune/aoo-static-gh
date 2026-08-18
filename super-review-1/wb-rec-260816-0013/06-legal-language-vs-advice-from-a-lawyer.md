# Notes should feel like advice from a lawyer — not technical terms and legal words

Same Notes they opened for `05`. After the 3–4-ways model, they name the **register**: it should **feel like advice coming from a lawyer**, **instead of** just **technical terms and legal words**. The RBI Part E paragraph and the MCLR/BPLR/EBR string are the exhibit.

## Classification
- kind: issue | copy / voice
- status: open
- surface: explore-banks / **Other charges** / Notes `#hlc-charges-note` / Prepayment (RBI Part E, paragraphs 352 and 353) / Rate change charge ° (benchmark meaning note + frequency note + bank marks)
- viewport: 1366x768 @2x
- speakers: Speaker A. **coming** p≈0.001 but **from a lawyer** p≈0.97. No B.

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
- previous: `05` (3–4 ways / RBI preferred) — same spoken paragraph
- next: `07` — they leave the notes and demand an **overdue calculation** (“What is 5%?”)

## Where on the page
- Still **Other charges**, Benchmark switch, Notes expanded. `0056.png` / `0064.png`:
  - Prepayment: statute voice (“Under Reserve Bank of India (RBI) directions, **Part E, paragraphs 352 and 353**” + off-site link).
  - Rate change: “each time you change the benchmark”; then **Marginal Cost of Funds based Lending Rate (MCLR)**, **Benchmark Prime Lending Rate (BPLR)**, **State Bank Advance Rate (SBAR)**, **Repo Linked Lending Rate (RLLR)**, **External Benchmark Lending Rate (EBLR)**, **External Benchmark Rate (EBR)**.
- **07:24.700** they click the rate-change summary svg (collapse/toggle) and start scrolling — the lawyer line is **before** that click. “What is 5%?” at 07:27 is `07`, not this issue.
- They clicked Prepayment at 06:16 — that is the **legal words** sample, not a request to change prepayment policy (floating-rate home loans still have no prepay charge; they do not argue the fact).

## What they said (faithful, complete)

**07:15.440–07:27.940** Speaker A:
> Raw ASR: “Should feel like an advice coming from a lawyer instead of just technical terms and legal words.”
> Corrected: “Should feel like **advice** coming from a **lawyer**, instead of just **technical terms** and **legal words**.”
> **Should feel like** p≈0.70/0.98. **advice** p≈0.98. **lawyer** p≈0.98. **technical terms** p≈0.99. **legal words** p≈0.99. **coming** p≈0.001 — keep “from a lawyer.”
> This is the **how** for `05`’s **what**. Not a request to hire counsel, and not a request to paste more statute.

They do not give sample sentences in this span beyond `05`’s 3–4 ways. Next words are “What is 5%?” (`07`).

## First-principles problem
- What must be true: the Notes must **advise** (calm, decisive, like a good lawyer explaining options) rather than **cite** (paragraph numbers, acronym chains).
- Root vs symptom: Part E 352 / MCLR-BPLR-EBR is the symptom. The root is **register**: legal-source voice instead of counsel voice. `05` already supplied the content of the advice.
- Constraints: keep the underlying rule (RBI still governs prepay; benchmarks still exist). Change how it **feels**. Off-site RBI link can stay if the visible sentence is advice, not a section number.

## Directions they considered
- Feel: **advice from a lawyer**.
- Not: **technical terms** and **legal words**.
- Lean: this is binding voice for the Other-charges Notes (and by extension the rate-change meaning note). They do not ask to delete Notes.

## Company / user / future thinking
- User: a person about to pick a bank does not need paragraph 353; they need “usually take the RBI-linked one unless you want this other facility.”
- Company: Shroffin is independent, not a law firm — **feel like** a lawyer means **clear counsel**, not pretending to be the Gazette.
- Future: `wb-rec-260816-0031` `01` “friendly lawyer not legal symbols” continues this. Do not close it there as if this clip never said it.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: prepayment note string (Part E 352–353); `RATE_CHANGE_BENCHMARK_MEANING_NOTE`; `RATE_CHANGE_FREQUENCY_NOTE_BENCHMARK`; bank-marker soup on the Rate change summary. Shared Notes renderer for `#hlc-charges-note`. Do **not** add a parallel “advice” accordion.
- Acceptance criteria in their words: “Should feel like advice coming from a lawyer instead of just technical terms and legal words.”
- What NOT to do: do not add more citations to sound thorough. do not replace `05`’s 3–4 ways with “see RBI master directions.” do not apply this voice to government-charge math cards (`01`) — those are stamp/registration arithmetic. do not strip the RBI off-site control if the visible sentence is already advice (website external-link pattern stays for the official page).
- Open questions: whether “lawyer” means slightly formal counsel (`05`’s “you should go for this type”) or warmer “friendly lawyer” (0031). This clip says **lawyer**, not “friendly.”
- Related recordings:
  - continues_from: `05` (same Notes, content of the advice)
  - continues_in: `07` (they abandon the note and poke overdue cells)
  - related: `wb-rec-260816-0031` `01` (friendly lawyer, not legal symbols)

## Evidence index
- `audio.vtt` 07:15.440–07:27.940
- `audio.json`: lawyer / technical / legal high p
- `events.json`: prepayment click t=376090; rate-change svg t=444700 (after this line)
- `screenshots/0055.png`–`0056.png`, `0064.png`
- `src/home-loan-compare.js` prepayment RBI sentence; `RATE_CHANGE_BENCHMARK_MEANING_NOTE`
