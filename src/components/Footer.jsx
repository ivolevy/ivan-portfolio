import { useLanguage } from "../context/useLanguage";
import { profile, translations } from "../data/portfolioData";

export const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="border-t border-line py-8 text-xs text-muted">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-8">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>{t.location}</span>
      </div>
    </footer>
  );
};
