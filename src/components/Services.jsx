import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cpu,
  Search,
  Cloud,
  RefreshCw,
  Sparkles,
  Palette,
  Target,
  Heart
} from 'lucide-react';
import "../assets/styles/services.css";

const SkillCardPremium = ({ icon: Icon, title, tags, description, delay, gridClass }) => (
  <motion.article
    className={`skill-card-premium ${gridClass}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="skill-glow" />

    <div className="skill-icon-container">
      <Icon className="text-gray-800 w-6 h-6 stroke-[1.5]" />
    </div>

    <div className="relative z-10 flex flex-col flex-1 w-full">
      <h3 className="text-lg font-medium text-gray-900 mb-2 font-serif">{title}</h3>
      <p className="text-gray-600 font-light text-[13px] mb-6 leading-relaxed">{description}</p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap -ml-1 mt-auto">
          {tags.map((tag, index) => (
            <span key={index} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>

  </motion.article>
);

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend & Design",
      tags: ["React", "Next.js", "TypeScript", "WordPress", "Tailwind CSS", "UCD Design", "HTML", "CSS"],
      description: "Developing fast, clean, responsive interfaces and intuitive web environments with strict attention to layout aesthetics and UX.",
      gridClass: "md:col-span-1",
      delay: 0.1
    },
    {
      icon: Database,
      title: "Back-End & Data",
      tags: ["SQL Server", "PostgreSQL", "NoSQL", "Redis", "Neo4j", "REST APIs", "PHP", "Supabase", "Node.js"],
      description: "Designing scalable database architectures, technical integrations, and business logic pipelines to link frontends with backend resources.",
      gridClass: "md:col-span-1",
      delay: 0.2
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      tags: ["Git & GitHub", "Vercel", "AWS Operations", "CI/CD Pipelines", "cPanel", "FileZilla", "XAMPP"],
      description: "Deploying secure, modern application bundles, configuring cloud resources, and organizing version control pipelines.",
      gridClass: "md:col-span-1",
      delay: 0.3
    },
    {
      icon: Sparkles,
      title: "Growth & Optimization",
      tags: ["Claude Code", "Google SEO", "Analytics", "Semrush / Ahrefs", "Google Ads", "AI Workflows"],
      description: "Tracking acquisition metrics, managing technical SEO, executing target campaigns, and leveraging LLMs and AI tools to optimize business workflows.",
      gridClass: "md:col-span-1",
      delay: 0.4
    }
  ];

  return (
    <section className="servicesSection pt-0 pb-32 mb-16" id="skills" style={{ scrollMarginTop: '100px' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-celeste/10 rounded-full blur-[100px] -z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-sky-50 border border-sky-100 text-celeste rounded-full text-[10px] tracking-[0.3em] font-bold uppercase mb-6 backdrop-blur-sm">
              Capabilities
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Skills <span className="italic text-celeste">&</span> Expertise
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto font-light text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            A bridge between technical precision and strategic vision, focusing on high-impact digital solutions.
          </motion.p>
        </div>

        <div className="bento-grid max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCardPremium
              key={index}
              icon={category.icon}
              title={category.title}
              tags={category.tags}
              description={category.description}
              delay={category.delay}
              gridClass={category.gridClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
