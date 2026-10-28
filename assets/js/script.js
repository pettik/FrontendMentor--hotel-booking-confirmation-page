const menuIcon = document.getElementById('menu-main-icon');
const sidebarPanel = document.getElementById('sidebar');
const closeIcon = document.getElementById('close-icon');
const backdrop = document.querySelector('.backdrop');

const desktopQuery = window.matchMedia('(min-width: 75rem)');

// ========================================
// SIDEBAR - ACCESSIBILITY
// ========================================

function updateSidebarAccessibility() {
  const isDesktop = desktopQuery.matches;
  const isOpen = sidebarPanel.classList.contains('sidebar--open');

  // Zavřený mobilní sidebar nesmí přijímat fokus.
  // Desktopový sidebar je přístupný vždy.
  sidebarPanel.inert = !isDesktop && !isOpen;
}

function openSidebar() {
  sidebarPanel.classList.add('sidebar--open');
  backdrop.classList.add('backdrop--visible');

  backdrop.setAttribute('aria-hidden', 'false');
  menuIcon.setAttribute('aria-expanded', 'true');

  updateSidebarAccessibility();

  // Po otevření přesuneme fokus na zavírací tlačítko.
  closeIcon.focus();
}

function closeSidebar() {
  if (!sidebarPanel.classList.contains('sidebar--open')) {
    return;
  }

  // Fokus vrátíme na hamburger před deaktivací sidebaru.
  if (!desktopQuery.matches) {
    menuIcon.focus();
  }

  sidebarPanel.classList.remove('sidebar--open');
  backdrop.classList.remove('backdrop--visible');

  backdrop.setAttribute('aria-hidden', 'true');
  menuIcon.setAttribute('aria-expanded', 'false');

  updateSidebarAccessibility();
}

menuIcon.addEventListener('click', openSidebar);
closeIcon.addEventListener('click', closeSidebar);
backdrop.addEventListener('click', closeSidebar);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeSidebar();
  }
});

// Při změně šířky okna aktualizujeme přístupnost.
desktopQuery.addEventListener('change', function () {
  if (desktopQuery.matches) {
    sidebarPanel.classList.remove('sidebar--open');
    backdrop.classList.remove('backdrop--visible');

    backdrop.setAttribute('aria-hidden', 'true');
    menuIcon.setAttribute('aria-expanded', 'false');
  } else if (sidebarPanel.contains(document.activeElement)) {
    menuIcon.focus();
  }

  updateSidebarAccessibility();
});

// Nastavení při prvním načtení stránky.
updateSidebarAccessibility();

// ========================================
// DESKTOP - HOVER TO FAN
// ========================================

const mainCards = document.querySelector('.main__cards');

if (mainCards) {
  mainCards.addEventListener('pointerenter', function (event) {
    // Funguje pouze s myší a v desktopovém zobrazení.
    if (
      event.pointerType !== 'mouse' ||
      !window.matchMedia('(min-width: 75rem)').matches
    ) {
      return;
    }

    mainCards.classList.add('is-fanned');
  });

  mainCards.addEventListener('pointerleave', function () {
    mainCards.classList.remove('is-fanned');
  });
}
