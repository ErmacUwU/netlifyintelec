import React from 'react'
import Link from 'next/link';

const Motores = () => {

  const catalogos = [
    {
      nombre: "Motores WEG Trifasicos",
      url: "https://intelec332.github.io/catalogos/W22TRI.pdf",
      thumbnail: "https://static.weg.net/medias/images/h39/hf5/BRASIL_W22_Plus_Premium_225_355_IE3_B3Dnew_1200Wx1200H.jpg"
    },
    {
      nombre: "Motores WEG Monofasicos",
      url: "https://intelec332.github.io/catalogos/W22MONO.pdf",
      thumbnail: "data:image/jpeg;base64,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"
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de MOTORES</h1>
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

export default Motores