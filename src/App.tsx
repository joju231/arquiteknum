import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectGallery from './components/ProjectGallery';

function App() {
  const [loading, setLoading] = useState(true);
  const [showGallery, setShowGallery] = useState(false);

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
    
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    
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
      
      {showGallery ? (
        <ProjectGallery />
      ) : (
        <div className="font-sans">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Services />
          <Team />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
      
      {/* Floating button to toggle gallery */}
      <button
        onClick={() => setShowGallery(!showGallery)}
        className="fixed bottom-8 left-8 z-50 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
      >
        {showGallery ? 'Ver Sitio Web' : 'Ver Proyectos'}
      </button>
    </>
  );
}

export default App;