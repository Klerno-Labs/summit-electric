/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/summit-electric',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;