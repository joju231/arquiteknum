import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Info, ChevronLeft, ChevronRight } from "lucide-react";
import Hero from "./Hero";
import "swiper/css";
import "../styles/pop-animation.css"
import "../styles/fade-scale-in.css"
import "../styles/fade-right-in.css"

const ANIMATION_DURATION = 220;

const projects = [
  {
    id: 1,
    name: "Casa Lago",
    cover: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    miniLogo: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    images: [
      {
        src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        caption: "Vista de la fachada frente al lago al amanecer.",
      },
      {
        src: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
        caption: null,
      },
      {
        src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        caption: "Patio interior diseñado para ventilación pasiva.",
      },
    ],
  },
  {
    id: 2,
    name: "Edificio Norte",
    cover: "https://images.pexels.com/photos/425128/pexels-photo-425128.jpeg",
    miniLogo: "https://images.pexels.com/photos/425128/pexels-photo-425128.jpeg",
    images: [
      "https://images.pexels.com/photos/425128/pexels-photo-425128.jpeg",
      "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg",
    ],
  },
  {
    id: 3,
    name: "Pabellón Sur",
    cover: "https://images.pexels.com/photos/705767/pexels-photo-705767.jpeg",
    miniLogo: "https://images.pexels.com/photos/705767/pexels-photo-705767.jpeg",
    images: [
      "https://images.pexels.com/photos/705767/pexels-photo-705767.jpeg",
      "https://images.pexels.com/photos/1797157/pexels-photo-1797157.jpeg",
      "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    ],
  },
  {
    id: 4,
    name: "Parque Central",
    cover: "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg",
    miniLogo: "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg",
    images: [
      "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg",
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    ],
  },
  {
    id: 5,
    name: "Torre Este",
    cover: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    miniLogo: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    images: [
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    ],
  },
  {
    id: 6,
    name: "Jardines Urbanos",
    cover: "https://images.pexels.com/photos/1797157/pexels-photo-1797157.jpeg",
    miniLogo: "https://images.pexels.com/photos/1797157/pexels-photo-1797157.jpeg",
    images: [
      "https://images.pexels.com/photos/1797157/pexels-photo-1797157.jpeg",
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    ],
  },
  {
    id: 7,
    name: "Mirador Oeste",
    cover: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
    miniLogo: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
    images: [
      "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    ],
  },
  {
    id: 8,
    name: "Residencial Delta",
    cover: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    miniLogo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    images: [
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    ],
  },
  {
    id: 9,
    name: "Centro Cultural",
    cover: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    miniLogo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    images: [
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    ],
  },
  {
    id: 10,
    name: "Galería Río",
    cover: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    miniLogo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    images: [
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    ],
  },
];

const ProjectGalleryExpo: React.FC = () => {
  const [selected, setSelected] = useState(projects[0].id);
  const [animating, setAnimating] = useState<number | null>(null);
  const [sliderAnimating, setSliderAnimating] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperRef = useRef<any>(null);

  const handleCardClick = (projectId: number) => {
    if (animating || selected === projectId) return;
    setAnimating(projectId);
    setTimeout(() => {
      setSelected(projectId);
      setAnimating(null);
      setSliderAnimating(true);
      setCurrentSlide(0);
    }, ANIMATION_DURATION);
  };

  useEffect(() => {
    if (sliderAnimating) {
      const timer = setTimeout(() => setSliderAnimating(false), 360);
      return () => clearTimeout(timer);
    }
  }, [sliderAnimating]);

  // Always start from first slide on project change
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0, 0); // instant, no animation
    }
  }, [selected]);

  const activeProject = projects.find((p) => p.id === selected);

  if (!activeProject) return null;

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* About Button */}
      <Link
        to="/about"
        className="fixed top-6 right-6 z-40 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        aria-label="About Arquiteknum"
      >
        <Info size={20} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          About
        </span>
      </Link>

      {/* Gallery Section */}
      <div className="min-h-screen bg-gray-50">
        {/* Section Header */}
        <div className="py-8 md:py-12 text-center border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Nuestros Proyectos
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Explora nuestra colección de proyectos arquitectónicos que definen espacios únicos y funcionales
          </p>
        </div>

        {/* Gallery Layout */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Project Cards - Mobile/Tablet Horizontal, Desktop Vertical */}
          <div className="lg:w-80 xl:w-96 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 p-3 md:p-4 lg:p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 hidden lg:block">
              Seleccionar Proyecto
            </h3>
            
            {/* Mobile/Tablet: Horizontal scroll */}
            <div className="flex lg:hidden gap-2 md:gap-3 overflow-x-auto pb-3 md:pb-4 -mx-3 md:-mx-4 px-3 md:px-4 scrollbar-hide">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  disabled={!!animating}
                  className={`flex-shrink-0 group transition-all duration-300 ${
                    selected === project.id
                      ? "ring-2 ring-red-500 ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => handleCardClick(project.id)}
                >
                  <div className="w-20 h-14 md:w-24 md:h-16 relative">
                    <img
                      src={project.cover}
                      alt={project.name}
                      className={`w-full h-full object-cover rounded-md md:rounded-lg ${
                        animating === project.id ? "animate-fade-scale-in" : ""
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-md md:rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs font-medium text-gray-700 mt-1 text-center max-w-20 md:max-w-24 truncate">
                    {project.name}
                  </p>
                </button>
              ))}
            </div>

            {/* Desktop: Vertical list */}
            <div className="hidden lg:flex flex-col gap-2 xl:gap-3 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  disabled={!!animating}
                  className={`group text-left transition-all duration-300 rounded-lg p-3 ${
                    selected === project.id
                      ? "bg-red-50 ring-2 ring-red-500 ring-offset-2"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleCardClick(project.id)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={project.cover}
                      alt={project.name}
                      className={`w-14 h-10 xl:w-16 xl:h-12 object-cover rounded-md ${
                        animating === project.id ? "animate-fade-scale-in" : ""
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate text-sm xl:text-base">
                        {project.name}
                      </h4>
                      <p className="text-xs xl:text-sm text-gray-500">
                        {Array.isArray(activeProject.images) ? activeProject.images.length : 0} imágenes
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 relative bg-gray-100">
            {/* Project Info Header */}
            <div className="bg-white border-b border-gray-200 p-3 md:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                  <img
                    src={activeProject.miniLogo}
                    alt={`${activeProject.name} logo`}
                    className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-md lg:rounded-lg border border-gray-200 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                      {activeProject.name}
                    </h1>
                    <p className="text-xs md:text-sm text-gray-500">
                      {currentSlide + 1} de {Array.isArray(activeProject.images) ? activeProject.images.length : 0}
                    </p>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                  <button
                    onClick={prevSlide}
                    className="p-1.5 md:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft size={16} className="md:w-5 md:h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-1.5 md:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
                    disabled={currentSlide === (Array.isArray(activeProject.images) ? activeProject.images.length - 1 : 0)}
                  >
                    <ChevronRight size={16} className="md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image Slider */}
            <div className="h-[50vh] md:h-[60vh] lg:h-[calc(100vh-160px)] relative">
              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={0}
                onSlideChange={handleSlideChange}
                className="w-full h-full"
              >
                {activeProject.images.map((img, i) => {
                  const image = typeof img === "string" ? { src: img, caption: null } : img;

                  return (
                    <SwiperSlide key={i}>
                      <div
                        className={`relative w-full h-full flex flex-col lg:flex-row ${
                          sliderAnimating ? "animate-fade-right-in" : ""
                        }`}
                      >
                        {/* Image */}
                        <div className="flex-1 flex items-center justify-center p-2 md:p-4 lg:p-8">
                          <img
                            src={image.src}
                            alt={`Image ${i + 1} of ${activeProject.name}`}
                            className="max-w-full max-h-full object-contain rounded-md md:rounded-lg shadow-lg"
                          />
                        </div>

                        {/* Caption */}
                        {image.caption && (
                          <div className="lg:w-72 xl:w-80 bg-white/95 backdrop-blur-sm p-4 md:p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-gray-200">
                            <div className="max-w-none lg:max-w-sm">
                              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                                Descripción
                              </h3>
                              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                {image.caption}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Slide Indicators */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex gap-1 md:gap-2 bg-black/20 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 md:py-2">
                  {activeProject.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => swiperRef.current?.swiper.slideTo(i)}
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                        i === currentSlide ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGalleryExpo;