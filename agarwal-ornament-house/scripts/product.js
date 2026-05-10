(() => {
  function updateMeta(product) {
    document.title = `${product.name} | ${product.categoryLabel} - Agarwal Ornament House Kanpur`;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        `Enquire about ${product.name} from Agarwal Ornament House. ${product.categoryLabel} in Kanpur with trusted craftsmanship since 1947. WhatsApp: ${window.BRAND?.phone || "9889899999"}.`,
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = "https://yourdomain.com";
    }
  }

  function buildDetailGalleryMarkup(product) {
    const slides = product.gallery
      .map(
        (src) => `
        <div class="gallery-slide">
          <img
            src="${src}"
            alt="${product.name} detail view - Agarwal Ornament House"
            loading="lazy"
            decoding="async"
          />
        </div>
      `,
      )
      .join("");

    const thumbs = product.gallery
      .map(
        (src, index) => `
        <button class="gallery-thumb${index === 0 ? " active" : ""}" type="button" aria-label="View ${product.name} image ${index + 1}">
          <img
            src="${src}"
            alt="${product.name} detail view - Agarwal Ornament House"
            loading="lazy"
            decoding="async"
          />
        </button>
      `,
      )
      .join("");

    return `
      <div class="product-gallery pdp-product-gallery" data-product-gallery="${product.id}">
        <div class="gallery-main">
          <div class="gallery-track" id="gallery-${product.id}">
            ${slides}
          </div>
          <button class="gallery-prev" type="button" aria-label="Previous image">&#8592;</button>
          <button class="gallery-next" type="button" aria-label="Next image">&#8594;</button>
        </div>
        <div class="gallery-thumbs">${thumbs}</div>
      </div>
    `;
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
    const galleryMount = document.getElementById("pdp-gallery-mount");
    const stickyBar = document.getElementById("pdp-sticky-bar");

    if (title) {
      title.textContent = product.name;
    }
    if (meta) {
      meta.textContent = `${product.categoryLabel.replace(" Jewellery", "")} | ${product.metal} | ${product.finish}`;
    }
    if (description) {
      description.textContent = `${product.description} This piece reflects the legacy of Agarwal Ornament House and is ideal for ${product.occasion.toLowerCase()}.`;
    }
    if (breadcrumb) {
      breadcrumb.textContent = product.name;
    }
    if (badges) {
      badges.innerHTML = `
        <span class="badge badge-new card-badge">${product.categoryBadge}</span>
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
    if (galleryMount) {
      galleryMount.innerHTML = buildDetailGalleryMarkup(product);
      window.initProductGalleries?.(galleryMount);
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
      shareLink.href = `https://wa.me/?text=${encodeURIComponent(`Check this out from Agarwal Ornament House: https://yourdomain.com/pages/product-detail.html?id=${product.id}`)}`;
    }
  }

  document.addEventListener("DOMContentLoaded", initProductPage);
})();
