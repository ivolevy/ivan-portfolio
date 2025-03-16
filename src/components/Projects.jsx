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
    {
      id: 1,
      title: "Law firm Etcheverry-Garcia",
      img: etcheverry,
      textColor: "text-white",
      bgColor: "bg-gray-900 bg-opacity-80",
      url: "https://etcheberry.devuocloud.com",
      altText: "Project image: Estudio Jurídico Etcheverry García",
    },
    {
      id: 2,
      title: "Crujinola",
      img: crujinola,
      textColor: "text-white",
      bgColor: "bg-gray-900 bg-opacity-80",
      url: "https://crujinola.com",
      altText: "Project image: Crujinola",
    },
    {
      id: 3,
      title: "Premios +Digital",
      img: premios,
      textColor: "text-white",
      bgColor: "bg-gray-900 bg-opacity-80",
      url: "https://premiomasdigital.com",
      altText: "Project image: Premios +Digital",
    },
    {
      id: 4,
      title: "CencoPay",
      img: cencopay,
      textColor: "text-white",
      bgColor: "bg-gray-900 bg-opacity-80",
      url: "https://desa.cencopay.ar",
      altText: "Project image: CencoPay",
    },
    {
      id: 5,
      title: "Bellacenter",
      img: bellacenter,
      textColor: "text-white",
      bgColor: "bg-gray-900 bg-opacity-80",
      url: "https://www.bellacenter.com.ar",
      altText: "Project image: Bellacenter",
    },
    {
      id: 6,
      title: "New England Oil",
      img: england,
      textColor: "text-white",
      bgColor: "bg-gray-900 bg-opacity-80",
      url: "https://newenglandoildelivered.com",
      altText: "Project image: New England Oil",
    },
  ];

  return (
    <section className="text-center py-20 projects h-auto flex flex-col justify-center pb-20" id="projects" aria-labelledby="projects-title">
      <h2 className="servicesTitle text-center mb-5">
        <span className="underline">Recent</span> Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`projectClouds overflow-hidden shadow-lg p-4 ${project.bgColor} group`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            aria-labelledby={`project-title-${project.id}`}
          >
            {/* Título del proyecto fuera del bloque de imagen */}
            <h3 
              id={`project-title-${project.id}`} 
              className={`text-lg font-bold ${project.textColor} text-center mb-2 px-4`}
            >
              {project.title}
            </h3>

            <a href={project.url} target="_blank" rel="noopener noreferrer" className="no-underline">
              <div className="relative w-full h-52 roundedBox overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.altText}
                  className="w-full h-full object-cover projectImg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
            </a>

          </motion.article>
        ))}
      </div>
    </section>
  );
};
