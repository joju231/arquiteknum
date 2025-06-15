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
    name: "Casa Lago",
    cover: "https://placehold.co/300x200/EEE/31343C?text=Casa+Lago",
    miniLogo: "https://placehold.co/20x20/EEE/31343C?text=CL",
    images: [
      "https://placehold.co/600x400/EEE/31343C?text=Casa+Lago+1",
      "https://placehold.co/600x400/DDD/31343C?text=Casa+Lago+2",
      "https://placehold.co/600x400/CCC/31343C?text=Casa+Lago+3",
    ],
  },
  {
    id: 2,
    name: "Edificio Norte",
    cover: "https://placehold.co/300x200/BBB/31343C?text=Edificio+Norte",
    miniLogo: "https://placehold.co/20x20/BBB/31343C?text=EN",
    images: [
      "https://placehold.co/600x400/BBB/31343C?text=Edificio+Norte+1",
      "https://placehold.co/600x400/AAA/31343C?text=Edificio+Norte+2",
    ],
  },
  {
    id: 3,
    name: "Pabellón Sur",
    cover: "https://placehold.co/300x200/CCC/31343C?text=Pabellón+Sur",
    miniLogo: "https://placehold.co/20x20/CCC/31343C?text=PS",
    images: [
      "https://placehold.co/600x400/CCC/31343C?text=Pabellón+Sur+1",
      "https://placehold.co/600x400/999/31343C?text=Pabellón+Sur+2",
      "https://placehold.co/600x400/888/31343C?text=Pabellón+Sur+3",
      "https://placehold.co/600x400/777/31343C?text=Pabellón+Sur+4",
    ],
  },
  {
    id: 4,
    name: "Parque Central",
    cover: "https://placehold.co/300x200/AAF/31343C?text=Parque+Central",
    miniLogo: "https://placehold.co/20x20/AAF/31343C?text=PC",
    images: [
      "https://placehold.co/600x400/AAF/31343C?text=Parque+Central+1",
      "https://placehold.co/600x400/44F/31343C?text=Parque+Central+2",
    ],
  },
  {
    id: 5,
    name: "Torre Este",
    cover: "https://placehold.co/300x200/FFA/31343C?text=Torre+Este",
    miniLogo: "https://placehold.co/20x20/FFA/31343C?text=TE",
    images: [
      "https://placehold.co/600x400/FFA/31343C?text=Torre+Este+1",
      "https://placehold.co/600x400/FA0/31343C?text=Torre+Este+2",
    ],
  },
  {
    id: 6,
    name: "Jardines Urbanos",
    cover: "https://placehold.co/300x200/0AF/31343C?text=Jardines+Urbanos",
    miniLogo: "https://placehold.co/20x20/0AF/31343C?text=JU",
    images: [
      "https://placehold.co/600x400/0AF/31343C?text=Jardines+Urbanos+1",
      "https://placehold.co/600x400/0AA/31343C?text=Jardines+Urbanos+2",
      "https://placehold.co/600x400/0FF/31343C?text=Jardines+Urbanos+3",
    ],
  },
  {
    id: 7,
    name: "Mirador Oeste",
    cover: "https://placehold.co/300x200/F0A/31343C?text=Mirador+Oeste",
    miniLogo: "https://placehold.co/20x20/F0A/31343C?text=MO",
    images: [
      "https://placehold.co/600x400/F0A/31343C?text=Mirador+Oeste+1",
      "https://placehold.co/600x400/F00/31343C?text=Mirador+Oeste+2",
    ],
  },
  {
    id: 8,
    name: "Residencial Delta",
    cover: "https://placehold.co/300x200/0FA/31343C?text=Residencial+Delta",
    miniLogo: "https://placehold.co/20x20/0FA/31343C?text=RD",
    images: [
      "https://placehold.co/600x400/0FA/31343C?text=Residencial+Delta+1",
      "https://placehold.co/600x400/0A0/31343C?text=Residencial+Delta+2",
      "https://placehold.co/600x400/0FF/31343C?text=Residencial+Delta+3",
    ],
  },
  {
    id: 9,
    name: "Centro Cultural",
    cover: "https://placehold.co/300x200/CFA/31343C?text=Centro+Cultural",
    miniLogo: "https://placehold.co/20x20/CFA/31343C?text=CC",
    images: [
      "https://placehold.co/600x400/CFA/31343C?text=Centro+Cultural+1",
      "https://placehold.co/600x400/CCC/31343C?text=Centro+Cultural+2",
    ],
  },
  {
    id: 10,
    name: "Galería Río",
    cover: "https://placehold.co/300x200/3AF/31343C?text=Galería+Río",
    miniLogo: "https://placehold.co/20x20/3AF/31343C?text=GR",
    images: [
      "https://placehold.co/600x400/3AF/31343C?text=Galería+Río+1",
      "https://placehold.co/600x400/3AA/31343C?text=Galería+Río+2",
      "https://placehold.co/600x400/3FF/31343C?text=Galería+Río+3",
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
    <div className="relative">
      <Hero />


      
      {/* Enhanced smooth transition overlay with multiple gradients */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/90 to-transparent"></div>
      </div>

      <div className="h-32 w-full bg-gradient-to-b from-black/0 to-black" />
      
      <div
        className="flex w-full h-screen max-h-screen overflow-hidden min-h-0 relative z-20"
        style={{ 
          fontFamily: "var(--main-font)",
        }}
      >
        {/* LEFT BAR - Always visible and consistent with enhanced shadows */}
        <div className="flex flex-col justify-center items-center w-16 bg-[#030103] border-r border-gray-900 shrink-0">
          <div className="flex flex-col items-center select-none">
            {Array.from("ARQTKNM").map((letter, idx) => (
              <span
                key={idx}
                className="text-xl md:text-2xl font-bold text-red-500"
                style={{
                  lineHeight: "2.6",
                  marginBottom: "0.25em",
                  userSelect: "none",
                  textShadow: `
                    0 0 10px rgba(220, 38, 38, 0.8),
                    0 0 20px rgba(220, 38, 38, 0.6),
                    0 0 30px rgba(220, 38, 38, 0.4),
                    2px 2px 4px rgba(0, 0, 0, 0.8),
                    0 0 2px rgba(255, 255, 255, 0.3)
                  `,
                  filter: "drop-shadow(0 0 8px rgba(220, 38, 38, 0.7))"
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
            {activeProject.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div
                  className={
                    `rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center` +
                    (sliderAnimating ? " animate-fade-right-in" : "")
                  }
                  style={{
                    minHeight: isMobile ? "40vh" : "50vh",
                  }}
                >
                  <img
                    src={img}
                    alt={`Imagen ${i + 1} de ${activeProject.name}`}
                    className="w-auto h-auto max-w-full object-contain"
                    style={{
                      maxHeight: isMobile ? "40vh" : "75vh"
                    }}
                  />
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
              <h3 className="font-semibold text-gray-900">Proyectos</h3>
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
                  <span className="font-semibold text-xs md:text-sm text-black truncate">
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