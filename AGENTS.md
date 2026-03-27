# AGENTS.md - Agent Guidelines for Programierds

## Project Overview

- **Framework**: Astro 5.x with Tailwind CSS 3.x
- **Language**: TypeScript (strict mode)
- **Package Manager**: npm
- **Target**: Static site deployment to GitHub Pages
- **URL de produccion**: https://facundouferer.github.io/programierds
- **Custom Fonts**: Space Grotesk (`@fontsource/space-grotesk`), Fira Code (`@fontsource/fira-code`)

## Build Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI
npm run astro -- [command]

# TypeScript + Astro validation (mandatory before "done")
npm run astro check

# Run unit tests (single run)
npm run test

# Run unit tests (watch mode)
npm run test:watch
```

## Testing & TDD (Mandatory)

Este proyecto sigue estrictamente **Test Driven Development (TDD)** y validacion de tipos. Una tarea se considera completa **unicamente** cuando se ha seguido este circuito:

1. **Test Primero**: Desarrollar un test que falle (Rojo) *antes* de cualquier implementacion.
2. **Implementacion**: Realizar el codigo minimo para que el test pase (Verde).
3. **Validacion**: Ejecutar `npm run astro check` para asegurar la integridad de Astro y TypeScript.
4. **Verificacion Total**: Correr `npm run test` para asegurar que no hay regresiones.

### Donde van los tests unitarios

Los tests unitarios de **logica pura** (funciones utilitarias) viven en `src/utils/`:

| Modulo | Tests |
|---|---|
| `src/utils/tests.ts` | `src/utils/tests.test.ts` |
| `src/utils/paths.ts` | `src/utils/paths.test.ts` (crear si hace falta) |

**Regla**: solo se testea logica pura con Vitest. Los componentes `.astro` NO se testean con Vitest — se validan con `astro check`.

### Estructura de un test unitario

```ts
import { describe, expect, it } from 'vitest';
import { miFuncion } from './miModulo';

describe('miFuncion', () => {
  it('debe retornar X si recibe Y', () => {
    expect(miFuncion(entrada)).toBe(salidaEsperada);
  });

  it('debe lanzar error si el slug esta duplicado', () => {
    expect(() => miFuncion(entradaInvalida)).toThrow(/mensaje esperado/i);
  });
});
```

### Ejemplo real (de `tests.test.ts`)

```ts
describe('gradeTest', () => {
  it('calcula aciertos, errores, sin responder y porcentaje', () => {
    const result = gradeTest(sampleQuestions, { q1: 1, q2: 2 });

    expect(result.totalQuestions).toBe(3);
    expect(result.correctCount).toBe(1);
    expect(result.incorrectCount).toBe(1);
    expect(result.unansweredCount).toBe(1);
    expect(result.scorePercentage).toBe(33);
  });
});
```

## Project Structure

```
programierds/
├── src/
│   ├── assets/              # Assets (SVGs, images)
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Icon.astro       # Icon system: name-based SVG map
│   │   ├── Icons.astro      # SVG sprite sheet
│   │   ├── Welcome.astro
│   │   └── test/
│   │       └── TestRunner.astro  # Interactive quiz engine
│   ├── content/
│   │   ├── courses/         # Source of truth for courses/lessons
│   │   │   ├── c/
│   │   │   ├── git/
│   │   │   ├── java/
│   │   │   └── javascript/
│   │   └── tests/           # Quiz definitions (Markdown + Zod)
│   │       ├── fundamentos-javascript.md
│   │       ├── tipos-de-datos.md
│   │       └── ...
│   ├── content.config.ts    # Zod schemas for all collections
│   ├── layouts/
│   │   └── Layout.astro     # Base layout: fonts, meta, dark mode
│   ├── pages/
│   │   ├── index.astro      # Landing
│   │   ├── cursos.astro     # Course listing
│   │   ├── 404.astro        # Custom 404
│   │   ├── playground.astro # CodeMirror 6 code editor
│   │   ├── cursos/[course]/
│   │   │   ├── index.astro        # Course detail + lesson list
│   │   │   └── [lesson].astro     # Individual lesson (Markdown)
│   │   ├── presentaciones/        # Interactive slides for classes
│   │   │   ├── index.astro
│   │   │   └── *.astro
│   │   └── test/                  # Quiz section
│   │       ├── index.astro        # Quiz listing
│   │       └── [slug].astro       # Individual quiz
│   ├── styles/
│   │   └── global.css       # Tailwind directives + global styles
│   ├── templates/           # HTML mockups (design reference only, NOT built)
│   └── utils/
│       ├── paths.ts          # getRelativePath (mandatory for GitHub Pages)
│       ├── tests.ts          # Pure quiz logic (types, grading, formatting)
│       └── tests.test.ts     # Vitest tests for tests.ts
├── public/                  # Static files (favicons, images)
├── docs/                    # Project documentation
├── astro.config.mjs         # Astro config (site, base: '/programierds')
├── tailwind.config.mjs      # Tailwind config with custom tokens
└── tsconfig.json            # TypeScript strict config
```

## Content Collections

Definidas y validadas con Zod en `src/content.config.ts`:

| Collection | Patron de archivos | Campos requeridos |
|---|---|---|
| `courses` | `courses/**/index.md` | `description` (max 120), `technology`, `difficulty` |
| `chapters` | `courses/**/*.md` (sin index) | `title` |
| `tests` | `tests/**/*.md` | `title`, `description` (max 180), `slug`, `category`, `questions[]` |

### Schema de questions (dentro de `tests`)

```yaml
questions:
  - id: "q1"               # string unico dentro del test
    prompt: "¿Pregunta?"   # enunciado
    code: |                # snippet (opcional)
      const x = 1;
    language: "js"         # lenguaje del snippet (opcional)
    options:               # minimo 2 opciones
      - "Opcion A"
      - "Opcion B"
    correctAnswer: 0       # indice 0-based de la respuesta correcta
    explanation: "..."     # explicacion (opcional)
