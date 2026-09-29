import React, { useContext, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./GetInvolved.scss";
import StyleContext from "../../contexts/StyleContext";
import qrCodesignPrototypes from "../../assets/images/qr/qr-codesign-prototypes.png";
import qrYouthAiResearch from "../../assets/images/qr/qr-youth-ai-research.png";

// Calls to action for taking part in our research. Each item shows a QR code
// beside the link, so a form can also be reached from a printed hand-out.
// Edit the items below as studies open and close.
const getInvolved = {
  display: true,
  title: "Take part in our research",
  subtitle:
    "We are looking for young people and teachers to help shape how AI supports children's agency.",
  items: [
    {
      audience: "Parents & guardians",
      description:
        "Register your teenager's interest in helping us co-design AI prototypes - open to ages 13-17.",
      linkText: "Register their interest",
      url: "https://forms.cloud.microsoft/e/GfkfK0mMvQ",
      qr: qrCodesignPrototypes
    },
    {
      audience: "Teachers",
      description:
        "Tell us you would like your school to be involved in our AI research.",
      linkText: "Get involved",
      url: "https://forms.cloud.microsoft/e/QGRb1AN0u4",
      qr: qrYouthAiResearch
    }
  ]
};

export default function GetInvolved() {
  const { isDark } = useContext(StyleContext);
  // The QR shown enlarged in the zoom dialog, or null when it is closed.
  const [zoomed, setZoomed] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!zoomed) {
      return undefined;
    }
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomed(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    // Move focus into the dialog and stop the page behind it scrolling.
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [zoomed]);

  const openZoom = (item, event) => {
    triggerRef.current = event.currentTarget;
    setZoomed(item);
  };

  const closeZoom = () => {
    setZoomed(null);
    // Return focus to the QR that opened the dialog.
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  if (!getInvolved.display || getInvolved.items.length === 0) {
    return null;
  }

  return (
    <section
      className="main fade-in-up"
      id="get-involved"
      aria-labelledby="get-involved-heading"
    >
      <div className="get-involved-card">
        <div className="get-involved-header">
          <h2 id="get-involved-heading" className="get-involved-heading">
            {getInvolved.title}
          </h2>
          <p className="get-involved-subtitle">{getInvolved.subtitle}</p>
        </div>

        <ul className="get-involved-list">
          {getInvolved.items.map((item) => (
            <li key={item.audience} className="get-involved-item">
              <button
                type="button"
                className="get-involved-qr-button"
                onClick={(event) => openZoom(item, event)}
                aria-label={`Enlarge the QR code for the ${item.audience.toLowerCase()} form`}
              >
                {/* Decorative: the button label and adjacent link describe it. */}
                <img className="get-involved-qr" src={item.qr} alt="" />
              </button>
              <div className="get-involved-item-text">
                <h3 className="get-involved-item-title">{item.audience}</h3>
                <p className="get-involved-item-description">
                  {item.description}
                </p>
                <a
                  className="get-involved-link"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.linkText} →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Rendered into <body> so the page's overflow clipping cannot clip it. */}
      {zoomed &&
        ReactDOM.createPortal(
          <div
            className="qr-dialog-backdrop"
            role="presentation"
            onClick={closeZoom}
          >
            <div
              className={isDark ? "dark-mode qr-dialog" : "qr-dialog"}
              role="dialog"
              aria-modal="true"
              aria-label={`QR code for the ${zoomed.audience.toLowerCase()} form`}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                className="qr-dialog-image"
                src={zoomed.qr}
                alt={`QR code linking to the ${zoomed.audience.toLowerCase()} form`}
              />
              <a
                className="get-involved-link qr-dialog-link"
                href={zoomed.url}
                target="_blank"
                rel="noreferrer"
              >
                {zoomed.linkText} →
              </a>
              <button
                type="button"
                className="qr-dialog-close"
                ref={closeButtonRef}
                onClick={closeZoom}
              >
                Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
