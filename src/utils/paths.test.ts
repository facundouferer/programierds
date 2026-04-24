import { describe, expect, it } from 'vitest';
import { joinPaths, getLocalizedPath } from './paths';

describe('joinPaths', () => {
  it('joins simple segments with a single slash', () => {
    expect(joinPaths('/programierds', '/es', '/cursos')).toBe('/programierds/es/cursos');
  });

  it('trims extra slashes', () => {
    expect(joinPaths('/programierds/', '/es/', '/cursos/')).toBe('/programierds/es/cursos');
  });

  it('ignores empty segments', () => {
    expect(joinPaths('/programierds', '', '/cursos')).toBe('/programierds/cursos');
  });
});

describe('getLocalizedPath', () => {
  it('prepends the locale inside the base path', () => {
    expect(getLocalizedPath('es', '/cursos', '/programierds')).toBe('/programierds/es/cursos');
    expect(getLocalizedPath('en', '/test/slug', '/programierds')).toBe('/programierds/en/test/slug');
  });

  it('handles root path correctly', () => {
    expect(getLocalizedPath('es', '/', '/programierds')).toBe('/programierds/es/');
    expect(getLocalizedPath('en', '', '/programierds')).toBe('/programierds/en/');
  });

  it('works when base is root', () => {
    expect(getLocalizedPath('es', '/cursos', '/')).toBe('/es/cursos');
    expect(getLocalizedPath('en', '/', '/')).toBe('/en/');
  });

  it('does not double-prefix when path already has the locale', () => {
    expect(getLocalizedPath('es', '/es/cursos', '/programierds')).toBe('/programierds/es/cursos');
    expect(getLocalizedPath('en', '/en/test', '/')).toBe('/en/test');
  });
});
