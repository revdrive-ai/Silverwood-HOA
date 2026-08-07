import { newResidentPages } from "../../content/newResident";
import { PageHero, Card } from "../../components/ui";

export const metadata = { title: "New Resident Info — Silverwood HOA" };

export default function NewResidentPage() {
  return (
    <div>
      <PageHero title="New Resident Info" subtitle="Everything you need to get settled into Silverwood." />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newResidentPages.map((p) => (
          <Card key={p.slug} href={`/new-resident/${p.slug}`} image={p.image} title={p.title} description={p.summary} />
        ))}
      </div>
    </div>
  );
}
