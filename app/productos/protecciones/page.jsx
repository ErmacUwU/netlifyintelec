import React from 'react'
import Link from "next/link"
const Protecciones = () => {

  const catalogos = [
    
    {
      nombre: "Guardamotores WEG MPW",
      url: "https://intelec332.github.io/catalogos/MPW.pdf",
      thumbnail: "https://static.weg.net/medias/images/h96/ha5/GLOBAL_WDC_MPW_515Wx515H.webp"
    },
    {
      nombre: "Sobrecarga WEG RW",
      url: "https://intelec332.github.io/catalogos/RW.pdf",
      thumbnail: "https://static.weg.net/medias/images/h83/h8e/GLOBAL_WDC_RW_515Wx515H.webp"
    },
    {
      nombre: "Guardamotor ABB MSS",
      url: "https://intelec332.github.io/catalogos/MS.pdf",
      thumbnail: "https://www07.abb.com/images/librariesprovider84/Home-page/motorprotection.jpg?sfvrsn=1"
    },
    {
      nombre: "Sobrecarga ABB TF",
      url: "https://intelec332.github.io/catalogos/TF.pdf",
      thumbnail: "https://www07.abb.com/images/librariesprovider84/Products/Contactors/thermal-overload-relays.jpg?sfvrsn=1s"
    },
    {
      nombre: "Fusibles WEG NH aR",
      url: "https://intelec332.github.io/catalogos/WEG-NH-AR.pdf",
      thumbnail: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAEBAQEBAAMAAAAAAAAAAAAABQQGAwECB//EAC8QAAIBAwMBBQgCAwAAAAAAAAECAAMEEQUSITETQVFhcRQiNHKBkaGxUvAGFST/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGREBAQEBAQEAAAAAAAAAAAAAAAExESEC/9oADAMBAAIRAxEAPwD9xiIgIiICfGR4z5kHXDi8J/jRyPXJkt4snV6Jk0wubVd7Mx8WOT0muWIREQEREBERASD/AJDfXVJ+xs3CEAEnxPhn7S9Oe1fm+qA9MD9SW8WMtPWL9aIVqiFgMbtky1ru4rdpUuXDsaZXcF2gT7PSEzBEqB1Ygg8HNQYI9MCZvqzxQo6u1OtvtqqugUB0zkZ88dJesNToXmFHuVP4Mevp4zhLLRbazve3oPVLBWVUL7gFJyR6ZOZRNBmKkVAhU595CR+CJqYl3x3ESfo1xVr0G7Vt4U4DYIJlCVCIiAiIgJzurfH1fp+hOinO6p8fV9R+hM/WLGMngzOFBHSaGHEk6vRovRQumX3AbhTLHHgD06nvmG0m5q3S6nV4uxTFQglWfG3PcFPh5Svot4p02mbyuFq5fd2z4bG44znnpiZdOtkVxU7GqezByrUVAbPHnz0/pnrQLveLWNtcgA5VSuFUdD18ueOox35gdroODbuR0LSnJuh/Dv8ANKU6TGLpERKhERATm9SP/fW9R+hOknNakCL6tkYy0z9YsZmPBk3VVZrZNvaEBtzbEDDAHeCRKJ6GYb96Bt2tbgMVr0qgYBc4QD3ifLkffpMNslvf+xWrI1GoTTcg7yBySTgAZx5DmNLp06l21ylOsHLMGJudygcYOM85I/HlxlvDZ2Wl/wCyC3RPFZFUqaoHXvzkKuWPU4XvMf4zrGn3StTt0uKDh1pLSrDJX3d2OBxglhzzkekDv9C+Gf5pTk3QvhW+aUp0mMXSIiVCIiAk7VNO9pHbUcCuB07nHhKMQOQbIyCCGXgg9RJ+oiuLd3pqmUG6m2wu4bpwPrOw1LTlu0Zk92vjhh3+RnI1LS7p1HSve1EZTgqKK5H1nOzjcvUYjVuyYIWXC4UCmVH2z/cyhpVG92VPabi5RiRjcVbj65ntd6ZqFNabJcV6i1BkEbRj8T1sNHuazolwlwwJwW7ZwPxHKvY6nQvhW+aUpi0rT002gaNN2ZSc+8ScfczbNxzpERKEREBERASBq+j3Ne4evaujb8FlY4wfKX4kslWXjPY0noWlOnUxvUc4M0REqEREBERA/9k="
    }
    // Añade más catálogos aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de Protecciones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {catalogos.map((catalogo, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={catalogo.thumbnail} alt={`Thumbnail de ${catalogo.nombre}`} className="w-32 h-32 object-cover mb-4 rounded-md hover:scale-110" />
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