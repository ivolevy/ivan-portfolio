import { motion } from "framer-motion";
import { 
  SiNotion, 
  SiSlack, 
  SiLinear, 
  SiFigma, 
  SiDiscord, 
  SiTrello,
  SiAsana,
  SiZoom
} from "react-icons/si";
import { TbCursorText } from "react-icons/tb";

const tools = [
  { name: "Notion", icon: SiNotion, category: "Organization" },
  { name: "Slack", icon: SiSlack, category: "Communication" },
  { name: "Linear", icon: SiLinear, category: "Productivity" },
  { name: "Antigravity", icon: TbCursorText, category: "AI Coding" },
  { name: "Figma", icon: SiFigma, category: "Design" },
  { name: "Discord", icon: SiDiscord, category: "Community" },
  { name: "Trello", icon: SiTrello, category: "Planning" },
];

export const TechStack = () => {
  return (
    <section className="py-24 px-6 mb-16" id="stack">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-3 py-1 bg-pink-50 text-pink-400 rounded-full text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            MANAGEMENT & PRODUCTIVITY
          </motion.span>
          <motion.h2 
            className="section-title text-4xl md:text-5xl font-serif font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Daily <span className="italic text-pink-400">Stack</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            The tools and platforms I use daily to manage projects, lead teams, and optimize workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300 border border-white/5 group-hover:border-white/20">
                <tool.icon className="text-2xl text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
              </div>
              <div className="text-center">
                <span className="block text-white text-xs font-medium tracking-wide">{tool.name}</span>
                <span className="block text-gray-500 text-[8px] uppercase tracking-[0.3em] mt-1.5 opacity-30 transform scale-75 origin-center">{tool.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
