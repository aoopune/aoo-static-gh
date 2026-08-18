# Benchmarks are MCLR, repo, MIBOR, LIBOR — customer risk is the spread, and it is not on the page

They switch the dropdown to **Benchmark switch** and teach the glossary: **MCLR** (Marginal Cost of Lending Rate), **repo**, shift is an **option** people rarely use, **LIBOR** then **MIBOR** (Mumbai), plus a private **IBA**-style book. **What is the customer’s risk?** They say **cost of sleep** three times, then **I don’t even know this** — the risk is not shown.

## Classification
- kind: issue | product / glossary + missing risk
- status: open
- surface: explore-banks / **Other charges** / Rate change type **Benchmark switch** (`RATE_CHANGE_METHOD_BENCHMARK`) from **04:04.644** through the rest of the take / later Notes `details#hlc-charge-note-rate-change-charge` (`05`/`06`)
- viewport: 1366x768 @2x
- speakers: Speaker A teaches. **04:54.820–05:02.260** is two-person: A “You don't borrow, do you?” / B “No, I don't.” ASR not diarized.

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
- previous: `03` (Repricing / CIBIL)
- next: `05` — 3–4 ways banks calculate rates (they open the ° note at 06:13)

## Where on the page
- **04:03.063** combobox; **04:04.644** **Benchmark switch**. Column stays on that method until the recording ends (`0054.png`, `0064.png`, `0070.png`, `0080.png` all still say Benchmark switch).
- Visible while they talk (top of table, then they sit): many cells **Not published by bank**; SBI later **₹5,000**; Yes Bank **₹0**; Union Bank **Fixed amount by loan amount range** (blue `>`).
- They do **not** open the ° note until **06:13.478** (`05`). This span is speech **over** the unpublished/₹ cells, not over the long MCLR/BPLR/RLLR footnote. That footnote (when later opened, `0056.png`) already lists Base Rate, **MCLR**, BPLR, SBAR → RLLR / EBLR / EBR. It does **not** list **MIBOR** or **LIBOR**. It does **not** name **customer spread / risk**.
- Repo as a **rate type** is in the left Filters (**Floating** selected). They are talking **repo as a benchmark**, not the Floating/Fixed filter.

## What they said (faithful, complete)

**04:03.940–04:23.520** Speaker A:
> Raw ASR: “Benchmarks. Some people give benchmarks. MCLR. Marginal Cost of Lending Rate. This is a vapor rate benchmark. This is MCLR benchmark. This is also a benchmark. You can shift the benchmark. Generally people don't do it. But there is an option.”
> Corrected: “**Benchmarks.** Some people give benchmarks. **MCLR. Marginal Cost of Lending Rate.** This is a **repo**-rate benchmark. This is **MCLR** benchmark. This is also a benchmark. You can **shift** the benchmark. Generally people don't do it. But there is an **option**.”
> First **vapor** p≈0.00; later **Vapor rate is the ultimate** **Vapor** p≈0.51 → **repo** in both. **MCLR** p≈0.90. **shift** p≈0.74.

**04:24.500–04:32.840** Speaker A:
> Raw ASR: “Vapor rate is the ultimate. Fixed rates are mostly MCLR. Fixed rates are risky.”
> Corrected: “**Repo** rate is the ultimate. Fixed rates are mostly MCLR. Fixed rates are **risky**.”
> **MCLR** on “mostly MCLR” p≈0.007 — possible slip, but they immediately ask MCLR’s full form, so keep MCLR. **risky** p≈0.31.

**04:37.420–04:53.100** Speaker A (and they answer themselves):
> Raw ASR / corrected: “What is the full form of MCLR? Marginal Cost of Lending Rate. Who decides this? The marginal cost of the bank is the rate of lending. Then they cut the marginal cost. They take that.”
> They want **who sets MCLR** (the **bank’s** marginal cost), not another acronym dump.

**04:54.820–05:02.260** both:
> Raw ASR / corrected: A: “You don't borrow, do you?” B: “No, I don't.”
> Aside / check that B is following. Not a UI control. **borrow** p≈0.64.

**05:02.600–05:36.500** Speaker A:
> Raw ASR: “There are many such cases. The rate of libor. London... Institute of... Of rate. They take out the libor and do the iBOR. Mumbai. They take out the rates of the banks. They take out the benchmarks. They take out the iBOR. There is a private... There is a bank of their own and there is also an ABI. There is a standardised private market.”
> Corrected: “There are many such cases. The rate of **LIBOR**. **London Interbank Offered Rate.** They take **LIBOR** and do **MIBOR**. **Mumbai.** They take out the rates of the banks. They take out the benchmarks. They take out **MIBOR**. There is a private… There is a bank of their own and there is also an **IBA**. There is a standardised private market.”
> **libor** p≈0.29–0.95. **iBOR** p≈0.40 → **MIBOR** (they say **Mumbai** p≈0.07 but the word is there). **ABI** p≈0.64 → **IBA** (Indian Banks’ Association), which they later call a **consortium of private banks** in `05`. **Institute of… Of rate** is them fishing for **Interbank Offered Rate**.

