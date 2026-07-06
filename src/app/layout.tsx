import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "YourChildDoc | Dr. Yograj Sharma Pediatrician in Nepal",
    template: "%s | YourChildDoc",
  },
  description:
    "Compassionate, evidence-based pediatric care from Dr. Yograj Sharma for newborns, infants, children, and adolescents in Nepal.",
  keywords: ["pediatrician Nepal", "child doctor Nepal", "Dr Yograj Sharma", "newborn care", "vaccination Nepal"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "YourChildDoc | Dr. Yograj Sharma",
    description: "Warm, evidence-based pediatric care for families in Nepal.",
    url: absoluteUrl(),
    siteName: "YourChildDoc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourChildDoc | Dr. Yograj Sharma",
    description: "Warm, evidence-based pediatric care for families in Nepal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
