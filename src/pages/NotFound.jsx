import React, { useEffect } from "react";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import Footer from "../components/footer/Footer";
import { StyleProvider } from "../contexts/StyleContext";
import { useDarkTheme } from "../hooks/useDarkTheme";
import "./NotFound.scss";

export default function NotFound() {
  const [isDark, toggleTheme] = useDarkTheme();

  useEffect(() => {
    document.title = "Page not found | CHAILD";
    /* 404.html carries its own noindex, so this is not for the normal case.
       It covers the legacy /?/<path> URLs the shim in index.html still
       decodes: those are served from index.html, so they answer 200 and would
       otherwise look like a real page. Delete this with the shim. */
    const tag = document.createElement("meta");
    tag.name = "robots";
    tag.content = "noindex";
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
        <Header />
        <main id="main-content" className="not-found-container fade-in-up">
          <h1 className="not-found-title">
            Page not found
          </h1>
          <p className="not-found-text">
            Sorry, we couldn't find the page you were looking for. It may have
            moved, or the link may be incorrect.
          </p>
          <a href="/" className="not-found-home-link">
            ← Back to home
          </a>
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}
