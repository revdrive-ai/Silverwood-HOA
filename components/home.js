import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCompassDrafting,
  faCreditCard,
  faFileContract,
  faHouse,
  faLocationDot,
  faPersonSwimming,
  faStar,
  faTrashCan,
  faTree,
  faTriangleExclamation,
  faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";

// Content files name icons by key so they stay plain data.
const cardIcons = { dues: faCreditCard, pool: faPersonSwimming, meeting: faCalendarDays };
const linkIcons = { bylaws: faFileContract, arc: faCompassDrafting, trash: faTrashCan, pool: faWaterLadder };

const badgeStyles = {
  Management: "bg-[#dcfce7] text-[#166534]",
  Events: "bg-[#dbeafe] text-[#1e40af]",
  Community: "bg-[#fef3c7] text-[#92400e]",
};

// Internal paths use Link; anything starting with http opens in a new tab.
function SmartLink({ href, className, children, ...rest }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

export function Hero({ established, tagline, homes, memberPortal }) {
  return (
    <section className="relative min-h-[600px] flex items-center text-white">
      <Image
        src="/images/entrance.jpg"
        alt="The Silverwood brick entrance sign with its tree emblem"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(30,63,32,0.82)_0%,rgba(30,63,32,0.60)_55%,rgba(30,63,32,0.20)_100%)]" />
      <div className="relative w-full mx-auto max-w-[1200px] px-4 sm:px-8 pt-16 pb-24">
        <div className="max-w-[560px]">
          <div className="flex items-center gap-3 font-body font-medium text-sm uppercase tracking-[3px] text-gold">
            <span className="h-0.5 w-10 bg-gold" aria-hidden="true" />
            Est. {established}
          </div>
          <h1 className="mt-4 font-display font-bold text-[40px] md:text-[64px] leading-[1.1]">Welcome to Silverwood</h1>
          <p className="mt-5 font-body text-lg text-white/80">{tagline}</p>
          <ul className="mt-6 flex flex-wrap gap-2 font-body text-sm">
            {[
              [faHouse, `${homes} Homes`],
              [faTree, "Bixby, OK"],
              [faStar, "Established Community"],
            ].map(([icon, text]) => (
              <li key={text} className="flex items-center gap-2 rounded-[20px] bg-white/15 px-3.5 py-1.5">
                <FontAwesomeIcon icon={icon} className="text-goldlight" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 font-body font-bold">
            <a
              href={memberPortal}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[linear-gradient(180deg,#f0c97f,#d4a373)] px-7 py-3.5 text-forest transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,163,115,0.55)]"
            >
              Go to Member Portal
            </a>
            <Link
              href="/board"
              className="rounded-xl border-2 border-white/85 px-7 py-3.5 text-white transition-[transform,background-color,color] duration-[250ms] hover:-translate-y-0.5 hover:bg-white hover:text-forest"
            >
              Contact the Board
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fed by site.quickFacts. Stacks to one column below 1024px, per the brief.
export function StatusCards({ facts }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {facts.map((f) => (
        <div
          key={f.label}
          className="flex gap-4 rounded-2xl border-t-4 border-forest bg-white p-6 shadow-[0_4px_24px_rgba(30,63,32,0.10)]"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-golddeep">
            <FontAwesomeIcon icon={cardIcons[f.icon] || faStar} className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="font-body">
            <div className="text-[11px] font-semibold uppercase tracking-[2px] text-forest">{f.label}</div>
            <div className="mt-1 font-display text-lg font-semibold text-charcoal">{f.value}</div>
            {f.body ? <p className="mt-1 text-sm text-muted">{f.body}</p> : null}
            {f.note ? (
              <p className="mt-2 inline-flex items-center gap-1.5 rounded-[20px] bg-[#fef3c7] px-3 py-1 text-xs font-semibold text-[#92400e]">
                <FontAwesomeIcon icon={faTriangleExclamation} aria-hidden="true" />
                {f.note}
              </p>
            ) : null}
            {f.link ? (
              <div className="mt-3">
                <SmartLink
                  href={f.link.href}
                  className="text-sm font-semibold text-forest transition-colors duration-[250ms] hover:text-golddeep"
                >
                  {f.link.label}
                </SmartLink>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export function QuickLinksBar({ links }) {
  return (
    <nav aria-label="Quick links" className="bg-forest py-[18px]">
      <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-4 sm:px-8 md:flex md:justify-evenly">
        {links.map((l) => (
          <li key={l.label}>
            <SmartLink
              href={l.href}
              className="flex items-center justify-center gap-2.5 py-1 font-body text-sm font-semibold text-white transition-colors duration-[250ms] hover:text-gold"
            >
              <FontAwesomeIcon icon={linkIcons[l.icon] || faStar} className="text-gold" aria-hidden="true" />
              {l.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function NewsCard({ item }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(30,63,32,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(30,63,32,0.14)]"
    >
      <div className="relative h-[220px] overflow-hidden bg-sage">
        <Image
          src={item.image}
          alt=""
          fill
          // 3-up above 1024px, 2-up from 768px, full width below.
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${item.imagePosition || ""}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 font-body">
        <div className="flex items-center gap-3">
          {item.category ? (
            <span
              className={`inline-block rounded-[20px] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] ${
                badgeStyles[item.category] || badgeStyles.Community
              }`}
            >
              {item.category}
            </span>
          ) : null}
          {item.date ? <span className="text-xs text-muted">{item.date}</span> : null}
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-charcoal">{item.title}</h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">{item.summary}</p>
        <span className="mt-auto pt-4 text-sm font-semibold text-golddeep">Read more →</span>
      </div>
    </Link>
  );
}

export function Highlights({ homes, established }) {
  const stats = [
    { icon: faHouse, value: homes, label: "Homes in Silverwood" },
    { icon: faTree, value: `Est. ${established}`, label: "Founded in Bixby, OK" },
    { icon: faLocationDot, value: "Bixby", label: "Oklahoma" },
  ];
  return (
    <section aria-label="Community highlights" className="bg-sage py-12">
      <div className="mx-auto grid max-w-[1200px] divide-y divide-line px-4 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="py-6 text-center md:py-0">
            <FontAwesomeIcon icon={s.icon} className="h-6 w-6 text-gold" aria-hidden="true" />
            <div className="mt-2 font-display text-[42px] font-bold leading-tight text-forest">{s.value}</div>
            <div className="font-body text-sm font-medium text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
