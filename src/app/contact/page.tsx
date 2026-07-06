import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink, Card, Section, SectionHeader } from "@/components/Primitives";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Book Consultation",
  description: "Contact YourChildDoc to book a pediatric consultation.",
};

export default function ContactPage() {
  return (
    <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <SectionHeader eyebrow="Contact" title="Book a pediatric consultation" text="Choose your preferred clinic and share your child’s concern so the visit can begin with clarity." />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          {brand.locations.map((location) => (
            <Card key={location.name}>
              <h2 className="font-heading text-xl font-semibold text-slate-800">{location.name}</h2>
              <p className="mt-3 leading-7 text-slate-600">{location.address}</p>
              <p className="mt-2 font-semibold text-teal-700">{location.timing}</p>
            </Card>
          ))}
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href={`tel:${brand.phone}`} className="gap-2">
              <Phone size={17} aria-hidden="true" /> Call {brand.displayPhone}
            </ButtonLink>
            <ButtonLink href={brand.whatsapp} variant="secondary" className="gap-2">
              <MessageCircle size={17} aria-hidden="true" /> WhatsApp
            </ButtonLink>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
