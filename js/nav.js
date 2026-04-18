// nav.js — inserta la barra de navegación común
const NAV_HTML = `
<div class="navbar">
  <a class="logo" href="index.html">🌿 Huerta Medicinal</a>
  <nav>
    <a href="index.html">Inicio</a>
    <a href="comunidad.html">Comunidad</a>
    <a href="problematicas.html">Problemáticas</a>
    <a href="justificacion.html">Justificación</a>
    <a href="plan-trabajo.html">Plan de Trabajo</a>
    <a href="sostenibilidad.html">Sostenibilidad</a>
    <a href="actividades.html">Actividades</a>
    <a href="bibliografia.html">Bibliografía</a>
  </nav>
</div>
`;
document.getElementById('navbar-placeholder').innerHTML = NAV_HTML;

// Marcar enlace activo
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar nav a').forEach(a => {
  if (a.getAttribute('href') === currentPage) {
    a.classList.add('active');
  }
});
