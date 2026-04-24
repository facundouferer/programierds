import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'vitest';

const pagesWithLayout = [
  '../pages/404.astro',
  '../pages/[lang]/index.astro',
  '../pages/[lang]/cursos/index.astro',
  '../pages/[lang]/cursos/[course]/index.astro',
  '../pages/[lang]/cursos/[course]/[lesson].astro',
  '../pages/[lang]/playground.astro',
  '../pages/[lang]/presentaciones/index.astro',
  '../pages/[lang]/presentaciones/funciones_y_procedimientos_java.astro',
  '../pages/[lang]/presentaciones/modularidad_en_c.astro',
  '../pages/[lang]/presentaciones/paso_por_valor_y_referencia.astro',
  '../pages/[lang]/presentaciones/tipos_de_datos_en_javascript.astro',
  '../pages/[lang]/presentaciones/variables_y_constantes.astro',
  '../pages/[lang]/test/index.astro',
  '../pages/[lang]/test/[slug].astro',
];

describe('Layout header integration', () => {
  it('renders the shared header from the layout', () => {
    const layoutSource = readFileSync(new URL('./Layout.astro', import.meta.url), 'utf8');

    expect(layoutSource).toContain("import Header from '../components/Header.astro';");
    expect(layoutSource).toMatch(/<Header\s*\/>/);
  });

  it('avoids page-level header imports when a page uses Layout', () => {
    for (const pagePath of pagesWithLayout) {
      const pageSource = readFileSync(new URL(pagePath, import.meta.url), 'utf8');

      expect(pageSource).not.toMatch(/import\s+Header\s+from/);
      expect(pageSource).not.toMatch(/<Header\s*\/>/);
    }
  });
});
