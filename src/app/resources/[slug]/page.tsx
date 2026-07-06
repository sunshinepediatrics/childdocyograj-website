import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertCircle, Home, Stethoscope } from "lucide-react";
import { Card, Section, SectionHeader } from "@/components/Primitives";
import { resources } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  return {
    title: resource?.title ?? "Parent Resource",
    description: resource?.summary,
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) notFound();

  return (
    <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <SectionHeader eyebrow="Parent resource centre" title={resource.title} text={resource.summary} />
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          [Home, "Home care", "Offer fluids, rest, observation, and age-appropriate comfort while monitoring your child’s behavior."],
          [AlertCircle, "When to worry", resource.redFlags.join(", ")],
          [Stethoscope, "When to visit", "Book a pediatric visit when symptoms are severe, persistent, recurrent, or worrying to you."],
        ].map(([Icon, title, text]) => (
          <Card key={title as string}>
            <Icon className="text-sky-600" size={26} aria-hidden="true" />
            <h2 className="mt-4 font-heading text-xl font-semibold text-slate-800">{title as string}</h2>
            <p className="mt-3 leading-7 text-slate-600">{text as string}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
