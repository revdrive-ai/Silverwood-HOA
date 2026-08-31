import Link from "next/link";
import Image from "next/image";
import { site } from "../content/site";

export default function Header() {
  return (
    <header className="border-b border-cream2 bg-white sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Silverwood HOA" width={168} height={62} priority />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-semibold text-primary">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            ))}
            <a
              href={site.externalLinks.memberPortal}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-primary text-white px-4 py-2 hover:bg-accent transition-colors"
            >
              Member Portal
            </a>
          </nav>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <nav className="md:hidden flex flex-wrap gap-x-4 gap-y-2 pb-3 text-sm font-sans font-semibold text-primary">
      {site.nav.map((item) => (
        <Link key={item.href} href={item.href} className="hover:text-accent transition-colors">
          {item.label}
        </Link>
      ))}
      <a href={site.externalLinks.memberPortal} target="_blank" rel="noreferrer" className="text-accent">
        Member Portal
      </a>
    </nav>
  );
}
