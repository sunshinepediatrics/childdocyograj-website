import Link from "next/link";
import { Baby, Mail, MapPin, Phone } from "lucide-react";
import { brand, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-slate-800 px-5 py-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-sky-100 text-sky-700">
              <Baby size={24} aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-xl font-semibold">{brand.name}</p>
              <p className="text-sm text-sky-100">{brand.doctor}</p>
            </div>
          </div>
          <p className="max-w-xl leading-7 text-slate-200">
            Compassionate, evidence-based neonatology and child health care for newborns, infants, children, and adolescents in Nepal.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
            Educational content on this website is for general awareness and does not replace an in-person medical consultation.
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-heading text-lg font-semibold">Visit</h2>
          <div className="space-y-3 text-sm text-slate-200">
            {brand.locations.map((location) => (
              <p key={location.name} className="flex gap-2">
                <MapPin className="mt-0.5 shrink-0 text-teal-200" size={17} aria-hidden="true" />
                <span>
                  <span className="block font-semibold">{location.name}</span>
                  <span className="block">{location.address}</span>
                  <span className="block text-slate-300">{location.timing}</span>
                </span>
              </p>
            ))}
            <p className="flex gap-2">
              <Phone className="mt-0.5 shrink-0 text-teal-200" size={17} aria-hidden="true" />
              {brand.displayPhone}
            </p>
            <p className="flex gap-2">
              <Mail className="mt-0.5 shrink-0 text-teal-200" size={17} aria-hidden="true" />
              {brand.email}
            </p>
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-heading text-lg font-semibold">Explore</h2>
          <div className="grid grid-cols-2 gap-2">
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-200 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="text-sm text-slate-200 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-200 hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
