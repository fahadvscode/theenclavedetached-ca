import { NextResponse } from "next/server";
import { SITEMAP_XML } from "@/lib/sitemap-xml";

export function middleware() {
  return new NextResponse(SITEMAP_XML, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export const config = {
  matcher: "/sitemap.xml",
};
