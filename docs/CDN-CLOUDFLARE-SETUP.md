# Put applyonlyonce.com Behind Cloudflare CDN — Step-by-Step

This guide walks you through **Option 1: Putting your whole site behind a CDN** using Cloudflare in front of GitHub Pages. No code changes; only DNS and Cloudflare configuration.

**Result:** Traffic goes **User → Cloudflare (edge) → GitHub Pages (origin)**. HTML, CSS, and JS are cached at the edge, improving TTFB and Speed Index globally.

---

## What you need before starting

- **Domain:** applyonlyonce.com (you already use it; see `CNAME` in the repo).
- **Hosting:** GitHub Pages serving the `aoo-static-gh` (or equivalent) site.
- **Access:** Ability to log in to:
  - The **registrar** where you bought applyonlyonce.com (e.g. GoDaddy, Namecheap, Google Domains, etc.) — to change **nameservers**.
  - **GitHub** — repo Settings → Pages (to confirm custom domain).
- **GitHub Pages URL:** Your site’s “origin” URL, e.g. `https://<your-username>.github.io/<repo-name>/` or the default branch URL. You’ll need this for DNS.

---

## Step 1 — Add the site to Cloudflare

1. Go to **https://dash.cloudflare.com** and sign up or log in.
2. Click **“Add a site”** (or “Add site”).
3. Enter your domain: **`applyonlyonce.com`** (without `www` unless you also use www).
4. Click **“Add site”**.
5. On the **Select a plan** page, choose **“Free”** and click **“Continue”**.

---

## Step 2 — Review DNS records (Cloudflare scan)

1. Cloudflare will **scan your current DNS records** for applyonlyonce.com.
2. You’ll see a list of existing records (e.g. A, CNAME, MX, TXT).
3. **Important for GitHub Pages:**
   - **Apex domain (applyonlyonce.com):**  
     You need the apex to resolve to GitHub Pages. Two common setups:
     - **Option A — CNAME flattening (recommended):**  
       One **CNAME** record:
       - **Name:** `@` (or `applyonlyonce.com`)
       - **Target:** `YOUR_USERNAME.github.io`  
       (Replace with your actual GitHub username.)  
       Cloudflare will “flatten” it so the apex works like an A record.
     - **Option B — A records:**  
       Four **A** records (one per IP):
       - `@` → `185.199.108.153`
       - `@` → `185.199.109.153`
       - `@` → `185.199.110.153`
       - `@` → `185.199.111.153`  
       (GitHub’s current Pages IPs; CNAME to github.io is more future-proof if your DNS supports flattening.)
   - **www (optional):** If you use `www.applyonlyonce.com`, add a **CNAME**:  
     **Name** `www` → **Target** `YOUR_USERNAME.github.io`.
4. For every record that should be **proxied** (orange cloud), ensure **“Proxy status”** is **“Proxied”** (orange). Proxied = traffic goes through Cloudflare (CDN + security).
5. Remove or don’t add duplicate records that would conflict (e.g. two A records for the same name unless you use both IPs).
6. Click **“Continue”**.

---

## Step 3 — Change nameservers at your registrar

1. Cloudflare will show **two nameservers**, for example:
   - `ada.ns.cloudflare.com`
   - `bob.ns.cloudflare.com`  
   (Yours will have different names.)
2. Copy both nameserver values.
3. Open the website of the **registrar** where you bought applyonlyonce.com (e.g. GoDaddy, Namecheap, Google Domains, Cloudflare Registrar, etc.).
4. Find **DNS** or **Domain management** or **Nameservers** for applyonlyonce.com.
5. Change from “Custom” or “Default” nameservers to **“Custom nameservers”** (or “Use custom nameservers”).
6. Replace the existing nameservers with the **two Cloudflare nameservers** (one per field). Remove any old ones.
7. Save.
8. **Propagation:** It can take from a few minutes up to 24–48 hours. Cloudflare will show “Pending” until DNS propagates; then the status will become “Active”.

---

## Step 4 — SSL/TLS settings in Cloudflare

1. In Cloudflare dashboard, select your site **applyonlyonce.com**.
2. Go to **SSL/TLS** in the left sidebar.
3. **Overview:**
   - Set encryption mode to **“Full”** or **“Full (strict)”**.
   - **Full (strict)** is better if GitHub Pages serves HTTPS (which it does): Cloudflare will use HTTPS to talk to GitHub and validate the certificate.
4. **Edge Certificates (optional but recommended):**
   - Turn **“Always Use HTTPS”** **On** (redirect HTTP → HTTPS).
   - **“Minimum TLS Version”**: 1.2 or higher is fine.

---

## Step 5 — Caching (so HTML/CSS/JS are served from the edge)

By default, Cloudflare caches based on file extension. For a static site, you can cache more aggressively.

