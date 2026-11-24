import { Link } from "react-router-dom";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../data/portfolioData";

export const NotFound = () => {
  const { lang } = useLanguage();
  const t = translations[lang].notFound;

  return (
    <main id="main-content" className="min-h-[80dvh] flex flex-col justify-center items-center px-6 text-center">
      <h1 className="font-serif text-5xl text-ink mb-3">404</h1>
      <p className="text-sm text-muted mb-6">
        {t.desc}
      </p>
      <Link
        to="/"
        className="inline-flex min-h-[42px] items-center rounded-full border border-line px-5 py-2 text-xs font-medium text-ink hover:border-ink/40 no-underline transition-colors"
      >
        {t.back}
      </Link>
    </main>
  );
};
