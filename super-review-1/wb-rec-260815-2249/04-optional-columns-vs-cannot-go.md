# Extra columns are “optional” — but if they do not fill, they cannot go

After a ~21 s gap of opening and closing Adjust eligibility, they name the trap: these are **optional columns** they want the customer to fill or not fill — **but if they don’t fill, they can’t go.** Why must people **come here** (the hidden extra block) when those facts **make a big difference**? People decide **loan amount** and **EMI** — **everything** — so **why is there no mandating?** Because the **formula is getting bigger** and there are **so many questions**.

## Classification
- kind: issue | product
- status: open
- surface: explore-banks / recorded `details#hlc-form-more` extras (Existing EMIs, credit cards, FOIR, tenure*, co-applicant). Tenure has an asterisk on screen; the others do not — that is the “optional” UI they are attacking.
- viewport: 1366x768 @2x
- speakers: Speaker A. Speaker B not a separate turn. ASR not diarized; language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2249`
- recording id: `55f40b18-3bf3-46a3-b169-7adabe6886b1`
- clip: 19 of 30
- started_at: 2026-08-15T17:19:17.338Z
- ended_at: 2026-08-15T17:21:34.102Z
- duration_ms: 136764 (~2 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 20
- event count: 43
- console: empty
- tabs: 1
- previous: `03` (customer does not ask for the bank)
- next: `05` (which of these fields are actually for everyone); `wb-rec-260815-2302` `07` (“this is all mandatory”)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- They keep **toggling** the extra block while talking — that *is* “come here”:
  - **00:42.631** accordion (`0007.jpg`, t=43034) — collapsed; table visible
  - **00:59.854** / **01:01.021** accordion (`0010.jpg`, t=61423) — collapsed + table (speech: “optional columns”)
  - **01:06.595** accordion (`0011.jpg`, t=67000) — **open** (speech: “if they don’t fill, they can’t go”)
  - **01:20.139** accordion (`0013.jpg`, t=80540) — collapsed + table peek (speech: “why is there no mandating?”)
- On-page: extra rows without asterisks except **Tenure***. Primary grid (income, property, age, CIBIL, occupation, purpose) is already starred. See options still required to “go” to Bank options.
- They still do not type. ₹555 / ₹0 cards / FOIR 55% default / co-applicant No stay as leftover state.

## What they said (faithful, complete)

**00:59.050–01:05.670** Speaker A:
> Raw ASR / corrected: “These are basically optional columns that we want the customer to fill or not fill.”
> High-confidence line (optional ~0.84, columns ~0.97). **These** = the five extra rows they keep opening.

**01:06.330–01:08.570** Speaker A:
> Raw ASR / corrected: “But if they don’t fill, they can’t go. Why do they have to come here?”
> **can’t go** = cannot honestly reach a real offer / cannot proceed as if the extras were optional. **Come here** = open Adjust eligibility (they click it as they say this).

**01:09.450–01:18.850** Speaker A:
> Raw ASR: “It makes a big difference. They have to decide their loan amount. How much is the EMI? They decide everything.”
> Corrected: same. Ties to `03`: the customer’s ask is **amount and EMI**, which these columns change. **They** (first word of the loan-amount line) ~0.06 — still this speaker.

**01:21.150–01:28.890** Speaker A:
> Raw ASR: “Then why is there no mandating? Because the formula is getting bigger. There are so many questions.”
> Corrected: same. **Mandating** = required, not hidden-optional. **Formula getting bigger** / **so many questions** = they see why someone hid the fields (card size, `02`) — it is an explanation, not a pardon.

Speaker B: none. Examples: the accordion they click; loan amount + EMI as the customer’s decisions. Pros of optional: fewer questions on the card (`02`). Cons they state: you still cannot really go; people must come here; the difference is big; so why not mandate.

They do not list which field is mandatory yet — that inventory is `05`. They do not say “drop down” (`2302`).

## First-principles problem
- What must be true: a field cannot be **optional in the UI** and **required for a true offer** at the same time. If skipping it means they “can’t go,” it is not optional.
- Root vs symptom: the symptom is a collapsed extra block. The root is **lying about optionality** — hide the questions so the form looks small, then still need those answers for loan amount and EMI.
- Constraints: the formula *is* getting bigger (`02` size). Mandating everything without design is the other failure (`05` will say not every field is for everyone).

## Directions they considered
- Honest optionality: fill or not fill.
- Rejected as currently built: optional *appearance* while “can’t go” without filling.
- Implied alternative: **mandating** (or not hiding) the fields that decide amount/EMI — then immediately the cost: bigger formula, many questions.
- Lean: this is the contradiction to fix, not a copy tweak of “Adjust eligibility.”

## Company / user / future thinking
- User: thinks they can skip extras; then the offer is wrong or they are sent back “here.” Trust break is named in `2302` (“surprise later, I will lose my trust”).
- Company: Shroffin owes a real comparison. Optional chrome that zeros EMI/cards/FOIR is fake intelligence (`2302` `02`).
- Future: `05` splits “for everyone” vs not. `2302` `07` comes back to “this is all mandatory.” Do not ship “optional” as the last word.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` required vs optional on `#hlc-existing-emis`, `#hlc-card-limits`, `#hlc-foir`, `#hlc-tenure`, `#hlc-coapplicant`; whether See options can submit with extras empty; accordion vs always-visible (`01` / `2302`).
- Acceptance criteria in their words: optional fill-or-not is what they *want*; “if they don’t fill, they can’t go” is the bug; “why do they have to come here?”; it makes a big difference to loan amount and EMI; “why is there no mandating?”
- What NOT to do: do not asterisk every extra field without the `05` split (existing EMI / cards / co-applicant are “not for everyone”). Do not keep them collapsed and pretend zero is a filled answer. Do not treat leftover ₹555 as user-intent.
- Open questions: required vs pre-filled vs “show but allow zero” — `2304` will try pre-fill + importance. Which extras are truly blocking vs defaultable is `05`.
- Related recordings:
  - continues_from: `01`–`03`
  - continues_in: `05`; `wb-rec-260815-2302` `02` (must still affect), `06` (surprise later), `07` (all mandatory)

## Evidence index
- `audio.vtt` 00:59.050–01:28.890
- `audio.json`: **optional** ~0.84; **can’t** ~0.39; **mandating** ~0.71; **formula** ~0.76
- `events.json`: accordion t=42631, 59854, 61021, 66595, 80139; screenshots `0007.jpg`, `0010.jpg`, `0011.jpg`, `0013.jpg`
- `pages.json`: Existing EMIs required=false; Tenure required=true; FOIR select; Co-applicant income/EMIs
- `replay.spec.ts`: repeated `details#hlc-form-more` summary clicks
- `manifest.json` viewport 1366×768 @2x; `console.json` `[]`
