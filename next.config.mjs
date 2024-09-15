/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // Replace with your hostname if different
        pathname: "/uploads/**", // Allow images from the uploads path
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**", // Allow all images from placehold.co
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/uploads/:path*", // Apply caching to all files in the uploads directory
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year, indicating that the file is immutable
          },
        ],
      },
    ];
  },
  images: {
    unoptimized: true, // Disable image optimization if you have remote images
  },
};

export default nextConfig;
