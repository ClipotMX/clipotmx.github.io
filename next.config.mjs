/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'clipotmx.github.io'; // Cambia esto por el nombre de tu repositorio

const nextConfig = {
  reactStrictMode: true,
  
  // Configuración para GitHub Pages
  images: {
    unoptimized: true
  },
  
  // Solo aplicar basePath y assetPrefix en producción
  ...(isProd && {
    assetPrefix: `/${repoName}/`,
    basePath: `/${repoName}`,
  }),
  
  // Exportar como sitio estático
  output: 'export',
  
  // Directorio de salida
  distDir: 'dist',
  
  // Añadir trailing slash
  trailingSlash: true,
  
  // Desactivar optimizaciones que no funcionan en GitHub Pages
  swcMinify: true,
};

export default nextConfig;