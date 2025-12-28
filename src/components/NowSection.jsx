import { motion } from "framer-motion";
import { Coffee, Rocket, BookOpen, Brain, GraduationCap } from "lucide-react";

export const NowSection = () => {
  const activities = [
    {
      icon: <GraduationCap className="text-pink-400" size={20} />,
      title: "Academic Focus",
      description: "Deepening my knowledge in IT Management at UADE, merging business strategy with technology."
    },
    {
      icon: <Brain className="text-pink-400" size={20} />,
      title: "AI Exploration",
      description: "Integrating LLMs into daily workflows and building smarter, context-aware digital products."
    },
    {
      icon: <Rocket className="text-pink-400" size={20} />,
      title: "Project Antigravity",
      description: "Refining my personal brand and developer experience through minimalist design and advanced tools."
    }
  ];

  return (
    <section className="py-12 px-6 bg-transparent" id="now">
      <div className="max-w-4xl mx-auto border-t border-white/5 pt-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <motion.span 
              className="inline-block px-2 py-0.5 bg-pink-50 text-pink-400 rounded-full text-[6px] uppercase tracking-[0.2em] font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Current State
            </motion.span>
            <motion.h2 
              className="text-4xl font-serif font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What I'm doing <br />
              <span className="italic text-pink-400 text-3xl md:text-5xl">right now.</span>
            </motion.h2>
          </div>

          <div className="md:w-2/3 grid gap-8">
            <motion.div 
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-pink-500/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Brain className="text-pink-400" size={18} />
                <h3 className="text-white font-medium">Advanced IT Management</h3>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">
                Currently finishing my degree in Strategic Information Management at UADE, learning how to leverage data for business optimization and revenue growth.
              </p>
            </motion.div>

            <motion.div 
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-pink-500/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Rocket className="text-pink-400" size={18} />
                <h3 className="text-white font-medium">AI-First Development</h3>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">
                Leveraging data-driven strategies and AI integration to maximize project utility and revenue. Building smarter, scalable solutions that automate complex tasks in the legal field.
              </p>
            </motion.div>

            <motion.div 
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-pink-500/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="text-pink-400" size={18} />
                <h3 className="text-white font-medium">Deep Work & Focus</h3>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">
                Obsessed with building minimalist, high-performance web experiences that require zero friction and offer maximum clarity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
