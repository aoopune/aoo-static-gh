# About page – How to change the data (Google Sheets)

The About page at **http://localhost:8765/pages/about.html** loads from the **About_Us** sheet.

**Spreadsheet**: [ApplyOnlyOnce - Loan Data](https://docs.google.com/spreadsheets/d/1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g/edit)

---

## 1. Remove the duplicate mission line

The line **"Our mission is to help people understand and use banking effortlessly."** already appears **once** under the page title (in the page intro).

- **Do not** add this same sentence again in the **About_Us** sheet.
- If you have a row in About_Us whose **content** is only this mission line, **delete that row** or change its content so the mission appears only under the title.

The code also skips any row whose content is exactly that mission text, so it won’t show twice even if one row still has it.

---

## 2. Show sentences separately + bold

The site shows **each line** in the **content** column as a **separate paragraph**. Use **Alt+Enter** for a new line in the same cell.

**Bold:** Wrap text in double asterisks to show it bold on the site, e.g. type `**applyonlyonce.com**` to get **applyonlyonce.com**.

### Sheet structure (About_Us)

| Column A   | Column B   | Column C   |
|-----------|------------|------------|
| **section** (optional) | **heading** | **content** |
| (optional) | Section title | One sentence/line per line (Alt+Enter). Use **text** for bold. |

- **Row 1** = headers: `section` | `heading` | `content` (order can vary).
- **content** = one line per paragraph. Use **word** for bold.

---

## 3. Exact content for Pic 1 – "Why we started applyonlyonce.com?"

**heading** (cell):  
`Why we started applyonlyonce.com?`

**content** (one line per paragraph – use Alt+Enter between lines). Copy exactly; the ** around applyonlyonce.com makes it bold on the site:

```
Most students take an education loan without ever knowing if it's the right one.
Loan terms are hard to understand and even harder to compare across banks.
Each lender asks for different documents, forcing students to repeat the same work.
Applications are limited by branch access, making nationwide comparison time-consuming.
And much of the advice students receive is influenced by commissions, not outcomes.
The result is a process that lacks transparency, where students choose what's convenient instead of what's right.
We built **applyonlyonce.com** to change that.
One independent platform that brings side-by-side loan comparison of banks, standardizes documentation, and lets students apply only once across all lenders at zero cost.
You get complete information.
You stay in control.
You make the decision.
```

---

## 4. Exact content for Pic 2 – "How do we do it?"

**heading** (cell):  
`How do we do it?`

**content** (one line per paragraph – use Alt+Enter between lines). First line uses ** for a bold subheading; **competitive process** stays bold in the middle of a sentence:

```
**To stay transparent, independent, and unbiased:**
We are not partnered with any bank or NBFCs. Lenders do not pay us to be listed, ranked, or recommended.
We collect loan terms, eligibility criteria, document requirements, and publicly available application steps from lenders' official websites and verified interactions with their teams.
We present all of this in a single, standardized format so it's easy to understand and compare without giving preference to any lender.
Once you submit your application, we share it with multiple lenders and create a **competitive process**, where each lender responds with their best offer for you. You receive all the offers transparently and choose the one that suits you best.
We provide the information, the competition, and the platform. You make the decision.
```

---

## 5. Summary – what to change in the sheet

1. **About_Us tab**  
   Use columns: **heading** and **content** (and optional **section**). Row 1 = headers.

2. **Row 2 – "Why we started..." (Pic 1)**  
   - heading: `Why we started applyonlyonce.com?`  
   - content: Paste the block from **Section 3** above. Use **Alt+Enter** at the end of each line. Type `**applyonlyonce.com**` (with the two asterisks on each side) so it appears bold.

3. **Row 3 – "How do we do it?" (Pic 2)**  
   - heading: `How do we do it?`  
   - content: Paste the block from **Section 4** above. Use **Alt+Enter** at the end of each line. First line: `**To stay transparent, independent, and unbiased:**` (bold subheading). In the “competitive process” sentence use `**competitive process**` for bold.

4. **No duplicate mission**  
   Do not add a row whose content is only the mission line; it already appears under the page title.

5. **Bold anywhere**  
   In any content cell, type `**word or phrase**` (two asterisks on each side, no spaces between asterisks and the word) to show it bold on the site.

After you save the sheet, refresh the About page to see the changes (no redeploy needed).
