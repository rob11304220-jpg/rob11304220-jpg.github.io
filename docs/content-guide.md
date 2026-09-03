# Content guide

## Blog workflow

1. Add one canonical entry at `src/content/blog/<slug>.md` or `.mdx`.
2. Supply the required frontmatter validated by `src/content.config.ts`.
3. Put published images under `public/blog/media/<slug>/`.
4. Reference public images with root-relative `/blog/media/<slug>/...` URLs.
5. Run `npm run check` and `npm run build`; never edit generated files under `dist/`.

The collection generates the blog listing, article page, date, description, title, canonical metadata, and permanent route.

## Naming and metadata

- Use lowercase English slugs separated by hyphens.
- Treat published slugs as permanent URLs.
- Use ISO dates in machine-readable metadata.
- Keep one canonical title and description per article.
- Give every informative image useful alternative text.
- Do not publish drafts, source-only figures, private notes, or licensed material without publication rights.

## Required frontmatter

- `title`: article and listing title
- `description`: listing excerpt and description metadata
- `publishedAt`: ISO publication date
- `dateDisplay`: visible localized date
- `draft`: excludes an entry from public routes and listings when true
- `math`: loads MathJax only for articles that need it
