# AGENTS.md - Agent Guidelines for Programierds

## Project Overview

- **Framework**: Astro 5.x with Tailwind CSS 3.x
- **Language**: TypeScript (strict mode)
- **Package Manager**: npm
- **Target**: Static site deployment to GitHub Pages
- **Custom Fonts**: Space Grotesk (via @fontsource)

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
```

**Note**: No linting (ESLint) or testing (Jest/Vitest) is currently configured. 
If adding tests, prefer Vitest for Astro projects.

## Project Structure

```
programierds/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing (src/pages/*.astro)
│   ├── styles/         # Global CSS
│   ├── assets/         # Static assets (SVGs, images)
│   └── templates/      # Reference templates (HTML mocks)
├── public/             # Static files (favicons, images)
├── .github/
│   └── workflows/      # CI/CD pipelines
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

## Code Style Guidelines

### General Principles

- Use **Astro components** (.astro) for static UI
- Keep components **small and focused** (single responsibility)
- Use **semantic HTML** elements
- Prefer **file-based routing** in `src/pages/`

### TypeScript

- This project uses Astro's **strict** TypeScript config
- Always define **prop types** for Astro components:

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

- Use **path aliases** configured in tsconfig.json
- Order imports logically:
  1. Astro built-ins
  2. External libraries
  3. Internal components
  4. Styles

```astro
---
import Layout from '../layouts/Layout.astro';
import Icon from '../components/Icon.astro';
import type { ComponentProps } from '../types';
import '../styles/global.css';
---
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Icon.astro`, `Header.astro` |
| Props interfaces | PascalCase + Props suffix | `IconProps` |
| Variables | camelCase | `const isActive = true` |
| CSS classes | kebab-case | `bg-primary`, `text-slate-900` |

### Tailwind CSS

- Use **custom colors** defined in `tailwind.config.mjs`:
  - `primary` (#0df259) - Accent green
  - `background-light` (#f5f8f6)
  - `background-dark` (#102216)
  - `accent-blue` (#3b82f6)
  - `accent-brown` (#78350f)

- Dark mode is enabled via `darkMode: 'class'`
- Use `dark:` prefix for dark mode variants

```astro
<!-- Example usage -->
<div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
  <button class="bg-primary hover:brightness-110 text-background-dark">
    Click me
  </button>
</div>
```

### Error Handling

- Use **try/catch** for async operations
- Return **fallback UI** when data fails to load
- Always provide **error boundaries** for critical components

```astro
---
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch:', error);
}
---
```

### Performance

- Use **Astro's built-in optimizations**:
  - Server-side rendering (default) for static content
  - Lazy loading for images below the fold
  - Font optimization via @fontsource

- **Optimize images**: Put images in `public/` for direct serving
- **Bundle fonts locally**: Already configured with @fontsource

### Accessibility

- Always include **alt text** for images
- Use **semantic HTML** (header, main, footer, nav, section)
- Ensure **color contrast** meets WCAG AA standards
- Use **ARIA labels** for icon-only buttons

```astro
<button aria-label="Close menu">
  <Icon name="close" />
</button>

<img src="/images/hero.jpg" alt="Developer workspace" />
```

### Git Workflow

- Use **Conventional Commits**:
  - `feat:` new feature
  - `fix:` bug fix
  - `ci:` CI/CD changes
  - `docs:` documentation
  - `refactor:` code restructuring

- **Main branch** is the default and production branch
- **Deploy** happens automatically via GitHub Actions on push to main

## Adding New Dependencies

```bash
# Install production dependency
npm install package-name

# Install development dependency
npm install -D package-name

# Update lockfile
npm install
```

## Common Patterns

### Creating a New Page

1. Create file in `src/pages/` (e.g., `about.astro`)
2. Extend the Layout component
3. Use semantic HTML

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="About - Programierds">
  <main>
    <h1>About Us</h1>
  </main>
</Layout>
```

### Creating a Component

1. Create file in `src/components/`
2. Define Props interface
3. Export with Fragment for inline HTML

```astro
---
interface Props {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const { name, size = 'md' } = Astro.props;
const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8' };
---

<svg class={sizeClasses[size]} ...>
  <!-- SVG content -->
</svg>
```

---

**Last updated**: 2026-03-01
**Main branch**: main
**Deploy URL**: https://facundouferer.github.io/
