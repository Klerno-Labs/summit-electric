/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/summit-electric",
  output: "export",
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