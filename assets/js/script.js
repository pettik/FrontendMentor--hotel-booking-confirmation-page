const menuIcon = document.getElementById("menu-icon");
const sidebarPanel = document.getElementById("sidebar-panel");
let menuIconImg = menuIcon.querySelector("img");

menuIcon.addEventListener("click", function () {
  sidebarPanel.classList.toggle("sidebar__panel--open");

  if (menuIcon.getAttribute("aria-expanded") === "false") {
    menuIcon.setAttribute("aria-expanded", "true");
    menuIconImg.src = "./assets/images/icon-close.svg";
    menuIcon.setAttribute("aria-label", "close");
  } else {
    menuIcon.setAttribute("aria-expanded", "false");
    menuIconImg.src = "./assets/images/icon-menu.svg";
    menuIcon.setAttribute("aria-label", "open");
  }
});
