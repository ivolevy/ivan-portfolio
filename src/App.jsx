import { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { SkillsSection } from "./components/SkillsSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { NotFound } from "./assets/comps/Notfound";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-dvh flex flex-col">
      {location.pathname !== "/404" && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <main id="main-content" tabIndex={-1} className="flex-1">
              <Hero />
              <Projects />
              <Experience />
              <SkillsSection />
              <Contact />
            </main>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {location.pathname !== "/404" && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </MotionConfig>
  );
}
