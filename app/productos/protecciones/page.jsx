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
    },
    {
      nombre: "Breakers DWB WEG",
      url: "https://intelec332.github.io/catalogos/WEGDWB.pdf",
      thumbnail: "data:image/jpeg;base64,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"
    },
    {
      nombre: "Breakers para Riel WEG",
      url: "https://intelec332.github.io/catalogos/WEGMDW.pdf",
      thumbnail: "https://static.weg.net/medias/images/hd1/h84/WDC_Minidisjuntor_MDW_2P_515Wx515H.webp"
    },
    {
      nombre: "Fusibles Bussman KTK",
      url: "https://intelec332.github.io/catalogos/KTK.pdf",
      thumbnail: "https://www.eaton.com/mdmfiles/PDM74318745/KTK-30_R/500x500_72dpi"
    },
    {
      nombre: "Fusibles Bussman LPCC",
      url: "https://intelec332.github.io/catalogos/LPCC.pdf",
      thumbnail: "https://m.media-amazon.com/images/I/51s2oJ4voUL.jpg"
    },
    {
      nombre: "Fusibles Bussman RK5",
      url: "https://intelec332.github.io/catalogos/RK5.pdf",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_927656-MLM77219708411_062024-O.webp"
    },
    {
      nombre: "Monitores de Fase Finder",
      url: "https://intelec332.github.io/catalogos/s70FIN.pdf",
      thumbnail: "https://cdn.findernet.com/app/uploads/2019/12/22081458/70-line-monitoring-relay-768x768.webp"
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