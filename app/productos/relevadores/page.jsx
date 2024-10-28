import Link from 'next/link'
import React from 'react'

const Relevadores = () => {

  const catalogos = [
    {
      nombre: "Serie 46",
      url: "https://intelec332.github.io/catalogos/MiniRele46.pdf",
      thumbnail: "https://mexico.newark.com/productimages/large/en_US/5192553.jpg"
    },
    {
      nombre: "Serie 56",
      url: "https://intelec332.github.io/catalogos/MiniRele56.pdf",
      thumbnail: "https://www.eytsa.com/wp-content/uploads/2020/12/56328.jpg"
    },
    {
      nombre: "Serie 62",
      url: "https://intelec332.github.io/catalogos/MiniRele62.pdf",
      thumbnail: "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/307/62.32.8.024.0050.jpg"
    },
    {
      nombre: "Serie 55",
      url: "https://intelec332.github.io/catalogos/MiniRele55.pdf",
      thumbnail: "https://assets.rs-online.com/f_auto,q_auto/70251914.jpg"
    },
    {
      nombre: "Serie 60",
      url: "https://intelec332.github.io/catalogos/MiniRele60.pdf",
      thumbnail: "https://assets.rs-online.com/f_auto,q_auto/70747633.jpg"
    },
    {
      nombre: "Relevadores de Potencia Serie 66",
      url: "https://intelec332.github.io/catalogos/MiniRele66.pdf",
      thumbnail: "https://www.jinsa.com.mx/14133-home_default/668282300000-series-66-reles-de-potencia-30-a.jpg"
    }
  ]
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de Relevadores</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {catalogos.map((catalogo, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={catalogo.thumbnail} alt={`Thumbnail de ${catalogo.nombre}`} className="w-32 h-32 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2 text-center">{catalogo.nombre}</h2>
            <Link href={catalogo.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Ver Más
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Relevadores