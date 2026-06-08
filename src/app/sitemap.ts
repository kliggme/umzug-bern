import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { regions } from "@/data/regions";
import { services } from "@/data/services";
import { ratgeberArticles } from "@/data/ratgeber";
import { blogArticles } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  const staticPages = [
    "",
    "/ueber-uns",
    "/dienstleistungen",
    "/regionen",
    "/ratgeber",
    "/blog",
    "/kontakt",
    "/angebot",
    "/impressum",
    "/datenschutz",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const regionPages = regions.map((region) => ({
    url: `${baseUrl}/regionen/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/dienstleistungen/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const ratgeberPages = ratgeberArticles.map((article) => ({
    url: `${baseUrl}/ratgeber/${article.slug}`,
    lastModified: new Date(article.dateModified || article.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.dateModified || article.datePublished),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...regionPages,
    ...servicePages,
    ...ratgeberPages,
    ...blogPages,
  ];
}
