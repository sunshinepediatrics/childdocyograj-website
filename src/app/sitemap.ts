import type { MetadataRoute } from "next";
import { resources, services } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/milestones", "/vaccination", "/blog", "/faq", "/contact", "/privacy", "/terms"];
  return [
    ...routes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date() })),
    ...services.map((service) => ({ url: absoluteUrl(`/services/${service.slug}`), lastModified: new Date() })),
    ...resources.map((resource) => ({ url: absoluteUrl(`/resources/${resource.slug}`), lastModified: new Date() })),
  ];
}
