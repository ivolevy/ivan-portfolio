import { useLanguage } from "../context/useLanguage";
import { translations } from "../data/portfolioData";

export const Experience = () => {
  const { lang } = useLanguage();
  const data = translations[lang];
  const t = data.experienceSection;

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-line scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-ink">
            {t.title}
          </h2>
          <p className="max-w-sm text-sm text-muted leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="divide-y divide-line border-t border-b border-line">
          {data.experiences.map((exp) => (
            <article
              key={exp.id}
              className="scroll-reveal py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              <div className="md:col-span-4 min-w-0 space-y-1">
                <div className="font-mono text-xs text-muted">{exp.period}</div>
                <h3 className="text-lg font-medium text-ink pt-1">{exp.company}</h3>
                <div className="text-sm text-accent">{exp.role}</div>
              </div>

              <div className="md:col-span-8 min-w-0">
                <ul className="space-y-3.5 list-none p-0 m-0">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm sm:text-[15px] text-muted leading-relaxed font-light">
                      <span className="font-medium text-ink">{bullet.lead}</span>{" "}
                      {bullet.text}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
