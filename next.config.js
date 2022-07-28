/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
