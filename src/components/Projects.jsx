import { motion } from "framer-motion";
import "../assets/styles/projects.css";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Estudio Jurídico Etcheverry García",
      img: "/images/proyecto1.jpg",
      textColor: "text-yellow-400",
      bgColor: "bg-black",
      url: "https://etcheberry.devuocloud.com",
      altText: "Project image: Estudio Jurídico Etcheverry García",
    },
    {
      id: 2,
      title: "Crujinola",
      img: "/images/proyecto2.jpg",
      textColor: "text-black",
      bgColor: "bg-[#F5F1E5]",
      url: "https://crujinola.com",
      altText: "Project image: Crujinola",
    },
    {
      id: 3,
      title: "Premios +Gidital",
      img: "/images/proyecto3.jpg",
      textColor: "text-white",
      bgColor: "bg-gray-900",
      url: "https://premiomasdigital.com",
      altText: "Project image: Premios +Gidital",
    },
    {
      id: 4,
      title: "CencoPay",
      img: "/images/proyecto4.jpg",
      textColor: "text-white",
      bgColor: "bg-blue-900",
      url: "https://desa.cencopay.ar",
      altText: "Project image: CencoPay",
    },
    {
      id: 5,
      title: "Bellacenter",
      img: "/images/proyecto5.jpg",
      textColor: "text-black",
      bgColor: "bg-[#FFE4E1]",
      url: "https://www.bellacenter.com.ar",
      altText: "Project image: Bellacenter",
    },
    {
      id: 6,
      title: "New England Oil",
      img: "/images/proyecto6.jpg", // Asegúrate de tener la imagen adecuada
      textColor: "text-white",
      bgColor: "bg-green-700",
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
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="no-underline">
              <div
                className="relative flex items-center justify-center h-52 bg-cover bg-center rounded-lg group-hover:bg-opacity-80 transition-all duration-300"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <h3 
                  id={`project-title-${project.id}`} 
                  className={`text-2xl font-bold ${project.textColor} bg-opacity-70 p-2 rounded-lg transition-all duration-300 group-hover:text-opacity-90`}
                >
                  {project.title}
                </h3>
              </div>
            </a>
            <img
              src={project.img}
              alt={project.altText}
              className="hidden"  // Improves accessibility without displaying the image twice
              loading="lazy"
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
};
