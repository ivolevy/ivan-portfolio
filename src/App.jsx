import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/museomoderno';

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import { Header } from './components/Header.jsx';
import { NavComponent } from './components/Nav.jsx';
import { About } from './components/About.jsx';
import Services from './components/Services.jsx';
import { Experience } from './components/Experience.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { ProjectDetail } from './components/ProjectDetail.jsx';

/* 404 */
import { NotFound } from './assets/comps/Notfound.jsx';
import { CustomCursor } from './assets/comps/CustomCursor.jsx';

import { useEffect } from 'react';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>

      <CustomCursor />
      {/* Renderizamos el Nav bar en todas las páginas excepto en 404 */}
      {location.pathname !== '/404' && (
        <div className="nav">
          <NavComponent />
        </div>
      )}
      
      <Routes>
        <Route path="/" element={<>
          <Header />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Contact />
        </>} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        {/* Ruta 404 */}
        <Route path="/404" element={<NotFound />} />
        {/* Redirigir cualquier ruta no definida a /404 */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      {/* Renderizamos el footer solo si no estamos en la página 404 */}
      {location.pathname !== '/404' && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
