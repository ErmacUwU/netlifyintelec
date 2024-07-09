import React from 'react'
import Link from 'next/link';

const Motores = () => {

  const catalogos = [
    {
      nombre: "Motores WEG Trifasicos",
      url: "http://motecmex.com.mx/wp-content/uploads/2020/09/WEG-w22-motor-electrico-trifasico.pdf",
      thumbnail: "https://motecmex.com.mx/wp-content/uploads/2020/09/catalogo_weg_mot_trif-2.jpg"
    },
    // Añade más catálogos aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de MOTORES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {catalogos.map((catalogo, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={catalogo.thumbnail} alt={`Thumbnail de ${catalogo.nombre}`} className="w-32 h-32 object-cover mb-4 rounded-md" />
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

export default Motores