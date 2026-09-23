/* Cards, pesquisa e ordenacao alfabetica da pagina de Cursos. */
(function () {
  function initCursos() {
    const courses = (window.GESEL_DATA && window.GESEL_DATA.cursos) || [];
    const grid = document.getElementById('courses-grid');
    const count = document.getElementById('courses-count');
    const search = document.getElementById('courses-search');
    const clear = document.getElementById('courses-clear');
    const empty = document.getElementById('courses-empty');
    const { escapeHTML, normalizeText } = window.GESEL_DOM;

    if (!grid || !count || !search || !clear || !empty) return;

    const sortedCourses = [...courses].sort((a, b) =>
      String(a.titulo || '').localeCompare(String(b.titulo || ''), 'pt-BR', { sensitivity: 'base' })
    );

    function renderCourseIcon(item) {
      if (item.icone === 'hidreletrica') {
        return `
          <div class="course-icon course-icon-hydro" aria-hidden="true">
            <span class="material-icons-round hydro-water">waves</span>
            <span class="material-icons-round hydro-bolt">electric_bolt</span>
          </div>`;
      }

      return `
        <div class="course-icon" aria-hidden="true">
          <span class="material-icons-round">${escapeHTML(item.icone || 'school')}</span>
        </div>`;
    }

    function createCourseCard(item) {
      const hasLink = /^https?:\/\//i.test(item.link || '');
      const action = hasLink
        ? `<a class="course-action" href="${escapeHTML(item.link)}" target="_blank" rel="noopener noreferrer">
             Ver detalhes <span class="material-icons-round" aria-hidden="true">arrow_forward</span>
           </a>`
        : `<span class="course-action disabled" title="Link ainda não cadastrado" aria-disabled="true">
             Ver detalhes <span class="material-icons-round" aria-hidden="true">arrow_forward</span>
           </span>`;

      return `
        <article class="course-card">
          <div class="course-card-top">
            ${renderCourseIcon(item)}
            <span class="course-badge">Curso</span>
          </div>

          <h3>${escapeHTML(item.titulo)}</h3>

          <div class="course-duration">
            <span class="material-icons-round" aria-hidden="true">schedule</span>
            <strong>${escapeHTML(item.cargaHoraria)}</strong>
          </div>

          <p>${escapeHTML(item.descricao)}</p>

          <div class="course-card-footer">${action}</div>
        </article>`;
    }

    function renderCourses() {
      const query = normalizeText(search.value);
      const filtered = sortedCourses.filter(item => {
        if (!query) return true;
        return normalizeText([item.titulo, item.descricao, item.cargaHoraria].join(' ')).includes(query);
      });

      grid.innerHTML = filtered.map(createCourseCard).join('');
      empty.classList.toggle('active', filtered.length === 0);
      count.textContent = filtered.length === courses.length
        ? `${courses.length} cursos`
        : `${filtered.length} de ${courses.length} cursos`;
    }

    search.addEventListener('input', renderCourses);
    clear.addEventListener('click', () => {
      search.value = '';
      renderCourses();
      search.focus();
    });

    renderCourses();
  }

  window.GESEL_CURSOS = Object.freeze({ initCursos });
})();
