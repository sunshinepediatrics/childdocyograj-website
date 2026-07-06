import type { Metadata } from "next";
import { Search } from "lucide-react";
import { Card, Section, SectionHeader } from "@/components/Primitives";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Pediatric Blog",
  description: "Parent-friendly pediatric education from YourChildDoc.",
};

export default function BlogPage() {
  return (
    <Section className="bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <SectionHeader eyebrow="Blog" title="Parent education articles" text="Search-ready blog architecture with categories, tags, featured posts, reading time, and newsletter space." />
      <div className="mx-auto mb-8 flex max-w-2xl items-center gap-3 rounded-full border border-sky-100 bg-white px-5 py-3 shadow-sm">
        <Search size={20} className="text-slate-400" aria-hidden="true" />
        <span className="text-slate-500">Search articles by fever, sleep, vaccines, nutrition...</span>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <p className="text-sm font-semibold text-teal-700">
              {post.category} · {post.minutes} min read
            </p>
            <h2 className="mt-3 font-heading text-xl font-semibold text-slate-800">{post.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
            <div className="mt-5 flex gap-2 text-xs font-semibold text-slate-500">
              <span className="rounded-full bg-sky-50 px-3 py-1">Pediatrics</span>
              <span className="rounded-full bg-sky-50 px-3 py-1">Parents</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
