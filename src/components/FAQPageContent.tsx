"use client";

import { FAQAccordion } from "@/components/FAQAccordion";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeader } from "@/components/Primitives";
import { faqs } from "@/data/site";

export function FAQPageContent() {
  const { isNepali } = useLanguage();

  return (
    <>
      <SectionHeader
        eyebrow="Ask Your Child Doc"
        title={isNepali ? "बारम्बार सोधिने प्रश्नहरू" : "Frequently asked questions"}
        text={isNepali ? "अभिभावकका सामान्य चिन्ताका लागि स्पष्ट उत्तर। Diagnosis वा urgent symptoms का लागि pediatrician सँग परामर्श गर्नुहोस्।" : "Clear answers for common parent concerns. For diagnosis or urgent symptoms, please consult a pediatrician."}
      />
      <div className="mx-auto max-w-4xl">
        <FAQAccordion faqs={faqs} />
      </div>
    </>
  );
}
