"use client";
import Link from "next/link";
import { useEffect, useState, useRef, MouseEvent } from "react";
import Hamburger from "../hamburger/Hamburger";
import { navigation } from "../../data";
import MobileHeader from "./MobileHeader";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import Image from "next/image";
import Script from "next/script";
import { Button } from "@/components/ui/button";

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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
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
        className={`fixed mx-auto top-0 left-0 inset-x-0 h-24 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-gray-200 shadow-md text-black"
            : "bg-[#17152f] text-white"
        }`}
      >
        <nav className=" max-w-7xl mx-auto flex justify-between items-center h-full px-4 xl:px-0 font-bold">
          <Link href="/" className="cursor-pointer p-0">
            <Image
              src={`/assets/${scrolled ? "logo-1.png" : "logo-2.png"}`}
              alt="image"
              width={200}
              height={50}
              className="w-40 lg:w-[200px]"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8 cursor-pointer uppercase">
            {navigation.map((item, index) => (
              <Link
                onClick={(e) => handleLinkClick(e, item.id)}
                key={`${item}_${index}`}
                href="#"
                className={`
                font-marcellus relative transition-colors duration-300
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:h-[2px] before:w-full before:scale-x-0 before:origin-left
                before:bg-current before:transition-transform before:duration-300
                hover:before:scale-x-100
                ${activeId === item.id ? "before:scale-x-100" : ""}
              `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <Button
              onClick={handleClick}
              variant={`${scrolled ? "secondary" : "primary"}`}
              className="opacity-0 animate-slide-in-mid delay-200"
            >
              {"Let's Talk"}
            </Button>
          </div>
          <button
            ref={hamburgerRef}
            className="block lg:hidden"
            onClick={handleMobileMenu}
          >
            <Hamburger bgColor={`${scrolled ? "bg-black" : "bg-white"} `} />
          </button>
        </nav>
      </header>
      <MobileHeader open={isOpen} setIsOpen={setIsOpen} ref={menuRef} />
    </>
  );
}
