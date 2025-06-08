import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
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
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
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

const ProjectGalleryExpo = () => {
  const [selected, setSelected] = useState(projects[0].id);
  const [animating, setAnimating] = useState(null);
  const [sliderAnimating, setSliderAnimating] = useState(false);

  const swiperRef = useRef(null);

  const handleCardClick = (projectId) => {
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

  return (
    <div className="flex w-screen h-screen max-h-screen overflow-hidden min-h-0" style={{ fontFamily: "var(--main-font)" }}>
      {/* LEFT BAR */}
      <div className="flex flex-col justify-center items-center w-16 bg-black border-r border-gray-900 shrink-0">
        <div className="flex flex-col items-center select-none">
          {Array.from("ARQTKNM").map((letter, idx) => (
            <span
              key={idx}
              className="text-2xl font-bold text-red-500"
              style={{
                lineHeight: "2.6",
                marginBottom: "0.25em",
                userSelect: "none",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* CENTER SLIDER */}
      <div className="flex-1 flex items-center justify-center px-2 md:px-8 bg-gray-100 min-h-0 relative">
        {/* Mini logo in top left */}
        <div className="absolute top-4 left-4 z-20">
          <img
            src={activeProject.miniLogo}
            alt={`${activeProject.name} mini logo`}
            className="w-10 h-10 object-cover rounded-md border border-gray-200 bg-white"
            style={{ background: "#eee" }}
          />
        </div>
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
                  `rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center ` +
                  (sliderAnimating ? "animate-fade-right-in" : "")
                }
                style={{
                  minHeight: "50vh",
                }}
              >
                <img
                  src={img}
                  alt={`Imagen ${i + 1} de ${activeProject.name}`}
                  className="w-auto h-auto max-w-[90vw] max-h-[75vh] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT PROJECT CARDS */}
      <div className="flex flex-col gap-4 p-2 md:p-4 w-20 md:w-56 border-l border-gray-900 shrink-0 bg-white overflow-y-auto h-full min-h-0">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            disabled={!!animating}
            className={`group rounded-lg overflow-visible shadow focus:outline-none transition-all flex-shrink-0 bg-transparent border-0
              ${selected === project.id ? "ring-2 ring-red-500" : "opacity-70 hover:opacity-100"}
            `}
            style={{ minHeight: '5.5rem' }}
            onClick={() => handleCardClick(project.id)}
            tabIndex={0}
          >
            <div className="relative flex items-center justify-center">
              <img
                src={project.cover}
                alt={project.name}
                className={`
                  w-full h-16 md:h-32 object-cover rounded-md transition-transform
                  ${animating === project.id ? "animate-fade-scale-in" : ""}
                `}
                style={{
                  pointerEvents: "none",
                  willChange: "transform, opacity",
                }}
              />
            </div>
            <div className="p-2 bg-white text-left hidden md:flex items-center gap-2">
              <img
                src={project.miniLogo}
                alt={`${project.name} mini logo`}
                className="w-5 h-5 object-cover rounded-sm"
                style={{ background: "#eee" }}
              />
              <span className="font-semibold text-sm text-black">{project.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectGalleryExpo;