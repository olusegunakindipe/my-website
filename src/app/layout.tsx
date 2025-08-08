import type { Metadata } from "next";
import { Pacifico, Marcellus } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer/Footer";
import ScrollArrow from "./components/scroll-arrow/ScrollArrow";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-pacifico",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-marcellus",
});
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My personal site",
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
    <html lang="en">
      <body
        className={`${pacifico.variable} ${marcellus.variable}  antialiased`}
      >
        <Header />
        <main className=" bg-testcolor min-h-[40vh] relative pt-24 ">
          {children}
        </main>
        <Footer />
        <ScrollArrow />
      </body>
    </html>
  );
}
