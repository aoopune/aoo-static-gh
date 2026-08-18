# Top-up vs regular — one purpose at a time, not two schemes of the same bank in the table

They click **Top-up** to hunt “where are the multiple schemes?” (`05`). The table becomes **top-up schemes only**. They argue: taking a **home loan** or a **top-up** is **not** two live schemes of the same bank in this table. **Either** Regular **or** Top-up — at any point **only one scheme is applicable**. Speaker B’s “top-up only when you don’t have a home loan” is **rejected**.

## Classification
- kind: issue | purpose exclusivity / scheme listing
- status: open (rule stated; UI already exclusive)
- surface: Loan inputs **Purpose** Regular | **Top-up** (`form#hlc-inputs`). After the click, Other charges rows are all *Top Up* products.
- viewport: 1366x768 @2x
- speakers: Speaker A drives the exclusive-purpose rule. Speaker B: “Yes”; “Yes, it is like that”; “But top-up is only when you don't have a home loan.” A: “No, no.” ASR not diarized.

## Session metadata
- folder: `wb-rec-260816-0031`
- recording id: `abd34f08-4d04-49d6-a699-6c354e5780bd`
- clip: **30 of 30** (last clip of the 15 Aug 2026 review)
- started_at: 2026-08-15T19:01:37.835Z
- ended_at: 2026-08-15T19:08:12.983Z
- duration_ms: 395148 (~6 min 35 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 56 (PNG + JPEG)
- event count: 130
- console: empty (`console.json` is `[]`)
- tabs: 1
- pages.json: 1 page (`p1`)
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260816-0029` (~9 s earlier)
- next: none

## Where on the page
- **02:47** “When you go up… Like you had selected top-up, right?” — they scroll the form into view (`0026.png` still Other charges + filters; `0027.jpg` t=171887).
- **02:51.485** click `getByRole("button", { name: "Top-up" })`. Inputs: income ₹1,00,000, property ₹60,00,000, age 35, CIBIL **780**, Salaried, Purpose **Top-up**, Existing EMIs ₹555, FOIR 55%, Tenure 20, Co-applicant No (`0027.jpg`). **Adjust eligibility** is open (not this issue).
- Table after refresh (`0030.png` / `0031.png`): **Baroda Top Up Loan**, **Star Top Up Loan**, **Maha Bank Top Up Loan**, **Cent Top Up Loan**, **Home Loan Top Up** (IDBI), **Subhagruha Top Up Loan**, **Housing Loan Top Up** (Karur Vysya). One scheme string per bank. **1 selected** stays (IDBI checked in `0031.png`).
- **04:58.155** they click **Regular** again (after Women applicant, `07`/`08`) — `0043.jpg` briefly **No banks matched these inputs**, then `0044.png` Canara **Housing loan** + UCO **UCO Home**.

## What they said (faithful, complete)

**02:47.100–02:58.820** both:
> Raw ASR: “Like you had selected top-up, right? Yes. These are top-up schemes. No, it is like this.”
> Corrected: same. B confirms they had selected top-up (or agrees to select it). Table **is** top-up schemes. **No, it is like this** = A resetting the model (next lines).

**03:00.760–03:17.680** both:
> Raw ASR: “I take a home loan. Or I take a top-up. I am eligible for two schemes of the same bank. Is it like that? Yes, it is like that. But top-up is only when you don't have a home loan. No, no.”
> Corrected: same. A tests: home loan **or** top-up = **two schemes of the same bank**? B says **yes**, then “top-up is only when you don't have a home loan” (home p≈0.09, loan p≈0.02 — meaning from context). A **rejects** that (“No, no”). Do not treat B’s condition as the product rule.

**03:18.080–03:32.280** Speaker A:
> Raw ASR: “Either top-up selection or regular selection means that you can use any bank of the same bank. You can't use any bank of the same bank in this table. At any point, only one scheme is applicable.”
> Corrected: “Either **top-up** or **regular** … You can't use [two schemes] of the **same bank** in this table. At any point, **only one scheme is applicable**.”
> ASR “any bank of the same bank” twice is garbled (bank p≈0.02 on the first). Meaning from context + UI: Purpose is **XOR**; this table will not list Regular **and** Top-up for one bank together.

Then `05`’s “we don't need the name” / “not upfront? No.”

**04:53.750–04:59.290** (after SBI women, clicking Regular):
> Raw ASR: “If you are a top-up applicant, then you can go through this scheme. Let's go through it now.”
> Corrected: same. Top-up is a **purpose**, which **selects** that scheme family — not a second simultaneous row.

## First-principles problem
- What must be true: Regular vs Top-up is **which loan you are taking now**, so **one** scheme family per bank in the table.
- Root vs symptom: scheme names on top-up rows look like “multiple schemes.” The root is **Purpose**, not two concurrent offers.
- Constraints: this exclusivity is **not** the women/PMAY case (`07`/`09`), where two **can** apply together.

## Directions they considered
- Click Top-up → table shows top-up schemes (they did).
- Reject “two schemes of the same bank” as the Regular+Top-up story.
- Reject “top-up only when you don't have a home loan” as the table rule.
- **Either** top-up **or** regular → **only one scheme applicable** → **no name needed** (`05`).
- Lean: keep Purpose as a single toggle. Do not show both products as two rows for one bank.

## Company / user / future thinking
- User: mixing Regular and Top-up in one grid would look like a choice they do not have on this application.
- Company: Purpose is a **filter of reality**, not a scheme-name problem.
- Future: `07` is when exclusivity **fails** (woman + general). Do not reuse this XOR there.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Purpose control Regular/Top-up on `#hlc-inputs`; offer `purpose` matching. UI already exclusive in this recording.
- Acceptance in their words: “either top-up selection or regular selection”; “at any point, only one scheme is applicable”; “no, no” to B’s home-loan precondition.
- What NOT to do: do not list Regular + Top-up as two comparable rows for one bank. Do not hide Top-up. Do not use this XOR to hide SBI women + general (`07`).
- Open questions: can a customer with an existing home loan take top-up **and** still see regular (B’s claim)? A said no for **this table**.
- Related recordings:
  - continues_from: `05` (“when you go up… top-up”)
  - continues_in: `07` (SBI general vs women — **not** XOR)

## Evidence index
- `audio.vtt` 02:47.100–03:32.280 and 04:53.750–04:59.290
- `events.json`: Top-up click t=171485; Regular click t=298155
- `screenshots/0027.jpg`, `0030.png`, `0031.png`, `0043.jpg`
- `replay.spec.ts`: `getByRole("button", { name: "Top-up" })` then later Regular
- On-screen: Purpose **Top-up**; scheme labels *Top Up Loan*
