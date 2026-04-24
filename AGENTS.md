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
│   │   ├── es/              # Spanish content (source of truth)
│   │   │   ├── courses/     # c, git, java, javascript
│   │   │   └── tests/       # quiz markdown files
│   │   └── en/              # English translations (falls back to es when missing)
│   │       ├── courses/
│   │       └── tests/
│   ├── content.config.ts    # Zod schemas — six collections (courses_es/en, chapters_es/en, tests_es/en)
│   ├── i18n/                # Bilingual system
│   │   ├── es.ts            # UI strings in Spanish (source of truth)
│   │   ├── en.ts            # UI strings in English
│   │   ├── types.ts         # Locale, LOCALES, DEFAULT_LOCALE, isLocale
│   │   ├── index.ts         # useTranslations, getLocaleFromPathname, withLocale, getAlternateLocale
│   │   └── i18n.test.ts
│   ├── layouts/
│   │   └── Layout.astro     # Base layout: fonts, meta, dark mode, <html lang>
│   ├── pages/
│   │   ├── index.astro      # Redirects to /es/
│   │   ├── 404.astro        # Custom 404 (detects locale from URL)
│   │   └── [lang]/          # EVERYTHING lives under /[lang]/
│   │       ├── index.astro  # Home
│   │       ├── playground.astro
│   │       ├── cursos/
│   │       │   ├── index.astro
│   │       │   └── [course]/
│   │       │       ├── index.astro
│   │       │       └── [lesson].astro
│   │       ├── presentaciones/
│   │       │   ├── index.astro
│   │       │   └── *.astro
│   │       └── test/
│   │           ├── index.astro
│   │           └── [slug].astro
│   ├── styles/
│   │   └── global.css       # Tailwind directives + global styles
│   ├── templates/           # HTML mockups (design reference only, NOT built)
│   └── utils/
│       ├── paths.ts          # getRelativePath, getLocalizedRelativePath
│       ├── paths.test.ts
│       ├── content.ts        # getCoursesForLocale, getChaptersForCourse, getTestsForLocale
│       ├── tests.ts
│       └── tests.test.ts
├── public/                  # Static files (favicons, images)
├── docs/                    # Project documentation
├── astro.config.mjs         # Astro config (site, base: '/programierds')
├── tailwind.config.mjs      # Tailwind config with custom tokens
└── tsconfig.json            # TypeScript strict config
```

## Sistema bilingue (i18n)

El sitio es **bilingue: espanol (`es`, default) e ingles (`en`)**. Todas las rutas tienen prefijo de locale: `/es/...` o `/en/...`. La raiz `/` redirecciona a `/es/`.

### Reglas obligatorias

- **Usar `getLocalizedRelativePath(lang, '/ruta')`** en lugar de `getRelativePath('/ruta')` para links internos en paginas bajo `[lang]`.
- **Leer el locale de `Astro.params.lang`** en paginas `[lang]`. En componentes compartidos (Header, Footer), usar `Astro.currentLocale` con fallback a `getLocaleFromPathname`.
- **No hardcodear strings de UI**: todas viven en `src/i18n/es.ts` con su pareja en `src/i18n/en.ts`. Se consumen via `useTranslations(lang)`.
- **No llamar `getCollection('courses_es')` directo en paginas** — siempre via los helpers de `src/utils/content.ts` (`getCoursesForLocale`, `getChaptersForCourse`, `getTestsForLocale`). Estos manejan el fallback automaticamente.
- **`getStaticPaths` en paginas `[lang]`**: iterar sobre `LOCALES` y generar un path por cada combinacion de `lang` y parametros dinamicos.

### Flujo para agregar una string de UI nueva

1. Agregar la clave en `src/i18n/es.ts` con el texto en espanol. El tipo `TranslationKey` se deriva automaticamente.
2. TypeScript te obliga a agregarla en `src/i18n/en.ts` con la traduccion.
3. Consumirla en el componente:

```astro
---
import { useTranslations, type Locale } from '../i18n';
const { lang } = Astro.params as { lang: Locale };
const t = useTranslations(lang);
---
<h1>{t('mi.clave')}</h1>
```

Si una clave esta en `es.ts` pero falta en `en.ts`, `useTranslations('en')` hace fallback a espanol sin romper.

### Flujo para traducir contenido (lecciones, tests)

**Estructura espejada**: `src/content/es/courses/c/03-x.md` tiene su traduccion en `src/content/en/courses/c/03-x.md` (mismo nombre de archivo).

1. Copiar el `.md` de `src/content/es/` a `src/content/en/` manteniendo la ruta relativa.
2. Traducir `title` (frontmatter) y el cuerpo en Markdown. Para tests: tambien `description`, `prompt`, `options`, `explanation`. El `slug` **se mantiene**.
3. Al buildear, la ruta `/en/cursos/c/03-x` renderiza la version traducida.
4. Si NO existe en `en/`, el fallback muestra la version en espanol con un banner "traduccion pendiente". Esto habilita traducir de forma incremental.

### Workflow operativo para agentes que continuan traducciones

Cuando el pedido sea “seguir traduciendo contenido faltante”, el agente debe trabajar asi:

1. **No asumir faltantes**: verificar en disco si el archivo `src/content/en/...` ya existe.
2. **Traducir por tandas coherentes**:
   - preferido: curso completo
   - aceptable: bloque consecutivo (`01-04`, `05-08`, etc.)
   - evitar: archivos sueltos mezclados entre cursos
3. **Mantener estructura espejada exacta**:
   - mismo nombre de archivo
   - misma carpeta relativa
   - mismo `slug` en tests
4. **Traducir solo el contenido**:
   - frontmatter textual
   - cuerpo Markdown
   - textos visibles dentro de ejemplos cuando aporte claridad
5. **No cambiar identificadores**:
   - no renombrar filenames
   - no crear slugs nuevos
   - no alterar `id` de preguntas
   - no cambiar `kind`, `questions`, `algorithm` ni schemas
6. **No tocar `src/content/es/...`** salvo que la tarea explicita sea corregir el original.
7. **Validar al cerrar cada tanda**:
   - `npm run astro check`
   - `npm run test`
8. **Si la traduccion no aparece en localhost** pero el archivo existe, sospechar primero de **dev server stale** y reiniciar `astro dev` antes de diagnosticar un bug en el contenido.

### Reglas de criterio para una IA traductora

- Priorizar **consistencia pedagogica** sobre traduccion palabra-por-palabra.
- Mantener el nivel tecnico y el tono del material original.
- Conservar snippets de codigo estables salvo strings literales que claramente forman parte de la explicacion.
- No usar `getCollection()` directo en paginas ni cambiar la estrategia de fallback.
- Si `/en/...` muestra contenido en espanol, verificar si es **fallback esperado** desde `src/utils/content.ts` antes de decir que hay un bug.

### Gotchas de traduccion en este repo

- Existe un caso conocido de test duplicado en espanol:
  - `src/content/es/tests/input-c-01.md`
  - `src/content/es/tests/ingreso-de-datos-en-c.md`
- Antes de traducir tests, revisar duplicados de `slug` para no propagar colisiones al arbol `en/`.
- El listado de curso en `/en/cursos/<curso>` puede mezclar EN/ES si el `index.md` del curso esta traducido pero faltan capitulos. Eso no implica bug: es fallback.

### Flujo para traducir una presentacion

Las presentaciones en `src/pages/[lang]/presentaciones/*.astro` ya generan ambas rutas (`/es/...` y `/en/...`) gracias al `getStaticPaths`. El contenido interno actualmente es espanol — para traducirlo, leer `lang` desde `Astro.params` y usar condicionales o `useTranslations` dentro del archivo.

## Content Collections

Definidas y validadas con Zod en `src/content.config.ts`. Seis colecciones (tres por idioma):

| Collection | Patron de archivos | Campos requeridos |
|---|---|---|
| `courses_es` / `courses_en` | `{es,en}/courses/**/index.md` | `description` (max 120), `technology`, `difficulty` |
| `chapters_es` / `chapters_en` | `{es,en}/courses/**/*.md` (sin index) | `title` |
| `tests_es` / `tests_en` | `{es,en}/tests/**/*.md` | `title`, `description` (max 180), `slug`, `category`, `kind`, y segun `kind`: `questions[]` o `algorithm` |

**No llames `getCollection()` directo en paginas.** Usa `getCoursesForLocale(lang)`, `getChaptersForCourse(courseId, lang)` o `getTestsForLocale(lang)` de `src/utils/content.ts` — manejan el merge con fallback.

### Tipos de test (campo `kind`)

El campo `kind` en el frontmatter define el tipo de test. Si se omite, se usa `multiple-choice` por compatibilidad.

| `kind` | Requiere | Componente | Descripcion |
|---|---|---|---|
| `multiple-choice` (default) | `questions[]` | `TestRunner.astro` | Varias preguntas con 2+ opciones cada una |
| `code-ordering` | `algorithm` | `CodeOrderingRunner.astro` | Un unico algoritmo con lineas mezcladas que hay que reordenar |

### Schema para `kind: multiple-choice`

```yaml
---
title: "Variables en C"
description: "Test para aprender como declarar y usar variables en C."
slug: "variables-c-01"
category: "C"
difficulty: "beginner"      # beginner | intermediate | advanced (opcional)
timeEstimate: 15            # minutos (opcional, activa el timer)
kind: "multiple-choice"     # (opcional, este es el default)
questions:
  - id: "q1"                # string unico dentro del test
    prompt: "¿Pregunta?"    # enunciado
    code: |                 # snippet (opcional)
      const x = 1;
    language: "js"          # lenguaje del snippet (opcional)
    options:                # minimo 2 opciones
      - "Opcion A"
      - "Opcion B"
    correctAnswer: 0        # indice 0-based de la respuesta correcta
    explanation: "..."      # explicacion (opcional)
