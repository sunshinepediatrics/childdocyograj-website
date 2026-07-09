"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, Star } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Motion";
import { ButtonLink, Card, Section, SectionHeader } from "@/components/Primitives";
import { blogPosts, brand, faqs, services, testimonials, vaccines } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

const doctorPhotoPath = "/images/dr-yograj-sharma.jpg";
const heroImage = doctorPhotoPath;
const consultationImage = "/images/consultation-child-family.jpg";
const logoSrc = "/Blue_White_Simple_Modern_Handwritten_Typographic_Minimalist_Capri_Sport_Club__Logo-removebg-preview (1).png";

export default function Home() {
  const { isNepali } = useLanguage();
  const physicianJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: brand.doctor,
    medicalSpecialty: "Pediatrics",
    jobTitle: brand.title,
    affiliation: brand.affiliation,
    url: absoluteUrl(),
    address: brand.locations.map((location) => `${location.name}, ${location.address}`).join("; "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }} />
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f2fbff_0%,#ffffff_46%,#e9fbf6_100%)] px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <Image
          src={logoSrc}
          alt=""
          width={720}
          height={720}
          priority
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 w-[30rem] max-w-none opacity-[0.055] sm:w-[42rem] lg:left-10 lg:top-4 lg:w-[52rem]"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal className="relative z-10">
            <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
              {isNepali ? "नेपाली परिवारका लागि स्पष्ट उत्तर · विज्ञान, करुणा र स्पष्टता" : "Real answers for Nepalese families · Science, compassion, and clarity"}
            </p>
            <h1 className="max-w-4xl text-balance font-heading text-5xl font-semibold leading-tight text-slate-800 sm:text-6xl">
              {isNepali ? "दुविधा होइन, आत्मविश्वासका साथ parenting" : "Parent with confidence, not confusion"}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600">
              {isNepali
                ? `${brand.doctor} बाट newborns, infants, children र adolescents का लागि प्रमाणमा आधारित, सरल र शान्त pediatric guidance।`
                : `Clear pediatric guidance from ${brand.doctor} for newborns, infants, children, and adolescents, rooted in evidence-based care and calm parent education.`}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">{isNepali ? "Consultation बुक गर्नुहोस्" : "Book Consultation"}</ButtonLink>
              <ButtonLink href="/services/newborn-care" variant="secondary">
                {isNepali ? "सेवाहरू हेर्नुहोस्" : "Explore Services"}
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(isNepali
                ? ["Senior Consultant Pediatrician", "नेपाल सरकार अन्तर्गत सेवा", "Neonatology and Child Health", "Evidence-Based Practice"]
                : ["Senior Consultant Pediatrician", "Serving under the Government of Nepal", "Neonatology and Child Health", "Evidence-Based Practice"]
              ).map((badge) => (
                <span key={badge} className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                  <CheckCircle2 size={18} className="text-teal-600" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative z-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-2xl">
              <Image src={heroImage} alt="Dr. Yograj Sharma pediatric consultation photo" fill priority className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900/55 to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-[24px] bg-white/92 p-5 shadow-xl backdrop-blur">
              <p className="font-heading text-xl font-semibold text-slate-800">{brand.doctor}</p>
              <p className="text-sm text-slate-600">{brand.title} · {brand.specialty}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-4 md:grid-cols-4">
          {(isNepali
            ? [
                ["Trusted", "Government service र १५ वर्षभन्दा बढी pediatric practice।"],
                ["Warm", "स्पष्ट र सहयोगी family-centered care।"],
                ["Complete", "Newborn देखि adolescent health सम्मको support।"],
                ["Practical", "घरमा आत्मविश्वासका साथ प्रयोग गर्न मिल्ने सल्लाह।"],
              ]
            : [
                ["Trusted", "Government service and more than 15 years of pediatric practice."],
                ["Warm", "Clear and Supportive Family-Centered Care."],
                ["Complete", "Newborn through adolescent health support."],
                ["Practical", "Advice parents can use at home with confidence."],
              ]
          ).map(([title, text]) => (
            <Reveal key={title}>
              <Card className="h-full">
                <Star className="mb-5 text-peach-500" fill="#fb923c" size={22} aria-hidden="true" />
                <h2 className="font-heading text-xl font-semibold text-slate-800">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow={isNepali ? "किन Dr. Sharma?" : "Why parents choose Dr. Sharma"}
          title={isNepali ? "शान्त, स्पष्ट र child-focused care" : "Care that feels calm, clear, and deeply child-focused"}
          text={isNepali ? "हरेक pediatric visit मा अभिभावकले खोज्ने trust, safety, experience र genuine care लाई प्राथमिकता।" : "The experience answers the real questions parents carry into every pediatric visit: trust, safety, experience, and genuine care."}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [ShieldCheck, "Evidence-based decisions", "Medical advice grounded in pediatric standards and careful clinical judgment."],
            [HeartHandshake, "Human explanations", "Parents leave with understandable next steps, not medical confusion."],
            [Sparkles, "Child-friendly experience", "Soft visuals, simple language, and reassuring flows for busy families."],
          ].map(([Icon, title, text]) => (
            <Reveal key={title as string}>
              <Card className="h-full">
                <span className="grid size-12 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-slate-800">{title as string}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text as string}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader eyebrow={isNepali ? "मुख्य सेवाहरू" : "Featured services"} title={isNepali ? "बाल्यकालको हरेक चरणका लागि pediatric care" : "Pediatric care for every stage of childhood"} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug}>
                <Link href={`/services/${service.slug}`} className="block h-full rounded-[24px] focus:outline-none focus:ring-4 focus:ring-sky-200">
                  <Card className="h-full transition hover:-translate-y-1 hover:shadow-xl">
                    <Icon className="text-sky-600" size={28} aria-hidden="true" />
                    <h3 className="mt-4 font-heading text-xl font-semibold text-slate-800">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-xl">
              <Image src={consultationImage} alt="Dr. Yograj Sharma counselling a parent during a child health consultation" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </Reveal>
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow={isNepali ? "डाक्टरको परिचय" : "Meet your doctor"}
              title={brand.doctor}
              text={isNepali ? `${brand.title}, ${brand.affiliation}. Neonatology, child health, prevention, growth, development र parent education मा केन्द्रित।` : `${brand.title}, ${brand.affiliation}. Focused on neonatology, child health, prevention, growth, development, and parent education.`}
            />
            <ButtonLink href="/about" variant="secondary">
              {isNepali ? "Dr. Sharma बारे जान्नुहोस्" : "Learn about Dr. Sharma"}
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeader align="left" eyebrow="Signature feature" title="Child development milestone checker" text="Parents can quickly review age-wise milestones adapted from standard pediatric references including Nelson, Wong’s Pediatric Nursing, and IAP guidance with local Nepal context." />
            <ButtonLink href="/milestones">Open Milestone Checker</ButtonLink>
          </Reveal>
          <Reveal>
            <Card>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Gross motor", "Fine motor", "Language", "Social", "Cognitive", "Red flags"].map((item) => (
                  <span key={item} className="rounded-2xl bg-sky-50 px-4 py-3 font-semibold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Nepal vaccination schedule" title="A clear, parent-friendly vaccine timeline" />
        <div className="grid gap-4 lg:grid-cols-3">
          {vaccines.slice(0, 6).map((item) => (
            <Reveal key={item.age}>
              <Card className="h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">{item.age}</p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-slate-800">{item.vaccines.join(", ")}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.note}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader eyebrow="Parent education centre" title="Simple guidance for common childhood concerns" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Fever", "Cough", "Nutrition", "Breastfeeding", "Sleep", "First Aid"].map((topic) => (
            <Link key={topic} href={`/resources/${topic.toLowerCase().replaceAll(" ", "-")}`} className="rounded-[22px] bg-sky-50 p-5 font-semibold text-slate-700 transition hover:bg-sky-100 focus:outline-none focus:ring-4 focus:ring-sky-200">
              {topic}
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Parent stories" title="Reassurance from families" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <Card className="h-full">
                <div className="mb-4 flex text-peach-500">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="#fb923c" aria-hidden="true" />)}</div>
                <p className="leading-7 text-slate-600">“{item.review}”</p>
                <p className="mt-5 font-semibold text-slate-800">{item.name}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader eyebrow={isNepali ? "Ask Your Child Doc" : "Ask Your Child Doc"} title={isNepali ? "अभिभावकका सामान्य प्रश्नहरू" : "Common questions from parents"} />
        <div className="mx-auto max-w-4xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Latest blogs" title="Evidence-based notes for calmer parenting" />
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Reveal key={post.slug}>
              <Card className="h-full">
                <p className="text-sm font-semibold text-teal-700">
                  {post.category} · {post.minutes} min read
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-slate-800">{post.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-sky-600 to-teal-500 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-semibold">Ready to talk to a pediatrician?</h2>
          <p className="mt-4 text-lg leading-8 text-sky-50">Book a consultation at Om Hospital or Nanibabu Clinic, Hospital Road, Chitwan, and get clear, caring guidance for your child.</p>
          <ButtonLink href="/contact" variant="secondary" className="mt-8 gap-2">
            Book Consultation <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
