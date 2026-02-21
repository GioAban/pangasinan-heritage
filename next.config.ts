/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pangasinan-heritage",
  trailingSlash: true,
  trailingSlash: true, // Importante ito para mahanap ng GitHub ang index.html sa bawat folders
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
