import { motion } from "framer-motion";
import { GraduationCap, Award } from 'lucide-react';
import "../assets/styles/about.css";

export const About = () => {
  return (
    <section className="about-section py-32 px-6 mb-16" id="about" style={{ scrollMarginTop: '60px' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-3 py-1 bg-pink-50 text-pink-400 rounded-full text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            GET TO KNOW ME
          </motion.span>
          <motion.h2 
            className="section-title text-4xl md:text-5xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="underline decoration-pink-500/50">About</span> Me
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12 mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
              <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                Looking ahead, the goal is to grow into managerial and financial roles where strategic thinking and data-driven decisions matter most. Data sits at the core of modern development and business — enabling measurement, continuous optimization, and revenue growth.
              </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
              <p className="text-gray-300 leading-relaxed text-lg mb-6 max-w-3xl mx-auto">
                Building technology today means designing systems that generate insights, support better decisions, and create sustainable value.
                <br /><br />
                I’m studying IT Management at UADE, learning how to connect business strategy with real-world tech solutions.
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center space-x-3 text-gray-400 text-sm">
                    <GraduationCap className="text-pink-400" size={20}/>
                    <span>Bachelor’s degree student in Technology Management</span>
                </div>
                
                {/* CV Downloads */}
                <div className="flex gap-4 items-center mt-2">
                  <span className="text-gray-500 text-[9px] uppercase tracking-wider font-medium">Download my CV:</span>
                  <a 
                    href="/Ivan Levy - CV EN.pdf" 
                    download="Ivan Levy - CV.pdf"
                    className="text-pink-400/80 hover:text-pink-400 text-xs font-serif italic transition-colors hover:underline underline-offset-4"
                  >
                    English
                  </a>
                  <span className="text-gray-800">•</span>
                  <a 
                    href="/Ivan Levy - CV ES.pdf" 
                    download="Ivan Levy - CV.pdf"
                    className="text-pink-400/80 hover:text-pink-400 text-xs font-serif italic transition-colors hover:underline underline-offset-4"
                  >
                    Spanish
                  </a>
                </div>
              </div>
          </motion.div>
        </div>

        {/* Sección de Educación */}
        <motion.div 
          className="glass-panel rounded-2xl p-6 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Award className="text-pink-400" />
            Education & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Educación Formal */}
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-6 uppercase tracking-wider">Formal Education</h4>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-pink-500/30">
                  <h5 className="font-bold text-white text-lg">IT Management</h5>
                  <p className="text-gray-400">UADE - Universidad Argentina de la Empresa</p>
                  <span className="text-xs text-pink-400 font-mono mt-1 block">2022 - Present</span>
                </div>
                <div className="relative pl-6 border-l-2 border-pink-500/30">
                  <h5 className="font-bold text-white text-lg">Full Stack Web Development</h5>
                  <p className="text-gray-400">Digital House</p>
                  <span className="text-xs text-pink-400 font-mono mt-1 block">2021 - 2022</span>
                </div>
                <div className="relative pl-6 border-l-2 border-pink-500/30">
                  <h5 className="font-bold text-white text-lg">Bachelor's in Economics</h5>
                  <p className="text-gray-400">Scholem Aleijem High School</p>
                  <span className="text-xs text-pink-400 font-mono mt-1 block">2016 - 2020</span>
                </div>
              </div>
            </div>

            {/* Certificaciones */}
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-6 uppercase tracking-wider">Certifications</h4>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-pink-500/30">
                  <h5 className="font-bold text-white text-lg">Google Display Certification</h5>
                  <p className="text-gray-400">Google</p>
                  <span className="text-xs text-pink-400 font-mono mt-1 block">ID: 225423675</span>
                </div>
                <div className="relative pl-6 border-l-2 border-pink-500/30">
                  <h5 className="font-bold text-white text-lg">Google SEO Certification</h5>
                  <p className="text-gray-400">Google</p>
                  <span className="text-xs text-pink-400 font-mono mt-1 block">ID: 809120</span>
                </div>
                <div className="relative pl-6 border-l-2 border-pink-500/30">
                  <h5 className="font-bold text-white text-lg">Power BI Analyst</h5>
                  <p className="text-gray-400">Microsoft</p>
                  <span className="text-xs text-pink-400 font-mono mt-1 block">Data Analysis & Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
