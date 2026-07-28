"use client";
import { useScrollSpy } from "@/app/hooks/useScrollSpy";
import { navigation } from "@/app/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, MouseEvent, SetStateAction, forwardRef } from "react";

interface IProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileHeader = forwardRef<HTMLDivElement, IProps>(
  ({ open, setIsOpen }, ref) => {
    const activeId = useScrollSpy();
    const pathname = usePathname();

    const handleClick = (
      e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
      item: (typeof navigation)[number],
    ) => {
      setIsOpen(false);

      if (pathname === "/") {
        e.preventDefault();
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const isItemActive = (item: (typeof navigation)[number]) => {
      return pathname === "/" && activeId === item.id;
    };

    return (
      <div
        ref={ref}
        className={`glass-dark fixed top-24 left-6 right-6 rounded-4xl block lg:hidden font-bold p-8 shadow-2xl z-[90] transform transition-all duration-500 ease-in-out border border-white/10 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-6 text-white uppercase text-sm tracking-widest">
          {navigation.map((item) => (
            <Link
              key={item.id}
              onClick={(e) => handleClick(e, item)}
              href={`/#${item.id}`}
              className={`
                relative transition-all duration-300 py-1
                ${isItemActive(item) ? "text-blue-400" : "text-white/60"}
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  },
);

MobileHeader.displayName = "MobileHeader";

export default MobileHeader;
