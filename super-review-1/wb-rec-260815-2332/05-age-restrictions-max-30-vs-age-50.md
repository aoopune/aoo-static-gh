# Age restrictions: max 30 vs you are 50 — the loan then collapses

After the odd loan figures, they name the mechanism: **age restrictions**. The max is **30**. If you are **50**, you get a much smaller loan — they count **5,000**, then **15,000**, then **20,000**. On this table every visible tenure is still **20** and Age on the form is the leftover **35**. They are explaining a rule, not reading a new column.

## Classification
- kind: issue | product / eligibility honesty
- status: open
- surface: explore-banks Overview (Tenure **20** for every visible row) + form Age (recorded 35) + later More details Eligibility **Age 18–75** (`0073.png`, not yet open in this span)
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. Language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2332`
- recording id: `244b886f-17a3-4f87-b2bf-d28ddfbcf6ab`
- clip: 24 of 30
- started_at: 2026-08-15T18:02:07.502Z
- ended_at: 2026-08-15T18:11:22.771Z
- duration_ms: 555269 (~9 min 15 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 76
- event count: 158
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `04` (parody loan 99.99 vs 7.99)
- next: `06` (exact rates without a star)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Clicks in this span: **01:36.608** Loan amount sort SVG; **01:38.900** and **01:39.670** Tenure sort SVG (`th#hlc-th-tenureLabel`). Table stays 20 years all around (`0015.png`–`0019.png`).
- Visible rates still include Bank of India **10.65%** (Star Home Loan) — the likely on-screen hook for ASR “fixed rate of Rs.10.”
- They do **not** change Age. Eligibility **18–75** appears only at **08:50** in BoM’s drawer (`0073.png`) — do not file 18–75 as what they saw at 01:46.
- Screenshots: `0014.png`–`0019.png` (t=90189–118173).

## What they said (faithful, complete)

**01:42.000–01:43.960** Speaker A:
> Raw ASR: “They have a fixed rate of Rs.10.”
> Corrected: **fixed** p≈0.68, **.10** p≈0.89, *They* p≈0.01, *rate* p≈0.31. On screen: BOI **10.65%**, or they may mean a **fixed** (same) loan/tenure across rows. Do not invent a 10% product. Follow-up “what is that?” says they are puzzled, not quoting a label.

**01:44.320–01:45.220** Speaker A:
> Raw ASR / corrected: “What is that?”

**01:46.140–01:47.580** Speaker A:
> Raw ASR / corrected: “There are age restrictions.”
> *restrictions* p≈0.85. *age* p≈0.27 — still the best fit: tenure/loan shrinking with age, which is how Indian home loans actually cap.

**01:48.460–01:49.340** Speaker A:
> Raw ASR / corrected: “The max is 30.”
> *30* p≈0.88. **Max tenure 30 years** (common bank cap), not max borrower age 30 (the form age is 35; later drawer says 18–75).

**01:50.000–01:51.220** Speaker A:
> Raw ASR: “But if you are only 50,”
> Corrected: “But if you are **already 50**” (*only* p≈0.25, *50* p≈0.82). A 50-year-old with a 30-year max (or a lower max-age-at-maturity) cannot take 30 years.

**01:51.720–01:53.460** Speaker A:
> Raw ASR: “then you will get a loan of Rs.5,000.”
> Corrected: the loan **drops** — they say **5,000**. Could be ₹5,000 as an absurd remainder, or **5 years** of tenure with ASR `,000`. Keep the spoken 5,000; do not pick a format they did not pick.

**01:54.020–01:55.680** Speaker A:
> Raw ASR / corrected: “Then you will get a loan of Rs.15,000.”
> `,000` p≈0.93.

**01:56.680–01:58.540** Speaker A:
> Raw ASR / corrected: “You will get a loan of Rs.20,000.”
> `.20` p≈0.93, `,000` p≈0.97. They are counting down remaining room (5 / 15 / 20), not reading three cells.

No Speaker B. They do not ask for an Age column on Overview in this span.

## First-principles problem
- What must be true: tenure and loan are not free numbers. Banks cap **max age at payoff** and **max tenure**. A 50-year-old does not get the same 20–30 years as a 35-year-old.
- Root vs symptom: `04` is the weird rupee figure. The root they name is **age restrictions**. The table currently shows the same 20 years / ~₹48 lakh as if age did not bite (inputs are Age 35).
- Constraint: when age *would* bite, the row must change — and the customer should see why, not a mysterious ₹47,92,101.

## Directions they considered
- Explain (and compute) age caps: max **30**, vs age **50**, then a smaller loan (5k / 15k / 20k as they counted).
- They do **not** ask to add “max age 75” on the Overview row here (that string appears later in the drawer).

## Company / user / future thinking
- User: a 50-year-old who sees 20 years and ₹48 lakh will be told no at the branch. Shroffin should not flatter them.
- Company: independent comparison means showing the cap that actually binds.
- Future: 2341 `05` / `06` will talk tenure as years and which limit wins. Do not collapse this clip into that colour-code.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: eligibility / max-age / max-tenure in `src/home-loan-compare.js`; Age field `#hlc-age`; Tenure `#hlc-tenure`; drawer Eligibility pairs (Age 18–75 on BoM). Overview Tenure / Loan amount cells.
- Acceptance criteria in their words: “There are age restrictions. The max is 30. But if you are [already] 50, then you will get a loan of 5,000 / 15,000 / 20,000.”
- What NOT to do: do not show max borrower age 30. Do not treat “Rs.10” as a rate-star issue (`06`). Do not use 18–75 from `0073.png` as if they cited it at 01:46.
- Open questions: whether Overview needs an age-cap hint, or only the loan/tenure numbers should move. Exact bank max-age-at-maturity vs max tenure 30.
- Related recordings:
  - continues_from: `04`
  - continues_in: `06`; 2341 tenure / which limit wins

## Evidence index
- `audio.vtt` 01:42.000–01:58.540
- `events.json` Loan/Tenure sort clicks t=96608 / 98900 / 99670
- `screenshots/0014.png`–`0019.png`; later `0073.png` Age 18–75 (do not mix timestamps)
- Site: Age / Tenure inputs; eligibility age bands in drawer
