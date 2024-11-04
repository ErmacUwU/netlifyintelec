import React from 'react'
import Link from 'next/link'

const Terminales = () => {

  const catalogos = [
    {
      nombre: "Terminales de Ojillo",
      url: "https://intelec332.github.io/catalogos/tojillo.pdf",
      thumbnail: "https://www.lacasadelcontrol.com.mx/weidmuller/accesorios/zapata-tipo-ojillo-weidmuller.png",
    },
    {
      nombre: "Terminales de Horquilla",
      url: "https://intelec332.github.io/catalogos/thorquilla.pdf",
      thumbnail: "https://indelek.com/10499-large_default/AE34156-terminal-horquilla-aislada-cal-18-22-torn-316-no8-no10.jpg",
    },
    {
      nombre: "Terminales Hembra",
      url: "https://intelec332.github.io/catalogos/thembra.pdf",
      thumbnail: "https://www.jinsa.com.mx/99877-large_default/1491690000-terminal-plano-hembra-azul100pz-vfskhi15-25485.jpg",
    },
    {
      nombre: "Terminales Macho",
      url: "https://intelec332.github.io/catalogos/tmacho.pdf",
      thumbnail: "https://www.jinsa.com.mx/99877-large_default/1491690000-terminal-plano-hembra-azul100pz-vfskhi15-25485.jpg",
    },
    {
      nombre: "Terminales Navaja",
      url: "https://intelec332.github.io/catalogos/tnavaja.pdf",
      thumbnail: "https://e-centinela.com/cdn/shop/collections/SGE_Terminal_tipo_Navaja_90x90_crop_center.jpg?v=1520383585",
    },
    
    
  ]
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de Terminales</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {catalogos.map((catalogo, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={catalogo.thumbnail} alt={`Thumbnail de ${catalogo.nombre}`} className="w-32 h-32 object-cover mb-4 rounded-md hover:scale-110" />
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

export default Terminales