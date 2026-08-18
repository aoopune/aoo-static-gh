# “See options” is the wrong name — it is a form submit, not a dropdown, and not “See banks”

They click **See options** and then the **Adjust eligibility** chevron and get confused about what opens what. See options is **misleading**: one of them thought the control was not openable; the other thought there was no dropdown, then found you **can** open extra fields with the Adjust eligibility control. “See options” does not say what options; **See banks** would mean something else; **Submit** is what the button actually is (`type="submit"`). “See options is definitely not the answer.”

## Classification
- kind: issue | copy + UX (primary button vs extra-fields disclosure)
- status: open
- surface: explore-banks / `#hlc-see-options` (recorded label **See options**, `type="submit"`) and `details#hlc-form-more` summary **Adjust eligibility**. Today the same id may read **Compare banks** — this clip judged **See options**.
- viewport: 1366x768 @2x
- speakers: both. Speaker A: button misleading / See options not a good answer. Speaker B: “Is there a drop-down there?” / “What is the mistake?” / “Yes, it is a form submit.” ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2240`
- recording id: `a82e9a9f-c11f-4376-881d-25a436d5e6f5`
- clip: 18 of 30
- started_at: 2026-08-15T17:10:04.687Z
- ended_at: 2026-08-15T17:19:10.273Z
- duration_ms: 545586 (~9 min 6 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 67
- event count: 127
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2231`
- next: `wb-rec-260815-2249`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Two adjacent controls on the card footer:
  - **Adjust eligibility** (disclosure) — extra fields: Existing EMIs, credit cards, FOIR, tenure, co-applicant.
  - **See options** — submit the Loan inputs form, jump to bank rows.
- Click/focus (speech ↔ events):
  - **06:18.089** click `#hlc-see-options` → **submit** `#hlc-inputs` (`screenshot_id` 43 = `0043.jpg`). Native tooltip on Age: **“Please fill in this field.”** even though Age shows 35.
  - **06:19.909** click `#hlc-age`; **06:21.508** / **06:23.488** fill `"35"` (final).
  - **06:23.489** click See options again → submit (`0045.jpg`) — page scrolls to the bank table (Canara, City Union, PNB, Bank of Baroda, Bank of India, Indian Overseas…); form fields leave the viewport; Adjust eligibility + See options stay as a thin bar above the table.
  - **06:25.048** / **06:26.513** scroll y=633.5 then y=224; **06:26.609** click See options a third time (`0046.jpg`).
  - **06:30.395** click `details#hlc-form-more > summary` (`0047.jpg`) — **Adjust eligibility opens**: Existing EMIs ₹0, card limits ₹0, “About **10%** counts as monthly load,” FOIR **55% (default)**, tenure **20** years, co-applicant **No**. See options stays on the **right**, level with the summary.
  - **06:42.822** click summary again (`0049.jpg`) — collapse (they are testing “is there a dropdown”).
  - **07:04.777** click See options (`0052.jpg`) — table again (scroll y=633.5 then back to y=47); they are comparing the two controls.
- Screenshots to use: `0043.jpg` (Age validation), `0045.jpg`/`0052.jpg` (table after submit), `0047.jpg` (dropdown open), `0049.jpg` (closed).

## What they said (faithful, complete)

**06:18.080–06:27.560** as they click See options / Age:
> Raw ASR: “C option. What is C option? Okay. Then what is this?”
> Corrected: “**See options.** What is See options? Okay. Then what is this?”
> ASR: **C option ≈ See options** (`C` ~0.44 at the exact click t=378089). “What is C option?” lands **after** the second/third click, once the viewport has jumped to the table (`0045.jpg`). “Then what is this?” is as they look at / click Adjust eligibility (06:30).

**06:30.680–06:48.540** (open Adjust eligibility; argue dropdown):
> Raw ASR: “You are assuming that your existing exists. It is written down. Then this button is misleading. This button is misleading. I thought this button is not openable. But there is a drop-down there. Is there a drop-down there? No, no, no. So should I do a demo or a drop-down? No, no, no.”
> Corrected: “You are assuming that your **existing [EMIs / extra fields] exist**. It is written down.” (the helper line lists Existing EMIs, credit cards, … as if those things are in play; `written` ~0.007). “Then this button is misleading… I thought this button is not openable (`openable.` ~0.07). But there is a drop-down there.”
> They argue: is Adjust eligibility a **dropdown** or should it be a **demo**? One voice says no dropdown; they still opened one at 06:30.

**06:50.580–07:05.980**:
> Raw ASR: “This is given in the C options line. If you open it in the center... No, there is no drop-down. What kind of mistake is this? What is the mistake? No, there is a drop-down. You can open a drop-down with this button.”
> Corrected: “This is given in the **See options** line. If you open it in the center…” One person denies the dropdown; the other: “No, there **is** a drop-down. You can open a drop-down with this button.” (the Adjust eligibility summary). “Mistake” = the two of them disagreeing about what the chrome is, not a console error (`console.json` is `[]`).

