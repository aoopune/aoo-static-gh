# Making the feature is a one-day job — engineering is not the problem; product is

They say the **feature** (customer parameters + all offers → which best offer fits with **minimum effort**) is **easy** because it is **AI-driven**. **Design thinking / product management** is the hard part. **Engineering is an afterthought** — not the problem. **Product is the problem.** Going forward they don’t need a **CTO**; engineering as a separate vertical is **gone**; **product** is the vertical. Then: what is the need of product management? (~24 s pause.)

## Classification
- kind: issue | product-thinking + how to build / company architecture
- status: open (build recipe in talk; not implemented)
- surface: still explore-banks on screen; this is **org + product process**, not a CSS bug. The feature they mean is the intelligence/tips from `01`–`05`.
- viewport: 1366x768 @2x
- speakers: Speaker A (technical / product). ASR not diarized. No click in this span.

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
- previous: `05` (sections to build). Folder previous: `wb-rec-260815-2206` (min effort / max money).
- next: ~24 s silence (07:19–07:43), then `07`. Folder next: **`wb-rec-260815-2222` continues this exact build talk** — “this feature needs to be built”; we don’t actually use an LLM the way customers think; **don’t show AI**; AI is an engineering tool like Postgres.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Same Self-employed card + Canara row (`0045.jpg`–`0054.jpg`, t≈384s–460s). They do not open Tools, About, or a repo. “Completely AI driven” is **how they would implement** the missing sections, not something the screenshot shows.
- What is **not** on screen: no AI badge, no CTO, no new feature chrome.

## What they said (faithful, complete)

**06:19.750–06:39.790** Speaker A (the actual feature spec):
> Raw ASR: “Actually, making a feature is a one-day job. Because it is completely AI driven. We have to say that these are the customer's parameters. And you look at all the offers. And you say that in minimum efforts, which best offer will fit the customer?”
> Corrected: **Making [this] feature is a one-day job, because it is completely AI-driven.** Inputs: **these are the customer’s parameters.** Then: **look at all the offers.** Output: **with minimum effort, which best offer will fit the customer?**
> Same Pareto / minimum-effort / maximum-money idea as `2206`. “Best offer” here is **fit under minimum effort**, not a guaranteed lowest rate on the marketing site.

**06:41.590–06:55.050** Speaker A (what is actually hard):
> Raw ASR: “Making a feature is not an option. It is mainly design thinking. Product management. Engineering is after thought. Engineering is not a problem. Product is the problem.”
> Corrected: **Making the feature is not [the hard part / not the issue]** (ASR **“not an option”** — next sentences are design thinking / PM / engineering is an afterthought). **It is mainly design thinking. Product management.** **Engineering is an afterthought. Engineering is not a problem. Product is the problem.**

**06:57.310–07:19.610** Speaker A (org):
> Raw ASR: “By the way, going forward, there is no need to do CTO. Engineering is separate, vertical. It is gone. Product is vertical. It is just printed. What is the need of product management?”
> Corrected: **Going forward, there is no need to [have a] CTO.** **Engineering as a separate vertical is gone** (“vertical” p≈0.27 — keep the word they used). **Product is the vertical.** **“It is just printed”** is unclear ASR (“just” p≈0.11, “printed” p≈0.21 — do not invent: not a UI print button). Then: **What is the need of product management?** — in context of “product is the problem,” this is **why PM/design thinking matters**, not “fire PM.” Then **~24 s silence** (07:19–07:43) before `07`.

They do not name a model, a vendor, or a prompt in this take. `2222` will say they **don’t** want to show AI to customers and that “AI means we don’t actually use LLM” the way the other person feared.

## First-principles problem
- What must be true: the computer can be given **parameters + the offer list** and return **which change is worth the customer’s effort**. That computation is not the bottleneck. **What to show, where, in what voice** (`01`–`05`, `04`’s anti-scam test) is.
- Root vs symptom: empty field notes are not an engineering outage. The root is **unfinished product**: placement, three tips, honest “low/high,” sections, lawyer stance.
- Constraints they implied: treat engineering as cheap/afterthought; do not wait on a CTO hire to start; the spec is **parameters → all offers → min-effort best fit**. Customer-facing “AI” is **not** decided here (`2222` says zero).

## Directions they considered
- Build the matcher as a **short** job (they said one-day; treat as “not the long pole,” not a literal sprint calendar).
- Invest in **design thinking / product management**.
- Org: no CTO going forward; engineering vertical gone; product vertical remains.
- They do not choose a stack. They do not sketch APIs.

## Company / user / future thinking
- User: should feel **minimum effort → better fit**, not “we used AI.” The job is the **offer that fits**, same as Flights not advertising machine learning (`2222`).
- Company: two-person, bootstrapped. They are saying **product judgment** is the scarce skill now that generation/matching is cheap. That matches “lawyers for you” (`05`) more than a CTO roadmap.
- Future: `2222` — feature **needs to be built**; complexity is overstated; **don’t tell customers it is AI**; trust is in the recommendation, not the tool. Do not put “AI-driven” on the site because they said it in this room.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: whatever computes Explore banks offers from `#hlc-inputs` (existing comparison engine) **plus** a thin layer: parameters + offer set → **ranked min-effort fits** for the tips/sections. Product/copy owners for `01`–`05` decide the sentence. Not a new CTO workstream in this clip’s name.
- Acceptance criteria in their words: given **customer parameters** and **all offers**, say **which best offer fits with minimum effort**. Feature-making is not the problem; **product / design thinking** is. Do not block on engineering/CTO.
- What NOT to do: do not ship a customer-facing “AI” badge in this clip’s name (`2222` forbids it). Do not treat “one-day job” as permission to skip the Flights/trust/placement work. Do not delete the comparison engine — it **is** “all the offers.”
- Open questions: rules engine vs LLM (they say “AI driven” here; `2222` says they may **not** mean a customer-visible LLM). Who writes the three tips so they stay **accurate** (`2222`).
- Related recordings:
  - continues_from: `05` (sections to build); `2206` (min effort / max money).
  - continues_in: **`wb-rec-260815-2222`** — “this feature needs to be built”; AI vs not showing AI; Flights again.

## Evidence index
- `audio.vtt` 06:19.750–07:19.610
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json`
- `events.json`: idle; ~24 s gap after 07:19 before `07`
- `screenshots/0045.jpg`–`0054.jpg`
- `manifest.json`; `console.json` `[]`
- Site: `#hlc-inputs` + bank-options (the “all offers” they already have)
