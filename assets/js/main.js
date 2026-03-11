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

const init = () => {
  highlightNavigation();
  bindMenuToggle();
  bindStaticForms();
  bindCarousel();
};

window.addEventListener("DOMContentLoaded", () => {
  void init();
});
