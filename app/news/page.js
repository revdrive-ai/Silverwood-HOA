import { news } from "../../content/news";
import { PageHero, Card } from "../../components/ui";

export const metadata = { title: "News — Silverwood HOA" };

export default function NewsPage() {
  return (
    <div>
      <PageHero title="News" subtitle="Updates, announcements, and reminders from the Silverwood HOA board." />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => (
          <Card
            key={n.slug}
            href={`/news/${n.slug}`}
            image={n.image}
            imagePosition={n.imagePosition}
            title={n.title}
            description={n.summary}
          />
        ))}
      </div>
    </div>
  );
}
