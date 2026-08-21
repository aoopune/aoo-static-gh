(function () {
  if (window.ShroffinScrub) return;

  var cleanups = [];

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function clamp01(t) {
    return Math.min(1, Math.max(0, t));
  }

  function readScrub(el, name) {
    var raw = el.style.getPropertyValue(name);
    var n = parseFloat(raw);
    return Number.isFinite(n) ? n : 0;
  }

  function destroy() {
    while (cleanups.length) {
      try {
        cleanups.pop()();
      } catch (e) {}
    }
  }

  function bindScrollLoop(tick) {
    var frame = 0;

    function request() {
      if (frame) return;
      frame = window.requestAnimationFrame(function () {
        frame = 0;
        tick();
      });
    }

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    tick();

    return function unbind() {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }

  function progressInViewport(el, startRatio, endRatio) {
    var vh = window.innerHeight || 1;
    var rect = el.getBoundingClientRect();
    var start = vh * startRatio;
    var end = vh * endRatio;
    return clamp01((start - rect.top) / (start - end));
  }

  function latchScrub(el, name, p, doneClass) {
    if (el.classList.contains(doneClass)) {
      el.style.setProperty(name, "1");
      return 1;
    }
    var next = Math.max(readScrub(el, name), p);
    el.style.setProperty(name, next.toFixed(4));
    if (next >= 1) {
      el.classList.add(doneClass);
      el.style.setProperty(name, "1");
      return 1;
    }
    return next;
  }

  function initGuideBlocks() {
    var nodes = Array.prototype.slice
      .call(document.querySelectorAll('[data-guide-scrub="on"]'))
      .filter(function (el) {
        return !el.closest("[hidden]");
      });
    if (!nodes.length) return null;

    nodes.forEach(function (el) {
      el.classList.add("guide-scrub");
      el.style.setProperty("--guide-scrub", "0");
    });

    function tick() {
      nodes.forEach(function (el) {
        if (el.closest("[hidden]")) return;
        var p = progressInViewport(el, 0.85, 0.35);
        latchScrub(el, "--guide-scrub", p, "is-scrub-done");
      });
    }

    var unbind = bindScrollLoop(tick);

    return function cleanupBlocks() {
      unbind();
      nodes.forEach(function (el) {
        el.classList.remove("guide-scrub", "is-scrub-done");
        el.style.removeProperty("--guide-scrub");
      });
    };
  }

  /*
   * Chapter headings used to scroll-scrub. They now share the card rise
   * (down-only IO replay in shroffin-guide.js). Keep in-chapter block scrub.
   */
  function initGuideHeadings() {
    return null;
  }

  function init() {
    destroy();
    if (prefersReducedMotion()) return;

    var blockCleanup = initGuideBlocks();
    var headingCleanup = initGuideHeadings();

    if (blockCleanup) cleanups.push(blockCleanup);
    if (headingCleanup) cleanups.push(headingCleanup);
  }

  window.ShroffinScrub = { init: init, destroy: destroy };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      if (!document.body.classList.contains("guide-reading")) init();
    });
  } else if (!document.body.classList.contains("guide-reading")) {
    init();
  }
})();
