# Rural and cash earners have no salary slip — wait, do a job, bring a slip, save ~₹5 lakh

They single out people **especially in rural** areas, who **do not show income**, who are **in cash**, who **do not have a salary slip**. Shroffin **should definitely help them**: if you actually take a salary slip it will be very beneficial; wait **4 months**, do a job, take the slip, bring it to us — **₹5 lakh**. If we tell them that, the tool will **genuinely help a lot**.

This is **company-voiced help**, unlike `02`’s farmer **gaming** story — same pay-slip object, different stance. If they don’t tell them, they are stuck in **this interface** (`11`).

## Classification
- kind: discussion | product (inclusion / intelligence for cash income)
- status: open
- surface: explore-banks occupation (Salaried needs a slip) + monthly income (take-home). No “cash” or “farmer” control on the page. Not a layout bug.
- viewport: 1366x768 @2x
- speakers: Speaker A. Speaker B not heard. ASR not diarized.

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
- previous: `09` — majority of Indians will wait months to hack the tool.
- next: `11` — or else we sit in this interface; things below get approximated → 2213.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Occupation still **Salaried**; income ₹1,00,000 (a salaried-looking demo). They do not click occupation again.
- Screenshots `0046.jpg`–`0049.jpg` (t=366196–390196): same card. The people they describe **cannot honestly fill** this card (no slip, cash, unshown income).
- Helper on income (from page snapshot): “Use take-home, not CTC.” That assumes a salary. They never open the (i).

## What they said (faithful, complete)

**05:55.950–06:04.350** Speaker A:
> Raw ASR: “Those who are special to the rural, Those who do not show their income, Those who do not show their income, Those who are in the cash, They do not have Salary Slip.”
> Corrected: **especially those in rural** [areas], those who **do not show their income**, those who are **in cash**, they **do not have a salary slip**.
> ASR: **special to the rural ≈ especially rural**. Income line is repeated. **Cash** = unaccounted / informal income, not the property “black” of `01` (related informal economy, different move: here the gap is **no slip**, not agreement vs cash on the house).

**06:05.770–06:18.690** Speaker A:
> Raw ASR: “And we should definitely help them. They should say that, If you actually take Salary Slip, It will be very beneficial for you. You wait for 4 months, Do a job, And take Salary Slip from there. And take it to us.”
> Corrected: **we should definitely help them.** [The product] should **say**: if you actually **take a salary slip**, it will be **very beneficial**. Wait **4 months**, **do a job**, take a salary slip from there, and **bring it to us** (Shroffin / the application).
> Wait is **4 months** here (not 3 or 6). **Do a job** is the honest path — not `02`’s “join a company for paper.”

**06:20.510–06:32.610** Speaker A:
> Raw ASR: “It will cost you 5 lakh rupees. This, If we tell them, Then I feel that our tool Will genuinely help a lot.”
> Corrected: **it will [save / be worth] ₹5 lakh** (ASR **cost you** is the wrong verb for the incentive they have used all clip — 5 lakh is the **prize**, as in `01` and `03`; they do not describe a ₹5 lakh fee). **If we tell them**, the tool will **genuinely help a lot**.
> Then `11`: **or else** we have to sit in this interface.

Pros they name: genuine help, ₹5 lakh, include cash/rural. Cons they do not list (bank fraud / fake employment) — they frame it as **take a real job / real slip**.

## First-principles problem
- What must be true: a large set of Indian buyers **cannot** enter a salaried comparison honestly. The tool should **tell them** that getting a real slip (wait, job) is worth ~₹5 lakh — not only compare the people who already have CTC.
- Root vs symptom: not a missing Farmer pill. The root is **no help path for cash / unshown income / no slip.**
- Constraints: “we should definitely help”; “if we tell them”; bring the slip **to us** (Shroffin as the place you return with documents). Alternative if we don’t: stuck in this interface (`11`).

## Directions they considered
- Help them; say: salary slip is beneficial; wait 4 months; do a job; take slip; come to us; ~₹5 lakh; then the tool genuinely helps.
- Alternative if we don’t: sit in this interface (`11`).
- Lean: this is a yes — help. Distinct from `02`’s “I will join a company to game salaried.”

## Company / user / future thinking
- **Debate with `02`:** Same object (salary slip). `02` is the **game** if you announce salaried wins. This beat is **help** if you tell someone with no slip that a **real job** for four months is worth ~₹5 lakh. Pro of telling: “our tool will genuinely help a lot”; includes rural/cash India, not only urban take-home. Con: 2204 — naming the move can still become “get any slip.” They tried to block that con with **do a job**.
- **Example:** wait 4 months, do a job, take salary slip, bring it to us, ~₹5 lakh. Parallel to `03`’s wait 3 months / 695→700 / wife / ₹5 lakh, aimed at a different person.
- **User:** rural / cash / no slip — cannot play Explore banks as designed; will stay invisible or invent papers (`02`).
- **Company:** independence/transparency includes **these** buyers, not only take-home-salary urban salaried. “Take it to us” is document + apply-once, not a bank branch.
- **Future:** 2213’s tips (“if you get a six-month salary…”) continue this. Compliance: advice to take a **real** job/slip vs coaching fake employment — they said **do a job**.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: hacks/intelligence copy (`04`/`06`/`09`) and/or occupation/income empty states — not a new occupation value unless a later clip asks. Guide documents on income already linked from occupation help.
- Acceptance criteria in their words: definitely help rural / cash / no-slip people; tell them a salary slip is very beneficial; wait 4 months, do a job, take the slip to us; ~₹5 lakh; then the tool genuinely helps a lot.
- What NOT to do: do not merge this into `02` as the same “farmer games the pill” ticket. Do not add a Cash occupation chip from this clip alone. Do not promise ₹5 lakh as a guaranteed save. Do not skip “do a job” and ship “get any slip.”
- Open questions: 3 vs 4 vs 6 months. Whether “cost you 5 lakh” could mean opportunity cost — unlikely given every other 5-lakh line is a save; still, ASR says **cost**.
- Related recordings:
  - continues_from: `02`, `09`
  - continues_in: `11`; `wb-rec-260815-2213` (self-employed, six-month salary tips)

## Evidence index
- `audio.vtt` 05:55.950–06:32.610
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (Salary Slip, cash, rural)
- `events.json`: idle
- `screenshots/0046.jpg`–`0049.jpg`
- `pages.json`: occupation Salaried/Self-employed only
- Site `pages/explore-banks.html`: `.hlc-occupation-pills`, `#hlc-monthly-income`
