import React, { ReactNode, useEffect, useRef, useState } from "react";

interface IProps {
  heading: string;
  description: string;
  children?: ReactNode;
}

const Content = ({ heading, description, children }: IProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <h6
        className={`text-gray-500 font-marcellus uppercase mb-4 text-2xl opacity-0 ${
          isVisible ? "animate-slide-in-left" : ""
        }`}
        style={{
          animationDelay: "0s",
          animationDuration: "0.8s",
        }}
      >
        {heading}
      </h6>

      <h2
        className={`font-bold text-2xl lg:text-4xl leading-12 opacity-0 ${
          isVisible ? "animate-slide-in-up" : ""
        }`}
        style={{
          animationDelay: "1s",
          animationDuration: "1s",
        }}
      >
        {description}
      </h2>

      {children && (
        <div
          className={`opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
          style={{
            animationDelay: "2s",
            animationDuration: "1s",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Content;
