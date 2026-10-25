import type { MetadataRoute } from "next";

/**
 * Placeholder domain for sitemap.xml generation.
 * NOTE: Replace this placeholder ("https://example.com") with your production domain
 * or configure the NEXT_PUBLIC_SITE_URL environment variable prior to deployment.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
