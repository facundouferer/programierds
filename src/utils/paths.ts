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
  // Ensure we don't have double slashes if path starts with /
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (base === '/') return `/${normalizedPath}`;
  
  // base usually doesn't have a trailing slash according to Astro docs,
  // but let's be safe.
  const normalizedBase = base.replace(/\/+$/, '');
  return `${normalizedBase}/${normalizedPath}`;
}
