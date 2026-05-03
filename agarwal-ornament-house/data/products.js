(() => {
  const categoryMeta = {
    gold: { label: "Gold Jewellery", primary: "D4AF37", secondary: "F0EDE8", text: "1C1C1C" },
    silver: { label: "Silver Jewellery", primary: "C0C0C0", secondary: "EEF0F2", text: "1C1C1C" },
    diamond: { label: "Diamond Jewellery", primary: "B8D4E8", secondary: "E8F0F8", text: "1A5276" },
    pearl: { label: "Pearl Jewellery", primary: "F0E6D3", secondary: "FBF6EE", text: "1C1C1C" },
  };

  const productSeeds = [
    {
      id: "p001",
      name: "Kundan Bridal Ring",
      category: "gold",
      metal: "22K Gold",
      description: "Intricately crafted Kundan bridal ring with traditional motifs and a refined ceremonial finish.",
      badge: "New",
      occasion: "Bridal, Wedding",
      finish: "Polished",
      type: "Bridal Ring",
      hallmark: "BIS 916 Certified",
    },
    {
      id: "p002",
      name: "Diamond Solitaire Pendant",
      category: "diamond",
      metal: "18K Gold",
      description: "Elegant solitaire pendant with a clean diamond-forward silhouette for timeless gifting.",
      badge: "Featured",
      occasion: "Daily, Gifting",
      finish: "Polished",
      type: "Pendant",
      hallmark: "Certified Craftsmanship",
    },
    {
      id: "p003",
      name: "Pearl Choker Necklace",
      category: "pearl",
      metal: "Silver",
      description: "Freshwater pearl choker with graceful bridal styling and a softly lustrous finish.",
      badge: null,
      occasion: "Wedding, Festive",
      finish: "Lustrous",
      type: "Choker Necklace",
      hallmark: "Trusted Craftsmanship",
    },
    {
      id: "p004",
      name: "Silver Filigree Bangles",
      category: "silver",
      metal: "925 Silver",
      description: "Handcrafted silver bangles with intricate filigree work and heirloom-inspired detailing.",
      badge: null,
      occasion: "Daily, Festive",
      finish: "Oxidised",
      type: "Bangles",
      hallmark: "925 Silver Hallmarked",
    },
    {
      id: "p005",
      name: "Floral Gold Mangalsutra",
      category: "gold",
      metal: "22K Gold",
      description: "Traditional floral mangalsutra with balanced proportions and polished gold bead detailing.",
      badge: "Popular",
      occasion: "Bridal, Daily",
      finish: "Polished",
      type: "Mangalsutra",
      hallmark: "BIS 916 Certified",
    },
    {
      id: "p006",
      name: "Diamond Tennis Bracelet",
      category: "diamond",
      metal: "18K White Gold",
      description: "Classic tennis bracelet designed with elegant brilliance and polished evening refinement.",
      badge: "Luxury",
      occasion: "Wedding, Gifting",
      finish: "Polished",
      type: "Bracelet",
      hallmark: "Certified Craftsmanship",
    },
    {
      id: "p007",
      name: "Temple Payal Pair",
      category: "silver",
      metal: "925 Silver",
      description: "Temple-inspired payal pair with handcrafted movement and traditional silver artistry.",
      badge: null,
      occasion: "Festive, Bridal",
      finish: "Antique Polish",
      type: "Payal",
      hallmark: "925 Silver Hallmarked",
    },
    {
      id: "p008",
      name: "Pearl Drop Studs",
      category: "pearl",
      metal: "18K Gold",
      description: "Graceful pearl drop studs designed for understated luxury and elegant daily wear.",
      badge: "New",
      occasion: "Daily, Gifting",
      finish: "Lustrous",
      type: "Stud Earrings",
      hallmark: "Trusted Craftsmanship",
    },
    {
      id: "p009",
      name: "Lakshmi Bridal Haar",
      category: "gold",
      metal: "22K Gold",
      description: "Traditional bridal haar with heritage motifs, ceremonial weight, and rich gold presence.",
      badge: "Bridal",
      occasion: "Bridal, Wedding",
      finish: "Temple Finish",
      type: "Long Necklace",
      hallmark: "BIS 916 Certified",
    },
    {
      id: "p010",
      name: "Princess Cut Ring",
      category: "diamond",
      metal: "18K White Gold",
      description: "Princess cut ring with crisp geometry and a refined diamond-led profile.",
      badge: null,
      occasion: "Engagement, Gifting",
      finish: "Polished",
      type: "Ring",
      hallmark: "Certified Craftsmanship",
    },
    {
      id: "p011",
      name: "Antique Silver Anklet",
      category: "silver",
      metal: "925 Silver",
      description: "Antique-finish anklet with artisanal texture and a quietly luxurious festive character.",
      badge: null,
      occasion: "Festive, Daily",
      finish: "Antique",
      type: "Anklet",
      hallmark: "925 Silver Hallmarked",
    },
    {
      id: "p012",
      name: "Pearl Layered Mala",
      category: "pearl",
      metal: "Gold Clasp",
      description: "Layered pearl mala that brings ceremony-ready elegance to bridal and festive wardrobes.",
      badge: "Popular",
      occasion: "Wedding, Festive",
      finish: "Lustrous",
      type: "Layered Necklace",
      hallmark: "Trusted Craftsmanship",
    },
    {
      id: "p013",
      name: "Jhumka Heritage Earrings",
      category: "gold",
      metal: "22K Gold",
      description: "Heritage jhumka earrings with sculpted dome detailing and classic gold artistry.",
      badge: "Featured",
      occasion: "Festive, Bridal",
      finish: "Polished",
      type: "Jhumka",
      hallmark: "BIS 916 Certified",
    },
    {
      id: "p014",
      name: "Halo Nose Pin",
      category: "diamond",
      metal: "18K Gold",
      description: "Minimal halo nose pin with delicate sparkle and a refined everyday silhouette.",
      badge: "New",
      occasion: "Daily, Bridal",
      finish: "Polished",
      type: "Nose Pin",
      hallmark: "Certified Craftsmanship",
    },
    {
      id: "p015",
      name: "Silver Puja Ornament Set",
      category: "silver",
      metal: "925 Silver",
      description: "Decorative silver set curated for gifting, rituals, and treasured festive moments.",
      badge: null,
      occasion: "Festive, Gifting",
      finish: "Mirror Polish",
      type: "Silver Set",
      hallmark: "925 Silver Hallmarked",
    },
    {
      id: "p016",
      name: "Pearl Bridal Bracelet",
      category: "pearl",
      metal: "18K Gold",
      description: "Pearl bridal bracelet with clustered detailing and a graceful ceremony-ready finish.",
      badge: "Luxury",
      occasion: "Wedding, Gifting",
      finish: "Lustrous",
      type: "Bracelet",
      hallmark: "Trusted Craftsmanship",
    },
  ];

  const escapeHTML = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const buildPlaceholder = (size, bg, fg, label) =>
    `https://placehold.co/${size}/${bg}/${fg}?text=${encodeURIComponent(label)}`;

  const buildTinyPlaceholder = (bg) => `https://placehold.co/10x10/${bg}/${bg}`;

  const products = productSeeds.map((seed) => {
    const meta = categoryMeta[seed.category];
    const labelBase = seed.name.replace(/\s+/g, "+");

    return {
      ...seed,
      categoryLabel: meta.label,
      images: [
        buildPlaceholder("480x480", meta.secondary, meta.text, `${labelBase}+1`),
        buildPlaceholder("480x480", meta.primary, meta.text, `${labelBase}+2`),
      ],
      gallery: [
        buildPlaceholder("680x680", meta.secondary, meta.text, `${labelBase}+View+1`),
        buildPlaceholder("680x680", meta.primary, meta.text, `${labelBase}+View+2`),
        buildPlaceholder("680x680", meta.secondary, meta.text, `${labelBase}+Detail+3`),
        buildPlaceholder("680x680", meta.primary, meta.text, `${labelBase}+Detail+4`),
      ],
      placeholderBg: meta.secondary,
    };
  });

  function buildProductCardMarkup(product) {
    const badgeHTML = product.badge
      ? `<span class="badge badge-new">${escapeHTML(product.badge)}</span>`
      : "";

    return `
      <div class="product-card-img-wrap card-image">
        <img
          data-src="${product.images[0]}"
          src="${buildTinyPlaceholder(product.placeholderBg)}"
          alt="${escapeHTML(product.name)} by Agarwal Ornament House Kanpur - hallmarked jewellery enquiry on WhatsApp"
          class="product-card-img primary-img"
          loading="lazy"
        >
        <img
          data-src="${product.images[1] || product.images[0]}"
          src="${buildTinyPlaceholder(product.placeholderBg)}"
          alt="${escapeHTML(product.name)} alternate view from Agarwal Ornament House Kanpur"
          class="product-card-img secondary-img"
          loading="lazy"
          aria-hidden="true"
        >
        <div class="product-badges">${badgeHTML}</div>
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
      <div class="product-card-info card-body">
        <span class="product-card-category">${escapeHTML(product.metal)}</span>
        <h3 class="product-card-name">${escapeHTML(product.name)}</h3>
        <a href="/pages/product-detail.html?id=${escapeHTML(product.id)}" class="product-card-enquire">View Details -></a>
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

    if (typeof window.observeLazyImages === "function") {
      window.observeLazyImages(wrapper);
    }
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
      const fallbackProducts = relatedProducts.length < 4
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
