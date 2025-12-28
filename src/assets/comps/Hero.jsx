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
      style={{ zIndex: 1 }}
    >
      <motion.div className="relative" style={{ zIndex: 1 }}>
        {/* Título principal */}
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm <span className="italic text-pink-400">Ivan Levy</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="heroText text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          variants={containerVariants}
          transition={{ delay: 0.4 }}
        >
          Full-Stack Developer | <span className="text-gray-400">Bachelor’s degree student in Technology Management</span>
        </motion.p>

        {/* Botones */}
        <motion.div
          className="mt-6 flex gap-4 justify-center"
          variants={containerVariants}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact"
            className="group px-8 py-3 bg-white text-black font-serif italic tracking-wide rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/25 hover:scale-105 active:scale-95"
            aria-label="Contactarnos"
          >
            Contact me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-white/5 text-white font-serif tracking-wide rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
            aria-label="Ver proyectos"
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
