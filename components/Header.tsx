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
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#705391]/95 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-4" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex shrink-0 items-center gap-3 rounded-md" aria-label="My Job Hut home">
          <img src={siteConfig.logo} alt="" width={225} height={54} className="h-14 w-auto max-w-[225px] shrink-0" />
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-semibold text-white transition hover:text-white/80"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button href="/employers" variant="secondary" className="!border-white/70 !bg-[#F8F6FA] px-4 py-2.5 !text-[#705391] hover:!border-white hover:!text-[#705391]">
            Hire Talent
          </Button>
          <Button href="/contact" className="!bg-[#F8F6FA] px-4 py-2.5 !text-[#705391] hover:!bg-white">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className={cn("border-t border-white/20 bg-[#705391] lg:hidden", open ? "block" : "hidden")}>
        <div className="section-shell grid gap-1 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button href="/employers" variant="secondary" className="!border-white/70 !bg-[#F8F6FA] py-2.5 !text-[#705391] hover:!border-white hover:!text-[#705391]" >
              Hire Talent
            </Button>
            <Button href="/contact" className="!bg-[#F8F6FA] py-2.5 !text-[#705391] hover:!bg-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
