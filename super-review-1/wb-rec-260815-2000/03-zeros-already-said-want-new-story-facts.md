# Zero commissions / zero bias are already said — the story needs new facts

They scroll from Transparent into the Zero slide. “Zero commission, zero bias — we have already said this.” The page is now supposed to be a **story**, not a second posting of the same two zeros. The facts they still want named are: we don’t take commission, we don’t have bias for any bank, and we are being genuine. Those are the three new pieces of information — not the giant Zero type.

## Classification
- kind: product / copy / story
- status: open | unresolved (zeros as a slide vs zeros as facts)
- surface: homepage / `section.home-zero` / `#home-zero-title` / “Zero commissions. Zero bias.” + fair-view body
- viewport: 1366×768 @2x
- speakers: Speaker A (Parth) states the already-said problem and lists the three facts. No disagreement.

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
- Copy on screen (exact):
  - Display: **Zero** commissions. **Zero** bias.
  - Body: “So you get a fair view of every lender listed on our platform, with none ranked or pushed ahead of another.”
- Events + locators:
  - Scroll **01:07.623** (t=67623) y=4040 — into Zero after dismissing the Transparent body.
  - Scroll **01:10.658** (t=70658) y=4828 — deeper on Zero.
  - No click on this section in this clip. (1951 already lived here: two zeros looking broken, commissions/bias mix, fair-view wording.)
- Screenshots:
  - `screenshots/0009.png` (t=74206, ~01:14) — full Zero slide: two stacked Zero + commissions/bias + fair-view sentence. Matches “we have already said this.”
  - `screenshots/0010.png` (t=84206) — still on Zero while they list the three facts.
  - `screenshots/0016.png` (t=136205, ~02:16) — they return here; **only the two Zeros** (commissions/bias/body not in frame or faded) — later becomes `08`.
- What the PNG shows at 0009: the claim is the display type itself. The body is the 1951 fair-view sentence, not a new fact.

## What they said (faithful, complete)

**01:08.840–01:10.880** Speaker A (on Zero):
> Raw ASR: “Zero commission, zero bias.”
> Corrected: **Zero commissions, zero bias.** (on-screen plural *commissions*.)

**01:13.100–01:17.840** Speaker A:
> Raw ASR: “We have already said this. Now we are talking about a story.”
> Corrected: same. The zeros are **already said** (lead + this slide + 1951’s whole argument). From here they are talking about a **story**, not a poster of two zeros.

**01:19.760–01:32.060** Speaker A:
> Raw ASR: “So these are the three new information. We don't take commission. We don't have bias for any bank. And our banking is genuine. These are the three new information.”
> Corrected: So these are the **three new pieces of information**:
> 1. We **don’t take commission**.
> 2. We **don’t have bias for any bank**.
> 3. And we are **being genuine**.
>
> (“our banking is genuine” / later “half genuine” = **being genuine**, not “half genuine” as a product claim, and not “banking” as if Shroffin were already a bank.)

They immediately keep listing more unique facts (`04`). The “three” here is the **zero-slide cluster**, not the final count of six.

## First-principles
- What must be true: if the homepage is a story, each screen must move the story. Repeating “Zero / Zero” after the lead already covered independence is not movement.
- Root vs symptom: they are not rejecting the **facts** (no commission, no bias, genuine). They are rejecting this **form** of saying them again as giant type.
- Constraint: 1951 still owns the wording problems (which commission? mixed website/bank vs website/customer; fair-view / not pushed). This clip adds: even a perfectly worded Zero slide may be **redundant** once the story is refactored.

## Directions they considered
- Keep the three facts.
- Do not keep restating them as a Zero poster once they have been said.
- Lean: facts yes, this slide as currently used no. Exact new sentences not drafted here (1951 already tried fair-view English).

## Company / user / future thinking
- Company: independence is real (no money from banks → no reason to push a bank). That is core, not decoration.
- User: they need those facts once, in the story, in plain words — not twice as “Zero” art.
- Future: `06` will ask which of these facts travel together on one screen.

## Fix metadata
- Likely code owners: `index.html` `section.home-zero` ~3180–3198; CSS `.home-zero*` ~632–790 including `--hz-rest` / `--hz-body` scrub that later leaves bare zeros (`08`); `js/shroffin-home-stance.js` / `js/shroffin-home-boot.js`.
- Acceptance in their words: “we have already said this”; “now we are talking about a story”; the three new information are “we don’t take commission / don’t have bias for any bank / being genuine.”
- What NOT to do: do not delete the independence facts. Do not “fix” this by making the zeros bigger. Do not treat 1951’s fair-view sentence as the leftover job if the slide itself is consolidated away.
- Open questions: do the three facts stay as their own screen, or merge into the six-point story (`06`)?
- continues_from: `wb-rec-260815-1951` `02-two-zeros-scroll-up-looks-broken.md`, `03-commissions-and-bias-mixed-context.md`, `04-fair-view-sentence-ranking-cannot-be-bought.md`.
- continues_in: `04` (rest of the unique list), `06` (refactor), `08` (fade to bare zeros — they consider removing the section). `wb-rec-260815-2009` (refactor the four dark sections).

## Evidence index
- `audio.vtt` 01:08.840–01:32.060
- `events.json` scrolls t=67623, 70658
- `screenshots/0009.png`, `0010.png`, `0016.png`
- `pages.json` heading “Zero commissions. Zero bias.”
- `index.html` `section.home-zero`
