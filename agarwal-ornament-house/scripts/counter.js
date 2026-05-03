document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  if (!counters.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach((counter) => {
      counter.textContent = Number(counter.dataset.target || 0).toLocaleString("en-IN");
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      const target = parseInt(element.dataset.target || "0", 10);
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;

      const timer = window.setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString("en-IN");
      }, 16);

      observer.unobserve(element);
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
});
