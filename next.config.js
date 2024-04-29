/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["example.com"], // Add your domain here
    disableStaticImages: true, // This disables statically optimizing images
  },
};

module.exports = nextConfig;
