(() => {
  let featuredSwiper = null;

  function initFeaturedSwiper() {
    const element = document.querySelector(".products-swiper");
    if (!element || !window.Swiper) {
      return;
    }

    if (window.innerWidth < 1024) {
      if (!featuredSwiper) {
        featuredSwiper = new Swiper(".products-swiper", {
          slidesPerView: 1.2,
          spaceBetween: 16,
          centeredSlides: false,
          pagination: { el: ".products-swiper .swiper-pagination", clickable: true },
          breakpoints: {
            480: { slidesPerView: 2.1 },
            768: { slidesPerView: 3.1 },
          },
        });
      }
    } else if (featuredSwiper) {
      featuredSwiper.destroy(true, true);
      featuredSwiper = null;
    }
  }

  function initStaticSwiper(selector, config) {
    const element = document.querySelector(selector);
    if (!element || !window.Swiper || element.dataset.swiperReady === "true") {
      return;
    }

    element.dataset.swiperReady = "true";
    new Swiper(selector, config);
  }

  function initCarousels() {
    if (!window.Swiper) {
      return;
    }

    initFeaturedSwiper();
    initStaticSwiper(".related-swiper", {
      slidesPerView: 1.2,
      spaceBetween: 16,
      pagination: { el: ".related-swiper .swiper-pagination", clickable: true },
      breakpoints: {
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4, spaceBetween: 24 },
      },
    });
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(initFeaturedSwiper, 120);
  });

  document.addEventListener("DOMContentLoaded", initCarousels);
  document.addEventListener("products:rendered", initCarousels);
})();
