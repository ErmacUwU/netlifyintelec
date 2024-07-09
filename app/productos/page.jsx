import React from 'react';
import Link from 'next/link';

const Productos = () => {
  return (
    <div className='w-full h-screen flex'>
      
      {/* Contenido principal */}
      <div className='w-3/4 bg-white p-4'>
        <h2 className='text-xl font-bold mb-4'>Selecciona un producto para ver más detalles.</h2>
        <p>Aquí se mostrará el contenido específico del producto seleccionado.</p>
      </div>
    </div>
  );
};

export default Productos;
