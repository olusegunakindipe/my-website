import { useEffect, useState } from "react";
import { navigation } from "../data";

/**
 * Highlights the nav section whose top has most recently passed under the header.
 * Works for tall sections (e.g. Projects) where a 50% IntersectionObserver threshold never fires.
 */
export const useScrollSpy = () => {
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sectionIds = navigation.map((link) => link.id);

    const HEADER_OFFSET = 120;

    const updateActiveSection = () => {
      let current = sectionIds[0] ?? "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - HEADER_OFFSET <= 0) {
          current = id;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeId;
};
