# MyJobhut Website

Premium static recruitment website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Static App Router website with `output: "export"`
- SEO Metadata API, canonical URL, Open Graph, Twitter card, `robots.txt`, and `sitemap.xml`
- Schema.org structured data for an `EmploymentAgency`
- Responsive landing page, services, client information, testimonials, and contact sections
- Frontend-only contact form using `mailto:`, plus `tel:` and WhatsApp deep links
- Optimized fonts, semantic HTML, accessible navigation, and reduced-motion support

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The static export is generated in `out/`.

## Deployment

### Vercel

Import the repository and deploy. Vercel will run `npm run build`.

### Netlify

Use:

- Build command: `npm run build`
- Publish directory: `out`

### GitHub Pages

Push to `main`. The included GitHub Actions workflow builds the static site and deploys `out/` to GitHub Pages.

In repository settings, set Pages source to **GitHub Actions**.

## Content Updates

Static content is stored in:

- `data/services.ts`
- `data/testimonials.ts`
- `data/clients.ts`
- `data/seo.ts`

No backend, CMS, database, authentication, or API routes are used.
