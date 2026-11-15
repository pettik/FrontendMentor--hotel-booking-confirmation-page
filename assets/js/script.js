const menuIcon = document.getElementById('menu-main-icon');
const sidebarPanel = document.getElementById('sidebar');
const closeIcon = document.getElementById('close-icon');
const backdrop = document.querySelector('.backdrop');
const pageContent = document.querySelectorAll('.topbar, main, .attribution');

const desktopQuery = window.matchMedia('(min-width: 75rem)');

// ========================================
// SIDEBAR - ACCESSIBILITY
// ========================================

function updateSidebarAccessibility() {
  const isDesktop = desktopQuery.matches;
  const isOpen = sidebarPanel.classList.contains('sidebar--open');
  const isMobileOpen = !isDesktop && isOpen;

  // Zavřený mobilní sidebar nesmí přijímat fokus.
  // Desktopový sidebar je přístupný vždy.
  sidebarPanel.inert = !isDesktop && !isOpen;
  menuIcon.setAttribute('aria-expanded', String(isDesktop || isOpen));
  backdrop.classList.toggle('backdrop--visible', isMobileOpen);

  // Obsah za otevřeným mobilním menu nesmí přijímat fokus.
  pageContent.forEach(function (element) {
    element.inert = isMobileOpen;
  });
}

function openSidebar() {
  if (desktopQuery.matches) {
    return;
  }

  sidebarPanel.classList.add('sidebar--open');

  updateSidebarAccessibility();

  // Po otevření přesuneme fokus na zavírací tlačítko.
  closeIcon.focus();
}

function closeSidebar() {
  if (!sidebarPanel.classList.contains('sidebar--open')) {
    return;
  }

  sidebarPanel.classList.remove('sidebar--open');
  updateSidebarAccessibility();

  // Hamburger může přijmout fokus až po odebrání inert z horní lišty.
  if (!desktopQuery.matches) {
    menuIcon.focus();
  }
}

menuIcon.addEventListener('click', openSidebar);
closeIcon.addEventListener('click', closeSidebar);
backdrop.addEventListener('click', closeSidebar);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeSidebar();
  }

  // Tab i Shift+Tab udrží fokus v otevřeném mobilním menu.
  if (
    event.key === 'Tab' &&
    !desktopQuery.matches &&
    sidebarPanel.classList.contains('sidebar--open')
  ) {
    const controls = sidebarPanel.querySelectorAll('button, a[href]');
    const firstControl = controls[0];
    const lastControl = controls[controls.length - 1];

    if (event.shiftKey && document.activeElement === firstControl) {
      event.preventDefault();
      lastControl.focus();
    } else if (!event.shiftKey && document.activeElement === lastControl) {
      event.preventDefault();
      firstControl.focus();
    }
  }
});

// Při změně šířky okna aktualizujeme přístupnost.
desktopQuery.addEventListener('change', function () {
  const sidebarHadFocus = sidebarPanel.contains(document.activeElement);
  const closeButtonHadFocus = document.activeElement === closeIcon;

  sidebarPanel.classList.remove('sidebar--open');
  updateSidebarAccessibility();

  if (!desktopQuery.matches && sidebarHadFocus) {
    menuIcon.focus();
  } else if (desktopQuery.matches && closeButtonHadFocus) {
    // Zavírací tlačítko se na desktopu skryje; fokus patří viditelnému odkazu.
    sidebarPanel.querySelector('a[href]').focus();
  }
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
