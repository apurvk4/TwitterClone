export default function changeTheme() {
  if (document.documentElement.getAttribute("data-theme") == "default") {
    document.documentElement.style.setProperty("--default-bg", "#000000");
    document.documentElement.style.setProperty("--default-text", "#ffffff");
    document.documentElement.style.setProperty("--default", "#202327");
    document.documentElement.style.setProperty(
      "--default-border",
      "rgb(52,56,58)"
    );
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.style.setProperty("--default-hover", "#1b1d20");
  } else if (document.documentElement.getAttribute("data-theme") == "dark") {
    document.documentElement.style.setProperty("--default-bg", "#ffffff");
    document.documentElement.style.setProperty("--default-text", "#000000");
    document.documentElement.style.setProperty("--default", "#eff3f4");
    document.documentElement.style.setProperty(
      "--default-border",
      "rgba(0,0,0,0.125)"
    );
    document.documentElement.setAttribute("data-theme", "default");
    document.documentElement.style.setProperty("--default-hover", "#dfe4e4");
  }
}
