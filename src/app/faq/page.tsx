import type { Metadata } from "next";
import { FAQPageContent } from "@/components/FAQPageContent";
import { Section } from "@/components/Primitives";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Ask Your Child Doc FAQ",
  description: "Frequently asked pediatric questions for parents.",
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FAQPageContent />
    </Section>
  );
}
