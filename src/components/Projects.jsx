import { motion } from "framer-motion";
import "../assets/styles/projects.css";
import etcheverry from '../assets/images/projects/etcheverry.webp';
import crujinola from '../assets/images/projects/crujinola.webp';
import premios from '../assets/images/projects/premios.webp';
import stock from '../assets/images/projects/stock.webp';
import travel from '../assets/images/projects/travel.webp';
import editor from '../assets/images/projects/editor.webp';

export const Projects = () => {
  const allProjects = [
    { id: 1, title: "Law firm Etcheverry-Garcia", img: etcheverry, url: "https://etcheberry.devuocloud.com" },
    { id: 2, title: "Crujinola", img: crujinola, url: "https://crujinola.com" },
    { id: 3, title: "Premios +Digital", img: premios, url: "https://premiomasdigital.com" },
    { id: 4, title: "Stock Project (MVP)", img: stock, description: "Stock management for construction company (Supabase integrated)", url: "https://v0-construction-management-site.vercel.app/" },
    { id: 5, title: "Travel Agency (MVP)", img: travel, description: "AI-powered travel agency prototype", url: "https://kzmgoqtm1oedtwx22hyn.lite.vusercontent.net/" },
    { id: 6, title: "Image Editor (MVP)", img: editor, description: "Centralized image editor with AI capabilities", url: "https://v0-centralized-image-editor.vercel.app/" },
  ];

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {projects.map((project) => (
        <motion.article
          key={project.id}
          className="project-card overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          role="article"
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
              {project.description && (
                <p className="text-gray-600 text-sm">{project.description}</p>
              )}
            </div>
          </a>
        </motion.article>
      ))}
    </div>
  );

  return (
    <section className="text-center py-20 px-6" id="projects">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        <span className="border-b-4 border-black pb-1">My</span> Projects
      </h2>
      <p className="text-gray-600 mb-8">Click on any project to view it live.</p>

      {renderProjects(allProjects)}
    </section>
  );
};
