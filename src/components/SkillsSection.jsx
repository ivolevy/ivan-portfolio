import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import { profile, translations } from "../data/portfolioData";

export const SkillsSection = () => {
  const { lang } = useLanguage();
  const data = translations[lang];
  const t = data.skillsSection;

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-line scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-20">
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-ink">
              {t.title}
            </h2>
            <p className="max-w-sm text-sm text-muted leading-relaxed font-light">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {data.skillGroups.map((group) => (
              <div key={group.id} className="scroll-reveal min-w-0 border-t border-line pt-6 space-y-3">
                <h3 className="text-base font-medium text-ink">{group.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-light">
                  {group.summary}
                </p>
                <p className="text-xs sm:text-[13px] text-ink/85 leading-relaxed pt-1">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="about" className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-10 border-t border-line scroll-mt-20">
          <div className="md:col-span-7 min-w-0 space-y-6">
            <h3 className="font-serif text-3xl font-normal text-ink">{t.educationTitle}</h3>

            <div className="divide-y divide-line border-t border-b border-line">
              {data.education.map((edu) => (
                <div key={edu.degree} className="py-5 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-base font-medium text-ink">{edu.degree}</h4>
                    <span className="font-mono text-xs text-muted">{edu.period}</span>
                  </div>
                  <div className="text-sm text-accent">{edu.institution}</div>
                  <p className="text-sm text-muted font-light leading-relaxed pt-1">
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted font-light">
              <span className="font-medium text-ink">{t.languagesLabel}</span> {t.languagesValue}
            </p>
          </div>

          <div className="md:col-span-5 min-w-0 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-normal text-ink">{t.certificationsTitle}</h3>

              <ul className="divide-y divide-line border-t border-b border-line list-none p-0 m-0">
                {data.certifications.map((cert) => (
                  <li key={cert.title} className="py-4 flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-ink">{cert.title}</div>
                      <div className="text-xs text-muted">{cert.issuer}</div>
                    </div>
                    <span className="font-mono text-[11px] text-muted shrink-0">
                      {cert.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs text-muted">{t.downloadLabel}</div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={profile.cvEnUrl}
                  download="IVAN LEVY - CV (EN).pdf"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-line px-5 py-2 text-xs font-medium text-ink hover:border-ink/40 no-underline transition-colors"
                >
                  <span>{t.resumeEn}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                </a>
                <a
                  href={profile.cvEsUrl}
                  download="IVAN LEVY - CV (ES).pdf"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-line px-5 py-2 text-xs font-medium text-ink hover:border-ink/40 no-underline transition-colors"
                >
                  <span>{t.resumeEs}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
