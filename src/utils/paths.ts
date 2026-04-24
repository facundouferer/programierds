import { isLocale, type Locale } from '../i18n/types';

export function joinPaths(...parts: string[]) {
  return parts
    .map((part, index) => {
      if (index === 0) {
        return part.trim().replace(/\/+$/, '');
      }
      return part.trim().replace(/^\/+/, '').replace(/\/+$/, '');
    })
    .filter(x => x.length > 0)
    .join('/');
}

export function getRelativePath(path: string) {
  const base = import.meta.env.BASE_URL;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  if (base === '/') return `/${normalizedPath}`;

  const normalizedBase = base.replace(/\/+$/, '');
  return `${normalizedBase}/${normalizedPath}`;
}

export function getLocalizedPath(locale: Locale, path: string, base?: string) {
  const resolvedBase = base ?? import.meta.env.BASE_URL;
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  const hasLocale = firstSegment !== undefined && isLocale(firstSegment);
  const withoutLocale = hasLocale ? segments.slice(1) : segments;
  const localizedSegments = [locale, ...withoutLocale];
  const endsWithSlash = path === '' || path === '/' || path.endsWith('/');

  const baseIsRoot = !resolvedBase || resolvedBase === '/';
  const normalizedBase = baseIsRoot ? '' : resolvedBase.replace(/\/+$/, '');

  let result = normalizedBase + '/' + localizedSegments.join('/');
  if (endsWithSlash && !result.endsWith('/')) result += '/';
  return result;
}

export function getLocalizedRelativePath(locale: Locale, path: string) {
  return getLocalizedPath(locale, path, import.meta.env.BASE_URL);
}
