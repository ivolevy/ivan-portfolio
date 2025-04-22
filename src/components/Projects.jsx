import { motion } from "framer-motion";
import "../assets/styles/projects.css";
import etcheverry from '../assets/images/projects/etcheverry.webp';
import crujinola from '../assets/images/projects/crujinola.webp';
import premios from '../assets/images/projects/premios.webp';
import cencopay from '../assets/images/projects/cencopay.webp';
import bellacenter from '../assets/images/projects/bellacenter.webp';
import england from '../assets/images/projects/england.webp';
import stock from '../assets/images/projects/stock.webp';
import travel from '../assets/images/projects/travel.webp';
import editor from '../assets/images/projects/editor.webp';
import ia1 from '../assets/images/projects/ia1.webp';
import ia2 from '../assets/images/projects/ia2.webp';

export const Projects = () => {
  const clientProjects = [
    { id: 1, title: "Law firm Etcheverry-Garcia", img: etcheverry, url: "https://etcheberry.devuocloud.com" },
    { id: 2, title: "Crujinola", img: crujinola, url: "https://crujinola.com" },
    { id: 3, title: "Premios +Digital", img: premios, url: "https://premiomasdigital.com" },
    { id: 4, title: "CencoPay", img: cencopay, url: "https://desa.cencopay.ar" },
    { id: 5, title: "Bellacenter", img: bellacenter, url: "https://www.bellacenter.com.ar" },
    { id: 6, title: "New England Oil", img: england, url: "https://newenglandoildelivered.com" },
  ];

  const aiProjects = [
    { id: 7, title: "Stock Project", img: stock, description: "Stock management for construction company (Supabase integrated)", img: "", url: "https://v0-construction-management-site.vercel.app/" },
    { id: 8, title: "Travel Agency", img:travel, description: "AI-powered travel agency prototype", img: "", url: "https://kzmgoqtm1oedtwx22hyn.lite.vusercontent.net/" },
    { id: 9, title: "Image Editor", img:editor, description: "Centralized image editor with AI capabilities", img: "", url: "https://v0-centralized-image-editor.vercel.app/" },
    { id: 10, title: "Human vs AI (Student)", image: ia1, description: "AI detector in file uploads – student view", img: "", url: "https://text-human-detector.lovable.app/" },
    { id: 11, title: "Human vs AI (Admin)", image: ia2, description: "AI detector in file uploads – admin view", img: "", url: "https://text-truth-teller-ai.lovable.app/" },
  ];

  const renderSection = (title, description, projects) => (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-8">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card overflow-hidden bg-white rounded-2xl shadow-lg transform transition duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative w-full h-52 overflow-hidden rounded-t-2xl bg-gray-100">
                {project.img ? (
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-300 hover:brightness-110 hover:opacity-90"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No Image</div>
                )}
              </div>
            </a>

            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
              {project.description && <p className="text-sm text-gray-600 mt-1">{project.description}</p>}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );

  return (
    <section className="text-center py-20 px-6" id="projects">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        <span className="border-b-4 border-black pb-1">My</span> Projects
      </h2>
      <p className="text-gray-600 mb-8">Click on any project to view it live.</p>

      {renderSection("Client Projects", "Websites and platforms built for real clients", clientProjects)}
      {renderSection("AI Projects", "Experimental tools and MVPs using AI and Supabase", aiProjects)}
    </section>
  );
};
