(() => {
  let initialized = false;

  function initCollectionsFilter() {
    if (initialized) {
      return;
    }

    const grid = document.getElementById("products-grid");
    const countEl = document.getElementById("count-number");
    const pills = document.querySelectorAll(".filter-pill");
    const sortSelect = document.getElementById("sort-select");
    const loadMoreBtn = document.getElementById("load-more-btn");

    if (!grid || !countEl || !pills.length || !sortSelect || !loadMoreBtn || !grid.querySelector(".product-card")) {
      return;
    }

    initialized = true;

    const urlParams = new URLSearchParams(window.location.search);
    const validFilters = new Set(["all", "gold", "silver", "diamond", "pearl"]);
    const initialFilter = validFilters.has(urlParams.get("filter")) ? urlParams.get("filter") : "all";
    const state = {
      filter: initialFilter,
      sort: "default",
      visibleLimit: 12,
    };

    function sortCards(cards) {
      if (state.sort === "name-asc") {
        return cards.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
      }
      if (state.sort === "name-desc") {
        return cards.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
      }
      return cards.sort((a, b) => a.dataset.productId.localeCompare(b.dataset.productId));
    }

    function updateFilterUI() {
      pills.forEach((pill) => {
        const isActive = pill.dataset.filter === state.filter;
        pill.classList.toggle("active", isActive);
        pill.setAttribute("aria-pressed", String(isActive));
      });
    }

    function applyCollectionsState() {
      const cards = Array.from(grid.querySelectorAll(".product-card"));
      const sortedCards = sortCards(cards);
      sortedCards.forEach((card) => grid.appendChild(card));

      const filteredCards = sortedCards.filter((card) => state.filter === "all" || card.dataset.category === state.filter);
      countEl.textContent = String(filteredCards.length);

      let visibleIndex = 0;
      sortedCards.forEach((card) => {
        const shouldMatch = filteredCards.includes(card);
        const shouldShow = shouldMatch && visibleIndex < state.visibleLimit;
        card.classList.toggle("is-hidden", !shouldShow);
        card.style.opacity = shouldShow ? "1" : "0";
        card.style.transform = shouldShow ? "scale(1)" : "scale(0.96)";
        if (shouldMatch) {
          visibleIndex += 1;
        }
      });

      loadMoreBtn.hidden = filteredCards.length <= state.visibleLimit;
    }

    function syncFilterToURL() {
      const url = new URL(window.location.href);
      if (state.filter === "all") {
        url.searchParams.delete("filter");
      } else {
        url.searchParams.set("filter", state.filter);
      }
      window.history.replaceState({}, "", url);
    }

    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        state.filter = pill.dataset.filter || "all";
        state.visibleLimit = 12;
        updateFilterUI();
        syncFilterToURL();
        applyCollectionsState();
      });
    });

    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      applyCollectionsState();
    });

    loadMoreBtn.addEventListener("click", () => {
      state.visibleLimit += 12;
      applyCollectionsState();
    });

    updateFilterUI();
    applyCollectionsState();
  }

  document.addEventListener("products:rendered", initCollectionsFilter);
  document.addEventListener("DOMContentLoaded", initCollectionsFilter);
})();
