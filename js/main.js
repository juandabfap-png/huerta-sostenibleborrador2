// ── Marca el enlace activo en la barra de navegación ──
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navbar nav a');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // ── Tabs de problemáticas ──────────────────────────
  initProbTabs();

  // ── Tabs de escalas dentro de cada problemática ───
  initEscalaTabs();
});

function initProbTabs() {
  const btns = document.querySelectorAll('.prob-btn');
  const panels = document.querySelectorAll('.prob-panel');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('activo'));
      panels.forEach(p => p.classList.remove('visible'));
      btn.classList.add('activo');
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('visible');
    });
  });

  // Activar primera por defecto
  btns[0].click();
}

function initEscalaTabs() {
  const groups = document.querySelectorAll('.escala-grupo');
  groups.forEach(group => {
    const tabs = group.querySelectorAll('.escala-tab');
    const contents = group.querySelectorAll('.escala-content');
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('activo'));
        contents.forEach(c => c.classList.remove('visible'));
        tab.classList.add('activo');
        const target = group.querySelector('#' + tab.dataset.target);
        if (target) target.classList.add('visible');
      });
    });

    // Activar primera pestaña por defecto
    tabs[0].click();
  });
}
