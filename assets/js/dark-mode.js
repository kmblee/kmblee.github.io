function getTheme() {
  if (localStorage && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  const prismDark = document.getElementById("prism-dark");
  const prismLight = document.getElementById("prism-light");
  prismDark.toggleAttribute("disabled", theme === "light");
  prismLight.toggleAttribute("disabled", theme === "dark");

  localStorage.setItem("theme", theme);
}

const theme = getTheme();
if (theme) setTheme(theme);

function toggleTheme(e) {
  const theme = e.currentTarget.classList.contains("light--hidden")
    ? "light"
    : "dark";
  setTheme(theme);
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".theme__toggle");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });
});
