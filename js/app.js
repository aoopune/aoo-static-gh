(function () {
  'use strict';

  const SPREADSHEET_ID = '1eaYl0tfAiTR4AcAaBfqemsbMX8QFcX_yQZOQcD2kW7g';
  const CACHE_KEY = 'aoo_sheet_cache';
  const DEFAULT_CACHE_MINUTES = 5;

  function getCacheMinutes() {
    return (window.__aooConfig && window.__aooConfig.cache_minutes)
      ? parseInt(window.__aooConfig.cache_minutes, 10) || DEFAULT_CACHE_MINUTES
      : DEFAULT_CACHE_MINUTES;
  }

  function sheetUrl(sheetName) {
    return 'https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID + '/gviz/tq?tqx=out:csv&sheet=' + encodeURIComponent(sheetName);
  }

  function getCached(key) {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY + '_' + key);
      if (!raw) return null;
      const { data, at } = JSON.parse(raw);
      if (Date.now() - at > getCacheMinutes() * 60 * 1000) return null;
      return data;
    } catch (_) { return null; }
  }

  function setCached(key, data) {
    try {
      sessionStorage.setItem(CACHE_KEY + '_' + key, JSON.stringify({ data, at: Date.now() }));
    } catch (_) {}
  }

  function parseCSV(text) {
    if (typeof text !== 'string') return [];
    if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
    const rows = [];
    let row = [];
    let cell = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') {
        inQuotes = !inQuotes;
      } else if (inQuotes) {
        cell += c;
      } else if (c === ',') {
        row.push(cell.trim());
        cell = '';
      } else if (c === '\r' && text[i + 1] === '\n') {
        row.push(cell.trim());
        rows.push(row);
        row = [];
        cell = '';
        i++;
      } else if (c === '\n' || c === '\r') {
        row.push(cell.trim());
        rows.push(row);
        row = [];
        cell = '';
      } else {
        cell += c;
      }
    }
    if (cell !== '' || row.length > 0) {
      row.push(cell.trim());
      rows.push(row);
    }
    return rows;
  }

  function rowsToObjects(rows) {
    if (rows.length < 2) return [];
    const headers = rows[0].map(h => (h || '').trim());
    const out = [];
    for (let i = 1; i < rows.length; i++) {
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = (rows[i][j] != null ? String(rows[i][j]).trim() : '');
      }
      out.push(obj);
    }
    return out;
  }

  window.fetchSheet = function (sheetName, useCache) {
    if (useCache !== false) {
      const cached = getCached(sheetName);
      if (cached) return Promise.resolve(cached);
    }
    const fetchOpts = useCache === false ? { cache: 'no-store' } : {};
    return fetch(sheetUrl(sheetName), fetchOpts)
      .then(r => { if (!r.ok) throw new Error('Sheet fetch failed'); return r.text(); })
      .then(text => {
        const rows = parseCSV(text);
        const data = rowsToObjects(rows);
        setCached(sheetName, data);
        return data;
      });
  };

  window.fetchSheetRaw = function (sheetName) {
    return fetch(sheetUrl(sheetName)).then(r => r.text()).then(parseCSV);
  };

  function normalizeConfigKey(k) {
    return (k || '').trim().toLowerCase().replace(/\s+/g, '_');
  }

  function parseConfigRows(rows) {
    const cfg = {};
    const list = rows || [];
    if (list.length === 0) return cfg;
    var keyHeader = null;
    var valueHeader = null;
    var headersChecked = false;
    list.forEach(function (r) {
      if (!headersChecked && r && typeof r === 'object') {
        var keys = Object.keys(r);
        for (var i = 0; i < keys.length; i++) {
          var n = normalizeConfigKey(keys[i]);
          if (n === 'key') keyHeader = keys[i];
          if (n === 'value') valueHeader = keys[i];
        }
        headersChecked = true;
      }
      var rawKey = keyHeader != null ? r[keyHeader] : (r.key || r.Key || '');
      var k = normalizeConfigKey(rawKey) || (rawKey && rawKey.trim());
      var v = valueHeader != null ? r[valueHeader] : (r.value != null ? r.value : r.Value);
      if (k) cfg[k] = v != null ? String(v).trim() : '';
    });
    return cfg;
  }

  window.getConfig = function () {
    if (window.__aooConfig) return Promise.resolve(window.__aooConfig);
    return window.fetchSheet('Config').then(rows => {
      window.__aooConfig = parseConfigRows(rows);
      return window.__aooConfig;
    });
  };

  /* Header – same on every page. Nav: logo extreme left; links extreme right in this order. */
  const navItems = [
    { path: 'pro-tips.html', label: 'Pro tips before you apply' },
    { path: 'quick-overview.html', label: 'Quick overview' },
    { path: 'government-schemes.html', label: 'Government schemes' },
    { path: 'home-loan-insurance.html', label: 'Home loan insurance' },
    { path: 'faq.html', label: 'FAQ' },
    { path: 'document-checklist.html', label: 'Standardised document list' },
    { path: 'about.html?v=apple1', label: 'About us' }
  ];

  function inPagesDir() {
    return (window.location.pathname || '').indexOf('/pages/') !== -1;
  }

  function currentPage() {
    const path = window.location.pathname || '';
    if (path.endsWith('index.html') || path.endsWith('/')) return 'index.html';
    const m = path.match(/\/([^/]+)$/);
    return m ? m[1] : path;
  }

  function navHref(path) {
    if (path === 'index.html') return inPagesDir() ? '../index.html' : 'index.html';
    return inPagesDir() ? path : 'pages/' + path;
  }

  window.renderHeaderFooter = function (cfg) {
    cfg = cfg || window.__aooConfig || {};
    const contactPhone = (cfg.contact_phone || '+91 91123 34367').trim();
    const contactEmail = (cfg.contact_email || 'aoopune@gmail.com').trim();
    const telHref = 'tel:' + contactPhone.replace(/\s/g, '');

    const cur = currentPage();
    const header = document.getElementById('site-header');
    if (header) {
      const homeHref = navHref('index.html');
      const navLinksHtml = navItems.map(n => {
        const href = navHref(n.path);
        const isActive = (n.path === 'index.html' && cur === 'index.html') || (cur === n.path);
        const testId = 'nav-' + (n.path === 'index.html' ? 'home' : n.path.replace('.html', ''));
        return '<a href="' + href + '"' + (isActive ? ' class="active"' : '') + ' data-testid="' + testId + '">' + n.label + '</a>';
      }).join('');
      var homeLinkHtml = '<a href="' + homeHref + '"' + (cur === 'index.html' ? ' class="active"' : '') + ' data-testid="nav-home">Home</a>';
      var drawerNavLinksHtml = homeLinkHtml + navLinksHtml;
      header.innerHTML =
        '<div class="site-header-inner">' +
        '<div class="site-logo"><a href="' + homeHref + '" data-testid="nav-logo">Apply Only Once</a></div>' +
        '<nav class="site-nav" aria-label="Main">' + navLinksHtml + '</nav>' +
        '<button type="button" class="nav-hamburger" aria-label="Open menu" aria-expanded="false" data-testid="nav-hamburger">' +
        '<span class="nav-hamburger-bar"></span><span class="nav-hamburger-bar"></span><span class="nav-hamburger-bar"></span></button>' +
        '</div>' +
        '<div class="nav-dropdown" id="nav-dropdown" aria-label="Navigation menu" aria-hidden="true">' +
        '<nav class="nav-dropdown-nav" aria-label="Main">' + drawerNavLinksHtml + '</nav></div>';
      (function () {
        var hamburger = header.querySelector('.nav-hamburger');
        var dropdown = document.getElementById('nav-dropdown');
        function openDropdown() {
          dropdown.classList.add('open');
          dropdown.setAttribute('aria-hidden', 'false');
          hamburger.setAttribute('aria-expanded', 'true');
          document.addEventListener('click', handleOutsideClick);
        }
        function closeDropdown() {
          dropdown.classList.remove('open');
          dropdown.setAttribute('aria-hidden', 'true');
          hamburger.setAttribute('aria-expanded', 'false');
          document.removeEventListener('click', handleOutsideClick);
        }
        function handleOutsideClick(e) {
          if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) closeDropdown();
        }
        hamburger.addEventListener('click', function (e) {
          e.stopPropagation();
          if (dropdown.classList.contains('open')) closeDropdown(); else openDropdown();
        });
        dropdown.querySelectorAll('a').forEach(function (a) {
          a.addEventListener('click', closeDropdown);
        });
      })();
    }
    var resultsContact = document.getElementById('results-contact');
    if (resultsContact) {
      resultsContact.innerHTML =
        'Call/WhatsApp <a href="' + telHref + '">' + contactPhone + '</a>, Mail: <a href="mailto:' + contactEmail + '">' + contactEmail + '</a>';
    }
  };

  function initHeaderAndConfig() {
    window.__aooConfig = null;
    // Render header immediately with defaults so nav and layout show without waiting for Config fetch
    window.renderHeaderFooter({});
    window.fetchSheet('Config', false).then(function (rows) {
      window.__aooConfig = parseConfigRows(rows);
      window.renderHeaderFooter(window.__aooConfig);
    }).catch(function () {
      window.__aooConfig = {};
      window.renderHeaderFooter(window.__aooConfig);
    });
  }
  /** Show loading spinner when navigating to another page (internal link click). */
  function showNavLoading() {
    var el = document.getElementById('aoo-nav-loading');
    if (el) return;
    el = document.createElement('div');
    el.id = 'aoo-nav-loading';
    el.className = 'aoo-loading-overlay';
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', 'Loading page');
    el.innerHTML = '<div class="aoo-loading-spinner"></div>';
    document.body.appendChild(el);
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null;
    if (!a || a.target === '_blank') return;
    var href = (a.getAttribute && a.getAttribute('href')) || '';
    if (!href || href.charAt(0) === '#' || /^javascript:/.test(href) || /^mailto:/.test(href) || /^tel:/.test(href)) return;
    try {
      if (a.hostname && a.hostname !== window.location.hostname) return;
    } catch (_) {}
    showNavLoading();
  }, false);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderAndConfig);
  } else {
    initHeaderAndConfig();
  }
})();
