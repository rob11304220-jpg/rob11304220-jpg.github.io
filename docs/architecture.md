# Architecture

## Current system

The site is an Astro project that produces fully static files for GitHub Pages.

- `src/pages/`: file-based public routes
- `src/components/`: shared header, navigation, and footer
- `src/layouts/`: shared base and article layouts
- `src/content/blog/`: canonical Markdown or MDX article entries
- `src/content.config.ts`: validated blog metadata schema
- `src/styles/styles.css`: shared styling
- `scripts/check-links.mjs`: generated-site link and asset validation
- `public/`: browser JavaScript, media, icons, and other copied assets
- `dist/`: generated static output; ignored by Git
- `.github/workflows/deploy.yml`: production build and Pages deployment

Pushing an approved commit to `main` triggers GitHub Actions. The official Astro action installs from the committed lockfile, builds the static site, and uploads `dist/` for GitHub Pages.

## Invariants

- The repository builds and publishes without files from sibling repositories or user-specific directories.
- Existing public URLs remain stable unless an approved compatibility plan says otherwise.
- Header, navigation, and footer remain visually and semantically consistent across pages.
- Secrets and private working notes never enter the public repository.

## Rendering and routes

- `output: "static"` keeps the site server-free.
- `build.format: "preserve"` keeps `/blog/` and permanent `.html` article URLs simultaneously.
- Blog listing cards, article routes, titles, descriptions, dates, and canonical metadata are generated from the content collection.
- No framework component is hydrated on the client. The existing navigation script remains a plain static asset.

## Discovery and metadata

- The official Astro sitemap integration generates sitemap files from static public routes and excludes the 404 page.
- A static endpoint generates `robots.txt` from the configured production URL.
- The shared base layout owns canonical, Open Graph, Twitter Card, and JSON-LD metadata.
- The homepage identifies the site owner, the blog identifies a collection page, and each article identifies a blog posting.
- `src/pages/404.astro` provides the static not-found page and is marked `noindex`.
