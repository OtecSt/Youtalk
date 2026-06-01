// Минимальный toggle бургер-меню: открывает/закрывает overlay-навигацию на mobile.
// Без зависимостей. Загружается с defer.

(function () {
  const header = document.querySelector('[data-js="header"]');
  const burger = document.querySelector('[data-js="burger"]');
  if (!header || !burger) return;

  burger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('header_menu-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  // Закрытие меню при клике по любой ссылке внутри nav (для удобства).
  header.querySelectorAll('.header__nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('header_menu-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Закрытие по Escape.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('header_menu-open')) {
      header.classList.remove('header_menu-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.focus();
    }
  });
})();
