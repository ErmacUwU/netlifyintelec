"use client"
import React, { useState } from 'react';
import Link from "next/link"

const Navbar = () => {
    const [isHoveredInicio, setIsHoveredInicio] = useState(false);
    const [isHoveredHistoria, setIsHoveredHistoria] = useState(false);
    const [isHoveredServicios, setIsHoveredServicios] = useState(false);
    const [isHoveredProductos, setIsHoveredProductos] = useState(false);
    const [isHoveredAbout, setIsHoveredAbout] = useState(false);

    const playHoverSound = () => {
        const audio = new Audio('/sounds/click-sound.mp3'); // Ruta del archivo de audio
        audio.play();
    };

    return (
        <div>
            <nav className="bg-gray-200 p-2 flex justify-evenly items-center">
                <img className="h-28" src='https://img1.wsimg.com/isteam/ip/acf9b939-4a69-4738-9593-ca7630db22ef/79382685_1265735470276938_6706444772455743488_.jpg/:/rs=h:78,cg:true,m/qt=q:95' alt='Logo Intelec'></img>
                <ul className="flex space-x-4 j">
                    <li>
                        <div
                            onMouseEnter={() => {
                                setIsHoveredInicio(true);
                                playHoverSound();
                            }}
                            onMouseLeave={() => setIsHoveredInicio(false)}
                        >
                            <Link href="/" className=" text-white text-lg hover:text-gray-300">
                                <button>
                                    <img src={isHoveredInicio ? '/images/inicioClicked.png' : '/images/inicioUnclicked.png'} className="h-28 w-auto" alt="Inicio" />
                                </button>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div
                            onMouseEnter={() => {
                                setIsHoveredHistoria(true);
                                playHoverSound();
                            }}
                            onMouseLeave={() => setIsHoveredHistoria(false)}
                        >
                            <Link href="/historia" className="text-white text-lg hover:text-gray-300">
                                <button>
                                    <img src={isHoveredHistoria ? '/images/historiaClicked.png' : '/images/historiaUnclicked.png'} className="h-28 w-auto" alt="Historia" />
                                </button>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div
                            onMouseEnter={() => {
                                setIsHoveredServicios(true);
                                playHoverSound();
                            }}
                            onMouseLeave={() => setIsHoveredServicios(false)}
                        >
                            <Link href="/servicios" className="text-white text-lg hover:text-gray-300">
                                <button>
                                    <img src={isHoveredServicios ? '/images/serviciosClicked.png' : '/images/serviciosUnclicked.png'} className="h-28 w-auto" alt="Servicios" />
                                </button>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div
                            onMouseEnter={() => {
                                setIsHoveredProductos(true);
                                playHoverSound();
                            }}
                            onMouseLeave={() => setIsHoveredProductos(false)}
                        >
                            <Link href="/productos" className="text-white text-lg hover:text-gray-300">
                                <button>
                                    <img src={isHoveredProductos ? '/images/productosClicked.png' : '/images/productosUnclicked.png'} className="h-28 w-auto" alt="Productos" />
                                </button>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div
                            onMouseEnter={() => {
                                setIsHoveredAbout(true);
                                playHoverSound();
                            }}
                            onMouseLeave={() => setIsHoveredAbout(false)}
                        >
                            <Link href="/about" className="text-white text-lg hover:text-gray-300">
                                <button>
                                    <img src={isHoveredAbout ? '/images/contactanosClicked.png' : '/images/contactanosUnclicked.png'} className="h-28 w-auto" alt="Contáctanos" />
                                </button>
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
