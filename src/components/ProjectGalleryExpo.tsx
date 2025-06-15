import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hero from "./Hero.jsx"
import Navbar from "./Navbar";
import "../styles/pop-animation.css"
import "../styles/fade-scale-in.css"
import "../styles/fade-right-in.css"

const ANIMATION_DURATION = 220;

// Optimized project data with real architectural images
const projects = [
  {
    id: 1,
    name: "Casa Lago",
    cover: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Edificio Norte",
    cover: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Pabellón Sur",
    cover: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Parque Central",
    cover: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
  {
    id: 5,
    name: "Torre Este",
    cover: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
  {
    id: 6,
    name: "Jardines Urbanos",
    cover: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
  {
    id: 7,
    name: "Mirador Oeste",
    cover: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
  {
    id: 8,
    name: "Residencial Delta",
    cover: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
  {
    id: 9,
    name: "Centro Cultural",
    cover: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
  {
    id: 10,
    name: "Galería Río",
    cover: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    miniLogo: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    images: [
      "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
  },
];

// Image preloader component
const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}> = ({ src, alt, className = '', style, priority = false }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority && imgRef.current) {
      const img = new Image();
      img.onload = () => setLoaded(true);
      img.onerror = () => setError(true);
      img.src = src;
    }
  }, [src, priority]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        style={style}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        decoding="async"
      />
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Error loading image</span>
        </div>
      )}
    </div>
  );
};

export default function ProjectGalleryExpo () {
  const [selected, setSelected] = useState(projects[0].id);
  const [animating, setAnimating] = useState(null);
  const [sliderAnimating, setSliderAnimating] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(224);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  // Preload critical images
  useEffect(() => {
    const preloadImages = () => {
      // Preload first project images and all cover images
      const imagesToPreload = [
        ...projects[0].images,
        ...projects.slice(0, 5).map(p => p.cover), // Preload first 5 covers
      ];

      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

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
    
    // Preload images for the selected project
    const selectedProject = projects.find(p => p.id === projectId);
    if (selectedProject) {
      selectedProject.images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }

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
      <Navbar />
      <Hero />

      <div
        className="flex w-full h-screen max-h-screen overflow-hidden min-h-0 relative z-20"
        style={{ 
          fontFamily: "var(--font-body)",
        }}
        id="projects"
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
            <OptimizedImage
              src={activeProject.miniLogo}
              alt={`${activeProject.name} mini logo`}
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-md border border-gray-200 bg-white"
              priority={true}
            />
          </div>

          {/* Image slider */}
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={0}
            className="w-full max-w-4xl"
            preloadImages={false}
            lazy={true}
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
                  <OptimizedImage
                    src={img}
                    alt={`Imagen ${i + 1} de ${activeProject.name}`}
                    className="w-auto h-auto max-w-full object-contain"
                    style={{
                      maxHeight: isMobile ? "40vh" : "75vh"
                    }}
                    priority={i === 0} // Prioritize first image
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

          {projects.map((project, index) => (
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
                <OptimizedImage
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
                  priority={index < 3} // Prioritize first 3 covers
                />
              </div>
              
              {/* Project name - show on mobile or when sidebar is wide enough on desktop */}
              {(isMobile || (!isMobile && sidebarWidth > 120)) && (
                <div className="p-2 bg-white text-left flex items-center gap-2">
                  <OptimizedImage
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