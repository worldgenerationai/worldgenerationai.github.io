# worldgenerationai.github.io

Website for the CHAILD project, hosted at [chaild.org](https://chaild.org).

The site is a React single-page app built with [Create React App](https://create-react-app.dev/), based on the [DeveloperFolio](https://github.com/saadpasta/developerFolio) template. Source code lives on the `main` branch; the built site is published from the `gh-pages` branch (no Jekyll).

Before changing any colour, typeface or partner logo, read
**[docs/branding.md](docs/branding.md)** — it records the palette and the rules
that keep it accessible, several of which are easy to break without noticing.

## Prerequisites

- [Node.js](https://nodejs.org/) and npm

## Local development

```bash
npm install
npm start
```

`npm start` serves the site at http://localhost:3000 with hot reloading.

Other useful commands:

```bash
npm run build     # production build into ./build
npm test          # run tests
npm run format    # format code with Prettier
```

### Prerendering

`npm run build` runs `scripts/prerender.mjs` afterwards, which writes one
`index.html` per route into `build/` — plus `sitemap.xml`. Without it GitHub
Pages has no file at `/blog/<slug>` and answers with `404.html` and an HTTP 404,
which keeps every page but the home page out of search results.

Each generated page gets its own title, description, canonical URL, Open Graph
tags and JSON-LD. Posts are picked up automatically; a **new top-level route
needs adding to the script**. The build fails if `blogSlugs` and the markdown
files disagree, so a dead URL cannot reach the sitemap.

`404.html` is generated the same way, as the app shell with a `noindex` tag. It
deliberately does not redirect: every real route is a file now, so anything
reaching it is genuinely missing and should stay an HTTP 404 rather than be
turned into a 200.

## Adding content (news posts)

News posts are markdown files served from `public/content/blog/`.

1. Create `public/content/blog/<slug>.md` (the filename without `.md` is the slug, used in the URL `/blog/<slug>`).
2. Start the file with YAML frontmatter:

   ```markdown
   ---
   title: "Post title"
   description: "One-line summary"
   tags: ["tag one", "tag two"]
   date: "2026-07-02"
   url: "/static/media/some-document.pdf"
   image: "/content/blog/images/some-image.png"
   ---

   Post body in markdown...
   ```

   - `title`, `description`, `tags`, and `date` are expected on every post. The `description` is shown as the subtitle on the news card (homepage and `/blog` list) but not on the expanded post view. `tags` power the filter on the `/blog` page.
   - `url` is optional: a "read more" link shown at the bottom of the post — either an external `https://` link or a site-relative path (e.g. a PDF).
   - `image` is optional: a thumbnail shown on the news card.

   Start body headings at `##`, not `#`. The post title is already the page's
   `<h1>`, so a `#` heading adds a second one and breaks the page outline for
   screen readers.

3. Add the slug to the `blogSlugs` array in `src/portfolio.js`. Posts are sorted by `date` automatically (newest first) on both the homepage and the `/blog` list, so the array order doesn't matter — just add the slug anywhere.
4. Put any images in `public/content/blog/images/` (reference them as `/content/blog/images/<name>`) and PDFs or other documents in `public/static/media/` (reference them as `/static/media/<name>`). Use descriptive filenames, e.g. `CHAILD-white-paper-2026.pdf`.
5. Preview locally with `npm start`, then commit and deploy (below).

Other site content (homepage sections, team members, social links, footer grant info, etc.) is configured in `src/portfolio.js`. The footer's partner/funder logos are defined in `src/components/footer/Footer.js`, with image assets in `src/assets/images/logos/` — each partner has a light-theme and a dark-theme logo variant so the strip stays legible in both themes.

## Deployment

```bash
npm run deploy
```

This builds the site and pushes the `build/` directory to the `gh-pages` branch, which GitHub Pages serves at chaild.org. The `CNAME` file comes from `public/`, so it is included automatically.

Client-side routing works on GitHub Pages via `public/404.html`, which GitHub serves for any path with no matching file. It runs a small [spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect (paired with a decode snippet at the top of `public/index.html`) that hands the path off to the SPA, so deep links like `/blog/<slug>` load correctly while genuinely unknown paths render the in-app "Page not found" view.

**Remember to also commit and push your source changes to `main`** — deploying only updates the published site, not the source branch.

