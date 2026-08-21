/**
 * Home landing boot — keeps story sections hidden until hero + product demo
 * have stable layout, then reveals. Also activates below-fold feature iframes
 * (data-home-embed-src) only when near the viewport so Explore CSS/fonts stay
 * off the critical path.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var released = false;
  var fallbackMs = 2800;
  var fallbackId = 0;
  var embedsBound = false;

  function release() {
    if (released) return;
    released = true;
    if (fallbackId) window.clearTimeout(fallbackId);
    root.classList.remove("home-boot");
    root.classList.add("home-ready");
  }

  function isStageVisible(stage) {
    var section = stage.closest(".spd-section");
    if (!section) {
      return stage.getBoundingClientRect().height >= 48;
    }
    var style = window.getComputedStyle(section);
    return style.display !== "none" && style.visibility !== "hidden";
  }

  function homeStagesReady() {
    var home = document.querySelector(".home-content");
    if (!home) return true;

    var stages = home.querySelectorAll("[data-spd-stage]");
    if (!stages.length) return true;

    var sawVisible = false;

    for (var i = 0; i < stages.length; i++) {
      var stage = stages[i];
      if (!isStageVisible(stage)) continue;

      sawVisible = true;

      if (stage.getAttribute("data-spd-chrome") !== "true") return false;

      var readyEl = stage.querySelector("[data-spd-phone], [data-spd-window]");
      if (readyEl && !readyEl.classList.contains("is-ready")) return false;

      if (stage.getBoundingClientRect().height < 48) return false;
    }

    return sawVisible;
  }

  function tryRelease() {
    if (released) return;
    if (homeStagesReady()) release();
  }

  function scheduleFallback() {
    fallbackId = window.setTimeout(release, fallbackMs);
  }

  function activateEmbed(frame) {
    if (!frame || frame.getAttribute("data-home-embed-bound") === "true") return;
    var src = frame.getAttribute("data-home-embed-src");
    if (!src) return;
    frame.setAttribute("data-home-embed-bound", "true");
    frame.setAttribute("src", src);
  }

  function afterLcp(fn) {
    var done = false;
    function run() {
      if (done) return;
      done = true;
      fn();
    }
    try {
      if (typeof PerformanceObserver === "function") {
        var po = new PerformanceObserver(function (list) {
          if (!list.getEntries().length) return;
          po.disconnect();
          run();
        });
        po.observe({ type: "largest-contentful-paint", buffered: true });
      }
    } catch (e) {
      /* ignore */
    }
    window.setTimeout(run, 3500);
    window.addEventListener("load", function () {
      window.setTimeout(run, 600);
    });
  }

  function bindHomeEmbeds() {
    if (embedsBound) return;
    embedsBound = true;

    var frames = document.querySelectorAll("iframe[data-home-embed-src]");
    if (!frames.length) return;

    function whenIdle(fn) {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(fn, { timeout: 2500 });
        return;
      }
      window.setTimeout(fn, 500);
    }

    afterLcp(function () {
      if (!("IntersectionObserver" in window)) {
        whenIdle(function () {
          frames.forEach(activateEmbed);
        });
        return;
      }

      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var frame = entry.target;
            io.unobserve(frame);
            whenIdle(function () {
              activateEmbed(frame);
            });
          });
        },
        { rootMargin: "240px 0px", threshold: 0.01 }
      );

      frames.forEach(function (frame) {
        io.observe(frame);
      });
    });
  }

  function boot() {
    bindHomeEmbeds();

    if (!root.classList.contains("home-boot")) return;

    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        release();
        return;
      }
    } catch (e) {
      /* ignore */
    }

    scheduleFallback();
    tryRelease();
  }

  window.ShroffinHomeBoot = {
    tryRelease: tryRelease,
    release: release,
  };

  window.addEventListener(
    "pageshow",
    function (event) {
      if (event.persisted) release();
    },
    { once: true }
  );

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
