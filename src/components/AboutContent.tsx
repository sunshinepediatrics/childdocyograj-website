"use client";

import Image from "next/image";
import { Award, Building2, GraduationCap, HeartPulse } from "lucide-react";
import { Card, Section, SectionHeader } from "@/components/Primitives";
import { useLanguage } from "@/components/LanguageProvider";
import { brand } from "@/data/site";

const professionalHighlights = [
  {
    en: "Gold Medalist in both MBBS and MD Pediatrics, reflecting academic excellence and a deep commitment to child health.",
    ne: "MBBS र MD Pediatrics दुवैमा स्वर्ण पदक, शैक्षिक उत्कृष्टता र बाल स्वास्थ्यप्रतिको गहिरो प्रतिबद्धताको प्रमाण।",
  },
  {
    en: "Associate Professor of Pediatrics at NAMS, with 20+ years of medical practice and 15+ years focused on pediatrics.",
    ne: "NAMS मा Pediatrics का Associate Professor, २०+ वर्ष चिकित्सा अभ्यास र १५+ वर्ष बाल रोग सेवामा केन्द्रित।",
  },
  {
    en: "Author of 10+ national and international peer-reviewed publications in pediatric research and clinical care.",
    ne: "बाल स्वास्थ्य अनुसन्धान र clinical care सम्बन्धी राष्ट्रिय तथा अन्तर्राष्ट्रिय peer-reviewed journals मा १०+ प्रकाशन।",
  },
  {
    en: "Government of Nepal trainer for FB-IMNCI, Comprehensive Newborn Care, Early Childhood Development, and Family-Centered Developmental Care of the Newborn.",
    ne: "नेपाल सरकारका FB-IMNCI, Comprehensive Newborn Care, Early Childhood Development र Family-Centered Developmental Care of the Newborn का प्रशिक्षक।",
  },
  {
    en: "Advanced training in Pediatric Nutrition from Boston University, USA.",
    ne: "Boston University, USA बाट Pediatric Nutrition मा advanced training प्राप्त।",
  },
  {
    en: "Focused on evidence-based, family-centered care, prevention, child development, and practical parent education.",
    ne: "प्रमाणमा आधारित, परिवार केन्द्रित सेवा, रोकथाम, बाल विकास र व्यवहारिक अभिभावक शिक्षामा केन्द्रित।",
  },
];

const experienceTimeline = [
  {
    titleEn: "20+ Years of Medical Practice",
    textEn: "Serving children and families with calm, compassionate, evidence-based care.",
    titleNe: "२० वर्षभन्दा बढी चिकित्सा अभ्यास",
    textNe: "बालबालिका र परिवारलाई शान्त, करुणामय र प्रमाणमा आधारित सेवा।",
  },
  {
    titleEn: "15+ Years in Pediatrics",
    textEn: "Dedicated to the health and development of newborns, children, and adolescents.",
    titleNe: "१५ वर्षभन्दा बढी बाल रोग सेवामा",
    textNe: "नवजात शिशु, बालबालिका र किशोरकिशोरीको स्वास्थ्य र विकासमा समर्पित।",
  },
  {
    titleEn: "Associate Professor of Pediatrics (NAMS)",
    textEn: "Teaching, mentoring, and advancing pediatric education.",
    titleNe: "Pediatrics का Associate Professor (NAMS)",
    textNe: "बाल रोग शिक्षण, mentoring र pediatric education को विकासमा सक्रिय।",
  },
  {
    titleEn: "Consultant Pediatrician",
    textEn: "Serving families at Om Hospital and Nanibabu Clinic, Chitwan, Nepal.",
    titleNe: "Consultant Pediatrician",
    textNe: "Om Hospital र Nanibabu Clinic, Chitwan, Nepal मा परिवारहरूलाई सेवा।",
  },
];

