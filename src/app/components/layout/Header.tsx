"use client";
import Link from "next/link";
import { useEffect, useState, useRef, MouseEvent } from "react";
import Hamburger from "../hamburger/Hamburger";
import { navigation } from "../../data";
import MobileHeader from "./MobileHeader";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import Script from "next/script";
import Button from "../button/Button";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeId = useScrollSpy();
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCalendly = () => {
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/akinfergie/get-in-touch",
    });
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "py-4 mesh-gradient backdrop-blur-2xl border-b border-white/5 shadow-2xl"
            : "py-8 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12">
          <Link
            href="/"
            className="flex items-center gap-4 group cursor-pointer relative z-10 transition-transform active:scale-95"
          >
            <div className="flex flex-col gap-0">
              <span className="text-white font-black text-2xl lg:text-3xl leading-none tracking-tighter group-hover:text-blue-500 transition-colors">
                Segun <span className="text-blue-600">Akindipe.</span>
              </span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em] leading-none">
                  Senior Software Engineer
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-md rounded-2xl p-1.5 border border-white/10">
            {navigation.map((item) => (
              <Link
                onClick={(e) => handleLinkClick(e, item.id)}
                key={item.id}
                href={`#${item.id}`}
                className={`
                  px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer
                  ${
                    activeId === item.id
                      ? "text-white bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Button onClick={handleCalendly} variant="primary" size="sm">
                Let&apos;s Talk
              </Button>
            </div>

            <button
              ref={hamburgerRef}
              className="block lg:hidden text-white"
              onClick={handleMobileMenu}
            >
              <Hamburger bgColor="bg-white" />
            </button>
          </div>
        </nav>
      </header>
      <MobileHeader open={isOpen} setIsOpen={setIsOpen} ref={menuRef} />
    </>
  );
}