**07:07.860–07:24.760** (the two labels are different jobs):
> Raw ASR: “But as far as C options are concerned... Adjust eligibility... and C options. I don't know what options. C options is not a good answer. C banks. Which means both of them are very different.”
> Corrected: “As far as **See options** are concerned… **Adjust eligibility** and **See options**. I don’t know what options. See options is not a good answer. **See banks.** Which means both of them are very different.”
> **See options** does not say *which* options (banks? extra fields?). **See banks** would be a different promise. Adjust eligibility ≠ See options.

**07:26.760–07:48.760**:
> Raw ASR: “C options. Submit. But this is not... Submit is like... Submit is for form submits. Yes, it is a form submit. C options is definitely not the answer.”
> Corrected: “See options. Submit… Submit is for form submits. Yes, it is a form submit. See options is definitely not the answer.”
> They notice the button **is** a submit (`events.json` `kind: submit` on `#hlc-inputs`; target `type="submit"`). The **word** See options does not match that job. Speaker B: “Yes, it is a form submit.”

**07:53.260** “Form.” — leftover, not a new proposal.

Pros: Adjust eligibility really does open extra fields (once they find it). Cons: See options is vague; feels un-openable; collides with the dropdown; is actually Submit; See banks would be a different button. Brainstorm: demo vs dropdown; See banks as a contrast, not a chosen label.

## First-principles problem
- What must be true: the **submit** that shows bank rows and the **disclosure** that shows extra inputs must not share a mental model. Each name must match its job. “Options” is doing both jobs and therefore neither.
- Root vs symptom: native Age “Please fill in this field” on a filled 35 is a **symptom** of submit validation (`0043.jpg`), not the copy issue. Root: **See options** labels a submit as if it were a reveal, next to a real reveal (Adjust eligibility). After a successful submit the viewport *is* the table (`0045.jpg`) — so “options” also collides with “banks.”
- Constraints they implied: don’t call it See options; don’t confuse it with See banks; don’t pretend it isn’t a form submit; dropdown vs demo is still open (`11` keeps the extra-fields control and **moves** See options).

## Directions they considered
- See options is misleading / not openable (as a reveal).
- Extra fields **are** a dropdown (demonstrated).
- Demo vs dropdown — asked, not decided.
- See banks ≠ See options (different).
- Call it what it is: form submit. See options is “definitely not the answer.”
- Lean: rename/rethink See options; do not delete submit. Layout move is `11`.

## Company / user / future thinking
- User: clicks See options expecting to *see options* (maybe extra fields, maybe banks), hits validation or a table jump, then discovers a second control that actually opens fields. That is two products in one footer.
- Company: Super-English (`09`) plus honest verbs. A comparison tool’s primary button should say the compare/submit job; extra parameters should say they are extra (`11`).
- Future: today’s HTML **Compare banks** may already be a later rename — this clip still rejected **See options** and distinguished **See banks**. Do not assume Compare banks was approved here. 2249 continues extra fields as **columns**.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-see-options` label/role in `pages/explore-banks.html`; `details#hlc-form-more` (recorded). Keep submit behavior unless a later clip says otherwise.
- Acceptance criteria in their words: this button is misleading; I don’t know what options; See options is not a good answer / definitely not the answer; See banks would be different; it is a form submit.
- What NOT to do: do not merge See options and Adjust eligibility into one control. Do not treat the Age HTML5 tooltip as the main bug. Do not ship “See banks” without a later decision — they used it as a **contrast**, not a pick. Do not ignore that current copy may already be “Compare banks.”
- Open questions: demo vs dropdown for extra fields. Final submit label. Age validation firing on 35 — mentioned only as what happened when they clicked (“Then what is this?”); they did not file it as its own issue.
- Related recordings:
  - continues_from: this clip `09` (Adjust eligibility wording).
  - continues_in: this clip `11` (move See options below Adjust eligibility, centered); `wb-rec-260815-2249` (columns vs availability / mandatory fields).

## Evidence index
- `audio.vtt` 06:18.080–07:48.760
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (C option, C banks)
- `events.json`: See options clicks t=378089, 383489, 386609, 424777 + submits; Age fill `"35"`; form-more summary clicks t=390395, 402822; scrolls y=633.5 / 224 / 182.5 / 134.5 then 633.5 / 332.5 / 104 / 47
- `screenshots/0043.jpg`–`0052.jpg` (esp. `0043`, `0045`, `0047`, `0049`, `0052`)
- `replay.spec.ts`: `#hlc-see-options` click; `#hlc-age` fill `35`; `details#hlc-form-more` clicks
- Site: `#hlc-see-options`, `#hlc-form-more` (live submit label may now be **Compare banks**)
