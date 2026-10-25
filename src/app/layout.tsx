import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getSiteUrl } from "@/config/site";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Production-Ready Next.js Starter",
    template: "%s | Production-Ready Next.js Starter",
  },
  description:
    "A clean, SEO-friendly Next.js App Router starter project configured with TypeScript, Tailwind CSS, and Netlify deployment readiness.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Production-Ready Next.js Starter",
    description:
      "A clean, SEO-friendly Next.js App Router starter project configured with TypeScript, Tailwind CSS, and Netlify deployment readiness.",
    url: "/",
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
