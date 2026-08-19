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
   * Chapter headings — scroll-linked like Apple product sections.
   * One-way latch: once fully revealed, stay visible (no reverse on scroll-back).
   * First guide chapter is frozen in CSS — excluded here.
   */
  function initGuideHeadings() {
    if (!document.body.classList.contains("guide-reading")) return null;

    var firstChapter = document.querySelector(
      ".guide-story > .mag-section.guide-moment:first-child"
    );

    var headings = Array.prototype.slice
      .call(
        document.querySelectorAll(".guide-moment .guide-tile-title, .guide-moment .mag-h")
      )
      .filter(function (el) {
        if (firstChapter && firstChapter.contains(el)) return false;
        if (el.closest(".guide-flip-face--back")) return false;
        if (el.closest("[hidden]")) return false;
        return true;
      });

    if (!headings.length) return null;

    headings.forEach(function (el) {
      el.classList.add("guide-heading-scrub");
      el.style.setProperty("--guide-heading-scrub", "0");
      var section = el.closest(".guide-moment");
      if (section) section.classList.add("guide-moment--has-heading-scrub");
    });

    function syncSection(section, p) {
      if (!section || section.classList.contains("is-heading-settled")) return;
      var prev = readScrub(section, "--guide-heading-scrub");
      var next = Math.max(prev, p);
      section.style.setProperty("--guide-heading-scrub", next.toFixed(4));
      if (next >= 1) section.classList.add("is-heading-settled");
    }

    function tick() {
      headings.forEach(function (el) {
        if (el.closest("[hidden]")) return;
        var section = el.closest(".guide-moment");
        if (el.classList.contains("is-heading-settled")) {
          el.style.setProperty("--guide-heading-scrub", "1");
          syncSection(section, 1);
          return;
        }
        var p = progressInViewport(el, 0.86, 0.48);
        var next = latchScrub(el, "--guide-heading-scrub", p, "is-heading-settled");
        syncSection(section, next);
      });
    }

    var unbind = bindScrollLoop(tick);

    return function cleanupHeadings() {
      unbind();
      headings.forEach(function (el) {
        var section = el.closest(".guide-moment");
        el.classList.remove("guide-heading-scrub", "is-heading-settled");
        el.style.removeProperty("--guide-heading-scrub");
        if (section) {
          section.classList.remove("guide-moment--has-heading-scrub", "is-heading-settled");
          section.style.removeProperty("--guide-heading-scrub");
        }
      });
    };
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
