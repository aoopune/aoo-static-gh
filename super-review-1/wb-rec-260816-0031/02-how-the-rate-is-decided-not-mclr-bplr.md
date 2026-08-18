# How the rate is decided — not MCLR and BPLR; five or six benchmarks, customer chooses

The friendly-lawyer voice (`01`) gets a concrete rewrite. **MCLR, BPLR** are “these things.” Instead they want **how the rate is decided**. Usually **5 or 6** references (ASR **agencies** whose **HR** is taken → **repo**). They do not want the site to pick a winner among those names. They want to **choose what to take**.

## Classification
- kind: issue | copy / rate story
- status: open
- surface: Other charges **Notes** → Rate change charge **Benchmark switch** (°). Expanded note lists **Base Rate, MCLR, BPLR, SBAR** and **RLLR, EBLR, EBR**. Later they open Yes Bank **More details** → **How the rate is built** (already Repo + markup).
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized.

## Session metadata
- folder: `wb-rec-260816-0031`
- recording id: `abd34f08-4d04-49d6-a699-6c354e5780bd`
- clip: **30 of 30** (last clip of the 15 Aug 2026 review)
- started_at: 2026-08-15T19:01:37.835Z
- ended_at: 2026-08-15T19:08:12.983Z
- duration_ms: 395148 (~6 min 35 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 56 (PNG + JPEG)
- event count: 130
- console: empty (`console.json` is `[]`)
- tabs: 1
- pages.json: 1 page (`p1`)
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260816-0029` (~9 s earlier)
- next: none

## Where on the page
- **00:22–00:45** they are still in expanded Rate change Notes (`0005.png` / `0006.png`): “Benchmark switch means changing the reference rate…” **MCLR**, **BPLR**, Base Rate, SBAR → RLLR / EBLR / EBR.
- Column subtitle already says **Benchmark switch**. Yes Bank cell **₹0**; Union Bank **Fixed amount by loan amount range**.
- **02:06.905** click **More about Yes Bank** (`tr:nth-of-type(33)`). Drawer **Scheme**: Bank Yes Bank, Scheme name Home Loan, Purpose **Regular**, Rate type **Floating**, Borrower category **Any** (`0018.png`).
- **02:10.243** `div#hlc-drawer-body > details:nth-of-type(3)` = **How the rate is built** (`0019.png`–`0022.png`): Benchmark **Repo rate**, Repo **5.25%**, Markup **3.60%**, Interest rate **8.85%**, Rate set by **CIBIL score**. They did **not** say “CIBIL” in this clip; it is on-screen in that drawer.
- `01:25.066` they collapse the rate-change note (`0013.png`) before the Yes Bank open.

## What they said (faithful, complete)

**00:22.160–00:33.420** Speaker A:
> Raw ASR: “For example, look at this. MCLR, BPLR, these are the things. So here instead what I want is how the rate is decided.”
> Corrected: same. **MCLR** p≈0.66, **BPLR** p≈0.94. **Look at this** = the Rate change note (`0005.png` / `0006.png`). Replace the acronyms with **how the rate is decided**.

**00:33.820–00:45.720** Speaker A:
> Raw ASR: “Usually there are 5 or 6 agencies whose HR is taken. And then I don't want any advantage or disadvantage from all these agencies. I want to choose what I should take.”
> Corrected: “Usually there are **5 or 6** [benchmarks] whose **repo** is taken. … I don't want any advantage or disadvantage from all these. I want to **choose what I should take**.”
> ASR **agencies** p≈0.92 kept as their word; on-screen names are rate systems (MCLR, BPLR, Base Rate, SBAR, RLLR, EBLR, EBR), not a counted list of 5–6. ASR **HR** p≈0.81 → **repo** from this sentence + RBI repo in `03`. Do **not** invent which five. **No advantage or disadvantage** = the site must not steer by hiding some benchmarks.

Advice for **when** to choose (`03`) starts in the next sentence.

## First-principles problem
- What must be true: the customer sees **how the number is built** and can **pick** the reference, not decode MCLR vs BPLR.
- Root vs symptom: spelling out “Marginal Cost of Funds based Lending Rate” is still legal language (`01`). The root is the **job** of the note: decide the rate, then choose.
- Constraints: Yes Bank drawer already titles the section **How the rate is built** and shows Repo + markup. Notes still lead with MCLR/BPLR. Fix the **Notes**, do not assume the drawer closed this.

## Directions they considered
- Label the story **how the rate is decided** (drawer already: **How the rate is built**).
- Admit **5 or 6** references exist; **repo** is the one they name.
- **Customer chooses** — site must not bake in advantage/disadvantage among those names.
- Lean: rewrite the Benchmark switch note. Not a new column.

## Company / user / future thinking
- User: “MCLR, BPLR” is a wall. “Repo + markup = this rate” is a decision.
- Company: listing every historic benchmark without a choose-path is how comparison becomes a glossary.
- Future: `03` is the advice that sits on this choose-path (low stress → RBI repo; fixed vs floating).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `RATE_CHANGE_BENCHMARK_MEANING_NOTE` in `src/home-loan-compare.js` (~278–279); drawer `drawerSection("How the rate is built", buildRateDerivationPairs…)`. `buildRateDerivationPairs` already labels MCLR vs **Repo rate**.
- Acceptance in their words: “instead what I want is how the rate is decided”; “5 or 6 … whose repo is taken”; “I want to choose what I should take”; no advantage/disadvantage from the list.
- What NOT to do: do not only expand MCLR/BPLR to full legal names (that is still `01`). Do not hide repo. Do not invent a fifth/sixth agency name. Do not treat on-screen **CIBIL score** as something they said.
- Open questions: are “5 or 6 agencies” the note’s named benchmarks, external-benchmark publishers, or something else? Exact choose UI (filter vs copy).
- Related recordings:
  - continues_from: `01` (friendly lawyer; this is the example); `wb-rec-260816-0013` `04`/`05` (benchmarks / ways banks calculate rates)
  - continues_in: `03` (when to choose repo vs fixed vs floating)

## Evidence index
- `audio.vtt` 00:22.160–00:45.720
- `audio.json` words: MCLR p≈0.66; BPLR p≈0.94; agencies p≈0.92; HR p≈0.81
- `events.json`: note chevrons as in `01`; Yes Bank More t=126905; drawer details:nth-of-type(3) t=130243
- `screenshots/0005.png`, `0006.png`, `0018.png`–`0022.png`
- `replay.spec.ts`: More about Yes Bank; `div#hlc-drawer-body > details:nth-of-type(3)`
- On-screen: MCLR, BPLR in Notes; drawer Repo 5.25% + markup 3.60% = 8.85%
