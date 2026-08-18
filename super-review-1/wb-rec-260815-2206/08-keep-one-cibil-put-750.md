# Drop CIBIL min/max — keep one score, put 750; if they think 780 they will type it

After a pause they close the earlier CIBIL-range debate: let **min/max** go. **Keep only one CIBIL.** For the user, **put 750** and see. If they think they are **780**, “where have we caught him?” — they will type 780 and then see what other values they don’t have. Put that in the **final**.

The live field is still **780**. They last clicked CIBIL at 01:44; during this talk they do not click it again. This is a spoken default, not a typed change. It also **reverses** `wb-rec-260815-2134`’s “give both min and max.” It is **not** 2204’s “your best CIBIL is 750” cheat sheet — here 750 is the **starting number on the field**.

## Classification
- kind: discussion | product (CIBIL input decision)
- status: open (lean: one field, default 750)
- surface: explore-banks / `#hlc-cibil` — required text box, HTML `value`/`placeholder` **780**, helper “Changes the rates banks show you.” No min, no max, no dropdown on screen.
- viewport: 1366x768 @2x
- speakers: Speaker A states the decision. Speaker B not heard. ASR not diarized.

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
- previous: `07` (Pareto from the beginning), then ~18 s pause. Earlier CIBIL UI: `wb-rec-260815-2125`, `wb-rec-260815-2134` (dropdown + min/max both; people don’t know exact score).
- next: `09` — “but this place is empty” / users will hack the tool.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Control: CIBIL score* `#hlc-cibil` showing **780** the whole clip. During **this** talk (~04:47–05:12) there is **no** new CIBIL click — monthly income is still the focused field (`0036.jpg`–`0040.jpg`).
- They do **not** type 750. Decision is spoken only.
- Screenshots `0037.jpg`–`0040.jpg` (t=288197–312197): card unchanged, CIBIL 780, Salaried, property ₹6,000.

## What they said (faithful, complete)

**04:47.510–04:55.950** Speaker A:
> Raw ASR: “The complete discussion of the Sibyl score Whether to keep minimum or maximum. Or whatever we were thinking. I think let it go. Keep only one Sibyl score.”
> Corrected: the complete discussion of the **CIBIL** score — whether to keep **minimum or maximum**, or whatever we were thinking — **I think let it go. Keep only one CIBIL score.**
> ASR: **Sibyl ≈ CIBIL**. This **drops** 2134’s “you have to give him both” (dropdown **and** min/max). “Whatever we were thinking” = that whole range design, not a new third idea they specify.

**04:56.850–05:09.350** Speaker A:
> Raw ASR: “And finally, You have to put 750 to the user. Put 750 and see. And he thinks it is 780. Where have we caught him? He will go and put 780. And he will see again what values he doesn't have.”
> Corrected: **finally, put 750 for the user. Put 750 and see.** If **he thinks it is 780**, **where have we caught him?** He will go and **put 780**, and he will see again **what values he doesn’t have**.
> **750** is a **default to show**, not “your best CIBIL is 750.” **780** is what a user who believes they have 780 will type (and is also today’s HTML default). **Caught him** = the overwrite **reveals** their self-reported score. **What values he doesn’t have** = after correcting CIBIL they still notice other gaps (other fields / other intelligence) — they do not list which.

**05:10.450–05:12.250** Speaker A:
> Raw ASR: “That's fine. I think we should put that in the final.”
> Corrected: same. **Put that in the final** = this one-field + 750 default is the decision they want to keep. Then immediately `09`: **but this place is empty.**

No one objects. They do not mention the dropdown from 2134 in this restatement (only min/max). Live placeholder remains 780, so this is **not implemented**.

## First-principles problem
- What must be true: CIBIL is one number the banks use; a range UI was extra machinery. A default of **750** (not 780) lets a 780-person **correct** it, which tells you what they believe.
- Root vs symptom: 2134’s min/max was solving “people don’t know exact score.” This clip **lets that go** in favour of one box + a default that is **not** the demo 780.
- Constraints: one score only; 750 shown to the user; 780 people will type 780. 2204 still forbids **telling** them 750 is the best parameter — this is a **pre-filled value**, not a lecture.

## Directions they considered
- Rejected: min and/or max CIBIL (the “complete discussion”).
- Chosen: one CIBIL; default **750**; user with 780 overwrites; that’s fine; put in the final.
- Lean: this is an explicit reversal of 2134’s “both.” Record it as such; do not merge with 2134’s still-open dropdown note without noting the conflict.

## Company / user / future thinking
- **Debate with 2134:** Pro of min/max (earlier): people don’t know an exact score; a band is honest. Con they accept now: too much machinery; “let it go.” Pro of one box + 750: simpler; overwrite reveals belief. Con: 2134 said people don’t know exact score — a single 750 may still be a guess they never correct. They pick simplicity here anyway.
- **Debate with 2204:** Pro of putting 750: it is a **starting** number, not a speech that “750 is best.” Con: 2204 already used 750 as the target people will farm. If the field says 750, some users will treat it as the winning score. They still want it “in the final” and immediately say the rest of the card is **empty** (`09`) — the default is not the hacks product.
- **Example:** “he thinks it is 780. Where have we caught him? He will go and put 780.” Catch = self-report, not a trap.
- **User:** if the box says 750 and they are 780, they will fix it.
- **Company:** fewer CIBIL controls. Default 750 vs today’s 780 is a product choice (780 looks like a strong score already).
- **Future:** 2213 talks 720–780 bands for **offers** — that is output banding, not this input. Don’t collapse them.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-cibil` `value="780"` `placeholder="780"` (and any JS that seeds CIBIL).
- Acceptance criteria in their words: let min/max go; keep only one CIBIL; put **750** to the user; if they think 780 they put 780; put that in the final.
- What NOT to do: do not add min/max in this clip’s name. Do not change 780→750 as a silent visual tweak without treating it as this decision. Do not advertise “750 is best” (2204). Do not treat leftover on-screen 780 as a bug they filed — they know it is 780 and want the **default** to be 750.
- Open questions: conflict with 2134 (both dropdown and min/max; people don’t know exact score). Whether dropdown still lives. What “values he doesn’t have” refers to.
- Related recordings:
  - continues_from: `wb-rec-260815-2134`; `wb-rec-260815-2204` (750 as a **target they will game** — different use of 750). `07` in this folder.
  - continues_in: `09`; `wb-rec-260815-2213` (720–780 offer talk is later).

## Evidence index
- `audio.vtt` 04:47.510–05:12.250
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (Sibyl)
- `events.json`: no CIBIL click in this span
- `screenshots/0037.jpg`–`0040.jpg` (CIBIL 780 on screen)
- `pages.json`: CIBIL required text
- Site `pages/explore-banks.html`: `#hlc-cibil` value/placeholder 780
