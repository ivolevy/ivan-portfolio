import { NavComponent } from "./Nav";
import '../assets/styles/header.css';
import { Hero } from '../assets/comps/Hero';
import { ParticlesBackground } from './ParticlesBackground.jsx';

export const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <ParticlesBackground />
        <div className="nav">
          <NavComponent />
        </div>
        <Hero />
      </header>
    </>
  );
};















 
