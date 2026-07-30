import { useState } from "react";
import "../assets/styles/nav.css";
import "../assets/styles/contact.css";

const menuItems = [
  { id: "hero", label: "Home", title: "Home" },
  { id: "about", label: "About", title: "About me" },
  { id: "skills", label: "Skills", title: "What I can do" },
  { id: "projects", label: "Projects", title: "Recent projects" },
  { id: "contact-section", label: "Contact", title: "Let’s work together" },
];

export const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => setIsMenuOpen((prev) => !prev);

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + id;
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav>
      {/* Brand logo left aligned */}
      <a
        href="/"
        className="nav-brand font-serif italic text-lg"
        onClick={(e) => {
          if (window.location.pathname === '/') {
            e.preventDefault();
            scrollToSection("hero");
          }
        }}
      >
        Ivan.
      </a>

      {/* Navigation menu right aligned */}
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
