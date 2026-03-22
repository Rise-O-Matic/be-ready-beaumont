/** Prefix a path with the Astro base URL */
export function base(path: string): string {
  const b = import.meta.env.BASE_URL;
  return `${b}${path.startsWith('/') ? path.slice(1) : path}`;
}
