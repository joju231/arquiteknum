import React from 'react';
import Container from './Container';
import { Building2, PenTool, Compass, Users, Lightbulb, Ruler } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="p-3 bg-red-50 rounded-lg inline-flex mb-4 text-red-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
      <div className="mt-4">
        <a href="#contact" className="text-red-600 font-medium inline-flex items-center hover:text-red-700 group">
          Saber más
          <svg className="ml-1 transition-transform duration-300 group-hover:translate-x-1" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Diseño Arquitectónico",
    description: "Servicios arquitectónicos completos desde el concepto hasta la finalización, con un enfoque en soluciones innovadoras y sostenibles.",
    icon: <Building2 size={24} />
  },
  {
    title: "Diseño Interior",
    description: "Creación de espacios interiores funcionales y estéticamente agradables que reflejan la visión, necesidades y personalidad del cliente.",
    icon: <PenTool size={24} />
  },
  {
    title: "Planificación Urbana",
    description: "Planificación estratégica para ciudades y comunidades para crear entornos urbanos sostenibles, vibrantes y funcionales.",
    icon: <Compass size={24} />
  },
  {
    title: "Consultoría",
    description: "Consultoría experta en aspectos arquitectónicos de su proyecto, desde estudios de viabilidad hasta soluciones técnicas.",
    icon: <Users size={24} />
  },
  {
    title: "Desarrollo de Conceptos",
    description: "Creación de conceptos de diseño innovadores que desafían los límites mientras se mantienen fieles a los requisitos del proyecto.",
    icon: <Lightbulb size={24} />
  },
  {
    title: "Visualización 3D",
    description: "Renderizados 3D detallados y modelos virtuales para ayudar a los clientes a visualizar los proyectos antes de la construcción.",
    icon: <Ruler size={24} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Proporcionamos soluciones arquitectónicas integrales adaptadas a sus necesidades específicas,
            guiando los proyectos desde el concepto inicial hasta su exitosa finalización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;