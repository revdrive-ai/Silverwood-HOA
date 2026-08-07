import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news, getNewsBySlug } from "../../../content/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const item = getNewsBySlug(params.slug);
  return { title: item ? `${item.title} — Silverwood HOA` : "Silverwood HOA" };
}

export default function NewsDetailPage({ params }) {
  const item = getNewsBySlug(params.slug);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <Link href="/news" className="text-accent font-sans font-semibold text-sm hover:underline">
        ← All news
      </Link>
      <h1 className="mt-4 font-sans font-bold text-3xl text-primary">{item.title}</h1>
      {item.date ? <p className="mt-1 text-sm text-subink">{item.date}</p> : null}
      {item.image ? (
        <div className="relative w-full h-64 mt-6 rounded-lg overflow-hidden">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
      ) : null}
      <div className="mt-6 space-y-4 text-ink leading-relaxed">
        {item.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
