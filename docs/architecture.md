# Architecture

## Current system

The production site is a static GitHub Pages site implemented with HTML, CSS, and JavaScript.

- `index.html`: homepage and canonical site chrome
- `css/styles.css`: shared styling
- `js/main.js`: lightweight browser behavior
- `assets/`: public site assets
- `blog/index.html`: blog listing
- `blog/posts/`: published article pages
- `blog/source/`: Markdown source and source figures; excluded from deployment
- `blog/media/`: published article media
- `.github/workflows/deploy.yml`: production deployment

Pushing an approved commit to `main` triggers GitHub Actions. The workflow stages public static files, removes unpublished blog source, and deploys the artifact to GitHub Pages.

## Invariants

- The repository builds and publishes without files from sibling repositories or user-specific directories.
- Existing public URLs remain stable unless a migration plan explicitly covers compatibility.
- Header, navigation, and footer remain visually and semantically consistent across pages.
- Secrets and private working notes never enter the public repository.

## Planned Astro migration

Astro is a proposed maintenance upgrade, not yet the current architecture. Perform it in a dedicated branch after recording desktop and mobile visual baselines.

The migration should:

- preserve the accepted HTML structure, CSS behavior, UI, and public URLs;
- convert repeated site chrome into shared components;
- make Markdown or MDX the single source for each article;
- generate listings, article pages, metadata, and feeds from structured content;
- keep the result fully static for GitHub Pages;
- avoid adding client-side hydration unless a feature requires it.

Do not combine the initial path migration, an Astro conversion, and a visual redesign in one change.
