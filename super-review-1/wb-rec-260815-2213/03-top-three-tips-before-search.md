# Top three tips before search — income, then self-employed → salaried

They sketch **what** the inline intelligence says: **three tips**, the most important ones, **before the search**. Example observation: income is not more than **₹20,000**. Not on the page **yet** — but if they want more money, fix these three; it makes a difference. They click **Self-employed** and walk that case: six months on a salary, banks’ rates differ, **two options**.

## Classification
- kind: issue | product-thinking + feature content (tips)
- status: open (tips described; “not yet” on the page)
- surface: explore-banks / `#hlc-monthly-income`, occupation pills `.hlc-occupation-pills` (Salaried / Self-employed). They **click** Self-employed while naming that case.
- viewport: 1366x768 @2x
- speakers: Speaker A walks the three tips and the self-employed example. **Yes** after the salary-save line. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2213`
- recording id: `820288e7-0391-48c1-ae98-6c895d38b144`
- clip: 15 of 30
- started_at: 2026-08-15T16:43:16.850Z
- ended_at: 2026-08-15T16:52:07.526Z
- duration_ms: 530676 (~8 min 51 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 62 (JPEG; `screenshots/0000.jpg`–`0061.jpg`)
- event count: 67
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `02` (Flights analog). Folder previous: `wb-rec-260815-2206` (farmer → pay slip; wait months; salaried vs self-employed).
- next: `04` (Flights “I feel fooled” + Amazon). Folder next: `wb-rec-260815-2222` — top three optimizations from the offer list; **top 3 tips must be accurate**.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Occupation: `0000.jpg`–`0014.jpg` show **Salaried** selected (HTML default). At **02:03.974–02:03.975** focus+click `getByRole("button", { name: "Self-employed" })` — `0015.jpg` (t=124241) onward: **Self-employed** selected. Purpose stays Regular. Income stays ₹1,00,000; property ₹6,000; CIBIL 780; age 35.
- They say “income is not more than 20,000” while the **visible** income is **₹1,00,000**. That 20,000 is a **spoken example**. Do not invent a 20,000 field value in this recording.
- Only click in the whole session is this Self-employed click (plus the earlier monthly-income **focus** in `01`).
- Screenshots: `0014.jpg` (t=116241, still Salaried) → `0015.jpg` (Self-employed, same Canara row ₹5,400 / EMI ₹48). No tips UI appears.
- What is **not** on screen: no “top three tips” block, no 20,000, no six-month wait copy.

## What they said (faithful, complete)

**01:35.480–02:00.000** Speaker A (three tips, timing, income example):
> Raw ASR: “There are three tips here. Before the search, we observed that your income is not more than 20,000. 20,000? First, the most important top three tips. Not yet, but if you want more money, these are the three main tips. If you fix them, it makes a difference.”
> Corrected: **There are three tips here.** **Before the search**, we observed that **your income is not more than ₹20,000**. (They query **“20,000?”** — checking the example, not reading it off the ₹1,00,000 box.) **First, the most important top three tips.** **Not yet** [on this page], **but if you want more money, these are the three main tips. If you fix them, it makes a difference.**
> “Before the search” = before / as they use See options — a **pre-search observation**, not a new site. “Not yet” = this UI is not built.

**02:02.640–02:13.940** Speaker A (self-employed → salary; click matches):
> Raw ASR: “They are self-employed. If you get a six-month salary for half the price of we can save half of your salary. Yes.”
> Corrected: **They are self-employed.** (Click **Self-employed** at **02:03.975**.) If you get a **six-month salary** … **we can save** [a large share / “half”] — ASR **“for half the price of / save half of your salary”** is broken; do not invent a precise rupee save. Same family as `2206`: wait months, take a **pay slip** / salaried path, save a lot. **Yes.**

**02:14.520–02:22.220** Speaker A:
> Raw ASR: “The rates of the banks are different. That's why we have two options. You are a great self-employed person.”
> Corrected: **The rates of the banks are different. That’s why we have two options** (Salaried vs Self-employed on this card — the pills they just used). **“You are a great self-employed person”** is ASR for the case **you are self-employed** (not praise copy to ship).

This block is the **tips** product, not the Flights sentence (`02`) and not the wife/PAN “biggest saving” section (`05`). They do not list a clean set of three named tips here.

## First-principles problem
- What must be true: if the tool can **see** a profile (low shown income, self-employed) **before** or as they search, it should name **a few high-leverage fixes** — not a long lecture and not a second form.
- Root vs symptom: occupation pills already exist; they are not broken. The root is **what we say after we observe** (income too low; self-employed vs salaried rates differ) — three tips that **change the deal** if fixed.
- Constraints they implied: **top three**, **most important**, **if you want more money**, **if you fix them it makes a difference**; **not yet** on screen. Two occupation options because **bank rates differ**. Six-month salaried wait is an example tip, not a new field.

## Directions they considered
- Surface **three** tips (cap at three; “most important”).
- Trigger **before the search** from an observation (example: income ≤ 20,000).
- Self-employed path: wait ~six months on salary because **rates differ** — two options already on the card.
- They do not list all three tips in this block (wife/PAN/biggest saving is `05`). They do not type 20,000.

## Company / user / future thinking
- User: may be self-employed or on a small shown income. They want **more money** from the loan, not a perfect form. Three concrete fixes beat a blank table.
- Company: Explore banks already asks occupation and income. Tips that say “become salaried for six months” are **guidance on the customer’s side** (lawyer analog in `05`) — and they collide with `2204` (don’t publish a cheat-sheet of “best” parameters). The live tension: help them save vs not turn the site into a farming guide.
- Future: `2222` will say the feature must be built and the tips must be **accurate**; don’t label them AI.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-inputs` observations on `#hlc-monthly-income` and `.hlc-occupation-pills`; empty notes (`#hlc-monthly-income-note`, `#hlc-occupation-note`); not a new nav item.
- Acceptance criteria in their words: **three** tips, **most important**, **before the search**, from observations (income not more than 20,000); **if you want more money**; **if you fix them it makes a difference**; self-employed / six-month salary / **two options** because **rates differ**. **Not yet** — this is to-build.
- What NOT to do: do not put a 20,000 default in the income box (on-screen value is 1 lakh). Do not hide Salaried/Self-employed. Do not treat the ₹6,000 property leftover as a tip. Do not write “you are a great self-employed person” as UI copy. Do not invent the third tip from `05` as if it were named here.
- Open questions: exact three tips (this block only names income + salaried wait; `05` adds wife/property/PAN). Before **See options** vs after the table is up (`01`: okay after they have searched). Accuracy bar is `2222`.
- Related recordings:
  - continues_from: `2206` (farmer → pay slip; wait months; salaried vs self-employed); `2204` (if you tell me salaried wins, I will get a pay slip).
  - continues_in: `05` (sections / biggest saving); `07` (let them see 720→780); `2222` (top 3 tips, must be accurate).

## Evidence index
- `audio.vtt` 01:35.480–02:22.220
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json`
- `events.json`: focus+click Self-employed t=123974–123975
- `screenshots/0014.jpg` (Salaried) → `0015.jpg` (Self-employed)
- `RECAP.md` 02:03 click Self-employed
- `replay.spec.ts`: same Self-employed locator click
- Site: `.hlc-occupation-pills`, `#hlc-occupation`, `#hlc-monthly-income`
