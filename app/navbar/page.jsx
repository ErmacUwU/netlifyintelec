"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory, faTools, faBoxOpen, faEnvelope, faCogs } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [hovered, setHovered] = useState(null);

    const playHoverSound = () => {
        const audio = new Audio('/sounds/click-sound.mp3'); // Ruta del archivo de audio
        audio.play();
    };

    const handleMouseEnter = (index) => {
        setHovered(index);
        playHoverSound();
    };

    return (
        <div>
            <nav className="bg-white p-4 flex justify-between items-center">
                <img className="h-24" src="/logos/intelec.png" alt="Logo Intelec" />
                <ul className="flex space-x-4">
                    {[
                        { href: "/", label: "Inicio", icon: faHome },
                        { href: "/historia", label: "Historia", icon: faHistory },
                        { href: "/servicios", label: "Servicios", icon: faCogs },
                        { href: "/productos", label: "Productos", icon: faBoxOpen },
                        { href: "/about", label: "Contáctanos", icon: faEnvelope },
                        { href: "/motores", label: "Herramientas", icon: faTools },
                    ].map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                <button
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => setHovered(null)}
                                    className={`flex items-center p-3 rounded-lg transition-all duration-300 
                                        ${hovered === index ? 'bg-indigo-500 text-white transform scale-105' : 'bg- text-gray-800 hover:bg-indigo-600'}`}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                    {item.label}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;