import React, { JSX } from "react";

interface SocialIconProps {
  href: string;
  label: string;
  icon: JSX.Element;
}

const SocialIcon = ({ href, label, icon }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="border cursor-pointer border-gray-500 rounded-lg p-2 text-white hover:bg-white hover:text-black transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
