"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";

type FAQItem = {
  question: string;
  answer: string;
  questionNe?: string;
  answerNe?: string;
};

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState(0);
  const { isNepali } = useLanguage();

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const question = isNepali ? (faq.questionNe ?? faq.question) : faq.question;
        const answer = isNepali ? (faq.answerNe ?? faq.answer) : faq.answer;

        return (
          <div key={faq.question} className="rounded-[22px] border border-sky-100 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpen(open === index ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800 focus:outline-none focus:ring-4 focus:ring-sky-200"
              aria-expanded={open === index}
            >
              <span>{question}</span>
              <ChevronDown className={cn("shrink-0 transition", open === index && "rotate-180")} size={20} aria-hidden="true" />
            </button>
            {open === index ? <p className="whitespace-pre-line px-5 pb-5 leading-7 text-slate-600">{answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
