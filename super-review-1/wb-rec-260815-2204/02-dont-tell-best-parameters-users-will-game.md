# Do not tell people the “best” parameters — they will game them

Spoken as a shopper hunting home-loan **deals**: they do not want Shroffin to say what the **best parameters** should be. If you name a target, they will manufacture it. Three proofs they act out on the card: CIBIL **750** in **six months** (small loan + a score shop); **salaried** beats self-employed so they get a **pay slip**; **age 30** is bad so they put the loan in a **28-year-old wife’s** name. They click CIBIL, then Age, as they say each one. Occupation stays **Self-employed** — they never click Salaried.

## Classification
- kind: product-thinking | incentive design
- status: open
- surface: explore-banks / `#hlc-cibil`, occupation pills (Salaried / Self-employed), `#hlc-age` — not a layout bug
- viewport: 1366×768 @2x
- speakers: Speaker A in the user’s voice. Speaker B not heard.

## Session metadata
- folder: `wb-rec-260815-2204`
- recording id: `96bab1e5-65d0-462e-b148-21cf61aeb7cf`
- clip: 13 of 30
- started_at: 2026-08-15T16:34:11.754Z
- ended_at: 2026-08-15T16:36:10.834Z
- duration_ms: 119080 (~1 min 59 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- screenshot count: 18; event count: 46; console empty; tabs: 1
- previous real: `wb-rec-260815-2134` already had “I will give a loan for 6 months” and raise ~20 CIBIL points.
- next: `03` in this folder (₹4 lakh, not a “perfect” loan); `wb-rec-260815-2206` continues with property 50L/40L, farmer pay-slip, hacks.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Form **Loan inputs**. After the recap, income is **₹1,00,000**; property leftover **₹6,000**; CIBIL **780**; Age **35**; Self-employed; Regular.
- Clicks:
  - **00:52.051** click `main`; **00:53.217** focus+click `#hlc-cibil` (`0010.jpg`, 780 underlined) as “best parameters” and the 750 / six-months example land
  - **01:27.300** focus+click `#hlc-age` (`0014.jpg`, 35 underlined) as “30 years of age is not good” / wife is 28
- They **name** salaried vs self-employed. They do **not** click the occupation pills. Stills stay on Self-employed the whole clip.
- They do **not** type 750, 30, or a wife’s age. The numbers are spoken games, not edits.
- Screenshots: `0010.jpg`–`0013.jpg` CIBIL focused; `0014.jpg`–`0017.jpg` Age focused through the end of the clip. Black bars at the bottom of frames are recorder masks, not UI.

## What they said (faithful, complete)

**00:44.040–00:58.420** Speaker A (thesis):
> Raw ASR: “Actually, if I am thinking about home loans and I am trying to find the best deals... Actually, I don't want you to tell me what the best parameters should be.”
> Corrected: same. Customer goal = best **deals**. Refused = the site announcing winning **parameters**.

**00:59.590–01:12.200** Speaker A (CIBIL / time / small loan / score shop):
> Raw ASR: “If you tell me that I will get a loan of Rs. 750,000, I will give it to you in six months. I will take a small loan and it will be perfect. I will find a credit agency that will let me increase my credit score.”
> Corrected: “If you tell me that [I need] **750** [CIBIL], I will give it to you in **six months**. I will take a **small loan** and it will be perfect. I will find a **credit agency** that will let me increase my credit score.”
> ASR: **Rs. 750,000** is Whisper putting rupees on **750**. They are on `#hlc-cibil` (780), not a 7.5 lakh loan field. Same pair as 2134: **750** / six months / raise the score. “Credit agency” = a score-boost shop, not the CIBIL bureau.

**01:12.660–01:24.100** Speaker A (occupation / pay slip):
> Raw ASR: “If you tell me that salary is more than self-employed, then I will remove my pay slip. I have been doing this for six months.”
> Corrected: “If you tell me that **salaried** is more than self-employed, then I will **get / make a pay slip**. I have been doing this for six months.”
> ASR: **salary ≈ salaried**. **Remove** my pay slip is the wrong verb for the incentive: if salaried wins, they **obtain** a pay slip. `2206` continues: farmer joins a company and **takes a pay slip**. Same six-month wait as the score example.

**01:26.160–01:32.880** Speaker A (age / spouse as applicant):
> Raw ASR: “You told me that 30 years of age is not good. My wife is 28 years old. I will take her name.”
> Corrected: same. “Take her name” = put the home loan in the **wife’s** name (younger applicant). They do not open **Adjust eligibility** / co-applicant. Click Age at **01:27**.

No Speaker B. No disagreement. The examples are proofs of the rule, not features to ship in this clip.

## First-principles problem
- What must be true: a person comparing lenders should see what banks do with **the numbers they have**, not a scoreboard of parameters to impersonate.
- Root vs symptom: CIBIL, Age, and Occupation are not broken. The root is **incentive**: publish 750 / salaried / under 30 and the user waits months, takes a small loan, buys a score, makes a pay slip, or changes who is on the paper.
- Constraint: explain **what** a field **does** (2116) without stating a **target to hit**.

## Directions they considered
- Lock the rule: **do not tell me the best parameters.** Lean: product law, not a taste nit.
- Named games (proof, not a shipping list here): six months + small loan + score shop; salaried via pay slip; younger spouse’s name.
- They do **not** pick a UI (no extra dropdown, no hide-CIBIL). The ask to **suggest hacks** starts in **2206**.

## Company / user / future thinking
- User: hunting a deal, willing to wait and change the story if the site names what wins.
- Company: if Explore banks (or the marketing around it) says “750 / salaried / younger is best,” it stops being a picture of the market and becomes a farming guide. That fights the live promise: full picture, customer decides.
- Future: 2134 already knew they would probe “show me possible” and raise 20 points. This clip is the philosophy under that. 2206 turns it into Indian mentality and an 8th unique point — capture there; do not collapse this clip into that feature.

## Fix metadata
- Likely code owners: `pages/explore-banks.html` (`#hlc-cibil`, `#hlc-age`, occupation pills) and any helper / empty-state / “typical values” copy that names a **winning** CIBIL, occupation, or age.
- Acceptance in their words: “I don't want you to tell me what the best parameters should be.” If you say 750 / six months / salaried-is-more / 30 is not good, they will game it.
- What NOT to do: do not delete CIBIL, age, or occupation. Do not ship score-farming or fake-payslip **instructions** under this clip’s name (2206 is the hacks ask). Do not rewrite 2116 helpers here.
- Open question: where “here is how banks treat your real profile” ends and “here is how to become the profile banks like” begins.
- continues_from: `wb-rec-260815-2134`; `01` in this folder.
- continues_in: `03` in this folder; `wb-rec-260815-2206`.

## Evidence index
- `audio.vtt` 00:44.040–01:32.880
- `events.json`: CIBIL click t≈53217; Age click t≈87200
- `screenshots/0010.jpg`–`0014.jpg`
- `pages.json` / `RECAP.md`: Loan inputs actions for CIBIL, Age, Occupation
- Site: `#hlc-cibil`, `#hlc-age`, `.hlc-occupation-pills`
