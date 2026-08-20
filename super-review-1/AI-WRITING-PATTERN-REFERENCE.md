# AI writing pattern reference

**Purpose:** A shared lookup for humans and agents. If a passage matches the patterns below **in clusters**, treat it as **likely AI-written or AI-heavily polished** — not as proof on its own.

**Location:** `super-review-1/AI-WRITING-PATTERN-REFERENCE.md`

**Sources distilled from:** Wikipedia Signs of AI writing / AIDETECT; The Atlantic (2026); NYT + Science Advances (Kobak et al.); Guardian (2024, 2026); Yaps, Augmented Educator, YourAIPlaybook, HowManyWords, WriteHuman, Grammarly, Memeburn, CASRAI, HumanizeAI, LinkedIn (Beutler); Search Engine Watch, Towards Data Science, arXiv slop paper, Columbia IGP; Bloomberry, HumanizeMy.ai, PME, IJTS thesis study; Language Jones (YouTube).

---

## How to use this file

### For agents

1. Read this file when asked to **audit copy**, **flag AI slop**, or **review whether text sounds machine-written**.
2. Scan the passage for **pattern IDs** (P-xxx) below.
3. Apply the **stack rule** (Decision rules section). **Never flag from one pattern alone** unless it is a **residue** pattern (R-xxx).
4. Output format when reporting:

```text
AI pattern check: [likely | possible | unlikely]
Matched: P-012, P-031, P-044 (3 patterns, 2 categories)
Residue: R-003
Note: [one line — e.g. "hedge + contrast + style words, no concrete specifics"]
```

### For humans

1. Read the opening of any suspicious text **slowly**.
2. Check the **Quick stack test** (below). If 3+ boxes tick, read the rest with high suspicion.
3. Use **Pattern catalog** to name what you are seeing.
4. Remember: formal academic English, careful ESL writing, and legal/technical boilerplate can mimic many tells. **Clusters + missing specifics** matter more than one fancy word.

---

## Decision rules (mandatory)

### Stack rule

| Match count | Same passage (~150–400 words) | Verdict |
|-------------|----------------------------------|---------|
| 0–1 non-residue patterns | — | **Unlikely AI** (do not accuse) |
| 2 patterns, **same category** (e.g. two vocabulary tells) | — | **Possible AI** — look closer |
| 2 patterns, **different categories** (e.g. rhetoric + rhythm) | — | **Likely AI-assist** |
| 3+ patterns **or** 1 residue + 2 patterns | — | **Strong likely AI** |
| Any **R-xxx residue** alone | — | **Near-certain AI paste** (still verify context) |

**Categories:** Vocabulary · Rhetoric · Rhythm · Content · Format · Residue · Meaning

### What this file does **not** do

- Does **not** prove authorship. No single em dash, "delve," or rule-of-three proves AI.
- Does **not** replace fact-checking. Fabricated citations (P-070) are a separate high-confidence signal.
- Does **not** mean "bad writing." Humans can write badly and still be human.

### Strongest signals (research-backed)

1. **Population-level style-word spikes** in academic text (delve, underscore, intricate, pivotal, showcase, meticulous) — meaningful at scale, weak in one sentence.
2. **Durable register** (HumanizeMy.ai): hedged + enumerating + helpful-textbook voice — `overall`, `important`, `including`, `may`, `such`, `also` — often stronger than meme words.
3. **2026 structural tells** (WriteHuman): `ensuring`, `highlights`, `supports`, `reflects`, `rather than`, **"X plays a crucial/critical/important role in shaping Y"**.
4. **Concept incoherence** (Atlantic, Language Jones): fluent words, broken metaphor / mixed frame — e.g. "nestled amid war," "overarching pillars that undergird."

---

## Quick stack test (human, ~30 seconds)

Tick any that apply in the **first 200 words**:

