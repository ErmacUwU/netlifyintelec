import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aquí puedes agregar cualquier configuración adicional de Next.js
  output: 'export',  // Añade esta línea para configurar la exportación estática
};

export default withVideos(nextConfig);
