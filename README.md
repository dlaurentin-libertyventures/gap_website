# Global Accreditation Project — Website

A production-ready Next.js 15+ website for the Global Accreditation Project (GAP). Built with TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React.

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Where to replace content

### GiveButter donation URL

Edit `src/config/site.ts`:

```typescript
giveButter: {
  url: "https://givebutter.com/YOUR-ACTUAL-CAMPAIGN",
  label: "Support the work",
},
```

### Report / DocSend URL

Edit `src/config/site.ts`:

```typescript
report: {
  url: "https://docsend.com/YOUR-ACTUAL-REPORT-URL",
  label: "Download the report",
},
```

### Contact email

Edit `src/config/site.ts`:

```typescript
email: "info@globalaccredit.org",
```

### Site URL (for SEO and canonical links)

Edit `src/config/site.ts`:

```typescript
url: "https://globalaccredit.org",
```

### Social media links

Edit `src/config/site.ts`:

```typescript
social: {
  twitter: "https://twitter.com/globalaccredit",
  linkedin: "https://linkedin.com/company/globalaccredit",
},
```

---

## Replacing the GAP logo

Logo files live in `public/logos/`. The following variants are used:

| File | Where used |
|------|-----------|
| `gap-working-logo-mark.png` | Header (light backgrounds) |
| `gap-working-logo.png` | Header full wordmark (light backgrounds) |
| `gap-working-logo-mark-ivory.png` | Hero background, mobile menu, footer |
| `gap-working-logo-ivory.png` | Footer full wordmark |

To replace: drop new PNG files with the same filenames into `public/logos/`. Recommended dimensions: 300x300px for marks, 600x160px for wordmarks (or wider as needed).

---

## Adding leadership headshots

Headshot images go in `public/images/team/`. Name each file after the person's ID as defined in `src/data/site-content.ts`:

| Person | Expected filename |
|--------|------------------|
| Gerard O'Sullivan | `public/images/team/gerard-osullivan.jpg` |
| Pano Kanelos | `public/images/team/pano-kanelos.jpg` |
| Chad Thevenot | `public/images/team/chad-thevenot.jpg` |

Recommended: 600x800px, editorial portrait crop, JPEG.

After adding a headshot, update `src/components/sections/LeadershipSection.tsx` to replace the placeholder `<div>` with a Next.js `<Image>` component:

```tsx
import Image from "next/image";

// Replace the placeholder div block with:
<Image
  src={`/images/team/${person.id}.jpg`}
  alt={person.name}
  fill
  className="object-cover object-top"
/>
```

To add new team members, add entries to the `leadershipData` array in `src/data/site-content.ts`. No component changes needed.

---

## Connecting the newsletter form

The newsletter form in `src/components/sections/NewsletterForm.tsx` currently uses a mock submit handler. To connect it to a real email platform:

1. Create an API route at `src/app/api/newsletter/route.ts`
2. In that route, call your email platform's API (Mailchimp, ConvertKit, Beehiiv, etc.)
3. Replace the mock `setTimeout` in `NewsletterForm.tsx` with:

```typescript
const res = await fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});
if (!res.ok) {
  setState('error');
  return;
}
setState('success');
```

---

## Adding an OG image

Place a `1200x630px` PNG at `public/og-image.png`. This is referenced in `src/config/site.ts` under `seo.ogImage`.

---

## Content updates

All repeated page content (roadmap phases, vision principles, opportunity blocks, comparison rows, leadership bios) lives in `src/data/site-content.ts`. Edit this file to update any section without touching component code.

---

## Tech stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Literata (display) + Inter (sans) via `next/font/google`
- **Deployment**: Vercel (recommended)

---

## Deployment

The easiest deployment is [Vercel](https://vercel.com). Connect your GitHub repo and deploy — no additional configuration needed for a static build.

For other platforms, run `npm run build` and serve the `.next` directory with `npm start`, or export to static files if needed.
