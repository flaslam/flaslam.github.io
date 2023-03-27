/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  // remotePatterns: [
  //   {
  //     protocol: "https",
  //     hostname: "localhost",
  //     port: "3000",
  //     pathname: "/**",
  //   },
  // ],
  images: {
    loader: "akamai",
    path: "/",
    // domains: ["localhost"],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;
