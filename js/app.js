/* Ponto central de inicializacao do Portal GESEL. */
(function () {
  function initPortal() {
    window.GESEL_THEME.initTheme();
    window.GESEL_BOOKS.initBooks();
    window.GESEL_TDSE.initTDSE();
    window.GESEL_ARTIGOS.initArtigos();
    window.GESEL_CURSOS.initCursos();
    window.GESEL_NAV.initNavigation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortal, { once: true });
  } else {
    initPortal();
  }
})();
