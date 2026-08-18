# This place is empty — and if the tool exists they will hack it for months to save lakhs

They accept the one-CIBIL default, then: **this place is empty.** If a lawyer had suggested hacks, and if they **have this tool**, they will **try to hack it**: +20 CIBIL, loan in wife’s name, in husband’s name, show salary as self-employed — and they will wait **6 months** or even **a year**, because a few lakh saved is worth it for **the majority of Indians**.

“Empty” is **missing product**, not a blank input. The card is filled. The hole is the missing lawyer/hacks intelligence UI they asked for in `03` and `06`.

## Classification
- kind: discussion | product (empty surface + incentive)
- status: open
- surface: explore-banks Loan inputs card they have been staring at. Fields filled; Adjust eligibility collapsed; no insights rail. Then the same card as something users will **hack** (use inputs as levers — not a security exploit).
- viewport: 1366x768 @2x
- speakers: Speaker A. Speaker B not heard. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2206`
- recording id: `125a22f8-b64d-419e-9196-9126d5f613f3`
- clip: 14 of 30
- started_at: 2026-08-15T16:36:16.832Z
- ended_at: 2026-08-15T16:43:07.910Z
- duration_ms: 411078 (~6 min 51 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 52
- event count: 71
- console: empty
- tabs: 1
- previous: `08` — “put that in the final.”
- next: `10` — rural / cash / no salary slip, we should help them.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Still no new clicks (`0040.jpg`–`0046.jpg`, t=312197–366196). Viewport is the **inputs card** + Overview tab headers. Table body still below the fold until `11`.
- What could look “empty”: whitespace in the card (Adjust eligibility collapsed; no insights rail; no hacks list). They do not click a hole in the layout. Read **empty** as **no intelligence/hacks surface here**, matching `06` and 2213’s “we can’t just put it here.”
- Occupation on screen: **Salaried** (from 00:36). They still name **self-employed** as a hack direction.

## What they said (faithful, complete)

**05:13.190–05:23.270** Speaker A:
> Raw ASR: “But this place is empty. If there is a lawyer, The lawyer has suggested me. What I am going to do here, If I have this tool, I am going to try to hack this tool.”
> Corrected: same. **But this place is empty.** If there is a lawyer [who] suggested [hacks], **what I am going to do here**: **if I have this tool, I am going to try to hack this tool.**
> **Here** = this Explore banks card. **Empty** = no place showing those lawyer hacks. **Hack this tool** = use the inputs as levers (next lines).

**05:25.630–05:37.750** Speaker A (the hacks):
> Raw ASR: “That only if I increase 20 scores, This will happen. If I take it by the name of my wife, That will happen. If I take it by the name of my wife, If I take it by the name of my husband, That will happen. And if I show my salary as a self-employed, That will happen.”
> Corrected: **only if I increase [CIBIL] 20 [points], this will happen.** If I take it **in my wife’s name**, that will happen. If I take it **in my husband’s name**, that will happen. If I **show my salary as self-employed**, that will happen.
> Same family as `02`/`03`/`06`. **Husband** is new in this clip (symmetric spouse-as-applicant). **Show my salary as self-employed** may be the reverse occupation game (or “show myself as salaried / as self-employed”); they name **self-employed** explicitly. Each “that will happen” = a visible change in offers/EMI/loan.

**05:38.210–05:55.310** Speaker A:
> Raw ASR: “And for 6 months, I will be ready to do that. Because in the long term, I will save a few lakh rupees. And potentially, I will not be able to save that much in a year. So it will be worth for me to give a year. And actually save that much money. For the majority of the Indians, It will be true.”
> Corrected: they will be ready to do that for **6 months**. Long term they save **a few lakh**. They **won’t** save that much in a [normal] year [of ordinary income], so it is **worth giving a year** to actually save that money. **For the majority of Indians, it will be true.**
> Time horizon: 6 months, then even **a year**. 2204 used six months; `03` used three; `10` uses four. Do not collapse. **Majority of Indians** = they believe this incentive is typical, not a niche cheater.

Then they pivot to who especially needs help (`10`): rural, cash, no salary slip.

## First-principles problem
- What must be true: (1) this card has **no slot** for lawyer-style intelligence. (2) If you give people a tool that **shows** “if I change X, Y happens,” they will spend **months** changing X because lakhs beat a year of ordinary saving.
- Root vs symptom: not a missing padding bug. The root is an **empty product hole** plus **unavoidable gaming** once sensitivity is visible.
- Constraints: they still want the tool (`06`). Emptiness is the missing **hacks display**, not “delete the form.”

## Directions they considered
- Name the hole: this place is empty.
- Predict behaviour: hack via +20 score, wife, husband, occupation; wait 6 months–1 year; majority of Indians.
- Lean: both are real — fill the empty place **and** expect gaming. 2213 will ask whether filling it **on this card** is wrong.

## Company / user / future thinking
- **Debate — fill the hole vs leave it:** Pro of filling: `03`/`04`/`06` asked Shroffin to give intelligence so people don’t feel they must extract it. Con of filling **here**: if “this will happen” is visible on the same knobs, they will **hack this tool** for a year. 2213’s opening (“we can’t just put it here”) is the next move of this debate.
- **Example:** +20 CIBIL / wife / husband / self-employed → “that will happen”; 6 months or a year because a few lakh > a year of ordinary saving. Same arithmetic as 2204, now stated as **majority of Indians**.
- **User:** will treat the comparison engine as something to **hack** if the payoff is lakhs; time is cheap relative to that save.
- **Company:** an empty card that only lists banks teaches users to **self-serve the hacks**. Filling it with hacks may be the 8th unique point — or a different tool (2213).
- **Future:** `10` says the company **should** tell some of these moves to cash/rural users (salary slip). That is help, not only “they will game us.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: a new insights/hacks region near `#hlc-inputs` **or** a separate tool (2213). Do not invent a layout patch for “empty” whitespace.
- Acceptance criteria in their words: this place is empty; if I have this tool I will try to hack it (+20 score, wife, husband, self-employed); 6 months / a year is worth a few lakh; majority of Indians.
- What NOT to do: do not “fill the empty place” with Lorem or a fake lawyer quote. Do not add husband/wife name fields from this clip. Do not treat +20 as a CIBIL stepper to ship as the hack itself. Do not confuse this emptiness with the black screenshot masks.
- Open questions: where the slot lives (this card vs 2213). How to show “this will happen” without 2204’s best-parameter cheat sheet.
- Related recordings:
  - continues_from: `06`, `08`
  - continues_in: `10`; `wb-rec-260815-2213` (“we can’t just put it here”)

## Evidence index
- `audio.vtt` 05:13.190–05:55.310
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json`
- `events.json`: idle
- `screenshots/0040.jpg`–`0046.jpg`
- Site `pages/explore-banks.html`: `#hlc-inputs` with no hacks region
