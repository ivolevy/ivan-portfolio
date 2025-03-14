import { useState } from "react";
import emailjs from "emailjs-com";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import "../assets/styles/contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_3hpiy2n", // Service ID
        "template_gvukjc5", // Template ID
        templateParams,
        "E4xuiiz13SZoQSqQf" // Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", company: "", email: "", message: "" });
        },
        (error) => {
          setStatus("An error occurred, please try again.");
          console.error("Error sending message:", error);
        }
      );
  };

  return (
    <>
      <h2 className="servicesTitle text-center mb-5">Contact</h2>
      <div className="flex flex-col items-center lg:flex-row mx-auto text-center contactContainer" id="contact">
        
        {/* Left Side: Contact Info + Social Media */}
        <div className="lg:w-1/2 flex flex-col items-start justify-center text-left p-6 responsiveData">
          <h3 className="text-3xl font-bold text-white contactSubtitle">Don’t be shy, let’s talk!</h3>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4 mb-4">
            <a 
              href="https://www.instagram.com/ivo.levy" 
              target="_blank" rel="noopener noreferrer" 
              className="text-pink-500 hover:text-pink-600 text-3xl" 
              aria-label="Instagram" title="Instagram"
            >
              <AiFillInstagram className="contactIcon"/>
            </a>
            <a 
              href="https://www.linkedin.com/in/ivan-levy/" 
              target="_blank" rel="noopener noreferrer" 
              className="text-blue-700 hover:text-blue-800 text-3xl"
              aria-label="LinkedIn" title="LinkedIn"
            >
              <TbBrandLinkedinFilled className="contactIcon"/>
            </a>
            <a 
              href="https://wa.me/1138240929" 
              target="_blank" rel="noopener noreferrer" 
              className="text-green-500 hover:text-green-600 text-3xl"
              aria-label="WhatsApp" title="WhatsApp"
            >
              <FaWhatsapp className="contactIcon"/>
            </a>
          </div>

          {/* Email */}
          <p className="text-gray-600">
            <a href="mailto:ivo.levy03@gmail.com" className="text-white contactEmail">ivo.levy03@gmail.com</a>
          </p>

        </div>

        {/* Right Side: Contact Form */}
        <form 
          onSubmit={handleSubmit} 
          className="lg:w-1/2 bg-white p-6 roundedForm responsiveForm shadow-md flex flex-col items-center text-center"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full md:w-1/2 p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Full Name"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full md:w-1/2 p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Company Name"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Email"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 roundedForm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Message"
          ></textarea>

          <button type="submit" className="contactButton mt-3">
            Send Message
          </button>

          {status && <p className="text-green-600 text-center mt-3">{status}</p>}
        </form>
      </div>
    </>
  );
};
