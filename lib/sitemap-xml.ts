import { site } from "./content";

const PATHS = ["/", "/masterplan", "/location", "/faq", "/register", "/privacy", "/terms"] as const;

export const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PATHS.map(
  (path) => `  <url>
    <loc>${path === "/" ? site.url : `${site.url}${path}`}</loc>
    <lastmod>${site.dateModified}</lastmod>
  </url>`,
).join("\n")}
</urlset>
`;
