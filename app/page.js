"use client";
import styles from "@/styles/global.css"; // Asegúrate de que esta ruta sea correcta
import bgvideo from "@/public/video/ensenada.webm";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <div className="relative m-0 flex flex-col h-screen">
      <video
        src={bgvideo}
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      ></video>
      <div className="bg-slate-300 bg-opacity-70 relative z-10 flex flex-col items-center w-full h-70 p-4">
        <h2 className="text-4xl font-bold text-center mb-4">Conoce nuestros servicios</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1.25}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Configuración de autoplay
          className="w-full max-w-lg" // Ajusta el tamaño del slider
        >
          <SwiperSlide>
            <img 
              src="https://img1.wsimg.com/isteam/ip/acf9b939-4a69-4738-9593-ca7630db22ef/57644724_1084088548441632_6898676809861169152_.jpg/:/rs=w:1280"
              className="object-cover w-full h-100 rounded-lg" // Ajusta el tamaño y estilo de la imagen
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://img1.wsimg.com/isteam/ip/acf9b939-4a69-4738-9593-ca7630db22ef/57584251_1084088601774960_8527670034498060288_.jpg/:/rs=w:1280"
              className="object-cover w-full h-100 rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://img1.wsimg.com/isteam/ip/acf9b939-4a69-4738-9593-ca7630db22ef/57370573_1084086265108527_5326454600381759488_.jpg/:/rs=w:1280"
              className="object-cover w-full h-100 rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src="https://img1.wsimg.com/isteam/ip/acf9b939-4a69-4738-9593-ca7630db22ef/58374951_1084088521774968_4065951509404188672_.jpg/:/rs=w:1280"
              className="object-cover w-full h-100 rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-slate-400 bg-opacity-70 relative z-10 flex flex-col items-center w-full h-70 p-4">
        <h6 className="text-4xl font-bold text-center mb-4">Conoce nuestras marcas</h6>
        <div className="flex flex-wrap justify-between items-center">
          <img className="h-30 w-60 m-0" src="logos/WEG.png" alt="WEG Logo" />
          <img className="h-30 w-40 mr-16" src="logos/ABB.png" alt="ABB Logo" />
          <img className="h-20 w-50 mr-16" src="logos/LEATONG.png" alt="LEATONG Logo" />
          <img className="h-40 w-70 mr-16" src="logos/bussman.png" alt="BUSSMAN Logo" />
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <img className="h-30 w-60 mr-16" src="logos/QLIGHT.png" alt="QLIGHT Logo" />
          <img className="h-40 w-70 mr-16" src="logos/WM.png" alt="WM Logo" />
          <img className="h-50 w-80 mr-16" src="logos/ELEMATIC.png" alt="ELEMATIC Logo" />
          <img className="h-50 w-80 mr-16" src="logos/CNTD.png" alt="CNTD Logo" />
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <img className="h-50 w-80 mr-16" src="logos/ARGOS.png" alt="ARGOS Logo" />
          <img className="h-50 w-80 mr-16" src="logos/GIO.png"></img>
          <img className="h-50 w-80 mr-16" src="logos/OMRON.png"></img>
          <img className="h-50 w-80 mr-16" src="logos/HOFF.png"></img>
        </div>
      </div>
      <div className="bg-slate-300 bg-opacity-70 relative z-10 flex flex-col items-center w-full h-70 p-4">
            <h3>Next Section.....</h3>
      </div>
    </div>
  );
}

