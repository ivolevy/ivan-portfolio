import "../assets/styles/footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Sección Izquierda */}
        <div className="w-full md:w-1/3 text-center md:text-left text-sm font-medium text-black hidden md:block">
          Let´s grow together! Just hire me :)
        </div>

        {/* Sección de Iconos y Correo (Centrada en Mobile) */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center min-h-[150px] 
                        md:items-end md:justify-end text-black">
          <div className="flex space-x-5">
            <a href="https://www.linkedin.com/in/ivan-levy/" target="_blank" className="text-2xl hover:text-gray-700 icon"><TbBrandLinkedinFilled /></a>
            <a href="https://www.instagram.com/ivo.levy/" target="_blank" className="text-2xl hover:text-gray-700 icon"><AiFillInstagram /></a>
            <a href="https://wa.me/1138240929" className="text-2xl hover:text-gray-700 icon"><FaWhatsapp /></a>
          </div>
          {/* Correo Electrónico */}
          <div className="mt-2 text-sm text-gray-600">
            <a href="mailto:ivo.levy03@gmail.com" className="hover:underline email">ivo.levy03@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Copyright y Logo */}
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} Ivan Levy. All rights reserved.
      </div>
    </footer>
  );
};
