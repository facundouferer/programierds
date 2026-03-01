# Programierds

Academia de programacion con contenido gratuito, enfoque practico y cero aburrimiento.

## Por que existe este proyecto

En la era de la inteligencia artificial, aprender a programar no perdio relevancia: se volvio mas importante que nunca. Herramientas como ChatGPT, Copilot o Claude pueden escribir codigo, pero **si no entendes los fundamentos, no sabes que pedirle a la IA, no podes evaluar si lo que te devuelve esta bien, y mucho menos depurarlo cuando falla**.

Programierds nace para ensenar los fundamentos de la programacion de forma clara y directa. No se trata de seguir tutoriales sin pensar, sino de entender los conceptos que te permiten dirigir a la IA como una herramienta, no depender de ella como una muleta.

**Somos Tony Stark, la IA es Jarvis.** Nosotros dirigimos, ella ejecuta. Pero para dirigir, hay que saber.

## Tecnologias

| Tecnologia | Version | Uso |
|---|---|---|
| [Astro](https://astro.build) | 5.x | Framework web, SSG, Content Collections |
| [TypeScript](https://www.typescriptlang.org) | strict | Tipado estatico en todo el proyecto |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Styling utility-first con dark mode |
| [Vitest](https://vitest.dev) | 4.x | Testing unitario |
| [Zod](https://zod.dev) | via Astro | Validacion de schemas en Content Collections |

### Plugins de Tailwind

- `@tailwindcss/typography` — clases `prose` para renderizado de Markdown
- `@tailwindcss/forms` — estilos base para formularios

### Fuentes

- **Space Grotesk** — tipografia principal (`@fontsource/space-grotesk`)
- **Fira Code** — tipografia monospace para bloques de codigo (`@fontsource/fira-code`)

## Arquitectura

```
src/
├── components/          # Componentes Astro (Header, Footer, Icon)
├── content/
│   └── courses/         # Content Collections (cursos)
│       ├── java/        # Curso de Java
│       │   ├── index.md         # Metadata (description, technology, difficulty)
│       │   ├── 01-introduccion.md
│       │   ├── 02-sintaxis-basica.md
│       │   ├── 03-poo.md
│       │   └── logo.svg
│       └── javascript/  # Curso de JavaScript
│           ├── index.md
│           ├── 01-introduccion.md
│           ├── 02-sintaxis-basica.md
│           ├── 03-dom.md
│           └── logo.svg
├── content.config.ts    # Definicion de collections (courses, chapters)
├── layouts/
│   └── Layout.astro     # Layout base con fonts y meta tags
├── pages/
│   ├── index.astro      # Landing principal
│   ├── cursos.astro     # Listado de cursos (lee de Content Collections)
│   ├── cursos/
│   │   └── [course]/
│   │       ├── index.astro    # Detalle del curso con lista de lecciones
│   │       └── [lesson].astro # Leccion individual con Markdown renderizado
│   └── playground.astro # Editor de codigo en el navegador
├── styles/
│   └── global.css       # Tailwind directives + estilos de lecciones
└── templates/           # Mockups HTML (specs visuales, no se buildean)
```

## Como agregar un curso nuevo

1. Crear una carpeta en `src/content/courses/` con el nombre del curso (ej: `python/`)
2. Agregar `index.md` con el frontmatter requerido:

```yaml
---
description: "Descripcion del curso (max 120 caracteres)"
technology: "Python"
difficulty: "Beginner"  # Beginner | Intermediate | Advanced
---
```

3. Agregar lecciones como archivos Markdown numerados:

```yaml
---
title: "Titulo de la leccion"
---

# Titulo de la leccion

Contenido en Markdown...
```

4. Agregar un `logo.svg` para el icono del curso
5. Registrar el icono en `src/components/Icon.astro` con el nombre en minuscula de la technology

Las paginas se generan automaticamente. No hay que tocar rutas ni configuracion.

## Comandos

```bash
npm run dev          # Servidor de desarrollo (localhost:4321)
npm run build        # Build de produccion -> ./dist/
npm run preview      # Preview del build de produccion
npm run test         # Tests con Vitest (single run)
npm run test:watch   # Tests con Vitest (watch mode)
```

## Deploy

El sitio se despliega automaticamente a GitHub Pages cuando se hace push a la rama `main`. El desarrollo se hace en la rama `desarrollo` y se mergea a `main` via Pull Request.

## Autor

**Facundo Uferer** — Senior Full Stack Engineer | AI-Driven Architect | Tech Lead

- [LinkedIn](https://www.linkedin.com/in/facundouferer)
- [GitHub](https://github.com/facundouferer)
- [Web](https://facundouferer.ar)
