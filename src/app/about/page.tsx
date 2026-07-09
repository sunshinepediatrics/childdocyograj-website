import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: `About ${brand.doctor}`,
  description: `Learn about ${brand.doctor}, ${brand.title}, serving under the Government of Nepal.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
