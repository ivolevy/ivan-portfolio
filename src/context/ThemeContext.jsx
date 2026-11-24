import { useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";

const getSystemDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const getStoredScheme = () => {
  try {
    const val = localStorage.getItem("color-scheme");
    return val === "light" || val === "dark" ? val : null;
  } catch {
    return null;
  }
};

const syncMeta = (scheme) => {
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.setAttribute("content", scheme || "light dark");
  }
};

export const ThemeProvider = ({ children }) => {
  const [systemDark, setSystemDark] = useState(getSystemDark);
  const [storedScheme, setStoredScheme] = useState(getStoredScheme);

  const renderedTheme = storedScheme ?? (systemDark ? "dark" : "light");

  useEffect(() => {
    syncMeta(storedScheme);
  }, [storedScheme]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (e) => setSystemDark(e.matches);
    const handleStorage = (e) => {
      if (e.key === "color-scheme") {
        setStoredScheme(e.newValue === "light" || e.newValue === "dark" ? e.newValue : null);
      }
    };

    mql.addEventListener("change", handleMediaChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      mql.removeEventListener("change", handleMediaChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const toggleTheme = () => {
    const target = renderedTheme === "dark" ? "light" : "dark";
    const systemPref = getSystemDark() ? "dark" : "light";

    if (target === systemPref) {
      try {
        localStorage.removeItem("color-scheme");
      } catch (err) {
        void err;
      }
      setStoredScheme(null);
      syncMeta(null);
    } else {
      try {
        localStorage.setItem("color-scheme", target);
      } catch (err) {
        void err;
      }
      setStoredScheme(target);
      syncMeta(target);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        renderedTheme,
        isOverride: storedScheme !== null,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
