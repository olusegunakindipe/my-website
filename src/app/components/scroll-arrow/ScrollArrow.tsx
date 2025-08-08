"use client";

import { useEffect, useState } from "react";

export default function ScrollArrow() {
  const [showButton, setShowButton] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setShowButton(scrollTop > 100);
      setAtTop(scrollTop <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = () => {
    if (atTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    showButton && (
      <button
        onClick={scrollTo}
        aria-label="Scroll"
        className="fixed bottom-6 right-6 cursor-pointer z-50 w-12 h-12 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        ↑
      </button>
    )
  );
}
