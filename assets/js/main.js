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

const bindArchiveSearch = () => {
  document.querySelectorAll("[data-archive-search]").forEach((form) => {
    const targetId = form.getAttribute("data-search-target");
    const target = targetId ? document.getElementById(targetId) : null;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!(target instanceof HTMLElement)) {
        return;
      }

      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.add("is-highlighted");
      window.setTimeout(() => {
        target.classList.remove("is-highlighted");
      }, 2000);
    });
  });
};

const prefillContactSubject = () => {
  const subjectInput = document.querySelector("#contact-subject");

  if (!(subjectInput instanceof HTMLInputElement) || subjectInput.value) {
    return;
  }

  const subject = new URLSearchParams(window.location.search).get("subject");

  if (subject) {
    subjectInput.value = subject;
  }
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

const bindHeaderShrink = () => {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const nav = header.querySelector("[data-menu-panel]");
  const toggle = header.querySelector("[data-menu-toggle]");
  const SCROLL_THRESHOLD = 64;

  const updateHeader = () => {
    const isCompact = window.scrollY > SCROLL_THRESHOLD;
    header.classList.toggle("is-compact", isCompact);

    if (isCompact && nav && toggle) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú de navegación");
    }
  };

  window.addEventListener("scroll", () => {
    requestAnimationFrame(updateHeader);
  }, { passive: true });

  updateHeader();
};

const createShareDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.className = "share-dialog";
  dialog.setAttribute("aria-labelledby", "share-dialog-title");
  dialog.setAttribute("aria-hidden", "true");
  dialog.innerHTML = `
    <div class="share-dialog__panel">
      <div class="share-dialog__header">
        <h2 class="share-dialog__title" id="share-dialog-title">Compartir</h2>
        <button class="share-dialog__close" type="button" data-share-close aria-label="Cerrar">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <ul class="share-dialog__options" role="list">
        <li><a class="button-link share-dialog__option" data-share-facebook target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a class="button-link share-dialog__option" data-share-x target="_blank" rel="noopener noreferrer">X</a></li>
        <li><a class="button-link share-dialog__option" data-share-whatsapp target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        <li><a class="button-link share-dialog__option" data-share-threads target="_blank" rel="noopener noreferrer">Threads</a></li>
        <li><button class="button-link share-dialog__option" type="button" data-share-instagram-post>Instagram · publicación</button></li>
        <li><button class="button-link share-dialog__option" type="button" data-share-instagram-story>Instagram · historia</button></li>
        <li class="share-dialog__item--wide"><button class="button-link share-dialog__option" type="button" data-share-copy>Copiar enlace</button></li>
      </ul>
      <p class="share-dialog__status" data-share-status aria-live="polite"></p>
    </div>
  `;

  const closeButton = dialog.querySelector("[data-share-close]");
  closeButton?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => dialog.setAttribute("aria-hidden", "true"));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  document.body.appendChild(dialog);
  return dialog;
};

const copyText = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Continue with the selection fallback when clipboard permission is unavailable.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const isCopied = document.execCommand("copy");
  textarea.remove();

  if (!isCopied) {
    throw new Error("Copy command failed");
  }
};

const SOCIAL_IMAGE_FORMATS = {
  post: { width: 1080, height: 1080, label: "publicación" },
  story: { width: 1080, height: 1920, label: "historia" },
};

const getShareImageUrl = () => {
  const configuredUrl = document.querySelector('meta[property="og:image"]')?.getAttribute("content");

  if (!configuredUrl) {
    return null;
  }

  const publicImageUrl = new URL(configuredUrl, window.location.href);
  const assetsPathStart = publicImageUrl.pathname.indexOf("/assets/");

  if (assetsPathStart === -1) {
    return publicImageUrl.href;
  }

  const sitePrefix = document.body.dataset.sitePrefix;
  const hasSitePrefix = sitePrefix && window.location.pathname.startsWith(`/${sitePrefix}/`);
  const localPrefix = hasSitePrefix ? `/${sitePrefix}` : "";

  return `${window.location.origin}${localPrefix}${publicImageUrl.pathname.slice(assetsPathStart)}`;
};

const loadShareImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Share image could not be loaded"));
    image.src = url;
  });

const drawContainedImage = ({ context, image, x, y, width, height }) => {
  const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
  const renderedWidth = image.naturalWidth * scale;
  const renderedHeight = image.naturalHeight * scale;

  context.drawImage(
    image,
    x + ((width - renderedWidth) / 2),
    y + ((height - renderedHeight) / 2),
    renderedWidth,
    renderedHeight,
  );
};

const drawWrappedTitle = ({ context, title, x, y, maxWidth, lineHeight, maxLines }) => {
  const words = title.split(/\s+/);
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const candidate = currentLine ? `${currentLine} ${word}` : word;

    if (context.measureText(candidate).width <= maxWidth || !currentLine) {
      currentLine = candidate;
      return;
    }

    lines.push(currentLine);
    currentLine = word;
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  const visibleLines = lines.slice(0, maxLines);

  if (lines.length > maxLines) {
    const lastIndex = visibleLines.length - 1;
    visibleLines[lastIndex] = `${visibleLines[lastIndex].replace(/[.,;:]?$/, "")}…`;
  }

  visibleLines.forEach((line, index) => {
    context.fillText(line, x, y + (index * lineHeight));
  });
};

