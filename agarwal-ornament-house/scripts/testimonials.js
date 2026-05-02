/* Replaces the old testimonial slider with a slower staggered carousel while preserving the original customer stories. */
(function () {
  const stage = document.getElementById("testimonialsStage");
  const dotsContainer = document.getElementById("testimonialDots");
  const nextButton = document.getElementById("testimonialNext");
  const prevButton = document.getElementById("testimonialPrev");

  if (!stage || !dotsContainer || !nextButton || !prevButton) {
    return;
  }

  const testimonials = [
    {
      quote: "Bought my bridal set from Agarwal Ornament House. The quality and hallmarking gave us complete confidence. Will always return here.",
      author: "Priya Sharma",
    },
    {
      quote: "For our family jewellery purchases, trust matters most. Their service feels personal and their collection is always elegant.",
      author: "Rohit Agarwal",
    },
    {
      quote: "We enquired on WhatsApp before visiting and the response was quick, helpful, and very professional. The in-store experience matched it perfectly.",
      author: "Neha Verma",
    },
    {
      quote: "Their hallmark assurance and heritage made the decision easy for us. We found beautiful wedding jewellery for the whole family.",
      author: "Aditi Mishra",
    },
    {
      quote: "The range is impressive, especially if you want traditional and contemporary options in one showroom. We recommend them without hesitation.",
      author: "Sonal Gupta",
    },
    {
      quote: "A heritage store that still feels attentive and fresh. Their team understood exactly what we wanted for a gifting occasion.",
      author: "Vikas Tandon",
    },
  ];

  let current = 0;
  let autoTimer = 0;
  let touchStartX = 0;

  function getPosition(index) {
    const diff = ((index - current) % testimonials.length + testimonials.length) % testimonials.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === testimonials.length - 1) return "left";
    if (diff === 2) return "far-right";
    if (diff === testimonials.length - 2) return "far-left";
    return "hidden";
  }

  function buildCards() {
    stage.innerHTML = "";
    testimonials.forEach((testimonial, index) => {
      const card = document.createElement("div");
      card.className = "testimonial-card";
      const mark = document.createElement("span");
      mark.className = "testimonial-quote-mark";
      mark.textContent = '"';
      const text = document.createElement("p");
      text.className = "testimonial-text";
      text.textContent = testimonial.quote;
      const author = document.createElement("span");
      author.className = "testimonial-author";
      author.textContent = testimonial.author;
      card.append(mark, text, author);
      card.addEventListener("click", () => {
        current = index;
        update();
        restartAuto();
      });
      stage.appendChild(card);
    });

    dotsContainer.innerHTML = "";
    testimonials.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = "testimonial-dot";
      dot.addEventListener("click", () => {
        current = index;
        update();
        restartAuto();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function update() {
    const cards = stage.querySelectorAll(".testimonial-card");
    const dots = dotsContainer.querySelectorAll(".testimonial-dot");

    cards.forEach((card, index) => {
      armWillChange(card);
      card.className = `testimonial-card ${getPosition(index)}`;
    });

    dots.forEach((dot, index) => {
      dot.className = `testimonial-dot${index === current ? " active" : ""}`;
    });
  }

  function next() {
    current = (current + 1) % testimonials.length;
    update();
  }

  function prev() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    update();
  }

  function startAuto() {
    window.clearInterval(autoTimer);
    autoTimer = window.setInterval(next, 5000);
  }

  function stopAuto() {
    window.clearInterval(autoTimer);
  }

  function restartAuto() {
    stopAuto();
    startAuto();
  }

  function armWillChange(element) {
    element.style.willChange = "transform, opacity";
    const clear = () => {
      element.style.willChange = "";
      element.removeEventListener("transitionend", clear);
    };
    element.addEventListener("transitionend", clear);
  }

  nextButton.addEventListener("click", () => {
    next();
    restartAuto();
  });

  prevButton.addEventListener("click", () => {
    prev();
    restartAuto();
  });

  stage.addEventListener("mouseenter", stopAuto);
  stage.addEventListener("mouseleave", startAuto);
  stage.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", (event) => {
    const diff = touchStartX - event.changedTouches[0].clientX;
    if (Math.abs(diff) <= 50) {
      return;
    }

    if (diff > 0) {
      next();
    } else {
      prev();
    }

    restartAuto();
  }, { passive: true });

  buildCards();
  update();
  startAuto();
})();
