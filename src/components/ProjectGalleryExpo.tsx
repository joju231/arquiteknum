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
  <>
    <Hero />
    <div
      className="flex w-screen h-screen max-h-screen overflow-hidden min-h-0"
      style={{ fontFamily: "var(--main-font)" }}
    >
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
        <div className="absolute top-4 left-4 z-20">
          <img
            src={activeProject.miniLogo}
            aalt={`Imagen de ${activeProject.name} mini logo`}
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
                  `rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center`  +
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
              ${selected === project.id ? "ring-2 ring-red-500" : "opacity-70 hover:opacity-100"}`
            }
            style={{ minHeight: "5.5rem" }}
            onClick={() => handleCardClick(project.id)}
            tabIndex={0}
          >
            <div className="relative flex items-center justify-center">
              <img
                src={project.cover}
                alt={project.name}
                className={`
                  w-full h-16 md:h-32 object-cover rounded-md transition-transform
                  ${animating === project.id ? "animate-fade-scale-in" : ""}`
                }
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
              <span className="font-semibold text-sm text-black">
                {project.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  </>
);

export default ProjectGalleryExpo;