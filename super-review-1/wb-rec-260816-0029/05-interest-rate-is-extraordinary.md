# “Interest rate is extraordinary” — overdue charged at the home-loan rate

After the J&K / IndusInd labels they **dump-scroll to the foot** of Other charges. Yes Bank’s overdue cell is **“At home loan interest rate”** (not a % p.a.). They say **“Interest rate is extraordinary.”** The old four-file cut dismissed this line. Capture it: this is another **overdue type** (`01` “every type”) that has no percent to multiply, so the month’s rupees are even more hidden.

## Classification
- kind: issue | overdue type / missing rupee story
- status: open
- surface: explore-banks / **Other charges** · **Yes Bank (Home Loan)** overdue **At home loan interest rate**, bounce **₹750**. Same table foot: RBL **2.00% p.a.**, South Indian Bank **6.00% p.a.**, SBI **2.40% p.a.**, Union Bank rate-change **Fixed amount by loan amount range >**, **Notes** + **Collapse all**, then **Prepayment charge**. Code: `special_rule === "as_per_roi"` → that main string (`src/home-loan-compare.js` ~2909).
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. No Speaker B. They do **not** say “Yes Bank.”

## Session metadata
- folder: `wb-rec-260816-0029`
- recording id: `1ce6b2c1-5803-4478-9e29-c1f823caae0f`
- clip: 29 of 30
- started_at: 2026-08-15T18:59:02.434Z
- ended_at: 2026-08-15T19:01:28.697Z
- duration_ms: 146263 (~2 min 26 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 17
- event count: 58
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: same take `04` (labels; ~10 s silent dump-scroll)
- next: same take `06` (overdue + bounce in the total) ~2 s later

## Where on the page
- **01:35.950–01:45.870**: no ASR. Scrolls y=1958.5 → 2171 → 2323.5 → **3035 → 3207** (t=102798–104432). That is a jump to the **bottom** of the lender list, not a slow read.
- `0012.png` (t=102200, just as they arrive): RBL … **Yes Bank** overdue **At home loan interest rate**, bounce **₹750**; Notes / Collapse all; Prepayment heading below.
- Speech **01:45.870–01:47.530** lands on that frame. They do not click Yes Bank. They immediately pivot to overdue + bounce (`06`) after ~2 s.
- Assignment: the unique overdue wording in this viewport is **At home loan interest rate**. Nearby percents are ordinary (2% / 2.40% / 6%). Do not assign this line to CSB 24% (that row is not in this still).

## What they said (faithful, complete)

**01:45.870–01:47.530** Speaker A:
> Raw ASR: “Interest rate is extraordinary.”
> Corrected: raw kept as the cue; read against the cell **At home loan interest rate**.
> **Interest** p≈0.74, **rate** p≈0.73, **is** p≈0.98, **extraordinary** p≈0.63. They do **not** name a bank. They do **not** spell a formula. Possible readings, in order of fit to the still: (1) overdue billed **at the home-loan interest rate** is extraordinary / unlike the % p.a. column; (2) a looser “this penalty interest is extraordinary.” Prefer (1) because that is the odd cell in `0012.png`. Do **not** invent a Yes Bank marketing rewrite, a new product, or a claim they never made.

No other words in this file. The next sentence is `06`.

## First-principles problem
- What must be true: an overdue rule that is **“at home loan interest rate”** still has to answer `01` — extra rupees for **one missed EMI for one month**. A percent drawer can at least start from 24.00% p.a. This cell has **no percent on the page**.
- Root vs symptom: the string is accurate (`as_per_roi`). The root is the same as 0013’s annum complaint: the visitor cannot turn the rule into **next month’s total** without a calculation.
- Constraints: this is one of the “every type” in `01`. Do not replace the published rule with a fake %. Bounce ₹750 still belongs in the `06` total.

## Directions they considered
- They **flag** the cell (extraordinary). They do not propose copy.
- Lean: include this overdue type in the same drawer/calc family. Not a separate product.

## Company / user / future thinking
- User: “at home loan interest rate” sounds like the EMI rate, not a late fee. Without rupees it can look cheap next to 24.00% p.a. or look like a riddle.
- Company: independent compare has to **show the miss cost** for this type too, or “every type” is a lie.
- Future: `06` is the total (overdue + bounce). 0031 is Notes wording (MCLR / friendly lawyer), not this cell.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `formatChargeDisplay` `as_per_roi` → “At home loan interest rate”; same overdue calc drawer as `01`/`03`, using the row’s **home-loan rate** as the overdue rate for one miss-month. Tests already: `tests/run-unit.js` Yes Bank main === `At home loan interest rate`.
- Acceptance criteria in their words: “Interest rate is extraordinary.” (plus `01`: drawer + calc for **every type** of overdue charge.)
- What NOT to do: do not drop this line as noise. Do not invent Yes Bank-only copy they did not speak. Do not treat “extraordinary” as a request to hide Yes Bank. Do not confuse this with Overview **Rate**.
- Open questions: is overdue-at-ROI higher, lower, or equal to a 2% p.a. bank on one miss-month? They did not calculate it — that is the drawer’s job.
- Related recordings:
  - continues_from: `01` (every overdue type), `wb-rec-260816-0013` (Yes Bank already in the overdue stills there)
  - continues_in: same take `06` (fit overdue + bounce into the calculations)

## Evidence index
- `audio.vtt` 01:45.870–01:47.530
- `audio.json` segment 18
- `events.json`: dump-scroll y=3035–3207 t=102798–104432
- `screenshots/0012.png` (t=102200)
- `src/home-loan-compare.js` ~2909 `as_per_roi`; `tests/run-unit.js` Yes Bank overdue main
- On-screen: Yes Bank overdue **At home loan interest rate** + bounce **₹750**
