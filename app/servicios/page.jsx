"use client";
import { useState } from 'react';

const Servicios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    { src: '/video/video.mp4', description: 'Diseño y Fabricación de Tableros de Control: Proveemos tableros de control a medida, adaptados a las necesidades específicas de cada cliente, asegurando un funcionamiento óptimo de sus procesos industriales.' },
    { src: '/video/video2.mp4', description: 'Automatización de Procesos: Implementamos soluciones de automatización que aumentan la eficiencia y reducen los costos operativos, utilizando tecnología avanzada y software de última generación.' },
    { src: '/video/video3.mp4', description: 'Instalación y Mantenimiento: Ofrecemos servicios completos de instalación y mantenimiento de sistemas eléctricos, garantizando que todos los componentes funcionen correctamente y cumplan con las normativas vigentes.' },
    { src: '/video/video4.mp4', description: 'Consultoría y Asesoramiento Técnico: Brindamos asesoría especializada para ayudar a nuestros clientes a optimizar sus sistemas eléctricos, mejorar la productividad y asegurar la continuidad operativa.' },
  ];

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex h-screen">
      <div className="w-3/4 flex justify-center items-center overflow-hidden relative">
        <video
          key={currentIndex}
          src={videos[currentIndex].src}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transform -translate-x-full transition-transform duration-500"
          style={{ animation: 'slideInLeft 0.5s forwards' }}
        />
      </div>
      <div className="w-1/4 flex flex-col justify-center items-center p-8 bg-gray-100 relative">
        <p className="text-xl mb-8 text-center transform translate-x-full transition-transform duration-500"
          style={{ animation: 'slideInRight 0.5s forwards' }}
        >
          {videos[currentIndex].description}
        </p>
        <div className="flex flex-col gap-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`px-4 py-2 text-lg cursor-pointer border-none bg-gray-300 transition-colors duration-300 hover:bg-gray-400 ${currentIndex === index ? 'bg-gray-500' : ''}`}
            >
              Servicio {index + 1}
            </button>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Servicios;
