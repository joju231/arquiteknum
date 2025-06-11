import React from 'react';
import Container from './Container';
import Logo from './Logo';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container className="relative">
        <div className="py-16 md:py-24 text-center">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Logo className="text-red-500" size={48} />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              ARQUITEKNUM
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos visiones en espacios extraordinarios que inspiran y perduran
          </p>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Arquitectura innovadora española con más de 20 años de experiencia
          </p>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm uppercase tracking-wide">Explora nuestros proyectos</span>
            <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;