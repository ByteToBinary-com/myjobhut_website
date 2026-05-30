"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-4" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex shrink-0 items-center gap-3 rounded-md" aria-label="My Job Hut home">
          <Image src="/logo.svg" alt="" width={40} height={40} priority />
          <span className="text-lg font-extrabold tracking-tight text-slate-950">{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-md text-sm font-semibold transition hover:text-[#69608F]",
                pathname === item.href ? "text-[#69608F]" : "text-slate-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button href="/employers" variant="secondary" className="px-4 py-2.5">
            Hire Talent
          </Button>
          <Button href="/contact" className="px-4 py-2.5">
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
              className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold text-slate-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button href="/employers" variant="secondary" className="py-2.5" >
              Hire Talent
            </Button>
            <Button href="/contact" className="py-2.5">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
