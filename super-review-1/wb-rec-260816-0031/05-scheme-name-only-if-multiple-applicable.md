# Scheme name is a bank attribute — show it only if multiple schemes apply at once

In the Yes Bank **More details** drawer they repeat: this is the **bank’s attribute**. They **don’t even need the scheme name** unless a bank has **multiple schemes applicable at the same time**. If that can happen, they **need the name** so the customer can **decide which scheme to go through**. Top-up vs regular (`06`) is the “only one at a time” case; SBI women (`07`) is the counterexample.

## Classification
- kind: issue | product rule / table density
- status: open
- surface: Yes Bank drawer **Scheme** (scheme name **Home Loan**) plus lender-column subtitles already showing names (Union Home, Home Loan, Elite Home Loan, UCO Home). Then they close the drawer and argue the rule.
- viewport: 1366x768 @2x
- speakers: Speaker A states the rule. Speaker B: “Yes, it is the same”; “Not upfront? / No.” ASR not diarized.

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
- **02:06.905** More about Yes Bank. Drawer Scheme (`0018.png`): Bank, **Scheme name: Home Loan**, Facility Term loan, Purpose Regular, Rate type Floating, Borrower category Any.
- Clicks: **02:10** How the rate is built (`details:nth-of-type(3)`); **02:13** Charges at the start (`:nth-of-type(5)`); **02:14** Legal and technical **₹4,100**; **02:21** Scheme (`:nth-of-type(1)`); **02:23** How the rate is built again (`0019.png`–`0023.png`).
- Speech **“Ok, this is again the same, right?”** lands on opening those sections — they are checking the fields are **the same kind of fact** (bank attributes), not new customer choices.
- **02:31.658** click `#hlc-drawer-backdrop` — drawer closes (`0024.png`).
- Table already prints a scheme under every bank. After Top-up (`06`) those labels become **Baroda Top Up Loan**, etc. (`0030.png`).

## What they said (faithful, complete)

**02:08.920–02:22.020** both, while clicking drawer sections:
> Raw ASR: “Ok, this is again the same, right? Yes, it is the same. Ok, this is also the same, right? Yes, it is the same. Yes, it is the same.”
> Corrected: same. A checks each block; B agrees **the same**.

**02:22.300–02:33.700** Speaker A, B:
> Raw ASR: “He is the bank. He is the bank's attribute. He is the bank's attribute. Yes, he is the bank's attribute.”
> Corrected: “**This** is the bank. **This** is the bank's attribute.” ASR **He** p≈0.15–0.20. **This** = the scheme / those drawer fields. They are **the bank’s attribute**, not a separate product the customer must name up front.

**02:33.860–02:48.880** Speaker A (then they scroll to Purpose):
> Raw ASR: “I don't even know the name of the scheme. Unless a bank has multiple schemes. There are multiple schemes. But where are the multiple schemes? Because the selections are not like that. When you go up... Like you had selected top-up, right?”
> Corrected: same. Default: **don’t need the scheme name**. Exception: **multiple schemes**. They cannot **see** that exception in the current selections — “selections are not like that.” **When you go up** = Loan inputs **Purpose** (they then click **Top-up**, `06`).

**03:29.580–03:51.720** after the top-up/regular fight (`06`):
> Raw ASR: “At any point, only one scheme is applicable. We don't need to know the name of the scheme. Not upfront? No. At any point, if there can be multiple schemes applicable, then we need to know the name of the scheme so we can decide which scheme to go through via.”
> Corrected: same. **Not upfront?** = B asking if the name is needed even when one applies. **No.** Names are for **decision among several that apply at once**.

**04:03.850–04:18.930** Speaker A (after a pause):
> Raw ASR: “Why did you decide that? Because the customer only has to pay the bank off. But there is no scheme. No. As long as there is only one scheme applicable at one time, we don't need to know the name of the scheme.”
> Corrected: “Why did you decide that? Because the customer only has to pay **the bank** off. But there is no scheme. No. As long as there is only **one scheme applicable at one time**, we don't need to know the name.”
> Customer pays **the bank**, not a scheme brand. **No** rejects “there is no scheme” as a reason to invent a name column.

**04:17.290–04:19.890**: “And it won't happen twice.” / “No, no.” — B or A claiming two-at-once never happens; the other **rejects**. SBI women (`07`) is the proof it **does**.

## First-principles problem
- What must be true: a scheme **name** earns its pixels only when the customer must **choose among schemes that all fit**.
- Root vs symptom: printing “Home Loan” / “Union Home” on every row looks informative. The root question is **can two of this bank apply at once?**
- Constraints: keep Purpose Regular XOR Top-up (`06`). When two **can** apply (women, PMAY), names and **both selected** (`07`–`09`).

## Directions they considered
- Scheme fields = **bank attributes**.
- **No name upfront** if only one scheme applies.
- **Need the name** if multiple schemes can apply at the same point, so the customer can **decide which to go through**.
- Reject “it won't happen twice” (`07`).
- Lean: hide or de-emphasize names in the one-scheme case; do not add a scheme picker by default.

## Company / user / future thinking
- User: does not shop “Union Home” vs the bank; they shop the **bank** unless two live offers collide.
- Company: extra scheme chrome is noise until it is a **choice**. Same honesty as not inventing legal acronyms (`01`).
- Future: `06` tests Purpose as exclusive; `07`–`09` are when exclusive is **false**.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: lender-column scheme subtitle; drawer **Scheme name**; offer rows in `data/home-loans-compare.json`. Table already always shows a scheme string in this recording.
- Acceptance in their words: “bank's attribute”; “I don't even know the name of the scheme unless a bank has multiple schemes”; “if there can be multiple schemes applicable, then we need to know the name … so we can decide which scheme to go through”; “not upfront? No.”
- What NOT to do: do not strip names in the multiple-applicable case (`07`/`09`). Do not treat every subtitle as a customer-facing brand. Do not invent a Himalaya product from `09`.
- Open questions: hide names vs keep them quiet; auto-select best (`09`) vs always show when count > 1.
- Related recordings:
  - continues_from: `04` / Yes Bank drawer from `02`
  - continues_in: `06` (Top-up vs Regular), then `07`

## Evidence index
- `audio.vtt` 02:08.920–02:48.880 and 03:29.580–04:19.890
- `events.json`: Yes Bank More t=126905; drawer details 3/5/1 t=130243–143790; backdrop t=151658
- `screenshots/0018.png`–`0024.png`
- `replay.spec.ts`: More about Yes Bank; `#hlc-drawer-backdrop`
- On-screen: Scheme name **Home Loan**; Purpose **Regular**
