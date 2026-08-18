# Charges are covered; the rest can wait on request

They move from free discounts to **charges**. Other charges: “nice.” They have **covered the charges — not all of them**. The rest are not important — then they take it back: they **are** important (loan document, copy charges). Mostly written in reports; show them **if requested, like on request**.

## Classification
- kind: issue | what to publish vs hold back
- status: open
- surface: More details **Charges at the start** + **Other charges** (Prepayment, cheque return, “Not published by bank,” …) / table tabs **Charges** and **Other charges** (they name the drawer sections more than they switch tabs — Overview stays active in `0067.png`)
- viewport: 1366x768 @2x
- speakers: Speaker A. Repeated “Nice.” may be B. ASR not diarized. Language tag `mr`.

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
- previous: `11` (discounts none / everything free)
- next: `13` (table vs one page for BoM)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Still BoM More details. `0060.png` already listed Charges at the start (CIC, Credit Opinion, Legal and technical, Processing fee, Title search).
- `0067.png` (t=482169, ~08:02): **Other charges** accordion **expanded** — Prepayment charges, Prepayment (takeover), Interest Rate Type Switch Fees, Overdue charges, Cheque Return (four lines), Interest Rate Repricing Fees **Not published by bank**, Interest Rate Benchmark Switch Fees **Not published by bank**. **Fees that may apply later** collapsed. Table tabs still **Overview**.
- No recorded clicks (`events.json` idle). They are expanding drawer rows in the screenshots.
- `06` already said put a **star in charges** if you do not stand behind them — this span is which charges to show.

## What they said (faithful, complete)

**07:44.200–07:55.520** Speaker A:
> Raw ASR: “Let me put charges. Let's see charges. Other charges.”
> Corrected: **put / see charges.** Then **Other charges** (*charges* p≈0.99 on the last).

**07:57.920–08:01.960** Speaker A / B:
> Raw ASR / corrected: “Nice.” ×3.

**08:05.270–08:15.870** Speaker A:
> Raw ASR / corrected: “So, you have covered the charges. Not all of them. The rest are not important. Like, loan document, copy charges, something like that.”
> *covered* p≈0.85. *document* p≈0.57, *copy* p≈0.66, *charges* p≈0.63.

**08:17.190–08:27.690** Speaker A:
> Raw ASR: “They are important. You can read their money. These are mostly written reports. I mean, if requested, like on request.”
> Corrected: **they are important** (walks back “not important”). “You can read their money” (*read* p≈0.72, *money* p≈0.67) — weak; possible “leave that money” / “read them anyway.” **Mostly written [in] reports.** Then the rule they land on: **if requested, like on request** (*on request* p≈0.75 / 0.97).

**08:38.460–08:40.140** “Nice.” / “Nice.”

## First-principles problem
- What must be true: the customer needs the charges that change the decision **now**. Tiny document/copy fees can exist **on request** instead of stuffing the first screen.
- Root vs symptom: they like that charges are **covered**, then worry the long tail is either noise or actually important. The resolution they speak is **on request**.
- Constraint: `06` — if you don’t know, star it / don’t fake an exact rupee. “Not published by bank” on screen is already that honesty.

## Directions they considered
- Keep the charges they have covered.
- Not all of them on the main list.
- Loan document / copy charges: important but **on request**.
- Lean: publish the decision-moving fees; hold the rest behind request (or reports).

## Company / user / future thinking
- User: should not drown in cheque-return tariffs before they pick a lender. They should also not be surprised by copy charges at the branch — hence on request, not deleted.
- Company: independent comparison — cover what we have; don’t invent the rest (`06` stand behind).
- Future: `13` wants the same bank’s facts on one page — on-request is how that page stays short.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: drawer **Charges at the start** / **Other charges** / **Fees that may apply later**; table tabs Charges / Other charges; “Not published by bank” empty state.
- Acceptance criteria in their words: “You have covered the charges. Not all of them.” “Loan document, copy charges.” “If requested, like on request.”
- What NOT to do: do not delete Other charges. Do not dump every cheque-return line on Overview. Do not treat “Nice” as a request to restyle. Do not use “read their money” as copy.
- Open questions: which exact lines are “covered” vs “on request.” Whether table tab **Other charges** should match the drawer accordion.
- Related recordings:
  - continues_from: `06` (star in charges); `11` (free discounts)
  - continues_in: `13`

## Evidence index
- `audio.vtt` 07:44.200–08:40.140
- `screenshots/0060.png`–`0068.png` (Charges at the start; Other charges expanded)
- Site: Other charges pairs; “Not published by bank”
