import Link from "next/link";
import { relatedReading } from "@/lib/content";

export function RelatedReading({ current }: { current: string }) {
  const items = relatedReading.filter((item) => item.href !== current);

  return (
    <nav aria-label="Related pages">
      <ul className="mt-6 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-link">
              {item.sentence}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
