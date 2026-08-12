import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
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
          className="text-5xl md:text-7xl font-serif font-medium text-gray-900 mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          Hi, I'm <span className="italic text-celeste">Ivan Levy</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="heroText text-sm text-gray-700 mt-4 max-w-2xl mx-auto font-light"
          variants={containerVariants}
          transition={{ delay: 0.4 }}
        >
          Software Engineer | <span className="text-gray-500">Bachelor’s degree student in Technology Management</span>
        </motion.p>

        {/* Scroll Callout */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-3.5 cursor-pointer"
          variants={containerVariants}
          transition={{ delay: 0.6 }}
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-gray-500 text-xs uppercase tracking-[0.25em] font-semibold hover:text-celeste transition-colors">
            Get to know me
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="text-celeste w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
