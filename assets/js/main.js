const loadIncludes = async () => {
  const includeNodes = document.querySelectorAll("[data-include]");

  await Promise.all(
    Array.from(includeNodes).map(async (node) => {
      const includePath = node.getAttribute("data-include");

      if (!includePath) {
        return;
      }

      try {
        const response = await fetch(includePath);

        if (!response.ok) {
          throw new Error(`Include not found: ${includePath}`);
        }

        node.innerHTML = await response.text();
      } catch (error) {
        node.innerHTML = "";
        console.error(error);
      }
    })
  );
};

const getBasePath = () => {
  const sitePrefix = document.body.dataset.sitePrefix?.trim() ?? "";
  const normalizedPrefix = sitePrefix.replace(/^\/+|\/+$/g, "");

  return normalizedPrefix ? `/${normalizedPrefix}/` : "/";
};

const normalizePath = (path) => path.replace(/\/{2,}/g, "/");

const resolveRoute = (route) => {
  const basePath = getBasePath();
  const normalizedRoute = route.replace(/^\/+/, "");

  return normalizePath(`${basePath}${normalizedRoute}`);
};

const hydrateRoutes = () => {
  document.querySelectorAll("[data-route]").forEach((link) => {
    const route = link.getAttribute("data-route");

    if (!route) {
      return;
    }

    link.setAttribute("href", resolveRoute(route));
  });
};

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

const init = async () => {
  if (typeof location !== "undefined" && location.pathname.indexOf("/pagina-daniel-arella") !== 0) {
    document.body.removeAttribute("data-site-prefix");
  }
  await loadIncludes();
  hydrateRoutes();
  highlightNavigation();
  bindMenuToggle();
  bindStaticForms();
};

window.addEventListener("DOMContentLoaded", () => {
  void init();
});
