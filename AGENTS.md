# AGENTS.md — Project Setup for Agents

Personal portfolio site for Olusegun Francis Akindipe. Prefer matching existing patterns in `src/app/` over inventing new structure.

## Stack

- **Next.js 15** (App Router only — no `pages/`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (`src/app/globals.css`, `tailwind.config.ts`)
- **Framer Motion** for section animations
- **Sanity** headless CMS for articles (`next-sanity` + embedded Studio)
- Path alias: `@/*` → `./src/*`
- Dark theme by default (`<html className="dark">`)

## Setup

- **Node:** 20 (CI); 18+ locally
- Install: `npm install`
- Dev: `npm run dev` → http://localhost:3000
- Build: `npm run build` · Start: `npm start`
- Lint: `npm run lint`
- Format: `npm run prettier:check` / `npm run prettier:fix`

### Git commits and pull requests

When the user asks to commit, push, or open a PR, follow the project skill:

- [`.cursor/skills/ship-pr/SKILL.md`](.cursor/skills/ship-pr/SKILL.md)

It covers: never commit on `main` (create `feat/`/`fix/` branch first), Conventional Commits (Husky `commit-msg` + commitlint), lint-staged pre-commit, CI parity (`npm run lint` + `npm run prettier:check`), push the feature branch only, and `gh pr create --base main` with Summary + Test plan.

### Environment

Copy [`.env.example`](.env.example) to `.env.local`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient-email@example.com

NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-27
```

- Email vars power `src/app/(site)/api/contact/route.ts` (Nodemailer).
- Sanity vars come from [sanity.io/manage](https://www.sanity.io/manage). Add `http://localhost:3000` (and production URL) as a CORS origin with credentials enabled.

## Project layout

```
src/app/
├── layout.tsx                 # Root: fonts + html/body only
├── (site)/
│   ├── layout.tsx             # Header, main, Footer, ScrollArrow
│   ├── page.tsx               # Homepage
│   ├── articles/              # Article pages (fetch from Sanity)
│   └── api/contact/route.ts
├── studio/[[...tool]]/        # Embedded Sanity Studio at /studio
├── data.tsx                   # Static portfolio content
├── blocks/
├── components/
│   └── articles/              # Article cards, body, search, pagination
└── hooks/

src/sanity/
├── env.ts
├── schemaTypes/               # Sanity schemas (post document = Article, …)
└── lib/                       # client, queries, posts helpers

sanity.config.ts               # Studio config (basePath: /studio)
sanity.cli.ts
```

- Homepage navigation is **hash / scrollIntoView** on section IDs; full article list is `/articles`.
- Deploy target: Vercel. Quality: ESLint, Prettier, Husky, lint-staged, conventional commits (Commitlint), semantic-release.

## Conventions

- Colocate section UI under `blocks/`; reusable chrome under `components/`.
- Portfolio copy stays in `data.tsx`; **articles live in Sanity**, not local TS files.
- Match existing dark UI, motion, and Tailwind patterns.

## Ignore / not app code

Unused circuit-breaker sketch — do not wire into the portfolio unless asked:

- `src/helpers.ts`, `src/types.ts`, `src/webClient.ts`

## Articles (Sanity)

Flow: Nav → `/#articles` or `/articles` → click article → `/articles/[slug]`. Manage content at `/studio`. Legacy `/blog` URLs permanently redirect to `/articles`.

### Caching (production)

Best fit for infrequent updates (~1–2 articles/week):

1. **Cached pages (ISR)** — article routes use `revalidate = 3600` (1 hour) and Sanity CDN reads (`useCdn: true`). Visitors get a fast static page; content is not fetched on every request.
2. **On-demand revalidation** — when you publish/update/delete in Studio, a Sanity webhook hits `POST /api/revalidate` and refreshes `/articles` (+ the article slug) immediately.

Configure webhook at [sanity.io/manage](https://www.sanity.io/manage) → API → Webhooks:

- URL: `https://YOUR_DOMAIN/api/revalidate`
- Trigger: Create / Update / Delete on `post` (projection can include `_type, slug`)
- Secret: same value as `SANITY_REVALIDATE_SECRET` in `.env.local` / Vercel
- Filter: `_type == "post"`

Without the webhook, new articles still appear within ~1 hour via ISR.

### Create / update / delete articles

1. Run `npm run dev` and open http://localhost:3000/studio
2. Sign in with your Sanity account
3. Create, edit, publish, or delete **Article** documents (cover image is required)
4. In production, webhook revalidation updates the site right after publish

### Images

- Cover image is **required** (schema + queries filter articles without one).
- Use Sanity hotspot/crop; upload ~1600–2400px wide WebP/JPEG (avoid huge camera originals).
- `urlForImage()` applies `.auto('format').quality(75)` (WebP/AVIF via Sanity CDN).
- `next/image` handles responsive `sizes`, lazy loading, and LQIP blur when available.

### SEO

- `metadataBase`, Open Graph, Twitter cards, and robots defaults in `src/lib/seo.ts`
- Dynamic `sitemap.xml` and `robots.txt` (`src/app/sitemap.ts`, `src/app/robots.ts`)
- Article + breadcrumb JSON-LD on article pages; CollectionPage + Person/WebSite JSON-LD sitewide
- Optional per-article `seoTitle` / `seoDescription` in Studio (Meta group)
- Set `NEXT_PUBLIC_SITE_URL` to your production domain (no trailing slash)
- After deploy: submit `https://YOUR_DOMAIN/sitemap.xml` in Google Search Console

### Free AI features

- Related articles by shared Sanity categories (no paid embeddings)
- Article search on `/articles?q=...`
- Optional **Ask AI** chat via free `GEMINI_API_KEY` (Google AI Studio), rate-limited to 5 requests/IP/hour

Schema: `src/sanity/schemaTypes/post.ts` — document type id remains `post` (do not rename in Sanity); Studio title is **Article**. Fields: title, slug, excerpt, required cover image, portable-text body, publishedAt, **required categories** (predefined list in `categories.ts`), featured, seoTitle, seoDescription.
