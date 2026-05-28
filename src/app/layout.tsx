import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer/Footer";
import ScrollArrow from "./components/scroll-arrow/ScrollArrow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Segun Akindipe - Portfolio",
  description:
    "Official website of Segun Akindipe - Senior Web Developer & Software Engineer. Elevating digital experiences with robust and scalable solutions.",
};

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
        <Header />
        <main className="bg-background relative pt-24 overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <ScrollArrow />
      </body>
    </html>
  );
}
