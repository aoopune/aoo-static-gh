#!/usr/bin/env node
/**
 * Local wording preview: save a site-words file → rebuild that page → browser reloads.
 *
 * Usage:
 *   npm run words
 * Then open http://localhost:8765/ and edit site-words/*.words.md
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const {
  SITE_WORDS,
  PAGE_FILES,
  CHROME_FILE,
  assistiveWordsPath
} = require('./lib/site-words');

const root = path.resolve(__dirname, '..');
const PORT = parseInt(process.env.PORT || '8765', 10);
const DEBOUNCE_MS = 180;

/** page key → build-content --only= value */
const PAGE_KEY_TO_ONLY = {
  home: 'home',
  'explore-banks': 'explore-banks',
  apply: 'apply',
  'apply-contact': 'apply/contact',
  about: 'about',
  'project-approvals': 'project-approvals',
  calculators: 'calculators',
  'calculators-emi': 'calculators/emi',
  'calculators-how-much-loan': 'calculators/how-much-loan',
  'calculators-loan-amount': 'calculators/loan-amount',
  'calculators-prepayment': 'calculators/prepayment',
  'calculators-balance-transfer': 'calculators/balance-transfer',
  'calculators-tenure': 'calculators/tenure',
  'calculators-tax-savings': 'calculators/tax-savings',
  'guide-overview': 'guide/overview',
  'guide-documents': 'guide/documents',
  'guide-tax-benefits': 'guide/tax-benefits',
  'guide-concessions': 'guide/concessions',
  'guide-home-loan-insurance': 'guide/home-loan-insurance',
  'guide-property-home-insurance': 'guide/property-home-insurance',
  'guide-credit-life-insurance': 'guide/credit-life-insurance',
  'guide-complaints': 'guide/complaints',
  'legal-privacy-policy': 'privacy-policy.html',
  'legal-terms-of-use': 'terms-of-use.html',
  sitemap: 'sitemap'
};

const RELOAD_SNIPPET =
  '<script>(function(){try{var e=new EventSource("/__words_reload");e.onmessage=function(){location.reload();};}catch(x){}})();</script>';

const sseClients = new Set();
let debounceTimer = null;
let rebuilding = false;
let pendingPath = null;

function mime(name) {
  const ext = path.extname(name).toLowerCase();
  const map = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json',
    '.ico': 'image/x-icon',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.md': 'text/markdown',
    '.csv': 'text/csv'
  };
  return map[ext] || 'application/octet-stream';
}

function runNode(scriptArgs) {
  const r = spawnSync(process.execPath, scriptArgs, {
    cwd: root,
    encoding: 'utf8'
  });
  if (r.status !== 0) {
    const err = (r.stderr || r.stdout || 'rebuild failed').trim();
    console.error(err);
    return false;
  }
  return true;
}

function runNpm(args) {
  const r = spawnSync('npm', args, {
    cwd: root,
    encoding: 'utf8'
  });
  if (r.status !== 0) {
    const err = (r.stderr || r.stdout || 'npm failed').trim();
    console.error(err);
    return false;
  }
  return true;
}

function pageKeyFromAbs(absPath) {
  const rel = path.relative(SITE_WORDS, absPath).split(path.sep).join('/');
  if (!rel || rel.startsWith('..')) return null;
  if (/\.runtime\.words\.md$/i.test(rel)) {
    return 'runtime:' + rel;
  }
  if (rel === CHROME_FILE || rel === assistiveWordsPath(CHROME_FILE)) {
    return 'chrome';
  }
  const keys = Object.keys(PAGE_FILES);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const file = PAGE_FILES[key];
    if (rel === file || rel === assistiveWordsPath(file)) return key;
  }
  return null;
}

function rebuildFor(absPath) {
  const key = pageKeyFromAbs(absPath);
  if (!key) {
    console.log('Ignore (not a page/chrome words file): ' + path.relative(root, absPath));
    return false;
  }
  const started = Date.now();
  console.log('Saved → rebuilding ' + key + '…');

  if (key.indexOf('runtime:') === 0) {
    const rel = key.slice('runtime:'.length);
    let ok;
    if (/explore\.runtime\.words\.md$/i.test(rel)) {
      ok = runNpm(['run', 'build:compare']);
    } else if (/project-finder\.runtime\.words\.md$/i.test(rel)) {
      ok = runNpm(['run', 'build:apf']);
    } else {
      ok = runNode(['scripts/build-site-words-runtime.js']);
    }
    if (ok) {
      console.log(
        'Runtime wording live (' + (Date.now() - started) + 'ms). Refreshing browser.'
      );
    }
    return ok;
  }

  if (key === 'chrome') {
    const ok =
      runNode(['scripts/sync-site-nav.js']) &&
      runNode(['scripts/sync-site-footer.js']) &&
      runNode(['scripts/sync-guide-localnav.js']) &&
      runNode(['scripts/build-content.js', '--write']);
    if (ok) {
      console.log('Chrome wording live (' + (Date.now() - started) + 'ms). Refreshing browser.');
    }
    return ok;
  }

  const only = PAGE_KEY_TO_ONLY[key];
  if (!only) {
    console.error('No --only mapping for ' + key);
    return false;
  }
  const ok = runNode([
    'scripts/build-content.js',
    '--write',
    '--only=' + only
  ]);
  if (ok) {
    console.log('Page live (' + (Date.now() - started) + 'ms). Refreshing browser.');
  }
  return ok;
}

