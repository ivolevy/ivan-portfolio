import { motion } from "framer-motion";
import "../assets/styles/projects.css";
import etcheverry from '../assets/images/projects/etcheverry.webp';
import crujinola from '../assets/images/projects/crujinola.webp';
import premios from '../assets/images/projects/premios.webp';
import cencopay from '../assets/images/projects/cencopay.webp';
import bellacenter from '../assets/images/projects/bellacenter.webp';
import england from '../assets/images/projects/england.webp';

export const Projects = () => {
  const projects = [
    { id: 1, title: "Law firm Etcheverry-Garcia", img: etcheverry, url: "https://etcheberry.devuocloud.com" },
    { id: 2, title: "Crujinola", img: crujinola, url: "https://crujinola.com" },
    { id: 3, title: "Premios +Digital", img: premios, url: "https://premiomasdigital.com" },
    { id: 4, title: "CencoPay", img: cencopay, url: "https://desa.cencopay.ar" },
    { id: 5, title: "Bellacenter", img: bellacenter, url: "https://www.bellacenter.com.ar" },
    { id: 6, title: "New England Oil", img: england, url: "https://newenglandoildelivered.com" },
  ];

  return (
    <section className="text-center py-20 px-6" id="projects">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        <span className="border-b-4 border-black pb-1">Recent</span> Projects
      </h2>
      
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
              <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-300 hover:brightness-110 hover:opacity-90"
                />
              </div>
            </a>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
