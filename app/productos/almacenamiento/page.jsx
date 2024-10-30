import React from 'react'
import Link from "next/link"
const Almacenamiento = () => {

  const catalogos = [
    {
      nombre: "Gabinetes ELDON",
      url: "https://intelec332.github.io/catalogos/ELDON.pdf",
      thumbnail: "data:image/jpeg;base64,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"
    },
    {
      nombre: "Caja Mistral ABB",
      url: "https://intelec332.github.io/catalogos/MISTRAL.pdf",
      thumbnail: "https://ohmstore.mx/wp-content/uploads/230224145556_10_1748.jpg"
    },
    // Añade más catálogos aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de Almacenamiento</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {catalogos.map((catalogo, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={catalogo.thumbnail} alt={`Thumbnail de ${catalogo.nombre}`} className="w-32 h-32 object-cover mb-4 rounded-md hover:scale-110" />
            <h2 className="text-lg font-semibold mb-2 text-center">{catalogo.nombre}</h2>
            <Link href={catalogo.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Ver Catálogo
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Almacenamiento