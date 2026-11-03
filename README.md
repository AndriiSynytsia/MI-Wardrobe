# MI Wardrobe landing page prototype

A single-page React and Vite prototype for presenting the MI Wardrobe university concept. It uses the supplied wardrobe image, an image-based exploded view, a simulated outfit assistant, a proposed Mini/Pro comparison and a browser-only enquiry preview.

The enquiry preview does not send or save entries. The page is not connected to a live AI service, Google Form, venue map or sales system. Product features and capacities remain concept claims. Pricing and expo details are unannounced.

## Run locally

Use Node.js 20.19+ or 22.12+. Install dependencies with `npm install`, then run `npm run dev`. Use `npm run lint` for the TypeScript check and `npm run build` to create the production bundle in `dist/`. Run `npm run preview` to inspect the built bundle locally.

The included `package-lock.json` pins dependency versions. Use `npm ci` in CI or deployment. The production build also runs the TypeScript check and stops if it fails.

## Deploy

Deploy the output of `npm run build` from `dist/` to a static host that supports Vite assets. The intended Google Sites experience needs the built site hosted at a public HTTPS address and embedded as a full-page URL; Google Sites does not import this React source into editable native blocks. Test the embed signed out and at phone width before publication.

The existing GitHub Pages workflow now installs with `npm ci`, checks TypeScript, builds with Vite and uploads only `dist/`. In the repository's Settings → Pages, select **GitHub Actions** as the source. Push to `main` or run the workflow manually to deploy. Relative asset URLs support both a domain root and a repository subdirectory.

For other static hosts, use install command `npm ci`, build command `npm run build`, and publish directory `dist`. No API keys or runtime server are required. `npm run preview` is for local inspection, not production hosting. See the [Vite static deployment guide](https://vite.dev/guide/static-deploy).

Before public launch, connect and test the actual enquiry form, provide real event details, confirm product statements and replace or remove any placeholder media. Do not describe the browser-only preview as a submitted enquiry.

## Main files

- `src/App.tsx` assembles the landing page sections.
- `src/components/` contains the page sections and interactions.
- `src/index.css` defines the paper-style base.
- `public/assets/wardrobe-idea.png` is the supplied product visual.
- `assets/` holds room and sketch images used by the app.
- `site.html` is an alternate standalone prototype; the Vite deployment entry is `index.html`.
