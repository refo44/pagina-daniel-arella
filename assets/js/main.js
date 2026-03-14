const highlightNavigation = () => {
  const currentNav = document.body.dataset.nav;

  if (!currentNav) {
    return;
  }

  document.querySelectorAll("[data-nav-item]").forEach((link) => {
    if (link.getAttribute("data-nav-item") === currentNav) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const bindMenuToggle = () => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-menu-panel]");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    const nextState = `${!isExpanded}`;

    toggle.setAttribute("aria-expanded", nextState);
    toggle.setAttribute("aria-label", nextState === "true" ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    nav.classList.toggle("is-open", !isExpanded);
  });
};

const bindStaticForms = () => {
  document.querySelectorAll("[data-static-form]").forEach((form) => {
    const status = form.parentElement?.querySelector("[data-form-status]");

    if (!(status instanceof HTMLElement)) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const successMessage =
        form.getAttribute("data-success-message") ?? "Listo. Tu mensaje ya fue recibido.";

      status.textContent = successMessage;
      status.classList.add("is-visible");
      form.reset();
    });
  });
};

const bindCarousel = () => {
  const carousel = document.querySelector("[data-carousel]");

  if (!(carousel instanceof HTMLElement)) {
    return;
  }

  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const AUTOPLAY_MS = 5000;

  if (
    slides.length === 0 ||
    !(prevButton instanceof HTMLButtonElement) ||
    !(nextButton instanceof HTMLButtonElement)
  ) {
    return;
  }

  let currentIndex = 0;
  let autoplayId = null;

  const setActiveSlide = (nextIndex) => {
    currentIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const isActive = index === currentIndex;
      slide.hidden = !isActive;
      slide.classList.toggle("is-active", isActive);
    });
  };

  const stopAutoplay = () => {
    if (autoplayId !== null) {
      window.clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();

    if (reducedMotion.matches) {
      return;
    }

    autoplayId = window.setInterval(() => {
      setActiveSlide(currentIndex + 1);
    }, AUTOPLAY_MS);
  };

  const stepTo = (nextIndex) => {
    setActiveSlide(nextIndex);
    startAutoplay();
  };

  prevButton.addEventListener("click", () => {
    stepTo(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    stepTo(currentIndex + 1);
  });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  carousel.addEventListener("focusin", stopAutoplay);
  carousel.addEventListener("focusout", (event) => {
    const nextFocusedElement = event.relatedTarget;

    if (nextFocusedElement instanceof Node && carousel.contains(nextFocusedElement)) {
      return;
    }

    startAutoplay();
  });

  reducedMotion.addEventListener("change", () => {
    startAutoplay();
  });

  setActiveSlide(0);
  startAutoplay();
};

const bindMediaPagination = () => {
  const PER_PAGE = 4;

  document.querySelectorAll("[data-media-pagination]").forEach((nav) => {
    const section = nav.closest("section");
    const grid = section?.querySelector("[data-media-grid]");

    if (!grid) {
      return;
    }

    const cards = Array.from(grid.querySelectorAll(".media-card"));
    const perPage = parseInt(nav.getAttribute("data-per-page"), 10) || PER_PAGE;
    const totalPages = Math.ceil(cards.length / perPage);

    if (totalPages <= 1) {
      nav.hidden = true;
      return;
    }

    let currentPage = 0;

    const setPage = (pageIndex) => {
      currentPage = Math.max(0, Math.min(pageIndex, totalPages - 1));

      cards.forEach((card, index) => {
        const pageForIndex = Math.floor(index / perPage);
        const isVisible = pageForIndex === currentPage;
        card.hidden = !isVisible;
      });

      const prevBtn = nav.querySelector("[data-media-pagination-prev]");
      const nextBtn = nav.querySelector("[data-media-pagination-next]");

      if (prevBtn) {
        const disabled = currentPage === 0;
        prevBtn.setAttribute("aria-disabled", disabled ? "true" : "false");
        prevBtn.setAttribute("tabindex", disabled ? "-1" : "0");
      }
      if (nextBtn) {
        const disabled = currentPage === totalPages - 1;
        nextBtn.setAttribute("aria-disabled", disabled ? "true" : "false");
        nextBtn.setAttribute("tabindex", disabled ? "-1" : "0");
      }

      nav.querySelectorAll("[data-media-pagination-page]").forEach((el, i) => {
        el.setAttribute("aria-current", i === currentPage ? "page" : null);
        el.classList.toggle("media-pagination__current", i === currentPage);
      });
    };

    const list = document.createElement("ul");
    list.className = "media-pagination__list";

    const prevItem = document.createElement("li");
    prevItem.className = "media-pagination__item";
    const prevLink = document.createElement("a");
    prevLink.className = "media-pagination__link";
    prevLink.setAttribute("data-media-pagination-prev", "");
    prevLink.setAttribute("aria-label", "Página anterior");
    prevLink.setAttribute("aria-disabled", "false");
    prevLink.href = "#";
    prevLink.textContent = "Anterior";
    prevLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 0) {
        setPage(currentPage - 1);
      }
    });
    prevItem.appendChild(prevLink);
    list.appendChild(prevItem);

    for (let i = 0; i < totalPages; i++) {
      const li = document.createElement("li");
      li.className = "media-pagination__item";
      const a = document.createElement("a");
      a.className = i === 0 ? "media-pagination__link media-pagination__current" : "media-pagination__link";
      a.setAttribute("data-media-pagination-page", "");
      a.setAttribute("aria-current", i === 0 ? "page" : null);
      a.href = "#";
      a.textContent = String(i + 1);
      a.addEventListener("click", (e) => {
        e.preventDefault();
        setPage(i);
      });
      li.appendChild(a);
      list.appendChild(li);
    }

    const nextItem = document.createElement("li");
    nextItem.className = "media-pagination__item";
    const nextLink = document.createElement("a");
    nextLink.className = "media-pagination__link";
    nextLink.setAttribute("data-media-pagination-next", "");
    nextLink.setAttribute("aria-label", "Página siguiente");
    nextLink.setAttribute("aria-disabled", totalPages === 1 ? "true" : "false");
    nextLink.href = "#";
    nextLink.textContent = "Siguiente";
    nextLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages - 1) {
        setPage(currentPage + 1);
      }
    });
    nextItem.appendChild(nextLink);
    list.appendChild(nextItem);

    nav.appendChild(list);
    setPage(0);
  });
};

