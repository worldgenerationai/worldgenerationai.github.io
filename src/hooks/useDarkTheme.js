import { useEffect, useState } from "react";

const STORAGE_KEY = "isDark";
const DARK_SCHEME_QUERY = "(prefers-color-scheme: dark)";

function readStoredPreference() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === null ? null : JSON.parse(stored);
  } catch (e) {
    return null;
  }
}

/**
 * Theme state that follows the OS prefers-color-scheme setting, live,
 * until the visitor explicitly picks a theme with the toggle — that
 * choice is then remembered in localStorage and wins from then on.
 */
export const useDarkTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = readStoredPreference();
    return stored !== null
      ? stored
      : window.matchMedia(DARK_SCHEME_QUERY).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_SCHEME_QUERY);
    const onSchemeChange = (event) => {
      // an explicit choice made with the toggle wins over the OS setting
      if (readStoredPreference() === null) {
        setIsDark(event.matches);
      }
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", onSchemeChange);
      return () => mediaQuery.removeEventListener("change", onSchemeChange);
    }
    // Safari < 14
    mediaQuery.addListener(onSchemeChange);
    return () => mediaQuery.removeListener(onSchemeChange);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        // theme still switches for this visit even if storage is unavailable
      }
      return next;
    });
  };

  return [isDark, toggleTheme];
};
