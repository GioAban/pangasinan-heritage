/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pangasinan-heritage",
  // Alisin muna natin ang assetPrefix, Next.js na ang bahala rito dahil sa basePath
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
