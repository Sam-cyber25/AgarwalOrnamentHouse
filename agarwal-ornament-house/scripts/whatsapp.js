(() => {
  function buildWALink(productName = "", context = "general") {
    const number = window.BRAND?.whatsapp || "919889899999";
    const base = `https://wa.me/${number}?text=`;
    const messages = {
      general: "Hello, I would like to know more about your jewellery collection.",
      product: `Hello, I want to enquire about ${productName}.`,
      wholesale: "Hello, I am interested in wholesale jewellery enquiry.",
      visit: "Hello, I would like to visit your showroom. Please share directions.",
    };

    return `${base}${encodeURIComponent(messages[context] || messages.general)}`;
  }

  window.buildWALink = buildWALink;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-wa-product]").forEach((link) => {
      const productName = link.dataset.waProduct || "";
      link.href = buildWALink(productName, "product");
    });

    document.querySelectorAll("[data-wa-context]").forEach((link) => {
      const context = link.dataset.waContext || "general";
      link.href = buildWALink("", context);
    });

    const floatingButton = document.getElementById("floating-wa-btn");
    if (floatingButton && !floatingButton.dataset.waProduct && !floatingButton.dataset.waContext) {
      floatingButton.href = buildWALink("", "general");
    }
  });
})();
