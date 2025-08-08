"use client";
import { JSX, useEffect, useRef, useState } from "react";

interface IProps {
  icon: JSX.Element;
  heading: string;
  description: string;
  className?: string;
  listItems?: string[];
  delay?: number;
  animate?: string;
}
const Detail = ({
  icon,
  heading,
  description,
  className,
  listItems,
  delay = 0,
  animate,
}: IProps) => {
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
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`flex items-start gap-6 ${animate && "opacity-0"} ${className} ${
        isVisible ? animate : ""
      }`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "1s",
      }}
    >
      <div className="border border-gray-500 bg-black rounded-lg p-1.5">
        {icon}
      </div>
      <div className="flex flex-col">
        <h5 className="mb-1 font-bold uppercase font-marcellus">{heading}</h5>
        <p className="text-sm leading-6">{description}</p>
        {listItems && (
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-500">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Detail;
