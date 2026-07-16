# Root cause: why the table looked different on the website

## What you wanted

The table (form + results) on the website should look **exactly** like the table app in `table/index.html` – same layout, same “54 offers…” + Submit on one line, same popups (tooltips, filters, view details). No change to functionality or logic.

## Deepest root cause

**One document, two style sources.**

- **Table app** (`table/index.html`): One HTML file, one `<style>` block. No other CSS. The form gets its layout only from that file. So it always looks as designed.

- **Website** (`aoo-static-gh/index.html`): The page loads **the site’s CSS** (`style.css`) first – global rules for `.card`, `.btn`, `form`, layout, etc. Then the table **script** runs and injects the table’s HTML and **its own** CSS into `#loan-table-root`. So inside the same document you have:
  1. Site CSS (already applied to the whole page)
  2. Table CSS (injected later, scoped with `.aoo-loan-table-wrap`)

So the table runs in the **same document** as the rest of the site. That causes:

1. **Cascade and specificity**  
   Site rules (e.g. `.card`, `.btn`, `form`) and table rules (e.g. `.aoo-loan-table-wrap .form-row`) both apply. Depending on specificity and order, site CSS can override the table’s layout (e.g. grid, flex, alignment). So the form can look different even though the table’s own CSS is correct.

2. **No real isolation**  
   As long as the table lives in the same document, any global or high-specificity rule in `style.css` (or added later) can affect it. Overriding with `!important` and high-specificity selectors is fragile and was still not reliable (e.g. cache, load order).

3. **Popups**  
   Popups (tooltips, filter menus, view details) are portaled to `document.body`. In the table app, that’s the only document. On the website, that’s still the **main page** body, so they were still in the same document as the site CSS and layout, and could be clipped or mis-styled by the site (e.g. `overflow`, stacking context).

So the **fundamental** reason the website didn’t look like the original was: **the table and the site share one document and one CSS cascade.** As long as that’s true, the site’s CSS can always affect the table.

## Fix: same code, separate document (iframe)

To guarantee the table looks **exactly** like the original without touching functionality or logic:

- **Run the table in its own document** so that **no** site CSS is applied to it.
- The only way to do that on the same origin without changing the table’s code is to load it in an **iframe**.

What we did:

1. **`table-embed.html`**  
   A minimal page that:
   - Does **not** load `style.css` (no site CSS at all).
   - Only has a small reset (`*`, `body`, `#loan-table-root`).
   - Loads the same **standalone table script** (`js/aoo-loan-table-standalone.js`) and mounts it into `#loan-table-root`.

   So in that document the **only** CSS is what the table script injects – the same CSS as in the table app (scoped with `.aoo-loan-table-wrap`). Layout, form row, “54 offers…” + Submit, and popups are exactly as in the original.

2. **`index.html`**  
   The main website no longer mounts the table in the page. Instead it shows an **iframe** that loads `table-embed.html`:
   - `src="table-embed.html"`
   - Full width, min-height ~900px, no border.

So:

- **Table app** = one document, only table CSS → looks correct.
- **Website** = main document (site CSS) + **iframe** (only table CSS) → the part you see as “the table” is the iframe, so it looks the same as the table app.
- **Functionality and logic** = unchanged; same script, same behaviour; only the **document** that runs it is different (iframe instead of main page).

## Summary

| Cause | Why it happened | Fix |
|-------|------------------|-----|
| Same document | Table and site share one HTML document and one CSS cascade. | Table runs in its own document (iframe). |
| Site CSS overrides | Global `.card`, `.btn`, etc. can override table layout. | Iframe page does not load site CSS. |
| Popups in main page | Portaled popups live in main document and can be affected by site CSS/overflow. | Popups now live in the iframe document. |

Result: the table on the website is the **same** code and the **same** layout as the original; it’s just shown in an iframe so no site CSS can change it.
