# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Programierds — static programming academy. Built with **Astro 5.x**, **TypeScript (strict)**, **Tailwind CSS 3.x**, deployed to GitHub Pages at `https://facundouferer.github.io/programierds`.

## Commands

```bash
npm run dev          # Dev server (localhost:4321)
npm run build        # Production build → ./dist/
npm run preview      # Preview production build
npm run astro check  # Astro + TypeScript validation (mandatory before done)
npm run test         # Vitest (single run)
npm run test:watch   # Vitest (watch mode)
```

## TDD is Mandatory (Definition of Done)

A task is only considered complete if it follows the TDD circuit:

1. **Test-First**: Write a failing test BEFORE any implementation.
2. **Implementation**: Write the minimum code to make it pass.
3. **Static Check**: Run `npm run astro check` to verify Astro/TypeScript.
4. **Test Run**: Run `npm run test` to ensure no regressions.

Framework: **Vitest**. Unit tests live in `src/utils/*.test.ts`.

### Where to put tests

| What you're testing | Where |
|---|---|
| Pure utility functions | `src/utils/[module].test.ts` |
| Logic in `tests.ts` | `src/utils/tests.test.ts` |
| Logic in `paths.ts` | `src/utils/paths.test.ts` (create if needed) |

### Test structure example

```ts
import { describe, expect, it } from 'vitest';
import { myFunction } from './myModule';

describe('myFunction', () => {
  it('should do X when given Y', () => {
    expect(myFunction(input)).toBe(expectedOutput);
  });
});
```

## Git Workflow

- **Work on `desarrollo` branch** — all changes go here
- **PR to `main`** for production merges (deploy triggers automatically via GitHub Actions on push to `main`)
- Conventional commits: `feat:`, `fix:`, `ci:`, `docs:`, `refactor:`
- Never add "Co-Authored-By" or AI attribution to commits.

## Architecture

### Pages

Site is **bilingual** — every route except `/` and `/404` lives under `/[lang]/`. `lang` is `es` (default) or `en`. The root `/` redirects to `/es/`.

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Redirects to `/es/` |
| `/[lang]/` | `src/pages/[lang]/index.astro` | Main landing page |
| `/[lang]/cursos` | `src/pages/[lang]/cursos/index.astro` | Course listing |
| `/[lang]/cursos/[course]` | `src/pages/[lang]/cursos/[course]/index.astro` | Course detail + lesson list |
| `/[lang]/cursos/[course]/[lesson]` | `src/pages/[lang]/cursos/[course]/[lesson].astro` | Individual lesson (Markdown) |
| `/[lang]/playground` | `src/pages/[lang]/playground.astro` | Code editor (CodeMirror 6 + Judge0) |
| `/[lang]/presentaciones` | `src/pages/[lang]/presentaciones/index.astro` | Slide listing |
| `/[lang]/presentaciones/[name]` | `src/pages/[lang]/presentaciones/*.astro` | Individual slide |
| `/[lang]/test` | `src/pages/[lang]/test/index.astro` | Quiz listing |
| `/[lang]/test/[slug]` | `src/pages/[lang]/test/[slug].astro` | Interactive quiz |
| `/404` | `src/pages/404.astro` | Custom error page (detects locale from URL) |

### Key Files

- `src/components/Icon.astro` — SVG icon system, name-based map. Always use `<Icon name="..." />`.
- `src/components/test/TestRunner.astro` — Interactive quiz engine (handles state, timer, grading).
- `src/layouts/Layout.astro` — Base layout: fonts, meta tags, dark mode, detects locale and sets `<html lang>`.
- `src/styles/global.css` — Tailwind directives + global styles.
- `src/templates/` — HTML mockups for design reference (NOT built by Astro).
- `public/` — Static assets (images, favicons).
- `src/i18n/` — Bilingual system. `es.ts` is the source of truth for UI strings; `en.ts` has translations. `index.ts` exposes `useTranslations`, `getLocaleFromPathname`, `withLocale`, `getAlternateLocale`, `LOCALES`, `DEFAULT_LOCALE`.
- `src/utils/paths.ts` — `getRelativePath()` and `getLocalizedRelativePath(locale, path)`. Use the localized variant inside `[lang]` pages.
- `src/utils/content.ts` — Helpers with locale fallback: `getCoursesForLocale`, `getChaptersForCourse`, `getTestsForLocale`.
- `src/utils/tests.ts` — Pure logic for the quiz system (types, grading, formatting).
- `src/utils/tests.test.ts` — Vitest unit tests for `tests.ts`.

### Content Collections (`src/content.config.ts`)

Six collections (three per language) validated with Zod:

