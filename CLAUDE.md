# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Programierds — static landing site for a programming academy. Built with **Astro 5.x**, **TypeScript (strict)**, **Tailwind CSS 3.x**, deployed to GitHub Pages.

## Commands

```bash
npm run dev          # Dev server (localhost:4321)
npm run build        # Production build → ./dist/
npm run preview      # Preview production build
npm run test         # Vitest (single run)
npm run test:watch   # Vitest (watch mode)
```

## TDD is Mandatory

Every feature or change requires a test BEFORE implementation. Cycle: write failing test (red) → implement (green) → verify all tests pass. Framework: **Vitest**.

## Git Workflow

- **Work on `desarrollo` branch** — all changes go here
- **PR to `main`** for production merges (deploy triggers automatically via GitHub Actions on push to `main`)
- Conventional commits: `feat:`, `fix:`, `ci:`, `docs:`, `refactor:`

## Architecture

- `src/pages/` — File-based routing (currently only `index.astro`)
- `src/components/` — Astro components (`Icon.astro` provides inline SVG icons with a name-based map)
- `src/layouts/Layout.astro` — Base layout with font imports, meta tags, dark mode (`<html class="dark">`)
- `src/styles/global.css` — Tailwind directives + font-family
- `src/templates/` — HTML mockups (Tailwind CDN + Material Symbols) used as visual specs before converting to Astro. Not part of the build.
- `public/` — Static assets served as-is (images, favicons)

## Design System (Tailwind)

Dark mode via `darkMode: 'class'` (dark by default). Custom colors in `tailwind.config.mjs`:

| Token | Value | Usage |
|---|---|---|
| `primary` | `#0df259` | Accent green |
| `background-dark` | `#102216` | Dark background |
| `background-light` | `#f5f8f6` | Light background |
| `accent-blue` | `#3b82f6` | Blue accents |
| `accent-brown` | `#78350f` | Brown accents |

Font: `font-display` → Space Grotesk (via `@fontsource/space-grotesk`).

## Conventions

- Components: PascalCase (`Icon.astro`). Props interface with `Props` suffix.
- Always define typed props in the frontmatter `---` block.
- Use semantic HTML and ARIA labels for icon-only buttons.
- Template-to-Astro workflow: mockups in `src/templates/` → Astro components using `Icon.astro` instead of Material Symbols CDN.
