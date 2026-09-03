# Architecture

## Current system

The site is an Astro project that produces fully static files for GitHub Pages.

- `src/pages/`: file-based public routes
- `src/components/`: shared header, navigation, and footer
- `src/layouts/`: shared base and article layouts
- `src/content/blog/`: canonical Markdown or MDX article entries
- `src/content.config.ts`: validated blog metadata schema
- `src/styles/styles.css`: shared styling
- `public/`: browser JavaScript, media, icons, and other copied assets
- `dist/`: generated static output; ignored by Git
- `.github/workflows/deploy.yml`: production build and Pages deployment

Pushing an approved commit to `main` triggers GitHub Actions. The official Astro action installs from the committed lockfile, builds the static site, and uploads `dist/` for GitHub Pages.

## Invariants

- The repository builds and publishes without files from sibling repositories or user-specific directories.
- Existing public URLs remain stable unless a migration plan explicitly covers compatibility.
- Header, navigation, and footer remain visually and semantically consistent across pages.
- Secrets and private working notes never enter the public repository.

## Rendering and routes

- `output: "static"` keeps the site server-free.
- `build.format: "preserve"` keeps `/blog/` and legacy `.html` article URLs simultaneously.
- Blog listing cards, article routes, titles, descriptions, dates, and canonical metadata are generated from the content collection.
- No framework component is hydrated on the client. The existing navigation script remains a plain static asset.
