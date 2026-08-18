# Canara Housing loan: women get a discount, not a second scheme — vs banks with women-only schemes

After SBI (`07`) they look at **Canara Bank Housing loan** (ASR **Canada Bank**). Here **women are given discounts**. **There are no different schemes.** Someone (or on-page copy) says “this scheme is only for women” — they say **No, no.** **Many banks** do have **different schemes only for women**. Then women are **also** eligible through **normal** schemes **and** through **women** schemes — back to `07`/`09`.

## Classification
- kind: issue | women discount vs women-only scheme
- status: open
- surface: After **Women applicant** + **Regular**: table shows **Canara Bank — Housing loan** and **UCO Bank — UCO Home** (`0044.png`, `0054.jpg`). Filters: Women **checked**, Rate Floating, Bank type All.
- viewport: 1366x768 @2x
- speakers: Speaker A: Canara discount, not a different scheme; many banks have women-only schemes; women still eligible on normal + women. Short **Yes**. ASR **Canada** → **Canara** from the row on screen.

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
- **04:58.155** Regular, Women already on. `0043.jpg`: **No banks matched these inputs** (transient). `0044.png` t=306199: **Canara Bank Housing loan** — Rate change not published; overdue **0%** up to ₹25,000; bounce **₹300** up to ₹999. **UCO Home** beside it.
- Same pair still in `0054.jpg` near the end. `0055.png` crops to UCO + Notes.
- They do **not** open Canara **More**. Drawer code can attach **Women applicant discount** when the filter is on (`buildRateDerivationPairs`); that pair is **not** in this clip’s screenshots.
- Contrast with `07`: SBI = **two schemes**. Canara = **one** Housing loan + **discount**.

## What they said (faithful, complete)

**05:00.170–05:08.970** Speaker A:
> Raw ASR: “In Canada Bank's housing loan, women are given discounts. There are no different schemes. But they have written that this scheme is only for women. No, no.”
> Corrected: “In **Canara** Bank's **housing loan**, women are given **discounts**. There are **no different schemes**. But they have written that this scheme is **only for women**. **No, no.**”
> On-screen scheme string: **Housing loan**. ASR **Canada** p≈0.30 → **Canara**. **No, no** rejects treating Canara as **women-only** / a separate scheme. “They have written” — do not invent which sentence on the page; the visible subtitle is **Housing loan**, not “women only.”

**05:10.090–05:21.790** both:
> Raw ASR: “Many banks have schemes like this that they have different schemes only for women. Yes. At that time, women are also eligible through normal schemes. And they are also eligible through women schemes.”
> Corrected: same. Two bank patterns: (1) Canara-style **discount on the same housing loan**; (2) **separate women-only schemes**. In (2), women remain eligible on **normal** **and** **women** schemes — the SBI shape (`07`).

Then `09`: what should we do when multiple schemes exist (auto-select vs show / select both).

## First-principles problem
- What must be true: **discount on one scheme** ≠ **a second scheme**. UI must not relabel Canara Housing loan as women-only, and must not hide the general offer at banks that **do** split schemes.
- Root vs symptom: checking **Women applicant** is the symptom that mixes both patterns. Root is **data shape**: discount field vs extra offer row.
- Constraints: `05` says hide names when only one applies — Canara is that case. `07`/`09` are the other case.

## Directions they considered
- Canara: **discount**, **no different schemes**.
- Reject copy/data that says the scheme is **only for women**.
- Admit **many banks** have **women-only** schemes; then women still use **normal + women**.
- Lean: two implementations, one filter. Do not collapse them.

## Company / user / future thinking
- User: a woman at Canara should still see **Housing loan**, cheaper — not a mysterious women-only product. At SBI she should see **both** (`07`).
- Company: Women applicant is a **concession** on Canara and a **second offer** elsewhere. One checkbox, two truths.
- Future: `09` is the unresolved “then what do we show?” when pattern (2) hits.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Canara offer row scheme **Housing loan**; `womenDiscountDetail` / Women applicant filter (`src/home-loan-compare.js` ~3503–3504, ~7699). Table in this take still shows one Canara **Housing loan** row with Women on — matches their “no different schemes.”
- Acceptance in their words: “Canara Bank's housing loan, women are given discounts”; “there are no different schemes”; “no, no” to “only for women”; “different schemes only for women” + still eligible on **normal** and **women**.
- What NOT to do: do not rename Canara Housing loan to a women-only scheme when the filter is on. Do not hide general schemes at banks that also have women-only products. Do not leave ASR **Canada Bank** in the product.
- Open questions: who “wrote” only-for-women (bank site vs our subtitle)? Should the discount appear in the rate column when Women is checked (not visible in `0044.png`)?
- Related recordings:
  - continues_from: `07` (SBI two schemes)
  - continues_in: `09` (auto-select best vs show / PMAY both selected)

## Evidence index
- `audio.vtt` 05:00.170–05:21.790
- `audio.json` words: Canada p≈0.30
- `events.json`: Women t=293756; Regular t=298155; idle on Canara/UCO table
- `screenshots/0044.png`, `0054.jpg`
- On-screen: **Canara Bank** **Housing loan**; Women applicant **checked**