const BRAND_KEYS = ["brand1", "brand2", "brand3", "brand4", "brand5"];
const BRAND_IDS = ["theme-brand1", "theme-brand2", "theme-brand3", "theme-brand4", "theme-brand5"];

const bindThemeForm = () => {
  const form = document.querySelector("[data-theme-form]");
  if (!form) return;

  const status = form.querySelector("[data-theme-status]");
  const inputs = BRAND_IDS.map((id) => form.querySelector(`#${id}`)).filter(Boolean);

  function setInputsFromTheme(theme) {
    inputs.forEach((input, i) => {
      if (input && theme[BRAND_KEYS[i]]) {
        const hex = normalizeHex(theme[BRAND_KEYS[i]]);
        input.value = hex;
        const hexInput = form.querySelector("#" + input.id + "-hex");
        if (hexInput && hexInput instanceof HTMLInputElement) hexInput.value = hex;
      }
    });
    updateColorNames();
  }

  function updateColorNames() {
    BRAND_IDS.forEach((id) => {
      const colorInput = form.querySelector("#" + id);
      const nameEl = form.querySelector("[data-theme-name-for=\"" + id + "\"]");
      if (!colorInput || !nameEl) return;
      const hex = colorInput.value;
      const name = typeof window.getNameForHex === "function" ? window.getNameForHex(hex) : null;
      nameEl.textContent = name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
    });
  }

  function normalizeHex(value) {
    const v = String(value).trim();
    if (/^#[0-9A-Fa-f]{6}$/.test(v)) return v.toLowerCase();
    if (/^[0-9A-Fa-f]{6}$/.test(v)) return "#" + v.toLowerCase();
    return v;
  }

  function isValidHex(value) {
    return /^#[0-9A-Fa-f]{6}$/.test(String(value).trim()) || /^[0-9A-Fa-f]{6}$/.test(String(value).trim());
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const hexInput = form.querySelector("#" + input.id + "-hex");
      if (hexInput && hexInput instanceof HTMLInputElement) hexInput.value = input.value.toLowerCase();
      updateColorNames();
    });
  });

  BRAND_IDS.forEach((id) => {
    const hexInput = form.querySelector("#" + id + "-hex");
    if (!hexInput || !(hexInput instanceof HTMLInputElement)) return;
    const colorInput = form.querySelector("#" + id);
    if (!colorInput) return;
    hexInput.addEventListener("input", () => {
      const hex = normalizeHex(hexInput.value);
      if (isValidHex(hexInput.value)) colorInput.value = hex;
      updateColorNames();
    });
    hexInput.addEventListener("blur", () => {
      const hex = normalizeHex(hexInput.value);
      if (isValidHex(hexInput.value)) {
        colorInput.value = hex;
        hexInput.value = hex;
      } else if (colorInput.value) {
        hexInput.value = colorInput.value.toLowerCase();
      }
      updateColorNames();
    });
  });

  const stored = typeof window.getStoredTheme === "function" ? window.getStoredTheme() : null;
  const defaultTheme = typeof window.getDefaultTheme === "function" ? window.getDefaultTheme() : null;
  setInputsFromTheme(stored || defaultTheme);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const theme = {};
    BRAND_IDS.forEach((id, i) => {
      const colorInput = form.querySelector(`#${id}`);
      const hexInput = form.querySelector(`#${id}-hex`);
      const value = (hexInput && hexInput instanceof HTMLInputElement && isValidHex(hexInput.value))
        ? normalizeHex(hexInput.value)
        : colorInput?.value?.trim();
      if (value) theme[BRAND_KEYS[i]] = value;
    });
    if (typeof window.saveTheme === "function") {
      window.saveTheme(theme);
    }
    if (status) {
      status.textContent = "Guardado. Los colores se aplican en todo el sitio.";
      status.classList.add("is-visible");
    }
  });

  const resetBtn = form.querySelector("[data-theme-reset]");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (typeof window.clearTheme === "function") {
        window.clearTheme();
      }
      window.location.reload();
    });
  }

  const randomBtn = form.querySelector("[data-theme-random]");
  if (randomBtn) {
    randomBtn.addEventListener("click", () => {
      const theme = generateRandomPalette();
      setInputsFromTheme(theme);
      if (typeof window.saveTheme === "function") {
        window.saveTheme(theme);
      }
      if (status) {
        status.textContent = "Paleta aleatoria aplicada y guardada. Navega por el sitio para verla.";
        status.classList.add("is-visible");
      }
    });
  }
};

