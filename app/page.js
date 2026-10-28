import Link from "next/link";
import { site } from "../content/site";
import { news } from "../content/news";
import { Hero, StatusCards, QuickLinksBar, NewsCard, Highlights } from "../components/home";

export default function HomePage() {
  const recentNews = news.slice(0, 3);

  return (
    // -mb-16 cancels the footer's top margin so the sage strip meets the footer.
    <div className="bg-alabaster -mb-16">
      <Hero
        established={site.established}
        tagline={site.tagline}
        homes={site.homes}
        memberPortal={site.externalLinks.memberPortal}
      />

      {/* Status cards overlap the bottom of the hero. */}
      <div className="relative z-10 mx-auto -mt-10 max-w-[1200px] px-4 sm:px-8">
        <StatusCards facts={site.quickFacts} />
      </div>

      <div className="mt-12">
        <QuickLinksBar links={site.homeQuickLinks} />
      </div>

      <section className="mx-auto max-w-[1200px] px-4 sm:px-8 py-16">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-[36px] font-bold text-forest">Recent News</h2>
          <Link href="/news" className="font-body text-sm font-semibold text-golddeep hover:underline">
            View all news →
          </Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {recentNews.map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </section>

      <Highlights homes={site.homes} established={site.established} />
    </div>
  );
}