**05:38.520–05:58.240** Speaker A:
> Raw ASR: “They don't judge it. What is the customer's risk? It is the cost of sleep. It is the cost of sleep. It is the cost of sleep. I don't even know this.”
> Corrected: “They don't [publish / change] it. What is the **customer's risk**? It is the cost of **spread** [raw **sleep**]. It is the cost of sleep. It is the cost of sleep. **I don't even know this.**”
> **judge** p≈0.84 — keep raw; may be “publish.” **customer's risk** p≈0.76/0.58. **sleep** p≈0.23 then **0.96** then **0.997** — they may be punning **spread** (the markup over repo/MCLR, which **is** the customer’s rate risk) as **sleep**. Do not invent a sleep-tracker UI. The ask that is safe: **show the customer’s risk**; they **cannot find it** (“I don't even know this”).

Quiet until **06:18** “Where is it?” (`05`, after opening the ° note).

## First-principles problem
- What must be true: **benchmark switch** means changing **which reference** the loan follows (repo vs MCLR vs others). The customer’s money-risk is the **spread** on top of that reference — and that risk has to be **findable**.
- Root vs symptom: “Not published by bank” and a long MCLR→RLLR footnote are symptoms. The root in this span is: the page never answers **what is the customer’s risk?** / **where is it?**
- Constraints: shifting benchmark is an **option**, “generally people don’t.” Do not nag everyone to switch. Repo is “ultimate”; fixed is “risky”; MCLR is bank-set.

## Directions they considered
- Name **MCLR** in full, and **who decides** (the bank’s marginal cost).
- Name **repo** as a benchmark beside MCLR.
- Include **LIBOR** / **MIBOR** (Mumbai interbank) and a **private / IBA / own-bank** book — later compressed in `05` to three/four ways.
- Show **customer risk** (spread / “cost of sleep”); they currently **don’t know where it is**.
- Lean: glossary + missing risk, not a request to fill every “Not published” cell in this clip.

## Company / user / future thinking
- User: hears MCLR and repo in the branch and cannot map them to this column of ₹0 / ₹5,000 / “not published.”
- Company: independent comparison should make the **reference + spread** visible, not only the **fee to change** the reference.
- Future: `05` is how to **say** this in 3–4 ways (RBI / consortium / own). `06` is the voice (lawyer, not legal words). Do not dump BPLR/SBAR/EBLR as the answer to “where is the risk?”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `RATE_CHANGE_BENCHMARK_MEANING_NOTE` (Base Rate / MCLR / BPLR / SBAR → RLLR / EBLR / EBR) — missing **MIBOR**, **LIBOR**, **spread**, **who sets MCLR**. Benchmark column renderer; Overview already has `benchmarkType` / `benchmarkRatePct` on the offer (pairs “Benchmark” / “Repo rate” vs “MCLR”) — Other charges does not surface that stack here. Select **Benchmark switch**.
- Acceptance criteria in their words: “Benchmarks… MCLR… repo-rate benchmark… You can shift the benchmark… there is an option.” “Who decides this?” “LIBOR… MIBOR… Mumbai.” “What is the customer's risk?” “I don't even know this.”
- What NOT to do: do not equate this with Floating → Fixed (`02`) or CIBIL-walk-in (`03`). do not treat “cost of sleep” as a wellness feature. do not hide repo because Filters already say Floating. do not require every bank to publish a switch fee in this issue.
- Open questions: whether MIBOR/LIBOR belong on a home-loan page (they named them; most Indian home loans are repo/MCLR/EBR). Whether “repo is the ultimate” is a recommendation to prefer repo-linked offers (they say so; `05` will say RBI is most preferred).
- Related recordings:
  - continues_from: `03`
  - continues_in: `05` (3–4 ways; “this needs to be a lot simpler”)
  - related: `wb-rec-260816-0031` (MCLR / how the rate is decided — later clip)

## Evidence index
- `audio.vtt` 04:03.940–05:58.240
- `audio.json`: MCLR, vapor/repo, libor, iBOR, ABI, sleep
- `events.json`: fill benchmark t=244644; next interaction is ° note t=373478
- `screenshots/0040.png`–`0053.png` (Benchmark switch table); `0056.png` (later note lists MCLR/BPLR/RLLR, not MIBOR/LIBOR/spread)
- `src/home-loan-compare.js` `RATE_CHANGE_BENCHMARK_MEANING_NOTE`, `RATE_CHANGE_METHOD_BENCHMARK`
