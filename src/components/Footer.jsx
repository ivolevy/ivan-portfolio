import "../assets/styles/footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="pb-8 pt-0 text-center text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Ivan Levy. All rights reserved.
    </footer>
  );
};
