import React, { useEffect, useState } from 'react';
import ProjectGalleryExpo from './components/ProjectGalleryExpo';
import About from './components/About';
import { Info, X } from 'lucide-react';

function App() {
  const [showAbout, setShowAbout] = useState(false);

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

  useEffect(() => {
    // Prevent body scroll when about is open
    if (showAbout) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showAbout]);

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
      
      <div className="relative">
        {/* Minimal About Button */}
        <button
          onClick={() => setShowAbout(true)}
          className="fixed top-6 right-6 z-40 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="About Arquiteknum"
        >
          <Info size={20} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            About
          </span>
        </button>

        {/* Main Gallery */}
        <ProjectGalleryExpo />

        {/* About Overlay */}
        {showAbout && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div className="absolute inset-0 overflow-y-auto">
              <div className="min-h-full flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setShowAbout(false)}
                    className="absolute top-6 right-6 z-10 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                    aria-label="Close about section"
                  >
                    <X size={20} />
                  </button>
                  
                  {/* About Content */}
                  <About />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;