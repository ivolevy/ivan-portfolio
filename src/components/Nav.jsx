import { useState } from "react";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";

const menuItems = [
  { id: "services", label: "Abilities", title: "What i can do" },
  { id: "projects", label: "Projects", title: "Recent projects" },
  { id: "contact", label: "Let´s talk", title: "Let´s work together", className: "navButton" },
];

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => setIsMenuOpen((prev) => !prev);

  // Función para hacer scroll suave
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <a href="#hero" title="Ivan Levy - portfolio">
          <img src="icon.ico" alt="Ivan Levy - portfolio" />
        </a>
      </div>

      <ul className="desktop-menu">
        {menuItems.map(({ id, label, className, title }) => (
          <li key={id}>
            <a href={`#${id}`} className={className} title={title} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
        onClick={toggleNav}
        aria-label="Abrir menú de navegación"
        aria-expanded={isMenuOpen}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      <div className={`menubar ${isMenuOpen ? "active" : ""}`}>
        <ul>
          {menuItems.map(({ id, label, className, title }) => (
            <li key={id}>
              <a href={`#${id}`} className={className} title={title} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
