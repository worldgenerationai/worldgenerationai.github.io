/**
 * Parse YAML frontmatter from markdown content.
 * Expects format:
 * ---
 * key: value
 * ---
 * # Content starts here
 */
export function parseFrontmatter(markdown) {
  const fenceMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!fenceMatch) {
    return { frontmatter: {}, content: markdown };
  }

  const [, rawFrontmatter, content] = fenceMatch;
  const frontmatter = {};

  // Simple YAML parser for key: value pairs
  const lines = rawFrontmatter.split('\n');
  lines.forEach((line) => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      // Parse values: handle arrays, strings, booleans
      if (value.startsWith('[') && value.endsWith(']')) {
        // Array: [a, b, c] -> ['a', 'b', 'c']
        frontmatter[key] = value
          .slice(1, -1)
          .split(',')
          .map((v) => v.trim().replace(/^["']|["']$/g, ''));
      } else if (value === 'true' || value === 'false') {
        frontmatter[key] = value === 'true';
      } else {
        // Remove quotes if present
        frontmatter[key] = value.replace(/^["']|["']$/g, '');
      }
    }
  });

  return { frontmatter, content };
}

/** Fetch a markdown file and parse its frontmatter. */
export async function fetchAndParseBlog(slug) {
  try {
    const res = await fetch(`/content/blog/${slug}.md`);
    if (!res.ok) return null;
    const markdown = await res.text();
    const { frontmatter, content } = parseFrontmatter(markdown);
    // A response without a frontmatter title is not a blog post. The dev
    // server (and SPA fallbacks) answer unknown paths with index.html and
    // status 200, which would otherwise render raw HTML as a "post".
    if (!frontmatter.title) return null;
    return { ...frontmatter, slug, content };
  } catch (e) {
    console.error(`Error fetching blog ${slug}:`, e);
    return null;
  }
}

/** Fetch metadata for a list of blog slugs. */
export async function fetchAllBlogMetadata(slugs) {
  const blogs = await Promise.all(
    slugs.map((slug) => fetchAndParseBlog(slug))
  );
  const valid = blogs.filter(Boolean); // Remove nulls
  // Newest first. Array.sort is stable, so posts sharing a date keep their
  // order from the slug manifest.
  valid.sort((a, b) => new Date(b.date) - new Date(a.date));
  return valid;
}
