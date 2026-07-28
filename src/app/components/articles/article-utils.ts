import type { ArticleListItem } from "@/sanity/lib/posts";

export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function readingLabel(minutes?: number) {
  const value = Math.max(1, minutes || 1);
  return `${value} min read`;
}

export function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1) || null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

/** Rank other articles by shared categories (free, no embeddings). */
export function getRelatedArticles(
  current: Pick<ArticleListItem, "_id" | "categories">,
  allArticles: ArticleListItem[],
  limit = 3,
): ArticleListItem[] {
  const currentCategories = new Set(current.categories ?? []);

  return allArticles
    .filter((article) => article._id !== current._id)
    .map((article) => {
      const shared = (article.categories ?? []).filter((category) =>
        currentCategories.has(category),
      ).length;
      return { article, shared };
    })
    .sort((a, b) => {
      if (b.shared !== a.shared) return b.shared - a.shared;
      return (
        new Date(b.article.publishedAt).getTime() -
        new Date(a.article.publishedAt).getTime()
      );
    })
    .slice(0, limit)
    .map(({ article }) => article);
}

export function filterArticlesByQuery(
  articles: ArticleListItem[],
  query: string,
): ArticleListItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return articles;

  return articles.filter((article) => {
    const haystack = [
      article.title,
      article.excerpt,
      ...(article.categories ?? []),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalized);
  });
}
