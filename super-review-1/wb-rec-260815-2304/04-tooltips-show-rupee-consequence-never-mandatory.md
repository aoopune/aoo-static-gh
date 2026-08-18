# Tooltips should name the rupee effect — then ten fields are fine; never mark them mandatory

They will fill all ten columns if the **tooltip** says what happens in rupees — e.g. if you put all your **existing EMIs** in this column, you will get **₹10 lakh**. People skip fields only because they don’t know if it is of any use. They should **never write the mandatory** asterisks: later the site may not have that fact, and **existing EMIs change**.

## Classification
- kind: issue | copy + product (help vs required)
- status: open
- surface: `.hlc-field-help` under each column; `#hlc-existing-emis`; required `*` on several labels; `#hlc-foir`
- viewport: 1366×768 @2x
- speakers: Speaker A. **01:25–01:29** “Yes, brother. Why don’t you tell me this?” is a second voice (Speaker B) pushing A to put the consequence on the field. ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2304`
- recording id: `6033ef99-94cd-427e-b722-e831e6342b86`
- clip: 21 of 30
- started_at: 2026-08-15T17:34:55.529Z
- ended_at: 2026-08-15T17:43:48.848Z
- duration_ms: 533319 (~8 min 53 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 73
- event count: 129
- console: empty
- tabs: 1
- ASR: `audio.json` language tag `mr`
- previous: this folder `03`
- next: this folder `05`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- On-page Existing EMIs **i** today (from `pages.json`): “Lowers how much new loan you can get.” They want a **rupee** example instead (₹10 lakh), not that caption.
- FOIR field they click while this lands: **02:09.387** `#hlc-foir` (`0019.jpg`) — “I will go somewhere and get my FOIR.” Frame: Salaried + Top-up; extra row open; FOIR still **55% (default)**; Co-applicant still **No**; See options still on the right.
- They do **not** open an **i** popover in this span. “Tooltips below” = the help they want **under** the columns (`03` already said they can see tooltips below).
- Screenshots: `0013.jpg`–`0023.jpg` (t=84200–164201). Extra row still open; Existing EMIs ₹555.

## What they said (RAW + corrected, both speakers)

**01:36.510–01:46.150** Speaker A (the tooltip they want):
> Raw ASR: “And I can see tooltips below. And it is written in the tooltips. That if you apply all your existing AMIs to this column, you will get 10 lakh rupees.”
> Corrected: “And I can see **tooltips** below. And it is written in the tooltips: if you apply all your **existing EMIs** to this column, you will get **₹10 lakh**.”
> **AMIs** p≈0.60 → **EMIs**. **lakh** p≈0.41. **column,** p≈0.000 — weak token, but the rest of the sentence is the worked example. Not a live calc of the ₹555 sitting in the box.

**01:49.590–02:00.710** Speaker A:
> Raw ASR: “I will have no problem filling all these 10 things up. And on the contrary, I am not doing anything. I will go somewhere and get my fire ratio out. And I will get it.”
> Corrected: “I will have **no problem filling all these 10 things up**. And on the contrary, [if] I am not doing anything, I will go somewhere and get my **FOIR** out. And I will get it.”
> **fire** p≈0.28, **ratio** p≈0.95 → **FOIR** (same expansion as `2302`). Click `#hlc-foir` at 02:09 as this lands. If Shroffin doesn’t explain the column, the user **leaves** to compute FOIR elsewhere. Tail “And I will get it” is weak (p≈0.005–0.17).

**02:05.090–02:18.310** Speaker B then A:
> Raw ASR: “Yes, brother. Why don't you tell me this? I feel, at the start, why I don't want to fill all these fields? Because I don't know if it will be of any use. Mine.”
> Corrected: **Speaker B:** “Yes, brother. Why don’t you tell me this?” (**Yes,** p≈0.20, **brother.** p≈0.17 — vocative, still a second turn). **Speaker A:** “I feel, at the start, why I don’t want to fill all these fields? Because I don’t know if it will be of any use.”
> **Mine.** p≈0.03 — truncated ASR tail; do not invent a sentence.

**02:21.430–02:27.490** Speaker A:
> Raw ASR: “But if I see this, I will get it. Then I have no problem with 10 fields.”
> Corrected: same. “This” = the rupee tooltip / the indication that the column is useful.

**02:28.070–02:41.670** Speaker A (mandatory):
> Raw ASR: “And on the contrary, we should never write the mandatory fields. Because later on, we don't have this with us. Later on, it changes. Because you have existing AMIs. I have told you that.”
> Corrected: “We should **never write the mandatory fields**. Because later on, we don’t have this with us. Later on, **it changes**. Because you have **existing EMIs**. I have told you that.”
> Against `2302`’s “this is all mandatory.” **mandatory** p≈0.45, **fields.** p≈0.12. Second **AMIs.** p≈0.008 — still **EMIs** from context. Reason: the fact (especially existing EMIs) **changes**; the site may not hold a later snapshot. On screen, `*` is already on income, property, age, CIBIL, occupation, purpose, and tenure.

## First-principles problem
- What must be true: a field is fillable when the user can see **what it does in rupees**. Required stars do not create that knowledge, and they lie when EMIs change.
- Root vs symptom: “I don’t want to fill” is not laziness. Root: **usefulness is invisible**. Mandatory `*` is a second, wrong fix (force instead of explain).
- Constraints: keep ten columns (`03`); explain on the tooltip; never mark mandatory because existing EMIs change.

## Directions they considered
- Write the consequence in the tooltip (existing EMIs → ₹10 lakh example).
- Then filling ten is not a problem.
- If you don’t, they will get FOIR somewhere else.
- Never label fields mandatory.
- Lean: copy on the **i** / under-field tip, not a new required-field pass. `2116` already wanted “why / what it does” on the i — this clip adds **rupees** and **no asterisk**.

## Company / user / future
- User: will type ten numbers if they see ₹10 lakh (or similar) attached to the column. Will not type if it feels like a bank form’s required list.
- Company: we are not collecting a KYC packet. We are showing how the comparison moves. A `*` that we cannot stand behind later is dishonest.
- Future: `06` — if they say yes (co-applicant), take the extra details; still no “think too much” about mandatory. `08` — later a credit pull; still “we won’t keep anything from you.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-help-existing-emis` (and sibling `#hlc-help-*` texts), `required` / `.hlc-req` asterisks on `#hlc-inputs`, `#hlc-foir` help.
- Acceptance criteria in their words: tooltip “if you apply all your existing EMIs to this column, you will get ₹10 lakh”; no problem filling 10 things; why I don’t want to fill = I don’t know if it will be of any use; **never write the mandatory fields**; it changes because of existing EMIs.
- What NOT to do: do not treat ₹10 lakh as a live guarantee for leftover ₹555 / ₹6,000 demo. Do not send them off-site for FOIR. Do not keep “this is all mandatory” from `2302` as the current instruction.
- Open questions: exact tooltip sentences for FOIR vs EMIs vs the other eight. Whether “never mandatory” includes Tenure (still `*` in HTML) or only the extra block.
- Related recordings:
  - continues_from: `03`; `wb-rec-260815-2302` (`07` this is all mandatory vs surprise); `wb-rec-260815-2116/06` (why / what it does on the i)
  - continues_in: `05`; `06`; session continues_in: `wb-rec-260815-2313`

## Evidence index
- `audio.vtt` 01:36.510–02:41.670
- `events.json`: click `#hlc-foir` t=129387 (`0019.jpg`)
- `screenshots/0013.jpg`–`0023.jpg`
- Site: `#hlc-help-existing-emis`, `.hlc-req`, `#hlc-foir`
