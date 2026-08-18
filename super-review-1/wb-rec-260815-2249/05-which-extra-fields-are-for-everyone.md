# Not every extra field is for everyone — FOIR is; EMI, cards, tenure-ask, co-applicant are not

They walk the open extra block field by field. **Existing EMI** is “very less” / **not for everyone**. **Credit card limits** are **not for everyone**. **Everyone needs the upper limit** — then they put a finger on **share of income (FOIR)**: it does not “belong” to a person, it **differs by bank**. Nobody walks in on the **10-year** side asking for a **15-year** “limit.” **Co-applicant is not for everyone**; they even ask **how it makes a difference**. In general people only fill that **upper** cap — and if the numbers are more, the offer is more.

## Classification
- kind: issue | product
- status: open
- surface: explore-banks / extra rows when `details#hlc-form-more` is **open**: `#hlc-existing-emis`, `#hlc-card-limits` + 10% load, `#hlc-foir` (“Share of income for EMIs / FOIR”), `#hlc-tenure`, `#hlc-coapplicant`
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
- previous: `04` (optional vs cannot go / why no mandating)
- next: `06` (aside: someone playing a song); `wb-rec-260815-2302` `02`–`08` (cards, FOIR, existing EMI, co-applicant still change the offer)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- **01:36.787** click accordion (`0015.jpg`, t=97188) — extra block **open** for the inventory. Then they sit on it: `0016.jpg`–`0019.jpg` (t=106187–132186) while naming each row.
- Visible extras while they talk: Existing EMIs ₹555; Credit card limits ₹0 + “About 10% counts as monthly load”; FOIR **55% (default)**; Tenure **20** years *; Co-applicant **No**.
- They do not click individual fields or change values. The leftover ₹555 is not claimed as “typical existing EMI.”

## What they said (faithful, complete)

**01:30.070–01:35.630** Speaker A:
> Raw ASR: “And on such a basis, everyone has the same amount. That is, the expenses.”
> Corrected: **same** ~0.11 — likely **some** amount: everyone has **expenses** (the lead-in to Existing EMI). Alternate, weaker: the table currently prints the **same** loan amount for every bank. They are on the **form**, not pointing at rows, so prefer the expenses reading.

**01:37.390–01:43.670** Speaker A:
> Raw ASR / corrected: “Existing EMI is very less. That is, it is not for everyone. The credit card limits are not for everyone.”
> **Existing EMI** and **credit card limits** match the first two extra labels. **Very less** = few people carry much existing EMI, so it is not a universal field.

**01:44.390–01:51.090** Speaker A:
> Raw ASR: “But everyone needs the upper limit. This is the share of income. This does not belong to anyone. But everyone differs according to the bank.”
> Corrected: **upper limit** (~0.14 / ~0.22) = the **FOIR / share-of-income cap** they name next — not “credit card limit.” **Does not belong to anyone** = FOIR is not a personal fact you “have” like an EMI; it is a **bank rule**, so it **differs according to the bank**.

**01:52.190–01:54.670** Speaker A:
> Raw ASR: “No one on the 10-year side says that I want the 15-year limit.”
> Corrected: tenure. People do not arrive asking for a 15-year vs 10-year “limit” the way they bring income. **side** ~0.07. On screen Tenure is 20 years with an asterisk — they are saying the *ask* is not universal, not that tenure can vanish from the math.

**01:55.590–01:59.170** Speaker A:
> Raw ASR / corrected: “This co-applicant is not for everyone. How does this co-applicant make a difference?”
> Open question, not a delete. Co-applicant **No** is selected. `2302` later: yes increases loan amount.

**02:02.090–02:07.770** Speaker A:
> Raw ASR: “In general, people only fill the upper limit. And if it is more, then it is more.”
> Corrected: people typically only fill that **FOIR / cap** (or only the top of the form). If income / cap / extras are **more**, the offer is **more**. **fill** ~0.10.

Speaker B: none. Worked example on screen: the five extra rows. Pros they imply: FOIR (upper limit) is for everyone; banks differ. Cons: stuffing EMI, cards, tenure-as-a-wish, and co-applicant on everyone as if they were universal.

## First-principles problem
- What must be true: **mandating** (`04`) cannot mean “every extra row is a fact every person has.” Split **universal rules** (FOIR cap, differs by bank) from **situational facts** (existing EMI, cards, co-applicant) and from **repayment choice** (10 vs 15 vs 20 years).
- Root vs symptom: not “too many inputs.” The root is **one drawer treating unlike things as one kind of column**.
- Constraints: still cannot fake optionality (`04`); still must affect offers (`2302` `02`); still cannot make the card endless (`02` / `2302` `01`).

## Directions they considered
- Existing EMI: not for everyone.
- Credit card limits: not for everyone.
- Share of income / FOIR: everyone needs this cap; it is the bank’s, not the person’s.
- Tenure: people do not request 15 vs 10 as a personal “limit.”
- Co-applicant: not for everyone; difference still unclear in this clip.
- Default behavior: people fill the cap; more in → more out.
- Lean: a classification, not a mockup. They do not say hide FOIR. They do not say delete co-applicant.

## Company / user / future thinking
- User: most people can skip “I have an EMI / a card / a co-applicant” until they do. They still need a **share-of-income cap** even if they have never heard FOIR.
- Company: intelligence is knowing which extra is a **bank rule** vs a **person fact**. Putting FOIR in the same “optional” bucket as co-applicant is the confusion `04` named.
- Future: `2302` proves cards and existing EMI still punch the offer (rejection story, utilization, FOIR name). `2302` `08`–`09` return to co-applicant yes/no. `2304` will try pre-fill + importance so ten columns can stay without pretending they are all the same.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` extras — `#hlc-existing-emis`, `#hlc-card-limits`, `#hlc-foir`, `#hlc-tenure`, `#hlc-coapplicant` — grouping, defaults, required flags, and copy (FOIR as bank cap vs personal EMI).
- Acceptance criteria in their words: existing EMI not for everyone; credit card limits not for everyone; everyone needs the (FOIR) upper limit; share of income does not belong to anyone / differs by bank; no one asks for a 15-year limit from the 10-year side; co-applicant not for everyone; people generally only fill the upper limit.
- What NOT to do: do not hide FOIR because EMI is rare. Do not force co-applicant on everyone. Do not treat Tenure as a vanity field you can drop — they are saying the *customer ask* is rare, not that years-to-repay is unused. Do not mark leftover ₹555 as the “very less” evidence.
- Open questions: how co-applicant changes the offer (asked, not answered). Whether “upper limit” is only FOIR or also the primary (top) fields. Pre-fill vs empty-zero for the “not for everyone” rows.
- Related recordings:
  - continues_from: `04`
  - continues_in: `wb-rec-260815-2302` `02`–`09` (cards, FOIR, existing EMI, co-applicant)

## Evidence index
- `audio.vtt` 01:30.070–02:07.770
- `audio.json`: **Existing** ~0.81; **credit card** ~0.80/0.93; **share of income** ~0.90/0.96; **co-applicant** ~0.87; **upper** ~0.14 then ~0.93; **same** ~0.11
- `events.json`: accordion open t=96787 (`0015.jpg`); idle through `0016.jpg`–`0019.jpg`
- `pages.json` / `RECAP.md`: extra field list
- `screenshots/0015.jpg`–`0019.jpg`
- `replay.spec.ts`: last `details#hlc-form-more` click
- Site: `#hlc-foir` 55% default; tenure required; co-applicant default No
- `manifest.json` viewport 1366×768 @2x; `console.json` `[]`
