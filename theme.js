(function () {
  var storageKey = "nuetshark-theme";
  var validThemes = ["light", "dark", "system"];

  function readTheme() {
    try {
      var storedTheme = window.localStorage.getItem(storageKey);
      return validThemes.indexOf(storedTheme) === -1 ? "system" : storedTheme;
    } catch (error) {
      return "system";
    }
  }

  function saveTheme(theme) {
    try {
      if (theme === "system") {
        window.localStorage.removeItem(storageKey);
      } else {
        window.localStorage.setItem(storageKey, theme);
      }
    } catch (error) {
      return;
    }
  }

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function updateControls(theme) {
    var buttons = document.querySelectorAll("[data-theme-option]");
    for (var index = 0; index < buttons.length; index += 1) {
      var button = buttons[index];
      var selected = button.getAttribute("data-theme-option") === theme;
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    }
  }

  applyTheme(readTheme());

  document.addEventListener("DOMContentLoaded", function () {
    var theme = readTheme();
    var buttons = document.querySelectorAll("[data-theme-option]");

    updateControls(theme);

    for (var index = 0; index < buttons.length; index += 1) {
      buttons[index].addEventListener("click", function () {
        var selectedTheme = this.getAttribute("data-theme-option");
        if (validThemes.indexOf(selectedTheme) === -1) {
          selectedTheme = "system";
        }

        saveTheme(selectedTheme);
        applyTheme(selectedTheme);
        updateControls(selectedTheme);
      });
    }
  });
})();
