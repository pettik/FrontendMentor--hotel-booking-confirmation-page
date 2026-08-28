const menuIcon = document.getElementById('menu-main-icon');
const sidebarPanel = document.getElementById('sidebar');
const closeIcon = document.getElementById('close-icon');
const backdrop = document.querySelector('.backdrop');
let menuIconImg = menuIcon.querySelector('img');

closeIcon.addEventListener('click', function () {
  sidebarPanel.classList.remove('sidebar--open');
  backdrop.classList.remove('backdrop--visible');
});

menuIcon.addEventListener('click', function () {
  sidebarPanel.classList.toggle('sidebar--open');
  backdrop.classList.toggle('backdrop--visible');

  if (menuIcon.getAttribute('aria-expanded') === 'false') {
    menuIcon.setAttribute('aria-expanded', 'true');
    menuIconImg.src = './assets/images/icon-close.svg';
    menuIcon.setAttribute('aria-label', 'close');
  } else {
    menuIcon.setAttribute('aria-expanded', 'false');
    menuIconImg.src = './assets/images/icon-menu.svg';
    menuIcon.setAttribute('aria-label', 'open');
  }
});

// Když uživatel klikne mimo sidebar na tmavý backdrop, zavři sidebar a zároveň skryj backdrop.
backdrop.addEventListener('click', function () {
  sidebarPanel.classList.remove('sidebar--open');
  backdrop.classList.remove('backdrop--visible');
});
