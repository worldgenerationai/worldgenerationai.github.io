import React from "react";
import "./BlogCard.scss";

/* headingLevel: the card sits under an <h2> on the homepage and an <h1> on
   /blog, so the level that keeps the outline unbroken differs by context and
   the page passes it. 3 is the homepage case. */
export default function BlogCard({blog, headingLevel = 3}) {
  const Heading = `h${headingLevel}`;
  const isExternal = Boolean(blog.url) && !blog.url.startsWith("/");

  return (
    <div>
      <div className="blog-container">
        <a
          className="blog-card"
          href={blog.url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          <Heading className="blog-title">
            {blog.title}
          </Heading>
          <p className="small">
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
