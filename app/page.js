"use client";
import "@/styles/global.css"; // Asegúrate de que esta ruta sea correcta
import bgvideo from "@/public/video/ensenada.webm";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Home() {
  const sections = Array.from({ length: 42 }, (_, index) => ({
    imgSrc: `/galeria/${index + 1}.jpeg`,
  }));

  return (
    <div className="relative m-0 flex flex-col h-full">
      <video
        src={bgvideo}
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      ></video>

      {/* Sección de bienvenida con animación */}
      <div className="bg-slate-300 bg-opacity-70 relative z-10 flex flex-col items-center w-full p-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-4">Bienvenidos a INTELEC</h1>
        <div className="text-center text-lg leading-7 max-w-3xl">
          <p>
            INTELEC es una pequeña empresa fundada en 2011 en Ensenada, Baja California.
            Ofrece a la venta productos de control y automatización eléctricos, así como la integración eléctrica de tableros de control 
            según las necesidades del cliente. Trabajamos con empresas de todo tipo y tamaño que requieran la automatización de sus procesos 
            y/o equipos.
          </p>
          <p className="mt-4">
            En INTELEC valoramos la calidad y respeto en nuestra atención al cliente, así como la honestidad en todos los ámbitos de nuestro negocio.
            Agradecemos la oportunidad que nos brinde para ofrecerle nuestros productos y servicios.
          </p>
        </div>
      </div>

      {/* Sección de servicios con mejoras visuales */}
      <div className="bg-slate-300 bg-opacity-70 relative z-10 flex flex-col items-center w-full p-4">
        <h2 className="text-4xl font-bold text-center mb-4">Conoce nuestros servicios</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full max-w-2xl"
        >
          {sections.map((section, index) => (
            <SwiperSlide key={index}>
              <img 
                src={section.imgSrc}
                className="object-cover w-full h-64 md:h-80 rounded-lg transform hover:scale-105 transition duration-500 ease-in-out"
                alt={`Imagen ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Sección de marcas mejorada con tamaños uniformes */}
      <div className="bg-slate-400 bg-opacity-70 relative z-10 flex flex-col items-center w-full p-4">
        <h6 className="text-4xl font-bold text-center mb-4">Conoce nuestras marcas</h6>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/WEG.png" alt="WEG Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/ABB.png" alt="ABB Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/LEATONG.png" alt="LEATONG Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/bussman.png" alt="BUSSMAN Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/QLIGHT.png" alt="QLIGHT Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/WM.png" alt="WM Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/ELEMATIC.png" alt="ELEMATIC Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/CNTD.png" alt="CNTD Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/ARGOS.png" alt="ARGOS Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/GIO.png" alt="GIO Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/OMRON.png" alt="OMRON Logo" />
          <img className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300" src="logos/HOFF.png" alt="HOFF Logo" />
        </div>
      </div>

      {/* Botón Call to Action */}
      <div className="bg-slate-300 bg-opacity-70 relative z-10 flex flex-col items-center w-full p-4">
        <h3 className="text-2xl mb-4">¿Interesado en nuestros servicios?</h3>
        <a 
          href="/about"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300"
        >
          Contáctanos
        </a>
      </div>

      <div className="bg-slate-300 bg-opacity-70 relative z-10 flex flex-col items-center w-full p-4">
        <h3>Next Section.....</h3>
      </div>
    </div>
  );
}
