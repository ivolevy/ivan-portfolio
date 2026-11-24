import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../data/portfolioData";

export const Projects = () => {
  const { lang } = useLanguage();
  const data = translations[lang];
  const t = data.projectsSection;

  const visualProjects = data.projects.filter((p) => p.img);
  const engineeringSystems = data.projects.filter((p) => !p.img);
  const [expandedSlug, setExpandedSlug] = useState(engineeringSystems[0]?.slug || null);

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-line scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-ink">
            {t.title}
          </h2>
          <p className="max-w-sm text-sm text-muted leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Visual Featured Work */}
        <div className="space-y-20 mb-24">
          {visualProjects.map((project, index) => (
            <article
              key={project.id}
              className="scroll-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <Link
                to={`/projects/${project.slug}`}
                className={`block min-w-0 lg:col-span-7 overflow-hidden rounded-xl border border-line bg-surface group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.altText}
                    width={960}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className={`min-w-0 lg:col-span-5 space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>{project.year}</span>
                  <span>·</span>
                  <span>{project.organization}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ink tracking-tight">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="no-underline text-ink hover:text-accent transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="text-sm sm:text-[15px] text-muted leading-relaxed font-light">
                  {project.summary}
                </p>

                <p className="text-xs font-medium text-accent">
                  {project.metric}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-medium">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex min-h-[36px] items-center gap-1 text-ink hover:text-accent no-underline transition-colors"
                  >
                    <span>{t.readCase}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[36px] items-center gap-1 text-muted hover:text-ink no-underline transition-colors"
                    >
                      <span>{t.visitSite}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Systems & Engineering Index */}
        <div>
          <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-line">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink">
              {t.systemsTitle}
            </h3>
            <span className="text-xs text-muted hidden sm:inline">
              {t.systemsHint}
            </span>
          </div>

          <div className="divide-y divide-line border-b border-line">
            {engineeringSystems.map((sys) => {
              const isOpen = expandedSlug === sys.slug;
              return (
                <div key={sys.id} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpandedSlug(isOpen ? null : sys.slug)}
                    className="w-full text-left grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline group"
                  >
                    <span className="sm:col-span-2 font-mono text-xs text-muted">
                      {sys.year}
                    </span>
                    <span className="sm:col-span-5 text-base sm:text-lg font-medium text-ink group-hover:text-accent transition-colors">
                      {sys.title}
                    </span>
                    <span className="sm:col-span-4 text-xs sm:text-sm text-muted">
                      {sys.metric}
                    </span>
                    <span className="sm:col-span-1 flex sm:justify-end text-muted">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-ink" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 sm:grid sm:grid-cols-12 sm:gap-4">
                      <div className="sm:col-start-3 sm:col-span-10 space-y-4 pt-2">
                        <p className="text-sm text-muted leading-relaxed font-light max-w-2xl">
                          {sys.description}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                          {sys.techStack.map((tech) => (
                            <span key={tech} className="text-ink/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-5 pt-1 text-xs font-medium">
                          <Link
                            to={`/projects/${sys.slug}`}
                            className="inline-flex min-h-[34px] items-center gap-1 text-accent hover:underline no-underline"
                          >
                            <span>{t.fullCase}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                          {sys.link && (
                            <a
                              href={sys.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-[34px] items-center gap-1 text-muted hover:text-ink no-underline"
                            >
                              <span>{t.liveApp}</span>
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          )}
                          {sys.repoUrl && (
                            <a
                              href={sys.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-[34px] items-center gap-1 text-muted hover:text-ink no-underline"
                            >
                              <span>{t.github}</span>
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
