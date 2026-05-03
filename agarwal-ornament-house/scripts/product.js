(() => {
  let currentIndex = 0;
  let galleryImages = [];
  let initialized = false;
  let controlsBound = false;

  function updateMeta(product) {
    document.title = `${product.name} | ${product.categoryLabel} – Agarwal Ornament House Kanpur`;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        `Enquire about ${product.name} from Agarwal Ornament House. ${product.categoryLabel} in Kanpur with trusted craftsmanship since 1947. WhatsApp: ${window.BRAND?.phone || "9889899999"}.`,
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `https://agarwalornamenthouse.com/pages/product-detail.html?id=${product.id}`;
    }
  }

  function buildGalleryThumb(src, index, name) {
    return `
      <button class="pdp-thumb${index === 0 ? " active" : ""}" data-index="${index}" aria-label="View image ${index + 1}">
        <img src="${src}" alt="${name} image ${index + 1}" loading="lazy">
      </button>
    `;
  }

  function switchImage(index) {
    const mainImg = document.getElementById("pdp-main-img");
    const thumbs = document.querySelectorAll(".pdp-thumb");
    if (!mainImg || !galleryImages[index]) {
      return;
    }

    currentIndex = index;
    mainImg.style.opacity = "0";
    window.setTimeout(() => {
      mainImg.src = galleryImages[index];
      mainImg.style.opacity = "1";
    }, 200);
    thumbs.forEach((thumb, thumbIndex) => thumb.classList.toggle("active", thumbIndex === index));
  }

  function setupZoom() {
    const wrap = document.getElementById("pdp-main-img-wrap");
    const lens = document.getElementById("pdp-zoom-lens");
    const result = document.getElementById("pdp-zoom-result");
    const mainImg = document.getElementById("pdp-main-img");
    if (!wrap || !lens || !result || !mainImg) {
      return;
    }

    wrap.addEventListener("mousemove", (event) => {
      if (window.innerWidth <= 1024) {
        return;
      }

      lens.style.display = "block";
      result.style.display = "block";
      const rect = wrap.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const lensX = Math.max(0, Math.min(x - 60, rect.width - 120));
      const lensY = Math.max(0, Math.min(y - 60, rect.height - 120));
      lens.style.left = `${lensX}px`;
      lens.style.top = `${lensY}px`;
      const bgX = -(lensX / rect.width) * (rect.width * 2.5 - 280);
      const bgY = -(lensY / rect.height) * (rect.height * 2.5 - 280);
      result.style.backgroundImage = `url(${mainImg.src})`;
      result.style.backgroundSize = `${rect.width * 2.5}px ${rect.height * 2.5}px`;
      result.style.backgroundPosition = `${bgX}px ${bgY}px`;
    });

    wrap.addEventListener("mouseleave", () => {
      lens.style.display = "none";
      result.style.display = "none";
    });
  }

  function initProductPage() {
    const page = document.getElementById("product-detail-page");
    if (!page || !window.getProductById) {
      return;
    }

    const productId = new URLSearchParams(window.location.search).get("id");
    const product = window.getProductById(productId);
    if (!product) {
      return;
    }

    updateMeta(product);

    const title = document.getElementById("pdp-title");
    const meta = document.getElementById("pdp-meta");
    const description = document.getElementById("pdp-description");
    const details = document.getElementById("pdp-details");
    const breadcrumb = document.getElementById("pdp-breadcrumb-name");
    const waBtn = document.getElementById("pdp-wa-btn");
    const shareLink = document.querySelector(".share-link");
    const badges = document.querySelector(".pdp-badges");
    const thumbsWrap = document.querySelector(".pdp-thumbs");
    const mainImg = document.getElementById("pdp-main-img");
    const stickyBar = document.getElementById("pdp-sticky-bar");

    if (title) {
      title.textContent = product.name;
    }
    if (meta) {
      meta.textContent = `${product.categoryLabel.replace(" Jewellery", "")} · ${product.metal} · ${product.finish}`;
    }
    if (description) {
      description.textContent = `${product.description} This piece reflects the legacy of Agarwal Ornament House and is ideal for ${product.occasion.toLowerCase()}.`;
    }
    if (breadcrumb) {
      breadcrumb.textContent = product.name;
    }
    if (badges) {
      badges.innerHTML = `
        ${product.badge ? `<span class="badge badge-new">${product.badge}</span>` : '<span class="badge badge-new">New Arrival</span>'}
        <span class="badge pdp-hallmark-badge">${product.hallmark}</span>
      `;
    }
    if (details) {
      details.innerHTML = `
        <li><span class="detail-key">Metal</span><span class="detail-val">${product.metal}</span></li>
        <li><span class="detail-key">Type</span><span class="detail-val">${product.type}</span></li>
        <li><span class="detail-key">Hallmark</span><span class="detail-val">${product.hallmark}</span></li>
        <li><span class="detail-key">Finish</span><span class="detail-val">${product.finish}</span></li>
        <li><span class="detail-key">Occasion</span><span class="detail-val">${product.occasion}</span></li>
      `;
    }

    galleryImages = product.gallery && product.gallery.length ? product.gallery.slice(0, 4) : product.images.slice(0, 4);
    while (galleryImages.length < 4) {
      galleryImages.push(galleryImages[galleryImages.length % Math.max(galleryImages.length, 1)] || product.images[0]);
    }

    if (thumbsWrap) {
      thumbsWrap.innerHTML = galleryImages
        .map((src, index) => buildGalleryThumb(src, index, product.name))
        .join("");
      if (typeof window.observeLazyImages === "function") {
        window.observeLazyImages(thumbsWrap);
      }
    }

    if (mainImg) {
      mainImg.src = galleryImages[0];
      mainImg.alt = `${product.name} - ${product.categoryLabel.toLowerCase()} by Agarwal Ornament House Kanpur`;
    }

    if (waBtn && typeof window.buildWALink === "function") {
      waBtn.href = window.buildWALink(product.name, "product");
    }

    if (stickyBar) {
      const stickyWA = stickyBar.querySelector("[data-wa-sticky]");
      if (stickyWA && typeof window.buildWALink === "function") {
        stickyWA.href = window.buildWALink(product.name, "product");
      }
    }

    if (shareLink) {
      shareLink.href = `https://wa.me/?text=${encodeURIComponent(`Check this out from Agarwal Ornament House: https://agarwalornamenthouse.com/pages/product-detail.html?id=${product.id}`)}`;
    }

    document.querySelectorAll(".pdp-thumb").forEach((thumb, index) => {
      thumb.addEventListener("click", () => switchImage(index));
    });

    if (!controlsBound) {
      const prevBtn = document.getElementById("pdp-prev");
      const nextBtn = document.getElementById("pdp-next");
      if (prevBtn) {
        prevBtn.addEventListener("click", () => switchImage((currentIndex - 1 + galleryImages.length) % galleryImages.length));
      }
      if (nextBtn) {
        nextBtn.addEventListener("click", () => switchImage((currentIndex + 1) % galleryImages.length));
      }
      controlsBound = true;
    }

    if (!initialized) {
      document.addEventListener("keydown", (event) => {
        if (!document.getElementById("product-detail-page")) {
          return;
        }
        if (event.key === "ArrowLeft") {
          switchImage((currentIndex - 1 + galleryImages.length) % galleryImages.length);
        }
        if (event.key === "ArrowRight") {
          switchImage((currentIndex + 1) % galleryImages.length);
        }
      });
      setupZoom();
      initialized = true;
    }
  }

  document.addEventListener("DOMContentLoaded", initProductPage);
})();
