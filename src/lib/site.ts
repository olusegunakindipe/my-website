export const siteConfig = {
  name: "Segun Akindipe",
  title: "Segun Akindipe | Software Engineer",
  description:
    "Portfolio and engineering articles of Segun Akindipe, Software Engineer and web consultant building AI-powered, scalable digital products.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://olusegunakindipe.com"
  ).replace(/\/$/, ""),
  locale: "en_GB",
  twitter: "@AkinFergie",
  author: {
    name: "Segun Akindipe",
    url: "https://www.linkedin.com/in/olusegun-francis-akindipe/",
    sameAs: [
      "https://github.com/olusegunakindipe",
      "https://www.linkedin.com/in/olusegun-francis-akindipe/",
      "https://x.com/AkinFergie",
      "https://www.instagram.com/akinfergie/",
    ],
  },
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
