# “Commissions” sounds like my fee; “bias” then switches who is talking

As a customer, “commission” first means money taken **from me**. After a pause they re-read it as money the **website** takes from the **bank**. They try to hold that website–bank frame, then “zero bias” sounds like a bias between website and bank — until they correct themselves: it means we will not **push** any bank. Having to switch mid-block is the bug. The whole section should be website↔bank **or** website↔customer, not mixed.

## Classification
- kind: issue
- status: open
- surface: homepage / `section.home-zero` / `#home-zero-title` (“Zero commissions.” / “Zero bias.”)
- viewport: 1366×768 @2x
- speakers: Speaker A walks the confusion out loud as a consumer, including the wrong reading and the correction. Speaker B silent. No disagreement recorded.

## Session metadata
- folder: `wb-rec-260815-1951`
- recording id: `ce85813c-385e-4259-a46a-98178da92985`
- started_at: 2026-08-15T14:21:00.929Z
- ended_at: 2026-08-15T14:29:32.515Z
- duration_ms: 511586
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- events: 91 · screenshots: 62 · console: 0 · tabs: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- Still `section.home-zero` after the two-zero animation talk. Full copy is on screen from `0004.png` onward.
- Exact heading pairs: “Zero” / “commissions.” then “Zero” / “bias.”
- Click while they ask “which commission”: **01:02.882** (`t=62882`) `locator("h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(2)")` — **“commissions.”** screenshot_id 8 = `screenshots/0008.png`.
- Scroll: parked at y=**4565** after **00:34.060**. No further scroll until the fair-view talk winds down (~03:36).
- Screenshots 00:40–01:41: `0005.png`–`0013.png` — charcoal, large Zero commissions / Zero bias, body “So you get a fair view of every lender listed on our platform…”
- What the PNGs show: “Zero” bright white; “commissions.” and “bias.” muted gray. Nothing on screen names **who** pays a commission or **who** is biased. That missing “who” is what they are fighting.

## What they said (faithful, complete)

**00:40.760–00:43.780** Speaker A:
> Raw ASR: “Somewhere, when I read the word commissions, I feel,”
> Corrected: same. The snag starts on the **word**, not the animation.

**00:45.720–00:55.800** Speaker A:
> Raw ASR: “instantly as a consumer, I don't know which commission I am talking about. I am talking about the commission that is taken from me. Which commission is this?”
> Corrected: same. Instant consumer reading: commission = a fee taken **from me**. They do not yet know which commission the headline means.

**00:56.020–01:03.100** Speaker A:
> Raw ASR: “But okay, when I thought, okay, the website that is taken from the bank is talking about commission. But okay.”
> Corrected: after thinking, they re-parse: the website is talking about commission **taken from the bank** (the site does not take bank commission). That is a **second**, delayed reading. “But okay” = they can force that reading, not that the first reading was fine.

**01:03.640–01:09.500** Speaker A:
> Raw ASR: “Now, the website that is taken from the bank, this is the context that I am going to cover. And I am saying, zero bias.”
> Corrected: they lock context to website–bank (money from the bank). Then the next line is “zero bias,” still in that locked frame.

**01:10.080–01:11.720** Speaker A:
> Raw ASR: “So, which is the bias that is taken from the website and the bank?”
> Corrected: same wrong parse — if commissions were website↔bank money, bias sounds like a bias **between website and bank**. This is the mixed-context failure, spoken as a question.

**01:13.380–01:17.500** Speaker A:
> Raw ASR: “Then I feel, no, no, zero bias means, this is not going to push any bank.”
> Corrected: they **correct themselves**. Zero bias = we will not push any bank. That is a different relationship (how the site treats lenders / the customer’s view), not “bias taken from website and bank.”

**01:19.340–01:26.020** Speaker A:
> Raw ASR: “So, I have to switch What does this do? It doesn't make it easy to understand.”
> Corrected: “So I have to switch [context]. What does this do? It doesn't make it easy to understand.” The cost is the **switch**, not only the word “commission.”

