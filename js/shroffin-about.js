/**
 * About page — soft section reveals.
 * Does not touch home stance JS.
 */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var reveals = Array.prototype.slice.call(
    document.querySelectorAll('.about-reveal')
  );

  function showReveals() {
    reveals.forEach(function (node) {
      node.classList.add('is-in');
    });
  }

  if (!reveals.length) return;

  if (reduce.matches || !('IntersectionObserver' in window)) {
    showReveals();
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
    { rootMargin: '0px 0px -8% 0px', threshold: 0.14 }
  );

  reveals.forEach(function (node) {
    observer.observe(node);
  });
})();
