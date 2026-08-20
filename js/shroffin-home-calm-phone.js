/**
 * Home calm-phone — quiet lock screen + one status note settles in.
 * 0% sales. Pace is shown, not denied.
 */
(function () {
  var root = document.querySelector("[data-home-calm-phone]");
  if (!root) return;

  var forceMotion = root.hasAttribute("data-force-motion");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  function motionOff() {
    return reduce.matches && !forceMotion;
  }

  function show() {
    root.classList.add("is-clear");
  }

  function hide() {
    if (forceMotion) return;
    root.classList.remove("is-clear");
  }

  if (motionOff() || !("IntersectionObserver" in window)) {
    show();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
          show();
        } else if (!entry.isIntersecting) {
          hide();
        }
      });
    },
    { threshold: [0, 0.28, 0.55] }
  );

  observer.observe(root);

  if (forceMotion) {
    show();
  }

  if (typeof reduce.addEventListener === "function") {
    reduce.addEventListener("change", function () {
      if (motionOff()) {
        show();
      }
    });
  }
})();
