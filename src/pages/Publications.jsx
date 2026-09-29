import React, { useEffect } from "react";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import Footer from "../components/footer/Footer";
import { StyleProvider } from "../contexts/StyleContext";
import { useDarkTheme } from "../hooks/useDarkTheme";
import { publications, publicationSections } from "../publications";
import "./Publications.scss";

// Ignore leading punctuation so a quoted title sorts under its first letter.
const titleKey = (title) => title.replace(/^[^A-Za-z0-9]+/, "");

export default function Publications() {
  const [isDark, toggleTheme] = useDarkTheme();

  useEffect(() => {
    document.title = "Publications | CHAILD";
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
        <Header />
        <main id="main-content" className="publications-container fade-in-up">
          <h1
            className="publications-title"
          >
            Publications
          </h1>
          <p className="subTitle publications-intro">
            Papers, talks, and reports by the CHAILD team and our collaborators.
          </p>

          {publicationSections.map((section) => {
            // Newest first, then by title, so an entry lands in the same place
            // wherever it is added to the array. Dates are "YYYY-MM" or bare
            // "YYYY", which sorts last in its year — exactly where an entry
            // with an unknown month belongs.
            const items = publications
              .filter((p) => p.type === section.type)
              .sort(
                (a, b) =>
                  b.date.localeCompare(a.date) ||
                  titleKey(a.title).localeCompare(titleKey(b.title))
              );
            if (items.length === 0) {
              return null;
            }
            return (
              <section
                key={section.type}
                className="publications-section"
                aria-label={section.title}
              >
                <h2 className="publications-section-title">{section.title}</h2>
                <ul className="publications-list">
                  {items.map((pub, i) => {
                    const links = pub.links || [];
                    return (
                    <li
                      key={`${pub.title}-${i}`}
                      className="publication"
                    >
                      {pub.authors && (
                        <span className="publication-authors">
                          {pub.authors}{" "}
                        </span>
                      )}
                      <span className="publication-year">
                        ({pub.date.slice(0, 4)}){". "}
                      </span>
                      <span className="publication-work-title">
                        {pub.title}
                      </span>
                      {pub.venue && (
                        <span className="publication-venue">. {pub.venue}</span>
                      )}
                      <span className="publication-links">
                        {links.map((link, j) => (
                          <React.Fragment key={link.url}>
                            {j === 0 ? " " : " · "}
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="publication-link"
                            >
                              {link.label}
                            </a>
                          </React.Fragment>
                        ))}
                        {pub.post && (
                          <>
                            {" · "}
                            <a
                              href={`/blog/${pub.post}/`}
                              className="publication-link"
                            >
                              Our news
                            </a>
                          </>
                        )}
                      </span>
                    </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}
