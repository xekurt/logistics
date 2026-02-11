import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository name is not 'logistics', update the basePath to your repo name
  // basePath: '/logistics', 
};

export default nextConfig;
