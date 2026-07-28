import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getAllArticles } from "@/sanity/lib/posts";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/articles"),
      lastModified: articles[0]?.publishedAt
        ? new Date(articles[0].publishedAt)
        : now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(`/articles/${article.slug}`),
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