- [ ] Opens with empty scene-setter ("In today's fast-paced…", "In today's digital age…", "When it comes to…")
- [ ] Uses **"not X, it's Y"** or **"not just X but Y"** more than once
- [ ] Three or more **style words** from the vocabulary list (same section)
- [ ] Sentences mostly the **same length**; reads like a metronome out loud
- [ ] **No concrete specifics** (names, dates, numbers, failures) where a human expert would include them
- [ ] **Both-sides balance** on a topic that should have a clear take
- [ ] Ends with **"In conclusion…"** or restates the intro without new insight
- [ ] **Chatbot residue** (Certainly!, I hope this helps, curly quotes in casual paste)

**3+ ticks → likely AI-assist.** **5+ ticks → strong likely AI.**

---

## Pattern catalog

Each entry: **ID · Category · Pattern · If you see this →**

### A. Vocabulary (style words)

These words are **over-represented in LLM output** vs human writing (Kobak et al., PME, Bloomberry). They **co-occur** — where one appears, others often follow.

| ID | Pattern | If you see this → |
|----|---------|-------------------|
| P-001 | **delve** / delve into | Likely AI-assist (stronger 2023–2024; still a mild signal after) |
| P-002 | **underscore** (verb, not literal underline) | Likely AI-assist in formal/marketing copy |
| P-003 | **tapestry** (abstract metaphor) | Likely AI-assist |
| P-004 | **pivotal** / crucial / vital / key (inflated importance) | Likely AI-assist |
| P-005 | **landscape** (abstract noun: "the evolving landscape") | Likely AI-assist |
| P-006 | **showcase** / boast (meaning "has") / garner | Likely AI-assist |
| P-007 | **intricate** / intricacies / meticulous / meticulous ly | Likely AI-assist |
| P-008 | **testament** ("serves as a testament to") | Likely AI-assist |
| P-009 | **foster** / cultivate / harness / leverage (verb) | Likely AI-assist |
| P-010 | **realm** / ecosystem (abstract) | Likely AI-assist |
| P-011 | **robust** / seamless / comprehensive / multifaceted | Likely AI-assist (context: marketing filler) |
| P-012 | **Additionally** (sentence opener), **Moreover**, **Furthermore**, **Ultimately** | Likely AI-assist when chained |
| P-013 | **ensuring** / ensures / **highlights** / supports / reflects | **Strong 2026 tell** (WriteHuman) |
| P-014 | **rather than** (hedged comparison) | **Strong 2026 tell** when repeated |
| P-015 | **overall**, **important**, **including**, **may**, **such**, **also** (cluster) | **Durable register tell** — hedged list-building voice |
| P-016 | **align** / aligns with / resonate with | Likely AI-assist |
| P-017 | **revolutionize** / game-changer / cutting-edge / transformative | Likely AI-assist (hype without proof) |
| P-018 | **navigate** (metaphorical: "navigate the complexities") | Likely AI-assist |
| P-019 | **at its core** / fundamentally / essentially | Likely AI-assist (empty framing) |
| P-020 | **It is important to note that** / **Generally speaking** / **To some extent** | Likely AI-assist (excess hedging) |

**Vocabulary cluster rule:** **3+ IDs from P-001–P-020 in one short passage → likely AI-assist.**

**Era note (Wikipedia / research):**

- **2023–mid-2024:** delve, tapestry, pivotal, underscore, vibrant, meticulous
- **mid-2024–mid-2025:** align with, showcasing, emphasizing, fostering
- **2025–2026:** ensuring, highlights, role in shaping, rather than

---

### B. Rhetoric (sentence shapes)

