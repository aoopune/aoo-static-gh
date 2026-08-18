# Not approximate — do not star the result as invalid

Someone asks whether they can give an **approximate**. The answer is sharp: **not approximate, bro.** There is **no approximate** in this product. If you call it approximate and put a **star** at the bottom that the result is **invalid**, **why are you showing it**. They still want it **accurate**. The other side then claims **everyone knows the exact score**, and that **every point will be consequential**. They agree to **see it clearly**, then sit quiet for ~17 s.

## Classification
- kind: discussion | product honesty (rejected disclaimer)
- status: open (approximate + invalid-star **rejected**; exact vs window still open)
- surface: Explore banks / `#hlc-cibil` + results table (they are talking about what the table would mean, not a visible star)
- viewport: 1366x768 @2x
- speakers: Speaker A: not approximate; don’t star invalid. Speaker B: you want it accurate? / everyone knows the exact score / every point consequential. ASR unlabeled.

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
- next: `wb-rec-260815-2134` — still wants accuracy (“I want to know it accurately”) and does not revive an invalid-star
- ASR: **throw / throwing ≈ show**

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- No asterisk disclaimer on the table. CIBIL still **780**.
- Click: **02:33.750** second CIBIL “i” (`screenshot_id` 21 = `0021.jpg`) while saying **everyone knows the exact score**; then `#hlc-cibil` clicks **02:35.198** / **02:40.491** / **02:42.020** (`0022.jpg`–`0024.jpg`).
- Screenshots **02:10–02:50**: `0018.jpg`–`0024.jpg`. Help popover still not visible in the JPEG. Field stays 780.

## What they said (faithful, complete)

**02:10.800–02:33.940** Speaker A, B confirms:
> Raw ASR: “Not approximate, bro. Because... I don't have any approximate here. You want it accurate? Yes. Means, you... Now you will say approximate. And then you will put a star on the bottom. That actually you will get the result of your invalid. Then why are you throwing it to me? Not approximate. Ok. But this... First of all, everyone knows the exact score.”
> Corrected: A: **Not approximate.** There is **no approximate** in this product. B: **You want it accurate? Yes.** A’s fear: if you **call it approximate** and put a **star** that the result is **invalid**, **why show it**. B: **first of all, everyone knows the exact score.** (A does not accept that later — `07` / `08`.)
> ASR: **star** p≈0.95; **invalid** p≈0.16 — the **star-on-the-bottom** disclaimer is the clear object; “invalid” is the likely sense, not a locked legal word.

**02:40.980–02:50.560** Speaker B, then both:
> Raw ASR: “And then what I feel... Bro, every point will be consequential. Yes, then let's see it clearly. Yes, let's see it clearly or...”
> Corrected: B: **every point will be consequential.** They agree to **see it clearly**. Sentence trails off. ~17 s silence (02:50–03:07) before the 776 example in `05`.
> ASR: **consequential** p≈0.87.

## First-principles problem
- What must be true: if Shroffin shows a rate, that rate has to be **meant**. A starred “this is approximate / invalid” under the table is showing a number they have already disowned.
- Root vs symptom: “approximate” was offered as a way out of 10 vs 5–5 (`03`). The root they refuse is **publishing a rate they will not stand behind**.
- Constraints: not approximate; not an invalid star; they still have not agreed how to be accurate when the person does not know the exact score (`07`, `08`).

## Directions they considered
1. Call results approximate — **rejected**.
2. Approximate **plus a star** that the result is invalid — **rejected** (“why are you showing it to me”).
3. Keep accuracy; claim **everyone knows the exact score** — stated, later contradicted by memory talk.
4. Treat **every point** as consequential — B’s lean, picked up with 776 vs 780 in `05`.
- Lean: no disclaimer-as-product. Accuracy stays on the table. “Everyone knows the exact score” is **not** settled.

## Company / user / future thinking
- Company: independent comparison cannot be a number plus a footnote that the number does not count.
- User: if the table is starred invalid, they have been given busywork.
- Future: 2134 keeps “I want to know it accurately” and designs min/max **without** an invalid-star. Do not add one later as a shortcut.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: results shell / Rate cells — do not add a “indicative / invalid” star as the CIBIL solution.
- Acceptance criteria in their words: “Not approximate”; “I don’t have any approximate here”; “you will put a star on the bottom” that the result is invalid — **then why are you showing it**; “every point will be consequential.”
- What NOT to do: do not ship an approximate-rate footnote and call the debate done. Do not treat “everyone knows the exact score” as a research finding from this span.
- Open questions: how to be accurate without forcing a number they don’t have (`07`, `08`, 2134 `02`–`03`).
- Related recordings:
  - continues_from: `03` (“then can you give an approximate?”)
  - continues_in: `05` (776 vs 780). **`wb-rec-260815-2134` `02`** keeps accuracy and adds honest bounds instead of a star.

## Evidence index
- `audio.vtt` 02:10.800–02:50.560
- `audio.json`: `star` p≈0.95; `invalid.` p≈0.16; `consequential.` p≈0.87
- `events.json`: CIBIL i t=153750; `#hlc-cibil` t=155198 / 160491 / 162020
- `screenshots/0018.jpg`–`0024.jpg` (`0021.jpg` = second help-icon click)
- Site: no invalid-star on the recorded table
