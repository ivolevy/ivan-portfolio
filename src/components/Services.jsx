import { motion } from "framer-motion";
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Brain, 
  Users, 
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Target
} from 'lucide-react';
import "../assets/styles/services.css";

const SkillCard = ({ icon: Icon, title, skills, delay }) => (
  <motion.article
    className="group flex flex-col items-center text-center glass-card p-6 rounded-2xl w-full h-full hover:bg-white/5 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="mb-4">
      <Icon className="text-gray-400 w-8 h-8 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
    </div>
    
    <h3 className="text-lg font-medium text-white mb-4 border-b border-white/10 pb-2 inline-block">{title}</h3>
    
    <div className="">
      {skills.map((skill, index) => (
        <p key={index} className="text-gray-400 font-light text-sm hover:text-gray-200 transition-colors cursor-default leading-tight">
          {skill}
        </p>
      ))}
    </div>
  </motion.article>
);

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Development",
      skills: [
        "HTML, CSS, JavaScript, React",
        "Next.js, TypeScript, PHP",
        "WordPress, Tailwind CSS",
        "Git, Vercel, Supabase"
      ],
      delay: 0.1
    },
    {
      icon: Database,
      title: "Backend & Data",
      skills: [
        "SQL, SQL Server, PostgreSQL",
        "API Development & Integration",
        "Database Design & Optimization",
        "RESTful APIs, GraphQL"
      ],
      gradient: "bg-gradient-to-br from-green-500 to-teal-600",
      delay: 0.2
    },
    {
      icon: Brain,
      title: "AI & Innovation",
      skills: [
        "AI/ML Integration",
        "Machine Learning for Web",
        "AI-powered Solutions",
        "Innovation & AI Strategy"
      ],
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        "Leadership & Team Management",
        "Problem-Solving & Creativity",
        "Strategic Planning",
        "Client Relationship Management"
      ],
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      delay: 0.4
    },
    {
      icon: Globe,
      title: "Languages",
      skills: [
        "Spanish (Native)",
        "English (Advanced)",
        "Hebrew (Basic)",
        "Cross-cultural Communication"
      ],
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-600",
      delay: 0.5
    },
  ];

  return (
    <section className="p-8 rounded-lg servicesSection pt-0 pb-32 mb-16" id="skills" style={{ scrollMarginTop: '60px' }}>
      <div className="text-center mb-12">
        <motion.span 
          className="inline-block px-3 py-1 bg-pink-50 text-pink-400 rounded-full text-xs font-medium mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          SKILLS
        </motion.span>
        <motion.h2 
          className="section-title text-4xl md:text-5xl font-serif font-bold text-white mb-3 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
           My <span className="font-serif italic text-pink-400">Skills & Expertise</span>
        </motion.h2>
        <motion.p 
          className="text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A comprehensive overview of my technical abilities, soft skills, and continuous learning journey
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <SkillCard 
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
