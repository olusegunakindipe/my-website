import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostBody from "@/app/components/articles/PostBody";
import CategoryBadges from "@/app/components/articles/CategoryBadges";
import {
  formatPostDate,
  getRelatedArticles,
  readingLabel,
} from "@/app/components/articles/article-utils";
import JsonLd, { personJsonLd } from "@/app/components/seo/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { urlForImage } from "@/sanity/lib/image";
import {
  getAllArticles,
  getArticleBySlug,
  getArticleSlugs,
} from "@/sanity/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.filter(Boolean).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found",
      robots: { index: false, follow: false },
    };
  }

  const title = article.seoTitle || article.title;
  const description = article.seoDescription || article.excerpt;
  const canonical = `/articles/${article.slug}`;
  const ogImage = article.mainImage?.asset
    ? urlForImage(article.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    category: article.categories?.[0],
    keywords: article.categories,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: absoluteUrl(canonical),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      publishedTime: article.publishedAt,
      modifiedTime: article._updatedAt || article.publishedAt,
      authors: [siteConfig.author.name],
      tags: article.categories,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: article.mainImage?.alt || article.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitter,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getAllArticles();
  const related = getRelatedArticles(article, allArticles, 3);

  const cover = article.mainImage?.asset
    ? urlForImage(article.mainImage).width(1600).height(900).url()
    : null;
  const ogImage = article.mainImage?.asset
    ? urlForImage(article.mainImage).width(1200).height(630).url()
    : undefined;

  const articleJsonLd = {
    "@type": "Article",
    headline: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    image: ogImage ? [ogImage] : undefined,
    datePublished: article.publishedAt,
    dateModified: article._updatedAt || article.publishedAt,
    author: personJsonLd(),
    publisher: {
      ...personJsonLd(),
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/articles/${article.slug}`),
    },
    keywords: article.categories?.join(", "),
    articleSection: article.categories?.[0],
    inLanguage: "en-GB",
    url: absoluteUrl(`/articles/${article.slug}`),
  };

  const breadcrumbJsonLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: absoluteUrl("/articles"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: absoluteUrl(`/articles/${article.slug}`),
      },
    ],
  };

  return (
    <article className="relative min-h-[70vh] overflow-hidden mesh-gradient pb-24">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute top-1/3 -left-24 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10">
        {cover ? (
          <div className="relative h-[48vh] min-h-[320px] max-h-[560px] w-full overflow-hidden">
            <Image
              src={cover}
              alt={article.mainImage?.alt || article.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              placeholder={
                article.mainImage?.asset?.metadata?.lqip ? "blur" : "empty"
              }
              blurDataURL={article.mainImage?.asset?.metadata?.lqip}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b22] via-[#1a1b22]/50 to-black/20" />
          </div>
        ) : (
          <div className="h-28 lg:h-36" />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className={`${cover ? "-mt-28 lg:-mt-36" : "pt-8"}`}>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white/45">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-blue-300 transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-blue-400 truncate max-w-[12rem] sm:max-w-none">
                Article
              </li>
            </ol>
          </nav>

          <header className="mb-12 rounded-[2rem] border border-white/10 bg-[#15161d]/90 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:p-12">
            <CategoryBadges
              categories={article.categories}
              size="md"
              className="mb-5"
            />
            <h1 className="font-heading text-4xl font-black tracking-tight text-white leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70 lg:text-xl">
              {article.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-sm text-white/55">
              <span>{siteConfig.author.name}</span>
              <span className="text-white/25">·</span>
              <time dateTime={article.publishedAt}>
                {formatPostDate(article.publishedAt)}
              </time>
              <span className="text-white/25">·</span>
              <span>{readingLabel(article.estimatedReadingTime)}</span>
            </div>
          </header>
        </div>

        <div className="prose-article">
          <PostBody value={article.body} />
        </div>

        <div className="mt-16 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-600/15 via-transparent to-cyan-500/10 p-8 lg:p-10">
          <h2 className="font-heading text-2xl font-bold text-white tracking-tight">
            Enjoyed this piece?
          </h2>
          <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
            I help teams design and ship scalable web products. Let’s talk about
            what you’re building next.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-blue-500"
            >
              Get in touch
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center rounded-xl border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white/80 transition hover:border-white/30 hover:text-white"
            >
              More articles
            </Link>
          </div>
        </div>

        {related.length > 0 ? (
          <aside className="mt-20">
            <h2 className="mb-3 font-heading text-2xl font-bold tracking-tight text-white">
              Related articles
            </h2>
            <p className="mb-8 text-sm text-white/50">
              Matched by shared categories
            </p>
            <ul className="grid gap-4">
              {related.map((item) => (
                <li key={item._id}>
                  <Link
                    href={`/articles/${item.slug}`}
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition hover:border-blue-500/30 hover:bg-white/[0.05]"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                        {formatPostDate(item.publishedAt)}
                      </p>
                      <h3 className="mt-2 font-heading text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      {item.categories?.length ? (
                        <p className="mt-2 text-xs text-white/40">
                          {item.categories.slice(0, 3).join(" · ")}
                        </p>
                      ) : null}
                    </div>
                    <span className="shrink-0 text-blue-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </article>
  );
}
