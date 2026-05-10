(() => {
  const categoryMeta = {
    gold: {
      label: "Gold Jewellery",
      badge: "22K GOLD",
      altLabel: "Gold",
      hallmark: "BIS Hallmarked",
      previewImage: "/assets/images/products/festive-gold-statement-necklace-display-mirror.jpeg",
    },
    silver: {
      label: "Silver Jewellery",
      badge: "925 SILVER",
      altLabel: "Silver",
      hallmark: "925 Silver Hallmarked",
      previewImage: "/assets/images/products/p007.jpg",
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
      hallmark: "Pearl Collection",
      previewImage: "/assets/images/products/p010.jpg",
    },
  };

  const productSeeds = [
    {
      id: "prod-001",
      sortOrder: 1,
      name: "Ethereal Dual-Tone Floral Ring",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A dual-tone floral ring with delicate petal detailing and a softly sculpted heritage finish.",
      occasion: "Festive, Gifting",
      finish: "Polished",
      type: "Ring",
      gallery: [
        "ethereal-dual-tone-flower-ring-closeup.jpeg",
        "ethereal-dual-tone-flower-ring-worn.jpeg",
      ],
    },
    {
      id: "prod-002",
      sortOrder: 2,
      name: "Heritage Filigree Floral Ring",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "An intricate floral filigree ring that balances traditional craftsmanship with graceful everyday elegance.",
      occasion: "Festive, Occasion",
      finish: "Filigree Polish",
      type: "Ring",
      gallery: [
        "heritage-filagree-floral-ring-closeup.jpeg",
        "heritage-filagree-floral-ring-worn.jpeg",
      ],
    },
    {
      id: "prod-003",
      sortOrder: 3,
      name: "Royal Ashoka Lion Statement Ring",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A bold Ashoka lion statement ring designed for collectors who love regal symbolism and commanding goldwork.",
      occasion: "Ceremonial, Occasion",
      finish: "Statement Polish",
      type: "Statement Ring",
      gallery: [
        "royal-ashoka-lion-statement-ring-floating.jpeg",
        "royal-ashoka-lion-statement-ring-dark-closeup.jpeg",
        "royal-ashoka-lion-statement-ring-worn.jpeg",
      ],
    },
    {
      id: "prod-004",
      sortOrder: 4,
      name: "Royal Signet Heritage Ring",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A heritage-inspired signet ring with strong sculptural lines and a richly royal presence.",
      occasion: "Occasion, Festive",
      finish: "High Polish",
      type: "Signet Ring",
      gallery: [
        "royal-signet-ring-floating-spotlight.jpeg",
        "royal-signet-ring-red-velvet.jpeg",
        "royal-signet-ring-nature-stone.jpeg",
        "royal-signet-ring-sunlight-water.jpeg",
      ],
    },
    {
      id: "prod-005",
      sortOrder: 5,
      name: "Classic Gold Bangles Duo",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A timeless pair of classic gold bangles finished for bridal styling and heirloom gifting.",
      occasion: "Bridal, Festive",
      finish: "Classic Polish",
      type: "Bangles",
      gallery: [
        "classic-gold-bangals-duo.jpeg",
        "classic-gold-bangles-duo-worn.jpeg",
      ],
    },
    {
      id: "prod-006",
      sortOrder: 6,
      name: "Heritage Gold Charm Bracelet",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A charm bracelet with heritage-inspired links and warm gold character for elevated gifting.",
      occasion: "Daily, Gifting",
      finish: "Polished",
      type: "Bracelet",
      gallery: [
        "heritage-gold-charm-bracelet.jpeg",
        "heritage-gold-charm-bracelet-closeup.jpeg",
      ],
    },
    {
      id: "prod-007",
      sortOrder: 7,
      name: "Minimal Gold Chain Bracelet",
      category: "gold",
      categoryBadge: "18K GOLD",
      metal: "18K Gold",
      description: "A minimal chain bracelet with a refined profile suited to layered daily styling.",
      occasion: "Daily, Gifting",
      finish: "Soft Polish",
      type: "Chain Bracelet",
      gallery: [
        "minimal-gold-bracelet-flatlay.jpeg",
        "minimal-gold-bracelet-flatlay-dark.jpeg",
        "minimal-gold-bracelet-hand-closeup.jpeg",
        "minimal-gold-bracelet-hand-softlight.jpeg",
        "minimal-gold-bracelet-wrist-detail.jpeg",
      ],
    },
    {
      id: "prod-008",
      sortOrder: 8,
      name: "Festive Gold Statement Necklace",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A festive statement necklace with dramatic scale and ceremonial richness for special occasions.",
      occasion: "Festive, Bridal",
      finish: "High Polish",
      type: "Necklace",
      gallery: [
        "festive-gold-statement-necklace-display-mirror.jpeg",
        "festive-gold-statement-necklace-closeup-dark.jpeg",
        "festive-gold-statement-necklace-model.jpeg",
        "festive-gold-statement-necklace-model-closeup.jpeg",
      ],
    },
    {
      id: "prod-009",
      sortOrder: 9,
      name: "Temple Gold Choker Necklace",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A temple-style choker necklace that brings devotional motifs and bridal grandeur together.",
      occasion: "Bridal, Temple Wear",
      finish: "Temple Finish",
      type: "Choker Necklace",
      gallery: [
        "temple-gold-choker-necklace-display.jpeg",
        "temple-gold-choker-necklace-display-light.jpeg",
        "temple-gold-choker-necklace-mirror-display.jpeg",
        "temple-gold-choker-necklace-model-portrait.jpeg",
      ],
    },
    {
      id: "p001",
      sortOrder: 10,
      name: "Gold Heritage Pendant",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A heritage pendant with traditional detailing and a graceful everyday gold silhouette.",
      occasion: "Daily, Gifting",
      finish: "Polished",
      type: "Pendant",
      gallery: ["p001.jpg"],
    },
    {
      id: "p002",
      sortOrder: 11,
      name: "Bridal Gold Earrings",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "Bridal gold earrings crafted to bring ceremonial glow and classic occasion styling.",
      occasion: "Bridal, Wedding",
      finish: "Polished",
      type: "Earrings",
      gallery: ["p002.jpg"],
    },
    {
      id: "p003",
      sortOrder: 12,
      name: "Kundan Gold Neckpiece",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A Kundan-inspired gold neckpiece with a rich festive mood and heirloom character.",
      occasion: "Festive, Bridal",
      finish: "Kundan Finish",
      type: "Neckpiece",
      gallery: ["p003.jpg"],
    },
    {
      id: "p004",
      sortOrder: 13,
      name: "Gold Temple Eardrops",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "Temple-style gold eardrops that bring ornate craftsmanship into a refined wearable scale.",
      occasion: "Temple Wear, Festive",
      finish: "Temple Finish",
      type: "Earrings",
      gallery: ["p004.jpg"],
    },
    {
      id: "p005",
      sortOrder: 14,
      name: "Antique Gold Bangle",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "An antique-finish gold bangle with a vintage profile and timeless ceremonial charm.",
      occasion: "Festive, Occasion",
      finish: "Antique Polish",
      type: "Bangle",
      gallery: ["p005.jpg"],
    },
    {
      id: "p006",
      sortOrder: 15,
      name: "Gold Filigree Choker",
      category: "gold",
      categoryBadge: "22K GOLD",
      metal: "22K Gold",
      description: "A filigree choker that layers intricate goldwork into a bold festive neckline.",
      occasion: "Festive, Bridal",
      finish: "Filigree Finish",
      type: "Choker",
      gallery: ["p006.jpg"],
    },
    {
      id: "p007",
      sortOrder: 16,
      name: "Silver Oxidised Necklace",
      category: "silver",
      categoryBadge: "925 SILVER",
      metal: "925 Silver",
      description: "An oxidised silver necklace with artisanal depth and a strong handcrafted personality.",
      occasion: "Festive, Daily",
      finish: "Oxidised",
      type: "Necklace",
      gallery: ["p007.jpg"],
    },
    {
      id: "p008",
      sortOrder: 17,
      name: "Pearl Drop Earrings",
      category: "pearl",
      categoryBadge: "PEARL",
      metal: "Pearl",
      description: "Elegant pearl drop earrings designed for light occasion wear and timeless gifting.",
      occasion: "Gifting, Occasion",
      finish: "Lustrous",
      type: "Earrings",
      gallery: ["p008.jpg"],
    },
    {
      id: "p009",
      sortOrder: 18,
      name: "Silver Filigree Bangles",
      category: "silver",
      categoryBadge: "925 SILVER",
      metal: "925 Silver",
      description: "Filigree silver bangles that bring intricate detailing to a classic wrist stack.",
      occasion: "Festive, Daily",
      finish: "Filigree Finish",
      type: "Bangles",
      gallery: ["p009.jpg"],
    },
    {
      id: "p010",
      sortOrder: 19,
      name: "Pearl Layered Mala",
      category: "pearl",
      categoryBadge: "PEARL",
      metal: "Pearl",
      description: "A layered pearl mala with graceful volume for wedding and festive wardrobes.",
      occasion: "Bridal, Festive",
      finish: "Lustrous",
      type: "Layered Necklace",
      gallery: ["p010.jpg"],
    },
    {
      id: "p011",
      sortOrder: 20,
      name: "Silver Anklet Pair",
      category: "silver",
      categoryBadge: "925 SILVER",
      metal: "925 Silver",
      description: "A traditional silver anklet pair with clean detailing and light ceremonial movement.",
      occasion: "Daily, Festive",
      finish: "Polished",
      type: "Anklet Pair",
      gallery: ["p011.jpg"],
    },
    {
      id: "p012",
      sortOrder: 21,
      name: "Pearl Choker Necklace",
      category: "pearl",
      categoryBadge: "PEARL",
      metal: "Pearl",
      description: "A pearl choker necklace that pairs a classic silhouette with soft bridal elegance.",
      occasion: "Bridal, Occasion",
      finish: "Lustrous",
      type: "Choker Necklace",
      gallery: ["p012.jpg"],
    },
  ];

  const escapeHTML = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const imagePath = (filename) => `/assets/images/products/${filename}`;
  const productAlt = (name) => `${name} — Hallmarked Gold Jewellery — Agarwal Ornament House Kanpur`;
  const thumbAlt = (name) => `${name} alternate view — Agarwal Ornament House`;

  const products = productSeeds.map((seed) => {
    const meta = categoryMeta[seed.category];
    const gallery = seed.gallery.map(imagePath);

    return {
      ...seed,
      categoryLabel: meta.label,
      altCategory: meta.altLabel,
      hallmark: seed.categoryBadge || meta.hallmark,
      image: gallery[0],
      images: gallery,
      gallery,
    };
  });

  function buildCardGalleryMarkup(product) {
    const slides = product.gallery
      .map(
        (src) => `
        <div class="gallery-slide">
          <img
            src="${src}"
            alt="${escapeHTML(productAlt(product.name))}"
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
        <button class="gallery-thumb${index === 0 ? " active" : ""}" type="button" aria-label="View ${escapeHTML(product.name)} image ${index + 1}">
          <img
            src="${src}"
            alt="${escapeHTML(thumbAlt(product.name))}"
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
          <button class="gallery-prev" type="button" aria-label="Previous">&#8592;</button>
          <button class="gallery-next" type="button" aria-label="Next">&#8594;</button>
        </div>
        <div class="gallery-thumbs">${thumbs}</div>
      </div>
    `;
  }

  function buildProductCardMarkup(product) {
    return `
      ${buildCardGalleryMarkup(product)}
      <div class="card-body product-card-info">
        <span class="card-badge">${escapeHTML(product.categoryBadge)}</span>
        <h3 class="card-name product-card-name">${escapeHTML(product.name)}</h3>
        <a href="/pages/product-detail.html?id=${escapeHTML(product.id)}" class="card-link product-card-enquire">VIEW DETAILS &#8594;</a>
      </div>
    `;
  }

  function renderProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("role", "listitem");
    card.dataset.category = product.category;
    card.dataset.productId = product.id;
    card.dataset.name = product.name;
    card.dataset.sortOrder = String(product.sortOrder);
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
