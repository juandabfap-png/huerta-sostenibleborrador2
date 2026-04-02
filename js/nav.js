// nav.js — inserta la barra de navegación común
// Incluir con:  ANTES de main.js
const NAV_HTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">🌿 Huerta Medicinal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="comunidad.html">Comunidad</a></li>
        <li class="nav-item"><a class="nav-link" href="problematicas.html">Problemáticas</a></li>
        <li class="nav-item"><a class="nav-link" href="justificacion.html">Justificación</a></li>
        <li class="nav-item"><a class="nav-link" href="plan-trabajo.html">Plan de Trabajo</a></li>
        <li class="nav-item"><a class="nav-link" href="sostenibilidad.html">Sostenibilidad</a></li>
        <li class="nav-item"><a class="nav-link" href="#actividades">Actividades</a></li>
        <li class="nav-item"><a class="nav-link" href="#bibliografia">Bibliografía</a></li>
      </ul>
    </div>
  </div>
</nav>
`;
document.getElementById('navbar-placeholder').innerHTML = NAV_HTML;
