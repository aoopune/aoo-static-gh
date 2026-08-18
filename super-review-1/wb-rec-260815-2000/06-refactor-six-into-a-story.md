# Refactor the six points into a story — consolidation, not a longer page

If they dump all six unique facts in one place, it gets heavy. So the six must become a **story**, refactored: a slide of two, a slide of three, a slide of the last point — or some other split. One screen must not take too many words. They ask how many **minimum** words each point needs, which points go together, and how they flow. The goal of the entire activity is **consolidation**. Reduce sections. Do not lengthen the homepage.

## Classification
- kind: product / story / information architecture
- status: open | unresolved (grouping sketched, not locked)
- surface: whole homepage dark story band (lead / Transparent / Zero / Best) — not a single widget
- viewport: 1366×768 @2x
- speakers: Speaker A (Parth) sets the refactor. Speaker B (Yash) — **“Yes, yes.”** at 04:38.070 on “one screen does not take too many words.”

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
- They are not clicking a control. They are looking at the **end of the dark band** and talking over it.
- Events + locators (scroll-only):
  - t=231190 y=6263.5 then t=232290 y=5852 — Best / into Built around you peeking (`0028.png` later).
  - Long idle 03:52–05:08 on that lower band while they specify the refactor.
  - t=274625 y=6159 (~04:34) — still there for “one screen / minimum words.”
- Screenshots:
  - `screenshots/0028.png` (t=230205, ~03:50) — Best line “sell, or pushy notifications.” and **Built around you.** starting below. They are at the seam.
  - `screenshots/0029.png`–`0033.png` (t=238205–272205) — parked on Best / that seam during “make a story / slide of two / of three / last point.”
  - `screenshots/0034.png`–`0037.png` (t=282205–308205) — still there for minimum words / which points go together / consolidation.
- What the PNG shows: they are **not** looking at a sixth invented section. They are staring at the current four-slide band and describing a different cut of the same facts.

## What they said (faithful, complete)

**03:54.890–04:01.590** Speaker A:
> Raw ASR: “If we put everything in one place. Then it becomes heavy onwards. So it is not a separate section.”
> Corrected: If we put everything in one place, then it becomes **heavy onwards.** So [uniqueness] is **not** [solved by] a separate section [that just lists all six].

**04:04.170–04:23.070** Speaker A:
> Raw ASR: “Now we will tell you six things in total. So what we have to do is. We have to make a story in those six. And we have to refactor it. Make a slide of these two. Make a slide of these three. And make a slide of the last point. Something like this.”
> Corrected: Now we will tell **six things in total.** What we have to do is **make a story in those six**, and **refactor** it. Example split:
> - a slide of **these two**
> - a slide of **these three**
> - a slide of **the last point**
> “Something like this” = the split is an illustration, not a locked 2+3+1.

**04:23.730–04:31.610** Speaker A:
> Raw ASR: “The analogy of four sections. And the analogy of six points. How many sections do we divide? We have to refactor the story.”
> Corrected: [We have] the **analogy of four sections** and the **analogy of six points.** How many sections do we divide [into]? We have to **refactor the story.**
> Four current screens vs six facts — the numbers do not have to stay 4.

**04:33.790–04:39.410** both:
> Raw ASR: “Basically, one screen does not take too many words. Yes, yes.”
> Corrected: same. Speaker B agrees.

**04:41.450–04:58.130** Speaker A:
> Raw ASR: “Six points. And how many minimum words are needed for each point? And which points go together? And how do these flow into each other? Without making this home page long. By reducing section.”
> Corrected: **Six points.** And how many **minimum words** are needed for each point? And **which points go together?** And how do these **flow into each other?** **Without making this homepage long.** By **reducing** [the] section[s].

**04:58.850–05:07.130** Speaker A:
> Raw ASR: “The goal of entire activity is consolidation. Whatever you are making, we have to increase it. We have to reduce it.”
> Corrected: The goal of the **entire activity is consolidation.** Whatever you are making, [don’t] increase it — we have to **reduce** it.
> (“we have to increase it” then immediately “we have to reduce it” is ASR contradiction; the surrounding sentences are all reduce / consolidate / not long.)

They then glance at Built around you (`07` praise, `09` accordion). The refactor of the **six** is not finished in this clip. 2009 continues it with a seventh point and “refactor these four dark sections.”

## First-principles
- What must be true: six facts can live on fewer screens if facts that are **one idea** share a screen, and each screen uses the **minimum words** that still say the fact.
- Root vs symptom: extra sections are the symptom. The cause is six facts mapped 1:1 onto slides (or worse, empty slides like Transparent in the middle).
- Constraint: one screen ≠ too many words. Homepage must not get longer. Consolidation is the success test, not “more storytelling chrome.”

## Directions they considered
- Not one mega-section of all six (heavy).
- Example: 2-point slide + 3-point slide + last-point slide.
- Open: how many sections after the split; which facts pair; min words per point; flow.
- Lean: 2 / 3 / 1 is a sketch. They explicitly ask “how many sections do we divide?”

## Company / user / future thinking
- User: should feel one story, not a deck of posters.
- Company: this is the homework for the homepage rebuild — not a polish pass on Zero type.
- Future: 2009 adds Help, then says pick unique + supplementary from Built around you and refactor the **four dark sections** into n sections for **seven** points, few words, polished English, flow.

## Fix metadata
- Likely code owners: `index.html` `.home-story-dark` and its four `section`s ~3150–3213; sticky/scrub CSS for `.home-lead-track`, `.home-clear-track`, `.home-zero-track`, `.home-best-track`; `js/shroffin-home-stance.js`.
- Acceptance in their words: “make a story in those six”; “refactor it”; “slide of these two / these three / the last point”; “one screen does not take too many words”; “minimum words… which points go together… flow into each other”; “without making this home page long”; “reducing section”; “the goal of the entire activity is consolidation.”
- What NOT to do: do not add sections. Do not write long paragraphs per point. Do not lock 2+3+1 as if they chose it. Do not start the 2009 Help/scattered/footer work in this folder.
- Open questions: pairing of the six; word minimums; whether Transparent/Zero survive as screens at all (`01`, `03`, `08`).
- continues_from: `05`, `04`, `wb-rec-260815-1951` `08-story-unique-info-vs-sentence-formation.md` (story was coherent, sentences were not).
- continues_in: `wb-rec-260815-2009` (seventh unique Help; refactor four dark sections; few words; flow).

## Evidence index
- `audio.vtt` 03:54.890–05:07.130
- `events.json` scrolls t=231190, 232290, 274625
- `screenshots/0028.png`–`0037.png`
- `index.html` `.home-story-dark`
