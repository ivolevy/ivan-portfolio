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
    <section className="py-32 mb-16 pt-16" id="contact-section" style={{ scrollMarginTop: '60px' }}>
      <div className="text-center mb-12">
                  <motion.span 
            className="inline-block px-3 py-1 bg-pink-50 text-pink-400 rounded-full text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            CONTACT
          </motion.span>
        <motion.h2 
          className="section-title text-4xl md:text-5xl font-bold text-white mb-3 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="underline">Contact</span>
        </motion.h2>
      </div>
      <div className="flex flex-col items-center lg:flex-row mx-auto text-center contactContainer" id="contact">
        {/* Izquierda: Información + Redes Sociales */}
        <div className="lg:w-1/2 flex flex-col items-start justify-center text-left p-6 responsiveData">
          <h3 className="text-3xl font-bold text-white contactSubtitle">Don't be shy, let's talk!</h3>

          {/* Redes Sociales */}
          <div className="flex items-center space-x-4 mb-4">
            <a href="https://www.instagram.com/ivo.levy" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 text-3xl">
              <AiFillInstagram className="contactIcon" />
            </a>
            <a href="https://www.linkedin.com/in/ivan-levy" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 text-3xl">
              <TbBrandLinkedinFilled className="contactIcon" />
            </a>
            <a href="https://wa.me/1138240929" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 text-3xl">
              <FaWhatsapp className="contactIcon" />
            </a>
          </div>

          {/* Correo Electrónico */}
          <p className="text-gray-300 mb-4">
            <a href="mailto:ivo.levy03@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white contactEmail">
              ivo.levy03@gmail.com
            </a>
          </p>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/1138240929" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-green-500 hover:text-green-400 underline"
          >
            <FaWhatsapp className="text-xl" />
            <span>Write us on WhatsApp</span>
          </a>
        </div>

        {/* Derecha: Formulario */}
        <div className="lg:w-1/2 bg-[var(--gris-opaco)] p-6 roundedForm responsiveForm shadow-md">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col items-center text-center">
            <div className="flex flex-col md:flex-row gap-4 mb-4 w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full md:w-1/2 p-3 bg-white text-black border border-gray-200 roundedForm focus:outline-none focus:border-[var(--rosa-principal)]"
              />
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                required
                className="w-full md:w-1/2 p-3 bg-white text-black border border-gray-200 roundedForm focus:outline-none focus:border-[var(--rosa-principal)]"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 mb-4 bg-white text-black border border-gray-200 roundedForm focus:outline-none focus:border-[var(--rosa-principal)]"
            />

            <textarea
              name="message"
              placeholder="Wanna work together?"
              required
              rows="4"
              className="w-full p-3 bg-white text-black border border-gray-200 roundedForm focus:outline-none focus:border-[var(--rosa-principal)]"
            ></textarea>

            <button type="submit" className="contactButton mt-3">
              Send Message
            </button>

            {/* Mensaje de estado */}
            {status && <p className={`text-center mt-3 ${status.includes("Error") ? "text-red-600" : "text-green-600"}`}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
