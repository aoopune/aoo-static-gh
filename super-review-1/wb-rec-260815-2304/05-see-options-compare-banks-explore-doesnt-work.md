# “See options” vs Compare banks — Explore doesn’t work as the action name

Below the extra fields there is a button. ASR hears **C-Options**; on the recording the label is **See options**. They unpack the name (your items, your options), then try **Check**, then **Compare banks** (“the name of the button is compare banks”). They contrast the page title **Explore banks**: explore means “just put everything in”; **that means compare**; **explore doesn’t work** (said twice).

## Classification
- kind: issue | copy (primary submit + page title)
- status: open
- surface: `#hlc-see-options` recorded label **See options** (id still `hlc-see-options`); `h1.hlc-title` **Explore banks.**
- viewport: 1366×768 @2x
- speakers: Speaker A walks names. “How did that get derived?” / “What is explore banks?” may be Speaker B. ASR is not diarized.

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
- previous: this folder `04`
- next: this folder `06`; later `wb-rec-260815-2322` also talks Compare banks

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Recorded chrome: pill **See options** (blue outline) on the **right** of the Adjust eligibility summary while the extra block is **open** (`0024.jpg`–`0029.jpg`). They **say** “below this, there is a button” (**below** p≈0.08 — weak); on this still the pill is **beside** the extra header, not under the last extra field. When the extra block is later **collapsed** (`0034.jpg`), See options sits **bottom-right of the card**. They **talk** the button; they do **not** click it (no `submit` in `events.json`).
- Page title in the hero is off-screen in this span; it is visible later (`0057.jpg`): **Explore banks.**
- Screenshots: `0024.jpg`–`0029.jpg` (t=174200–216202) — See options visible, Adjust still open, Co-applicant still **No**, Salaried + Top-up. `0001.jpg` already showed the same button.

## What they said (RAW + corrected, both speakers)

**02:46.480–03:00.500** Speaker A (finding the control):
> Raw ASR: “And below this, there is a button. The name of the button is C-Options. C-Options. How did that get derived? Your items, your options, C-Options. Okay.”
> Corrected: “And below this, there is a button. The name of the button is **See options**. See options. How did that get derived? Your items, your options, See options.”
> **C** p≈0.21 then **-Options.** p≈0.66; second **-Options.** p≈0.98. Same family as `2240` `10` “C option.” They are etymologizing the on-screen label, not inventing a “C-Options” product name. **How did that get derived?** may be Speaker B. **items,** p≈0.05 — weak; **your options,** p≈0.86 / 0.96 is strong.

**03:04.740–03:16.840** Speaker A (replacement names):
> Raw ASR: “C-Options. Check. Compare banks. Compare banks is an option. The name of the button is compare banks. What is explore banks?”
> Corrected: “See options. **Check**. **Compare banks**. Compare banks is an option. The name of the button is **Compare banks**. What is **Explore banks**?”
> **Check.** p≈0.63. **Compare** p≈0.65 then 0.80. They put Compare banks on the **button**. **What is explore banks?** may be Speaker B. They then notice the **page** is called Explore banks.

**03:17.740–03:31.800** Speaker A (why Explore fails):
> Raw ASR: “Explore works. Explore means just put everything in. Do you understand? That means compare. Explore doesn't work. Explore doesn't work.”
> Corrected: first clause fights the rest. **works.** p≈0.09 — treat “Explore works” as ASR mush before the definition. From “Explore means **just put everything in**” + “that means **compare**” + **Explore doesn’t work** (twice; second **work.** p≈0.84): **Explore** is the wrong verb for this job. Putting everything in / seeing the set **is compare**.

This re-opens `2240` `10` (See options is not the answer; it is a submit). New here: **Compare banks** as the button name they say out loud, and a hard **no** on **Explore** as the action. They do not click Submit. They do not discuss placement (`2240` `11` already asked for below + center).

## First-principles problem
- What must be true: the control under the form should name the **job** (compare the banks you just described), not “see options” (which options?) and not “explore” (wander / dump everything in).
- Root vs symptom: confusing See options with Adjust eligibility was `2240`’s symptom. Root here: **Explore** and **See options** both fail to say **compare**.
- Constraints: button ≠ page-wander. Compare is the meaning they want.

## Directions they considered
- See options — current; they unpack and leave it.
- Check — one-word sketch, not developed.
- Compare banks — “the name of the button is compare banks.”
- Explore banks — rejected twice (“doesn’t work”); explore = just put everything in, which **is** compare, so the word Explore is the wrong label.
- Lean: Compare banks for the submit is the strongest named option in this clip. Do not treat it as already shipped just because later HTML may use that string — they were looking at **See options**.

## Company / user / future
- User: they came to compare banks, not to “explore” a dump or “see options” of an unknown kind.
- Company: Shroffin’s tool is side-by-side comparison. The h1 still says Explore. That mismatch is what they are hearing.
- Future: renaming the h1 is **not** decided here beyond “Explore doesn’t work” for the **action**. Placement remains `2240` `11`.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-see-options` button text; `h1.hlc-title` “Explore banks.”; page `<title>` “Explore banks – Shroffin.”
- Acceptance criteria in their words: there is a button below this; they reject See options’ derivation; “the name of the button is compare banks”; “Explore doesn’t work” (twice); explore means just put everything in = compare.
- What NOT to do: do not re-litigate dropdown vs submit (`2240` `10`). Do not move the button in this file’s name. Do not keep Explore as the verb for the submit.
- Open questions: does the **h1** also become Compare banks, or only the button? They asked “what is explore banks?” and killed the verb; they did not draft a new title.
- Related recordings:
  - continues_from: `wb-rec-260815-2302` (still on this form); `wb-rec-260815-2240/10` (See options misleading)
  - continues_in: `06`. Session continues_in: `wb-rec-260815-2313`. Placement: `2240` `11`. Button rename also in `2322`.

## Evidence index
- `audio.vtt` 02:46.480–03:31.800
- `events.json`: idle; no click on `#hlc-see-options`
- `screenshots/0024.jpg`–`0029.jpg` (See options pill); `0057.jpg` later shows h1 “Explore banks.”
- `pages.json` / live HTML: `#hlc-see-options`; h1 “Explore banks.”
