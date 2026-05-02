const BRAND = {
  name: "Agarwal Ornament House",
  tagline: "THE ULTIMATE RESIDENCE OF GOVT. HALLMARKED JEWELLERY",
  since: "1947",
  legacy: "78 Years of Trust",
  type: "916 Wholesaler & Retailer",
  whatsapp: "919889899999",
  whatsappLink: "https://wa.me/919889899999",
  phone: "9889899999",
  email: "aoh_art@yahoo.in",
  address: "49/59, Agarwal Ornament House, Nayaganj, Kanpur",
  hours: "Monday - Saturday · 12:00 PM - 7:00 PM",
  instagram: "https://www.instagram.com/official_agarwalornamenthouse",
  mapsLink: "https://maps.google.com/?q=Agarwal+Ornament+House+Nayaganj+Kanpur",
};

window.BRAND = BRAND;

/* Centralizes the new cinematic interaction layer while preserving the existing page structure and links. */
document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initSmoothAnchors();
  initActiveNav();
  initPageTransitions();
  initSoftHeaderScroll();
  initHeroExperience(prefersReducedMotion);
  initRevealSystem(prefersReducedMotion);
});

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initActiveNav() {
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    const isHomeMatch = currentPath === "/" && href === "/index.html";
    if (isHomeMatch || href === currentPath || currentPath.endsWith(href.split("/").pop())) {
      link.classList.add("active");
    }
  });
}

function initPageTransitions() {
  const transitionOverlay = document.createElement("div");
  transitionOverlay.id = "page-transition";
  transitionOverlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
    z-index: 10000;
    pointer-events: none;
    opacity: 0;
    transition: opacity 400ms var(--ease-cinematic);
  `;
  document.body.appendChild(transitionOverlay);

  document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="tel"]):not([href^="mailto"]):not([href^="https://wa.me"])').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }

      const href = link.getAttribute("href");
      if (!href || href.startsWith("javascript")) {
        return;
      }

      event.preventDefault();
      transitionOverlay.style.opacity = "0.6";
      window.setTimeout(() => {
        window.location.href = href;
      }, 320);
    });
  });

  window.addEventListener("pageshow", () => {
    transitionOverlay.style.opacity = "0";
  });
}

function initSoftHeaderScroll() {
  const header = document.getElementById("main-header");
  if (!header) {
    return;
  }

  const syncHeaderState = () => {
    header.classList.toggle("header-soft-scroll", window.scrollY > 60);
  };

  window.addEventListener("scroll", syncHeaderState, { passive: true });
  syncHeaderState();
}

function initHeroExperience(prefersReducedMotion) {
  const hero = document.getElementById("hero");
  if (!hero) {
    return;
  }

  hero.classList.add("is-cinematic");

  const heroTitleLines = hero.querySelectorAll(".hero-title-line1, .hero-title-line2");
  let wordIndex = 0;
  heroTitleLines.forEach((line) => {
    wordIndex = wrapHeroWords(line, wordIndex);
  });

  const lastWordDelay = wordIndex > 0 ? 0.18 + (wordIndex - 1) * 0.08 : 0.18;
  hero.style.setProperty("--hero-sub-delay", `${lastWordDelay + 0.4}s`);
  hero.style.setProperty("--hero-cta-delay", `${lastWordDelay + 0.7}s`);
  armWillChange(hero);

  requestAnimationFrame(() => {
    hero.classList.add("is-ready");
  });

  if (prefersReducedMotion) {
    return;
  }

  initHeroParticles(hero);
  initHeroParallax(hero);
}

function wrapHeroWords(line, startIndex) {
  const words = line.textContent.trim().split(/\s+/).filter(Boolean);
  line.innerHTML = words
    .map((word, index) => `<span class="hero-word" style="--word-index:${startIndex + index}">${word}</span>`)
    .join(" ");
  return startIndex + words.length;
}

function initHeroParticles(hero) {
  const bgLayer = hero.querySelector(".hero-bg-layer");
  if (!bgLayer) {
    return;
  }

  const particleLayer = document.createElement("div");
  particleLayer.className = "hero-ambient-particles";
  bgLayer.appendChild(particleLayer);

  const bounds = { width: hero.clientWidth, height: hero.clientHeight };
  /* Fourteen particles keeps the hero veil rich without crossing into distraction territory. */
  const count = 14;
  const particles = Array.from({ length: count }, () => {
    const el = document.createElement("span");
    el.className = "hero-ambient-particle";
    const size = 2 + Math.random();
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    particleLayer.appendChild(el);

    return {
      el,
      size,
      x: Math.random() * bounds.width,
      y: Math.random() * bounds.height,
      vx: (Math.random() - 0.5) * 0.06,
      vy: (Math.random() * 0.08) + 0.02,
      sway: (Math.random() * 0.18) + 0.05,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.18 + Math.random() * 0.22,
    };
  });

  const syncBounds = () => {
    bounds.width = hero.clientWidth;
    bounds.height = hero.clientHeight;
  };

  let animationFrameId = 0;
  const animate = (time) => {
    particles.forEach((particle) => {
      particle.x += particle.vx + Math.sin(time * 0.00018 + particle.phase) * particle.sway;
      particle.y += particle.vy;

      if (particle.x > bounds.width + 8) {
        particle.x = -8;
      } else if (particle.x < -8) {
        particle.x = bounds.width + 8;
      }

      if (particle.y > bounds.height + 8) {
        particle.y = -8;
      }

      particle.el.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0)`;
      particle.el.style.opacity = particle.alpha.toFixed(2);
    });

    animationFrameId = window.requestAnimationFrame(animate);
  };

  window.addEventListener("resize", syncBounds, { passive: true });
  animationFrameId = window.requestAnimationFrame(animate);

  window.addEventListener("beforeunload", () => {
    window.cancelAnimationFrame(animationFrameId);
  }, { once: true });
}

