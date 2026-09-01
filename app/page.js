import Image from "next/image";
import Link from "next/link";
import { site } from "../content/site";
import { news } from "../content/news";
import { SectionHeading, Card, InfoStrip } from "../components/ui";

export default function HomePage() {
  const recentNews = news.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[320px] sm:h-[420px] w-full">
        <Image
          src="/images/entrance.jpg"
          alt="Silverwood neighborhood entrance"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative h-full mx-auto max-w-6xl px-4 sm:px-6 flex flex-col justify-center">
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white max-w-2xl drop-shadow">
            Welcome to Silverwood
          </h1>
          <p className="mt-3 text-cream max-w-xl text-lg drop-shadow">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.externalLinks.memberPortal}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-primary text-white px-5 py-2.5 font-sans font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Go to Member Portal
            </a>
            <Link
              href="/board"
              className="rounded-lg bg-white/90 text-primary px-5 py-2.5 font-sans font-semibold hover:bg-white transition-colors"
            >
              Contact the Board
            </Link>
          </div>
        </div>
      </div>

      {/* Quick facts */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 -mt-10 relative z-10">
        <InfoStrip facts={site.quickFacts} />
      </div>

      {/* Recent news */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="flex items-center justify-between mb-4">
          <SectionHeading>Recent News</SectionHeading>
          <Link href="/news" className="text-accent font-sans font-semibold text-sm hover:underline">
            View all news →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {recentNews.map((n) => (
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

      {/* Quick links */}
      <div className="bg-cream border-y border-cream2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
          <SectionHeading>Quick Links</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card href="/documents" title="Documents" description="Bylaws, dues, ARC requests, minutes, and newsletters." />
            <Card href="/new-resident" title="New Resident Info" description="Phone numbers, ordinances, safety info, and more." />
            <Card href="/board" title="Board & Management" description="Board roster and how to reach the HOA." />
            <Card
              href={site.externalLinks.facebookGroup}
              external
              image="/images/facebook.jpg"
              title="Facebook Group"
              description="Connect with your neighbors online."
            />
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-8 sm:grid-cols-2 items-center">
        <div className="relative h-64 rounded-lg overflow-hidden">
          <Image
            src="/images/pool.jpg"
            alt="Silverwood community pool"
            fill
            sizes="(min-width: 640px) 576px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading>Community Amenities</SectionHeading>
          <p className="text-subink">{site.amenities}</p>
          <p className="mt-3 text-subink">
            <span className="font-semibold text-primary">Pool season:</span> {site.poolInfo.season}
          </p>
          <p className="mt-2 font-sans font-bold text-alert">{site.poolInfo.announcement}</p>
          <p className="mt-1 text-subink">
            <span className="font-semibold text-primary">Hours:</span> {site.poolInfo.hours}
          </p>
          <Link href="/news/pool-information" className="inline-block mt-4 text-accent font-sans font-semibold hover:underline">
            Pool access & rules →
          </Link>
        </div>
      </div>
    </div>
  );
}
