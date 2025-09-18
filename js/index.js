// Extracted JS from index.html
// Handles Three.js hero animation, navigation, FAQ, mentor modal & dynamic LinkedIn footer

document.addEventListener('DOMContentLoaded', function () {
  // --- Three.js Animation Setup ---
  const container = document.getElementById('inicio');
  if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('hero-canvas'), alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);

    const earthGeometry = new THREE.SphereGeometry(1.8, 24, 24);
    const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0052CC, wireframe: true, transparent: true, opacity: 0.15 });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  // Centrado detrás del texto del hero (antes estaba desplazado a 2.5 a la derecha)
  earth.position.x = 0;
    scene.add(earth);

    const particles = [];
    const particleCount = 300;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const vertex = new THREE.Vector3((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30);
      positions[i3] = vertex.x; positions[i3 + 1] = vertex.y; positions[i3 + 2] = vertex.z; particles.push(vertex);
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0xDFFF00, size: 0.05, transparent: true, opacity: 0.7 });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial); scene.add(particleSystem);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xDFFF00, transparent: true, opacity: 0.08 });
    const lineGeometry = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial); scene.add(lines);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); scene.add(ambientLight);
    camera.position.z = 8;

    let animationActive = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const maxConnectionsPerFrame = 800; // performance cap

    function animate() {
      if (!animationActive || prefersReducedMotion) return; // stop loop if inactive
      requestAnimationFrame(animate);
      earth.rotation.y += 0.001;
      particleSystem.rotation.y += 0.0003;
      const linePositions = [];
      const connectionDistance = 3;
      let connections = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          if (connections > maxConnectionsPerFrame) break;
          const p1 = particles[i]; const p2 = particles[j];
          if (p1.distanceTo(p2) < connectionDistance) {
            linePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
            connections++;
          }
        }
        if (connections > maxConnectionsPerFrame) break;
      }
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      if (lines.geometry.attributes.position) lines.geometry.attributes.position.needsUpdate = true;
      lines.rotation.copy(particleSystem.rotation);
      renderer.render(scene, camera);
    }
    if (!prefersReducedMotion) animate();

    // Pause animation when tab not visible
    document.addEventListener('visibilitychange', () => {
      animationActive = !document.hidden;
      if (animationActive && !prefersReducedMotion) requestAnimationFrame(animate);
    });

    window.addEventListener('resize', () => {
      const width = container.offsetWidth; const height = container.offsetHeight;
      camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height);
    });
  }

  // --- Mobile menu ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.setAttribute('aria-expanded','false');
    mobileMenuButton.addEventListener('click', () => { 
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden'); 
    });
    document.querySelectorAll('#mobile-menu a').forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = question?.lastElementChild; // direct arrow span
    if (!question || !answer || !icon) return;

    icon.textContent = '▼';

    function collapseAll() {
      document.querySelectorAll('.faq-question').forEach(q => {
        q.setAttribute('aria-expanded','false');
        const arrow = q.lastElementChild;
        if (arrow) arrow.textContent = '▼';
      });
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
    }

    question.addEventListener('click', () => {
      const expanded = question.getAttribute('aria-expanded') === 'true';
      collapseAll();
      if (!expanded) {
        question.setAttribute('aria-expanded','true');
        answer.classList.remove('hidden');
        icon.textContent = '▲';
      }
    });

    question.addEventListener('keydown', e => {
      if (['Enter',' '].includes(e.key)) { e.preventDefault(); question.click(); }
    });
  });

  // --- Smooth Scroll (anchor) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // --- Mentor LinkedIn & Modal ---
  const mentorLinkedIn = {
    'Edgar León': {
      url: 'https://www.linkedin.com/in/edgar-león-sandoval-ph-d-60b36621/?originalSubdomain=mx',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQERFCiotlgQXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516937870769?e=1759363200&v=beta&t=1WLkaZwcvN_ITyEBpog2QoKAOb3A8GfR9pAjO67wWYA',
      title: 'IA / Deep Learning',
      schedule: 'Sábado 4 de octubre · 10:00 a.m. – 12:00 p.m. (Hackathón)'
    }
  };

  function buildLinkedInIcon(classes = 'w-4 h-4') {
    return `<svg class="${classes}" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-.95 1.82-1.96 3.75-1.96 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.18c0-1.24-.02-2.84-1.73-2.84-1.74 0-2.01 1.36-2.01 2.75V21H9z"/></svg>`;
  }
  function getInitials(name) { return name.split(/\s+/).map(p => p[0]).slice(0, 2).join('').toUpperCase(); }
  let lastFocusedElement = null;
  function trapFocus(modal) {
    const focusable = modal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0]; const last = focusable[focusable.length - 1];
    modal.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }
  function openMentorModal(name) {
    const info = mentorLinkedIn[name];
    const fallbackInitials = getInitials(name);
    const img = info?.image || `https://placehold.co/400x400/0B3D91/DFFF00?text=${encodeURIComponent(fallbackInitials)}`;
    const roleGuess = info?.title || 'Mentor(a)';
    const content = document.getElementById('mentor-modal-content');
    const schedule = info?.schedule || 'Horario por confirmar';
    content.innerHTML = `<div class="text-center"><img src="${img}" alt="Foto de ${name}" class="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-lg ring-4 ring-space-vibrant-blue/30" loading="lazy" /><h3 id="mentor-modal-title" class="text-2xl font-bold text-slate-800 mb-1">${name}</h3><p id="mentor-modal-desc" class="text-sm text-space-vibrant-blue font-semibold mb-4">${roleGuess}</p>${info?.url ? `<a href="${info.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-space-vibrant-blue text-white font-semibold hover:bg-space-dark-blue transition">${buildLinkedInIcon('w-5 h-5')} <span>Ver LinkedIn</span></a>` : `<button disabled class="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-slate-300 text-slate-600 font-semibold cursor-not-allowed">${buildLinkedInIcon('w-5 h-5')} <span>LinkedIn</span></button>`}<div class="mt-5 text-left bg-slate-50 rounded-md p-4 border border-slate-200"><h4 class="text-xs font-bold tracking-wide text-slate-500 uppercase mb-1">Horario disponible mentorías</h4><p class="text-sm text-slate-700">${schedule}</p></div></div>`;
    const modal = document.getElementById('mentor-modal');
    lastFocusedElement = document.activeElement;
    modal.classList.remove('hidden'); modal.classList.add('flex'); document.body.classList.add('overflow-hidden');
    const focusTarget = modal.querySelector('a,button');
    if (focusTarget) focusTarget.focus();
    trapFocus(modal);
  }
  function closeMentorModal() {
    const modal = document.getElementById('mentor-modal');
    modal.classList.add('hidden'); modal.classList.remove('flex'); document.body.classList.remove('overflow-hidden');
    if (lastFocusedElement) lastFocusedElement.focus();
  }
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeMentorModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMentorModal(); });

  document.querySelectorAll('.team-card').forEach(card => {
    const nameEl = card.querySelector('h3'); if (!nameEl) return;
    const name = nameEl.textContent.trim();
    const footer = document.createElement('div');
    footer.className = 'mt-4 pt-4 border-t border-slate-200 flex items-center justify-between';
    const link = document.createElement('a');
    const info = mentorLinkedIn[name];
    if (info?.url) {
      link.href = info.url; link.target = '_blank'; link.rel = 'noopener';
      link.className = 'inline-flex items-center gap-2 text-space-vibrant-blue font-semibold text-sm hover:underline';
      link.innerHTML = buildLinkedInIcon() + '<span>LinkedIn</span>';
    } else {
      link.href = '#'; link.setAttribute('aria-disabled','true');
      link.className = 'inline-flex items-center gap-2 text-space-vibrant-blue font-semibold text-sm';
      link.innerHTML = buildLinkedInIcon() + '<span>LinkedIn</span>';
      link.addEventListener('click', e => e.preventDefault());
    }
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'text-xs font-medium text-slate-500 hover:text-space-dark-blue transition';
    btn.textContent = 'Ver más'; btn.addEventListener('click', () => openMentorModal(name));
    footer.appendChild(link); footer.appendChild(btn);
    const paragraphs = card.querySelectorAll('p');
    if (paragraphs.length) { paragraphs[paragraphs.length - 1].after(footer); } else { card.querySelector('.p-6').appendChild(footer); }
  });

  // --- Mostrar todos los mentores (migrado desde inline) ---
  const showAllBtn = document.getElementById('show-all-mentors');
  const teamGrid = document.getElementById('team-grid');
  if (showAllBtn && teamGrid) {
    showAllBtn.setAttribute('aria-expanded','false');
    showAllBtn.setAttribute('aria-controls','team-grid');
    showAllBtn.addEventListener('click', () => {
      Array.from(teamGrid.children).forEach(card => { card.style.display = 'block'; });
      teamGrid.classList.remove('grid-cols-1','sm:grid-cols-2','md:grid-cols-3','lg:grid-cols-4','xl:grid-cols-5');
      teamGrid.classList.add('grid-cols-1','sm:grid-cols-2','lg:grid-cols-4');
      showAllBtn.setAttribute('aria-expanded','true');
      showAllBtn.classList.add('opacity-0','pointer-events-none');
      setTimeout(()=> showAllBtn.remove(),400);
    });
  }
});
