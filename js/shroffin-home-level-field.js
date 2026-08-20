/**
 * Home Zero equal bank field: settle the product cut into view.
 * Meaning is on screen: every lender mark, same place — no paid lift.
 */
(function () {
  var root = document.querySelector("[data-home-level-field]");
  if (!root) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  function settle() {
    root.classList.add("is-settled");
  }

  function unsettle() {
    if (reduce.matches) return;
    root.classList.remove("is-settled");
  }

  function inViewEnough() {
    var rect = root.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight || 0;
    if (vh <= 0) return false;
    var visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
    return visible >= Math.min(rect.height, vh) * 0.28;
  }

  function trySettleFromLayout() {
    if (reduce.matches || inViewEnough()) settle();
  }

  if (reduce.matches || !("IntersectionObserver" in window)) {
    settle();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
          settle();
        } else if (!entry.isIntersecting) {
          unsettle();
        }
      });
    },
    { threshold: [0, 0.28, 0.55] }
  );

  observer.observe(root);

  if (document.documentElement.classList.contains("home-ready")) {
    trySettleFromLayout();
  } else if (typeof MutationObserver === "function") {
    var bootWatch = new MutationObserver(function () {
      if (!document.documentElement.classList.contains("home-ready")) return;
      bootWatch.disconnect();
      window.requestAnimationFrame(trySettleFromLayout);
    });
    bootWatch.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  } else {
    window.setTimeout(trySettleFromLayout, 3000);
  }

  if (typeof reduce.addEventListener === "function") {
    reduce.addEventListener("change", function () {
      if (reduce.matches) settle();
    });
  }
})();
