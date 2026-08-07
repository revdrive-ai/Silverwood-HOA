import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newResidentPages, getResidentPageBySlug } from "../../../content/newResident";

export function generateStaticParams() {
  return newResidentPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const item = getResidentPageBySlug(params.slug);
  return { title: item ? `${item.title} — Silverwood HOA` : "Silverwood HOA" };
}

export default function ResidentDetailPage({ params }) {
  const item = getResidentPageBySlug(params.slug);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <Link href="/new-resident" className="text-accent font-sans font-semibold text-sm hover:underline">
        ← New Resident Info
      </Link>
      <h1 className="mt-4 font-sans font-bold text-3xl text-primary">{item.title}</h1>
      {item.image ? (
        <div className="relative w-full h-56 mt-6 rounded-lg overflow-hidden">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
      ) : null}

      {item.body ? (
        <div className="mt-6 space-y-4 text-ink leading-relaxed">
          {item.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : null}

      {item.groups ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {item.groups.map((g) => (
            <div key={g.heading}>
              <h3 className="font-sans font-bold text-primary uppercase text-sm tracking-wide mb-2">{g.heading}</h3>
              <ul className="divide-y divide-cream2 border border-cream2 rounded-lg overflow-hidden">
                {g.items.map((it) => (
                  <li key={it.label} className="flex items-center justify-between px-3 py-2 bg-white text-sm">
                    <span className="text-subink">{it.label}</span>
                    <span className="font-sans font-semibold text-primary">{it.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

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
              <span className="text-accent text-sm font-sans">Open →</span>
            </a>
          ))}
        </div>
      ) : null}

      {item.note ? <p className="mt-4 text-sm italic text-subink">{item.note}</p> : null}
    </div>
  );
}
