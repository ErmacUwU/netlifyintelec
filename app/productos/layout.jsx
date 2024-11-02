"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const ProductosLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Encabezado específico */}
      <header className="bg-blue-900 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Nuestros Productos</h1>

          {/* Botón de menú hamburguesa para pantallas pequeñas */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Contenido Principal */}
      <div className="flex flex-1 container mx-auto px-4 py-8 relative">
        {/* Barra lateral - Se muestra como menú en pantallas pequeñas */}
        <aside
          className={`absolute md:relative z-20 top-0 left-0 h-full md:h-auto w-3/4 md:w-1/4 bg-white p-4 shadow-md transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:translate-x-0`}
        >
          <h2 className="text-lg font-semibold mb-4">Categorías</h2>
          <ul>
            {[
              'contactores', 
              'protecciones', 
              'botoneria', 
              'almacenamiento', 
              'cables', 
              'motores', 
              'variadores', 
              'plc', 
              'relevadores', 
              'terminales',
              'conexion', 
            ].map(category => (
              <li key={category} className="cursor-pointer mb-2">
                <Link
                  href={`/productos/${category}`}
                  className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
                  onClick={closeMenu} // Cerrar el menú al seleccionar una categoría
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Contenido dinámico */}
        <main className="flex-1 bg-white p-8 ml-4 rounded-lg shadow-md">
          {children}
        </main>
      </div>

      {/* Overlay para cerrar el menú cuando esté abierto en pantallas pequeñas */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={closeMenu} // Cerrar el menú al hacer clic fuera de él
        ></div>
      )}
    </div>
  );
};

export default ProductosLayout;
