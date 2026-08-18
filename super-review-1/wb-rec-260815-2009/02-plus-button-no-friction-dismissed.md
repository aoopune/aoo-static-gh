# Plus button: floated, then killed — “no plus, no friction”

Right after “see it in the product, don’t retell it,” one co-founder tries a control: put a plus on this dark block so someone can open the standardized view from the story. The other stops it cold. There is no plus. There is no extra step. “Why are you making it so complex?” The idea dies in the room. Do not build it.

## Classification
- kind: discussion
- status: dismissed
- surface: homepage / `section.home-lead` (still on “entire market sits in one standardized view”). No plus exists on this block today.
- viewport: 1366×768 @2x
- speakers: ASR not diarized. Speaker A proposes the plus and starts “What you have to do is…”. Speaker B: “No, there is no plus button. There is no friction.” then “Oh no, why are you making it so complex?”

## Session metadata
- folder: `wb-rec-260815-2009`
- recording id: `e5ccc985-647d-47ca-bd54-67b8bb2a8319`
- clip: 6, 15 Aug 2026, Yash + Parth, `http://localhost:8765/`
- started_at: 2026-08-15T14:39:23.871Z
- ended_at: 2026-08-15T14:48:19.960Z
- duration_ms: 536089
- screenshot count: 68; event count: 166; console empty; tabs: 1
- viewport: 1366×768 @2x

## Where on the page
- URL: `http://localhost:8765/`
- Still the charcoal lead: three story lines, “Transparent” peeking under a divider. Accordion chevrons live later in `section.home-built` — they are **not** proposing those chevrons here.
- Click in this span: **none**. Last click was the story paragraph at **00:09.824**. Next click is Guides at **02:03**.
- Scroll: **00:26.799** y=1932 — they stay in the dark stack while they argue.
- Screenshots **00:32–00:43**: `0004.png` (t=28208), `0005.png` (t=36208), `0006.png` (t=44208). White nav, dark copy, **no plus, no CTA, no overlay**. The page is already a read-only story.
- `pages.json` lists no expand action on the lead. `replay.spec.ts` never clicks a plus (there isn’t one).

## What they said (faithful, complete)

**00:32.410–00:34.630** Speaker A:
> Raw ASR / corrected: “So let's put a plus button there.”
> This is the whole proposal. They do not name an icon set, accordion, lightbox, hover peek, or “learn more.”

**00:35.130–00:36.830** Speaker B:
> Raw ASR / corrected: “No, there is no plus button. There is no friction.”
> Two rules, said as facts they want to keep: no plus; no extra step between the visitor and the view they already saw.

**00:38.510–00:43.190** Speaker A starts, Speaker B cuts in:
> Raw ASR Speaker A: “What you have to do is…”
> Raw ASR Speaker B: “Oh no, why are you making it so complex?”
> Corrected: same. Speaker A was about to specify the interaction. Speaker B stops the design before it exists.

They never draw the plus. They never compromise on a chevron or hover peek for this block. The next idea (Excel in the background) is a *non-click* visual — still not a plus. That is a different pitch, also parked.

## First-principles
- What must be true: this story block must not add a click to reveal the market view. The market view was already given in the hero demo (`01`).
- Root vs symptom: the plus is a symptom of “how do we show the product again.” The root rule they just set is: the product was already shown; this section must not add a gate.
- Constraints: no extra control, no extra step. Friction here is the bug, not the missing button. Last clip already called the Built-around-you accordion cheap for hiding a point behind a click — do not invent another click here.

## Directions they considered
- Plus button to open / reveal the standardized view — **rejected**.
- Speaker A’s unfinished “what you have to do is…” — **never designed**; called too complex.
- Leave the section with no extra click — **lean**.
- Pros they implied for the plus: a way to “see” the view from the story. Cons they stated out loud: friction, complexity.

## Company / user / future thinking
- Company: they are a view, not a bank. They do not need a plus to unlock that view on a marketing slide.
- User: a plus is a chore after they already watched the table.
- Future: Speaker A immediately tries a quieter visual (Excel sheet). That is also parked. Do not revive the plus as a “simpler Excel.”

## Fix metadata
- Likely code owners: **none for a new control**. Do not add a plus, expand, or overlay on `.home-lead`.
- Acceptance in their words: “there is no plus button”; “there is no friction”; do not “make it so complex.”
- What NOT to do: do not implement the plus. Do not “compromise” with a chevron, hover peek, or click-to-open table on this dark block. Do not treat a dismissed idea as a backlog ticket.
- Open questions: none on the plus — it is dismissed in-session.
- continues_from: `01-dont-repeat-standardized-view-after-video.md` (same minute)
- continues_in: `03-excel-sheet-background-visual.md` (next idea for the same section, also parked)

## Evidence index
- `audio.vtt` / `audio.txt` 00:32.410–00:43.190
- `events.json`: idle through this span; scroll y=1932 at t=26799
- `screenshots/0004.png`–`0006.png`
- `pages.json`: no plus / expand on the lead
- `index.html`: `.home-lead` is text only
