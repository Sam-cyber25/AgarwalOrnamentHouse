document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  const heroContent = document.querySelector(".hero-content");
  const particleContainer = document.getElementById("ring-particles");
  const heroStage = document.querySelector(".hero-animation-stage");

  /* Fix: allow hero parallax to run even after removing the placeholder ring stage. */
  if (!hero || !heroContent) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && particleContainer) {
    const PARTICLE_COUNT = 12;
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 5 + 3;
      const delay = Math.random() * 8;
      const duration = Math.random() * 5 + 5;
      const orbit = 80 + Math.random() * 80;
      const startAngle = Math.random() * 360;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: var(--gold);
        top: 50%;
        left: 50%;
        margin: -${size / 2}px;
        opacity: 0;
        animation: particle-orbit-${i} ${duration}s ${delay}s linear infinite;
      `;

      const style = document.createElement("style");
      style.textContent = `
        @keyframes particle-orbit-${i} {
          0% {
            transform: rotate(${startAngle}deg) translateX(${orbit}px);
            opacity: ${Math.random() * 0.4 + 0.2};
          }
          100% {
            transform: rotate(${startAngle + 360}deg) translateX(${orbit}px);
            opacity: ${Math.random() * 0.4 + 0.2};
          }
        }
      `;
      document.head.appendChild(style);
      particleContainer.appendChild(particle);
    }
  }

  function parallaxHero() {
    if (prefersReducedMotion) {
      return;
    }

    const scrolled = window.scrollY;
    const heroHeight = hero.offsetHeight;

    if (scrolled <= heroHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroContent.style.opacity = String(1 - scrolled / (heroHeight * 0.6));
      if (heroStage) {
        heroStage.style.transform = `translateY(calc(-50% + ${scrolled * 0.15}px))`;
      }
    }
  }

  window.addEventListener("scroll", parallaxHero, { passive: true });
  parallaxHero();
});
