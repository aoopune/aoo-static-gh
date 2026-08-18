# They already mine salary, CIBIL, and age — they want Shroffin to say the intelligence instead

After the farmer / pay-slip story they show **how** they use this card today: change one input, read EMI and loan, repeat for CIBIL, repeat for age. “I have gathered intelligence with these tools.” **Instead**, they want **this company** to give that intelligence.

They then speak as the advisor: wait **3 months**; you can raise credit score **20 points or 5 points**; **695 → 700** and things get healthier; if the house is a **Hindu undivided family**, combine income and take the home loan **in the wife’s name** — **₹5 lakh** in the net. “I want it like this.”

This is the clip’s main fork with 2204: do not publish **best parameters** as a target list, **and** do not leave people to farm the same facts by typing.

## Classification
- kind: discussion | product (intelligence: who speaks it, and what it sounds like)
- status: open
- surface: explore-banks / `#hlc-monthly-income` (via “salary”), `#hlc-cibil`, `#hlc-age`, and the Overview columns (EMI / loan amount) those knobs drive. Co-applicant lives under collapsed Adjust eligibility and is **never opened**.
- viewport: 1366x768 @2x
- speakers: Speaker A, switching between the user who probes and the advisor (“Actually, sir…”). Speaker B not heard. ASR not diarized.

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
- previous: `02` (they click Salaried, then ask EMI/loan). 2134 already: show what is possible / they will raise CIBIL. 2204: do not tell best parameters.
- next: `04` — Indian mentality (maximum money) and an 8th unique point (“we suggest hacks”).

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Clicks in lockstep with the three questions:
  - **00:36** Salaried — “if there is a salary… EMI… loan” (also in `02`; same breath)
  - **00:40.771–00:40.772** focus+click `#hlc-cibil` (`0006.jpg`) — “if there is a CIBIL score, how much will be my loan?”
  - **00:43.064–00:43.066** focus+click `#hlc-age` (`0007.jpg`) — “if there is an age, how much will be my loan?”
- Values they do **not** change: CIBIL stays **780**, age stays **35**, income **₹1,00,000**, property **₹6,000**. Table body still below the fold; only Overview headers are visible. Intelligence-gathering is **input hopping**, not scrolling the grid.
- After the age click they sit idle on Age (`0007.jpg`–`0012.jpg`) through wait-three-months and HUF/wife. **01:32.972** click `#hlc-monthly-income` (`0013.jpg`) as they finish “5 lakh… I want it like this” and move into `04`.
- Adjust eligibility stays **collapsed** (“Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”). They name **wife** as applicant; they never open co-applicant income.

## What they said (faithful, complete)

**00:36.070–00:40.230** Speaker A (overlap with `02`; first probe):
> Raw ASR: “If there is a salary, then how much will be my EMI? And how much will be my loan?”
> Corrected: If [I show] **salary / salaried**, what EMI and what **loan amount**?

**00:40.510–00:42.890** Speaker A (click CIBIL):
> Raw ASR: “If there is a civil score, then how much will be my loan?”
> Corrected: “If there is a **CIBIL** score, then how much will be my loan?”
> ASR: **civil ≈ CIBIL** (same family as Sibyl later in this clip).

**00:43.050–00:44.170** Speaker A (click Age):
> Raw ASR / corrected: “If there is an age, then how much will be my loan?”

**00:44.350–00:47.350** Speaker A:
> Raw ASR / corrected: “And I have gathered intelligence with these tools.”
> **These tools** = this Loan inputs card plus the bank-options output those knobs drive. **Intelligence** = what salary / CIBIL / age **do to loan and EMI** — knowledge they extracted by changing inputs, not something the page stated.

**00:47.890–00:52.190** Speaker A:
> Raw ASR: “Instead, I want that if this company gives me that intelligence,”
> Corrected: **Instead**, they want **this company** (Shroffin) to **give** that intelligence — not make the visitor harvest it by probing. Sentence continues as the advisor script below.

**00:53.170–00:58.630** Speaker A (advisor voice):
> Raw ASR: “Actually, sir, you just wait for 3 months. It will be like this.”
> Corrected: same. **Sir** = the customer. **Wait 3 months** = delay the loan; do not apply tomorrow. Same family as 2134’s three months and 2204’s six months — this clip’s number **here** is **three**.

**00:59.530–01:09.490** Speaker A:
> Raw ASR: “You can increase your credit score by 20 points or 5 points in 3 months. If you come to 700 out of 695, then everything becomes half and half healthy for you.”
> Corrected: you can raise **CIBIL** by **20 points or 5 points** in three months. Example: **695 → 700**, then things become **healthier** for you.
> ASR: **half and half healthy** is muddy — likely mixed Hindi-English for “things become healthy.” Do not invent a product called “half and half.” **700 out of 695** = from 695 to 700 (a 5-point lift), not a score out of 695.

**01:10.050–01:24.070** Speaker A:
> Raw ASR: “You told me that actually you have a Hindu and divided family in your house. Combine your income in the name of your wife. And take the home loan in the name of your wife. You have 5 lakh rupees in your net net. So, I want it like this.”
> Corrected: “You told me that actually you have a **Hindu undivided family** in your house. Combine your income in the name of your wife. And take the home loan in the name of your wife. You have **₹5 lakh** in your **net**. So, I want it like this.”
> ASR: **Hindu and divided family ≈ Hindu undivided family (HUF)**. **net net** = net / net-net (the rupee save). **You told me** = the intelligence Shroffin (or a lawyer) would tell the customer. Wife as **applicant** (2204’s younger wife / take her name), plus **combine income**. 2204’s prize was ₹4 lakh; this restatement uses **₹5 lakh**.

