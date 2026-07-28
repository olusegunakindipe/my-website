import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import JsonLd, { personJsonLd, websiteJsonLd } from "./components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = defaultMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={personJsonLd()} />
        {children}
      </body>
    </html>
  );
}
