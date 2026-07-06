import type { Metadata } from "next";
import Image from "next/image";
import { Award, Building2, GraduationCap, HeartPulse } from "lucide-react";
import { Card, Section, SectionHeader } from "@/components/Primitives";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: `About ${brand.doctor}`,
  description: `Learn about ${brand.doctor}, ${brand.title}, serving under the Government of Nepal.`,
};

export default function AboutPage() {
  const timeline = [
    "Government pediatric service",
    "More than 15 years of pediatric practice",
    "Om Hospital, Hospital Road, Chitwan, Nepal",
    "Nanibabu Clinic, Hospital Road, Chitwan, Nepal",
  ];

  return (
    <>
      <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">About</p>
            <h1 className="font-heading text-5xl font-semibold text-slate-800">{brand.doctor}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-slate-600">
              {brand.title}, {brand.affiliation}, focused on neonatology and child health for Nepalese families.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-xl">
            <Image src="/images/consultation-parents.jpg" alt="Dr. Yograj Sharma reviewing child health records with parents" fill className="object-cover" />
          </div>
        </div>
      </Section>
      <Section className="bg-white">
        <SectionHeader title="Clinical philosophy" text="Children are precious. Care should feel careful, understandable, and reassuring for the whole family." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            [HeartPulse, "Mission", "Help every child grow with timely, compassionate, preventive care."],
            [Award, "Vision", "A trusted pediatric home where parents feel informed and confident."],
            [Building2, "Government service", "Clinical experience within Nepal’s public health context."],
            [GraduationCap, "Education", "Continuous pediatric learning and evidence-based practice."],
          ].map(([Icon, title, text]) => (
            <Card key={title as string}>
              <Icon className="text-sky-600" size={26} aria-hidden="true" />
              <h2 className="mt-4 font-heading text-xl font-semibold text-slate-800">{title as string}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text as string}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="font-heading text-2xl font-semibold text-slate-800">Experience timeline</h2>
            <div className="mt-6 space-y-5">
              {timeline.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sky-600 text-sm font-semibold text-white">{index + 1}</span>
                  <p className="pt-1 font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h2 className="font-heading text-2xl font-semibold text-slate-800">Professional achievements</h2>
            <ul className="mt-5 space-y-3 leading-7 text-slate-600">
              <li>Senior pediatric consultation for newborns through adolescents.</li>
              <li>Parent education focused on red flags, prevention, and practical home care.</li>
              <li>Prepared for future gallery, certifications, and CMS-managed credentials.</li>
            </ul>
          </Card>
        </div>
      </Section>
      <Section className="bg-white">
        <SectionHeader title="Clinic gallery" text="Real consultation moments from Dr. Yograj Sharma’s pediatric practice." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["/images/dr-yograj-sharma.jpg", "Dr. Yograj Sharma at Nanibabu Clinic"],
            ["/images/clinic-child-visit.jpg", "Child-friendly consultation visit"],
            ["/images/consultation-child-family.jpg", "Family-centered pediatric counselling"],
          ].map(([src, alt]) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-xl">
              <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
