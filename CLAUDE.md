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

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Main landing page |
| `/cursos` | `src/pages/cursos.astro` | Course listing |
| `/cursos/[course]` | `src/pages/cursos/[course]/index.astro` | Course detail + lesson list |
| `/cursos/[course]/[lesson]` | `src/pages/cursos/[course]/[lesson].astro` | Individual lesson (Markdown) |
| `/playground` | `src/pages/playground.astro` | Code editor (CodeMirror 6 + Judge0) |
| `/presentaciones` | `src/pages/presentaciones/index.astro` | Slide listing for classes |
| `/presentaciones/[name]` | `src/pages/presentaciones/*.astro` | Individual interactive slide |
| `/test` | `src/pages/test/index.astro` | Quiz listing |
| `/test/[slug]` | `src/pages/test/[slug].astro` | Interactive quiz |
| `404` | `src/pages/404.astro` | Custom error page |

### Key Files

- `src/components/Icon.astro` — SVG icon system, name-based map. Always use `<Icon name="..." />`.
- `src/components/test/TestRunner.astro` — Interactive quiz engine (handles state, timer, grading).
- `src/layouts/Layout.astro` — Base layout: fonts, meta tags, dark mode (`class="dark"`).
- `src/styles/global.css` — Tailwind directives + global styles.
- `src/templates/` — HTML mockups for design reference (NOT built by Astro).
- `public/` — Static assets (images, favicons).
- `src/utils/paths.ts` — `getRelativePath()`: MANDATORY for all internal links/assets (GitHub Pages base path support).
- `src/utils/tests.ts` — Pure logic for the quiz system (types, grading, formatting).
- `src/utils/tests.test.ts` — Vitest unit tests for `tests.ts`.

### Content Collections (`src/content.config.ts`)

Three collections validated with Zod:

| Collection | Source Pattern | Required Fields |
|---|---|---|
| `courses` | `courses/**/index.md` | `description`, `technology`, `difficulty` |
| `chapters` | `courses/**/*.md` (not index) | `title` |
| `tests` | `tests/**/*.md` | `title`, `description`, `slug`, `category`, `questions[]` |

### Available Courses

Currently in `src/content/courses/`: `c/`, `git/`, `java/`, `javascript/`

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
- Use `getRelativePath()` from `src/utils/paths.ts` for ALL internal links and assets.
- Use semantic HTML and ARIA labels for icon-only buttons.
- Template-to-Astro workflow: mockups in `src/templates/` → Astro components using `<Icon>` instead of Material Symbols CDN.
- Test slugs must be unique — validated at runtime by `assertUniqueTestSlugs()`.
