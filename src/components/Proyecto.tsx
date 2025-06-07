import { useState, useEffect } from "react";
import React from "react";

export default function Proyecto() {
  const [expandido, setExpandido] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const imagenes = [
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg",
    "https://images.pexels.com/photos/1797157/pexels-photo-1797157.jpeg"
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* VISTA COMPACTA */}
      {!expandido && (
        <div
          onClick={() => setExpandido(true)}
          className="flex flex-col-reverse align-center cursor-pointer group transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-4 mt-4">
            <div className="w-10 h-10 bg-red-600 text-white rounded-md flex items-center justify-center font-bold text-lg shadow-md">
              A
            </div>
            <div className="flex justify-center flex-col my-2.5">
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">Alturas Azure</h2>
              <p className="text-sm text-gray-600 font-medium">Madrid, España</p>
              <p className="text-xs text-gray-400">2023</p>
            </div>
          </div>
          <img 
            className="bg-gray-300 rounded-lg w-[460px] h-[300px] object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
            src={imagenes[0]} 
            alt="Alturas Azure"
          />
        </div>
      )}

      {/* VISTA EXPANDIDA */}
      {expandido && (
        <div className="w-full bg-white border-t border-gray-100">
          <div className="max-w-screen-lg mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 text-white rounded-md flex items-center justify-center font-bold text-xl shadow-md">
                  A
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Alturas Azure</h2>
                  <p className="text-gray-600">Madrid, España • 2023</p>
                </div>
              </div>
              <button
                onClick={() => setExpandido(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full transition-colors shadow-sm"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
              {isMobile ? (
                <>
                  {imagenes.map((img, index) => (
                    <div
                      key={index}
                      className="w-full aspect-[3/2] bg-gray-300 rounded-lg flex-shrink-0 shadow-md overflow-hidden"
                    >
                      <img 
                        src={img} 
                        alt={`Imagen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-full p-6 flex-shrink-0 bg-gray-50 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Descripción</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      Un complejo residencial de lujo que redefine la vida urbana moderna con espacios sostenibles y vistas panorámicas excepcionales. Este proyecto combina innovación arquitectónica con respeto por el entorno urbano.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Cliente:</span>
                        <p className="text-gray-600">Desarrollos Urbanos SA</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Tipología:</span>
                        <p className="text-gray-600">Residencial de Lujo</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Área:</span>
                        <p className="text-gray-600">15,500 m²</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block mb-1">Estado:</span>
                        <p className="text-red-600 font-medium">Completado</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {imagenes.map((img, i) => (
                    <React.Fragment key={i}>
                      <div className="w-full max-w-[350px] aspect-[3/2] bg-gray-300 rounded-lg flex-shrink-0 shadow-md overflow-hidden">
                        <img 
                          src={img} 
                          alt={`Imagen ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {i === 1 && (
                        <div className="w-full max-w-[350px] p-6 flex-shrink-0 bg-gray-50 rounded-lg shadow-sm">
                          <h3 className="text-xl font-bold mb-4 text-gray-900">Descripción</h3>
                          <p className="text-gray-700 text-sm leading-relaxed mb-6">
                            Un complejo residencial de lujo que redefine la vida urbana moderna con espacios sostenibles y vistas panorámicas excepcionales. Este proyecto combina innovación arquitectónica con respeto por el entorno urbano.
                          </p>
                          <div className="space-y-3 text-sm">
                            <div>
                              <span className="font-semibold text-gray-900 block">Cliente:</span>
                              <p className="text-gray-600">Desarrollos Urbanos SA</p>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900 block">Tipología:</span>
                              <p className="text-gray-600">Residencial de Lujo</p>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900 block">Área:</span>
                              <p className="text-gray-600">15,500 m²</p>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900 block">Estado:</span>
                              <p className="text-red-600 font-medium">Completado</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}