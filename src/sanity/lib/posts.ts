import type { PortableTextBlock } from "@portabletext/types";
import { client } from "./client";
import { postBySlugQuery, postSlugsQuery, postsQuery } from "./queries";

const fetchOptions = {
  next: {
    tags: ["articles"],
    /** Fallback ISR window; Sanity webhook revalidates immediately on publish. */
    revalidate: 3600,
  },
};

export type SanityImage = {
  alt?: string;
  caption?: string;
  asset?: {
    _id?: string;
    url?: string;
    metadata?: {
      dimensions?: { width?: number; height?: number };
      lqip?: string;
    };
  };
};

export type ArticleListItem = {
  _id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  _updatedAt?: string;
  slug: string;
  featured?: boolean;
  categories: string[];
  seoTitle?: string;
  seoDescription?: string;
  estimatedReadingTime?: number;
  mainImage: SanityImage;
};

export type Article = ArticleListItem & {
  body: PortableTextBlock[];
};

export async function getAllArticles(): Promise<ArticleListItem[]> {
  const articles = await client.fetch<ArticleListItem[]>(
    postsQuery,
    {},
    fetchOptions,
  );

  // Prefer optional publishedAt (already coalesced in GROQ); newest first.
  return [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return client.fetch<Article | null>(postBySlugQuery, { slug }, fetchOptions);
}

export async function getArticleSlugs(): Promise<string[]> {
  return client.fetch<string[]>(postSlugsQuery, {}, fetchOptions);
}