```

## Code Style Guidelines

### General Principles

- Use **Astro components** (.astro) for static UI.
- **TDD Obligatorio**: No se inicia ninguna implementacion sin su respectivo test (para logica pura).
- **Rutas Relativas**: Usar SIEMPRE `getRelativePath` de `src/utils/paths.ts` para links internos y assets.
- Keep components **small and focused**.
- Use **semantic HTML** elements.

### TypeScript

Strict mode siempre. Definir Props interfaces en componentes Astro:

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = '' } = Astro.props;
---
```

### Imports

```astro
---
import Layout from '../layouts/Layout.astro';
import Icon from '../components/Icon.astro';
import { getRelativePath } from '../utils/paths';
---
```

### Naming Conventions

| Element | Convention | Example |
|---|---|---|
| Components | PascalCase | `Icon.astro`, `TestRunner.astro` |
| Props interfaces | PascalCase + Props suffix | `IconProps` |
| Variables | camelCase | `const isActive = true` |
| CSS classes | kebab-case / Tailwind tokens | `bg-primary`, `font-display` |

### Tailwind CSS

Custom tokens definidos en `tailwind.config.mjs`:

```js
colors: {
  primary: '#0df259',           // Accent green
  'background-light': '#f5f8f6',
  'background-dark': '#102216',
  'accent-blue': '#3b82f6',
  'accent-brown': '#78350f',
  'editor-bg': '#0d1b11',
  'terminal-bg': '#050a06',
},
fontFamily: {
  display: ['Space Grotesk', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
},
```

Dark mode via `darkMode: 'class'`. El `<html>` lleva `class="dark"` por defecto.

### Accessibility

- Always include **alt text** for images.
- Use **semantic HTML** (header, main, footer, nav, section).
- Ensure **color contrast** meets WCAG AA standards.
- Use **ARIA labels** for icon-only buttons.

## Git Workflow

- Conventional Commits: `feat:`, `fix:`, `ci:`, `docs:`, `refactor:`
- **NUNCA** agregar "Co-Authored-By" ni atribucion de AI a los commits.
- **Rama de desarrollo**: todos los cambios van a `desarrollo`.
- **Integracion con main**: PR desde `desarrollo` a `main` al final del dia.
- **Deploy automatico** via GitHub Actions al pushear a `main`.

## Adding New Dependencies

```bash
npm install package-name        # production
npm install -D package-name     # devDependency
```

## Common Patterns

### Agregar un curso nuevo

1. Crear carpeta `src/content/courses/[nombre]/`
2. Agregar `index.md` con frontmatter `description`, `technology`, `difficulty`
3. Agregar lecciones numeradas: `01-intro.md`, `02-tema.md`, etc. (con `title` en frontmatter)
4. Agregar `logo.svg`
5. Registrar el icono en `src/components/Icon.astro` (clave = technology en lowercase)

### Agregar un quiz nuevo

1. Crear `src/content/tests/[slug].md`
2. Completar el frontmatter con `title`, `description`, `slug`, `category`, `questions[]`
3. El `slug` **debe ser unico** — se valida en runtime con `assertUniqueTestSlugs()`
4. El quiz queda disponible en `/test/[slug]` automaticamente

### Agregar una presentacion nueva

1. Crear `src/pages/presentaciones/[nombre].astro`
2. Registrar el link en `src/pages/presentaciones/index.astro`

### Crear un nuevo componente

```astro
---
interface Props {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const { name, size = 'md' } = Astro.props;
---

<div class={...}>
  <!-- contenido -->
</div>
```

---

**Ultima actualizacion**: 2026-03-27
**Rama de Desarrollo**: `desarrollo`
**Rama Principal**: `main`
**Deploy URL**: https://facundouferer.github.io/programierds
