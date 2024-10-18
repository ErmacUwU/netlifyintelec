import React from 'react'
import Link from "next/link"

const Botoneria = () => {

  const catalogos = [
        
    {
      nombre: "Linea CSW 22mm WEG",
      url: "https://static.weg.net/medias/downloadcenter/h6d/h42/WEG-mando-y-senalizacion-CSW-50036401-catalogo-es.pdf",
      thumbnail: "    https://static.weg.net/medias/images/hf1/h7b/GLOBAL_WDC_CTL_CS_22DMM_515Wx515H.webp"
    },
    {
      nombre: "Linea CSW-M 22mm WEG",
      url: "https://www.weg.net/catalog/weg/ES/es/Controls/Mando-y-Se%C3%B1alizaci%C3%B3n/L%C3%ADnea-CSW-M/c/GLOBAL_WDC_CSW_MONOBLOCO?h=15cc6ba5",
      thumbnail: "https://static.weg.net/medias/images/h9b/h9f/WDC_LINHA_CSW_MONOBLOCO_515Wx515H.webp"
    },
    // Añade más catálogos aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de Botoneria</h1>
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

export default Botoneria