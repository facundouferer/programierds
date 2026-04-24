import { es, type TranslationKey } from './es';
import { en } from './en';
import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from './types';

export { DEFAULT_LOCALE, LOCALES, isLocale };
export type { Locale, TranslationKey };

const DICTIONARIES: Record<Locale, Record<TranslationKey, string>> = {
  es,
  en,
};

export function useTranslations(locale: Locale) {
  const dict = DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
  const fallback = DICTIONARIES[DEFAULT_LOCALE];

  return function t(key: TranslationKey | string): string {
    const typedKey = key as TranslationKey;
    const value = dict[typedKey] ?? fallback[typedKey];
    return value ?? key;
  };
}

function stripBase(pathname: string, base?: string): string {
  if (!base || base === '/') return pathname;
  const trimmedBase = base.replace(/\/+$/, '');
  return pathname.startsWith(trimmedBase)
    ? pathname.slice(trimmedBase.length) || '/'
    : pathname;
}

export function getLocaleFromPathname(pathname: string, base?: string): Locale {
  const withoutBase = stripBase(pathname, base);
  const segments = withoutBase.split('/').filter(Boolean);
  for (const segment of segments) {
    if (isLocale(segment)) return segment;
  }
  return DEFAULT_LOCALE;
}

export function removeLocaleFromPathname(pathname: string, base?: string): string {
  const withoutBase = stripBase(pathname, base);
  const segments = withoutBase.split('/').filter(Boolean);
  const localeIndex = segments.findIndex(isLocale);
  if (localeIndex === -1) {
    if (segments.length === 0) return '/';
    return '/' + segments.join('/');
  }
  segments.splice(localeIndex, 1);
  if (segments.length === 0) return '/';
  return '/' + segments.join('/');
}

export function withLocale(locale: Locale, path: string): string {
  if (!path || path === '/') return `/${locale}/`;
  const normalised = path.startsWith('/') ? path.slice(1) : path;
  return `/${locale}/${normalised}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}
