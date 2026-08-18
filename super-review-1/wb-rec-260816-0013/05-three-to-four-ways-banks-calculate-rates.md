# Say there are 3–4 ways banks calculate rates — RBI, a private consortium, or the bank’s own

They open the **Rate change** note, glance at **Prepayment**’s RBI paragraph, and reject that density. **This needs to be a lot simpler.** Somewhere it should read: there are **3 to 4 ways** banks calculate rates — **RBI**, a **consortium of private banks**, or **their own individual calculation**. **Usually RBI is most preferred and most common.** If you want a given facility, go for that type.

## Classification
- kind: issue | product copy / mental model
- status: open
- surface: explore-banks / **Other charges** / Notes `#hlc-charges-note` / `details#hlc-charge-note-rate-change-charge` (mark **°**) / they also click `details#hlc-charge-note-prepayment-charge` (RBI Part E 352–353)
- viewport: 1366x768 @2x
- speakers: Speaker A. High-confidence ASR (avg_logprob ≈ −0.11 on the 3–4-ways span). No B turn.

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
- previous: `04` (glossary + “where is the customer’s risk?”)
- next: `06` — same breath: should **feel like advice from a lawyer**, not technical/legal words

## Where on the page
- Dropdown still **Benchmark switch**. **06:13.478** open note for mark **°** → `details#hlc-charge-note-rate-change-charge`. **06:16.090** click **Prepayment charge** summary (`0055.png`/`0056.png`/`0064.png`).
- On-screen Notes they are reacting to:
  - **Prepayment:** “Floating-rate home loans to individuals have no prepayment or foreclosure charge. Under **Reserve Bank of India (RBI) directions, Part E, paragraphs 352 and 353**.”
  - **Rate change:** “These fees are usually charged each time you change the benchmark — not once for the whole loan.” plus the long **Base Rate / MCLR / BPLR / SBAR → RLLR / EBLR / EBR** meaning note, bank-specific marks (° ◆ ● ▴ * ÷ #).
- **06:18.070** “Where is it?” is 5 s after opening those notes — they cannot find the **simple** model inside that legal block. Table behind: Yes Bank ₹0 / “At home loan interest rate”; Union Bank range link; SBI ₹5,000.
- They do not change the dropdown in this span. They do not ask to delete prepayment RBI — they ask for a **simpler frame** for **how rates are calculated**.

## What they said (faithful, complete)

**06:18.070–06:26.070** Speaker A (notes just opened):
> Raw ASR / corrected: “Where is it? What is it? It is simple. There are some things”
> Continues `04`’s “I don't even know this.” They are hunting a **simple** explanation in the Notes.

**06:37.210–06:40.970** Speaker A:
> Raw ASR / corrected: “This needs to be a lot simpler. There is a legal language.”
> **simpler** p≈0.998, **legal language** p≈0.93/0.99. The RBI Part E cite + MCLR alphabet is the legal language. Voice/tone continues in `06`; **what to say instead** is this file.

**06:43.090–07:10.430** Speaker A:
> Raw ASR: “Somewhere it should be like there are 3 to 4 ways bank calculate rates. Either they depend on RBI or they have a consortium of private banks or they have their own individual calculation. Usually RBI is most preferred and most common. If you want these type of facilities you should go for this type of.”
> Corrected: same (grammar: “**banks** calculate”). **3 to 4 ways** p≈0.22/0.72/0.99. **RBI** p≈0.95. **consortium of private banks** p≈0.99. **own individual calculation** p≈0.97/0.80. **Usually RBI is most preferred and most common** p≈0.86–0.99.
> Three ways named (RBI / consortium / own). “3 **to 4**” leaves a fourth unnamed — do not invent it. Maps to `04`: repo/RBI, IBA/MIBOR private book, bank’s own MCLR.

Pause, then `06` (“Should feel like an advice coming from a lawyer”).

## First-principles problem
- What must be true: a visitor can hold **one small map** of how a home-loan rate is made — not a statute number and a string of acronyms.
- Root vs symptom: “legal language” in the Notes is the symptom. The root is **no 3–4-way model** (RBI vs private consortium vs the bank’s own book).
- Constraints: they still want **a recommendation** (“usually RBI is most preferred”; “if you want these facilities, go for this type”). That is advice-shaped; `06` says it must **feel** like a lawyer’s advice, not a circular.

## Directions they considered
- **A lot simpler.**
- Replace (or front) the legal block with: **3 to 4 ways banks calculate rates**.
- Way 1: **depend on RBI**.
- Way 2: **consortium of private banks**.
- Way 3: **own individual calculation**.
- Default lean: **RBI most preferred and most common**; match facility → type.
- Lean: this is the content model. `06` is the register.

## Company / user / future thinking
- User: after `04` they know MCLR and repo exist. They still cannot **choose**. 3–4 ways is the choice frame.
- Company: independent comparison — we do not pick the bank; we can say which **kind of rate-setting** is usual.
- Future: `06` forbids technical/legal words as the surface. `wb-rec-260816-0031` picks up “how the rate is decided” / friendly-lawyer — do not treat this clip’s 3–4 ways as closed there.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Notes under Other charges — `RATE_CHANGE_BENCHMARK_MEANING_NOTE`, prepayment RBI Part E line, `#hlc-charge-note-rate-change-charge` / `#hlc-charge-note-prepayment-charge`. Do **one** simple 3–4-way block, not a second essay beside the acronym list. Overview `benchmarkType` already distinguishes MCLR vs repo — Other charges Notes should use that distinction in plain ways, not a new parallel taxonomy.
- Acceptance criteria in their words: “This needs to be a lot simpler.” “3 to 4 ways banks calculate rates.” “RBI or … consortium of private banks or … their own individual calculation.” “Usually RBI is most preferred and most common.”
- What NOT to do: do not only add another acronym (EBLR) as “the fourth way.” do not delete the 1-2-3-4 government calc (`01`). do not put this model only on Guide and leave Explore Notes as Part E 352. do not write “3–4 ways” as a heading with no recommendation — they gave one (RBI).
- Open questions: what the fourth way is (they never named it). Whether “facilities” means term-loan vs overdraft (the Facility filter is on screen) or rate-change types (Floating → Fixed / Repricing / Benchmark).
- Related recordings:
  - continues_from: `04` (MCLR / repo / IBA / “where is it?”)
  - continues_in: `06` (lawyer voice, same Notes)
  - related: `wb-rec-260816-0031` `01`–`02` (friendly lawyer; how the rate is decided)

## Evidence index
- `audio.vtt` 06:18.070–07:10.430
- `audio.json` high-p 3–4 ways / RBI / consortium
- `events.json`: ° note t=373478; prepayment summary t=376090
- `screenshots/0054.png`–`0056.png`, `0064.png` (RBI Part E + benchmark meaning note)
- `src/home-loan-compare.js` `RATE_CHANGE_BENCHMARK_MEANING_NOTE`; prepayment RBI copy
