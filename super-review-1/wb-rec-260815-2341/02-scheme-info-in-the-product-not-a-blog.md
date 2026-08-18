# Scheme facts stay in the product — not a blog, not only a bank page

After Scheme they open How the rate is built, Discounts, and Charges at the start, then collapse everything. Drawer points are good; still think of a better way to show the money. These rows are static. Other banks put a page per scheme — talk about that page later, **not as a blog**. It should be out there, **in the same product**. More details is good.

## Classification
- kind: product-thinking | information-architecture
- status: open
- surface: Explore banks / `#hlc-drawer` More details accordions: Scheme, Eligibility (never opened this clip), **How the rate is built**, Discounts, Charges at the start, Other charges, Fees that may apply later. Not a new marketing site.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2341`
- recording id: `a22402c8-4a16-4e52-8736-ec1980e3cab1`
- clip: 25 of 30
- started_at: 2026-08-15T18:11:25.578Z
- ended_at: 2026-08-15T18:20:59.868Z
- duration_ms: 574290 (~9 min 34 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 84 (JPEG)
- event count: 128
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260815-2332` — More details already the one-bank vertical page; discounts were None / “everything is free.”
- next: `wb-rec-260815-2355` — calc story, not this IA point.

## Where on the page
- Same drawer as `01`. After collapsing Scheme they walk other groups, then sit on the closed list, then close the drawer.
- Clicks:
  - **01:43.202** `details:nth-of-type(3)` — **How the rate is built** (`0015.jpg`): Benchmark Repo rate **5.25%**, Markup **2.80%**, Discount **0.80%**, Interest rate **7.25%**, Rate set by CIBIL score
  - **01:48.919** `details:nth-of-type(4)` — **Discounts** (`0016.jpg`): Women / Green home / Insurance all **None**
  - **01:52.523** / **01:59.028** `details:nth-of-type(5)` — **Charges at the start** (`0017.jpg`–`0018.jpg`): Credit Information Report (CIC) charges table
  - **02:00.404** close Discounts (`0019.jpg`); **02:03.581** close How the rate is built (`0020.jpg`) — all seven groups collapsed
  - Idle **02:04–03:24** on that closed list while they talk blog vs product (`0021.jpg`–`0029.jpg`)
  - **03:08** they name “More details” while looking at the collapsed list (`0027.jpg`–`0028.jpg`)
  - **03:24.458** click `#hlc-drawer-backdrop` — close drawer (`0030.jpg`)
- Gap **01:37–01:58** (~21 s): they are clicking rate / discounts / charges; almost no VTT until “better way to show the money.”
- Gap **02:43–03:08** (~25 s): idle on the collapsed list; no VTT. Then they name More details again.
- Footer in drawer: “* GST applicable. Published rules are shown without estimating an event-specific amount. Figures are indicative. The bank decides final terms.”
- They skip **Eligibility** (nth-of-type 2) entirely in this clip.

## What they said (faithful, complete)

**01:58.240–02:09.480** Speaker A (groups just collapsed / Charges still in view as they start):
> Raw ASR: “Just think about a better way to show the money. This is the best way. But, the draw points are good.”
> Corrected: “Just think about a better way to show the money. This is the best way. But, the **drawer** points are good.”
> ASR **draw** p≈0.016 — they are inside `#hlc-drawer`. “This is the best way” sits on the closed accordion list / the rate-build they just saw (repo + markup − discount = 7.25%). They still want a **better way to show the money** (charges and amounts in those static rows), while keeping the drawer’s points.

**02:16.710–02:37.010** Speaker A:
> Raw ASR: “But, this is the static information. How do other banks do it? They put a page in each of the other banks. We will talk about that page. But, not as a blog. It is an information.”
> Corrected: same. These Scheme / rate / discount / charge facts do **not** change with the user’s ₹555 EMI. Bank websites give each scheme its own page. They park “that page” for later. Explicit ban: **not a blog**. It is information (facts), not an article.

**02:40.420–02:43.020** Speaker A:
> Raw ASR / corrected: “But, it should be out there. It should be in the product.”

Gap **02:43–03:08**: idle on collapsed More details. No VTT.

**03:08.170–03:21.170** Speaker A:
> Raw ASR: “More details. It is good. It is good. It is not important. But, it should be in the product. It should be in the same product.”
> Corrected: “More details. It is good. It is good. It is not important [as a separate page / blog]. But, it should be in the product. It should be in the **same** product.”
> They name the drawer title. “Not important” is not “delete More details” — they just said it is good, then insist it lives **inside Explore banks**, not somewhere else.

They close the drawer at **03:24** and move to how you **find** this from the table (`03`).

## First-principles problem
- What must be true: scheme facts (name, rate build, discounts, published charges) are **part of comparing banks**, so they belong in this tool. A blog post or a later standalone page is the wrong home if the user is already choosing a row.
- Root vs symptom: “static” is not a bug — those rules are not calculated from this user’s EMI. The bug would be putting them off-site so the customer never sees them while comparing.
- Constraints: keep More details; do not invent a blog; a per-bank scheme page may exist later but must not replace this drawer. “Better way to show the money” is still open for the static charge/rate rows.

## Directions they considered
- Drawer points: keep (good).
- Showing money inside those static rows: think of a better way (open). The numbered Loan amount steps they later praise (`07`) are the calculated-money version — not a replacement for this book.
- Other banks’ scheme pages: talk later; **not as a blog**.
- Lean: **in the same product** (Explore banks / this drawer), out where the comparison is.

## Company / user / future thinking
- User: will not go hunt a bank PDF while the table is open. If the facts are not here, they never reach the manager story in `01`.
- Company: Shroffin’s product **is** this comparison, including the scheme book, not a content site next to it.
- Future: “we will talk about that page” — a per-scheme page is allowed later; this clip forbids treating it as a blog and forbids taking the facts **out** of the product.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `openDrawer` body in `src/home-loan-compare.js` — Scheme, Eligibility, How the rate is built, Discounts, fee sections; `#hlc-drawer` in `pages/explore-banks.html`.
- Acceptance in their words: drawer points are good; “better way to show the money”; “not as a blog”; “it should be out there”; “it should be in the same product.”
- What NOT to do: do not move this into Guide-as-blog. Do not delete More details because they said “not important.” Do not wait for a future bank-style page before showing these facts here. Do not treat the later Loan amount steps as the only place money may appear.
- Open questions: what “better way to show the money” means for **static** charge rows (layout vs calculated amounts — calculated money is `07`–`10`). Exact later “page” is deferred by them.
- Related recordings:
  - continues_from: `01` (scheme name) and `wb-rec-260815-2332` `11`–`13` (More details just opened; discounts None)
  - continues_in: `03` (how you open this from the table). `wb-rec-260815-2355` is the loan-amount/EMI calc, not this IA point.

## Evidence index
- `audio.vtt` 01:58.240–03:21.170 (gap 02:43–03:08 has no VTT)
- `events.json`: details 3/4/5 t=103202, 108919, 112523, 119028, 120404, 123581; backdrop t=204458
- `screenshots/0015.jpg`–`0030.jpg`
- `replay.spec.ts` same accordion clicks then `#hlc-drawer-backdrop`
- `pages.json`: heading “More details”
- Site: `openDrawer` sections listed above
