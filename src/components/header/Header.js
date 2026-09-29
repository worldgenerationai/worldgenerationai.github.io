import React, {useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {greeting, blogSection} from "../../portfolio";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const viewBlog = blogSection.display;

  const closeMenu = () => setIsMenuOpen(false);

  // Routing is plain pathnames (see App.js), so the current section is just a
  // prefix match -- /blog/<slug> should still mark News. Links carry a trailing
  // slash to match what GitHub Pages serves, but the dev server answers the
  // slashless form too, so compare with the slash stripped from both.
  const trim = p => p.replace(/\/+$/, "");
  const pathname = trim(window.location.pathname);
  const isCurrent = href => {
    const h = trim(href);
    return h === "" ? pathname === "" : pathname === h || pathname.startsWith(h + "/");
  };

  const navItems = [
    {href: "/", label: "Home"},
    {href: "/publications/", label: "Publications"},
    {href: "/resources/", label: "Resources"},
    ...(viewBlog ? [{href: "/blog/", label: "News"}] : [])
  ];

  const menuClasses = ["menu", isMenuOpen ? "menu-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <Headroom>
      <header className="header">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {/* The name stays real text, so it can be selected, translated and
            read aloud; only the figures and sparkles are drawn. */}
        <a href="/" className="logo" aria-label={`${greeting.username} home`}>
          <svg
            className="logo-figures"
            viewBox="0 0 34 30"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="9" cy="6.5" r="6" />
            <path d="M1 30V17q0-8 8-8t8 8v13z" />
            <circle cx="26" cy="12" r="4.5" />
            <path d="M20 30V21q0-6 6-6t6 6v9z" />
          </svg>
          <span className="logo-name">
            CH
            <span className="logo-ai">
              AI
              <svg
                className="logo-sparkles"
                viewBox="0 0 44 16"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M9 0C9 6.24 10.76 8 17 8C10.76 8 9 9.76 9 16C9 9.76 7.24 8 1 8C7.24 8 9 6.24 9 0Z" />
                <path d="M25 1C25 5.68 26.32 7 31 7C26.32 7 25 8.32 25 13C25 8.32 23.68 7 19 7C23.68 7 25 5.68 25 1Z" />
                <path d="M38 3C38 6.9 39.1 8 43 8C39.1 8 38 9.1 38 13C38 9.1 36.9 8 33 8C36.9 8 38 6.9 38 3Z" />
              </svg>
            </span>
            LD
          </span>
        </a>
        <button
          type="button"
          className="menu-icon"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label="Menu"
          onClick={() => setIsMenuOpen(open => !open)}
        >
          <span className="navicon"></span>
        </button>
        <nav aria-label="Main">
          <ul id="nav-menu" className={menuClasses}>
            {navItems.map(({href, label}) => {
              const current = isCurrent(href);
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={current ? "current" : undefined}
                    aria-current={current ? "page" : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li className="switch-item">
              <ToggleSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
export default Header;
