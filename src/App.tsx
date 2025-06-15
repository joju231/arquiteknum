import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectGalleryExpo from './components/ProjectGalleryExpo';
import About from './components/About';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    document.title = 'Arquiteknum | Innovative Spanish Architecture';
    
    // Hide loading screen after animation completes
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 4000); // 4 seconds total animation time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && (
        <div className="loading-screen">
          <div className="logo-animation">
            <div className="logo-container">
              <div className="logo-triangle"></div>
              <div className="logo-triangle"></div>
            </div>
            <div className="company-name">ARQUITEKNUM</div>
          </div>
        </div>
      )}
      
      <Router>
        <Routes>
          <Route path="/" element={<ProjectGalleryExpo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;