function notifyReload() {
  const payload = 'data: reload\n\n';
  sseClients.forEach(function (res) {
    try {
      res.write(payload);
    } catch (_e) {
      sseClients.delete(res);
    }
  });
}

function scheduleRebuild(absPath) {
  pendingPath = absPath;
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(function () {
    debounceTimer = null;
    if (rebuilding) return;
    const target = pendingPath;
    pendingPath = null;
    if (!target) return;
    rebuilding = true;
    try {
      if (rebuildFor(target)) notifyReload();
    } finally {
      rebuilding = false;
      if (pendingPath) scheduleRebuild(pendingPath);
    }
  }, DEBOUNCE_MS);
}

function injectReload(htmlBuf) {
  let html = htmlBuf.toString('utf8');
  if (html.indexOf('/__words_reload') !== -1) return Buffer.from(html, 'utf8');
  if (/<\/body>/i.test(html)) {
    html = html.replace(/<\/body>/i, RELOAD_SNIPPET + '</body>');
  } else {
    html += RELOAD_SNIPPET;
  }
  return Buffer.from(html, 'utf8');
}

function startServer() {
  const server = http.createServer(function (req, res) {
    const urlPath = (req.url || '/').split('?')[0];

    if (urlPath === '/__words_reload') {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive'
      });
      res.write(':\n\n');
      sseClients.add(res);
      req.on('close', function () {
        sseClients.delete(res);
      });
      return;
    }

    let filePath = path.join(root, urlPath === '/' ? 'index.html' : urlPath);
    if (
      !path
        .relative(root, filePath)
        .split(path.sep)
        .every(function (p) {
          return p !== '..';
        })
    ) {
      res.writeHead(403);
      res.end();
      return;
    }

    function send(file, data) {
      const ext = path.extname(file).toLowerCase();
      let out = data;
      if (ext === '.html') {
        out = injectReload(data);
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      } else {
        res.setHeader('Cache-Control', 'no-cache');
      }
      res.setHeader('Content-Type', mime(file));
      res.end(out);
    }

    fs.readFile(filePath, function (err, data) {
      if (err) {
        if (err.code === 'ENOENT' && !path.extname(filePath)) {
          filePath = path.join(filePath, 'index.html');
          fs.readFile(filePath, function (e2, d2) {
            if (e2) {
              res.writeHead(404);
              res.end('Not found');
              return;
            }
            send(filePath, d2);
          });
          return;
        }
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      send(filePath, data);
    });
  });

  server.on('error', function (err) {
    if (err && err.code === 'EADDRINUSE') {
      console.error(
        'Port ' +
          PORT +
          ' is already in use. Stop the other server (or set PORT=8766) and run npm run words again.'
      );
      process.exit(1);
    }
    throw err;
  });

  server.listen(PORT, function () {
    console.log('');
    console.log('Wording preview ready → http://localhost:' + PORT);
    console.log('Edit any site-words/*.words.md → save → page updates by itself.');
    console.log('Stop with Ctrl+C.');
    console.log('');
  });
}

function watchWords() {
  if (!fs.existsSync(SITE_WORDS)) {
    console.error('Missing site-words/');
    process.exit(1);
  }
  try {
    fs.watch(SITE_WORDS, { recursive: true }, function (_event, filename) {
      if (!filename) return;
      const name = String(filename).split(path.sep).join('/');
      if (!/\.words\.md$/i.test(name)) return;
      if (name === 'INDEX.md' || name === '_schema.md') return;
      scheduleRebuild(path.join(SITE_WORDS, filename));
    });
  } catch (e) {
    console.error('Could not watch site-words/:', e.message || e);
    process.exit(1);
  }
  console.log('Watching ' + path.relative(root, SITE_WORDS) + '/ for saves…');
}

/* Warm once so localhost matches current words, then serve + watch */
console.log('First build (all pages)…');
if (!runNode(['scripts/build-content.js', '--write'])) {
  process.exit(1);
}
watchWords();
startServer();
