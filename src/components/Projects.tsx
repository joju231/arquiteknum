import React, { useState } from 'react';
import Container from './Container';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Alturas Azure",
    category: "Residencial",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description: "Un complejo de apartamentos de lujo con diseño sostenible y vistas panorámicas.",
  },
  {
    id: 2,
    title: "Torre Vértice",
    category: "Comercial",
    image: "https://images.pexels.com/photos/425128/pexels-photo-425128.jpeg",
    description: "Una torre de oficinas icónica que redefine el horizonte de la ciudad con su forma distintiva.",
  },
  {
    id: 3,
    title: "Jardines Armonía",
    category: "Espacio Público",
    image: "https://images.pexels.com/photos/705767/pexels-photo-705767.jpeg",
    description: "Un jardín público que integra perfectamente la naturaleza con elementos arquitectónicos.",
  },
  {
    id: 4,
    title: "Centro Meridiano",
    category: "Cultural",
    image: "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg",
    description: "Un centro cultural diseñado para albergar exposiciones y espectáculos en un entorno inspirador.",
  },
  {
    id: 5,
    title: "Residencias Nova",
    category: "Residencial",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    description: "Casas adosadas modernas que priorizan la conexión comunitaria y los espacios privados.",
  },
  {
    id: 6,
    title: "Laboratorios Pulse",
    category: "Comercial",
    image: "https://images.pexels.com/photos/1797157/pexels-photo-1797157.jpeg",
    description: "Una instalación de investigación diseñada para fomentar la innovación a través de espacios colaborativos.",
  }
];

const categories = ["Todos", ...Array.from(new Set(projects.map(project => project.category)))];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Explora nuestro diverso portafolio de proyectos que muestran nuestro compromiso con la innovación, la sostenibilidad y el diseño excepcional.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button 
                  onClick={() => setActiveProject(project)}
                  className="text-red-600 font-medium inline-flex items-center hover:text-red-700 transition-colors"
                >
                  Ver Proyecto
                  <svg 
                    width="15" 
                    height="15" 
                    viewBox="0 0 15 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path 
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" 
                      fill="currentColor" 
                      fillRule="evenodd" 
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setActiveProject(null)}>
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
              <div className="relative">
                <img src={activeProject.image} alt={activeProject.title} className="w-full h-64 md:h-80 object-cover" />
                <button 
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  onClick={() => setActiveProject(null)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
                    {activeProject.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{activeProject.title}</h3>
                <p className="text-gray-600 mb-6">{activeProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Detalles del Proyecto</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Ubicación: Madrid, España</li>
                      <li>Año: 2023</li>
                      <li>Superficie: 1,115 m²</li>
                      <li>Estado: Completado</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Enfoque Arquitectónico</h4>
                    <p className="text-gray-600">
                      Este proyecto ejemplifica nuestro compromiso con las prácticas de diseño sostenible mientras creamos espacios que inspiran y funcionan perfectamente para sus habitantes.
                    </p>
                  </div>
                </div>
                
                <button 
                  className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition-colors"
                  onClick={() => setActiveProject(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;