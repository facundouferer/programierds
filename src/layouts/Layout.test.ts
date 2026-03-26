import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'vitest';

const pagesWithLayout = [
  '../pages/404.astro',
  '../pages/cursos.astro',
  '../pages/cursos/[course]/[lesson].astro',
  '../pages/cursos/[course]/index.astro',
  '../pages/index.astro',
  '../pages/playground.astro',
  '../pages/presentaciones/funciones_y_procedimientos_java.astro',
  '../pages/presentaciones/index.astro',
  '../pages/presentaciones/modularidad_en_c.astro',
  '../pages/presentaciones/paso_por_valor_y_referencia.astro',
  '../pages/presentaciones/tipos_de_datos_en_javascript.astro',
  '../pages/presentaciones/variables_y_constantes.astro',
  '../pages/test/[slug].astro',
  '../pages/test/index.astro',
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
