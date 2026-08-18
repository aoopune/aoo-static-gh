# The scheme name is what you take to the manager

The clip opens already on Bank of Maharashtra’s More details. They toggle **Scheme**, click the words **Maha Super Housing Loan**, and say this is definitely good information. A customer who did not walk in asking for that named loan gets no answer at the branch. If they know the scheme, they can tell the manager: this is your scheme.

## Classification
- kind: product-thinking | praise (the Scheme block is the right information)
- status: open (keep the exact scheme name visible; do not hide it)
- surface: Explore banks / `#hlc-drawer` **More details** / first accordion **Scheme** (`details:nth-of-type(1)`) — Bank, Scheme name, Facility, Purpose, Rate type, Borrower category. Table grey line: **Maha Super Housing Loan** + **More** (`getByRole("button", { name: "More about Bank of Maharashtra" })`)
- viewport: 1366x768 @2x
- speakers: Speaker A states the branch story. ASR is not diarized. No named second speaker on this span.

## Session metadata
- folder: `wb-rec-260815-2341`
- recording id: `a22402c8-4a16-4e52-8736-ec1980e3cab1`
- clip: 25 of 30
- started_at: 2026-08-15T18:11:25.578Z
- ended_at: 2026-08-15T18:20:59.868Z
- duration_ms: 574290 (~9 min 34 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 84 (JPEG; `screenshots/0000.jpg`–`0083.jpg`)
- event count: 128
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260815-2332` ended ~3 s earlier (18:11:22.771Z) — table vs one vertical page for Bank of Maharashtra; “there are more details.” Drawer already open on this clip’s first frame.
- next: `wb-rec-260815-2355` after ~4 min 25 s — still on this Loan amount drawer: arrange viewers, Step 1 / Step 2, carry ₹55,000.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` — title “Explore banks – Shroffin”
- `0000.jpg` (t=199): More details already open, all seven groups collapsed (Scheme, Eligibility, How the rate is built, Discounts, Charges at the start, Other charges, Fees that may apply later). Expand all. Behind: Adjust eligibility Existing EMIs **₹555**, credit card limits **₹0**, FOIR **55%**, co-applicant **No**. Overview: BoM **Maha Super Housing Loan** 7.25%, IOB Subhagruha Housing Loan 7.25%. **More** is underlined with a blue circled **plus**.
- Accordion **Scheme** after they open it (`0004.jpg` t=25251; `0008.jpg` t=48325):
  - Bank: Bank of Maharashtra
  - Scheme name: **Maha Super Housing Loan**
  - Facility: Term loan
  - Purpose: Regular
  - Rate type: Floating
  - Borrower category: Any
- Table behind: BoM 7.25%, loan **₹48,00,000**, tenure 20, EMI **₹37,938**.
- Clicks while they talk:
  - **00:24.847** Scheme summary — first open (`0004.jpg`)
  - **00:40.286** Scheme summary again — as “definitely good information” starts (`0006.jpg`)
  - **00:45.085** Scheme summary inner span (`0007.jpg`)
  - **00:47.920** Scheme **name value** (`details:nth-of-type(1) > div > div > div:nth-of-type(2) > span:nth-of-type(2)`) — the words “Maha Super Housing Loan” (`0008.jpg`)
  - **01:36.760** Scheme summary — collapse as they ask “Any other information?” (`0014.jpg`)
- Silent inspect **00:00–00:40**: no VTT. They sit on the open drawer, then open Scheme, before the first spoken line.
- They do **not** open **Eligibility** (`details:nth-of-type(2)`) in this clip. After collapsing Scheme they go to How the rate is built (`02`).

## What they said (faithful, complete)

Silent **00:00–00:40**: no VTT. Drawer already on More details from 2332.

**00:40.060–00:43.020** Speaker A:
> Raw ASR / corrected: “No, this is definitely good information.”
> “No” (p≈0.04) continues 2332’s More details talk. The Scheme block (bank + **Maha Super Housing Loan**) is accepted as useful.

**00:45.780–00:52.020** Speaker A (role as the customer at the branch):
> Raw ASR: “I don't want to have a super housing loan. What is your scheme?”
> Corrected: “I don't want to have a **Super Housing Loan**. What is your scheme?”
> On-page name is **Maha Super Housing Loan**. They are not asking Shroffin to drop the product. They are acting as a borrower who did not walk in asking for that name. ASR **super** p≈0.16; **housing loan** is high-confidence.

**00:53.560–01:01.480** Speaker A:
> Raw ASR: “There is no answer in the bank of Maharashtra. So, I can tell the manager that this is your scheme. I don't want to have a super housing loan. I don't want that.”
> Corrected: same sense. If you only say “Bank of Maharashtra home loan,” the branch does not volunteer the scheme. If you can name **Maha Super Housing Loan**, you can tell the manager that is their scheme. Repeat of “I don't want Super Housing Loan” = the customer would not have known to ask.

**01:02.180–01:19.880** Speaker A:
> Raw ASR: “Or, if someone thinks that my loan is under some scheme, then they won't get the information. If the customer doesn't know, then they will get the information. Any other information?”
> Corrected: “Or, if someone thinks that my loan is under some scheme, then they **won't** get the information. If the customer doesn't know, then they **won't** get the information. Any other information?”
> ASR **will** at **01:12.800** p≈0.12 — contradicts the previous sentence. Same point restated: no scheme name → no scheme facts at the bank. “Any other information?” p≈0.003/0.08/0.13 — they are hunting the rest of the drawer.

**01:25.990–01:37.470** Speaker A:
> Raw ASR: “It is very important. There is a scheme under the name of Maharashtra Bank of Maharashtra. There is a scheme under the name of Maharashtra Bank of Maharashtra. Any other information?”
> Corrected: “It is very important. There is a scheme under the name of **Maha Super Housing Loan, Bank of Maharashtra**.” ASR doubled “Maharashtra” and dropped “Super Housing Loan”; they had just clicked that exact name. They collapse Scheme at **01:36** and look for what else the drawer holds.

They do not ask to rename the scheme, hide it, or merge it into the bank name.

## First-principles problem
- What must be true: each row names **which lender** and **which named loan**. The customer must be able to repeat that name to a manager. Banks will not volunteer it.
- Root vs symptom: the Scheme accordion already has the name. The product job is to **arm the customer**, not only to rank rates.
- Constraints: keep **Maha Super Housing Loan** (and every other scheme line) visible and copyable. Do not treat “I don't want Super Housing Loan” as a request to remove BoM’s product.

## Directions they considered
- Keep this Scheme block. It is “definitely good information.”
- Use case: walk in, say “this is your scheme,” refuse to be sold a generic housing loan without the name.
- Lean: this is a core Shroffin job, not a nice-to-have label. They immediately ask what else is in the drawer.

## Company / user / future thinking
- User: does not know Maha Super Housing Loan until Shroffin shows it. Without the name they get a generic answer at the branch.
- Company: Shroffin is the place that tells you the **bank’s** scheme so you can hold the bank to it.
- Future: they open rate / discounts / charges next (`02`) and later fight how you **find** this from the table (`03`–`06`).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Scheme pairs in `src/home-loan-compare.js` (`openDrawer` / Scheme section); table grey scheme line + More in the lender cell; `pages/explore-banks.html` `#hlc-drawer`.
- Acceptance in their words: this is “definitely good information”; they can “tell the manager that this is your scheme”; if the customer doesn’t know the name they won’t get the information.
- What NOT to do: do not hide or rename Maha Super Housing Loan. Do not turn Scheme into a blog (`02`). Do not treat “I don't want Super Housing Loan” as a product-deletion request.
- Open questions: none on keeping the name. How the rest of the drawer is found is `02`–`06`.
- Related recordings:
  - continues_from: `wb-rec-260815-2332` `13` — liked one bank (BoM), vertical vs horizontal, “there are more details.”
  - continues_in: `02` (static scheme facts belong **in the product**, not a blog). `wb-rec-260815-2106` `04` already accepted the grey product line under the bank.

## Evidence index
- `audio.vtt` / `audio.txt` 00:40.060–01:37.470
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span (will/won't; doubled Maharashtra)
- `events.json`: Scheme clicks t=24847, 40286, 45085, 47920, 96760
- `screenshots/0000.jpg`–`0014.jpg`
- `pages.json` / `RECAP.md`: heading “More details”; landmark Bank options
- `replay.spec.ts` clicks the same Scheme summary / scheme-name span
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- Site: Scheme pairs; table “Maha Super Housing Loan”