**01:27.580–01:41.540** Speaker A:
> Raw ASR: “Somewhere, it should be said that either this whole section is about website and bank, or this whole section is about website and customer. It should not be mixed in the context.”
> Corrected: same. Pick **one** relationship for the **whole** section. Do not mix website–bank with website–customer in the same block.

They then try to put both facts into the body sentence (`04`). They do **not** in this clip re-open 1929’s “if we don’t earn, how do we earn / do they sell data?” loop.

## First-principles problem
- What must be true: a customer reading top to bottom should not guess **who** “commission” and “bias” belong to, and should not change camera mid-heading.
- Root vs symptom: “commission” is the first snag. The root is **two relationships in two lines** (money from banks vs not pushing banks) without one stated point of view. “Bias” then inherits the wrong pair until they manually switch.
- Constraint: they still want both facts (we don’t take bank money; we don’t push a bank). The ask is one context for the whole section, not dropping either claim.

## Directions they considered
1. Instant reading (rejected as the intended meaning): commission = fee taken from **me**.
2. Delayed reading: commission = website talking about money taken from the **bank**.
3. Hold that website–bank frame onto “zero bias” → “bias taken from website and bank” (they reject this).
4. Corrected meaning of zero bias: we will not **push** any bank.
5. Rule: the **whole section** is website and bank, **or** the whole section is website and customer — “it should not be mixed in the context.”
- Lean: keep both ideas; rewrite so the reader never switches. They immediately try wording in the body (`04`). They do not lock which single frame wins in this clip; 1929 had already leaned “website talking to the customer” as the constant camera.

## Company / user / future thinking
- User: default is “the website is talking to me.” “Commission” maps to “what I pay.” Anything else is extra work. “Bias” without a who is even worse once the first line trained them on money-from-the-bank.
- Company: the real claim is independence — no pay-to-rank, no push. That is a website–bank fact that must be said in **customer** language so it does not feel like a context switch.
- Future: they do not say “explain how we earn” here. 1929 already warned that “we don’t earn” makes people ask how you earn / whether you sell data. This clip’s rule is narrower: one relationship per section.

## Fix metadata
- Code owners: `#home-zero-title` pairs and `.home-zero-body` in `index.html` / `content/pages/home.body.html` (copy). Not a CSS-only fix.
- Acceptance in their words: as a consumer I should know **which** commission; I should not have to switch; “either this whole section is about website and bank, or … website and customer. It should not be mixed in the context.” Zero bias should read as **not going to push any bank**, without a detour through “bias between website and bank.”
- What NOT to do: do not “fix” by only shrinking type or speeding the scrub (`02`). Do not add a revenue explainer unless they ask. Do not keep one line in bank-voice and the next in customer-voice. Do not treat “bias” as website-vs-bank politics.
- Open: which single frame they will pick. Replacement word for “commissions” not locked.
- continues_from: `wb-rec-260815-1929` `09-zero-commissions-wording-and-how-we-earn.md` (customer hears “no commission from me” vs “from the bank”) and `10-zero-bias-perspective-must-not-shift.md` (perspective should not shift; prefer website talking to the customer). This clip adds the **spoken wrong parse of bias**, the self-correction to “won’t push any bank,” and the hard rule: whole section one relationship.
- continues_in: `wb-rec-260815-2000` restates “we don’t take commission / we don’t have bias for any bank” as unique facts to keep — inventory, not a new confusion demo.

## Evidence index
- `audio.vtt` 00:40.760–01:41.540
- `audio.txt` / `audio.text` / `audio.tsv` same span
- `events.json` click t=62882 on commissions. span; idle on y=4565
- `screenshots/0005.png`–`0013.png`, especially `0008.png` (interaction)
- `pages.json` heading Zero commissions / Zero bias
- `replay.spec.ts` click on `h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(2)`
- Site `#home-zero-title` / `.home-zero-body`
