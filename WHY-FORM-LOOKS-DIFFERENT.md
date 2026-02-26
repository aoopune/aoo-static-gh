# Why the form looks different on the website vs the table app

## Same UI, different context

The **table app** (`table/index.html`) and the **website** (`aoo-static-gh`) both use the same form HTML and logic from the table component. They should look the same, but on the website the form can still show:

- Two rows instead of one
- "54 offers from 31 banks." above the Submit button instead of beside it
- Submit button below the input row

## Why this happens

### 1. Two different style environments

| Table app | Website |
|-----------|--------|
| One HTML file. One `<style>` block. No other CSS. | Page loads **site CSS** (`style.css`) first, then the **table script** injects the component and its CSS. |
| Form gets its layout only from that one stylesheet. | Form is inside `#loan-table-root`. It is affected by **both** the site CSS and the component CSS. |

So the **same component** runs in a different **context**: on the website, global site styles apply first.

### 2. Load order and specificity

- **Order:** `style.css` is in the `<head>`. The component adds its `<style>` when the script runs (after the page loads).
- **Specificity:** Site has rules like `.card`, `.btn`, `form`. The component uses scoped selectors like `.aoo-loan-table-wrap .form-row`.
- If the site has a rule that matches the form (e.g. `.card form` or a wide `form` rule) and has high specificity or `!important`, it can **override** the component’s layout (e.g. force `display: block` or a different grid), so the form no longer looks like the table app.

### 3. Component CSS is scoped

- The standalone script prefixes every selector with `.aoo-loan-table-wrap` so the table doesn’t affect the rest of the site.
- So the “same” rules become `.aoo-loan-table-wrap .form-row`, etc. They still apply to the form because the form is inside that wrapper.
- But on the website, **site CSS** can still win if it’s more specific or uses `!important`, so the form layout can change even though the component code is the same.

### 4. Viewport / media queries

- The component uses `@media (max-width: 768px)` to switch to a **two-column stacked** layout.
- If the site layout (e.g. a narrow column or container) makes the **effective width** of the form area small, or the viewport is ≤768px, that media query fires and the form stacks.
- So the same component shows “one row” in the table app but “two rows” on the website when width or context is different.

### 5. Caching

- If the browser or a CDN caches the **old** `style.css` or the **old** standalone script, you keep seeing the old layout even after we add overrides.
- So “no change” can simply be **stale CSS/JS**, not the same UI in two contexts.

---

## What we do to fix it

1. **Force the table-app layout from the site**
   - In `style.css` we add rules that apply **only** to the table root, with high specificity and `!important`:
     - `#loan-table-root .aoo-loan-table-wrap .form-row` → single-row grid, 7 columns, same as table app.
     - `#loan-table-root .aoo-loan-table-wrap .field.submit-field` → flex row, so “54 offers…” and Submit stay on **one line**.
   - So even if other site or component rules try to change the form, these overrides win.

2. **Keep one row on desktop**
   - We repeat the same grid and submit-field layout inside `@media (min-width: 769px)` so that on larger viewports the form **never** switches to the two-column stacked layout when we don’t want it.

3. **Cache busting**
   - We add a query string to `style.css` (e.g. `style.css?v=2`) and to the table script (e.g. `?v=5`) so the browser loads the **new** files instead of cached ones.

After these changes, the website form should match the table app: one row, “54 offers from 31 banks.” and Submit on the same line. If it still doesn’t, the next step is to hard refresh (Ctrl+Shift+R) or test in an incognito window so cache is not used.
