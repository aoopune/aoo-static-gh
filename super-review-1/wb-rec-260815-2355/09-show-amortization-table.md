# Show an amortization table — outstanding, principal, interest

On the same EMI drawer they ask to see the loan **run**. After every period the **outstanding amount** should be **here**. They name a **commodization** (amortization) **table**. They need **principal** and then **interest**. The formula in Step 2 is a single ₹37,938 — it does not show the split or the balance falling.

## Classification
- kind: issue | missing view / EMI literacy
- status: open
- surface: EMI drawer (`0023.jpg`–`0044.jpg`). Step 2 is the closed-form EMI only. No amortization grid in the recording.
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
- previous: `wb-rec-260815-2341` showed 240 months as tenure — this clip wants those months **as a table**
- next: `wb-rec-260816-0004`

## Where on the page
- EMI drawer still open from **02:19.904**. Visible: monthly rate line + one EMI formula + **EMI shown ₹37,938**.
- No click in 03:07–03:38. They are reading Step 2, not opening a second panel.
- Period on screen is **monthly** (÷12, ^240). ASR **week** is the spoken period word — see below.

## What they said (faithful, complete)

**03:07.740–03:16.320** Speaker A:
> Raw ASR: “I need to know that after every week. After every week. The outstanding amount is here.”
> Corrected: they need **outstanding** shown **after every period**. First **week.** p≈0.55; the repeat **After every week** is near-silence (p≈0.003/0.045/0.009) — do not treat the echo as a second demand. EMI on this page is **monthly**, not weekly. Do not ship a weekly table unless they later insist; do not overwrite the word they did say. Point stands: **outstanding belongs on screen**.

**03:24.960–03:29.380** Speaker A:
> Raw ASR: “Commodization table. Is it running?”
> Corrected: **Amortization table.** **Commodization** p≈0.69 — mishear of amortization. **Is it running?** p≈0.04 — maybe “is it rounding?” or “does it run [period by period]?” Keep as a weak ASR; the table request is the solid ask.

**03:30.440–03:38.800** Speaker A:
> Raw ASR: “That's why I need to know that you have done principal PP. And then interest.”
> Corrected: they need **principal** and **interest** as separate done amounts (amortization columns). **PP.** p≈0.62 — likely **P** (principal) said twice, or “principal, P.” Do not invent a PP product code.

Then they fall back to “I don't know” and the ÷12 / 0.06 questions in `08`.

## First-principles problem
- What must be true: a monthly EMI is **principal + interest**, and the **balance** changes every period. A single ₹37,938 does not show that.
- Root vs symptom: asking “what is 0.06” (`08`) is still formula literacy. This issue is the **missing schedule**.
- Constraints: same loan ₹48L, 7.25%, 240 months. Don’t replace the formula; **add** the table they named.

## Directions they considered
- After each period, show **outstanding here**; an **amortization table**; columns **principal** then **interest**.
- Lean: a real table, not another closed-form line. Period = monthly on this page despite ASR “week.”
- They do **not** specify 240 rows vs yearly summary vs first/last EMI.

## Company / user / future thinking
- User: “nobody knows how EMI is calculated” (`10`) includes not knowing that early EMIs are mostly interest.
- Company: empowering (`10`) means showing the split banks already have in a repayment schedule.
- Future: keep this off the Charges tab (`12`). It belongs on EMI / loan-amount honesty.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `emiCalculationHtml` / EMI drawer body. No amortization markup in this recording.
- Acceptance criteria in their words: “after every week… the outstanding amount is here.” “Amortization table.” “principal… and then interest.”
- What NOT to do: do not build a weekly amortizer from the weak “week” echo. Do not hide the existing formula. Do not treat “PP” as a new fee.
- Open questions: how many rows; year vs month; whether outstanding sits inside Step 2 or a third step.
- Related recordings:
  - continues_from: `08`
  - continues_in: `10` (why showing this is the product)

## Evidence index
- `audio.vtt` 03:07.740–03:38.800
- `audio.json`: week p≈0.55 then ~0.01; outstanding p≈0.65; Commodization p≈0.69; principal; PP; interest
- `screenshots/0023.jpg`–`0035.jpg` — formula only, no table
- No click in this span
- EMI formula uses ^240 = 240 monthly periods
