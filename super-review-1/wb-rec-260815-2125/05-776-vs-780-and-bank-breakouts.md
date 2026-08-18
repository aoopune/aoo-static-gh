# 776 is not 780 — bank CIBIL breakouts are not parallel

After the pause they work a second example: **I have 776**; if you **show the 780 offer**, I will **negotiate with the offer**. The range camp wants **assurance** that **ten-point windows** are close enough. The exact camp: **don’t show such a wide band** — **show 776 or 778**. Then the mapping problem: **where is the breakout?** One bank **800–810**, another **850–812**. Banks **don’t do windows in parallel.** Not everyone shares **810**. A single dropdown window cannot match every lender’s cut.

## Classification
- kind: issue | product / rate display vs lender-specific CIBIL bands
- status: open
- surface: Explore banks / `#hlc-cibil` + Overview **Rate** (one number per bank, below the fold)
- viewport: 1366x768 @2x
- speakers: Speaker B (exact): 776 vs 780; throw 776 or 778; where is the breakout. Speaker A (range): not much consequence; ten windows work; give assurance. ASR unlabeled.

## Session metadata
- folder: `wb-rec-260815-2125`
- recording id: `ba64f48a-197b-40a6-883c-3d23b6cf8313`
- started_at: 2026-08-15T15:55:21.859Z
- ended_at: 2026-08-15T16:04:20.986Z
- duration_ms: 539127 (~8 min 59 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 70
- event count: 94
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2116` — not this topic
- next: `wb-rec-260815-2134` `04` — bank quote **775–780**, UI **one rate**, “which is the lowest?”
- ASR: **throw ≈ show**; **Sibyl** not in this span; **offeror** p≈0.32 ≈ the offer / the bank

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- CIBIL still **780**. They never type 776 or 778. Table body still below the fold — one Rate header, not a 775–780 band.
- Click: none in this span (idle from 02:42 until the 04:25 CIBIL clicks in `06`).
- Screenshots **03:07–04:14**: `0026.jpg`–`0035.jpg` (t=180195–262195). Same rest card.

## What they said (faithful, complete)

**03:07.430–03:16.290** Speaker B:
> Raw ASR: “I feel that... I mean... I have 776 also. Show me the offer of 780 and I will negotiate with the offeror.”
> Corrected: **I have 776.** If you **show the 780 offer**, I will **negotiate with the offer** / the bank. **776 ≠ 780** — same family as **759 vs 780** in `01`.
> ASR: **776** p≈0.75; **780** p≈0.98; **offeror** p≈0.32.

**03:21.080–03:45.540** Speaker A then B:
> Raw ASR: “So you tell them that there is not much of a consequence. Ten windows work here and there. You have to give me an assurance. That bro, ten goes ahead. Same here. Don't throw so much. You have to throw 776 or 778. But the rates change with the banks. Even if two banks are new, they will have to wait for ten minutes.”
> Corrected: A: tell the customer there is **not much consequence**; **ten-point windows** work here and there — **give assurance** that **ten [points] still holds**. B: **don’t show such a wide band** — **show 776 or 778**. **Rates change with the banks.** ASR “two banks are new… wait for ten minutes” is garbled (`ten` p≈0.04; `minutes.` p≈0.82) — **do not** treat ten minutes as a product number. Sense in context: **two banks’ windows are not the same ten-point wait / band** — they pick this up next.
> ASR: **778.** p≈0.93.

**03:48.400–04:14.620** Speaker B, repeated “what does it mean?”:
> Raw ASR: “Yes. But which bank... Where is the breakout? Suppose one bank says 800 to 810. Then one bank says 850 to 812. They say so. They don't do it in parallel. Everyone has 810 or 810. Not everyone. What does it mean? What does it mean?”
> Corrected: **Where is the breakout?** Example: one bank **800–810**, another **850–812** (second floor as spoken; **850** p≈0.52, **812.** p≈0.995 — keep 812 as spoken, may be a slip). Banks **don’t do windows in parallel.** Not everyone shares **810**. So a single dropdown window cannot match every lender’s cut. They stall on **what does it mean?**

## First-principles problem
- What must be true: a shown rate must belong to **this** visitor’s score **and** **this** bank’s band. 776 cannot wear 780’s offer. One site-wide 750–780 dropdown cannot be every bank’s breakout.
- Root vs symptom: “776 vs 780” is the human example. The root is **lender-specific CIBIL cuts that are not aligned**, while the UI has one integer and one Rate per row.
- Constraints: they will not accept a starred approximate (`04`). They have not chosen to show a band in the Rate cell.

## Directions they considered
1. Reassure that **ten-point windows** are close enough — A.
2. Show a **tight** score (**776 or 778**), not a wide throw — B.
3. Face **non-parallel** bank breakouts (800–810 vs 850–812).
- Lean: **open**. A wants assurance on tens. B wants the real point and knows banks don’t share 810. 2134 still has to pick **one rate** from **775–780**.

## Company / user / future thinking
- Company: independence means listing what each bank actually uses — including different breakouts — not one fake 780 for everyone.
- User: if they know 776, showing 780 trains them to negotiate on a number that is not theirs.
- Future: `wb-rec-260815-2134` `04` is the table-side of this: bank band vs one shown rate.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: per-lender CIBIL windows in bank data; Rate lookup; `#hlc-cibil`.
- Acceptance criteria in their words: **776** must not wear the **780** offer; **show 776 or 778** rather than a wide throw; **where is the breakout?**; banks **don’t do it in parallel**.
- What NOT to do: do not treat ASR “ten minutes” or “850 to 812” as a locked band table. Do not invent one universal 10-point grid and claim it matches every lender (`03` already assumed “regular” windows — this span contradicts that).
- Open questions: show a band in Rate vs one percent. How a visitor window maps when it spans two of a bank’s cuts (2134 `04`).
- Related recordings:
  - continues_from: `01` (759 vs 780); `03` (which rate out of 10); `04` (every point consequential)
  - continues_in: `06` (minimum vs exact; 1–2 points in real life). **`wb-rec-260815-2134` `04`**

## Evidence index
- `audio.vtt` 03:07.430–04:14.620
- `audio.json`: `776` p≈0.75; `778.` p≈0.93; `breakout?` p≈0.79; `parallel.` p≈0.98; `850` p≈0.52; `812.` p≈1.00
- `events.json`: idle
- `screenshots/0026.jpg`–`0035.jpg`
- Site Overview Rate column (one number per bank when rows are in view — later 2134 `0039.jpg`)
