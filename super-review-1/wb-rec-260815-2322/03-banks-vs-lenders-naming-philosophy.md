# Banks vs lenders — banks are in everyone’s mind; the table already says lenders

If they call the list **lenders**, they are naming a set they do not fully have (NBFCs / housing companies), while **banks** is what people already think. The homepage hero still says “apply to your chosen **banks**,” but the comparison table header is **Lenders**. They walk the trade-off, try “neutral = lenders,” try “all loan options,” try the uncle test, then **park the decision** until they watch real customers on video.

## Classification
- kind: discussion | naming / branding philosophy (not a one-line rewrite this clip)
- status: open — they explicitly do not pick. Next take `wb-rec-260815-2332` leans “Lenders is a good word… put lenders everywhere instead of banks.”
- surface: explore-banks table header `.hlc-bank-head-label` **Lenders** (`th#hlc-th-bank`); h1 **Explore banks.**; homepage `#home-hero-title` “apply to your chosen banks”; filter legend **Bank type**
- viewport: 1366x768 @2x
- speakers: Speaker A leads. Speaker B: “Lenders.” / “Yes.” / “Yes, yes.” / “Why not?” / “I don’t know.” / “It’s okay.” / “Yes, it’s okay.” No fight; B is checking and agreeing to wait. ASR not diarized. Language tag `mr`.

