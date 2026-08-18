# Sequencing should be done — names and labels on every calculation

They stop pointing at amounts and state the writing rule for the whole drawer. **Sequencing should be done.** They must **follow all these calculations.** They need **names and labels.** It should be **very easy.** One calculation is okay; they still need to **think about how to do it.** Then they go quiet, close the drawer, and open EMI (`08`).

## Classification
- kind: issue | information architecture / copy
- status: open
- surface: entire Loan amount six-step stack (`#hlc-drawer-body`), not one box. They have just named 80%, 10%, FOIR, 68 vs 48.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2355`
- recording id: `2136e699-2334-4e39-a724-eb3e92e1d3bd`
- clip: 26 of 30
- started_at: 2026-08-15T18:25:24.871Z
- ended_at: 2026-08-15T18:34:41.661Z
- duration_ms: 556790 (~9 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 200
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2341` wanted color + left/right sequence; this clip wants **names** on that sequence
- next: `wb-rec-260816-0004`

## Where on the page
- Still Loan amount (`0019.jpg`–`0021.jpg`). No click during 01:59–02:14.
- **02:15.652** click `#hlc-drawer-backdrop` (`0022.jpg`) — drawer closes after this speech.
- **02:19.904** opens EMI (`0023.jpg`) — next issue (`08`), after ~32 s of silence from 02:14.670.
- Recorded step titles already exist (Property limit, Income allowance, …). Their complaint is that the **customer still cannot follow** without clearer names/order — not that titles are missing entirely.

## What they said (faithful, complete)

**01:59.250–02:04.070** Speaker A:
> Raw ASR: “Sequencing should be done. I need to follow all these calculations. I need their names and labels.”
> Corrected: same. **Sequencing** p≈0.73; **names** p≈0.87; **labels** p≈0.82. **their** p≈0.10 — the calculations’ names, not a third party’s.

**02:05.830–02:14.670** Speaker A:
> Raw ASR: “I need to follow all these calculations. It should be very easy. It's okay if there is only one calculation. But I need to think about how to do it.”
> Corrected: same. Repeat of **follow all these calculations**. **very easy.** **only one calculation** is allowed — they are not demanding six for its own sake. **how to do it** = the method must still be thinkable / visible.

They do not name pixels, colors, or EMI in this span.

## First-principles problem
- What must be true: every amount in the drawer has a **name**, a **place in order**, and a way to **follow** it. Easy beats clever.
- Root vs symptom: extra boxes (`02`) and mystery percents (`03`) are symptoms. The root they now state is **sequence + names + labels**.
- Constraints: collapsing to one calculation is acceptable **if** that one is still followable. Do not add unlabeled steps.

## Directions they considered
- Sequence the existing math; put **names and labels** on it; keep it **easy**; allow **one** calculation.
- Lean: editorial / IA rule for this drawer (and later EMI). Not a request to delete FOIR or LTV.
- They do **not** pick the final label set in this span — `03`–`06` already supplied candidate words (80%, FOIR, credit-card load, lower of these).

## Company / user / future thinking
- User: will not reverse-engineer 80% vs 55% vs 10% vs 7.25%. Sequence and names are how they check a bank.
- Company: comparison without labels is a spreadsheet dump. Easy + named is the product.
- Future: EMI drawer (`08`–`10`) gets the same rule. Charges footnotes (`12`–`13`) are a different marking system.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: step titles + any missing “why this step” lines in `loanAmountCalculationHtml`; later `emiCalculationHtml` should obey the same rule.
- Acceptance criteria in their words: “Sequencing should be done.” “I need their names and labels.” “It should be very easy.” “It's okay if there is only one calculation.”
- What NOT to do: do not add a seventh unlabeled box. Do not “simplify” by removing LTV or FOIR. Do not treat this as Charges-tab sequencing (`12`).
- Open questions: whether “one calculation” means hide 1–5 behind a single “how we got 48L,” or keep 1–5 with better names.
- Related recordings:
  - continues_from: `01`–`06` in this folder
  - continues_in: `08` (EMI sequence: annual → monthly → formula)

## Evidence index
- `audio.vtt` 01:59.250–02:14.670
- `audio.json`: Sequencing; names; labels; easy; only one calculation
- `events.json`: backdrop close t=135652 (after this talk)
- `screenshots/0019.jpg`–`0022.jpg`
- `RECAP.md` 01:58–02:15
