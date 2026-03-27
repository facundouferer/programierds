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
| [Vitest](https://vitest.dev) | 4.x | Testing unitario de funciones de utilidad |
| [CodeMirror 6](https://codemirror.net/) | 6.x | Editor de codigo en el Playground |
| [Zod](https://zod.dev) | via Astro | Validacion de schemas en Content Collections |

### Plugins de Tailwind

- `@tailwindcss/typography` — clases `prose` para renderizado de Markdown
- `@tailwindcss/forms` — estilos base para formularios

### Fuentes

- **Space Grotesk** — tipografia principal (`@fontsource/space-grotesk`)
- **Fira Code** — tipografia monospace para bloques de codigo (`@fontsource/fira-code`)

### Colores personalizados

| Token | Valor | Uso |
|---|---|---|
| `primary` | `#0df259` | Verde acento |
| `background-dark` | `#102216` | Fondo oscuro |
| `background-light` | `#f5f8f6` | Fondo claro |
| `accent-blue` | `#3b82f6` | Acentos azules |
| `accent-brown` | `#78350f` | Acentos marrones |
| `editor-bg` | `#0d1b11` | Fondo del editor de codigo |
| `terminal-bg` | `#050a06` | Fondo de la terminal |

## Arquitectura

```
programierds/
├── src/
│   ├── assets/              # Assets estaticos (SVGs, imagenes)
│   ├── components/          # Componentes Astro reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Icon.astro       # Sistema de iconos SVG por nombre
│   │   ├── Icons.astro      # Sprite sheet de iconos
│   │   ├── Welcome.astro    # Componente de bienvenida
│   │   └── test/
│   │       └── TestRunner.astro  # Motor de quizzes interactivos
│   ├── content/
│   │   ├── courses/         # Fuente de verdad de cursos y lecciones
│   │   │   ├── c/           # Curso de C
│   │   │   ├── git/         # Curso de Git
│   │   │   ├── java/        # Curso de Java
│   │   │   └── javascript/  # Curso de JavaScript
│   │   │       ├── index.md         # Metadata del curso
│   │   │       ├── 01-introduccion.md
│   │   │       └── logo.svg
│   │   └── tests/           # Quizzes de evaluacion (Markdown + Zod)
│   │       ├── fundamentos-javascript.md
│   │       ├── tipos-de-datos.md
│   │       └── ...
│   ├── content.config.ts    # Schemas Zod de collections (courses, chapters, tests)
│   ├── layouts/
│   │   └── Layout.astro     # Layout base: fonts, meta tags, dark mode
│   ├── pages/
│   │   ├── index.astro      # Landing principal
│   │   ├── cursos.astro     # Listado de cursos
│   │   ├── 404.astro        # Pagina de error personalizada
│   │   ├── playground.astro # Editor de codigo en el navegador (CodeMirror 6)
│   │   ├── cursos/
│   │   │   └── [course]/
│   │   │       ├── index.astro    # Detalle del curso con lista de lecciones
│   │   │       └── [lesson].astro # Leccion individual con Markdown renderizado
│   │   ├── presentaciones/  # Slides interactivas para clases
│   │   │   ├── index.astro
│   │   │   ├── variables_y_constantes.astro
│   │   │   ├── tipos_de_datos_en_javascript.astro
│   │   │   ├── paso_por_valor_y_referencia.astro
│   │   │   ├── modularidad_en_c.astro
│   │   │   └── funciones_y_procedimientos_java.astro
│   │   └── test/            # Seccion de quizzes/evaluaciones
│   │       ├── index.astro  # Listado de tests disponibles
│   │       └── [slug].astro # Quiz individual interactivo
│   ├── styles/
│   │   └── global.css       # Tailwind directives + estilos globales
│   ├── templates/           # Mockups HTML de referencia (no se buildean)
│   └── utils/
│       ├── paths.ts         # getRelativePath: obligatorio para GitHub Pages
│       ├── tests.ts         # Logica pura de quizzes (tipado, calculo, formato)
│       └── tests.test.ts    # Tests unitarios de tests.ts (Vitest)
├── public/                  # Assets estaticos (imagenes, favicons)
├── docs/                    # Documentacion del proyecto
├── astro.config.mjs         # Configuracion Astro (site, base path)
├── tailwind.config.mjs      # Configuracion Tailwind con tokens
├── tsconfig.json            # TypeScript strict mode
└── package.json
```

## Rutas del sitio

| Ruta | Descripcion |
|---|---|
| `/` | Landing principal |
| `/cursos` | Listado de todos los cursos |
| `/cursos/[course]` | Detalle del curso y lista de lecciones |
| `/cursos/[course]/[lesson]` | Leccion individual en Markdown |
| `/playground` | Editor de codigo interactivo |
| `/presentaciones` | Listado de presentaciones para clases |
| `/presentaciones/[nombre]` | Slide interactiva individual |
| `/test` | Listado de quizzes disponibles |
| `/test/[slug]` | Quiz interactivo individual |

## Content Collections (Content Config)

Definidas en `src/content.config.ts` con Zod:

| Collection | Patron | Campos obligatorios |
|---|---|---|
| `courses` | `courses/**/index.md` | `description`, `technology`, `difficulty` |
| `chapters` | `courses/**/*.md` (sin index) | `title` |
| `tests` | `tests/**/*.md` | `title`, `description`, `slug`, `category`, `questions[]` |

### Schema de un quiz (`tests`)

```yaml
---
title: "Fundamentos de JavaScript"
description: "Descripcion breve (max 180 chars)"
slug: "fundamentos-javascript"
category: "JavaScript"
difficulty: "beginner"      # beginner | intermediate | advanced (opcional)
timeEstimate: 10            # minutos (opcional)
questions:
  - id: "q1"
    prompt: "¿Cuanto es 2 + 2?"
    code: |                 # snippet de codigo (opcional)
      const x = 2 + 2;
    language: "js"          # lenguaje del snippet (opcional)
    options:
      - "3"
      - "4"
      - "5"
    correctAnswer: 1        # indice 0-based
    explanation: "2 + 2 = 4." # explicacion (opcional)
---

Contenido introductorio del quiz en Markdown (opcional).
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

## Como agregar un test/quiz nuevo

1. Crear un archivo `.md` en `src/content/tests/` (ej: `mi-quiz.md`)
2. El slug en el frontmatter debe ser unico — se valida en runtime
3. Usar el schema definido en `content.config.ts`
4. El quiz queda disponible automaticamente en `/test/[slug]`

## Tests unitarios (Vitest)

Los tests de logica pura viven en `src/utils/tests.test.ts` y cubren `src/utils/tests.ts`.

```bash
npm run test         # Corre todos los tests una vez
npm run test:watch   # Modo watch (desarrollo)
```

### Ciclo TDD obligatorio

Una tarea no esta completa hasta completar este circuito:

1. **Test primero** — escribir el test que falla (Rojo)
2. **Implementacion minima** — hacer que el test pase (Verde)
3. **Validacion estatica** — `npm run astro check` (TypeScript + Astro)
4. **Sin regresiones** — `npm run test` (todos los tests pasan)

## Comandos

```bash
npm run dev          # Servidor de desarrollo (localhost:4321)
npm run build        # Build de produccion -> ./dist/
npm run preview      # Preview del build de produccion
npm run astro check  # Validacion TypeScript y Astro
npm run test         # Tests con Vitest (single run)
npm run test:watch   # Tests con Vitest (watch mode)
```

## Deploy

El sitio se despliega automaticamente a GitHub Pages cuando se hace push a la rama `main`. El desarrollo se hace en la rama `desarrollo` y se mergea a `main` via Pull Request.

- **URL de produccion**: https://facundouferer.github.io/programierds

## Autor

**Facundo Uferer** — Senior Full Stack Engineer | AI-Driven Architect | Tech Lead

- [LinkedIn](https://www.linkedin.com/in/facundouferer)
- [GitHub](https://github.com/facundouferer)
- [Web](https://facundouferer.ar)
