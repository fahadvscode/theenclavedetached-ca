import { writeFileSync } from "node:fs";
import { SITEMAP_XML } from "../lib/sitemap-xml";

writeFileSync("public/sitemap.xml", SITEMAP_XML);
