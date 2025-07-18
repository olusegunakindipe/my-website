"use client";
import Link from "next/link";
import Button from "../button/Button";
import { useEffect, useState, useRef, MouseEvent } from "react";
import Hamburger from "../hamburger/Hamburger";
import { navigation } from "../../data";
import MobileHeader from "./MobileHeader";
import { useScrollSpy } from "../../hooks/useScrollSpy";

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
    id: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header
        className={`fixed mx-auto top-0 left-0 inset-x-0 h-24 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-gray-200 shadow-md text-black"
            : "bg-[#17152f] text-white"
        }`}
      >
        <nav className="container max-w-7xl mx-auto flex justify-between items-center h-full px-4 xl:px-0 font-bold">
          <Link href="/" className="text-2xl  font-bold cursor-pointer">
            <h1 className="font-playfair lg:text-2xl text-xl italic">
              Olusegun Akindipe
            </h1>
          </Link>
          <div className="hidden lg:flex items-center gap-8 cursor-pointer uppercase">
            {navigation.map((item, index) => (
              <Link
                onClick={(e) => handleLinkClick(e, item.id)}
                key={`${item}_${index}`}
                href="#"
                className={`
                relative transition-colors duration-300
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
