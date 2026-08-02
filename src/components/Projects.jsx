import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import "../assets/styles/projects.css";
import spotify from "../assets/images/projects/Screen Shot 2026-07-30 at 09.56.05.png";
import beeyond from "../assets/images/projects/Screen Shot 2026-07-30 at 11.03.57.png";

export const Projects = () => {
  const projects = [
    {
      id: 2,
      slug: "spotify-ai-playlisting",
      title: "Spotify AI Playlisting",
      category: "AI AUTOMATION · MUSIC TECH",
      date: "2025",
      description: "An AI-powered playlisting system built during a hackathon (securing 3rd place) that allows record labels to automatically generate massive artist playlists with a simple prompt in 2 minutes, saving up to 8 hours of marketing work per week.",
      img: spotify,
      altText: "Spotify AI Playlisting dashboard",
      achievements: [
        "3rd Place Hackathon",
        "Automated Playlists",
        "AI Prompting Engine",
        "Saves 8 hours weekly"
      ],
      link: "https://spoty-bydota.vercel.app",
    },
    {
      id: 3,
      slug: "beeyond-media",
      title: "Beeyond Media",
      category: "DOOH ADVERTISING · MARTECH",
      date: "2026",
      description: "A premium Digital Out-Of-Home (DOOH) advertising platform simplifying the process of buying, managing, and optimizing digital billboard campaigns globally. Led and driven by me as part of my work at UO Solutions.",
      img: beeyond,
      altText: "Beeyond Media billboard dashboard",
      achievements: [
        "Led at UO Solutions",
        "Global DOOH Network",
        "Real-time Booking",
        "Audited Analytics"
      ],
      link: "https://beeyondmedia.com",
    },
  ];

  return (
    <section className="w-full py-32 mb-8" id="projects" style={{ scrollMarginTop: '60px' }}>
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Block in two columns on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 pb-8 border-b border-gray-200">
          <div className="max-w-xl">
            <motion.span 
              className="inline-block text-xs uppercase tracking-[0.2em] text-celeste font-semibold mb-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              SELECTED PROJECTS
            </motion.span>
            <motion.h2 
              className="section-title text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              A glimpse of what I've <span className="italic text-celeste">built</span>.
            </motion.h2>
          </div>
          
          <motion.div 
            className="lg:max-w-md text-gray-650 font-light leading-relaxed text-sm lg:text-base lg:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            A selection of projects where I managed everything from initial design and core architecture to speed and search engine optimization.
          </motion.div>
        </div>

        {/* Projects Layout with Horizontal Alternating Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 min-h-[350px]`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative min-h-[260px] sm:min-h-[320px] overflow-hidden bg-gray-50 group">
                <img
                  src={project.img}
                  alt={project.altText}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14 flex flex-col justify-between group">
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-celeste uppercase mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-serif font-medium text-gray-900 mb-4 group-hover:text-celeste transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-650 font-light text-xs leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Quick stats/achievements list */}
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center text-[11px] font-light text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-celeste mr-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center text-[10px] font-semibold text-gray-700 hover:text-celeste tracking-wider uppercase transition-colors gap-1.5 hover:translate-x-1 duration-300"
                  >
                    View Project Detail
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact-section" 
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full font-serif italic hover:bg-celeste transition-all duration-300 shadow-lg hover:shadow-sky-500/25 text-sm hover-bg-celeste"
          >
            Ready for your project?
            <ArrowDown size={16} className="ml-2 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
