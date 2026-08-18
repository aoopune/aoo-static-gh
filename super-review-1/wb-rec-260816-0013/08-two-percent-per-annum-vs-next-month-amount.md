# 2% per annum is not next month’s bill — they have not used the money for a year

They scroll to **IDBI 2.00% p.a.** and challenge the unit. **How did you get 2%? You have written the annum. But I put a total amount in the next month. I have not used the money for an annum.** The published year-rate is not the overdue they asked to **make** in `07`.

## Classification
- kind: issue | unit / calc
- status: open
- surface: explore-banks / **Other charges** / **Overdue charge ‡** cell for **IDBI Bank · Plain Vanilla Home Loan · 2.00% p.a.** (`tbody#hlc-compare-body tr:nth-of-type(15) td:nth-of-type(4)`) / same % p.a. pattern on TMB, UCO, Union, RBL, Indian Bank, IOB (visible in `0070.png` / `0080.png`)
- viewport: 1366x768 @2x
- speakers: Speaker A. **No, bro** may be B cutting in. ASR not diarized.

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
- previous: `07` (show how an overdue is made; TMB 2.00% and SBI 2.40% clicks)
- next: `wb-rec-260816-0029` starts 2026-08-15T18:59:02.434Z (~6 min gap) — for **every** overdue type, a **drawer** and a **calculation**; extra rupees **for a month** if **one EMI is missed**

## Where on the page
- Scrolls **09:04–09:10**. **09:13.442** click row **15** overdue span. `0080.png` / `0081.png`: **IDBI** row selected, overdue **2.00% p.a.**, rate-change **₹5,000***, bounce **₹300**. Neighbours: ICICI **5.00% p.a.**, HDFC/Federal **18.00% p.a.**, IDFC **12.00% p.a. or ₹300**, Indian Bank / IOB **2.00% p.a.**, IndusInd **24.00% p.a.**
- Still **no drawer**. Header still **Benchmark switch** (unrelated to this ask). **1 selected**.
- They already clicked **2.00% p.a.** on Tamilnad Mercantile at 08:09 (`07`). The new move is not “another 2% bank” — it is **annum vs next month**.

## What they said (faithful, complete)

**09:09.300–09:13.920** Speaker A then maybe B:
> Raw ASR: “You should not. No, bro.”
> Corrected: A starts “You should not…” (unfinished). **No, bro** (p≈0.52 / 0.13) — interruption or self-stop, then the 2% challenge. Do not treat “bro” as a UI word.

**09:14.080–09:23.500** Speaker A (IDBI 2.00% p.a. under the cursor):
> Raw ASR: “How did you get 2%? You have written the annum. But I put a total amount in the next month. I have not used the money for an annum.”
> Corrected: same.
> **2%** p≈0.25/0.81. **annum** p≈0.52 then **0.99**. **next month** p≈0.71/0.97. **I have not used the money for an annum** — the overdue they imagine is **one month late**, not a year of 2%.
> This is the unit that `07`’s “no monthly value” / “put data on top” was pointing at.

Clip ends. Next recording restates: extra money **for a month** if **one EMI is missed**.

## First-principles problem
- What must be true: a **% per annum** overdue rule has to become **rupees for the period they actually missed** (they said **next month** / not a year).
- Root vs symptom: “2.00% p.a.” as cell text is the symptom. The root is **year as the displayed unit** for an event that is a **missed EMI month**.
- Constraints: keep the bank’s published 2% p.a. (they ask **how did you get** it, not to hide it). Convert it. Do not show only the year-rate and call that the calculation from `07`.

## Directions they considered
- Explain **how 2% was got**.
- Stop writing **annum** as if they borrowed the penalty money for a year.
- Output they name: a **total amount in the next month**.
- Lean: this is the unit for `07`’s calc, not a different feature. 0029 will demand that calc **in a drawer, every type**.

## Company / user / future thinking
- User: misses **one** EMI. A year-rate makes 2% look small next to 24% until you do the month. They said they have **not used the money for an annum**.
- Company: independent comparison has to make 2% and 24% comparable as **next month’s extra**, or the table lies by unit.
- Future: `wb-rec-260816-0029` `01`–`04` (drawer, reject if one miss costs double, J&K vs IndusInd labels, bounce in the total). Do not wait for 0029 to fix the **annum** label if the calc still prints % p.a. only.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: overdue display formatter (`% p.a.` suffix), `openChargeSlabs` / future overdue math-sheet (same pattern as government 1-2-3-4: published % → period → rupees). IDBI is the clicked example; TMB/UCO/Union/Indian Bank share **2.00% p.a.** Apply the unit to **all** % p.a. cells, not IDBI only. Grace / “or ₹X whichever is higher” (IDFC, IndusInd, J&K) still need the same month conversion (`0029` “every type”).
- Acceptance criteria in their words: “How did you get 2%?” “You have written the annum.” “I put a total amount in the next month.” “I have not used the money for an annum.”
- What NOT to do: do not delete 2% or relabel it 2% per month without doing the maths. do not show only EMI bounce as the “next month amount.” do not treat SBI 2.40% as a separate issue. do not use IDBI’s ₹5,000 rate-change fee as the overdue total.
- Open questions: compounding (simple 2%/12 vs bank’s actual overdue day-count). Whether GST applies on the penalty. Whether “next month” means calendar month or 30 days after the miss.
- Related recordings:
  - continues_from: `07` (calculation / how an overdue is made)
  - continues_in: `wb-rec-260816-0029` `01` (drawer + month extra if one EMI missed)

## Evidence index
- `audio.vtt` 09:09.300–09:23.500
- `audio.json`: annum, next month, 2%
- `events.json`: tr:nth-of-type(15) t=553442
- `screenshots/0080.png`–`0081.png` (IDBI **2.00% p.a.** selected)
- `replay.spec.ts`: `tr:nth-of-type(15) > td:nth-of-type(4) > span > span`
- Next bundle `wb-rec-260816-0029` `audio.txt` 00:07–00:26 (month extra / one EMI missed)
