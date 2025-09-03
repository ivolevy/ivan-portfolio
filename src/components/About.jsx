import { motion } from "framer-motion";
import "../assets/styles/about.css";

export const About = () => {
  return (
    <section className="about-section py-20 px-6" id="about" style={{ scrollMarginTop: '60px' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
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
            className="text-3xl font-bold text-gray-800 mb-3 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="underline">About</span> Me
          </motion.h2>
        </div>

        <motion.div 
          className="bg-white rounded-lg p-8 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quien soy */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Who I am</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm 22 years old and I'm from Palermo, CABA. I'm passionate about technology and creating innovative solutions that make a difference.
              </p>
            </div>

            {/* Donde estoy estudiando */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Where I'm studying</h3>
              <p className="text-gray-600 leading-relaxed">
                At UADE, I'm studying IT Management, strengthening my strategic and technical skills.
              </p>
            </div>

            {/* DOTA SOLUTIONS */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">DOTA SOLUTIONS</h3>
              <p className="text-gray-600 leading-relaxed">
                I lead a SaaS startup with fellow students, creating custom ERP, CRM, and web solutions. We use AI, Vercel, Supabase, and cutting-edge tools to deliver faster, smarter, and scalable products.
              </p>
            </div>

            {/* UO SOLUTIONS */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">UO SOLUTIONS</h3>
              <p className="text-gray-600 leading-relaxed">
                Web developer building high-quality websites with HTML, CSS, React, PHP, and WordPress, and managing FTP operations for IAB's news blog.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sección de Educación */}
        <motion.div 
          className="mt-12 mb-20 bg-white rounded-lg p-8 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Education & Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Educación Formal */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-pink-600">Formal Education</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-400 pl-4">
                  <h5 className="font-semibold text-gray-800">IT Management</h5>
                  <p className="text-gray-600 text-sm">UADE - Universidad Argentina de la Empresa</p>
                  <p className="text-gray-500 text-sm">2022 - Present</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-4">
                  <h5 className="font-semibold text-gray-800">Full Stack Web Development</h5>
                  <p className="text-gray-600 text-sm">Digital House</p>
                  <p className="text-gray-500 text-sm">2021 - 2022</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-4">
                  <h5 className="font-semibold text-gray-800">Bachelor's in Economics</h5>
                  <p className="text-gray-600 text-sm">Scholem Aleijem High School</p>
                  <p className="text-gray-500 text-sm">2016 - 2020</p>
                </div>
              </div>
            </div>

            {/* Certificaciones */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-pink-600">Certifications</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-400 pl-4">
                  <h5 className="font-semibold text-gray-800">Google Display Certification</h5>
                  <p className="text-gray-600 text-sm">Google</p>
                  <p className="text-gray-500 text-sm">ID: 225423675</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-4">
                  <h5 className="font-semibold text-gray-800">Google SEO Certification</h5>
                  <p className="text-gray-600 text-sm">Google</p>
                  <p className="text-gray-500 text-sm">ID: 809120</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-4">
                  <h5 className="font-semibold text-gray-800">Power BI Analyst</h5>
                  <p className="text-gray-600 text-sm">Microsoft</p>
                  <p className="text-gray-500 text-sm">Data Analysis & Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
