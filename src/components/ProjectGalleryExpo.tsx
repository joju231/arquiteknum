import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hero from "./Hero.jsx"
import "../styles/pop-animation.css"
import "../styles/fade-scale-in.css"
import "../styles/fade-right-in.css"

const ANIMATION_DURATION = 220;

const projects = [
  {
    id: 1,
    name: "Hotel Gran Vía",
    cover: "/assets/Proyecto Hotel Gran Via/22.jpg",
    miniLogo: "https://placehold.co/20x20/8B4513/FFFFFF?text=HGV",
    images: [
      {
        src: "/assets/Proyecto Hotel Gran Via/4242 .jpg",
        caption: "Vista panorámica del dormitorio con integración de espacios y materiales nobles"
      },
      {
        src: "/assets/Proyecto Hotel Gran Via/22.jpg",
        caption: "Dormitorio principal con elementos de madera natural y diseño contemporáneo"
      },
      {
        src: "/assets/Proyecto Hotel Gran Via/23.jpg",
        caption: "Detalle del techo de madera con iluminación integrada y textiles de alta calidad"
      },
      {
        src: "/assets/Proyecto Hotel Gran Via/25.jpg",
        caption: "Baño principal con bañera de hidromasaje y acabados en piedra natural"
      },
    ],
  },
  {
    id: 2,
    name: "La Maso",
    cover: "/assets/Proyecto La Maso/28.jpg",
    miniLogo: "https://placehold.co/20x20/2F4F4F/FFFFFF?text=LM",
    images: [
      {
        src: "/assets/Proyecto La Maso/33.jpg",
        caption: "Vestidor con armarios empotrados de cristal ahumado y sistema de iluminación perimetral"
      },
      {
        src: "/assets/Proyecto La Maso/28.jpg",
        caption: "Pasillo principal con iluminación LED integrada y suelos de parquet en espiga"
      },
      {
        src: "/assets/Proyecto La Maso/35.jpg",
        caption: "Baño principal con doble lavabo sobre encimera de madera y ducha de obra"
      },
      {
        src: "/assets/Proyecto La Maso/55.jpg",
        caption: "Baño secundario con acabados en microcemento y grifería empotrada"
      },
      {
        src: "/assets/Proyecto La Maso/61.jpg",
        caption: "Baño con bañera integrada y revestimientos cerámicos de gran formato"
      },
    ],
  },
  {
    id: 3,
    name: "Lagasca",
    cover: "/assets/Proyecto Lagasca/26.jpg",
    miniLogo: "https://placehold.co/20x20/F5F5DC/333333?text=LG",
    images: [
      {
        src: "/assets/Proyecto Lagasca/26.jpg",
        caption: "Salón-comedor con mobiliario de diseño escandinavo y paleta cromática neutra"
      },
      {
        src: "/assets/Proyecto Lagasca/25.jpg",
        caption: "Zona de estar con sillones vintage y mesa de centro de madera maciza"
      },
      {
        src: "/assets/Proyecto Lagasca/24.jpg",
        caption: "Dormitorio principal minimalista con cabecero tapizado y iluminación colgante"
      },
      {
        src: "/assets/Proyecto Lagasca/16.jpg",
        caption: "Dormitorio con puertas correderas y aprovechamiento máximo del espacio"
      },
      {
        src: "/assets/Proyecto Lagasca/14.jpg",
        caption: "Armarios empotrados de suelo a techo con acabado lacado blanco mate"
      },
    ],
  },
  {
    id: 4,
    name: "Loft Manoteras",
    cover: "/assets/Proyecto Loft Manoteras/16.jpg",
    miniLogo: "https://placehold.co/20x20/4A5568/FFFFFF?text=LM",
    images: [
      {
        src: "/assets/Proyecto Loft Manoteras/1.jpg",
        caption: "Espacio diáfano con diseño industrial y acabados contemporáneos"
      },
      {
        src: "/assets/Proyecto Loft Manoteras/3.jpg",
        caption: "Zona de estar con elementos arquitectónicos expuestos y iluminación natural"
      },
      {
        src: "/assets/Proyecto Loft Manoteras/10.jpg",
        caption: "Detalle de materiales nobles y texturas contrastantes"
      },
      {
        src: "/assets/Proyecto Loft Manoteras/16.jpg",
        caption: "Integración perfecta entre espacios públicos y privados del loft"
      },
    ],
  },
  {
    id: 5,
    name: "López Ibor",
    cover: "/assets/Proyecto Lopez Ibor/Dr.JJ.Ibor14-16.jpg",
    miniLogo: "https://placehold.co/20x20/2D3748/FFFFFF?text=LI",
    images: [
      {
        src: "/assets/Proyecto Lopez Ibor/Dr.JJ.Ibor14-10.jpg",
        caption: "Consulta médica con diseño funcional y ambiente acogedor"
      },
      {
        src: "/assets/Proyecto Lopez Ibor/Dr.JJ.Ibor14-12.jpg",
        caption: "Sala de espera con mobiliario contemporáneo y iluminación cálida"
      },
      {
        src: "/assets/Proyecto Lopez Ibor/Dr.JJ.Ibor14-13.jpg",
        caption: "Recepción con líneas limpias y materiales de alta calidad"
      },
      {
        src: "/assets/Proyecto Lopez Ibor/Dr.JJ.Ibor14-16.jpg",
        caption: "Espacio de trabajo optimizado para la práctica médica profesional"
      },
      {
        src: "/assets/Proyecto Lopez Ibor/Dr.JJ.Ibor14-18.jpg",
        caption: "Detalle de acabados premium y diseño ergonómico"
      },
    ],
  },
  {
    id: 6,
    name: "Oficinas",
    cover: "/assets/Proyecto Oficinas/15.jpg",
    miniLogo: "https://placehold.co/20x20/1A202C/FFFFFF?text=OF",
    images: [
      {
        src: "/assets/Proyecto Oficinas/1.jpg",
        caption: "Espacio de trabajo moderno con diseño corporativo elegante"
      },
      {
        src: "/assets/Proyecto Oficinas/4.jpg",
        caption: "Zona de reuniones con tecnología integrada y acústica optimizada"
      },
      {
        src: "/assets/Proyecto Oficinas/5.jpg",
        caption: "Área colaborativa con mobiliario flexible y iluminación natural"
      },
      {
        src: "/assets/Proyecto Oficinas/14.jpg",
        caption: "Recepción corporativa con imagen de marca y materiales premium"
      },
      {
        src: "/assets/Proyecto Oficinas/15.jpg",
        caption: "Oficina ejecutiva con diseño funcional y acabados de lujo"
      },
      {
        src: "/assets/Proyecto Oficinas/22.jpg",
        caption: "Sala de conferencias con equipamiento audiovisual de última generación"
      },
      {
        src: "/assets/Proyecto Oficinas/26.jpg",
        caption: "Espacio de trabajo abierto que fomenta la colaboración y creatividad"
      },
      {
        src: "/assets/Proyecto Oficinas/29.jpg",
        caption: "Zona de descanso con diseño biofílico y elementos naturales"
      },
    ],
  },
  {
    id: 7,
    name: "Unifamiliar",
    cover: "/assets/Proyecto unifamiliar/15.jpg",
    miniLogo: "https://placehold.co/20x20/68D391/FFFFFF?text=UF",
    images: [
      {
        src: "/assets/Proyecto unifamiliar/9.jpg",
        caption: "Fachada contemporánea con líneas arquitectónicas limpias y materiales sostenibles"
      },
      {
        src: "/assets/Proyecto unifamiliar/11.jpg",
        caption: "Salón principal con doble altura y conexión visual con el jardín"
      },
      {
        src: "/assets/Proyecto unifamiliar/12.jpg",
        caption: "Cocina integrada con isla central y electrodomésticos de alta gama"
      },
      {
        src: "/assets/Proyecto unifamiliar/13.jpg",
        caption: "Dormitorio principal con vestidor integrado y terraza privada"
      },
      {
        src: "/assets/Proyecto unifamiliar/14.jpg",
        caption: "Baño principal con acabados en piedra natural y bañera exenta"
      },
      {
        src: "/assets/Proyecto unifamiliar/15.jpg",
        caption: "Zona exterior con piscina y área de entretenimiento familiar"
      },
    ],
  },
];

