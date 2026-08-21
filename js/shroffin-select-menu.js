/**
 * Custom open list for native <select> on redesigned pages.
 * Root fix: OS select popups ignore our dark palette (white sheet + light ink).
 * Keep the <select> for value/form sync; paint the open list ourselves.
 */
(function () {
  "use strict";

  var MENU_ID = "shroffin-select-menu";
  var ENHANCED = "data-shroffin-select-enhanced";
  var OPEN_ATTR = "data-shroffin-select-open";
  var MATCH =
    ".explore-banks-page select, select.calc-select, select.guide-calc-select";

  var openSelect = null;
  var menuEl = null;
  var activeIndex = -1;
  var refreshTimer = 0;

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function isMatch(select) {
    return select && select.matches && select.matches(MATCH);
  }

  function optionList(select) {
    return Array.prototype.slice.call(select.options || []);
  }

  function ensureMenu() {
    if (menuEl && menuEl.isConnected) return menuEl;
    menuEl = document.createElement("ul");
    menuEl.id = MENU_ID;
    menuEl.className = "shroffin-select-menu";
    menuEl.setAttribute("role", "listbox");
    menuEl.hidden = true;
    document.body.appendChild(menuEl);
    return menuEl;
  }

  function closeMenu() {
    if (!openSelect && (!menuEl || menuEl.hidden)) return;
    var select = openSelect;
    if (menuEl) {
      menuEl.hidden = true;
      menuEl.innerHTML = "";
      menuEl.removeAttribute("aria-activedescendant");
    }
    if (select) {
      select.removeAttribute(OPEN_ATTR);
      select.setAttribute("aria-expanded", "false");
      select.removeAttribute("aria-controls");
    }
    openSelect = null;
    activeIndex = -1;
  }

  function setActive(index) {
    if (!menuEl) return;
    var items = menuEl.querySelectorAll('[role="option"]');
    if (!items.length) return;
    var next = Math.max(0, Math.min(items.length - 1, index));
    activeIndex = next;
    Array.prototype.forEach.call(items, function (item, i) {
      var on = i === next;
      item.classList.toggle("is-active", on);
      item.setAttribute("aria-selected", on ? "true" : "false");
      if (on) {
        menuEl.setAttribute("aria-activedescendant", item.id);
        if (typeof item.scrollIntoView === "function") {
          item.scrollIntoView({ block: "nearest" });
        }
      }
    });
  }

  function placeMenu(select) {
    var menu = ensureMenu();
    var rect = select.getBoundingClientRect();
    var gap = 6;
    var maxH = Math.min(320, Math.max(160, window.innerHeight - 24));
    var width = Math.max(rect.width, 10.5 * 16);
    var left = Math.min(
      Math.max(8, rect.left),
      Math.max(8, window.innerWidth - width - 8)
    );
    var top = rect.bottom + gap;
    if (top + Math.min(maxH, 220) > window.innerHeight - 8) {
      top = Math.max(8, rect.top - gap - Math.min(maxH, 220));
    }
    menu.style.position = "fixed";
    menu.style.left = left + "px";
    menu.style.top = top + "px";
    menu.style.width = width + "px";
    menu.style.maxHeight = maxH + "px";
    menu.style.zIndex = "10000";
  }

  function choose(select, value) {
    if (!select || select.disabled) return;
    var prev = select.value;
    select.value = value;
    closeMenu();
    select.focus();
    if (select.value !== prev) {
      select.dispatchEvent(new Event("input", { bubbles: true }));
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }

  function openMenu(select) {
    if (!select || select.disabled) return;
    if (openSelect === select && menuEl && !menuEl.hidden) {
      closeMenu();
      return;
    }
    closeMenu();
    var menu = ensureMenu();
    var opts = optionList(select);
    if (!opts.length) return;

    var selectId = select.id || "shroffin-select";
    menu.setAttribute("aria-label", select.getAttribute("aria-label") || "Options");
    menu.innerHTML = "";
    opts.forEach(function (opt, i) {
      if (opt.disabled) return;
      var li = document.createElement("li");
      li.id = selectId + "-opt-" + i;
      li.className = "shroffin-select-menu-option";
      li.setAttribute("role", "option");
      li.setAttribute("data-value", opt.value);
      li.textContent = opt.textContent.trim();
      if (opt.selected) li.setAttribute("aria-selected", "true");
      else li.setAttribute("aria-selected", "false");
      li.addEventListener("mousedown", function (event) {
        event.preventDefault();
        event.stopPropagation();
        choose(select, opt.value);
      });
      menu.appendChild(li);
    });

    openSelect = select;
    select.setAttribute(OPEN_ATTR, "true");
    select.setAttribute("aria-expanded", "true");
    select.setAttribute("aria-controls", MENU_ID);
    placeMenu(select);
    menu.hidden = false;
    if (!prefersReducedMotion()) {
      menu.classList.remove("is-settled");
      window.requestAnimationFrame(function () {
        menu.classList.add("is-settled");
      });
    } else {
      menu.classList.add("is-settled");
    }

    var selectedIdx = 0;
    Array.prototype.some.call(menu.children, function (li, i) {
      if (li.getAttribute("data-value") === select.value) {
        selectedIdx = i;
        return true;
      }
      return false;
    });
    setActive(selectedIdx);
  }

  function onSelectActivate(event) {
    var select = event.currentTarget;
    if (!select || select.disabled) return;
    /* Block the OS popup — that sheet ignores our dark tokens. */
    event.preventDefault();
    if (typeof select.focus === "function") {
      try {
        select.focus({ preventScroll: true });
      } catch (err) {
        select.focus();
      }
    }
    if (event.type === "keydown") {
      var key = event.key;
      if (key === "Escape") {
        closeMenu();
        return;
      }
      if (key === "ArrowDown" || key === "ArrowUp" || key === "Enter" || key === " ") {
        if (openSelect === select && menuEl && !menuEl.hidden) {
          if (key === "ArrowDown") {
            event.preventDefault();
            setActive(activeIndex + 1);
            return;
          }
          if (key === "ArrowUp") {
            event.preventDefault();
            setActive(activeIndex - 1);
            return;
          }
          if (key === "Enter" || key === " ") {
            event.preventDefault();
            var item = menuEl.querySelectorAll('[role="option"]')[activeIndex];
            if (item) choose(select, item.getAttribute("data-value"));
            return;
          }
        }
        event.preventDefault();
        openMenu(select);
        if (key === "ArrowUp") setActive(menuEl.children.length - 1);
      }
      return;
    }
    openMenu(select);
  }

  function enhance(select) {
    if (!isMatch(select) || select.getAttribute(ENHANCED) === "1") return;
    if (select.disabled) return;
    select.setAttribute(ENHANCED, "1");
    select.setAttribute("aria-haspopup", "listbox");
    select.setAttribute("aria-expanded", "false");
    select.addEventListener("mousedown", onSelectActivate);
    select.addEventListener("keydown", onSelectActivate);
  }

  function enhanceAll(root) {
    var scope = root && root.querySelectorAll ? root : document;
    var nodes = scope.querySelectorAll
      ? scope.querySelectorAll(MATCH)
      : document.querySelectorAll(MATCH);
    Array.prototype.forEach.call(nodes, enhance);
    if (root && root.matches && isMatch(root)) enhance(root);
  }

  function scheduleEnhance(root) {
    window.clearTimeout(refreshTimer);
    refreshTimer = window.setTimeout(function () {
      enhanceAll(root || document);
    }, 0);
  }

  function onDocPointer(event) {
    if (!openSelect || !menuEl || menuEl.hidden) return;
    var t = event.target;
    if (t === openSelect || (openSelect.contains && openSelect.contains(t))) return;
    if (menuEl.contains(t)) return;
    closeMenu();
  }

  function onViewport() {
    if (!openSelect || !menuEl || menuEl.hidden) return;
    placeMenu(openSelect);
  }

  function init() {
    enhanceAll(document);
    document.addEventListener("mousedown", onDocPointer, true);
    document.addEventListener("touchstart", onDocPointer, true);
    window.addEventListener("resize", onViewport);
    window.addEventListener(
      "scroll",
      function () {
        if (openSelect) closeMenu();
      },
      true
    );
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && openSelect) {
        closeMenu();
      }
    });

    if (typeof MutationObserver === "function") {
      var obs = new MutationObserver(function (records) {
        var needs = false;
        for (var i = 0; i < records.length; i++) {
          var rec = records[i];
          if (!rec.addedNodes || !rec.addedNodes.length) continue;
          for (var j = 0; j < rec.addedNodes.length; j++) {
            var node = rec.addedNodes[j];
            if (node.nodeType !== 1) continue;
            if (isMatch(node) || (node.querySelector && node.querySelector(MATCH))) {
              needs = true;
              break;
            }
          }
          if (needs) break;
        }
        if (needs) scheduleEnhance(document);
      });
      obs.observe(document.documentElement, { childList: true, subtree: true });
    }
  }

  window.ShroffinSelectMenu = {
    enhance: enhanceAll,
    refresh: enhanceAll,
    close: closeMenu
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
