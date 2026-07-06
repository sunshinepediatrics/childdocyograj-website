import type { Metadata } from "next";
import { Section } from "@/components/Primitives";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <Section className="bg-white">
      <article className="prose prose-slate mx-auto max-w-3xl">
        <h1>Terms</h1>
        <p>Website content is educational and does not replace a medical consultation. Emergency symptoms require urgent medical care.</p>
      </article>
    </Section>
  );
}
