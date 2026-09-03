const menuIcon = document.getElementById("menu-main-icon");
const sidebarPanel = document.getElementById("sidebar");
const closeIcon = document.getElementById("close-icon");
const backdrop = document.querySelector(".backdrop");
let menuIconImg = menuIcon.querySelector("img");

closeIcon.addEventListener("click", function () {
  closeSidebar();
});

menuIcon.addEventListener("click", function () {
  sidebarPanel.classList.add("sidebar--open");
  backdrop.classList.add("backdrop--visible");
  backdrop.setAttribute("aria-hidden", "false");

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

// Když uživatel klikne mimo sidebar na tmavý backdrop, zavři sidebar a zároveň skryj backdrop.
backdrop.addEventListener("click", function () {
  closeSidebar();
});

// Pomocí ESC zavřít oteveřené mobilní menu
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSidebar();
  }
});

function closeSidebar() {
  sidebarPanel.classList.remove("sidebar--open");
  backdrop.classList.remove("backdrop--visible");
  menuIcon.setAttribute("aria-expanded", "false");
  menuIcon.setAttribute("aria-label", "open");
  backdrop.setAttribute("aria-hidden", "true");
}
