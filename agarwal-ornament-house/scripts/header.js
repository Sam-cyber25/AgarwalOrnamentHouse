document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  if (!header) {
    return;
  }

  const SCROLL_THRESHOLD = 120;
  const hamburger = document.getElementById("hamburger-btn");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const closeBtn = document.getElementById("drawer-close");
  const drawerLinks = drawer ? drawer.querySelectorAll("a") : [];

  function updateHeaderState() {
    header.classList.toggle("header-scrolled", window.scrollY > SCROLL_THRESHOLD);
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--header-offset", `${header.offsetHeight}px`);
    });
  }

  function openDrawer() {
    if (!hamburger || !drawer) {
      return;
    }
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
  }

  function closeDrawer() {
    if (!hamburger || !drawer) {
      return;
    }
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  }

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  window.addEventListener("resize", () => {
    updateHeaderState();
    if (window.innerWidth > 768) {
      closeDrawer();
    }
  });

  updateHeaderState();

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      const isOpen = drawer?.classList.contains("open");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  if (overlay) {
    overlay.addEventListener("click", closeDrawer);
  }

  drawerLinks.forEach((link) => link.addEventListener("click", closeDrawer));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrawer();
    }
  });
});
