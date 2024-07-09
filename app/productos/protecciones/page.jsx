import React from 'react'
import Link from "next/link"
const Protecciones = () => {

  const catalogos = [
    
    {
      nombre: "Guardamotores WEG MPW",
      url: "https://static.weg.net/medias/downloadcenter/h74/hab/WEG-motor-protective-circuit-breakers-mpw-50053062-brochure-english-dc.pdf",
      thumbnail: "https://static.weg.net/medias/images/h96/ha5/GLOBAL_WDC_MPW_515Wx515H.webp"
    },
    {
      nombre: "Sobrecarga WEG RW",
      url: "https://static.weg.net/medias/downloadcenter/hcd/ha1/WEG-thermal-overload-relays-RW-50070227-en.pdf",
      thumbnail: "https://static.weg.net/medias/images/h83/h8e/GLOBAL_WDC_RW_515Wx515H.webp"
    },
    {
      nombre: "Guardamotor ABB MSS",
      url: "https://new.abb.com/low-voltage/es/productos/control-y-proteccion-de-motores/guardamotores",
      thumbnail: "https://www07.abb.com/images/librariesprovider84/Home-page/motorprotection.jpg?sfvrsn=1"
    },
    // Añade más catálogos aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de Protecciones</h1>
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
  )
}

export default Protecciones