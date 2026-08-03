const menuIcon = document.getElementById("menu-icon");
const sidebarPanel = document.getElementById("sidebar-panel");

menuIcon.addEventListener("click", function () {
  sidebarPanel.classList.toggle("sidebar__panel--open");
});