function initHeroParallax(hero) {
  const heroContent = hero.querySelector(".hero-content");
  const heroStage = hero.querySelector(".hero-animation-stage");
  if (!heroContent || !heroStage) {
    return;
  }

  let ticking = false;
  let cleanupTimer = 0;

  const clearWillChange = () => {
    heroContent.style.willChange = "";
    heroStage.style.willChange = "";
  };

  const updateParallax = () => {
    const scrolled = Math.min(window.scrollY, hero.offsetHeight);
    heroContent.style.transform = `translate3d(0, ${scrolled * 0.18}px, 0)`;
    heroStage.style.transform = `translateY(calc(-50% + ${scrolled * 0.12}px))`;

    ticking = false;
    window.clearTimeout(cleanupTimer);
    cleanupTimer = window.setTimeout(clearWillChange, 140);
  };

  window.addEventListener("scroll", () => {
    if (ticking) {
      return;
    }

    heroContent.style.willChange = "transform";
    heroStage.style.willChange = "transform";
    ticking = true;
    window.requestAnimationFrame(updateParallax);
  }, { passive: true });

  updateParallax();
}

function initRevealSystem(prefersReducedMotion) {
  const revealTargets = Array.from(
    new Set(
      [
        ...document.querySelectorAll("main section"),
        ...document.querySelectorAll(".page-hero, .collections-layout, .pdp-layout, .contact-full-layout, .founder-section"),
      ].filter((element) => element && element.id !== "hero"),
    ),
  );

  const animationTargets = Array.from(document.querySelectorAll("[data-aos]"));

  if (prefersReducedMotion) {
    revealTargets.forEach((target) => {
      target.classList.add("is-visible");
      markSectionHeaderVisible(target);
      assignRevealChildren(target).forEach((child) => {
        child.classList.add("is-visible");
      });
    });

    animationTargets.forEach((target) => {
      target.classList.add("aos-animate");
    });
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const group = entry.target;
      group.classList.add("is-visible");
      markSectionHeaderVisible(group);
      assignRevealChildren(group).forEach((child) => armWillChange(child));
      observer.unobserve(group);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -80px 0px" });

  revealTargets.forEach((target) => {
    target.classList.add("reveal-group");
    assignRevealChildren(target);
    revealObserver.observe(target);
  });

  const aosObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      armWillChange(element);
      element.classList.add("aos-animate");
      observer.unobserve(element);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -80px 0px" });

  animationTargets.forEach((target, index) => {
    target.style.transitionDelay = `${(index % 4) * 0.1}s`;
    aosObserver.observe(target);
  });
}

function assignRevealChildren(group) {
  if (group.dataset.revealPrepared === "true") {
    return Array.from(group.querySelectorAll(".reveal-child"));
  }

  const directContainer = group.querySelector(":scope > .container");
  let children = directContainer ? Array.from(directContainer.children) : Array.from(group.children);

  if (directContainer && children.length === 1 && children[0].children.length > 0) {
    children = Array.from(children[0].children);
  }

  children
    .filter((child) => !child.matches("script, style, .breadcrumb"))
    .forEach((child, index) => {
      child.classList.add("reveal-child");
      child.style.transitionDelay = `${index * 0.1}s`;
    });

  group.dataset.revealPrepared = "true";
  return children;
}

function markSectionHeaderVisible(group) {
  group.querySelectorAll(".section-header").forEach((header) => {
    header.classList.add("is-visible");
  });
}

function armWillChange(element) {
  element.style.willChange = "transform, opacity";
  const clearWillChange = () => {
    element.style.willChange = "";
    element.removeEventListener("transitionend", clearWillChange);
    element.removeEventListener("animationend", clearWillChange);
  };

  element.addEventListener("transitionend", clearWillChange);
  element.addEventListener("animationend", clearWillChange);
}
