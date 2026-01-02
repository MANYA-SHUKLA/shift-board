import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Output configuration
  output: 'standalone', // Optimize for production deployment
  
  // React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
