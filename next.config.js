/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.kindpng.com', 'images.pexels.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
