import type { Metadata } from "next";
import { Section } from "@/components/Primitives";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <Section className="bg-white">
      <article className="prose prose-slate mx-auto max-w-3xl">
        <h1>Privacy Policy</h1>
        <p>YourChildDoc collects only the information parents submit for consultation requests. Future booking, reminder, and portal features should add explicit consent, retention, and security policies before launch.</p>
      </article>
    </Section>
  );
}
