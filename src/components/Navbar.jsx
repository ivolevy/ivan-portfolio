import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/useTheme";
import { profile } from "../data/portfolioData";

const navItems = [
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Capabilities" },
  { id: "contact-section", label: "Contact" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { renderedTheme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <a href="#main-content" className="skip-link visually-hidden">
        Skip to main content
      </a>

      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-5 sm:px-8 h-16"
      >
        <a
          href="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-serif text-2xl tracking-tight text-ink no-underline hover:text-accent transition-colors"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="text-[13px] font-normal text-muted transition-colors hover:text-ink no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${renderedTheme === "dark" ? "light" : "dark"} theme`}
            className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink hover:border-ink/30"
          >
            <span className="theme-icon-sun" aria-hidden="true">
              <Sun className="h-4 w-4" />
            </span>
            <span className="theme-icon-moon" aria-hidden="true">
              <Moon className="h-4 w-4" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="inline-flex md:hidden min-h-[36px] min-w-[36px] items-center justify-center rounded-full border border-line text-ink"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-line bg-canvas px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="flex min-h-[44px] items-center font-serif text-2xl text-ink hover:text-accent no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
