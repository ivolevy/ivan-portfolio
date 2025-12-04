import { motion } from "framer-motion";
import "../styles/header.css";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <motion.section
      className="hero w-full h-screen flex flex-col items-center justify-center text-center bg-transparent relative"
      id="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-labelledby="hero-title"
      style={{ zIndex: 2 }}
    >
      <motion.div className="relative" style={{ zIndex: 2 }}>
        {/* Título principal */}
        <motion.h1
          id="hero-title"
          className="text-5xl md:text-6xl font-bold text-white leading-tight heroTitle"
          variants={containerVariants}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm Ivan Levy <br /> Web <span className="underline">Developer</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="heroText text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          variants={containerVariants}
          transition={{ delay: 0.4 }}
        >
          Front end web developer & Power BI Analyst | Bachelor's degree student in Technology Management
        </motion.p>

        {/* Botones */}
        <motion.div
          className="mt-6 flex gap-4 justify-center"
          variants={containerVariants}
          transition={{ delay: 0.6 }}
        >
          <a
            className="border border-transparent font-light transition-all headerButton"
            aria-label="Contactarnos"
            title="Contact me"
            href="#contact"
          >
            Contact me
          </a>
          <a
            href="#projects"
            className="border border-white text-white font-light py-3 px-6 hover:bg-white hover:text-black transition-all navButton2"
            aria-label="Ver proyectos"
            title="See projects"
          >
            See projects
          </a>
        </motion.div>
      </motion.div>

      {/* Texto adicional */}
      <motion.p
        className="mt-12 text-gray-400 text-sm"
        variants={containerVariants}
        transition={{ delay: 0.8 }}
      >
        From Argentina to the world!
      </motion.p>
    </motion.section>
  );
};
