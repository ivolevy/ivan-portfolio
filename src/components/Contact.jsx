import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import "../assets/styles/contact.css";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3hpiy2n", // Reemplaza con tu Service ID
        "template_gvukjc5", // Reemplaza con tu Template ID
        form.current,
        "E4xuiiz13SZoQSqQf" // Reemplaza con tu Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset(); // Limpia el formulario después de enviar
        },
        (error) => {
          setStatus("Error sending message, please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <section className="pt-32 pb-0 mb-0" id="contact-section" style={{ scrollMarginTop: '60px' }}>
      <div className="text-center mb-12">
        <motion.span
          className="inline-block px-3 py-1 bg-sky-50 text-celeste rounded-full text-xs font-semibold mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          CONTACT
        </motion.span>
        <motion.h2
          className="section-title text-4xl md:text-5xl font-bold text-neutral-900 mb-3 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="underline decoration-celeste/50">Contact</span>
        </motion.h2>
      </div>
      <div className="flex flex-col lg:flex-row mx-auto justify-between gap-12 text-center contactContainer max-w-6xl" id="contact">
        {/* Izquierda: Información + Redes Sociales */}
        <motion.div
          className="lg:w-1/2 flex flex-col items-start justify-center text-left pt-8 lg:pt-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6 leading-tight">
            Don't be shy, <br />
            <span className="italic text-celeste">let's talk!</span>
          </h3>

          <p className="text-gray-600 mb-8 max-w-md text-sm font-light leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to collaborate.
          </p>

          <div className="space-y-6 mb-8">
            {/* Email */}
            <a href="mailto:ivo.levy03@gmail.com" className="flex items-center gap-4 text-gray-700 hover:text-gray-950 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-celeste group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
              <span className="text-sm">ivo.levy03@gmail.com</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/1138240929" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-gray-950 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                <FaWhatsapp className="text-xl" />
              </div>
              <span className="text-sm">+54 11 3824 0929</span>
            </a>
          </div>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/ivo.levy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300">
              <AiFillInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ivan-levy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
              <TbBrandLinkedinFilled size={20} />
            </a>
          </div>

        </motion.div>

        {/* Derecha: Formulario */}
        <motion.div
          className="lg:w-1/2 glass-panel p-8 md:p-10 rounded-3xl shadow-lg border border-black/5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full md:w-1/2 p-3 bg-black/[0.02] text-gray-900 placeholder-gray-450 border border-black/10 rounded-lg focus:outline-none focus:border-celeste focus:bg-black/[0.04] transition-all font-light text-xs"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                className="w-full md:w-1/2 p-3 bg-black/[0.02] text-gray-900 placeholder-gray-450 border border-black/10 rounded-lg focus:outline-none focus:border-celeste focus:bg-black/[0.04] transition-all font-light text-xs"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 bg-black/[0.02] text-gray-900 placeholder-gray-450 border border-black/10 rounded-lg focus:outline-none focus:border-celeste focus:bg-black/[0.04] transition-all font-light text-xs"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              rows="4"
              className="w-full p-3 bg-black/[0.02] text-gray-900 placeholder-gray-450 border border-black/10 rounded-lg focus:outline-none focus:border-celeste focus:bg-black/[0.04] transition-all font-light resize-none text-xs"
            ></textarea>

            <button type="submit" className="self-start px-10 py-3 bg-gray-900 text-white font-serif italic tracking-wide rounded-full hover:!bg-celeste hover:!text-white transition-all duration-300 mt-2 text-sm shadow-md hover:shadow-sky-500/25 hover:scale-105 active:scale-95 border border-transparent">
              Send Message
            </button>

            {/* Mensaje de estado */}
            {status && <p className={`text-center mt-2 text-sm ${status.includes("Error") ? "text-red-600" : "text-green-600"}`}>{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
