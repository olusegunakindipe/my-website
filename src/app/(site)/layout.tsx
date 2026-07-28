import Header from "../components/layout/Header";
import Footer from "../components/layout/footer/Footer";
import ScrollArrow from "../components/scroll-arrow/ScrollArrow";
import SiteAssistant from "../components/assistant/SiteAssistant";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="bg-background relative pt-24 overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollArrow />
      <SiteAssistant />
    </>
  );
}
