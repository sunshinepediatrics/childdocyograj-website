"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-sky-100 bg-white p-1 shadow-sm" aria-label="Choose language">
      <Languages size={15} className="ml-2 text-sky-700" aria-hidden="true" />
      {[
        ["en", "EN"],
        ["ne", "ने"],
      ].map(([value, label]) => (
        <button
          key={value}
          type="button"
          onClick={() => setLanguage(value as "en" | "ne")}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition",
            language === value ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-sky-50",
          )}
          aria-pressed={language === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