| ID | Pattern | If you see this → |
|----|---------|-------------------|
| P-030 | **Negative parallelism:** "It's not X, it's Y" / "It is not X; it is Y" | Likely AI-assist when **2+ times** in one piece (Atlantic; measurable in corp comms) |
| P-031 | **Not just X but Y** / **Not only X but also Y** | Likely AI-assist |
| P-032 | **No A, no B, just C** (triple negation setup) | Likely AI-assist (common in AI fiction) |
| P-033 | **Rule of three:** adjective, adjective, and adjective / three parallel phrases **in most paragraphs** | Likely AI-assist |
| P-034 | **False range:** "From X to Y" with no real spectrum ("From intimate gatherings to global movements") | Likely AI-assist |
| P-035 | **Symmetric argument:** "On one hand… on the other hand…" / both-sides when one side would do | Likely AI-assist |
| P-036 | **Participial tail:** main clause + ", highlighting/underscoring/emphasizing…" (no new fact) | Likely AI-assist |
| P-037 | **Role-in-shaping formula:** "X plays a crucial/critical/important role in shaping Y" | **Strong 2026 tell** |
| P-038 | **Compulsive summary:** "In conclusion…" / "Overall…" / restates intro on a **short** piece | Likely AI-assist |
| P-039 | **Empty opener:** "In today's fast-paced digital landscape/world/age…" | Likely AI-assist |
| P-040 | **Fake invitation:** "Let's delve into…" / "Let's unpack…" | Likely AI-assist |
| P-041 | **Copula avoidance:** "serves as" / "stands as" / "functions as" / "boasts" instead of **is** / **has** | Likely AI-assist |
| P-042 | **Challenges + future outlook:** "Despite its [praise], [subject] faces challenges…" then sunny forecast | Likely AI-assist (Wikipedia formula) |

---

### C. Rhythm (burstiness)

| ID | Pattern | If you see this → |
|----|---------|-------------------|
| P-050 | **Low burstiness:** sentences mostly same length (~18–28 words), similar shape | Likely AI-assist |
| P-051 | **Uniform paragraphs:** most paragraphs 3–5 sentences, similar weight | Likely AI-assist |
| P-052 | **Monotone read-aloud:** no short punchy sentence after a long one | Likely AI-assist |
| P-053 | **List cadence:** every section same length, same rhythm, three-part structure | Likely AI-assist |

**Rhythm rule:** P-050 + P-051 together → likely AI-assist even without vocabulary tells.

---

### D. Content (what is missing or inflated)

| ID | Pattern | If you see this → |
|----|---------|-------------------|
| P-060 | **Puffery / legacy inflation:** "pivotal moment," "enduring legacy," "broader landscape," "indelible mark" on mundane facts | Likely AI-assist |
| P-061 | **Vague authority:** "Experts believe," "Studies show," "Critics argue" — no named source | Likely AI-assist |
| P-062 | **Missing specifics:** no names, dates, numbers, failures where a real expert would be concrete | Likely AI-assist |
| P-063 | **Synthetic balance:** "While X offers benefits, it also presents challenges" (empty, universal) | Likely AI-assist |
| P-064 | **Promotional tone:** "nestled," "vibrant," "rich tapestry," travel-brochure praise in encyclopedic context | Likely AI-assist |
| P-065 | **Notability hammering:** lists of outlets / "independent coverage" / "maintains an active social media presence" | Likely AI-assist |
| P-066 | **Flat helpfulness:** agreeable, frictionless, no struggle, doubt, or idiosyncrasy | Likely AI-assist (Atlantic) |
| P-067 | **Too polished for context:** supposedly rushed email/Slack with zero typos + full AI register | Likely AI-assist |

---

### E. Format (surface / paste residue)

| ID | Pattern | If you see this → |
|----|---------|-------------------|
| P-080 | **Em dash overuse:** 2+ em dashes per ~200 words where commas would do | Possible–likely AI-assist (secondary tell; weaker alone in 2026) |
| P-081 | **Title Case Everywhere** in headings | Likely AI-assist |
| P-082 | **Bold-label lists:** `**Term:** definition` repeated | Likely AI-assist |
| P-083 | **Emoji as section markers** (🚀 in headers) | Likely AI-assist |
| P-084 | **Curly quotes** `" "` in casual paste from plain editor | **High-confidence paste from chatbot** |
| P-085 | **Markdown/chat debris:** `[cite: 3]`, `[Insert statistic]`, `----` between sections | **Near-certain AI paste unreviewed** |