### Option A — Cache Rules (recommended, modern UI)

1. In Cloudflare dashboard: **Caching** → **Cache Rules** (or **Cache** → **Cache Rules**).
2. Click **“Create rule”**.
3. **Rule name:** e.g. `Cache static site`.
4. **When incoming requests match:**
   - Field: **Hostname** → Operator: **equals** → Value: `applyonlyonce.com`.  
   (Add another condition for `www.applyonlyonce.com` if you use www.)
5. **Then:**
   - **Eligible for cache**: Yes.
   - **Cache TTL**: Choose **Override** and set (e.g. **2 hours** or **4 hours** or **1 day**). For static sites, 2–4 hours or 1 day is usually fine.
6. **Deploy** / **Save**.

### Option B — Page Rules (if Cache Rules are not available)

1. **Caching** → **Page Rules**.
2. **Create Page Rule**.
3. **URL:** `applyonlyonce.com/*` (or `*applyonlyonce.com/*`).
4. **Setting:**  
   - **Cache Level:** Cache Everything.  
   - **Edge Cache TTL:** e.g. 2 hours (7200 seconds) or 1 day (86400 seconds).
5. **Save and Deploy**.

After this, HTML, CSS, and JS can be cached at Cloudflare’s edge, which improves TTFB and Speed Index for repeat and global visitors.

---

## Step 6 — GitHub Pages custom domain (no change needed)

1. Your repo already has a **CNAME** file with `applyonlyonce.com`. **Do not remove it.**
2. In **GitHub** → repo → **Settings** → **Pages**:
   - **Custom domain** should be set to `applyonlyonce.com`.
   - **Enforce HTTPS** can stay checked.
3. You do **not** need to point the custom domain to Cloudflare IPs in GitHub; DNS is handled at the registrar (now Cloudflare nameservers) and in Cloudflare DNS. GitHub only needs to see requests coming to applyonlyonce.com; with Cloudflare in front, those requests will still have `Host: applyonlyonce.com`, so GitHub Pages will serve the site correctly.

---

## Step 7 — Verify and test

1. **DNS propagation:**  
   In Cloudflare, the site status will change from “Pending” to “Active” once nameservers have propagated. You can also use https://dnschecker.org and query **A** or **CNAME** for `applyonlyonce.com` to see global resolution.
2. **Visit the site:**  
   Open **https://applyonlyonce.com** in a browser. You should see your site. If you see “Redirect loop” or SSL errors, double-check SSL/TLS mode (Full or Full (strict)) and that GitHub Pages has “Enforce HTTPS” on.
3. **Check that Cloudflare is in front:**  
   - In the browser, open DevTools → **Network** → reload. Inspect a response header; you should see something like `cf-cache-status: HIT` or `MISS` (or `cf-ray`) indicating Cloudflare.
   - Or use https://www.whatsmycdn.com/ and enter applyonlyonce.com; it should report Cloudflare.
4. **Lighthouse (optional):**  
   Run a new Lighthouse report; TTFB and Speed Index often improve, especially from locations far from GitHub’s servers.

---

## Summary checklist

| Step | Action |
|------|--------|
| 1 | Add applyonlyonce.com to Cloudflare (Free plan). |
| 2 | Set DNS: apex CNAME to `USERNAME.github.io` (or A records to GitHub IPs); proxy ON (orange cloud). |
| 3 | At registrar, set nameservers to Cloudflare’s two nameservers. |
| 4 | Cloudflare SSL/TLS: Full or Full (strict); optionally “Always Use HTTPS”. |
| 5 | Create a Cache Rule (or Page Rule) to cache the site with a 2–4 hour or 1 day TTL. |
| 6 | Keep CNAME file and GitHub Pages custom domain as applyonlyonce.com. |
| 7 | Wait for DNS propagation; verify site loads and responses show Cloudflare headers. |

---

## Troubleshooting

- **“Too many redirects” or redirect loop:** Use **Full** or **Full (strict)** and ensure GitHub Pages “Enforce HTTPS” is on. Avoid “Flexible” if your origin is HTTPS.
- **Site not loading after nameserver change:** Wait for propagation (up to 24–48 hours). Confirm Cloudflare DNS has the correct A or CNAME for the apex (and www if used).
- **Old content after a deploy:** Cached at Cloudflare. Purge cache: **Caching** → **Configuration** → **Purge Everything** (or purge by URL). Or wait for the cache TTL to expire.
- **403 / GitHub Pages error:** Ensure the CNAME target in GitHub (custom domain) is exactly `applyonlyonce.com` (no www unless you use www), and that DNS at Cloudflare matches.

Once this is done, your whole site is behind Cloudflare’s CDN with no code changes in `aoo-static-gh`; deploy continues as usual with `npm run deploy` from the repo.
