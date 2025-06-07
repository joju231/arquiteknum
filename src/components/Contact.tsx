import React, { useState } from 'react';
import Container from './Container';
import Button from './Button';
import { MapPin, Mail, Phone } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, info, link }) => {
  return (
    <div className="flex space-x-4 items-start">
      <div className="p-3 bg-red-50 rounded-lg text-red-600 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        {link ? (
          <a href={link} className="text-gray-600 hover:text-red-600 transition-colors">
            {info}
          </a>
        ) : (
          <p className="text-gray-600">{info}</p>
        )}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      success: true,
      message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });

    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacta con Nosotros</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            ¿Listo para comenzar tu proyecto? Contáctanos para programar una consulta y discutir cómo podemos dar vida a tu visión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <ContactInfo
                  icon={<MapPin size={24} />}
                  title="Nuestra Ubicación"
                  info="Calle Gran Vía 123, Madrid, España"
                  link="https://maps.google.com"
                />
                <ContactInfo
                  icon={<Mail size={24} />}
                  title="Email"
                  info="info@arquiteknum.es"
                  link="mailto:info@arquiteknum.es"
                />
                <ContactInfo
                  icon={<Phone size={24} />}
                  title="Teléfono"
                  info="+34 91 123 45 67"
                  link="tel:+34911234567"
                />
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-sm h-64 md:h-72">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Mapa Interactivo</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
            
            {formStatus && (
              <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Juan Pérez"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="juan@ejemplo.es"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="+34 600 00 00 00"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Proyecto
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                >
                  <option value="">Selecciona el tipo de proyecto</option>
                  <option value="residential">Residencial</option>
                  <option value="commercial">Comercial</option>
                  <option value="interior">Diseño Interior</option>
                  <option value="urban">Planificación Urbana</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;