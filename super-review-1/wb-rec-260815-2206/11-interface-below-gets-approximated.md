# Or else we sit in this interface — and the things below get approximated

If they don’t tell people the hacks (`10`), they are stuck **in this interface**. The problem they name: **the things below get approximated**; when that is approximated, **then we will be able to save money** — and the sentence dies in “Then, then, then.”

They finally **scroll** to the bank table as they say “the things below.” Next clip, ~9 seconds later: they need a **different tool**; they cannot just put what they described here.

## Classification
- kind: discussion | product (this form vs another tool / approximation)
- status: open (unfinished in this recording; continues immediately)
- surface: explore-banks — **this interface** = `#hlc-inputs` + **things below** = Bank options table (Overview). First and only scroll of the session.
- viewport: 1366x768 @2x
- speakers: Speaker A trails off. Speaker B not heard. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2206`
- recording id: `125a22f8-b64d-419e-9196-9126d5f613f3`
- clip: 14 of 30
- started_at: 2026-08-15T16:36:16.832Z
- ended_at: 2026-08-15T16:43:07.910Z
- duration_ms: 411078 (~6 min 51 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 52
- event count: 71
- console: empty
- tabs: 1
- previous: `10` — if we tell them, the tool genuinely helps; **or else**…
- next: `wb-rec-260815-2213` starts 2026-08-15T16:43:16.850Z (~9 s later): “Bro, we need to make a different tool… The one we just described, we can’t just put it here.”

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Until **06:42** they have been at `y=0` (inputs card).
- **06:42.346** (`t=402346`) `scroll` `x=0, y=429.5` — first and only scroll. Matches “the things below.”
- `0051.jpg` (t=408195, last shot): scrolled view — bottom of inputs (Adjust eligibility / See options), **Filters** (Govt/PSU, Women, Green home, Insurance; Bank type All), Overview table: Canara / City Union / PNB / Bank of Baroda / Bank of India, loan amount **₹5,400**, EMI **₹48–54**, tenure 20 yrs (tiny because leftover property **₹6,000**). Rate column has a recorder mask. They do **not** discuss those tiny EMIs as the approximation problem.
- Screenshots `0049.jpg`–`0050.jpg` still top-of-card; `0051.jpg` is the table.

## What they said (faithful, complete)

**06:33.090–06:38.750** Speaker A:
> Raw ASR: “Or else, We have to sit in this interface. But in this interface, Do you know what the problem is?”
> Corrected: **or else** [if we don’t tell them the salary-slip / hacks help] **we have to sit in this interface.** **But in this interface, do you know what the problem is?**
> **This interface** = Explore banks as it is (the card they sat on for ~6.5 minutes).

**06:39.190–06:44.790** Speaker A (scroll at 06:42):
> Raw ASR: “The things below, They get approximated. And then, When this is approximated, Then we will be able to save money.”
> Corrected: **the things below get approximated.** When **this** is approximated, **then we will be able to save money.**
> **Things below** = the bank-options table they scroll into (rates, loan amount, EMI). **Approximated** = they do not define the algorithm (rounding, FOIR, incomplete inputs, “typical” values). Do not invent a formula. They link approximation to **being able to save money** — then lose the thread.

**06:46.290–06:50.410** Speaker A:
> Raw ASR: “Then, Then, Then, Then,”
> Corrected: same. Clip ends. Thought is **not** finished here.

2213 (do not file 2213’s content in this note except as continuation): they pick up that the described intelligence product **cannot just be put here**; maybe a different tool; maybe tips on this page like Google Flights — that debate is the next recording.

## First-principles problem
- What must be true: the hacks/intelligence layer either gets **told** (`10`) or the user is left with **only this form + table**. The table **below** is an **approximation**, and they were about to say what that does to saving money.
- Root vs symptom: leftover ₹5,400 loans are a leftover ₹6,000 property, not what they named. The root is **this interface cannot carry the product they just described** — 2213 says that in plain words.
- Constraints: they have not chosen “fix approximation” vs “leave this UI for job 1 and build another tool.”

## Directions they considered
- Or else: sit in this interface (bad / insufficient).
- Problem of this interface: things below get approximated → (unfinished) save money.
- Lean: unfinished on purpose; **do not** treat as a table-rounding bug ticket. The architectural call is 2213.

## Company / user / future thinking
- **Debate this clip cannot finish:** If we **tell** rural/cash people the salary-slip help (`10`), the tool “genuinely helps.” If we **don’t**, we only have this form + an approximating table. Pro of staying in this interface: job 1 (`05`) — exact details, today’s offer. Con they start to name: the table is approximated; somehow that approximation is how “we will be able to save money” — they never finish whether that save is honest (room to improve inputs) or a lie (numbers too rough to trust). 2213 then debates **different tool vs put tips here**.
- **Example:** they scroll to Canara / City Union / PNB rows (₹5,400 / EMI ₹48) while saying “things below get approximated.” Do not treat those leftover tiny loans as the example they intended; they are pointing at **the table as a class**.
- **User:** if Shroffin stays silent, they only have a form whose results feel approximate — and they already know how to probe it (`03`) and hack it (`09`).
- **Company:** comparison table is the current product; the session has been designing a **second** product (intelligence/hacks). Putting the second inside the first is the open question.
- **Future:** 2213 — different tool vs put tips here; Google Flights price commentary; product not engineering.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: **not** a one-line CSS/JS patch on the Overview table. Decision: `pages/explore-banks.html` vs a new surface. Wait for 2213 before building.
- Acceptance criteria in their words (this clip only): or else we sit in this interface; the problem is the things below get approximated; when approximated, then we can save money. **Plus** 2213: we need a different tool; we can’t just put the thing we described here.
- What NOT to do: do not “fix” ₹5,400 EMI as this issue. Do not add a second interface in this clip’s name. Do not invent what “approximated” means beyond their word. Do not stub a README.
- Open questions: what exactly is approximated (inputs, rates, loan amount). How approximation creates a **save**. Whether tips can live on this page (2213 both says different tool **and** “we don’t need two interfaces”).
- Related recordings:
  - continues_from: `09`, `10`; whole 2204→2206 intelligence thread
  - continues_in: **`wb-rec-260815-2213`** (different tool / can’t put it here / maybe put tips here anyway)

## Evidence index
- `audio.vtt` 06:33.090–06:50.410 (end of file)
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json`
- `events.json`: scroll t=402346 y=429.5; idle t=402749 duration 5526ms
- `screenshots/0049.jpg`–`0050.jpg` (card); `0051.jpg` (table below)
- `pages.json` / `RECAP.md`: Bank options, Filters
- `manifest.json` ended_at 2026-08-15T16:43:07.910Z
- `replay.spec.ts`: no scroll step generated (idles after last income click)
- Next folder: `wb-rec-260815-2213/audio.text` (“Bro, we need to make a different tool…”)
- Site `pages/explore-banks.html`: `#hlc-inputs`, bank options table
