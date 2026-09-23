/* Navegacao entre as paginas internas do portal. */
(function () {
  function showPage(pageName) {
    document.querySelectorAll('.app-page').forEach(page => {
      page.classList.remove('active');
    });

    const selectedPage = document.getElementById('page-' + pageName);

    if (selectedPage) {
      selectedPage.classList.add('active');
    } else {
      return;
    }

    if (pageName === 'home') {
      history.replaceState(null, '', '#inicio');
    } else {
      history.replaceState(null, '', '#' + pageName);
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function openPageFromHash() {
    const hash = window.location.hash.replace('#', '');
    const routes = window.GESEL_CONFIG.routes;
    const configuredPage = routes[hash];
    const directPage = document.getElementById('page-' + hash) ? hash : null;
    showPage(configuredPage || directPage || 'home');
  }

  function initNavigation() {
    document.addEventListener('click', event => {
      const trigger = event.target.closest('[data-app-page]');
      if (!trigger) return;

      const pageName = trigger.dataset.appPage;
      if (!document.getElementById('page-' + pageName)) return;

      event.preventDefault();
      showPage(pageName);
    });

    window.addEventListener('hashchange', openPageFromHash);
    openPageFromHash();
  }

  window.GESEL_NAV = Object.freeze({
    initNavigation,
    showPage,
    openPageFromHash
  });
})();
