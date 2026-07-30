import { motion } from "framer-motion";
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Financial Accounting Assistant",
      company: "Estudio Matlin",
      period: "Jan 2022 - Apr 2022",
      description: "Managed administrative operations, invoice control, financial transactions, and corporate balance sheets."
    },
    {
      id: 2,
      title: "CRM Specialist",
      company: "UO Solutions",
      period: "May 2022 - Jul 2022",
      description: "Executed responsive email campaigns for Banco Santander, implementing HTML/CSS layouts within Adobe's CMS."
    },
    {
      id: 3,
      title: "Front-End Web Developer",
      company: "UO Solutions",
      period: "Jul 2022 - Present",
      description: [
        "Develop high-performance websites and custom plugins using React, TypeScript, PHP, and WordPress.",
        "Manage cloud infrastructure, databases (MySQL), and technical SEO using Google Analytics, SEMrush, and Ahrefs.",
        "Build business automation workflows and integrate AI features using Vercel, Supabase, and REST APIs.",
        "Implement robust version control (Git) and deployment pipelines (Vercel, FTP, XAMPP) for staging and production."
      ]
    }
  ];

  return (
    <section className="py-32 relative" id="experience" style={{ scrollMarginTop: '60px' }}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="mb-20 max-w-3xl">
          <motion.span 
            className="inline-block text-xs uppercase tracking-[0.3em] text-[#89b3d6] mb-3 font-semibold"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            CAREER PATH
          </motion.span>
          <motion.h2 
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional <span className="italic text-[#89b3d6]">experience</span>.
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative border-l border-gray-200 ml-3 md:ml-6 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Dot with cut effect */}
              <span className="absolute -left-[5.5px] top-2 h-3 w-3 rounded-full bg-celeste ring-[6px] ring-[#F7F5F0]"></span>

              <div className="group ml-8 md:ml-[120px]">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#89b3d6] transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 font-mono mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-[#89b3d6] font-bold tracking-wide uppercase text-xs">{exp.company}</span>
                </div>

                {Array.isArray(exp.description) ? (
                  <ul className="space-y-3.5 text-gray-700 font-light leading-relaxed text-sm mt-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#89b3d6] shadow-[0_0_8px_rgba(137,179,214,0.5)]"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 font-light leading-relaxed text-sm">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
