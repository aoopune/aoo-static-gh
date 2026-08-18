# Finding SBI: don’t make them search — default sort is rate, lowest to highest

They want a **perfect** list: 25–30 banks, find **SBI**. Sorting does not answer. The table only showed the first chunk; **Show 23 more banks** dumps SBI further down — that is cognitive load. They do not want people to **search**. When the page opens, **rate is sorted, lowest to highest**. Rate is the main thing. Ctrl+F can hold a find if you must.

## Classification
- kind: issue | information architecture (pagination + default sort + no search box)
- status: open
- surface: Overview table (first ~8–10 rows) / `#hlc-show-more` **Show 23 more banks** / Rate filter **Floating** (they click it) / no bank search field on the page
- viewport: 1366x768 @2x
- speakers: Speaker A leads. ASR “Navani” is likely a name or “now when I”; not a control. Language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2332`
- recording id: `244b886f-17a3-4f87-b2bf-d28ddfbcf6ab`
- clip: 24 of 30
- started_at: 2026-08-15T18:02:07.502Z
- ended_at: 2026-08-15T18:11:22.771Z
- duration_ms: 555269 (~9 min 15 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 76
- event count: 158
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `09` (freshness copy)
- next: `11` (More details). **05:57** Apply → `apply.html` → back is an accident at the end of this hunt, not a new topic.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` until **05:57.069** → `apply.html` (`0052.jpg`: **33 selected**, BoM 7.25% after Floating) → **06:00.380** back to explore-banks.
- **04:21.591** click `th#hlc-th-bank > div` (header, not a search box).
- **04:56.303** click `main`.
- **04:59.394** click **Floating** (`aside#hlc-filters-panel` Rate). ASR “floating slip.” `0044.png` interaction; `0046.png` after Show more: Central Bank 7.30%, Axis 7.35%, … **SBI not in the first screen**.
- **05:10.859** click `#hlc-show-more` — accessible name **Show 23 more banks**. `0046.png` / `0047.png`: longer Floating list, still no SBI in the viewport; they say SBI will **come down**.
- **05:55.791** Select all visible banks. **05:57.026** **Apply once to 33 banks** → apply.html. They bounce back at 06:00 (browser back / goto). No search field exists in `pages.json` actions.
- Default they describe: Rate sorted **lowest to highest**. After EMI-header click at 02:05 the EMI up-arrow was active; after Floating + Show more, `0047.png` still shows an EMI up-arrow even while rates climb 7.25 → 7.45 — rate and EMI move together here.

## What they said (faithful, complete)

**04:18.220–04:19.880** Speaker A: “Like this.”

**04:21.920–04:27.720** Speaker A:
> Raw ASR: “No. Navani is sorting. He doesn't give any answer. Navani is sorting.”
> Corrected: **No.** Then twice: **Navani is sorting** (second time *Navani* p≈0.95, *sorting* p≈0.98) — a person in the room, or ASR for “now when I am sorting.” **He doesn’t give any answer** = sorting does not surface SBI. There is no Navani UI.

**04:29.340–04:38.740** Speaker A:
> Raw ASR: “No, I should. Because what else can I do? I want to see if you have done a perfect bank. Are you going to jail?”
> Corrected: they **should** (try something else). **What else can I do?** They want to see if this is a **perfect** list of banks. “Are you going to jail?” (*Are* p≈0.01, *jail* p≈0.84) — founder joke / aside, not a product requirement.

**04:40.700–04:50.260** Speaker A:
> Raw ASR / corrected: “Suppose there are 25–30 banks here. And I want to search for SBI. Then how do I search for it? I was going to search for it.”

**04:54.640–05:02.180** Speaker A:
> Raw ASR: “But... What's the scene? Let's see the rate. Let's see the floating slip. What's the scene now? Scroll down.”
> Corrected: **what’s the scene** = what does the list look like. **Let’s see the rate.** **Let’s see Floating** (they click Floating; *slip* is ASR). **Scroll down.**

