import { motion } from "framer-motion";
import "../assets/styles/about.css";

export const About = () => {
  return (
    <section className="about-section py-20 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="border-b-4 border-black pb-1">About</span> Me
        </motion.h2>

        <motion.div 
          className="bg-white rounded-lg p-8 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Información personal */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm 22 years old and I'm from Palermo, CABA. I'm passionate about technology and creating innovative solutions that make a difference.
              </p>
            </div>

            {/* Información profesional */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional</h3>
              <p className="text-gray-600 leading-relaxed">
                Web developer at UO Solutions, building high-quality websites with HTML, CSS, React, PHP, and WordPress, and managing FTP operations for IAB's news blog.
              </p>
            </div>

            {/* Educación */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
              <p className="text-gray-600 leading-relaxed">
                At UADE, I'm studying IT Management, strengthening my strategic and technical skills.
              </p>
            </div>

            {/* Startup */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Entrepreneurship</h3>
              <p className="text-gray-600 leading-relaxed">
                I also lead a SaaS startup with fellow students, creating custom ERP, CRM, and web solutions. We use AI, Vercel, Supabase, and cutting-edge tools to deliver faster, smarter, and scalable products.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
