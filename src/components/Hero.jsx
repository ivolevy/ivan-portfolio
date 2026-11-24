import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import { profile, translations } from "../data/portfolioData";

export const Hero = () => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section id="hero" className="pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-sm text-muted mb-6">
          {t.eyebrow}
        </p>

        <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-[4.75rem] font-normal tracking-[-0.025em] text-ink leading-[1.03] max-w-4xl">
          {t.headline}
        </h1>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pt-10 border-t border-line">
          <div className="md:col-span-7 min-w-0 space-y-4">
            <p className="text-base sm:text-[17px] text-ink/90 leading-relaxed font-light">
              {t.bio1}
            </p>
            <p className="text-sm sm:text-[15px] text-muted leading-relaxed font-light">
              {t.bio2}
            </p>
          </div>

          <div className="md:col-span-5 min-w-0 flex flex-col justify-between gap-6">
            <dl className="space-y-3 text-sm m-0">
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
                <dt className="text-muted">{t.currentlyLabel}</dt>
                <dd className="text-ink font-medium m-0">{t.currentlyValue}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
                <dt className="text-muted">{t.degreeLabel}</dt>
                <dd className="text-ink font-medium m-0">{t.degreeValue}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
                <dt className="text-muted">{t.resumeLabel}</dt>
                <dd className="flex items-center gap-3 m-0">
                  <a
                    href={profile.cvEnUrl}
                    download="IVAN LEVY - CV (EN).pdf"
                    className="inline-flex items-center gap-1 text-accent hover:underline no-underline font-medium"
                  >
                    English <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <span className="text-muted">/</span>
                  <a
                    href={profile.cvEsUrl}
                    download="IVAN LEVY - CV (ES).pdf"
                    className="inline-flex items-center gap-1 text-accent hover:underline no-underline font-medium"
                  >
                    Español <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-5 text-sm">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex min-h-[40px] items-center rounded-full bg-ink px-5 py-2 text-xs font-medium text-canvas hover:opacity-85 transition-opacity no-underline"
              >
                {t.ctaWork}
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors no-underline"
              >
                GitHub
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors no-underline"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-muted hover:text-ink transition-colors no-underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
