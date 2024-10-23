"use client";
import "@/styles/global.css"; // Asegúrate de que esta ruta sea correcta
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link"; // Importa Link de Next.js

export default function Home() {
  const sections = Array.from({ length: 42 }, (_, index) => ({
    imgSrc: `/galeria/${index + 1}.jpeg`,
  }));

  return (
    <div className="relative m-0 flex flex-col h-full">
      {/* Sección de video de fondo */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video
          src="/video/ensenada.webm" // Ruta del video en la carpeta public
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sección de bienvenida */}
      <div className="bg-slate-300 bg-opacity-70 relative z-10 flex flex-col items-center w-full p-8 animate-fade-in shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-center mb-4 text-indigo-800">
          Bienvenidos a INTELEC
        </h1>
        <div className="text-center text-lg leading-7 max-w-3xl text-gray-700">
          <p>
            INTELEC es una pequeña empresa fundada en 2011 en Ensenada, Baja
            California. Ofrece a la venta productos de control y automatización
            eléctricos, así como la integración eléctrica de tableros de
            control según las necesidades del cliente. Trabajamos con empresas
            de todo tipo y tamaño que requieran la automatización de sus
            procesos y/o equipos.
          </p>
          <p className="mt-4">
            En INTELEC valoramos la calidad y respeto en nuestra atención al
            cliente, así como la honestidad en todos los ámbitos de nuestro
            negocio. Agradecemos la oportunidad que nos brinde para ofrecerle
            nuestros productos y servicios.
          </p>
        </div>
      </div>

      {/* Sección de servicios */}
      <div className="bg-slate-300 bg-opacity-70 relative z-10 flex flex-col items-center w-full p-4 mt-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-4 text-indigo-800">
          Conoce nuestros servicios
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop
          pagination={{ clickable: true }}
          spaceBetween={30} // Aumenta el espacio entre las imágenes
          slidesPerView={3.5} // Aumenta el número de imágenes visibles
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full max-w-6xl h-[400px]" // Ajusta el tamaño del contenedor
        >
          {sections.map((section, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex justify-center w-full h-full">
                <img
                  src={section.imgSrc}
                  className="object-cover h-full w-full rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-105" // Asegúrate de que la imagen ocupe todo el contenedor
                  alt={`Imagen ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Sección de marcas */}
      <div className="bg-slate-400 bg-opacity-70 relative z-10 flex flex-col items-center w-full p-4 mt-8 rounded-lg shadow-lg">
        <h6 className="text-4xl font-bold text-center mb-4 text-indigo-800">
          Conoce nuestras marcas
        </h6>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {["WEG", "ABB", "LEATONG", "BUSSMAN", "QLIGHT", "WM", "ELEMATIC", "CNTD", "ARGOS", "GIO", "OMRON", "HOFF"].map(brand => (
            <img
              key={brand}
              className="h-24 w-48 object-contain mx-auto transition-transform transform hover:scale-110 duration-300"
              src={`logos/${brand}.png`}
              alt={`${brand} Logo`}
            />
          ))}
        </div>
      </div>

      {/* Botón Call to Action */}
      <div className="bg-slate-300 bg-opacity-70 relative z-10 flex flex-col items-center w-full p-4 mt-8 rounded-lg shadow-lg">
        <h3 className="text-2xl mb-4 text-gray-800">¿Interesado en nuestros servicios?</h3>
        <Link href="/about" passHref>
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300 cursor-pointer">
            Contáctanos
          </span>
        </Link>
      </div>
    </div>
  );
}