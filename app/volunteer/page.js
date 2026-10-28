import Image from "next/image";
import Link from "next/link";
import { volunteer } from "../../content/volunteer";
import { site } from "../../content/site";
import { PageHero, SectionHeading } from "../../components/ui";

export const metadata = { title: "Volunteer — Silverwood HOA" };

export default function VolunteerPage() {
  return (
    <div>
      <PageHero title={volunteer.title} subtitle={volunteer.subtitle} />

      {volunteer.heroImage ? (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10">
          <div className="relative w-full h-56 sm:h-80 rounded-xl overflow-hidden bg-cream2">
            <Image
              src={volunteer.heroImage}
              alt={volunteer.heroImageAlt || volunteer.title}
              fill
              priority
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      ) : null}

      {/* Why it matters — the dues connection */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <SectionHeading>Why It Matters</SectionHeading>
        <div className="max-w-3xl space-y-4 text-ink leading-relaxed">
          {volunteer.why.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Current opportunities */}
      <div className="bg-cream border-y border-cream2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
          <SectionHeading>Where We Need Help</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2">
            {volunteer.opportunities.map((o) => (
              <div key={o.title} className="relative bg-primary/[0.08] border border-primary/60 rounded-xl shadow-sm overflow-hidden flex flex-col">
                {o.completed ? (
                  <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="-rotate-12 rounded-lg border-4 border-primary bg-white/90 px-6 py-2 font-sans text-2xl font-bold uppercase tracking-widest text-primary shadow-lg">
                      ✓ Completed
                    </div>
                  </div>
                ) : null}
                {o.image ? (
                  <div className="relative w-full h-48 bg-cream2">
                    <Image
                      src={o.image}
                      alt={o.title}
                      fill
                      sizes="(min-width: 640px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className={`p-5 flex flex-col gap-3 ${o.completed ? "opacity-50" : ""}`}>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-pine">{o.title}</h3>
                    <div className="mt-1 text-xs font-sans font-bold uppercase tracking-wide text-primary">
                      {o.when}
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-ink leading-relaxed">
                    {o.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {o.helpful ? (
                    <p className="mt-1 text-sm text-subink border-t border-cream2 pt-3">
                      <span className="font-sans font-semibold text-primary">Helpful to bring: </span>
                      {o.helpful}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {volunteer.upcomingProjects?.length ? (
            <div className="mt-14">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-pine">Upcoming Projects</h3>
              {volunteer.upcomingIntro ? (
                <p className="mt-2 max-w-3xl text-subink">{volunteer.upcomingIntro}</p>
              ) : null}
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {volunteer.upcomingProjects.map((p) => (
                  <div key={p.title} className="bg-primary/[0.08] border border-primary/60 rounded-xl shadow-sm p-5">
                    <div className="text-xs font-sans font-bold uppercase tracking-wide text-primary">Coming up</div>
                    <h4 className="mt-1 font-serif font-bold text-lg text-pine">{p.title}</h4>
                    <p className="mt-2 text-sm text-ink leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* How to sign up */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <SectionHeading>How to Pitch In</SectionHeading>
        <div className="max-w-3xl space-y-4 text-ink leading-relaxed">
          {volunteer.howToHelp.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={site.externalLinks.facebookGroup}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-primary text-white px-5 py-2.5 font-sans font-semibold hover:bg-accent transition-colors"
          >
            Post in the Facebook Group
          </a>
          <Link
            href="/board"
            className="rounded-lg border border-primary text-primary px-5 py-2.5 font-sans font-semibold hover:bg-cream transition-colors"
          >
            Contact the Board
          </Link>
        </div>

        {volunteer.committeesNote ? (
          <p className="mt-8 max-w-3xl text-sm text-subink border-t border-cream2 pt-4">
            {volunteer.committeesNote}{" "}
            <Link href="/news/silverwood-committees" className="text-accent font-sans font-semibold hover:underline">
              See the committees →
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
