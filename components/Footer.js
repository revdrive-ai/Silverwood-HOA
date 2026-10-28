import Link from "next/link";
import Image from "next/image";
import { site } from "../content/site";

export default function Footer() {
  return (
    <footer className="mt-16 bg-forest font-body text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 text-sm sm:px-8 md:grid-cols-3">
        <div>
          {/* brightness-0 + invert renders the logo in white on the green. */}
          <Image src="/images/logo.png" alt="Silverwood HOA" width={151} height={56} className="h-14 w-auto brightness-0 invert" />
          <p className="mt-4 text-white/70">Neighborly living in Bixby, OK</p>
          <p className="mt-1 text-white/70">Managed by {site.management.shortName}</p>
        </div>
        <div>
          <div className="mb-3 font-semibold uppercase tracking-[2px] text-gold">Quick Links</div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.externalLinks.memberPortal} target="_blank" rel="noreferrer" className="text-white/70 transition-colors hover:text-white">
                Member Portal
              </a>
            </li>
            <li>
              <a href={site.externalLinks.facebookGroup} target="_blank" rel="noreferrer" className="text-white/70 transition-colors hover:text-white">
                Facebook Group
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-semibold uppercase tracking-[2px] text-gold">Contact</div>
          <p className="text-white/70">Questions? Contact the board.</p>
          <Link href="/board" className="mt-1 inline-block font-semibold text-white hover:text-gold">
            Board &amp; Contact →
          </Link>
          <div className="mt-4 text-white/70">
            <p>{site.management.shortName}</p>
            <p>{site.management.address}</p>
            <p>{site.management.phone}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[13px] text-white/50">
        © {new Date().getFullYear()} Silverwood HOA · {site.footerNote}
      </div>
    </footer>
  );
}
