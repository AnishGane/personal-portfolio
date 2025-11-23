import { cloneElement } from "react";
import type { SocialLinkProp } from "@/types";

const SocialLinks = ({ icon, label, href }: SocialLinkProp) => {
  const sizedIcon = cloneElement(icon, { size: 25 });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group font-tooltip"
    >
      {/* Icon */}
      <div className="cursor-pointer text-neutral-6 hover:text-neutral-8">
        {sizedIcon}
      </div>

      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[46px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 px-3 py-2 rounded-lg shadow-md text-sm bg-neutral-8 text-neutral-200 dark:text-neutral-800 whitespace-nowrap z-20">
        {label}

        <div className="absolute left-1/2 -translate-x-1/2 top-full size-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-neutral-8" />
      </div>
    </a>
  );
};

export default SocialLinks;
