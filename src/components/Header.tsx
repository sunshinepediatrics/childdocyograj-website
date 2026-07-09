"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { brand, navItems } from "@/data/site";
import { ButtonLink } from "@/components/Primitives";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

const logoSrc = "/Blue_White_Simple_Modern_Handwritten_Typographic_Minimalist_Capri_Sport_Club__Logo-removebg-preview (1).png";
const navNepali: Record<string, string> = {
  Home: "गृहपृष्ठ",
  About: "परिचय",
  Services: "सेवा",
  Milestones: "विकास",
  Vaccination: "खोप",
  Resources: "स्रोत",
  Blog: "ब्लग",
  FAQ: "प्रश्न",
  Contact: "सम्पर्क",
};

export function Header() {
  const { isNepali } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/85 px-5 py-3 backdrop-blur-xl sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="YourChildDoc home">
          <span className="relative block size-12 shrink-0">
            <Image
              src={logoSrc}
              alt=""
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </span>
          <span>
            <span className="block font-heading text-lg font-semibold text-slate-800">{brand.name}</span>
            <span className="block text-xs font-medium text-slate-500">{isNepali ? "नेपालमा बाल स्वास्थ्य सेवा" : "Pediatric care in Nepal"}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 hover:bg-sky-50 hover:text-sky-800">
              {isNepali ? navNepali[item.label] : item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <LanguageToggle />
          <ButtonLink href="/contact" variant="secondary" className="gap-2">
            <Phone size={16} aria-hidden="true" />
            {isNepali ? "बुक" : "Book"}
          </ButtonLink>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <Link href="/contact" className="grid size-11 place-items-center rounded-full border border-sky-100 text-slate-700" aria-label="Open contact and menu">
            <Menu size={22} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
