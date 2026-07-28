import Link from "next/link";
import PostCard from "../components/articles/PostCard";
import { getAllArticles } from "@/sanity/lib/posts";

const HOME_ARTICLE_COUNT = 3;

export default async function Articles() {
  const articles = (await getAllArticles()).slice(0, HOME_ARTICLE_COUNT);

  return (
    <section
      id="articles"
      className="relative overflow-hidden py-20 mesh-gradient"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 -left-20 h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-blue-400">
              Articles
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Latest from the build
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Notes on engineering, AI workflows, and shipping products that
              hold up in the real world.
            </p>
          </div>
          {articles.length > 0 ? (
            <Link
              href="/articles"
              className="inline-flex shrink-0 items-center text-sm font-bold uppercase tracking-[0.16em] text-blue-400 transition hover:text-blue-300"
            >
              View all articles →
            </Link>
          ) : null}
        </div>

        {articles.length === 0 ? (
          <div className="glass-dark rounded-[2rem] border border-white/10 p-10 text-white/70">
            No articles yet. Publish articles in{" "}
            <Link href="/studio" className="text-blue-400 hover:text-blue-300">
              Studio
            </Link>{" "}
            to show them here.
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article._id} className="min-w-0">
                <PostCard article={article} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