**05:03.160–05:15.860** Speaker A:
> Raw ASR: “We were only showing them the previous 10. If we control the search, the SBI doesn't look nice. If we click on it, the SBI will come down. That's my cognitive load. I don't want to show the survey.”
> Corrected: we were only showing the **first ~10**. If we **Ctrl** [+F] **search**, SBI **doesn’t look nice**. If we click **Show more**, SBI **comes down** (further down the list). **That’s my cognitive load.** “I don’t want to show the **survey**” (*I* p≈0.08) — they do **not** want to push the customer into searching / a long dump. *survey* is weak ASR.

**05:17.480–05:26.140** Speaker A:
> Raw ASR / corrected: “When it opens, by default, the rate is sorted. Lowest to highest. Rate is the main thing.”
> Strong p on *sorted* / *highest* / *main thing*.

**05:29.990–05:39.170** Speaker A:
> Raw ASR: “It's like a search symbol. You can search. You can get it. But who will search the bank? Control F will hold it.”
> Corrected: a **search** icon would let you search — **but who will search the bank?** **Ctrl+F** can **hold** (browser find) if the row is on the page. They are **not** asking to add a search box as the main path; pagination + bad default is the load.

**05:43.970–05:46.050** “Okay.” / “Okay.”

## First-principles problem
- What must be true: a customer looking for **SBI** (or any named lender) should not have to know to open a second page of rows, and should not need a custom search field if the list is in a sensible order.
- Root vs symptom: symptom is “how do I search for SBI?” Root is **truncated list + default sort that isn’t ‘rate lowest first’ + search as extra work**.
- Constraint: rate is the main thing. Ctrl+F is enough **if** the row exists in the DOM. Show-more that hides SBI fights that.

## Directions they considered
- Do **not** make search the job (who will search the bank?).
- **Default**: rate sorted lowest → highest when it opens.
- Show-more / only-first-10 creates cognitive load (SBI comes down).
- Ctrl+F can hold a find.
- Lean: IA, not a new magnifying-glass product.

## Company / user / future thinking
- User: 25–30 lenders; they already know SBI. If SBI is missing from the first screen they think Shroffin is incomplete (`perfect bank`).
- Company: independent comparison of the full set — hiding 23 banks behind a click is a fake shortlist.
- Future: Apply at 05:57 selects **33** — the full set exists. The problem is how you **see** it.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: default sort (Rate asc) in `src/home-loan-compare.js`; `#hlc-show-more` / first-page size; Rate **Floating** default vs leftover **Fixed**; no new `#hlc-search` unless they reverse “who will search.”
- Acceptance criteria in their words: “When it opens, by default, the rate is sorted. Lowest to highest. Rate is the main thing.” “Suppose 25–30 banks… search for SBI… how do I search?” “We were only showing them the previous 10.” “If we click on it, SBI will come down. That’s my cognitive load.” “Who will search the bank? Control F will hold it.”
- What NOT to do: do not add a search box as the first fix. Do not leave Fixed as the silent default from the last session (`01`). Do not treat “jail” or “Navani” as features. Do not treat the apply.html bounce as a requested flow.
- Open questions: raise first-page size vs remove Show more vs keep Show more but default sort + Floating so SBI is near the top. Whether SBI’s rate on this query actually belongs in the first screen.
- Related recordings:
  - continues_from: `03` (they like up/down) + `01` (Fixed leftover)
  - continues_in: `11` after returning from apply.html

## Evidence index
- `audio.vtt` 04:18.220–05:46.050
- `events.json` Floating t=299394; Show more t=310859; Select all t=355791; Apply t=357026; nav apply.html; nav back t=360380
- `screenshots/0039.png`–`0053.jpg` (no SBI in first Floating screen; 33 selected)
- `replay.spec.ts` Floating, `#hlc-show-more`, `#hlc-apply-btn`
- Site: `#hlc-show-more-label`, default sort
