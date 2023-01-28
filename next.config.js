/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "og-image.vercel.app",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