const philosophyCards = [
  {
    Icon: HeartPulse,
    titleEn: "Mission",
    titleNe: "उद्देश्य",
    textEn: "Help every child grow with timely, compassionate, preventive care.",
    textNe: "हरेक बालबालिकालाई समयमै, करुणामय र रोकथाममुखी सेवा दिनु।",
  },
  {
    Icon: Award,
    titleEn: "Vision",
    titleNe: "दृष्टि",
    textEn: "A trusted pediatric home where parents feel informed and confident.",
    textNe: "अभिभावकले जानकारी र आत्मविश्वास पाउने भरोसायोग्य pediatric care।",
  },
  {
    Icon: Building2,
    titleEn: "Government Service",
    titleNe: "सरकारी सेवा अनुभव",
    textEn: "Clinical experience within Nepal's public health context.",
    textNe: "नेपालको public health context भित्रको clinical experience।",
  },
  {
    Icon: GraduationCap,
    titleEn: "Education",
    titleNe: "शिक्षा र सिकाइ",
    textEn: "Continuous pediatric learning and evidence-based practice.",
    textNe: "निरन्तर pediatric learning र evidence-based practice।",
  },
];

export function AboutContent() {
  const { isNepali } = useLanguage();

  return (
    <>
      <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">{isNepali ? "परिचय" : "About"}</p>
            <h1 className="font-heading text-5xl font-semibold text-slate-800">{brand.doctor}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-slate-600">
              {isNepali
                ? "Senior Consultant Pediatrician, neonatology र child health मा विशेष अनुभवसहित नेपालका परिवारका लागि स्पष्ट, करुणामय र evidence-based care।"
                : "Senior Consultant Pediatrician with focused experience in neonatology and child health, offering clear, compassionate, evidence-based care for families in Nepal."}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-xl">
            <Image src="/images/consultation-parents.jpg" alt="Dr. Yograj Sharma reviewing child health records with parents" fill className="object-cover" />
          </div>
        </div>
      </Section>
      <Section className="bg-white">
        <SectionHeader
          title={isNepali ? "क्लिनिकल दृष्टिकोण" : "Clinical Philosophy"}
          text={isNepali ? "बालबालिका अमूल्य छन्। उपचार सावधानीपूर्ण, बुझ्न सजिलो र परिवारका लागि आश्वस्त बनाउने हुनुपर्छ।" : "Children are precious. Care should feel careful, understandable, and reassuring for the whole family."}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {philosophyCards.map(({ Icon, titleEn, titleNe, textEn, textNe }) => (
            <Card key={titleEn}>
              <Icon className="text-sky-600" size={26} aria-hidden="true" />
              <h2 className="mt-4 font-heading text-xl font-semibold text-slate-800">{isNepali ? titleNe : titleEn}</h2>
              <p className="mt-3 leading-7 text-slate-600">{isNepali ? textNe : textEn}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="font-heading text-2xl font-semibold text-slate-800">{isNepali ? "अनुभव यात्रा" : "Experience Timeline"}</h2>
            <div className="mt-6 space-y-5">
              {experienceTimeline.map((item, index) => (
                <div key={item.titleEn} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sky-600 text-sm font-semibold text-white">{index + 1}</span>
                  <div className="pt-0.5">
                    <p className="font-semibold text-slate-800">{isNepali ? item.titleNe : item.titleEn}</p>
                    <p className="mt-1 leading-7 text-slate-600">{isNepali ? item.textNe : item.textEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h2 className="font-heading text-2xl font-semibold text-slate-800">{isNepali ? "व्यावसायिक उपलब्धिहरू" : "Professional Highlights"}</h2>
            <ul className="mt-5 space-y-3 leading-7 text-slate-600">
              {professionalHighlights.map((item) => (
                <li key={item.en} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                  <span>{isNepali ? item.ne : item.en}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
      <Section className="bg-white">
        <SectionHeader title={isNepali ? "क्लिनिक ग्यालरी" : "Clinic Gallery"} text={isNepali ? "Dr. Yograj Sharma को pediatric practice बाट वास्तविक consultation moments।" : "Real consultation moments from Dr. Yograj Sharma's pediatric practice."} />
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
