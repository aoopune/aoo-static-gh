# All is not a filter — Public and Private both ticked by default

They poke Bank type for a long time. The control is All + Public + Private (All selected by default; Public/Private stacked beside it). They want two checkboxes, **both on by default**. All is not a third filter. Same rule for Rate (Floating / Fixed) and Facility (Term loan / Overdraft): no extra exclusive button; both options exist; default is the inclusive state. Amazon-style checkboxes feel easy; this All control confuses them.

## Classification
- kind: issue | filter UX
- status: open (as recorded). Current `explore-banks.html` already uses Public/Private checkboxes both `checked` and **no All** — Bank type may be partial vs later code; Rate still defaults Floating-only, Facility Term-loan-only.
- surface: `aside#hlc-filters-panel` / Bank type All·Public·Private / Rate Floating·Fixed / Facility Term loan·Overdraft
- viewport: 1366×768 @2x (desktop; filters are a left rail, not a sheet)
- speakers: Speaker A states the model and repeats it. Speaker B: “All the checkboxes. Yes. It is very easy.”

## Session metadata
- folder: `wb-rec-260815-2106`
- recording id: `2c589daf-48f1-4304-8831-5a9870fea870`
- clip: 8 of 30
- started_at: 2026-08-15T15:36:22.615Z
- ended_at: 2026-08-15T15:45:24.586Z
- duration_ms: 541971 (~9 min 2 s)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 202
- console: empty (`console.json` is `[]`)
- tabs: 1
- previous: `wb-rec-260815-2018` — homepage; no filters
- next: `wb-rec-260815-2116` still clicks **All** once at 00:07, then moves to input sentences — do not treat 2116 as the home of this filter model

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Recorded Bank type: large **All** (selected, white) beside stacked **Public** / **Private**. Exclusive: clicking Public or Private leaves All. Empty table when a click leaves no banks (`0018.jpg` — Private selected, table body blank).
- Rate: Floating selected; Fixed “About 1–2% higher.”
- Facility: Term loan selected; Overdraft “About 0.15–1% higher.”
- Clicks (Bank type, then Rate, then Facility):
  - **01:42.760** Public (shot 15)
  - **01:44.059** Private (shot 16)
  - **01:46.688** Public (shot 17)
  - **01:47.238** Private (shot 18) — table empty in `0018.jpg`
  - **01:53.355** All (shot 19)
  - **01:55.274** Public · **01:56.286** Private
  - **01:59.540** Public · **02:00.267** Private
  - **02:09.455** All (shot 24)
  - **02:26.232** Public · **02:27.338** All
  - **02:57.217** All · **02:58.678** Public · **02:59.550** Private
  - **03:05.347** All (shot 34)
  - **03:12.007** Fixed “About 1–2% higher” (shot 35) — rates jump
  - **03:12.864** Floating (shot 36)
  - **03:18.044** Term loan (shot 37)
  - **03:19.305** Overdraft (shot 38) `fieldset:nth-of-type(5)` button 2; `0038.png` shows Overdraft selected, banks still listed
  - **03:20.602** Term loan (shot 39)
- Scroll **02:23.277** y=545.5; **03:07.699** y=902 (down the filter stack); **03:22.696** y=461; **03:25.598** y=573.5.
- Screenshots to keep: `0015.jpg`–`0027.jpg`, `0031.jpg`–`0039.png` (All vs Public vs Private; Fixed vs Floating; Overdraft vs Term loan).

## What they said (faithful, complete)

**01:46.220–01:48.580** Speaker A:
> Raw ASR: “Do you know how to do this? There are two buttons. Public and private.”
> Corrected: same. The real filters are **two**: Public and Private.

**01:51.960–01:57.000** Speaker A:
> Raw ASR: “What is this? You have given an all button, a public button and a private button.”
> Corrected: same. Three controls where two will do.

**01:57.580–02:14.840** Speaker A:
> Raw ASR: “Instead, Public and private. Both are ticked by default. All is not a separate filter. Both of these filters are chosen by default.”
> Corrected: same. **Both ticked by default. All is not a separate filter.** (`All` at 02:07 p≈0.07 — weak, but they click All repeatedly and repeat the line at 03:04.)

**02:18.420–02:21.420** Speaker A:
> Raw ASR: “What is the difference? Why do we need a button?”
> Corrected: why do we need **[All]** as a button?

**02:23.320–02:25.020** Speaker A:
> Raw ASR: “This is Apple's button.”
> Corrected: same — iOS-style segmented control, not checkboxes.

**02:27.220–02:38.680** Speaker A (ASR repeats the same line three times):
> Raw ASR: “I feel the same when I press and hold one button.” (×3)
> Corrected: exclusive hold — press one, that one stays the only selection. Loop is ASR, not three new ideas.

