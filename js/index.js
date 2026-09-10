// Coloquio Internacional de Espacio y Sostenibilidad — sitio estático.
// Menú móvil, acordeón FAQ, activación de documentos y tarjetas de referencias (data/references.json → js/references.data.js).

document.addEventListener('DOMContentLoaded', () => {

  // --- Cabecera transparente sobre el hero, sólida al hacer scroll ---
  const header = document.querySelector('.nav-glass');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --- Ondas decorativas: puntos y líneas de contorno como en el cartel (canvas, dibujo estático) ---
  const mulberry = (a) => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const drawWaves = (canvas) => {
    const host = canvas.parentElement, w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
    const light = canvas.dataset.tone === 'light', mode = canvas.dataset.waves || 'dots';
    const lines = Number(canvas.dataset.lines || (mode === 'dots' ? 8 : 11)), rnd = mulberry(Number(canvas.dataset.seed || 7));
    const rgb = light ? '21,140,106' : '46,211,163';
    const top = Number(canvas.dataset.top || 0.3), spread = Number(canvas.dataset.spread || 0.75);
    for (let i = 0; i < lines; i++) {
      const t = lines > 1 ? i / (lines - 1) : 0, base = h * (top + spread * t);
      const a1 = 18 + rnd() * 26, a2 = 6 + rnd() * 12, k1 = 180 + rnd() * 160, k2 = 60 + rnd() * 60, p1 = rnd() * 6.28, p2 = rnd() * 6.28;
      const y = (x) => base + a1 * Math.sin(x / k1 + p1 + i * 0.35) + a2 * Math.sin(x / k2 + p2);
      const alpha = light ? 0.10 + 0.22 * t : 0.12 + 0.5 * t;
      if (mode === 'dots') {
        for (let x = 0; x <= w; x += 8) { ctx.fillStyle = `rgba(${rgb},${(alpha * (0.35 + 0.65 * rnd())).toFixed(3)})`; ctx.beginPath(); ctx.arc(x, y(x), 1.15, 0, 6.283); ctx.fill(); }
      } else {
        ctx.strokeStyle = `rgba(${rgb},${alpha.toFixed(3)})`; ctx.lineWidth = 0.9; ctx.beginPath();
        for (let x = 0; x <= w; x += 6) x === 0 ? ctx.moveTo(x, y(x)) : ctx.lineTo(x, y(x));
        ctx.stroke();
      }
    }
    // Las ondas nacen a la derecha, como en el cartel: desvanecer hacia la izquierda.
    const from = Number(canvas.dataset.fade || 0.15);
    const g = ctx.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(from, 'rgba(0,0,0,0)'); g.addColorStop(Math.min(1, from + 0.5), 'rgba(0,0,0,1)');
    ctx.globalCompositeOperation = 'destination-in'; ctx.fillStyle = g; ctx.fillRect(0, 0, w, h); ctx.globalCompositeOperation = 'source-over';
  };
  const canvases = [...document.querySelectorAll('canvas.waves')];
  if (canvases.length) {
    let raf = 0;
    const redraw = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => canvases.forEach(drawWaves)); };
    redraw();
    if ('ResizeObserver' in window) { const ro = new ResizeObserver(redraw); canvases.forEach(c => ro.observe(c.parentElement)); }
    else window.addEventListener('resize', redraw);
  }

  // --- Menú móvil ---
  const menuBtn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (menuBtn && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('hidden', !open);
      menu.classList.toggle('active', open);
      menuBtn.classList.toggle('active', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    menuBtn.addEventListener('click', () => setOpen(menuBtn.getAttribute('aria-expanded') !== 'true'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  // --- FAQ (acordeón accesible) ---
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const panel = item.querySelector('.faq-answer');
    if (!btn || !panel) return;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-item .faq-question[aria-expanded="true"]').forEach(other => {
        if (other !== btn) { other.setAttribute('aria-expanded', 'false'); other.closest('.faq-item').querySelector('.faq-answer').classList.add('hidden'); }
      });
      btn.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('hidden', open);
    });
  });

  // --- Documentos (Primera Circular / Carteles) ---
  // Añadir data-doc-url="docs/archivo.pdf" al contenedor .doc-card__action para convertir el botón "Próximamente" en enlace.
  document.querySelectorAll('.doc-card__action[data-doc-url]').forEach(el => {
    const url = el.dataset.docUrl;
    if (!url) return;
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.className = 'btn btn-primary';
    a.textContent = el.dataset.docLabel || 'Descargar';
    const meta = [/\.pdf(\?|$)/i.test(url) ? 'PDF' : '', el.dataset.docSize || ''].filter(Boolean).join(' · ');
    if (meta) a.insertAdjacentHTML('beforeend', ` <span class="btn__meta">${meta}</span>`);
    el.replaceChildren(a);
    const pill = el.closest('.doc-card')?.querySelector('.status-pill');
    if (pill) { pill.textContent = 'Disponible'; pill.classList.add('status-pill--live'); }
  });

  // --- Tarjetas de referencias ---
  const refs = Array.isArray(window.COLOQUIO_REFERENCES) ? window.COLOQUIO_REFERENCES : [];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const TAG_CLASS = { NASA: 'tag--nasa', Datos: 'tag--data', Gobierno: 'tag--gov', Universidad: 'tag--edu', Medio: 'tag--media', Archivo: 'tag--archive' };
  const EXT_ICON = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14 4h6m0 0v6m0-6L10 14M20 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h5"/></svg>';

  // Fallback local: SVG inline con iniciales de la institución (no depende de ningún recurso externo).
  const placeholder = (r) => {
    const initials = (r.publisher.match(/\b[A-ZÁÉÍÓÚ0-9]/g) || [r.publisher[0]]).slice(0, 3).join('');
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 180'><rect width='320' height='180' fill='#132542'/><circle cx='262' cy='36' r='72' fill='#22395a'/><circle cx='262' cy='36' r='40' fill='#2D89EF' opacity='.35'/><text x='24' y='112' font-family='system-ui,sans-serif' font-size='52' font-weight='700' fill='#F5B454'>${esc(initials)}</text><text x='24' y='148' font-family='system-ui,sans-serif' font-size='14' fill='#c9d3e0'>${esc(r.publisher.slice(0, 42))}</text></svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  };

  const select = (expr) => {
    const [kind, arg] = (expr || 'all').split(':');
    if (kind === 'home') return refs.filter(r => r.homeOrder && (arg === 'technical' ? r.category === 'technical' : r.category !== 'technical')).sort((a, b) => a.homeOrder - b.homeOrder);
    if (kind === 'group') return refs.filter(r => r.group === arg);
    if (kind === 'category') return refs.filter(r => r.category === arg);
    return refs;
  };

  const card = (r, style) => {
    const cls = style === 'overlay' ? 'ref-card ref-card--overlay' : 'ref-card';
    const tag = `<span class="tag ${TAG_CLASS[r.tag] || ''}">${esc(r.tag || r.category)}</span>`;
    const year = r.year ? `<span class="ref-card__year">${r.year}</span>` : '';
    const thumb = `<div class="ref-card__thumb"><img src="${esc(r.image || placeholder(r))}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer"></div>`;
    if (r.status === 'offline') {
      return `<div class="ref-card ref-card--offline" role="group" aria-label="${esc(r.title)} — referencia histórica, sitio fuera de servicio">
        ${thumb}
        <div class="ref-card__body">
          <div class="ref-card__meta">${tag}${year}</div>
          <p class="ref-card__publisher">${esc(r.publisher)}</p>
          <h3 class="ref-card__title">${esc(r.title)}</h3>
          <p class="ref-card__desc">${esc(r.description)}</p>
          <p class="ref-card__offline">Referencia histórica — sitio actualmente fuera de servicio<br><code>${esc(r.url)}</code></p>
        </div></div>`;
    }
    return `<a class="${cls}" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">
      ${thumb}
      <div class="ref-card__body">
        <div class="ref-card__meta">${tag}${year}</div>
        <p class="ref-card__publisher">${esc(r.publisher)}</p>
        <h3 class="ref-card__title">${esc(r.title)}</h3>
        <p class="ref-card__desc">${esc(r.description)}</p>
        <span class="ref-card__cta">Abrir fuente ${EXT_ICON}<span class="sr-only">(se abre en una pestaña nueva)</span></span>
      </div></a>`;
  };

  document.querySelectorAll('[data-refs]').forEach(host => {
    let items = select(host.dataset.refs);
    if (host.dataset.limit) items = items.slice(0, Number(host.dataset.limit));
    host.innerHTML = items.map(r => card(r, host.dataset.style)).join('');
    host.querySelectorAll('img').forEach(img => {
      const r = items[[...host.querySelectorAll('img')].indexOf(img)];
      img.addEventListener('error', () => { img.src = placeholder(r); }, { once: true });
    });
    if (!items.length) host.innerHTML = '<p class="text-coloquio-gray">No hay referencias disponibles.</p>';
  });
});