### F. Residue (near-certain unreviewed AI)

| ID | Pattern | If you see this → |
|----|---------|-------------------|
| R-001 | **Certainly!** / **Of course!** / **Absolutely!** / **I'm here to help** at start | **AI paste** |
| R-002 | **I hope this helps!** / **Let me know if you'd like…** at end | **AI paste** |
| R-003 | **Here's a breakdown:** / model-specific boilerplate (Gemini, DeepSeek "Certainly!") | **AI paste** |
| R-004 | Prompt text left in published copy | **AI paste** |

**Residue rule:** Any **R-xxx** → treat as **AI-written until proven otherwise** (human forgot to delete wrapper).

---

### G. Meaning (deepest tell)

| ID | Pattern | If you see this → |
|----|---------|-------------------|
| P-090 | **Concept collision:** mixed metaphors that don't share one frame ("overarching pillars that undergird"; "nestled amid war") | **Strong likely AI** — words co-occur statistically, not conceptually |
| P-091 | **Sycophantic justification:** when challenged, text doubles down with absurd rationalizations instead of correcting | **Strong likely AI** (interactive; rare in static copy) |
| P-092 | **Uniform off-ness:** tone, word choice, structure, and argument all slightly wrong together — nothing to "keep" in edit (Atlantic) | **Strong likely AI** |

**Meaning rule:** P-090 + any 2 patterns from other categories → **strong likely AI**.

---

### H. Academic / integrity (AI-specific failure modes)

| ID | Pattern | If you see this → |
|----|---------|-------------------|
| P-070 | **Fabricated or mismatched citations** — DOI dead, paper doesn't say what text claims | **High-confidence AI involvement** (not style alone) |
| P-071 | **Style-word stack in abstract** — delve + underscore + intricate + crucial in one abstract | **Likely LLM polish** (Science Advances / PubMed studies) |
| P-072 | **Abstract sounds generic; methods/results suddenly specific** | **Possible mixed human/AI authorship** |

---

## Slop vs AI-assist (Columbia IGP / arXiv)

**AI-assist:** Text may be useful; human may have directed ideas; editing may remain.

**AI slop:** Low-effort, high-volume, optimized for engagement/SEO/cost — **looks more complete than the work behind it deserves.**

Slop adds these patterns (overlap with above):

| ID | Slop signal | If you see this → |
|----|-------------|-------------------|
| S-001 | Template farm: same structure, only keyword/product swapped | Slop |
| S-002 | Implausible output rate (one "author," many unrelated topics) | Slop |
| S-003 | No accountable owner, methodology, or correction path | Slop |
| S-004 | Low information density: many words, no insight | Slop |
| S-005 | Off-topic padding, relevance failure | Slop |

---

## Model dialects (weak priors only)

Use only as **tie-breakers** when other patterns already match. **Never accuse from dialect alone.**

| Model | Pet patterns |
|-------|----------------|
| ChatGPT | em dashes (earlier), delve, tapestry, "In today's digital age," Certainly!, in conclusion |
| Claude | toolkit, move, self-correction ("on reflection"), fewer em dashes |
| Gemini | "Here's a breakdown," buckets, gaps, quietly, amid |
| Grok | causal, empirical, correlate, underscore (scientific register) |

---

## False positives (do not accuse from these alone)

