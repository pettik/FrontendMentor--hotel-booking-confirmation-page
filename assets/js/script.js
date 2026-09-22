const menuIcon = document.getElementById("menu-main-icon");
const sidebarPanel = document.getElementById("sidebar");
const closeIcon = document.getElementById("close-icon");
const backdrop = document.querySelector(".backdrop");
// menuIconImg proměnná už není potřeba — topbar ikona se nikdy nemění

closeIcon.addEventListener("click", function () {
  closeSidebar();
});

menuIcon.addEventListener("click", function () {
  sidebarPanel.classList.add("sidebar--open");
  backdrop.classList.add("backdrop--visible");
  backdrop.setAttribute("aria-hidden", "false");
  menuIcon.setAttribute("aria-expanded", "true");
  // žádná změna .src ani aria-label — topbar tlačítko zůstává vizuálně "hamburger" napořád
});

backdrop.addEventListener("click", function () {
  closeSidebar();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSidebar();
  }
});

function closeSidebar() {
  sidebarPanel.classList.remove("sidebar--open");
  backdrop.classList.remove("backdrop--visible");
  menuIcon.setAttribute("aria-expanded", "false");
  backdrop.setAttribute("aria-hidden", "true");
}
