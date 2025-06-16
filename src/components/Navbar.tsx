import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const location = useLocation();

  const scrollToContact = () => {
    if (location.pathname === '/about') {
      // If already on about page, scroll to contact section
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on about page, navigate to about page with contact hash
      window.location.href = '/about#contact';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
          >
            <Logo className="text-red-600 group-hover:text-red-500 transition-colors" size={24} />
            <span className="text-white font-bold text-lg font-primary tracking-wide">
              ARQUITEKNUM
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors font-secondary ${
                location.pathname === '/' 
                  ? 'text-red-500' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Inicio
            </Link>
            
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors font-secondary ${
                location.pathname === '/' 
                  ? 'text-red-500' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Sobre nosotros
            </Link>
            
            <button
              onClick={scrollToContact}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors font-secondary"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;