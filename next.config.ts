import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
    ];
  },
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
