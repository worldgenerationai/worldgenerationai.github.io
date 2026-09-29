/*
 * Writes one index.html per route into build/, each carrying its own head.
 *
 * Why: the site is a client-routed SPA on GitHub Pages. Without a file at
 * /blog/<slug>, Pages answers with 404.html and an HTTP 404 status. Browsers
 * do not care -- 404.html redirects and the app boots -- but crawlers read the
 * status and leave, which kept every page except the homepage out of the index.
 * A real file per route makes each one a 200 and gives it a title, description,
 * canonical, Open Graph tags and JSON-LD.
 *
 * Runs as `postbuild`, so `npm run build` and `npm run deploy` both pick it up.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const build = join(root, "build");
const blogDir = join(root, "public", "content", "blog");

const die = (msg) => {
  console.error(`\nprerender: ${msg}\n`);
  process.exit(1);
};

/* `homepage` in package.json is the single source of the site URL: CRA derives
   %PUBLIC_URL% from it, and everything absolute here is built from it too. */
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const SITE = (pkg.homepage || "").replace(/\/+$/, "");
if (!/^https?:\/\//.test(SITE))
  die('package.json needs a "homepage" set to the full site URL');

const OG_IMAGE = `${SITE}/og-image.png`;
const SITE_NAME = "CHAILD";
const SITE_DESC =
  "A UKRI research project defining and designing children's agency in the age of AI";

// ---------------------------------------------------------------- data

/* The app's data modules are ESM while package.json has no "type": "module",
   so importing them by their .js path makes node warn on every build. Copying
   to a temp .mjs sidesteps that, and gives all of them one way in. */
mkdirSync(build, { recursive: true });
async function load(relPath) {
  const tmp = join(build, `__${basename(relPath)}.mjs`);
  writeFileSync(tmp, readFileSync(join(root, relPath)));
  try {
    return await import(pathToFileURL(tmp).href);
  } finally {
    rmSync(tmp);
  }
}

const { blogSection, peopleSection } = await load("src/portfolio.js");
const { publications } = await load("src/publications.js");
const { parseFrontmatter } = await load("src/utils/parseFrontmatter.js");

const slugs = blogSection.blogSlugs;
const people = peopleSection.peopleGroups.flatMap((g) => g.members);

/* Resources.jsx is JSX and cannot be imported; its entries are flat objects.
   A failed parse degrades to a CollectionPage with no ItemList. */
const resourcesSrc = readFileSync(
  join(root, "src", "pages", "Resources.jsx"),
  "utf8"
);
const resources = [
  ...resourcesSrc.matchAll(/name: "([^"]+)",\s*\n\s*url: "([^"]+)"/g)
].map(([, name, url]) => ({ name, url }));

// posts, and the consistency gate
const files = readdirSync(blogDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.slice(0, -3));
const missing = slugs.filter((s) => !files.includes(s));
const unlisted = files.filter((f) => !slugs.includes(f));
if (missing.length)
  die(`blogSlugs lists slugs with no markdown file: ${missing.join(", ")}`);
if (unlisted.length)
  die(`markdown files not registered in blogSlugs: ${unlisted.join(", ")}`);

const posts = slugs
  .map((slug) => ({
    slug,
    ...parseFrontmatter(readFileSync(join(blogDir, `${slug}.md`), "utf8"))
      .frontmatter
  }))
  // Newest first, matching fetchAllBlogMetadata in src/utils/parseFrontmatter.js
  .sort((a, b) => new Date(b.date) - new Date(a.date));

// ---------------------------------------------------------------- helpers

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// < keeps a "</script>" in any string from closing the JSON-LD block early
const ld = (obj) =>
  `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    ...obj
  }).replace(
    /</g,
    "\\u003c"
  )}</script>`;

const ORG = {
  "@type": "Organization",
  name: SITE_NAME,
  url: `${SITE}/`,
  logo: OG_IMAGE
};

function head({ title, description, path, jsonld, type = "website", noindex }) {
  const url = `${SITE}${path}`;
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    // A missing page has no canonical URL of its own to point at.
    noindex
      ? `<meta name="robots" content="noindex">`
      : `<link rel="canonical" href="${esc(url)}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:site_name" content="${SITE_NAME}">`,
    `<meta property="og:locale" content="en_GB">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta property="twitter:card" content="summary_large_image">`,
    `<meta property="twitter:url" content="${esc(url)}">`,
    `<meta property="twitter:title" content="${esc(title)}">`,
    `<meta property="twitter:description" content="${esc(description)}">`,
    `<meta property="twitter:image" content="${OG_IMAGE}">`,
    ...jsonld.map(ld)
  ].join("");
}

const template = (() => {
  try {
    return readFileSync(join(build, "index.html"), "utf8");
  } catch {
    die("build/index.html not found -- run react-scripts build first");
  }
})();

/* Drop the shell's default SEO tags, then splice in this route's. An HTML
   comment fence would be tidier, but CRA's minifier strips comments, so this
   has to name the tags. It must cover everything head() emits -- add a rule
   here when adding a tag there, or both copies ship. */
function render(meta) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta name="(description|robots)"[^>]*>/g, "")
    .replace(/<meta property="(og|twitter):[^"]*"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace("</head>", `${head(meta)}</head>`);
}

