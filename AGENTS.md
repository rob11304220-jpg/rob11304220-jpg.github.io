# AGENTS.md

## Project purpose

This repository is the source of truth for Luobin Liao's personal website and blog.

Production URL: https://rob11304220-jpg.github.io

## Read first

- Read `README.md` before changing the site.
- Read the relevant guide in `docs/` before changing architecture, content structure, or deployment.
- The current production site is plain HTML, CSS, and JavaScript. Treat a future Astro conversion as a separate migration, not as an implicit prerequisite for ordinary edits.

## Source of truth

- Keep production source, public content, assets, project documentation, and deployment configuration in this repository.
- Do not depend on files outside this repository to build or publish the site.
- Do not commit secrets, credentials, private notes, editor histories, or generated agent/session memory.
- Treat committed source content as authoritative. Do not maintain duplicate editable copies of the same content when a generator can derive one from the other.

## Working rules

- Preserve existing URLs unless the user explicitly approves a URL migration.
- Preserve the established UI unless the user explicitly requests a redesign.
- Prefer small, reviewable changes and inspect `git diff` before completion.
- Do not push, merge, rewrite Git history, or change live deployment settings without explicit user authorization.
- Do not add a production dependency unless it provides a clear maintenance benefit.
- Keep generated build output out of Git unless the documented deployment design requires it.

## Content

- Use lowercase, hyphen-separated permanent slugs for new blog posts.
- Keep titles, descriptions, dates, links, and published assets consistent.
- Give meaningful images descriptive filenames and useful alternative text.
- During the current plain-HTML phase, follow the blog workflow in `README.md`.
- After an approved Astro migration, Markdown or MDX content collections should become the canonical article source and generated pages should not be edited directly.

## Design and accessibility

- Reuse shared layouts or components instead of duplicating navigation and footer markup when the architecture supports it.
- Preserve semantic headings, keyboard navigation, visible focus states, sufficient contrast, and useful alternative text.
- Avoid client-side JavaScript when static HTML and CSS are sufficient.
- For UI-affecting work, compare the affected pages at desktop and mobile widths against the accepted visual baseline.

## Verification

Before considering a change complete:

1. Run the checks documented in `docs/release-checklist.md`.
2. Confirm internal links and assets resolve.
3. Confirm existing public URLs remain valid.
4. Inspect affected pages at desktop and mobile widths when the UI changes.
5. Review the final Git diff and ensure unrelated files were not changed.

## Deployment

- The default production branch is `main`.
- GitHub Actions is the only production deployment path.
- Pull requests and local branches may validate the site but must not publish production.
- Production deployment must use the exact commit merged into `main`.

## Documentation

Update the corresponding file under `docs/` in the same change when altering architecture, content format, verification commands, deployment behavior, URLs, or asset conventions. Keep this file concise; detailed procedures belong in `docs/`.
