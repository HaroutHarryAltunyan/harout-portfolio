/** Prefix a public/ path with the deployment base path (GitHub Pages serves from /harout-portfolio). */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const img = (file: string) => asset(`/img/${file}`);
