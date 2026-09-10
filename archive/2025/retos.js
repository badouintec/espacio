// JS extracted from retos.html (search + rendering)

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', (!expanded).toString());
    });
  }
  const searchInput = document.getElementById('challenge-search');
  const challengesGrid = document.getElementById('challenges-grid');
  const noResultsMessage = document.getElementById('no-results');
  const resultsCount = document.getElementById('results-count');
  const clearBtn = document.getElementById('clear-search');
  const diffButtons = Array.from(document.querySelectorAll('.diff-filter'));
  const resetFiltersBtn = document.getElementById('reset-filters');
  const sortSelect = document.getElementById('sort-select');
  const copyLinkBtn = document.getElementById('copy-link');
  let lastFilter = '';
  let debounceTimer = null;

  function createChallengeCard(challenge) {
    const difficultyTags = ["Principiante", "Intermedio", "Avanzado"].map(d => `<span class="difficulty-tag ${challenge.difficulties.includes(d) ? 'active' : ''} px-3 py-1 text-xs rounded-full">${d}</span>`).join('');
    const topicTags = challenge.topics.map(t => `<span class="topic-tag text-xs font-medium px-2 py-1 rounded">${t}</span>`).join('');
    return `<div class="challenge-card rounded-2xl overflow-hidden flex flex-col" data-keywords="${challenge.keywords}"><img src="${challenge.imgSrc}" alt="Reto ${challenge.title}" class="w-full h-48 object-cover" loading="lazy"><div class="p-6 flex flex-col flex-grow"><div><h3 class="text-xl font-bold text-white">${challenge.title}</h3><p class="text-sm text-slate-400 mt-1 mb-3">Nombre en inglés: <span class="italic">${challenge.englishTitle}</span></p></div><div class="mb-4"><p class="text-sm font-semibold text-slate-300 mb-2">Dificultad:</p><div class="flex flex-wrap gap-2">${difficultyTags}</div></div><p class="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">${challenge.description}</p><div class="mt-auto pt-4 border-t border-white/10"><p class="text-sm font-semibold text-slate-300 mb-2">Temas:</p><div class="flex flex-wrap gap-2">${topicTags}</div></div></div></div>`;
  }

  function escapeRegex(str){return str.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}

  function highlight(text, term){
    if(!term) return text;
    const re = new RegExp(`(${escapeRegex(term)})`,'ig');
    return text.replace(re,'<mark class="bg-space-lime-yellow/70 text-space-dark-blue font-semibold">$1</mark>');
  }

  function activeDiffs(){ return diffButtons.filter(b=>b.getAttribute('aria-pressed')==='true').map(b=>b.dataset.diff); }

  function sortChallenges(list){
    if(!sortSelect) return list;
    const mode = sortSelect.value;
    if(mode === 'titulo') return [...list].sort((a,b)=> a.title.localeCompare(b.title,'es',{sensitivity:'base'}));
    if(mode === 'dificultad') return [...list].sort((a,b)=> (a.difficulties.length - b.difficulties.length) || a.title.localeCompare(b.title,'es')); // simple proxy
    return list; // relevancia = orden original filtrado
  }

  function renderChallenges(filter = '') {
    challengesGrid.innerHTML = '';
    const term = filter.toLowerCase().trim();
    let matches = 0;
    const diffs = activeDiffs();
    const working = sortChallenges(CHALLENGES_DATA);
    working.forEach(ch => {
      const matchesTerm = !term || ch.keywords.toLowerCase().includes(term);
      const matchesDiff = !diffs.length || diffs.some(d=> ch.difficulties.includes(d));
      if (matchesTerm && matchesDiff) {
        const cardHTML = createChallengeCard(ch).replace(ch.title, highlight(ch.title, filter));
        challengesGrid.insertAdjacentHTML('beforeend', cardHTML);
        matches++;
      }
    });
    noResultsMessage.classList.toggle('hidden', matches > 0);
    if(resultsCount){
      resultsCount.textContent = matches === 0 ? 'Sin resultados' : `${matches} reto${matches!==1?'s':''} encontrados`;
    }
    // Update URL param
    const params = new URLSearchParams(window.location.search);
    filter ? params.set('q', filter) : params.delete('q');
    if (diffs.length) params.set('d', diffs.join(',')); else params.delete('d');
    const newUrl = window.location.pathname + (params.toString() ? `?${params}` : '');
    window.history.replaceState({}, '', newUrl);
    // Show/hide clear button
    if (clearBtn) clearBtn.classList.toggle('hidden', !filter);
  }

  if (searchInput) {
    renderChallenges();
    searchInput.addEventListener('input', e => {
      const val = e.target.value;
      if (val === lastFilter) return;
      lastFilter = val;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(()=>renderChallenges(val), 160);
    });
  if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value=''; lastFilter=''; renderChallenges(''); searchInput.focus();
      });
    }
    diffButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const pressed = btn.getAttribute('aria-pressed')==='true';
        btn.setAttribute('aria-pressed', (!pressed).toString());
        btn.classList.toggle('bg-space-lime-yellow/80', !pressed);
        btn.classList.toggle('text-space-dark-blue', !pressed);
        renderChallenges(searchInput.value);
      });
    });
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', () => {
        diffButtons.forEach(b=>{b.setAttribute('aria-pressed','false'); b.classList.remove('bg-space-lime-yellow/80','text-space-dark-blue');});
        renderChallenges(searchInput.value);
      });
    }
    if (sortSelect) {
      sortSelect.addEventListener('change', () => renderChallenges(searchInput.value));
    }
    if (copyLinkBtn) {
      copyLinkBtn.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(window.location.href); copyLinkBtn.textContent='✔'; setTimeout(()=>copyLinkBtn.textContent='🔗', 1500);} catch(e){ copyLinkBtn.textContent='✖'; }
      });
    }
    // Keyboard shortcut to focus search
    document.addEventListener('keydown', e => {
      if (e.key === '/' && document.activeElement !== searchInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault(); searchInput.focus();
      }
    });
    // Restore from URL params
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    const d = params.get('d');
    if (q) { searchInput.value = q; lastFilter = q; }
    if (d) {
      const wanted = d.split(',');
      diffButtons.forEach(b=>{ if (wanted.includes(b.dataset.diff)) { b.setAttribute('aria-pressed','true'); b.classList.add('bg-space-lime-yellow/80','text-space-dark-blue'); }});
    }
  renderChallenges(searchInput.value);
  }
});
