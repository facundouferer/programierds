# GEMINI Context: Programierds

Programierds is a modern, content-driven programming academy built with Astro 5. It focuses on teaching programming fundamentals with a practical, AI-augmented approach.

## Project Overview

- **Framework:** [Astro 5.x](https://astro.build) (SSG mode)
- **Language:** [TypeScript](https://www.typescriptlang.org) (Strict mode)
- **Styling:** [Tailwind CSS 3.x](https://tailwindcss.com) with `@tailwindcss/typography` and `@tailwindcss/forms`
- **Testing:** [Vitest](https://vitest.dev)
- **Content Management:** Astro Content Collections (Markdown + Zod validation)
- **Code Editor:** [CodeMirror 6](https://codemirror.net/) (used in the Playground page)
- **Deploy target:** GitHub Pages — `https://facundouferer.github.io/programierds`
- **Architecture:**
    - `src/content/courses/`: Source of truth for all course data and lessons.
    - `src/content/tests/`: Quiz/test definitions (Markdown + Zod schema).
    - `src/content.config.ts`: Defines `courses`, `chapters`, and `tests` collections with Zod schemas.
    - `src/pages/`:
        - `index.astro`: Home.
        - `cursos.astro`: Courses listing.
        - `playground.astro`: Interactive code editor (CodeMirror 6).
        - `404.astro`: Custom error page.
        - `cursos/`: Dynamic paths for courses and individual lessons.
        - `presentaciones/`: Interactive slides used in classes.
        - `test/`: Quiz listing and individual quiz pages.
    - `src/utils/paths.ts`: Contains `getRelativePath` for handling GitHub Pages base paths. **Mandatory for all internal links and asset references.**
    - `src/utils/tests.ts`: Pure quiz logic — types, grading, formatting functions.
    - `src/utils/tests.test.ts`: Vitest unit tests for `tests.ts`.
    - `src/components/`: Reusable Astro components (Icon, Header, Footer, Welcome, TestRunner).
    - `src/layouts/`: Base page templates (Layout.astro).

## Tech Stack & Dependencies

- **Frontend:** Astro, mostly vanilla (no React). Tailwind + custom tokens.
- **Icons:** Custom SVG icon system in `src/components/Icon.astro` — always use `<Icon name="..." />`.
- **Fonts:** `@fontsource/space-grotesk` (`font-display`) and `@fontsource/fira-code` (`font-mono`).
- **Code Editor:** CodeMirror 6 with language packs: JavaScript, Python, Java, C++.

## Development Workflows

### Building and Running

- `npm run dev`: Starts the development server at `localhost:4321`.
- `npm run build`: Generates the static site in the `dist/` directory.
- `npm run preview`: Previews the production build locally.
- `npm run astro check`: Runs the Astro CLI check (validate Astro + TypeScript types).
- `npm run test`: Executes unit tests via Vitest.
- `npm run test:watch`: Runs tests in watch mode.

### TDD & Definition of Done (Mandatory)

For a task to be complete, the TDD circuit MUST be followed:
1. **Test-First**: Create a test (Vitest) BEFORE any implementation.
2. **Cycle**: Write minimal code to make it pass.
3. **Static Check**: Run `npm run astro check` for Astro/TS integrity.
4. **Regression Check**: Run all tests with `npm run test`.
A task is NOT complete without these steps.

### Unit Test Location

Unit tests cover **pure logic only** — no `.astro` component testing with Vitest.

| Module | Test file |
|---|---|
| `src/utils/tests.ts` | `src/utils/tests.test.ts` |
| `src/utils/paths.ts` | `src/utils/paths.test.ts` (create if needed) |

Test structure:
```ts
import { describe, expect, it } from 'vitest';
import { myFunction } from './myModule';

describe('myFunction', () => {
  it('should return X when given Y', () => {
    expect(myFunction(input)).toBe(expected);
  });
});
```

### Content Structure

**Courses** (`src/content/courses/`):
- `[course-slug]/index.md`: Course metadata (description, technology, difficulty).
- `[course-slug]/[01-lesson-name].md`: Numbered lesson files (ordering matters).
- `[course-slug]/logo.svg`: Course icon.

Currently available: `c/`, `git/`, `java/`, `javascript/`

**Tests/Quizzes** (`src/content/tests/`):
- Each `.md` file is one quiz, validated with Zod.
- Schema: `title`, `description` (max 180), `slug` (unique!), `category`, optional `difficulty`/`timeEstimate`, and `questions[]`.

Currently available: `fundamentos-javascript`, `tipos-de-datos`, `control-de-flujo-c`, `ingreso-de-datos-en-c`, `if-else`, `while-en-c`, `while-c-02`

### Adding a New Course

1. Create a folder in `src/content/courses/`.
2. Add `index.md` with required frontmatter:
    ```yaml
    ---
    description: "Brief description (max 120 chars)"
    technology: "Name"
    difficulty: "Beginner" | "Intermediate" | "Advanced"
    ---
    ```
3. Add lesson `.md` files with `title` frontmatter, numbered for ordering.
4. Add a `logo.svg`.
5. **Important:** Register the icon in `src/components/Icon.astro` mapping the `technology` name (lowercase) to its SVG path.

### Adding a New Quiz/Test

1. Create `src/content/tests/[slug].md`.
2. Define frontmatter with `title`, `description`, `slug`, `category`, and `questions[]`.
3. Slug must be unique — validated at runtime by `assertUniqueTestSlugs()`.
4. The quiz is available at `/test/[slug]` automatically.

```yaml
---
title: "My Quiz"
description: "Description (max 180 chars)"
slug: "my-quiz"
category: "JavaScript"
difficulty: "beginner"
timeEstimate: 10
questions:
  - id: "q1"
    prompt: "Question?"
    options: ["A", "B", "C"]
    correctAnswer: 1
    explanation: "B is correct because..."
---
```

### Adding a New Presentation

1. Create `src/pages/presentaciones/[name].astro`.
2. Register the link in `src/pages/presentaciones/index.astro`.

## Design System (Tailwind)

Dark mode via `darkMode: 'class'` (dark by default, `<html class="dark">`). Custom tokens:

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

- **Typing:** Use strict TypeScript. Define `Props` interfaces for all components.
- **Styles:** Prefer Tailwind utility classes. Use `prose` for rendering Markdown content.
- **Icons:** Always use the `<Icon name="..." />` component. Never use Material Symbols CDN.
- **Routing:** Always use `getRelativePath()` from `src/utils/paths.ts` for internal links and assets.
- **Test slugs:** Must be unique — `assertUniqueTestSlugs()` enforces this at runtime.

## Git Workflow

- **Branch**: All work goes to `desarrollo`, merged to `main` via PR.
- **Commits**: Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `ci:`).
- **Never** add "Co-Authored-By" or AI attribution.
- **Deploy**: GitHub Actions auto-deploys to GitHub Pages on push to `main`.
