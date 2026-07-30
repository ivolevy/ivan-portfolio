import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, FileText } from 'lucide-react';
import "../assets/styles/about.css";

export const About = () => {
  return (
    <section className="about-section py-32 px-6 mb-16 relative" id="about" style={{ scrollMarginTop: '60px' }}>
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-16 max-w-3xl">
          <motion.span 
            className="inline-block text-xs uppercase tracking-[0.3em] text-[#89b3d6] mb-3 font-semibold"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            ABOUT ME
          </motion.span>
          <motion.h2 
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Background, education and <span className="italic text-[#89b3d6]">vision</span>.
          </motion.h2>
        </div>

        {/* Main Grid: Bio and Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          
          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              className="text-gray-700 leading-relaxed text-sm sm:text-[14px] space-y-5 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p>
                At UO Solutions, I develop and maintain high-performance websites using HTML, CSS, React, TypeScript, PHP, and WordPress (Elementor, Divi, WooCommerce). I also build AI-powered web applications and business automation solutions using TypeScript, Vercel, and Supabase, helping streamline workflows and improve operational efficiency.
              </p>
              <p>
                My work includes designing web graphic assets, building data dashboards for performance analysis, and implementing semantic and technical SEO strategies using tools such as Google Analytics, SEMrush, and Ahrefs to optimize visibility and results.
              </p>
              <p>
                I’m studying IT Management at Universidad Argentina de la Empresa (UADE), where I’m learning how to connect business strategy with technology solutions that work in the real world.
              </p>
              <p>
                Looking ahead, my goal is to keep expanding my skill set and working on projects that combine technology, data, and business thinking. I’m interested in understanding how different areas of a company connect, from product and development to strategy and operations, and contributing wherever technology and analytical thinking can create meaningful improvements.
              </p>
            </motion.div>
          </div>

          {/* Education Column */}
          <motion.div 
            className="lg:col-span-5 h-full rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl p-8 sm:p-10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-8 border-b border-gray-200 pb-4">
              <GraduationCap className="text-[#89b3d6] w-5 h-5" />
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-800 font-semibold">Education</h3>
            </div>
            
            <ul className="space-y-8">
              <li className="border-l border-sky-200/50 pl-6 relative">
                <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-[#89b3d6]"></span>
                <div>
                  <h4 className="font-serif text-base tracking-tight text-gray-900 sm:text-lg">IT Management</h4>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-widest text-[#89b3d6]">2022 – Present</span>
                </div>
                <p className="mt-2 text-xs text-gray-600">UADE - Universidad Argentina de la Empresa</p>
              </li>
              
              <li className="border-l border-sky-200/50 pl-6 relative">
                <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-[#89b3d6]"></span>
                <div>
                  <h4 className="font-serif text-base tracking-tight text-gray-900 sm:text-lg">Full Stack Web Development</h4>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-widest text-[#89b3d6]">2021 – 2022</span>
                </div>
                <p className="mt-2 text-xs text-gray-600">Digital House</p>
              </li>

              <li className="border-l border-sky-200/50 pl-6 relative">
                <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-[#89b3d6]"></span>
                <div>
                  <h4 className="font-serif text-base tracking-tight text-gray-900 sm:text-lg">Bachelor's in Economics</h4>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-widest text-[#89b3d6]">2016 – 2020</span>
                </div>
                <p className="mt-2 text-xs text-gray-600">Scholem Aleijem High School</p>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Secondary Grid: Certifications, Languages & CV */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Certifications Card */}
          <motion.div 
            className="lg:col-span-7 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-2 mb-8 border-b border-gray-200 pb-4">
                <Award className="text-[#89b3d6] w-5 h-5" />
                <h3 className="text-xs uppercase tracking-[0.3em] text-gray-800 font-semibold">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-serif text-lg text-gray-900">Google Display Certification</h4>
                  <p className="text-xs text-gray-600 mt-1">Google</p>
                  <span className="text-[10px] font-mono text-[#89b3d6] mt-1 block">ID: 225423675</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-gray-900">Google SEO Certification</h4>
                  <p className="text-xs text-gray-600 mt-1">Google</p>
                  <span className="text-[10px] font-mono text-[#89b3d6] mt-1 block">ID: 809120</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-gray-900">Power BI Analyst</h4>
                  <p className="text-xs text-gray-600 mt-1">Microsoft</p>
                  <span className="text-[10px] font-mono text-[#89b3d6] mt-1 block">Data Analysis & Viz</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages & CV Card */}
          <motion.div 
            className="lg:col-span-5 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
                <Globe className="text-[#89b3d6] w-5 h-5" />
                <h3 className="text-xs uppercase tracking-[0.3em] text-gray-800 font-semibold">Languages & CV</h3>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-baseline justify-between border-b border-gray-200 pb-2 last:border-0">
                  <span className="font-serif text-lg text-gray-900">Spanish</span>
                  <span className="text-xs font-mono text-[#89b3d6] uppercase font-semibold">Native</span>
                </li>
                <li className="flex items-baseline justify-between border-b border-gray-200 pb-2 last:border-0">
                  <span className="font-serif text-lg text-gray-900">English</span>
                  <span className="text-xs font-mono text-[#89b3d6] uppercase font-semibold">Advanced</span>
                </li>
              </ul>
            </div>

            {/* Downloads */}
            <div className="pt-4 border-t border-gray-200">
              <span className="text-[9px] uppercase tracking-widest text-gray-500 block mb-3 font-semibold">DOWNLOAD CV:</span>
              <div className="flex gap-6 items-center">
                <a 
                  href="/Ivan Levy - CV English.pdf" 
                  download="Ivan Levy - CV English.pdf"
                  className="flex items-center gap-2 text-[#89b3d6] hover:text-sky-600 text-sm font-serif italic transition-all hover:underline underline-offset-4"
                >
                  <FileText className="w-4 h-4" />
                  English
                </a>
                <span className="text-gray-300">•</span>
                <a 
                  href="/Ivan Levy - CV.pdf" 
                  download="Ivan Levy - CV.pdf"
                  className="flex items-center gap-2 text-[#89b3d6] hover:text-sky-600 text-sm font-serif italic transition-all hover:underline underline-offset-4"
                >
                  <FileText className="w-4 h-4" />
                  Spanish
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
