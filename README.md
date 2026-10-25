# Production-Ready Next.js Project Starter

A clean, minimal, SEO-friendly starter project built with Next.js App Router, TypeScript, and Tailwind CSS, configured for deployment on Netlify.

## Tech Stack & Prerequisites

- **Node.js:** Node.js LTS (v20.x or v22.x recommended)
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS (v4 with PostCSS)
- **Linting:** ESLint with `eslint-config-next`
- **Deployment:** Netlify compatible (Native Next.js Runtime)

## Project Structure

```text
├── public/
│   ├── icons/            # Static icon assets
│   └── images/           # Static image assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── favicon.ico   # Site favicon
│   │   ├── globals.css   # Global styles with Tailwind CSS
│   │   ├── layout.tsx    # Root layout, canonical tag, and SEO metadata
│   │   ├── page.tsx      # Minimal starter homepage (Server Component)
│   │   ├── robots.ts     # Dynamic robots.txt generation
│   │   └── sitemap.ts    # Dynamic sitemap.xml generation
│   ├── components/       # Reusable React components
│   ├── config/           # Application and site configuration
│   │   └── site.ts       # Centralized canonical URL resolver
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Shared utility functions
│   └── types/            # TypeScript type definitions
├── .env.example          # Environment variable template
├── .gitignore            # Git ignore specification
├── eslint.config.mjs     # Flat ESLint configuration
├── netlify.toml          # Netlify build configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project manifest and scripts
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS
└── tsconfig.json         # TypeScript compiler configuration (strict mode)
```

## Getting Started

### Installation

Install dependencies using `npm`:

```bash
npm install
```

### Development Server

To start the local development server on port 3000:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Code Quality (Linting)

To check code quality and syntax with ESLint:

```bash
npm run lint
```

### Production Build

To compile and verify the production build locally:

```bash
npm run build
```

To run the compiled production build locally:

```bash
npm run start
```

## SEO & Site URL Configuration

The project includes foundational SEO capabilities:

- **Metadata API & Canonical URLs:** Configured in `src/app/layout.tsx`. The root layout sets `metadataBase` from `getSiteUrl()`, generates a canonical link tag (`<link rel="canonical" href="...">`), and provides Open Graph and Twitter Card metadata.
- **Dynamic robots.txt:** Configured in `src/app/robots.ts`.
- **Dynamic sitemap.xml:** Configured in `src/app/sitemap.ts`.

### Configuring the Production Domain

1. **Local Development:** When `NEXT_PUBLIC_SITE_URL` is unset, the application defaults to `http://localhost:3000`.
2. **Production Deployment:** Set the `NEXT_PUBLIC_SITE_URL` environment variable in your production hosting provider (e.g., Netlify) to your custom domain:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
   ```
   This ensures that canonical tags, Open Graph URLs, `robots.txt`, and `sitemap.xml` resolve to your live domain.

## Netlify Deployment

This project includes a minimal `netlify.toml` compatible with Netlify's native Next.js Runtime:

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

### Deployment Steps

1. Push your code to your Git provider (GitHub, GitLab, or Bitbucket).
2. In the Netlify Dashboard, select **Add new site > Import an existing project**.
3. Choose your repository. Netlify detects Next.js automatically.
4. Verify the build command (`npm run build`) and publish directory (`.next`).
5. In **Site configuration > Environment variables**, add:
   - `NEXT_PUBLIC_SITE_URL`: Your custom domain (e.g. `https://your-custom-domain.com`).
6. Deploy the site.

*Note: Live Netlify deployment requires connecting your Git repository to Netlify with your domain and credentials.*
