import React, { useState, useEffect } from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import Sparkles from "../../components/sparkles/Sparkles";
import { fetchAllBlogMetadata } from "../../utils/parseFrontmatter";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog metadata from markdown files
    async function loadBlogs() {
      const blogData = await fetchAllBlogMetadata(blogSection.blogSlugs);
      setBlogs(blogData);
    }
    loadBlogs();
  }, []);

  if (!blogSection.display) {
    return null;
  }

  // Up to 6 latest posts; how many actually show is controlled responsively
  // in CSS (6 in a 2x3 grid on wide screens, 4 on medium, 3 on narrow).
  const displayedBlogs = blogs.slice(0, 6);

  return (
    <section
      className="main fade-in-up"
      id="blogs"
      aria-labelledby="blogs-heading"
    >
      <div className="blog-header">
        <h2 id="blogs-heading" className="blog-header-text">
          {blogSection.title}{" "}
          <Sparkles flip />
        </h2>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {displayedBlogs.map((blog, i) => {
            return (
              <BlogCard
                key={i}
                blog={{
                  url: `/blog/${blog.slug}/`,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description,
                }}
              />
            );
          })}
        </div>
      </div>
      <a className="all-news-link" href="/blog/">
        All news →
      </a>
    </section>
  );
}
