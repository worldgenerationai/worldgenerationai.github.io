import React from "react";
import "./Sparkles.scss";

/* A decorative flourish, the same trio as the mark. Hidden from assistive
   tech, so it must never be the only thing marking something out.

   `flip` mirrors it, so repeated use does not read as one stamp reapplied. */
export default function Sparkles({flip = false, className = ""}) {
  return (
    <svg
      className={`sparkles${flip ? " sparkles-flip" : ""}${
        className ? ` ${className}` : ""
      }`}
      viewBox="0 0 40 22"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10 2C10 8.24 11.76 10 18 10C11.76 10 10 11.76 10 18C10 11.76 8.24 10 2 10C8.24 10 10 8.24 10 2Z" />
      <path d="M27 1C27 4.9 28.1 6 32 6C28.1 6 27 7.1 27 11C27 7.1 25.9 6 22 6C25.9 6 27 4.9 27 1Z" />
      <path d="M33 13C33 16.12 33.88 17 37 17C33.88 17 33 17.88 33 21C33 17.88 32.12 17 29 17C32.12 17 33 16.12 33 13Z" />
    </svg>
  );
}
