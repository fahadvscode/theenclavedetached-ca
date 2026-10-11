import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.theenclavedetached.ca" }],
        destination: "https://theenclavedetached.ca/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.theenclavedetached.ca" }],
        destination: "https://theenclavedetached.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
