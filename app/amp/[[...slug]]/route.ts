import { renderAmp } from "@/lib/amp";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["masterplan"] },
    { slug: ["location"] },
    { slug: ["faq"] },
    { slug: ["register"] },
    { slug: ["privacy"] },
    { slug: ["terms"] },
  ];
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const html = renderAmp(slug);
  if (!html) return new Response("Not found", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
