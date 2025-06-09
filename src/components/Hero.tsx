import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[100vh] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 scale-in">
        <img
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
          alt="Arquitectura moderna española"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="block slide-up">Diseño Innovador.</span>
          <span className="block slide-up delay-200">Arquitectura <span className="text-red-600">Española</span>.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed slide-up delay-300">
          Transformamos visiones en espacios extraordinarios que inspiran, funcionan y perduran en el tiempo.
        </p>
        <div className="flex justify-center slide-up delay-400">
          <Button 
            variant="outline" 
            size="lg"
            className="group"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;