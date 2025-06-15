import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden border-black border-2"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 scale-in">
        <img
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
          alt="Arquitectura moderna española"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      {/* Enhanced Multi-layer Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>

      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="block slide-up">Diseño Innovador.</span>
          <span className="block slide-up delay-200">
            Arquitectura <span className="text-red-600">Española</span>.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed slide-up delay-300">
          Transformamos visiones en espacios extraordinarios que inspiran, funcionan y perduran en el tiempo.
        </p>
        <div className="flex justify-center slide-up delay-400">
          <Link to="/about">
            <Button 
              variant="outline" 
              size="lg"
              className="group"
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
