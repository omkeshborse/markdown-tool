/**
 * Site configuration helper.
 *
 * Resolves the base canonical URL for metadata, sitemap.xml, and robots.txt.
 * - In production: Set NEXT_PUBLIC_SITE_URL in your hosting provider (e.g. Netlify).
 * - In local development: Defaults to "http://localhost:3000" if NEXT_PUBLIC_SITE_URL is not set.
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim() !== "") {
    return envUrl.trim().replace(/\/+$/, "");
  }
  return "http://localhost:3000";
}
