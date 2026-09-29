import React, { useEffect, useRef } from "react";
import "./Top.scss";

export default function Top() {
  const buttonRef = useRef(null);

  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    // When the user scrolls down 20px from the top of the document, show the button
    function scrollFunction() {
      if (!buttonRef.current) {
        return;
      }
      const scrolled =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
      buttonRef.current.style.visibility = scrolled ? "visible" : "hidden";
    }
    scrollFunction(); // hide the button initially
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  // When the user clicks on the button, scroll to the top of the document
  return (
    <button
      ref={buttonRef}
      onClick={TopEvent}
      id="topButton"
      title="Go to top"
      aria-label="Scroll to top"
    >
      {/* Inline rather than an icon font: one glyph is not worth a
          stylesheet and a webfont from a third-party origin. */}
      <svg
        className="top-icon"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
