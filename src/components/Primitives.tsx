import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:px-8 lg:px-12 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">{eyebrow}</p> : null}
      <h2 className="text-balance font-heading text-3xl font-semibold text-slate-800 sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-4 focus:ring-sky-200",
        variant === "primary" && "bg-sky-600 text-white hover:bg-sky-700",
        variant === "secondary" && "border border-sky-200 bg-white text-sky-800 hover:bg-sky-50",
        variant === "ghost" && "bg-transparent text-sky-800 shadow-none hover:bg-sky-50",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[24px] border border-sky-100 bg-white p-6 shadow-[0_18px_55px_rgba(14,116,144,0.09)]", className)}>
      {children}
    </div>
  );
}
