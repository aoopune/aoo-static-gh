# Light Excel behind the story — pitched, then they refuse to talk graphics

After the plus is killed, they try a quieter picture: a light Excel sheet in the background of this dark section, the standardized view seen as if from above. They talk themselves out of it. No clicking. Wording first. They do not want to make graphics. Close: “Actually, let’s not talk about this section.” Parked. Not a build ticket.

## Classification
- kind: discussion | visual
- status: dismissed
- surface: homepage / `section.home-lead` (brainstorming a background that **does not exist** on the live page)
- viewport: 1366×768 @2x
- speakers: Speaker A pitches the Excel + top-down view. Then both: cancel it, no clicking, wording over graphics. Someone (likely Speaker B, or Speaker A correcting course): “let’s not talk about this section.”

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
- Visible: still charcoal lead copy. Screenshots `0005.png`–`0008.png` are a **solid dark field**, not a spreadsheet. The Excel sheet is spoken, not shown.
- A faint grid *does* appear later on other dark blocks (Transparent in `0009.png` at t=70208; Scattered stage in `0027.png`). They do **not** name those grids in this beat. Do not treat later grids as this Excel idea shipping.
- Scroll: still around y≈1932 until they jump to Built around you at **01:13.767** (y=7200).
- Click: none in this span.

## What they said (faithful, complete)

**00:45.170–00:57.350** Speaker A:
> Raw ASR: “In the background of the section, there will be... There will be an Excel sheet. It is light in the background. And one standardized view.”
> Corrected: same. Background = light Excel sheet; the idea in front = one standardized view.

**00:58.370–01:03.630** Speaker A:
> Raw ASR: “I can see the view from the back. But it has been shown from the top. So it will be seen.”
> Corrected: they want a **top-down / overhead** look at the sheet (camera from above), not a “view from behind.” “From the back” is ASR for that angle. “So it will be seen” = the sheet would still read as a market-in-one-view.

**01:04.390–01:09.690** both:
> Raw ASR: “What is the problem? And there is the same problem. It can be cancelled.”
> Corrected: same problem as the plus (extra complexity on a section that already has no new information). The idea **can be cancelled**.

**01:10.250–01:17.530** Speaker A:
> Raw ASR: “Basically, I feel that the standardized view... And I don't want to be scammed. Their visuals are also there.”
> Corrected: they feel the standardized view is already the point. **“I don't want to be scammed” is unclear ASR** — do not turn it into a unique-point line or a trust slogan from this sentence alone. Immediate context is *visuals already being there* (the product demo they just skipped to), so the live meaning is: don’t pile another graphic on. Screenshot at ~01:10 (`0009.png`) is the Transparent slide they are leaving, not a scam warning. (Later in this clip they say “scatterization”; that word belongs to the Scattered section at ~04:11, not this line.)

**01:18.370–01:28.370** both:
> Raw ASR: “So should I put something there? No, no. No, there is no clicking. The thing is, I have paid more attention to the wording. I have paid more attention to the graphics. I don't want to make graphics.”
> Corrected:
> - “Should I put something there?” → **No. No.**
> - **No clicking** (reaffirms the plus rejection).
> - More attention has gone to **wording**; they do not want to *make* graphics for this section.
> - “I have paid more attention to the graphics” is them noticing the conversation drifted to pictures — then rejecting that drift.

**01:29.710–01:35.190** both:
> Raw ASR: “The wordings are made immediately. No, no. Actually, let's not talk about this section.”
> Corrected: copy can be written quickly; graphics should not be the job here. Then they **explicitly drop this section as a topic.** That close is binding for this clip: do not keep workshopping `.home-lead` art.

They never specify opacity, grid size, asset file, or Excel branding. They never ask to ship the background.

## First-principles
- What must be true: a spreadsheet picture is only useful if it teaches “one standardized view” without a new click. They decide even that is extra, because the product video already did the teaching.
- Root vs symptom: wanting a picture of “Excel → one view” is the same duplication as retelling the sentence. The root: this section has no new information once the hero exists.
- Constraints: no clicking; wording over new graphics; they would rather cancel than decorate. Last clip they liked font, color, and spacing — that is not permission to add a new graphic here.

## Directions they considered
- Light Excel sheet in the background + standardized view shown from above — **pitched, then cancelled.**
- Put “something” there / extra visual — **no.**
- Keep talking about this section — **no** (“let’s not talk about this section”).
- Lean: park the graphic; move on. Unique-point work continues in Built around you.

## Company / user / future thinking
- Company: “Excel” is how they *think* about the product (market as a sheet). It is not homepage art they approved today.
- User: a faint sheet might hint “this is comparable data,” but they refuse a clickable reveal and then refuse the graphic itself.
- Future: if a later pass wants atmosphere on dark sections, this clip is a sketch only — status dismissed.

## Fix metadata
- Likely code owners: **none unless a later clip revives it.** Do not add a spreadsheet background to `.home-lead` from this recording.
- Acceptance in their words: “it can be cancelled”; “no clicking”; “I don’t want to make graphics”; “let’s not talk about this section.”
- What NOT to do: do not implement the Excel overlay “because they mentioned it.” Do not add a plus (already dismissed). Do not spend a design cycle on this section after they closed the topic.
- Open questions: none for build. The metaphor may inform copy later (“one sheet / one view”) without a graphic.
- continues_from: `02-plus-button-no-friction-dismissed.md`
- continues_in: `04-seventh-unique-point-help-toward-what-you-need.md` (they leave this section for Built around you)

## Evidence index
- `audio.vtt` / `audio.txt` 00:45.170–01:35.190
- `events.json`: idle; no click; first scroll off this block t=73767 y=7200
- `screenshots/0005.png`–`0008.png` (solid dark story; no Excel); `0009.png` Transparent as they leave
- `index.html`: `.home-lead` has no background-sheet markup
