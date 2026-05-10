(() => {
  const categoryMeta = {
    gold: {
      label: "Gold Jewellery",
      badge: "22K GOLD",
      altLabel: "Gold",
      hallmark: "BIS 916 Certified",
      previewImage: "/assets/images/products/p001.jpg",
    },
    silver: {
      label: "Silver Jewellery",
      badge: "925 SILVER",
      altLabel: "Silver",
      hallmark: "925 Silver Hallmarked",
      previewImage: "/assets/images/products/p004.jpg",
    },
    diamond: {
      label: "Diamond Jewellery",
      badge: "DIAMOND",
      altLabel: "Diamond",
      hallmark: "Certified Craftsmanship",
      previewImage: "/assets/images/products/p002.jpg",
    },
    pearl: {
      label: "Pearl Jewellery",
      badge: "PEARL",
      altLabel: "Pearl",
      hallmark: "Trusted Craftsmanship",
      previewImage: "/assets/images/products/p003.jpg",
    },
  };

  const productSeeds = [
    {
      id: "p001",
      name: "Kundan Bridal Ring",
      category: "gold",
      metal: "22K Gold",
      description: "Intricately crafted Kundan bridal ring with traditional motifs and a refined ceremonial finish.",
      occasion: "Bridal, Wedding",
      finish: "Polished",
      type: "Bridal Ring",
    },
    {
      id: "p002",
      name: "Diamond Solitaire Pendant",
      category: "diamond",
      metal: "18K Gold",
      description: "Elegant solitaire pendant with a clean diamond-forward silhouette for timeless gifting.",
      occasion: "Daily, Gifting",
      finish: "Polished",
      type: "Pendant",
    },
    {
      id: "p003",
      name: "Pearl Choker Necklace",
      category: "pearl",
      metal: "Silver",
      description: "Freshwater pearl choker with graceful bridal styling and a softly lustrous finish.",
      occasion: "Wedding, Festive",
      finish: "Lustrous",
      type: "Choker Necklace",
    },
    {
      id: "p004",
      name: "Silver Filigree Bangles",
      category: "silver",
      metal: "925 Silver",
      description: "Handcrafted silver bangles with intricate filigree work and heirloom-inspired detailing.",
      occasion: "Daily, Festive",
      finish: "Oxidised",
      type: "Bangles",
    },
    {
      id: "p005",
      name: "Floral Gold Mangalsutra",
      category: "gold",
      metal: "22K Gold",
      description: "Traditional floral mangalsutra with balanced proportions and polished gold bead detailing.",
      occasion: "Bridal, Daily",
      finish: "Polished",
      type: "Mangalsutra",
    },
    {
      id: "p006",
      name: "Diamond Tennis Bracelet",
      category: "diamond",
      metal: "18K White Gold",
      description: "Classic tennis bracelet designed with elegant brilliance and polished evening refinement.",
      occasion: "Wedding, Gifting",
      finish: "Polished",
      type: "Bracelet",
    },
    {
      id: "p007",
      name: "Temple Payal Pair",
      category: "silver",
      metal: "925 Silver",
      description: "Temple-inspired payal pair with handcrafted movement and traditional silver artistry.",
      occasion: "Festive, Bridal",
      finish: "Antique Polish",
      type: "Payal",
    },
    {
      id: "p008",
      name: "Pearl Drop Studs",
      category: "pearl",
      metal: "18K Gold",
      description: "Graceful pearl drop studs designed for understated luxury and elegant daily wear.",
      occasion: "Daily, Gifting",
      finish: "Lustrous",
      type: "Stud Earrings",
    },
    {
      id: "p009",
      name: "Lakshmi Bridal Haar",
      category: "gold",
      metal: "22K Gold",
      description: "Traditional bridal haar with heritage motifs, ceremonial weight, and rich gold presence.",
      occasion: "Bridal, Wedding",
      finish: "Temple Finish",
      type: "Long Necklace",
    },
    {
      id: "p010",
      name: "Princess Cut Ring",
      category: "diamond",
      metal: "18K White Gold",
      description: "Princess cut ring with crisp geometry and a refined diamond-led profile.",
      occasion: "Engagement, Gifting",
      finish: "Polished",
      type: "Ring",
    },
    {
      id: "p011",
      name: "Antique Silver Anklet",
      category: "silver",
      metal: "925 Silver",
      description: "Antique-finish anklet with artisanal texture and a quietly luxurious festive character.",
      occasion: "Festive, Daily",
      finish: "Antique",
      type: "Anklet",
    },
    {
      id: "p012",
      name: "Pearl Layered Mala",
      category: "pearl",
      metal: "Gold Clasp",
      description: "Layered pearl mala that brings ceremony-ready elegance to bridal and festive wardrobes.",
      occasion: "Wedding, Festive",
      finish: "Lustrous",
      type: "Layered Necklace",
    },
  ];

  const escapeHTML = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const imagePath = (id) => `/assets/images/products/${id}.jpg`;

  const productsByCategory = productSeeds.reduce((accumulator, seed) => {
    accumulator[seed.category] ||= [];
    accumulator[seed.category].push(seed.id);
    return accumulator;
  }, {});

  const products = productSeeds.map((seed) => {
    const meta = categoryMeta[seed.category];
    const galleryIds = [seed.id, ...productsByCategory[seed.category].filter((id) => id !== seed.id)].slice(0, 3);

    return {
      ...seed,
      categoryLabel: meta.label,
      categoryBadge: meta.badge,
      altCategory: meta.altLabel,
      hallmark: meta.hallmark,
      image: imagePath(seed.id),
      images: galleryIds.map(imagePath),
      gallery: galleryIds.map(imagePath),
    };
  });

  function buildCardGalleryMarkup(product) {
    const slides = product.gallery
      .map(
        (src, index) => `
        <div class="gallery-slide">
          <img
            src="${src}"
            alt="${escapeHTML(product.name)} detail view - Agarwal Ornament House"
            loading="lazy"
            decoding="async"
            ${index > 0 ? 'aria-hidden="true"' : ""}
          />
        </div>
      `,
      )
      .join("");

    const thumbs = product.gallery
      .map(
        (src, index) => `
        <button class="gallery-thumb${index === 0 ? " active" : ""}" type="button" aria-label="View ${escapeHTML(product.name)} image ${index + 1}">
          <img
            src="${src}"
            alt="${escapeHTML(product.name)} detail view - Agarwal Ornament House"
            loading="lazy"
            decoding="async"
          />
        </button>
      `,
      )
      .join("");

    return `
      <div class="product-gallery" data-product-gallery="${escapeHTML(product.id)}">
        <div class="gallery-main">
          <div class="gallery-track" id="gallery-${escapeHTML(product.id)}">
            ${slides}
          </div>
          <button class="gallery-prev" type="button" aria-label="Previous image">&#8592;</button>
          <button class="gallery-next" type="button" aria-label="Next image">&#8594;</button>
          <div class="product-badges">
            <span class="badge badge-new card-badge">${escapeHTML(product.categoryBadge)}</span>
          </div>
          <div class="product-card-actions">
            <a
              href="https://wa.me/919889899999?text=${encodeURIComponent(`Hello, I want to enquire about ${product.name} (${product.id}).`)}"
              class="btn btn-whatsapp btn-sm product-wa-btn"
              data-wa-product="${escapeHTML(product.name)}"
              target="_blank"
              rel="noopener"
              aria-label="Enquire about ${escapeHTML(product.name)} on WhatsApp"
            >WhatsApp</a>
            <a href="/pages/product-detail.html?id=${escapeHTML(product.id)}" class="btn btn-ghost btn-sm product-view-btn">View</a>
          </div>
        </div>
        <div class="gallery-thumbs">${thumbs}</div>
      </div>
    `;
  }

  function buildProductCardMarkup(product) {
    return `
      <div class="card-image">
        ${buildCardGalleryMarkup(product)}
      </div>
      <div class="product-card-info card-body">
        <span class="product-card-category">${escapeHTML(product.metal)}</span>
        <h3 class="product-card-name">${escapeHTML(product.name)}</h3>
        <a href="/pages/product-detail.html?id=${escapeHTML(product.id)}" class="product-card-enquire">View Details</a>
      </div>
    `;
  }

  function renderProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("role", "listitem");
    card.dataset.category = product.category;
    card.dataset.productId = product.id;
    card.dataset.name = product.name;
    card.innerHTML = buildProductCardMarkup(product);
    return card;
  }

  function mountProducts(wrapper, items, useSlides) {
    if (!wrapper) {
      return;
    }

    wrapper.innerHTML = "";
    items.forEach((product) => {
      const card = renderProductCard(product);
      if (useSlides) {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.appendChild(card);
        wrapper.appendChild(slide);
      } else {
        wrapper.appendChild(card);
      }
    });
  }

  function getProductById(id) {
    return products.find((product) => product.id === id) || products[0];
  }

  document.addEventListener("DOMContentLoaded", () => {
    const featuredWrapper = document.querySelector(".products-swiper .swiper-wrapper");
    const collectionsGrid = document.getElementById("products-grid");
    const relatedWrapper = document.querySelector(".related-swiper .swiper-wrapper");

    if (featuredWrapper) {
      mountProducts(featuredWrapper, products.slice(0, 8), true);
    }

    if (collectionsGrid) {
      mountProducts(collectionsGrid, products, false);
    }

    if (relatedWrapper) {
      const currentId = new URLSearchParams(window.location.search).get("id");
      const currentProduct = getProductById(currentId);
      const relatedProducts = products
        .filter((product) => product.id !== currentProduct.id && product.category === currentProduct.category)
        .slice(0, 4);
      const fallbackProducts =
        relatedProducts.length < 4
          ? products.filter((product) => product.id !== currentProduct.id && !relatedProducts.includes(product)).slice(0, 4 - relatedProducts.length)
          : [];

      mountProducts(relatedWrapper, [...relatedProducts, ...fallbackProducts], true);
    }

    document.dispatchEvent(new CustomEvent("products:rendered"));
  });

  window.products = products;
  window.categoryMeta = categoryMeta;
  window.getProductById = getProductById;
  window.renderProductCard = renderProductCard;
})();
