# 🌿 Huerta Medicinal Casera — Sitio Web

Proyecto Social de Formación: **Líderes Sostenibles**  
Sitio web académico sobre huerta medicinal casera con plantas aromáticas y medicinales.

---

## 📂 Estructura de archivos

```
/
├── index.html          ← Página de inicio
├── comunidad.html      ← Comunidad participante
├── problematicas.html  ← Problemáticas sociales (contenido académico principal)
├── justificacion.html  ← Justificación del proyecto
├── plan-trabajo.html   ← Plan de trabajo (6 sesiones)
├── actividades.html    ← Actividades reflexivas
├── bibliografia.html   ← 31 referencias APA
├── css/
│   └── styles.css      ← Estilos de todo el sitio
└── js/
    ├── nav.js          ← Barra de navegación compartida
    └── main.js         ← Interactividad (tabs, menús)
```

---

## 🚀 Cómo subir a GitHub Pages

### Paso 1 — Crear el repositorio en GitHub
1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en **"New repository"**
3. Nombre sugerido: `huerta-medicinal` (o el que prefieras)
4. Márcalo como **Public**
5. Haz clic en **"Create repository"**

### Paso 2 — Subir los archivos
#### Opción A — Desde la web (más fácil):
1. En tu repositorio recién creado, haz clic en **"uploading an existing file"**
2. Arrastra **todos los archivos y carpetas** (`index.html`, `comunidad.html`, etc., y las carpetas `css/` y `js/`)
3. Haz clic en **"Commit changes"**

#### Opción B — Con Git (si tienes Git instalado):
```bash
git init
git add .
git commit -m "Primer commit: huerta medicinal"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/huerta-medicinal.git
git push -u origin main
```

### Paso 3 — Activar GitHub Pages
1. Ve a **Settings** (⚙️) en tu repositorio
2. En el menú lateral, haz clic en **Pages**
3. En **"Branch"**, selecciona `main` y la carpeta `/ (root)`
4. Haz clic en **Save**
5. ¡Espera 1-2 minutos y tu sitio estará en: `https://TU-USUARIO.github.io/huerta-medicinal/`

---

## ✏️ Cómo editar el contenido

### Editar las problemáticas (el archivo más importante)
Abre `problematicas.html` en cualquier editor de texto.  
Cada sección del análisis está claramente delimitada con comentarios:

```html
<!-- LOCAL -->
<div id="p1-local" class="escala-content">
  <!-- Edita el texto aquí -->
</div>

<!-- NACIONAL -->
<div id="p1-nacional" class="escala-content">
  <!-- Edita el texto aquí -->
</div>
```

### Editar la comunidad
En `comunidad.html` encontrarás comentarios `<!-- ✏️ EDITA AQUÍ -->` que marcan exactamente dónde personalizar la descripción de tu familia o grupo.

### Editar las plantas
En `index.html`, cada tarjeta de planta tiene esta estructura:
```html
<div class="card card-planta">
  <span class="emoji">🌿</span>
  <h3>Nombre de la planta</h3>
  <div><span class="tag tag-uso">Uso 1</span></div>
  <p>Preparación y dosis</p>
</div>
```
Puedes agregar, quitar o modificar plantas fácilmente.

### Cambiar colores
Abre `css/styles.css` y modifica las variables al inicio del archivo:
```css
:root {
  --verde-1: #1a4731;   /* Verde oscuro principal */
  --verde-2: #2d6a4f;   /* Verde medio */
  --dorado:  #c9901e;   /* Color dorado/caléndula */
  --crema:   #f7f3e8;   /* Fondo general */
}
```

---

## 🔄 Actualizar el sitio después de editar

Si editaste los archivos localmente, solo necesitas:
```bash
git add .
git commit -m "Actualización de contenido"
git push
```
GitHub Pages actualizará el sitio automáticamente en 1-2 minutos.

---

## 📋 Checklist antes de publicar

- [ ] Reemplazar el texto de la comunidad con información real de tu familia/grupo
- [ ] Verificar que los datos estadísticos en `problematicas.html` coincidan con las fuentes de tu curso
- [ ] Agregar o quitar plantas según corresponda
- [ ] Actualizar los indicadores numéricos en `index.html` si cambian
- [ ] Revisar la bibliografía en `bibliografia.html`

---

*Hecho con 🌿 para el Proyecto Social de Formación: Líderes Sostenibles · 2026*
