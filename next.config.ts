import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'app.localhost:3000',
    'app.one-night-stand.local',
    'one-night-stand.local',
  ],
  reactCompiler: true,
};

export default nextConfig;
