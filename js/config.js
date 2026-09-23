/* Configuracoes gerais do Portal GESEL. */
(function () {
  window.GESEL_CONFIG = Object.freeze({
    tdse: Object.freeze({
      itemsPerPage: 12
    }),

    artigos: Object.freeze({
      itemsPerPage: 12
    }),

    routes: Object.freeze({
      inicio: 'home',
      'energy-institute': 'energy-institute',
      artigos: 'artigos',
      tdse: 'tdse',
      livros: 'livros',
      cursos: 'cursos'
    })
  });
})();
