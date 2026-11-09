(function () {
  "use strict";
  document.body.classList.add("js");

  var nav = document.querySelector(".nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var targets = document.querySelectorAll(".section, .project, .service, .step, .stat");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    targets.forEach(function (target, index) {
      target.classList.add("reveal");
      target.style.transitionDelay = Math.min(index % 4, 3) * 45 + "ms";
      observer.observe(target);
    });
  }

  document.querySelectorAll(".year-now").forEach(function (node) {
    node.textContent = "© " + new Date().getFullYear();
  });

  document.querySelectorAll(".shot img").forEach(function (image) {
    image.addEventListener("error", function () {
      image.closest(".shot").style.display = "none";
    });
  });
})();
