"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useTransition } from "react";

type Props = {
  initialQuery?: string;
};

export default function ArticleSearch({ initialQuery = "" }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const q = String(formData.get("q") || "").trim();
    const params = new URLSearchParams(searchParams.toString());

    if (q) {
      params.set("q", q);
    } else {
      params.delete("q");
    }
    params.delete("page");

    const query = params.toString();
    startTransition(() => {
      router.push(query ? `/articles?${query}` : "/articles");
    });
  };

  return (
    <form onSubmit={onSubmit} className="mb-10 w-full max-w-xl">
      <label htmlFor="article-search" className="sr-only">
        Search articles
      </label>
      <div className="flex gap-2">
        <input
          id="article-search"
          name="q"
          type="search"
          defaultValue={initialQuery}
          placeholder="Search by title, topic, or category…"
          className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-blue-500/50"
        />
        <button
          type="submit"
          disabled={isPending}
          className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-blue-500 disabled:opacity-60"
        >
          {isPending ? "…" : "Search"}
        </button>
      </div>
    </form>
  );
}
