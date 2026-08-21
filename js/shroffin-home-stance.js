/**
 * Soft settle for About stance rows and home story moments.
 * Home waits for home-ready so boot visibility:hidden does not burn the reveal.
 *
 * Home moments: animate only while scrolling down. Leaving the viewport resets
 * off-screen (no visible fade). Scrolling up snaps content in — no rise glitch.
 */
(function () {
  var latchNodes = Array.prototype.slice.call(
    document.querySelectorAll(".stance-settle, .home-zero")
  );
  var replayNodes = Array.prototype.slice.call(
    document.querySelectorAll(".home-moment")
  );
  var nodes = latchNodes.concat(replayNodes);
  if (!nodes.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var lastY = window.scrollY || 0;
  var scrollingDown = true;

  function showAll() {
    nodes.forEach(function (node) {
      node.classList.add("is-in");
    });
  }

  function trackScrollDirection() {
    var y = window.scrollY || 0;
    if (y !== lastY) scrollingDown = y > lastY;
    lastY = y;
  }

  /* Instant class change off-screen or when rising should not animate. */
  function withoutTransition(el, fn) {
    el.classList.add("home-moment--snap");
    fn();
    /* Force style flush so the next frame can animate again. */
    void el.offsetWidth;
    el.classList.remove("home-moment--snap");
  }

  function settleAnimated(el) {
    el.classList.remove("home-moment--snap");
    el.classList.add("is-in");
  }

  function settleSnap(el) {
    withoutTransition(el, function () {
      el.classList.add("is-in");
    });
  }

  function resetOffscreen(el) {
    withoutTransition(el, function () {
      el.classList.remove("is-in");
    });
  }

  function observe() {
    if (reduce.matches || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    window.addEventListener("scroll", trackScrollDirection, { passive: true });
    trackScrollDirection();

    var phone =
      window.matchMedia && window.matchMedia("(max-width: 833px)").matches;

    /* Match guide moment thresholds — calm, not late. */
    var options = phone
      ? { rootMargin: "0px 0px -2% 0px", threshold: 0.04 }
      : { rootMargin: "0px 0px -6% 0px", threshold: 0.08 };

    latchNodes.forEach(function (node) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          node.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      }, options);
      observer.observe(node);
    });

    replayNodes.forEach(function (node) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (scrollingDown) settleAnimated(node);
            else settleSnap(node);
            return;
          }
          /* Fully off-screen — reset with no fade so the next down-scroll can rise. */
          resetOffscreen(node);
        });
      }, options);
      observer.observe(node);
    });
  }

  function whenHomeReady(fn) {
    var root = document.documentElement;
    if (!root.classList.contains("home-boot") || root.classList.contains("home-ready")) {
      fn();
      return;
    }
    if (typeof MutationObserver !== "function") {
      window.setTimeout(fn, 0);
      return;
    }
    var bootWatch = new MutationObserver(function () {
      if (!root.classList.contains("home-ready")) return;
      bootWatch.disconnect();
      window.requestAnimationFrame(fn);
    });
    bootWatch.observe(root, { attributes: true, attributeFilter: ["class"] });
  }

  whenHomeReady(observe);
})();
