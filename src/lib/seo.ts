import type { Metadata } from "next";
import { siteConfig } from "./site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  keywords: [
    "Segun Akindipe",
    "Olusegun Akindipe",
    "software engineer",
    "full stack developer",
    "web consultant",
    "Next.js",
    "React",
    "TypeScript",
    "OAuth2",
    "OIDC",
    "AWS Cognito",
    "AWS Lambda",
    "DynamoDB",
    "engineering articles",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitter,
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
  verification: {
    google: "cEFW3g32mXLN6OSWHDuuRm7r2_IO5EufHE8chUq6-Cg",
  },
  category: "technology",
};
