# Cursor Theme Fundamentals — paste-ready prompt

How to use this (for you, not for the AI):

This is a **later** job. Run it only after the Theme Grouper has already written files in `super-review-1/themes/`.

You paste **one prompt, one time**, into **one** new Cursor Agent chat. Stop there.

1. Open a **new Cursor Agent chat** with the `aoo-static-gh` folder available.
2. Copy **everything from the line `COPY FROM HERE` down to `COPY TO HERE`**.
3. Paste it as your only message. Do not add extra instructions.
4. Let that one agent run until `super-review-1/themes/_theme-fundamentals.md` exists.

This job does not find issues. It does not group issues. It does not rank themes. It does not fix the website. It only restates each existing theme as the **general human problem** underneath it.

---

COPY FROM HERE

You are Cursor Agent in Agent mode. You are an expert at naming the real problem underneath a pile of specific complaints.

This message is the only prompt the human will give you. There is no second prompt. You must do the whole job from this one message.

You have exactly one job: read every existing theme file, boil each theme down to the **fundamental issue** — what was actually going wrong for a person — and write those boiled issues in **plain everyday English**, **at most 3 sentences each**. Do nothing else. Do not fix the website. Do not suggest what the correct design is. Do not invent themes. Do not merge themes. Do not split themes. Do not reopen recordings. Do not reread `issue-*.md`.

## Why this work exists (do not skip)

The theme files already say what was wrong **on this website**, with page names, button names, and “this is wrong / that would be right.” That is too local to think with.

The founder needs one page where each theme is the **same kind of problem you would recognize on any product**, even if you had never seen this website, never heard the product names, and were given no other context. If the sentence only makes sense after you know which page it was on, you have not boiled far enough.

## Strict input lock (non-negotiable)

**Allowed input — open only these:**

- `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/theme-*.md`
- `/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-index.md` (completeness check only: which theme files should exist)

That is the whole universe. Every `theme-*.md` file `find` returns must appear in the output **exactly once**, in the same `theme-01` … order.

**Forbidden input — do not open, do not skim, do not “just check”:**

- any `wb-rec-*/issue-*.md`
- any `wb-rec-*/_theme-cards.json`
- any raw recorder file
- the website
- this prompt file, and the other prompt files
- `_theme-recurrence.md`, `_grouping-ledger.json`, `_recurrence-ledger.json`
- any older `_theme-fundamentals.md` (overwrite it)

If index and live `theme-*.md` files disagree, **the live `theme-*.md` files win**. Note the mismatch in a one-line note at the bottom. Do not invent a theme to match the index.

## What you are extracting

For each theme, answer only this:

**What kind of thing was going wrong for a person, at the root — not which screen, not which button, not what they said to do instead.**

Strip:

- page names, button names, product names, company names, URLs
- this website’s special words
- the proposed fix (“should be X”, “instead of Y”, “the correct way is”)
- expert talk (design words, finance words, tool words)

Keep:

- the **kind of object** in ordinary life (a first screen, a list, a form, a choice, a number, a name, a hidden extra, a note about money)
- the **kind of failure** in ordinary life (hidden, off-balance, too exact, named the wrong thing, takes you away, does not explain itself, looks optional but still changes the answer)

The test: cover the original title with your hand. Read only your 1–3 sentences. A stranger who has never seen this website must still understand the problem. If they would need the page name to get it, rewrite.

## Hard laws

1. **One block per existing theme.** Same count, same numbers (`theme-01` stays `theme-01`). Do not merge two themes because the boiled sentences sound close. Do not split one theme into two. If two boiled versions sound the same, you boiled too far or named the wrong root — find the real difference in the **kind of failure**, not in the page name.
2. **At most 3 short sentences** per theme. Prefer 2. One is enough when the root is one idea. Never a fourth sentence. Never a bullet list inside a theme.
3. **No jargon.** If a school student would have to look the word up, do not use it. Forbidden examples: hero, CTA, UX, UI, affordance, eligibility, dropdown, accordion, checkbox, viewport, layout, copy, footer, disclaimer (as a legal word), CIBIL, NBFC, EMI, ROI, MCLR, BPLR, scheme, concession, overdraft, tenure, co-applicant — unless you can say the same thing with ordinary words and you do so. Prefer: form, list, button, extra questions, money, name, choice, hidden, surprise.
4. **No website-specific leftovers.** Do not name this company, this product, this page, this button, this recording, or this review. Do not say “on the home page” or “in Explore banks.” The sentence must stand alone.
5. **Do not write “this is wrong / that is correct.”** Do not prescribe. Do not say should, instead of, the right way, they wanted, fix this by. Describe the problem as it is, not the replacement.
6. **Do not add facts** that are not in the theme file. Boil. Do not invent a nicer-sounding problem.
7. **Do not suggest fixes, owners, or code.** Do not edit theme files. Do not edit the website. Do not commit.
8. **Same evidence → same boiled sentences.** Be deterministic. Everyday words. Short. Concrete.

## How to boil (do this for every theme, in this order)

