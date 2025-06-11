import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectGalleryExpo from './components/ProjectGalleryExpo';
import About from './components/About';

function App() {
  useEffect(() => {
    document.title = 'Arquiteknum | Innovative Spanish Architecture';
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
      
      <Router>
        <Routes>
          <Route path="/" element={<ProjectGalleryExpo />} />
          <Route path="/about" element={<About />} />
          <Route path="/us" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;