import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
  query?: string;
};

export default function ArticlePagination({
  currentPage,
  totalPages,
  query = "",
}: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const hrefFor = (page: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `/articles?${qs}` : "/articles";
  };

  return (
    <nav
      aria-label="Article pagination"
      className="mt-14 flex flex-col items-center gap-4 sm:mt-16"
    >
      <p className="text-sm text-white/45">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Link
          href={hrefFor(Math.max(1, currentPage - 1))}
          aria-disabled={currentPage === 1}
          className={`rounded-xl border px-4 py-2.5 text-sm font-bold uppercase tracking-[0.14em] transition ${
            currentPage === 1
              ? "pointer-events-none border-white/5 text-white/25"
              : "border-white/15 text-white/80 hover:border-blue-500/40 hover:text-white"
          }`}
        >
          Prev
        </Link>

        {pages.map((page) => (
          <Link
            key={page}
            href={hrefFor(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`min-w-11 rounded-xl border px-3.5 py-2.5 text-center text-sm font-bold transition ${
              page === currentPage
                ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]"
                : "border-white/15 text-white/70 hover:border-blue-500/40 hover:text-white"
            }`}
          >
            {page}
          </Link>
        ))}

        <Link
          href={hrefFor(Math.min(totalPages, currentPage + 1))}
          aria-disabled={currentPage === totalPages}
          className={`rounded-xl border px-4 py-2.5 text-sm font-bold uppercase tracking-[0.14em] transition ${
            currentPage === totalPages
              ? "pointer-events-none border-white/5 text-white/25"
              : "border-white/15 text-white/80 hover:border-blue-500/40 hover:text-white"
          }`}
        >
          Next
        </Link>
      </div>
    </nav>
  );
}
