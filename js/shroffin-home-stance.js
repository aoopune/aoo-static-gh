/**
 * Home stance — soft settle only. No scroll theater.
 */
(function () {
  var root = document.querySelector('.stance');
  if (!root) return;

  var nodes = Array.prototype.slice.call(
    root.querySelectorAll('.stance-settle')
  );
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

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
  );

  nodes.forEach(function (node) {
    observer.observe(node);
  });
})();
