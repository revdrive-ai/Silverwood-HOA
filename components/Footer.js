import Link from "next/link";
import { site } from "../content/site";

export default function Footer() {
  return (
    <footer className="bg-pine text-cream mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <div className="font-sans font-bold text-white tracking-wide mb-2">SILVERWOOD HOA</div>
          <p className="text-cream/80">{site.tagline}</p>
        </div>
        <div>
          <div className="font-sans font-bold text-white tracking-wide mb-2">QUICK LINKS</div>
          <ul className="space-y-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.externalLinks.memberPortal} target="_blank" rel="noreferrer" className="text-cream/80 hover:text-white">
                Member Portal
              </a>
            </li>
            <li>
              <a href={site.externalLinks.facebookGroup} target="_blank" rel="noreferrer" className="text-cream/80 hover:text-white">
                Facebook Group
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-sans font-bold text-white tracking-wide mb-2">MANAGEMENT COMPANY</div>
          <p className="text-cream/80">{site.management.company}</p>
          <p className="text-cream/80">{site.management.address}</p>
          <p className="text-cream/80">{site.management.phone}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Silverwood HOA · {site.footerNote}
      </div>
    </footer>
  );
}
