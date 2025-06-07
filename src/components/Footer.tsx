import React from 'react';
import Container from './Container';
import { Instagram, Twitter, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Logo className="text-red-600" size={28} />
              <span className="text-xl font-bold">ARQUITEKNUM</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Nos dedicamos a crear soluciones arquitectónicas innovadoras que inspiran y transforman espacios, mejorando la forma en que las personas viven, trabajan e interactúan con su entorno.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { es: 'Inicio', en: 'home' },
                { es: 'Nosotros', en: 'about' },
                { es: 'Proyectos', en: 'projects' },
                { es: 'Servicios', en: 'services' },
                { es: 'Equipo', en: 'team' },
                { es: 'Contacto', en: 'contact' }
              ].map((link) => (
                <li key={link.en}>
                  <a 
                    href={`#${link.en}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.es}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Calle Gran Vía 123</p>
              <p>Madrid, España</p>
              <p className="pt-2">
                <a href="mailto:info@arquiteknum.es" className="hover:text-white transition-colors">
                  info@arquiteknum.es
                </a>
              </p>
              <p>
                <a href="tel:+34911234567" className="hover:text-white transition-colors">
                  +34 91 123 45 67
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ARQUITEKNUM. Todos los derechos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            Volver arriba 
            <span className="bg-gray-800 p-1.5 rounded-full group-hover:bg-red-600 transition-colors">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;