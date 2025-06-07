import React from 'react';
import Container from './Container';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    name: "Alejandra Rodríguez",
    role: "Arquitecta Principal",
    bio: "Con más de 15 años de experiencia, Alejandra lidera nuestro equipo de diseño con pasión por la arquitectura sostenible e innovadora.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    name: "Marco Chen",
    role: "Arquitecto Senior",
    bio: "Marco se especializa en diseño urbano y ha liderado numerosos proyectos premiados en las principales áreas metropolitanas.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    name: "Sofía Rivera",
    role: "Directora de Diseño Interior",
    bio: "Sofía da vida a los espacios con su agudo sentido del detalle y su capacidad para combinar funcionalidad con estética bella.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  },
  {
    name: "Javier Wilson",
    role: "Director de Proyectos",
    bio: "Javier asegura que nuestros proyectos se desarrollen sin problemas desde el concepto hasta la finalización, con atención meticulosa a los plazos y la calidad.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  }
];

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <p className="leading-relaxed">{bio}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-red-600 font-medium">{role}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Conoce a los profesionales talentosos detrás de nuestros diseños premiados. 
            Nuestro diverso equipo reúne experiencia en múltiples disciplinas para crear soluciones arquitectónicas excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Únete a Nuestro Equipo</h3>
              <p className="text-gray-600 mb-6">
                Siempre estamos buscando personas talentosas apasionadas por la arquitectura y el diseño.
                Si estás interesado en ser parte de nuestro equipo creativo, nos encantaría saber de ti.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-red-600 text-white px-5 py-2.5 rounded-md hover:bg-red-700 transition-colors"
              >
                Ver Posiciones Abiertas
              </a>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                  alt="Colaboración en equipo" 
                  
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;