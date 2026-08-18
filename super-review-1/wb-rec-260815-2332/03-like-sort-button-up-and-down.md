# They like the sort control — up and down

After a quiet look at Punjab National Bank’s More details (opened and closed), they say they have seen a lot, then praise **this button: up and down**. They click the Rate sort, then the Loan amount header. The control they like is the column sort chevrons, not Apply and not More.

## Classification
- kind: praise | keep the sort affordance
- status: resolved | keep as-is (this clip). Later clicks on Loan / Tenure / EMI are them *using* the same control, not a redesign.
- surface: explore-banks table headers `th#hlc-th-effectiveRoiPct` (Rate), `#hlc-th-loanAmount`, `#hlc-th-tenureLabel`, `th#hlc-th-emi` — dual up/down sort SVGs
- viewport: 1366x768 @2x
- speakers: Speaker A. No disagreement. ASR not diarized. Language tag `mr`.

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
- previous: `02` (tabs are the best)
- next: `04` (loan 99.99 vs 7.99 — after they click Loan amount)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- **01:03.812** click PNB row More (`tbody#hlc-compare-body > tr:nth-of-type(1) … svg`) — accessible name **More about Punjab National Bank**. `0008.png`: `#hlc-drawer` **More details**, Scheme open (Housing Loan For Public, Rate type **Fixed**).
- **01:07.129** click Close (`#hlc-drawer-close`). `0009.png`: drawer gone.
- Speech “I definitely like this button / up and down” is **after** Close, on the table headers. Rate already shows an **up** arrow (sorted low→high on the Fixed list).
- **01:18.278** click Rate sort SVG path (`th#hlc-th-effectiveRoiPct … svg > path`) — `0011.png`: list **high→low** (BoM 12.50% first, loan **₹47,92,101**).
- **01:19.261** click Rate header span again.
- **01:21.091** click `#hlc-th-loanAmount` — still talking; the 99.99 / 7.99 line is `04`.
- Screenshots: `0006.png`–`0007.png` before More; `0008.png` drawer; `0009.png`–`0010.png` closed; `0011.png` after Rate reverse sort.

## What they said (faithful, complete)

**01:05.930–01:07.250** Speaker A (as the drawer is closing):
> Raw ASR: “We have seen a lot.”
> Corrected: they **have seen a lot** — likely the More details stack they just opened (Scheme, Eligibility, How the rate is built, Discounts, Charges). Low p on *We/have/seen*. Not a request to add more rows.

**01:17.400–01:19.880** Speaker A:
> Raw ASR: “I definitely like this button.”
> Corrected: “I definitely like this **button**.” *definitely* p≈0.71, *button* p≈0.13. Timed with the Rate header click. **This button** = the sort chevron, not More and not Apply.

**01:20.320–01:21.680** Speaker A:
> Raw ASR / corrected: “Up and down.”
> *Up* p≈0.91, *down* p≈0.79. Exact description of the dual sort arrows on Rate / Loan amount / Tenure / EMI.

They do not ask to hide sort, change icons, or default to a different column here. Default **rate** lowest→highest is `10`.

## First-principles problem
- None as a bug. Sorting must be obvious: one column, two directions.
- Root: they are confirming the header control after using tabs (`02`).
- Constraint: keep up/down on the metric headers.

## Directions they considered
- Keep the up/down sort button. Lean: “definitely like.”
- They immediately *use* it (Rate, then Loan amount). That use feeds `04` / `05`, not a new sort UI.

## Company / user / future thinking
- User: compares 8+ lenders; rate is the first sort they already have. Being able to flip a column is how you hunt an outlier (BoM’s odd loan in `04`).
- Company: independent table, not a locked bank order.
- Future: `10` will say when the page **opens**, rate should be sorted lowest to highest — that is default, not a new widget.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `th#hlc-th-effectiveRoiPct`, `#hlc-th-loanAmount`, `#hlc-th-tenureLabel`, `th#hlc-th-emi` sort buttons in `src/home-loan-compare.js`. No change from this praise.
- Acceptance criteria in their words: “I definitely like this button. Up and down.”
- What NOT to do: do not restyle Apply as the liked button. Do not treat the More (+) as this button. Do not remove sort from Tenure/EMI because they liked Rate first.
- Open questions: none.
- Related recordings:
  - continues_from: `02`
  - continues_in: `04` (loan figures after Loan amount click); `10` (default rate sort)

## Evidence index
- `audio.vtt` 01:05.930–01:21.680
- `events.json` t=63812 More; t=67129 Close; t=78278 / 79261 Rate; t=81091 Loan amount
- `screenshots/0008.png`–`0011.png`
- `replay.spec.ts` same locators
- Site: sort SVGs on Overview headers
