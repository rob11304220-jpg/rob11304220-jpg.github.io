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

## Current plain-static site

- Confirm `index.html`, the blog listing, and affected article pages load without a build step.
- Confirm `.github/workflows/deploy.yml` includes every required public directory and excludes `blog/source/`.

## Future Astro site

These checks apply only after Astro becomes the documented current architecture:

- install dependencies from the committed lockfile;
- run the documented type/content checks;
- run the production build;
- inspect the generated static output;
- verify that legacy public URLs still resolve.

## Publishing boundary

Do not push or merge without explicit authorization. After an authorized merge to `main`, confirm the GitHub Pages workflow succeeds and spot-check the production site.
