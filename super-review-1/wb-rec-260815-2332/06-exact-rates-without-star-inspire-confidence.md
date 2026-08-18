# Exact rates without a star inspire confidence — stand behind the number

They look at **8.7, 8.8** (PNB **8.75%**, Canara **8.80%**) and say the table has taken an **exact** figure **without a star**. That inspires a lot of confidence: this guy knows what he is talking about. Then they talk about putting a **star in charges** — charges are okay if you at least stand behind something. If you do not know, it is a star.

## Classification
- kind: issue | trust / data honesty (praise the exact rates; asterisks belong on what you will not stand behind)
- status: open (keep exact Overview rates; do not star them. Use a star only where they are unsure — they name **charges**.)
- surface: Overview **Rate** cells (8.75%, 8.80%, … no asterisk). Bank of India product **Star Home Loan** is on screen — do not confuse that name with an asterisk.
- viewport: 1366x768 @2x
- speakers: Speaker A. Short “Okay.” may be B. ASR not diarized. Language tag `mr`.

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
- previous: `05` (age)
- next: `07` (Lenders is a good word)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Overview Rate column: **8.75% / 8.80% / 9.15% / 9.35% / 10.65% / 11.00% / 12.40% / 12.50%** — two decimals, **no** `*` on the number (`0018.png`–`0024.png`).
- **02:05.366** click EMI header (`th#hlc-th-emi > span`) — `0020.png`: EMI up-arrow, PNB ₹42,418 still first after they sort back toward low EMI / low rate.
- **02:41.200** click PNB EMI **₹42,418** (`Show how emi for Punjab National Bank was calculated`) — `0025.png`: EMI drawer, formula, 8.75% / 12, result ₹42,418. **02:43.498** click `#hlc-drawer-backdrop` to close.
- Bank of India row still says **Star Home Loan** — possible hook for ASR “8 star,” but the argument is asterisk vs standing behind the figure.
- Screenshots: `0019.png`–`0026.png`.

## What they said (faithful, complete)

**02:07.000–02:10.040** Speaker A:
> Raw ASR: “They have taken an exact amount without a star.”
> Corrected: they have taken an **exact** [rate] **without a star**. *exact* p≈0.98, *star* p≈0.96, *amount* p≈0.02 — **rate**, not loan amount (`04`).

**02:10.960–02:12.520** Speaker A:
> Raw ASR / corrected: “8.7, 8.8.”
> On-screen **8.75%** and **8.80%**.

**02:12.620–02:13.780** Speaker A:
> Raw ASR / corrected: “This inspires a lot of confidence.”
> *confidence* p≈0.99.

**02:14.740–02:16.500** Speaker A:
> Raw ASR / corrected: “This guy knows what he is talking about.”
> *guy* / *knows* / *talking* all ≥0.95. The “guy” is the product (or the person who put exact rates), not a page control.

**02:18.340–02:19.660** Speaker A:
> Raw ASR: “8 star.”
> Corrected: **a star** / **asterisk** (both words p≈0.30). Could glance at **Star Home Loan**. Do not add an 8-star rating widget.

**02:20.640–02:23.080** Speaker A:
> Raw ASR: “So I will put a star. In charges.”
> Corrected: “So I will put a **star in charges**.” *put* p≈0.85, *charges* p≈0.60.

**02:24.420–02:26.440** Speaker A / B:
> Raw ASR / corrected: “Charges are okay.” / “Okay.”

**02:28.260–02:36.240** Speaker A:
> Raw ASR: “At least stand behind something. This is true. I stand behind it. I don't know if this is a star or not.”
> Corrected: **at least stand behind something.** If it is true, stand behind it. If you **don’t know**, it is a **star**.

**02:42.870–02:43.730** Speaker A (as they close the EMI drawer):
> Raw ASR / corrected: “Okay, wait.”

## First-principles problem
- What must be true: a comparison site either **knows the rate** or **admits it does not**. Exact 8.75 / 8.80 without `*` is the first. A star is the second.
- Root vs symptom: customers trust a number that does not wriggle. Starring the rate would undo that. Starring **charges** you will not stand behind is the outlet they name.
- Constraint: keep Overview rates exact. Do not fake precision on fees.

## Directions they considered
- Keep exact rates, no star.
- Put a star **in charges** when they do not know.
- Stand behind what is true.
- Lean: this is a honesty rule, not a decoration.

## Company / user / future thinking
- User: “this guy knows what he is talking about” is the feeling Shroffin wants on rate.
- Company: independent comparison — we publish what we checked (`09` will polish “data last checked”). We do not hide ignorance with a fake exact fee.
- Future: `12` — charges covered; the rest on request. That is the same star/unknown bucket.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Overview Rate renderer (no `*` on 8.75%); Charges / Other charges tabs; drawer “Charges at the start” / footnotes. Do not rename Star Home Loan.
- Acceptance criteria in their words: “exact … without a star.” “8.7, 8.8. This inspires a lot of confidence.” “put a star in charges.” “At least stand behind something.”
- What NOT to do: do not add asterisks to 8.75 / 8.80. Do not add a star-rating. Do not treat BOI’s product name as this ticket. Do not star loan amount (`04`).
- Open questions: star vs “on request” (`12`) vs “not published by bank” (already in Other charges later).
- Related recordings:
  - continues_from: `05`
  - continues_in: `12` (charges covered / on request)

## Evidence index
- `audio.vtt` 02:07.000–02:43.730
- `screenshots/0019.png`–`0026.png` (8.75 / 8.80; EMI drawer)
- `events.json` EMI header t=125366; EMI cell t=161200; backdrop t=163498
- Site: Rate cells; `#hlc-drawer` EMI
