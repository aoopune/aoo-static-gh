# Git: Commit & Push – Detailed Guide

**Why your friend said you didn’t commit:** If you only ran `git push` (or never ran `git commit`), your changes were never saved into Git’s history. So the remote (e.g. GitHub) never got your new work. You must **commit** first, then **push**.

---

## 1. The three steps (in order)

| Step | Command | What it does |
|------|--------|----------------|
| **1. Stage** | `git add` | Marks which changed files you want to include in the next snapshot. |
| **2. Commit** | `git commit` | Saves a snapshot of those staged files **on your computer only** (with a message). |
| **3. Push** | `git push` | Sends your **commits** from your computer to the remote (e.g. GitHub). |

- **Commit** = save in your **local** Git history (your machine).
- **Push** = upload those commits to the **remote** (GitHub, GitLab, etc.).
- If you skip **commit**, there is nothing new to push, so your latest changes never reach the remote.

---

## 2. Step-by-step: commit and push in detail

### 2.1 Open a terminal in your project

- In VS Code / Cursor: **Terminal → New Terminal** (or `` Ctrl+` ``).
- Or open PowerShell / Command Prompt and `cd` to your project folder, e.g.  
  `cd C:\Users\Yash Jangid\Desktop\dasds\aoo-static-gh`

### 2.2 Check what’s changed

```bash
git status
```

- **Untracked files** – New files Git isn’t tracking yet (e.g. `?? AGENT_CONTEXT.md`).
- **Modified** – Files you already track that have changes (e.g. `M js/app.js`).
- **Staged** – Files you’ve already run `git add` on (shown under “Changes to be committed”).

Use this anytime to see what will (or won’t) be included in the next commit.

### 2.3 Stage the files you want to commit

**Option A – Stage everything (all changes):**

```bash
git add .
```

The `.` means “current directory and everything under it.” All modified and untracked files are staged.

**Option B – Stage specific files:**

```bash
git add js/government-schemes.js css/style.css
```

Only those files are staged. Repeat or add more paths as needed.

**Option C – Stage all modified/untracked in one go (same as A):**

```bash
git add -A
```

After staging, run `git status` again: you should see “Changes to be committed” with the files you added.

### 2.4 Commit (save the snapshot locally)

```bash
git commit -m "Your message here"
```

- **`-m "..."`** – The message that describes this snapshot (required with `-m`; keep it short and clear).
- Example:  
  `git commit -m "Government schemes table: show cell content as bullet points"`

**Without `-m`:** Git opens an editor for you to type a longer message. Save and close to complete the commit.

After a successful commit you’ll see something like:  
`1 file changed, 10 insertions(+)` and your working tree may be “clean” (no staged changes left).

**Important:** Up to this point, everything is only on **your computer**. The remote (GitHub) still doesn’t have this commit.

### 2.5 Push (send your commits to the remote)

```bash
git push
```

- If your branch is already linked to a remote (e.g. `origin`), this pushes your **local commits** to that remote.
- If it’s the first push for this branch, you might see:
  ```bash
  git push -u origin main
  ```
  Run that if Git suggests it; `-u` sets `main` to track `origin/main` so next time `git push` is enough.

**If you’re asked for a password:**  
GitHub no longer accepts account passwords for HTTPS. Use a **Personal Access Token (PAT)** as the password, or set up **SSH keys** and use an SSH remote URL.

After a successful push, your commits (and thus your code) are on GitHub (or whatever remote you use). Your friend can pull and see your work.

---

## 3. Quick reference: full flow

From your project folder, one full cycle:

```bash
# 1. See what changed
git status

# 2. Stage all changes
git add .

# 3. Commit with a message (replace with your own message)
git commit -m "Add government schemes cell bullets and GOV scheme order doc"

# 4. Push to remote
git push
```

Do this whenever you’ve done a chunk of work you want to save and share.

---

## 4. Summary

- **Commit** = save changes in your **local** Git history (on your machine).
- **Push** = upload your **commits** to the remote (e.g. GitHub).
- Always **commit** first, then **push**.
- If your friend says you “didn’t commit,” they usually mean: run `git add`, then `git commit -m "..."`, then `git push`.
