/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static HTML export
  basePath: "/pangasinan-heritage", // replace with your GitHub repo name
  assetPrefix: "/pangasinan-heritage/",
  images: {
    unoptimized: true, // optional, prevents errors with next/image
  },
};

module.exports = nextConfig;
