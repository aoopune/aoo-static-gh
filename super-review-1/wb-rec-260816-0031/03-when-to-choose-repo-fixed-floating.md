# When to choose: low stress → RBI repo; rates up → fixed; market down → floating long term

After “I want to choose” (`02`), they say **the site should tell you when**. Low stress → **RBI repo**. Economy deteriorating / rates going **up** → **fixed**. They then **correct themselves**: if India is going down, **do not** take fixed — **floating** is better **long term**. This is brainstorming, not one finished rule.

## Classification
- kind: issue | intelligence / choose-advice (brainstorming)
- status: open
- surface: still Other charges Notes, then Yes Bank **More details** (**How the rate is built**, Rate type **Floating**). Filter chip **Rate**: Floating selected; Fixed subtitled **About 1–2% higher** (see `04` for the 0.25 line).
- viewport: 1366x768 @2x
- speakers: Speaker A walks the advice and the correction. Short later “Yes, it is the same” is `05`. ASR not diarized.

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
- **00:46–01:23** idle on expanded Rate change Notes (`0006.png`–`0012.png`), then they collapse that note at **01:25.066** (`0013.png`).
- **01:26–02:08** still on Other charges (`0014.png` / `0015.png`): table + prepayment RBI note. No Rate-filter click. Floating vs Fixed is spoken, not toggled.
- **02:06.905** Yes Bank More — Rate type **Floating**, Benchmark **Repo rate** — while they finish “floating … long term.”
- They do **not** click the Fixed chip this clip.

## What they said (faithful, complete)

**00:46.260–00:52.920** Speaker A:
> Raw ASR: “They should tell me that if you don't have much stress, then you go with RBI report.”
> Corrected: “They should tell me that if you don't have much **stress**, then you go with **RBI repo**.”
> ASR **stress** p≈0.95; **RBI** p≈0.93; **report** p≈0.71 → **repo** (`02` HR→repo). Low-stress default = **RBI repo**.

**00:53.320–01:10.160** Speaker A (first pass, then restated):
> Raw ASR: “If you feel that the market is going down in the future, and the economy is deteriorating, then you take a fixed rate. If you feel that the economy is going down and the interest rate is going to increase, then you take a fixed rate.”
> Corrected: same two tries. First couples **market going down** + **economy deteriorating** → **fixed**. Second restates: **economy going down** and **interest rate going to increase** → **fixed**. Keep both; they are tightening toward **rates up → fixed**.

**01:11.080–01:23.460** Speaker A:
> Raw ASR: “Then you will get the benefit. In the same way, I want to know what is the benefit for me, or when should I choose it as a customer. I don't want to use the legal language. [repeat]”
> Corrected: same. The point of `02`’s choose-path: **benefit for me** / **when should I choose**, not legal names. Repeats `01`. Second “I don't want to use the legal language” is a near-zero-probability ASR echo (legal p≈0.00) — keep as a stutter/repeat, not a new claim.

**01:26.060–01:48.720** — 0.25 premium **written there** is `04`, still inside this speech. Then:
> Raw ASR: “And that is only when the market is going down. Then you are secured with good rates. If you feel that the market is going down in India, then you take a bet.”
> Corrected: raw kept. They are still tying **fixed** to a **market going down** story, then “take a bet.” Do not flatten this into a product rule.

**01:54.180–02:08.260** Speaker A (correction):
> Raw ASR: “When our intelligence would suggest that if India is going down, then you should not take a fixed rate. floating rate is going to be a favorable term in the long term.”
> Corrected: same. **Intelligence** p≈0.62. **Intelligence** should say: India going down → **not** fixed; **floating** better **long term**. This **overrides** the earlier “market down → fixed” try. File as **brainstorming**, not a silent pick of the first version. (“fixed rate” / “floating rate” words in this span are very low-probability; meaning is recovered from the rest of the sentence + on-screen Rate type **Floating**.)

## First-principles problem
- What must be true: after “how the rate is decided” (`02`), the customer gets **when to pick repo vs fixed vs floating** in their situation.
- Root vs symptom: MCLR/BPLR (`02`) hid the decision. The root decision is **stress / rates-up / long-term path**, and they have not finished the market-down rule.
- Constraints: they name **intelligence** as the owner. Do not ship the contradicted first pass as copy.

## Directions they considered
- Low stress → **RBI repo**.
- Rates going **to increase** / economy deteriorating → **fixed** (first pass).
- Market going down in India → first “take a bet” / fixed; then **intelligence: do not take fixed; floating long term**.
- Customer-facing **when should I choose**, not legal language.
- Lean: advice on the existing Rate filter + rate-built drawer. They did not ask for a new tab.

## Company / user / future thinking
- User: otherwise stares at Floating vs Fixed with no “for me.”
- Company: this is the same **intelligence** job as 0029’s EMI-miss labels — an opinion, said plainly.
- Future: `04` is the **price** of that choice (0.25 written there). `05` leaves the drawer and talks scheme names. This advice is **not closed** — they contradicted themselves on market-down.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Rate filter copy (`About 1–2% higher` on Fixed); drawer **How the rate is built**; any future “intelligence” line on choose repo vs fixed vs floating. Do not invent a new page.
- Acceptance in their words: “if you don't have much stress … RBI repo”; “when should I choose it as a customer”; “intelligence would suggest … you should not take a fixed rate”; “floating … favorable … long term.”
- What NOT to do: do not publish the first “market going down → fixed” as the only rule. Do not hide that they reversed it. Do not treat ASR **report** as an RBI publication link.
- Open questions: final market-down rule (they left both versions). Who writes the intelligence sentence vs the filter chip.
- Related recordings:
  - continues_from: `02` (choose among benchmarks)
  - continues_in: `04` (0.25 higher, written there) then `05` (same drawer, bank attributes)

## Evidence index
- `audio.vtt` 00:46.260–02:08.260 (0.25 lines 01:26–01:42 belong in `04`)
- `audio.json` words: stress p≈0.95; RBI p≈0.93; report p≈0.71; intelligence p≈0.62
- `events.json`: idle through Notes; collapse rate-change t=85066; Yes Bank More t=126905
- `screenshots/0006.png`–`0015.png`, `0018.png`–`0019.png`
- On-screen: Rate type **Floating**; Benchmark **Repo rate** 5.25%; Fixed chip **About 1–2% higher** (later `0026.png`)
