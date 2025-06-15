import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Acerca', path: '/about' },
    { name: 'Proyectos', path: '/#projects' },
    { name: 'Contacto', path: '/about#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <Logo 
              className={`transition-colors duration-300 ${
                scrolled || !isHomePage ? 'text-red-600' : 'text-white'
              }`} 
              size={28} 
            />
            <span
              className={`text-xl md:text-2xl font-bold font-primary tracking-wide transition-colors duration-300 ${
                scrolled || !isHomePage ? 'text-gray-900' : 'text-white'
              }`}
            >
              ARQUITEKNUM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-secondary font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:text-red-600 relative group ${
                  scrolled || !isHomePage ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:info@arquiteknum.es"
              className={`flex items-center space-x-2 text-sm font-light transition-colors duration-300 hover:text-red-600 ${
                scrolled || !isHomePage ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              <Mail size={16} />
              <span>info@arquiteknum.es</span>
            </a>
            <div className={`w-px h-4 ${scrolled || !isHomePage ? 'bg-gray-300' : 'bg-white/30'}`}></div>
            <a
              href="tel:+34911234567"
              className={`flex items-center space-x-2 text-sm font-light transition-colors duration-300 hover:text-red-600 ${
                scrolled || !isHomePage ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              <Phone size={16} />
              <span>+34 91 123 45 67</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled || !isHomePage
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-secondary font-medium text-sm uppercase tracking-wider hover:text-red-600 transition-colors duration-300 py-2"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Contact */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <a
              href="mailto:info@arquiteknum.es"
              className="flex items-center space-x-3 text-gray-600 font-light text-sm hover:text-red-600 transition-colors duration-300"
            >
              <Mail size={16} />
              <span>info@arquiteknum.es</span>
            </a>
            <a
              href="tel:+34911234567"
              className="flex items-center space-x-3 text-gray-600 font-light text-sm hover:text-red-600 transition-colors duration-300"
            >
              <Phone size={16} />
              <span>+34 91 123 45 67</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;