/* Every emitted page records itself, so the sitemap is derived from what was
   actually written rather than a second list that has to be kept in step. */
const emitted = [];
function emit(path, meta) {
  const dir = path === "/" ? build : join(build, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), render({ ...meta, path }));
  emitted.push({ path, lastmod: meta.lastmod, priority: meta.priority ?? "0.8" });
}

// ---------------------------------------------------------------- routes

emit("/", {
  priority: "1.0",
  title: "CHAILD | Supporting children's agency",
  description: SITE_DESC,
  jsonld: [
    {
      "@type": "ResearchProject",
      name: "CHAILD — Children's Agency In the age of AI: Leveraging InterDisciplinarity",
      alternateName: SITE_NAME,
      url: `${SITE}/`,
      description: SITE_DESC,
      logo: OG_IMAGE,
      identifier: "MR/Z505882/1",
      funder: {
        "@type": "Organization",
        name: "UK Research and Innovation",
        url: "https://www.ukri.org/"
      },
      member: people.map((name) => ({
        "@type": "Person",
        name: name.split(",")[0].replace(/^(Dr|Professor Sir|Professor|Baroness) /, ""),
        affiliation: { "@type": "Organization", name: name.split(",").slice(1).join(",").trim() }
      }))
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE}/`,
      description: SITE_DESC,
      inLanguage: "en-GB",
      publisher: ORG
    }
  ]
});

emit("/blog/", {
  title: "News | CHAILD",
  description:
    "Studies, publications, events and team news from the CHAILD project.",
  jsonld: [
    {
      "@type": "Blog",
      name: "CHAILD news",
      url: `${SITE}/blog/`,
      publisher: ORG,
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        description: p.description,
        datePublished: p.date,
        url: `${SITE}/blog/${p.slug}/`
      }))
    }
  ]
});

emit("/publications/", {
  title: "Publications | CHAILD",
  description:
    "Papers, talks, workshops and policy reports by the CHAILD team and our collaborators.",
  jsonld: [
    {
      "@type": "CollectionPage",
      name: "CHAILD publications",
      url: `${SITE}/publications/`,
      publisher: ORG,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: publications.length,
        itemListElement: publications.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type":
              p.type === "paper" ? "ScholarlyArticle" : "CreativeWork",
            name: p.title,
            datePublished: p.date,
            ...(p.authors ? { author: { "@type": "Person", name: p.authors } } : {}),
            ...(p.venue ? { publisher: { "@type": "Organization", name: p.venue } } : {}),
            ...(p.links?.[0]?.url ? { url: p.links[0].url } : {})
          }
        }))
      }
    }
  ]
});

emit("/resources/", {
  title: "AI literacy resources | CHAILD",
  description:
    "AI literacy resources for teachers, gathered through our work with computing educators.",
  jsonld: [
    {
      "@type": "CollectionPage",
      name: "AI literacy resources for teachers",
      url: `${SITE}/resources/`,
      publisher: ORG,
      ...(resources.length
        ? {
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: resources.length,
              itemListElement: resources.map((r, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: r.url,
                name: r.name
              }))
            }
          }
        : {})
    }
  ]
});

for (const p of posts) {
  emit(`/blog/${p.slug}/`, {
    priority: "0.6",
    lastmod: p.date,
    title: `${p.title} | CHAILD`,
    description: p.description || SITE_DESC,
    type: "article",
    jsonld: [
      {
          "@type": "BlogPosting",
        headline: p.title,
        description: p.description,
        datePublished: p.date,
        dateModified: p.date,
        keywords: Array.isArray(p.tags) ? p.tags.join(", ") : undefined,
        image: OG_IMAGE,
        inLanguage: "en-GB",
        author: ORG,
        publisher: ORG,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE}/blog/${p.slug}/`
        }
      }
    ]
  });
}

/* GitHub Pages serves this for any unmatched path, with a 404 status. It is
   the app shell, so App.js sees the requested pathname and renders NotFound --
   a real 404 that still looks like the site. It deliberately does not redirect:
   every real route now has its own index.html, so anything landing here is
   genuinely missing and should stay a 404 rather than become a 200. */
writeFileSync(
  join(build, "404.html"),
  render({
    path: "/404",
    title: "Page not found | CHAILD",
    description: "The page you were looking for could not be found.",
    noindex: true,
    jsonld: []
  })
);

// ---------------------------------------------------------------- sitemap

writeFileSync(
  join(build, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    emitted
      .map(
        (u) =>
          `  <url><loc>${SITE}${u.path}</loc>` +
          (u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : "") +
          `<priority>${u.priority}</priority></url>`
      )
      .join("\n") +
    `\n</urlset>\n`
);

// The Sitemap line needs an absolute URL, so it is appended here rather than
// hardcoded in public/robots.txt.
writeFileSync(
  join(build, "robots.txt"),
  readFileSync(join(root, "public", "robots.txt"), "utf8").trimEnd() +
    `\n\nSitemap: ${SITE}/sitemap.xml\n`
);

console.log(
  `prerender: ${emitted.length} pages (${posts.length} posts), ${emitted.length} sitemap entries`
);
