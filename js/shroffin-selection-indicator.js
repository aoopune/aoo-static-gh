/**
 * Sliding selection thumb for exclusive pill groups and underline tabs.
 * Moves softly from the current choice to the next — not a snap.
 */
(function () {
  "use strict";

  if (window.ShroffinSelectionIndicator) return;

  var LINE_HEIGHT = 2;
  var GUIDE_LINE_INSET = 4;
  var UI_MS = 900;

  var patterns = [
    {
      host: ".hlc-segmented",
      item: ".hlc-chip",
      mode: "pill",
      isSelected: function (el) {
        return el.getAttribute("aria-pressed") === "true";
      },
      watchAttrs: ["aria-pressed"],
    },
    {
      host: ".hlc-column-tabs",
      item: ".hlc-column-tab",
      mode: "line",
      lineInset: 0,
      /* Matches .hlc-column-tab[aria-current]::after { bottom: 0 } */
      lineBottom: 0,
      isSelected: function (el) {
        return el.getAttribute("aria-current") === "page";
      },
      watchAttrs: ["aria-current", "aria-selected"],
    },
    {
      host: '.guide-seg[role="tablist"]',
      item: ".guide-seg-btn",
      mode: "line",
      lineInset: GUIDE_LINE_INSET,
      /* Matches .guide-seg-btn[aria-selected]::after { bottom: -1px } */
      lineBottom: -1,
      isSelected: function (el) {
        return el.getAttribute("aria-selected") === "true";
      },
      watchAttrs: ["aria-selected"],
    },
  ];

  var controllers = [];
  var started = false;
  var resizeTimer = 0;

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function findSelected(host, pattern) {
    var items = host.querySelectorAll(pattern.item);
    var i;
    for (i = 0; i < items.length; i += 1) {
      if (pattern.isSelected(items[i])) return items[i];
    }
    return null;
  }

  function measure(host, item, pattern) {
    var hostRect = host.getBoundingClientRect();
    var itemRect = item.getBoundingClientRect();
    var scrollX = host.scrollLeft || 0;
    var scrollY = host.scrollTop || 0;
    var x = itemRect.left - hostRect.left + scrollX;
    var y = itemRect.top - hostRect.top + scrollY;
    var width = itemRect.width;
    var height = itemRect.height;

    if (pattern.mode === "line") {
      var inset = pattern.lineInset || 0;
      var cssBottom = pattern.lineBottom == null ? 0 : pattern.lineBottom;
      width = Math.max(0, itemRect.width - inset * 2);
      height = LINE_HEIGHT;
      x = itemRect.left - hostRect.left + scrollX + inset;
      // CSS bottom: N → line bottom edge sits N px above item bottom (N may be negative).
      y =
        itemRect.bottom -
        hostRect.top +
        scrollY -
        cssBottom -
        LINE_HEIGHT;
    }

    return { x: x, y: y, width: width, height: height };
  }

  function applyBox(thumb, box, instant) {
    if (instant) {
      thumb.classList.remove("is-ready");
    }
    thumb.style.width = box.width + "px";
    thumb.style.height = box.height + "px";
    thumb.style.transform =
      "translate(" + box.x + "px, " + box.y + "px)";
    if (instant) {
      void thumb.offsetWidth;
      if (!prefersReducedMotion()) {
        requestAnimationFrame(function () {
          thumb.classList.add("is-ready");
        });
      }
    } else if (!thumb.classList.contains("is-ready") && !prefersReducedMotion()) {
      thumb.classList.add("is-ready");
    }
  }

  function syncController(controller, instant) {
    var host = controller.host;
    var pattern = controller.pattern;
    var thumb = controller.thumb;
    var selected = findSelected(host, pattern);
    var hostStyle = window.getComputedStyle(host);

    if (hostStyle.display === "none" || hostStyle.visibility === "hidden") {
      thumb.hidden = true;
      return;
    }

    // Attribute loops can briefly clear every selected marker in one turn.
    // Keep the last thumb until the frame settles on a real choice.
    if (!selected) {
      return;
    }

    var box = measure(host, selected, pattern);
    if (box.width < 1 || box.height < 1) {
      return;
    }

    var selectionChanged = controller.selected !== selected;
    thumb.hidden = false;
    controller.selected = selected;

    var snap = Boolean(instant) || !controller.ready;
    if (selectionChanged && !snap) {
      controller.animUntil = Date.now() + UI_MS;
    }

    applyBox(thumb, box, snap);

    if (!controller.ready) {
      controller.ready = true;
    }
  }

  function scheduleSync(controller, instant) {
    if (instant) {
      controller.pendingInstant = true;
    }
    if (controller.raf) return;
    controller.raf = requestAnimationFrame(function () {
      controller.raf = 0;
      var snap = Boolean(controller.pendingInstant);
      controller.pendingInstant = false;
      syncController(controller, snap);
    });
  }

  function attach(host, pattern) {
    if (host.dataset.selThumb === "ready") return null;
    if (!host.querySelector(pattern.item)) return null;

    host.dataset.selThumb = "ready";
    host.classList.add("has-sel-thumb");

    var thumb = document.createElement("span");
    thumb.className =
      "shroffin-sel-thumb shroffin-sel-thumb--" + pattern.mode;
    thumb.setAttribute("aria-hidden", "true");
    thumb.hidden = true;
    host.insertBefore(thumb, host.firstChild);

    var controller = {
      host: host,
      pattern: pattern,
      thumb: thumb,
      selected: null,
      ready: false,
      raf: 0,
      pendingInstant: false,
      animUntil: 0,
      observer: null,
      resizeObserver: null,
    };

    if (typeof MutationObserver === "function") {
      controller.observer = new MutationObserver(function () {
        scheduleSync(controller, false);
      });
      controller.observer.observe(host, {
        attributes: true,
        attributeFilter: pattern.watchAttrs,
        subtree: true,
        childList: true,
      });
    }

    if (typeof ResizeObserver === "function") {
      controller.resizeObserver = new ResizeObserver(function () {
        // Don't snap mid-slide when the table reflows after a tab change.
        var moving =
          controller.animUntil && Date.now() < controller.animUntil;
        scheduleSync(controller, !moving);
      });
      controller.resizeObserver.observe(host);
    }

    host.addEventListener(
      "click",
      function () {
        scheduleSync(controller, false);
      },
      true
    );

    syncController(controller, true);
    controllers.push(controller);
    return controller;
  }

  function scan() {
    patterns.forEach(function (pattern) {
      document.querySelectorAll(pattern.host).forEach(function (host) {
        attach(host, pattern);
      });
    });
  }

  function refreshAll(instant) {
    controllers.forEach(function (controller) {
      if (instant !== false) {
        syncController(controller, true);
      } else {
        scheduleSync(controller, false);
      }
    });
  }

  function onResize() {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      refreshAll(true);
    }, 80);
  }

  function init() {
    scan();
    if (started) {
      refreshAll(true);
      return;
    }
    started = true;

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        refreshAll(true);
      });
    }

    // Late-mounted choice groups (e.g. after compare UI boots).
    if (typeof MutationObserver === "function") {
      var bootObserver = new MutationObserver(function () {
        scan();
      });
      bootObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    }
  }

  window.ShroffinSelectionIndicator = {
    init: init,
    refresh: function () {
      refreshAll(true);
    },
  };

  /**
   * Option 1 content fade: dim → swap → settle.
   * Matches --shroffin-sel-content-fade (micro band, 0.5s).
   * Still finishes before / with the selection thumb (UI 0.85s).
   */
  var FADE_MS = 500;

  function runContentFade(surface, updateFn, options) {
    if (!surface || prefersReducedMotion()) {
      return Promise.resolve(typeof updateFn === "function" ? updateFn() : undefined);
    }

    var fadeClass =
      (options && options.className) || "is-sel-fading";
    var token = (surface._selFadeToken || 0) + 1;
    surface._selFadeToken = token;
    surface.classList.add(fadeClass);

    return new Promise(function (resolve) {
      window.setTimeout(function () {
        if (surface._selFadeToken !== token) {
          resolve();
          return;
        }
        Promise.resolve(typeof updateFn === "function" ? updateFn() : undefined).then(
          function (result) {
            if (surface._selFadeToken !== token) {
              resolve(result);
              return;
            }
            requestAnimationFrame(function () {
              if (surface._selFadeToken === token) {
                surface.classList.remove(fadeClass);
              }
              resolve(result);
            });
          },
          function () {
            if (surface._selFadeToken === token) {
              surface.classList.remove(fadeClass);
            }
            resolve();
          }
        );
      }, FADE_MS);
    });
  }

  window.ShroffinSelectionFade = {
    duration: FADE_MS,
    run: runContentFade,
  };
})();
