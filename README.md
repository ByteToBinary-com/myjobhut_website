# MyJobHut Website

Production-ready recruitment agency website built with Next.js, TypeScript, Tailwind CSS, App Router, and reusable components.

## Features

- Multi-page recruiting website for employers, recruiters, and hiring teams
- Pages for Home, About, Services, Employers, Blog, and Contact
- Frontend forms for contact and employer enquiry
- Metadata API, Open Graph metadata, sitemap, robots, and JSON-LD structured data
- Responsive mobile-first UI with accessible navigation and form labels
- GitHub Pages-compatible static export architecture

## Tech Stack

- Next.js `16.2.6`
- TypeScript
- Tailwind CSS
- React
- Lucide React icons

Note: `Next.js 17` is not currently available on npm. This project uses the latest available stable release verified during setup.

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

### GitHub Pages

Push to `main`. The included GitHub Actions workflow builds the static site and deploys `out/` to GitHub Pages.

In repository settings, set Pages source to **GitHub Actions**.

### Environment Variables

Copy `.env.example` to `.env.local` for local overrides:

```bash
NEXT_PUBLIC_SITE_URL=https://www.myjobhut.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_CONTACT_EMAIL=contact@myjobhut.com
```

## Content Updates

Static content is stored in:

- `data/services.ts`
- `data/testimonials.ts`
- `data/blogs.ts`
- `data/site.ts`
