import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import BlogCard from "../components/blogCard/BlogCard";
import ScrollToTopButton from "../containers/topbutton/Top";
import Footer from "../components/footer/Footer";
import { blogSection } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useDarkTheme } from "../hooks/useDarkTheme";
import { fetchAllBlogMetadata } from "../utils/parseFrontmatter";
import "../containers/blogs/Blog.scss";
import "./BlogList.scss";

export default function BlogList() {
  const [isDark, toggleTheme] = useDarkTheme();
  const [blogs, setBlogs] = useState([]);
  // Allow deep-linking to a pre-filtered list, e.g. /blog?tag=publication
  // or several tags at once, e.g. /blog?tag=publication,talks
  const [selectedTags, setSelectedTags] = useState(() => {
    const tag = new URLSearchParams(window.location.search).get("tag");
    return tag
      ? tag
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];
  });
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    document.title = "News | CHAILD";
  }, []);

  useEffect(() => {
    // Fetch all blog metadata from markdown files
    async function loadBlogs() {
      const blogData = await fetchAllBlogMetadata(blogSection.blogSlugs);
      setBlogs(blogData);

      // Extract unique tags from all blogs
      const tags = new Set();
      blogData.forEach((blog) => {
        if (blog.tags && Array.isArray(blog.tags)) {
          blog.tags.forEach((tag) => tags.add(tag));
        }
      });
      setAllTags(Array.from(tags).sort());
    }

    loadBlogs();
  }, []);

  // Filter blogs by selected tags (show if any selected tag matches)
  const filteredBlogs =
    selectedTags.length === 0
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.tags && blog.tags.some((tag) => selectedTags.includes(tag))
        );

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
        <Header />
        <main id="main-content" className="main fade-in-up">
          <div className="blog-header">
            <h1 className="blog-header-text">{blogSection.title}</h1>
            <p
              className={
                "subTitle blog-subtitle"
              }
            >
              {blogSection.subtitle}
            </p>
          </div>

          {/* Tag Filter */}
          {allTags.length > 0 && (
            <div className="blog-tags-filter">
              <p className="tags-label">Filter by tags:</p>
              <div className="tags-container">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    className={`tag-button ${
                      selectedTags.includes(tag) ? "active" : ""
                    }`}
                    aria-pressed={selectedTags.includes(tag)}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="blog-main-div">
            <div className="blog-text-div">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog, i) => (
                  <BlogCard
                    key={i}
                    headingLevel={2}
                    blog={{
                      url: `/blog/${blog.slug}/`,
                      image: blog.image,
                      title: blog.title,
                      description: blog.description,
                    }}
                  />
                ))
              ) : (
                <p>
                  No blogs match the selected tags.
                </p>
              )}
            </div>
          </div>
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}
