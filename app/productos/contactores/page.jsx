import React from 'react';
import Link from 'next/link';

const Contactores = () => {
  const catalogos = [
    {
      nombre: "Contactores WEG CWB",
      url: "https://static.weg.net/medias/downloadcenter/h44/h3c/WEG-contactores-CWB-50066694-es.pdf",
      thumbnail: "https://static.weg.net/medias/images/h87/h32/GLOBAL_WDC_CONTACTOR_CWB_515Wx515H.webp"
    },
    {
      nombre: "Contactores ABB AF",
      url: "https://new.abb.com/low-voltage/es/productos/control-y-proteccion-de-motores/contactores-tripolares-y-reles-de-sobrecarga/contactores-tripolares-af",
      thumbnail: "https://webimages.imagebank.abb.com/public/default/product/9AAC184308/presentation"
    },
    {
      nombre: "Contactores EATON DIL",
      url: "https://www.eaton.com/mx/es-mx/catalog/industrial-control--drives--automation---sensors/dil-contactors.html",
      thumbnail: "https://www.eaton.com/content/dam/eaton/products/industrialcontrols-drives-automation-sensors/en-globalprime/contactors/contactors/eaton-moeller-series-range-of-DILM-contactors-3-pole-for-motors-up-to-170%20A_750px%20X%20750px.jpg"
    },
    // Añade más catálogos aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de Contactores</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {catalogos.map((catalogo, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={catalogo.thumbnail} alt={`Thumbnail de ${catalogo.nombre}`} className="w-32 h-32 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2 text-center">{catalogo.nombre}</h2>
            <Link href={catalogo.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Ver Mas
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contactores;
