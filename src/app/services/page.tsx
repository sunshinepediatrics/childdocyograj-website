import type { Metadata } from "next";
import Link from "next/link";
import { Card, Section, SectionHeader } from "@/components/Primitives";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Pediatric Services",
  description: "Pediatric services from newborn care to adolescent health.",
};

export default function ServicesPage() {
  return (
    <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <SectionHeader eyebrow="Services" title="Pediatric care for newborns, children, and teenagers" text="Each service page is structured for future CMS content with overview, concerns, symptoms, diagnosis, approach, FAQs, and booking CTA." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full rounded-[24px] focus:outline-none focus:ring-4 focus:ring-sky-200">
              <Card className="h-full transition hover:-translate-y-1 hover:shadow-xl">
                <Icon className="text-sky-600" size={28} aria-hidden="true" />
                <h2 className="mt-4 font-heading text-xl font-semibold text-slate-800">{service.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
              </Card>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
