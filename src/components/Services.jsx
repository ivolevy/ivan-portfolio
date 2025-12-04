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

const SkillCard = ({ icon: Icon, title, skills, gradient, delay }) => (
  <motion.article
    className={`relative bg-[var(--gris-oscuro)] rounded-2xl p-6 shadow-lg border border-gray-700`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    viewport={{ once: true, amount: 0.3 }}
    role="article"
  >

    
    <h3 className="text-xl font-bold text-white mb-4 text-center">{title}</h3>
    
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div 
          key={index}
          className="flex items-center text-gray-300"
        >
          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
          <span className="text-sm">{skill}</span>
        </div>
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
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
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
    <section className="p-8 rounded-lg servicesSection pt-0 pb-20" id="skills" style={{ scrollMarginTop: '60px' }}>
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
          className="text-3xl font-bold text-white mb-3 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My <span className="underline">Skills & Expertise</span>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
}
