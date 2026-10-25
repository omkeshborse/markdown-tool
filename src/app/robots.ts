import type { MetadataRoute } from "next";

/**
 * Placeholder domain for robots.txt generation.
 * NOTE: Replace this placeholder ("https://example.com") with your production domain
 * or configure the NEXT_PUBLIC_SITE_URL environment variable prior to deployment.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