No Speaker B. They do not ask to add an HUF checkbox. They do not mock a sensitivity table. Content of the intelligence is **spoken**; UI comes in `06` (tool or short film) and 2213 (different tool vs put it here).

## First-principles problem
- What must be true: a comparison tool must show what banks do with **this** profile. A person hunting a deal will still want to know **what happens if** salary / CIBIL / age / applicant change. Today that “if” is only available by editing the form. The customer also wants **actions and rupee outcomes** (wait, raise score, change who is on the paper → lakhs saved), not a lecture on the loan they already qualify for.
- Root vs symptom: not missing helper text. The root is **who speaks the sensitivity** — the user’s experiments vs Shroffin as advisor.
- Constraints from 2204: do **not** give “best parameters” as targets. This clip still wants the **sensitivity** and even **concrete advisor lines** (3 months, 695→700, wife’s name). Those two wants sit in tension; `04`–`07` try to resolve it as “hacks / Pareto,” not as a scoreboard of ideal inputs.

## Directions they considered
- Current usage (as the user): probe salary → EMI/loan; probe CIBIL → loan; probe age → loan; call that **gathered intelligence**.
- Desired: Shroffin **gives** that intelligence.
- Payload they brainstorm: wait 3 months; raise CIBIL 20 or 5 points (695→700); HUF household → combine income, loan in wife’s name → ₹5 lakh net.
- Lean: this is the **voice and payload** they want; channel is later (`06` tool or short film; `09` empty place; 2213 different tool).

## Company / user / future thinking
- **Debate (the missed core of the last write-up):** 2204’s **con** of telling numbers: if you say 750 / salaried / age 30 is bad, people manufacture it. This clip’s **pro** of telling intelligence: people already gather it by twisting this form; if Shroffin stays silent they feel they must extract secrets; if Shroffin speaks like “sir, wait 3 months,” they get the save without a science experiment. They do **not** pick a winner in this span — they want **both** honesty (no cheat-sheet of best inputs) **and** advisor speech (wait, score, wife, five lakh).
- **Example they use:** 695→700 in three months; HUF; loan in wife’s name; ₹5 lakh net. Same family as 2204’s wife / ₹4 lakh, restated with HUF and a 5-point band.
- **User:** will wait months and change whose name is on the loan if someone they trust says that saves lakhs. Will also sit on this card and twist knobs until they understand the market.
- **Company:** “giving intelligence” means speaking like the person thinking of the customer’s **benefit** (`06`’s lawyer), not like a form. Risk: these lines become the same cheat sheet 2204 refused if they are framed as “hit 700 / use your wife.”
- **Future:** `04` packages this as an 8th unique point. `08` later puts **750** on the field as a **default**, not as “best CIBIL.” `10` extends wait-and-get-a-slip to rural/cash users. 2213: do not dump this into the current inputs card without deciding placement.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-inputs` as a whole (`#hlc-monthly-income`, `#hlc-cibil`, `#hlc-age`, occupation) **and** any **advice / insight** surface near it or a future separate tool (2213). Co-applicant fields exist under Adjust eligibility but were not opened.
- Acceptance criteria in their words: they have gathered intelligence with these tools; **instead** this company should give that intelligence — wait 3 months; raise score 20 or 5 points; 695 to 700; HUF → combine income, loan in wife’s name; ₹5 lakh in the net. “I want it like this.”
- What NOT to do: do not “fix” this by telling them the best CIBIL / age / salary (2204 forbids it). Do not remove the fields they use to probe. Do not add an HUF control or co-applicant UI from this clip alone. Do not treat leftover ₹6,000 as this topic. Do not write illegal structuring as shipped how-to; they are describing **Indian behaviour and advisor talk**, and 2213 still has to decide **where** it lives.
- Open questions: 3 months vs 2204’s 6 months vs `10`’s 4 months — they use several waits; do not collapse to one number from this file. Line between “you could wait and raise CIBIL” and “your best CIBIL is 750” (`08` is a default, different use). What “give intelligence” looks like without naming a target to hit.
- Related recordings:
  - continues_from: `02`; `wb-rec-260815-2204`; `wb-rec-260815-2134` (raise 20 points / 3 months; show what is possible).
  - continues_in: `04` (mentality + 8th unique point); `06` (lawyer: wife’s salary and rent, 1%); `wb-rec-260815-2213`.

## Evidence index
- `audio.vtt` 00:36.070–01:24.070
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (civil score; Hindu and divided family; net net)
- `events.json`: CIBIL click t=40771; Age click t=43064; idle on age; next click income t=92972
- `screenshots/0006.jpg` (CIBIL), `0007.jpg`–`0013.jpg` (age idle through HUF/wife)
- `pages.json`: CIBIL “Changes the rates banks show you.”; Age “Sets the longest tenure banks will allow.”; co-applicant fields unused
- `replay.spec.ts`: `#hlc-cibil`, `#hlc-age`
- Site `pages/explore-banks.html`: `#hlc-cibil`, `#hlc-age`, `#hlc-monthly-income`, Adjust eligibility / co-applicant
