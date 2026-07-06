import type { Metadata } from "next";
import Link from "next/link";
import { Card, Section, SectionHeader } from "@/components/Primitives";
import { resources } from "@/data/site";

export const metadata: Metadata = {
  title: "Parent Resource Centre",
  description: "Parent-friendly pediatric resources on fever, cough, nutrition, sleep, safety, and more.",
};

export default function ResourcesPage() {
  return (
    <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <SectionHeader eyebrow="Parent resource centre" title="Clear guidance for common child health concerns" text="Every resource follows the same parent-friendly structure: overview, home care, red flags, and when to visit a pediatrician." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Link key={resource.slug} href={`/resources/${resource.slug}`} className="block h-full rounded-[24px] focus:outline-none focus:ring-4 focus:ring-sky-200">
            <Card className="h-full">
              <h2 className="font-heading text-xl font-semibold text-slate-800">{resource.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{resource.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
