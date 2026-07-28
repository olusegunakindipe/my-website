import { siteConfig } from "@/lib/site";

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          ...data,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function personJsonLd() {
  return {
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    sameAs: siteConfig.author.sameAs,
    jobTitle: "Software Engineer",
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: personJsonLd(),
  };
}
