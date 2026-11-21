"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-auto lg:hidden">
      <button
        type="button"
        className="grid h-11 w-11 place-items-center"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
        <span className="sr-only">Меню</span>
      </button>
      {open ? (
        <nav id="mobile-nav" className="fixed inset-x-0 top-[72px] bottom-0 z-30 flex flex-col justify-center gap-7 bg-ink px-8">
          {links.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="font-serif text-3xl tracking-wide"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-serif text-3xl tracking-wide">
                {link.label}
              </Link>
            ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