const createSocialImageFile = async ({ formatName, title }) => {
  const format = SOCIAL_IMAGE_FORMATS[formatName];
  const imageUrl = getShareImageUrl();

  if (!format || !imageUrl) {
    throw new Error("Share image is unavailable");
  }

  const image = await loadShareImage(imageUrl);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas is unavailable");
  }

  canvas.width = format.width;
  canvas.height = format.height;
  context.fillStyle = "#f3e0cc";
  context.fillRect(0, 0, format.width, format.height);

  const horizontalPadding = formatName === "story" ? 90 : 64;
  const imageTop = formatName === "story" ? 210 : 130;
  const imageHeight = formatName === "story" ? 1120 : 650;
  const titleTop = formatName === "story" ? 1490 : 850;
  const titleFontSize = formatName === "story" ? 64 : 48;
  const titleLineHeight = formatName === "story" ? 78 : 58;

  context.fillStyle = "#7e390c";
  context.font = `600 ${formatName === "story" ? 34 : 28}px system-ui, sans-serif`;
  context.fillText("DANIEL ARELLA", horizontalPadding, formatName === "story" ? 115 : 70);

  drawContainedImage({
    context,
    image,
    x: horizontalPadding,
    y: imageTop,
    width: format.width - (horizontalPadding * 2),
    height: imageHeight,
  });

  context.fillStyle = "#0d1303";
  context.font = `700 ${titleFontSize}px Georgia, serif`;
  drawWrappedTitle({
    context,
    title,
    x: horizontalPadding,
    y: titleTop,
    maxWidth: format.width - (horizontalPadding * 2),
    lineHeight: titleLineHeight,
    maxLines: formatName === "story" ? 4 : 3,
  });

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.9));

  if (!blob) {
    throw new Error("Share image could not be generated");
  }

  const pageSlug = window.location.pathname.split("/").filter(Boolean).pop()?.replace(/\.html$/, "") || "daniel-arella";
  const filename = `${pageSlug}-${formatName}.jpg`;
  return new File([blob], filename, { type: "image/jpeg" });
};

const downloadFile = (file) => {
  const objectUrl = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = file.name;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
};

const bindShareActions = () => {
  const triggers = document.querySelectorAll("[data-share]");

  if (triggers.length === 0) {
    return;
  }

  const isIPad = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || isIPad;
  const dialog = createShareDialog();
  const facebookLink = dialog.querySelector("[data-share-facebook]");
  const xLink = dialog.querySelector("[data-share-x]");
  const whatsappLink = dialog.querySelector("[data-share-whatsapp]");
  const threadsLink = dialog.querySelector("[data-share-threads]");
  const instagramPostButton = dialog.querySelector("[data-share-instagram-post]");
  const instagramStoryButton = dialog.querySelector("[data-share-instagram-story]");
  const copyButton = dialog.querySelector("[data-share-copy]");
  const status = dialog.querySelector("[data-share-status]");
  let currentShareUrl = "";
  let currentShareTitle = "";

  const openFallback = ({ title, url }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(`${title} ${url}`);

    facebookLink?.setAttribute("href", `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`);
    xLink?.setAttribute("href", `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodedUrl}`);
    whatsappLink?.setAttribute("href", `https://api.whatsapp.com/send?text=${encodedText}`);
    threadsLink?.setAttribute("href", `https://www.threads.com/intent/post?text=${encodeURIComponent(title)}&url=${encodedUrl}`);
    currentShareUrl = url;
    currentShareTitle = title;

    if (status instanceof HTMLElement) {
      status.textContent = "";
    }

    dialog.removeAttribute("aria-hidden");
    dialog.showModal();
  };

  const shareInstagramImage = async (formatName) => {
    const format = SOCIAL_IMAGE_FORMATS[formatName];

    if (!format || !(status instanceof HTMLElement)) {
      return;
    }

    status.textContent = `Preparando imagen para ${format.label}…`;

    try {
      const file = await createSocialImageFile({ formatName, title: currentShareTitle });
      const shareData = {
        files: [file],
        title: currentShareTitle,
        text: `${currentShareTitle}\n${currentShareUrl}`,
      };

      if (isMobileDevice && typeof navigator.canShare === "function" && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        status.textContent = "";
        return;
      }

      downloadFile(file);
      status.textContent = `Imagen para ${format.label} descargada. Ya puedes subirla a Instagram.`;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        status.textContent = "";
        return;
      }

      status.textContent = "No fue posible preparar la imagen. Inténtalo de nuevo.";
    }
  };

  instagramPostButton?.addEventListener("click", () => {
    void shareInstagramImage("post");
  });
  instagramStoryButton?.addEventListener("click", () => {
    void shareInstagramImage("story");
  });

  copyButton?.addEventListener("click", async () => {
    try {
      await copyText(currentShareUrl);
      if (status instanceof HTMLElement) {
        status.textContent = "Enlace copiado.";
      }
    } catch {
      if (status instanceof HTMLElement) {
        status.textContent = `Copia este enlace: ${currentShareUrl}`;
      }
    }
  });

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const heading = document.querySelector("main h1");
      const title = trigger.getAttribute("data-share-title") ??
        heading?.textContent?.trim() ??
        document.title;
      const configuredUrl = trigger.getAttribute("data-share-url");
      const url = new URL(configuredUrl || window.location.href, window.location.href);
      url.hash = "";
      const shareData = { title, url: url.href };

      openFallback(shareData);
    });
  });
};

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
  bindArchiveSearch();
  prefillContactSubject();
  bindHeaderShrink();
  bindCarousel();
  bindMediaPagination();
  bindShareActions();
  bindBackToTop();
};

window.addEventListener("DOMContentLoaded", () => {
  void init();
});
