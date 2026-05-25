import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-[#69608F] text-white shadow-lg shadow-[#69608F]/20 hover:bg-[#5A527C]",
  secondary: "border border-slate-200 bg-white text-slate-950 shadow-sm hover:border-[#DED9EA] hover:text-[#69608F]",
  ghost: "text-slate-700 hover:bg-slate-100 hover:text-[#69608F]"
};

export function Button({ children, href, type = "button", variant = "primary", className }: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