| Collection | Source Pattern | Required Fields |
|---|---|---|
| `courses_es` / `courses_en` | `{es,en}/courses/**/index.md` | `description`, `technology`, `difficulty` |
| `chapters_es` / `chapters_en` | `{es,en}/courses/**/*.md` (not index) | `title` |
| `tests_es` / `tests_en` | `{es,en}/tests/**/*.md` | `title`, `description`, `slug`, `category`, `kind`, and per `kind`: `questions[]` or `algorithm` |

**Never call `getCollection('courses_es')` directly from pages.** Use `getCoursesForLocale(lang)`, `getChaptersForCourse(courseId, lang)`, or `getTestsForLocale(lang)` from `src/utils/content.ts` — they merge `es` + `en` with automatic fallback and set `fallbackUsed` so the page can render a "translation pending" banner.

### Available Courses

Currently in `src/content/es/courses/`: `c/`, `git/`, `java/`, `javascript/`. English translations live in `src/content/en/courses/` (may be empty — pages fall back to Spanish automatically).

## Bilingual content (i18n) — mandatory rules

The site is **bilingual: Spanish (`es`, default) and English (`en`)**.

- Raw routes are always prefixed: `/es/...` or `/en/...`. The root `/` issues a redirect to `/es/`.
- **Do not hardcode UI strings** in `.astro` components. Add the key to `src/i18n/es.ts` (source of truth — defines the `TranslationKey` type) and its translation to `src/i18n/en.ts` (TypeScript enforces coverage).
- Inside a `[lang]` page: `const { lang } = Astro.params as { lang: Locale }; const t = useTranslations(lang);`. Then `t('my.key')`.
- In shared components (Header, Footer), read locale from `Astro.currentLocale` with `getLocaleFromPathname` as fallback.
- For internal links inside `[lang]` pages, use `getLocalizedRelativePath(lang, '/cursos')` — never plain `getRelativePath` (strips the locale prefix).
- Pages under `[lang]` must export `getStaticPaths` iterating over `LOCALES`. For dynamic routes, combine locale × dynamic params in the loop.

### Adding a new UI string

1. Add the key in `src/i18n/es.ts`.
2. Add its English translation in `src/i18n/en.ts` (the type system requires it).
3. Consume in a component via `useTranslations(lang)`.

### Adding a translated lesson

The directory structure is mirrored: `src/content/es/courses/c/03-x.md` ↔ `src/content/en/courses/c/03-x.md` (same filename).

1. Copy the Spanish `.md` under the same relative path into `src/content/en/...`.
2. Translate only `title` (frontmatter) and the Markdown body. The filename and the `slug` (for tests) stay identical.
3. On build, `/en/cursos/c/03-x` renders the translated version. If the English file is missing, the Spanish content renders with a "translation pending" banner automatically — no extra work required.

### Adding a translated test

Same pattern: copy `src/content/es/tests/my-quiz.md` to `src/content/en/tests/my-quiz.md` and translate `title`, `description`, `prompt`, `options`, `explanation`. Keep the `slug` identical.

### Adding a translated presentation

Presentations in `src/pages/[lang]/presentaciones/*.astro` already emit both `/es/...` and `/en/...` routes via `getStaticPaths`. The inner body is currently Spanish-only. To translate the internals, read `const { lang } = Astro.params` and use `useTranslations(lang)` or inline `{lang === 'en' ? '...' : '...'}` conditionals.

### Design System (Tailwind)

Dark mode via `darkMode: 'class'` (dark by default, `<html class="dark">`). Custom colors:

| Token | Value | Usage |
|---|---|---|
| `primary` | `#0df259` | Accent green |
| `background-dark` | `#102216` | Dark background |
| `background-light` | `#f5f8f6` | Light background |
| `accent-blue` | `#3b82f6` | Blue accents |
| `accent-brown` | `#78350f` | Brown accents |
| `editor-bg` | `#0d1b11` | Code editor background |
| `terminal-bg` | `#050a06` | Terminal area background |

Fonts: `font-display` → Space Grotesk | `font-mono` → Fira Code.

## Conventions

- Components: PascalCase (`Icon.astro`). Props interface with `Props` suffix.
- Always define typed props with a `Props` interface in the frontmatter `---` block.
- Inside `[lang]` pages, use `getLocalizedRelativePath(lang, path)` for internal links. Use `getRelativePath()` only outside `[lang]` (e.g. `src/pages/index.astro`, `src/pages/404.astro`).
- Use semantic HTML and ARIA labels for icon-only buttons.
- Template-to-Astro workflow: mockups in `src/templates/` → Astro components using `<Icon>` instead of Material Symbols CDN.
- Test slugs must be unique — validated at runtime by `assertUniqueTestSlugs()`.
- UI strings live in `src/i18n/{es,en}.ts`. Do not hardcode user-facing text in `.astro` files.
