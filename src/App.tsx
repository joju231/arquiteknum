import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGalleryExpo from './components/ProjectGalleryExpo';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Arquiteknum | Innovative Spanish Architecture';
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (!target) return;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <div className="loading-screen">
        <div className="logo-animation">
          <div className="logo-container">
            <div className="logo-triangle"></div>
            <div className="logo-triangle"></div>
          </div>
          <div className="company-name">ARQUITEKNUM</div>
        </div>
      </div>
      
      <div className="font-sans">
        <Navbar />
        <Hero />
        <About />
        <ProjectGalleryExpo />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;