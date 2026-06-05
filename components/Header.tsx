"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Button";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-4" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex shrink-0 items-center gap-3 rounded-md" aria-label="Jobhut Consultancy home">
          <img src={siteConfig.logo} alt="" width={225} height={54} className="h-14 w-auto max-w-[225px] shrink-0" />
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-semibold text-slate-700 transition hover:text-[#3673B7]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button href="/employers" className="px-4 py-2.5 !text-white">
            Hire Talent
          </Button>
          <Button href="/contact" className="px-4 py-2.5 !text-white">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className={cn("border-t border-slate-200 bg-white lg:hidden", open ? "block" : "hidden")}>
        <div className="section-shell grid gap-1 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:text-[#3673B7]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button href="/employers" className="py-2.5 !text-white" >
              Hire Talent
            </Button>
            <Button href="/contact" className="py-2.5 !text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
