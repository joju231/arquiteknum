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