---
```

### Schema para `kind: code-ordering`

Un test de ordenar codigo contiene **un unico algoritmo**. En el frontmatter se definen las lineas en el orden CORRECTO. El runner las mezcla en el cliente al cargar.

```yaml
---
title: "Ordenar: variables y constantes en C"
description: "Arrastra las lineas para reconstruir un programa en C."
slug: "ordenar-variables-c"
category: "C"
difficulty: "beginner"
timeEstimate: 5             # minutos (activa el timer)
kind: "code-ordering"       # OBLIGATORIO para este tipo
algorithm:
  prompt: "Ordena las lineas para armar un programa en C."
  language: "c"
  lines:                    # orden correcto, minimo 2 lineas
    - "#include <stdio.h>"
    - "int main() {"
    - "    int edad = 18;"
    - "    return 0;"
    - "}"
  explanation: "Por que este orden es correcto..."   # opcional
---

Contenido introductorio en Markdown (opcional).
```

**Reglas importantes para `code-ordering`:**

- El `kind` debe ser exactamente `"code-ordering"`.
- El array `algorithm.lines` contiene las lineas en el **orden correcto**. El shuffle se hace en el cliente al cargar.
- Cada linea debe ser un string NO vacio (el schema lo valida con `.min(1)`). Si necesitas preservar indentacion, usalas con espacios.
- Las comillas dobles dentro de una linea se escapan con `\"`, y el `\n` de C se escribe como `\\n` en YAML.
- `timeEstimate` es opcional pero altamente recomendado: da la intensidad de "programa con tiempo".
- `algorithm.explanation` se muestra junto al orden correcto cuando se verifica el resultado.

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

