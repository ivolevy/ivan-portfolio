import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/museomoderno';

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import { Header } from './components/Header.jsx';
import { About } from './components/About.jsx';
import Services from './components/Services.jsx';
import { Steps } from './components/Steps.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

/* 404 */
import { NotFound } from './assets/comps/Notfound.jsx';

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Renderizamos el header solo si no estamos en la página 404 */}
      {location.pathname !== '/404' && <Header />}
      
      <Routes>
        <Route path="/" element={<>
          <About />
          <Services />
          <Steps />
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
