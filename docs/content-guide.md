# Content guide

## Current blog workflow

Until the Astro migration is approved and completed, follow the detailed publishing convention in `README.md`:

1. Maintain the article source under `blog/source/<slug>/index.md`.
2. Keep source figures under `blog/source/<slug>/figures/`.
3. Publish browser assets under `blog/media/<slug>/`.
4. Maintain the corresponding HTML page under `blog/posts/`.
5. Add the post to `blog/index.html` with matching title, summary, date, and URL.

## Naming and metadata

- Use lowercase English slugs separated by hyphens.
- Treat published slugs as permanent URLs.
- Use ISO dates in machine-readable metadata.
- Keep one canonical title and description per article.
- Give every informative image useful alternative text.
- Do not publish drafts, source-only figures, private notes, or licensed material without publication rights.

## After the Astro migration

Once the repository documentation explicitly declares Astro as the current architecture:

- store each article in one Markdown or MDX content entry;
- validate required frontmatter during the build;
- generate listing cards and article routes from the content collection;
- keep static public assets in the documented public asset directory;
- stop manually editing generated article HTML.
