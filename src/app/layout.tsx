import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

/**
 * Placeholder domain for metadataBase and canonical URLs.
 * NOTE: Replace this placeholder ("https://example.com") with your production domain
 * or configure the NEXT_PUBLIC_SITE_URL environment variable prior to production deployment.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Production-Ready Next.js Starter",
    template: "%s | Production-Ready Next.js Starter",
  },
  description:
    "A clean, SEO-friendly Next.js App Router starter project configured with TypeScript, Tailwind CSS, and Netlify deployment readiness.",
  openGraph: {
    title: "Production-Ready Next.js Starter",
    description:
      "A clean, SEO-friendly Next.js App Router starter project configured with TypeScript, Tailwind CSS, and Netlify deployment readiness.",
    url: SITE_URL,
    siteName: "Production-Ready Next.js Starter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Production-Ready Next.js Starter",
    description:
      "A clean, SEO-friendly Next.js App Router starter project configured with TypeScript, Tailwind CSS, and Netlify deployment readiness.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
