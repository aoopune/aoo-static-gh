# Chrome-style tab switcher: columns change, bank name stays; keep this chrome — it’s perfect

They point at the tab switcher (“Chrome circle”), click Overview / Charges / Other charges twice, and work out the model: tabs should own the metric columns; the bank name stays the same. They worry it might look weird if the tab only covers those four columns, then decide it is not a problem. Keep Apply here. Done — it’s perfect.

## Classification
- kind: discussion | they try a narrower tab, then praise the current chrome
- status: resolved | keep as-is (this clip’s close). Next take `wb-rec-260815-2332` repeats “these tabs are the best.”
- surface: explore-banks / `.hlc-column-tabs` role=tablist (Overview · Charges · Other charges) / sticky `th#hlc-th-bank` **Lenders** / **Apply once**
- viewport: 1366x768 @2x
- speakers: Speaker A leads and clicks. Speaker B: “Yes, the tab switcher.” / “Okay.” No fight. Close is A: “Done. It’s perfect.” ASR not diarized. Language tag `mr`.

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
- previous: `05` (gap under these same buttons)
- next: `07` (edit sits next to these tabs); `wb-rec-260815-2332` `02-tabs-are-the-best-columns-belong.md`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Tab clicks (they are testing shape, not hunting a bug):
  - **04:34.823** Charges (`0035.png`) — **Charges** raised; visible body is still bank names under **Lenders** (PNB, Canara, BoB…). Metric columns of Overview (Rate / Loan / Tenure / EMI) are gone from this frame.
  - **04:36.988** Other charges (`0036.png`) — **Other charges** active; same bank-name column.
  - **04:39.868** Overview (`0037.png` / `0038.png`) — four metric columns back.
  - **04:58.088** Charges (`0039.png`) · **04:59.414** Other charges (`0040.png`) · **05:00.509** and **05:04.656** Overview (`0041.png`–`0042.png`).
- Scroll **04:53.967** y=801.5, **05:09.934** y=779 (table).
- **06:03.770** click `th#hlc-th-bank > div > button > svg:nth-of-type(2)` — accessible name **Select all visible banks**. `0049.png` (t=364172): **8 selected** next to Apply once.
- What they are drawing: Chrome-like pills on top of the table, not a second tab bar under the rows. On-page tablist has **three** buttons only. “Four columns” = Overview’s Rate, Loan amount, Tenure, EMI — not a fourth tab.

## What they said (faithful, complete)

**04:42.350–04:53.810** Speaker A, B on the control:
> Raw ASR: “Oh... Then... How should I show this? This... Chrome circle. Yes, the tab switcher. Actually, it should only be in these four columns.”
> Corrected: how to **show** the switcher. **Chrome** (browser-style tab chrome; ASR “circle”). B: **yes, the tab switcher.** Idea: the tab strip should live over **these four columns** (Overview’s Rate, Loan amount, Tenure, EMI) — not over the bank-name column.

**04:54.890–04:59.050** Speaker A:
> Raw ASR: “No. The name of the bank is the same. The tab switcher.”
> Corrected: **No** — don’t put the tab on the name. **The bank name stays the same** when you switch. The switcher is for the other columns. Matches Charges/Other charges stills: Lenders + names stay.

**05:01.610–05:21.350** Speaker A (shape):
> Raw ASR: “So... What does this overview do? What is the shape of this overview? Basically, it should be drawn like this. Means... Now this... Means it should be drawn like this. The way it looks from the top. Yes, this is the same for Chrome.”
> Corrected: what is Overview **doing**, what **shape** is it? Draw it **from the top** like **Chrome** tabs (raised pill in a well). They click Overview again while asking.

**05:21.350–05:36.430** Speaker A (narrow tab vs weird):
> Raw ASR: “But... Why does this tab only apply to columns? Then... It should be like this. I clicked here. It should be seen only here. But doesn't the design look weird? Or is it written in the middle only?”
> Corrected: why does the tab **only apply to columns** (not the whole row / not the bank name)? Click: the change should be **seen only here** (the column group). Worry: if the tab chrome sits only on the four columns (or only in the middle), **does the design look weird?**

**05:41.210–06:12.010** Keep it; Apply stays; perfect:
> Raw ASR: “No, I don't think it's a problem. Because... It will be here only. I need to teach someone to apply. Because a lot of things will come here today. Okay. There will be a feedback review. Not now. Keep it here. It will be here only. And in fact... In fact... It will be here only. It will be here only. It will be here only. Done. It's perfect.”
> Corrected: **not a problem.** The chrome **stays here**. They must **teach someone to apply** (**Apply once** in this same head — they select all so **8 selected** shows). More will land in this bar later; a **feedback review** is for later, **not now**. **Keep it here.** **Done. It’s perfect.**

They do not ask to add a fourth tab in this beat (`08` names five aspects). They do not ask to move tabs under the table (that comparison is `2332`).

## First-principles problem
- What must be true: switching a tab changes **which numbers** you see for the same banks. The institution column is the identity; it must not swap. The switcher should feel like Chrome tabs on a table, not a second page.
- Root vs symptom: they were designing whether tab chrome should **span only the four metric columns**. After clicking, they keep the **current** full head. Not a missing tab.
- Constraints: bank name same; columns belong to the tab; Apply stays in this bar; don’t look weird; review later.

## Directions they considered
1. Tab strip only over the four Overview columns; bank name outside.
2. Tab change visible only in the column area (“I clicked here”).
3. Worry it looks weird / only in the middle.
4. **Keep the current chrome** (including Apply here) — **this is the lean.** “Done. It’s perfect.”

## Company / user / future thinking
- User: one list of banks; tabs are how they learn Rate vs Charges vs Other charges without losing who the row is.
- Company: one table, column groups (`GROUPS.essentials` / `charges` / `laterCharges` in `src/home-loan-compare.js`). Sticky name column is the product.
- Future: `08` will say five aspects / five tabs as a mental picture. `2332` locks “Chrome tab + animation” over a bottom tab. Do not add a competing tab bar.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-column-tabs` / `.hlc-column-tab` in `src/home-loan-compare.js`; sticky `#hlc-th-bank`; Apply once in the results head.
- Acceptance in their words: “the name of the bank is the same”; “it should only be in these four columns” was the **idea they tested**; close is “keep it here” / “done, it’s perfect.” Next clip: “these tabs are the best.”
- What NOT to do: do not ship a bottom tab from this clip. Do not hide Apply to “simplify.” Do not make the bank name change with the tab. Do not treat “Chrome circle” as a request for a round control. Do not invent a fourth tab chip from “four columns.”
- Open questions: should the pill visually stop before Lenders, or stay full-width as now? This clip’s close is keep current. `2332` praises the Chrome tab they have.
- Related recordings:
  - continues_from: `05-gap-between-buttons-and-table.md`; session `wb-rec-260815-2313`
  - continues_in: `07-edit-inputs-form-up-answer-down.md`; `08-five-parameters-tabs-teach-the-home-loan.md`; `wb-rec-260815-2332` `02-tabs-are-the-best-columns-belong.md`

## Evidence index
- `audio.vtt` 04:42.350–06:12.010
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` same span
- `events.json`: Charges/Other charges/Overview clicks 274.823–304.656; select-all t=363770
- `screenshots/0035.png`–`0050.png`
- `replay.spec.ts`: same tab locators; `#hlc-th-bank … svg:nth-of-type(2)`
- Site: `.hlc-column-tab[data-group]`; GROUPS essentials / charges / laterCharges