**02:38.680–02:47.280** Speaker A:
> Raw ASR: “I have seen this. I have seen this on Amazon. I have seen this everywhere. But this button... I am a little confused. What is this button?”
> Corrected: same. Amazon (and everywhere) = checkboxes. **This** All button is the confusing one.

**02:48.580–02:52.400** Speaker B then A:
> Raw ASR: “All the checkboxes. Yes. It is very easy.”
> Corrected: **[use] checkboxes.** Yes. It is very easy.

**02:57.620–03:13.120** Speaker A:
> Raw ASR: “Instead, public and private. Both are selected by default. All. All is not a separate selection. And the weight is also the same. Floating is fixed. Floating is selected by default. Why do we need a separate button?”
> Corrected: repeat the Bank type rule. **And the Rate is also the same** (ASR **weight ≈ rate**, `weight` p≈0.59; next words are Floating / Fixed). Floating **and** Fixed. Floating is selected by default today. Why a separate exclusive button?
> They do **not** want Rate to keep Floating-only as the only allowed state later — see `10` (both selected by default, with trade-offs written).

**03:17.560–03:23.600** Speaker A:
> Raw ASR: “And the same here. Then, it becomes uniform.”
> Corrected: **same** on Facility (they just clicked Term loan / Overdraft). Then the three groups match.

They never ask to keep All as a convenience that selects both. All is the thing to remove.

## First-principles problem
- What must be true: Public and Private are independent yes/no filters. Default = show both (the full market). “All” is only the state when both are on — not a third category of bank.
- Root vs symptom: extra All button and exclusive segmented clicks. Root: Bank type / Rate / Facility were built as **one-of-N pills** instead of **many-of-N checkboxes**.
- Constraints: default inclusive (both bank types on). Same control language across Bank type, Rate, Facility (“uniform”). Checkboxes like Amazon, not an Apple segment they have to reverse-engineer.

## Directions they considered
1. Drop All. Public + Private checkboxes, both ticked by default.
2. Same pattern on Rate (Floating / Fixed) and Facility (Term loan / Overdraft).
3. Checkboxes, not the All pill.
- Lean: this is a real UX bug, not taste. They spend ~90 s proving All vs Public vs Private, including an empty table.

## Company / user / future thinking
- User: should not have to learn that All ≠ Public+Private, or that clicking Public hides Private. Default should be the whole market.
- Company: Shroffin shows every bank; exclusive Bank type fights that. Public vs Private **trade-offs** belong in the i-copy (`10`), not in forcing a pick.
- Future: `2116` still clicks All once at the start, then moves to input sentences — recording-time UI still had All.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-bank-type-label` / `.hlc-bank-type-checks` (`data-product-filter="bankPublic"` / `bankPrivate`), `#hlc-rate-label` (`rateFloating` / `fixedRate`), `#hlc-facility-label` (`facilityTermLoan` / `overdraft`), plus filter JS that treats All as a third state.
- As recorded: All exists and is default. As of current source: Bank type is already two checkboxes both `checked` (no All). Rate: Floating `checked`, Fixed not. Facility: Term loan `checked`, Overdraft not. Finish the **uniform checkbox + both-on default** they asked for on Rate and Facility if product agrees; do not reintroduce All.
- Acceptance criteria in their words: “Public and private. Both are ticked by default.” “All is not a separate filter.” “All the checkboxes… it is very easy.” “The same here” (Facility). “It becomes uniform.”
- What NOT to do: do not keep All as a third button that deselects Public/Private. Do not make Public and Private mutually exclusive. Do not “fix” by only restyling the All pill. Do not empty the table when both are off without a clear empty state they asked for (they treated empty as a symptom of the exclusive control).
- Open questions: for Rate/Facility, `10` wants **both selected by default** plus trade-off text — that conflicts with today’s “Floating only / Term loan only” default. Resolve in `10`; this file owns the control type (checkboxes, no All).
- Related recordings:
  - continues_from: `04`
  - continues_in: `06` gaps between these same filter blocks; `10` trade-off copy; `wb-rec-260815-2116` leftover All click then input copy

## Evidence index
- `audio.vtt` 01:46.220–03:23.600
- `audio.json` “weight” p≈0.59 (→ rate); “Floating” p≈0.78
- `events.json` Public/Private/All clicks t=102760–185347; Fixed/Floating t=192007 / 192864; Term loan / Overdraft t=198044 / 199305 / 200602
- `screenshots/0015.jpg`–`0027.jpg`, `0031.jpg`–`0039.png` (`0018.jpg` empty table; `0038.png` Overdraft selected)
- `replay.spec.ts` `#hlc-filters-panel` Bank type / Rate / Facility buttons
- Site: `pages/explore-banks.html` filter fieldsets
