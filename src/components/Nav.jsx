import { useState } from "react";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";

const menuItems = [
  { id: "hero", label: "Home", title: "Home" },
  { id: "about", label: "About", title: "About me" },
  { id: "skills", label: "Skills", title: "What i can do" },
  { id: "projects", label: "Projects", title: "Recent projects" },
];

const contactItem = { id: "contact", label: "Let’s talk", title: "Let’s work together", className: "navButton" };

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
      <div className="contact-button mobile-only">
        <a href={`#${contactItem.id}`} className={contactItem.className} title={contactItem.title} onClick={(e) => { e.preventDefault(); scrollToSection(contactItem.id); }}>
          {contactItem.label}
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

      <div className="contact-button desktop-only">
        <a href={`#${contactItem.id}`} className={contactItem.className} title={contactItem.title} onClick={(e) => { e.preventDefault(); scrollToSection(contactItem.id); }}>
          {contactItem.label}
        </a>
      </div>

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
