import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { documents, getDocumentBySlug } from "../../../content/documents";

export function generateStaticParams() {
  return documents.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const item = getDocumentBySlug(params.slug);
  return { title: item ? `${item.title} — Silverwood HOA` : "Silverwood HOA" };
}

export default function DocumentDetailPage({ params }) {
  const item = getDocumentBySlug(params.slug);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <Link href="/documents" className="text-accent font-sans font-semibold text-sm hover:underline">
        ← All documents
      </Link>
      <h1 className="mt-4 font-sans font-bold text-3xl text-primary">{item.title}</h1>
      {item.image ? (
        <div className="relative w-full h-56 mt-6 rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="mt-6 space-y-4 text-ink leading-relaxed">
        {item.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {item.files ? (
        <div className="mt-6 border border-cream2 rounded-lg divide-y divide-cream2 overflow-hidden">
          {item.files.map((f) => (
            <a
              key={f.label}
              href={f.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-3 hover:bg-cream transition-colors"
            >
              <span className="text-primary font-sans font-semibold">{f.label}</span>
              <span className="text-accent text-sm font-sans">Download →</span>
            </a>
          ))}
        </div>
      ) : null}
      {item.note ? <p className="mt-4 text-sm italic text-subink">{item.note}</p> : null}
    </div>
  );
}
