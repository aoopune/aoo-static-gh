# Explore Banks tooltip craft

Amazon-style tip craft for Shroffin Explore Banks. Use with `_tooltip-research-briefs.md` (facts) and `_tooltip-approved-copy.md` (locked finals).

## Product voice

Independent home-loan comparison — not a bank. Tables are estimates; the bank decides final terms. Calm, direct, smart friend who knows finance; customer in control; plain British English; no hype; no guarantees; no villain talk about banks or agents.

## What belongs in a tip

- The field heading already names the thing — do not re-title it in the body unless a short clarifier is required
- One plain meaning — what it is / what it means for the customer
- Often a boundary — what it covers or doesn’t
- Sometimes one next step — only if it truly helps — never UI coaching
- Optional Learn more — separate link line only; tip stays short

## Formula (strict)

Max **2 sentences**.

1. The subject: what it is / means here, including the feature or scope that matters
2. Only if needed: one boundary / consequence / exception / next step — else stop at 1

Aim **~12–15 words** per sentence. Extra words only when they protect meaning.

## Moment test (required)

Before drafting, answer:

1. Where is the user? (form field, filter, or table column header)
2. What do they already know from the label and nearby controls?
3. What **one** new fact do they need in under 5 seconds?

If the line would be true anywhere on the site but useless **here**, cut it.

## Never include

1. Anything the field label or control already says
2. UI coaching (“this moves the rate column”, “click More”, “you don’t need the exact number”)
3. ₹ / EMI / lakh ballpark maths
4. Invented gates (“only if income is clean…”)
5. Restating other visible inputs or columns
6. Guarantees, scare tactics, tips-and-tricks / hacks
7. Exclamation marks; competitor names; “best / lowest / guaranteed”
8. Empty openers: “This is…”, “These are…”, “The figure shown is…”
9. AI / jargon mush: “payment instruction”, “sit on”, “lever”, “journey”, “seamless”
10. Capacity metaphors — ban all of them in tips: “EMI room”, “share that room”, “room for”, “FOIR room”, “eat the same pie”, “same pie”, “headroom” used as soft metaphor for FOIR capacity. Say what happens in plain words (existing EMIs reduce what lenders allow for a new home EMI; banks cap total EMIs as a share of income).
11. “GST sits on top” — prefer “excluding taxes” / “figures exclude taxes”

## Always include (when research-backed)

- The decision-useful fact about the subject
- Real exceptions (e.g. friends usually not accepted as co-applicant)
- Real consequences (bureau, documents, future borrowing, insurance basics when relevant)
- Bank-type differences only when they change behaviour and the brief supports them

## Using research briefs

- Pull decision-useful facts, exceptions, gotchas, myths to avoid — rewrite; never paste research sentences
- Prefer High confidence; Medium/Low → softer (“often”, “usually”, “varies”) or skip
- Do not invent facts marked Unknown

## Anti-examples (failure modes)

**Bad — Co-applicant:** income maths, “EMI room” / “share that room”, invented “only if income is clean”.  
**Useful direction:** shared full liability; credit hit for all; friends usually refused; tax needs ownership (Learn more).

**Bad — FOIR / EMI capacity:** “share that room”, “eat the same pie”, “FOIR room”, “leave headroom” as metaphor mush.  
**Useful direction:** bank-set EMI-to-income cap; not an RBI fixed %; existing EMIs and card obligations reduce what lenders allow for the new home EMI.

**Bad — CIBIL:** UI talk, score↔rate obviousness, ₹ maths, vague 30% card advice.  
**Useful direction:** report can outweigh score; own check usually soft; bank application can hard-pull.

**Bad — Rate (table):** “same bank quotes different rates by score/size/product” + “floating follows benchmark” after the user already filled those and is ranking a cell.  
**Useful direction:** published estimate for profile, not locked; credit/property checks can still change it.

## Self-check (fail any → rewrite)

- Read the field’s research brief first?
- One Amazon-style job?
- ~12–15 words / sentence unless extras earned their place?
- New useful fact in under 5 seconds on a skim?
- Any word without value? Remove.
- Any who/what/how hole? Fix or cut.
- Any ₹X→₹Y? Remove.
- Only restates label/UI? Remove.
- Invents a hunt for the wrong person/action? Remove.
- Max 2 sentences? Plain friend English? Zero aggression? No AI flavour?
- Any “room” / “pie” / soft capacity metaphor? Rewrite in plain consequence language.
