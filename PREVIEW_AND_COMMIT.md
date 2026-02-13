# Preview changes locally, then commit and push

## See changes in real time on your machine

1. **Start the local server** (from the project folder):
   ```bash
   npm run serve
   ```
   You should see: `Serving at http://localhost:8765`

2. **Open in your browser**:  
   **http://localhost:8765**

3. **After we change code**:  
   Save the file, then **refresh the browser** (F5 or Ctrl+R). No build step—changes show on refresh.  
   The site loads data from the live Google Sheet, so you see real data.

4. **Stop the server** when done: press **Ctrl+C** in the terminal.

---

## Commit and push (do this after you’re happy with how it looks)

Run these in the project folder (e.g. `c:\Users\Yash Jangid\Desktop\dasds\aoo-static-gh`).

**1. See what changed**
```bash
git status
git diff
```

**2. Stage all changes**
```bash
git add .
```

**3. Commit with a short message** (replace with what we actually changed)
```bash
git commit -m "Brief description of the change"
```

**4. Push to GitHub**
```bash
git push origin main
```

**One-liner** (after you’ve checked with `git status` / `git diff`):
```bash
git add .
git commit -m "Your message here"
git push origin main
```

---

## If localhost says "This site can't be reached" or "refused to connect"

You must **start the server first**. In the project folder run:

```bash
npm run serve
```

Leave that terminal open. Then open **http://localhost:8765** in your browser. Do not close the terminal until you are done previewing.

---

## Optional: run tests before pushing

To avoid breaking the site, run tests before you commit:

```bash
node tests/run-unit.js
npm run test:ui
```

If both pass, then do `git add .` → `git commit -m "..."` → `git push origin main`.
