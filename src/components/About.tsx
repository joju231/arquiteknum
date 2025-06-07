import React from 'react';
import Container from './Container';
import { Award, Home, Users } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const Stat: React.FC<StatProps> = ({ value, label, icon }) => (
  <div className="flex flex-col items-center p-6 border-r last:border-r-0 border-gray-200">
    <div className="text-red-600 mb-2">{icon}</div>
    <div className="text-3xl font-bold mb-1">{value}</div>
    <div className="text-gray-500 text-sm uppercase tracking-wide">{label}</div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Visión</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Durante más de dos décadas, hemos estado dando forma a horizontes y transformando comunidades a través del diseño arquitectónico innovador. Nuestro compromiso con la excelencia, la sostenibilidad y la satisfacción del cliente nos ha establecido como líderes en la industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Creando Espacios que Inspiran</h3>
            <p className="text-gray-600">
              Creemos que la arquitectura es más que solo edificios; se trata de crear entornos que mejoren la experiencia humana y fomenten la comunidad. Nuestros diseños equilibran la belleza estética con la funcionalidad práctica.
            </p>
            <p className="text-gray-600">
              Cada proyecto comienza con una comprensión profunda de la visión de nuestros clientes, el contexto del sitio y las necesidades de los usuarios. Esta base nos permite crear espacios que no solo son visualmente impactantes, sino también significativos y útiles.
            </p>
            <div className="pt-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <h4 className="font-semibold mb-2">Nuestro Enfoque</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Diseño Sostenible
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Espacios Centrados en el Usuario
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Soluciones Innovadoras
                    </li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <h4 className="font-semibold mb-2">Nuestros Valores</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Artesanía Meticulosa
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Proceso Colaborativo
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      Prácticas Éticas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-64 h-64 bg-red-600/10 rounded-lg"></div>
            <img 
              src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg" 
              alt="Proceso de diseño arquitectónico" 
              className="w-full h-auto rounded-lg shadow-xl relative z-10"
            />
            <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-lg shadow-sm">
          <Stat 
            value="20+" 
            label="Años de Experiencia" 
            icon={<Award size={24} />} 
          />
          <Stat 
            value="150+" 
            label="Proyectos Completados" 
            icon={<Home size={24} />} 
          />
          <Stat 
            value="50+" 
            label="Miembros del Equipo" 
            icon={<Users size={24} />} 
          />
        </div>
      </Container>
    </section>
  );
};

export default About;