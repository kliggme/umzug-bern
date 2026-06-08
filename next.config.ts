import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dienstleistungen/transport",
        destination: "/dienstleistungen/raeumung-entsorgung",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
