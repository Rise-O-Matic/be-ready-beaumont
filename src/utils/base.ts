/** Prefix a path with the Astro base URL */
export function base(path: string): string {
  let b = import.meta.env.BASE_URL;
  // Ensure base ends with /
  if (!b.endsWith('/')) b += '/';
  // Strip leading slash from path to avoid double slashes
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${b}${clean}`;
}
