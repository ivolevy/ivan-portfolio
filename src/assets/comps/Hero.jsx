import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "../styles/header.css";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const Hero = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hero w-full h-screen flex flex-col items-center justify-center text-center bg-transparent relative overflow-hidden"
      id="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-labelledby="hero-title"
      style={{ 
        zIndex: 1,
        perspective: "1000px"
      }}
    >
      <motion.div 
        className="relative" 
        style={{ 
          zIndex: 1,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* Título principal */}
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          Hi, I'm <span className="italic text-pink-400">Ivan Levy</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="heroText text-lg text-gray-300 mt-4 max-w-2xl mx-auto font-light"
          variants={containerVariants}
          transition={{ delay: 0.4 }}
        >
          Full-Stack Developer | <span className="text-gray-400">Bachelor’s degree student in Technology Management</span>
        </motion.p>

        {/* Botones */}
        <motion.div
          className="mt-6 flex flex-col items-center"
          variants={containerVariants}
          transition={{ delay: 0.6 }}
        >
          <div className="flex gap-4 justify-center mb-16"> {/* Increased gap from buttons */}
            <a
              href="#contact"
              className="group px-8 py-3 bg-white text-black font-serif italic tracking-wide rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/25 hover:scale-105 active:scale-95"
              aria-label="Contact me"
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white/5 text-white font-serif tracking-wide rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
              aria-label="See projects"
            >
              See projects
            </a>
          </div>

          {/* CV Downloads */}
          <div className="flex gap-2.5 items-center mb-0"> {/* No bottom margin, let paragraph handle it */}
            <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-medium">Download my CV</span>
            <div className="flex gap-2"> {/* Even tighter language spacing */}
              <a 
                href="/Ivan Levy - CV EN.pdf" 
                download="Ivan Levy - CV.pdf"
                className="text-gray-400 hover:text-white text-xs font-serif italic transition-colors hover:underline decoration-pink-500/30 underline-offset-4"
              >
                English
              </a>
              <div className="w-[1px] h-3 bg-white/10 mt-1"></div>
              <a 
                href="/Ivan Levy - CV ES.pdf" 
                download="Ivan Levy - CV.pdf"
                className="text-gray-400 hover:text-white text-xs font-serif italic transition-colors hover:underline decoration-pink-500/30 underline-offset-4"
              >
                Spanish
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Texto adicional */}
      <motion.p
        className="mt-4 text-gray-400 text-sm" // Reduced from mt-12
        variants={containerVariants}
        transition={{ delay: 0.8 }}
      >
        From Argentina to the world!
      </motion.p>
    </motion.section>
  );
};
