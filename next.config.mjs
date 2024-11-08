/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/sankar-portofolio', // Replace with your repository name
};

export default nextConfig;
