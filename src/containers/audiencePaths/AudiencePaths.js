import React from "react";
import emoji from "react-easy-emoji";
import "./AudiencePaths.scss";
import Sparkles from "../../components/sparkles/Sparkles";

// Audience-based entry points into the site. Each card sends a visitor to
// the content most relevant to them. The blog list accepts a comma-separated
// `tag` query so a single link can combine tags (e.g. publications + talks).
const buildTagLink = (tags) =>
  `/blog/?tag=${encodeURIComponent(tags.join(","))}`;

const audiences = [
  {
    icon: "🔬",
    title: "For researchers",
    description: "Read our publications and conference presentations.",
    linkText: "Publications & presentations",
    href: "/publications/"
  },
  {
    icon: "🍎",
    title: "For parents & teachers",
    description:
      "Explore AI literacy resources to use at home and in the classroom.",
    linkText: "Browse resources",
    href: "/resources/"
  },
  {
    icon: "🏛️",
    title: "For policymakers",
    description: "See our white papers and findings summaries.",
    linkText: "White papers & findings",
    href: buildTagLink(["white paper", "policy"])
  }
];

export default function AudiencePaths() {

  return (
    <section
      className="main fade-in-up"
      id="audience-paths"
      aria-labelledby="audience-paths-heading"
    >
      <div className="audience-paths-header">
        <h2 id="audience-paths-heading" className="audience-paths-heading">
          Find what you need{" "}
          <Sparkles />
        </h2>
      </div>

      <ul className="audience-paths-grid">
        {audiences.map((audience) => (
          <li
            key={audience.title}
            className={
              "audience-card"
            }
          >
            <a href={audience.href} className="audience-card-link">
              <span className="audience-card-icon" aria-hidden="true">
                {emoji(audience.icon)}
              </span>
              <h3 className="audience-card-title">{audience.title}</h3>
              <p className="audience-card-description">
                {audience.description}
              </p>
              <span className="audience-card-cta">
                {audience.linkText} →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
