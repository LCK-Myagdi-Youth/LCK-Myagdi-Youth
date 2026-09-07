import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lckmy.org";
  const paths = ["", "/about", "/projects-events", "/projects", "/events", "/impact", "/team", "/legacy", "/gallery", "/news", "/donate", "/join", "/contact", "/documents"];
  return paths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.7 }));
}