import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../data/portfolioData";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const data = translations[lang];
  const t = data.projectDetail;

  const projectIndex = data.projects.findIndex((p) => p.slug === slug);
  const project = data.projects[projectIndex];
  const nextProject = data.projects[(projectIndex + 1) % data.projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} — Ivan Levy`;
    }
    return () => {
      document.title = data.metaTitle;
    };
  }, [slug, project, data.metaTitle]);

  if (!project) {
    return (
      <main id="main-content" className="min-h-[80dvh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl text-ink mb-3">{t.notFound}</h1>
        <Link to="/#projects" className="text-sm text-accent hover:underline">
          {t.backWork}
        </Link>
      </main>
    );
  }

  return (
    <main id="main-content" className="pt-14 pb-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mb-12">
          <Link
            to="/#projects"
            className="inline-flex min-h-[36px] items-center gap-2 text-xs text-muted hover:text-ink no-underline transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{t.backSelected}</span>
          </Link>
        </div>

        <header className="mb-14 space-y-6">
          <div className="text-xs text-muted">
            {project.organization} · {project.year}
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-ink leading-[1.05]">
            {project.title}
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-muted leading-relaxed font-light">
            {project.summary}
          </p>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-t border-b border-line text-sm m-0">
            <div>
              <dt className="text-xs text-muted mb-1">{t.role}</dt>
              <dd className="font-medium text-ink m-0">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted mb-1">{t.timeline}</dt>
              <dd className="font-medium text-ink m-0">{project.year}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted mb-1">{t.outcome}</dt>
              <dd className="font-medium text-accent m-0">{project.metric}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted mb-1">{t.link}</dt>
              <dd className="m-0">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-ink hover:text-accent no-underline"
                  >
                    <span>{t.visitSite}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-muted">{t.internal}</span>
                )}
              </dd>
            </div>
          </dl>
        </header>

        {project.img && (
          <section className="mb-16 overflow-hidden rounded-xl border border-line bg-surface">
            <img
              src={project.img}
              alt={project.altText}
              className="w-full h-auto max-h-[520px] object-cover object-left-top"
            />
          </section>
        )}

        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-4 space-y-8">
            <div>
              <h2 className="text-xs uppercase tracking-wider text-muted mb-3">
                {t.technologies}
              </h2>
              <p className="text-sm text-ink leading-relaxed">
                {project.techStack.join(" · ")}
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-wider text-muted mb-3">
                {t.highlights}
              </h2>
              <ul className="space-y-2 list-none p-0 m-0 text-sm text-muted font-light">
                {project.highlights.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8 text-sm sm:text-base text-muted leading-relaxed font-light">
            <div>
              <h2 className="font-serif text-2xl font-normal text-ink mb-2">{t.overview}</h2>
              <p>{project.description}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-normal text-ink mb-2">{t.challenge}</h2>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-normal text-ink mb-2">{t.solution}</h2>
              <p>{project.solution}</p>
            </div>
          </div>
        </section>

        <nav
          aria-label="Case study pagination"
          className="border-t border-line pt-8 flex items-center justify-between gap-4 text-xs font-medium"
        >
          <Link
            to="/#projects"
            className="inline-flex min-h-[40px] items-center gap-2 text-muted hover:text-ink no-underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{t.allWork}</span>
          </Link>

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex min-h-[40px] items-center gap-1.5 text-ink hover:text-accent no-underline"
            >
              <span>{t.next}: {nextProject.title}</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
};