function generateRandomPalette() {
  function randomHex() {
    return "#" + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, "0").toLowerCase();
  }
  function randomDarkHex() {
    const r = Math.floor(Math.random() * 90);
    const g = Math.floor(Math.random() * 90);
    const b = Math.floor(Math.random() * 90);
    return "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("").toLowerCase();
  }
  function randomLightHex() {
    const r = 200 + Math.floor(Math.random() * 56);
    const g = 200 + Math.floor(Math.random() * 56);
    const b = 200 + Math.floor(Math.random() * 56);
    return "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("").toLowerCase();
  }
  return {
    brand1: randomDarkHex(),
    brand2: randomLightHex(),
    brand3: randomHex(),
    brand4: randomHex(),
    brand5: randomHex(),
  };
}

const bindBackToTop = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const SCROLL_THRESHOLD = 400;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "back-to-top";
  button.setAttribute("aria-label", "Volver arriba");
  button.innerHTML =
    '<svg class="back-to-top__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 15 6-6 6 6"/><path d="M12 21V9"/></svg>';

  const updateVisibility = () => {
    const show = window.scrollY > SCROLL_THRESHOLD;
    button.classList.toggle("is-visible", show);
  };

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
    button.blur();
  });

  window.addEventListener("scroll", () => {
    requestAnimationFrame(updateVisibility);
  }, { passive: true });

  document.body.appendChild(button);
  updateVisibility();
};

const init = () => {
  highlightNavigation();
  bindMenuToggle();
  bindStaticForms();
  bindThemeForm();
  bindCarousel();
  bindMediaPagination();
  bindBackToTop();
};

window.addEventListener("DOMContentLoaded", () => {
  void init();
});
