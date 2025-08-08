import { useScrollSpy } from "@/app/hooks/useScrollSpy";
import { navigation } from "@/app/data";
import Link from "next/link";
import React, { Dispatch, MouseEvent, SetStateAction, forwardRef } from "react";

interface IProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileHeader = forwardRef<HTMLDivElement, IProps>(
  ({ open, setIsOpen }, ref) => {
    const activeId = useScrollSpy();

    const handleClick = (
      e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
      id: string,
    ) => {
      e.preventDefault();
      setIsOpen(false);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div
        ref={ref}
        className={`bg-white  fixed top-0 left-0 w-full block lg:hidden font-bold  p-4 shadow-md z-40 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-y-24" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-black uppercase text-sm">
          {navigation.map((item, index) => (
            <Link
              key={`${item}_${index}`}
              onClick={(e) => handleClick(e, item.id)}
              href="/"
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
      </div>
    );
  },
);

MobileHeader.displayName = "MobileHeader";

export default MobileHeader;
