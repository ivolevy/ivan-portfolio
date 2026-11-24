import { useEffect, useState } from "react";
import { LanguageContext } from "./useLanguage";

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (err) {
    void err;
  }
  return "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (nextLang) => {
    if (nextLang !== "es" && nextLang !== "en") return;
    setLangState(nextLang);
    try {
      localStorage.setItem("portfolio-lang", nextLang);
    } catch (err) {
      void err;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
