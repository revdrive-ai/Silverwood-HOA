import { documents } from "../../content/documents";
import { PageHero, Card } from "../../components/ui";

export const metadata = { title: "Documents — Silverwood HOA" };

export default function DocumentsPage() {
  return (
    <div>
      <PageHero title="Documents" subtitle="Bylaws, dues, ARC requests, meeting minutes, and newsletters." />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((d) => (
          <Card key={d.slug} href={`/documents/${d.slug}`} image={d.image} title={d.title} description={d.summary} />
        ))}
      </div>
    </div>
  );
}