## Session metadata
- folder: `wb-rec-260815-2322`
- recording id: `bcd9788e-d24d-4ab3-8482-49a528a01c2f`
- clip: 23 of 30
- started_at: 2026-08-15T17:52:41.328Z
- ended_at: 2026-08-15T18:01:46.586Z
- duration_ms: 545258 (~9 min 5 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 149
- console: empty
- tabs: 1
- previous: `02` (CTA still says Compare **banks**); session `wb-rec-260815-2313` (word-fit / cognitive load)
- next: `04` (same table, Lenders weight/color); `wb-rec-260815-2332` `07-lenders-is-a-good-word.md`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` the whole time. No homepage navigation.
- They **name** the homepage hero from memory: “get a fair view of home loans and apply to your chosen banks” — live in `index.html` `#home-hero-title`: “Get a fair view of home loans and apply to your chosen banks in one go.”
- On this page, the clash is visible once they have scrolled the table (`0001.jpg`, `0005.jpg`, `0006.jpg`, then frozen form `0007.jpg`–`0027.jpg` during the talk):
  - h1: **Explore banks.**
  - Form button: **See options** (`02`)
  - Table column: **Lenders** (PNB, Canara, Bank of Baroda… all **banks**)
  - Filter: **Bank type** All / Public / Private
  - Footer disclaimer (not read aloud): “not a bank or a lender”
- No clicks 00:42–03:51. Idle on the form. They are talking about the **Lenders** header they already saw at 00:34–00:44 (`0005.jpg` / `0006.jpg`).
- Rows in those table shots are banks only — no HFC / NBFC names on screen.

## What they said (faithful, complete)

**00:42.260–00:44.900** Speaker A:
> Raw ASR / corrected: “Let me tell you something.” (twice)

**00:47.160–00:56.400** Speaker A, with Speaker B inserting the word:
> Raw ASR: “Right now, we have banks. Lenders. If we talk about lenders, we don't even have banks. But we have lenders everywhere. Banks are in everyone's mind.”
> Corrected: **Right now we [list] banks.** B (or A echoing the column): **“Lenders.”** If we *talk* in lender-language, we don’t even [strictly] have [only] banks — but the UI already says **lenders everywhere**. **Banks are in everyone’s mind.**
> The table header is the “lenders everywhere” they are pointing at. The product list on screen is banks.

**00:57.560–01:08.820** Speaker A:
> Raw ASR: “So, when we go forward, we have lenders. Earlier, we used to say, get a fair view of home loans and apply to your chosen banks. But we have lenders everywhere. We have lenders everywhere.”
> Corrected: Going forward the page says **lenders**. Earlier (homepage hero, still live) they said **get a fair view of home loans and apply to your chosen banks**. That sentence and this table do not use the same noun.

**01:18.600–01:24.420** Speaker A (repeats):
> Raw ASR: “We have lenders everywhere.” (several times) then “NBFC.”
> Corrected: same. They bring **NBFC** in as the reason “lender” is the umbrella word.

**01:26.720–01:31.280** Speaker A:
> Raw ASR: “NBFC is a housing company. We don't have a bank. We do have a bank.”
> Corrected: **NBFC** here = **housing-finance company** (HFC), not a bank. “We don’t have [those]” / “we do have banks.” Platform today = banks; lender would also cover HFCs they do not list in this table.

**01:33.480–02:10.660** Speaker A (who knows the word vs who does not):
> Raw ASR: “Some people think that banks don't have NBFC but everybody knows about NBFC. It's a bank. They know that there exists something known as NBFC. He will have a doubt that only banks have NBFCs. But who does not know that there is something known as NBFC? He thinks everything is bank. But the one who is knowledgeable, who wants to impress the first person, he knows that. Yes, he knows about lenders and banks. He knows everything about banks. Where should we use neutral?”
> Corrected, as a philosophy:
> - Most people **think everything is a bank.**
> - A smaller set **knows NBFCs exist** and can tell **lenders vs banks**.
> - Someone “knowledgeable” (who wants to look sharp in front of the first person) knows both words.
> - The design question: **where do we use the neutral word?**

**02:13.460–02:27.450** A and B:
> Raw ASR: “All... Neutral means lenders, right? Yes. Bank specific bank. All loan options.”
> Corrected: **Neutral = lenders.** When the row is a bank, say **bank**. Alternative umbrella they float: **all loan options** (avoid both nouns).

**02:31.230–03:00.660** Uncle test:
> Raw ASR: “You can go to your uncle and tell him. Yes, yes. Why not? I don't know. There is a requirement of 2 lakhs. You have an income of 1 lakh. You can leave all this. Uncle's wish.”
> Corrected: take the same words to **your uncle**. B: “Yes, yes.” / “Why not?” / “I don’t know.” Example they give (loan maths, not naming): requirement **2 lakh**, income **1 lakh** — uncle may ignore the jargon. **Uncle’s wish** = everyday person decides whether the word lands. Not a product spec.

**03:07.140–03:23.440** Speaker A, B on “lender” as a term:
> Raw ASR: “Suppose we gave him credit cards. He doesn't know. He doesn't know. He uses a lender. It's okay. It's just a term. Yes, it's okay.”
> Corrected: even if they put **credit cards** in front of that uncle, he may not know the category word. If he **uses “lender”** anyway — **it’s okay; it’s just a term.** B: “Yes, it’s okay.”

**03:20.840–03:36.820** Decision for now — watch people:
> Raw ASR: “For now... We don't know what to do. We are going to put a plug-in. You capture all the customer interaction in the form of video. And then we understand how people are. Then we have to do these small things. And then we have to help him.”
> Corrected: **For now they do not know which word to lock.** Plan: put a **plugin** that **records customer sessions as video**, learn how people actually talk, then do the **small** copy fixes, then help the customer. This is a research deferral, not “never decide.”

### Pros / cons they actually voiced (not extra theory)

| Word | Why they like it | Why they hesitate |
|---|---|---|
| **Banks** | “In everyone’s mind.” Hero already: “chosen banks.” What the table *is* today. Uncle thinks everything is a bank. | Knowledgeable readers know NBFCs/HFCs exist. Saying only banks can sound like they hide those. |
| **Lenders** | Neutral umbrella. Accurate if HFCs are in the set. Already on the column (“lenders everywhere”). | “If we talk about lenders, we don’t even have banks” — they do not have the full lender set on screen. Most people may not use the word. Fights the hero sentence. |
| **All loan options** | Avoids the fight. | One throw; not developed. |

They do **not** say “always banks” or “always lenders” in this clip.

## First-principles problem
- What must be true: one noun for “who you compare and apply to,” used the same way in the hero, the h1, the submit, the column, and the filter — **or** a deliberate split (neutral in lists, bank when the row is a bank).
- Root vs symptom: **Lenders** on `th#hlc-th-bank` is not a random label. It is the accurate finance word colliding with **how Indians already talk** (banks) and with **what Shroffin lists today** (banks, not HFCs).
- Constraints they set: do not ship a global find-replace this week; wait for recorded customer language; keep changes small.

## Directions they considered
- Use **banks** (mental model + hero) — live in homepage copy; not locked for the table.
- Use **lenders** as the **neutral** word; **bank** when the institution is a bank.
- Use **all loan options** as a third umbrella.
- **Defer** until session replay shows how customers speak — **this is the lean of the clip.**
- Next recording (`2332`) independently says lenders can go everywhere; that is a later lean, not this clip’s close.

## Company / user / future thinking
- Two audiences: the **uncle** (everything is a bank) and the **knowledgeable** person (lenders vs banks vs NBFC/HFC). Copy has to climb that ladder without showing off.
- Shroffin-today (`docs/brand/startup-core.md`): customer lines prefer **banks** (“compare every bank,” “33 banks”); legal lines use **lender**; apply-once steps mix both. This review is the founders noticing that mix on a live page.
- Future: if HFCs/NBFCs are added, **lender** (or “loan options”) becomes more true. They must not pretend those names are in this table today.
- Respect: they do not attack banks or NBFCs. They argue about **the customer’s word**.
- Research method they trust: **watch real sessions**, then tiny wording fixes — same “don’t increase cognitive load” thread as `2313`.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `src/home-loan-compare.js` `.hlc-bank-head-label` (`Lenders`); `pages/explore-banks.html` h1 “Explore banks.”, Bank type filter, `#hlc-see-options`; homepage `#home-hero-title`; footer disclaimer. One glossary decision, then apply it — do not invent a second column name.
- Acceptance in their words: “Banks are in everyone’s mind.” Hero: “apply to your chosen banks.” Table: “we have lenders everywhere.” Neutral = lenders; bank-specific = bank. **For now we don’t know what to do** until video of customers.
- What NOT to do: do not globally replace banks→lenders (or the reverse) from this clip alone. Do not add NBFCs to the table to “make lenders true.” Do not lecture uncle about NBFC in the column header.
- Open questions: after replay, is the column **Banks**, **Lenders**, or **Loan options**? Does the hero stay “chosen banks”? `2332` answers in one direction; this clip does not.
- Related recordings:
  - continues_from: `wb-rec-260815-2313` cognitive-load / word-fit; `02` CTA still says Compare **banks**
  - continues_in: `04-lenders-header-weight-and-color.md` (same table, **Lenders** weight/color). `wb-rec-260815-2332` “Lenders is a good word. You can put lenders everywhere instead of banks.”

## Evidence index
- `audio.vtt` 00:42.260–03:36.820
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` / `audio.json` lines “Right now, we have banks” through “then we have to help him”
- `events.json`: no click in this span; last pre-talk scroll 00:46.030 y=166.5
- `screenshots/0005.jpg`–`0006.jpg` (Lenders column + bank rows); `0007.jpg`–`0027.jpg` (form idle during speech)
- `pages.json` / `RECAP.md`: title “Explore banks – Shroffin”; h1 “Explore banks.”
- Site: `src/home-loan-compare.js` ~6626 `Lenders`; `index.html` hero banks; `pages/explore-banks.html` h1 / Bank type / disclaimer
