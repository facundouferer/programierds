# GEMINI Context: Programierds

Programierds is a modern, content-driven programming academy built with Astro 5. It focuses on teaching programming fundamentals with a practical, AI-augmented approach.

## Project Overview

- **Framework:** [Astro 5.x](https://astro.build) (SSG mode)
- **Language:** [TypeScript](https://www.typescriptlang.org) (Strict mode)
- **Styling:** [Tailwind CSS 3.x](https://tailwindcss.com) with `@tailwindcss/typography` and `@tailwindcss/forms`
- **Testing:** [Vitest](https://vitest.dev)
- **Content Management:** Astro Content Collections (Markdown + Zod validation)
- **Architecture:**
    - `src/content/courses/`: Source of truth for all course data and lessons.
    - `src/content.config.ts`: Defines `courses` (metadata) and `chapters` (content) collections.
    - `src/pages/`:
        - `index.astro`: Home.
        - `cursos.astro`: Courses listing.
        - `playground.astro`: Interactive code editor.
        - `cursos/`: Dynamic paths for courses and individual lessons.
    - `src/utils/paths.ts`: Contains `getRelativePath` for handling GitHub Pages base paths.
    - `src/components/`: Reusable Astro components (Icon, Header, Footer).
    - `src/layouts/`: Base page templates (Layout.astro).

## Tech Stack & Dependencies

- **Frontend:** Astro, React-less (mostly), Vanilla CSS/Tailwind.
- **Icons:** Custom SVG icon system in `src/components/Icon.astro`.
- **Fonts:** `@fontsource/space-grotesk` (UI) and `@fontsource/fira-code` (Code).
- **Code Editor:** [CodeMirror 6](https://codemirror.net/) used in the playground.

## Development Workflows

### Building and Running

- `npm run dev`: Starts the development server at `localhost:4321`.
- `npm run build`: Generates the static site in the `dist/` directory.
- `npm run preview`: Previews the production build locally.
- `npm run astro check`: Runs the Astro CLI check (validate types/structure).
- `npm run test`: Executes unit tests via Vitest.
- `npm run test:watch`: Runs tests in watch mode.

### TDD & Definition of Done (Mandatory)

For a task to be complete, the TDD circuit MUST be followed:
1. **Test-First**: Create a test (Vitest) BEFORE any implementation. 
2. **Cycle**: Write minimal code to make it pass.
3. **Static Check**: Run `npm run astro check` for Astro/TS integrity.
4. **Regression Check**: Run all tests with `npm run test`.
A task is NOT complete without these steps.

### Content Structure

Courses are defined in `src/content/courses/` with the following structure:
- `[course-slug]/index.md`: Contains course metadata (description, technology, difficulty).
- `[course-slug]/[01-lesson-name].md`: Individual lessons (numbered for ordering).
- `[course-slug]/logo.svg`: Icon for the course.

### Adding a New Course

1.  Create a folder in `src/content/courses/`.
2.  Add `index.md` with required frontmatter:
    ```yaml
    ---
    description: "Brief description"
    technology: "Name"
    difficulty: "Beginner" | "Intermediate" | "Advanced"
    ---
    ```
3.  Add lesson `.md` files.
4.  Add a `logo.svg`.
5.  **Important:** Register the icon in `src/components/Icon.astro` mapping the technology name (lowercase) to its SVG path.

## Conventions

- **Typing:** Use strict TypeScript. Define Props interfaces for all components.
- **Styles:** Prefer Tailwind utility classes. Use `prose` (from `@tailwindcss/typography`) for rendering Markdown content.
- **Icons:** Always use the `<Icon name="..." />` component.
- **Routing:**
    - `/cursos`: List of all courses.
    - `/cursos/[course]`: Course detail/lesson list.
    - `/cursos/[course]/[lesson]`: Lesson content.
    - `/playground`: Interactive code editor.

## Documentation References

- `README.md`: High-level project goals and author info.
- `src/content.config.ts`: Schema definitions for content validation.
- `CLAUDE.md`: Additional instructions for AI assistants.
- `AGENTS.md`: Detailed guidelines and project structure for all agents.
