import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ArticleSearch from "@/app/components/articles/ArticleSearch";
import ArticlePagination from "@/app/components/articles/ArticlePagination";
import PostCard from "@/app/components/articles/PostCard";
import { filterArticlesByQuery } from "@/app/components/articles/article-utils";
import JsonLd from "@/app/components/seo/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getAllArticles } from "@/sanity/lib/posts";

export const revalidate = 3600;

const ARTICLES_PER_PAGE = 15;

type PageProps = {
  searchParams: Promise<{ page?: string; q?: string }>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { page: pageParam, q } = await searchParams;
  const parsedPage = Number.parseInt(pageParam || "1", 10);
  const currentPage =
    Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  const title = q
    ? `Search: ${q}`
    : currentPage > 1
      ? `Articles - Page ${currentPage}`
      : "Articles - Engineering notes and articles";
  const description =
    "Articles on software engineering, web development, product delivery, and shipping scalable digital experiences by Segun Akindipe.";
  const canonical = q
    ? `/articles?q=${encodeURIComponent(q)}`
    : currentPage > 1
      ? `/articles?page=${currentPage}`
      : "/articles";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title: `${title} | ${siteConfig.name}`,
      description,
      url: absoluteUrl(canonical),
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      creator: siteConfig.twitter,
    },
  };
}

export default async function ArticlesPage({ searchParams }: PageProps) {
  const { page: pageParam, q = "" } = await searchParams;
  const allArticles = filterArticlesByQuery(await getAllArticles(), q);
  const totalArticles = allArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalArticles / ARTICLES_PER_PAGE));

  const parsedPage = Number.parseInt(pageParam || "1", 10);
  const currentPage =
    Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  if (pageParam === "1" || (pageParam && !Number.isFinite(parsedPage))) {
    redirect(q ? `/articles?q=${encodeURIComponent(q)}` : "/articles");
  }

  if (totalArticles > 0 && currentPage > totalPages) {
    const base =
      totalPages === 1
        ? q
          ? `/articles?q=${encodeURIComponent(q)}`
          : "/articles"
        : q
          ? `/articles?q=${encodeURIComponent(q)}&page=${totalPages}`
          : `/articles?page=${totalPages}`;
    redirect(base);
  }

  const start = (currentPage - 1) * ARTICLES_PER_PAGE;
  const pageArticles = allArticles.slice(start, start + ARTICLES_PER_PAGE);

  const articlesJsonLd = {
    "@type": "CollectionPage",
    name: `${siteConfig.name} Articles`,
    description:
      "Engineering lessons, product workflows, and the craft of shipping reliable web experiences.",
    url: absoluteUrl("/articles"),
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    mainEntity: pageArticles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.publishedAt,
      url: absoluteUrl(`/articles/${article.slug}`),
    })),
  };

  return (
    <section className="relative min-h-[70vh] overflow-hidden mesh-gradient pb-24 pt-10 lg:pt-16">
      <JsonLd data={articlesJsonLd} />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-0 -left-24 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <header className="mb-10 max-w-3xl lg:mb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-blue-400">
            Articles
          </p>
          <h1 className="font-heading text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Notes from the <span className="text-blue-500">build</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 lg:text-xl">
            Engineering lessons, product workflows, and the craft of shipping
            reliable web experiences, written from the trenches.
          </p>
        </header>

        <Suspense fallback={null}>
          <ArticleSearch initialQuery={q} />
        </Suspense>

        {totalArticles === 0 ? (
          <div className="glass-dark rounded-[2rem] border border-white/10 p-10 text-white/70">
            {q ? (
              <>
                No articles match &quot;{q}&quot;.{" "}
                <Link
                  href="/articles"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Clear search
                </Link>
              </>
            ) : (
              <>
                No articles yet. Open{" "}
                <Link
                  href="/studio"
                  className="text-blue-400 hover:text-blue-300"
                >
                  /studio
                </Link>{" "}
                to publish your first article in Sanity.
              </>
            )}
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
                {q ? `Results for “${q}”` : "All articles"}
              </h2>
              <p className="text-sm uppercase tracking-[0.18em] text-white/40">
                {totalArticles} {totalArticles === 1 ? "article" : "articles"}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {pageArticles.map((article) => (
                <li key={article._id} className="min-w-0">
                  <PostCard article={article} />
                </li>
              ))}
            </ul>

            <ArticlePagination
              currentPage={currentPage}
              totalPages={totalPages}
              query={q}
            />
          </>
        )}
      </div>
    </section>
  );
}
