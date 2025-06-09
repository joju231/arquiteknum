import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Info } from "lucide-react";
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

  const swiperRef = useRef<any>(null);

  const handleCardClick = (projectId: number) => {
    if (animating || selected === projectId) return;
    setAnimating(projectId);
    setTimeout(() => {
      setSelected(projectId);
      setAnimating(null);
      setSliderAnimating(true);
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

  return (
    <div className="relative">
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

     <div
      className="flex flex-col md:flex-row w-screen h-screen max-h-screen overflow-hidden"
      style={{ fontFamily: "var(--main-font)" }}
      >
      {/* LEFT BAR */}
      <div className="flex flex-row md:flex-col justify-center items-center w-full md:w-16 bg-black border-b md:border-b-0 md:border-r border-gray-900 shrink-0">
        <div className="flex md:flex-col items-center justify-center select-none p-2">
          {Array.from("ARQTKNM").map((letter, idx) => (
            <span
              key={idx}
              className="text-xl md:text-2xl font-bold text-red-500"
              style={{ lineHeight: "2", marginBottom: "0.2em" }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    
      {/* CENTER SLIDER */}
      <div className="flex-1 flex items-center justify-center px-2 sm:px-4 md:px-8 bg-gray-100 relative overflow-hidden">
        {/* Mini logo in top left */}
        <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20">
          <img
            src={activeProject.miniLogo}
            alt={`${activeProject.name} mini logo`}
            className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-md border border-gray-200 bg-white"
          />
        </div>
    
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          className="w-full max-w-full sm:max-w-2xl md:max-w-4xl h-full"
        >
          {activeProject.images.map((img, i) => {
            const image = typeof img === "string" ? { src: img, caption: null } : img;
    
            return (
              <SwiperSlide key={i}>
                <div
                  className={`relative flex items-center justify-center bg-gray-100 h-[60vh] sm:h-[70vh] md:h-[75vh] ${
                    sliderAnimating ? "animate-fade-right-in" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Image ${i + 1} of ${activeProject.name}`}
                    className="w-auto h-auto max-w-[90vw] max-h-[100%] object-contain"
                  />
                  {image.caption && (
                    <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-md shadow text-sm text-gray-800 max-w-[80%]">
                      {image.caption}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    
      {/* RIGHT PROJECT CARDS */}
      <div className="flex flex-row md:flex-col gap-2 md:gap-4 p-2 md:p-4 w-full md:w-20 lg:w-56 border-t md:border-t-0 md:border-l border-gray-900 bg-white overflow-x-auto md:overflow-y-auto">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            disabled={!!animating}
            className={`group flex-shrink-0 rounded-lg transition-all ${
              selected === project.id
                ? "ring-2 ring-red-500"
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => handleCardClick(project.id)}
          >
            <div className="flex flex-col items-start md:items-center">
              <img
                src={project.cover}
                alt={project.name}
                className={`
                  w-32 h-20 md:w-full md:h-20 object-cover rounded-md
                  ${animating === project.id ? "animate-fade-scale-in" : ""}
                `}
              />
              <div className="hidden md:flex items-center gap-2 mt-1 px-1">
                <img
                  src={project.miniLogo}
                  alt={`${project.name} mini logo`}
                  className="w-4 h-4 object-cover rounded-sm"
                />
                <span className="font-medium text-xs text-black">{project.name}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectGalleryExpo;