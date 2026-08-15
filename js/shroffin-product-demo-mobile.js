/**
 * Mobile product demo choreography — phone frame only.
 * Story: type → See options → scroll to banks → peek-slide columns →
 * tabs (peek each) → filter sheet → Private rematch → select → dock Apply once.
 * Plays through once, then stops (parent Pause can stop early).
 * NEVER scrollIntoView. NEVER press Women. NEVER show a mouse/finger cursor — tap ripple only.
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
    /* Soft sideways peek so hidden columns read as slidable */
    colSlide: 900,
    colHold: 280,
    tab: 360,
    sheet: 580,
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

  function tapEl() {
    return document.querySelector("[data-spd-tap]");
  }

  async function tapOn(el, signal) {
    var tap = tapEl();
    if (!el) return;
    var r = el.getBoundingClientRect();
    var x = r.left + r.width * 0.5;
    var y = r.top + r.height * 0.5;
    if (tap) {
      tap.style.setProperty("--spd-x", x + "px");
      tap.style.setProperty("--spd-y", y + "px");
      tap.classList.remove("is-tap");
      void tap.offsetWidth; /* restart animation */
      tap.classList.add("is-tap");
    }
    await press(el, signal);
    await sleep(WAIT.click, signal);
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
    var scrim = document.querySelector("[data-spd-filters-scrim]");
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (control) control.classList.toggle("is-open", open);
    document.body.classList.toggle("hlc-filters-sheet-open", open);

    if (panel) {
      panel.removeAttribute("hidden");
      panel.classList.toggle("is-open", open);
      if (open) {
        panel.setAttribute("role", "dialog");
        panel.setAttribute("aria-modal", "true");
      } else {
        panel.setAttribute("role", "region");
        panel.removeAttribute("aria-modal");
      }
    }

    if (scrim) {
      if (open) {
        scrim.removeAttribute("hidden");
        scrim.classList.add("is-open");
      } else {
        scrim.classList.remove("is-open");
        scrim.setAttribute("hidden", "");
      }
    }
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
    if (on) {
      if (!btn.getAttribute("data-spd-label")) {
        btn.setAttribute("data-spd-label", btn.textContent || "See options");
      }
      btn.textContent = "Finding options";
      btn.disabled = true;
    } else {
      var label = btn.getAttribute("data-spd-label");
      if (label) btn.textContent = label;
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

  /* Match .spd-safe-top — keep headings clear of Dynamic Island + status bar */
  var SAFE_TOP = 132;

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
    var topPad = typeof pad === "number" ? pad : SAFE_TOP;
    return Math.max(0, el.getBoundingClientRect().top + root.scrollTop - topPad);
  }

  /*
   * Same intent as live softScrollToOptions on phone: park results under the
   * status/safe chrome so the input card leaves the view.
   */
  function resultsScrollTop(root) {
    var scrollRoot = scrollingRoot();
    var head =
      root.querySelector("[data-spd-results] .hlc-results-head") ||
      root.querySelector("[data-spd-results]");
    var y = targetScrollTop(head, SAFE_TOP + 12);
    var inputs = root.querySelector("[data-spd-inputs]");
    if (inputs) {
      var inputsBottom =
        inputs.getBoundingClientRect().bottom + scrollRoot.scrollTop;
      y = Math.max(y, inputsBottom - SAFE_TOP + 8);
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

  function visibleTableScroll(root) {
    var wrap = root.querySelector(".hlc-table-wrap:not([hidden])");
    return wrap ? wrap.querySelector(".hlc-table-scroll") : null;
  }

  function setScrollX(el, x) {
    if (!el) return;
    el.scrollLeft = x;
  }

  async function animateScrollX(el, toX, signal) {
    if (!el) return;
    var fromX = el.scrollLeft;
    var dist = toX - fromX;
    if (Math.abs(dist) < 1 || reduced()) {
      setScrollX(el, toX);
      return;
    }
    var duration = WAIT.colSlide;
    var start = performance.now();
    await new Promise(function (resolve) {
      function frame(now) {
        if (signal.aborted) {
          resolve();
          return;
        }
        var t = Math.min(1, (now - start) / duration);
        /* Soft ease-out — same curve as vertical demo scroll */
        var eased = 1 - Math.pow(1 - t, 3.2);
        setScrollX(el, fromX + dist * eased);
        if (t < 1) {
          requestAnimationFrame(frame);
        } else {
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  /* Soft peek right then back — teaches that metric columns slide sideways. */
  async function peekSlideColumns(root, signal) {
    var el = visibleTableScroll(root);
    if (!el) return;
    var maxX = Math.max(0, el.scrollWidth - el.clientWidth);
    if (maxX < 24) return;
    /* About half a phone width, or the full overflow if smaller */
    var peekX = Math.min(maxX, Math.max(160, Math.round(el.clientWidth * 0.55)));
    await animateScrollX(el, peekX, signal);
    await sleep(WAIT.colHold, signal);
    await animateScrollX(el, 0, signal);
    await sleep(WAIT.settle, signal);
  }

  async function typeField(root, key, text, signal) {
    var input = root.querySelector('[data-spd-input="' + key + '"]');
    var shell = root.querySelector('[data-spd-shell="' + key + '"]');
    if (!input) return;
    await tapOn(shell || input, signal);
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

  function setApplyDock(root, on) {
    var dock = root.querySelector("[data-spd-apply-dock]");
    if (!dock) return;
    if (on) {
      dock.hidden = false;
      document.body.classList.add("hlc-apply-dock-open");
    } else {
      dock.hidden = true;
      document.body.classList.remove("hlc-apply-dock-open");
    }
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
    root.querySelectorAll(".hlc-table-scroll").forEach(function (el) {
      el.scrollLeft = 0;
    });
  }

  function reset(root) {
    setSearching(root, false);
    setResults(root, false);
    setApplyDock(root, false);
    clearForm(root);
    resetResultsState(root);
    setScrollY(0);
  }

  function still(root) {
    fillFormInstant(root);
    setResults(root, true);
    setApplyDock(root, true);
    setSearching(root, false);
    setPressed(root.querySelector('[data-spd-filter="Private"]'), true);
    setPressed(root.querySelector('[data-spd-filter="All"]'), false);
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

  async function playOnce(root, signal) {
    reset(root);
    await sleep(WAIT.settle, signal);

    /* 1 — Type the form */
    for (var f = 0; f < FIELDS.length; f++) {
      await typeField(root, FIELDS[f].key, FIELDS[f].text, signal);
    }

    /* 2 — Occupation + purpose */
    var salaried = root.querySelector('[data-spd-chip="occupation"][data-spd-choice="Salaried"]');
    await tapOn(salaried, signal);
    setChoice(root, "occupation", "Salaried");
    await sleep(WAIT.chip, signal);

    var regular = root.querySelector('[data-spd-chip="purpose"][data-spd-choice="Regular"]');
    await tapOn(regular, signal);
    setChoice(root, "purpose", "Regular");
    await sleep(WAIT.chip, signal);

    /* 3 — See options → Finding options (stay on the form, like live) */
    var see = root.querySelector("[data-spd-see-options]");
    await tapOn(see, signal);
    showSearching(root);
    await sleep(WAIT.searching, signal);
    await hideSearching(root, signal);

    /* 4 — Banks appear; show dock; calm scroll so the input card leaves */
    setResults(root, true);
    resetResultsState(root);
    setApplyDock(root, true);
    await sleep(WAIT.revealPause, signal);
    await softScrollToResults(root, signal);
    await sleep(WAIT.settle, signal);
    /* Peek sideways so Rate → EMI (and later charge cols) read as slidable */
    await peekSlideColumns(root, signal);

    /* 5 — Glance Charges → Other charges → Overview (peek cols on each) */
    var tabCharges = root.querySelector('[data-spd-tab="charges"]');
    await tapOn(tabCharges, signal);
    setTab(root, "charges");
    await sleep(WAIT.tab, signal);
    await peekSlideColumns(root, signal);

    var tabLater = root.querySelector('[data-spd-tab="later"]');
    await tapOn(tabLater, signal);
    setTab(root, "later");
    await sleep(WAIT.tab, signal);
    await peekSlideColumns(root, signal);

    var tabOverview = root.querySelector('[data-spd-tab="essentials"]');
    await tapOn(tabOverview, signal);
    setTab(root, "essentials");
    await sleep(WAIT.settle, signal);

    /* 6 — filter sheet → Private rematch → Done (NO Women) */
    var filtersToggle = root.querySelector("[data-spd-filters-toggle]");
    await tapOn(filtersToggle, signal);
    setFiltersOpen(root, true);
    await sleep(WAIT.sheet, signal);

    var privateChip = root.querySelector('[data-spd-filter="Private"]');
    var allChip = root.querySelector('[data-spd-filter="All"]');
    var filtersScroll = root.querySelector(".hlc-filters-scroll");
    /* Keep Private in view inside the sheet — do not use scrollIntoView */
    if (filtersScroll && privateChip) {
      var chipBox = privateChip.getBoundingClientRect();
      var scrollBox = filtersScroll.getBoundingClientRect();
      filtersScroll.scrollTop += chipBox.top - scrollBox.top - 48;
    }
    await sleep(90, signal);

    await tapOn(privateChip, signal);
    setPressed(privateChip, true);
    setPressed(allChip, false);
    setFilterBadge(root, 1);
    await rematchFilters(root, { bankType: "Private" }, signal);
    await sleep(WAIT.filter, signal);

    var filtersDone = root.querySelector("[data-spd-filters-done]");
    if (filtersDone) await tapOn(filtersDone, signal);
    setFiltersOpen(root, false);
    await sleep(WAIT.sheet, signal);

    /* 7 — Select 3 → dock Apply */
    var rows = visibleEssentialRows(root).slice(0, 3);
    for (var i = 0; i < rows.length; i++) {
      await tapOn(rows[i].querySelector(".hlc-bank-name") || rows[i], signal);
      rows[i].classList.add("is-selected");
      syncSelection(root);
      await sleep(WAIT.bank, signal);
    }

    setApplyEnabled(root, rows.length > 0);
    await sleep(100, signal);
    await tapOn(root.querySelector("[data-spd-apply]"), signal);
    await sleep(WAIT.holdApply, signal);
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

    if (reduced()) {
      still(root);
      notifyParent("spd-ready");
      return;
    }

    /* Preview helper: ?spdFilters=1 → end state with filter sheet open */
    if (/\bspdFilters=1\b/.test(String(location.search || ""))) {
      still(root);
      setFiltersOpen(root, true);
      var privateChip = root.querySelector('[data-spd-filter="Private"]');
      var filtersScroll = root.querySelector(".hlc-filters-scroll");
      if (filtersScroll && privateChip) {
        var chipBox = privateChip.getBoundingClientRect();
        var scrollBox = filtersScroll.getBoundingClientRect();
        filtersScroll.scrollTop += chipBox.top - scrollBox.top - 48;
      }
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
