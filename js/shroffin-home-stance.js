/**
 * Soft settle for About stance rows, home story moments, and Zero’s first pair.
 */
(function () {
  var nodes = Array.prototype.slice.call(
    document.querySelectorAll('.stance-settle, .home-moment, .home-zero')
  );
  if (!nodes.length) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function showAll() {
    nodes.forEach(function (node) {
      node.classList.add('is-in');
    });
  }

  if (reduce.matches || !('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  nodes.forEach(function (node) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            node.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    );
    observer.observe(node);
  });
})();
