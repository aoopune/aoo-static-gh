# The Zero slide fades to bare zeros — they consider removing it; one point per screen

After the praise they jump back onto Zero and watch the motion: the words around “Zero” go away until two bare zeros sit on the dark field. That is not how it was from the start. They think they should **remove this section**. They want to **see one line / one point on one screen**, then they can read it. This is the same Zero block as `03` (already said) plus the 1951 two-zeros-look-broken problem, now as a **fade**.

## Classification
- kind: motion / layout / product
- status: open | unresolved (remove vs keep a quieter Zero)
- surface: homepage / `section.home-zero` / `.home-zero-zero` vs `.home-zero-rest` + `.home-zero-body` scrub (`--hz-rest`, `--hz-body`)
- viewport: 1366×768 @2x
- speakers: Speaker A (Parth) wants the section gone / one point per screen. No one defends the fade.

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
- Copy when complete: Zero commissions. / Zero bias. + fair-view body.
- Copy when faded (what they complain about): **Zero** stacked over **Zero** only.
- Events + locators:
  - Scroll t=386557 y=6865 then **t=397358 y=3551** and **t=400490 y=1438.5** — they **jump up** the page (past Built) onto the dark Zero pin.
  - Then t=405158 y=5901.5, t=408124 y=6728, t=410093 y=7000.5 — back down toward Best / Built after the fade look.
- Screenshots:
  - `screenshots/0016.png` (t=136205, earlier in clip) — already a preview: two Zeros, no commissions/bias in frame.
  - `screenshots/0046.png` (t=386205, ~06:26) — still on Built (last frame before the jump).
  - `screenshots/0047.png` (t=396205, ~06:36) — **two white “Zero” words only** on charcoal. This is the fade. Matches “the color is not there / the whole section is fading away.”
  - `screenshots/0048.png` (t=404205, ~06:44) — they have scrolled to Best (“without spam calls…”) while repeating “from the start it was not like that / I think we should remove this section.”
  - `screenshots/0049.png`–`0052.png` — Built around you again while they say “I see one line / one point on one screen.”
- What the PNG shows at 0047: the supporting words have opacity ~0. Two identical Zeros. Easy to read as a broken page (1951 said the same when both zeros showed at once).

## What they said (faithful, complete)

**06:26.240–06:36.000** Speaker A (on the faded Zero):
> Raw ASR: “The color is not white. It is nice. The color is not there. The whole section is fading away.”
> Corrected: The color is not white — [the remaining type] **is nice.** [Then] the color **is not there.** The **whole section is fading away.**
> They like the dark/type when it is complete (`07`). They do not like the scrub that **erases** commissions / bias / body until only Zero / Zero remain.

**06:36.040–06:44.160** Speaker A (repeated):
> Raw ASR: “From the start, it was not like that.” (three times)
> Corrected: **From the start, it was not like that.** The fade-to-empty is a later motion, not the original static pair of claims.

**06:44.340–06:57.080** Speaker A:
> Raw ASR: “I think we should remove this section.” (twice)
> Corrected: same. Candidate: **remove the Zero section** (the one that is fading).

**06:58.280–07:05.440** Speaker A:
> Raw ASR: “Actually, I would say we should remove the voice chat. And fit it. It is not opening up.”
> Corrected: Actually, I would say we should **remove the zeros** [slide], **and fit it** [the facts into the story]. It is not opening up [as a useful screen].
> (“voice chat” is ASR for **zeros** / this empty slide — same family of corrections as “like brothers” → transparent.)

**07:05.980–07:17.560** Speaker A:
> Raw ASR: “I see one line. I have to read more. I see only one point on one screen. Then I can read it.”
> Corrected: **I see one line** [and] I have to read more [to get the point]. **I see only one point on one screen. Then I can read it.**
> Preference: **one point per screen**, fully readable — not a screen that fades until the point is gone, and not a screen that asks them to hunt for the rest of the sentence.

**07:19.180–07:23.220** Speaker A:
> Raw ASR: “Maybe we should remove this section. It would be unique.”
> Corrected: Maybe we should remove this section. [What remains] **would be unique** — i.e. dropping the empty Zero theatre leaves the real unique facts (`04`) cleaner.

They then click the Built accordion (`09`). The remove-Zero idea is not closed; it sits next to `03` (facts stay, poster goes) and `06` (consolidation).

## First-principles
- What must be true: motion may not **delete the words that make the zeros mean something**. A Zero without “commissions / bias” is a decoration, and 1951 already showed two zeros look broken.
- Root vs symptom: the fade (`--hz-rest` / `--hz-body` going to 0) is the mechanism. The product issue is a section that spends a viewport on a claim they said is already said (`03`) and then hides even that claim.
- Constraint: “one point per screen” is a reading rule for the refactor (`06`), not an invitation to add more screens.

## Directions they considered
- Remove this section.
- Fit the facts elsewhere.
- Prefer one readable point per screen.
- Lean: remove / don’t fade to empty. Not a vote to keep a subtler fade.

## Company / user / future thinking
- User: if they scroll and only see “Zero / Zero”, they will think the site is broken (1951) or that nothing was said.
- Company: independence still needs words (`03`). Bare zeros do not carry “we don’t take commission.”
- Future: if Zero dies as a section, the scrub CSS dies with it.

## Fix metadata
- Likely code owners: `index.html` `section.home-zero` `data-home-scrub="zero"` ~3180–3198; CSS `.js .home-zero[data-home-scrub="zero"] .home-zero-rest` / `.home-zero-body` opacity `var(--hz-rest)` / `var(--hz-body)` ~742–768; `js/shroffin-home-stance.js` (sets the CSS variables on scroll).
- Acceptance in their words: “the whole section is fading away”; “from the start it was not like that”; “I think we should remove this section”; “I see only one point on one screen, then I can read it.”
- What NOT to do: do not “fix” the fade by making commissions/bias blink back in a snappier animation. Do not leave two unlabeled zeros. Do not add more screens to satisfy “one point per screen.”
- Open questions: remove Zero entirely vs keep a static, fully worded Zero that does not scrub to empty.
- continues_from: `wb-rec-260815-1951` `02-two-zeros-scroll-up-looks-broken.md`. This clip `03`.
- continues_in: `wb-rec-260815-2009` (refactor four dark sections — Zero is one of them).

## Evidence index
- `audio.vtt` 06:26.240–07:23.220
- `events.json` scrolls t=397358, 400490, 405158
- `screenshots/0016.png`, `0047.png`, `0048.png`
- `index.html` / CSS `--hz-rest` `--hz-body`
- `js/shroffin-home-stance.js`
