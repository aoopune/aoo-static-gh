(function () {
  "use strict";

  var navScriptEl = document.currentScript;

  if (window.__shroffinNavLoaded) return;
  window.__shroffinNavLoaded = true;
  document.documentElement.classList.add("js");

  var lockedScrollY = 0;
  var activeMenu = null;

  function clearInert() {
    document.querySelectorAll("[data-shroffin-inert]").forEach(function (node) {
      node.inert = false;
      node.removeAttribute("data-shroffin-inert");
    });
  }

  function makeBackgroundInert(owner, veil) {
    clearInert();
    var current = owner;
    var localMenuOwner = owner.classList && owner.classList.contains("localnav");

    while (current && current !== document.body) {
      var parent = current.parentElement;
      if (!parent) break;

      Array.prototype.forEach.call(parent.children, function (sibling) {
        if (
          sibling === current ||
          sibling === veil ||
          sibling.contains(owner) ||
          sibling.contains(veil) ||
          (localMenuOwner &&
            (sibling.classList.contains("globalnav") ||
              sibling.classList.contains("globalnav-veil")))
        ) {
          return;
        }
        sibling.inert = true;
        sibling.setAttribute("data-shroffin-inert", "");
      });

      current = parent;
    }
  }

  function lockPage(owner, veil) {
    if (document.body.classList.contains("shroffin-scroll-locked")) return;
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.top = "-" + lockedScrollY + "px";
    document.body.classList.add("shroffin-scroll-locked");
    makeBackgroundInert(owner, veil);
  }

  function unlockPage() {
    if (!document.body.classList.contains("shroffin-scroll-locked")) {
      clearInert();
      return;
    }
    document.body.classList.remove("shroffin-scroll-locked");
    document.body.style.removeProperty("top");
    clearInert();
    window.scrollTo(0, lockedScrollY);
  }

  window.ShroffinMenus = {
    request: function (name, close) {
      if (activeMenu && activeMenu.name !== name) {
        activeMenu.close(true);
      }
      activeMenu = { name: name, close: close };
    },
    release: function (name) {
      if (activeMenu && activeMenu.name === name) activeMenu = null;
    },
    lock: lockPage,
    unlock: unlockPage,
    closeActive: function () {
      if (activeMenu) activeMenu.close(true);
    }
  };

  function currentPath() {
    return window.location.pathname.replace(/\/index\.html$/, "/");
  }

  function isCurrentHref(href) {
    try {
      var target = new URL(href, window.location.href);
      return target.pathname.replace(/\/index\.html$/, "/") === currentPath() && !target.hash;
    } catch (error) {
      return false;
    }
  }

  function getUniqueLinks(flyout) {
    var seen = {};
    if (!flyout) return [];

    return Array.prototype.filter.call(flyout.querySelectorAll("a[href]"), function (link) {
      var href = link.getAttribute("href");
      var labelNode = link.querySelector(".globalnav-submenu-label");
      var label = (labelNode ? labelNode.textContent : link.textContent).trim();
      var key = href + "|" + label;
      if (!href || !label || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function appendCompactLink(list, href, label, sub) {
    var item = document.createElement("li");
    var link = document.createElement("a");
    link.className = "globalnav-compact-item" + (sub ? " globalnav-compact-item--sub" : "");
    link.href = href;
    link.textContent = label;
    if (isCurrentHref(link.href)) link.setAttribute("aria-current", "page");
    item.appendChild(link);
    list.appendChild(item);
    return link;
  }

  function buildCompactSubPanel(id, label, links) {
    var panel = document.createElement("div");
    panel.className = "globalnav-compact-panel globalnav-compact-panel--sub";
    panel.id = "globalnav-compact-panel-" + id;
    panel.setAttribute("data-panel", id);
    panel.setAttribute("aria-hidden", "true");
    panel.hidden = true;

    var inner = document.createElement("div");
    inner.className = "globalnav-compact-inner";

    var heading = document.createElement("p");
    heading.className = "globalnav-compact-heading";
    heading.textContent = label;
    inner.appendChild(heading);

    var list = document.createElement("ul");
    list.className = "globalnav-compact-list";
    links.forEach(function (source) {
      appendCompactLink(
        list,
        source.getAttribute("href"),
        (source.querySelector(".globalnav-submenu-label") || source).textContent.trim(),
        true
      );
    });
    inner.appendChild(list);
    panel.appendChild(inner);
    return panel;
  }

  function buildCompactRootItem(label, panelId) {
    var item = document.createElement("li");
    var button = document.createElement("button");
    button.type = "button";
    button.className = "globalnav-compact-item globalnav-compact-item--drill";
    button.setAttribute("data-panel-target", panelId);
    button.setAttribute("aria-controls", "globalnav-compact-panel-" + panelId);
    button.setAttribute("aria-expanded", "false");
    button.textContent = label;
    item.appendChild(button);
    return item;
  }

  function initGlobalNav() {
    var nav = document.getElementById("globalnav");
    var veil = document.getElementById("globalnav-veil");
    if (!nav || !veil) return;

    nav.classList.remove("flyout-open", "compact-open", "is-compact", "compact-drilled");
    veil.classList.remove("is-visible");
    veil.setAttribute("hidden", "");

    var list = nav.querySelector(".globalnav-list");
    var brand = list && list.querySelector(".globalnav-item-brand");
    var guideItem = nav.querySelector("#nav-guide");
    var supportItem = nav.querySelector("#nav-support");
    var toolsItem = nav.querySelector("#nav-tools");
    var aboutLink = Array.prototype.find.call(
      nav.querySelectorAll(".globalnav-content .globalnav-link"),
      function (link) {
        return link.textContent.trim() === "About";
      }
    );
    var aboutItem = aboutLink && aboutLink.closest(".globalnav-item");

    if (!list || !brand || !guideItem || !supportItem || !toolsItem || !aboutItem) return;

    // Keep Guide → Support → Tools → About first after the logo. Only move
    // nodes when markup is out of order so the bar does not visibly reshuffle.
    var primaryOrder = [guideItem, supportItem, toolsItem, aboutItem];
    var needsReorder = primaryOrder.some(function (item, index) {
      return list.children[index + 1] !== item;
    });
    if (needsReorder) {
      brand.after(guideItem, supportItem, toolsItem, aboutItem);
    }

    if (isCurrentHref(aboutLink.href)) aboutLink.setAttribute("aria-current", "page");

    var guideTrigger = nav.querySelector("#nav-guide-trigger");
    var supportTrigger = nav.querySelector("#nav-support-trigger");
    var toolsTrigger = nav.querySelector("#nav-tools-trigger");
    var guideFlyout = nav.querySelector("#nav-guide-flyout");
    var supportFlyout = nav.querySelector("#nav-support-flyout");
    var toolsFlyout = nav.querySelector("#nav-tools-flyout");
    var content = nav.querySelector(".globalnav-content");

    // Drop any leftover compact chrome (e.g. stale markup) before rebuilding.
    nav.querySelectorAll(
      ".globalnav-compact-toggle, .globalnav-compact-tray, .globalnav-compact-back"
    ).forEach(function (node) {
      node.remove();
    });

    var compactBack = document.createElement("button");
    compactBack.type = "button";
    compactBack.className = "globalnav-compact-back";
    compactBack.setAttribute("aria-label", "Main menu");
    compactBack.innerHTML =
      '<span class="globalnav-compact-back-icon" aria-hidden="true"></span>';
    content.insertBefore(compactBack, content.firstChild);

    var compactToggle = document.createElement("button");
    compactToggle.type = "button";
    compactToggle.className = "globalnav-compact-toggle";
    compactToggle.setAttribute("aria-expanded", "false");
    compactToggle.setAttribute("aria-controls", "globalnav-compact-tray");
    compactToggle.setAttribute("aria-label", "Open Shroffin menu");
    compactToggle.innerHTML =
      '<span class="globalnav-compact-icon" aria-hidden="true"></span>';
    content.appendChild(compactToggle);

    var compactTray = document.createElement("div");
    compactTray.className = "globalnav-compact-tray";
    compactTray.id = "globalnav-compact-tray";
    compactTray.setAttribute("aria-hidden", "true");

    var viewport = document.createElement("div");
    viewport.className = "globalnav-compact-viewport";
    var panels = document.createElement("div");
    panels.className = "globalnav-compact-panels";

    var rootPanel = document.createElement("div");
    rootPanel.className = "globalnav-compact-panel globalnav-compact-panel--root";
    rootPanel.setAttribute("data-panel", "root");
    var rootInner = document.createElement("div");
    rootInner.className = "globalnav-compact-inner";
    var rootList = document.createElement("ul");
    rootList.className = "globalnav-compact-list";
    rootList.appendChild(buildCompactRootItem("Guide", "guide"));
    rootList.appendChild(buildCompactRootItem("Support", "support"));
    rootList.appendChild(buildCompactRootItem("Tools", "tools"));
    appendCompactLink(rootList, aboutLink.getAttribute("href"), "About", false);
    Array.prototype.forEach.call(list.children, function (item) {
      if (
        item === brand ||
        item === guideItem ||
        item === supportItem ||
        item === toolsItem ||
        item === aboutItem
      ) {
        return;
      }
      var source = item.querySelector("a[href]");
      if (!source) return;
      appendCompactLink(
        rootList,
        source.getAttribute("href"),
        source.textContent.trim(),
        false
      );
    });
    rootInner.appendChild(rootList);
    rootPanel.appendChild(rootInner);

    var guidePanel = buildCompactSubPanel("guide", "Guide", getUniqueLinks(guideFlyout));
    var supportPanel = buildCompactSubPanel(
      "support",
      "Support",
      getUniqueLinks(supportFlyout)
    );
    var toolsPanel = buildCompactSubPanel(
      "tools",
      "Tools",
      getUniqueLinks(toolsFlyout)
    );

    panels.appendChild(rootPanel);
    panels.appendChild(guidePanel);
    panels.appendChild(supportPanel);
    panels.appendChild(toolsPanel);
    viewport.appendChild(panels);
    compactTray.appendChild(viewport);
    nav.insertBefore(compactTray, guideFlyout);

    var menus = [
      { item: guideItem, trigger: guideTrigger, flyout: guideFlyout },
      { item: supportItem, trigger: supportTrigger, flyout: supportFlyout },
      { item: toolsItem, trigger: toolsTrigger, flyout: toolsFlyout }
    ];
    var activeDesktopMenu = null;
    var closeTimer = null;
    var hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    var compactQuery = window.matchMedia("(max-width: 833px)");
    var compactOpen = false;
    var activeCompactPanel = "root";
    var lastDrillButton = null;

    function setCompactPanel(panelId) {
      var next = panelId || "root";
      activeCompactPanel = next;
      nav.classList.toggle("compact-drilled", next !== "root");

      Array.prototype.forEach.call(
        panels.querySelectorAll(".globalnav-compact-panel"),
        function (panel) {
          var isRoot = panel.getAttribute("data-panel") === "root";
          var isActive = panel.getAttribute("data-panel") === next;
          panel.classList.toggle("is-active", !isRoot && isActive);
          panel.setAttribute("aria-hidden", isActive ? "false" : "true");
          if (!isRoot) panel.hidden = !isActive;
        }
      );

      rootList.querySelectorAll("[data-panel-target]").forEach(function (button) {
        button.setAttribute(
          "aria-expanded",
          button.getAttribute("data-panel-target") === next ? "true" : "false"
        );
      });

      if (next !== "root") {
        var activePanel = panels.querySelector(
          '.globalnav-compact-panel[data-panel="' + next + '"]'
        );
        var firstLink = activePanel && activePanel.querySelector("a[href]");
        if (firstLink) {
          window.setTimeout(function () {
            if (activeCompactPanel === next) firstLink.focus({ preventScroll: true });
          }, 50);
        }
      } else if (lastDrillButton) {
        lastDrillButton.focus({ preventScroll: true });
      }
    }

    function setDesktopOpen(menu, open) {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }

      menus.forEach(function (entry) {
        var selected = Boolean(open && entry === menu);
        entry.flyout.classList.toggle("is-open", selected);
        entry.flyout.setAttribute("aria-hidden", selected ? "false" : "true");
        entry.trigger.setAttribute("aria-expanded", selected ? "true" : "false");
      });

      activeDesktopMenu = open ? menu : null;
      nav.classList.toggle("flyout-open", Boolean(open));
      veil.classList.toggle("is-visible", Boolean(open));

      if (open) {
        veil.removeAttribute("hidden");
        window.ShroffinMenus.request("global", closeAll);
        window.ShroffinMenus.lock(nav, veil);
      } else if (!compactOpen) {
        veil.setAttribute("hidden", "");
        window.ShroffinMenus.release("global");
        window.ShroffinMenus.unlock();
      }
    }

    function setCompactOpen(open) {
      compactOpen = Boolean(open && nav.classList.contains("is-compact"));
      nav.classList.toggle("compact-open", compactOpen);
      compactToggle.setAttribute("aria-expanded", compactOpen ? "true" : "false");
      compactToggle.setAttribute(
        "aria-label",
        compactOpen ? "Close Shroffin menu" : "Open Shroffin menu"
      );
      compactTray.setAttribute("aria-hidden", compactOpen ? "false" : "true");
      veil.classList.toggle("is-visible", compactOpen);

      if (compactOpen) {
        veil.removeAttribute("hidden");
        window.ShroffinMenus.request("global", closeAll);
        window.ShroffinMenus.lock(nav, veil);
        setCompactPanel("root");
      } else if (!activeDesktopMenu) {
        setCompactPanel("root");
        lastDrillButton = null;
        veil.setAttribute("hidden", "");
        window.ShroffinMenus.release("global");
        window.ShroffinMenus.unlock();
      }
    }

    function closeAll() {
      setDesktopOpen(null, false);
      setCompactOpen(false);
    }

    menus.forEach(function (menu) {
      menu.trigger.addEventListener("click", function (event) {
        if (nav.classList.contains("is-compact")) return;
        event.preventDefault();
        setDesktopOpen(menu, hoverQuery.matches ? true : activeDesktopMenu !== menu);
      });

      [menu.item, menu.flyout].forEach(function (region) {
        // Entering either the trigger or the flyout keeps the menu open and
        // cancels any pending close, so the panel never closes out from under
        // the pointer while it travels across the small gap between them.
        region.addEventListener("mouseenter", function () {
          if (!hoverQuery.matches || nav.classList.contains("is-compact")) return;
          setDesktopOpen(menu, true);
        });

        region.addEventListener("mouseleave", function (event) {
          if (!hoverQuery.matches || nav.classList.contains("is-compact")) return;
          if (
            menu.item.contains(event.relatedTarget) ||
            menu.flyout.contains(event.relatedTarget)
          ) {
            return;
          }
          closeTimer = window.setTimeout(closeAll, 240);
        });
      });

      menu.flyout.querySelectorAll("a[href]").forEach(function (link) {
        link.addEventListener("click", closeAll);
      });
    });

    compactToggle.addEventListener("click", function () {
      setCompactOpen(!compactOpen);
    });
    compactBack.addEventListener("click", function () {
      setCompactPanel("root");
    });
    rootList.querySelectorAll("[data-panel-target]").forEach(function (button) {
      button.addEventListener("click", function () {
        lastDrillButton = button;
        setCompactPanel(button.getAttribute("data-panel-target"));
      });
    });
    compactTray.querySelectorAll("a[href]").forEach(function (link) {
      link.addEventListener("click", closeAll);
    });
    function closeAndReturnFocus() {
      var focusTarget =
        activeDesktopMenu && activeDesktopMenu.trigger
          ? activeDesktopMenu.trigger
          : compactToggle;
      closeAll();
      if (focusTarget.offsetParent !== null) {
        focusTarget.focus({ preventScroll: true });
      }
    }

    veil.addEventListener("click", closeAndReturnFocus);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && (compactOpen || activeDesktopMenu)) {
        if (compactOpen && activeCompactPanel !== "root") {
          setCompactPanel("root");
          return;
        }
        closeAndReturnFocus();
      }
    });

    function requiredInlineWidth() {
      var styles = window.getComputedStyle(list);
      var gap = parseFloat(styles.columnGap || styles.gap) || 0;
      var itemCount = list.children.length;
      return (
        Array.prototype.reduce.call(
          list.children,
          function (total, item) {
            return total + item.getBoundingClientRect().width;
          },
          0
        ) +
        Math.max(0, itemCount - 1) * gap +
        24
      );
    }

    function updateMode() {
      var wasCompact = nav.classList.contains("is-compact");
      nav.classList.remove("is-compact");
      var shouldCompact =
        compactQuery.matches || requiredInlineWidth() > content.clientWidth;
      nav.classList.toggle("is-compact", shouldCompact);
      nav.classList.add("shroffin-nav-ready");

      if (wasCompact !== shouldCompact) closeAll();
    }

    var resizeFrame = 0;
    function scheduleModeUpdate() {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(updateMode);
    }

    if ("ResizeObserver" in window) {
      var resizeObserver = new ResizeObserver(scheduleModeUpdate);
      resizeObserver.observe(content);
      resizeObserver.observe(list);
    } else {
      window.addEventListener("resize", scheduleModeUpdate);
    }
    new MutationObserver(scheduleModeUpdate).observe(list, {
      childList: true,
      subtree: true,
      characterData: true
    });

    window.addEventListener("orientationchange", closeAll);
    window.addEventListener("pageshow", function () {
      closeAll();
      scheduleModeUpdate();
    });

    updateMode();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleModeUpdate);
    }
  }

  function initFooterAccordion() {
    var footer = document.querySelector(".site-footer");
    if (!footer) return;

    var groups = Array.prototype.slice.call(
      footer.querySelectorAll(".site-footer-group")
    );
    if (!groups.length) return;

    var query = window.matchMedia("(max-width: 833px)");
    var entries = [];

    groups.forEach(function (group, index) {
      var heading = group.querySelector(".site-footer-heading");
      var list = group.querySelector(".site-footer-list");
      if (!heading || !list) return;

      var label = heading.textContent.trim();
      var listId = list.id || "site-footer-panel-" + index;
      list.id = listId;

      var panel = document.createElement("div");
      panel.className = "site-footer-panel";
      list.parentNode.insertBefore(panel, list);
      panel.appendChild(list);

      var toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "site-footer-accordion-toggle";
      toggle.setAttribute("aria-controls", listId);
      toggle.innerHTML =
        '<span class="site-footer-accordion-label"></span>' +
        '<span class="site-footer-accordion-icon" aria-hidden="true"></span>';
      toggle.querySelector(".site-footer-accordion-label").textContent = label;

      heading.textContent = "";
      heading.appendChild(toggle);

      var entry = { group: group, toggle: toggle, open: true };
      entries.push(entry);

      toggle.addEventListener("click", function () {
        if (!query.matches) return;
        setOpen(entry, !entry.open);
      });
    });

    function setOpen(entry, open) {
      entry.open = open;
      entry.group.classList.toggle("is-open", open);
      entry.toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    function applyMode() {
      var collapsed = query.matches;
      footer.classList.toggle("site-footer-accordion", collapsed);
      entries.forEach(function (entry) {
        setOpen(entry, collapsed ? false : true);
      });
    }

    if (query.addEventListener) {
      query.addEventListener("change", applyMode);
    } else if (query.addListener) {
      query.addListener(applyMode);
    }

    applyMode();
  }

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function softScrollToTop() {
    var startY = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (startY < 2) return;

    if (prefersReducedMotion()) {
      window.scrollTo(0, 0);
      return;
    }

    var duration = 1000;
    var startTime = null;

    function easeOutSoft(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(now) {
      if (startTime == null) startTime = now;
      var progress = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, startY * (1 - easeOutSoft(progress)));
      if (progress < 1) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

  /**
   * Industry pattern for long pages: a quiet “back to top” control that only
   * appears after the reader has scrolled, then soft-scrolls to the masthead.
   */
  function initBackToTop() {
    if (document.querySelector(".shroffin-to-top")) return;

    var button = document.createElement("button");
    button.type = "button";
    button.className = "shroffin-to-top";
    button.setAttribute("aria-label", "Back to top");
    button.hidden = true;
    button.innerHTML =
      '<span class="shroffin-to-top-icon" aria-hidden="true"></span>';
    document.body.appendChild(button);

    var threshold = Math.max(480, Math.round(window.innerHeight * 0.7));
    var visible = false;
    var ticking = false;

    function setVisible(next) {
      if (visible === next) return;
      visible = next;
      button.hidden = !next;
      button.classList.toggle("is-visible", next);
    }

    function update() {
      ticking = false;
      threshold = Math.max(480, Math.round(window.innerHeight * 0.7));
      setVisible(window.pageYOffset > threshold);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    button.addEventListener("click", function () {
      softScrollToTop();
      button.blur();
    });
    update();
  }

  function initSelectionIndicators() {
    function start() {
      if (window.ShroffinSelectionIndicator) {
        window.ShroffinSelectionIndicator.init();
      }
    }

    if (window.ShroffinSelectionIndicator) {
      start();
      return;
    }

    var src = "/js/shroffin-selection-indicator.js?v=sel-6";

    if (navScriptEl && navScriptEl.src) {
      src = navScriptEl.src.replace(
        /shroffin-nav\.js(\?[^#]*)?(#.*)?$/,
        "shroffin-selection-indicator.js?v=sel-6"
      );
      if (src.indexOf("shroffin-selection-indicator.js") === -1) {
        src = "/js/shroffin-selection-indicator.js?v=sel-6";
      }
    }

    var script = document.createElement("script");
    script.src = src;
    script.onload = start;
    var parent = (navScriptEl && navScriptEl.parentNode) || document.head;
    if (navScriptEl && navScriptEl.nextSibling) {
      parent.insertBefore(script, navScriptEl.nextSibling);
    } else {
      parent.appendChild(script);
    }
  }

  function init() {
    initGlobalNav();
    initFooterAccordion();
    initBackToTop();
    initSelectionIndicators();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
