"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { site } from "../content/site";

function isActive(pathname, href) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white font-body shadow-[0_2px_18px_rgba(30,63,32,0.08)]">
      <div className="mx-auto flex h-[82px] max-w-[1200px] items-center justify-between px-4 sm:px-8">
        <Link href="/" aria-label="Silverwood HOA home">
          <Image src="/images/logo.png" alt="Silverwood HOA" width={151} height={56} priority className="h-14 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`relative text-[14.5px] text-forest after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isActive(pathname, item.href) ? "font-semibold" : "font-medium"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.externalLinks.memberPortal}
            target="_blank"
            rel="noreferrer"
            className="rounded-[10px] bg-forest px-5 py-[11px] text-sm font-bold text-white transition-[background-color,box-shadow,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-forest2 hover:shadow-[0_6px_16px_rgba(30,63,32,0.25)]"
          >
            Member Portal
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-forest md:hidden"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-6 w-6" />
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-white md:hidden">
          <ul className="px-4 py-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={`block py-3 text-forest ${isActive(pathname, item.href) ? "font-semibold" : "font-medium"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <a
                href={site.externalLinks.memberPortal}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[10px] bg-forest px-5 py-3 text-center font-bold text-white"
              >
                Member Portal
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
