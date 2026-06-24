# Diplomado: Introducción a la Ciencia de Datos

**Herramientas para el Aprendizaje Automatizado en las Ciencias Sociales y Humanidades**  
Centro de Educación Continua — FES Acatlán, UNAM

> Sitio web estático publicado en GitHub Pages.

---

## Sitio en línea

🔗 [benjov.github.io/diplomado-cd-ia-acatlan](https://benjov.github.io/diplomado-cd-ia-acatlan/)

---

## Acerca del diplomado

Programa de formación continua que lleva la ciencia de datos y el aprendizaje automatizado a profesionales de las ciencias sociales y humanidades. 8ª generación, 240 horas, modalidad en línea, sin requisitos técnicos previos.

- **Institución:** FES Acatlán, UNAM — Centro de Educación Continua (CEC)
- **Modalidad:** 100 % en línea · Viernes 18:00–21:30 h / Sábado 09:00–13:30 h
- **Inscripciones:** [educacioncontinua.acatlan.unam.mx](https://educacioncontinua.acatlan.unam.mx/?portfolio=introduccion-a-la-ciencia-de-datos-herramientas-para-el-aprendizaje-automatizado-en-las-ciencias-sociales-y-humanidades)

---

## Estructura del repositorio

```
diplomado-cd-ia-acatlan/
├── index.html          # Página principal (one-page)
├── css/
│   └── style.css       # Estilos — mobile-first, CSS custom properties
├── js/
│   └── main.js         # Interactividad: navbar, acordeón, animaciones
├── assets/
│   ├── img/
│   │   ├── ponentes/   # Fotos de ponentes (por agregar)
│   │   └── proyectos/  # Capturas de proyectos (por agregar)
│   └── fonts/
├── ponentes/           # Página de perfiles individuales (fase 2)
└── proyectos/          # Galería de proyectos por generación (fase 2)
```

**Stack:** HTML5 · CSS3 · JavaScript vanilla — sin frameworks, sin build steps.

---

## Desarrollo local

```bash
# Python (sin instalación adicional)
python3 -m http.server 8000
# → http://localhost:8000
```

```bash
# Node.js
npx serve .
```

```bash
# Con live-reload
npx browser-sync start --server --files "**/*"
```

---

## Publicar en GitHub Pages

1. Ir a **Settings → Pages** en este repositorio
2. Source: **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)`
4. Guardar — el sitio estará disponible en ~2 minutos

Para dominio personalizado: agregar un archivo `CNAME` en la raíz con el dominio deseado.

---

## Contenido pendiente de completar

| Sección | Estado |
|---------|--------|
| Bios de ponentes | Borrador — pendiente validación con cada ponente |
| Fotos de ponentes | Avatares por iniciales — pendiente fotos reales |
| Proyectos de egresados | 1 real + 2 placeholders — pendiente más proyectos |
| Testimonios | Placeholders — pendiente validación con egresados |
| Fecha inicio 9ª generación | Por confirmar |

---

## Cómo contribuir

Este repositorio es mantenido por el equipo de ponentes del diplomado. Para sugerir cambios:

1. Abrir un **Issue** describiendo el cambio propuesto
2. O bien, hacer un **Pull Request** con la modificación directamente

Para actualizar bios, fotos o agregar proyectos de egresados, contactar al coordinador académico.

---

*Diplomado CD-IA · FES Acatlán, UNAM · Centro de Educación Continua*
