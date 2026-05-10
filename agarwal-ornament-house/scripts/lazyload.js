(() => {
  let imageObserver = null;
  const observed = new WeakSet();

  function hydrateImage(img) {
    const source = img.dataset.src;
    if (!source) {
      return;
    }

    img.src = source;
    img.onload = () => img.classList.add("loaded");
    img.removeAttribute("data-src");
  }

  function ensureObserver() {
    if (imageObserver || !("IntersectionObserver" in window)) {
      return;
    }

    imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          hydrateImage(img);
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: "200px 0px", threshold: 0.01 });
  }

  window.observeLazyImages = function observeLazyImages(root = document) {
    const lazyImages = root.querySelectorAll ? root.querySelectorAll("img[data-src]") : [];
    if (!lazyImages.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      lazyImages.forEach((img) => hydrateImage(img));
      return;
    }

    ensureObserver();
    lazyImages.forEach((img) => {
      if (!observed.has(img)) {
        observed.add(img);
        imageObserver.observe(img);
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => window.observeLazyImages());
  } else {
    window.observeLazyImages();
  }
})();
