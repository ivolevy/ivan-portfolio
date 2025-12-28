import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import "../assets/styles/projects.css";
import dota from "../assets/images/projects/dota.png";
import crujinola from "../assets/images/projects/crujinola.webp";
import spoty from "../assets/images/projects/attorney-ai.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Dota Solutions",
      description: "Digital services agency created by me",
      img: dota,
      textColor: "text-black",
      bgColor: "bg-[#F5F1E5]",
      altText: "Dota Solutions project image",
      achievements: ["Digital services agency", "Web development", "Digital marketing", "IT consulting"],
      link: "#",
    },
    {
      id: 2,
      title: "Crujinola",
      description: "Sales funnel for a product",
      img: crujinola,
      textColor: "text-yellow-400",
      bgColor: "bg-black",
      altText: "Crujinola project image",
      achievements: ["Sales funnel", "Web design", "SEO optimization", "Payment integration"],
      link: "https://crujinola.com",
    },
    {
      id: 3,
      title: "Attorney AI",
      description: "Speech to text focused on legal entities",
      img: spoty,
      textColor: "text-white",
      bgColor: "bg-gray-900",
      altText: "Attorney AI - Legal Speech to Text Platform",
      achievements: [
        "Speech to text for legal entities",
        "AI App Integration",
        "Increased productivity in writings",
        "Automated transcription"
      ],
      link: "https://attorneyai.vercel.app/",
    },
  ];

  return (
    <section className="w-full py-32 mb-8" id="projects" style={{ scrollMarginTop: '60px' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-3 py-1 bg-pink-50 text-pink-400 rounded-full text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            LATEST PROJECTS
          </motion.span>
          <motion.h2 
            className="section-title text-4xl md:text-5xl font-serif font-bold text-white mb-3 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured <span className="italic text-pink-400">Projects</span>
        </motion.h2>
          <motion.p 
            className="text-white text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how i help a business cut costs and increase revenue. Explore some landings templates below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project, index) => (
        <motion.article
          key={project.id}
            className="project-card relative bg-[var(--negro-mate)] rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.03 }}
          >
            <div className="mb-6">
            <img
              src={project.img}
                alt={`${project.title} - ${project.description}`}
                className="w-full h-48 object-cover rounded-xl"
              loading="lazy"
            />
            </div>

            <h2 className="text-xl font-semibold text-white mb-4">{project.title}</h2>

            <div className="space-y-3 mb-6">
              {project.achievements.map(achievement => (
                <div key={achievement} className="flex items-center text-white">
                  <ArrowRight size={16} className="text-[var(--rosa-principal)] mr-3 flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-700">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[var(--rosa-principal)] hover:text-[var(--rosa-claro)] font-medium transition-colors no-underline"
                style={{ color: 'var(--rosa-principal)' }}
              >
                View project
                <ArrowUpRight size={16} className="ml-2" style={{ color: 'var(--rosa-principal)' }} />
              </motion.a>
            </div>
        </motion.article>
      ))}
    </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-black text-white borderRadius font-medium hover:bg-pink-600 transition-colors no-underline"
          >
            Ready for your project?
            <ArrowDown size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
