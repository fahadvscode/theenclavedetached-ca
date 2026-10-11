import type { Metadata } from "next";
import { images, site } from "@/lib/content";

const COM_ORIGIN = "https://theenclavedetached.com";

export function pageUrl(origin: string, path: string) {
  return path === "/" ? origin : `${origin}${path}`;
}

type MetaInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export function buildMetadata({ title, description, path, noindex = false }: MetaInput): Metadata {
  const url = pageUrl(site.url, path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(noindex
        ? {}
        : {
            languages: {
              "en-CA": pageUrl(site.url, path),
              en: pageUrl(COM_ORIGIN, path),
              "x-default": pageUrl(COM_ORIGIN, path),
            },
          }),
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_CA",
      siteName: "The Enclave Detached",
      images: [
        {
          url: `${site.url}${images.hero.src}`,
          width: images.hero.width,
          height: images.hero.height,
          alt: images.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.url}${images.hero.src}`],
    },
  };
}
