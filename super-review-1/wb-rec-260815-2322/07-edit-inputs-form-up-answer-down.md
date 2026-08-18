# Edit sits with the tabs: form goes up, answer stays down — they need that button

Next to the tab strip is **edit**. They ask what it does, click **Edit inputs**, and lock the layout: the form goes up, the table (the answer) stays down. Like Myntra, cards are not one-to-one; here the rows stay strict. They want a button so the form can come up. After the click: the view should be exactly like this.

## Classification
- kind: issue | they already have the control; they are locking the behavior
- status: open as a behavior spec (Edit must raise the form and leave results down). Control exists: `#hlc-edit-inputs`
- surface: explore-banks / `button#hlc-edit-inputs` “Edit inputs” (pencil) in the results head / Loan inputs `#hlc-inputs` / results `#hlc-results-shell`
- viewport: 1366x768 @2x
- speakers: Speaker A. Speaker B: “No, no. Do it.” / “Yes, yes, yes.” Agreement to keep this view. ASR not diarized. Language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2322`
- recording id: `bcd9788e-d24d-4ab3-8482-49a528a01c2f`
- clip: 23 of 30
- started_at: 2026-08-15T17:52:41.328Z
- ended_at: 2026-08-15T18:01:46.586Z
- duration_ms: 545258 (~9 min 5 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 149
- console: empty
- tabs: 1
- previous: `06` (edit is in that head)
- next: `08` (same stacked view; columns belong to tabs)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Pencil **edit** is to the right of Overview / Charges / Other charges (`0049.png` still on the table, 8 selected).
- **06:15.158** click `getByRole("button", { name: "Edit inputs" })` `#hlc-edit-inputs`. Focus then goes to Monthly income. Scroll **06:17.467** y=560.5.
- `0051.jpg` (t=375560): **Adjust eligibility** card is back above the table (Age 35, CIBIL 780, Salaried, Regular, See options). Tabs + **8 selected** + Apply once + Lenders table still under it. Form up, answer down.
- **06:22.123** second click `button#hlc-edit-inputs > svg`. Scroll **06:23.634** y=212, **06:27.804** y=485.
- **06:32.224** click `locator("main > div")`. `0053.jpg` (t=392187): same stacked view — Adjust eligibility, then Filters + Overview table (PNB 8.75% ₹48L).
- They do not click See options. They do not leave the page.

## What they said (faithful, complete)

**06:13.230–06:24.690** Speaker A, over the first Edit click:
> Raw ASR: “And... Here... Where the edit is... The tabs will be there. From the edit... What does the edit do? It will edit. No edit.”
> Corrected: **where the edit is, the tabs will be there** (edit lives in the tab row). What does edit do? **It will edit.** Then “No edit” — they are checking the empty/toggled state, not asking to remove the control.

**06:28.010–06:33.250** Speaker A:
> Raw ASR: “Then let it scroll by itself. Basically... Yes, let it go.”
> Corrected: after edit, **let it scroll by itself** (the page should move to show form + table). “Let it go.”

**06:33.510–06:45.610** Myntra contrast:
> Raw ASR: “If you go to Mintra or something... The cards are not same to same. The selections are... In a strict manner. You can change it here. Keep it like that.”
> Corrected: **Myntra** (ASR **Mintra**). There, product **cards are not the same**. Here, **selections are strict** (one row template). You can still **change** inputs here. **Keep it like that.**

**06:46.150–06:56.970** Form / answer / button:
> Raw ASR: “If you want to go up, you can edit it. No, no. Do it. Form goes up, answer goes down. How did it go up? I need a button. Okay.”
> Corrected: to bring the form **up**, use **edit**. B: **no, no — do it.** Rule: **form goes up, answer goes down.** How did the form come up? **They need a button** (Edit inputs — they just used it). “Okay.”

**06:58.750–07:03.810** Speaker A, B:
> Raw ASR: “And the view should be like... Exactly like this. Yes, yes, yes.”
> Corrected: the stacked view on screen after Edit (`0051.jpg`–`0053.jpg`) is the one to keep.

## First-principles problem
- What must be true: after you have results, you must still change income / property / purpose without losing the table. Edit is that door. The form belongs **above**; the comparison **below**.
- Root vs symptom: not “missing edit.” They are naming the **scroll + stack** the button must cause. Root is: one button, two regions (inputs vs answer), strict rows.
- Constraints: keep strict same-to-same rows (not Myntra cards). Tabs stay next to edit. Do not make the table jump away.

## Directions they considered
- Edit beside the tabs — **keep.**
- Let the page scroll after edit — **keep.**
- Strict table vs shopping cards — **keep the table.**
- Form up, answer down, via a button — **this is the spec.** “Exactly like this.”

## Company / user / future thinking
- User: they filled 60L Regular (`01`). Now they need to tweak eligibility without starting over. Uncle from `03` will look for a pencil, not a hidden form.
- Company: compare is the product; inputs are how you get a fair table. Edit must not feel like leaving the comparison. Matches `2313`: people already read **up to down**.
- Future: `2332` later likes the **sort** up/down on columns — a different “button.” Do not confuse that with this Edit.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-edit-inputs` in `pages/explore-banks.html` / `src/home-loan-compare.js` (reveal `#hlc-inputs`, scroll so form is above `#hlc-results-shell`).
- Acceptance in their words: “where the edit is, the tabs will be there”; “form goes up, answer goes down”; “I need a button”; “the view should be exactly like this.”
- What NOT to do: do not hide Edit. Do not turn rows into Myntra-style unequal cards. Do not put the form in a modal that covers the answer. Do not use this as the Rate sort praise in `2332`.
- Open questions: should Edit collapse the form again on second click? They clicked the svg a second time; they still praise the stacked view. Unspecified.
- Related recordings:
  - continues_from: `06-tab-switcher-chrome-four-columns.md`; session `wb-rec-260815-2313` (form importance, up-to-down)
  - continues_in: `08-five-parameters-tabs-teach-the-home-loan.md` (same stacked view). `wb-rec-260815-2332` `03-like-sort-button-up-and-down.md` notes this clip’s edit vs that clip’s sort.

## Evidence index
- `audio.vtt` 06:13.230–07:03.810
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` same span
- `events.json`: Edit t=375158; edit svg t=382123; `main > div` t=392224; scrolls 377.467 / 383.634 / 387.804
- `screenshots/0051.jpg`–`0054.jpg`
- `replay.spec.ts`: `#hlc-edit-inputs` then `button#hlc-edit-inputs > svg`
- Site: `#hlc-edit-inputs`, form `#hlc-inputs`, `#hlc-results-shell`