1. Crear carpeta `src/content/es/courses/[nombre]/` (version en espanol, default)
2. Agregar `index.md` con frontmatter `description`, `technology`, `difficulty`
3. Agregar lecciones numeradas: `01-intro.md`, `02-tema.md`, etc. (con `title` en frontmatter)
4. Agregar `logo.svg`
5. Registrar el icono en `src/components/Icon.astro` (clave = technology en lowercase)
6. (Opcional) Para publicar en ingles, crear la misma estructura en `src/content/en/courses/[nombre]/`. Los archivos que falten caen al espanol.

### Agregar un quiz nuevo (multiple-choice)

1. Crear `src/content/es/tests/[slug].md` (version en espanol)
2. (Opcional) Crear `src/content/en/tests/[slug].md` (mismo slug, traducido)
2. Completar el frontmatter con `title`, `description`, `slug`, `category`, `questions[]` (no hace falta `kind`, el default es `multiple-choice`)
3. El `slug` **debe ser unico** — se valida en runtime con `assertUniqueTestSlugs()`
4. El quiz queda disponible en `/test/[slug]` automaticamente

### Agregar un test de ordenar codigo nuevo

1. Crear `src/content/es/tests/[slug].md` (version en espanol). Para version en ingles, `src/content/en/tests/[slug].md`.
2. Completar el frontmatter con `title`, `description`, `slug`, `category`, **`kind: "code-ordering"`**, `timeEstimate`, y `algorithm` (con `prompt`, `language`, `lines[]`, opcionalmente `explanation`)
3. Las `lines` van en el orden CORRECTO, el shuffle lo hace el runner al cargar
4. El `slug` **debe ser unico** — se valida en runtime
5. El test queda disponible en `/test/[slug]` automaticamente y se muestra en el listing con el badge "Ordenar codigo"

**Cuando usar `code-ordering`**: para ejercicios tipo "programa" con un unico algoritmo donde la logica esta en el ORDEN. Por ejemplo, reconstruir un programa completo en C despues de ver declaracion de variables, o ordenar los pasos de una funcion recursiva. **No** lo uses para probar conceptos sueltos; para eso ya tenes `multiple-choice`.

### Agregar una presentacion nueva

1. Crear `src/pages/[lang]/presentaciones/[nombre].astro`
2. En el frontmatter, agregar `export async function getStaticPaths() { return [{ params: { lang: 'es' } }, { params: { lang: 'en' } }]; }`
3. Registrar el link en `src/pages/[lang]/presentaciones/index.astro` (el array `presentations`)
4. Para texto bilingue dentro de la presentacion, leer `const { lang } = Astro.params` y usar `useTranslations(lang)` o condicionales.

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

**Ultima actualizacion**: 2026-04-23
**Rama de Desarrollo**: `desarrollo`
**Rama Principal**: `main`
**Deploy URL**: https://facundouferer.github.io/programierds
