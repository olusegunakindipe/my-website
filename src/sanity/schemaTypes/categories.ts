export const ARTICLE_CATEGORIES = [
  { title: "AI", value: "Artificial Intelligence" },
  { title: "Software Engineering", value: "Software Engineering" },
  { title: "Full Stack Development", value: "Full Stack Development" },
  { title: "Career Growth", value: "Career Growth" },
  { title: "DevOps & Cloud", value: "DevOps & Cloud" },
  { title: "Product & Design", value: "Product & Design" },
  { title: "Web Performance", value: "Web Performance" },
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number]["value"];

export const ARTICLE_CATEGORY_VALUES = ARTICLE_CATEGORIES.map(
  (category) => category.value,
);
