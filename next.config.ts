/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pangasinan-heritage",
  assetPrefix: "/pangasinan-heritage/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
