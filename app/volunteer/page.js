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
              <div key={o.title} className="bg-white border border-cream2 rounded-xl overflow-hidden flex flex-col">
                {o.image ? (
                  <div className="relative w-full h-48 bg-cream2">
                    <Image src={o.image} alt={o.title} fill className="object-cover" />
                  </div>
                ) : null}
                <div className="p-5 flex flex-col gap-3">
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
