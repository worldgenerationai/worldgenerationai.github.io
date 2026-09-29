import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import Footer from "../components/footer/Footer";
import { StyleProvider } from "../contexts/StyleContext";
import { useDarkTheme } from "../hooks/useDarkTheme";
import { fetchAndParseBlog } from "../utils/parseFrontmatter";
import "./BlogPost.scss";

export default function BlogPost({ slug }) {
  const [isDark, toggleTheme] = useDarkTheme();
  const [post, setPost] = useState(null);
  const [mdContent, setMdContent] = useState(null);
  const [MdRenderer, setMdRenderer] = useState(null);
  const [remarkPlugins, setRemarkPlugins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      const blogPost = await fetchAndParseBlog(slug);
      if (!blogPost) {
        setPost(null);
        setLoading(false);
        return;
      }
      setPost(blogPost);
      // Extract content from the parsed frontmatter result
      setMdContent(blogPost.content);
      setLoading(false);
    }

    loadPost();

    async function loadRenderer() {
      try {
        const rm = await import("react-markdown");
        const gfm = await import("remark-gfm");
        setMdRenderer(() => rm.default);
        setRemarkPlugins([gfm.default]);
      } catch (e) {
        setMdRenderer(null);
      }
    }

    loadRenderer();
  }, [slug]);

  useEffect(() => {
    if (post && post.title) {
      document.title = `${post.title} | CHAILD`;
    }
  }, [post]);

  if (loading) {
    return (
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
          <Header />
          <main id="main-content" className="blog-post-container">
            <p>Loading...</p>
          </main>
          <Footer />
          <ScrollToTopButton />
        </StyleProvider>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
          <Header />
          <main id="main-content" className="blog-post-container">
            <h1>Post not found</h1>
            <a href="/blog/">← Back to all posts</a>
          </main>
          <Footer />
          <ScrollToTopButton />
        </StyleProvider>
      </div>
    );
  }

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
        <Header />
        <main id="main-content" className="blog-post-container fade-in-up">
          <a href="/blog/" className="back-link">
            ← Back to all posts
          </a>
          <h1
            className="blog-post-title"
          >
            {post.title}
          </h1>
          {/* Display tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="blog-post-tags">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="blog-tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Display date; format in UTC so "2026-02-01" doesn't render
                as the previous day in timezones west of UTC */}
          {post.date && (
            <p className="blog-post-date">
              Published:{" "}
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(undefined, {
                  timeZone: "UTC",
                })}
              </time>
            </p>
          )}

          {mdContent ? (
            MdRenderer ? (
              <div className="blog-markdown">
                <MdRenderer remarkPlugins={remarkPlugins}>
                  {mdContent}
                </MdRenderer>
              </div>
            ) : (
              <pre style={{ whiteSpace: "pre-wrap" }}>{mdContent}</pre>
            )
          ) : (
            <p>Loading content…</p>
          )}

          {post.url && (
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="read-more-link"
            >
              Original / Download
            </a>
          )}
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}
