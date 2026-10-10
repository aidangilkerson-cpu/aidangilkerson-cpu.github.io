(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  const preference = window.matchMedia("(prefers-color-scheme: dark)");

  try {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      root.dataset.theme = savedTheme;
    }
  } catch {
    // The system color preference still works if storage is unavailable.
  }

  if (!button) return;

  const currentTheme = () =>
    root.dataset.theme || (preference.matches ? "dark" : "light");

  const updateButton = () => {
    const dark = currentTheme() === "dark";
    button.textContent = dark ? "Light mode" : "Dark mode";
    button.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
    button.setAttribute("aria-pressed", String(dark));
  };

  button.hidden = false;
  updateButton();

  button.addEventListener("click", () => {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // The selected theme remains active until this page is closed.
    }
    updateButton();
  });

  preference.addEventListener("change", () => {
    if (!root.dataset.theme) updateButton();
  });
})();
