import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ButtonLink, Card, Section, SectionHeader } from "@/components/Primitives";
import { faqs, services } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return {
    title: service ? service.title : "Service",
    description: service?.summary,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Icon className="mb-5 text-sky-600" size={42} aria-hidden="true" />
            <h1 className="font-heading text-5xl font-semibold text-slate-800">{service.title}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-slate-600">{service.summary}</p>
            <ButtonLink href="/contact" className="mt-8">
              Book Consultation
            </ButtonLink>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-xl">
            <Image src="/images/clinic-child-visit.jpg" alt={`${service.title} pediatric consultation with Dr. Yograj Sharma`} fill className="object-cover" />
          </div>
        </div>
      </Section>
      <Section className="bg-white">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Overview", service.summary],
            ["Common concerns", service.concerns.join(", ")],
            ["Treatment approach", "Careful history, child-friendly examination, clear diagnosis, practical home guidance, and follow-up when needed."],
          ].map(([title, text]) => (
            <Card key={title}>
              <h2 className="font-heading text-xl font-semibold text-slate-800">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader title={`Questions about ${service.title.toLowerCase()}`} />
        <div className="mx-auto max-w-4xl">
          <FAQAccordion faqs={faqs.slice(0, 5)} />
        </div>
      </Section>
    </>
  );
}
