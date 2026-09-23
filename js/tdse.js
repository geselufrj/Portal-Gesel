/* Consulta, filtros, ordenacao, cards e paginacao dos TDSEs. */
(function () {
  function initTDSE() {
    const TDSE_DATA = window.GESEL_DATA.tdses || [];
    const TDSE_ITEMS_PER_PAGE = window.GESEL_CONFIG.tdse.itemsPerPage;
    const { normalizeText, escapeHTML } = window.GESEL_DOM;
    let tdseCurrentPage = 1;

    const tdseSearch = document.getElementById('tdse-search');
    const tdseTheme = document.getElementById('tdse-theme');
    const tdseYear = document.getElementById('tdse-year');
    const tdseOrder = document.getElementById('tdse-order');
    const tdseClear = document.getElementById('tdse-clear');
    const tdseGrid = document.getElementById('tdse-grid');
    const tdseEmpty = document.getElementById('tdse-empty');
    const tdseResultsCount = document.getElementById('tdse-results-count');
    const tdsePagination = document.getElementById('tdse-pagination');

    if (!tdseSearch || !tdseTheme || !tdseYear || !tdseOrder || !tdseClear || !tdseGrid || !tdseEmpty || !tdseResultsCount || !tdsePagination) {
      return;
    }

    function getPublishedTDSEs() {
      return TDSE_DATA.filter(item => item.publicado === true);
    }

    function populateTDSEFilters() {
      const published = getPublishedTDSEs();
      const themes = [...new Set(published.flatMap(item => item.temas || []))]
        .sort((a, b) => a.localeCompare(b, 'pt-BR'));
      const years = [...new Set(published.map(item => item.ano).filter(Boolean))]
        .sort((a, b) => Number(b) - Number(a));

      tdseTheme.innerHTML = '<option value="">Todos</option>' + themes
        .map(theme => `<option value="${escapeHTML(theme)}">${escapeHTML(theme)}</option>`)
        .join('');

      tdseYear.innerHTML = '<option value="">Todos</option>' + years
        .map(year => `<option value="${year}">${year}</option>`)
        .join('');
    }

    function getFilteredTDSEs() {
      const query = normalizeText(tdseSearch.value);
      const selectedTheme = normalizeText(tdseTheme.value);
      const selectedYear = String(tdseYear.value);
      const order = tdseOrder.value;

      const filtered = getPublishedTDSEs().filter(item => {
        const searchableText = normalizeText([
          `TDSE ${item.numero}`,
          item.numero,
          item.titulo,
          ...(item.autores || []),
          ...(item.temas || []),
          item.ano
        ].join(' '));

        const matchesSearch = !query || searchableText.includes(query);
        const matchesTheme = !selectedTheme || (item.temas || [])
          .some(theme => normalizeText(theme) === selectedTheme);
        const matchesYear = !selectedYear || String(item.ano) === selectedYear;

        return matchesSearch && matchesTheme && matchesYear;
      });

      return filtered.sort((a, b) => {
        if (order === 'antigos') return Number(a.numero) - Number(b.numero);
        if (order === 'titulo-az') return a.titulo.localeCompare(b.titulo, 'pt-BR');
        if (order === 'titulo-za') return b.titulo.localeCompare(a.titulo, 'pt-BR');
        return Number(b.numero) - Number(a.numero);
      });
    }

    function createTDSECard(item) {
      const authorsLabel = item.autores.length === 1 ? 'Autor' : 'Autores';
      const authors = item.autores.map(escapeHTML).join('<br>');
      const themes = item.temas.map(theme =>
        `<span class="tdse-theme-chip">${escapeHTML(theme)}</span>`
      ).join('');

      const action = item.link
        ? `<a class="tdse-action open" href="${escapeHTML(item.link)}" target="_blank" rel="noopener noreferrer">
             <span class="material-icons-round">visibility</span>Abrir
           </a>`
        : `<span class="tdse-action disabled" title="Link ainda não cadastrado">
             <span class="material-icons-round">link_off</span>Link pendente
           </span>`;

      return `
        <article class="tdse-card" data-tdse="${item.numero}">
          <div class="tdse-meta">
            <span class="tdse-badge">TDSE ${item.numero}</span>
            <span class="tdse-year">${escapeHTML(item.ano)}</span>
          </div>
          <h3>${escapeHTML(item.titulo)}</h3>
          <div class="tdse-themes">${themes}</div>
          <p class="tdse-authors"><strong>${authorsLabel}</strong>${authors}</p>
          <div class="tdse-card-actions">${action}</div>
        </article>`;
    }

    function renderTDSEPagination(totalItems) {
      const totalPages = Math.max(1, Math.ceil(totalItems / TDSE_ITEMS_PER_PAGE));
      tdseCurrentPage = Math.min(tdseCurrentPage, totalPages);

      if (totalItems <= TDSE_ITEMS_PER_PAGE) {
        tdsePagination.innerHTML = '';
        return;
      }

      const buttons = [];
      buttons.push(`<button class="tdse-page-button" type="button" data-page="${tdseCurrentPage - 1}" ${tdseCurrentPage === 1 ? 'disabled' : ''} aria-label="Página anterior">‹</button>`);

      const pages = new Set([1, totalPages, tdseCurrentPage - 1, tdseCurrentPage, tdseCurrentPage + 1]);
      const validPages = [...pages].filter(page => page >= 1 && page <= totalPages).sort((a, b) => a - b);
      let previous = 0;

      validPages.forEach(page => {
        if (previous && page - previous > 1) {
          buttons.push('<span aria-hidden="true">…</span>');
        }
        buttons.push(`<button class="tdse-page-button ${page === tdseCurrentPage ? 'active' : ''}" type="button" data-page="${page}" ${page === tdseCurrentPage ? 'aria-current="page"' : ''}>${page}</button>`);
        previous = page;
      });

      buttons.push(`<button class="tdse-page-button" type="button" data-page="${tdseCurrentPage + 1}" ${tdseCurrentPage === totalPages ? 'disabled' : ''} aria-label="Próxima página">›</button>`);
      tdsePagination.innerHTML = buttons.join('');
    }

    function renderTDSEs() {
      const filtered = getFilteredTDSEs();
      const totalPages = Math.max(1, Math.ceil(filtered.length / TDSE_ITEMS_PER_PAGE));
      tdseCurrentPage = Math.min(tdseCurrentPage, totalPages);

      const start = (tdseCurrentPage - 1) * TDSE_ITEMS_PER_PAGE;
      const visible = filtered.slice(start, start + TDSE_ITEMS_PER_PAGE);

      tdseGrid.innerHTML = visible.map(createTDSECard).join('');
      tdseEmpty.classList.toggle('active', filtered.length === 0);
      tdseResultsCount.textContent = filtered.length === 1
        ? '1 publicação encontrada'
        : `${filtered.length} publicações encontradas`;

      renderTDSEPagination(filtered.length);
    }

    function resetTDSEFilters() {
      tdseSearch.value = '';
      tdseTheme.value = '';
      tdseYear.value = '';
      tdseOrder.value = 'recentes';
      tdseCurrentPage = 1;
      renderTDSEs();
      tdseSearch.focus();
    }

    [tdseSearch, tdseTheme, tdseYear, tdseOrder].forEach(control => {
      control.addEventListener(control === tdseSearch ? 'input' : 'change', () => {
        tdseCurrentPage = 1;
        renderTDSEs();
      });
    });

    tdseClear.addEventListener('click', resetTDSEFilters);

    tdsePagination.addEventListener('click', event => {
      const button = event.target.closest('[data-page]');
      if (!button || button.disabled) return;
      tdseCurrentPage = Number(button.dataset.page);
      renderTDSEs();
      document.getElementById('tdse-consulta').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    populateTDSEFilters();
    renderTDSEs();
  }

  window.GESEL_TDSE = Object.freeze({ initTDSE });
})();
