import React, { useState, useEffect } from 'react';
import Container from './Container';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Trabajar con ARQUITEKNUM transformó nuestra visión en realidad. Su atención al detalle y enfoque innovador resultó en un espacio que supera nuestras expectativas.",
    name: "Sara Jiménez",
    title: "CEO",
    company: "Propiedades Elevación",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    quote: "La capacidad del equipo para equilibrar la belleza estética con el diseño funcional es notable. Nuestra nueva sede se ha convertido en un hito en la ciudad.",
    name: "Miguel Zhang",
    title: "Director de Operaciones",
    company: "Horizonte Global",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    quote: "Desde el concepto hasta la finalización, ARQUITEKNUM demostró un profesionalismo y creatividad excepcionales. Convirtieron nuestro desafiante sitio en una obra maestra arquitectónica.",
    name: "Elena Rodríguez",
    title: "Gerente de Desarrollo",
    company: "Vida Urbana",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <Container className="relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonios de Clientes</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 leading-relaxed">
            Escucha lo que nuestros clientes dicen sobre su experiencia trabajando con nuestro equipo y los resultados que hemos entregado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-xl p-8 md:p-10 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      {testimonial.image && (
                        <div className="flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-20 h-20 rounded-full object-cover border-2 border-red-600"
                          />
                        </div>
                      )}
                      <div>
                        <svg className="text-red-600 mb-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14.0667 4.86667 12.5333 5.93333 11.1333C7 9.73333 8.4 8.8 10.1333 8.33333L10.8 10.0667C9.6 10.5333 8.66667 11.2 8 12.0667C7.33333 12.9333 7 13.8 7 14.6667C7 14.9333 7.06667 15.1333 7.2 15.2667C7.33333 15.4 7.53333 15.4667 7.8 15.4667C8.26667 15.4667 8.8 15.2667 9.4 14.8667C10 14.4667 10.4667 14.2667 10.8 14.2667C11.7333 14.2667 12.5333 14.6 13.2 15.2667C13.8667 15.9333 14.2 16.7333 14.2 17.6667C14.2 18.6 13.8667 19.4 13.2 20.0667C12.5333 20.7333 11.7333 21.0667 10.8 21.0667C10.3333 21.3333 9.86667 21.3333 9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14.0667 16.8667 12.5333 17.9333 11.1333C19 9.73333 20.4 8.8 22.1333 8.33333L22.8 10.0667C21.6 10.5333 20.6667 11.2 20 12.0667C19.3333 12.9333 19 13.8 19 14.6667C19 14.9333 19.0667 15.1333 19.2 15.2667C19.3333 15.4 19.5333 15.4667 19.8 15.4667C20.2667 15.4667 20.8 15.2667 21.4 14.8667C22 14.4667 22.4667 14.2667 22.8 14.2667C23.7333 14.2667 24.5333 14.6 25.2 15.2667C25.8667 15.9333 26.2 16.7333 26.2 17.6667C26.2 18.6 25.8667 19.4 25.2 20.0667C24.5333 20.7333 23.7333 21.0667 22.8 21.0667C22.3333 21.3333 21.8667 21.3333 21.3333 21.3333Z" fill="currentColor"/>
                        </svg>
                        <blockquote className="text-xl italic mb-6 text-gray-200">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className="text-gray-400">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-red-600 w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Testimonio anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
            aria-label="Siguiente testimonio"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;