/* Controle do tema claro/escuro. */
(function () {
  function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('.material-icons-round');

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      if (icon) icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    });
  }

  window.GESEL_THEME = Object.freeze({ initTheme });
})();
