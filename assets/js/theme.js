/**
 * Theme palette persistence. Reads stored brand colors from localStorage
 * and injects overrides into :root so all pages use the same palette.
 */
(function () {
  const STORAGE_KEY = "daniel-arella-theme";

  const DEFAULT_THEME = {
    brand1: "#2c2c2c",
    brand2: "#f8f9fa",
    brand3: "#9ca3af",
    brand4: "#4a6fa5",
    brand5: "#2c3e50",
  };

  const BRAND_KEYS = ["brand1", "brand2", "brand3", "brand4", "brand5"];
  const CSS_VARS = [
    "--brand-1",
    "--brand-2",
    "--brand-3",
    "--brand-4",
    "--brand-5",
  ];

  function isValidHex(value) {
    return typeof value === "string" && /^#[0-9A-Fa-f]{6}$/.test(value);
  }

  function getStoredTheme() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      const theme = {};
      BRAND_KEYS.forEach((key, i) => {
        const value = parsed[key];
        theme[key] = isValidHex(value) ? value : DEFAULT_THEME[key];
      });
      return theme;
    } catch {
      return null;
    }
  }

  function applyTheme(theme) {
    if (!theme) return;
    let style = document.getElementById("theme-override");
    if (!style) {
      style = document.createElement("style");
      style.id = "theme-override";
      document.head.appendChild(style);
    }
    const declarations = BRAND_KEYS.map(
      (key, i) => CSS_VARS[i] + ": " + (theme[key] || DEFAULT_THEME[key]) + ";",
    );
    style.textContent = ":root { " + declarations.join(" ") + " }";
  }

  function applyStoredTheme() {
    applyTheme(getStoredTheme());
  }

  window.applyStoredTheme = applyStoredTheme;
  window.getStoredTheme = getStoredTheme;
  window.getDefaultTheme = function () {
    return Object.assign({}, DEFAULT_THEME);
  };
  window.saveTheme = function (theme) {
    if (!theme) return;
    const payload = {};
    BRAND_KEYS.forEach((key) => {
      payload[key] = isValidHex(theme[key]) ? theme[key] : DEFAULT_THEME[key];
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    applyTheme(payload);
  };
  window.clearTheme = function () {
    localStorage.removeItem(STORAGE_KEY);
    const style = document.getElementById("theme-override");
    if (style) style.remove();
  };

  applyStoredTheme();
})();
