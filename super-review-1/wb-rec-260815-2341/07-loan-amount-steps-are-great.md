# Loan-amount steps 1–5 are great — follow them in order

They leave the cue talk and stay inside Bank of Maharashtra’s **Loan amount** drawer. The numbered steps (property 48 lakh, income allowance 55,000, credit-card load they didn’t take, EMI room) are “definitely good.” You just have to follow 1, 2, 3, 4, 5. This information is great.

## Classification
- kind: praise
- status: resolved | not-a-bug (the step list itself; credit-card what-if is `08`; tenure wording is `09`; which-limit color is `10`)
- surface: Explore banks / `#hlc-drawer` title **Loan amount** / subtitle “Bank of Maharashtra · Maha Super Housing Loan” opened from `getByRole("button", { name: "Show how loan amount for Bank of Maharashtra was calculated" })` (cell text **₹48,00,000**). Six steps on screen in this recording.
- viewport: 1366x768 @2x
- speakers: Speaker A praises and walks the numbers. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2341`
- recording id: `a22402c8-4a16-4e52-8736-ec1980e3cab1`
- clip: 25 of 30
- started_at: 2026-08-15T18:11:25.578Z
- ended_at: 2026-08-15T18:20:59.868Z
- duration_ms: 574290 (~9 min 34 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 84 (JPEG)
- event count: 128
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `06` (More label). They reopen the calc for real work (not just the cue demo in `04`–`05`).
- next: `08` (credit-card 10 lakh what-if). `wb-rec-260815-2355` `01` continues “Step 1. Step 2. Carry ₹55,000.”

## Where on the page
- **06:08.223** loan amount — close **06:11.587** (false start; `0058.jpg`–`0059.jpg`)
- **06:16.787** loan amount stays open through the end of the clip (`0060.jpg`–`0083.jpg`)
- **06:32.504** click inside step 4 (`div:nth-of-type(4)` …) — **Monthly EMI available** ₹54,445 (`0062.jpg`)
- Scroll **06:35.499** y=501.5 then **06:39.600** y=175 — they scroll the **page** under the drawer so inputs show: monthly income **₹1,00,000**, property **₹60,00,000**, age 35, CIBIL 780, Salaried (`0063.jpg`)
- Gap **06:05–06:27** (~22 s): reopen / false start; first “What is this?” at 06:27.
- Gap **06:43–07:02** (~19 s): sitting on the open calc; no VTT until “It is good.”
- Steps visible in `0038.jpg` / `0047.jpg` / `0060.jpg` / `0063.jpg` (this recording’s UI, numbered 1–6):
  1. **Property limit** — ₹60,00,000 × 80.00% = **₹48,00,000**
  2. **Income allowance** — ₹1,00,000 × 55.00% = **₹55,000**
  3. **Credit-card load** — ₹0 × 10.00% = **₹0** (form: “About 10% counts as monthly load”)
  4. **Monthly EMI available** — ₹55,000 − ₹555 − ₹0 = **₹54,445**
  5. **Income limit** — ₹54,445 / month at 7.25% for **240 months** = **₹68,88,494** (“Standard EMI formula”)
  6. **Lowest of these limits** — ₹48,00,000 vs ₹68,88,494 → **₹48,00,000**
- Footer: “Loan amount shown **₹48,00,000**” / indicative; lender decides final eligibility.
- Layout in this recording: steps 1–4 in a two-column grid, then 5–6 full width. **No** left/right color tracks (`10`).

## What they said (faithful, complete)

**06:27.560–06:43.510** Speaker A (calc open; pointing at steps):
> Raw ASR: “What is this? What is this? This is the thing. This is the thing. What is this?”
> Corrected: same — identifying the step list as **the thing** they wanted when they said “more calculations” (`04`).

**07:02.230–07:12.090** Speaker A:
> Raw ASR / corrected: “It is good. It is definitely good. You just have to follow 1, 2, 3, 4, 5.”
> They number the story. Step 6 (lowest of the limits) is the compare; 1–5 are the followable chain. **definitely** p≈0.05 — still matches “it is good” plus the 1–2–3–4–5 instruction.

**07:18.720–07:35.380** Speaker A:
> Raw ASR: “What is this? You took 48 lakhs. You took 55,000. What is this? You didn't take it. This information is great.”
> Corrected: “What is this? You took **48 lakhs** [property limit / shown loan]. You took **55,000** [income allowance]. What is this? You didn't take it [credit-card load is **₹0** — nothing to take]. This information is great.”
> Matches steps 1, 2, 3 on screen. **great** p≈0.01 — they have been walking the numbers as praise; keep it. Credit-card **what-if** (10 lakhs) is the next file (`08`), not a restyle request.

Do not treat this praise as a request to restyle the steps. Tenure (`09`) and color (`10`) are adjacent issues.

## First-principles problem
- What must be true: the shown loan (₹48L) is explained as a chain the user can follow: house cap, income cap, cards, leftover EMI, then the lower of the caps.
- Root vs symptom: not a problem. Adjacent issues are the card what-if (`08`), **240 months** vs 20 years (`09`), and **which** of the two limits is painted (`10`).
- Constraints: keep the ordered steps. Do not hide credit-card load when it is ₹0 — they used “you didn't take it” as a teaching beat.

## Directions they considered
- Keep 1–2–3–4–5. Lean: complete praise for the **existence and order** of the calc.
- Identifying “this is the thing” after the cue fight (`03`–`06`).

## Company / user / future thinking
- User: can see **why** BoM shows ₹48L (house 80% of ₹60L beats a much higher income limit).
- Company: this is the honesty layer behind the table number — same job as naming the scheme in `01`.
- Future: `wb-rec-260815-2355` starts “We need to arrange the viewers. Step 1. Step 2…” and then credit-card load in detail. Do not flatten these steps before that clip.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: loan-amount drawer HTML from `loanAmountCalculationHtml` / show-how-loan-amount in `src/home-loan-compare.js`; `#hlc-drawer` in `pages/explore-banks.html`. This recording shows a **six-step list**, not the later two-track “story” layout in current CSS (`.hlc-story-track--house` / `--income`).
- Acceptance in their words: “this is the thing”; “definitely good”; “follow 1, 2, 3, 4, 5”; “this information is great.”
- What NOT to do: do not “fix” this praise by removing steps, hiding ₹0 card load, or merging it into More details (`04` kept those destinations separate).
- Open questions: none on keeping the chain. Card what-if = `08`. Tenure label = `09`. Color / min-of-two = `10`.
- Related recordings:
  - continues_from: `04`–`05` (they clicked ₹48,00,000 to get calculations)
  - continues_in: `08` / `09` / `10`; `wb-rec-260815-2355` `01`

## Evidence index
- `audio.vtt` 06:27.560–07:35.380
- `events.json`: loan amount t=368223, 376787; step-4 click t=392504; scrolls t=395499, 399600
- `screenshots/0038.jpg`, `0047.jpg`, `0060.jpg`–`0067.jpg`
- `replay.spec.ts` loan-amount button + inner `div:nth-of-type(4)` click
- Form values in `0063.jpg`: income ₹1,00,000, property ₹60,00,000, EMI ₹555, cards ₹0, FOIR 55%
