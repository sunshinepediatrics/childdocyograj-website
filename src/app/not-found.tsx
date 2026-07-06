import { ButtonLink, Section } from "@/components/Primitives";

export default function NotFound() {
  return (
    <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-5xl font-semibold text-slate-800">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">The page may have moved, but care is still close by.</p>
        <ButtonLink href="/" className="mt-8">
          Return home
        </ButtonLink>
      </div>
    </Section>
  );
}
