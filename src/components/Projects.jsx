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
      description: "Founder & Lead Developer. A full-service digital agency delivering high-performance web solutions and marketing strategies.",
      image: dota,
      img: dota,
      textColor: "text-black",
      bgColor: "bg-[#F5F1E5]",
      altText: "Dota Solutions project image",
      achievements: ["Digital services agency", "Web development", "Digital marketing", "IT consulting"],
      tags: ["Business", "Strategy", "Full Stack"],
      link: "https://dotasolutions.agency/",
      demoUrl: "https://dotasolutions.agency/",
    },
    {
      id: 2,
      title: "Crujinola",
      description: "High-Conversion Sales Funnel. Optimized e-commerce flow designed to maximize conversion rates and user retention.",
      image: crujinola,
      img: crujinola,
      textColor: "text-yellow-400",
      bgColor: "bg-black",
      altText: "Crujinola project image",
      achievements: ["Sales funnel", "Web design", "SEO optimization", "Payment integration"],
      tags: ["Sales", "E-commerce", "SEO"],
      link: "https://www.crujinola.com/",
      demoUrl: "https://www.crujinola.com/",
    },
    {
      id: 3,
      title: "Asistente Jurídico",
      description: "Speech to text focused on legal professionals",
      image: spoty,
      img: spoty,
      textColor: "text-white",
      bgColor: "bg-gray-900",
      altText: "Asistente Jurídico - Legal Speech to Text Platform",
      achievements: [
        "Speech to text for legal professionals",
        "AI App Integration",
        "Increased productivity in writings",
        "Automated transcription"
      ],
      tags: ["AI", "LegalTech", "NextJS"],
      link: "https://asistentejuridico.online/",
      demoUrl: "https://asistentejuridico.online/",
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
            className="text-white text-center max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how I help businesses cut costs and increase revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project, index) => (
        <motion.article
          key={project.id}
          className="project-card h-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
          viewport={{ once: true, amount: 0.03 }}
        >
          <a 
            href={project.demoUrl || project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block h-full glass-card rounded-2xl p-6 shadow-lg cursor-pointer group hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
          >
            <div className="mb-6 relative overflow-hidden rounded-xl">
              <img
                src={project.img}
                alt={project.altText}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Visit Website
                </span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">{project.title}</h2>

            <div className="space-y-3 mb-6">
              {project.achievements.map(achievement => (
                <div key={achievement} className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <ArrowRight size={14} className="text-[var(--rosa-principal)] mr-3 flex-shrink-0" />
                  <span className="text-sm font-light">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5">
              <span className="inline-flex items-center text-gray-500 group-hover:text-pink-400 text-xs font-medium transition-colors">
                Visit Website
                <ArrowUpRight size={14} className="ml-2" />
              </span>
            </div>
          </a>
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
            className="inline-flex items-center px-8 py-3 bg-white text-black rounded-full font-serif italic hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
          >
            Ready for your project?
            <ArrowDown size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
