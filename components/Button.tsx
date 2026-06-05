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
  primary: "bg-[#3673B7] text-white shadow-lg shadow-[#3673B7]/20 hover:bg-[#1D4ED8]",
  secondary: "border border-[#3673B7] bg-[#3673B7] text-white shadow-lg shadow-[#3673B7]/20 hover:border-[#1D4ED8] hover:bg-[#1D4ED8]",
  ghost: "bg-[#3673B7] text-white shadow-lg shadow-[#3673B7]/20 hover:bg-[#1D4ED8]"
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