1. Read the theme title, the short human summary, and the pinpoint. If those are not enough to name the root, read **Exact theme** only. Do not read the whole file unless the root is still unclear.
2. Ask: **what was the person actually bumping into?** Not the control’s name. Not the page. The bump.
3. Name it as if it could happen on a ticket app, a shop, a bank form, or a government site — because at the root it could.
4. Write 1–3 sentences. Then delete every proper name and every “should.”
5. Read it out with no other context. If it still needs this website to make sense, boil again.
6. Check it is not a fix in disguise. “Hidden questions still change the answer” is a problem. “Show them as columns” is a fix. Keep only the problem.

## Bad vs good (copy this standard)

**Theme about a first-screen title and button that do not sit in the middle of their block**

- Bad (this website): The home-page headline and Explore banks button are not centered.
- Bad (this vs that): The headline should be centered, not sitting too high.
- Good: The main words and the main button do not sit in the middle of the space they belong in. One empty side is larger than the other, so the whole block looks off-balance.

**Theme about extra questions tucked behind a control, looking optional, still changing the result**

- Bad (this website): Extra eligibility sits behind Adjust eligibility instead of as columns.
- Bad (this vs that): Those questions should stay visible and pre-filled, not hidden.
- Good: Questions that change the answer are tucked away, so they look optional even though they still change the result. People can skip them, then get a surprise later and stop trusting the tool.

**Theme about a form that asks for one exact number when life is a range**

- Bad (this website): CIBIL is one exact number, so the table can only show one rate.
- Bad (this vs that): Use a range or a dropdown, not an exact score.
- Good: The form asks for one exact number when the real world is a band. Because of that, the list can only show one answer, even though several answers would be true.

**Theme about choices that can all be true, set up so picking one turns the others off**

- Bad (this website): Bank type / Rate / Facility are exclusive buttons, not checkboxes.
- Bad (this vs that): Public and Private should both be ticked.
- Good: You can only pick one option at a time, even when more than one can be true together. The names of the options also do not tell you what they mean.

**Theme about leaving the choice to read an explanation, then having no way back**

- Bad (this website): Concessions Learn more takes you off the filter, and the page has no Back.
- Good: To understand a choice, you are sent to a different page. Once you are there, there is no clear way back to the choice you were making.

These goods are the **kind** of writing required. They are not the required wording for those themes. Write from the files.

## How Cursor must execute

This job is small. **Do it yourself in this chat.** Do not launch Task children. Do not ask the human to confirm.

1. Inventory
2. Read each `theme-*.md` far enough to name the root
3. Write the fundamentals file
4. Verify

Forbidden: asking the user to paste anything; opening issue files or recordings; editing theme files; editing the website; committing.

### Step 1 — Inventory

Run:

```bash
find "/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes" -name 'theme-*.md' | sort
```

If this returns **zero** files, stop. Reply only: Theme Grouper output is missing; run that job first. Do not invent themes.

Keep the full path list. That list is the **universe**. Every path must appear in the output exactly once.

### Step 2 — Read and boil

For each file, in `theme-01` order: boil using the laws and the procedure above.

### Step 3 — Write

Write:

`/home/yash/Projects Etc & aoo/aoo-static-gh/super-review-1/themes/_theme-fundamentals.md`

This is the human deliverable. A non-developer who has never seen the website should understand every block with no other file.

### File shape (mandatory)

First lines after the title: **at most 4 short human lines**. No jargon. No tool names. No JSON. Those 4 lines must say: each existing theme is restated as the general problem underneath it; not this website’s pages or buttons; not what the correct version would be; readable with no other context.

Then a numbered list, **theme-01 first**, one block per theme:

```markdown
## theme-NN — <original theme title, only as a map back to the file>

<1 to 3 short sentences. General problem only.>
```

- The heading’s `theme-NN` and original title exist **only** so a person can open the matching theme file. They are not the boiled issue.
- The sentences under the heading must **not** repeat page names or button names from that title. If the title is website-specific, the sentences still must not be.
- Do not add a pinpoint line, a file list, quotes, YAML, or JSON.
- Do not add a “how to fix” line.

After the list, one short note:

- These are the same themes as the theme files, boiled to the general problem. They are not a new grouping and not a fix list.

No other sections.

### Step 4 — Verify before you reply

- `_theme-fundamentals.md` exists
- number of blocks equals `find` count of `theme-*.md`
- every `theme-NN` present once, in order, no extras
- every block is 1–3 sentences (count them)
- no block names this website, its pages, or its buttons
- no block says should / instead of / the right way
- no jargon from the forbidden list unless rewritten in ordinary words
- first 4 lines are human, no JSON
- you did not open `issue-*.md` or recorder files
- you did not edit existing theme files

Fail any of those → rewrite the file before you reply. Do not explain the failure in a long chat. Fix it.

## Reply to the user with only

- how many themes were boiled
- confirmation `_theme-fundamentals.md` is written
- the list: `theme-NN` plus the boiled 1–3 sentences (so they can read it in chat too)

Do not paste the original theme bodies.

COPY TO HERE
