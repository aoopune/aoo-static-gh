# Four lead points are good — four texts are heavy, and Transparent sits in the middle

The four lead lines are the right points. Putting them as four full texts is already a concern. Then Transparent sits in the **middle** of the dark band, so even “transparent like never before” is a traffic jam. They now count **six unique points so far**. The first half of the homepage is **not** where uniqueness lives. The second half has to **accommodate** those six without making the homepage long.

## Classification
- kind: product / information architecture
- status: open | unresolved
- surface: homepage / `section.home-lead` (four lines) + `section.home-clear` sitting between lead and Zero/Best
- viewport: 1366×768 @2x
- speakers: Speaker A (Parth) diagnoses. No disagreement.

## Session metadata
- folder: `wb-rec-260815-2000`
- recording id: `6be15ad6-ecbe-44e0-8c46-58dd985b7dca`
- started_at: 2026-08-15T14:30:27.912Z
- ended_at: 2026-08-15T14:39:10.279Z
- duration_ms: 522367
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- events_count: 172
- screenshots_count: 63
- console_count: 0
- tabs_count: 1
- pages_count: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- Copy on screen — four lead texts (exact):
  1. We completely re-engineered your home loan journey.
  2. Now, the entire market sits in one standardized view, built so you can cross-examine rates, rules, and fine print at a glance.
  3. You can look through every lender before you give your phone number or email.
  4. You pick your banks, apply once to all of them, and they compete for you.
- Then the middle slide: Transparent, like never before. (`01`)
- Events + locators:
  - After the apply-once click-scrolls of `04`, they sit on the lead: t=197891 y=2048.5, t=200226 y=2479.5.
  - Scroll t=211691 y=4332 (~03:31) — down toward Transparent / Zero while saying “six unique points.”
  - Scroll t=218325 y=5620 — deeper (Best / end of dark band).
- Screenshots:
  - `screenshots/0021.png` (t=170205), `0022.png`, `0023.png` — four lead lines, 1 and 4 bright, 2–3 dim (scrub).
  - `screenshots/0024.png` (t=196205, ~03:16) — same four texts during “these four points are good / four texts / concern.”
  - `screenshots/0025.png` (t=204205) — still on that problem.
  - `screenshots/0026.png` (t=212205) — they have moved down (“six unique points”).
  - `screenshots/0027.png` (t=220205) — second half of the band.
- What the PNG shows: four paragraphs sharing one viewport. Transparent is not in this frame — it is the **next** sticky screen, i.e. physically in the middle of the four-section dark story (lead → **Transparent** → Zero → Best).

## What they said (faithful, complete)

**03:11.750–03:18.250** Speaker A:
> Raw ASR: “Look at the net. These four points are good. But if you give these four texts. It can be a concern.”
> Corrected: **Look at that.** These **four points are good.** But if you give these **four texts**, it can be a concern.
> Meaning: the **ideas** pass; the **amount of writing** as four blocks does not.

**03:19.470–03:27.150** Speaker A:
> Raw ASR: “But the transparent is in the middle. Even if we tell everyone that we are transparent. Like never before. We will look for it.”
> Corrected: But **Transparent is in the middle.** Even if we tell everyone we are transparent like never before, [people] will look for it [and it still sits in the wrong place / still costs a screen].
> The problem they name is **position**, not only emptiness (`01`). A self-explanatory slide in the **middle** of the story breaks the flow between the four good points and the later unique facts.

**03:30.570–03:43.770** Speaker A:
> Raw ASR: “These are the three points. We are really unique. So now we have six unique points. And we are not unique in the first half. And we can accommodate the second half.”
> Corrected: These [later] points are where we are **really unique.** So now we have **six unique points.** And we are **not unique in the first half.** And we can **accommodate** [them in] the second half.

**03:44.430–03:52.330** Speaker A:
> Raw ASR: “We have six unique points so far. But we are not accommodating the top. Basically, this is how it was made.”
> Corrected: We have six unique points so far. But we are **not accommodating [them at] the top.** Basically, this is how it was made (the page was built as stacked slides, not as a home for six facts).

Then `06` starts: if we put everything in one place it becomes heavy.

## First-principles
- What must be true: uniqueness has to be **findable**. If the first half is generic (re-engineered / big type / Transparent) and the six facts are scattered later, a skimmer never gets the company.
- Root vs symptom: “four texts are heavy” is not “delete the four points.” It is **volume**. “Transparent in the middle” is **sequence**.
- Constraint: do not make the homepage long to “accommodate” six points (`06` says consolidation). Do not stuff all six into the lead and recreate the heaviness they just named.

## Directions they considered
- Keep the four points.
- Do not keep them as four heavy texts.
- Move or remove Transparent from the middle (`01` already offered drop / later / different).
- Put uniqueness where the first half currently is empty of it — without a longer page.
- Lean: diagnosis only. Grouping is `06`.

## Company / user / future thinking
- User: first screens should already feel unlike every other loan site. Right now uniqueness starts too late.
- Company: six points is the working set “so far” (2009 adds Help as seventh).
- Future: “this is how it was made” is an admission the current architecture (four dark slides) was a build path, not the story.

## Fix metadata
- Likely code owners: `index.html` `.home-story-dark` wrapping lead → clear → zero → best ~3150–3213; `.home-lead-stack` four `.home-lead-line`; CSS `.home-lead-track` `min-height: 185svh`; `.home-clear-track` `min-height: 175svh`.
- Acceptance in their words: “these four points are good”; “four texts… can be a concern”; “the transparent is in the middle”; “six unique points so far”; “not unique in the first half”; “accommodate the second half” / “not accommodating the top”; “without making this home page long” (`06`).
- What NOT to do: do not add a fifth lead paragraph. Do not leave Transparent as a full sticky screen in the middle if the four points stay. Do not solve heaviness by shrinking type only.
- Open questions: which of the four lead texts are title vs unique fact (1951 treated “re-engineered” as title).
- continues_from: `wb-rec-260815-1951` `07-four-story-sections-trim.md`. `01` (Transparent as empty slide). `04` (what the six are).
- continues_in: `06`. `wb-rec-260815-2009` (four dark sections refactored for seven points).

## Evidence index
- `audio.vtt` 03:11.750–03:52.330
- `events.json` scrolls t=197891, 200226, 211691, 218325
- `screenshots/0021.png`–`0027.png`
- `pages.json` home-lead + Transparent regions
- `index.html` `.home-story-dark` child order
