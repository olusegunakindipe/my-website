import { useEffect, useState } from "react";
import { navigation } from "../utils";

export const useScrollSpy = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navigation.forEach((link) => {
      const el = document.getElementById(link.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(link.id);
          }
        },
        {
          root: null,
          threshold: 0.5,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeId;
};
