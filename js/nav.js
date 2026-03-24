// nav.js — inserta la barra de navegación común
// Incluir con: <script src="js/nav.js"></script> ANTES de main.js

const NAV_HTML = `
<div class="navbar">
  <a href="index.html" class="logo">🌿 Huerta Medicinal</a>
  <nav>
    <a href="index.html">Inicio</a>
    <a href="comunidad.html">Comunidad</a>
    <a href="problematicas.html">Problemáticas</a>
    <a href="justificacion.html">Justificación</a>
    <a href="plan-trabajo.html">Plan de Trabajo</a>
    <a href="actividades.html">Actividades</a>
    <a href="bibliografia.html">Bibliografía</a>
  </nav>
</div>`;

document.getElementById('navbar-placeholder').innerHTML = NAV_HTML;
