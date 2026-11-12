import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/pages/about/its-quality-policy",
        destination: "/quality",
        permanent: true,
      },
      {
        source: "/pages/about/quality-commitment",
        destination: "/quality",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
