# More details: scheme, how the rate is built, discounts — everything is free

After the apply.html bounce they open **More details** on **Bank of Maharashtra**. They walk Scheme, Eligibility, How the rate is built (markup, discount, interest rate), then **Discounts**: 0.00%, every line **None**. They repeat **everything is free** — if you open it, there is no discount, it’s all free.

## Classification
- kind: issue | product honesty + drawer IA (praise the drawer; the discount story is “none / free”)
- status: open (keep showing discounts even when None; don’t hide the free/none state)
- surface: `#hlc-drawer` **More details** / Bank of Maharashtra · **Maha Super Housing Loan** / accordions Scheme, Eligibility, How the rate is built, Discounts, Charges at the start
- viewport: 1366x768 @2x
- speakers: Speaker A. “Yes.” / “Okay.” may be B. ASR not diarized. Language tag `mr`. Heavy ASR damage on scheme / floating / “in time.”

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
- previous: `10` (Apply bounce 05:57–06:00). First More open in this clip was PNB at 01:03 (`03` / `0008.png`) — same drawer skeleton.
- next: `12` (Other charges / on request). `wb-rec-260815-2341` continues on this BoM scheme.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` after **06:00.380** back from apply.html.
- `events.json` has **no click** after that navigation — only idle. Screenshots still show the drawer opening: trust the frames, not the click log.
- `0054.png` (t=370169, ~06:10): Overview, BoM first at **7.25%**, **23 selected**, no drawer yet.
- `0056.png` (t=388169, ~06:28): `#hlc-drawer` **More details** on BoM. Scheme **open**: Bank of Maharashtra; Scheme name **Maha Super Housing Loan**; Facility Term loan; Purpose Regular; Rate type **Floating**; Borrower category Any. Collapsed: Eligibility, How the rate is built, Discounts, Charges at the start.
- `0060.png` (t=424169, ~07:04): Discounts **open** — Discount **0.00%**, Interest rate **7.25%**, Rate set by CIBIL score; Women applicant / Green home / Insurance all **None**. Charges at the start listed (CIC, Credit Opinion, Legal and technical, Processing fee, Title search).
- Speech “More details” at **06:23.700** lines up with the drawer appearing between 0054 and 0056.

## What they said (faithful, complete)

**06:23.700–06:25.320** Speaker A:
> Raw ASR / corrected: “More details.”
> *details* p≈0.94. On-screen drawer title.

**06:27.060–06:28.160** Speaker A:
> Raw ASR: “Skiing lane.”
> Corrected: **scheme name** (Maha Super Housing Loan). *Skiing* p≈0.50 is ASR; 2341 will stay on this scheme.

**06:32.600–06:35.280** Speaker A:
> Raw ASR: “Left side floating wall. Cutting loop A.”
> Corrected: **left side, Floating** — Rate filter **Floating** is selected, and Scheme **Rate type: Floating**. *wall* ≈ Hindi *wala*. “Cutting loop A” (*Cutting* p≈0.62) — uncorrected; not a control. Do not invent a loop UI.

**06:37.480–06:38.520** Speaker A:
> Raw ASR / corrected: “Eligibility.”
> Matches the next accordion.

**06:39.220–06:50.100** Speaker A:
> Raw ASR: “How will they anticipate it? Markout, discount, interest rate.”
> Corrected: **How the rate is built** (drawer section). *anticipate* p≈0.48 ≈ calculate / how it’s built. **Markup, discount, interest rate.**

**06:56.280–07:01.640** Speaker A / B: “Discounts.” / “Okay.”

**07:02.320–07:17.040** Speaker A:
> Raw ASR: “So, everything doesn't go in time. All the information / All the inputs go in time. All the information goes in time. So, that means it's free.”
> Corrected: they are staring at Discounts **None** / 0.00%. “in time” is weak ASR (*time* p≈0.84–0.99 but the phrase is still mush). Safer reading: **all of this information is in [the drawer / the table]** — **that means it’s free** (no discount to take). Do not invent a “time” column.

**07:18.720–07:39.360** Speaker A / B:
> Raw ASR / corrected: “Yes.” Then four times **“Everything is free.”** Then: “If you want to open it, there is no discount. It's all free. Everything is free.”
> *no* p≈0.85, *discount* p≈0.66. Matches Women / Green / Insurance **None**.

**07:41.360–07:43.130** “Let's think about it.” — bridge into `12`.

## First-principles problem
- What must be true: the extra truth (scheme, rate build, discounts) lives **next to the row**, not in a blog. When there is no concession, say **None / free** — don’t hide the section.
- Root vs symptom: “everything is free” is not a marketing slogan. It is what the drawer shows for this query (no women/green/insurance tick).
- Constraint: keep More details; keep Discounts even at zero. 2341 will argue the scheme name is what you take to the manager.

## Directions they considered
- Walk More details in this order: scheme → eligibility → how the rate is built (markup / discount / rate) → discounts.
- Lean: the empty discount state is correct and should stay visible (“if you open it, there is no discount”).

## Company / user / future thinking
- User: ticks nothing in Concessions; must not think a secret 0.5% is waiting. **None** is the honest line.
- Company: independent comparison — show how 7.25% was built, then that discount is zero.
- Future: `12` other charges; `13` table vs one page for this same bank.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `drawerSection("Scheme" | "Eligibility" | "How the rate is built" | "Discounts" | …)` in `src/home-loan-compare.js`; More (+) `More about Bank of Maharashtra`.
- Acceptance criteria in their words: “More details.” Scheme / Eligibility / markup-discount-interest-rate / “Discounts.” “If you want to open it, there is no discount. It's all free.”
- What NOT to do: do not hide Discounts when None. Do not add a ski/lane control. Do not treat “everything is free” as processing-fee copy without checking Charges (`12`). Do not file the missing click in `events.json` as “they never opened the drawer.”
- Open questions: whether Overview should hint “no discount” without opening More.
- Related recordings:
  - continues_from: `0008.png` PNB More (01:03); `10` apply bounce
  - continues_in: `12`; `13`; `wb-rec-260815-2341` `01` (scheme name to the manager)

## Evidence index
- `audio.vtt` 06:23.700–07:43.130
- `screenshots/0054.png`–`0060.png` (BoM drawer; Discounts None)
- `events.json`: no click after 06:00.380 (gap); earlier More at 01:03
- Site: `drawerSection("How the rate is built")`, `drawerSection("Discounts")`
