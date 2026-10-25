# Production-Ready Next.js Project Starter

A clean, minimal, SEO-friendly starter project built with Next.js App Router, TypeScript, and Tailwind CSS, configured for deployment on Netlify.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS (v4 with PostCSS)
- **Linting:** ESLint with `eslint-config-next`
- **Deployment:** Netlify compatible

## Project Structure

```text
├── public/
│   ├── icons/            # Static icon assets
│   └── images/           # Static image assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── favicon.ico   # Site favicon
│   │   ├── globals.css   # Global styles with Tailwind CSS
│   │   ├── layout.tsx    # Root layout and base SEO metadata
│   │   ├── page.tsx      # Minimal starter homepage
│   │   ├── robots.ts     # Dynamic robots.txt generation
│   │   └── sitemap.ts    # Dynamic sitemap.xml generation
│   ├── components/       # Reusable React components
│   ├── config/           # Application configurations
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Shared utility functions and helpers
│   └── types/            # TypeScript type definitions and interfaces
├── .env.example          # Example environment variable template
├── .gitignore            # Git ignore specification
├── eslint.config.mjs     # ESLint configuration
├── netlify.toml          # Netlify build and deployment configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project manifest and scripts
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS
└── tsconfig.json         # TypeScript compiler configuration (strict mode)
```

## Getting Started

### Development Server

To start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Build

To compile and verify the production build locally:

```bash
npm run build
```

To run the production build locally after building:

```bash
npm run start
```

### Linting

To check code quality and syntax with ESLint:

```bash
npm run lint
```

## SEO Configuration

The project is structured with foundational SEO capabilities:

- **Metadata API:** Root layout (`src/app/layout.tsx`) defines base OpenGraph, Twitter, and canonical metadata. Pages can extend or override these with page-specific `metadata` exports.
- **Dynamic robots.txt:** Handled by `src/app/robots.ts`.
- **Dynamic sitemap.xml:** Handled by `src/app/sitemap.ts`.

### Pre-Deployment SEO Checklist

Before deploying to production, replace the placeholder domain (`https://example.com`):

1. Set the `NEXT_PUBLIC_SITE_URL` environment variable in your production hosting environment (e.g., `NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com`).
2. Alternatively, update the fallback URL in `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` to your actual registered domain.
3. Customize title templates and descriptions in `src/app/layout.tsx` to match your application branding.

## Deployment to Netlify

This project includes a minimal `netlify.toml` configured for Netlify's native Next.js Runtime:

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

### Deploy Steps

1. Push your repository to your Git provider (GitHub, GitLab, or Bitbucket).
2. Log in to the [Netlify Dashboard](https://app.netlify.com) and click **"Add new site" > "Import an existing project"**.
3. Select your repository. Netlify will automatically detect Next.js.
4. Verify build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. (Optional) In **Site configuration > Environment variables**, add `NEXT_PUBLIC_SITE_URL` with your site URL.
6. Click **Deploy site**.