export default function ProjectGalleryExpo () {
  const [selected, setSelected] = useState(projects[0].id);
  const [animating, setAnimating] = useState(null);
  const [sliderAnimating, setSliderAnimating] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(224);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleCardClick = (projectId) => {
    if (animating || selected === projectId) return;
    setAnimating(projectId);
    setTimeout(() => {
      setSelected(projectId);
      setAnimating(null);
      setSliderAnimating(true);
      // Auto-hide sidebar on mobile after selection
      if (isMobile) {
        setSidebarVisible(false);
      }
    }, ANIMATION_DURATION);
  };

  useEffect(() => {
    if (sliderAnimating) {
      const timer = setTimeout(() => setSliderAnimating(false), 360);
      return () => clearTimeout(timer);
    }
  }, [sliderAnimating]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0, 0);
    }
  }, [selected]);

  // Handle mouse events for resizing (desktop only)
  const handleMouseDown = (e) => {
    if (isMobile) return;
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      if (!isResizing) return;
      
      const newWidth = window.innerWidth - e.clientX;
      const minWidth = 80;
      const maxWidth = 400;
      
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing, isMobile]);

  const activeProject = projects.find((p) => p.id === selected);

  return (
    <div className="relative font-body">
      <Hero />

      <div
        className="flex w-full h-screen max-h-screen overflow-hidden min-h-0 relative z-20"
        style={{ 
          fontFamily: "var(--font-body)",
        }}
      >
        {/* LEFT BAR - Always visible and consistent with enhanced shadows */}
        <div className="flex flex-col justify-center items-center w-16 bg-black border-r border-gray-900 shrink-0">
          <div className="flex flex-col items-center select-none">
            {Array.from("ARQUITEKNUM").map((letter, idx) => (
              <span
                key={idx}
                className="text-xl md:text-2xl font-bold text-red-500 font-primary"
                style={{
                  lineHeight: "2.6",
                  margin: "0.03em",
                  userSelect: "none"
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* CENTER SLIDER */}
        <div className="flex-1 flex items-center justify-center px-2 md:px-8 bg-gray-100 min-h-0 min-w-0 relative">
          {/* Mobile menu button */}
          <button
            className="absolute top-4 right-4 md:hidden p-3 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-gray-900 rounded-full z-30 transition-all duration-300"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {sidebarVisible ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Project mini logo */}
          <div className="absolute top-4 left-4 z-20">
            <img
              src={activeProject.miniLogo}
              alt={`Imagen de ${activeProject.name} mini logo`}
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-md border border-gray-200 bg-white"
              style={{ background: "#eee" }}
            />
          </div>

          {/* Image slider */}
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={0}
            className="w-full max-w-4xl"
          >
            {activeProject.images.map((imageData, i) => (
              <SwiperSlide key={i}>
                <div
                  className={
                    `rounded-xl overflow-hidden bg-gray-100 flex flex-col items-center justify-center relative` +
                    (sliderAnimating ? " animate-fade-right-in" : "")
                  }
                  style={{
                    minHeight: isMobile ? "40vh" : "50vh",
                  }}
                >
                  {/* Image Container */}
                  <div className="relative flex-1 flex items-center justify-center w-full">
                    <img
                      src={imageData.src}
                      alt={`Imagen ${i + 1} de ${activeProject.name}`}
                      className="w-auto h-auto max-w-full object-contain"
                      style={{
                        maxHeight: imageData.caption 
                          ? (isMobile ? "35vh" : "65vh")
                          : (isMobile ? "40vh" : "75vh")
                      }}
                    />
                  </div>
                  
                  {/* Caption Bar - Only shown if caption exists */}
                  {imageData.caption && (
                    <div className="w-full bg-white/95 backdrop-blur-sm border-t border-gray-200/50 px-4 md:px-6 py-3 md:py-4">
                      <div className="max-w-3xl mx-auto">
                        <p className="text-gray-800 text-sm md:text-base font-light leading-relaxed text-center font-secondary">
                          {imageData.caption}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RESIZE HANDLE - Desktop only */}
        {!isMobile && (
          <div
            className={`w-1 bg-gray-300 hover:bg-gray-400 cursor-col-resize transition-colors shrink-0 ${
              isResizing ? 'bg-red-500' : ''
            }`}
            onMouseDown={handleMouseDown}
            style={{ minHeight: '100%' }}
          />
        )}

        {/* RIGHT PROJECT CARDS */}
        <div 
          className={`flex flex-col gap-2 md:gap-4 p-2 md:p-4 border-l border-gray-900 shrink-0 bg-white h-full min-h-0 scrollbar-hide overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMobile 
              ? `fixed top-0 right-0 z-40 shadow-2xl ${sidebarVisible ? 'translate-x-0' : 'translate-x-full'}`
              : 'relative'
          }`}
          style={{ 
            width: isMobile 
              ? '280px' 
              : `${sidebarWidth}px`
          }}
        >
          {/* Mobile header */}
          {isMobile && (
            <div className="flex items-center justify-between p-2 border-b border-gray-200 mb-2">
              <h3 className="font-semibold text-gray-900 font-secondary">Proyectos</h3>
              <button
                onClick={() => setSidebarVisible(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              disabled={!!animating}
              className={`group rounded-lg overflow-visible shadow focus:outline-none transition-all flex-shrink-0 bg-transparent border-0
                ${selected === project.id ? "ring-2 ring-red-500" : "opacity-70 hover:opacity-100"}`
              }
              style={{ minHeight: isMobile ? "4rem" : "5.5rem" }}
              onClick={() => handleCardClick(project.id)}
              tabIndex={0}
            >
              <div className="relative flex items-center justify-center">
                <img
                  src={project.cover}
                  alt={project.name}
                  className={`
                    w-full object-cover rounded-md transition-transform
                    ${animating === project.id ? "animate-fade-scale-in" : ""}
                    ${isMobile ? "h-12" : "h-16 md:h-32"}
                  `}
                  style={{
                    pointerEvents: "none",
                    willChange: "transform, opacity",
                  }}
                />
              </div>
              
              {/* Project name - show on mobile or when sidebar is wide enough on desktop */}
              {(isMobile || (!isMobile && sidebarWidth > 120)) && (
                <div className="p-2 bg-white text-left flex items-center gap-2">
                  <img
                    src={project.miniLogo}
                    alt={`${project.name} mini logo`}
                    className="w-4 h-4 md:w-5 md:h-5 object-cover rounded-sm flex-shrink-0"
                    style={{ background: "#eee" }}
                  />
                  <span className="font-semibold text-xs md:text-sm text-black truncate font-secondary">
                    {project.name}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile overlay */}
        {isMobile && sidebarVisible && (
          <div 
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarVisible(false)}
          />
        )}
      </div>
    </div>
  );
}