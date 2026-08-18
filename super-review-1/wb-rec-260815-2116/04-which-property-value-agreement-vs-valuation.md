# Which number goes in property — agreement, registry, valuation, or market

They ask what Property agreement value actually wants: how the loan is affected, which value to set. Two paths: recent purchase → registrar’s agreement; otherwise bank **valuation** (usually below market), so type a **conservative** number. Agreement and registry are the two Indian words. The amount on the agreement is the **white** (declared) amount. Banks do the independent valuation themselves.

## Classification
- kind: discussion | copy + product education
- status: open (meaning agreed in talk; on-page help still “sale agreement price” + “ceiling”)
- surface: Explore banks / `#hlc-property-value` / `#hlc-help-property-value` (“Use the sale agreement price.”)
- viewport: 1366×768 @2x
- speakers: Speaker A walks the two paths and the 1 crore vs agreement example. Speaker B: short **“Yes”** when A says banks do the independent valuation (`Yes.` p≈0.07 — weak ASR, but it sits in a pause after A’s line).

## Session metadata
- folder: `wb-rec-260815-2116`
- recording id: `cff0d45a-1eff-4415-a374-98232f3208a8`
- clip: 9 of 30
- started_at: 2026-08-15T15:46:08.706Z
- ended_at: 2026-08-15T15:55:10.521Z
- duration_ms: 541815 (~9 min 2 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 95
- event count: 183
- console: empty
- tabs: 1
- ASR language: `en`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- They click the property **i**, the textbox `#hlc-property-value` (value/placeholder 62,50,000), and the **i** again — teaching against the live field, not typing a new amount. Values stay ₹62,50,000.
- Clicks in this talk: **i** 03:43.747–03:45.171 (`0046.jpg`–`0048.jpg`); field 03:50.335 (`0049.jpg`); tiny scroll **03:50.693**; **i** 03:51.320; **i** 04:30.128 / 04:36.133; field 04:54.457; **i** 04:57.794 (`0060.jpg`).
- `0044.jpg` (t=215720): cursor in the property field (blue underline), 62,50,000. No new UI. Popover on or off across `0043.jpg`–`0059.jpg`.
- They never say LTV on the recording. Ceiling (`03`) is the banned word for the **cap**; this beat is **which rupee figure** to type.

## What they said (faithful, complete)

**03:07.470–03:21.370** Speaker A:
> Raw ASR: “What I want to know is that property agreement value... How does the loan get affected? Which value should I set?”
> Corrected: same customer questions — **how does this number affect the loan, which value do I enter?**

**03:33.410–03:44.850** Speaker A (example, fragmented):
> Raw ASR: “What I feel is that... My property is 8 crores. But it is actually 8 crores. So I want to say that...”
> Corrected: he starts a felt-vs-paper example. **8 crores** is what ASR captured twice (`crores.` p≈0.73 then 0.96). Do not silently change it. The contrast he **does** land next is market guess vs agreement.

**03:53.750–04:13.310** Speaker A (two paths):
> Raw ASR: “If you have a recent purchase, you get the value of your registrar's agreement. Or... Independent loan assessment is done. And it is usually less than market value. So you put a little conservative value. You think it costs 1 crore to get a better estimate.”
> Corrected: **If you bought recently, use the registrar’s / registered agreement value. Or** [if not / in general] **an independent valuation is done — usually less than market — so you enter a conservative figure.** You may **think** it is worth **1 crore**; that is the market feel, not necessarily what to type.
> ASR: **independent loan assessment ≈ independent valuation** (`assessment` p≈0.94; he uses “valuation” at 04:44, p≈0.49). `crore` p≈0.89.

**04:14.450–04:21.050** Speaker A:
> Raw ASR: “But the title of the agreement value... But the agreement is 8 crores.”
> Corrected: against that 1 crore feel, **the agreement [figure] is 8 crores** (ASR, `crores.` p≈0.41). Point: **title/label vs the number on the agreement** can disagree with what you “think it costs.”

**04:24.680–04:42.340** Speaker A:
> Raw ASR: “The new agreement... Can be the registry value. The property's agreement value. Who takes the loan from the old one? The property's agreement value.”
> Corrected: for a **new** purchase, agreement **can be the registry value** (`registry` p≈0.83). For an **old** purchase / existing house, “who takes the loan from the old [agreement]?” — the field is still **property’s agreement value**. Fragmented; they are distinguishing new sale vs old property, not naming a new input.

**04:38.940–04:51.380** Speaker A, then B:
> Raw ASR: “The amount on the agreement is white. The independent valuation... The banks do it for them. Yes.”
> Corrected: the **amount written on the agreement is the white (declared) amount** (`white.` p≈0.23). **Independent valuation — the banks do it** [themselves / for the customer]. Speaker B: **“Yes.”**

**04:54.260–05:00.260** Speaker A:
> Raw ASR: “The agreement value makes sense. Otherwise, who would take the registry?”
> Corrected: **agreement value makes sense** as what we ask. **Otherwise, who would take the registry?** (`registry?` p≈0.02 — weak, but it is the other Indian word they keep using). If we don’t ask agreement/registry, the field has no everyday hook.

**05:06.730–05:14.450** Speaker A:
> Raw ASR: “Then I don't care. I want the property agreement value. He knows what we do.”
> Corrected: after the education, **keep asking for property agreement value**; **[the user] knows what we [mean / do].** “I don’t care” = don’t over-split registry vs agreement as two fields in this beat. `05` then fights the **wording** of that label.

## First-principles problem
- What must be true: the box must collect the number **banks will actually use as the property side of eligibility** — registered/agreement (white) price for a recent buy, or a conservative stand-in because **bank valuation ≤ market**.
- Root vs symptom: “which value should I set?” is the user’s symptom. Root: the tooltip says “sale agreement price” without the two-path reality (recent registry vs valuation-below-market) and without naming **agreement vs registry**, the two words banks already use.
- Constraints: one field, not two. Banks, not Shroffin, do valuation. Do not ask the user for “market value” as if it were official. White/declared amount is the honest public number.

## Directions they considered
1. Recent purchase → registrar’s agreement value.
2. Else / in parallel → independent valuation, usually under market → type conservative.
3. Felt price (1 crore) vs agreement figure (ASR 8 crores) — don’t type the optimistic market guess.
4. New deal: agreement ≈ registry value.
5. Old property: still agreement value; don’t invent a second box in this clip.
6. White amount on the agreement; banks do valuation; **yes**.
7. Agreement value **makes sense**; otherwise why say registry at all.
8. Close: keep **property agreement value** as the ask — user can know what we do (`05` then attacks the **words**).
- Lean: educate in the **i** / Learn more; one number; conservative vs market.

## Company / user / future
- User: Indian buyers already live agreement vs registry vs “what the market says.” Help should use those words, not “ceiling.”
- Company: full picture, indicative only — we cannot override the lender’s valuation. Saying “banks do the valuation” is honest limits.
- Future: Learn more already points at `guide.html#loan-amount-property`. That guide is where the two-path explanation can live if the tooltip stays short. How to build other fields the same way: **name the figure people already have** (take-home, agreement, age in years) and say **who uses it** (banks). CIBIL next session is the same “which number / how exact” fight.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-help-property-value` plus `pages/guide.html` `#loan-amount-property` (Learn more). Label fight is `05`, not this file.
- Acceptance criteria in their words: the field answers “which value should I set?” and “how does the loan get affected?”; recent purchase → registrar’s agreement; valuation usually less than market → conservative; banks do independent valuation; agreement value makes sense.
- What NOT to do: do not add a market-value field. Do not ask the user to perform the bank’s valuation. Do not drop “sale agreement price” without replacing it with agreement/registry language they used.
- Open questions: whether 8 crores vs 1 crore was a slip (felt 1 cr, paper different) — treat as **contrast**, not as live demo data (the box still shows 62,50,000). Whether old-property vs new-purchase needs two help states — they asked the question, they did not spec two UIs.
- Related recordings:
  - continues_from: `03` (ceiling / sets on this same tooltip)
  - continues_in: `05` (label: agreement vs “as per agreement” vs official); `06` (same “which figure / who uses it” for remaining fields)

## Evidence index
- `audio.vtt` 03:07.470–05:14.450
- `audio.json` `assessment` p≈0.94; `crore` p≈0.89; `white.` p≈0.23; `Yes.` p≈0.07; `registry?` p≈0.02
- `events.json`: `#hlc-property-value` and About Property agreement value t=215719–297794; scroll t=230693
- `screenshots/0043.jpg`–`0060.jpg` (`0044.jpg` field focused)
- Site help: “Use the sale agreement price.”
