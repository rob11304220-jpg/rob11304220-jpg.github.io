# Release checklist

Use the checks appropriate to the current architecture.

## Every change

- Review `git status` and the final diff.
- Confirm no secrets, private notes, editor histories, temporary files, or generated session memory were added.
- Check links and asset paths affected by the change.
- Confirm unrelated files were not modified.

## UI changes

- Open every affected page locally.
- Compare desktop and mobile layouts with the accepted baseline.
- Test navigation, mobile menu behavior, keyboard focus, headings, and image alternative text.
- Check the browser console for new errors.

## Astro site

- Install dependencies from the committed lockfile with `npm ci`.
- Run `npm run check` and require zero errors or warnings.
- Run `npm run build`.
- Inspect the generated static output under `dist/`.
- Verify `/`, `/blog/`, and every published `.html` article route.
- Confirm drafts and source-only content are absent from `dist/`.
- Confirm no client-side hydration directives were added without a documented requirement.

## Publishing boundary

Do not push or merge without explicit authorization. After an authorized merge to `main`, confirm the GitHub Pages workflow succeeds and spot-check the production site.