| Human context | Why it mimics AI |
|---------------|------------------|
| Non-native academic English | Formal, hedged, symmetric — detectors flag ~61% wrongly (Stanford) |
| Legal / policy / technical docs | Boilerplate, hedging, uniform structure on purpose |
| Careful editor / Style guide (Chicago) | Em dashes, curly quotes, Title Case |
| Classical rhetoric / speeches | Rule of three, antithesis ("not X but Y") — Shakespeare, ads, coaches |
| Neurodivergent or highly formal writers | Low burstiness + formal vocabulary |
| Pre-2022 text | Cannot be ChatGPT-generated |

---

## Agent audit procedure (copy-paste workflow)

```text
1. Load AI-WRITING-PATTERN-REFERENCE.md
2. Split text into passages (~200 words) if long
3. For each passage:
   a. List all matching P-xxx, R-xxx, S-xxx IDs
   b. Count categories hit (Vocabulary, Rhetoric, Rhythm, Content, Format, Meaning)
   c. Apply stack rule → verdict
   d. Note missing specifics / vague authority / citation issues separately
4. If verdict ≥ "likely AI-assist":
   - Quote 1–2 example phrases
   - List matched IDs
   - Suggest human fix: add specifics, cut hedges, replace style words, break templates
5. Never output "100% AI" — use: unlikely | possible | likely AI-assist | strong likely AI | near-certain paste (residue)
```

---

## Human fix cheatsheet (de-AI the feel)

| If matched | Try instead |
|------------|-------------|
| P-030–P-032 contrast formulas | State the claim once, directly |
| P-001–P-020 style words | Plain verb: is, has, shows, help, use |
| P-013–P-015 ensuring/highlights/rather than | Delete or replace with concrete verb + evidence |
| P-037 role in shaping | Say what actually happens, with one example |
| P-050–P-053 even rhythm | One short sentence. Then a longer one with a comma. |
| P-062 missing specifics | Add one real number, name, date, or failure |
| P-080 em dash pile | Period or comma |
| P-039–P-040 empty openers | Delete first paragraph; start at the point |

---

## Source index (for humans)

| Topic | Primary reference |
|-------|-------------------|
| Field guide (widest pattern list) | [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) |
| Cleanup / verification | [Wikipedia: AIDETECT](https://en.wikipedia.org/wiki/Wikipedia:AIDETECT) |
| AI feeling / editing impossibility | [Atlantic, May 2026](https://www.theatlantic.com/technology/2026/05/how-to-tell-ai-writing/687345/) |
| Negative parallelism | [Atlantic, Jul 2026](https://www.theatlantic.com/technology/2026/07/ai-chatbot-writing-tic-negative-parallelism/687892/) |
| PubMed excess vocabulary | [Science Advances / Kobak](https://www.science.org/doi/10.1126/sciadv.adt3813) |
| AI-ese / delve / RLHF | [Guardian TechScape 2024](https://www.theguardian.com/technology/2024/apr/16/techscape-ai-gadgest-humane-ai-pin-chatgpt) |
| Language change / fiction | [Guardian Jul 2026](https://www.theguardian.com/books/ng-interactive/2026/jul/04/future-of-fiction-next-great-novel-ai-language-chat-gpt) |
| 2026 structural tells (data) | [WriteHuman Apr 2026](https://writehuman.ai/blog/ai-tells-in-2026) |
| Durable register (not delve) | [HumanizeMy.ai Jun 2026](https://humanizemy.ai/research/corpus-shift-nlp) |
| Pattern corpus | [Bloomberry AI Sentence DNA](https://www.bloomberry.ai/research/ai-writing-patterns) |
| Slop definition | [Columbia IGP Jun 2026 PDF](https://igp.sipa.columbia.edu/sites/igp/files/2026-06/AI%20Slop%20and%20the%20Information%20Ecosystem_IGP%20Report.pdf) |
| Concept incoherence tell | [Language Jones YouTube](https://www.youtube.com/watch?v=ORgKY9AlybA) |

---

## Changelog

| Date | Change |
|------|--------|
| 2026-08-20 | Initial reference compiled from canonical guides, outlets, how-to lists, slop research, and vocabulary studies |
