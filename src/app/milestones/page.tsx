import type { Metadata } from "next";
import { MilestoneChecker } from "@/components/MilestoneChecker";
import { Section, SectionHeader } from "@/components/Primitives";

export const metadata: Metadata = {
  title: "Development Milestone Checker",
  description: "Interactive child development milestone checker for parents.",
};

export default function MilestonesPage() {
  return (
    <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <SectionHeader eyebrow="Development milestones" title="Child Development Milestone Checker" text="Choose your child’s age to review development areas, red flags, and when to consult a pediatrician." />
      <MilestoneChecker />
    </Section>
  );
}
