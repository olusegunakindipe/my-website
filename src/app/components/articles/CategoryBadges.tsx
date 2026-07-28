type Props = {
  categories?: string[];
  className?: string;
  size?: "sm" | "md";
};

export default function CategoryBadges({
  categories,
  className = "",
  size = "sm",
}: Props) {
  if (!categories?.length) return null;

  const sizeClasses =
    size === "md"
      ? "px-3 py-1.5 text-xs tracking-[0.14em]"
      : "px-2.5 py-1 text-[10px] tracking-[0.12em]";

  return (
    <ul
      className={`flex flex-nowrap items-center gap-2 overflow-x-auto overscroll-x-contain whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`.trim()}
    >
      {categories.map((category) => (
        <li key={category} className="shrink-0">
          <span
            className={`inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 font-bold uppercase text-blue-300 ${sizeClasses}`}
          >
            {category}
          </span>
        </li>
      ))}
    </ul>
  );
}
