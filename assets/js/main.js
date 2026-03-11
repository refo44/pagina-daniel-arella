const FALLBACK_HEADER = `<header class="site-header">
  <div class="o-container site-header__inner">
    <a class="site-header__brand" data-route="" href="">Daniel Arella</a>
    <button class="site-header__toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Abrir menú de navegación" data-menu-toggle>Menú</button>
    <nav class="site-header__nav" id="site-navigation" aria-label="Principal" data-menu-panel>
      <ul class="site-header__list">
        <li><a class="site-header__link" data-nav-item="home" data-route="" href="">Inicio</a></li>
        <li><a class="site-header__link" data-nav-item="archivo" data-route="archivo/" href="archivo/">Archivo</a></li>
        <li><a class="site-header__link" data-nav-item="autor" data-route="sobre-el-autor/" href="sobre-el-autor/">Sobre el autor</a></li>
        <li><a class="site-header__link" data-nav-item="talleres" data-route="talleres/" href="talleres/">Talleres</a></li>
        <li><a class="site-header__link" data-nav-item="correspondencia" data-route="correspondencia/" href="correspondencia/">Correspondencia</a></li>
      </ul>
      <ul class="site-header__list site-header__list--sub">
        <li><a class="site-header__link" data-nav-item="blog" data-route="blog/" href="blog/">Blog</a></li>
        <li><a class="site-header__link" data-nav-item="eventos" data-route="eventos/" href="eventos/">Eventos</a></li>
        <li><a class="site-header__link" data-nav-item="galeria" data-route="galeria/" href="galeria/">Galería</a></li>
        <li><a class="site-header__link" data-nav-item="multimedia" data-route="multimedia/" href="multimedia/">Videos y audios</a></li>
      </ul>
    </nav>
  </div>
</header>`;

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

        const html = await response.text();
        const isHeaderOrFooter =
          includePath.includes("header.html") || includePath.includes("footer.html");

        if (isHeaderOrFooter) {
          const template = document.createElement("template");
          template.innerHTML = html.trim();
          const content = template.content.firstElementChild;
          if (content) {
            node.replaceWith(content);
          }
        } else {
          node.innerHTML = html;
        }
      } catch (error) {
        if (includePath.includes("header.html")) {
          const template = document.createElement("template");
          template.innerHTML = FALLBACK_HEADER.trim();
          const content = template.content.firstElementChild;
          if (content) {
            node.replaceWith(content);
          }
        } else if (includePath.includes("footer.html")) {
          const footerHtml = '<footer class="site-footer"><div class="o-container site-footer__inner"><ul class="site-footer__nav"><li><a data-route="prensa/" href="prensa/">Prensa</a></li><li><a data-route="derechos/" href="derechos/">Derechos</a></li><li><a data-route="contacto/" href="contacto/">Contacto</a></li><li><a data-route="correspondencia/" href="correspondencia/">Correspondencia</a></li></ul><p class="site-footer__credit">Sitio estático editorial preparado para migración directa a WordPress.</p></div></footer>';
          const template = document.createElement("template");
          template.innerHTML = footerHtml.trim();
          const content = template.content.firstElementChild;
          if (content) {
            node.replaceWith(content);
          }
        } else {
          node.innerHTML = "";
        }
        console.warn("Include fallback used (run with a local server for full includes):", includePath, error);
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
