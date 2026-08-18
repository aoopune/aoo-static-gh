# Dash vs Apple underline — dash means this is a link; stars are notes

They switch to **Charges** and argue the dotted underline. **Dash is not the footnote.** Footnotes are **indexation marking**. **Dash is linking:** if you click, it takes you there. Apple keeps **markings underlined** so you do not confuse a star with a link. They want a **star** for notes. Dash might look long, but it **says this opens into something**.

## Classification
- kind: issue | affordance / visual language
- status: open
- surface: Charges tab. Dotted underline on rupee cells (`.hlc-charge-amount`). Header buttons **Open note for mark \*** vs **Open note for mark ^**. Notes `details#hlc-charge-note-processing-fees` (and later property-check). Same dotted cue on Overview loan amount / EMI (`0046.png`).
- viewport: 1366x768 @2x
- speakers: Speaker A defines Dash vs Apple. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2355`
- recording id: `2136e699-2334-4e39-a724-eb3e92e1d3bd`
- clip: 26 of 30
- started_at: 2026-08-15T18:25:24.871Z
- ended_at: 2026-08-15T18:34:41.661Z
- duration_ms: 556790 (~9 min 17 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 200
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2341` “how to guess underline” / plus on loan amount — this clip’s new depth is **dash vs index marks**
- next: `wb-rec-260816-0004` — they keep pulling the Processing fees * note

## Where on the page
- **07:02.942** `getByRole("tab", { name: "Charges" })` (`0066.png`).
- Headers in the recording: **Processing fees \***, **Property check charges \***, **Government charges ^**. Amounts have a **dotted / dashed underline**.
- Notes block: **Processing fees (\*)**, **Property check charges (\*)**, **Government charges (^)** with Expand all (`0075.png`, `0076.png`).
- Clicks while they define Dash:
  - **07:23.160** Open note * + `details#hlc-charge-note-processing-fees > summary` (`0069.png`)
  - **08:08.974–08:17.434** hammer * / `#hlc-th-processingFee` / processing-fees summary (`0075.png`–`0083.png`) — they are comparing **header star** vs **dash under the rupee**
- Count of stars vs carets is `13`.

## What they said (faithful, complete)

**07:07.250–07:17.510** Speaker A:
> Raw ASR: “What is Dash? It is not Dash. It is indexation marking.”
> Corrected: **What is Dash?** **It is not Dash. It is indexation marking.**
> They look at * / ^ and refuse to call those Dash. **Dash** here is the **dotted underline** under amounts (CSS `text-decoration-style: dotted`). Index marks = footnotes.

**07:17.810–07:31.290** Speaker A:
> Raw ASR: “I want to tell you an extra thing about it. Dash is linking. If you click on it, it will take you there. Just notes. What is it? I want a star.”
> Corrected: same. **Dash is linking** (p≈0.96 on linking). Click-through matches `11`. **Just notes** (low p) = the * / ^ block is **notes**, not the link. **I want a star** p≈0.95 — footnote marker should be a **star**, not a dash.

**07:32.270–07:46.010** Speaker A:
> Raw ASR: “What does Apple do? They keep the markings underlined. So that they don't get confused. If you click on it, it will take you there. Dash might look long.”
> Corrected: same. Apple: **underline the markings** (the * themselves) so mark ≠ other chrome. **Dash might look long** — a long dotted line under ₹96,000.

**07:48.390–08:13.310** Speaker A, clicking the header:
> Raw ASR: “But there are a lot of them. There are a lot of marks on Apple's website. We have a lot of marks here too. I will click on it and it will take me there. But how does Dash help? Dash says that this is a link. It says that this thing opens into something. To somewhere.”
> Corrected: same on **how does Dash help?** / **this is a link** (high p). Lots of marks is okay if each has a job. Dash’s job = **this opens** (drawer), not “read the footnote.”

## First-principles problem
- What must be true: **two jobs, two signs.** A **star/caret** means “there is a note.” A **dash/underline** means “this number **opens**.” Mixing them is how people get confused — Apple’s lesson they named.
- Root vs symptom: clicking * and the Processing header is the symptom. The root is **one look (dotted rupee) doing link work while * sits beside it unexplained**.
- Constraints: keep click-to-drawer (`11`). Don’t make the star look like the link.

## Directions they considered
- Dash = **link** (opens something).
- * / index = **notes** (“I want a star”).
- Apple pattern: **underline the markings** so they are not confused with the dash.
- Lean: visual language, not new charge math. Next clip writes the processing-fee **sentence**.

## Company / user / future thinking
- User: on Charges, every rupee looks clickable **and** every column has a mark. They need to know which click is “explain this bank” vs “explain this column.”
- Company: don’t lie (`10`) includes not dressing a footnote as a link.
- Future: `13` counts three indexes and two stars — don’t collapse that count into this definition.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-charge-amount` dotted underline in `css/shroffin-explore-banks.css`; `footnoteRefHtml` / `Open note for mark *` buttons; notes `details#hlc-charge-note-*`.
- Acceptance criteria in their words: “It is not Dash. It is indexation marking.” “Dash is linking.” “I want a star.” “Apple… keep the markings underlined.” “Dash says that this is a link.” “this thing opens into something.”
- What NOT to do: do not underline the star with the same dotted rupee style if that recreates the confusion. Do not remove the amount dash (they said it **helps** as a link cue). Do not treat this as processing-fee copy (`wb-rec-260816-0004`).
- Open questions: Apple-style underline on * / ^ vs keep * as buttons. Whether Overview loan/EMI dash must match Charges dash exactly.
- Related recordings:
  - continues_from: `11`; `wb-rec-260815-2341` underline cue
  - continues_in: `13`; `wb-rec-260816-0004` `01`

## Evidence index
- `audio.vtt` 07:07.250–08:13.310
- `audio.json`: Dash; indexation marking; linking; star p≈0.95; Apple; underlined; this is a link p≈0.98
- `events.json`: Charges tab t=422942; processing note t=443160; header/note storm t=488974–497434
- `screenshots/0066.png`, `0069.png`, `0075.png`–`0083.png`
- `css/shroffin-explore-banks.css` `.hlc-charge-amount` `text-decoration-style: dotted`
- `replay.spec.ts`: Charges tab; `#hlc-th-processingFee`; `details#hlc-charge-note-processing-fees`
