/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mfile.z.ai',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;