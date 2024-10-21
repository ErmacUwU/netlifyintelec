"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome, 
    faHistory, 
    faTools, 
    faBoxOpen, 
    faEnvelope, 
    faCogs, 
    faBars, 
    faTimes 
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [hovered, setHovered] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white p-4 flex justify-between items-center relative z-50">
            <img className="h-24" src="/logos/intelec.png" alt="Logo Intelec" />
            <button 
                className="md:hidden p-2" 
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
            <ul 
                ref={menuRef} 
                className={`absolute md:static top-16 right-0 bg-white shadow-lg md:flex md:space-x-4 ${isMenuOpen ? "flex-col" : "hidden"} md:flex-row z-50`}
            >
                {[
                    { href: "/", label: "Inicio", icon: faHome },
                    { href: "/historia", label: "Historia", icon: faHistory },
                    { href: "/servicios", label: "Servicios", icon: faCogs },
                    { href: "/productos", label: "Productos", icon: faBoxOpen },
                    { href: "/about", label: "Contáctanos", icon: faEnvelope },
                    { href: "/motores", label: "Herramientas", icon: faTools },
                ].map((item, index) => (
                    <li key={index}>
                        <Link 
                            href={item.href} 
                            onMouseEnter={() => handleMouseEnter(index)} 
                            onMouseLeave={() => setHovered(null)} 
                            className={`flex items-center p-3 rounded-lg transition-all duration-300 
                                ${hovered === index ? 'bg-indigo-500 text-white transform scale-105' : 'bg-transparent text-gray-800 hover:bg-indigo-600'}`}
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            <FontAwesomeIcon icon={item.icon} className="mr-2" />
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;