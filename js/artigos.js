/* Consulta, filtros, ordenacao, cards e paginacao dos Artigos de Opiniao. */
(function () {
  function initArtigos() {
    const ARTIGOS_DATA = window.GESEL_DATA.artigos || [];
    const ARTIGOS_ITEMS_PER_PAGE = (window.GESEL_CONFIG.artigos && window.GESEL_CONFIG.artigos.itemsPerPage) || 12;
    const { normalizeText, escapeHTML } = window.GESEL_DOM;
    let artigosCurrentPage = 1;

    const artigosSearch = document.getElementById('artigos-search');
    const artigosTheme = document.getElementById('artigos-theme');
    const artigosYear = document.getElementById('artigos-year');
    const artigosOrder = document.getElementById('artigos-order');
    const artigosClear = document.getElementById('artigos-clear');
    const artigosGrid = document.getElementById('artigos-grid');
    const artigosEmpty = document.getElementById('artigos-empty');
    const artigosResultsCount = document.getElementById('artigos-results-count');
    const artigosPagination = document.getElementById('artigos-pagination');

    if (!artigosSearch || !artigosTheme || !artigosYear || !artigosOrder || !artigosClear || !artigosGrid || !artigosEmpty || !artigosResultsCount || !artigosPagination) {
      return;
    }

    function getPublishedArtigos() {
      return ARTIGOS_DATA.filter(item => item.publicado === true);
    }

    function getMonthNumber(mes) {
      const normalized = normalizeText(mes);
      const months = {
        janeiro: 1,
        fevereiro: 2,
        marco: 3,
        abril: 4,
        maio: 5,
        junho: 6,
        julho: 7,
        agosto: 8,
        setembro: 9,
        outubro: 10,
        novembro: 11,
        dezembro: 12
      };

      return months[normalized] || Number(mes) || 0;
    }

    function getArticleDateValue(item) {
      return (Number(item.ano) * 100) + getMonthNumber(item.mes);
    }

    function populateArtigosFilters() {
      const published = getPublishedArtigos();
      const themes = [...new Set(published.flatMap(item => item.temas || []))]
        .sort((a, b) => a.localeCompare(b, 'pt-BR'));
      const years = [...new Set(published.map(item => item.ano).filter(Boolean))]
        .sort((a, b) => Number(b) - Number(a));

      artigosTheme.innerHTML = '<option value="">Todos</option>' + themes
        .map(theme => `<option value="${escapeHTML(theme)}">${escapeHTML(theme)}</option>`)
        .join('');

      artigosYear.innerHTML = '<option value="">Todos</option>' + years
        .map(year => `<option value="${year}">${year}</option>`)
        .join('');
    }

    function getFilteredArtigos() {
      const query = normalizeText(artigosSearch.value);
      const selectedTheme = normalizeText(artigosTheme.value);
      const selectedYear = String(artigosYear.value);
      const order = artigosOrder.value;

      const filtered = getPublishedArtigos().filter(item => {
        const searchableText = normalizeText([
          item.fonte,
          item.titulo,
          ...(item.autores || []),
          ...(item.temas || []),
          item.mes,
          item.ano
        ].join(' '));

        const matchesSearch = !query || searchableText.includes(query);
        const matchesTheme = !selectedTheme || (item.temas || [])
          .some(theme => normalizeText(theme) === selectedTheme);
        const matchesYear = !selectedYear || String(item.ano) === selectedYear;

        return matchesSearch && matchesTheme && matchesYear;
      });

      return filtered.sort((a, b) => {
        if (order === 'antigos') return getArticleDateValue(a) - getArticleDateValue(b);
        if (order === 'titulo-az') return a.titulo.localeCompare(b.titulo, 'pt-BR');
        if (order === 'titulo-za') return b.titulo.localeCompare(a.titulo, 'pt-BR');
        return getArticleDateValue(b) - getArticleDateValue(a);
      });
    }

    function createArtigoCard(item) {
      const autores = item.autores || [];
      const temas = item.temas || [];
      const authorsLabel = autores.length === 1 ? 'Autor' : 'Autores';
      const authors = autores.map(escapeHTML).join('<br>');
      const themes = temas.map(theme =>
        `<span class="tdse-theme-chip">${escapeHTML(theme)}</span>`
      ).join('');
      const source = item.fonte ? escapeHTML(item.fonte) : 'Fonte não informada';
      const publicationDate = [item.mes, item.ano].filter(Boolean).map(escapeHTML).join(' / ');

      const action = item.link
        ? `<a class="tdse-action open" href="${escapeHTML(item.link)}" target="_blank" rel="noopener noreferrer">
             <span class="material-icons-round">visibility</span>Abrir artigo
           </a>`
        : `<span class="tdse-action disabled" title="Link ainda não cadastrado">
             <span class="material-icons-round">link_off</span>Link pendente
           </span>`;

      return `
        <article class="tdse-card artigo-card">
          <div class="tdse-meta">
            <span class="tdse-badge">${source}</span>
            <span class="tdse-year">${publicationDate}</span>
          </div>
          <h3>${escapeHTML(item.titulo)}</h3>
          <div class="tdse-themes">${themes}</div>
          <p class="tdse-authors"><strong>${authorsLabel}</strong>${authors}</p>
          <div class="tdse-card-actions">${action}</div>
        </article>`;
    }

    function renderArtigosPagination(totalItems) {
      const totalPages = Math.max(1, Math.ceil(totalItems / ARTIGOS_ITEMS_PER_PAGE));
      artigosCurrentPage = Math.min(artigosCurrentPage, totalPages);

      if (totalItems <= ARTIGOS_ITEMS_PER_PAGE) {
        artigosPagination.innerHTML = '';
        return;
      }

      const buttons = [];
      buttons.push(`<button class="tdse-page-button" type="button" data-artigos-page="${artigosCurrentPage - 1}" ${artigosCurrentPage === 1 ? 'disabled' : ''} aria-label="Página anterior">‹</button>`);

      const pages = new Set([1, totalPages, artigosCurrentPage - 1, artigosCurrentPage, artigosCurrentPage + 1]);
      const validPages = [...pages].filter(page => page >= 1 && page <= totalPages).sort((a, b) => a - b);
      let previous = 0;

      validPages.forEach(page => {
        if (previous && page - previous > 1) {
          buttons.push('<span aria-hidden="true">…</span>');
        }
        buttons.push(`<button class="tdse-page-button ${page === artigosCurrentPage ? 'active' : ''}" type="button" data-artigos-page="${page}" ${page === artigosCurrentPage ? 'aria-current="page"' : ''}>${page}</button>`);
        previous = page;
      });

      buttons.push(`<button class="tdse-page-button" type="button" data-artigos-page="${artigosCurrentPage + 1}" ${artigosCurrentPage === totalPages ? 'disabled' : ''} aria-label="Próxima página">›</button>`);
      artigosPagination.innerHTML = buttons.join('');
    }

    function renderArtigos() {
      const filtered = getFilteredArtigos();
      const totalPages = Math.max(1, Math.ceil(filtered.length / ARTIGOS_ITEMS_PER_PAGE));
      artigosCurrentPage = Math.min(artigosCurrentPage, totalPages);

      const start = (artigosCurrentPage - 1) * ARTIGOS_ITEMS_PER_PAGE;
      const visible = filtered.slice(start, start + ARTIGOS_ITEMS_PER_PAGE);

      artigosGrid.innerHTML = visible.map(createArtigoCard).join('');
      artigosEmpty.classList.toggle('active', filtered.length === 0);
      artigosResultsCount.textContent = filtered.length === 1
        ? '1 artigo encontrado'
        : `${filtered.length} artigos encontrados`;

      renderArtigosPagination(filtered.length);
    }

    function resetArtigosFilters() {
      artigosSearch.value = '';
      artigosTheme.value = '';
      artigosYear.value = '';
      artigosOrder.value = 'recentes';
      artigosCurrentPage = 1;
      renderArtigos();
      artigosSearch.focus();
    }

    [artigosSearch, artigosTheme, artigosYear, artigosOrder].forEach(control => {
      control.addEventListener(control === artigosSearch ? 'input' : 'change', () => {
        artigosCurrentPage = 1;
        renderArtigos();
      });
    });

    artigosClear.addEventListener('click', resetArtigosFilters);

    artigosPagination.addEventListener('click', event => {
      const button = event.target.closest('[data-artigos-page]');
      if (!button || button.disabled) return;
      artigosCurrentPage = Number(button.dataset.artigosPage);
      renderArtigos();
      document.getElementById('artigos-consulta').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    populateArtigosFilters();
    renderArtigos();
  }

  window.GESEL_ARTIGOS = Object.freeze({ initArtigos });
})();
