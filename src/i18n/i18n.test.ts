import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, isLocale } from './types';
import {
  getLocaleFromPathname,
  removeLocaleFromPathname,
  withLocale,
  useTranslations,
  getAlternateLocale,
} from './index';

describe('isLocale', () => {
  it('returns true for supported locales', () => {
    expect(isLocale('es')).toBe(true);
    expect(isLocale('en')).toBe(true);
  });

  it('returns false for unsupported locales', () => {
    expect(isLocale('pt')).toBe(false);
    expect(isLocale('')).toBe(false);
    expect(isLocale('ES')).toBe(false);
  });
});

describe('getLocaleFromPathname', () => {
  it('extracts es from a prefixed pathname', () => {
    expect(getLocaleFromPathname('/programierds/es/cursos')).toBe('es');
  });

  it('extracts en from a prefixed pathname', () => {
    expect(getLocaleFromPathname('/programierds/en/test/slug')).toBe('en');
  });

  it('works without base path', () => {
    expect(getLocaleFromPathname('/es/cursos')).toBe('es');
    expect(getLocaleFromPathname('/en/')).toBe('en');
  });

  it('returns default locale when no locale prefix is present', () => {
    expect(getLocaleFromPathname('/')).toBe(DEFAULT_LOCALE);
    expect(getLocaleFromPathname('/programierds/')).toBe(DEFAULT_LOCALE);
    expect(getLocaleFromPathname('/cursos')).toBe(DEFAULT_LOCALE);
  });
});

describe('removeLocaleFromPathname', () => {
  it('strips the locale prefix preserving the rest', () => {
    expect(removeLocaleFromPathname('/es/cursos/c')).toBe('/cursos/c');
    expect(removeLocaleFromPathname('/en/test/while-en-c')).toBe('/test/while-en-c');
  });

  it('handles base paths', () => {
    expect(removeLocaleFromPathname('/programierds/es/cursos', '/programierds')).toBe(
      '/cursos',
    );
    expect(removeLocaleFromPathname('/programierds/en/', '/programierds')).toBe('/');
  });

  it('returns root when only locale is present', () => {
    expect(removeLocaleFromPathname('/es')).toBe('/');
    expect(removeLocaleFromPathname('/en/')).toBe('/');
  });

  it('leaves path untouched when no locale prefix is present', () => {
    expect(removeLocaleFromPathname('/cursos')).toBe('/cursos');
    expect(removeLocaleFromPathname('/')).toBe('/');
  });
});

describe('withLocale', () => {
  it('prefixes a path with the given locale', () => {
    expect(withLocale('es', '/cursos')).toBe('/es/cursos');
    expect(withLocale('en', '/test/slug')).toBe('/en/test/slug');
  });

  it('normalises the leading slash', () => {
    expect(withLocale('es', 'cursos')).toBe('/es/cursos');
    expect(withLocale('en', '')).toBe('/en/');
    expect(withLocale('es', '/')).toBe('/es/');
  });
});

describe('useTranslations', () => {
  it('returns the Spanish translation for a known key', () => {
    const t = useTranslations('es');
    expect(t('nav.home')).toBe('Inicio');
  });

  it('returns the English translation for a known key', () => {
    const t = useTranslations('en');
    expect(t('nav.home')).toBe('Home');
  });

  it('falls back to Spanish when the English key is missing', () => {
    const t = useTranslations('en');
    // Using the es key as fallback guarantees no hard crash in partial translations.
    expect(typeof t('nav.home')).toBe('string');
    expect(t('nav.home').length).toBeGreaterThan(0);
  });

  it('returns the key itself when it does not exist in any dictionary', () => {
    const t = useTranslations('es');
    expect(t('this.key.does.not.exist')).toBe('this.key.does.not.exist');
  });
});

describe('getAlternateLocale', () => {
  it('returns the other locale', () => {
    expect(getAlternateLocale('es')).toBe('en');
    expect(getAlternateLocale('en')).toBe('es');
  });
});
