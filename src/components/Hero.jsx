import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      // Small delay to ensure smooth transition
      setTimeout(() => setShowContent(true), 100);
    };
    img.src = "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg";
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image with optimized loading */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
          alt="Arquitectura moderna española"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
          decoding="async"
          style={{
            willChange: 'auto',
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        />
      </div>
      
      {/* Fallback background while image loads */}
      {!imageLoaded && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      )}
      
      {/* Enhanced Multi-layer Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>

      
      {/* Content with faster animation */}
      <div className={`relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto transition-all duration-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-primary">
          <span className="block font-light">Diseño Innovador.</span>
          <span className="block font-extrabold">
            Arquitectura <span className="text-red-600">Española</span>.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed font-light font-weight-300">
          Transformamos visiones en espacios extraordinarios que inspiran, funcionan y perduran en el tiempo.
        </p>
        <div className="flex justify-center">
          <Link to="/about">
            <Button 
              variant="outline" 
              size="lg"
              className="group font-secondary font-medium"
            >
              Saber más
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;