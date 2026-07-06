import type { Metadata } from "next";
import { PlusCircle, Printer, Syringe } from "lucide-react";
import { ButtonLink, Card, Section, SectionHeader } from "@/components/Primitives";
import { additionalVaccines, vaccines } from "@/data/site";

export const metadata: Metadata = {
  title: "Nepal Vaccination Centre",
  description: "Interactive Nepal immunization schedule and parent vaccine guidance.",
};

export default function VaccinationPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <SectionHeader eyebrow="Vaccination centre" title="Nepal immunization schedule" text="A parent-friendly view of Nepal’s National Immunization Programme schedule, with additional private/risk-based vaccines listed separately." />
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="rounded-2xl bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm">
            Routine schedule should always be confirmed against the child’s vaccine card and current local health-post guidance. Catch-up vaccination needs individualized review.
          </p>
          {vaccines.map((item) => (
            <Card key={item.age}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-700">
                  <Syringe size={23} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">{item.age}</p>
                  <h2 className="mt-2 font-heading text-2xl font-semibold text-slate-800">{item.vaccines.join(", ")}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{item.note}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">Common side effects can include mild fever, pain, or swelling. Severe reactions need urgent medical care.</p>
                </div>
              </div>
            </Card>
          ))}
          <ButtonLink href="/contact" variant="secondary" className="gap-2">
            <Printer size={17} aria-hidden="true" />
            Printable PDF coming soon
          </ButtonLink>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <SectionHeader align="left" eyebrow="Additional vaccines" title="Other vaccines to discuss with your pediatrician" text="These vaccines may be advised based on age, health risks, travel, outbreaks, school/hostel exposure, and availability." />
          <div className="space-y-5">
            {additionalVaccines.map((item) => (
              <Card key={item.age}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                    <PlusCircle size={23} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">{item.age}</p>
                    <h2 className="mt-2 font-heading text-2xl font-semibold text-slate-800">{item.vaccines.join(", ")}</h2>
                    <p className="mt-3 leading-7 text-slate-600">{item.note}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
