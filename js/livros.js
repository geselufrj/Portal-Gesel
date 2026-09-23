/* Consulta, filtros, ordenacao, cards  dos livros. */
(function () {
  function initBooks() {
    const BOOK_DATA = window.GESEL_DATA.books || [];
    const { normalizeText, escapeHTML } = window.GESEL_DOM;

    const booksSearch = document.getElementById('books-search');
    const booksCompany = document.getElementById('books-company');
    const booksOrder = document.getElementById('books-order');
    const booksClear = document.getElementById('books-clear');
    const booksGrid = document.getElementById('books-grid');
    const booksEmpty = document.getElementById('books-empty');
    const booksResultsCount = document.getElementById('books-results-count');

    if (!booksSearch || !booksCompany || !booksOrder || !booksClear || !booksGrid || !booksEmpty || !booksResultsCount) {
      return;
    }

    function populateBookFilters() {
      const companies = [...new Set(BOOK_DATA.flatMap(item => item.empresas || []))]
        .sort((a, b) => a.localeCompare(b, 'pt-BR'));

      booksCompany.innerHTML = '<option value="">Todas</option>' + companies
        .map(company => `<option value="${escapeHTML(company)}">${escapeHTML(company)}</option>`)
        .join('');
    }

    function getFilteredBooks() {
      const query = normalizeText(booksSearch.value);
      const selectedCompany = normalizeText(booksCompany.value);
      const order = booksOrder.value;

      const filtered = BOOK_DATA.filter(item => {
        const searchableText = normalizeText([item.titulo, ...(item.empresas || [])].join(' '));
        const matchesSearch = !query || searchableText.includes(query);
        const matchesCompany = !selectedCompany || (item.empresas || [])
          .some(company => normalizeText(company) === selectedCompany);
        return matchesSearch && matchesCompany;
      });

      if (order === 'titulo-az') return filtered.sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'));
      if (order === 'titulo-za') return filtered.sort((a, b) => b.titulo.localeCompare(a.titulo, 'pt-BR'));
      return filtered;
    }

    function createBookCard(item) {
      const companies = (item.empresas || []).map(escapeHTML).join('<br>');
      const cover = item.capa
        ? `<div class="book-cover-wrap">
             <img class="book-cover" src="${escapeHTML(item.capa)}" alt="Capa do livro ${escapeHTML(item.titulo)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\'book-cover-placeholder\'><span class=\'material-icons-round\'>menu_book</span></div>'">
           </div>`
        : `<div class="book-cover-wrap"><div class="book-cover-placeholder"><span class="material-icons-round">menu_book</span></div></div>`;

      return `
        <article class="tdse-card book-card">
          ${cover}
          <div class="tdse-meta">
            <span class="tdse-badge">Livro</span>
            <span class="material-icons-round tdse-year" aria-hidden="true">menu_book</span>
          </div>
          <h3>${escapeHTML(item.titulo)}</h3>
          <p class="book-company"><strong>Empresas</strong>${companies}</p>
          <div class="tdse-card-actions">
            <a class="tdse-action open" href="${escapeHTML(item.link)}" target="_blank" rel="noopener noreferrer">
              <span class="material-icons-round">open_in_new</span>Acessar
            </a>
          </div>
        </article>`;
    }

    function renderBooks() {
      const filtered = getFilteredBooks();
      booksGrid.innerHTML = filtered.map(createBookCard).join('');
      booksEmpty.classList.toggle('active', filtered.length === 0);
      booksResultsCount.textContent = filtered.length === 1
        ? '1 livro encontrado'
        : `${filtered.length} livros encontrados`;
    }

    function resetBookFilters() {
      booksSearch.value = '';
      booksCompany.value = '';
      booksOrder.value = 'original';
      renderBooks();
      booksSearch.focus();
    }

    [booksSearch, booksCompany, booksOrder].forEach(control => {
      control.addEventListener(control === booksSearch ? 'input' : 'change', renderBooks);
    });


    booksClear.addEventListener('click', resetBookFilters);

    populateBookFilters();
    renderBooks();
  }

  window.GESEL_BOOKS = Object.freeze({ initBooks });
})();
