import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import Hero from './Hero.tsx'
import { Award, Home, Users, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, ArrowLeft } from 'lucide-react';
import Logo from './Logo';

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

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col h-full">
      <div className="p-3 bg-red-50 rounded-lg inline-flex mb-4 text-red-600">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow text-sm">{description}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm border border-gray-100">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-red-600 font-medium text-sm">{role}</p>
        <p className="text-gray-600 text-sm mt-2">{bio}</p>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Diseño Arquitectónico",
    description: "Servicios arquitectónicos completos desde el concepto hasta la finalización.",
    icon: <Home size={20} />
  },
  {
    title: "Diseño Interior",
    description: "Creación de espacios interiores funcionales y estéticamente agradables.",
    icon: <Users size={20} />
  },
  {
    title: "Planificación Urbana",
    description: "Planificación estratégica para ciudades y comunidades sostenibles.",
    icon: <MapPin size={20} />
  }
];

const teamMembers: TeamMemberProps[] = [
  {
    name: "Alejandra Rodríguez",
    role: "Arquitecta Principal",
    bio: "Con más de 15 años de experiencia, lidera nuestro equipo de diseño.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    name: "Marco Chen",
    role: "Arquitecto Senior",
    bio: "Especialista en diseño urbano y proyectos premiados.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    name: "Sofía Rivera",
    role: "Directora de Diseño Interior",
    bio: "Combina funcionalidad con estética bella en cada proyecto.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Back to Gallery Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-40 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-gray-900 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        aria-label="Back to Gallery"
      >
        <ArrowLeft size={20} />
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Gallery
        </span>
      </Link>

      <div className="py-12">
        {/* Hero Section */}
        <Container>
          <Hero>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Logo className="text-red-600" size={32} />
              <h1 className="text-3xl md:text-4xl font-bold">ARQUITEKNUM</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transformamos visiones en espacios extraordinarios que inspiran, funcionan y perduran en el tiempo.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-lg shadow-sm">
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

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Nuestra Visión</h2>
              <p className="text-gray-600">
                Durante más de dos décadas, hemos estado dando forma a horizontes y transformando comunidades a través del diseño arquitectónico innovador. Nuestro compromiso con la excelencia, la sostenibilidad y la satisfacción del cliente nos ha establecido como líderes en la industria.
              </p>
              <p className="text-gray-600">
                Creemos que la arquitectura es más que solo edificios; se trata de crear entornos que mejoren la experiencia humana y fomenten la comunidad. Nuestros diseños equilibran la belleza estética con la funcionalidad práctica.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="font-semibold mb-2">Nuestro Enfoque</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
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
                <div>
                  <h4 className="font-semibold mb-2">Nuestros Valores</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
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
            
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-48 h-48 bg-red-600/10 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg" 
                alt="Proceso de diseño arquitectónico" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -right-4 -bottom-4 w-48 h-48 bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contacta con Nosotros</h2>
                <p className="text-gray-600 mb-6">
                  ¿Listo para comenzar tu proyecto? Contáctanos para programar una consulta y discutir cómo podemos dar vida a tu visión.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-50 rounded-lg text-red-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Ubicación</p>
                      <p className="text-gray-600 text-sm">Calle Gran Vía 123, Madrid, España</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-50 rounded-lg text-red-600">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@arquiteknum.es" className="text-gray-600 text-sm hover:text-red-600">
                        info@arquiteknum.es
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-50 rounded-lg text-red-600">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <a href="tel:+34911234567" className="text-gray-600 text-sm hover:text-red-600">
                        +34 91 123 45 67
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                <div className="flex space-x-4 mb-6">
                  <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold mb-3">Horarios de Oficina</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span>10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ARQUITEKNUM. Todos los derechos reservados.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;