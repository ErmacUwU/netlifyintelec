import React from 'react';
import Link from 'next/link';

const ProductosLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Encabezado específico */}
      <header className="bg-blue-900 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Nuestros Productos</h1>
        </div>
      </header>

      {/* Contenido Principal */}
      <div className="flex flex-1 container mx-auto px-4 py-8">
        {/* Barra lateral */}
        <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
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
              'herramienta', 
              'terminales', 
              'sensores'
            ].map(category => (
              <li key={category} className="cursor-pointer mb-2">
                <Link href={`/productos/${category}`} className="block px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200">
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

      
    </div>
  );
};

export default ProductosLayout;
