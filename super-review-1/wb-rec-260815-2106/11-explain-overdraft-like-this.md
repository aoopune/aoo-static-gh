# Explain overdraft like this — ₹20 lakh loan, ₹5 lakh savings, interest on ₹15 lakh

They ask what an overdraft facility is, then answer themselves with a worked example: ₹20 lakh loan linked to savings, ₹5 lakh sitting in the account, interest on ₹15 lakh; you can pull the ₹5 lakh or leave it. Liberty to park extra money and pay less interest; you pay about **0.25** extra for that. For people with a lot of cash. Then: nice — **you should explain it like this. We should learn this. It is very important.** That is the bar for Facility i-copy.

## Classification
- kind: product-thinking | praise (of the explanation they just gave)
- status: open (the explanation is not on the page yet)
- surface: Facility filter Term loan / Overdraft (`#hlc-facility-label`, note “About 0.15–1% higher” on Overdraft)
- viewport: 1366×768 @2x
- speakers: Speaker A explains. Closing “Nice, nice, nice” may be both.

## Session metadata
- folder: `wb-rec-260815-2106`
- recording id: `2c589daf-48f1-4304-8831-5a9870fea870`
- clip: 8 of 30
- started_at: 2026-08-15T15:36:22.615Z
- ended_at: 2026-08-15T15:45:24.586Z
- duration_ms: 541971 (~9 min 2 s)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 202
- console: empty (`console.json` is `[]`)
- tabs: 1
- previous: `wb-rec-260815-2018` — homepage
- next: `wb-rec-260815-2116` (~44 s later) — Explore banks **input** copy, not this Facility story

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- They already clicked Overdraft at **03:19.305** and Term loan again at **03:20.602** (`05`). This end-of-clip talk has **no new clicks**.
- On-page Facility i today: “Term loan = set EMI. Overdraft = redraw within a limit.” Overdraft chip: “About 0.15–1% higher.”
- Screenshots: `0084.png`–`0091.png` (t=470191–534191) — filter rail including Facility; table area often empty/white in these stills; they are talking, not re-clicking. Earlier `0038.png` is Overdraft selected.
- Clip ends **09:00.920**; next recording `2116` starts already on Explore banks (~15:46Z).

## What they said (faithful, complete)

**08:09.280–08:11.020** Speaker A:
> Raw ASR: “What is an order of an order of facility?”
> Corrected: **What is an overdraft facility?** ASR **order ≈ overdraft** (`order` p≈0.32 / 0.19), twice.

**08:15.320–08:20.460** Speaker A:
> Raw ASR: “There is a normal loan which is linked to your savings account.”
> Corrected: same. OD as a **loan linked to the savings account** (home-loan overdraft / drop-line style), not a credit card.

**08:22.020–08:34.840** Speaker A:
> Raw ASR: “If you have taken a loan of 20 lakhs in the savings bank and you have kept 5 lakhs in your savings account, you need interest of 15 lakhs. And you can take out 5 lakhs or you can keep it.”
> Corrected: loan of **₹20 lakh**; **₹5 lakh** in savings; you pay interest on **₹15 lakh**. You can **take out** the ₹5 lakh or **keep** it.

**08:37.420–08:45.720** Speaker A:
> Raw ASR: “But it gives you liberty to keep your extra money and take less interest. But you have to pay more than 0.25 interest.”
> Corrected: liberty to keep extra money and **take less interest**; you **pay more — about 0.25** [percentage points] for that facility. On-page band is 0.15–1%; they used 0.25 as the teaching number.

**08:47.660–08:54.080** Speaker A:
> Raw ASR: “Those who have a lot of cash and want to keep the money, they can keep it there. I don't have any other option.”
> Corrected: people with **a lot of cash** who want to park it can keep it there. **“I don’t have any other option”** ≈ if you *don’t* have that cash, this isn’t your option / you have no extra reason to pick OD.

**08:54.340–09:00.920** Speaker A:
> Raw ASR: “Nice, nice, nice. You should explain it like this. We should learn this. It is very important.”
> Corrected: same. This spoken example **is** the explanation the product should learn.

They do not ask to change the 0.15–1% chip note. They ask to **explain** OD at that depth.

## First-principles problem
- What must be true: Facility is meaningless if Overdraft is only “About 0.15–1% higher.” The user needs: linked to surplus cash, interest on the used amount, extra rate, who it is for.
- Root vs symptom: “what is an overdraft facility?” is the symptom. Root: help is a one-liner, not the worked example they just proved they can give.
- Constraints: Shroffin is not the lender. Explain the **mechanism**, don’t sell OD. Same “tell me here” as `10`. Term loan stays the ordinary path.

## Directions they considered
- Only one: explain OD with the 20 lakh / 5 lakh / interest on 15 lakh story, plus ~0.25 extra, plus “for people with cash.”
- Lean: they call it **very important** and something **we should learn** — treat as the Facility copy recipe.

## Company / user / future thinking
- User: most people should leave Term loan on; OD is for surplus cash. The extra rate must be visible as the price of that liberty.
- Company: independent compare includes **how** a facility works, not only a higher-rate badge. This is the same teaching duty as public vs private (`10`).
- Future: next clip `2116` is loan-**input** sentences (monthly income, property agreement value), not Facility. This OD recipe lives here.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-help-facility` and Overdraft `.hlc-filter-option-note`. Optional Learn more `guide.html#loan-structure` — but `08`/`10` say explain **here**, don’t rely on leaving.
- Acceptance criteria in their words: “you should explain it like this”; 20 lakh loan, 5 lakh in savings, interest on 15 lakh; liberty to keep extra money; pay ~0.25 more; for those with a lot of cash; “it is very important.”
- What NOT to do: do not leave “redraw within a limit” as the whole story. Do not treat 0.25 as a new guaranteed surcharge vs the existing 0.15–1% note without checking data. Do not hide Term loan. Do not dump a textbook; they used one concrete example.
- Open questions: exact extra-rate wording (0.25 vs on-page 0.15–1%). Whether both Term loan and Overdraft default on (`05`/`10` inclusive defaults) or Term loan stays the single default while OD is opt-in — they did not re-open that here.
- Related recordings:
  - continues_from: `05` (they clicked Overdraft) and `10` (trade-offs here only)
  - continues_in: `wb-rec-260815-2116` — Explore banks **input** copy, not this Facility story

## Evidence index
- `audio.vtt` 08:09.280–09:00.920
- `audio.json` “order” p≈0.32 (→ overdraft); “interest.” p≈0.96
- `events.json`: Overdraft click earlier t=199305; this span idle
- `screenshots/0038.png` (Overdraft selected at 03:19); `0084.png`–`0091.png` end of clip
- Site: `pages/explore-banks.html` `#hlc-help-facility`
