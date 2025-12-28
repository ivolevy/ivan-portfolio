import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/museomoderno';

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import { Header } from './components/Header.jsx';
import { About } from './components/About.jsx';
import Services from './components/Services.jsx';
import { Experience } from './components/Experience.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { TechStack } from './components/TechStack.jsx';
import { NowSection } from './components/NowSection.jsx';

/* 404 */
import { NotFound } from './assets/comps/Notfound.jsx';
import { CustomCursor } from './assets/comps/CustomCursor.jsx';

function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="grain-texture"></div>
      <CustomCursor />
      {/* Renderizamos el header solo si no estamos en la página 404 */}
      {location.pathname !== '/404' && <Header />}
      
      <Routes>
        <Route path="/" element={<>
          <About />
          <Experience />
          <Services />
          <TechStack />
          <NowSection />
          <Projects />
          <Contact />
        </>} />
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
