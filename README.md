# MyJobHut Website

Production-ready recruitment agency website built with Next.js, TypeScript, Tailwind CSS, App Router, and reusable components.

## Features

- Multi-page recruiting website for employers, recruiters, and hiring teams
- Pages for Home, About, Services, Employers, Blog, and Contact
- Frontend forms for contact and employer enquiry
- Placeholder API routes for future backend integration
- Metadata API, Open Graph metadata, sitemap, robots, and JSON-LD structured data
- Responsive mobile-first UI with accessible navigation and form labels
- Vercel-ready App Router architecture

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

## API Placeholders

The following POST routes return JSON success responses and are ready for future integration:

- `/api/contact`
- `/api/employer-enquiry`

## Deployment

### Vercel

Import the repository into Vercel and deploy. Vercel will install dependencies and run:

```bash
npm run build
```

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
