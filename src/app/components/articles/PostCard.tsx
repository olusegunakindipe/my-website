import Image from "next/image";
import Link from "next/link";
import type { ArticleListItem } from "@/sanity/lib/posts";
import { urlForImage } from "@/sanity/lib/image";
import CategoryBadges from "./CategoryBadges";
import { formatPostDate, readingLabel } from "./article-utils";

type Props = {
  article: ArticleListItem;
};

export default function PostCard({ article }: Props) {
  const image = article.mainImage?.asset
    ? urlForImage(article.mainImage).width(800).height(500).url()
    : null;

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#14151b]">
        {image ? (
          <Image
            src={image}
            alt={article.mainImage?.alt || article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder={
              article.mainImage?.asset?.metadata?.lqip ? "blur" : "empty"
            }
            blurDataURL={article.mainImage?.asset?.metadata?.lqip}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        )}
        {article.featured ? (
          <span className="absolute left-3 top-3 rounded-lg bg-blue-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <CategoryBadges categories={article.categories} className="mb-3" />
        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
          <time dateTime={article.publishedAt} className="text-blue-400">
            {formatPostDate(article.publishedAt)}
          </time>
          <span className="text-white/25">·</span>
          <span>{readingLabel(article.estimatedReadingTime)}</span>
        </div>
        <h3 className="font-heading text-xl font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-blue-300 sm:text-2xl">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65 sm:text-base line-clamp-3">
          {article.excerpt}
        </p>
        <span className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-blue-400 transition-transform group-hover:translate-x-1">
          Continue reading →
        </span>
      </div>
    </Link>
  );
}
