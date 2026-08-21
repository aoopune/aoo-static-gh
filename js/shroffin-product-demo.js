/**
 * Product demo choreography — preview frame only.
 * Story: empty form → type → chips → Compare → Comparing →
 * scroll to banks → tabs → Private filter rematch → select → Apply once.
 * Plays through once, then stops (parent Pause can stop early).
 * Visuals = explore-banks CSS + real hlc markup. Cursor is demo chrome.
 */
(function () {
  "use strict";

  var WAIT = Object.freeze({
    settle: 320,
    typeChar: 14,
    afterField: 70,
    chip: 160,
    /* Demo pace — shorter than live; frame CSS matches searchFade */
    searching: 900,
    searchFade: 550,
    revealPause: 180,
    scroll: 720,
    tab: 360,
    filter: 240,
    bank: 160,
    delta: 360,
    holdApply: 650,
    loopGap: 320,
    press: 70,
    move: 220,
    click: 55
  });

  var FIELDS = [
    { key: "income", text: "1,00,000" },
    { key: "property", text: "62,50,000" },
    { key: "age", text: "35" },
    { key: "cibil", text: "780" }
  ];

  var BASE = {
    bom: { rate: "7.25%", emi: "₹39,519" },
    iob: { rate: "7.25%", emi: "₹39,519" },
    pnb: { rate: "7.25%", emi: "₹39,519" },
    canara: { rate: "7.30%", emi: "₹39,670" },
    centralboi: { rate: "7.30%", emi: "₹39,670" },
    axis: { rate: "7.35%", emi: "₹39,822" },
    unionboi: { rate: "7.35%", emi: "₹39,822" },
    bob: { rate: "7.40%", emi: "₹39,974" },
    sib: { rate: "7.45%", emi: "₹40,127" },
    jkb: { rate: "7.50%", emi: "₹40,280" },
    nainital: { rate: "7.50%", emi: "₹40,280" },
    hdfc: { rate: "7.60%", emi: "₹40,586" },
    bandhan: { rate: "7.65%", emi: "₹40,739" },
    icici: { rate: "7.65%", emi: "₹40,739" },
    federal: { rate: "7.75%", emi: "₹41,047" }
  };

  /* Live bank_type for these rows (same demo inputs). */
  var BANK_META = {
    bom: { type: "Public" },
    iob: { type: "Public" },
    pnb: { type: "Public" },
    canara: { type: "Public" },
    centralboi: { type: "Public" },
    axis: { type: "Private" },
    unionboi: { type: "Public" },
    bob: { type: "Public" },
    sib: { type: "Private" },
    jkb: { type: "Private" },
    nainital: { type: "Private" },
    hdfc: { type: "Private" },
    bandhan: { type: "Private" },
    icici: { type: "Private" },
    federal: { type: "Private" }
  };

  /* First page of All vs Private — same order as live sort. */
  var ALL_IDS = ["bom","iob","pnb","canara","centralboi","axis","unionboi","bob"];
  var PRIVATE_IDS = ["axis","sib","jkb","nainital","hdfc","bandhan","icici","federal"];

  /* Live matchOffers counts for the demo query. */
  var FILTER_TOTALS = {
    All: 33,
    Public: 12,
    Private: 21
  };

  function reduced() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function sleep(ms, signal) {
    return new Promise(function (resolve, reject) {
      if (signal && signal.aborted) {
        reject(new DOMException("Aborted", "AbortError"));
        return;
      }
      var id = window.setTimeout(resolve, ms);
      if (!signal) return;
      signal.addEventListener(
        "abort",
        function () {
          window.clearTimeout(id);
          reject(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }

  function cursorEl(root) {
    return root.querySelector("[data-spd-cursor]");
  }

  function setCursorPos(cursor, x, y) {
    if (!cursor) return;
    cursor.style.setProperty("--spd-x", x + "px");
    cursor.style.setProperty("--spd-y", y + "px");
    cursor.style.transform = "translate(" + x + "px, " + y + "px)";
  }

  function showCursor(cursor, on) {
    if (!cursor) return;
    cursor.classList.toggle("is-on", !!on);
  }

  async function moveCursor(cursor, el, signal) {
    if (!cursor || !el) return;
    var r = el.getBoundingClientRect();
    var x = r.left + r.width * 0.55;
    var y = r.top + Math.min(r.height * 0.62, r.height - 6);
    setCursorPos(cursor, x, y);
    await sleep(WAIT.move, signal);
  }

  async function clickCursor(cursor, el, signal) {
    if (el) await moveCursor(cursor, el, signal);
    if (!cursor) return;
    cursor.classList.add("is-click");
    await sleep(WAIT.click, signal);
    cursor.classList.remove("is-click");
    /* restore translate after scale click */
    var x = cursor.style.getPropertyValue("--spd-x") || "0px";
    var y = cursor.style.getPropertyValue("--spd-y") || "0px";
    cursor.style.transform = "translate(" + x + ", " + y + ")";
  }

  async function press(el, signal) {
    if (!el) return;
    el.classList.add("is-press");
    await sleep(WAIT.press, signal);
    el.classList.remove("is-press");
  }

  function setPressed(el, on) {
    if (!el) return;
    if (el.type === "checkbox") {
      el.checked = Boolean(on);
      return;
    }
    el.setAttribute("aria-pressed", on ? "true" : "false");
  }

  function setChoice(root, group, choice) {
    root.querySelectorAll('[data-spd-chip="' + group + '"]').forEach(function (chip) {
      setPressed(chip, chip.getAttribute("data-spd-choice") === choice);
    });
  }

  function setFiltersOpen(root, open) {
    var control = root.querySelector("[data-spd-filters-control]");
    var toggle = root.querySelector("[data-spd-filters-toggle]");
    var panel = root.querySelector("[data-spd-filters-panel]");
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (control) control.classList.toggle("is-open", open);
    if (panel) {
      panel.classList.toggle("is-open", open);
      panel.removeAttribute("hidden");
    }
  }

  function setFilterBadge(root, count) {
    var badge = root.querySelector("[data-spd-filters-badge]");
    if (!badge) return;
    if (count > 0) {
      badge.hidden = false;
      badge.textContent = String(count);
    } else {
      badge.hidden = true;
      badge.textContent = "";
    }
  }

  function filterOptionEl(input) {
    return input && input.closest ? input.closest(".hlc-filter-option") : input;
  }

  function setPrivateBankFilter(root) {
    setPressed(root.querySelector('[data-spd-filter="Public"]'), false);
    setPressed(root.querySelector('[data-spd-filter="Private"]'), true);
  }

  function revealTabInScroller(tab) {
    if (!tab) return;
    var scroller = tab.closest(".hlc-column-tabs-scroller");
    if (!scroller) return;
    var track = tab.closest(".hlc-column-tabs");
    var tabRect = tab.getBoundingClientRect();
    var scrollerRect = scroller.getBoundingClientRect();
    var trackRect = track ? track.getBoundingClientRect() : tabRect;
    var siblings = track ? track.querySelectorAll(".hlc-column-tab") : [];
    var isFirst = siblings.length > 0 && siblings[0] === tab;
    var isLast = siblings.length > 0 && siblings[siblings.length - 1] === tab;
    var rightEdge = isLast ? trackRect.right : tabRect.right;
    var leftEdge = isFirst ? trackRect.left : tabRect.left;
    var pad = 10;
    if (rightEdge > scrollerRect.right - pad) {
      scroller.scrollLeft += rightEdge - scrollerRect.right + pad;
    } else if (leftEdge < scrollerRect.left + pad) {
      scroller.scrollLeft -= scrollerRect.left - leftEdge + pad;
    }
  }

  function setTab(root, name) {
    var active = null;
    root.querySelectorAll("[data-spd-tab]").forEach(function (tab) {
      var on = tab.getAttribute("data-spd-tab") === name;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      if (on) {
        tab.setAttribute("aria-current", "page");
        active = tab;
      } else {
        tab.removeAttribute("aria-current");
      }
    });
    root.querySelectorAll("[data-spd-panel]").forEach(function (panel) {
      var on = panel.getAttribute("data-spd-panel") === name;
      if (on) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
    });
    revealTabInScroller(active);
  }

  function setMetric(cell, text, flash) {
    if (!cell) return;
    var value = cell.querySelector(".hlc-cell-value") || cell;
    value.textContent = text;
    if (flash) {
      cell.classList.remove("hlc-cell-delta");
      void cell.offsetWidth;
      cell.classList.add("hlc-cell-delta");
    }
  }

  function applyMetrics(root, map, flash) {
    root.querySelectorAll('[data-spd-panel="essentials"] [data-spd-row][data-bank]').forEach(function (row) {
      var vals = map[row.getAttribute("data-bank")];
      if (!vals) return;
      setMetric(row.querySelector('[data-spd-metric="rate"]'), vals.rate, flash);
      setMetric(row.querySelector('[data-spd-metric="emi"]'), vals.emi, flash);
    });
  }

  function clearDeltas(root) {
    root.querySelectorAll(".hlc-cell-delta").forEach(function (el) {
      el.classList.remove("hlc-cell-delta");
    });
  }

  function syncSelection(root) {
    var selected = {};
    root.querySelectorAll('[data-spd-panel="essentials"] [data-spd-row]').forEach(function (row) {
      if (row.hidden) return;
      selected[row.getAttribute("data-bank")] = row.classList.contains("is-selected");
    });
    root.querySelectorAll("[data-spd-row][data-bank]").forEach(function (row) {
      var on = !!selected[row.getAttribute("data-bank")];
      row.classList.toggle("is-selected", on);
      row.setAttribute("aria-selected", on ? "true" : "false");
    });
    var count = Object.keys(selected).filter(function (id) {
      return selected[id];
    }).length;
    setApplyCount(root, count);
  }

  function rowMatchesFilters(bankId, filters) {
    var meta = BANK_META[bankId];
    if (!meta) return false;
    if (filters.bankType === "Private") return meta.type === "Private";
    if (filters.bankType === "Public") return meta.type === "Public";
    /* All — first page only (extra private banks wait for Private rematch) */
    return ALL_IDS.indexOf(bankId) !== -1;
  }

  function filterTotal(filters) {
    return FILTER_TOTALS[filters.bankType] || FILTER_TOTALS.All;
  }

  function updateShowMore(root, filters) {
    var wrap = root.querySelector(".hlc-show-more-wrap");
    var label = root.querySelector(".hlc-show-more-label");
    if (!wrap || !label) return;
    var visible = 0;
    root.querySelectorAll('[data-spd-panel="essentials"] [data-spd-row][data-bank]').forEach(function (row) {
      if (!row.hidden) visible += 1;
    });
    var remaining = Math.max(0, filterTotal(filters) - visible);
    if (remaining <= 0) {
      wrap.hidden = true;
      return;
    }
    wrap.hidden = false;
    label.textContent =
      "Show " + remaining + " more bank" + (remaining === 1 ? "" : "s");
  }

  function setApplyCount(root, count) {
    root.querySelectorAll("[data-spd-apply-count]").forEach(function (node) {
      if (count <= 0) {
        node.hidden = true;
        node.textContent = "";
        return;
      }
      node.hidden = false;
      node.replaceChildren();
      var num = document.createElement("span");
      num.className = "hlc-apply-count-n";
      num.textContent = String(count);
      node.appendChild(num);
      node.appendChild(document.createTextNode(" selected"));
    });
  }

  function visibleEssentialRows(root) {
    return Array.prototype.filter.call(
      root.querySelectorAll('[data-spd-panel="essentials"] [data-spd-row][data-bank]'),
      function (row) {
        return !row.hidden;
      }
    );
  }

  function applyFilters(root, filters) {
    filters = filters || { bankType: "All" };
    root.querySelectorAll("[data-spd-row][data-bank]").forEach(function (row) {
      var id = row.getAttribute("data-bank");
      var show = rowMatchesFilters(id, filters);
      row.hidden = !show;
      if (!show) {
        row.classList.remove("is-selected");
        row.setAttribute("aria-selected", "false");
      }
    });
    applyMetrics(root, BASE, false);
    updateShowMore(root, filters);
    var selectedCount = visibleEssentialRows(root).filter(function (row) {
      return row.classList.contains("is-selected");
    }).length;
    setApplyEnabled(root, selectedCount > 0);
    return filters;
  }

  async function rematchFilters(root, filters, signal) {
    var wraps = root.querySelectorAll(".hlc-table-wrap:not([hidden])");
    wraps.forEach(function (wrap) {
      wrap.classList.add("is-sel-fading-rows");
    });
    await sleep(reduced() ? 0 : 100, signal);
    applyFilters(root, filters);
    wraps.forEach(function (wrap) {
      wrap.classList.remove("is-sel-fading-rows");
    });
    /* Also fade currently-hidden panels so all tabs stay in sync when revealed */
    root.querySelectorAll(".hlc-table-wrap[hidden]").forEach(function (wrap) {
      wrap.classList.remove("is-sel-fading-rows");
    });
  }

  function setApplyEnabled(root, enabled) {
    root.querySelectorAll("[data-spd-apply]").forEach(function (btn) {
      btn.disabled = !enabled;
      btn.classList.remove("is-press");
      btn.textContent = "Apply once";
    });
  }

  function setSeeOptionsBusy(root, on) {
    var btn = root.querySelector("[data-spd-see-options]");
    if (!btn) return;
    var labelEl = btn.querySelector(".hlc-compare-label") || btn;
    if (on) {
      if (!btn.getAttribute("data-spd-label")) {
        btn.setAttribute("data-spd-label", labelEl.textContent || "Compare");
      }
      labelEl.textContent = "Comparing";
      btn.disabled = true;
    } else {
      var label = btn.getAttribute("data-spd-label");
      if (label) labelEl.textContent = label;
      btn.removeAttribute("data-spd-label");
      btn.disabled = false;
    }
  }

  function showSearching(root) {
    var el = root.querySelector("[data-spd-searching]");
    if (!el) return;
    setSeeOptionsBusy(root, true);
    el.hidden = false;
    el.classList.remove("is-visible");
    void el.offsetWidth;
    el.classList.add("is-visible");
  }

  /* Demo hideSearching: fade matches WAIT.searchFade + frame CSS */
  async function hideSearching(root, signal) {
    var el = root.querySelector("[data-spd-searching]");
    if (!el) {
      setSeeOptionsBusy(root, false);
      return;
    }
    el.classList.remove("is-visible");
    await sleep(reduced() ? 0 : WAIT.searchFade, signal);
    el.hidden = true;
    setSeeOptionsBusy(root, false);
  }

  function setSearching(root, on) {
    /* Sync helper for reset/still — prefer showSearching / hideSearching in play */
    var el = root.querySelector("[data-spd-searching]");
    if (!el) return;
    if (on) {
      showSearching(root);
    } else {
      el.classList.remove("is-visible");
      el.hidden = true;
      setSeeOptionsBusy(root, false);
    }
  }

  function setIntelligence(root, on) {
    var el = root.querySelector("[data-spd-intelligence]");
    if (!el) return;
    el.hidden = !on;
    el.classList.toggle("is-visible", !!on);
    var plus = root.querySelector("[data-spd-intel-plus]");
    if (plus) plus.hidden = !on;
  }

  function setResults(root, on) {
    var el = root.querySelector("[data-spd-results]");
    if (!el) return;
    if (on) {
      el.hidden = false;
      el.classList.add("is-visible");
      root.classList.add("is-spd-results");
    } else {
      el.hidden = true;
      el.classList.remove("is-visible");
      root.classList.remove("is-spd-results");
    }
  }

  function scrollingRoot() {
    return document.scrollingElement || document.documentElement;
  }

  /* Scroll ONLY inside this frame. Never scrollIntoView — browsers also
     scroll the parent page (home) to chase the target. */
  function setScrollY(y) {
    y = Math.max(0, y || 0);
    var root = scrollingRoot();
    root.scrollTop = y;
    root.scrollLeft = 0;
  }

  function targetScrollTop(el, pad) {
    if (!el) return 0;
    var root = scrollingRoot();
    var topPad = typeof pad === "number" ? pad : 16;
    return Math.max(0, el.getBoundingClientRect().top + root.scrollTop - topPad);
  }

  /*
   * Same intent as live softScrollToOptions: park the results head near the
   * top so the loan-input card leaves the view.
   * Demo frame has no site nav → gap only (live uses nav + gap).
   */
  function resultsScrollTop(root) {
    var scrollRoot = scrollingRoot();
    var head =
      root.querySelector("[data-spd-results] .hlc-results-head") ||
      root.querySelector("[data-spd-results]");
    var y = targetScrollTop(head, 52);
    /* Guarantee the input card is fully above the viewport (live feel). */
    var inputs = root.querySelector("[data-spd-inputs]");
    if (inputs) {
      var inputsBottom =
        inputs.getBoundingClientRect().bottom + scrollRoot.scrollTop;
      y = Math.max(y, inputsBottom + 8);
    }
    var maxY = Math.max(0, scrollRoot.scrollHeight - scrollRoot.clientHeight);
    return Math.min(Math.max(0, y), maxY);
  }

  async function animateScrollY(toY, signal) {
    var root = scrollingRoot();
    var fromY = root.scrollTop;
    var dist = toY - fromY;
    if (Math.abs(dist) < 1 || reduced()) {
      setScrollY(toY);
      return;
    }
    var duration = WAIT.scroll;
    var start = performance.now();
    await new Promise(function (resolve) {
      function frame(now) {
        if (signal.aborted) {
          resolve();
          return;
        }
        var t = Math.min(1, (now - start) / duration);
        /* Soft ease-out — matches live explore-banks (1 - (1-t)^3.2) */
        var eased = 1 - Math.pow(1 - t, 3.2);
        setScrollY(fromY + dist * eased);
        if (t < 1) {
          requestAnimationFrame(frame);
        } else {
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  async function scrollTo(el, signal, pad) {
    if (!el) return;
    var y = targetScrollTop(el, pad);
    await animateScrollY(y, signal);
    setScrollY(targetScrollTop(el, pad));
  }

  async function softScrollToResults(root, signal) {
    var y = resultsScrollTop(root);
    await animateScrollY(y, signal);
    setScrollY(resultsScrollTop(root));
  }

  async function typeField(root, cursor, key, text, signal) {
    var input = root.querySelector('[data-spd-input="' + key + '"]');
    var shell = root.querySelector('[data-spd-shell="' + key + '"]');
    if (!input) return;
    await clickCursor(cursor, shell || input, signal);
    if (shell) shell.classList.add("is-typing");
    input.value = "";
    for (var i = 0; i < text.length; i++) {
      input.value = text.slice(0, i + 1);
      await sleep(WAIT.typeChar, signal);
    }
    if (shell) shell.classList.remove("is-typing");
    await sleep(WAIT.afterField, signal);
  }

  function clearForm(root) {
    root.querySelectorAll("[data-spd-input]").forEach(function (input) {
      input.value = "";
    });
    root.querySelectorAll("[data-spd-shell]").forEach(function (shell) {
      shell.classList.remove("is-typing");
    });
    root.querySelectorAll("[data-spd-chip]").forEach(function (chip) {
      setPressed(chip, false);
    });
  }

  function fillFormInstant(root) {
    FIELDS.forEach(function (f) {
      var input = root.querySelector('[data-spd-input="' + f.key + '"]');
      if (input) input.value = f.text;
    });
    setChoice(root, "occupation", "Salaried");
    setChoice(root, "purpose", "Regular");
  }

  function resetResultsState(root) {
    setFiltersOpen(root, false);
    setFilterBadge(root, 0);
    root.querySelectorAll("[data-spd-filter]").forEach(function (chip) {
      setPressed(chip, chip.getAttribute("data-spd-default-pressed") === "true");
    });
    root.querySelectorAll("[data-spd-row]").forEach(function (row) {
      row.classList.remove("is-selected");
      row.setAttribute("aria-selected", "false");
    });
    clearDeltas(root);
    setTab(root, "essentials");
    applyFilters(root, { bankType: "All" });
    setApplyEnabled(root, false);
    setApplyCount(root, 0);
    root.querySelectorAll(".hlc-table-scroll").forEach(function (el) {
      el.scrollLeft = 0;
    });
  }

  function reset(root, cursor) {
    setSearching(root, false);
    setIntelligence(root, false);
    setResults(root, false);
    clearForm(root);
    resetResultsState(root);
    showCursor(cursor, false);
    setScrollY(0);
  }

  function still(root) {
    fillFormInstant(root);
    setIntelligence(root, true);
    setResults(root, true);
    setSearching(root, false);
    setPrivateBankFilter(root);
    setPressed(root.querySelector('[data-spd-filter="women"]'), false);
    setFilterBadge(root, 1);
    applyFilters(root, { bankType: "Private" });
    visibleEssentialRows(root).slice(0, 3).forEach(function (row) {
      row.classList.add("is-selected");
      row.setAttribute("aria-selected", "true");
    });
    syncSelection(root);
    setApplyEnabled(root, true);
    setScrollY(resultsScrollTop(root));
  }

  async function clickPress(cursor, el, signal) {
    await clickCursor(cursor, el, signal);
    await press(el, signal);
  }

  async function playOnce(root, signal) {
    var cursor = cursorEl(root);

    reset(root, cursor);
    await sleep(WAIT.settle, signal);
    showCursor(cursor, true);
    setCursorPos(cursor, 72, 96);
    await sleep(90, signal);

    /* 1 — Type the form */
    for (var f = 0; f < FIELDS.length; f++) {
      await typeField(root, cursor, FIELDS[f].key, FIELDS[f].text, signal);
    }

    /* 2 — Occupation + purpose */
    var salaried = root.querySelector('[data-spd-chip="occupation"][data-spd-choice="Salaried"]');
    await clickPress(cursor, salaried, signal);
    setChoice(root, "occupation", "Salaried");
    await sleep(WAIT.chip, signal);

    var regular = root.querySelector('[data-spd-chip="purpose"][data-spd-choice="Regular"]');
    await clickPress(cursor, regular, signal);
    setChoice(root, "purpose", "Regular");
    await sleep(WAIT.chip, signal);

    /* 3 — Compare → Comparing (stay on the form, like live) */
    var see = root.querySelector("[data-spd-see-options]");
    await clickPress(cursor, see, signal);
    showSearching(root);
    await sleep(WAIT.searching, signal);
    await hideSearching(root, signal);

    /* 4 — Tips then banks; calm scroll so the input card leaves the view */
    setIntelligence(root, true);
    setResults(root, true);
    resetResultsState(root);
    await sleep(WAIT.revealPause, signal);
    await softScrollToResults(root, signal);
    await sleep(WAIT.settle, signal);

    /* 5 — Glance Charges → Other charges → back Overview */
    var tabCharges = root.querySelector('[data-spd-tab="charges"]');
    await clickPress(cursor, tabCharges, signal);
    setTab(root, "charges");
    await sleep(WAIT.tab, signal);

    var tabLater = root.querySelector('[data-spd-tab="later"]');
    await clickPress(cursor, tabLater, signal);
    setTab(root, "later");
    await sleep(WAIT.tab, signal);

    var tabOverview = root.querySelector('[data-spd-tab="essentials"]');
    await clickPress(cursor, tabOverview, signal);
    setTab(root, "essentials");
    await sleep(WAIT.settle, signal);

    /* 6 — Uncheck Public so only private banks remain (live checkbox filters) */
    var publicFilter = root.querySelector('[data-spd-filter="Public"]');
    var publicOption = filterOptionEl(publicFilter);
    await clickPress(cursor, publicOption || publicFilter, signal);
    setPrivateBankFilter(root);
    setFilterBadge(root, 1);
    await rematchFilters(root, { bankType: "Private" }, signal);
    await sleep(WAIT.filter, signal);

    /* 7 — Select three visible private banks → Apply once */
    var rows = visibleEssentialRows(root).slice(0, 3);
    for (var i = 0; i < rows.length; i++) {
      await clickPress(cursor, rows[i].querySelector(".hlc-bank-name") || rows[i], signal);
      rows[i].classList.add("is-selected");
      syncSelection(root);
      await sleep(WAIT.bank, signal);
    }

    setApplyEnabled(root, rows.length > 0);
    var apply = root.querySelector("[data-spd-apply]");
    await sleep(100, signal);
    await clickPress(cursor, apply, signal);
    await sleep(WAIT.holdApply, signal);

    showCursor(cursor, false);
  }

  function queryStill() {
    try {
      return new URLSearchParams(window.location.search).get("still") === "1";
    } catch (e) {
      return false;
    }
  }

  function notifyParent(type) {
    if (!window.parent || window.parent === window) return;
    try {
      window.parent.postMessage({ source: "spd-demo", type: type }, "*");
    } catch (e) {
      /* ignore */
    }
  }

  function isEmbedded() {
    try {
      return window.parent && window.parent !== window;
    } catch (e) {
      return true;
    }
  }

  function mount(root) {
    if (!root || root.getAttribute("data-spd-mounted") === "true") return;
    root.setAttribute("data-spd-mounted", "true");

    var ac = typeof AbortController !== "undefined" ? new AbortController() : null;
    var signal = ac ? ac.signal : { aborted: false };

    /* still=1: freeze on results (home-open product window). Reduced motion too. */
    if (reduced() || queryStill()) {
      still(root);
      notifyParent("spd-ready");
      return;
    }

    function stop(opts) {
      if (root.getAttribute("data-spd-running") !== "true") return;
      if (ac) ac.abort();
      else signal.aborted = true;
      root.removeAttribute("data-spd-running");
      if (!opts || !opts.silent) notifyParent("spd-paused");
    }

    function start() {
      if (root.getAttribute("data-spd-running") === "true") stop({ silent: true });
      root.setAttribute("data-spd-running", "true");
      if (typeof AbortController !== "undefined") {
        ac = new AbortController();
        signal = ac.signal;
      } else {
        signal = { aborted: false };
      }
      notifyParent("spd-playing");
      playOnce(root, signal)
        .then(function () {
          if (signal.aborted) return;
          root.removeAttribute("data-spd-running");
          notifyParent("spd-ended");
        })
        .catch(function (err) {
          if (err && err.name === "AbortError") return;
          console.warn("[spd]", err);
        });
    }

    window.addEventListener("message", function (ev) {
      var data = ev && ev.data;
      if (!data || data.source !== "spd-chrome") return;
      if (data.type === "spd-pause") stop();
      else if (data.type === "spd-replay" || data.type === "spd-resume") start();
      else if (data.type === "spd-request-ready") notifyParent("spd-ready");
    });

    notifyParent("spd-ready");

    /* Standalone preview: play once. Embedded: parent starts. */
    if (!isEmbedded()) {
      start();
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) stop();
      });
    }
  }

  function init() {
    document.querySelectorAll("[data-spd-root]").forEach(mount);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
