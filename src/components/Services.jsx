import { motion } from "framer-motion";
import {
  Code,
  Database,
  Brain,
  Users,
  Globe,
} from 'lucide-react';
import "../assets/styles/services.css";

const SkillCardPremium = ({ icon: Icon, title, skills, delay, gridClass }) => (
  <motion.article
    className={`skill-card-premium ${gridClass}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="skill-glow" />

    <div className="skill-icon-container">
      <Icon className="text-white w-6 h-6 stroke-[1.5]" />
    </div>

    <div className="relative z-10 flex flex-col h-full w-full">
      <h3 className="text-xl font-medium text-white mb-6 font-serif">{title}</h3>

      <div className="flex flex-wrap -ml-1 mt-auto">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>

  </motion.article>
);

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Core Development",
      skills: [
        "React & Next.js",
        "TypeScript",
        "Modern CSS/Tailwind",
        "WordPress Advanced",
        "PHP & Performance",
        "Responsive Architecture"
      ],
      gridClass: "md:col-span-2",
      delay: 0.1
    },
    {
      icon: Database,
      title: "Backend & Systems",
      skills: [
        "PostgreSQL",
        "Supabase",
        "API Design",
        "Database Architecture",
        "SQL Optimization"
      ],
      gridClass: "md:col-span-1",
      delay: 0.2
    },
    {
      icon: Brain,
      title: "AI Integration",
      skills: [
        "LLM Implementation",
        "Custom AI Agents",
        "Prompt Engineering",
        "Automation Workflows"
      ],
      gridClass: "md:col-span-1",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Leadership",
      skills: [
        "Team Management",
        "Strategic Planning",
        "Agile Methodology",
        "Client Success"
      ],
      gridClass: "md:col-span-1",
      delay: 0.4
    },
    {
      icon: Globe,
      title: "Languages",
      skills: [
        "Spanish (Native)",
        "English (Advanced)",
        "Cross-Cultural Ops"
      ],
      gridClass: "md:col-span-1",
      delay: 0.5
    },
  ];

  return (
    <section className="servicesSection pt-0 pb-32 mb-16" id="skills" style={{ scrollMarginTop: '100px' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] -z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 rounded-full text-[10px] tracking-[0.3em] font-bold uppercase mb-6 backdrop-blur-sm">
              Capabilities
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Skills <span className="italic text-pink-400">&</span> Expertise
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto font-light text-lg leading-relaxed"
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
              skills={category.skills}
              delay={category.delay}
              gridClass={category.gridClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
